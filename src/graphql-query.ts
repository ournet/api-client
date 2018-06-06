// const debug = require('debug')('ournet.web.weather');
import fetch from 'node-fetch';
import { Index } from './utils';

export interface IDataMapper<R=any, V=any> {
    (value: V): R
}

export type GraphQLQueryItem<NT extends string> = {
    name: NT
    fields: string
    variables?: { type?: string, name: string, value: any, varName?: string }[]
    mapper?: IDataMapper
}

export type GraphQLQueryItemInput = {
    fields: string
}

export type GraphQLRequestResult = {
    data: any
    error?: Error[]
}

export type GraphQLQueryExecutorData = {
    query: string
    variables: Index<any>
}

export class GraphQLQueryExecutor {
    constructor(private url: string, private headers: Index<string> = { 'Content-Type': 'application/json' }) { }

    execute(data: GraphQLQueryExecutorData): Promise<GraphQLRequestResult> {
        console.log(`executing url ${this.url}`);
        console.log(`executing data ${JSON.stringify(data)}`);
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
            timeout: 1000 * 3,
        }).then(response => response.json());
    }
}

export class GraphQlQuery<T extends {}, NT extends string> {
    private items: { [index: string]: GraphQLQueryItem<NT> } = {};

    constructor(private executor: GraphQLQueryExecutor, private type: 'query' | 'mutation') { }

    protected addQueryItem(key: keyof T, item: GraphQLQueryItem<NT>) {
        this.items[key] = item;
        return this;
    }

    protected formatQueryData(): GraphQLQueryExecutorData {
        const variables: Index<any> = {};
        let query: string = this.type + ' queryName';
        const queryParams: Index<any> = {};
        let varCount = 0;
        const keys = Object.keys(this.items);
        const body = keys.map(key => {
            const item = this.items[key];
            let body = key + ':' + item.name;
            if (item.variables) {
                item.variables.forEach(v => {
                    v.varName = '$input' + varCount;
                    queryParams[v.varName] = v.type || 'String!';
                    variables[v.varName.substr(1)] = v.value;
                    varCount++;
                });
                body += '(' + item.variables.map(v => v.name + ':' + v.varName).join(', ') + ')';
            }
            return body + '{' + item.fields + '}';
        }).join(',');

        if (Object.keys(queryParams).length) {
            query += '(' + Object.keys(queryParams).map(key => key + ':' + queryParams[key]).join(',') + ')';
        }

        query += '{' + body + '}';

        return { query, variables };
    }

    execute() {
        const queryData = this.formatQueryData();
        return this.executor.execute(queryData);
    }
}

// export interface GraphQlQueryFactory<T extends GraphQlQuery> {
//     create(url: string, headers?: Index<string>): T
// }

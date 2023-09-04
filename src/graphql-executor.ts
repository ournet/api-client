import { Index } from "./utils";
import {
  GraphQlRequestResult,
  GraphQlQueryType,
  GraphQlQueryItems,
  IGraphQlQueryExecutor
} from "./graphql";
import fetch from "node-fetch";

// const debug = require('debug')('ournet:api-client');

export type GraphQLQueryExecutorData = {
  query: string;
  variables: Index<any>;
};

export class GraphQlQueryExecutor<NT extends string = string>
  implements IGraphQlQueryExecutor<NT>
{
  constructor(
    private url: string,
    private headers: Index<string> = { "Content-Type": "application/json" },
    private timeout: number = 3000
  ) {}

  execute<T>(
    type: GraphQlQueryType,
    items: GraphQlQueryItems<NT>
  ): Promise<GraphQlRequestResult<T>> {
    // debug(`executing url ${this.url}`);
    const data = this.formatQueryData(type, items);
    // debug(`executing data ${JSON.stringify(data)}`);
    return this.fetch(data);
  }

  protected async fetch(data: GraphQLQueryExecutorData) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
      timeout: this.timeout
    });
    return response.json();
  }

  protected formatQueryData(
    type: GraphQlQueryType,
    items: GraphQlQueryItems<NT>
  ): GraphQLQueryExecutorData {
    const variables: Index<any> = {};
    let query: string = type + " queryName";
    const queryParams: Index<any> = {};
    let varCount = 0;
    const keys = Object.keys(items);
    const body = keys
      .map((key) => {
        const item = items[key];
        let body = key + ":" + item.name;
        if (item.variables) {
          item.variables.forEach((v) => {
            v.varName = "$input" + varCount;
            queryParams[v.varName] = v.type || "String!";
            variables[v.varName.substr(1)] = v.value;
            varCount++;
          });
          body +=
            "(" +
            item.variables.map((v) => v.name + ":" + v.varName).join(", ") +
            ")";
        }
        if (item.fields) {
          body += "{" + item.fields + "}";
        }
        return body;
      })
      .join(",");

    if (Object.keys(queryParams).length) {
      query +=
        "(" +
        Object.keys(queryParams)
          .map((key) => key + ":" + queryParams[key])
          .join(",") +
        ")";
    }

    query += "{" + body + "}";

    return { query, variables };
  }
}

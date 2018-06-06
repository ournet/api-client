
import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput, IDataMapper } from "./graphql-query";
import { } from './ournet-api-types';

export class OurnetMutationApi<T> extends GraphQlQuery<T, OurnetMutationMethods> {
    constructor(executor: GraphQLQueryExecutor) {
        super(executor, 'mutation');
    }
    add<MR>(key: keyof T,
        data: GraphQLQueryItemInput,
        args: { n1: number, n2: number },
        mapper?: IDataMapper<MR, number>) {

        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetMutationMethods.add,
                mapper: mapper,
                variables: [
                    { name: 'n1', value: args.n1, type: 'Int!' },
                    { name: 'n2', value: args.n2, type: 'Int!' }
                ]
            })
    }
}


export enum OurnetMutationMethods {
    add = "add"
}
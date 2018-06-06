
import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput } from "./graphql-query";

export class OurnetMutationApi<T> extends GraphQlQuery<T, OurnetMutationMethods> {
    constructor(executor: GraphQLQueryExecutor) {
        super(executor, 'mutation');
    }
    add(key: keyof T, data: GraphQLQueryItemInput, n1: number, n2: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetMutationMethods.add,
                variables: [{ name: 'n1', value: n1, type: 'Int!' }, { name: 'n2', value: n2, type: 'Int!' }]
            })
    }
}


export enum OurnetMutationMethods {
    add = "add"
}
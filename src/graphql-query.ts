import { GraphQlQueryItems, GraphQlQueryType, GraphQlQueryItem, GraphQlRequestResult, IGraphQlQueryExecutor } from "./graphql";




export class GraphQlQuery<T extends {}, NT extends string> {
    private items: GraphQlQueryItems<NT> = {};

    constructor(private executor: IGraphQlQueryExecutor, private type: GraphQlQueryType) { }

    protected addQueryItem(key: keyof T, item: GraphQlQueryItem<NT>) {
        (<any>this.items)[key] = item;
        return this;
    }

    async execute(): Promise<GraphQlRequestResult<T>> {
        const result = await this.executor.execute<T>(this.type, this.items);
        const keys = Object.keys(this.items);
        for (let key of keys) {
            if (this.items[key].mapper) {
                (<any>result.data)[key] = this.items[key].mapper((<any>result.data)[key]);
            }
        }

        return result;
    }
}

// export interface GraphQlQueryFactory<T extends GraphQlQuery> {
//     create(url: string, headers?: Index<string>): T
// }

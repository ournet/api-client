
export interface IDataMapper<R=any, V=any> {
    (value: V): R
}

export type GraphQlQueryItem<NT extends string> = {
    name: NT
    fields?: string
    variables?: { type?: string, name: string, value: any, varName?: string }[]
    mapper?: IDataMapper
}

export type GraphQlQueryItemInput = {
    fields: string
}

export type GraphQlRequestResult<T={}> = {
    data: T
    errors?: Error[]
}

export type GraphQlQueryType = 'query' | 'mutation';
export interface GraphQlQueryItems<NT extends string=string> { [index: string]: GraphQlQueryItem<NT> }

export interface IGraphQlQueryExecutor {
    execute<T>(type: GraphQlQueryType, items: GraphQlQueryItems): Promise<GraphQlRequestResult<T>>
}


import { GraphQlQuery } from "./graphql-query";
import {  } from './ournet-api-types';
import { IGraphQlQueryExecutor,  IDataMapper } from "./graphql";

export class OurnetMutationApi<T> extends GraphQlQuery<T, OurnetMutationMethods> {
    constructor(executor: IGraphQlQueryExecutor) {
        super(executor, 'mutation');
    }
    add<MR>(key:keyof T,
args:{ n1: number, n2: number } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                
                name: OurnetMutationMethods.add,
                mapper: mapper,
                variables: [
                    { name: 'n1', value: args.n1, type: 'Int!' },
{ name: 'n2', value: args.n2, type: 'Int!' }
                ]
            })
    }

newsViewNewsEvent<MR>(key:keyof T,
args:{ id: string } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                
                name: OurnetMutationMethods.news_viewNewsEvent,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

newsViewNewsItem<MR>(key:keyof T,
args:{ id: string } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                
                name: OurnetMutationMethods.news_viewNewsItem,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }
}
    

export enum OurnetMutationMethods {
    add = "add",
    news_viewNewsEvent = "news_viewNewsEvent",
    news_viewNewsItem = "news_viewNewsItem"
}
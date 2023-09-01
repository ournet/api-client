
import { GraphQlQuery } from "./graphql-query";
import { TopicType, Topic, ArticleType, ArticleStatus, ArticleContentFormat, Article, Image } from './ournet-api-types';
import { IGraphQlQueryExecutor, GraphQlQueryItemInput, IDataMapper } from "./graphql";

export class OurnetMutationApi<T> extends GraphQlQuery<T, OurnetMutationMethods> {
    constructor(executor: IGraphQlQueryExecutor<OurnetMutationMethods>) {
        super(executor, 'mutation');
    }
    add<MR>(key:keyof T,
args:{ n1: number, n2: number } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.queryAddItem(key,
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
        
        return this.queryAddItem(key,
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
        
        return this.queryAddItem(key,
            {
                
                name: OurnetMutationMethods.news_viewNewsItem,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

topicsSetTopicType<MR>(key:keyof T,
data:GraphQlQueryItemInput,
args:{ id: string, type?: TopicType } ,
mapper?:IDataMapper<MR, Topic>) {
        
        return this.queryAddItem(key,
            {
                fields: data.fields,
                name: OurnetMutationMethods.topics_setTopicType,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' },
{ name: 'type', value: args.type, type: 'TopicType' }
                ]
            })
    }

viewArticle<MR>(key:keyof T,
args:{ id: string } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.queryAddItem(key,
            {
                
                name: OurnetMutationMethods.viewArticle,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

createArticle<MR>(key:keyof T,
data:GraphQlQueryItemInput,
args:{ lang: string, country: string, type: ArticleType, title: string, status: ArticleStatus, description?: string, imageId?: string, client: string, content: string, format: ArticleContentFormat } ,
mapper?:IDataMapper<MR, Article>) {
        
        return this.queryAddItem(key,
            {
                fields: data.fields,
                name: OurnetMutationMethods.createArticle,
                mapper: mapper,
                variables: [
                    { name: 'lang', value: args.lang, type: 'String!' },
{ name: 'country', value: args.country, type: 'String!' },
{ name: 'type', value: args.type, type: 'ArticleType!' },
{ name: 'title', value: args.title, type: 'String!' },
{ name: 'status', value: args.status, type: 'ArticleStatus!' },
{ name: 'description', value: args.description, type: 'String' },
{ name: 'imageId', value: args.imageId, type: 'String' },
{ name: 'client', value: args.client, type: 'String!' },
{ name: 'content', value: args.content, type: 'String!' },
{ name: 'format', value: args.format, type: 'ArticleContentFormat!' }
                ]
            })
    }

deleteArticle<MR>(key:keyof T,
args:{ id: string } ,
mapper?:IDataMapper<MR, boolean>) {
        
        return this.queryAddItem(key,
            {
                
                name: OurnetMutationMethods.deleteArticle,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

createImage<MR>(key:keyof T,
data:GraphQlQueryItemInput,
args:{ url: string, referer?: string } ,
mapper?:IDataMapper<MR, Image>) {
        
        return this.queryAddItem(key,
            {
                fields: data.fields,
                name: OurnetMutationMethods.createImage,
                mapper: mapper,
                variables: [
                    { name: 'url', value: args.url, type: 'String!' },
{ name: 'referer', value: args.referer, type: 'String' }
                ]
            })
    }
}
    

export enum OurnetMutationMethods {
    add = "add",
    news_viewNewsEvent = "news_viewNewsEvent",
    news_viewNewsItem = "news_viewNewsItem",
    topics_setTopicType = "topics_setTopicType",
    viewArticle = "viewArticle",
    createArticle = "createArticle",
    deleteArticle = "deleteArticle",
    createImage = "createImage"
}
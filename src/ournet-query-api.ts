
import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput, IDataMapper } from "./graphql-query";
import { PublicHoliday, InputTimezoneGeoPoint, ForecastReport, DailyForecastDataPoint, HourlyForecastDataPoint, Place, NewsItem, NewsSearchParams, LatestNewsQueryParams, LatestNewsBySourceQueryParams, LatestNewsByTopicQueryParams, LatestNewsByEventQueryParams, CountNewsQueryParams, CountNewsBySourceQueryParams, CountNewsByTopicQueryParams, CountNewsByEventQueryParams, NewsTopItem, NewsEvent, LatestEventsQueryParams, LatestEventsByTopicQueryParams, CountEventsQueryParams, CountEventsByTopicQueryParams, TrendingTopicsQueryParams, ArticleContent, Topic, TopicWikiId, Quote, LatestQuotesQueryParams, LatestQuotesByTopicQueryParams, LatestQuotesByAuthorQueryParams, CountQuotesQueryParams, CountQuotesByTopicQueryParams, CountQuotesByAuthorQueryParams, QuoteTopItem } from './ournet-api-types';

export class OurnetQueryApi<T> extends GraphQlQuery<T, OurnetQueryMethods> {
    constructor(executor: GraphQLQueryExecutor) {
        super(executor, 'query');
    }
    ping<MR>(key:keyof T,
data:GraphQLQueryItemInput,
mapper?:IDataMapper<MR, string>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.ping,
                mapper: mapper,
                variables: [
                    
                ]
            })
    }

publicHolidays<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ country: string, lang: string, start?: number, end?: number } ,
mapper?:IDataMapper<MR, PublicHoliday[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.publicHolidays,
                mapper: mapper,
                variables: [
                    { name: 'country', value: args.country, type: 'String!' },
{ name: 'lang', value: args.lang, type: 'String!' },
{ name: 'start', value: args.start, type: 'Int' },
{ name: 'end', value: args.end, type: 'Int' }
                ]
            })
    }

weatherForecastReport<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ place: InputTimezoneGeoPoint } ,
mapper?:IDataMapper<MR, ForecastReport>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.weather_forecastReport,
                mapper: mapper,
                variables: [
                    { name: 'place', value: args.place, type: 'InputTimezoneGeoPoint!' }
                ]
            })
    }

weatherDatePlacesForecast<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ places: InputTimezoneGeoPoint[], date: string } ,
mapper?:IDataMapper<MR, DailyForecastDataPoint[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.weather_datePlacesForecast,
                mapper: mapper,
                variables: [
                    { name: 'places', value: args.places, type: '[InputTimezoneGeoPoint]!' },
{ name: 'date', value: args.date, type: 'String!' }
                ]
            })
    }

weatherNowPlaceForecast<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ place: InputTimezoneGeoPoint } ,
mapper?:IDataMapper<MR, HourlyForecastDataPoint>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.weather_nowPlaceForecast,
                mapper: mapper,
                variables: [
                    { name: 'place', value: args.place, type: 'InputTimezoneGeoPoint!' }
                ]
            })
    }

placesPlaceById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, Place>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placeById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

placesSearchPlace<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ query: string, country: string, limit: number, type?: string } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_searchPlace,
                mapper: mapper,
                variables: [
                    { name: 'query', value: args.query, type: 'String!' },
{ name: 'country', value: args.country, type: 'String!' },
{ name: 'limit', value: args.limit, type: 'Int!' },
{ name: 'type', value: args.type, type: 'String' }
                ]
            })
    }

placesPlacesByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string[] } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placesByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: '[String]!' }
                ]
            })
    }

placesPlacesByAdmin1Code<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ country: string, admin1Code: string, limit: number } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placesByAdmin1Code,
                mapper: mapper,
                variables: [
                    { name: 'country', value: args.country, type: 'String!' },
{ name: 'admin1Code', value: args.admin1Code, type: 'String!' },
{ name: 'limit', value: args.limit, type: 'Int!' }
                ]
            })
    }

placesMainPlaces<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ country: string, limit: number } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_mainPlaces,
                mapper: mapper,
                variables: [
                    { name: 'country', value: args.country, type: 'String!' },
{ name: 'limit', value: args.limit, type: 'Int!' }
                ]
            })
    }

placesAdmin1s<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ country: string, limit: number } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_admin1s,
                mapper: mapper,
                variables: [
                    { name: 'country', value: args.country, type: 'String!' },
{ name: 'limit', value: args.limit, type: 'Int!' }
                ]
            })
    }

placesAdmin1<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ admin1Code: string, country: string } ,
mapper?:IDataMapper<MR, Place>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_admin1,
                mapper: mapper,
                variables: [
                    { name: 'admin1Code', value: args.admin1Code, type: 'String!' },
{ name: 'country', value: args.country, type: 'String!' }
                ]
            })
    }

placesPlaceOldId<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ int: number } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placeOldId,
                mapper: mapper,
                variables: [
                    { name: 'int', value: args.int, type: 'Int!' }
                ]
            })
    }

newsItemById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, NewsItem>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

newsItemsByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string[] } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: '[String]!' }
                ]
            })
    }

newsItemsSearch<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params: NewsSearchParams } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsSearch,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'NewsSearchParams!' }
                ]
            })
    }

newsItemsLatest<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsQueryParams } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsLatest,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsQueryParams' }
                ]
            })
    }

newsItemsLatestBySource<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsBySourceQueryParams } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsLatestBySource,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsBySourceQueryParams' }
                ]
            })
    }

newsItemsLatestByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsByTopicQueryParams } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsLatestByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsByTopicQueryParams' }
                ]
            })
    }

newsItemsLatestByEvent<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsByEventQueryParams } ,
mapper?:IDataMapper<MR, NewsItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsLatestByEvent,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsByEventQueryParams' }
                ]
            })
    }

newsItemsCount<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountNewsQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsCount,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountNewsQueryParams' }
                ]
            })
    }

newsItemsCountBySource<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountNewsBySourceQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsCountBySource,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountNewsBySourceQueryParams' }
                ]
            })
    }

newsItemsCountByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountNewsByTopicQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsCountByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountNewsByTopicQueryParams' }
                ]
            })
    }

newsItemsCountByEvent<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountNewsByEventQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_itemsCountByEvent,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountNewsByEventQueryParams' }
                ]
            })
    }

newsTopSources<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsQueryParams } ,
mapper?:IDataMapper<MR, NewsTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_topSources,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsQueryParams' }
                ]
            })
    }

newsTopSourceTopics<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestNewsBySourceQueryParams } ,
mapper?:IDataMapper<MR, NewsTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_topSourceTopics,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestNewsBySourceQueryParams' }
                ]
            })
    }

newsEventById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, NewsEvent>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

newsEventsByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string[] } ,
mapper?:IDataMapper<MR, NewsEvent[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventsByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: '[String]!' }
                ]
            })
    }

newsEventsLatest<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestEventsQueryParams } ,
mapper?:IDataMapper<MR, NewsEvent[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventsLatest,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestEventsQueryParams' }
                ]
            })
    }

newsEventsLatestByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestEventsByTopicQueryParams } ,
mapper?:IDataMapper<MR, NewsEvent[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventsLatestByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestEventsByTopicQueryParams' }
                ]
            })
    }

newsEventsCount<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountEventsQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventsCount,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountEventsQueryParams' }
                ]
            })
    }

newsEventsCountByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountEventsByTopicQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_eventsCountByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountEventsByTopicQueryParams' }
                ]
            })
    }

newsTopTopics<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestEventsQueryParams } ,
mapper?:IDataMapper<MR, NewsTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_topTopics,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestEventsQueryParams' }
                ]
            })
    }

newsTrendingTopics<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: TrendingTopicsQueryParams } ,
mapper?:IDataMapper<MR, NewsTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_trendingTopics,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'TrendingTopicsQueryParams' }
                ]
            })
    }

newsArticleContentById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, ArticleContent>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_articleContentById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

newsArticleContentsByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string[] } ,
mapper?:IDataMapper<MR, ArticleContent[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.news_articleContentsByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: '[String]!' }
                ]
            })
    }

topicsTopicById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, Topic>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.topics_topicById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

topicsTopicsByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string } ,
mapper?:IDataMapper<MR, Topic[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.topics_topicsByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: 'String!' }
                ]
            })
    }

topicsTopicsByWikiIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ wikiIds: TopicWikiId[] } ,
mapper?:IDataMapper<MR, Topic[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.topics_topicsByWikiIds,
                mapper: mapper,
                variables: [
                    { name: 'wikiIds', value: args.wikiIds, type: '[TopicWikiId]!' }
                ]
            })
    }

quotesQuoteById<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ id: string } ,
mapper?:IDataMapper<MR, Quote>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_quoteById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'String!' }
                ]
            })
    }

quotesQuotesByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: string } ,
mapper?:IDataMapper<MR, Quote[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_quotesByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: 'String!' }
                ]
            })
    }

quotesLatest<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesQueryParams } ,
mapper?:IDataMapper<MR, Quote[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_latest,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesQueryParams' }
                ]
            })
    }

quotesLatestByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesByTopicQueryParams } ,
mapper?:IDataMapper<MR, Quote[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_latestByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesByTopicQueryParams' }
                ]
            })
    }

quotesLatestByAuthor<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesByAuthorQueryParams } ,
mapper?:IDataMapper<MR, Quote[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_latestByAuthor,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesByAuthorQueryParams' }
                ]
            })
    }

quotesCount<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountQuotesQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_count,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountQuotesQueryParams' }
                ]
            })
    }

quotesCountByTopic<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountQuotesByTopicQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_countByTopic,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountQuotesByTopicQueryParams' }
                ]
            })
    }

quotesCountByAuthor<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: CountQuotesByAuthorQueryParams } ,
mapper?:IDataMapper<MR, number>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_countByAuthor,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'CountQuotesByAuthorQueryParams' }
                ]
            })
    }

quotesTopTopics<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesQueryParams } ,
mapper?:IDataMapper<MR, QuoteTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_topTopics,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesQueryParams' }
                ]
            })
    }

quotesTopAuthors<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesQueryParams } ,
mapper?:IDataMapper<MR, QuoteTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_topAuthors,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesQueryParams' }
                ]
            })
    }

quotesTopAuthorTopics<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ params?: LatestQuotesByAuthorQueryParams } ,
mapper?:IDataMapper<MR, QuoteTopItem[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.quotes_topAuthorTopics,
                mapper: mapper,
                variables: [
                    { name: 'params', value: args.params, type: 'LatestQuotesByAuthorQueryParams' }
                ]
            })
    }
}
    

export enum OurnetQueryMethods {
    ping = "ping",
    publicHolidays = "publicHolidays",
    weather_forecastReport = "weather_forecastReport",
    weather_datePlacesForecast = "weather_datePlacesForecast",
    weather_nowPlaceForecast = "weather_nowPlaceForecast",
    places_placeById = "places_placeById",
    places_searchPlace = "places_searchPlace",
    places_placesByIds = "places_placesByIds",
    places_placesByAdmin1Code = "places_placesByAdmin1Code",
    places_mainPlaces = "places_mainPlaces",
    places_admin1s = "places_admin1s",
    places_admin1 = "places_admin1",
    places_placeOldId = "places_placeOldId",
    news_itemById = "news_itemById",
    news_itemsByIds = "news_itemsByIds",
    news_itemsSearch = "news_itemsSearch",
    news_itemsLatest = "news_itemsLatest",
    news_itemsLatestBySource = "news_itemsLatestBySource",
    news_itemsLatestByTopic = "news_itemsLatestByTopic",
    news_itemsLatestByEvent = "news_itemsLatestByEvent",
    news_itemsCount = "news_itemsCount",
    news_itemsCountBySource = "news_itemsCountBySource",
    news_itemsCountByTopic = "news_itemsCountByTopic",
    news_itemsCountByEvent = "news_itemsCountByEvent",
    news_topSources = "news_topSources",
    news_topSourceTopics = "news_topSourceTopics",
    news_eventById = "news_eventById",
    news_eventsByIds = "news_eventsByIds",
    news_eventsLatest = "news_eventsLatest",
    news_eventsLatestByTopic = "news_eventsLatestByTopic",
    news_eventsCount = "news_eventsCount",
    news_eventsCountByTopic = "news_eventsCountByTopic",
    news_topTopics = "news_topTopics",
    news_trendingTopics = "news_trendingTopics",
    news_articleContentById = "news_articleContentById",
    news_articleContentsByIds = "news_articleContentsByIds",
    topics_topicById = "topics_topicById",
    topics_topicsByIds = "topics_topicsByIds",
    topics_topicsByWikiIds = "topics_topicsByWikiIds",
    quotes_quoteById = "quotes_quoteById",
    quotes_quotesByIds = "quotes_quotesByIds",
    quotes_latest = "quotes_latest",
    quotes_latestByTopic = "quotes_latestByTopic",
    quotes_latestByAuthor = "quotes_latestByAuthor",
    quotes_count = "quotes_count",
    quotes_countByTopic = "quotes_countByTopic",
    quotes_countByAuthor = "quotes_countByAuthor",
    quotes_topTopics = "quotes_topTopics",
    quotes_topAuthors = "quotes_topAuthors",
    quotes_topAuthorTopics = "quotes_topAuthorTopics"
}
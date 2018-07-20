
import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput, IDataMapper } from "./graphql-query";
import { PublicHoliday, InputTimezoneGeoPoint, ForecastReport, DailyForecastDataPoint, HourlyForecastDataPoint, Place } from './ournet-api-types';

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
args:{ places: InputTimezoneGeoPoint[], date: number } ,
mapper?:IDataMapper<MR, DailyForecastDataPoint[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.weather_datePlacesForecast,
                mapper: mapper,
                variables: [
                    { name: 'places', value: args.places, type: '[InputTimezoneGeoPoint]!' },
{ name: 'date', value: args.date, type: 'Int!' }
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
args:{ id: number } ,
mapper?:IDataMapper<MR, Place>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placeById,
                mapper: mapper,
                variables: [
                    { name: 'id', value: args.id, type: 'Int!' }
                ]
            })
    }

placesSearchPlace<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ query: string, country: string, limit: number, searchType?: string } ,
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
{ name: 'searchType', value: args.searchType, type: 'String' }
                ]
            })
    }

placesPlacesByIds<MR>(key:keyof T,
data:GraphQLQueryItemInput,
args:{ ids: number[] } ,
mapper?:IDataMapper<MR, Place[]>) {
        
        return this.addQueryItem(key,
            {
                fields: data.fields,
                name: OurnetQueryMethods.places_placesByIds,
                mapper: mapper,
                variables: [
                    { name: 'ids', value: args.ids, type: '[Int]!' }
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
    places_placeOldId = "places_placeOldId"
}

import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput } from "./graphql-query";
import { TimezoneGeoPoint } from '@ournet/weather-domain';

export class OurnetQueryApi<T> extends GraphQlQuery<T, OurnetQueryMethods> {
    constructor(executor: GraphQLQueryExecutor) {
        super(executor, 'query');
    }
    holidays(key: keyof T, data: GraphQLQueryItemInput, country: string, lang: string, start: number, end: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.holidays,
                variables: [{ name: 'country', value: country, type: 'String!' }, { name: 'lang', value: lang, type: 'String!' }, { name: 'start', value: start, type: 'Int' }, { name: 'end', value: end, type: 'Int' }]
            })
    }

    weatherForecastReport(key: keyof T, data: GraphQLQueryItemInput, place: TimezoneGeoPoint) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.weather_forecastReport,
                variables: [{ name: 'place', value: place, type: 'InputTimezoneGeoPoint!' }]
            })
    }

    weatherDatePlacesForecast(key: keyof T, data: GraphQLQueryItemInput, places: null[], date: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.weather_datePlacesForecast,
                variables: [{ name: 'places', value: places, type: 'null!' }, { name: 'date', value: date, type: 'Int!' }]
            })
    }

    weatherNowPlaceForecast(key: keyof T, data: GraphQLQueryItemInput, place: TimezoneGeoPoint) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.weather_nowPlaceForecast,
                variables: [{ name: 'place', value: place, type: 'InputTimezoneGeoPoint!' }]
            })
    }

    placesPlaceById(key: keyof T, data: GraphQLQueryItemInput, id: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_placeById,
                variables: [{ name: 'id', value: id, type: 'Int!' }]
            })
    }

    placesSearchPlace(key: keyof T, data: GraphQLQueryItemInput, query: string, country: string, limit: number, searchType: string) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_searchPlace,
                variables: [{ name: 'query', value: query, type: 'String!' }, { name: 'country', value: country, type: 'String!' }, { name: 'limit', value: limit, type: 'Int!' }, { name: 'searchType', value: searchType, type: 'String' }]
            })
    }

    placesPlacesByIds(key: keyof T, data: GraphQLQueryItemInput, ids: null[]) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_placesByIds,
                variables: [{ name: 'ids', value: ids, type: 'null!' }]
            })
    }

    placesPlacesByAdmin1Code(key: keyof T, data: GraphQLQueryItemInput, country: string, admin1Code: string, limit: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_placesByAdmin1Code,
                variables: [{ name: 'country', value: country, type: 'String!' }, { name: 'admin1Code', value: admin1Code, type: 'String!' }, { name: 'limit', value: limit, type: 'Int!' }]
            })
    }

    placesMainPlaces(key: keyof T, data: GraphQLQueryItemInput, country: string, limit: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_mainPlaces,
                variables: [{ name: 'country', value: country, type: 'String!' }, { name: 'limit', value: limit, type: 'Int!' }]
            })
    }

    placesAdmin1s(key: keyof T, data: GraphQLQueryItemInput, country: string, limit: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_admin1s,
                variables: [{ name: 'country', value: country, type: 'String!' }, { name: 'limit', value: limit, type: 'Int!' }]
            })
    }

    placesAdmin1(key: keyof T, data: GraphQLQueryItemInput, admin1Code: string, country: string) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_admin1,
                variables: [{ name: 'admin1Code', value: admin1Code, type: 'String!' }, { name: 'country', value: country, type: 'String!' }]
            })
    }

    placesPlaceOldId(key: keyof T, data: GraphQLQueryItemInput, int: number) {
        return this.addQueryItem(key,
            {
                fields: data.fields, name: OurnetQueryMethods.places_placeOldId,
                variables: [{ name: 'int', value: int, type: 'Int!' }]
            })
    }
}


export enum OurnetQueryMethods {
    holidays = "holidays",
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
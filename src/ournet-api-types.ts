export const OurnetApiTypes:TypesData = {
    Query: { kind: 'OBJECT',
 name: 'Query',
 fields: [{ name: 'holidays', typeName: 'JSON' },
{ name: 'weather_forecastReport', typeName: 'ForecastReport' },
{ name: 'weather_datePlacesForecast', typeName: 'null' },
{ name: 'weather_nowPlaceForecast', typeName: 'HourlyForecastDataPoint' },
{ name: 'places_placeById', typeName: 'Place' },
{ name: 'places_searchPlace', typeName: 'null' },
{ name: 'places_placesByIds', typeName: 'null' },
{ name: 'places_placesByAdmin1Code', typeName: 'null' },
{ name: 'places_mainPlaces', typeName: 'null' },
{ name: 'places_admin1s', typeName: 'null' },
{ name: 'places_admin1', typeName: 'Place' },
{ name: 'places_placeOldId', typeName: 'Int' }],
graphqlFields:'holidays weather_forecastReport { latitude,longitude,timezone,units,hourly,details,daily } weather_datePlacesForecast weather_nowPlaceForecast { cloudCover,dewPoint,humidity,icon,night,ozone,precipAccumulation,precipIntensity,precipProbability,precipType,pressure,temperature,time,uvIndex,visibility,windBearing,windGust,windSpeed } places_placeById { id,name,asciiname,names,latitude,longitude,featureClass,featureCode,countryCode,admin1Code,admin2Code,admin3Code,population,elevation,dem,timezone,admin1 } places_searchPlace places_placesByIds places_placesByAdmin1Code places_mainPlaces places_admin1s places_admin1 { id,name,asciiname,names,latitude,longitude,featureClass,featureCode,countryCode,admin1Code,admin2Code,admin3Code,population,elevation,dem,timezone,admin1 } places_placeOldId' },
String: { kind: 'SCALAR',
 name: 'String',
 fields: [],
graphqlFields:'' },
Int: { kind: 'SCALAR',
 name: 'Int',
 fields: [],
graphqlFields:'' },
JSON: { kind: 'SCALAR',
 name: 'JSON',
 fields: [],
graphqlFields:'' },
InputTimezoneGeoPoint: { kind: 'INPUT_OBJECT',
 name: 'InputTimezoneGeoPoint',
 fields: [],
graphqlFields:'' },
Float: { kind: 'SCALAR',
 name: 'Float',
 fields: [],
graphqlFields:'' },
ForecastReport: { kind: 'OBJECT',
 name: 'ForecastReport',
 fields: [{ name: 'latitude', typeName: 'Float' },
{ name: 'longitude', typeName: 'Float' },
{ name: 'timezone', typeName: 'String' },
{ name: 'units', typeName: 'String' },
{ name: 'hourly', typeName: 'HourlyForecastDataBlock' },
{ name: 'details', typeName: 'HoursForecastDataBlock' },
{ name: 'daily', typeName: 'DailyForecastDataBlock' }],
graphqlFields:'latitude longitude timezone units hourly { icon,night,data } details { icon,night,data } daily { icon,night,data }' },
HourlyForecastDataBlock: { kind: 'OBJECT',
 name: 'HourlyForecastDataBlock',
 fields: [{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'data', typeName: 'null' }],
graphqlFields:'icon night data' },
IForecastDataBlock: { kind: 'INTERFACE',
 name: 'IForecastDataBlock',
 fields: [{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' }],
graphqlFields:'icon night' },
Boolean: { kind: 'SCALAR',
 name: 'Boolean',
 fields: [],
graphqlFields:'' },
HourlyForecastDataPoint: { kind: 'OBJECT',
 name: 'HourlyForecastDataPoint',
 fields: [{ name: 'cloudCover', typeName: 'Float' },
{ name: 'dewPoint', typeName: 'Float' },
{ name: 'humidity', typeName: 'Float' },
{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'ozone', typeName: 'Float' },
{ name: 'precipAccumulation', typeName: 'Float' },
{ name: 'precipIntensity', typeName: 'Float' },
{ name: 'precipProbability', typeName: 'Float' },
{ name: 'precipType', typeName: 'String' },
{ name: 'pressure', typeName: 'Float' },
{ name: 'temperature', typeName: 'Float' },
{ name: 'time', typeName: 'Int' },
{ name: 'uvIndex', typeName: 'Float' },
{ name: 'visibility', typeName: 'Float' },
{ name: 'windBearing', typeName: 'Float' },
{ name: 'windGust', typeName: 'Float' },
{ name: 'windSpeed', typeName: 'Float' }],
graphqlFields:'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed' },
IForecastDataPoint: { kind: 'INTERFACE',
 name: 'IForecastDataPoint',
 fields: [{ name: 'cloudCover', typeName: 'Float' },
{ name: 'dewPoint', typeName: 'Float' },
{ name: 'humidity', typeName: 'Float' },
{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'ozone', typeName: 'Float' },
{ name: 'precipAccumulation', typeName: 'Float' },
{ name: 'precipIntensity', typeName: 'Float' },
{ name: 'precipProbability', typeName: 'Float' },
{ name: 'precipType', typeName: 'String' },
{ name: 'pressure', typeName: 'Float' },
{ name: 'temperature', typeName: 'Float' },
{ name: 'time', typeName: 'Int' },
{ name: 'uvIndex', typeName: 'Float' },
{ name: 'visibility', typeName: 'Float' },
{ name: 'windBearing', typeName: 'Float' },
{ name: 'windGust', typeName: 'Float' },
{ name: 'windSpeed', typeName: 'Float' }],
graphqlFields:'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed' },
HoursForecastDataBlock: { kind: 'OBJECT',
 name: 'HoursForecastDataBlock',
 fields: [{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'data', typeName: 'null' }],
graphqlFields:'icon night data' },
HoursForecastDataPoint: { kind: 'OBJECT',
 name: 'HoursForecastDataPoint',
 fields: [{ name: 'cloudCover', typeName: 'Float' },
{ name: 'dewPoint', typeName: 'Float' },
{ name: 'humidity', typeName: 'Float' },
{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'ozone', typeName: 'Float' },
{ name: 'precipAccumulation', typeName: 'Float' },
{ name: 'precipIntensity', typeName: 'Float' },
{ name: 'precipProbability', typeName: 'Float' },
{ name: 'precipType', typeName: 'String' },
{ name: 'pressure', typeName: 'Float' },
{ name: 'temperature', typeName: 'Float' },
{ name: 'time', typeName: 'Int' },
{ name: 'uvIndex', typeName: 'Float' },
{ name: 'visibility', typeName: 'Float' },
{ name: 'windBearing', typeName: 'Float' },
{ name: 'windGust', typeName: 'Float' },
{ name: 'windSpeed', typeName: 'Float' },
{ name: 'temperatureHigh', typeName: 'Float' },
{ name: 'temperatureHighTime', typeName: 'Int' },
{ name: 'temperatureLow', typeName: 'Float' },
{ name: 'temperatureLowTime', typeName: 'Int' }],
graphqlFields:'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime' },
DailyForecastDataBlock: { kind: 'OBJECT',
 name: 'DailyForecastDataBlock',
 fields: [{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'data', typeName: 'null' }],
graphqlFields:'icon night data' },
DailyForecastDataPoint: { kind: 'OBJECT',
 name: 'DailyForecastDataPoint',
 fields: [{ name: 'cloudCover', typeName: 'Float' },
{ name: 'dewPoint', typeName: 'Float' },
{ name: 'humidity', typeName: 'Float' },
{ name: 'icon', typeName: 'Int' },
{ name: 'night', typeName: 'Boolean' },
{ name: 'ozone', typeName: 'Float' },
{ name: 'precipAccumulation', typeName: 'Float' },
{ name: 'precipIntensity', typeName: 'Float' },
{ name: 'precipProbability', typeName: 'Float' },
{ name: 'precipType', typeName: 'String' },
{ name: 'pressure', typeName: 'Float' },
{ name: 'temperature', typeName: 'Float' },
{ name: 'time', typeName: 'Int' },
{ name: 'uvIndex', typeName: 'Float' },
{ name: 'visibility', typeName: 'Float' },
{ name: 'windBearing', typeName: 'Float' },
{ name: 'windGust', typeName: 'Float' },
{ name: 'windSpeed', typeName: 'Float' },
{ name: 'temperatureHigh', typeName: 'Float' },
{ name: 'temperatureHighTime', typeName: 'Int' },
{ name: 'temperatureLow', typeName: 'Float' },
{ name: 'temperatureLowTime', typeName: 'Int' },
{ name: 'moonPhase', typeName: 'Float' },
{ name: 'sunriseTime', typeName: 'Int' },
{ name: 'sunsetTime', typeName: 'Int' }],
graphqlFields:'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime' },
Place: { kind: 'OBJECT',
 name: 'Place',
 fields: [{ name: 'id', typeName: 'Int' },
{ name: 'name', typeName: 'String' },
{ name: 'asciiname', typeName: 'String' },
{ name: 'names', typeName: 'String' },
{ name: 'latitude', typeName: 'Float' },
{ name: 'longitude', typeName: 'Float' },
{ name: 'featureClass', typeName: 'String' },
{ name: 'featureCode', typeName: 'String' },
{ name: 'countryCode', typeName: 'String' },
{ name: 'admin1Code', typeName: 'String' },
{ name: 'admin2Code', typeName: 'String' },
{ name: 'admin3Code', typeName: 'String' },
{ name: 'population', typeName: 'Int' },
{ name: 'elevation', typeName: 'Int' },
{ name: 'dem', typeName: 'Int' },
{ name: 'timezone', typeName: 'String' },
{ name: 'admin1', typeName: 'Place' }],
graphqlFields:'id name asciiname names latitude longitude featureClass featureCode countryCode admin1Code admin2Code admin3Code population elevation dem timezone admin1 { id,name,asciiname,names,latitude,longitude,featureClass,featureCode,countryCode,admin1Code,admin2Code,admin3Code,population,elevation,dem,timezone,admin1 }' },
Mutation: { kind: 'OBJECT',
 name: 'Mutation',
 fields: [{ name: 'add', typeName: 'Int' }],
graphqlFields:'add' },
PlaceOldId: { kind: 'OBJECT',
 name: 'PlaceOldId',
 fields: [{ name: 'id', typeName: 'Int' },
{ name: 'geonameid', typeName: 'Int' }],
graphqlFields:'id geonameid' }
}

export type TypesData = { [index: string]: ApiTypeInfo }

export type ApiTypeInfo = {
    kind: string
    name: string
    fields?: ApiTypeFieldInfo[]
    graphqlFields?: string
}

export type ApiTypeFieldInfo = {
    name: string
    typeName: string
}

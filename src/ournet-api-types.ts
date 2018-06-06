export type InputTimezoneGeoPoint = { longitude:number, latitude:number, timezone:string } 

export type ForecastReport = { latitude:number, longitude:number, timezone:string, units:string, hourly?:HourlyForecastDataBlock, details?:HoursForecastDataBlock, daily?:DailyForecastDataBlock } 

export type HourlyForecastDataBlock = { icon:number, night?:Boolean, data:HourlyForecastDataPoint[] } 

export type HourlyForecastDataPoint = { cloudCover?:number, dewPoint?:number, humidity?:number, icon?:number, night?:Boolean, ozone?:number, precipAccumulation?:number, precipIntensity?:number, precipProbability?:number, precipType?:string, pressure?:number, temperature?:number, time:number, uvIndex?:number, visibility?:number, windBearing?:number, windGust?:number, windSpeed?:number } 

export type HoursForecastDataBlock = { icon:number, night?:Boolean, data:HoursForecastDataPoint[] } 

export type HoursForecastDataPoint = { cloudCover?:number, dewPoint?:number, humidity?:number, icon?:number, night?:Boolean, ozone?:number, precipAccumulation?:number, precipIntensity?:number, precipProbability?:number, precipType?:string, pressure?:number, temperature?:number, time:number, uvIndex?:number, visibility?:number, windBearing?:number, windGust?:number, windSpeed?:number, temperatureHigh?:number, temperatureHighTime?:number, temperatureLow?:number, temperatureLowTime?:number } 

export type DailyForecastDataBlock = { icon:number, night?:Boolean, data:DailyForecastDataPoint[] } 

export type DailyForecastDataPoint = { cloudCover?:number, dewPoint?:number, humidity?:number, icon?:number, night?:Boolean, ozone?:number, precipAccumulation?:number, precipIntensity?:number, precipProbability?:number, precipType?:string, pressure?:number, temperature?:number, time:number, uvIndex?:number, visibility?:number, windBearing?:number, windGust?:number, windSpeed?:number, temperatureHigh?:number, temperatureHighTime?:number, temperatureLow?:number, temperatureLowTime?:number, moonPhase?:number, sunriseTime?:number, sunsetTime?:number } 

export type Place = { id:number, name:string, asciiname?:string, names?:string, latitude:number, longitude:number, featureClass?:string, featureCode?:string, countryCode?:string, admin1Code?:string, admin2Code?:string, admin3Code?:string, population?:number, elevation?:number, dem?:number, timezone?:string, admin1?:Place } 

export type PlaceOldId = { id:number, geonameid:number } 
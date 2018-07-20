export type PublicHoliday = { date: number, name: string } 

export type InputTimezoneGeoPoint = { longitude: number, latitude: number, timezone: string } 

export type ForecastReport = { latitude: number, longitude: number, timezone: string, units: string, hourly?: HourlyForecastDataBlock, details?: HoursForecastDataBlock, daily?: DailyForecastDataBlock } 

export type HourlyForecastDataBlock = { icon: number, night?: boolean, data: HourlyForecastDataPoint[] } 

export type HourlyForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon?: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature?: number, time: number, uvIndex?: number, visibility?: number, windBearing?: number, windGust?: number, windSpeed?: number } 

export type HoursForecastDataBlock = { icon: number, night?: boolean, data: HoursForecastDataPoint[] } 

export type HoursForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon?: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature?: number, time: number, uvIndex?: number, visibility?: number, windBearing?: number, windGust?: number, windSpeed?: number, temperatureHigh?: number, temperatureHighTime?: number, temperatureLow?: number, temperatureLowTime?: number } 

export type DailyForecastDataBlock = { icon: number, night?: boolean, data: DailyForecastDataPoint[] } 

export type DailyForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon?: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature?: number, time: number, uvIndex?: number, visibility?: number, windBearing?: number, windGust?: number, windSpeed?: number, temperatureHigh?: number, temperatureHighTime?: number, temperatureLow?: number, temperatureLowTime?: number, moonPhase?: number, sunriseTime?: number, sunsetTime?: number } 

export type Place = { id: number, name: string, asciiname?: string, names?: string, latitude: number, longitude: number, featureClass?: string, featureCode?: string, countryCode?: string, admin1Code?: string, admin2Code?: string, admin3Code?: string, population?: number, elevation?: number, dem?: number, timezone?: string, admin1?: Place } 

export type PlaceOldId = { id: number, geonameid: number } 

export const PublicHolidayStringFields = 'date name';

export const InputTimezoneGeoPointStringFields = 'longitude latitude timezone';

export const ForecastReportStringFields = 'latitude longitude timezone units hourly { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed } } details { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime } } daily { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime } }';

export const HourlyForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed }';

export const HourlyForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed';

export const HoursForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime }';

export const HoursForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime';

export const DailyForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime }';

export const DailyForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windBearing windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime';

export const PlaceStringFields = 'id name asciiname names latitude longitude featureClass featureCode countryCode admin1Code admin2Code admin3Code population elevation dem timezone admin1 { id name asciiname names latitude longitude featureClass featureCode countryCode admin1Code admin2Code admin3Code population elevation dem timezone }';

export const PlaceOldIdStringFields = 'id geonameid';
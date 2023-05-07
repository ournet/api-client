export type PublicHoliday = { date: number, name: string } 

export type InputTimezoneGeoPoint = { longitude: number, latitude: number, timezone: string } 

export type ForecastReport = { latitude: number, longitude: number, timezone: string, units: string, hourly?: HourlyForecastDataBlock, details?: HoursForecastDataBlock, daily?: DailyForecastDataBlock } 

export type HourlyForecastDataBlock = { icon: number, night?: boolean, data: HourlyForecastDataPoint[] } 

export type HourlyForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature: number, time: number, uvIndex?: number, visibility?: number, windDir?: string, windGust?: number, windSpeed?: number } 

export type HoursForecastDataBlock = { icon: number, night?: boolean, data: HoursForecastDataPoint[] } 

export type HoursForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature: number, time: number, uvIndex?: number, visibility?: number, windDir?: string, windGust?: number, windSpeed?: number, temperatureHigh?: number, temperatureHighTime?: number, temperatureLow?: number, temperatureLowTime?: number } 

export type DailyForecastDataBlock = { icon: number, night?: boolean, data: DailyForecastDataPoint[] } 

export type DailyForecastDataPoint = { cloudCover?: number, dewPoint?: number, humidity?: number, icon: number, night?: boolean, ozone?: number, precipAccumulation?: number, precipIntensity?: number, precipProbability?: number, precipType?: string, pressure?: number, temperature: number, time: number, uvIndex?: number, visibility?: number, windDir?: string, windGust?: number, windSpeed?: number, temperatureHigh?: number, temperatureHighTime?: number, temperatureLow?: number, temperatureLowTime?: number, moonPhase?: number, sunriseTime?: number, sunsetTime?: number } 

export type Place = { id: string, name: string, asciiname: string, names?: string, latitude: number, longitude: number, featureClass: string, featureCode?: string, countryCode: string, admin1Code: string, admin2Code?: string, admin3Code?: string, population?: number, elevation?: number, dem?: number, timezone: string, admin1?: Place } 

export type PlaceOldId = { id: number, geonameid: number } 

export type NewsItem = { id: string, title: string, summary: string, lang: string, country: string, urlPath: string, urlHost: string, slug: string, sourceId: string, imagesIds?: string[], videoId?: string, topics?: NewsTopic[], eventId?: string, createdAt: string, updatedAt?: string, publishedAt: string, expiresAt: number, titleHash: string, hasContent: boolean, countViews: number, countQuotes: number, quotesIds?: string[] } 

export type NewsTopic = { id: string, name: string, slug: string, abbr?: string, type?: string } 

export type NewsSearchParams = { lang: string, country: string, q: string, limit: number, minScore?: number, type?: string } 

export type LatestNewsQueryParams = { lang: string, country: string, limit: number, minDate?: string, maxDate?: string } 

export type LatestNewsBySourceQueryParams = { lang: string, country: string, limit: number, minDate?: string, maxDate?: string, sourceId: string } 

export type LatestNewsByTopicQueryParams = { lang: string, country: string, limit: number, minDate?: string, maxDate?: string, topicId: string } 

export type LatestNewsByEventQueryParams = { lang: string, country: string, limit: number, minDate?: string, maxDate?: string, eventId: string } 

export type CountNewsQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string } 

export type CountNewsBySourceQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, sourceId: string } 

export type CountNewsByTopicQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, topicId: string } 

export type CountNewsByEventQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, eventId: string } 

export type NewsTopItem = { id: string, count: number } 

export type NewsEvent = { id: string, title: string, slug: string, summary: string, source: NewsEventSource, lang: string, country: string, imageId: string, imageHost: string, imageSourceId: string, countNews: number, countViews: number, countQuotes: number, countVideos: number, countImages: number, topics: NewsTopic[], items: NewsEventItem[], quotesIds?: string[], videosIds?: string[], imagesIds?: string[], status?: string, createdAt: string, updatedAt?: string, expiresAt: number, hasContent: boolean } 

export type NewsEventSource = { id: string, host: string, path: string, sourceId: string } 

export type NewsEventItem = { id: string, title: string, sourceId: string, host: string, path: string, publishedAt: string } 

export type LatestEventsQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, limit: number } 

export type LatestEventsByTopicQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, limit: number, topicId: string } 

export type CountEventsQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string } 

export type CountEventsByTopicQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, topicId: string } 

export type TrendingTopicsQueryParams = { lang: string, country: string, limit: number, period: string } 

export type SimilarEventsByTopicsQueryParams = { lang: string, country: string, minDate?: string, maxDate?: string, limit: number, topicIds: string[], exceptId?: string } 

export type ArticleContent = { id: string, refId: string, refType: string, content: string, format: string, formatVersion?: number, topicsMap?: any, expiresAt: number, createdAt: string, updatedAt?: string } 

export type Topic = { id: string, lang: string, country: string, wikiId?: string, name: string, commonName?: string, englishName?: string, abbr?: string, type?: string, description?: string, about?: string, isActive?: boolean, createdAt: string, updatedAt?: string } 

export type TopicWikiId = { lang: string, country: string, wikiId: string } 

export type Quote = { id: string, lang: string, country: string, source: QuoteSource, author: QuoteAuthor, text: string, topics?: QuoteTopic[], lastFoundAt: string, createdAt: string, expiresAt: number, countViews: number, events?: QuoteEvent[] } 

export type QuoteSource = { host: string, path: string, title: string, id: string, imageId?: string } 

export type QuoteAuthor = { name: string, slug: string, id: string } 

export type QuoteTopic = { id: string, name: string, slug: string, abbr?: string, type?: string, rel?: string } 

export type QuoteEvent = { title: string, id: string, imageId?: string } 

export type ListQuotesQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string, limit: number } 

export type ListQuotesByTopicQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string, limit: number, topicId: string } 

export type ListQuotesByAuthorQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string, limit: number, authorId: string } 

export type CountQuotesQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string } 

export type CountQuotesByTopicQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string, topicId: string } 

export type CountQuotesByAuthorQueryParams = { lang: string, country: string, maxDate?: string, minDate?: string, authorId: string } 

export type QuoteTopItem = { id: string, count: number } 

export type HoroscopeReport = { id: string, lang: string, text: string, length: number, sign: number, period: string, phrasesIds: string[], phrases: HoroscopePhrase[], numbers: number[], stats: HoroscopeReportStats, createdAt: string, expiresAt: number } 

export type HoroscopePhrase = { iid?: number, id: string, lang: string, source: string, text: string, length: number, sign: number, period: string, createdAt: string } 

export type HoroscopeReportStats = { love: number, success: number, health: number } 

export type HoroscopeGenerateReportsParams = { lang: string, period: string } 

export type HoroscopeListPhraseParams = { lang: string, limit: number, offset?: number } 

export type Video = { id: string, sourceId: string, sourceType: string, websites: string[], createdAt: string, expiresAt: number, width?: number, height?: number, countViews: number } 

export type ArticleContentRef = { refId: string, refType: string } 

export const PublicHolidayStringFields = 'date name';

export const InputTimezoneGeoPointStringFields = 'longitude latitude timezone';

export const ForecastReportStringFields = 'latitude longitude timezone units hourly { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed } } details { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime } } daily { icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime } }';

export const HourlyForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed }';

export const HourlyForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed';

export const HoursForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime }';

export const HoursForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime';

export const DailyForecastDataBlockStringFields = 'icon night data { cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime }';

export const DailyForecastDataPointStringFields = 'cloudCover dewPoint humidity icon night ozone precipAccumulation precipIntensity precipProbability precipType pressure temperature time uvIndex visibility windDir windGust windSpeed temperatureHigh temperatureHighTime temperatureLow temperatureLowTime moonPhase sunriseTime sunsetTime';

export const PlaceStringFields = 'id name asciiname names latitude longitude featureClass featureCode countryCode admin1Code admin2Code admin3Code population elevation dem timezone admin1 { id name asciiname names latitude longitude featureClass featureCode countryCode admin1Code admin2Code admin3Code population elevation dem timezone }';

export const PlaceOldIdStringFields = 'id geonameid';

export const NewsItemStringFields = 'id title summary lang country urlPath urlHost slug sourceId imagesIds videoId topics { id name slug abbr type } eventId createdAt updatedAt publishedAt expiresAt titleHash hasContent countViews countQuotes quotesIds';

export const NewsTopicStringFields = 'id name slug abbr type';

export const NewsSearchParamsStringFields = 'lang country q limit minScore type';

export const LatestNewsQueryParamsStringFields = 'lang country limit minDate maxDate';

export const LatestNewsBySourceQueryParamsStringFields = 'lang country limit minDate maxDate sourceId';

export const LatestNewsByTopicQueryParamsStringFields = 'lang country limit minDate maxDate topicId';

export const LatestNewsByEventQueryParamsStringFields = 'lang country limit minDate maxDate eventId';

export const CountNewsQueryParamsStringFields = 'lang country minDate maxDate';

export const CountNewsBySourceQueryParamsStringFields = 'lang country minDate maxDate sourceId';

export const CountNewsByTopicQueryParamsStringFields = 'lang country minDate maxDate topicId';

export const CountNewsByEventQueryParamsStringFields = 'lang country minDate maxDate eventId';

export const NewsTopItemStringFields = 'id count';

export const NewsEventStringFields = 'id title slug summary source { id host path sourceId } lang country imageId imageHost imageSourceId countNews countViews countQuotes countVideos countImages topics { id name slug abbr type } items { id title sourceId host path publishedAt } quotesIds videosIds imagesIds status createdAt updatedAt expiresAt hasContent';

export const NewsEventSourceStringFields = 'id host path sourceId';

export const NewsEventItemStringFields = 'id title sourceId host path publishedAt';

export const LatestEventsQueryParamsStringFields = 'lang country minDate maxDate limit';

export const LatestEventsByTopicQueryParamsStringFields = 'lang country minDate maxDate limit topicId';

export const CountEventsQueryParamsStringFields = 'lang country minDate maxDate';

export const CountEventsByTopicQueryParamsStringFields = 'lang country minDate maxDate topicId';

export const TrendingTopicsQueryParamsStringFields = 'lang country limit period';

export const SimilarEventsByTopicsQueryParamsStringFields = 'lang country minDate maxDate limit topicIds exceptId';

export const ArticleContentStringFields = 'id refId refType content format formatVersion topicsMap expiresAt createdAt updatedAt';

export const TopicStringFields = 'id lang country wikiId name commonName englishName abbr type description about isActive createdAt updatedAt';

export const TopicWikiIdStringFields = 'lang country wikiId';

export const QuoteStringFields = 'id lang country source { host path title id imageId } author { name slug id } text topics { id name slug abbr type rel } lastFoundAt createdAt expiresAt countViews events { title id imageId }';

export const QuoteSourceStringFields = 'host path title id imageId';

export const QuoteAuthorStringFields = 'name slug id';

export const QuoteTopicStringFields = 'id name slug abbr type rel';

export const QuoteEventStringFields = 'title id imageId';

export const ListQuotesQueryParamsStringFields = 'lang country maxDate minDate limit';

export const ListQuotesByTopicQueryParamsStringFields = 'lang country maxDate minDate limit topicId';

export const ListQuotesByAuthorQueryParamsStringFields = 'lang country maxDate minDate limit authorId';

export const CountQuotesQueryParamsStringFields = 'lang country maxDate minDate';

export const CountQuotesByTopicQueryParamsStringFields = 'lang country maxDate minDate topicId';

export const CountQuotesByAuthorQueryParamsStringFields = 'lang country maxDate minDate authorId';

export const QuoteTopItemStringFields = 'id count';

export const HoroscopeReportStringFields = 'id lang text length sign period phrasesIds phrases { iid id lang source text length sign period createdAt } numbers stats { love success health } createdAt expiresAt';

export const HoroscopePhraseStringFields = 'iid id lang source text length sign period createdAt';

export const HoroscopeReportStatsStringFields = 'love success health';

export const HoroscopeGenerateReportsParamsStringFields = 'lang period';

export const HoroscopeListPhraseParamsStringFields = 'lang limit offset';

export const VideoStringFields = 'id sourceId sourceType websites createdAt expiresAt width height countViews';

export const ArticleContentRefStringFields = 'refId refType';
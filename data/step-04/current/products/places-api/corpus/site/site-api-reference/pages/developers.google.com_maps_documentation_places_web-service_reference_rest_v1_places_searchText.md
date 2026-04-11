---
title: "Method: places.searchText \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText
  title: "Method: places.searchText \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Reference
Send feedback
Method: places.searchText
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Places API Text Search lets you find places using a text query, like "coffee shops near me".
You can refine your search using filters like location, place type, price level, and more.
Results include place details, routing information, and (experimentally) contextual content like reviews.
The API uses POST requests to https://places.googleapis.com/v1/places:searchText with parameters in the request body.
Responses provide a list of matching places, pagination tokens for more results, and a link to the search on Google Maps.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
RankPreference
LocationBias
JSON representation
LocationRestriction
JSON representation
EVOptions
JSON representation
SearchAlongRouteParameters
JSON representation
Polyline
JSON representation
ContextualContent
JSON representation
Justification
JSON representation
ReviewJustification
JSON representation
HighlightedText
JSON representation
HighlightedTextRange
JSON representation
BusinessAvailabilityAttributesJustification
JSON representation
Text query based place search.
HTTP request
POST https://places.googleapis.com/v1/places:searchText
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"textQuery" : string ,
"languageCode" : string ,
"regionCode" : string ,
"rankPreference" : enum ( RankPreference ) ,
"includedType" : string ,
"openNow" : boolean ,
"minRating" : number ,
"maxResultCount" : integer ,
"pageSize" : integer ,
"pageToken" : string ,
"priceLevels" : [
enum ( PriceLevel )
] ,
"strictTypeFiltering" : boolean ,
"locationBias" : {
object ( LocationBias )
} ,
"locationRestriction" : {
object ( LocationRestriction )
} ,
"evOptions" : {
object ( EVOptions )
} ,
"routingParameters" : {
object ( RoutingParameters )
} ,
"searchAlongRouteParameters" : {
object ( SearchAlongRouteParameters )
} ,
"includePureServiceAreaBusinesses" : boolean ,
"includeFutureOpeningBusinesses" : boolean
}
Fields
textQuery
string
Required. The text query for textual search.
languageCode
string
Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist.
Current list of supported languages: https://developers.google.com/maps/faq#languagesupport .
regionCode
string
The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law.
For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html .
Note that 3-digit region codes are not currently supported.
rankPreference
enum ( RankPreference )
How results will be ranked in the response.
includedType
string
The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types . Only support one included type.
openNow
boolean
Used to restrict the search to places that are currently open. The default is false.
minRating
number
Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating.
maxResultCount (deprecated)
integer
Deprecated: Use pageSize instead.
The maximum number of results per page that can be returned. If the number of available results is larger than maxResultCount , a nextPageToken is returned which can be passed to pageToken to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be coerced to 20. Negative values will return an INVALID_ARGUMENT error.
If both maxResultCount and pageSize are specified, maxResultCount will be ignored.
pageSize
integer
Optional. The maximum number of results per page that can be returned. If the number of available results is larger than pageSize , a nextPageToken is returned which can be passed to pageToken to get the next page of results in subsequent requests. If 0 or no value is provided, a default of 20 is used. The maximum value is 20; values above 20 will be set to 20. Negative values will return an INVALID_ARGUMENT error.
If both maxResultCount and pageSize are specified, maxResultCount will be ignored.
pageToken
string
Optional. A page token, received from a previous TextSearch call. Provide this to retrieve the subsequent page.
When paginating, all parameters other than pageToken , pageSize , and maxResultCount provided to TextSearch must match the initial call that provided the page token. Otherwise an INVALID_ARGUMENT error is returned.
priceLevels[]
enum ( PriceLevel )
Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels.
strictTypeFiltering
boolean
Used to set strict type filtering for includedType. If set to true, only results of the same type will be returned. Default to false.
locationBias
object ( LocationBias )
The region to search. This location serves as a bias which means results around given location might be returned. Cannot be set along with locationRestriction.
locationRestriction
object ( LocationRestriction )
The region to search. This location serves as a restriction which means results outside given location will not be returned. Cannot be set along with locationBias.
evOptions
object ( EVOptions )
Optional. Set the searchable EV options of a place search request.
routingParameters
object ( RoutingParameters )
Optional. Additional parameters for routing to results.
searchAlongRouteParameters
object ( SearchAlongRouteParameters )
Optional. Additional parameters proto for searching along a route.
includePureServiceAreaBusinesses
boolean
Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including location , plusCode , and other location related fields for these businesses.
includeFutureOpeningBusinesses
boolean
Optional. If true, include businesses that are not yet open but will open in the future.
Response body
Response proto for places.searchText.
If successful, the response body contains data with the following structure:
JSON representation
{
"places" : [
{
object ( Place )
}
] ,
"routingSummaries" : [
{
object ( RoutingSummary )
}
] ,
"contextualContents" : [
{
object ( ContextualContent )
}
] ,
"nextPageToken" : string ,
"searchUri" : string
}
Fields
places[]
object ( Place )
A list of places that meet the user's text search criteria.
routingSummaries[]
object ( RoutingSummary )
A list of routing summaries where each entry associates to the corresponding place in the same index in the places field. If the routing summary is not available for one of the places, it will contain an empty entry. This list will have as many entries as the list of places if requested.
contextualContents[]
object ( ContextualContent )
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
A list of contextual contents where each entry associates to the corresponding place in the same index in the places field. The contents that are relevant to the textQuery in the request are preferred. If the contextual content is not available for one of the places, it will return non-contextual content. It will be empty only when the content is unavailable for this place. This list will have as many entries as the list of places if requested.
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
searchUri
string
A link allows the user to search with the same text query as specified in the request on Google Maps.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
RankPreference
How results will be ranked in the response.
Enums
RANK_PREFERENCE_UNSPECIFIED
For a categorical query such as "Restaurants in New York City", RELEVANCE is the default. For non-categorical queries such as "Mountain View, CA" we recommend that you leave rankPreference unset.
DISTANCE
Ranks results by distance.
RELEVANCE
Ranks results by relevance. Sort order determined by normal ranking stack.
LocationBias
The region to search. This location serves as a bias which means results around given location might be returned.
JSON representation
{
// Union field type can be only one of the following:
"rectangle" : {
object ( Viewport )
} ,
"circle" : {
object ( Circle )
}
// End of list of possible types for union field type .
}
Fields
Union field type .
type can be only one of the following:
rectangle
object ( Viewport )
A rectangle box defined by northeast and southwest corner. rectangle.high() must be the northeast point of the rectangle viewport. rectangle.low() must be the southwest point of the rectangle viewport. rectangle.low().latitude() cannot be greater than rectangle.high().latitude() . This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees.
circle
object ( Circle )
A circle defined by center point and radius.
LocationRestriction
The region to search. This location serves as a restriction which means results outside given location will not be returned.
JSON representation
{
// Union field type can be only one of the following:
"rectangle" : {
object ( Viewport )
}
// End of list of possible types for union field type .
}
Fields
Union field type .
type can be only one of the following:
rectangle
object ( Viewport )
A rectangle box defined by northeast and southwest corner. rectangle.high() must be the northeast point of the rectangle viewport. rectangle.low() must be the southwest point of the rectangle viewport. rectangle.low().latitude() cannot be greater than rectangle.high().latitude() . This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees.
EVOptions
Searchable EV options of a place search request.
JSON representation
{
"minimumChargingRateKw" : number ,
"connectorTypes" : [
enum ( EVConnectorType )
]
}
Fields
minimumChargingRateKw
number
Optional. Minimum required charging rate in kilowatts. A place with a charging rate less than the specified rate is filtered out.
connectorTypes[]
enum ( EVConnectorType )
Optional. The list of preferred EV connector types. A place that does not support any of the listed connector types is filtered out.
SearchAlongRouteParameters
Specifies a precalculated polyline from the Routes API defining the route to search. Searching along a route is similar to using the locationBias or locationRestriction request option to bias the search results. However, while the locationBias and locationRestriction options let you specify a region to bias the search results, this option lets you bias the results along a trip route.
Results are not guaranteed to be along the route provided, but rather are ranked within the search area defined by the polyline and, optionally, by the locationBias or locationRestriction based on minimal detour times from origin to destination. The results might be along an alternate route, especially if the provided polyline does not define an optimal route from origin to destination.
JSON representation
{
"polyline" : {
object ( Polyline )
}
}
Fields
polyline
object ( Polyline )
Required. The route polyline.
Polyline
A route polyline. Only supports an encoded polyline , which can be passed as a string and includes compression with minimal lossiness. This is the Routes API default output.
JSON representation
{
// Union field polyline_type can be only one of the following:
"encodedPolyline" : string
// End of list of possible types for union field polyline_type .
}
Fields
Union field polyline_type . Encapsulates the type of polyline. Routes API output defaults to encoded_polyline . polyline_type can be only one of the following:
encodedPolyline
string
An encoded polyline , as returned by the Routes API by default . See the encoder and decoder tools.
ContextualContent
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
Content that is contextual to the place query.
JSON representation
{
"reviews" : [
{
object ( Review )
}
] ,
"photos" : [
{
object ( Photo )
}
] ,
"justifications" : [
{
object ( Justification )
}
]
}
Fields
reviews[]
object ( Review )
List of reviews about this place, contextual to the place query.
photos[]
object ( Photo )
Information (including references) about photos of this place, contextual to the place query.
justifications[]
object ( Justification )
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
Justifications for the place.
Justification
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
Justifications for the place. Justifications answers the question of why a place could interest an end user.
JSON representation
{
// Union field justification can be only one of the following:
"reviewJustification" : {
object ( ReviewJustification )
} ,
"businessAvailabilityAttributesJustification" : {
object ( BusinessAvailabilityAttributesJustification )
}
// End of list of possible types for union field justification .
}
Fields
Union field justification .
justification can be only one of the following:
reviewJustification
object ( ReviewJustification )
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
businessAvailabilityAttributesJustification
object ( BusinessAvailabilityAttributesJustification )
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
ReviewJustification
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details.
User review justifications. This highlights a section of the user review that would interest an end user. For instance, if the search query is "firewood pizza", the review justification highlights the text relevant to the search query.
JSON representation
{
"highlightedText" : {
object ( HighlightedText )
} ,
"review" : {
object ( Review )
}
}
Fields
highlightedText
object ( HighlightedText )
review
object ( Review )
The review that the highlighted text is generated from.
HighlightedText
The text highlighted by the justification. This is a subset of the review itself. The exact word to highlight is marked by the HighlightedTextRange. There could be several words in the text being highlighted.
JSON representation
{
"text" : string ,
"highlightedTextRanges" : [
{
object ( HighlightedTextRange )
}
]
}
Fields
text
string
highlightedTextRanges[]
object ( HighlightedTextRange )
The list of the ranges of the highlighted text.
HighlightedTextRange
The range of highlighted text.
JSON representation
{
"startIndex" : integer ,
"endIndex" : integer
}
Fields
startIndex
integer
endIndex
integer
BusinessAvailabilityAttributesJustification
Experimental: See https://developers.google.com/maps/documentation/places/web-service/experimental/places-generative for more details. BusinessAvailabilityAttributes justifications. This shows some attributes a business has that could interest an end user.
JSON representation
{
"takeout" : boolean ,
"delivery" : boolean ,
"dineIn" : boolean
}
Fields
takeout
boolean
If a place provides takeout.
delivery
boolean
If a place provides delivery.
dineIn
boolean
If a place provides dine-in.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-18 UTC."],[],["The core function is searching for places via a `POST` request to `places:searchText`, using a text query and various filters. Filters include language, region, rank preference (distance/relevance), place type, open status, min rating, price levels, and location bias/restriction. Additional functionalities are electric vehicle charging options, routing and searching along a route. The response includes a list of places, routing summaries, contextual content, pagination token, and a Google Maps search URI. The response can highlight relevant text from user reviews and provide business attributes like takeout, delivery, dine-in.\n"]]

---
title: "Method: places.autocomplete \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/autocomplete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/autocomplete
  title: "Method: places.autocomplete \_|\_ Places API \_|\_ Google for Developers"
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
Method: places.autocomplete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places Autocomplete API provides place and query predictions based on user input and optional parameters like location bias, restrictions, and language.
Predictions are returned in a structured format, offering details like place ID, name, types, and distance.
Place predictions include structured formatting, breaking down the name into main and secondary text for UI display.
Query predictions offer both full text and structured format for flexible presentation in user interfaces.
Location biasing and restrictions allow developers to refine the search area for more relevant results.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
LocationBias
JSON representation
LocationRestriction
JSON representation
Suggestion
JSON representation
PlacePrediction
JSON representation
FormattableText
JSON representation
StringRange
JSON representation
StructuredFormat
JSON representation
QueryPrediction
JSON representation
Returns predictions for the given input.
HTTP request
POST https://places.googleapis.com/v1/places:autocomplete
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"input" : string ,
"locationBias" : {
object ( LocationBias )
} ,
"locationRestriction" : {
object ( LocationRestriction )
} ,
"includedPrimaryTypes" : [
string
] ,
"includedRegionCodes" : [
string
] ,
"languageCode" : string ,
"regionCode" : string ,
"origin" : {
object ( LatLng )
} ,
"inputOffset" : integer ,
"includeQueryPredictions" : boolean ,
"sessionToken" : string ,
"includePureServiceAreaBusinesses" : boolean ,
"includeFutureOpeningBusinesses" : boolean
}
Fields
input
string
Required. The text string on which to search.
locationBias
object ( LocationBias )
Optional. Bias results to a specified location.
At most one of locationBias or locationRestriction should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
locationRestriction
object ( LocationRestriction )
Optional. Restrict results to a specified location.
At most one of locationBias or locationRestriction should be set. If neither are set, the results will be biased by IP address, meaning the IP address will be mapped to an imprecise location and used as a biasing signal.
includedPrimaryTypes[]
string
Optional. Included primary Place type (for example, "restaurant" or "gas_station") in Place Types ( https://developers.google.com/maps/documentation/places/web-service/place-types) , or only (regions) , or only (cities) . A Place is only returned if its primary type is included in this list. Up to 5 values can be specified. If no types are specified, all Place types are returned.
includedRegionCodes[]
string
Optional. Only include results in the specified regions, specified as up to 15 CLDR two-character region codes. An empty set will not restrict the results. If both locationRestriction and includedRegionCodes are set, the results will be located in the area of intersection.
languageCode
string
Optional. The language in which to return results. Defaults to en-US. The results may be in mixed languages if the language used in input is different from languageCode or if the returned Place does not have a translation from the local language to languageCode .
regionCode
string
Optional. The region code, specified as a CLDR two-character region code. This affects address formatting, result ranking, and may influence what results are returned. This does not restrict results to the specified region. To restrict results to a region, use region_code_restriction .
origin
object ( LatLng )
Optional. The origin point from which to calculate geodesic distance to the destination (returned as distanceMeters ). If this value is omitted, geodesic distance will not be returned.
inputOffset
integer
Optional. A zero-based Unicode character offset of input indicating the cursor position in input . The cursor position may influence what predictions are returned.
If empty, defaults to the length of input .
includeQueryPredictions
boolean
Optional. If true, the response will include both Place and query predictions. Otherwise the response will only return Place predictions.
sessionToken
string
Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned.
The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the sessionToken parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
We recommend the following guidelines:
Use session tokens for all Place Autocomplete calls.
Generate a fresh token for each session. Using a version 4 UUID is recommended.
Ensure that the credentials used for all Place Autocomplete, Place Details, and Address Validation requests within a session belong to the same Cloud Console project.
Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
includePureServiceAreaBusinesses
boolean
Optional. Include pure service area businesses if the field is set to true. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses do not have a physical address or location on Google Maps. Places will not return fields including location , plusCode , and other location related fields for these businesses.
includeFutureOpeningBusinesses
boolean
Optional. If true, include businesses that are not yet open but will open in the future.
Response body
Response proto for places.autocomplete.
If successful, the response body contains data with the following structure:
JSON representation
{
"suggestions" : [
{
object ( Suggestion )
}
]
}
Fields
suggestions[]
object ( Suggestion )
Contains a list of suggestions, ordered in descending order of relevance.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
LocationBias
The region to search. The results may be biased around the specified region.
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
A viewport defined by a northeast and a southwest corner.
circle
object ( Circle )
A circle defined by a center point and radius.
LocationRestriction
The region to search. The results will be restricted to the specified region.
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
A viewport defined by a northeast and a southwest corner.
circle
object ( Circle )
A circle defined by a center point and radius.
Suggestion
An Autocomplete suggestion result.
JSON representation
{
// Union field kind can be only one of the following:
"placePrediction" : {
object ( PlacePrediction )
} ,
"queryPrediction" : {
object ( QueryPrediction )
}
// End of list of possible types for union field kind .
}
Fields
Union field kind .
kind can be only one of the following:
placePrediction
object ( PlacePrediction )
A prediction for a Place.
queryPrediction
object ( QueryPrediction )
A prediction for a query.
PlacePrediction
Prediction results for a Place Autocomplete prediction.
JSON representation
{
"place" : string ,
"placeId" : string ,
"text" : {
object ( FormattableText )
} ,
"structuredFormat" : {
object ( StructuredFormat )
} ,
"types" : [
string
] ,
"distanceMeters" : integer
}
Fields
place
string
The resource name of the suggested Place. This name can be used in other APIs that accept Place names.
placeId
string
The unique identifier of the suggested Place. This identifier can be used in other APIs that accept Place IDs.
text
object ( FormattableText )
Contains the human-readable name for the returned result. For establishment results, this is usually the business name and address.
text is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use structuredFormat instead. They are two different ways to represent a Place prediction. Users should not try to parse structuredFormat into text or vice versa.
This text may be different from the displayName returned by places.get.
May be in mixed languages if the request input and languageCode are in different languages or if the Place does not have a translation from the local language to languageCode .
structuredFormat
object ( StructuredFormat )
A breakdown of the Place prediction into main text containing the name of the Place and secondary text containing additional disambiguating features (such as a city or region).
structuredFormat is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use text instead. They are two different ways to represent a Place prediction. Users should not try to parse structuredFormat into text or vice versa.
types[]
string
List of types that apply to this Place from Table A or Table B in https://developers.google.com/maps/documentation/places/web-service/place-types .
A type is a categorization of a Place. Places with shared types will share similar characteristics.
distanceMeters
integer
The length of the geodesic in meters from origin if origin is specified. Certain predictions such as routes may not populate this field.
FormattableText
Text representing a Place or query prediction. The text may be used as is or formatted.
JSON representation
{
"text" : string ,
"matches" : [
{
object ( StringRange )
}
]
}
Fields
text
string
Text that may be used as is or formatted with matches .
matches[]
object ( StringRange )
A list of string ranges identifying where the input request matched in text . The ranges can be used to format specific parts of text . The substrings may not be exact matches of input if the matching was determined by criteria other than string matching (for example, spell corrections or transliterations).
These values are Unicode character offsets of text . The ranges are guaranteed to be ordered in increasing offset values.
StringRange
Identifies a substring within a given text.
JSON representation
{
"startOffset" : integer ,
"endOffset" : integer
}
Fields
startOffset
integer
Zero-based offset of the first Unicode character of the string (inclusive).
endOffset
integer
Zero-based offset of the last Unicode character (exclusive).
StructuredFormat
Contains a breakdown of a Place or query prediction into main text and secondary text.
For Place predictions, the main text contains the specific name of the Place. For query predictions, the main text contains the query.
The secondary text contains additional disambiguating features (such as a city or region) to further identify the Place or refine the query.
JSON representation
{
"mainText" : {
object ( FormattableText )
} ,
"secondaryText" : {
object ( FormattableText )
}
}
Fields
mainText
object ( FormattableText )
Represents the name of the Place or query.
secondaryText
object ( FormattableText )
Represents additional disambiguating features (such as a city or region) to further identify the Place or refine the query.
QueryPrediction
Prediction results for a Query Autocomplete prediction.
JSON representation
{
"text" : {
object ( FormattableText )
} ,
"structuredFormat" : {
object ( StructuredFormat )
}
}
Fields
text
object ( FormattableText )
The predicted text. This text does not represent a Place, but rather a text query that could be used in a search endpoint (for example, Text Search).
text is recommended for developers who wish to show a single UI element. Developers who wish to show two separate, but related, UI elements may want to use structuredFormat instead. They are two different ways to represent a query prediction. Users should not try to parse structuredFormat into text or vice versa.
May be in mixed languages if the request input and languageCode are in different languages or if part of the query does not have a translation from the local language to languageCode .
structuredFormat
object ( StructuredFormat )
A breakdown of the query prediction into main text containing the query and secondary text containing additional disambiguating features (such as a city or region).
structuredFormat is recommended for developers who wish to show two separate, but related, UI elements. Developers who wish to show a single UI element may want to use text instead. They are two different ways to represent a query prediction. Users should not try to parse structuredFormat into text or vice versa.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-18 UTC."],[],[]]

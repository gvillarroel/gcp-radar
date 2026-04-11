---
title: "Method: places.searchNearby \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchNearby
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchNearby
  title: "Method: places.searchNearby \_|\_ Places API \_|\_ Google for Developers"
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
Method: places.searchNearby
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Enables searching for places based on location, type, and ranking preferences using a POST request to a specific endpoint.
Request body allows specifying criteria such as language, region, included/excluded place types, maximum results, location restrictions, and ranking preferences.
Successful responses include a list of places matching the criteria and routing summaries.
Location restriction can be defined using a circle with a center point and radius.
Ranking preferences include distance or popularity, with popularity being the default if unspecified.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
LocationRestriction
JSON representation
RankPreference
Search for places near locations.
HTTP request
POST https://places.googleapis.com/v1/places:searchNearby
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"languageCode" : string ,
"regionCode" : string ,
"includedTypes" : [
string
] ,
"excludedTypes" : [
string
] ,
"includedPrimaryTypes" : [
string
] ,
"excludedPrimaryTypes" : [
string
] ,
"maxResultCount" : integer ,
"locationRestriction" : {
object ( LocationRestriction )
} ,
"rankPreference" : enum ( RankPreference ) ,
"routingParameters" : {
object ( RoutingParameters )
} ,
"includeFutureOpeningBusinesses" : boolean
}
Fields
languageCode
string
Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist.
Current list of supported languages: https://developers.google.com/maps/faq#languagesupport .
regionCode
string
The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law.
For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html .
Note that 3-digit region codes are not currently supported.
includedTypes[]
string
Included Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types .
Up to 50 types from Table A may be specified.
If there are any conflicting types, i.e. a type appears in both includedTypes and excludedTypes, an INVALID_ARGUMENT error is returned.
If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {includedTypes = ["restaurant"], excludedPrimaryTypes = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
excludedTypes[]
string
Excluded Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types .
Up to 50 types from Table A may be specified.
If the client provides both includedTypes (e.g. restaurant) and excludedTypes (e.g. cafe), then the response should include places that are restaurant but not cafe. The response includes places that match at least one of the includedTypes and none of the excludedTypes.
If there are any conflicting types, i.e. a type appears in both includedTypes and excludedTypes, an INVALID_ARGUMENT error is returned.
If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {includedTypes = ["restaurant"], excludedPrimaryTypes = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
includedPrimaryTypes[]
string
Included primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types . A place can only have a single primary type from the supported types table associated with it.
Up to 50 types from Table A may be specified.
If there are any conflicting primary types, i.e. a type appears in both includedPrimaryTypes and excludedPrimaryTypes, an INVALID_ARGUMENT error is returned.
If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {includedTypes = ["restaurant"], excludedPrimaryTypes = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
excludedPrimaryTypes[]
string
Excluded primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types .
Up to 50 types from Table A may be specified.
If there are any conflicting primary types, i.e. a type appears in both includedPrimaryTypes and excludedPrimaryTypes, an INVALID_ARGUMENT error is returned.
If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {includedTypes = ["restaurant"], excludedPrimaryTypes = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants".
maxResultCount
integer
Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
locationRestriction
object ( LocationRestriction )
Required. The region to search.
rankPreference
enum ( RankPreference )
How results will be ranked in the response.
routingParameters
object ( RoutingParameters )
Optional. Parameters that affect the routing to the search results.
includeFutureOpeningBusinesses
boolean
Optional. If true, include businesses that are not yet open but will open in the future.
Response body
Response proto for Search Nearby.
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
]
}
Fields
places[]
object ( Place )
A list of places that meets user's requirements like places types, number of places and specific location restriction.
routingSummaries[]
object ( RoutingSummary )
A list of routing summaries where each entry associates to the corresponding place in the same index in the places field. If the routing summary is not available for one of the places, it will contain an empty entry. This list should have as many entries as the list of places if requested.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
LocationRestriction
The region to search.
JSON representation
{
// Union field type can be only one of the following:
"circle" : {
object ( Circle )
}
// End of list of possible types for union field type .
}
Fields
Union field type .
type can be only one of the following:
circle
object ( Circle )
A circle defined by center point and radius.
RankPreference
How results will be ranked in the response.
Enums
RANK_PREFERENCE_UNSPECIFIED
RankPreference value not set. Will use rank by POPULARITY by default.
DISTANCE
Ranks results by distance.
POPULARITY
Ranks results by popularity.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-18 UTC."],[],["This document outlines the process of searching for nearby places using a `POST` request to `https://places.googleapis.com/v1/places:searchNearby`. The request body, in JSON format, allows specification of criteria like `languageCode`, `regionCode`, `includedTypes`, `excludedTypes`, `maxResultCount`, and a `locationRestriction`. Results can be ranked by `DISTANCE` or `POPULARITY`. The response body returns a list of `places` matching the criteria, and optionally `routingSummaries` for each place. It also lists required `Authorization scopes` and provides `LocationRestriction` and `RankPreference` options.\n"]]

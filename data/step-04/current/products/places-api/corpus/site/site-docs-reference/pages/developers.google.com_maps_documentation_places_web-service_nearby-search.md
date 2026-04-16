---
title: "Nearby Search (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/nearby-search
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/nearby-search
  title: "Nearby Search (New) \_|\_ Places API \_|\_ Google for Developers"
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
Guides
Send feedback
Nearby Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google's Nearby Search (New) feature allows you to find places based on location and type across Android, iOS, JavaScript, and Web Service platforms.
You can specify the search area, place types, language, and the maximum number of results to refine your search.
The API uses a FieldMask to control the data returned for each place, impacting billing based on the selected fields.
The Nearby Search functionality supports various search scenarios including finding specific places, searching by multiple or excluded types, and ranking results by distance or popularity.
You can test these searches using curl examples or the API Explorer to customize search criteria and select the desired data fields.
Select platform:
Android
iOS
JavaScript
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
A Nearby Search (New)
request takes one or more place types, and returns a list of matching places within the
specified area. A field mask specifying one or more data types
is required. Nearby Search (New) only supports POST requests.
The APIs Explorer lets you make live requests so that you can get familiar with
the API and the API options:
Try it!
Try the interactive
demo to see Nearby Search (New) results displayed on a map.
Nearby Search (New) requests
A Nearby Search (New) request is an HTTP POST request to a URL in the
form:
https://places.googleapis.com/v1/places:searchNearby
Pass all parameters in the JSON request body or in headers as part of the
POST request. For example:
curl -X POST -d '{
"includedTypes": ["restaurant"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName" \
https://places.googleapis.com/v1/places:searchNearby
Nearby Search (New) responses
Nearby Search (New) returns a
JSON object as a response . In the response:
The places array contains all matching places.
Each place in the array is represented by a
Place
object. The Place object contains detailed information about a single
place.
The FieldMask passed in the request specifies the list of fields
returned in the Place object.
The complete JSON object is in the form:
{
"places": [
{
object (Place)
}
]
}
Required parameters
FieldMask
Specify the list of fields to return in the response by creating a
response field mask .
Pass the response field mask to the method by using the URL parameter
$fields or fields , or by using the HTTP header
X-Goog-FieldMask . There is no default list of returned fields in the response.
If you omit the field mask, the method returns an error.
Field masking is a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and
billing charges.
Specify a comma-separated list of place data types to return. For example,
to retrieve the display name and the address of the place.
X - Goog - FieldMask : places . displayName , places . formattedAddress
Note: Spaces are not allowed anywhere
in the field list.
Use * to retrieve all fields.
X - Goog - FieldMask : *
While the
wildcard (*) is fine to use in development, Google discourages the use of the
wildcard response field mask in production because of the large amount
of data that can be returned.
Further guidance for using places.iconMaskBaseUri and
places.iconBackgroundColor can be found in
Place Icons section.
Specify one or more of the following fields:
The following fields trigger the Nearby Search Pro SKU :
places.accessibilityOptions
places.addressComponents
places.addressDescriptor *
places.adrFormatAddress
places.attributions
places.businessStatus
places.containingPlaces
places.displayName
places.formattedAddress
places.googleMapsLinks
places.googleMapsUri
places.iconBackgroundColor
places.iconMaskBaseUri
places.id
places.location
places.name **
places.movedPlace
places.movedPlaceId
places.openingDate
places.photos
places.plusCode
places.postalAddress
places.primaryType
places.primaryTypeDisplayName
places.pureServiceAreaBusiness
places.shortFormattedAddress
places.subDestinations
places.timeZone
places.types
places.utcOffsetMinutes
places.viewport
* Address descriptors are generally available for customers in India and are experimental elsewhere.
** The places.name field contains the place resource name
in the form: places/ PLACE_ID . Use places.displayName
to access the text name of the place.
The following fields trigger the Nearby Search Enterprise SKU :
places.currentOpeningHours
places.currentSecondaryOpeningHours
places.internationalPhoneNumber
places.nationalPhoneNumber
places.priceLevel
places.priceRange
places.rating
places.regularOpeningHours
places.regularSecondaryOpeningHours
places.userRatingCount
places.websiteUri
The following fields trigger the Nearby Search Enterprise + Atmosphere SKU :
places.allowsDogs
places.curbsidePickup
places.delivery
places.dineIn
places.editorialSummary
places.evChargeAmenitySummary
places.evChargeOptions
places.fuelOptions
places.generativeSummary
places.goodForChildren
places.goodForGroups
places.goodForWatchingSports
places.liveMusic
places.menuForChildren
places.neighborhoodSummary
places.parkingOptions
places.paymentOptions
places.outdoorSeating
places.reservable
places.restroom
places.reviews
places.reviewSummary
routingSummaries *
places.servesBeer
places.servesBreakfast
places.servesBrunch
places.servesCocktails
places.servesCoffee
places.servesDessert
places.servesDinner
places.servesLunch
places.servesVegetarianFood
places.servesWine
places.takeout
* Text Search and Nearby Search only
locationRestriction
The region to search specified as a circle, defined by center point and radius in meters.
The radius must be between 0.0 and 50000.0, inclusive. The default radius is 0.0. You must
set it in your request to a value greater than 0.0.
For example:
"locationRestriction" : {
"circle" : {
"center" : {
"latitude" : 37.7937 ,
"longitude" : - 122.3965
},
"radius" : 500.0
}
}
Optional parameters
includeFutureOpeningBusinesses
If true , returns businesses that are expected
to open in the future. Defaults to false .
To retrieve the business status, include
places.businessStatus in your request field mask. To retrieve the anticipated
opening date of the business, include places.openingDate in your request field
mask.
includedTypes/excludedTypes, includedPrimaryTypes/excludedPrimaryTypes
Lets you specify a list of types from types
Table A used to filter
the search results. Up to 50 types can be specified in each type restriction category.
Note: The values in Table B
are only returned in the response. You cannot use values in
Table B as a filter.
A place can only have a single primary type from types
Table A associated with
it. For example, the primary type might be
"mexican_restaurant" or "steak_house" . Use
includedPrimaryTypes and excludedPrimaryTypes to filter the results on
a place's primary type.
A place can also have multiple type values from types
Table A
associated with it. For example a restaurant might have the following types:
"seafood_restaurant" , "restaurant" , "food" ,
"point_of_interest" , "establishment" . Use includedTypes
and excludedTypes to filter the results on the list of types associated with
a place.
When you specify a general primary type, such as "restaurant" or
"hotel" , the response can contain places with a more specific primary type than
the one specified. For example, you specify to include a primary type of
"restaurant" . The response can then contain places with a primary type of
"restaurant" , but the response can also contain places with a more specific
primary type, such as "chinese_restaurant" or "seafood_restaurant" .
If a search is specified with multiple type restrictions, only places
that satisfy all of the restrictions are returned. For example, if you specify
{"includedTypes": ["restaurant"], "excludedPrimaryTypes": ["steak_house"]} , the
returned places provide "restaurant" related services but do not operate primarily
as a "steak_house" .
If you omit includedTypes , excludedTypes ,
includedPrimaryTypes , and excludedPrimaryTypes from the request,
the search returns places for all types from within the location restriction bounds.
includedTypes
A comma-separated list of the place types from Table A to search for.
If this parameter is omitted, places of all types are returned.
excludedTypes
A comma-separated list of place types from Table A to exclude from a
search.
If you specify both the includedTypes ( such as "school" ) and the
excludedTypes (such as "primary_school" ) in the request, then the
response includes places that are categorized as "school" but not as
"primary_school" . The response includes places that match at least one of
the includedTypes and none of the excludedTypes .
If there are any conflicting types, such as a type appearing in both includedTypes
and excludedTypes , an INVALID_REQUEST error is returned.
includedPrimaryTypes
A comma-separated list of primary place types from Table A to include
in a search.
excludedPrimaryTypes
A comma-separated list of primary place types from Table A to exclude
from a search.
If there are any conflicting primary types, such as a type appearing in both
includedPrimaryTypes and excludedPrimaryTypes , an
INVALID_ARGUMENT error is returned.
languageCode
The language in which to return results.
See the list of supported languages . Google often
updates the supported languages, so this list may not be exhaustive.
If languageCode is not supplied, the API defaults to en . If
you specify an invalid language code, the API returns an INVALID_ARGUMENT
error.
The API does its best to provide a street address that is readable for both the user and
locals. To achieve that goal, it returns street addresses in the local language,
transliterated to a script readable by the user if necessary, observing the preferred
language. All other addresses are returned in the preferred language. Address components are
all returned in the same language, which is chosen from the first component.
If a name is not available in the preferred language, the API uses the closest match.
The preferred language has a small influence on the set of results that the API chooses
to return, and the order in which they are returned. The geocoder interprets abbreviations
differently depending on language, such as the abbreviations for street types, or synonyms
that may be valid in one language but not in another.
maxResultCount
Specifies the maximum number of place results to return. Must be between
1 and 20 (default) inclusive.
rankPreference
The type of ranking to use. If this parameter is omitted, results are ranked by popularity.
May be one of the following:
POPULARITY (default) Sorts results based on their popularity.
DISTANCE Sorts results in ascending order by their distance from the
specified location.
regionCode
The region code used to format the response, specified as a
two-character CLDR code value. There is no default value.
If the country name of the formattedAddress field in the response matches the
regionCode , the country code is omitted from formattedAddress .
This parameter has no effect on adrFormatAddress , which always includes the country
name, or on shortFormattedAddress , which never includes it.
Most CLDR codes are identical to
ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
Nearby Search (New) examples
Find places of one type
The following example shows a Nearby Search (New) request for the display
names of all restaurants within a 500-meter radius, defined by circle :
curl -X POST -d '{
"includedTypes": ["restaurant"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName" \
https://places.googleapis.com/v1/places:searchNearby
Note that the X-Goog-FieldMask header specifies that the response
contains the following data fields: places.displayName .
The response
is then in the form:
{
"places" : [
{
"displayName" : {
"text" : "La Mar Cocina Peruana" ,
"languageCode" : "en"
}
},
{
"displayName" : {
"text" : "Kokkari Estiatorio" ,
"languageCode" : "en"
}
},
{
"displayName" : {
"text" : "Harborview Restaurant & Bar" ,
"languageCode" : "en"
}
},
...
}
Add more data types to the field mask to return additional information.
For example, add places.formattedAddress,places.types,places.websiteUri to include the
restaurant address, type, and Web address in the response:
curl -X POST -d '{
"includedTypes": ["restaurant"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName,places.formattedAddress,places.types,places.websiteUri" \
https://places.googleapis.com/v1/places:searchNearby
The response
is now in the form:
{
"places" : [
{
"types" : [
"seafood_restaurant" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "PIER 1 1/2 The Embarcadero N, San Francisco, CA 94105, USA" ,
"websiteUri" : "http://lamarsf.com/" ,
"displayName" : {
"text" : "La Mar Cocina Peruana" ,
"languageCode" : "en"
}
},
{
"types" : [
"greek_restaurant" ,
"meal_takeaway" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "200 Jackson St, San Francisco, CA 94111, USA" ,
"websiteUri" : "https://kokkari.com/" ,
"displayName" : {
"text" : "Kokkari Estiatorio" ,
"languageCode" : "en"
}
},
...
}
Find places of multiple types
The following example shows a Nearby Search (New) request for the
display names of all convenience stores and liquor stores within a 1000-meter radius of the
specified circle :
curl -X POST -d '{
"includedTypes": ["liquor_store", "convenience_store"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 1000.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName,places.primaryType,places.types" \
https://places.googleapis.com/v1/places:searchNearby
This example adds places.primaryType and places.types to the field mask
so that the response includes type information about each place, making it easier to select the
appropriate place from the results.
Exclude a place type from a search
The following example shows a Nearby Search (New) request for all places
of type "school" , excluding all places of type "primary_school" , ranking the results
by distance:
curl -X POST -d '{
"includedTypes": ["school"],
"excludedTypes": ["primary_school"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 1000.0
}
},
"rankPreference": "DISTANCE"
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName" \
https://places.googleapis.com/v1/places:searchNearby
Search for all places near an area, ranking by distance
The following example shows a Nearby Search (New) request for places
near a point in downtown San Francisco. In this example, you include the rankPreference
parameter to rank the results by distance:
curl -X POST -d '{
"maxResultCount": 10,
"rankPreference": "DISTANCE",
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 1000.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName" \
https://places.googleapis.com/v1/places:searchNearby
Get address descriptors
Address descriptors provide relational information about a place's location, including nearby
landmarks and containing areas.
Note: Address descriptors are generally available for customers in India and are experimental elsewhere. Places API requests that use only addressDescriptor in the
field mask will be billed at SKU: Places API Nearby Search Pro .
The following example shows a Nearby Search (New) request for places near
a mall in San Jose. In this example, you include addressDescriptors
in the field mask:
curl -X POST -d '{
"maxResultCount": 5,
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.321328,
"longitude": -121.946275
},"radius": 1000
}
},
"includedTypes": ["restaurant", "cafe"],
"excludedTypes": [],
"rankPreference":"POPULARITY"
}' \
-H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName, places.addressDescriptor " \
https://places.googleapis.com/v1/places:searchNearby
The response includes the place specified in the request, a list of nearby landmarks and their
distance from the place, and a list of areas and their containment relationship to the
place:
{
"places" : [
{
"displayName" : {
"text" : "Westfield Valley Fair" ,
"languageCode" : "en"
},
"addressDescriptor" : {
"landmarks" : [
{
"name" : "places/ChIJ62_oCR7Lj4AR_MGWkSPotD4" ,
"placeId" : "ChIJ62_oCR7Lj4AR_MGWkSPotD4" ,
"displayName" : {
"text" : "Nordstrom" ,
"languageCode" : "en"
},
"types" : [
"clothing_store" ,
"department_store" ,
"establishment" ,
"point_of_interest" ,
"shoe_store" ,
"store"
],
"straightLineDistanceMeters" : 114.76984 ,
"travelDistanceMeters" : 114.261856
},
{
"name" : "places/ChIJgexMlR_Lj4ARiKCKuhNnjn0" ,
"placeId" : "ChIJgexMlR_Lj4ARiKCKuhNnjn0" ,
"displayName" : {
"text" : "Valley Fair Mall Eyexam of CA" ,
"languageCode" : "en"
},
"types" : [
"establishment" ,
"health" ,
"point_of_interest"
],
"straightLineDistanceMeters" : 131.62566 ,
"travelDistanceMeters" : 237.33253
},
{
"name" : "places/ChIJWWIlNx7Lj4ARpe1E0ob-_GI" ,
"placeId" : "ChIJWWIlNx7Lj4ARpe1E0ob-_GI" ,
"displayName" : {
"text" : "Din Tai Fung" ,
"languageCode" : "en"
},
"types" : [
"establishment" ,
"food" ,
"point_of_interest" ,
"restaurant"
],
"straightLineDistanceMeters" : 110.0775 ,
"travelDistanceMeters" : 171.41951
},
{
"name" : "places/ChIJwyfPQx7Lj4AR7bYI2A2Yc54" ,
"placeId" : "ChIJwyfPQx7Lj4AR7bYI2A2Yc54" ,
"displayName" : {
"text" : "Abercrombie & Fitch" ,
"languageCode" : "en"
},
"types" : [
"clothing_store" ,
"establishment" ,
"point_of_interest" ,
"shoe_store" ,
"store"
],
"spatialRelationship" : "DOWN_THE_ROAD" ,
"straightLineDistanceMeters" : 53.620117 ,
"travelDistanceMeters" : 2.4578214
},
{
"name" : "places/ChIJpycNQx7Lj4ARjhXw3PrM_kU" ,
"placeId" : "ChIJpycNQx7Lj4ARjhXw3PrM_kU" ,
"displayName" : {
"text" : "Hollister Co." ,
"languageCode" : "en"
},
"types" : [
"clothing_store" ,
"establishment" ,
"point_of_interest" ,
"shoe_store" ,
"store"
],
"spatialRelationship" : "DOWN_THE_ROAD" ,
"straightLineDistanceMeters" : 56.53726 ,
"travelDistanceMeters" : 15.418246
}
],
"areas" : [
{
"name" : "places/ChIJb3F-EB7Lj4ARnHApQ_Hu1gI" ,
"placeId" : "ChIJb3F-EB7Lj4ARnHApQ_Hu1gI" ,
"displayName" : {
"text" : "Westfield Valley Fair" ,
"languageCode" : "en"
},
"containment" : "WITHIN"
},
{
"name" : "places/ChIJXYuykB_Lj4AR1Ot8nU5q26Q" ,
"placeId" : "ChIJXYuykB_Lj4AR1Ot8nU5q26Q" ,
"displayName" : {
"text" : "Valley Fair" ,
"languageCode" : "en"
},
"containment" : "WITHIN"
},
{
"name" : "places/ChIJtYoUX2DLj4ARKoKOb1G0CpM" ,
"placeId" : "ChIJtYoUX2DLj4ARKoKOb1G0CpM" ,
"displayName" : {
"text" : "Central San Jose" ,
"languageCode" : "en"
},
"containment" : "OUTSKIRTS"
}
]
}
},
/.../
}
Find businesses opening in the future
The following example shows a Nearby Search (New) request for businesses opening in the
future in New Meadows, Idaho:
curl -X POST \
-H "Content-Type: application/json" \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.id,places.displayName, places.businessStatus,places.openingDate " \
-d '{
"includeFutureOpeningBusinesses": true ,
"maxResultCount": 20,
"locationRestriction": {
"circle": {
"center": {"latitude": 44.9755100, "longitude": -116.2842180},
"radius": 20
}
},
"rankPreference": "DISTANCE"
}' \
"https://places.googleapis.com/v1/places:searchNearby"
The response includes businesses that will open in the future, along with their business status
and anticipated opening date:
{
"places" : [
{
"id" : "ChIJp1-VoKWJplQRMz8g-7Wa3Do" ,
"businessStatus" : "FUTURE_OPENING" ,
"displayName" : {
"text" : "Roberts Greenhouse and Tree Farm" ,
"languageCode" : "en"
},
"openingDate" : {
"year" : 2026 ,
"month" : 4 ,
"day" : 15
}
}
]
}
Try it!
The APIs Explorer lets you make sample requests so
that you can get familiar with the API and the API options.
Select the API icon api
on the right side of the page.
Optionally edit the request parameters.
Select the Execute button. In the dialog, choose the account
that you want to use to make the request.
In the APIs Explorer panel, select the fullscreen icon
fullscreen to expand the APIs Explorer window.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

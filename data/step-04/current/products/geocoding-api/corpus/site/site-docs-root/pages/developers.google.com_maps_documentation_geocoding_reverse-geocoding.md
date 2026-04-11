---
title: "Reverse geocode a location \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reverse-geocoding
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reverse-geocoding
  title: "Reverse geocode a location \_|\_ Geocoding API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Send feedback
Reverse geocode a location
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Reverse geocoding translates a map location into a human-readable
address. You represent the map location by the latitude and longitude
coordinates of the location.
When you reverse geocode a location, the response contains the:
Place ID of the
address
Plus Codes of the address
Address details
This API returns different types of addresses, from the most specific street
address to less specific political entities such as neighborhoods, cities,
counties, and states. The most exact address is generally the first result. If
you want to match a specific type of address, use the
types parameter.
Note: Reverse geocoding is an estimate. The geocoder tries to find the closest
addressable location within a certain tolerance. If the geocoder doesn't find a
match, it returns zero results.
Reverse geocoding request
A
reverse geocoding
request is an HTTP GET request. You can specify the location
as an unstructured string :
https://geocode.googleapis.com/v4/geocode/location/ LATITUDE , LONGITUDE
Or as a structured set of latitude and longitude
coordinates represented by query parameters:
https://geocode.googleapis.com/v4/geocode/location? location.latitude= LATITUDE & location.longitude= LONGITUDE
You typically use the structured format when processing location components
captured in an HTML form.
Pass all other parameters as URL parameters or, for parameters such as the API
key or field mask, in headers as part of the GET request. For example:
Pass an unstructured location string
An unstructured location is a location formatted as a comma-separated string of
latitude and longitude coordinates:
https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338 ?key= API_KEY
Or in a curl command:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
"https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338"
Pass a structured location
Specify the structured location by using the location query parameter, of type
LatLng .
The LatLng object lets you specify the latitude and longitude as separate
query parameters:
https://geocode.googleapis.com/v4/geocode/location? location.latitude=37.4225508 & location.longitude=-122.0846338 & key= API_KEY
Use OAuth to make a request
Geocoding API v4 supports OAuth
2.0 for authentication. To use OAuth
with the Geocoding API, the OAuth token must be assigned the correct scope.
Geocoding API supports the following scopes for use with reverse geocoding:
https://www.googleapis.com/auth/maps-platform.geocode
— Use with all Geocoding API methods.
https://www.googleapis.com/auth/maps-platform.geocode.location
— Use only with GeocodeLocation for reverse geocoding.
Also, you can use the general https://www.googleapis.com/auth/cloud-platform
scope for all Geocoding API methods. That scope is useful during
development, but not production, because it is a general scope that allows
access to all methods.
For more information and examples, see Use
OAuth .
Reverse geocoding response
Reverse geocoding returns a
GeocodeLocationResponse
object that contains:
The results array of
GeocodeResult
objects that represents the place.
The Geocoding API responses include types arrays in two main places within the
GeocodeResult :
GeocodeResult.types : This array indicates the overall type(s) of the
result. The possible values are drawn from Table A and Table B on the Place Types (New) page.
GeocodeResult.addressComponents[].types : Each address component has a
types array indicating the type of that specific part of the address.
These values are drawn from the Address types and address component types table on the Place Types (New) page.
The reverse geocoder returns more than one result in the results array.
The results are not just postal addresses, but any way to geographically
name a location. For example, when geocoding a point in the city of Chicago,
the geocoded point may be denoted as a street address, as the city
(Chicago), as its state (Illinois) or as a country (The United States). All
are "addresses" to the geocoder. The reverse geocoder returns any of these
types as valid results.
The plusCode field, of type PlusCode , contains the Plus Code that best
approximates the latitude and longitude in the request. In addition, each
element of the results array contains a Plus Code. The distance between
the decoded Plus Code and the request point is under 10 meters.
Note: The API does not always return Plus Codes.
The complete JSON object is in the form:
{
"results" : [
{
"place" : "//places.googleapis.com/places/ChIJV-FZF7i7j4ARo4ZOUoecZFU" ,
"placeId" : "ChIJV-FZF7i7j4ARo4ZOUoecZFU" ,
"location" : {
"latitude" : 37.422588300000008 ,
"longitude" : -122.0846489
},
"granularity" : "ROOFTOP" ,
"viewport" : {
"low" : {
"latitude" : 37.421239319708512 ,
"longitude" : -122.0859978802915
},
"high" : {
"latitude" : 37.423937280291511 ,
"longitude" : -122.08329991970851
}
},
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"addressComponents" : [
{
"longText" : "1600" ,
"shortText" : "1600" ,
"types" : [
"street_number"
]
},
{
"longText" : "Amphitheatre Parkway" ,
"shortText" : "Amphitheatre Pkwy" ,
"types" : [
"route"
],
"languageCode" : "en"
},
{
"longText" : "Mountain View" ,
"shortText" : "Mountain View" ,
"types" : [
"locality" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "Santa Clara County" ,
"shortText" : "Santa Clara County" ,
"types" : [
"administrative_area_level_2" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "California" ,
"shortText" : "CA" ,
"types" : [
"administrative_area_level_1" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "United States" ,
"shortText" : "US" ,
"types" : [
"country" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "94043" ,
"shortText" : "94043" ,
"types" : [
"postal_code"
]
}
],
"types" : [
"street_address"
],
"plusCode" : {
"globalCode" : "849VCW83+PM" ,
"compoundCode" : "CW83+PM Mountain View, CA, USA"
}
},
{
"place" : "//places.googleapis.com/places/ChIJj61dQgK6j4AR4GeTYWZsKWw" ,
"placeId" : "ChIJj61dQgK6j4AR4GeTYWZsKWw" ,
"location" : {
"latitude" : 37.4220541 ,
"longitude" : -122.08532419999999
},
"granularity" : "ROOFTOP" ,
"viewport" : {
"low" : {
"latitude" : 37.4207051197085 ,
"longitude" : -122.08667318029148
},
"high" : {
"latitude" : 37.423403080291493 ,
"longitude" : -122.08397521970851
}
},
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"addressComponents" : [
{
"longText" : "1600" ,
"shortText" : "1600" ,
"types" : [
"street_number"
]
},
{
"longText" : "Amphitheatre Parkway" ,
"shortText" : "Amphitheatre Pkwy" ,
"types" : [
"route"
],
"languageCode" : "en"
},
{
"longText" : "Mountain View" ,
"shortText" : "Mountain View" ,
"types" : [
"locality" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "Santa Clara County" ,
"shortText" : "Santa Clara County" ,
"types" : [
"administrative_area_level_2" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "California" ,
"shortText" : "CA" ,
"types" : [
"administrative_area_level_1" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "United States" ,
"shortText" : "US" ,
"types" : [
"country" ,
"political"
],
"languageCode" : "en"
},
{
"longText" : "94043" ,
"shortText" : "94043" ,
"types" : [
"postal_code"
]
}
],
"types" : [
"establishment" ,
"point_of_interest"
],
"plusCode" : {
"globalCode" : "849VCWC7+RV" ,
"compoundCode" : "CWC7+RV Mountain View, CA, USA"
}
},
...
],
"plusCode" : {
"globalCode" : "849VCWF8+24H" ,
"compoundCode" : "CWF8+24H Mountain View, CA, USA"
}
}
Required parameters
location
The latitude and longitude coordinates specifying where
you want the closest, human-readable address.
Optional parameters
languageCode
The language in which to return results.
See the
list of supported languages . Google often updates
the supported languages, so this list may not be exhaustive.
If languageCode is not supplied, the API defaults to en . If
you specify an invalid language code, the API returns an INVALID_ARGUMENT error.
The API does its best to provide a street address that is readable for
both the user and locals. To achieve that goal, it returns street
addresses in the local language, transliterated to a script readable by
the user if necessary, observing the preferred language. All other
addresses are returned in the preferred language. Address components are
all returned in the same language, which is chosen from the first
component.
If a name is not available in the preferred language, the API uses the
closest match.
The preferred language has a small influence on the set of results that
the API chooses to return, and the order in which they are returned. The
geocoder interprets abbreviations differently depending on language,
such as the abbreviations for street types, or synonyms that may be
valid in one language but not in another.
regionCode
The region code as a
two-character CLDR code value. There is no default value. Most CLDR codes are identical to ISO 3166-1 codes.
When geocoding an address, forward geodcoding , this parameter can influence, but not
fully restrict, results from the service to the specified region. When geocoding a location or a
place, reverse geocoding or place geocoding , this parameter can be used to
format the address. In all cases, this parameter can affect results based on applicable law.
granularity
One or more location granularities, specified as separate query parameters, as defined by Granularity .
If you specify multiple granularity parameters, the API returns all addresses that match any of the granularities.
The granularity parameter does not
restrict the search to the specified location granularities. Rather,
granularity acts as a post-search filter. The API fetches all
results for the specified location , then discards those results
that don't match the specified location granularities.
If you specify both types and granularity then
the API returns only those results that match both. For example:
https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338? granularity=ROOFTOP & granularity=GEOMETRIC_CENTER & key= API_KEY
types
One or more address types, specified as separate query parameters. The
possible values are drawn from the
Address
types and address component types table on the Place Types (New) page.
If you specify multiple types parameters, the API returns
all addresses that match any of the types.
The types parameter does not
restrict the search to the specified address type(s). Rather,
types acts as a post-search filter. The API fetches all
results for the specified location, then discards those results
that don't match the specified address type(s).
If you specify both types and granularity then
the API returns only those results that match both. For example:
https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338? types=administrative_area_level_2 & types=locality & key= API_KEY
FieldMask
Create a response field mask to specify the fields to return in the response. Pass the response field mask to the method by using the URL parameter
$fields or fields , or by using the HTTP header
X-Goog-FieldMask . For example, the below request will return only the placeID fields of the response.
curl -X GET -H 'Content-Type: application/json' \
-H 'X-Goog-FieldMask: results.placeId' \
-H "X-Goog-Api-Key: API_KEY " \
"https://geocode.googleapis.com/v4/geocode/location/37.4225508,-122.0846338"
The response is:
{
"results" : [
{
"placeId" : "ChIJHRNUiQK6j4ARJ__Hrbt6qsE"
},
{
"placeId" : "ChIJj38IfwK6j4ARNcyPDnEGa9g"
},
{
"placeId" : "ChIJ1yjFJ1-7j4ARG_RVqFD1h7k"
},
{
"placeId" : "ChIJ09H2YwK6j4ARoF7qfCBxhB8"
},
...
]
}
See Choose fields to return for more details.
Important: Field masking is a good design practice to ensure that you don't
request unnecessary data, which helps to avoid unnecessary processing time.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

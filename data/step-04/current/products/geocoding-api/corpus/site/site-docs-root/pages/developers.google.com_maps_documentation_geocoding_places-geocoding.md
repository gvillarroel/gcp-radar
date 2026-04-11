---
title: "Geocode a place \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/places-geocoding
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/places-geocoding
  title: "Geocode a place \_|\_ Geocoding API \_|\_ Google for Developers"
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
Geocode a place
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Place geocoding lets you retrieve an address from a place
ID .
Place IDs uniquely identify a place in the Google Places database and on Google
Maps. Retrieve place IDs when you Geocode
an
address . You can also retrieve a place ID from many other APIs, such as
Place Details (New) ,
Text Search (New) ,
and Nearby
Search
(New) .
Place geocoding requests
A place
geocoding
request is an HTTP GET request in the form:
https://geocode.googleapis.com/v4/geocode/places/ PLACE_ID
Where PLACE_ID contains the place ID of the location of interest.
Pass all other parameters as URL parameters or, for parameters such as the API
key or field mask, in headers as part of the GET request. For example:
https://geocode.googleapis.com/v4/geocode/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?key= API_KEY
Or in a curl command:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
"https://geocode.googleapis.com/v4/geocode/places/ChIJj61dQgK6j4AR4GeTYWZsKWw"
Use OAuth to make a request
Geocoding API v4 supports OAuth
2.0 for authentication. To use OAuth
with the Geocoding API, the OAuth token must be assigned the correct scope.
Geocoding API supports the following scopes for use with place geocoding:
https://www.googleapis.com/auth/maps-platform.geocode
— Use with all Geocoding API methods.
https://www.googleapis.com/auth/maps-platform.geocode.place
— Use only with GeocodePlace for place geocoding.
Also, you can use the general https://www.googleapis.com/auth/cloud-platform
scope for all Geocoding API methods. That scope is useful during development,
but not production, because it is a general scope that allows access to all
methods.
For more information and examples, see Use
OAuth .
Place geocoding responses
Place geocoding returns a
GeocodeResult
object that represents the place corresponding to the place ID.
The Geocoding API responses include types arrays in two main places within the
GeocodeResult :
GeocodeResult.types : This array indicates the overall type(s) of the
result. The possible values are drawn from Table A and Table B on the Place Types (New) page.
GeocodeResult.addressComponents[].types : Each address component has a
types array indicating the type of that specific part of the address.
These values are drawn from the Address types and address component types table on the Place Types (New) page.
The complete JSON object is in the form:
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
"latitude" : 37.4209489697085 ,
"longitude" : -122.08846930000001
},
"high" : {
"latitude" : 37.4236469302915 ,
"longitude" : -122.0829156
}
},
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94043" ,
"administrativeArea" : "CA" ,
"locality" : "Mountain View" ,
"addressLines" : [
"1600 Amphitheatre Pkwy"
]
},
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
]
}
Required parameters
place — The place ID of the place for which
you want to obtain the human-readable address. The place ID is a unique
identifier that can be used with other Google APIs. For example, you can
use the placeID returned by the
Roads API
to get the address for a snapped point. For more information about place
IDs, see the Place IDs .
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
FieldMask
Create a response field mask to specify the fields to return in the response. Pass the response field mask to the method by using the URL parameter
$fields or fields , or by using the HTTP header
X-Goog-FieldMask . For example, the below request will return only the formattedAddress field of the response.
curl -X GET -H 'Content-Type: application/json' \
-H 'X-Goog-FieldMask: formattedAddress' \
-H "X-Goog-Api-Key: API_KEY " \
"https://geocode.googleapis.com/v4/geocode/places/ChIJj61dQgK6j4AR4GeTYWZsKWw"
The response is:
{
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
}
See Choose fields to return for more details.
Important: Field masking is a good design practice to ensure that you don't
request unnecessary data, which helps to avoid unnecessary processing time.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/using-session-tokens
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/using-session-tokens
  title: "Places API \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
Web Service
Using session tokens
Session tokens group the query and selection phases of a user autocomplete
search into a discrete session for billing purposes. The following examples show
how to use session tokens in Autocomplete (New) and Place Details (New) calls.
Create a session token
Users are responsible for generating unique session tokens for each session.
Google recommends using version 4 UUIDs .
Note: Session tokens can overlap across Google Cloud Console projects, but they
must be unique per project. For example, an app using Project A and an app using
Project B can use the same session token, but multiple apps using Project A
cannot use the same session token.
Make an Autocomplete (New) request
An Autocomplete (New) request is an HTTP POST request. For more
information about request body parameters, see Autocomplete (New)
requests.
The following series of requests show a user searching for a pizza shop in San
Francisco. As the user begins typing a query, Autocomplete (New) is called
for each keystroke. The generated session token is passed as a parameter in each
call.
First request and response
Request 1
curl -X POST -d '{
"input": "p",
" sessionToken ": "3519edfe-0f75-4a30-bfe4-7cbd89340b2c",
"locationBias": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 500.0
}
}
}' -H 'Content-Type: application/json' -H "X-Goog-Api-Key: YOUR_API_KEY " \
https://places.googleapis.com/v1/places:autocomplete
Response 1
{
"suggestions" : [
{
"placePrediction" : {
"place" : "places/ChIJHSGzi_yAhYARnrPmDWAx9ro" ,
"placeId" : "ChIJHSGzi_yAhYARnrPmDWAx9ro" ,
"text" : {
"text" : "PIER 39, The Embarcadero, San Francisco, CA, USA" ,
"matches" : [
{
"endOffset" : 1
}
]
},
"structuredFormat" : {
"mainText" : {
"text" : "PIER 39" ,
"matches" : [
{
"endOffset" : 1
}
]
},
"secondaryText" : {
"text" : "The Embarcadero, San Francisco, CA, USA"
}
},
"types" : [
"historical_landmark" ,
"shopping_mall" ,
"point_of_interest" ,
"establishment" ,
"marina" ,
"tourist_attraction"
]
}
},
]
/ ... /
}
Second request and response
Request 2
curl -X POST -d '{
"input": "pi",
" sessionToken ": "3519edfe-0f75-4a30-bfe4-7cbd89340b2c",
"locationBias": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 500.0
}
}
}' -H 'Content-Type: application/json' -H "X-Goog-Api-Key: YOUR_API_KEY " \
https://places.googleapis.com/v1/places:autocomplete
Response 2
{
"suggestions" : [
{
"placePrediction" : {
"place" : "places/ChIJHSGzi_yAhYARnrPmDWAx9ro" ,
"placeId" : "ChIJHSGzi_yAhYARnrPmDWAx9ro" ,
"text" : {
"text" : "PIER 39, The Embarcadero, San Francisco, CA, USA" ,
"matches" : [
{
"endOffset" : 2
}
]
},
"structuredFormat" : {
"mainText" : {
"text" : "PIER 39" ,
"matches" : [
{
"endOffset" : 2
}
]
},
"secondaryText" : {
"text" : "The Embarcadero, San Francisco, CA, USA"
}
},
"types" : [
"establishment" ,
"point_of_interest" ,
"shopping_mall" ,
"marina" ,
"historical_landmark" ,
"tourist_attraction"
]
}
},
/.../
]
}
Third request and response
Request 3
curl -X POST -d '{
"input": "piz",
" sessionToken ": "3519edfe-0f75-4a30-bfe4-7cbd89340b2c",
"locationBias": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965
},
"radius": 500.0
}
}
}' -H 'Content-Type: application/json' -H "X-Goog-Api-Key: YOUR_API_KEY " https://places.googleapis.com/v1/places:autocomplete
Response 3
{
"suggestions" : [
{
"placePrediction" : {
"place" : "places/ChIJ_QJSSfGAhYARQVFJBNKy3HE" ,
"placeId" : "ChIJ_QJSSfGAhYARQVFJBNKy3HE" ,
"text" : {
"text" : "Pizza By The Slice, Grant Avenue, San Francisco, CA, USA" ,
"matches" : [
{
"endOffset" : 3
}
]
},
"structuredFormat" : {
"mainText" : {
"text" : "Pizza By The Slice" ,
"matches" : [
{
"endOffset" : 3
}
]
},
"secondaryText" : {
"text" : "Grant Avenue, San Francisco, CA, USA"
}
},
"types" : [
"establishment" ,
"point_of_interest" ,
"food" ,
"pizza_restaurant" ,
"restaurant"
]
}
},
/.../
]
}
Note: You can use the optional inputOffset parameter to specify the position
of the cursor in the input field.
End the session
Terminate a session by making a request to Place Details (New) or Address
Validation and passing the same session token that you used for the Autocomplete
(New) requests.
Make a Place Details (New) request
A Place Details (New) request is an HTTP GET request. For more information
about request body parameters, see Place Details (New) requests.
The following Place Details (New) request includes the selected place's
id and the sessionToken used in previous Autocomplete (New) calls.
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: YOUR_API_KEY " \
-H "X-Goog-FieldMask: id,displayName,accessibilityOptions,businessStatus" \
https://places.googleapis.com/v1/places/ChIJ_QJSSfGAhYARQVFJBNKy3HE? sessionToken =3519edfe-0f75-4a30-bfe4-7cbd89340b2c
Using a place id of ChIJ_QJSSfGAhYARQVFJBNKy3HE , the call generates the
following JSON response:
{
"id" : "ChIJ_QJSSfGAhYARQVFJBNKy3HE" ,
"businessStatus" : "OPERATIONAL" ,
"displayName" : {
"text" : "Pizza By The Slice" ,
"languageCode" : "en"
},
"accessibilityOptions" : {
"wheelchairAccessibleParking" : false ,
"wheelchairAccessibleEntrance" : true
}
}
Make an Address Validation request
An Address Validation request is an HTTP POST request. For more information
about request body parameters, see Send an address validation request .
The following Address Validation request includes the address of the selected
place, found in the text field of the Autocomplete (New) response, and the
sessionToken used in previous Autocomplete (New) calls.
curl -X POST -d '{
" sessionToken ": "3519edfe-0f75-4a30-bfe4-7cbd89340b2c",
"address": {
"addressLines": "Pizza By The Slice, Grant Avenue, San Francisco, CA, USA"
}
}' \
-H 'Content-Type: application/json' \
"https://addressvalidation.googleapis.com/v1:validateAddress?key= YOUR_API_KEY "
The call generates the following JSON response:
{
"result" : {
"verdict" : {
"inputGranularity" : "PREMISE" ,
"validationGranularity" : "PREMISE" ,
"geocodeGranularity" : "PREMISE" ,
"hasInferredComponents" : true
},
"address" : {
"formattedAddress" : "Pizza By The Slice, Grant Avenue, San Francisco, CA 94133, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94133" ,
"administrativeArea" : "CA" ,
"locality" : "San Francisco" ,
"addressLines" : [
"Pizza By The Slice" ,
"Grant Ave"
]
},
"addressComponents" : [
{
"componentName" : {
"text" : "Pizza By The Slice" ,
"languageCode" : "en"
},
"componentType" : "point_of_interest" ,
"confirmationLevel" : "CONFIRMED"
},
{
"componentName" : {
"text" : "Grant Avenue" ,
"languageCode" : "en"
},
"componentType" : "route" ,
"confirmationLevel" : "CONFIRMED"
},
{
"componentName" : {
"text" : "San Francisco" ,
"languageCode" : "en"
},
"componentType" : "locality" ,
"confirmationLevel" : "CONFIRMED"
},
{
"componentName" : {
"text" : "CA" ,
"languageCode" : "en"
},
"componentType" : "administrative_area_level_1" ,
"confirmationLevel" : "CONFIRMED"
},
{
"componentName" : {
"text" : "USA" ,
"languageCode" : "en"
},
"componentType" : "country" ,
"confirmationLevel" : "CONFIRMED"
},
{
"componentName" : {
"text" : "94133"
},
"componentType" : "postal_code" ,
"confirmationLevel" : "CONFIRMED" ,
"inferred" : true
}
],
"missingComponentTypes" : [
"street_number"
]
},
"geocode" : {
"location" : {
"latitude" : 37.800504 ,
"longitude" : -122.4074794
},
"plusCode" : {
"globalCode" : "849VRH2V+62"
},
"bounds" : {
"low" : {
"latitude" : 37.800504 ,
"longitude" : -122.4074794
},
"high" : {
"latitude" : 37.800504 ,
"longitude" : -122.4074794
}
},
"featureSizeMeters" : 10 ,
"placeId" : "ChIJ_QJSSfGAhYARQVFJBNKy3HE" ,
"placeTypes" : [
"food" ,
"restaurant" ,
"point_of_interest" ,
"establishment"
]
},
"uspsData" : {
"standardizedAddress" : {
"firstAddressLine" : "PIZZA BY THE SLICE" ,
"secondAddressLine" : "GRANT AVE" ,
"cityStateZipAddressLine" : "SAN FRANCISCO" ,
"city" : "SAN FRANCISCO" ,
"state" : "CA" ,
"zipCode" : "94133"
},
"dpvFootnote" : "A1M1" ,
"postOfficeCity" : "SAN FRANCISCO" ,
"postOfficeState" : "CA"
}
},
"responseId" : "4b669675-2c3b-463a-ae20-400248cf6ac9"
}
Abandon a session
A session terminates if the user abandons the session. For example, if a user
begins searching for a pizza shop but does not select a place (triggering a
Place Details (New) call) or validate the address (triggering an Address
Validation call), the session terminates and the session token expires.
Previous
arrow_back
About session tokens
Next
Autocomplete (New) and session pricing
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Session tokens group autocomplete searches for billing. Each session requires a unique token, preferably a version 4 UUID, and is unique per project. Autocomplete requests, using POST, pass the token with each keystroke. Sessions end by calling Place Details (New) or Address Validation with the same token. These also use POST or GET. If no selection is made, the session terminates, and the token expires. The provided examples use `curl` to demonstrate these processes.\n"]]

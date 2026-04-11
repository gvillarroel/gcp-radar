---
title: "Place Details (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/place-details
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/place-details
  title: "Place Details (New) \_|\_ Places API \_|\_ Google for Developers"
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
Place Details (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Place Details API returns comprehensive information about a place, such as its address, phone number, ratings, and reviews, using a unique place ID.
Place IDs can be obtained through various methods, including Text Search, Nearby Search, Geocoding API, Routes API, Address Validation API, and Place Autocomplete.
A Place Details request requires a FieldMask to specify the desired data fields in the response, optimizing data retrieval and billing.
You can use the API Explorer to experiment with the Place Details API and understand its functionalities and response structure.
The API supports customizing the response language and region code for better localization.
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
Once you have a place ID , you can
request more details about a particular establishment or
point of interest by initiating a
Place Details (New)
request. A Place Details (New)
request returns more comprehensive information about the indicated place
such as its complete address, phone number, user rating and reviews.
There are many ways to obtain a place ID. You can use:
Text Search (New) or
Nearby Search (New)
Geocoding API
Routes API
Address Validation API
Autocomplete (New)
The APIs Explorer lets you make live requests so that you can get familiar with
the API and the API options:
Try it!
Place Details (New) requests
A Place Details (New) request is an HTTP GET request in the form:
https://places.googleapis.com/v1/places/ PLACE_ID
Pass all parameters as URL parameters or in headers as part of the
GET request. For example:
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=id,displayName & key= API_KEY
Or in a curl command:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id,displayName" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
Place Details (New) responses
Place Details (New) returns a
JSON object as a response . In the response:
The response is represented by a
Place
object. The Place object contains detailed information about the
place.
The FieldMask passed in the request specifies the list of fields
returned in the Place object.
The complete JSON object is in the form:
{
"name" : "places/ChIJkR8FdQNB0VQRm64T_lv1g1g" ,
"id" : "ChIJkR8FdQNB0VQRm64T_lv1g1g" ,
"displayName" : {
"text" : "Trinidad"
}
...
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
X - Goog - FieldMask : displayName , formattedAddress
Note: Spaces are not allowed anywhere
in the field list.
Use * to retrieve all fields.
X - Goog - FieldMask : *
While the
wildcard (*) is fine to use in development, Google discourages the use of the
wildcard response field mask in production because of the large amount
of data that can be returned.
Further guidance for using iconMaskBaseUri and
iconBackgroundColor can be found in
Place Icons section.
Specify one or more of the following fields:
The following fields trigger the Place Details Essentials IDs Only SKU :
attributions
id
moved_place
moved_place_id
name *
photos
* The name field contains the place resource name
in the form: places/ PLACE_ID . To get the text name of the place, request the displayName field in the Pro SKU.
The following fields trigger the Place Details Essentials SKU :
addressComponents
addressDescriptor *
adrFormatAddress
formattedAddress
location
plusCode
postalAddress
shortFormattedAddress
types
viewport
* Address descriptors are generally available for customers in India and are experimental elsewhere.
The following fields trigger the Place Details Pro SKU :
accessibilityOptions
businessStatus
containingPlaces
displayName
googleMapsLinks
googleMapsUri
iconBackgroundColor
iconMaskBaseUri
openingDate
primaryType
primaryTypeDisplayName
pureServiceAreaBusiness
subDestinations
timeZone
utcOffsetMinutes
The following fields trigger the Place Details Enterprise SKU :
currentOpeningHours
currentSecondaryOpeningHours
internationalPhoneNumber
nationalPhoneNumber
priceLevel
priceRange
rating
regularOpeningHours
regularSecondaryOpeningHours
userRatingCount
websiteUri
The following fields trigger the Place Details Enterprise + Atmosphere SKU :
allowsDogs
curbsidePickup
delivery
dineIn
editorialSummary
evChargeAmenitySummary
evChargeOptions
fuelOptions
generativeSummary
goodForChildren
goodForGroups
goodForWatchingSports
liveMusic
menuForChildren
neighborhoodSummary
parkingOptions
paymentOptions
outdoorSeating
reservable
restroom
reviews
reviewSummary
routingSummaries *
servesBeer
servesBreakfast
servesBrunch
servesCocktails
servesCoffee
servesDessert
servesDinner
servesLunch
servesVegetarianFood
servesWine
takeout
* Text Search and Nearby Search only
placeId
A textual identifier that uniquely identifies a place, returned from a
Text Search (New) or
Nearby Search (New) .
For more information about place IDs, see the
place ID overview .
The string places/ PLACE_ID is also called the place
resource name . In the response from a Place Details (New),
Nearby Search (New), and Text Search (New)
request, this string is contained in the name field of the response. The standalone
place ID is contained in the id field of the response.
Note: In the
Place Details (Legacy) ,
the name field of the response contained the human-readable name for the place.
In the new API, that field is now called displayName .
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
The region code used to format the response, specified as a
two-character CLDR code value. There is no default value.
If the country name of the formattedAddress field in the response matches the
regionCode , the country code is omitted from formattedAddress .
This parameter has no effect on adrFormatAddress , which always includes the country
name, or on shortFormattedAddress , which never includes it.
Most CLDR codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
sessionToken
Session tokens are user-generated strings that track Autocomplete (New) calls as
"sessions." Autocomplete (New) uses session tokens to
group the query and place selection phases of a user autocomplete search into a discrete session
for billing purposes. Session tokens are passed into Place Details (New)
calls that follow Autocomplete (New) calls. For more information, see
Session tokens .
Place Details (New) example
The following example requests the details of a place by
placeId :
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id,displayName" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
Note that the X-Goog-FieldMask header specifies that the
response
contains the following data fields: id,displayName .
The response is then in the form:
{
"id" : "ChIJj61dQgK6j4AR4GeTYWZsKWw" ,
"displayName" : {
"text" : "Googleplex" ,
"languageCode" : "en"
}
}
Add more data types to the field mask to return additional information.
For example, add formattedAddress,plusCode to include the
address and Plus Code in the
response :
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id,displayName,formattedAddress,plusCode" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
The response is now in the form:
{
"id" : "ChIJj61dQgK6j4AR4GeTYWZsKWw" ,
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
"plusCode" : {
"globalCode" : "849VCWC7+RW" ,
"compoundCode" : "CWC7+RW Mountain View, CA, USA"
},
"displayName" : {
"text" : "Googleplex" ,
"languageCode" : "en"
}
}
Get address descriptors
Address descriptors provide relational information about a place's location, including nearby
landmarks and containing areas.
Note: Address descriptors are generally available for customers in India
and are experimental elsewhere. Places API requests that use only addressDescriptor
in the field mask will be billed at
SKU: Places API Place Details Essentials .
The following example shows a Place Details (New) request for a department store
in a San Jose mall. In this example, you include addressDescriptors
in the field mask:
curl -X GET https://places.googleapis.com/v1/places/ChIJ8WvuSB7Lj4ARFyHppkxDRQ4 \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: name,displayName, addressDescriptor "
The response includes the place specified in the request, a list of nearby landmarks and their
distance from the place, and a list of areas and their containment relationship to the
place:
{
"name" : "places/ChIJ8WvuSB7Lj4ARFyHppkxDRQ4" ,
"displayName" : {
"text" : "Macy's" ,
"languageCode" : "en"
},
"addressDescriptor" : {
"landmarks" : [
{
"name" : "places/ChIJVVVVUB7Lj4ARXyb4HFVDV8s" ,
"placeId" : "ChIJVVVVUB7Lj4ARXyb4HFVDV8s" ,
"displayName" : {
"text" : "Westfield Valley Fair" ,
"languageCode" : "en"
},
"types" : [
"clothing_store" ,
"department_store" ,
"establishment" ,
"food" ,
"movie_theater" ,
"point_of_interest" ,
"restaurant" ,
"shoe_store" ,
"shopping_mall" ,
"store"
],
"spatialRelationship" : "WITHIN" ,
"straightLineDistanceMeters" : 220.29175
},
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
"straightLineDistanceMeters" : 329.45178
},
{
"name" : "places/ChIJmx1c5x7Lj4ARJXJy_CU_JbE" ,
"placeId" : "ChIJmx1c5x7Lj4ARJXJy_CU_JbE" ,
"displayName" : {
"text" : "Monroe Parking Garage" ,
"languageCode" : "en"
},
"types" : [
"establishment" ,
"parking" ,
"point_of_interest"
],
"straightLineDistanceMeters" : 227.05153
},
{
"name" : "places/ChIJxcwBziHLj4ARUQLAvtzkRCM" ,
"placeId" : "ChIJxcwBziHLj4ARUQLAvtzkRCM" ,
"displayName" : {
"text" : "Studios Inn by Daiwa Living California Inc." ,
"languageCode" : "en"
},
"types" : [
"establishment" ,
"lodging" ,
"point_of_interest" ,
"real_estate_agency"
],
"straightLineDistanceMeters" : 299.9955
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
"straightLineDistanceMeters" : 157.70943
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
"containment" : "WITHIN"
}
]
}
}
Get place details for a moved place
If a place referenced in your app has relocated, you can use the
movedPlace and movedPlaceId fields to get the details of the new place.
For places that are permanently closed , Place Details (New) returns CLOSED_PERMANENTLY in the
businessStatus field and omits the movedPlace and
movedPlaceId fields in the response body.
For places that have moved to a new location , Place Details (New) returns CLOSED_PERMANENTLY in the
businessStatus field and returns the new location in the movedPlace and
movedPlaceId fields of the response body.
For places that have not moved , Place Details (New) does not return
movedPlace or movedPlaceId in the response body.
The following example requests place information about Marche IGA St-Canut in Quebec, Canada:
curl -X GET -H 'Content-Type: application/json' \
-H 'x-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: id,displayName, businessStatus,movedPlace,movedPlaceId ' \
https://places.googleapis.com/v1/places/ChIJUfQdGInVzkwRzAjmjzWB7CQ
The request returns the following response:
{
"id" : "ChIJUfQdGInVzkwRzAjmjzWB7CQ" ,
"businessStatus" : "CLOSED_PERMANENTLY" ,
"displayName" : {
"text" : "Marche IGA St-Canut" ,
"languageCode" : "en"
},
"movedPlace" : "places/ChIJ36QT7n8qz0wRDqVZ_UBlUlQ" ,
"movedPlaceId" : "ChIJ36QT7n8qz0wRDqVZ_UBlUlQ"
}
To request details about the new place, use the Place resource name in the movedPlace field
in a new Place Details (New) request.
For places that have relocated multiple times , getting details about the current location
may require multiple chained Place Details (New) requests. The movedPlace and
movedPlaceId fields of a place result only point to the next location, not the last
known location. A place is in its current location if a Place Details (New) request
omits the movedPlace and movedPlaceId fields in the response body.
Find businesses opening in the future
You can request details about businesses that are expected to open in the future.
Nearby Search (New) will populate the openingDate field if the anticipated
opening date includes at least the month and is fewer than 90 days away.
The following example shows a Nearby Search (New) request for a business opening in the
future in New Meadows, Idaho:
curl -X GET \
-H "Content-Type: application/json" \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: id, businessStatus,openingDate " \
"https://places.googleapis.com/v1/places/ChIJp1-VoKWJplQRMz8g-7Wa3Do"
The response includes the place's business status and anticipated opening date:
{
"id" : "ChIJp1-VoKWJplQRMz8g-7Wa3Do" ,
"businessStatus" : "FUTURE_OPENING" ,
"openingDate" : {
"year" : 2026 ,
"month" : 4 ,
"day" : 15
}
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
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["After obtaining a place ID from sources like Text Search or Geocoding API, you can request detailed information about a specific location using a Place Details request. This HTTP GET request, sent to `https://places.googleapis.com/v1/places/PLACE_ID`, requires a `FieldMask` to specify desired data fields (e.g., `id`, `displayName`). The response returns a JSON object with comprehensive details such as address, rating, and other features, based on the selected fields. Different fields trigger different pricing SKUs.\n"]]

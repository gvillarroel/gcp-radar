---
title: "Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/details-place
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/details-place
  title: "Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Guides
Send feedback
Place Details (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Request detailed information about a place using its Place ID and the Place Details (New) feature in the Places SDK for Android (version 3.3.0 or later).
Obtain a place ID through Text Search, Nearby Search, or Autocomplete.
Construct a FetchPlaceRequest with the place ID and a field list specifying the desired data, then use PlacesClient.fetchPlace() to retrieve the details.
Place Details (New) returns a Place object containing the requested fields, allowing access to data like address, phone number, ratings, and reviews.
Tailor your requests by using optional parameters like region code and session token for customized results and billing management.
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
You can request more details about a particular establishment or point of
interest by using its place
ID and making a
Place Details (New) request .
Place Details (New) returns more comprehensive
information about the indicated place, such as its complete address, phone
number, user rating and reviews.
There are many ways to obtain a place ID. You can use:
Text Search (New)
Nearby Search (New)
Autocomplete (New)
Note: Place Details (New) is available in Places SDK
for Android version 3.3.0 and later. For more information, see Choose your SDK
version . For more
information about using the Kotlin APIs added in version
4.0.0, see the Reference
Overview .
Place Details (New) requests
You can request place details by calling
PlacesClient.fetchPlace()
and passing a
FetchPlaceRequest
object containing a place ID and field list , as well
as any optional parameters :
// Define a place ID.
final String placeId = "INSERT_PLACE_ID_HERE" ;
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( "INSERT_PLACE_FIELDS_HERE" );
// Construct a request object, passing the place ID and field list.
final FetchPlaceRequest request = FetchPlaceRequest . newInstance ( placeId , placeFields );
// Pass the request object and make the request
Task<FetchPlaceResponse> placeTask = placesClient . fetchPlace ( request );
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Place Details (New) responses
Place Details (New) returns data in the form of a
Place
object, which includes only the fields that you requested using the field
list . Place data results cannot be empty, so only place results
with data are returned (for example, if a requested place has no photos, the
photos field won't be present in the result).
To access data fields, call the corresponding
method .
For example, to access the place name, call getName() .
Required parameters
The required parameters for
FetchPlaceRequest
are:
Place ID
A textual identifier that uniquely identifies a place, returned from a
Text Search (New) ,
Nearby Search (New) , or
Autocomplete (New) .
For more information about place IDs, see the
place ID overview .
Field list
When you request a place, you must specify which place data to return. To
do this, pass a list of Place.Field values
specifying the data to return. There is no default list of
returned fields in the response.
Field lists are a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and
billing charges.This list is an important consideration
because it affects the cost for each request. For more information, see
Usage
and Billing .
Specify one or more of the following fields:
The following fields trigger the Place Details Essentials IDs Only SKU :
Place.Field.ID
Place.Field.PHOTO_METADATAS
Place.Field.RESOURCE_NAME
Note: The RESOURCE_NAME field contains the place resource name in the form: places/PLACE_ID . Use DISPLAY_NAME in the Pro SKU to access the text name of the place.
The following fields trigger the Place Details Essentials SKU :
Place.Field.ADDRESS_COMPONENTS
ADR_FORMAT_ADDRESS
Place.Field.FORMATTED_ADDRESS *
* Use instead of Place.Field.ADDRESS (deprecated).
Place.Field.LOCATION *
* Use instead of Place.Field.LAT_LNG (deprecated).
Place.Field.PLUS_CODE
Place.Field.SHORT_FORMATTED_ADDRESS
Place.Field.TYPES
Place.Field.VIEWPORT
The following fields trigger the Place Details Pro SKU :
Place.Field.ACCESSIBILITY_OPTIONS *
* Use instead of Place.Field.WHEELCHAIR_ACCESSIBLE_ENTRANCE (deprecated).
Place.Field.BUSINESS_STATUS
Place.Field.DISPLAY_NAME *
* Use instead of Place.Field.NAME , which is deprecated.
Place.Field.GOOGLE_MAPS_URI
Place.Field.ICON_BACKGROUND_COLOR
Place.Field.ICON_MASK_URL *
* Use instead of Place.Field.ICON_URL (deprecated).
Place.Field.PRIMARY_TYPE
Place.Field.PRIMARY_TYPE_DISPLAY_NAME
Place.Field.SUB_DESTINATIONS
Place.Field.UTC_OFFSET
The following fields trigger the Place Details Enterprise SKU :
Place.Field.CURRENT_OPENING_HOURS
Place.Field.CURRENT_SECONDARY_OPENING_HOURS
Place.Field.INTERNATIONAL_PHONE_NUMBER *
* Use instead of Place.Field.PHONE_NUMBER , which is
deprecated.
Place.Field.NATIONAL_PHONE_NUMBER
Place.Field.OPENING_HOURS
Place.Field.PRICE_LEVEL
Place.Field.RATING
Place.Field.SECONDARY_OPENING_HOURS
Place.Field.USER_RATING_COUNT *
* Use instead of Place.Field.USER_RATINGS_TOTAL , which is
deprecated.
Place.Field.WEBSITE_URI
The following fields trigger the Place Details Enterprise Plus SKU :
Place.Field.ALLOWS_DOGS
Place.Field.CURBSIDE_PICKUP
Place.Field.DELIVERY
Place.Field.DINE_IN
Place.Field.EDITORIAL_SUMMARY
Place.Field.EV_CHARGE_OPTIONS
Place.Field.FUEL_OPTIONS
Place.Field.GOOD_FOR_CHILDREN
Place.Field.GOOD_FOR_GROUPS
Place.Field.GOOD_FOR_WATCHING_SPORTS
Place.Field.LIVE_MUSIC
Place.Field.MENU_FOR_CHILDREN
Place.Field.OUTDOOR_SEATING
Place.Field.PARKING_OPTIONS
Place.Field.PAYMENT_OPTIONS
Place.Field.RESERVABLE
Place.Field.RESTROOM
Place.Field.REVIEWS
Place.Field.SERVES_BEER
Place.Field.SERVES_BREAKFAST
Place.Field.SERVES_BRUNCH
Place.Field.SERVES_COCKTAILS
Place.Field.SERVES_COFFEE
Place.Field.SERVES_DESSERT
Place.Field.SERVES_DINNER
Place.Field.SERVES_LUNCH
Place.Field.SERVES_VEGETARIAN_FOOD
Place.Field.SERVES_WINE
Place.Field.TAKEOUT
Optional parameters
The optional parameters for
FetchPlaceRequest
are:
Region code
The region code used to format the response, specified as a
two-character CLDR code value. There is no default value.
If the country name of the Place.Field.FORMATTED_ADDRESS field in the response matches the
regionCode , the country code is omitted from Place.Field.FORMATTED_ADDRESS .
Most CLDR codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
To set the region code parameter, call the setRegionCode() method when building the FetchPlaceRequest object.
Session token
Session tokens are user-generated strings that track
Autocomplete (New) calls as "sessions." Autocomplete (New) uses session tokens to
group the query and place selection phases of a user autocomplete search into a discrete session
for billing purposes. Session tokens are passed into Place Details (New)
calls that follow Autocomplete (New) calls. For more information, see
Session tokens .
To set the session token parameter, call the setSessionToken() method when building the FetchPlaceRequest object.
Place Details example
The following example requests the ID , DISPLAY_NAME , and FORMATTED_ADDRESS
fields for the Empire State Building in New York City.
// Define a place ID.
final String placeId = "ChIJaXQRs6lZwokRY6EFpJnhNNE" ;
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . DISPLAY_NAME , Place . Field . FORMATTED_ADDRESS );
// Construct a request object, passing the place ID and field list.
final FetchPlaceRequest request = FetchPlaceRequest . newInstance ( placeId , placeFields );
// Pass the request object and make the request
Task<FetchPlaceResponse> placeTask = placesClient . fetchPlace ( request );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

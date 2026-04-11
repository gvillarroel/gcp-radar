---
title: "Nearby Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/nearby-search
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/nearby-search
  title: "Nearby Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Nearby Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Nearby Search lets you search for places within a specified radius of a central point, returning a list of matching places.
You can filter search results by place type, including or excluding specific categories, and limit the maximum number of results.
Each place result is represented by a Place object, containing details like ID, name, and other attributes specified in the request.
Nearby Search (New) is available in Places SDK for Android version 3.5.0 and later.
When displaying information from PlacesClient , ensure your app displays attributions as required by Google's policies.
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
A Nearby Search (New) request takes as input the region
to search specified as a circle, defined by the latitude and longitude
coordinates of the center point of the circle and the radius in meters. The
request returns a list of matching places, each represented by a
Place
object, within the specified search area.
By default, the response contains places of all types within the search area.
You can optionally filter the response by specifying a list of place types to
explicitly include in or exclude from the response. For example, you can specify
to include only those places in the response that are of type "restaurant",
"bakery", and "cafe", or exclude all places of type "school".
Note: Nearby Search (New) is available in Places SDK for
Android version 3.5.0 and later. For more information, see Choose your SDK
version . For more
information about using the Kotlin APIs added in version
4.0.0, see the Reference
Overview .
Nearby Search (New) requests
Make a Nearby Search (New) request by calling
PlacesClient.searchNearby ,
passing a
SearchNearbyRequest
object that defines the request parameters.
The SearchNearbyRequest object specifies all of the required and optional
parameters for the request. The required parameters include:
The list of fields to return in the Place object, which is also known as a
field mask. If you don't specify at least one field in the field list, or if
you omit the field list, then the call returns an error.
The location restriction for the search area, defined as a
latitude/longitude pair and radius value, in meters.
This example nearby search request specifies that the response Place objects
contain the place fields Place.Field.ID and Place.Field.DISPLAY_NAME for
each Place object in the search results. It also filters the response to only
return places of type "restaurant" and "cafe", but exclude places of type
"pizza_restaurant" and "american_restaurant".
// Define a list of fields to include in the response for each returned place.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . DISPLAY_NAME );
// Define the search area as a 1000 meter diameter circle in New York, NY.
LatLng center = new LatLng ( 40.7580 , - 73.9855 );
CircularBounds circle = CircularBounds . newInstance ( center , /* radius = */ 1000 );
// Define a list of types to include.
final List<String> includedTypes = Arrays . asList ( "restaurant" , "cafe" );
// Define a list of types to exclude.
final List<String> excludedTypes = Arrays . asList ( "pizza_restaurant" , "american_restaurant" );
// Use the builder to create a SearchNearbyRequest object.
final SearchNearbyRequest searchNearbyRequest =
SearchNearbyRequest . builder ( /* location restriction = */ circle , placeFields )
. setIncludedTypes ( includedTypes )
. setExcludedTypes ( excludedTypes )
. setMaxResultCount ( 10 )
. build ());
// Call placesClient.searchNearby() to perform the search.
// Define a response handler to process the returned List of Place objects.
placesClient . searchNearby ( searchNearbyRequest )
. addOnSuccessListener ( response - > {
List<Place> places = response . getPlaces ();
});
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Nearby Search (New) responses
The
SearchNearbyResponse
class represents the response from a search request. A SearchNearbyResponse
object contains:
A list of Place objects that represent all matching places, with one
Place object per matching place.
Each Place object only contains the fields defined by the field list
passed in the request.
For example, in the request you defined a field list as:
// Define a list of fields to include in the response for each returned place.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . NAME );
This field list means that each Place object in the response contains only the
place ID and name of each matching place. You can then use the Place.getId()
and Place.getName() methods to access these fields in each Place object.
For more examples of accessing data in a Place object, see Access Place
object data fields .
Required parameters
Use the
SearchNearbyRequest
object to specify the required parameters for the search.
Field list
When you request place details, you must specify the data to return in the
Place object for the place as a field mask. To define the field mask, pass
an array of values from
Place.Field
to the SearchNearbyRequest object. Field masking is a good design practice
to ensure that you don't request unnecessary data, which helps to avoid
unnecessary processing time and billing charges.
Specify one or more of the following fields:
The following fields trigger the Nearby Search
Pro
SKU :
Place.Field.ADDRESS_COMPONENTS
Place.Field.BUSINESS_STATUS
Place.Field.ADDRESS
Place.Field.DISPLAY_NAME >*
* Use instead of Place.Field.NAME , which is deprecated.
Place.Field.ICON_BACKGROUND_COLOR
Place.Field.ICON_MASK_URL *
* Use instead of Place.Field.ICON_URL , which is deprecated.
Place.Field.ID
Place.Field.LAT_LNG
Place.Field.PHOTO_METADATAS
Place.Field.PLUS_CODE
Place.Field.PRIMARY_TYPE
Place.Field.PRIMARY_TYPE_DISPLAY_NAME
Place.Field.RESOURCE_NAME
Place.Field.TYPES
Place.Field.UTC_OFFSET
Place.Field.VIEWPORT
Place.Field.WHEELCHAIR_ACCESSIBLE_ENTRANCE
The following fields trigger the Nearby Search
Enterprise
SKU :
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
The following fields trigger the Nearby Search
Enterprise Plus
SKU :
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
To set the field list parameter, call the
setPlaceFields()
method when building the SearchNearbyRequest object.
The following example defines a list of two field values to specify that the
Place object returned by a request contains the Place.Field.ID and
Place.Field.DISPLAY_NAME fields:
// Define a list of fields to include in the response for each returned place.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . DISPLAY_NAME );
Location restriction
A
LocationRestriction
object that defines the region to search specified as a circle, defined by
center point and radius in meters. The radius must be between greater than
0.0 and less than or equal to
50000.0, keeping in mind that specifying a radius that is too small will
return ZERO_RESULTS as a response.
To set the location restriction parameter, call the
setLocationRestriction()
method when building the SearchNearbyRequest object.
Optional parameters
Use the
SearchNearbyRequest
object to specify the optional parameters for the search.
Types and primary types
Lets you specify a list of types from types
Table A used to filter
the search results. Up to 50 types can be specified in each type restriction category.
Note: The values in
Table B
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
When you specify a general primary type, such as "restaurant"
or "hotel" , the response can contain places with a more
specific primary type than the one specified. For example, you specify to
include a primary type of "restaurant" . The response can then
contain places with a primary type of "restaurant" , but the
response can also contain places with a more specific primary type, such as
"chinese_restaurant" or "seafood_restaurant" .
If a search is specified with multiple type restrictions, only places
that satisfy all of the restrictions are returned. For example, if you specify
includedTypes = Arrays.asList("restaurant") and excludedPrimaryTypes = Arrays.asList("steak_house") , the
returned places provide "restaurant" related services but don't operate primarily
as a "steak_house" .
If you omit includedTypes , excludedTypes ,
includedPrimaryTypes , and excludedPrimaryTypes from the request,
the search returns places for all types from within the location restriction bounds.
For an example of how to use includedTypes and excludedTypes , see
Nearby Search (New) requests .
Included types
A list of the place types from
Table A to search for.
If this parameter is omitted, places of all types are returned.
To set the included types parameter, call the setIncludedTypes() method when building the SearchNearbyRequest object.
Excluded types
A list of place types from
Table A to exclude from a
search.
If you specify both the includedTypes (such as "school" ) and the
excludedTypes (such as "primary_school" ) in the request, then the
response includes places that are categorized as "school" but not as
"primary_school" . The response includes places that match at least one of
the includedTypes and none of the excludedTypes .
If there are any conflicting types, such as a type appearing in both includedTypes
and excludedTypes , an INVALID_REQUEST error is returned.
To set the excluded types parameter, call the setExcludedTypes() method when building the SearchNearbyRequest object.
Included primary types
A list of primary place types from
Table A to include
in a search.
To set the included primary types parameter, call the setIncludedPrimaryTypes() method when building the SearchNearbyRequest object.
Excluded primary types
A list of primary place types from
Table A to exclude
from a search.
If there are any conflicting primary types, such as a type appearing in both
includedPrimaryTypes and excludedPrimaryTypes , an
INVALID_ARGUMENT error is returned.
To set the excluded primary types parameter, call the setExcludedPrimaryTypes() method when building the SearchNearbyRequest object.
Maximum result count
Specifies the maximum number of place results to return. Must be between
1 and 20 (default) inclusive.
To set the maximum result count parameter, call the setMaxResultCount() method when building the SearchNearbyRequest object.
Rank preference
The type of ranking to use. If this parameter is omitted, results are ranked by popularity.
May be one of the following:
POPULARITY (default) Sorts results based on their popularity.
DISTANCE Sorts results in ascending order by their distance from the
specified location.
To set the rank preference parameter, call the setRankPreference() method when building the SearchNearbyRequest object.
Region code
The region code used to format the response, specified as a
two-character CLDR code value. There is no default value.
If the country name of the FORMATTED_ADDRESS field in the response matches the
regionCode , the country code is omitted from FORMATTED_ADDRESS .
Most CLDR codes are identical to
ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
To set the region code parameter, call the setRegionCode() method when building the SearchNearbyRequest object.
Display attributions in your app
When your app displays information obtained from
PlacesClient ,
such as photos and reviews, the app must also display the required attributions.
For more information, see Policies for Places SDK for
Android .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Nearby Search (New) allows searching for places within a defined circular region using latitude, longitude, and radius. The search is initiated via `PlacesClient.searchNearby`, with parameters specified in a `SearchNearbyRequest` object, including mandatory fields like location and the desired data fields of a `Place` object. Users can filter results by including/excluding place types. The response, a `SearchNearbyResponse` object, contains a list of `Place` objects, each with specified data. Optional parameters include max results, rank preference, and region code. The data required and optional also have a different rate when being used.\n"]]

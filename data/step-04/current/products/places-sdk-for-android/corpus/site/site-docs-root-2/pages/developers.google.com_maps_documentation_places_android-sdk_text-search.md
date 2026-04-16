---
title: "Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/text-search
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/text-search
  title: "Text Search (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Text Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Places API Text Search finds places using text queries, handling imprecise addresses and finding businesses by name or type.
Text Search supports various parameters to refine searches, like location restrictions, price levels, and open hours filters.
Search results are ranked by relevance or distance, depending on the query and parameters used.
Requests specify desired data fields, affecting billing based on the selected information.
This feature is part of the Places SDK for Android (New), and developers should be aware of version differences and billing considerations.
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
Text Search (New) returns information about a set of places based on a
string (for example, "pizza in New York" or "shoe stores near Ottawa" or "123
Main Street"). The service responds with a list of places matching the text
string and any location bias that has been set.
In addition to required parameters ,
Text Search (New) supports refining queries using optional
parameters for better results.
Text Search (New) is similar to Nearby Search
(New) . The main
difference between the two is that Text Search (New)
lets you specify an arbitrary search string while Nearby Search (New) requires a
specific area in which to search.
Note: Text Search (New) is available in Places SDK for
Android version 3.3.0 and later. For more information, see Choose your SDK
version . For more
information about using the Kotlin APIs added in version
4.0.0, see the Reference
Overview .
Text Search requests
Note: Text Search is part of
Places SDK for Android (New) and is not available in
Places SDK for Android .
A Text Search request is in the form:
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . DISPLAY_NAME );
// Define latitude and longitude coordinates of the search area.
LatLng southWest = new LatLng ( 37.38816277477739 , - 122.08813770258874 );
LatLng northEast = new LatLng ( 37.39580487866437 , - 122.07702325966572 );
// Use the builder to create a SearchByTextRequest object.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields )
. setMaxResultCount ( 10 )
. setLocationRestriction ( RectangularBounds . newInstance ( southWest , northEast )). build ();
// Call PlacesClient.searchByText() to perform the search.
// Define a response handler to process the returned List of Place objects.
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener ( response -> {
List<Place> places = response . getPlaces ();
});
In this example, you:
Set the field list to include only Place.Field.ID and
Place.Field.DISPLAY_NAME . That means the Place objects in the response
that represent each matching place only contain those two fields.
Use SearchByTextRequest.Builder
to create a
SearchByTextRequest
object that defines the search.
Set the text query string to "Spicy Vegetarian Food".
Set the maximum number of result places to 10. The default and the
maximum is 20.
Restrict the search area to the rectangle defined by latitude and
longitude coordinates. No matches outside of this area are returned.
Add an OnSuccessListener and get the matching places from the
SearchByTextResponse
object.
Note: For more information on initializing PlacesClient , see
Initialize the Places API client .
You can use a CancellationToken
to attempt to cancel a request to any of the request classes (for example,
FetchPlaceRequest ). Cancellation is done on a best-effort basis.
Once a cancellation request is issued, no response will be returned.
Issuing a cancellation token does NOT guarantee that a particular request
will be cancelled, and you may still be charged for the request even if no
response is returned .
Text Search responses
The
SearchByTextResponse
class represents the response from a search request. A SearchByTextResponse
object contains:
A list of Place objects that represent all matching places, with one
Place object per matching place.
Each Place object only contains the fields defined by the field list
passed in the request.
For example, in the request you defined a field list as:
// Specify the list of fields to return.
final List<Place . Field > placeFields = Arrays . asList ( Place . Field . ID , Place . Field . DISPLAY_NAME );
This field list means that each Place object in the response contains only the
place ID and name of each matching place. You can then use the Place.getId()
and Place.getName() methods to access these fields in each Place object.
For more examples of accessing data in a Place object, see Access Place
object data fields
Pagination
Text Search's SearchByTextResponse class provides access to text search result pagination through its getPagination() method, which returns a Pagination object.
Use the Pagination object's hasNextPage() method to determine if additional pages of results are available. This method returns a boolean value (true or false).
While hasNextPage() returns true, call the fetchNextPage() method to retrieve the next page of results.
The following example shows how to check if a next page is available, and then
load the page.
Kotlin
val searchByTextRequest =
searchByTextRequest ( "restaurants" , Arrays . asList ( Place . Field . NAME )) {
maxResultCount = 10
}
// using pagination object (Preferred)
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener { response : SearchByTextResponse - >
val places = response . places
val pagination = response . pagination
if ( pagination . hasNextPage ()) {
pagination . setPageSize ( 20 )
pagination . fetchNextPage ()
. addOnSuccessListener { nextPageResponse - >
val nextPagePlaces = nextPageResponse . getPlaces ()
}
. addOnFailureListener { // Handle error with given status code}
}
}
. addOnFailureListener {
// TODO: Handle error with given status code.
exception - > {
exception . printStackTrace ();
}
}
Java
SearchByTextRequest searchByTextRequest =
SearchByTextRequest . builder ( "restaurants" , Arrays . asList ( Place . Field . NAME )). setMaxResultCount ( 10 ). build ();
// using pagination object (Preferred)
placesClient . searchByText ( searchByTextRequest )
. addOnSuccessListener (( response ) - > {
List<Place> places = response . getPlaces ();
Log . i ( TAG , "Places result: " + places );
Pagination pagination =
response . getPagination ();
if ( pagination . hasNextPage ()) {
pagination . setPageSize ( 20 ); // change the page size from 10 to 20
pagination . fetchNextPage ()
. addOnSuccessListener (( nextPageResponse ) - > {
List<Place> nextPagePlaces = nextPageResponse . getPlaces ();
Log . i ( TAG , "Next page places result: " + nextPagePlaces );
});
}
})
. addOnFailureListener (( exception ) - > {
if ( exception instanceof ApiException ) {
// Handle error with given status code
}
});
Required parameters
The required parameters for
SearchByTextRequest
are:
Field list
Specify which place data fields to return. Pass a list of
Place.Field
values specifying the data fields to return. There is no default list of
returned fields in the response.
Field lists are a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and
billing charges.
Specify one or more of the following fields:
The following fields trigger the Text Search Essentials ID Only SKU :
Place.Field.DISPLAY_NAME *
* Use instead of Place.Field.NAME (deprecated in version 4.0).
Place.Field.ID
Place.Field.RESOURCE_NAME *
* Contains the place resource name in the form: places/PLACE_ID .
Use DISPLAY_NAME to access the text name of the place.
The following fields trigger the Text Search Pro SKU :
Place.Field.ACCESSIBILITY_OPTIONS *
Use instead of
Place.Field.WHEELCHAIR_ACCESSIBLE_ENTRANCE (deprecated).
Place.Field.ADDRESS_COMPONENTS
Place.Field.ADR_FORMAT_ADDRESS
Place.Field.BUSINESS_STATUS
Place.Field.FORMATTED_ADDRESS *
Use instead of Place.Field.ADDRESS (deprecated).
Place.Field.GOOGLE_MAPS_URI
Place.Field.ICON_BACKGROUND_COLOR
Place.Field.ICON_MASK_URL *
Use instead of Place.Field.ICON_URL (deprecated).
Place.Field.LOCATION *
Use instead of Place.Field.LAT_LNG (deprecated).
Place.Field.PHOTO_METADATAS
Place.Field.PLUS_CODE
Place.Field.PRIMARY_TYPE
Place.Field.PRIMARY_TYPE_DISPLAY_NAME
Place.Field.SHORT_FORMATTED_ADDRESS
Place.Field.SUB_DESTINATIONS
Place.Field.TYPES
Place.Field.UTC_OFFSET
Place.Field.VIEWPORT
The following fields trigger the Text Search Enterprise SKU :
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
The following fields trigger the Text Search Enterprise Plus SKU :
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
To set the field list parameter, call the setPlaceFields() method when building the SearchByTextRequest object.
Text query
The text string on which to search, for example: "restaurant",
"123 Main Street", or "best place to visit in San Francisco". The API
returns candidate matches based on this string and orders the results based
on their perceived relevance.
To set the text query parameter, call the setTextQuery() method when building the SearchByTextRequest object.
Note: For best results when searching on a phone number,
include the country code followed by a space, and set the
regionCode parameter to correspond to the country code.
Phone number formats vary by country and the API attempts to return a result for these
different formats. For valid phone numbers, Places API (New) supports the
E.164 format .
Alphabet characters are converted based on the
E.161 keypad mapping .
Optional parameters
Use the
SearchByTextRequest
object to specify the optional parameters for your request.
Included type
Restricts the results to places matching the specified type defined by
Table A .
Only one type may be specified. For example:
setIncludedType("bar")
setIncludedType("pharmacy")
Note: The values in
Table B
are only returned in the response. You cannot use values in
Table B
as a filter.
To set the included type parameter, call the setIncludedType() method when building the SearchByTextRequest object.
Location bias
Specifies an area to search. This location serves as a bias which means
results around the specified location can be returned, including results
outside the specified area.
You can specify location restriction or location bias,
but not both. Think of location restriction as specifying the region which the results must be within, and location bias as specifying the region that the results will likely be within or near — keeping in mind that when using location bias, results can still be outside of the specified area.
Note: If you omit both
location bias and location restriction, then the API
uses IP biasing by default. With IP biasing, the API uses the
IP address of the device to bias the results.
Note:
The locationBias parameter can
be overridden if the textQuery contains
an explicit location such as Market in Barcelona .
In this case, locationBias is ignored.
Specify the region as a rectangular Viewport or as a circle.
A circle is defined by center point and radius in meters. The radius
must be between 0.0 and 50000.0, inclusive.
For example:
// Define latitude and longitude coordinates of the center of the search area.
LatLng searchCenter = new LatLng ( 37.38816277477739 , - 122.08813770258874 );
// Use the builder to create a SearchByTextRequest object.
// Set the radius of the search area to 500.0 meters.
final SearchByTextRequest searchByTextRequest = SearchByTextRequest . builder ( "Spicy Vegetarian Food" , placeFields )
. setMaxResultCount ( 10 )
. setLocationBias ( CircularBounds . newInstance ( searchCenter , 500.0 )). build ();
A rectangle is a latitude-longitude viewport, represented as two
diagonally opposite low and high points. The low point marks the southwest
corner of the rectangle, and the high point represents the northeast
corner of the rectangle.
A viewport is considered a
closed region, meaning it includes its boundary. The latitude bounds
must range between -90 to 90 degrees inclusive, and the longitude bounds
must range between -180 to 180 degrees inclusive:
If low = high , the viewport consists of
that single point.
If low.longitude > high.longitude , the
longitude range is inverted (the viewport crosses the 180 degree
longitude line).
If low.longitude = -180 degrees and
high.longitude = 180 degrees, the viewport includes all
longitudes.
If low.longitude = 180 degrees and
high.longitude = -180 degrees, the longitude range is
empty.
If low.latitude > high.latitude , the
latitude range is empty.
Both low and high must be populated, and the represented box cannot be
empty. An empty viewport results in an error.
For example, of a rectangular viewport see
Text Search requests .
To set the location bias parameter, call the setLocationBias() method when building the SearchByTextRequest object.
Location restriction
Specifies an area to search. Results outside the specified area are not
returned. Specify the region as a rectangular Viewport. See the description
of Location bias
for information on defining the Viewport.
You can specify location restriction or location bias,
but not both. Think of location restriction as specifying the
region which the results must be within, and location bias as
specifying the region that the results must be near but can be outside
the area.
Note: If you omit both
location bias and location restriction, then the API
uses IP biasing by default. With IP biasing, the API uses the IP address of
the device to bias the results.
To set the location restriction parameter, call the setLocationRestriction() method when building the SearchByTextRequest object.
Maximum result count
Specifies the maximum number of place results to return. Must be between
1 and 20 (default) inclusive.
To set the maximum result count parameter, call the setMaxResultCount() method when building the SearchByTextRequest object.
Minimum rating
Restricts results to only those whose average user rating is greater than
or equal to this limit. Values must be between 0.0 and 5.0 (inclusive) in
increments of 0.5. For example: 0, 0.5, 1.0, ... , 5.0 inclusive. Values are
rounded up to the nearest 0.5. For example, a value of 0.6 eliminates all
results with a rating less than 1.0.
To set the minimum rating parameter, call the setMinRating() method when building the SearchByTextRequest object.
Open now
If true , return only those places that are open for business
at the time the query is sent. If false , return all businesses
regardless of open status.
Places that don't specify opening hours in the Google Places database are
returned if you set this parameter to false .
To set the open now parameter, call the setOpenNow() method when building the SearchByTextRequest object.
Price levels
By default, results include places that provide services at all price levels. To restrict
results to only include places at particular price levels, you can pass a list
of integer values that correspond to the price levels for the places that you want to return:
1 - Place provides inexpensive services.
2 - Place provides moderately priced services.
3 - Place provides expensive services.
4 - Place provides very expensive services.
Note: The integer value of 0 ,
which indicates that the place provides free services, may be included in a
response, but cannot be used as a filter value in a request.
To set the price levels parameter, call the setPriceLevels() method when building the SearchByTextRequest object.
Rank preference
Specifies how the results are ranked in the response based on the type of
query:
For a categorical query such as "Restaurants in New York City",
SearchByTextRequest.RankPreference.RELEVANCE (rank results by search relevance) is the default.
You can set rank preference to SearchByTextRequest.RankPreference.RELEVANCE or
SearchByTextRequest.RankPreference.DISTANCE (rank results by distance).
For a non-categorical query such as "Mountain View, CA", we recommend
that you leave the rank preference parameter unset.
To set the rank preference parameter, call the setRankPreference() method when building the SearchByTextRequest object.
Region code
The region code used to format the response, specified as a
two-character CLDR code value. This parameter can also have a bias effect
on the search results. There is no default value.
If the country name of the address field in the response matches the
region code, the country code is omitted from address.
Most CLDR codes are identical to ISO 3166-1 codes,
with some notable exceptions. For example, the United Kingdom's ccTLD is
"uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the
entity of "The United Kingdom of Great Britain and Northern Ireland").
The parameter can affect results based on applicable law.
To set the region code parameter, call the setRegionCode() method when building the SearchByTextRequest object.
Strict type filtering
Used with the include type parameter. When set to
true , only places that match the specified types specified by
include type are returned.
When false , the default, the response can contain places that
don't match the specified types.
To set the strict type filtering parameter, call the setStrictTypeFiltering() method when building the SearchByTextRequest object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Text Search retrieves place information via a text string, supporting various queries like business names, addresses, and phone numbers. It's available on Android, iOS, JavaScript, and Web Service. Searches can be refined with location bias or restriction, maximum result count, minimum rating, open now status, price levels, rank preference, and region codes. Android implementation uses `SearchByTextRequest` and `SearchByTextResponse` within the Places SDK for Android (New), offering cancellation options. IP biasing is the default if location is not set.\n"]]

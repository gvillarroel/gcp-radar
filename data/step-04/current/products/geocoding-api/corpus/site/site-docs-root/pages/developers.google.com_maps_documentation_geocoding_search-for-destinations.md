---
title: "Search for destinations \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/search-for-destinations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/search-for-destinations
  title: "Search for destinations \_|\_ Geocoding API \_|\_ Google for Developers"
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
Search for destinations
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
A
Destination
refers to a significant point of interest or a specific location that a user
intends to reach or navigate towards. A Destination can include information
such as navigation points, landmarks, entrances, and building outlines.
The
SearchDestinations
method of the Geocoding API lets you retrieve detailed information about various
destinations based on different input criteria, such as an address, place ID, or
latitude and longitude coordinates.
Note: the address or place ID you use to search for a destination must represent
a place that can have a navigational destination. For example, a place that
represents a house or an apartment complex can be searched for, but places that
represent a locality or an administrative area cannot be searched for.
Search destinations request
A search destinations
request
is an HTTP POST request to a URL in the form:
https://geocode.googleapis.com/v4/geocode/destinations
Pass all parameters in the JSON request body or in headers as part of the POST
request. For example:
curl -X POST -d '{
"place": "places/ChIJY8sv5-i2j4AR_S6BlDDR42w"
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: *" \
https://geocode.googleapis.com/v4/geocode/destinations
You can specify the location to search for a destination in one of 3 ways:
Address
Place ID
Latitude and longitude coordinates
Search for a destination by address
You can specify the address as an unstructured string. Address geocoding does
not resolve latitude and longitude coordinates, or other unstructured strings
that don't represent an address. Requests using such strings are not supported
and may lead to error responses or unspecified behavior. Examples of unsupported
queries include the following:
Query type
Example
Latitude and longitude coordinates. Use a location query instead.
"37.422131,-122.084801"
Too many concepts or constraints, such as the names of multiple places, roads, or cities in a single query
"Market Street San Francisco San Jose Airport"
Postal address elements not represented on Google Maps
"C/O John Smith 123 Main Street"
"P.O. Box 13 San Francisco"
Names of businesses, chains, or categories combined with locations where these entities are not available
"Tesco near Dallas, Texas"
Ambiguous queries with multiple interpretations
"Charger drop-off"
Historical names no longer in use
"Middlesex United Kingdom"
Non-geospatial elements or intent
"How many boats are in Ventura Harbor?"
Unofficial or vanity names
"The Jenga"
"The Helter Skelter"
Large political entities (Cities, States, Countries)
"New York City"
"California"
"USA"
Routes without specific addresses
"1st Ave., NYC, NY"
"I-95"
curl -X POST -d '{
"addressQuery": {
"addressQuery": "601 S Bernardo Ave, Sunnyvale, CA 94087, USA"
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: *" \
https://geocode.googleapis.com/v4/geocode/destinations
or as a
postalAddress :
curl -X POST -d '{
"addressQuery": {
"address": {
"addressLines": ["601 S Bernardo Ave"],
"locality": "Sunnyvale",
"postalCode": "94087",
"administrativeArea": "CA",
"regionCode": "US"
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: *" \
https://geocode.googleapis.com/v4/geocode/destinations
You typically use the postalAddress format when processing address components
captured in an HTML form.
Search for a destination by place ID
You can retrieve a destination by providing a place
ID :
curl -X POST -d '{
"place": "places/ChIJY8sv5-i2j4AR_S6BlDDR42w"
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: *" \
https://geocode.googleapis.com/v4/geocode/destinations
Supported Place IDs
The Search Destinations method works best with Place IDs that represent
specific, navigable destinations. Place IDs for types such as establishment ,
point_of_interest , premise , street_address , and subpremise are generally
supported. Place IDs that don't represent discrete locations, such as those
inferred from address ranges (for example, "10-20 Main St"), sections of a route
without a specific number, or plus codes are not supported. Place IDs for
results that are too large in area (for example, "Pacific Ocean") are also
not supported.
Use Places API Autocomplete (New) with Search Destinations
To ensure compatibility, use Places API Autocomplete
(New) to find Place
IDs for use with Search Destinations. When using Autocomplete, you should filter
results by type using the
includedPrimaryTypes
parameter. Place IDs returned by Autocomplete using the following recommended
filter are supported by Search Destinations:
"includedPrimaryTypes" : [ "establishment" , "point_of_interest" , "premise" , "street_address" , "subpremise" ]
Additionally, you shouldn't set the include_pure_service_area_businesses
flag to true in your Autocomplete request.
Search for a destination by location
You can search for a destination by providing latitude and longitude
coordinates:
curl -X POST -d '{
"locationQuery": {
"location": {
"latitude": 37.37348780,
"longitude": -122.05678064
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: *" \
https://geocode.googleapis.com/v4/geocode/destinations
Use OAuth to make a request
Geocoding API v4 supports OAuth
2.0 for authentication. To use OAuth
with the Geocoding API, the OAuth token must be assigned the correct scope.
Geocoding API supports the following scopes for use with the Destinations
method:
https://www.googleapis.com/auth/maps-platform.geocode
— Use with all Geocoding API methods.
Also, you can use the general https://www.googleapis.com/auth/cloud-platform
scope for all Geocoding API methods. That scope is useful during development,
but not production, because it is a general scope that allows access to all
methods.
For more information and examples, see Use
OAuth .
Search destinations response
The Search Destinations response provides rich, hyperlocal context about the
location.
The PlaceView objects within the Search Destinations response (such as primary , items in containingPlaces , and landmarks ) use fields to indicate the place type:
types : An array of strings indicating the type(s) of the place.
primaryType : A string indicating the primary type of the place.
The possible string values for both types and primaryType are drawn from Table A and Table B on the Place Types (New) page.
This section describes the key response fields. For full details on all response
fields, see the API
Reference .
primary
The main place identified by the query in the request.
containingPlaces
Larger entities that the primary destination is part of (for example, a mall
containing a store).
subDestinations
More specific locations within the primary destination (for example, apartments
in a building).
entrances
The objects in the entrances[] array have the following fields:
location
A single latitude/longitude coordinate pair that defines the location of an
entry and exit point into a place.
entrance_tags[]
An array of entrance tags that describes characteristics of the entrance.
The following value is supported:
"PREFERRED"
Indicates this entrance likely provides physical access to the returned
place. A place can have multiple preferred entrances. If an entrance
does not have this tag, it means the entrance is physically on the same
building but does not necessarily provide access to the place.
For example, if the returned place is a restaurant in a strip mall, the
"PREFERRED" entrances will be the ones that lead into the restaurant
itself, while the other returned entrances will be other entrances for
the building, such as entrances into other restaurants in the strip
mall.
If the returned place is a building itself, the "PREFERRED" entrances will
be the ones that lead into the "main" part of the building. For example, in
a shopping center the "PREFERRED" entrances will be the ones that allow
access to the main foyer area, but if an entrance only provides access
to a store on the side of the building, it won't be a "PREFERRED"
entrance.
structureType
The type of structure that this place represents.
POINT
A point location.
SECTION
A subsection of a building.
BUILDING
A building.
GROUNDS
A large area that typically contains multiple buildings, such as a
university campus, an apartment complex, or a shopping mall.
navigationPoints
The navigationPoints field within the Geocoding response contains a list of
points that are useful for navigating to the place. Specifically, they should be
used either as the starting or ending points when routing on a road network from
or to the place. Each navigation point contains the following values:
navigationPointToken is a token containing the contextual information in
the navigationPoints field. You can send this token to routing and
navigation APIs to improve routing and river experience in your app. See
Route using navigation point
tokens for more
information.
location contains the latitude, longitude value of the navigation point.
This location will always be very close to the road network and represents
an ideal stopping or starting point for navigating to and from a place. The
point is intentionally slightly offset from the road's centerline to clearly
mark the side of the road where the place is located.
travelModes is a list of travel modes that the navigation point is
accessible from:
"DRIVE" is the travel mode corresponding to driving directions.
"WALK" is the travel mode corresponding to walking directions.
usages is a list of usages supported by the navigation point. Usages can
be:
"DROPOFF"
"PICKUP"
"PARKING"
arrivalSummary
AI-powered insights to assist with arrival. See AI-powered
summaries .
landmarks
Notable nearby places to help users understand the destination's surroundings.
Response format
SearchDestinations returns a
SearchDestinationsResponse
of the following JSON form:
{
"destinations" : [
{
"primary" : {
"place" : "places/ChIJY8sv5-i2j4AR_S6BlDDR42w" ,
"displayName" : {
"text" : "Arby's" ,
"languageCode" : "en"
},
"primaryType" : "fast_food_restaurant" ,
"types" : [
"fast_food_restaurant" ,
"sandwich_shop" ,
"deli" ,
"meal_takeaway" ,
"food_delivery" ,
"american_restaurant" ,
"restaurant" ,
"food_store" ,
"store" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Arby's, 601 S Bernardo Ave, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"601 S Bernardo Ave"
]
},
"structureType" : "BUILDING" ,
"location" : {
"latitude" : 37.3734545 ,
"longitude" : -122.05693269999998
},
"displayPolygon" : {
"type" : "Polygon" ,
"coordinates" : [
[
[
-122.056930138027 ,
37.3735253692531
],
[
-122.056960139391 ,
37.3735372663597
],
[
-122.056994129366 ,
37.3734828786847
],
[
-122.056969677395 ,
37.3734731161089
],
[
-122.057061762447 ,
37.3733261309656
],
[
-122.056979388817 ,
37.3732935577128
],
[
-122.056798860285 ,
37.3735818838642
],
[
-122.056875858081 ,
37.3736121235316
],
[
-122.056930138027 ,
37.3735253692531
]
]
]
}
},
"containingPlaces" : [
{
"place" : "places/ChIJYfdAFum2j4ARIcL2tjME3Sw" ,
"displayName" : {
"text" : "Cherry Chase Shopping Center" ,
"languageCode" : "en"
},
"primaryType" : "shopping_mall" ,
"types" : [
"shopping_mall" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Cherry Chase Shopping Center, 663 S Bernardo Ave, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087-1020" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"663 S Bernardo Ave"
]
},
"structureType" : "GROUNDS" ,
"location" : {
"latitude" : 37.3731231 ,
"longitude" : -122.0578211
},
"displayPolygon" : {
"type" : "Polygon" ,
"coordinates" : [
[
[
-122.057112227103 ,
37.3714618008523
],
[
-122.057076849821 ,
37.3715743611411
],
[
-122.056963607756 ,
37.3719081793948
],
[
-122.056865279559 ,
37.3722026053835
],
[
-122.056687872374 ,
37.3727258358476
],
[
-122.056580005889 ,
37.3730511370747
],
[
-122.056498845827 ,
37.3732994782583
],
[
-122.056338259713 ,
37.3737878663325
],
[
-122.056618678291 ,
37.373887693582
],
[
-122.056912102521 ,
37.3740010327191
],
[
-122.057532418159 ,
37.3742476426462
],
[
-122.057673926626 ,
37.3742441740031
],
[
-122.057735663106 ,
37.3742328516943
],
[
-122.057766531332 ,
37.3742220604378
],
[
-122.057797572967 ,
37.37420520725
],
[
-122.057828267759 ,
37.3741852342085
],
[
-122.058060299297 ,
37.3740060842535
],
[
-122.058199726081 ,
37.3737861673422
],
[
-122.05836707267 ,
37.373524542556
],
[
-122.058569622393 ,
37.3732018598683
],
[
-122.0587638478 ,
37.3728890198039
],
[
-122.058934661823 ,
37.3726036257774
],
[
-122.059164956851 ,
37.3722498383629
],
[
-122.058997784906 ,
37.3721804442035
],
[
-122.057936479838 ,
37.3717605636234
],
[
-122.057495827092 ,
37.3715860151634
],
[
-122.057112227103 ,
37.3714618008523
]
]
]
}
}
],
"landmarks" : [
{
"place" : {
"place" : "places/ChIJXXTe7Oi2j4ARoMTA-D6Hjpg" ,
"displayName" : {
"text" : "Chase Bank" ,
"languageCode" : "en"
},
"primaryType" : "bank" ,
"types" : [
"bank" ,
"atm" ,
"finance" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Chase Bank, 1234 W El Camino Real, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"1234 W El Camino Real"
]
},
"structureType" : "POINT" ,
"location" : {
"latitude" : 37.373579 ,
"longitude" : -122.05752700000001
}
},
"relationalDescription" : {
"text" : "Near Chase Bank" ,
"languageCode" : "en"
},
"tags" : [
"ARRIVAL" ,
"ADDRESS"
],
"straightLineDistanceMeters" : 61.182193756103516 ,
"travelDistanceMeters" : 63.075645446777344
},
{
"place" : {
"place" : "places/ChIJteQ0Fum2j4ARGi3tqK4Zm14" ,
"displayName" : {
"text" : "Safeway" ,
"languageCode" : "en"
},
"primaryType" : "grocery_store" ,
"types" : [
"grocery_store" ,
"butcher_shop" ,
"florist" ,
"deli" ,
"supermarket" ,
"bakery" ,
"food_delivery" ,
"market" ,
"manufacturer" ,
"food_store" ,
"store" ,
"food" ,
"service" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Safeway, 639 S Bernardo Ave, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"639 S Bernardo Ave"
]
},
"structureType" : "POINT" ,
"location" : {
"latitude" : 37.3727912 ,
"longitude" : -122.0581172
}
},
"relationalDescription" : {
"text" : "Around the corner from Safeway" ,
"languageCode" : "en"
},
"tags" : [
"ARRIVAL" ,
"ADDRESS"
],
"straightLineDistanceMeters" : 158.65606689453125 ,
"travelDistanceMeters" : 131.1669921875
},
{
"place" : {
"place" : "places/ChIJu-PSYui2j4ARNiwOwBApGqk" ,
"displayName" : {
"text" : "Oil Changers" ,
"languageCode" : "en"
},
"types" : [
"car_repair" ,
"service" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Oil Changers, 1240 W El Camino Real, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"1240 W El Camino Real"
]
},
"structureType" : "POINT" ,
"location" : {
"latitude" : 37.3743054 ,
"longitude" : -122.0584272
}
},
"relationalDescription" : {
"text" : "Down the road from Oil Changers" ,
"languageCode" : "en"
},
"tags" : [
"ARRIVAL"
],
"straightLineDistanceMeters" : 140.52459716796875 ,
"travelDistanceMeters" : 143.24220275878906
},
{
"place" : {
"place" : "places/ChIJKRbl5oG3j4ARwuvPGUmtCj0" ,
"displayName" : {
"text" : "Apni Mandi Farmers Market Sunnyvale" ,
"languageCode" : "en"
},
"primaryType" : "grocery_store" ,
"types" : [
"grocery_store" ,
"cake_shop" ,
"supermarket" ,
"asian_grocery_store" ,
"indian_restaurant" ,
"meal_takeaway" ,
"bakery" ,
"manufacturer" ,
"wholesaler" ,
"restaurant" ,
"food_store" ,
"store" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Apni Mandi Farmers Market Sunnyvale, 1111 W El Camino Real, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087-1056" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"1111 W El Camino Real"
]
},
"structureType" : "POINT" ,
"location" : {
"latitude" : 37.3737199 ,
"longitude" : -122.0522958
}
},
"relationalDescription" : {
"text" : "Near Apni Mandi Farmers Market Sunnyvale" ,
"languageCode" : "en"
},
"tags" : [
"ADDRESS"
],
"straightLineDistanceMeters" : 410.37435913085938 ,
"travelDistanceMeters" : 479.49893188476562
},
{
"place" : {
"place" : "places/ChIJ8enMlui2j4AR2xXK5EHDhBs" ,
"displayName" : {
"text" : "Starbird Chicken" ,
"languageCode" : "en"
},
"primaryType" : "chicken_restaurant" ,
"types" : [
"chicken_restaurant" ,
"fast_food_restaurant" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"formattedAddress" : "Starbird Chicken, 1241 W El Camino Real, Sunnyvale, CA 94087, USA" ,
"postalAddress" : {
"regionCode" : "US" ,
"languageCode" : "en" ,
"postalCode" : "94087-1028" ,
"administrativeArea" : "CA" ,
"locality" : "Sunnyvale" ,
"addressLines" : [
"1241 W El Camino Real"
]
},
"structureType" : "BUILDING" ,
"location" : {
"latitude" : 37.3746764 ,
"longitude" : -122.05708860000001
},
"displayPolygon" : {
"coordinates" : [
[
[
-122.057003840785 ,
37.3747648209809
],
[
-122.057136852459 ,
37.3747919153144
],
[
-122.057205005705 ,
37.3745815131859
],
[
-122.057071994114 ,
37.3745544186944
],
[
-122.057003840785 ,
37.3747648209809
]
]
],
"type" : "Polygon"
}
},
"relationalDescription" : {
"text" : "Near Starbird Chicken" ,
"languageCode" : "en"
},
"tags" : [
"ADDRESS"
],
"straightLineDistanceMeters" : 87.348007202148438 ,
"travelDistanceMeters" : 214.08084106445312
}
],
"entrances" : [
{
"location" : {
"latitude" : 37.3735328 ,
"longitude" : -122.05694879999999
},
"tags" : [
"PREFERRED"
],
"place" : "places/ChIJY8sv5-i2j4AR_S6BlDDR42w"
}
],
"navigationPoints" : [
{
"navigationPointToken" : "ChIJeMt61tqvQkARWT2716SDXsASEgljyy_n6LaPgBH9LoGUMNHjbBoSCWPLL-foto-AEf0ugZQw0eNsIhIJhf5y6ei2j4ARz7yBW5KAPI4" ,
"location" : {
"latitude" : 37.3738659 ,
"longitude" : -122.05693620000001
},
"travelModes" : [
"DRIVE" ,
"WALK"
],
"usages" : [
"PARKING"
]
}
]
}
]
}
Required parameters
One of the following 3 parameters must be in the API request, which
specifies the address, place, or location to search for a destination:
addressQuery - the address to search for.
place - the place ID of the place to search for.
locationQuery - the latitude and longitude coordinates of
the location to search for.
FieldMask
Specify the list of fields to return in the response by creating a
response field mask .
Pass the response field mask to the method by using the URL parameter
$fields or fields , or by using the HTTP header
X-Goog-FieldMask . For example, the below request will return only
the entrances, navigation points, and place ID of the primary destination.
curl -X POST -d '{"place": "places/ChIJG3kh4hq6j4AR_XuFQnV0_t8"}' \
-H "X-Goog-Api-Key: API_KEY " \
-H "Content-Type: application/json" \
-H "X-Goog-FieldMask: destinations.entrances,destinations.navigationPoints,destinations.primary.place" \
https://geocode.googleapis.com/v4/geocode/destinations
There is no default list of returned fields in the response. If you omit
the field mask, the method returns an error. Set the field mask to
* in order to return all fields. See
Choose fields to return
for more details.
Important: Field masking is a good design practice to ensure that you don't
request unnecessary data, which helps to avoid unnecessary processing time.
Optional parameters
travelModes
Specifies which types of navigationPoints to return.
Navigation points for other travel modes will be filtered out. If
travelModes is unset, navigation points of all travel modes can
be returned.
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
placeFilter
Lets you filter the results of a
locationQuery
search to meet your requirements, such as returning only destinations that are
buildings or only destinations that have clear addresses.
Filter by structural granularity
The structureType filter lets you specify the kind of structures that are
returned by the query:
Isolating Buildings : Use "structureType": "BUILDING" to show building
outlines on a map or get details for a specific structure.
Understanding Complexes : Use "structureType": "GROUNDS" to ensure the
primary result is the overall grounds. This is useful when querying for
larger areas like university campuses or shopping malls.
Focusing on Units/Sections : Use "structureType": "SECTION" to identify
sections within a building.
Ensure useful addresses
Not all places have clear street-level addresses. The addressability filter
helps you control the quality of addresses in your results:
Require a Clear Primary Address : To ensure the main destination result
always has a street-level address or name, use "addressability":
"PRIMARY" . This is useful for navigation or display purposes where a clear
address is crucial.
Allow Addresses in Sub-Destinations : In cases where the primary place
might not have an address, but units within it do (such as apartments in a
building), "addressability": "WEAK" ensures that at least the primary
place or one of its sub-destinations has an address.
Any Result : If address presence isn't relevant to your use case, use
"addressability": "ANY" .
Example: Filtering for Addressable Buildings
curl -X POST -d '{
"locationQuery": {
"location": {
"latitude": 37.37348780,
"longitude": -122.05678064
},
"placeFilter": {
"structureType": "BUILDING",
"addressability": "PRIMARY"
}
},
"languageCode": "en"
}' \\
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \\
-H "X-Goog-FieldMask: place" \\
https://geocode.googleapis.com/v4/geocode/destinations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

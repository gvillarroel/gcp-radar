---
title: "Places API (New) client library examples \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/client-library-examples
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/client-library-examples
  title: "Places API (New) client library examples \_|\_ Google for Developers"
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
Places API (New) client library examples
Stay organized with collections
Save and categorize content based on your preferences.
This page has examples of how to use the Places API (New) client
libraries to call the following services:
Place Details (New)
Nearby Search (New)
Text Search (New)
Autocomplete (New)
Place Photos (New)
Install the client libraries
See Places API (New) client
libraries
for installation instructions.
Authentication
When you use client libraries, you use Application Default Credentials
(ADC)
to authenticate. For information about setting up ADC, see Provide credentials
for Application Default
Credentials .
For information about using ADC with client libraries, see Authenticate using
client
libraries
.
You can also use API keys to authenticate to the client libraries, for example:
Java
// NoCredentialsProvider is used to tell the client library not to use ADC
import com.google.api.gax.core.NoCredentialsProvider ;
...
// Set up the request headers
Map String , String > headers = new HashMap <> ();
headers . put ( "x-goog-fieldmask" , fieldMaskString );
// Pass the API key using the x-goog-api-key header
headers . put ( "x-goog-api-key" , "API_Key" );
HeaderProvider headerProvider = FixedHeaderProvider . create ( headers );
...
PlacesSettings placesSettings = PlacesSettings . newBuilder ()
. setHeaderProvider ( headerProvider )
// Tell the PlacesSettings builder not to use any standard credentials provider
// This uses the API key and not ADC
. setCredentialsProvider ( NoCredentialsProvider . create ())
. build ();
// Create the client using the settings
PlacesClient placesClient = PlacesClient . create ( placesSettings );
Go
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"google.golang.org/api/option" // Import the option package when using an API key
"google.golang.org/grpc/metadata"
// Instantiates the Places client, passing the API key
clientOpts := [] option . ClientOption { option . WithAPIKey ( "API_KEY" )}
c , err := places . NewClient ( ctx , clientOpts ... )
NodeJS
// Instantiates the Places client, passing the API key
const placesClient = new PlacesClient ({
apiKey : "API_KEY" ,
});
Python
client = places_v1 . PlacesAsyncClient (
# Instantiates the Places client, passing the API key
client_options = { "api_key" : "API_KEY" }
)
.NET
// Instantiates the Places client, passing the API key
PlacesClientBuilder builder = new PlacesClientBuilder
{
ApiKey = "API_KEY"
};
PlacesClient client = await builder . BuildAsync ();
When you use API keys in your applications, ensure that they are kept secure
during both storage and transmission. Publicly exposing your API keys can lead
to unexpected charges on your account. For more information, see Use API Keys
with Places API .
For the examples on this page, you use Application Default Credentials.
Examples
Place Details (New)
The following is an example of how to call Place
Details using the client
library.
Java
import com.google.api.gax.rpc.FixedHeaderProvider ;
import com.google.api.gax.rpc.HeaderProvider ;
import com.google.maps.places.v1.GetPlaceRequest ;
import com.google.maps.places.v1.Place ;
import com.google.maps.places.v1.PlacesClient ;
import com.google.maps.places.v1.PlacesSettings ;
...
private static void PlaceDetails () {
// Define the Place resource name
String placeId = "ChIJaXQRs6lZwokRY6EFpJnhNNE" ;
String placeName = "places/" + placeId ;
// Set up the Field Mask headers
Map String , String > headers = new HashMap <> ();
String fieldMaskString = "displayName,formattedAddress" ;
headers . put ( "x-goog-fieldmask" , fieldMaskString );
HeaderProvider headerProvider = FixedHeaderProvider . create ( headers );
try {
// Build the settings object for the client
PlacesSettings placesSettings = PlacesSettings . newBuilder ()
. setHeaderProvider ( headerProvider )
. build ();
// Create the client using the settings.
PlacesClient placesClient = PlacesClient . create ( placesSettings );
// Build the request
GetPlaceRequest request = GetPlaceRequest . newBuilder ()
. setName ( placeName )
. build ();
// Call Place Details and output the response to the console
Place place = placesClient . getPlace ( request );
System . out . println ( place );
placesClient . close ();
} catch ( Exception e ) {
System . err . println ( "An error occurred: " + e . getMessage ());
}
}
Go
package main
import (
"context"
"fmt"
"log"
"strings"
places "cloud.google.com/go/maps/places/apiv1"
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
// Initialize the Places Client
c , err := places . NewClient ( ctx )
if err != nil {
log . Fatalf ( "NewClient: %v" , err )
}
defer c . Close ()
// Define the Place ID and construct the resource name
placeID := "ChIJaXQRs6lZwokRY6EFpJnhNNE"
resourceName := "places/" + placeID
// Define the fields you want to retrieve (FieldMask)
fieldsToRequest := [] string {
"displayName" ,
"formattedAddress" ,
}
fieldMaskHeader := strings . Join ( fieldsToRequest , "," )
//Create the GetPlaceRequest
req := & placespb . GetPlaceRequest {
Name : resourceName ,
}
// Add the FieldMask header to the request context
reqCtx := metadata . AppendToOutgoingContext ( ctx , "x-goog-fieldmask" , fieldMaskHeader )
// Call GetPlace
resp , err := c . GetPlace ( reqCtx , req )
if err != nil {
log . Fatalf ( "GetPlace failed: %v" , err )
}
// Process the response
if resp . DisplayName != nil {
fmt . Printf ( " Display Name: %s (%s)\n" , resp . DisplayName . Text , resp . DisplayName . LanguageCode )
}
fmt . Printf ( " Address: %s\n" , resp . FormattedAddress )
}
NodeJS
const { PlacesClient } = require ( '@googlemaps/places' ). v1 ;
// Define the Place ID
const placeId = 'ChIJaXQRs6lZwokRY6EFpJnhNNE' ;
// Define the fields you want to retrieve (FieldMask)
const fieldMask = 'displayName,formattedAddress' ;
async function getPlaceDetails () {
// Instantiates the Places client
const placesClient = new PlacesClient ();
// Construct the resource name from the Place ID.
const placeName = `places/ ${ placeId } ` ;
// Construct the request object.
const request = {
name : placeName ,
};
// Construct the call options, including the Field Mask header.
const callOptions = {
otherArgs : {
headers : {
'X-Goog-FieldMask' : fieldMask ,
},
},
};
// Call Place Details and output the response to the console
const response = await placesClient . getPlace ( request , callOptions );
console . log ( response );
}
getPlaceDetails ();
Python
from google.maps import places_v1
async def place_details ():
client = places_v1 . PlacesAsyncClient ()
# Build the request
request = places_v1 . GetPlaceRequest (
name = "places/ChIJaXQRs6lZwokRY6EFpJnhNNE" ,
)
# Set the field mask
fieldMask = "formattedAddress,displayName"
# Make the request
response = await client . get_place ( request = request , metadata = [( "x-goog-fieldmask" , fieldMask )])
return response
print ( await place_details ())
.NET
using Google.Api.Gax.Grpc ;
using Google.Maps.Places.V1 ;
...
private static async Task PlaceDetails ()
{
PlacesClient client = await PlacesClient . CreateAsync ();
// Define the Place resource name using the strongly-typed resource name class
PlaceName placeName = PlaceName . FromPlace ( "ChIJaXQRs6lZwokRY6EFpJnhNNE" );
// Build the request
GetPlaceRequest request = new GetPlaceRequest
{
PlaceName = placeName
};
// Define the Field Mask (which fields to return)
string fieldMask = "formattedAddress,displayName" ;
CallSettings callSettings = CallSettings . FromHeader ( "X-Goog-FieldMask" , fieldMask );
// Call Place Details and output the response to the console
Place response = await client . GetPlaceAsync ( request , callSettings );
Console . WriteLine ( response );
}
Pass the Place ID using the
name parameter. The
FieldMask is
passed when making the request.
Nearby Search (New)
The following is an example of how to call Nearby
Search using the client
library.
Java
import com.google.api.gax.rpc.FixedHeaderProvider ;
import com.google.api.gax.rpc.HeaderProvider ;
import com.google.maps.places.v1.Circle ;
import com.google.maps.places.v1.PlacesClient ;
import com.google.maps.places.v1.PlacesSettings ;
import com.google.maps.places.v1.SearchNearbyRequest ;
import com.google.maps.places.v1.SearchNearbyResponse ;
import com.google.type.LatLng ;
...
private static void NearbySearch () {
// Set search variables
double latitude = 51.516177 ;
double longitude = - 0.127245 ;
double radiusMeters = 1000.0 ;
String placeType = "restaurant" ;
// Set up the Field Mask headers
Map String , String > headers = new HashMap <> ();
String fieldMaskString = "places.displayName,places.formattedAddress,places.id" ;
headers . put ( "x-goog-fieldmask" , fieldMaskString );
HeaderProvider headerProvider = FixedHeaderProvider . create ( headers );
try {
// Build the settings object for the client
PlacesSettings placesSettings = PlacesSettings . newBuilder ()
. setHeaderProvider ( headerProvider )
. build ();
// Create the client using the settings.
PlacesClient placesClient = PlacesClient . create ( placesSettings );
LatLng centerPoint = LatLng . newBuilder ()
. setLatitude ( latitude )
. setLongitude ( longitude )
. build ();
Circle circleArea = Circle . newBuilder ()
. setCenter ( centerPoint )
. setRadius ( radiusMeters )
. build ();
// Create the location restriction using a circle
SearchNearbyRequest . LocationRestriction locationRestriction
= SearchNearbyRequest . LocationRestriction . newBuilder ()
. setCircle ( circleArea )
. build ();
// Build the Nearby Search request
SearchNearbyRequest request = SearchNearbyRequest . newBuilder ()
. addIncludedTypes ( placeType )
. setLocationRestriction ( locationRestriction )
. build ();
// Call Nearby Search and output the response to the console
SearchNearbyResponse response = placesClient . searchNearby ( request );
System . out . println ( response );
placesClient . close ();
} catch ( Exception e ) {
System . err . println ( "An error occurred: " + e . getMessage ());
}
}
Go
package main
import (
"context"
"fmt"
"log"
"strings"
places "cloud.google.com/go/maps/places/apiv1"
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"google.golang.org/genproto/googleapis/type/latlng"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
// Initialize the Places Client
c , err := places . NewClient ( ctx )
if err != nil {
log . Fatalf ( "NewClient: %v" , err )
}
defer c . Close ()
// Define the search parameters
searchCenter := & latlng . LatLng {
Latitude : 51.516177 ,
Longitude : - 0.127245 ,
}
searchRadius := 1000.0
placeTypeToSearch := "restaurant"
// Define the FieldMask you want returned for each place
fieldsToRequest := [] string {
"places.displayName" ,
"places.formattedAddress" ,
}
fieldMaskHeader := strings . Join ( fieldsToRequest , "," )
// Create the SearchNearbyRequest
req := & placespb . SearchNearbyRequest {
IncludedTypes : [] string { placeTypeToSearch },
LocationRestriction : & placespb . SearchNearbyRequest_LocationRestriction {
Type : & placespb . SearchNearbyRequest_LocationRestriction_Circle {
Circle : & placespb . Circle {
Center : searchCenter ,
Radius : searchRadius ,
},
},
},
}
// Add the FieldMask header to the request context
reqCtx := metadata . AppendToOutgoingContext ( ctx , "x-goog-fieldmask" , fieldMaskHeader )
// Call Nearby Search
resp , err := c . SearchNearby ( reqCtx , req )
if err != nil {
log . Fatalf ( "SearchNearby failed: %v" , err )
}
// Process the response
fmt . Printf ( "Found %d nearby %ss:\n" , len ( resp . Places ), placeTypeToSearch )
for i , place := range resp . Places {
fmt . Printf ( "%d. %s\n" , i + 1 , place . DisplayName . GetText ())
fmt . Printf ( " Address: %s\n" , place . GetFormattedAddress ())
fmt . Println ( "---" )
}
}
NodeJS
const { PlacesClient } = require ( '@googlemaps/places' ). v1 ;
// Coordinates for the center of the search area
const latitude = 51.5119 ;
const longitude = - 0.1248 ;
const radiusMeters = 1000.0 ;
// Included type filter
const includedTypes = [ 'restaurant' ];
// Define the fields you want to retrieve (FieldMask)
const fieldMask = 'places.displayName,places.formattedAddress' ;
async function searchNearbyPlaces () {
// Instantiates the Places client
const placesClient = new PlacesClient ();
const centerPoint = { latitude , longitude };
const circleArea = {
center : centerPoint ,
radius : radiusMeters ,
};
// Create the location restriction object using a circle
const locationRestriction = {
circle : circleArea ,
};
// Construct the request object
const request = {
locationRestriction : locationRestriction ,
includedTypes : includedTypes ,
};
// Construct the call options, including the Field Mask header
const callOptions = {
otherArgs : {
headers : {
'X-Goog-FieldMask' : fieldMask ,
},
},
};
// Call Nearby Search and output the response to the console
const [ response ] = await placesClient . searchNearby ( request , callOptions );
console . log ( response );
}
searchNearbyPlaces ();
Python
from google.maps import places_v1
from google.type import latlng_pb2
async def nearby_search ():
# Define the coordinates and radius
lat = 51.516177
lng = - 0.127245
radius_meters = 1000.0
# Create the LatLng object for the center
center_point = latlng_pb2 . LatLng ( latitude = lat , longitude = lng )
# Create the circle
circle_area = places_v1 . types . Circle (
center = center_point ,
radius = radius_meters
)
# Add the circle to the location restriction
location_restriction = places_v1 . SearchNearbyRequest . LocationRestriction (
circle = circle_area
)
client = places_v1 . PlacesAsyncClient ()
# Build the request
request = places_v1 . SearchNearbyRequest (
location_restriction = location_restriction ,
included_types = [ "restaurant" ]
)
# Set the field mask
fieldMask = "places.formattedAddress,places.displayName"
# Make the request
response = await client . search_nearby ( request = request , metadata = [( "x-goog-fieldmask" , fieldMask )])
return response
print ( await nearby_search ())
.NET
using Google.Api.Gax.Grpc ;
using Google.Maps.Places.V1 ;
using Google.Type ;
...
private static async Task NearbySearch ()
{
PlacesClient client = await PlacesClient . CreateAsync ();
// Set search variables
double latitude = 51.516177 ;
double longitude = - 0.127245 ;
double radiusMeters = 1000.0 ;
string placeType = "restaurant" ;
LatLng centerPoint = new LatLng { Latitude = latitude , Longitude = longitude };
Circle circleArea = new Circle { Center = centerPoint , Radius = radiusMeters };
// Create the location restriction using a circle
SearchNearbyRequest . Types . LocationRestriction locationRestriction = new SearchNearbyRequest . Types . LocationRestriction
{
Circle = circleArea
};
// Build the Nearby Search request
SearchNearbyRequest request = new SearchNearbyRequest
{
IncludedTypes = { placeType },
LocationRestriction = locationRestriction ,
};
// Define the Field Mask using CallSettings
string fieldsToFetch = "places.displayName,places.formattedAddress,places.id" ;
CallSettings callSettings = CallSettings . FromHeader ( "X-Goog-FieldMask" , fieldsToFetch );
// Call Nearby Search and output the response to the console
SearchNearbyResponse searchResponse = await client . SearchNearbyAsync ( request , callSettings );
Console . WriteLine ( searchResponse );
}
Define a Circle Location
Restriction
by using latitude and longitude coordinates and radius. When building the
example request, use the Location Restriction, alongside an Included
Types
filter of restaurant. The
FieldMask is
passed when making the request.
Text Search (New)
The following is an example of how to call Text
Search using the client
library.
Java
import com.google.api.gax.rpc.FixedHeaderProvider ;
import com.google.api.gax.rpc.HeaderProvider ;
import com.google.maps.places.v1.Circle ;
import com.google.maps.places.v1.PlacesClient ;
import com.google.maps.places.v1.PlacesSettings ;
import com.google.maps.places.v1.PriceLevel ;
import com.google.maps.places.v1.SearchTextRequest ;
import com.google.maps.places.v1.SearchTextResponse ;
import com.google.type.LatLng ;
...
private static void TextSearch () {
// Set search variables
String searchQuery = "restaurants with outdoor seating" ;
double latitude = 51.516177 ;
double longitude = - 0.127245 ;
double radiusMeters = 1000.0 ;
double minPlaceRating = 4.0 ;
List desiredPriceLevels = Arrays . asList (
PriceLevel . PRICE_LEVEL_MODERATE ,
PriceLevel . PRICE_LEVEL_EXPENSIVE
);
boolean requireOpenNow = true ;
// Set up the Field Mask headers
Map String , String > headers = new HashMap <> ();
String fieldMaskString = "places.displayName,places.formattedAddress,places.rating,places.priceLevel" ;
headers . put ( "x-goog-fieldmask" , fieldMaskString );
HeaderProvider headerProvider = FixedHeaderProvider . create ( headers );
try {
// Build the settings object for the client
PlacesSettings placesSettings = PlacesSettings . newBuilder ()
. setHeaderProvider ( headerProvider )
. build ();
// Create the client using the settings.
PlacesClient placesClient = PlacesClient . create ( placesSettings );
LatLng centerPoint = LatLng . newBuilder ()
. setLatitude ( latitude )
. setLongitude ( longitude )
. build ();
Circle circleArea = Circle . newBuilder ()
. setCenter ( centerPoint )
. setRadius ( radiusMeters )
. build ();
// Create the location bias using a circle
SearchTextRequest . LocationBias locationBias = SearchTextRequest . LocationBias . newBuilder ()
. setCircle ( circleArea )
. build ();
// Build the Text Search request
SearchTextRequest request = SearchTextRequest . newBuilder ()
. setTextQuery ( searchQuery )
. setLocationBias ( locationBias )
. setMinRating ( minPlaceRating )
. setOpenNow ( requireOpenNow )
. addAllPriceLevels ( desiredPriceLevels )
. build ();
// Call Text Search and output the response to the console
SearchTextResponse response = placesClient . searchText ( request );
System . out . println ( response );
placesClient . close ();
} catch ( Exception e ) {
System . err . println ( "An error occurred: " + e . getMessage ());
}
}
Go
package main
import (
"context"
"fmt"
"log"
"strings"
places "cloud.google.com/go/maps/places/apiv1"
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"google.golang.org/genproto/googleapis/type/latlng"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
// Initialize the Places Client
c , err := places . NewClient ( ctx )
if err != nil {
log . Fatalf ( "NewClient: %v" , err )
}
defer c . Close ()
// Define the location bias parameters
lat := 51.516177
lng := - 0.127245
radiusMeters := 1000.0
centerPoint := & latlng . LatLng {
Latitude : lat ,
Longitude : lng ,
}
circleArea := & placespb . Circle {
Center : centerPoint ,
Radius : radiusMeters ,
}
// Create the location bias.
locationBias := & placespb . SearchTextRequest_LocationBias {
Type : & placespb . SearchTextRequest_LocationBias_Circle {
Circle : circleArea ,
},
}
// Define other search parameters
searchQuery := "restaurants with outdoor seating"
minPlaceRating := 4.0
shouldBeOpenNow := true
requestedPriceLevels := [] placespb . PriceLevel {
placespb . PriceLevel_PRICE_LEVEL_MODERATE ,
placespb . PriceLevel_PRICE_LEVEL_EXPENSIVE ,
}
// Define the FieldMask you want returned
fieldsToRequest := [] string {
"places.displayName" ,
"places.formattedAddress" ,
}
fieldMaskHeader := strings . Join ( fieldsToRequest , "," )
// Create the SearchTextRequest
req := & placespb . SearchTextRequest {
TextQuery : searchQuery ,
LocationBias : locationBias ,
MinRating : minPlaceRating ,
OpenNow : shouldBeOpenNow ,
PriceLevels : requestedPriceLevels ,
}
// Add the FieldMask header to the request context
reqCtx := metadata . AppendToOutgoingContext ( ctx , "x-goog-fieldmask" , fieldMaskHeader )
// Call the SearchText API
resp , err := c . SearchText ( reqCtx , req )
if err != nil {
log . Fatalf ( "SearchText failed: %v" , err )
}
// Process the response
fmt . Printf ( "Found %d results for '%s' near (%.4f, %.4f) with rating >= %.1f, open now, and moderate/expensive price:\n" ,
len ( resp . Places ), searchQuery , lat , lng , minPlaceRating )
for i , place := range resp . Places {
fmt . Printf ( "%d. %s\n" , i + 1 , place . DisplayName . GetText ())
fmt . Printf ( " Address: %s\n" , place . GetFormattedAddress ())
fmt . Println ( "---" )
}
}
NodeJS
const { PlacesClient } = require ( '@googlemaps/places' ). v1 ;
// Import the full protos object to access enums
const { google } = require ( '@googlemaps/places/build/protos/protos' ); // Adjust path if needed based on actual install
// Access the enum using its full proto path
const PriceLevel = google . maps . places . v1 . PriceLevel ;
// Coordinates and radius for the location bias
const latitude = 51.5119 ;
const longitude = - 0.1248 ;
const radiusMeters = 1000.0 ; // 1 kilometer radius
// Search query and filters
const textQuery = 'restaurants with outdoor seating' ;
const minRating = 4.0 ;
const priceLevels = [
PriceLevel . PRICE_LEVEL_MODERATE ,
PriceLevel . PRICE_LEVEL_EXPENSIVE ,
];
// Define the fields you want to retrieve (FieldMask)
const fieldMask = 'places.displayName,places.formattedAddress' ;
async function searchPlacesByText () {
// Instantiates the Places client
const placesClient = new PlacesClient ();
const centerPoint = { latitude , longitude };
const circleArea = {
center : centerPoint ,
radius : radiusMeters ,
};
// Create the location bias object using a circle
const locationBias = {
circle : circleArea ,
};
// Construct the request object
const request = {
textQuery : textQuery ,
locationBias : locationBias ,
minRating : minRating ,
openNow : true ,
priceLevels : priceLevels ,
};
// Construct the call options, including the Field Mask header
const callOptions = {
otherArgs : {
headers : {
'X-Goog-FieldMask' : fieldMask ,
},
},
};
// Call Text Search and output the response to the console
const [ response ] = await placesClient . searchText ( request , callOptions );
console . log ( response );
}
searchPlacesByText ();
Python
from google.maps import places_v1
from google.type import latlng_pb2
async def text_search ():
# Coordinates and radius for the location bias
lat = 51.516177
lng = - 0.127245
radius_meters = 1000.0
# Create the LatLng object for the center
center_point = latlng_pb2 . LatLng ( latitude = lat , longitude = lng )
# Create the Circle object
circle_area = places_v1 . types . Circle (
center = center_point ,
radius = radius_meters
)
# Create the location bias circle
location_bias = places_v1 . SearchTextRequest . LocationBias (
circle = circle_area
)
# Define the search query and other parameters
search_query = "restaurants with outdoor seating"
min_place_rating = 4.0
client = places_v1 . PlacesAsyncClient ()
# Build the request
request = places_v1 . SearchTextRequest (
text_query = search_query ,
location_bias = location_bias ,
min_rating = min_place_rating ,
open_now = True ,
price_levels = [
places_v1 . types . PriceLevel . PRICE_LEVEL_MODERATE ,
places_v1 . types . PriceLevel . PRICE_LEVEL_EXPENSIVE
]
)
# Set the field mask
fieldMask = "places.formattedAddress,places.displayName"
# Make the request
response = await client . search_text ( request = request , metadata = [( "x-goog-fieldmask" , fieldMask )])
return response
print ( await text_search ())
.NET
using Google.Api.Gax.Grpc ;
using Google.Maps.Places.V1 ;
using Google.Type ;
...
private static async Task TextSearch ()
{
PlacesClient client = await PlacesClient . CreateAsync ();
// Set search variables
string searchQuery = "restaurants with outdoor seating" ;
double latitude = 51.516177 ;
double longitude = - 0.127245 ;
double radiusMeters = 1000.0 ;
double minPlaceRating = 4.0 ;
List desiredPriceLevels = new List
{
PriceLevel . Moderate ,
PriceLevel . Expensive
};
bool requireOpenNow = true ;
LatLng centerPoint = new LatLng { Latitude = latitude , Longitude = longitude };
Circle circleArea = new Circle { Center = centerPoint , Radius = radiusMeters };
// Create the location bias using a circle
SearchTextRequest . Types . LocationBias locationBias = new SearchTextRequest . Types . LocationBias
{
Circle = circleArea
};
// Build the Text Search request
SearchTextRequest request = new SearchTextRequest
{
TextQuery = searchQuery ,
LocationBias = locationBias ,
MinRating = minPlaceRating ,
OpenNow = requireOpenNow ,
};
request . PriceLevels . AddRange ( desiredPriceLevels );
// Define the Field Mask using CallSettings
string fieldsToFetch = "places.displayName,places.formattedAddress,places.rating,places.priceLevel" ;
CallSettings callSettings = CallSettings . FromHeader ( "X-Goog-FieldMask" , fieldsToFetch );
// Call Text Search and output the response to the console
SearchTextResponse searchResponse = await client . SearchTextAsync ( request , callSettings );
Console . WriteLine ( searchResponse );
}
Define a Location
Bias by
building a Circle object using latitude and longitude coordinates and a radius.
Pass the Circle object to the request object, alongside other API parameters:
Text Query
Minimum Rating
Open Now
Price Levels
The FieldMask is
passed when making the request.
Autocomplete
The following is an example of how to call
Autocomplete using
the client library.
Java
import com.google.maps.places.v1.AutocompletePlacesRequest ;
import com.google.maps.places.v1.AutocompletePlacesResponse ;
import com.google.maps.places.v1.Circle ;
import com.google.maps.places.v1.PlacesClient ;
import com.google.type.LatLng ;
...
private static void Autocomplete () {
// Set search variables
String userInput = "Google Central St Giles" ;
double biasLatitude = 51.516177 ;
double biasLongitude = - 0.127245 ;
double biasRadiusMeters = 5000.0 ;
String language = "en-GB" ;
String region = "GB" ;
// Generate a session token for this Autocomplete session
String sessionToken = UUID . randomUUID (). toString ();
// Use try-with-resources for the client
try ( PlacesClient placesClient = PlacesClient . create ()) {
LatLng biasCenterPoint = LatLng . newBuilder ()
. setLatitude ( biasLatitude )
. setLongitude ( biasLongitude )
. build ();
Circle biasCircleArea = Circle . newBuilder ()
. setCenter ( biasCenterPoint )
. setRadius ( biasRadiusMeters )
. build ();
// Create the location bias using a circle
AutocompletePlacesRequest . LocationBias locationBias
= AutocompletePlacesRequest . LocationBias . newBuilder ()
. setCircle ( biasCircleArea )
. build ();
// Build the Autocomplete request
AutocompletePlacesRequest request = AutocompletePlacesRequest . newBuilder ()
. setInput ( userInput )
. setLocationBias ( locationBias )
. setLanguageCode ( language )
. setRegionCode ( region )
. setSessionToken ( sessionToken )
. build ();
// Call Autocomplete and output the response to the console
AutocompletePlacesResponse response = placesClient . autocompletePlaces ( request );
System . out . println ( response );
} catch ( Exception e ) {
System . err . println ( "An error occurred: " + e . getMessage ());
}
}
Go
package main
import (
"context"
"fmt"
"log"
places "cloud.google.com/go/maps/places/apiv1"
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"github.com/google/uuid"
"google.golang.org/genproto/googleapis/type/latlng"
)
func main () {
ctx := context . Background ()
// Initialize the Places Client
c , err := places . NewClient ( ctx )
if err != nil {
log . Fatalf ( "NewClient: %v" , err )
}
defer c . Close ()
// Define Location Bias parameters
biasLat := 51.516177
biasLng := - 0.127245
biasRadiusMeters := 5000.0
biasCenterPoint := & latlng . LatLng {
Latitude : biasLat ,
Longitude : biasLng ,
}
biasCircleArea := & placespb . Circle {
Center : biasCenterPoint ,
Radius : biasRadiusMeters ,
}
// Create the location bias struct
locationBias := & placespb . AutocompletePlacesRequest_LocationBias {
Type : & placespb . AutocompletePlacesRequest_LocationBias_Circle {
Circle : biasCircleArea ,
},
}
// Define other Autocomplete parameters
userInput := "Google Central St Giles"
language := "en-GB"
region := "GB"
// Generate a unique session token
sessionToken := uuid . New (). String ()
// Create the AutocompletePlacesRequest
req := & placespb . AutocompletePlacesRequest {
Input : userInput ,
LocationBias : locationBias ,
LanguageCode : language ,
RegionCode : region ,
SessionToken : sessionToken ,
}
// Call the AutocompletePlaces API
resp , err := c . AutocompletePlaces ( ctx , req )
if err != nil {
log . Fatalf ( "AutocompletePlaces failed: %v" , err )
}
// Process the response
fmt . Printf ( "Autocomplete suggestions for '%s':\n" , userInput )
if len ( resp . Suggestions ) == 0 {
fmt . Println ( " No suggestions found." )
return
}
for i , suggestion := range resp . Suggestions {
fmt . Printf ( "%d. " , i + 1 )
switch kind := suggestion . Kind .( type ) {
// Retrieve Place Predictions and Query Predictions
case * placespb . AutocompletePlacesResponse_Suggestion PlacePrediction :
placePrediction := kind . PlacePrediction
fmt . Printf ( "Place Prediction: '%s'\n" , placePrediction . GetText (). GetText ())
fmt . Printf ( " Place ID: %s\n" , placePrediction . GetPlaceId ())
case * placespb . AutocompletePlacesResponse_Suggestion QueryPrediction :
queryPrediction := kind . QueryPrediction
fmt . Printf ( "Query Prediction: '%s'\n" , queryPrediction . GetText (). GetText ())
default :
fmt . Println ( "Unknown suggestion type" )
}
fmt . Println ( "---" )
}
}
NodeJS
const { PlacesClient } = require ( '@googlemaps/places' ). v1 ;
// Import the crypto module for UUID generation, used for session tokens
const crypto = require ( 'crypto' );
// Coordinates and radius for the location bias
const biasLat = 51.5119 ;
const biasLng = - 0.1248 ;
const biasRadiusMeters = 5000.0 ;
// Autocomplete input
const userInput = 'restaurants near Covent Garden' ;
// Language and region codes
const languageCode = 'en-GB' ;
const regionCode = 'GB' ;
async function autocomplete () {
// Instantiates the Places client
const placesClient = new PlacesClient ();
const biasCenterPoint = { latitude : biasLat , longitude : biasLng };
const biasCircleArea = {
center : biasCenterPoint ,
radius : biasRadiusMeters ,
};
// Create the location bias object using a circle
const locationBias = {
circle : biasCircleArea ,
};
// Generate a unique session token
const sessionToken = crypto . randomUUID ();
// Construct the request object
const request = {
input : userInput ,
locationBias : locationBias ,
languageCode : languageCode ,
regionCode : regionCode ,
sessionToken : sessionToken ,
};
// Call Autocomplete and output the response to the console
const [ response ] = await placesClient . autocompletePlaces ( request );
console . log ( JSON . stringify ( response , null , 2 )); // Pretty print the JSON
}
autocomplete ();
Python
import uuid # For generating session tokens
from google.maps import places_v1
from google.type import latlng_pb2
async def autocomplete ():
bias_lat = 51.516177
bias_lng = - 0.127245
bias_radius_meters = 5000.0
# Create the LatLng object for the bias center
bias_center_point = latlng_pb2 . LatLng ( latitude = bias_lat , longitude = bias_lng )
# Create the Circle object using a dictionary
bias_circle_dict = {
"center" : bias_center_point ,
"radius" : bias_radius_meters
}
bias_circle_area = places_v1 . types . Circle ( bias_circle_dict )
# Create the LocationBias object using a dictionary
location_bias_dict = {
"circle" : bias_circle_area
}
location_bias = places_v1 . types . AutocompletePlacesRequest . LocationBias ( location_bias_dict )
# The autocomplete text
user_input = "Google Central St Giles"
# Language and region
language = "en-GB"
region = "GB"
# Generate a unique session token for this autocomplete session
session_token = str ( uuid . uuid4 ())
client = places_v1 . PlacesAsyncClient ()
# Build the request
request = places_v1 . AutocompletePlacesRequest (
input = user_input ,
language_code = language ,
region_code = region ,
location_bias = location_bias ,
session_token = session_token ,
)
response = await client . autocomplete_places ( request = request )
return response
print ( await autocomplete ())
.NET
using Google.Maps.Places.V1 ;
using Google.Type ;
...
private static async Task Autocomplete ()
{
PlacesClient client = await PlacesClient . CreateAsync ();
// Set search variables
string userInput = "Google Central St Giles" ;
double biasLatitude = 51.516177 ;
double biasLongitude = - 0.127245 ;
double biasRadiusMeters = 5000.0 ;
string language = "en-GB" ;
string region = "GB" ;
LatLng biasCenterPoint = new LatLng { Latitude = biasLatitude , Longitude = biasLongitude };
Circle biasCircleArea = new Circle { Center = biasCenterPoint , Radius = biasRadiusMeters };
// Create the location restriction using a circle
AutocompletePlacesRequest . Types . LocationBias locationBias = new AutocompletePlacesRequest . Types . LocationBias
{
Circle = biasCircleArea
};
// Generate a unique session token for this autocomplete session
string sessionToken = Guid . NewGuid (). ToString ();
// Build the Autocomplete request
AutocompletePlacesRequest request = new AutocompletePlacesRequest
{
Input = userInput ,
LocationBias = locationBias ,
LanguageCode = language ,
RegionCode = region ,
SessionToken = sessionToken ,
};
// Call Autocomplete and output the response to the console
AutocompletePlacesResponse response = await client . AutocompletePlacesAsync ( request );
Console . WriteLine ( response );
}
Define a circle Location
Bias
using a dictionary. A UUID is generated to be used as a Session
Token .
For more information about Session Tokens, see Using session
tokens . These are
passed to the request object, alongside other API parameters:
Input
Language Code
Region Code
FieldMask
is not a required parameter for Autocomplete, so has been omitted from this
request.
Place Photos (New)
The following is an example of how to call Place
Photo using the client
library.
Java
import com.google.api.gax.rpc.FixedHeaderProvider ;
import com.google.api.gax.rpc.HeaderProvider ;
import com.google.maps.places.v1.GetPhotoMediaRequest ;
import com.google.maps.places.v1.GetPlaceRequest ;
import com.google.maps.places.v1.Photo ;
import com.google.maps.places.v1.PhotoMedia ;
import com.google.maps.places.v1.Place ;
import com.google.maps.places.v1.PlacesClient ;
import com.google.maps.places.v1.PlacesSettings ;
...
private static void PlacePhoto () {
String placeId = "ChIJaXQRs6lZwokRY6EFpJnhNNE" ;
String placeName = "places/" + placeId ;
int photoMaxWidth = 800 ;
try {
// Only request the photos field from Place Details
Map String , String > getPlaceHeaders = new HashMap <> ();
String getPlaceFieldMaskString = "photos" ;
getPlaceHeaders . put ( "x-goog-fieldmask" , getPlaceFieldMaskString );
HeaderProvider getPlaceHeaderProvider = FixedHeaderProvider . create ( getPlaceHeaders );
PlacesSettings getPlaceSettings = PlacesSettings . newBuilder ()
. setHeaderProvider ( getPlaceHeaderProvider )
. build ();
PlacesClient placeDetailsClient = PlacesClient . create ( getPlaceSettings );
// Build the Place Details request
GetPlaceRequest getPlaceRequest = GetPlaceRequest . newBuilder ()
. setName ( placeName )
. build ();
Place placeResponse = placeDetailsClient . getPlace ( getPlaceRequest );
// Check if photos were returned and get the first photo's media name
List photos = placeResponse . getPhotosList ();
if ( photos != null && ! photos . isEmpty ()) {
Photo firstPhoto = photos . get ( 0 );
String firstPhotoName = firstPhoto . getName ();
if ( firstPhotoName == null || firstPhotoName . isEmpty ()) {
return ;
}
String photoMediaName = firstPhotoName + "/media" ;
// Build the Place Photos request
GetPhotoMediaRequest photoRequest = GetPhotoMediaRequest . newBuilder ()
. setName ( photoMediaName )
. setMaxWidthPx ( photoMaxWidth )
. build ();
PlacesClient photoMediaClient = PlacesClient . create ();
// Call Place Photos and output the response to the console
PhotoMedia photoMediaResponse = photoMediaClient . getPhotoMedia ( photoRequest );
System . out . println ( photoMediaResponse );
placeDetailsClient . close ();
photoMediaClient . close ();
} else {
System . out . println ( "\nNo photos were found for this place in the Place Details response." );
}
} catch ( Exception e ) {
System . err . println ( "An error occurred: " + e . getMessage ());
}
}
Go
package main
import (
"context"
"fmt"
"log"
places "cloud.google.com/go/maps/places/apiv1"
placespb "cloud.google.com/go/maps/places/apiv1/placespb"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
// Initialize the Places Client
c , err := places . NewClient ( ctx )
if err != nil {
log . Fatalf ( "NewClient: %v" , err )
}
defer c . Close ()
// Use Place Details to find a photo resource name
// Define the Place ID and construct the resource name
placeID := "ChIJaXQRs6lZwokRY6EFpJnhNNE"
resourceName := "places/" + placeID
// Define the FieldMask to request the photos field
getPlaceFieldMask := "photos"
// Create the GetPlaceRequest
getPlaceReq := & placespb . GetPlaceRequest {
Name : resourceName ,
}
// Add the FieldMask header to the Place Details request
getPlaceCtx := metadata . AppendToOutgoingContext ( ctx , "x-goog-fieldmask" , getPlaceFieldMask )
// Call Place Details
placeResp , err := c . GetPlace ( getPlaceCtx , getPlaceReq )
if err != nil {
log . Fatalf ( "GetPlace failed: %v" , err )
}
// Check if photos were returned and get the first photo's name
if len ( placeResp . GetPhotos ()) == 0 {
log . Fatalf ( "No photos found for place: %s" , resourceName )
return
}
firstPhoto := placeResp . GetPhotos ()[ 0 ]
photoMediaResourceName := firstPhoto . GetName () + "/media"
// Define photo dimensions
maxWidth := int32 ( 800 )
// Create the Place Photo request
getPhotoMediaReq := & placespb . GetPhotoMediaRequest {
Name : photoMediaResourceName ,
MaxWidthPx : maxWidth ,
}
// 10. Call Place Photo API
photoMediaResp , err := c . GetPhotoMedia ( ctx , getPhotoMediaReq )
if err != nil {
log . Fatalf ( "GetPhotoMedia failed for %s: %v" , photoMediaResourceName , err )
}
fmt . Println ( "\nPhoto Media Details:" )
fmt . Printf ( " Resource Name: %s\n" , photoMediaResp . GetName ())
fmt . Printf ( " Photo URI: %s\n" , photoMediaResp . GetPhotoUri ())
}
NodeJS
const { PlacesClient } = require ( '@googlemaps/places' ). v1 ;
// Place ID for the place whose photos you want
const placeId = 'ChIJaXQRs6lZwokRY6EFpJnhNNE' ;
// Maximum width for the photo
const maxWidthPx = 800 ;
// Field mask to request the photos field in the GetPlace call
const getPlaceFieldMask = 'photos' ;
async function getPlacePhoto () {
// Instantiates the Places client
const placesClient = new PlacesClient ();
const placeName = `places/ ${ placeId } ` ;
// Get Place details to find photo references
const getPlaceRequest = {
name : placeName ,
};
const getPlaceCallOptions = {
otherArgs : {
headers : {
'X-Goog-FieldMask' : getPlaceFieldMask ,
},
},
};
const [ placeResponse ] = await placesClient . getPlace ( getPlaceRequest , getPlaceCallOptions );
// Check if photos exist and get the first one
if ( ! placeResponse . photos || placeResponse . photos . length === 0 ) {
console . log ( `\nNo photos found for Place ID: ${ placeId } ` );
return ;
}
// Get the resource name of the first photo
const firstPhoto = placeResponse . photos [ 0 ];
const photoMediaName = ` ${ firstPhoto . name } /media` ;
// Construct the Place Photos request
const getPhotoMediaRequest = {
name : photoMediaName ,
maxWidthPx : maxWidthPx ,
};
// Call Place Photos and output the response to the console
const [ photoMediaResponse ] = await placesClient . getPhotoMedia ( getPhotoMediaRequest );
console . log ( photoMediaResponse );
}
getPlacePhoto ();
Python
from google.maps import places_v1
async def place_photo ():
client = places_v1 . PlacesAsyncClient ()
# Build the request
request = places_v1 . GetPlaceRequest (
name = "places/ChIJaXQRs6lZwokRY6EFpJnhNNE" ,
)
# Set the field mask
fieldMask = "photos"
# Make the request
response = await client . get_place ( request = request , metadata = [( "x-goog-fieldmask" , fieldMask )])
if response . photos : # Check if the photos list contains photos
# Get the first photo name from the response
first_photo_name = response . photos [ 0 ] . name + "/media"
# Build the request
photo_request = places_v1 . GetPhotoMediaRequest (
name = first_photo_name ,
max_width_px = 800 ,
)
photo_response = await client . get_photo_media ( request = photo_request )
return photo_response
else :
return ( "No photos were returned in the response." )
print ( await place_photo ())
.NET
using Google.Api.Gax.Grpc ;
using Google.Maps.Places.V1 ;
...
private static async Task PlacePhoto ()
{
PlacesClient client = await PlacesClient . CreateAsync ();
PlaceName placeName = PlaceName . FromPlace ( "ChIJaXQRs6lZwokRY6EFpJnhNNE" );
int photoMaxWidth = 800 ;
// Build the Place Details request
GetPlaceRequest getPlaceRequest = new GetPlaceRequest
{
PlaceName = placeName
};
// Only request the photos field from Place Details
string getPlaceFields = "photos" ;
CallSettings getPlaceCallSettings = CallSettings . FromHeader ( "X-Goog-FieldMask" , getPlaceFields );
// Make the Place Details API call
Place placeResponse = await client . GetPlaceAsync ( getPlaceRequest , getPlaceCallSettings );
// Check if photos were returned and get the first photo's media name
if ( placeResponse ?. Photos != null && placeResponse . Photos . Any ())
{
// Get the resource name of the first photo & append "/media"
string firstPhotoResourceName = placeResponse . Photos [ 0 ]. Name ;
string photoMediaNameString = $"{firstPhotoResourceName}/media" ;
// Build the Place Photos request
GetPhotoMediaRequest photoRequest = new GetPhotoMediaRequest
{
Name = photoMediaNameString ,
MaxWidthPx = photoMaxWidth
};
// Call Place Photos and output the response to the console
PhotoMedia photoMediaResponse = await client . GetPhotoMediaAsync ( photoRequest );
Console . WriteLine ( photoMediaResponse );
}
else
{
Console . WriteLine ( "\nNo photos were found for this place in the Place Details response." );
}
}
First call Place Details (New) to request the photos for a place.
Place Details (New) responds with photo names. The first returned photo
name from
Place Details (New) is then used to call Place Photos (New). We
also set a maximum width
for the returned photo.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

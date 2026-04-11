---
title: "Routes API client libraries \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/client-libraries
  title: "Routes API client libraries \_|\_ Google for Developers"
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
Routes API
Resources
Send feedback
Routes API client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides instructions for getting started with the Routes API client libraries, covering installation and basic usage.
Client libraries are available for Java, Go, Node.js, Python, and .Net, simplifying interaction with the Routes API.
You'll need to set up authentication using Application Default Credentials (ADC) before using the client libraries.
Code examples demonstrate how to make Compute Routes and Route Matrix requests using the client libraries in each supported language.
Additional resources such as source code, issue trackers, and community forums are provided for further assistance.
This page shows how to get started with the client libraries for Routes API.
Read more about the client libraries in Client Libraries
Explained .
Installing the client library
Java
For more information, see
Setting Up a Java Development Environment .
See Google Routes API Client for Java
for the installation instructions.
Go
go get cloud.google.com/go/maps
For more information, see
Setting Up a Go Development Environment .
See Google Routes API Client for Go
for the installation instructions.
Node.js
npm install @googlemaps/routing
For more information, see
Setting Up a Node.js Development Environment .
For the complete installation instructions, see Google Routes API Client for Node.js
Python
For more information, see
Setting Up a Python Development Environment .
For the complete installation instructions, see Google Routes API Client for Python
.Net
For more information, see
Setting Up a .Net Development Environment .
For the complete installation instructions, see Google Routes API Client for .Net
Setting up authentication
When you use client libraries, you use
Application Default Credentials (ADC)
to authenticate. For information about setting up ADC, see
Provide credentials for Application Default Credentials .
For information about using ADC with client libraries, see
Authenticate using client libraries .
Using the client library
Java
Compute Routes example:
import com.google.maps.routing.v2. * ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
public class Main {
public static void main ( String [] arguments ) throws IOException {
RoutesSettings routesSettings = RoutesSettings . newBuilder ()
. setHeaderProvider (() - > {
Map<String , String > headers = new HashMap <> ();
headers . put ( "X-Goog-FieldMask" , "*" );
return headers ;
}). build ();
RoutesClient routesClient = RoutesClient . create ( routesSettings );
ComputeRoutesResponse response = routesClient . computeRoutes ( ComputeRoutesRequest . newBuilder ()
. setOrigin ( Waypoint . newBuilder (). setPlaceId ( "ChIJeRpOeF67j4AR9ydy_PIzPuM" ). build ())
. setDestination ( Waypoint . newBuilder (). setPlaceId ( "ChIJG3kh4hq6j4AR_XuFQnV0_t8" ). build ())
. setRoutingPreference ( RoutingPreference . TRAFFIC_AWARE )
. setTravelMode ( RouteTravelMode . DRIVE ). build ());
System . out . println ( "Response: " + response . toString ());
}
}
Route Matrix example:
import com.google.api.gax.rpc.ServerStream ;
import com.google.api.gax.rpc.ServerStreamingCallable ;
import com.google.maps.routing.v2. * ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
public class Main {
public static void main ( String [] arguments ) throws IOException {
RoutesSettings routesSettings = RoutesSettings . newBuilder ()
. setHeaderProvider (() - > {
Map<String , String > headers = new HashMap <> ();
headers . put ( "X-Goog-FieldMask" , "*" );
return headers ;
}). build ();
RoutesClient routesClient = RoutesClient . create ( routesSettings );
ServerStreamingCallable<ComputeRouteMatrixRequest , RouteMatrixElement > computeRouteMatrix = routesClient . computeRouteMatrixCallable ();
ServerStream<RouteMatrixElement > stream = computeRouteMatrix . call ( ComputeRouteMatrixRequest . newBuilder ()
. addOrigins ( RouteMatrixOrigin . newBuilder ()
. setWaypoint ( Waypoint . newBuilder ().
setPlaceId ( "ChIJeRpOeF67j4AR9ydy_PIzPuM" ). build ()))
. addDestinations ( RouteMatrixDestination . newBuilder ()
. setWaypoint ( Waypoint . newBuilder (). setPlaceId ( "ChIJG3kh4hq6j4AR_XuFQnV0_t8" ). build ())
. build ()). setTravelMode ( RouteTravelMode . DRIVE )
. build ());
for ( RouteMatrixElement element : stream ) {
System . out . println ( "Response : " + element . toString ());
}
}
}
Go
Compute Routes example:
import (
"context"
"fmt"
"io"
"os"
routing "cloud.google.com/go/maps/routing/apiv2"
"cloud.google.com/go/maps/routing/apiv2/routingpb"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
client , err := routing . NewRoutesClient ( ctx )
if err != nil {
fmt . Fprintf ( os . Stderr , "error: %v\n" , err )
os . Exit ( 1 )
}
computeRoutesReq := routingpb . ComputeRoutesRequest {
Origin : & routingpb . Waypoint {
LocationType : & routingpb . Waypoint_PlaceId {
PlaceId : "ChIJeRpOeF67j4AR9ydy_PIzPuM" ,
},
},
Destination : & routingpb . Waypoint {
LocationType : & routingpb . Waypoint_PlaceId {
PlaceId : "ChIJG3kh4hq6j4AR_XuFQnV0_t8" ,
},
},
RoutingPreference : routingpb . RoutingPreference_TRAFFIC_AWARE ,
TravelMode : routingpb . RouteTravelMode_DRIVE ,
}
ctx = metadata . AppendToOutgoingContext ( ctx , "X-Goog-FieldMask" , "*" )
computeRoutesResponse , err := client . ComputeRoutes ( ctx , & computeRoutesReq )
if err != nil {
fmt . Fprintf ( os . Stderr , "error: %v\n" , err )
os . Exit ( 1 )
}
fmt . Fprintf ( os . Stdout , "response: %v\n" , computeRoutesResponse )
}
Route Matrix example:
import (
"context"
"fmt"
"io"
"os"
routing "cloud.google.com/go/maps/routing/apiv2"
"cloud.google.com/go/maps/routing/apiv2/routingpb"
"google.golang.org/grpc/metadata"
)
func main () {
ctx := context . Background ()
client , err := routing . NewRoutesClient ( ctx )
if err != nil {
fmt . Printf ( "error: %v\n" , err )
os . Exit ( 1 )
}
computeRouteMatrixReq := routingpb . ComputeRouteMatrixRequest {
Origins : [] * routingpb . RouteMatrixOrigin {
{
Waypoint : & routingpb . Waypoint {
LocationType : & routingpb . Waypoint_PlaceId {
PlaceId : "ChIJeRpOeF67j4AR9ydy_PIzPuM" ,
},
},
},
},
Destinations : [] * routingpb . RouteMatrixDestination {
{
Waypoint : & routingpb . Waypoint {
LocationType : & routingpb . Waypoint_PlaceId {
PlaceId : "ChIJG3kh4hq6j4AR_XuFQnV0_t8" ,
},
},
},
},
TravelMode : routingpb . RouteTravelMode_DRIVE ,
}
ctx = metadata . AppendToOutgoingContext ( ctx , "X-Goog-FieldMask" , "*" )
stream , err := client . ComputeRouteMatrix ( ctx , & computeRouteMatrixReq )
if err != nil {
fmt . Fprintf ( os . Stderr , "error: %v\n" , err )
os . Exit ( 1 )
}
for {
element , err := stream . Recv ()
if err == io . EOF {
break
}
if err != nil {
fmt . Fprintf ( os . Stderr , "error: %v\n" , err )
os . Exit ( 1 )
}
fmt . Fprintf ( os . Stdout , "element: %v\n" , element )
}
}
Node.js
Compute Routes example:
// Imports the Routing library
const { RoutesClient } = require ( "@googlemaps/routing" ). v2 ;
const origin = {
location : {
latLng : {
latitude : 37.419734 ,
longitude : - 122.0827784 ,
},
},
};
const destination = {
location : {
latLng : {
latitude : 37.41767 ,
longitude : - 122.079595 ,
},
},
};
// Instantiates a client
const routingClient = new RoutesClient ();
async function callComputeRoutes () {
const request = {
origin ,
destination ,
};
// Run request
const response = await routingClient . computeRoutes ( request , {
otherArgs : {
headers : {
"Content-Type" : "application/json" ,
"X-Goog-Api-Key" : "YOUR_API_KEY" ,
"X-Goog-FieldMask" :
"routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline" ,
},
},
});
console . log ( response );
}
callComputeRoutes ();
Compute Route Matrix example:
// Imports the Routing library
const { RoutesClient } = require ( "@googlemaps/routing" ). v2 ;
const origins = [
{
waypoint : {
location : {
latLng : {
latitude : 37.420761 ,
longitude : - 122.081356 ,
},
},
},
},
{
waypoint : {
location : {
latLng : {
latitude : 37.403184 ,
longitude : - 122.097371 ,
},
},
},
},
];
const destinations = [
{
waypoint : {
location : {
latLng : {
latitude : 37.420999 ,
longitude : - 122.086894 ,
},
},
},
},
{
waypoint : {
location : {
latLng : {
latitude : 37.383047 ,
longitude : - 122.044651 ,
},
},
},
},
];
// Instantiates a client
const routingClient = new RoutesClient ();
async function callComputeRouteMatrix () {
// Construct request
const request = {
origins ,
destinations ,
};
// Run request
const stream = await routingClient . computeRouteMatrix ( request , {
otherArgs : {
headers : {
"Content-Type" : "application/json" ,
"X-Goog-Api-Key" : "YOUR_API_KEY" ,
"X-Goog-FieldMask" : "*" ,
},
},
});
stream . on ( "data" , ( response ) = > {
console . log ( response );
});
stream . on ( "error" , ( err ) = > {
throw err ;
});
stream . on ( "end" , () = > {
/* API call completed */
});
}
callComputeRouteMatrix ();
Python
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.maps import routing_v2
async def sample_compute_routes ():
# Create a client
client = routing_v2 . RoutesAsyncClient ()
# Initialize request argument(s)
request = routing_v2 . ComputeRoutesRequest ()
# Make the request
response = await client . compute_routes ( request = request )
# Handle the response
print ( response )
.Net
View on GitHub
using Google.Maps.Routing.V2 ;
using Google.Protobuf.WellKnownTypes ;
using System.Threading.Tasks ;
public sealed partial class GeneratedRoutesClientSnippets
{
/// <summary>Snippet for ComputeRoutesAsync</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public async Task ComputeRoutesRequestObjectAsync ()
{
// Create client
RoutesClient routesClient = await RoutesClient . CreateAsync ();
// Initialize request argument(s)
ComputeRoutesRequest request = new ComputeRoutesRequest
{
Origin = new Waypoint (),
Destination = new Waypoint (),
Intermediates = { new Waypoint (), },
TravelMode = RouteTravelMode . TravelModeUnspecified ,
RoutingPreference = RoutingPreference . Unspecified ,
PolylineQuality = PolylineQuality . Unspecified ,
DepartureTime = new Timestamp (),
ComputeAlternativeRoutes = false ,
RouteModifiers = new RouteModifiers (),
LanguageCode = "" ,
Units = Units . Unspecified ,
PolylineEncoding = PolylineEncoding . Unspecified ,
OptimizeWaypointOrder = false ,
RequestedReferenceRoutes =
{
ComputeRoutesRequest . Types . ReferenceRoute . Unspecified ,
},
ExtraComputations =
{
ComputeRoutesRequest . Types . ExtraComputation . Unspecified ,
},
RegionCode = "" ,
TrafficModel = TrafficModel . Unspecified ,
ArrivalTime = new Timestamp (),
TransitPreferences = new TransitPreferences (),
};
// Make the request
ComputeRoutesResponse response = await routesClient . ComputeRoutesAsync ( request );
}
}
Additional resources
Java
Source Code
GitHub Issue Tracker
Stack Overflow
Go
Source Code
Package Documentation
GitHub Issue Tracker
Stack Overflow
Node.js
Source Code
GitHub Issue Tracker
Stack Overflow
Python
Source Code
GitHub Issue Tracker
Stack Overflow
.Net
Source Code
GitHub Issue Tracker
Stack Overflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The content provides instructions for using client libraries with the Routes API across multiple languages. Key actions include: installing the respective language's client library (Java, Go, Node.js, Python, .Net), setting up Application Default Credentials (ADC) for authentication, and using code examples for \"Compute Routes\" and \"Route Matrix\" functionalities, demonstrating route calculation between specified locations using the API, in addition to links for documentation.\n"]]

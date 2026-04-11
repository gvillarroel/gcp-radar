---
title: "Get a route \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/compute_route_directions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/compute_route_directions
  title: "Get a route \_|\_ Routes API \_|\_ Google for Developers"
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
Send feedback
Get a route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Get routes using the Routes API by sending an HTTP POST request or calling the gRPC method.
The request body includes source, destination, and route options such as travel mode, language, and units.
The response includes route details specified by the field mask, such as duration, distance, and encoded polyline.
Example requests and responses are provided for HTTP, gRPC (using Go, Java, C#, and Node.js) with instructions for specifying API key and field mask.
Use the Interactive Polyline Encoder Utility to decode the polyline in the response to display the route on a map.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
You can get a route using the Routes API
Compute Routes by sending an HTTP POST request to the
computeRoutes method (REST) or by
calling the
ComputeRoutes
method (gRPC).
The following example shows the URL of a REST request to the computeRoutes
method:
https://routes.googleapis.com/directions/v2:computeRoutes
Include your request options in the JSON request
body . The request body
contains the source and destination locations and any options that you want to
set on the route. For more information, see Specify
locations and Available route options .
The response contains the fields that you specified in the response field mask
by using the URL parameter $fields or field information using the HTTP gRPC
header X-Goog-FieldMask . For details, see Choose what information to
return .
For an example of a transit route request, see Example: Get a route on
transit .
Example: HTTP route request
The following code shows how to construct a request body for a
computeRoutes request. In this
example, you set the source and destination locations and also specify:
A travelMode of DRIVE and a traffic-aware driving route.
A language of en-US with metric distance units. These
preferences apply only to the localized values, when requested.
distanceMeters is always provided in metric.
A response field mask in the X-Goog-FieldMask header that specifies to
return the following fields in the response:
routes.duration
routes.distanceMeters
routes.polyline.encodedPolyline
Note: To decode the polyline returned in the response and see the route on a
map, use the decode utility at Interactive Polyline Encoder
Utility .
curl -X POST -d '{
"origin":{
"location":{
"latLng":{
"latitude": 37.419734,
"longitude": -122.0827784
}
}
},
"destination":{
"location":{
"latLng":{
"latitude": 37.417670,
"longitude": -122.079595
}
}
},
"travelMode": "DRIVE",
"routingPreference": "TRAFFIC_AWARE",
"computeAlternativeRoutes": false,
"routeModifiers": {
"avoidTolls": false,
"avoidHighways": false,
"avoidFerries": false
},
"languageCode": "en-US",
"units": "METRIC"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: YOUR_API_KEY ' \
-H 'X-Goog-FieldMask: routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline' \
'https://routes.googleapis.com/directions/v2:computeRoutes'
Example: HTTP route response body
The call above generates the following JSON response:
Note: For detailed description of the response, see Understand the compute
route response .
{
"routes" : [
{
"distanceMeters" : 772 ,
"duration" : "165s" ,
"polyline" : {
"encodedPolyline" : "ipkcFfichVnP@j@BLoFVwM{E?"
}
}
]
}
Example: gRPC request
gRPC is a high performance, open source universal RPC
framework developed by Google. In gRPC, a client application can directly call
methods on a server application on a different machine as if it was a local
object.
The following shows an example gRPC request.
Go
package main
import (
"context"
"crypto/tls"
"fmt"
"log"
"time"
routespb "google.golang.org/genproto/googleapis/maps/routing/v2"
"google.golang.org/genproto/googleapis/type/latlng"
"google.golang.org/grpc"
"google.golang.org/grpc/credentials"
"google.golang.org/grpc/metadata"
)
const (
fieldMask = "*"
apiKey = "INSERT_API_KEY_HERE"
serverAddr = "routes.googleapis.com:443"
)
func main () {
config := tls . Config {}
conn , err := grpc . Dial ( serverAddr ,
grpc . WithTransportCredentials ( credentials . NewTLS ( & config )))
if err != nil {
log . Fatalf ( "Failed to connect: %v" , err )
}
defer conn . Close ()
client := routespb . NewRoutesClient ( conn )
ctx , cancel := context . WithTimeout ( context . Background (), 2 * time . Second )
ctx = metadata . AppendToOutgoingContext ( ctx , "X-Goog-Api-Key" , apiKey )
ctx = metadata . AppendToOutgoingContext ( ctx , "X-Goog-Fieldmask" , fieldMask )
defer cancel ()
// create the origin using a latitude and longitude
origin := & routespb . Waypoint {
LocationType : & routespb . Waypoint_Location {
Location : & routespb . Location {
LatLng : & latlng . LatLng {
Latitude : 37.417670 ,
Longitude : - 122.0827784 ,
},
},
},
}
// create the destination using a latitude and longitude
destination := & routespb . Waypoint {
LocationType : & routespb . Waypoint_Location {
Location : & routespb . Location {
LatLng : & latlng . LatLng {
Latitude : 37.417670 ,
Longitude : - 122.079595 ,
},
},
},
}
req := & routespb . ComputeRoutesRequest {
Origin : origin ,
Destination : destination ,
TravelMode : routespb . RouteTravelMode_DRIVE ,
RoutingPreference : routespb . RoutingPreference_TRAFFIC_AWARE ,
ComputeAlternativeRoutes : true ,
Units : routespb . Units_METRIC ,
RouteModifiers : & routespb . RouteModifiers {
AvoidTolls : false ,
AvoidHighways : true ,
AvoidFerries : true ,
},
PolylineQuality : routespb . PolylineQuality_OVERVIEW ,
}
// execute rpc
resp , err := client . ComputeRoutes ( ctx , req )
if err != nil {
// "rpc error: code = InvalidArgument desc = Request contains an invalid
// argument" may indicate that your project lacks access to Routes
log . Fatal ( err )
}
fmt . Printf ( "Response: %v" , resp )
}
Java
Note: This example uses both the
Compute Routes and
Compute Route Matrix.
package com.example ;
import com.google.maps.routing.v2.* ;
import com.google.type.LatLng ;
import io.grpc.CallOptions ;
import io.grpc.Channel ;
import io.grpc.ClientCall ;
import io.grpc.ClientInterceptor ;
import io.grpc.ClientInterceptors ;
import io.grpc.ForwardingClientCall ;
import io.grpc.Metadata ;
import io.grpc.MethodDescriptor ;
import io.grpc.StatusRuntimeException ;
import io.grpc.netty.NettyChannelBuilder ;
import java.util.Iterator ;
import java.util.concurrent.TimeUnit ;
import java.util.logging.Level ;
import java.util.logging.Logger ;
public class RoutesClient {
// For more detail on inserting API keys, see:
// https://cloud.google.com/endpoints/docs/grpc/restricting-api-access-with-api-keys#java
// For more detail on system parameters (such as FieldMask), see:
// https://cloud.google.com/apis/docs/system-parameters
private static final class RoutesInterceptor implements ClientInterceptor {
private final String apiKey ;
private static final Logger logger = Logger . getLogger ( RoutesInterceptor . class . getName ());
private static Metadata . Key<String> API_KEY_HEADER = Metadata . Key . of ( "x-goog-api-key" ,
Metadata . ASCII_STRING_MARSHALLER );
private static Metadata . Key<String> FIELD_MASK_HEADER = Metadata . Key . of ( "x-goog-fieldmask" ,
Metadata . ASCII_STRING_MARSHALLER );
public RoutesInterceptor ( String apiKey ) {
this . apiKey = apiKey ;
}
@Override
public < ReqT , RespT > ClientCall<ReqT , RespT > interceptCall ( MethodDescriptor<ReqT , RespT > method ,
CallOptions callOptions , Channel next ) {
logger . info ( "Intercepted " + method . getFullMethodName ());
ClientCall<ReqT , RespT > call = next . newCall ( method , callOptions );
call = new ForwardingClientCall . SimpleForwardingClientCall<ReqT , RespT > ( call ) {
@Override
public void start ( Listener<RespT> responseListener , Metadata headers ) {
headers . put ( API_KEY_HEADER , apiKey );
// Note that setting the field mask to * is OK for testing, but discouraged in
// production.
// For example, for ComputeRoutes, set the field mask to
// "routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline"
// in order to get the route distances, durations, and encoded polylines.
headers . put ( FIELD_MASK_HEADER , "*" );
super . start ( responseListener , headers );
}
};
return call ;
}
}
private static final Logger logger = Logger . getLogger ( RoutesClient . class . getName ());
private final RoutesGrpc . RoutesBlockingStub blockingStub ;
public RoutesClient ( Channel channel ) {
blockingStub = RoutesGrpc . newBlockingStub ( channel );
}
public static Waypoint createWaypointForLatLng ( double lat , double lng ) {
return Waypoint . newBuilder ()
. setLocation ( Location . newBuilder (). setLatLng ( LatLng . newBuilder (). setLatitude ( lat ). setLongitude ( lng )))
. build ();
}
public void computeRoutes () {
ComputeRoutesRequest request = ComputeRoutesRequest . newBuilder ()
. setOrigin ( createWaypointForLatLng ( 37.420761 , - 122.081356 ))
. setDestination ( createWaypointForLatLng ( 37.420999 , - 122.086894 )). setTravelMode ( RouteTravelMode . DRIVE )
. setRoutingPreference ( RoutingPreference . TRAFFIC_AWARE ). setComputeAlternativeRoutes ( true )
. setRouteModifiers (
RouteModifiers . newBuilder (). setAvoidTolls ( false ). setAvoidHighways ( true ). setAvoidFerries ( true ))
. setPolylineQuality ( PolylineQuality . OVERVIEW ). build ();
ComputeRoutesResponse response ;
try {
logger . info ( "About to send request: " + request . toString ());
response = blockingStub . withDeadlineAfter ( 2000 , TimeUnit . MILLISECONDS ). computeRoutes ( request );
} catch ( StatusRuntimeException e ) {
logger . log ( Level . WARNING , "RPC failed: {0}" , e . getStatus ());
return ;
}
logger . info ( "Response: " + response . toString ());
}
public void computeRouteMatrix () {
ComputeRouteMatrixRequest request = ComputeRouteMatrixRequest . newBuilder ()
. addOrigins ( RouteMatrixOrigin . newBuilder (). setWaypoint ( createWaypointForLatLng ( 37.420761 , - 122.081356 ))
. setRouteModifiers ( RouteModifiers . newBuilder (). setAvoidTolls ( false ). setAvoidHighways ( true )
. setAvoidFerries ( true )))
. addOrigins ( RouteMatrixOrigin . newBuilder (). setWaypoint ( createWaypointForLatLng ( 37.403184 , - 122.097371 )))
. addDestinations ( RouteMatrixDestination . newBuilder ()
. setWaypoint ( createWaypointForLatLng ( 37.420999 , - 122.086894 )))
. addDestinations ( RouteMatrixDestination . newBuilder ()
. setWaypoint ( createWaypointForLatLng ( 37.383047 , - 122.044651 )))
. setTravelMode ( RouteTravelMode . DRIVE ). setRoutingPreference ( RoutingPreference . TRAFFIC_AWARE ). build ();
Iterator<RouteMatrixElement> elements ;
try {
logger . info ( "About to send request: " + request . toString ());
elements = blockingStub . withDeadlineAfter ( 2000 , TimeUnit . MILLISECONDS ). computeRouteMatrix ( request );
} catch ( StatusRuntimeException e ) {
logger . log ( Level . WARNING , "RPC failed: {0}" , e . getStatus ());
return ;
}
while ( elements . hasNext ()) {
logger . info ( "Element response: " + elements . next (). toString ());
}
}
public static void main ( String [] args ) throws Exception {
String apiKey = System . getenv ( "INSERT_API_KEY_HERE" );
// The standard TLS port is 443
Channel channel = NettyChannelBuilder . forAddress ( "routes.googleapis.com" , 443 ). build ();
channel = ClientInterceptors . intercept ( channel , new RoutesInterceptor ( apiKey ));
RoutesClient client = new RoutesClient ( channel );
client . computeRoutes ();
client . computeRouteMatrix ();
}
}
C#
For an example using C#, see
Google.Maps.Routing.V2 .
Node.js
const protoPath = "YOUR_PROTO_PATH" ;
const grpc = require ( "@grpc/grpc-js" );
const protoLoader = require ( "@grpc/proto-loader" );
const packageDefinition = protoLoader . loadSync ( protoPath , {
keepCase : true ,
longs : String ,
enums : String ,
defaults : true ,
oneofs : true ,
});
const protoDescriptor =
grpc . loadPackageDefinition ( packageDefinition ). google . maps . routing . v2 ;
const metadata = new grpc . Metadata ();
const host = "routes.googleapis.com:443" ;
const apiKey = "YOUR_API_KEY" ;
const fieldMask = "*" ;
let ComputeRoutesRequest = {
origin : {
location : {
lat_lng : {
latitude : - 37.816 ,
longitude : 144.964 ,
},
},
},
destination : {
location : {
lat_lng : {
latitude : - 37.815 ,
longitude : 144.966 ,
},
},
},
routing_preference : "TRAFFIC_AWARE" ,
travel_mode : "DRIVE" ,
};
const ssl_creds = grpc . credentials . createSsl ();
const call_creds = grpc . credentials . createFromMetadataGenerator (
function ( args , callback ) {
metadata . set ( "X-Goog-Api-Key" , apiKey );
metadata . set ( "X-Goog-Fieldmask" , fieldMask );
metadata . set ( "Content-Type" , "application/json" );
callback ( null , metadata );
},
);
const credentials = grpc . credentials . combineChannelCredentials (
ssl_creds ,
call_creds ,
);
const client = new protoDescriptor . Routes ( host , credentials );
client . ComputeRoutes ( ComputeRoutesRequest , ( error , response ) => {
if ( error ) {
console . log ( error );
return ;
} else if ( response ) {
console . log ( response );
}
});
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To retrieve a route, send an HTTP POST request to the `computeRoutes` method via REST or call the `ComputeRoutes` method using gRPC. The request includes a JSON body specifying the origin, destination, and route options such as `travelMode`, `routingPreference`, and other modifiers. In REST, use the `X-Goog-FieldMask` header to define the desired response fields; for gRPC, it is also required. The response delivers the route's data, including duration, distance, and an encoded polyline.\n"]]

---
title: "Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TopLevel/computeRoutes
  title: "Method: computeRoutes \_|\_ Routes API \_|\_ Google for Developers"
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
Reference
Send feedback
Method: computeRoutes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Compute Routes API calculates optimal routes between specified waypoints based on preferences like travel mode and route optimization.
Requests define origin, destination, optional intermediate waypoints, and preferences for route calculation.
Responses provide calculated routes, fallback information, and geocoding results for waypoints.
Enums and objects define route details including polylines, legs, steps, navigation instructions, maneuvers, and transit information.
Efficient requests utilize field masks, while various travel modes, preferences, and customization options offer route flexibility.
HTTP request
Request body
JSON representation
Response body
JSON representation
PolylineQuality
PolylineEncoding
ReferenceRoute
ExtraComputation
Route
JSON representation
RouteLabel
RouteLeg
JSON representation
Polyline
JSON representation
RouteLegStep
JSON representation
NavigationInstruction
JSON representation
Maneuver
RouteLegStepTravelAdvisory
JSON representation
RouteLegStepLocalizedValues
JSON representation
RouteLegStepTransitDetails
JSON representation
TransitStopDetails
JSON representation
TransitStop
JSON representation
TransitDetailsLocalizedValues
JSON representation
LocalizedTime
JSON representation
TransitLine
JSON representation
TransitAgency
JSON representation
TransitVehicle
JSON representation
TransitVehicleType
RouteLegTravelAdvisory
JSON representation
RouteLegLocalizedValues
JSON representation
StepsOverview
JSON representation
MultiModalSegment
JSON representation
Viewport
JSON representation
RouteLocalizedValues
JSON representation
PolylineDetails
JSON representation
FlyoverInfo
JSON representation
RoadFeatureState
PolylinePointIndex
JSON representation
NarrowRoadInfo
JSON representation
GeocodingResults
JSON representation
GeocodedWaypoint
JSON representation
Returns the primary route along with optional alternate routes, given a set of terminal and intermediate waypoints.
NOTE: This method requires that you specify a response field mask in the input. You can provide the response field mask by using URL parameter $fields or fields , or by using an HTTP/gRPC header X-Goog-FieldMask (see the available URL parameters and headers ). The value is a comma separated list of field paths. See detailed documentation about how to construct the field paths .
For example, in this method:
Field mask of all available fields (for manual inspection): X-Goog-FieldMask: *
Field mask of Route-level duration, distance, and polyline (an example production setup): X-Goog-FieldMask:
routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline
Google discourage the use of the wildcard ( * ) response field mask, or specifying the field mask at the top level ( routes ), because:
Selecting only the fields that you need helps our server save computation cycles, allowing us to return the result to you with a lower latency.
Selecting only the fields that you need in your production job ensures stable latency performance. We might add more response fields in the future, and those new fields might require extra computation time. If you select all fields, or if you select all fields at the top level, then you might experience performance degradation because any new field we add will be automatically included in the response.
Selecting only the fields that you need results in a smaller response size, and thus higher network throughput.
HTTP request
POST https://routes.googleapis.com/directions/v2:computeRoutes
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"origin" : {
object ( Waypoint )
} ,
"destination" : {
object ( Waypoint )
} ,
"intermediates" : [
{
object ( Waypoint )
}
] ,
"travelMode" : enum ( RouteTravelMode ) ,
"routingPreference" : enum ( RoutingPreference ) ,
"polylineQuality" : enum ( PolylineQuality ) ,
"polylineEncoding" : enum ( PolylineEncoding ) ,
"departureTime" : string ,
"arrivalTime" : string ,
"computeAlternativeRoutes" : boolean ,
"routeModifiers" : {
object ( RouteModifiers )
} ,
"languageCode" : string ,
"regionCode" : string ,
"units" : enum ( Units ) ,
"optimizeWaypointOrder" : boolean ,
"requestedReferenceRoutes" : [
enum ( ReferenceRoute )
] ,
"extraComputations" : [
enum ( ExtraComputation )
] ,
"trafficModel" : enum ( TrafficModel ) ,
"transitPreferences" : {
object ( TransitPreferences )
}
}
Fields
origin
object ( Waypoint )
Required. Origin waypoint.
destination
object ( Waypoint )
Required. Destination waypoint.
intermediates[]
object ( Waypoint )
Optional. A set of waypoints along the route (excluding terminal points), for either stopping at or passing by. Up to 25 intermediate waypoints are supported.
travelMode
enum ( RouteTravelMode )
Optional. Specifies the mode of transportation.
routingPreference
enum ( RoutingPreference )
Optional. Specifies how to compute the route. The server attempts to use the selected routing preference to compute the route. If the routing preference results in an error or an extra long latency, then an error is returned. You can specify this option only when the travelMode is DRIVE or TWO_WHEELER , otherwise the request fails.
polylineQuality
enum ( PolylineQuality )
Optional. Specifies your preference for the quality of the polyline.
polylineEncoding
enum ( PolylineEncoding )
Optional. Specifies the preferred encoding for the polyline.
departureTime
string ( Timestamp format)
Optional. The departure time. If you don't set this value, then this value defaults to the time that you made the request. NOTE: You can only specify a departureTime in the past when RouteTravelMode is set to TRANSIT . Transit trips are available for up to 7 days in the past or 100 days in the future.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
arrivalTime
string ( Timestamp format)
Optional. The arrival time. NOTE: This field is ignored when requests specify a RouteTravelMode other than TRANSIT . You can specify either departureTime or arrivalTime , but not both. Transit trips are available for up to 7 days in the past or 100 days in the future.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
computeAlternativeRoutes
boolean
Optional. Specifies whether to calculate alternate routes in addition to the route. No alternative routes are returned for requests that have intermediate waypoints.
routeModifiers
object ( RouteModifiers )
Optional. A set of conditions to satisfy that affect the way routes are calculated.
languageCode
string
Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see Unicode Locale Identifier . See Language Support for the list of supported languages. When you don't provide this value, the display language is inferred from the location of the route request.
regionCode
string
Optional. The region code, specified as a ccTLD ("top-level domain") two-character value. For more information see Country code top-level domains .
units
enum ( Units )
Optional. Specifies the units of measure for the display fields. These fields include the instruction field in NavigationInstruction . The units of measure used for the route, leg, step distance, and duration are not affected by this value. If you don't provide this value, then the display units are inferred from the location of the first origin.
optimizeWaypointOrder
boolean
Optional. If set to true, the service attempts to minimize the overall cost of the route by re-ordering the specified intermediate waypoints. The request fails if any of the intermediate waypoints is a via waypoint. Use ComputeRoutesResponse.Routes.optimized_intermediate_waypoint_index to find the new ordering. If ComputeRoutesResponseroutes.optimized_intermediate_waypoint_index is not requested in the X-Goog-FieldMask header, the request fails. If optimizeWaypointOrder is set to false, ComputeRoutesResponse.optimized_intermediate_waypoint_index will be empty.
requestedReferenceRoutes[]
enum ( ReferenceRoute )
Optional. Specifies what reference routes to calculate as part of the request in addition to the default route. A reference route is a route with a different route calculation objective than the default route. For example a FUEL_EFFICIENT reference route calculation takes into account various parameters that would generate an optimal fuel efficient route. When using this feature, look for routeLabels on the resulting routes.
extraComputations[]
enum ( ExtraComputation )
Optional. A list of extra computations which may be used to complete the request. Note: These extra computations may return extra fields on the response. These extra fields must also be specified in the field mask to be returned in the response.
trafficModel
enum ( TrafficModel )
Optional. Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration field in the Route and RouteLeg which contains the predicted time in traffic based on historical averages. TrafficModel is only available for requests that have set RoutingPreference to TRAFFIC_AWARE_OPTIMAL and RouteTravelMode to DRIVE . Defaults to BEST_GUESS if traffic is requested and TrafficModel is not specified.
transitPreferences
object ( TransitPreferences )
Optional. Specifies preferences that influence the route returned for TRANSIT routes. NOTE: You can only specify a transitPreferences when RouteTravelMode is set to TRANSIT .
Response body
v2.computeRoutes the response message.
If successful, the response body contains data with the following structure:
JSON representation
{
"routes" : [
{
object ( Route )
}
] ,
"fallbackInfo" : {
object ( FallbackInfo )
} ,
"geocodingResults" : {
object ( GeocodingResults )
}
}
Fields
routes[]
object ( Route )
Contains an array of computed routes (up to three) when you specify compute_alternatives_routes , and contains just one route when you don't. When this array contains multiple entries, the first one is the most recommended route. If the array is empty, then it means no route could be found.
fallbackInfo
object ( FallbackInfo )
In some cases when the server is not able to compute the route results with all of the input preferences, it may fallback to using a different way of computation. When fallback mode is used, this field contains detailed info about the fallback response. Otherwise this field is unset.
geocodingResults
object ( GeocodingResults )
Contains geocoding response info for waypoints specified as addresses.
PolylineQuality
A set of values that specify the quality of the polyline.
Enums
POLYLINE_QUALITY_UNSPECIFIED
No polyline quality preference specified. Defaults to OVERVIEW .
HIGH_QUALITY
Specifies a high-quality polyline - which is composed using more points than OVERVIEW , at the cost of increased response size. Use this value when you need more precision.
OVERVIEW
Specifies an overview polyline - which is composed using a small number of points. Use this value when displaying an overview of the route. Using this option has a lower request latency compared to using the HIGH_QUALITY option.
PolylineEncoding
Specifies the preferred type of polyline to be returned.
Enums
POLYLINE_ENCODING_UNSPECIFIED
No polyline type preference specified. Defaults to ENCODED_POLYLINE .
ENCODED_POLYLINE
Specifies a polyline encoded using the polyline encoding algorithm .
GEO_JSON_LINESTRING
Specifies a polyline using the GeoJSON LineString format
ReferenceRoute
A supported reference route on the ComputeRoutesRequest.
Enums
REFERENCE_ROUTE_UNSPECIFIED
Not used. Requests containing this value fail.
FUEL_EFFICIENT
Fuel efficient route.
SHORTER_DISTANCE
Route with shorter travel distance. This is an experimental feature.
For DRIVE requests, this feature prioritizes shorter distance over driving comfort. For example, it may prefer local roads instead of highways, take dirt roads, cut through parking lots, etc. This feature does not return any maneuvers that Google Maps knows to be illegal.
For BICYCLE and TWO_WHEELER requests, this feature returns routes similar to those returned when you don't specify requestedReferenceRoutes .
This feature is not compatible with any other travel modes, via intermediate waypoints, or optimizeWaypointOrder ; such requests will fail. However, you can use it with any routingPreference .
ExtraComputation
Extra computations to perform while completing the request.
Enums
EXTRA_COMPUTATION_UNSPECIFIED
Not used. Requests containing this value will fail.
TOLLS
Toll information for the route(s).
FUEL_CONSUMPTION
Estimated fuel consumption for the route(s).
TRAFFIC_ON_POLYLINE
Traffic aware polylines for the route(s).
HTML_FORMATTED_NAVIGATION_INSTRUCTIONS
NavigationInstructions presented as a formatted HTML text string. This content is meant to be read as-is. This content is for display only. Do not programmatically parse it.
FLYOVER_INFO_ON_POLYLINE
Flyover information for the route(s). The routes.polyline_details.flyover_info fieldmask must be specified to return this information. This data will only currently be populated for certain metros in India. This feature is experimental, and the SKU/charge is subject to change.
NARROW_ROAD_INFO_ON_POLYLINE
Narrow road information for the route(s). The routes.polyline_details.narrow_road_info fieldmask must be specified to return this information. This data will only currently be populated for certain metros in India. This feature is experimental, and the SKU/charge is subject to change.
Route
Contains a route, which consists of a series of connected road segments that join beginning, ending, and intermediate waypoints.
JSON representation
{
"routeLabels" : [
enum ( RouteLabel )
] ,
"legs" : [
{
object ( RouteLeg )
}
] ,
"distanceMeters" : integer ,
"duration" : string ,
"staticDuration" : string ,
"polyline" : {
object ( Polyline )
} ,
"description" : string ,
"warnings" : [
string
] ,
"viewport" : {
object ( Viewport )
} ,
"travelAdvisory" : {
object ( RouteTravelAdvisory )
} ,
"optimizedIntermediateWaypointIndex" : [
integer
] ,
"localizedValues" : {
object ( RouteLocalizedValues )
} ,
"routeToken" : string ,
"polylineDetails" : {
object ( PolylineDetails )
}
}
Fields
routeLabels[]
enum ( RouteLabel )
Labels for the Route that are useful to identify specific properties of the route to compare against others.
legs[]
object ( RouteLeg )
A collection of legs (path segments between waypoints) that make up the route. Each leg corresponds to the trip between two non- via Waypoints . For example, a route with no intermediate waypoints has only one leg. A route that includes one non- via intermediate waypoint has two legs. A route that includes one via intermediate waypoint has one leg. The order of the legs matches the order of waypoints from origin to intermediates to destination .
distanceMeters
integer
The travel distance of the route, in meters.
duration
string ( Duration format)
The length of time needed to navigate the route. If you set the routingPreference to TRAFFIC_UNAWARE , then this value is the same as staticDuration . If you set the routingPreference to either TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL , then this value is calculated taking traffic conditions into account.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
staticDuration
string ( Duration format)
The duration of travel through the route without taking traffic conditions into consideration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
polyline
object ( Polyline )
The overall route polyline. This polyline is the combined polyline of all legs .
description
string
A description of the route.
warnings[]
string
An array of warnings to show when displaying the route.
viewport
object ( Viewport )
The viewport bounding box of the polyline.
travelAdvisory
object ( RouteTravelAdvisory )
Additional information about the route.
optimizedIntermediateWaypointIndex[]
integer
If you set optimizeWaypointOrder to true, this field contains the optimized ordering of intermediate waypoints. Otherwise, this field is empty. For example, if you give an input of Origin: LA; Intermediate waypoints: Dallas, Bangor, Phoenix; Destination: New York; and the optimized intermediate waypoint order is Phoenix, Dallas, Bangor, then this field contains the values [2, 0, 1]. The index starts with 0 for the first intermediate waypoint provided in the input.
localizedValues
object ( RouteLocalizedValues )
Text representations of properties of the Route .
routeToken
string
An opaque token that can be passed to Navigation SDK to reconstruct the route during navigation, and, in the event of rerouting, honor the original intention when the route was created. Treat this token as an opaque blob. Don't compare its value across requests as its value may change even if the service returns the exact same route.
NOTE: Route.route_token is only available for requests that have set ComputeRoutesRequest.routing_preference to TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL . Route.route_token is not supported for requests that have Via waypoints.
polylineDetails
object ( PolylineDetails )
Contains information about details along the polyline.
RouteLabel
Labels for the Route that are useful to identify specific properties of the route to compare against others.
Enums
ROUTE_LABEL_UNSPECIFIED
Default - not used.
DEFAULT_ROUTE
The default "best" route returned for the route computation.
DEFAULT_ROUTE_ALTERNATE
An alternative to the default "best" route. Routes like this will be returned when computeAlternativeRoutes is specified.
FUEL_EFFICIENT
Fuel efficient route. Routes labeled with this value are determined to be optimized for Eco parameters such as fuel consumption.
SHORTER_DISTANCE
Shorter travel distance route. This is an experimental feature.
RouteLeg
Contains a segment between non- via waypoints.
JSON representation
{
"distanceMeters" : integer ,
"duration" : string ,
"staticDuration" : string ,
"polyline" : {
object ( Polyline )
} ,
"startLocation" : {
object ( Location )
} ,
"endLocation" : {
object ( Location )
} ,
"steps" : [
{
object ( RouteLegStep )
}
] ,
"travelAdvisory" : {
object ( RouteLegTravelAdvisory )
} ,
"localizedValues" : {
object ( RouteLegLocalizedValues )
} ,
"stepsOverview" : {
object ( StepsOverview )
}
}
Fields
distanceMeters
integer
The travel distance of the route leg, in meters.
duration
string ( Duration format)
The length of time needed to navigate the leg. If the route_preference is set to TRAFFIC_UNAWARE , then this value is the same as staticDuration . If the route_preference is either TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL , then this value is calculated taking traffic conditions into account.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
staticDuration
string ( Duration format)
The duration of travel through the leg, calculated without taking traffic conditions into consideration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
polyline
object ( Polyline )
The overall polyline for this leg that includes each step 's polyline.
startLocation
object ( Location )
The start location of this leg. This location might be different from the provided origin . For example, when the provided origin is not near a road, this is a point on the road.
endLocation
object ( Location )
The end location of this leg. This location might be different from the provided destination . For example, when the provided destination is not near a road, this is a point on the road.
steps[]
object ( RouteLegStep )
An array of steps denoting segments within this leg. Each step represents one navigation instruction.
travelAdvisory
object ( RouteLegTravelAdvisory )
Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a route leg.
localizedValues
object ( RouteLegLocalizedValues )
Text representations of properties of the RouteLeg .
stepsOverview
object ( StepsOverview )
Overview information about the steps in this RouteLeg . This field is only populated for TRANSIT routes.
Polyline
Encapsulates an encoded polyline.
JSON representation
{
// Union field polyline_type can be only one of the following:
"encodedPolyline" : string ,
"geoJsonLinestring" : {
object
}
// End of list of possible types for union field polyline_type .
}
Fields
Union field polyline_type . Encapsulates the type of polyline. Defaults to encoded_polyline. polyline_type can be only one of the following:
encodedPolyline
string
The string encoding of the polyline using the polyline encoding algorithm
geoJsonLinestring
object ( Struct format)
Specifies a polyline using the GeoJSON LineString format .
RouteLegStep
Contains a segment of a RouteLeg . A step corresponds to a single navigation instruction. Route legs are made up of steps.
JSON representation
{
"distanceMeters" : integer ,
"staticDuration" : string ,
"polyline" : {
object ( Polyline )
} ,
"startLocation" : {
object ( Location )
} ,
"endLocation" : {
object ( Location )
} ,
"navigationInstruction" : {
object ( NavigationInstruction )
} ,
"travelAdvisory" : {
object ( RouteLegStepTravelAdvisory )
} ,
"localizedValues" : {
object ( RouteLegStepLocalizedValues )
} ,
"transitDetails" : {
object ( RouteLegStepTransitDetails )
} ,
"travelMode" : enum ( RouteTravelMode )
}
Fields
distanceMeters
integer
The travel distance of this step, in meters. In some circumstances, this field might not have a value.
staticDuration
string ( Duration format)
The duration of travel through this step without taking traffic conditions into consideration. In some circumstances, this field might not have a value.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
polyline
object ( Polyline )
The polyline associated with this step.
startLocation
object ( Location )
The start location of this step.
endLocation
object ( Location )
The end location of this step.
navigationInstruction
object ( NavigationInstruction )
Navigation instructions.
travelAdvisory
object ( RouteLegStepTravelAdvisory )
Contains the additional information that the user should be informed about, such as possible traffic zone restrictions, on a leg step.
localizedValues
object ( RouteLegStepLocalizedValues )
Text representations of properties of the RouteLegStep .
transitDetails
object ( RouteLegStepTransitDetails )
Details pertaining to this step if the travel mode is TRANSIT .
travelMode
enum ( RouteTravelMode )
The travel mode used for this step.
NavigationInstruction
Encapsulates navigation instructions for a RouteLegStep .
JSON representation
{
"maneuver" : enum ( Maneuver ) ,
"instructions" : string
}
Fields
maneuver
enum ( Maneuver )
Encapsulates the navigation instructions for the current step (for example, turn left, merge, or straight). This field determines which icon to display.
instructions
string
Instructions for navigating this step.
Maneuver
A set of values that specify the navigation action to take for the current step (for example, turn left, merge, or straight).
Enums
MANEUVER_UNSPECIFIED
Not used.
TURN_SLIGHT_LEFT
Turn slightly to the left.
TURN_SHARP_LEFT
Turn sharply to the left.
UTURN_LEFT
Make a left u-turn.
TURN_LEFT
Turn left.
TURN_SLIGHT_RIGHT
Turn slightly to the right.
TURN_SHARP_RIGHT
Turn sharply to the right.
UTURN_RIGHT
Make a right u-turn.
TURN_RIGHT
Turn right.
STRAIGHT
Go straight.
RAMP_LEFT
Take the left ramp.
RAMP_RIGHT
Take the right ramp.
MERGE
Merge into traffic.
FORK_LEFT
Take the left fork.
FORK_RIGHT
Take the right fork.
FERRY
Take the ferry.
FERRY_TRAIN
Take the train leading onto the ferry.
ROUNDABOUT_LEFT
Turn left at the roundabout.
ROUNDABOUT_RIGHT
Turn right at the roundabout.
DEPART
Initial maneuver.
NAME_CHANGE
Used to indicate a street name change.
RouteLegStepTravelAdvisory
Contains the additional information that the user should be informed about, such as possible traffic zone restrictions on a leg step.
JSON representation
{
"speedReadingIntervals" : [
{
object ( SpeedReadingInterval )
}
]
}
Fields
speedReadingIntervals[]
object ( SpeedReadingInterval )
NOTE: This field is not currently populated.
RouteLegStepLocalizedValues
Text representations of certain properties.
JSON representation
{
"distance" : {
object ( LocalizedText )
} ,
"staticDuration" : {
object ( LocalizedText )
}
}
Fields
distance
object ( LocalizedText )
Travel distance represented in text form.
staticDuration
object ( LocalizedText )
Duration without taking traffic conditions into consideration, represented in text form.
RouteLegStepTransitDetails
Additional information for the RouteLegStep related to TRANSIT routes.
JSON representation
{
"stopDetails" : {
object ( TransitStopDetails )
} ,
"localizedValues" : {
object ( TransitDetailsLocalizedValues )
} ,
"headsign" : string ,
"headway" : string ,
"transitLine" : {
object ( TransitLine )
} ,
"stopCount" : integer ,
"tripShortText" : string
}
Fields
stopDetails
object ( TransitStopDetails )
Information about the arrival and departure stops for the step.
localizedValues
object ( TransitDetailsLocalizedValues )
Text representations of properties of the RouteLegStepTransitDetails .
headsign
string
Specifies the direction in which to travel on this line as marked on the vehicle or at the departure stop. The direction is often the terminus station.
headway
string ( Duration format)
Specifies the expected time as a duration between departures from the same stop at this time. For example, with a headway seconds value of 600, you would expect a ten minute wait if you should miss your bus.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
transitLine
object ( TransitLine )
Information about the transit line used in this step.
stopCount
integer
The number of stops from the departure to the arrival stop. This count includes the arrival stop, but excludes the departure stop. For example, if your route leaves from Stop A, passes through stops B and C, and arrives at stop D,
stopCount
returns 3.
tripShortText
string
The text that appears in schedules and sign boards to identify a transit trip to passengers. The text should uniquely identify a trip within a service day. For example, "538" is the tripShortText of the Amtrak train that leaves San Jose, CA at 15:10 on weekdays to Sacramento, CA.
TransitStopDetails
Details about the transit stops for the RouteLegStep .
JSON representation
{
"arrivalStop" : {
object ( TransitStop )
} ,
"arrivalTime" : string ,
"departureStop" : {
object ( TransitStop )
} ,
"departureTime" : string
}
Fields
arrivalStop
object ( TransitStop )
Information about the arrival stop for the step.
arrivalTime
string ( Timestamp format)
The estimated time of arrival for the step.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
departureStop
object ( TransitStop )
Information about the departure stop for the step.
departureTime
string ( Timestamp format)
The estimated time of departure for the step.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
TransitStop
Information about a transit stop.
JSON representation
{
"name" : string ,
"location" : {
object ( Location )
}
}
Fields
name
string
The name of the transit stop.
location
object ( Location )
The location of the stop expressed in latitude/longitude coordinates.
TransitDetailsLocalizedValues
Localized descriptions of values for RouteTransitDetails .
JSON representation
{
"arrivalTime" : {
object ( LocalizedTime )
} ,
"departureTime" : {
object ( LocalizedTime )
}
}
Fields
arrivalTime
object ( LocalizedTime )
Time in its formatted text representation with a corresponding time zone.
departureTime
object ( LocalizedTime )
Time in its formatted text representation with a corresponding time zone.
LocalizedTime
Localized description of time.
JSON representation
{
"time" : {
object ( LocalizedText )
} ,
"timeZone" : string
}
Fields
time
object ( LocalizedText )
The time specified as a string in a given time zone.
timeZone
string
Contains the time zone. The value is the name of the time zone as defined in the IANA Time Zone Database , e.g. "America/New_York".
TransitLine
Contains information about the transit line used in this step.
JSON representation
{
"agencies" : [
{
object ( TransitAgency )
}
] ,
"name" : string ,
"uri" : string ,
"color" : string ,
"iconUri" : string ,
"nameShort" : string ,
"textColor" : string ,
"vehicle" : {
object ( TransitVehicle )
}
}
Fields
agencies[]
object ( TransitAgency )
The transit agency (or agencies) that operates this transit line.
name
string
The full name of this transit line, For example, "8 Avenue Local".
uri
string
the URI for this transit line as provided by the transit agency.
color
string
The color commonly used in signage for this line. Represented in hexadecimal.
iconUri
string
The URI for the icon associated with this line.
nameShort
string
The short name of this transit line. This name will normally be a line number, such as "M7" or "355".
textColor
string
The color commonly used in text on signage for this line. Represented in hexadecimal.
vehicle
object ( TransitVehicle )
The type of vehicle that operates on this transit line.
TransitAgency
A transit agency that operates a transit line.
JSON representation
{
"name" : string ,
"phoneNumber" : string ,
"uri" : string
}
Fields
name
string
The name of this transit agency.
phoneNumber
string
The transit agency's locale-specific formatted phone number.
uri
string
The transit agency's URI.
TransitVehicle
Information about a vehicle used in transit routes.
JSON representation
{
"name" : {
object ( LocalizedText )
} ,
"type" : enum ( TransitVehicleType ) ,
"iconUri" : string ,
"localIconUri" : string
}
Fields
name
object ( LocalizedText )
The name of this vehicle, capitalized.
type
enum ( TransitVehicleType )
The type of vehicle used.
iconUri
string
The URI for an icon associated with this vehicle type.
localIconUri
string
The URI for the icon associated with this vehicle type, based on the local transport signage.
TransitVehicleType
The type of vehicles for transit routes.
Enums
TRANSIT_VEHICLE_TYPE_UNSPECIFIED
Unused.
BUS
Bus.
CABLE_CAR
A vehicle that operates on a cable, usually on the ground. Aerial cable cars may be of the type GONDOLA_LIFT .
COMMUTER_TRAIN
Commuter rail.
FERRY
Ferry.
FUNICULAR
A vehicle that is pulled up a steep incline by a cable. A Funicular typically consists of two cars, with each car acting as a counterweight for the other.
GONDOLA_LIFT
An aerial cable car.
HEAVY_RAIL
Heavy rail.
HIGH_SPEED_TRAIN
High speed train.
INTERCITY_BUS
Intercity bus.
LONG_DISTANCE_TRAIN
Long distance train.
METRO_RAIL
Light rail transit.
MONORAIL
Monorail.
OTHER
All other vehicles.
RAIL
Rail.
SHARE_TAXI
Share taxi is a kind of bus with the ability to drop off and pick up passengers anywhere on its route.
SUBWAY
Underground light rail.
TRAM
Above ground light rail.
TROLLEYBUS
Trolleybus.
RouteLegTravelAdvisory
Contains the additional information that the user should be informed about on a leg step, such as possible traffic zone restrictions.
JSON representation
{
"tollInfo" : {
object ( TollInfo )
} ,
"speedReadingIntervals" : [
{
object ( SpeedReadingInterval )
}
]
}
Fields
tollInfo
object ( TollInfo )
Contains information about tolls on the specific RouteLeg . This field is only populated if we expect there are tolls on the RouteLeg and TOLLS is included in the request's ComputeRoutesRequest.extra_computations . If this field is set but the estimatedPrice subfield is not populated, we expect that road contains tolls but we do not know an estimated price. If tollInfo does not exist, then there is no toll on the RouteLeg .
speedReadingIntervals[]
object ( SpeedReadingInterval )
Speed reading intervals indicating traffic density. This field is only populated for requests when the request has a TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL ComputeRoutesRequest.routing_preference value, and TRAFFIC_ON_POLYLINE is included in the ComputeRoutesRequest.extra_computations . The intervals cover the entire polyline of the RouteLeg without overlap. The start point of a specified interval is the same as the end point of the preceding interval.
Example:
polyline: A ---- B ---- C ---- D ---- E ---- F ---- G
speedReadingIntervals: [A,C), [C,D), [D,G).
RouteLegLocalizedValues
Text representations of certain properties.
JSON representation
{
"distance" : {
object ( LocalizedText )
} ,
"duration" : {
object ( LocalizedText )
} ,
"staticDuration" : {
object ( LocalizedText )
}
}
Fields
distance
object ( LocalizedText )
Travel distance represented in text form.
duration
object ( LocalizedText )
Duration, represented in text form and localized to the region of the query. Takes traffic conditions into consideration. Note: If you did not request traffic information, this value is the same value as staticDuration.
staticDuration
object ( LocalizedText )
Duration without taking traffic conditions into consideration, represented in text form.
StepsOverview
Provides overview information about a list of RouteLegStep s.
JSON representation
{
"multiModalSegments" : [
{
object ( MultiModalSegment )
}
]
}
Fields
multiModalSegments[]
object ( MultiModalSegment )
Summarized information about different multi-modal segments of the RouteLeg.steps . This field is not populated if the RouteLeg does not contain any multi-modal segments in the steps.
MultiModalSegment
Provides summarized information about different multi-modal segments of the RouteLeg.steps . A multi-modal segment is defined as one or more contiguous RouteLegStep that have the same RouteTravelMode . This field is not populated if the RouteLeg does not contain any multi-modal segments in the steps.
JSON representation
{
"navigationInstruction" : {
object ( NavigationInstruction )
} ,
"travelMode" : enum ( RouteTravelMode ) ,
"stepStartIndex" : integer ,
"stepEndIndex" : integer
}
Fields
navigationInstruction
object ( NavigationInstruction )
NavigationInstruction for the multi-modal segment.
travelMode
enum ( RouteTravelMode )
The travel mode of the multi-modal segment.
stepStartIndex
integer
The corresponding RouteLegStep index that is the start of a multi-modal segment.
stepEndIndex
integer
The corresponding RouteLegStep index that is the end of a multi-modal segment.
Viewport
A latitude-longitude viewport, represented as two diagonally opposite low and high points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include:
If low = high , the viewport consists of that single point.
If low.longitude > high.longitude , the longitude range is inverted (the viewport crosses the 180 degree longitude line).
If low.longitude = -180 degrees and high.longitude = 180 degrees, the viewport includes all longitudes.
If low.longitude = 180 degrees and high.longitude = -180 degrees, the longitude range is empty.
If low.latitude > high.latitude , the latitude range is empty.
Both low and high must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error.
For example, this viewport fully encloses New York City:
{ "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } }
JSON representation
{
"low" : {
object ( LatLng )
} ,
"high" : {
object ( LatLng )
}
}
Fields
low
object ( LatLng )
Required. The low point of the viewport.
high
object ( LatLng )
Required. The high point of the viewport.
RouteLocalizedValues
Text representations of certain properties.
JSON representation
{
"distance" : {
object ( LocalizedText )
} ,
"duration" : {
object ( LocalizedText )
} ,
"staticDuration" : {
object ( LocalizedText )
} ,
"transitFare" : {
object ( LocalizedText )
}
}
Fields
distance
object ( LocalizedText )
Travel distance represented in text form.
duration
object ( LocalizedText )
Duration, represented in text form and localized to the region of the query. Takes traffic conditions into consideration. Note: If you did not request traffic information, this value is the same value as staticDuration .
staticDuration
object ( LocalizedText )
Duration without taking traffic conditions into consideration, represented in text form.
transitFare
object ( LocalizedText )
Transit fare represented in text form.
PolylineDetails
Details corresponding to a given index or contiguous segment of a polyline. Given a polyline with points P_0, P_1, ... , P_N (zero-based index), the PolylineDetails defines an interval and associated metadata.
JSON representation
{
"flyoverInfo" : [
{
object ( FlyoverInfo )
}
] ,
"narrowRoadInfo" : [
{
object ( NarrowRoadInfo )
}
]
}
Fields
flyoverInfo[]
object ( FlyoverInfo )
Flyover details along the polyline.
narrowRoadInfo[]
object ( NarrowRoadInfo )
Narrow road details along the polyline.
FlyoverInfo
Encapsulates information about flyovers along the polyline.
JSON representation
{
"flyoverPresence" : enum ( RoadFeatureState ) ,
"polylinePointIndex" : {
object ( PolylinePointIndex )
}
}
Fields
flyoverPresence
enum ( RoadFeatureState )
Output only. Denotes whether a flyover exists for a given stretch of the polyline.
polylinePointIndex
object ( PolylinePointIndex )
The location of flyover related information along the polyline.
RoadFeatureState
Encapsulates the states of road features along a stretch of polyline.
Enums
ROAD_FEATURE_STATE_UNSPECIFIED
The road feature's state was not computed (default value).
EXISTS
The road feature exists.
DOES_NOT_EXIST
The road feature does not exist.
PolylinePointIndex
Encapsulates the start and end indexes for a polyline detail. For instances where the data corresponds to a single point, startIndex and endIndex will be equal.
JSON representation
{
"startIndex" : integer ,
"endIndex" : integer
}
Fields
startIndex
integer
The start index of this detail in the polyline.
endIndex
integer
The end index of this detail in the polyline.
NarrowRoadInfo
Encapsulates information about narrow roads along the polyline.
JSON representation
{
"narrowRoadPresence" : enum ( RoadFeatureState ) ,
"polylinePointIndex" : {
object ( PolylinePointIndex )
}
}
Fields
narrowRoadPresence
enum ( RoadFeatureState )
Output only. Denotes whether a narrow road exists for a given stretch of the polyline.
polylinePointIndex
object ( PolylinePointIndex )
The location of narrow road related information along the polyline.
GeocodingResults
Contains GeocodedWaypoints for origin, destination and intermediate waypoints. Only populated for address waypoints.
JSON representation
{
"origin" : {
object ( GeocodedWaypoint )
} ,
"destination" : {
object ( GeocodedWaypoint )
} ,
"intermediates" : [
{
object ( GeocodedWaypoint )
}
]
}
Fields
origin
object ( GeocodedWaypoint )
Origin geocoded waypoint.
destination
object ( GeocodedWaypoint )
Destination geocoded waypoint.
intermediates[]
object ( GeocodedWaypoint )
A list of intermediate geocoded waypoints each containing an index field that corresponds to the zero-based position of the waypoint in the order they were specified in the request.
GeocodedWaypoint
Details about the locations used as waypoints. Only populated for address waypoints. Includes details about the geocoding results for the purposes of determining what the address was geocoded to.
JSON representation
{
"geocoderStatus" : {
object ( Status )
} ,
"type" : [
string
] ,
"partialMatch" : boolean ,
"placeId" : string ,
"intermediateWaypointRequestIndex" : integer
}
Fields
geocoderStatus
object ( Status )
Indicates the status code resulting from the geocoding operation.
type[]
string
The type(s) of the result, in the form of zero or more type tags. Supported types: Address types and address component types .
partialMatch
boolean
Indicates that the geocoder did not return an exact match for the original request, though it was able to match part of the requested address. You may wish to examine the original request for misspellings and/or an incomplete address.
placeId
string
The place ID for this result.
intermediateWaypointRequestIndex
integer
The index of the corresponding intermediate waypoint in the request. Only populated if the corresponding waypoint is an intermediate waypoint.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-28 UTC."],[],[]]

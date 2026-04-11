---
title: "ShipmentModel \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel
  title: "ShipmentModel \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
ShipmentModel
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The shipment model optimizes routes for a fleet of vehicles, minimizing total costs based on routing, unperformed shipments, and overall duration.
Shipments define the movement of items between locations, including pickup/delivery options, load demands, vehicle restrictions, and penalty costs for non-completion.
Vehicles have properties like travel mode, start/end locations, load limits, and break rules, impacting route calculation and optimization.
Precedence rules define the order of shipment pickups and deliveries, ensuring specific sequences and timing relationships.
Shipment types and their compatibilities/requirements can be specified to further constrain and optimize the routing process.
JSON representation
Shipment
JSON representation
VisitRequest
JSON representation
LatLng
JSON representation
Waypoint
JSON representation
Location
JSON representation
TimeWindow
JSON representation
Vehicle
JSON representation
TravelMode
RouteModifiers
JSON representation
UnloadingPolicy
LoadLimit
JSON representation
Interval
JSON representation
LoadCost
JSON representation
DurationLimit
JSON representation
DistanceLimit
JSON representation
BreakRule
JSON representation
BreakRequest
JSON representation
FrequencyConstraint
JSON representation
Objective
JSON representation
Type
DurationDistanceMatrix
JSON representation
Row
JSON representation
TransitionAttributes
JSON representation
ShipmentTypeIncompatibility
JSON representation
IncompatibilityMode
ShipmentTypeRequirement
JSON representation
RequirementMode
PrecedenceRule
JSON representation
A shipment model contains a set of shipments which must be performed by a set of vehicles, while minimizing the overall cost, which is the sum of:
the cost of routing the vehicles (sum of cost per total time, cost per travel time, and fixed cost over all vehicles).
the unperformed shipment penalties.
the cost of the global duration of the shipments
JSON representation
{
"shipments" : [
{
object ( Shipment )
}
] ,
"vehicles" : [
{
object ( Vehicle )
}
] ,
"objectives" : [
{
object ( Objective )
}
] ,
"globalStartTime" : string ,
"globalEndTime" : string ,
"globalDurationCostPerHour" : number ,
"durationDistanceMatrices" : [
{
object ( DurationDistanceMatrix )
}
] ,
"durationDistanceMatrixSrcTags" : [
string
] ,
"durationDistanceMatrixDstTags" : [
string
] ,
"transitionAttributes" : [
{
object ( TransitionAttributes )
}
] ,
"shipmentTypeIncompatibilities" : [
{
object ( ShipmentTypeIncompatibility )
}
] ,
"shipmentTypeRequirements" : [
{
object ( ShipmentTypeRequirement )
}
] ,
"precedenceRules" : [
{
object ( PrecedenceRule )
}
] ,
"maxActiveVehicles" : integer
}
Fields
shipments[]
object ( Shipment )
Set of shipments which must be performed in the model.
vehicles[]
object ( Vehicle )
Set of vehicles which can be used to perform visits.
objectives[]
object ( Objective )
The set of objectives for this model, that we will transform into costs. If not empty, the input model has to be costless. To obtain the modified request, please use solvingMode = TRANSFORM_AND_RETURN_REQUEST. Note that the request will not be solved in this case. See corresponding documentation.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/objectives/make-request for more details.
globalStartTime
string ( Timestamp format)
Global start and end time of the model: no times outside of this range can be considered valid.
The model's time span must be less than a year, i.e. the globalEndTime and the globalStartTime must be within 31536000 seconds of each other.
When using cost_per_*hour fields, you might want to set this window to a smaller interval to increase performance (eg. if you model a single day, you should set the global time limits to that day). If unset, 00:00:00 UTC, January 1, 1970 (i.e. seconds: 0, nanos: 0) is used as default.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
globalEndTime
string ( Timestamp format)
If unset, 00:00:00 UTC, January 1, 1971 (i.e. seconds: 31536000, nanos: 0) is used as default.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
globalDurationCostPerHour
number
The "global duration" of the overall plan is the difference between the earliest effective start time and the latest effective end time of all vehicles. Users can assign a cost per hour to that quantity to try and optimize for earliest job completion, for example. This cost must be in the same unit as Shipment.penalty_cost .
durationDistanceMatrices[]
object ( DurationDistanceMatrix )
Specifies duration and distance matrices used in the model. If this field is empty, Google Maps or geodesic distances will be used instead, depending on the value of the useGeodesicDistances field. If it is not empty, useGeodesicDistances cannot be true and neither durationDistanceMatrixSrcTags nor durationDistanceMatrixDstTags can be empty.
Usage examples:
There are two locations: locA and locB.
1 vehicle starting its route at locA and ending it at locA.
1 pickup visit request at locB.
model {
vehicles { startTags: "locA" endTags: "locA" }
shipments { pickups { tags: "locB" } }
durationDistanceMatrixSrcTags: "locA"
durationDistanceMatrixSrcTags: "locB"
durationDistanceMatrixDstTags: "locA"
durationDistanceMatrixDstTags: "locB"
durationDistanceMatrices {
rows { # from: locA
durations { seconds: 0 } meters: 0 # to: locA
durations { seconds: 100 } meters: 1000 # to: locB
}
rows { # from: locB
durations { seconds: 102 } meters: 990 # to: locA
durations { seconds: 0 } meters: 0 # to: locB
}
}
}
There are three locations: locA, locB and locC.
1 vehicle starting its route at locA and ending it at locB, using matrix "fast".
1 vehicle starting its route at locB and ending it at locB, using matrix "slow".
1 vehicle starting its route at locB and ending it at locB, using matrix "fast".
1 pickup visit request at locC.
model {
vehicles { startTags: "locA" endTags: "locB" startTags: "fast" }
vehicles { startTags: "locB" endTags: "locB" startTags: "slow" }
vehicles { startTags: "locB" endTags: "locB" startTags: "fast" }
shipments { pickups { tags: "locC" } }
durationDistanceMatrixSrcTags: "locA"
durationDistanceMatrixSrcTags: "locB"
durationDistanceMatrixSrcTags: "locC"
durationDistanceMatrixDstTags: "locB"
durationDistanceMatrixDstTags: "locC"
durationDistanceMatrices {
vehicleStartTag: "fast"
rows { # from: locA
durations { seconds: 1000 } meters: 2000 # to: locB
durations { seconds: 600 } meters: 1000 # to: locC
}
rows { # from: locB
durations { seconds: 0 } meters: 0 # to: locB
durations { seconds: 700 } meters: 1200 # to: locC
}
rows { # from: locC
durations { seconds: 702 } meters: 1190 # to: locB
durations { seconds: 0 } meters: 0 # to: locC
}
}
durationDistanceMatrices {
vehicleStartTag: "slow"
rows { # from: locA
durations { seconds: 1800 } meters: 2001 # to: locB
durations { seconds: 900 } meters: 1002 # to: locC
}
rows { # from: locB
durations { seconds: 0 } meters: 0 # to: locB
durations { seconds: 1000 } meters: 1202 # to: locC
}
rows { # from: locC
durations { seconds: 1001 } meters: 1195 # to: locB
durations { seconds: 0 } meters: 0 # to: locC
}
}
}
durationDistanceMatrixSrcTags[]
string
Tags defining the sources of the duration and distance matrices; durationDistanceMatrices(i).rows(j) defines durations and distances from visits with tag durationDistanceMatrixSrcTags(j) to other visits in matrix i.
Tags correspond to VisitRequest.tags or Vehicle.start_tags . A given VisitRequest or Vehicle must match exactly one tag in this field. Note that a Vehicle 's source, destination and matrix tags may be the same; similarly a VisitRequest 's source and destination tags may be the same. All tags must be different and cannot be empty strings. If this field is not empty, then durationDistanceMatrices must not be empty.
durationDistanceMatrixDstTags[]
string
Tags defining the destinations of the duration and distance matrices; durationDistanceMatrices(i).rows(j).durations(k) (resp. durationDistanceMatrices(i).rows(j).meters(k)) defines the duration (resp. the distance) of the travel from visits with tag durationDistanceMatrixSrcTags(j) to visits with tag durationDistanceMatrixDstTags(k) in matrix i.
Tags correspond to VisitRequest.tags or Vehicle.start_tags . A given VisitRequest or Vehicle must match exactly one tag in this field. Note that a Vehicle 's source, destination and matrix tags may be the same; similarly a VisitRequest 's source and destination tags may be the same. All tags must be different and cannot be empty strings. If this field is not empty, then durationDistanceMatrices must not be empty.
transitionAttributes[]
object ( TransitionAttributes )
Transition attributes added to the model.
shipmentTypeIncompatibilities[]
object ( ShipmentTypeIncompatibility )
Sets of incompatible shipment_types (see ShipmentTypeIncompatibility ).
shipmentTypeRequirements[]
object ( ShipmentTypeRequirement )
Sets of shipmentType requirements (see ShipmentTypeRequirement ).
precedenceRules[]
object ( PrecedenceRule )
Set of precedence rules which must be enforced in the model.
IMPORTANT : Use of precedence rules limits the size of problem that can be optimized. Requests using precedence rules that include many shipments may be rejected.
maxActiveVehicles
integer
Constrains the maximum number of active vehicles. A vehicle is active if its route performs at least one shipment. This can be used to limit the number of routes in the case where there are fewer drivers than vehicles and that the fleet of vehicles is heterogeneous. The optimization will then select the best subset of vehicles to use. Must be strictly positive.
Shipment
The shipment of a single item, from one of its pickups to one of its deliveries. For the shipment to be considered as performed, a unique vehicle must visit one of its pickup locations (and decrease its spare capacities accordingly), then visit one of its delivery locations later on (and therefore re-increase its spare capacities accordingly).
JSON representation
{
"displayName" : string ,
"pickups" : [
{
object ( VisitRequest )
}
] ,
"deliveries" : [
{
object ( VisitRequest )
}
] ,
"loadDemands" : {
string : {
object ( Load )
} ,
...
} ,
"allowedVehicleIndices" : [
integer
] ,
"costsPerVehicle" : [
number
] ,
"costsPerVehicleIndices" : [
integer
] ,
"pickupToDeliveryAbsoluteDetourLimit" : string ,
"pickupToDeliveryTimeLimit" : string ,
"shipmentType" : string ,
"label" : string ,
"ignore" : boolean ,
"penaltyCost" : number ,
"pickupToDeliveryRelativeDetourLimit" : number
}
Fields
displayName
string
The user-defined display name of the shipment. It can be up to 63 characters long and may use UTF-8 characters.
pickups[]
object ( VisitRequest )
Set of pickup alternatives associated to the shipment. If not specified, the vehicle only needs to visit a location corresponding to the deliveries.
deliveries[]
object ( VisitRequest )
Set of delivery alternatives associated to the shipment. If not specified, the vehicle only needs to visit a location corresponding to the pickups.
loadDemands
map (key: string, value: object ( Load ))
Load demands of the shipment (for example weight, volume, number of pallets etc). The keys in the map should be identifiers describing the type of the corresponding load, ideally also including the units. For example: "weight_kg", "volume_gallons", "pallet_count", etc. If a given key does not appear in the map, the corresponding load is considered as null.
allowedVehicleIndices[]
integer
The set of vehicles that may perform this shipment. If empty, all vehicles may perform it. Vehicles are given by their index in the ShipmentModel 's vehicles list.
costsPerVehicle[]
number
Specifies the cost that is incurred when this shipment is delivered by each vehicle. If specified, it must have EITHER:
the same number of elements as costsPerVehicleIndices . costsPerVehicle[i] corresponds to vehicle costsPerVehicleIndices[i] of the model.
the same number of elements as there are vehicles in the model. The i-th element corresponds to vehicle #i of the model.
These costs must be in the same unit as penaltyCost and must not be negative. Leave this field empty, if there are no such costs.
costsPerVehicleIndices[]
integer
Indices of the vehicles to which costsPerVehicle applies. If non-empty, it must have the same number of elements as costsPerVehicle . A vehicle index may not be specified more than once. If a vehicle is excluded from costsPerVehicleIndices , its cost is zero.
pickupToDeliveryAbsoluteDetourLimit
string ( Duration format)
Specifies the maximum absolute detour time compared to the shortest path from pickup to delivery. If specified, it must be nonnegative, and the shipment must contain at least a pickup and a delivery.
For example, let t be the shortest time taken to go from the selected pickup alternative directly to the selected delivery alternative. Then setting pickupToDeliveryAbsoluteDetourLimit enforces:
startTime(delivery) - startTime(pickup) <=
t + pickupToDeliveryAbsoluteDetourLimit
If both relative and absolute limits are specified on the same shipment, the more constraining limit is used for each possible pickup/delivery pair. As of 2017/10, detours are only supported when travel durations do not depend on vehicles.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
pickupToDeliveryTimeLimit
string ( Duration format)
Specifies the maximum duration from start of pickup to start of delivery of a shipment. If specified, it must be nonnegative, and the shipment must contain at least a pickup and a delivery. This does not depend on which alternatives are selected for pickup and delivery, nor on vehicle speed. This can be specified alongside maximum detour constraints: the solution will respect both specifications.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
shipmentType
string
Non-empty string specifying a "type" for this shipment. This feature can be used to define incompatibilities or requirements between shipment_types (see shipmentTypeIncompatibilities and shipmentTypeRequirements in ShipmentModel ).
Differs from visitTypes which is specified for a single visit: All pickup/deliveries belonging to the same shipment share the same shipmentType .
label
string
Specifies a label for this shipment. This label is reported in the response in the shipmentLabel of the corresponding ShipmentRoute.Visit .
ignore
boolean
If true, skip this shipment, but don't apply a penaltyCost .
Ignoring a shipment results in a validation error when there are any shipmentTypeRequirements in the model.
Ignoring a shipment that is performed in injectedFirstSolutionRoutes or injectedSolutionConstraint is permitted; the solver removes the related pickup/delivery visits from the performing route. precedenceRules that reference ignored shipments will also be ignored.
penaltyCost
number
If the shipment is not completed, this penalty is added to the overall cost of the routes. A shipment is considered completed if one of its pickup and delivery alternatives is visited. The cost may be expressed in the same unit used for all other cost-related fields in the model and must be positive.
IMPORTANT : If this penalty is not specified, it is considered infinite, i.e. the shipment must be completed.
pickupToDeliveryRelativeDetourLimit
number
Specifies the maximum relative detour time compared to the shortest path from pickup to delivery. If specified, it must be nonnegative, and the shipment must contain at least a pickup and a delivery.
For example, let t be the shortest time taken to go from the selected pickup alternative directly to the selected delivery alternative. Then setting pickupToDeliveryRelativeDetourLimit enforces:
startTime(delivery) - startTime(pickup) <=
std::ceil(t * (1.0 + pickupToDeliveryRelativeDetourLimit))
If both relative and absolute limits are specified on the same shipment, the more constraining limit is used for each possible pickup/delivery pair. As of 2017/10, detours are only supported when travel durations do not depend on vehicles.
VisitRequest
Request for a visit which can be done by a vehicle: it has a geo-location (or two, see below), opening and closing times represented by time windows, and a service duration time (time spent by the vehicle once it has arrived to pickup or drop off goods).
JSON representation
{
"arrivalLocation" : {
object ( LatLng )
} ,
"arrivalWaypoint" : {
object ( Waypoint )
} ,
"departureLocation" : {
object ( LatLng )
} ,
"departureWaypoint" : {
object ( Waypoint )
} ,
"tags" : [
string
] ,
"timeWindows" : [
{
object ( TimeWindow )
}
] ,
"duration" : string ,
"cost" : number ,
"loadDemands" : {
string : {
object ( Load )
} ,
...
} ,
"visitTypes" : [
string
] ,
"label" : string ,
"avoidUTurns" : boolean
}
Fields
arrivalLocation
object ( LatLng )
The geo-location where the vehicle arrives when performing this VisitRequest . If the shipment model has duration distance matrices, arrivalLocation must not be specified.
arrivalWaypoint
object ( Waypoint )
The waypoint where the vehicle arrives when performing this VisitRequest . If the shipment model has duration distance matrices, arrivalWaypoint must not be specified.
departureLocation
object ( LatLng )
The geo-location where the vehicle departs after completing this VisitRequest . Can be omitted if it is the same as arrivalLocation . If the shipment model has duration distance matrices, departureLocation must not be specified.
departureWaypoint
object ( Waypoint )
The waypoint where the vehicle departs after completing this VisitRequest . Can be omitted if it is the same as arrivalWaypoint . If the shipment model has duration distance matrices, departureWaypoint must not be specified.
tags[]
string
Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.
timeWindows[]
object ( TimeWindow )
Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start_time .
The absence of TimeWindow means that the vehicle can perform this visit at any time.
Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order.
costPerHourAfterSoftEndTime and softEndTime can only be set if there is a single time window.
duration
string ( Duration format)
Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see timeWindows ).
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cost
number
Cost to service this visit request on a vehicle route. This can be used to pay different costs for each alternative pickup or delivery of a shipment. This cost must be in the same unit as Shipment.penalty_cost and must not be negative.
loadDemands
map (key: string, value: object ( Load ))
Load demands of this visit request. This is just like Shipment.load_demands field, except that it only applies to this VisitRequest instead of the whole Shipment . The demands listed here are added to the demands listed in Shipment.load_demands .
visitTypes[]
string
Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra_visit_duration_for_visit_type ).
A type can only appear once.
label
string
Specifies a label for this VisitRequest . This label is reported in the response as visitLabel in the corresponding ShipmentRoute.Visit .
avoidUTurns
boolean
Specifies whether U-turns should be avoided in driving routes at this location. U-turn avoidance is best effort and complete avoidance is not guaranteed. This is an experimental feature and behavior is subject to change.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/u-turn-avoidance/make-request for more details.
LatLng
An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard . Values must be within normalized ranges.
JSON representation
{
"latitude" : number ,
"longitude" : number
}
Fields
latitude
number
The latitude in degrees. It must be in the range [-90.0, +90.0].
longitude
number
The longitude in degrees. It must be in the range [-180.0, +180.0].
Waypoint
Encapsulates a waypoint. Waypoints mark arrival and departure locations of VisitRequests, and start and end locations of Vehicles.
JSON representation
{
"sideOfRoad" : boolean ,
"vehicleStopover" : boolean ,
// Union field location_type can be only one of the following:
"location" : {
object ( Location )
} ,
"placeId" : string
// End of list of possible types for union field location_type .
}
Fields
sideOfRoad
boolean
Optional. Indicates that the location of this waypoint is meant to have a preference for the vehicle to stop at a particular side of road. When you set this value, the route will pass through the location so that the vehicle can stop at the side of road that the location is biased towards from the center of the road. This option doesn't work for the 'WALKING' travel mode.
vehicleStopover
boolean
Indicates that the waypoint is meant for vehicles to stop at, where the intention is to either pick up or drop off. This option works only for the 'DRIVING' travel mode, and when the 'locationType' is 'location'.
Experimental: This field's behavior or existence may change in future.
Union field location_type . Different ways to represent a location. location_type can be only one of the following:
location
object ( Location )
A point specified using geographic coordinates, including an optional heading.
placeId
string
The POI place ID associated with the waypoint.
When using a place ID to specify arrival or departure location of a VisitRequest, use a place ID that is specific enough to determine a LatLng location for navigation to the place. For example, a place ID representing a building is suitable, but a place ID representing a road is discouraged.
Location
Encapsulates a location (a geographic point, and an optional heading).
JSON representation
{
"latLng" : {
object ( LatLng )
} ,
"heading" : integer
}
Fields
latLng
object ( LatLng )
The waypoint's geographic coordinates.
heading
integer
The compass heading associated with the direction of the flow of traffic. This value is used to specify the side of the road to use for pickup and drop-off. Heading values can be from 0 to 360, where 0 specifies a heading of due North, 90 specifies a heading of due East, etc.
TimeWindow
Time windows constrain the time of an event, such as the arrival time at a visit, or the start and end time of a vehicle.
Hard time window bounds, startTime and endTime , enforce the earliest and latest time of the event, such that startTime <= event_time <=
endTime . The soft time window lower bound, softStartTime , expresses a preference for the event to happen at or after softStartTime by incurring a cost proportional to how long before softStartTime the event occurs. The soft time window upper bound, softEndTime , expresses a preference for the event to happen at or before softEndTime by incurring a cost proportional to how long after softEndTime the event occurs. startTime , endTime , softStartTime and softEndTime should be within the global time limits (see ShipmentModel.global_start_time and ShipmentModel.global_end_time ) and should respect:
0 <= `startTime` <= `endTime` and
0 <= `startTime` <= `softStartTime` and
0 <= `softEndTime` <= `endTime`.
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"softStartTime" : string ,
"softEndTime" : string ,
"costPerHourBeforeSoftStartTime" : number ,
"costPerHourAfterSoftEndTime" : number
}
Fields
startTime
string ( Timestamp format)
The hard time window start time. If unspecified it will be set to ShipmentModel.global_start_time .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The hard time window end time. If unspecified it will be set to ShipmentModel.global_end_time .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
softStartTime
string ( Timestamp format)
The soft start time of the time window.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
softEndTime
string ( Timestamp format)
The soft end time of the time window.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
costPerHourBeforeSoftStartTime
number
A cost per hour added to other costs in the model if the event occurs before softStartTime, computed as:
max(0, softStartTime - t.seconds)
* costPerHourBeforeSoftStartTime / 3600,
t being the time of the event.
This cost must be positive, and the field can only be set if softStartTime has been set.
costPerHourAfterSoftEndTime
number
A cost per hour added to other costs in the model if the event occurs after softEndTime , computed as:
max(0, t.seconds - softEndTime.seconds)
* costPerHourAfterSoftEndTime / 3600,
t being the time of the event.
This cost must be positive, and the field can only be set if softEndTime has been set.
Vehicle
Models a vehicle in a shipment problem. Solving a shipment problem will build a route starting from startLocation and ending at endLocation for this vehicle. A route is a sequence of visits (see ShipmentRoute ).
JSON representation
{
"displayName" : string ,
"travelMode" : enum ( TravelMode ) ,
"routeModifiers" : {
object ( RouteModifiers )
} ,
"startLocation" : {
object ( LatLng )
} ,
"startWaypoint" : {
object ( Waypoint )
} ,
"endLocation" : {
object ( LatLng )
} ,
"endWaypoint" : {
object ( Waypoint )
} ,
"startTags" : [
string
] ,
"endTags" : [
string
] ,
"startTimeWindows" : [
{
object ( TimeWindow )
}
] ,
"endTimeWindows" : [
{
object ( TimeWindow )
}
] ,
"unloadingPolicy" : enum ( UnloadingPolicy ) ,
"loadLimits" : {
string : {
object ( LoadLimit )
} ,
...
} ,
"costPerHour" : number ,
"costPerTraveledHour" : number ,
"costPerKilometer" : number ,
"fixedCost" : number ,
"usedIfRouteIsEmpty" : boolean ,
"routeDurationLimit" : {
object ( DurationLimit )
} ,
"travelDurationLimit" : {
object ( DurationLimit )
} ,
"routeDistanceLimit" : {
object ( DistanceLimit )
} ,
"extraVisitDurationForVisitType" : {
string : string ,
...
} ,
"breakRule" : {
object ( BreakRule )
} ,
"label" : string ,
"ignore" : boolean ,
"travelDurationMultiple" : number
}
Fields
displayName
string
The user-defined display name of the vehicle. It can be up to 63 characters long and may use UTF-8 characters.
travelMode
enum ( TravelMode )
The travel mode which affects the roads usable by the vehicle and its speed. See also travelDurationMultiple .
routeModifiers
object ( RouteModifiers )
A set of conditions to satisfy that affect the way routes are calculated for the given vehicle.
startLocation
object ( LatLng )
Geographic location where the vehicle starts before picking up any shipments. If not specified, the vehicle starts at its first pickup. If the shipment model has duration and distance matrices, startLocation must not be specified.
startWaypoint
object ( Waypoint )
Waypoint representing a geographic location where the vehicle starts before picking up any shipments. If neither startWaypoint nor startLocation is specified, the vehicle starts at its first pickup. If the shipment model has duration and distance matrices, startWaypoint must not be specified.
endLocation
object ( LatLng )
Geographic location where the vehicle ends after it has completed its last VisitRequest . If not specified the vehicle's ShipmentRoute ends immediately when it completes its last VisitRequest . If the shipment model has duration and distance matrices, endLocation must not be specified.
endWaypoint
object ( Waypoint )
Waypoint representing a geographic location where the vehicle ends after it has completed its last VisitRequest . If neither endWaypoint nor endLocation is specified, the vehicle's ShipmentRoute ends immediately when it completes its last VisitRequest . If the shipment model has duration and distance matrices, endWaypoint must not be specified.
startTags[]
string
Specifies tags attached to the start of the vehicle's route.
Empty or duplicate strings are not allowed.
endTags[]
string
Specifies tags attached to the end of the vehicle's route.
Empty or duplicate strings are not allowed.
startTimeWindows[]
object ( TimeWindow )
Time windows during which the vehicle may depart its start location. They must be within the global time limits (see ShipmentModel.global_* fields). If unspecified, there is no limitation besides those global time limits.
Time windows belonging to the same repeated field must be disjoint, i.e. no time window can overlap with or be adjacent to another, and they must be in chronological order.
costPerHourAfterSoftEndTime and softEndTime can only be set if there is a single time window.
endTimeWindows[]
object ( TimeWindow )
Time windows during which the vehicle may arrive at its end location. They must be within the global time limits (see ShipmentModel.global_* fields). If unspecified, there is no limitation besides those global time limits.
Time windows belonging to the same repeated field must be disjoint, i.e. no time window can overlap with or be adjacent to another, and they must be in chronological order.
costPerHourAfterSoftEndTime and softEndTime can only be set if there is a single time window.
unloadingPolicy
enum ( UnloadingPolicy )
Unloading policy enforced on the vehicle.
loadLimits
map (key: string, value: object ( LoadLimit ))
Capacities of the vehicle (weight, volume, # of pallets for example). The keys in the map are the identifiers of the type of load, consistent with the keys of the Shipment.load_demands field. If a given key is absent from this map, the corresponding capacity is considered to be limitless.
costPerHour
number
Vehicle costs: all costs add up and must be in the same unit as Shipment.penalty_cost .
Cost per hour of the vehicle route. This cost is applied to the total time taken by the route, and includes travel time, waiting time, and visit time. Using costPerHour instead of just costPerTraveledHour may result in additional latency.
costPerTraveledHour
number
Cost per traveled hour of the vehicle route. This cost is applied only to travel time taken by the route (i.e., that reported in ShipmentRoute.transitions ), and excludes waiting time and visit time.
costPerKilometer
number
Cost per kilometer of the vehicle route. This cost is applied to the distance reported in the ShipmentRoute.transitions and does not apply to any distance implicitly traveled from the arrivalLocation to the departureLocation of a single VisitRequest .
fixedCost
number
Fixed cost applied if this vehicle is used to handle a shipment.
usedIfRouteIsEmpty
boolean
This field only applies to vehicles when their route does not serve any shipments. It indicates if the vehicle should be considered as used or not in this case.
If true, the vehicle goes from its start to its end location even if it doesn't serve any shipments, and time and distance costs resulting from its start --> end travel are taken into account.
Otherwise, it doesn't travel from its start to its end location, and no breakRule or delay (from TransitionAttributes ) are scheduled for this vehicle. In this case, the vehicle's ShipmentRoute doesn't contain any information except for the vehicle index and label.
routeDurationLimit
object ( DurationLimit )
Limit applied to the total duration of the vehicle's route. In a given OptimizeToursResponse , the route duration of a vehicle is the difference between its vehicleEndTime and vehicleStartTime .
travelDurationLimit
object ( DurationLimit )
Limit applied to the travel duration of the vehicle's route. In a given OptimizeToursResponse , the route travel duration is the sum of all its transitions.travel_duration .
routeDistanceLimit
object ( DistanceLimit )
Limit applied to the total distance of the vehicle's route. In a given OptimizeToursResponse , the route distance is the sum of all its transitions.travel_distance_meters .
extraVisitDurationForVisitType
map (key: string, value: string ( Duration format))
Specifies a map from visitTypes strings to durations. The duration is time in addition to VisitRequest.duration to be taken at visits with the specified visitTypes . This extra visit duration adds cost if costPerHour is specified. Keys (i.e. visitTypes ) cannot be empty strings.
If a visit request has multiple types, a duration will be added for each type in the map.
breakRule
object ( BreakRule )
Describes the break schedule to be enforced on this vehicle. If empty, no breaks will be scheduled for this vehicle.
label
string
Specifies a label for this vehicle. This label is reported in the response as the vehicleLabel of the corresponding ShipmentRoute .
ignore
boolean
If true, usedIfRouteIsEmpty must be false, and this vehicle will remain unused.
If a shipment is performed by an ignored vehicle in injectedFirstSolutionRoutes , it is skipped in the first solution but is free to be performed in the response.
If a shipment is performed by an ignored vehicle in injectedSolutionConstraint and any related pickup/delivery is constrained to remain on the vehicle (i.e., not relaxed to level RELAX_ALL_AFTER_THRESHOLD ), it is skipped in the response. If a shipment has a non-empty allowedVehicleIndices field and all of the allowed vehicles are ignored, it is skipped in the response.
travelDurationMultiple
number
Specifies a multiplicative factor that can be used to increase or decrease travel times of this vehicle. For example, setting this to 2.0 means that this vehicle is slower and has travel times that are twice what they are for standard vehicles. This multiple does not affect visit durations. It does affect cost if costPerHour or costPerTraveledHour are specified. This must be in the range [0.001, 1000.0]. If unset, the vehicle is standard, and this multiple is considered 1.0.
WARNING: Travel times will be rounded to the nearest second after this multiple is applied but before performing any numerical operations, thus, a small multiple may result in a loss of precision.
See also extraVisitDurationForVisitType below.
TravelMode
Travel modes which can be used by vehicles.
These should be a subset of the Google Maps Platform Routes API travel modes, see: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelMode
Note: WALKING routes are in beta and might sometimes be missing clear sidewalks or pedestrian paths. You must display this warning to the user for all walking routes that you display in your app.
Enums
TRAVEL_MODE_UNSPECIFIED
Unspecified travel mode, equivalent to DRIVING .
DRIVING
Travel mode corresponding to driving directions (car, ...).
WALKING
Travel mode corresponding to walking directions.
RouteModifiers
Encapsulates a set of optional conditions to satisfy when calculating vehicle routes. This is similar to RouteModifiers in the Google Maps Platform Routes Preferred API; see: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteModifiers .
JSON representation
{
"avoidTolls" : boolean ,
"avoidHighways" : boolean ,
"avoidFerries" : boolean ,
"avoidIndoor" : boolean
}
Fields
avoidTolls
boolean
Specifies whether to avoid toll roads where reasonable. Preference will be given to routes not containing toll roads. Applies only to motorized travel modes.
avoidHighways
boolean
Specifies whether to avoid highways where reasonable. Preference will be given to routes not containing highways. Applies only to motorized travel modes.
avoidFerries
boolean
Specifies whether to avoid ferries where reasonable. Preference will be given to routes not containing travel by ferries. Applies only to motorized travel modes.
avoidIndoor
boolean
Optional. Specifies whether to avoid navigating indoors where reasonable. Preference will be given to routes not containing indoor navigation. Applies only to the WALKING travel mode.
UnloadingPolicy
Policy on how a vehicle can be unloaded. Applies only to shipments having both a pickup and a delivery.
Other shipments are free to occur anywhere on the route independent of unloadingPolicy .
Enums
UNLOADING_POLICY_UNSPECIFIED
Unspecified unloading policy; deliveries must just occur after their corresponding pickups.
LAST_IN_FIRST_OUT
Deliveries must occur in reverse order of pickups
FIRST_IN_FIRST_OUT
Deliveries must occur in the same order as pickups
LoadLimit
Defines a load limit applying to a vehicle, e.g. "this truck may only carry up to 3500 kg". See loadLimits .
JSON representation
{
"softMaxLoad" : string ,
"costPerUnitAboveSoftMax" : number ,
"startLoadInterval" : {
object ( Interval )
} ,
"endLoadInterval" : {
object ( Interval )
} ,
"maxLoad" : string ,
"costPerKilometer" : {
object ( LoadCost )
} ,
"costPerTraveledHour" : {
object ( LoadCost )
}
}
Fields
softMaxLoad
string ( int64 format)
A soft limit of the load. See costPerUnitAboveSoftMax .
costPerUnitAboveSoftMax
number
If the load ever exceeds softMaxLoad along this vehicle's route, the following cost penalty applies (only once per vehicle): (load - softMaxLoad ) * costPerUnitAboveSoftMax . All costs add up and must be in the same unit as Shipment.penalty_cost . Soft limits may only be defined on types that apply to either pickups only or deliveries only throughout the model.
startLoadInterval
object ( Interval )
The acceptable load interval of the vehicle at the start of the route.
endLoadInterval
object ( Interval )
The acceptable load interval of the vehicle at the end of the route.
maxLoad
string ( int64 format)
The maximum acceptable amount of load.
costPerKilometer
object ( LoadCost )
Cost of moving one unit of load over one kilometer for this vehicle. This can be used as a proxy for fuel consumption: if the load is a weight (in Newtons), then load*kilometer has the dimension of an energy.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/load-cost/make-request for more details.
costPerTraveledHour
object ( LoadCost )
Cost of traveling with a unit of load during one hour for this vehicle.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/load-cost/make-request for more details.
Interval
Interval of acceptable load amounts.
JSON representation
{
"min" : string ,
"max" : string
}
Fields
min
string ( int64 format)
A minimum acceptable load. Must be ≥ 0. If they're both specified, min must be ≤ max .
max
string ( int64 format)
A maximum acceptable load. Must be ≥ 0. If unspecified, the maximum load is unrestricted by this message. If they're both specified, min must be ≤ max .
LoadCost
Cost of moving one unit of load during a Transition . For a given load, the cost is the sum of two parts:
min(load, loadThreshold ) * costPerUnitBelowThreshold
max(0, load - loadThreshold ) * costPerUnitAboveThreshold
With this cost, solutions prefer to deliver high demands first, or equivalently pickup high demands last. For example, if a vehicle has
load_limit {
key: "weight"
value {
costPerKilometer {
loadThreshold: 15
costPerUnitBelowThreshold: 2.0
costPerUnitAboveThreshold: 10.0
}
}
}
and its route is start,pickup,pickup,delivery,delivery,end with transitions:
transition { vehicle_load['weight'] { amount: 0 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 10 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 20 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 10 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 0 }
travelDistanceMeters: 1000.0 }
then the cost incurred by this LoadCost is (cost_below * load_below * kilometers + cost_above * load_above * kms)
transition 0: 0.0
transition 1: 2.0 * 10 * 1.0 + 10.0 * 0 * 1.0 = 20.0
transition 2: 2.0 * 15 * 1.0 + 10.0 * (20 - 15) * 1.0 = 80.0
transition 3: 2.0 * 10 * 1.0 + 10.0 * 0 * 1.0 = 20.0
transition 4: 0.0
So the LoadCost over the route is 120.0.
However, if the route is start,pickup,delivery,pickup,delivery,end with transitions:
transition { vehicle_load['weight'] { amount: 0 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 10 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 0 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 10 }
travelDistanceMeters: 1000.0 }
transition { vehicle_load['weight'] { amount: 0 }
travelDistanceMeters: 1000.0 }
then the cost incurred by this LoadCost is
transition 0: 0.0
transition 1: 2.0 * 10 * 1.0 + 10.0 * 0 * 1.0 = 20.0
transition 2: 0.0
transition 3: 2.0 * 10 * 1.0 + 10.0 * 0 * 1.0 = 20.0
transition 4: 0.0
Here the LoadCost over the route is 40.0.
LoadCost makes solutions with heavy-loaded transitions more expensive.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/load-cost/make-request for more details.
JSON representation
{
"loadThreshold" : string ,
"costPerUnitBelowThreshold" : number ,
"costPerUnitAboveThreshold" : number
}
Fields
loadThreshold
string ( int64 format)
Amount of load above which the cost of moving a unit of load changes from costPerUnitBelowThreshold to costPerUnitAboveThreshold. Must be >= 0.
costPerUnitBelowThreshold
number
Cost of moving a unit of load, for each unit between 0 and threshold. Must be a finite value, and >= 0.
costPerUnitAboveThreshold
number
Cost of moving a unit of load, for each unit above threshold. In the special case threshold = 0, this is a fixed cost per unit. Must be a finite value, and >= 0.
DurationLimit
A limit defining a maximum duration of the route of a vehicle. It can be either hard or soft.
When a soft limit field is defined, both the soft max threshold and its associated cost must be defined together.
JSON representation
{
"maxDuration" : string ,
"softMaxDuration" : string ,
"quadraticSoftMaxDuration" : string ,
"costPerHourAfterSoftMax" : number ,
"costPerSquareHourAfterQuadraticSoftMax" : number
}
Fields
maxDuration
string ( Duration format)
A hard limit constraining the duration to be at most maxDuration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
softMaxDuration
string ( Duration format)
A soft limit not enforcing a maximum duration limit, but when violated makes the route incur a cost. This cost adds up to other costs defined in the model, with the same unit.
If defined, softMaxDuration must be nonnegative. If maxDuration is also defined, softMaxDuration must be less than maxDuration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
quadraticSoftMaxDuration
string ( Duration format)
A soft limit not enforcing a maximum duration limit, but when violated makes the route incur a cost, quadratic in the duration. This cost adds up to other costs defined in the model, with the same unit.
If defined, quadraticSoftMaxDuration must be nonnegative. If maxDuration is also defined, quadraticSoftMaxDuration must be less than maxDuration , and the difference must be no larger than one day:
maxDuration - quadraticSoftMaxDuration <= 86400 seconds
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
costPerHourAfterSoftMax
number
Cost per hour incurred if the softMaxDuration threshold is violated. The additional cost is 0 if the duration is under the threshold, otherwise the cost depends on the duration as follows:
costPerHourAfterSoftMax * (duration - softMaxDuration)
The cost must be nonnegative.
costPerSquareHourAfterQuadraticSoftMax
number
Cost per square hour incurred if the quadraticSoftMaxDuration threshold is violated.
The additional cost is 0 if the duration is under the threshold, otherwise the cost depends on the duration as follows:
costPerSquareHourAfterQuadraticSoftMax *
(duration - quadraticSoftMaxDuration)^2
The cost must be nonnegative.
DistanceLimit
A limit defining a maximum distance which can be traveled. It can be either hard or soft.
If a soft limit is defined, both softMaxMeters and costPerKilometerAboveSoftMax must be defined and be nonnegative.
JSON representation
{
"maxMeters" : string ,
"softMaxMeters" : string ,
"costPerKilometerBelowSoftMax" : number ,
"costPerKilometerAboveSoftMax" : number
}
Fields
maxMeters
string ( int64 format)
A hard limit constraining the distance to be at most maxMeters. The limit must be nonnegative.
softMaxMeters
string ( int64 format)
A soft limit not enforcing a maximum distance limit, but when violated results in a cost which adds up to other costs defined in the model, with the same unit.
If defined softMaxMeters must be less than maxMeters and must be nonnegative.
costPerKilometerBelowSoftMax
number
Cost per kilometer incurred, increasing up to softMaxMeters , with formula:
min(distanceMeters, softMaxMeters) / 1000.0 *
costPerKilometerBelowSoftMax.
This cost is not supported in routeDistanceLimit .
costPerKilometerAboveSoftMax
number
Cost per kilometer incurred if distance is above softMaxMeters limit. The additional cost is 0 if the distance is under the limit, otherwise the formula used to compute the cost is the following:
(distanceMeters - softMaxMeters) / 1000.0 *
costPerKilometerAboveSoftMax.
The cost must be nonnegative.
BreakRule
Rules to generate time breaks for a vehicle (e.g. lunch breaks). A break is a contiguous period of time during which the vehicle remains idle at its current position and cannot perform any visit. A break may occur:
during the travel between two visits (which includes the time right before or right after a visit, but not in the middle of a visit), in which case it extends the corresponding transit time between the visits,
or before the vehicle start (the vehicle may not start in the middle of a break), in which case it does not affect the vehicle start time.
or after the vehicle end (ditto, with the vehicle end time).
JSON representation
{
"breakRequests" : [
{
object ( BreakRequest )
}
] ,
"frequencyConstraints" : [
{
object ( FrequencyConstraint )
}
]
}
Fields
breakRequests[]
object ( BreakRequest )
Sequence of breaks. See the BreakRequest message.
frequencyConstraints[]
object ( FrequencyConstraint )
Several FrequencyConstraint may apply. They must all be satisfied by the BreakRequest s of this BreakRule . See FrequencyConstraint .
BreakRequest
The sequence of breaks (i.e. their number and order) that apply to each vehicle must be known beforehand. The repeated BreakRequest s define that sequence, in the order in which they must occur. Their time windows ( earliestStartTime / latestStartTime ) may overlap, but they must be compatible with the order (this is checked).
JSON representation
{
"earliestStartTime" : string ,
"latestStartTime" : string ,
"minDuration" : string
}
Fields
earliestStartTime
string ( Timestamp format)
Required. Lower bound (inclusive) on the start of the break.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
latestStartTime
string ( Timestamp format)
Required. Upper bound (inclusive) on the start of the break.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
minDuration
string ( Duration format)
Required. Minimum duration of the break. Must be positive.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
FrequencyConstraint
One may further constrain the frequency and duration of the breaks specified above, by enforcing a minimum break frequency, such as "There must be a break of at least 1 hour every 12 hours". Assuming that this can be interpreted as "Within any sliding time window of 12h, there must be at least one break of at least one hour", that example would translate to the following FrequencyConstraint :
{
minBreakDuration { seconds: 3600 } # 1 hour.
maxInterBreakDuration { seconds: 39600 } # 11 hours (12 - 1 = 11).
}
The timing and duration of the breaks in the solution will respect all such constraints, in addition to the time windows and minimum durations already specified in the BreakRequest .
A FrequencyConstraint may in practice apply to non-consecutive breaks. For example, the following schedule honors the "1h every 12h" example:
04:00 vehicle start
.. performing travel and visits ..
09:00 1 hour break
10:00 end of the break
.. performing travel and visits ..
12:00 20-min lunch break
12:20 end of the break
.. performing travel and visits ..
21:00 1 hour break
22:00 end of the break
.. performing travel and visits ..
23:59 vehicle end
JSON representation
{
"minBreakDuration" : string ,
"maxInterBreakDuration" : string
}
Fields
minBreakDuration
string ( Duration format)
Required. Minimum break duration for this constraint. Nonnegative. See description of FrequencyConstraint .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxInterBreakDuration
string ( Duration format)
Required. Maximum allowed span of any interval of time in the route that does not include at least partially a break of duration >=
minBreakDuration . Must be positive.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Objective
Objectives replace the cost model completely, and are therefore incompatible with pre-existing costs. Each objective maps to a number of pre-defined costs for, e.g., vehicles, shipments or transition attributes.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/objectives/make-request for more details.
JSON representation
{
"type" : enum ( Type ) ,
"weight" : number
}
Fields
type
enum ( Type )
The type of the objective.
weight
number
How much this objective should count relatively to the others. This can be any non-negative number, weights do not have to sum to 1. Weights default to 1.0.
Type
The objective type that will be mapped to a set of costs.
Enums
DEFAULT
A default set of costs will be used, to ensure a reasonable solution. Note: this objective can be used on its own, but will also always be added with weight 1.0, as a baseline, to the objectives specified by the user, if it's not already present.
MIN_DISTANCE
"MIN" objectives. Minimize the total distance traveled.
MIN_WORKING_TIME
Minimize the total working time, summed over all vehicles.
MIN_TRAVEL_TIME
Same as above but focusing on travel time only.
MIN_NUM_VEHICLES
Minimize the number of vehicles used.
DurationDistanceMatrix
Specifies a duration and distance matrix from visit and vehicle start locations to visit and vehicle end locations.
JSON representation
{
"rows" : [
{
object ( Row )
}
] ,
"vehicleStartTag" : string
}
Fields
rows[]
object ( Row )
Specifies the rows of the duration and distance matrix. It must have as many elements as ShipmentModel.duration_distance_matrix_src_tags .
vehicleStartTag
string
Tag defining to which vehicles this duration and distance matrix applies. If empty, this applies to all vehicles, and there can only be a single matrix.
Each vehicle start must match exactly one matrix, i.e. exactly one of their startTags field must match the vehicleStartTag of a matrix (and of that matrix only).
All matrices must have a different vehicleStartTag .
Row
Specifies a row of the duration and distance matrix.
JSON representation
{
"durations" : [
string
] ,
"meters" : [
number
]
}
Fields
durations[]
string ( Duration format)
Duration values for a given row. It must have as many elements as ShipmentModel.duration_distance_matrix_dst_tags .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
meters[]
number
Distance values for a given row. If no costs or constraints refer to distances in the model, this can be left empty; otherwise it must have as many elements as durations .
TransitionAttributes
Specifies attributes of transitions between two consecutive visits on a route. Several TransitionAttributes may apply to the same transition: in that case, all extra costs add up and the strictest constraint or limit applies (following natural "AND" semantics).
JSON representation
{
"srcTag" : string ,
"excludedSrcTag" : string ,
"dstTag" : string ,
"excludedDstTag" : string ,
"cost" : number ,
"costPerKilometer" : number ,
"distanceLimit" : {
object ( DistanceLimit )
} ,
"delay" : string
}
Fields
srcTag
string
Tags defining the set of (src->dst) transitions these attributes apply to.
A source visit or vehicle start matches iff its VisitRequest.tags or Vehicle.start_tags either contains srcTag or does not contain excludedSrcTag (depending on which of these two fields is non-empty).
excludedSrcTag
string
See srcTag . Exactly one of srcTag and excludedSrcTag must be non-empty.
dstTag
string
A destination visit or vehicle end matches iff its VisitRequest.tags or Vehicle.end_tags either contains dstTag or does not contain excludedDstTag (depending on which of these two fields is non-empty).
excludedDstTag
string
See dstTag . Exactly one of dstTag and excludedDstTag must be non-empty.
cost
number
Specifies a cost for performing this transition. This is in the same unit as all other costs in the model and must not be negative. It is applied on top of all other existing costs.
costPerKilometer
number
Specifies a cost per kilometer applied to the distance traveled while performing this transition. It adds up to any Vehicle.cost_per_kilometer specified on vehicles.
distanceLimit
object ( DistanceLimit )
Specifies a limit on the distance traveled while performing this transition.
As of 2021/06, only soft limits are supported.
delay
string ( Duration format)
Specifies a delay incurred when performing this transition.
This delay always occurs after finishing the source visit and before starting the destination visit.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
ShipmentTypeIncompatibility
Specifies incompatibilties between shipments depending on their shipmentType. The appearance of incompatible shipments on the same route is restricted based on the incompatibility mode.
JSON representation
{
"types" : [
string
] ,
"incompatibilityMode" : enum ( IncompatibilityMode )
}
Fields
types[]
string
List of incompatible types. Two shipments having different shipment_types among those listed are "incompatible".
incompatibilityMode
enum ( IncompatibilityMode )
Mode applied to the incompatibility.
IncompatibilityMode
Modes defining how the appearance of incompatible shipments are restricted on the same route.
Enums
INCOMPATIBILITY_MODE_UNSPECIFIED
Unspecified incompatibility mode. This value should never be used.
NOT_PERFORMED_BY_SAME_VEHICLE
In this mode, two shipments with incompatible types can never share the same vehicle.
NOT_IN_SAME_VEHICLE_SIMULTANEOUSLY
In this mode, two shipments with incompatible types can never be on the same vehicle at the same time:
They can share the same vehicle only if one is delivered before the other is picked up.
When both shipments are pickups-only (no deliveries) or deliveries-only (no pickups), they can't share the same vehicle at all.
ShipmentTypeRequirement
Specifies requirements between shipments based on their shipmentType. The specifics of the requirement are defined by the requirement mode.
JSON representation
{
"requiredShipmentTypeAlternatives" : [
string
] ,
"dependentShipmentTypes" : [
string
] ,
"requirementMode" : enum ( RequirementMode )
}
Fields
requiredShipmentTypeAlternatives[]
string
List of alternative shipment types required by the dependentShipmentTypes .
dependentShipmentTypes[]
string
All shipments with a type in the dependentShipmentTypes field require at least one shipment of type requiredShipmentTypeAlternatives to be visited on the same route.
NOTE: Chains of requirements such that a shipmentType depends on itself are not allowed.
requirementMode
enum ( RequirementMode )
Mode applied to the requirement.
RequirementMode
Modes defining the appearance of dependent shipments on a route.
Enums
REQUIREMENT_MODE_UNSPECIFIED
Unspecified requirement mode. This value should never be used.
PERFORMED_BY_SAME_VEHICLE
In this mode, all "dependent" shipments must share the same vehicle as at least one of their "required" shipments.
IN_SAME_VEHICLE_AT_PICKUP_TIME
With the IN_SAME_VEHICLE_AT_PICKUP_TIME mode, all "dependent" shipments need to have at least one "required" shipment on their vehicle at the time of their pickup.
A "dependent" shipment pickup must therefore have either:
A delivery-only "required" shipment delivered on the route after, or
A "required" shipment picked up on the route before it, and if the "required" shipment has a delivery, this delivery must be performed after the "dependent" shipment's pickup.
IN_SAME_VEHICLE_AT_DELIVERY_TIME
Same as before, except the "dependent" shipments need to have a "required" shipment on their vehicle at the time of their delivery .
PrecedenceRule
A precedence rule between two events (each event is the pickup or the delivery of a shipment): the "second" event has to start at least offsetDuration after "first" has started.
Several precedences can refer to the same (or related) events, e.g., "pickup of B happens after delivery of A" and "pickup of C happens after pickup of B".
Furthermore, precedences only apply when both shipments are performed and are otherwise ignored.
JSON representation
{
"firstIsDelivery" : boolean ,
"secondIsDelivery" : boolean ,
"offsetDuration" : string ,
"firstIndex" : integer ,
"secondIndex" : integer
}
Fields
firstIsDelivery
boolean
Indicates if the "first" event is a delivery.
secondIsDelivery
boolean
Indicates if the "second" event is a delivery.
offsetDuration
string ( Duration format)
The offset between the "first" and "second" event. It can be negative.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
firstIndex
integer
Shipment index of the "first" event. This field must be specified.
secondIndex
integer
Shipment index of the "second" event. This field must be specified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-10 UTC."],[],["The content describes a shipment model for optimizing logistics. Key actions include defining shipments with pickups/deliveries, vehicle assignments, and time windows. The model considers costs like vehicle routing, shipment penalties, and global duration. Data like travel time and distance matrices, along with location tags, are used. Constraints like shipment incompatibilities, precedence rules, time windows and load limits, are set. The optimization seeks to minimize the total cost by considering vehicle restrictions, travel data, and other factors like detour and duration limits.\n"]]

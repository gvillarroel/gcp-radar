---
title: "ShipmentRoute \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute
  title: "ShipmentRoute \_|\_ Route Optimization API \_|\_ Google for Developers"
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
ShipmentRoute
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A vehicle's route is comprised of Visits (time at a location) and Transitions (time between visits, including travel, breaks, delays, and waiting).
Transitions can include travel, breaks, delays, and waiting time, with the total duration reflecting the time until the next visit.
Routes are represented in JSON format, with ShipmentRoute providing an overview, Visit detailing specific stops, and Transition describing segments between visits.
EncodedPolyline is used to represent the route's geographical path, while Break objects specify driver rest periods.
The JSON representation includes timestamps, durations, distances, load demands, and other relevant data for detailed route analysis.
JSON representation
Visit
JSON representation
Transition
JSON representation
EncodedPolyline
JSON representation
Break
JSON representation
VehicleFullness
JSON representation
A vehicle's route can be decomposed, along the time axis, like this (we assume there are n visits):
| | | | | T[2], | | |
| Transition | Visit #0 | | | V[2], | | |
| #0 | aka | T[1] | V[1] | ... | V[n-1] | T[n] |
| aka T[0] | V[0] | | | V[n-2],| | |
| | | | | T[n-1] | | |
^ ^ ^ ^ ^ ^ ^ ^
vehicle V[0].start V[0].end V[1]. V[1]. V[n]. V[n]. vehicle
start (arrival) (departure) start end start end end
Note that we make a difference between:
"punctual events", such as the vehicle start and end and each visit's start and end (aka arrival and departure). They happen at a given second.
"time intervals", such as the visits themselves, and the transition between visits. Though time intervals can sometimes have zero duration, i.e. start and end at the same second, they often have a positive duration.
Invariants:
If there are n visits, there are n+1 transitions.
A visit is always surrounded by a transition before it (same index) and a transition after it (index + 1).
The vehicle start is always followed by transition #0.
The vehicle end is always preceded by transition #n.
Zooming in, here is what happens during a Transition and a Visit :
---+-------------------------------------+-----------------------------+-->
| TRANSITION[i] | VISIT[i] |
| | |
| * TRAVEL: the vehicle moves from | PERFORM the visit: |
| VISIT[i-1].departure_location to | |
| VISIT[i].arrival_location, which | * Spend some time: |
| takes a given travel duration | the "visit duration". |
| and distance | |
| | * Load or unload |
| * BREAKS: the driver may have | some quantities from the |
| breaks (e.g. lunch break). | vehicle: the "demand". |
| | |
| * WAIT: the driver/vehicle does | |
| nothing. This can happen for | |
| many reasons, for example when | |
| the vehicle reaches the next | |
| event's destination before the | |
| start of its time window | |
| | |
| * DELAY: *right before* the next | |
| arrival. E.g. the vehicle and/or | |
| driver spends time unloading. | |
| | |
---+-------------------------------------+-----------------------------+-->
^ ^ ^
V[i-1].end V[i].start V[i].end
Lastly, here is how the TRAVEL, BREAKS, DELAY and WAIT can be arranged during a transition.
They don't overlap.
The DELAY is unique and must be a contiguous period of time right before the next visit (or vehicle end). Thus, it suffice to know the delay duration to know its start and end time.
The BREAKS are contiguous, non-overlapping periods of time. The response specifies the start time and duration of each break.
TRAVEL and WAIT are "preemptable": they can be interrupted several times during this transition. Clients can assume that travel happens "as soon as possible" and that "wait" fills the remaining time.
A (complex) example:
TRANSITION[i]
--++-----+-----------------------------------------------------------++-->
|| | | | | | | ||
|| T | B | T | | B | | D ||
|| r | r | r | W | r | W | e ||
|| a | e | a | a | e | a | l ||
|| v | a | v | i | a | i | a ||
|| e | k | e | t | k | t | y ||
|| l | | l | | | | ||
|| | | | | | | ||
--++-----------------------------------------------------------------++-->
JSON representation
{
"vehicleIndex" : integer ,
"vehicleLabel" : string ,
"vehicleStartTime" : string ,
"vehicleEndTime" : string ,
"visits" : [
{
object ( Visit )
}
] ,
"transitions" : [
{
object ( Transition )
}
] ,
"hasTrafficInfeasibilities" : boolean ,
"routePolyline" : {
object ( EncodedPolyline )
} ,
"breaks" : [
{
object ( Break )
}
] ,
"metrics" : {
object ( AggregatedMetrics )
} ,
"vehicleFullness" : {
object ( VehicleFullness )
} ,
"routeCosts" : {
string : number ,
...
} ,
"routeTotalCost" : number
}
Fields
vehicleIndex
integer
Vehicle performing the route, identified by its index in the source ShipmentModel .
vehicleLabel
string
Label of the vehicle performing this route, equal to ShipmentModel.vehicles(vehicleIndex).label , if specified.
vehicleStartTime
string ( Timestamp format)
Time at which the vehicle starts its route.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
vehicleEndTime
string ( Timestamp format)
Time at which the vehicle finishes its route.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
visits[]
object ( Visit )
Ordered sequence of visits representing a route. visits[i] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.
transitions[]
object ( Transition )
Ordered list of transitions for the route.
hasTrafficInfeasibilities
boolean
When OptimizeToursRequest.consider_road_traffic , is set to true, this field indicates that inconsistencies in route timings are predicted using traffic-based travel duration estimates. There may be insufficient time to complete traffic-adjusted travel, delays, and breaks between visits, before the first visit, or after the last visit, while still satisfying the visit and vehicle time windows. For example,
startTime(previous_visit) + duration(previous_visit) +
travelDuration(previous_visit, next_visit) > startTime(next_visit)
Arrival at next_visit will likely happen later than its current time window due the increased estimate of travel time travelDuration(previous_visit, next_visit) due to traffic. Also, a break may be forced to overlap with a visit due to an increase in travel time estimates and visit or break time window restrictions.
routePolyline
object ( EncodedPolyline )
The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate_polylines is set to true.
breaks[]
object ( Break )
Breaks scheduled for the vehicle performing this route. The breaks sequence represents time intervals, each starting at the corresponding startTime and lasting duration seconds.
metrics
object ( AggregatedMetrics )
Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits , depending on the context.
vehicleFullness
object ( VehicleFullness )
VehicleFullness field for computing how close the capped metrics are to their respective vehicle limits. Its fields are ratios between a capped metric field (e.g. AggregatedMetrics.travel_distance_meters ) and the related vehicle limit (e.g. Vehicle.route_distance_limit ).
Experimental: This field's behavior or existence may change in future.
routeCosts
map (key: string, value: number)
Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs["model.shipments.pickups.cost"] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.
routeTotalCost
number
Total cost of the route. The sum of all costs in the cost map.
Visit
A visit performed during a route. This visit corresponds to a pickup or a delivery of a Shipment .
JSON representation
{
"shipmentIndex" : integer ,
"isPickup" : boolean ,
"visitRequestIndex" : integer ,
"startTime" : string ,
"loadDemands" : {
string : {
object ( Load )
} ,
...
} ,
"detour" : string ,
"shipmentLabel" : string ,
"visitLabel" : string ,
"injectedSolutionLocationToken" : integer
}
Fields
shipmentIndex
integer
Index of the shipments field in the source ShipmentModel .
isPickup
boolean
If true the visit corresponds to a pickup of a Shipment . Otherwise, it corresponds to a delivery.
visitRequestIndex
integer
Index of VisitRequest in either the pickup or delivery field of the Shipment (see isPickup ).
startTime
string ( Timestamp format)
Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the ShipmentModel .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
loadDemands
map (key: string, value: object ( Load ))
Total visit load demand as the sum of the shipment and the visit request loadDemands . The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).
detour
string ( Duration format)
Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to:
startTime(delivery) - startTime(pickup)
- (duration(pickup) + travel duration from the pickup location
to the delivery location).
Otherwise, it is computed from the vehicle startLocation and is equal to:
startTime - vehicleStartTime - travel duration from
the vehicle's `startLocation` to the visit.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
shipmentLabel
string
Copy of the corresponding Shipment.label , if specified in the Shipment .
visitLabel
string
Copy of the corresponding VisitRequest.label , if specified in the VisitRequest .
injectedSolutionLocationToken
integer
An opaque token representing information about a visit location.
This field may be populated in the result routes' visits when VisitRequest.avoid_u_turns was set to true for this visit or if ShipmentModel.avoid_u_turns was set to true in the request OptimizeToursRequest .
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/u-turn-avoidance/make-request for more details.
Transition
Transition between two events on the route. See the description of ShipmentRoute .
If the vehicle does not have a startLocation and/or endLocation , the corresponding travel metrics are 0.
JSON representation
{
"travelDuration" : string ,
"travelDistanceMeters" : number ,
"trafficInfoUnavailable" : boolean ,
"delayDuration" : string ,
"breakDuration" : string ,
"waitDuration" : string ,
"totalDuration" : string ,
"startTime" : string ,
"routePolyline" : {
object ( EncodedPolyline )
} ,
"routeToken" : string ,
"vehicleLoads" : {
string : {
object ( VehicleLoad )
} ,
...
}
}
Fields
travelDuration
string ( Duration format)
Travel duration during this transition.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
travelDistanceMeters
number
Distance traveled during the transition.
trafficInfoUnavailable
boolean
When traffic is requested via OptimizeToursRequest.consider_road_traffic , and the traffic info couldn't be retrieved for a Transition , this boolean is set to true. This may be temporary (rare hiccup in the realtime traffic servers) or permanent (no data for this location).
delayDuration
string ( Duration format)
Sum of the delay durations applied to this transition. If any, the delay starts exactly delayDuration seconds before the next event (visit or vehicle end). See TransitionAttributes.delay .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
breakDuration
string ( Duration format)
Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
waitDuration
string ( Duration format)
Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
totalDuration
string ( Duration format)
Total duration of the transition, provided for convenience. It is equal to:
next visit startTime (or vehicleEndTime if this is the last transition) - this transition's startTime ;
if ShipmentRoute.has_traffic_infeasibilities is false, the following additionally holds: `totalDuration = travelDuration + delayDuration
breakDuration + waitDuration`.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
startTime
string ( Timestamp format)
Start time of this transition.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
routePolyline
object ( EncodedPolyline )
The encoded polyline representation of the route followed during the transition. This field is only populated if populateTransitionPolylines is set to true.
routeToken
string
Output only. An opaque token that can be passed to Navigation SDK to reconstruct the route during navigation, and, in the event of rerouting, honor the original intention when the route was created. Treat this token as an opaque blob. Don't compare its value across requests as its value may change even if the service returns the exact same route. This field is only populated if populateTransitionPolylines is set to true.
vehicleLoads
map (key: string, value: object ( VehicleLoad ))
Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load_limits , or that have non-zero Shipment.load_demands on some shipment performed on this route.
The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's loadDemands are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.
EncodedPolyline
The encoded representation of a polyline. More information on polyline encoding can be found here: https://developers.google.com/maps/documentation/utilities/polylinealgorithm https://developers.google.com/maps/documentation/javascript/reference/geometry#encoding .
JSON representation
{
"points" : string
}
Fields
points
string
String representing encoded points of the polyline.
Break
Data representing the execution of a break.
JSON representation
{
"startTime" : string ,
"duration" : string
}
Fields
startTime
string ( Timestamp format)
Start time of a break.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
duration
string ( Duration format)
Duration of a break.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
VehicleFullness
VehicleFullness is a metric which computes how full a vehicle is. Each VehicleFullness field is between 0 and 1, computed as the ratio between a capped metric field (e.g. AggregatedMetrics.travel_distance_meters ) and its related vehicle limit (e.g. Vehicle.route_distance_limit ), if it exists. Otherwise the fullness ratio stays unset. If the limit is 0, the field is set to 1. Note: when a route is subject to traffic infeasibilities, some raw fullness ratios might exceed 1.0, e.g. the vehicle might exceed its distance limit. In these cases, we cap the fullness values at 1.0.
JSON representation
{
"maxFullness" : number ,
"distance" : number ,
"travelDuration" : number ,
"activeDuration" : number ,
"maxLoad" : number ,
"activeSpan" : number
}
Fields
maxFullness
number
Maximum of all other fields in this message.
distance
number
The ratio between AggregatedMetrics.travel_distance_meters and Vehicle.route_distance_limit . If Vehicle.route_distance_limit is unset, this field will be unset.
travelDuration
number
The ratio between [AggregatedMetrics.travel_duration_seconds][] and Vehicle.travel_duration_limit . If Vehicle.travel_duration_limit is unset, this field will be unset.
activeDuration
number
The ratio between [AggregatedMetrics.total_duration_seconds][] and Vehicle.route_duration_limit . If Vehicle.route_duration_limit is unset, this field will be unset.
maxLoad
number
The maximum ratio among all types of [AggregatedMetrics.max_load][] and their respective Vehicle.load_limits . If all Vehicle.load_limits fields are unset, this field will be unset.
activeSpan
number
The ratio (vehicleEndTime - vehicleStartTime) / (latestVehicleEndTime - earliestVehicleStartTime) for a given vehicle. If the denominator is not present, it uses ( ShipmentModel.global_end_time - ShipmentModel.global_start_time ) instead.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-10 UTC."],[],[]]

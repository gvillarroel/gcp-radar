---
title: "InjectedSolutionConstraint \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/InjectedSolutionConstraint
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/InjectedSolutionConstraint
  title: "InjectedSolutionConstraint \_|\_ Route Optimization API \_|\_ Google for\
    \ Developers"
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
InjectedSolutionConstraint
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Injected solutions provide route information and specify constraint relaxations for optimization.
Constraint relaxations define when and how to relax visit constraints for groups of vehicles.
Relaxations control the level of flexibility for visit start times, sequence, and vehicle assignment.
Relaxation levels range from maintaining all constraints to allowing complete flexibility after thresholds.
Thresholds are based on time and visit count within a route, triggering different relaxation levels.
JSON representation
ConstraintRelaxation
JSON representation
Relaxation
JSON representation
Level
Solution injected in the request including information about which visits must be constrained and how they must be constrained.
JSON representation
{
"routes" : [
{
object ( ShipmentRoute )
}
] ,
"skippedShipments" : [
{
object ( SkippedShipment )
}
] ,
"constraintRelaxations" : [
{
object ( ConstraintRelaxation )
}
]
}
Fields
routes[]
object ( ShipmentRoute )
Routes of the solution to inject. Some routes may be omitted from the original solution. The routes and skipped shipments must satisfy the basic validity assumptions listed for injectedFirstSolutionRoutes .
skippedShipments[]
object ( SkippedShipment )
Skipped shipments of the solution to inject. Some may be omitted from the original solution. See the routes field.
constraintRelaxations[]
object ( ConstraintRelaxation )
For zero or more groups of vehicles, specifies when and how much to relax constraints. If this field is empty, all non-empty vehicle routes are fully constrained.
ConstraintRelaxation
For a group of vehicles, specifies at what threshold(s) constraints on visits will be relaxed and to which level. Shipments listed in the skipped_shipment field are constrained to be skipped; i.e., they cannot be performed.
JSON representation
{
"relaxations" : [
{
object ( Relaxation )
}
] ,
"vehicleIndices" : [
integer
]
}
Fields
relaxations[]
object ( Relaxation )
All the visit constraint relaxations that will apply to visits on routes with vehicles in vehicleIndices .
vehicleIndices[]
integer
Specifies the vehicle indices to which the visit constraint relaxations apply. If empty, this is considered the default and the relaxations apply to all vehicles that are not specified in other constraintRelaxations . There can be at most one default, i.e., at most one constraint relaxation field is allowed empty vehicleIndices . A vehicle index can only be listed once, even within several constraintRelaxations .
A vehicle index is mapped the same as ShipmentRoute.vehicle_index , if interpretInjectedSolutionsUsingLabels is true (see fields comment).
Relaxation
If relaxations is empty, the start time and sequence of all visits on routes are fully constrained and no new visits may be inserted or added to those routes. Also, a vehicle's start and end time in routes is fully constrained, unless the vehicle is empty (i.e., has no visits and has usedIfRouteIsEmpty set to false in the model).
relaxations(i).level specifies the constraint relaxation level applied to a visit #j that satisfies:
route.visits(j).start_time >= relaxations(i).threshold_time AND
j + 1 >= relaxations(i).threshold_visit_count
Similarly, the vehicle start is relaxed to relaxations(i).level if it satisfies:
vehicleStartTime >= relaxations(i).threshold_time AND
relaxations(i).threshold_visit_count == 0 and the vehicle end is relaxed to relaxations(i).level if it satisfies:
vehicleEndTime >= relaxations(i).threshold_time AND
route.visits_size() + 1 >= relaxations(i).threshold_visit_count
To apply a relaxation level if a visit meets the thresholdVisitCount OR the thresholdTime add two relaxations with the same level : one with only thresholdVisitCount set and the other with only thresholdTime set. If a visit satisfies the conditions of multiple relaxations , the most relaxed level applies. As a result, from the vehicle start through the route visits in order to the vehicle end, the relaxation level becomes more relaxed: i.e., the relaxation level is non-decreasing as the route progresses.
The timing and sequence of route visits that do not satisfy the threshold conditions of any relaxations are fully constrained and no visits may be inserted into these sequences. Also, if a vehicle start or end does not satisfy the conditions of any relaxation the time is fixed, unless the vehicle is empty.
JSON representation
{
"level" : enum ( Level ) ,
"thresholdTime" : string ,
"thresholdVisitCount" : integer
}
Fields
level
enum ( Level )
The constraint relaxation level that applies when the conditions at or after thresholdTime AND at least thresholdVisitCount are satisfied.
thresholdTime
string ( Timestamp format)
The time at or after which the relaxation level may be applied.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
thresholdVisitCount
integer
The number of visits at or after which the relaxation level may be applied. If thresholdVisitCount is 0 (or unset), the level may be applied directly at the vehicle start.
If it is route.visits_size() + 1 , the level may only be applied to the vehicle end. If it is more than route.visits_size() + 1 , level is not applied at all for that route.
Level
Expresses the different constraint relaxation levels, which are applied for a visit and those that follow when it satisfies the threshold conditions.
The enumeration below is in order of increasing relaxation.
Enums
LEVEL_UNSPECIFIED
Implicit default relaxation level: no constraints are relaxed, i.e., all visits are fully constrained.
This value must not be explicitly used in level .
RELAX_VISIT_TIMES_AFTER_THRESHOLD
Visit start times and vehicle start/end times will be relaxed, but each visit remains bound to the same vehicle and the visit sequence must be observed: no visit can be inserted between them or before them.
RELAX_VISIT_TIMES_AND_SEQUENCE_AFTER_THRESHOLD
Same as RELAX_VISIT_TIMES_AFTER_THRESHOLD , but the visit sequence is also relaxed: visits can only be performed by this vehicle, but can potentially become unperformed.
RELAX_ALL_AFTER_THRESHOLD
Same as RELAX_VISIT_TIMES_AND_SEQUENCE_AFTER_THRESHOLD , but the vehicle is also relaxed: visits are completely free at or after the threshold time and can potentially become unperformed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-10 UTC."],[],["The provided content outlines how to inject a solution with constraint relaxations for vehicle routes. Key actions include defining `routes` and `skippedShipments`, and specifying `constraintRelaxations`. `ConstraintRelaxation` details when and how to relax constraints for groups of vehicles using `relaxations` and `vehicleIndices`. `Relaxation` defines relaxation `level`, `thresholdTime`, and `thresholdVisitCount`, which dictate when constraint relaxation applies. Possible relaxation `Level` range from relaxing only times to relaxing everything, including visit sequences and vehicle constraints.\n"]]

---
title: "SkippedShipment \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SkippedShipment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SkippedShipment
  title: "SkippedShipment \_|\_ Route Optimization API \_|\_ Google for Developers"
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
SkippedShipment
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Specifies details for shipments that were not included in the optimized route solution.
If the system can determine the reason for a shipment being skipped, it will provide details including a reason code and, if applicable, the vehicle index and capacity type that caused the issue.
Reasons for skipping a shipment can include exceeding vehicle capacity, distance or duration limits, time window constraints, or vehicle restrictions.
Shipments can be skipped due to incompatibility with all available vehicles, with reasons potentially varying for each vehicle.
The SkippedShipment object provides data like the shipment index, label, and an array of reasons for exclusion.
JSON representation
Reason
JSON representation
Code
Specifies details of unperformed shipments in a solution. For trivial cases and/or if we are able to identify the cause for skipping, we report the reason here.
JSON representation
{
"index" : integer ,
"label" : string ,
"reasons" : [
{
object ( Reason )
}
] ,
"penaltyCost" : number ,
"estimatedIncompatibleVehicleRatio" : number
}
Fields
index
integer
The index corresponds to the index of the shipment in the source ShipmentModel .
label
string
Copy of the corresponding Shipment.label , if specified in the Shipment .
reasons[]
object ( Reason )
A list of reasons that explain why the shipment was skipped. See comment above Reason . If we are unable to understand why a shipment was skipped, reasons will not be set.
penaltyCost
number
This is a copy of the Shipment.penalty_cost , included here to make it easier to see the severity of a skipped shipment.
Experimental: This field's behavior or existence may change in future.
estimatedIncompatibleVehicleRatio
number
Estimated ratio of vehicles that cannot perform this shipment for at least one of the reasons below. Note: this is only filled when reasons involve a vehicle.
Experimental: This field's behavior or existence may change in future.
Reason
If we can explain why the shipment was skipped, reasons will be listed here. If the reason is not the same for all vehicles, reason will have more than 1 element. A skipped shipment cannot have duplicate reasons, i.e. where all fields are the same except for exampleVehicleIndex . Example:
reasons {
code: DEMAND_EXCEEDS_VEHICLE_CAPACITY
exampleVehicleIndex: 1
exampleExceededCapacityType: "Apples"
}
reasons {
code: DEMAND_EXCEEDS_VEHICLE_CAPACITY
exampleVehicleIndex: 3
exampleExceededCapacityType: "Pears"
}
reasons {
code: CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DISTANCE_LIMIT
exampleVehicleIndex: 1
}
The skipped shipment is incompatible with all vehicles. The reasons may be different for all vehicles but at least one vehicle's "Apples" capacity would be exceeded (including vehicle 1), at least one vehicle's "Pears" capacity would be exceeded (including vehicle 3) and at least one vehicle's distance limit would be exceeded (including vehicle 1).
JSON representation
{
"code" : enum ( Code ) ,
"exampleVehicleIndices" : [
integer
] ,
"exampleExceededCapacityType" : string ,
"exampleVehicleIndex" : integer
}
Fields
code
enum ( Code )
Refer to the comments of Code.
exampleVehicleIndices[]
integer
Same as exampleVehicleIndex except that we provide the list of multiple identified vehicles. This list is not necessarily exhaustive. This is only filled if [fill_example_vehicle_indices_in_skipped_reasons][] is true.
Experimental: This field's behavior or existence may change in future.
exampleExceededCapacityType
string
If the reason code is DEMAND_EXCEEDS_VEHICLE_CAPACITY , documents one capacity type that is exceeded.
exampleVehicleIndex
integer
If the reason is related to a shipment-vehicle incompatibility, this field provides the index of one relevant vehicle.
Code
Code identifying the reason type. The order here is meaningless. In particular, it gives no indication of whether a given reason will appear before another in the solution, if both apply.
Enums
CODE_UNSPECIFIED
This should never be used.
NO_VEHICLE
There is no vehicle in the model making all shipments infeasible.
DEMAND_EXCEEDS_VEHICLE_CAPACITY
The demand of the shipment exceeds a vehicle's capacity for some capacity types, one of which is exampleExceededCapacityType .
CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DISTANCE_LIMIT
The minimum distance necessary to perform this shipment, i.e. from the vehicle's startLocation to the shipment's pickup and/or delivery locations and to the vehicle's end location exceeds the vehicle's routeDistanceLimit .
Note that for this computation we use the geodesic distances.
CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DURATION_LIMIT
The minimum time necessary to perform this shipment, including travel time, wait time and service time exceeds the vehicle's routeDurationLimit .
Note: travel time is computed in the best-case scenario, namely as geodesic distance x 36 m/s (roughly 130 km/hour).
CANNOT_BE_PERFORMED_WITHIN_VEHICLE_TRAVEL_DURATION_LIMIT
Same as above but we only compare minimum travel time and the vehicle's travelDurationLimit .
CANNOT_BE_PERFORMED_WITHIN_VEHICLE_TIME_WINDOWS
The vehicle cannot perform this shipment in the best-case scenario (see CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DURATION_LIMIT for time computation) if it starts at its earliest start time: the total time would make the vehicle end after its latest end time.
VEHICLE_NOT_ALLOWED
The allowedVehicleIndices field of the shipment is not empty and this vehicle does not belong to it.
VEHICLE_IGNORED
The vehicle's ignore field is true.
Experimental: This field's behavior or existence may change in future.
SHIPMENT_IGNORED
The shipment's ignore field is true.
Experimental: This field's behavior or existence may change in future.
SKIPPED_IN_INJECTED_SOLUTION_CONSTRAINT
The shipment is skipped in the injectedSolutionConstraint .
Experimental: This field's behavior or existence may change in future.
VEHICLE_ROUTE_IS_FULLY_SEQUENCE_CONSTRAINED
The vehicle route relaxation specified in the injectedSolutionConstraint doesn't permit any visit to be inserted.
Experimental: This field's behavior or existence may change in future.
ZERO_PENALTY_COST
The shipment has a zero penalty cost. While this can be useful as an advanced modelling choice, it may also explain after the fact why a shipment was skipped.
Experimental: This field's behavior or existence may change in future.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]

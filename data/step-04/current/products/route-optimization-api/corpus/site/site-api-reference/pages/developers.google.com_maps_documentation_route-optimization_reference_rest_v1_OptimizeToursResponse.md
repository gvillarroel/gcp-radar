---
title: "OptimizeToursResponse \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse
  title: "OptimizeToursResponse \_|\_ Route Optimization API \_|\_ Google for Developers"
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
OptimizeToursResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The OptimizeToursResponse provides routes for each vehicle, skipped shipments, and the solution's overall cost after solving a tour optimization problem.
It includes details such as the request label, validation errors or warnings, and solution metrics like duration, distance, and usage.
Validation errors and warnings encountered during the optimization process are described, offering insights into potential issues with the request.
FieldReference objects pinpoint specific fields within the request that caused validation errors, allowing for targeted debugging.
Metrics provide an overview of the solution's performance, including aggregated route metrics, vehicle usage, timings, and a breakdown of costs.
JSON representation
OptimizeToursValidationError
JSON representation
FieldReference
JSON representation
Metrics
JSON representation
Response after solving a tour optimization problem containing the routes followed by each vehicle, the shipments which have been skipped and the overall cost of the solution.
JSON representation
{
"routes" : [
{
object ( ShipmentRoute )
}
] ,
"requestLabel" : string ,
"skippedShipments" : [
{
object ( SkippedShipment )
}
] ,
"validationErrors" : [
{
object ( OptimizeToursValidationError )
}
] ,
"processedRequest" : {
object ( OptimizeToursRequest )
} ,
"metrics" : {
object ( Metrics )
}
}
Fields
routes[]
object ( ShipmentRoute )
Routes computed for each vehicle; the i-th route corresponds to the i-th vehicle in the model.
requestLabel
string
Copy of the OptimizeToursRequest.label , if a label was specified in the request.
skippedShipments[]
object ( SkippedShipment )
The list of all shipments skipped.
validationErrors[]
object ( OptimizeToursValidationError )
List of all the validation errors that we were able to detect independently. See the "MULTIPLE ERRORS" explanation for the OptimizeToursValidationError message. Instead of errors, this will include warnings in the case solvingMode is DEFAULT_SOLVE .
processedRequest
object ( OptimizeToursRequest )
In some cases we modify the incoming request before solving it, i.e. adding costs. If solvingMode == TRANSFORM_AND_RETURN_REQUEST, the modified request is returned here.
Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/objectives/make-request for more details.
metrics
object ( Metrics )
Duration, distance and usage metrics for this solution.
OptimizeToursValidationError
Describes an error or warning encountered when validating an OptimizeToursRequest .
JSON representation
{
"code" : integer ,
"displayName" : string ,
"fields" : [
{
object ( FieldReference )
}
] ,
"errorMessage" : string ,
"offendingValues" : string
}
Fields
code
integer
A validation error is defined by the pair ( code , displayName ) which are always present.
The fields following this section provide more context about the error.
MULTIPLE ERRORS : When there are multiple errors, the validation process tries to output several of them. Much like a compiler, this is an imperfect process. Some validation errors will be "fatal", meaning that they stop the entire validation process. This is the case for displayName="UNSPECIFIED" errors, among others. Some errors may cause the validation process to skip other errors.
STABILITY : code and displayName should be very stable. But new codes and display names may appear over time, which may cause a given (invalid) request to yield a different ( code , displayName ) pair because the new error hid the old one. For example, see "MULTIPLE ERRORS".
displayName
string
The error display name.
fields[]
object ( FieldReference )
An error context may involve 0, 1 (most of the time) or more fields. For example, referring to vehicle #4 and shipment #2's first pickup can be done as follows:
fields { name: "vehicles" index: 4}
fields { name: "shipments" index: 2 subField {name: "pickups" index: 0} }
Note, however, that the cardinality of fields should not change for a given error code.
errorMessage
string
Human-readable string describing the error. There is a 1:1 mapping between code and errorMessage (when code != "UNSPECIFIED").
STABILITY : Not stable: the error message associated to a given code may change (hopefully to clarify it) over time. Please rely on the displayName and code instead.
offendingValues
string
May contain the value(s) of the field(s). This is not always available. You should absolutely not rely on it and use it only for manual model debugging.
FieldReference
Specifies a context for the validation error. A FieldReference always refers to a given field in this file and follows the same hierarchical structure. For example, we may specify element #2 of startTimeWindows of vehicle #5 using:
name: "vehicles" index: 5 subField { name: "endTimeWindows" index: 2 }
We however omit top-level entities such as OptimizeToursRequest or ShipmentModel to avoid crowding the message.
JSON representation
{
"name" : string ,
"subField" : {
object ( FieldReference )
} ,
// Union field index_or_key can be only one of the following:
"index" : integer ,
"key" : string
// End of list of possible types for union field index_or_key .
}
Fields
name
string
Name of the field, e.g., "vehicles".
subField
object ( FieldReference )
Recursively nested sub-field, if needed.
Union field index_or_key .
index_or_key can be only one of the following:
index
integer
Index of the field if repeated.
key
string
Key if the field is a map.
Metrics
Overall metrics, aggregated over all routes.
JSON representation
{
"aggregatedRouteMetrics" : {
object ( AggregatedMetrics )
} ,
"skippedMandatoryShipmentCount" : integer ,
"usedVehicleCount" : integer ,
"earliestVehicleStartTime" : string ,
"latestVehicleEndTime" : string ,
"costs" : {
string : number ,
...
} ,
"totalCost" : number
}
Fields
aggregatedRouteMetrics
object ( AggregatedMetrics )
Aggregated over the routes. Each metric is the sum (or max, for loads) over all ShipmentRoute.metrics fields of the same name.
skippedMandatoryShipmentCount
integer
Number of mandatory shipments skipped.
usedVehicleCount
integer
Number of vehicles used. Note: if a vehicle route is empty and Vehicle.used_if_route_is_empty is true, the vehicle is considered used.
earliestVehicleStartTime
string ( Timestamp format)
The earliest start time for a used vehicle, computed as the minimum over all used vehicles of ShipmentRoute.vehicle_start_time .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
latestVehicleEndTime
string ( Timestamp format)
The latest end time for a used vehicle, computed as the maximum over all used vehicles of ShipmentRoute.vehicle_end_time .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
costs
map (key: string, value: number)
Cost of the solution, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole solution. In other words, costs["model.shipments.pickups.cost"] is the sum of all pickup costs over the solution. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.
totalCost
number
Total cost of the solution. The sum of all values in the costs map.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-10 UTC."],[],["The core content details the structure and information of a tour optimization solution. Key data includes `routes` for each vehicle, `skippedShipments`, `validationErrors` encountered, and overall `metrics`. `OptimizeToursValidationError` specifies validation issues with codes, display names, and relevant fields. `FieldReference` pinpoints error locations within the data. `Metrics` provides aggregated data like vehicle usage, timestamps, skipped shipments count, and cost breakdowns. This response summarizes the actions performed by each vehicle and the final cost of the solution.\n"]]

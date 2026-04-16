---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:15.362Z"
product_name: "Route Optimization API"
product_slug: "route-optimization-api"
feature_name: "Route tokens"
feature_slug: "route-tokens"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute"
  - "https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel"
  - "https://developers.google.com/maps/documentation/route-optimization/reference/rest"
  - "https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse"
keywords:
  - "route"
  - "tokens"
  - "the"
  - "optimization"
  - "api"
  - "can"
  - "generate"
  - "that"
---

# Route tokens

Product: Route Optimization API
Coverage: MEDIUM

## Step 02 Summary

The Route Optimization API can generate route tokens that can be passed to the Navigation SDK to guide vehicle routing.

## Extended Definition

The Route Optimization API can generate route tokens that can be passed to the Navigation SDK to guide vehicle routing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute)
- [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel)
- [https://developers.google.com/maps/documentation/route-optimization/reference/rest](https://developers.google.com/maps/documentation/route-optimization/reference/rest)
- [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse)

## Supporting Pages

### ShipmentRoute \_|\_ Route Optimization API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentRoute)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- An opaque token that can be passed to Navigation SDK to reconstruct the route during navigation, and, in the event of rerouting, honor the original intention when the route was created.
- If this field is empty, the vehicle is considered as unused. transitions[] object ( Transition ) Ordered list of transitions for the route. hasTrafficInfeasibilities boolean When OptimizeToursRequest.consider road traffic , is set to true, this field indicates that inconsistencies in route timings are predicted using traffic-based travel duration estimates.
- This field is only populated if populateTransitionPolylines is set to true. vehicleLoads map (key: string, value: object ( VehicleLoad )) Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load limits , or that have non-zero Shipment.load demands on some shipment performed on this route.
- JSON representation Visit JSON representation Transition JSON representation EncodedPolyline JSON representation Break JSON representation VehicleFullness JSON representation A vehicle's route can be decomposed, along the time axis, like this (we assume there are n visits): T[2], Transition Visit #0 V[2], #0 aka T[1] V[1] ...

### ShipmentModel \_|\_ Route Optimization API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/ShipmentModel)
- Source ID: `site-api-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation Shipment JSON representation VisitRequest JSON representation LatLng JSON representation Waypoint JSON representation Location JSON representation TimeWindow JSON representation Vehicle JSON representation TravelMode RouteModifiers JSON representation UnloadingPolicy LoadLimit JSON representation Interval JSON representation LoadCost JSON representation DurationLimit JSON representation DistanceLimit JSON representation BreakRule JSON representation BreakRequest JSON representation FrequencyConstraint JSON representation Objective JSON representation Type DurationDistanceMatrix JSON representation Row JSON representation TransitionAttributes JSON representation ShipmentTypeIncompatibility JSON representation IncompatibilityMode ShipmentTypeRequirement JSON representation RequirementMode PrecedenceRule JSON representation A shipment model contains a set of shipments which must be performed by a set of vehicles, while minimizing the overall cost, which is the sum of: the cost of routing the vehicles (sum of cost per total time, cost per travel time, and fixed cost over all vehicles). the unperformed shipment penalties. the cost of the global duration of the shipments JSON representation { "shipments" : [ { object ( Shipment ) } ] , "vehicles" : [ { object ( Vehicle ) } ] , "objectives" : [ { object ( Objective ) } ] , "globalStartTime" : string , "globalEndTime" : string , "globalDurationCostPerHour" : number , "durationDistanceMatrices" : [ { object ( DurationDistanceMatrix ) } ] , "durationDistanceMatrixSrcTags" : [ string ] , "durationDistanceMatrixDstTags" : [ string ] , "transitionAttributes" : [ { object ( TransitionAttributes ) } ] , "shipmentTypeIncompatibilities" : [ { object ( ShipmentTypeIncompatibility ) } ] , "shipmentTypeRequirements" : [ { object ( ShipmentTypeRequirement ) } ] , "precedenceRules" : [ { object ( PrecedenceRule ) } ] , "maxActiveVehicles" : integer } Fields shipments[] object ( Shipment ) Set of shipments which must be performed in the model. vehicles[] object ( Vehicle ) Set of vehicles which can be used to perform visits. objectives[] object ( Objective ) The set of objectives for this model, that we will transform into costs.
- Experimental: See https://developers.google.com/maps/tt/route-optimization/experimental/objectives/make-request for more details. globalStartTime string ( Timestamp format) Global start and end time of the model: no times outside of this range can be considered valid.
- When you set this value, the route will pass through the location so that the vehicle can stop at the side of road that the location is biased towards from the center of the road.
- This can be used to limit the number of routes in the case where there are fewer drivers than vehicles and that the fleet of vehicles is heterogeneous.

### Route Optimization API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/route-optimization/reference/rest](https://developers.google.com/maps/documentation/route-optimization/reference/rest)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://routeoptimization.googleapis.com REST Resource: v1.operations Methods cancel POST /v1/{name=operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=operations/ } Deletes a long-running operation. list GET /v1/{name=operations} Lists operations that match the specified filter in the request.
- REST Resource: v1.operations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.operations Service: routeoptimization.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-19 UTC."],[],["The Route Optimization API provides four REST resources: v1.operations, v1.projects, v1.projects.locations, and v1.projects.locations.operations.
- Page Summary outlined flag The Route Optimization API provides methods for optimizing vehicle routes, minimizing overall cost, and managing operations.

### OptimizeToursResponse \_|\_ Route Optimization API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse](https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/OptimizeToursResponse)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "routes" : [ { object ( ShipmentRoute ) } ] , "requestLabel" : string , "skippedShipments" : [ { object ( SkippedShipment ) } ] , "validationErrors" : [ { object ( OptimizeToursValidationError ) } ] , "processedRequest" : { object ( OptimizeToursRequest ) } , "metrics" : { object ( Metrics ) } } Fields routes[] object ( ShipmentRoute ) Routes computed for each vehicle; the i-th route corresponds to the i-th vehicle in the model. requestLabel string Copy of the OptimizeToursRequest.label , if a label was specified in the request. skippedShipments[] object ( SkippedShipment ) The list of all shipments skipped. validationErrors[] object ( OptimizeToursValidationError ) List of all the validation errors that we were able to detect independently.
- For example, referring to vehicle #4 and shipment #2's first pickup can be done as follows: fields { name: "vehicles" index: 4} fields { name: "shipments" index: 2 subField {name: "pickups" index: 0} } Note, however, that the cardinality of fields should not change for a given error code. errorMessage string Human-readable string describing the error.
- JSON representation OptimizeToursValidationError JSON representation FieldReference JSON representation Metrics JSON representation Response after solving a tour optimization problem containing the routes followed by each vehicle, the shipments which have been skipped and the overall cost of the solution.
- Home Products Google Maps Platform Documentation Route Optimization API Reference Send feedback OptimizeToursResponse Stay organized with collections Save and categorize content based on your preferences.


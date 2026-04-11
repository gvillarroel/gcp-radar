---
title: "Migrate from Directions API (Legacy) or Distance Matrix API (Legacy) \_|\_\
  \ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/migrate-routes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/migrate-routes
  title: "Migrate from Directions API (Legacy) or Distance Matrix API (Legacy) \_\
    |\_ Routes API \_|\_ Google for Developers"
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
Migrate from Directions API (Legacy) or Distance Matrix API (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to migrate from the Directions API or Distance Matrix API to the Routes API.
The Routes API uses an HTTPS POST request with parameters in the request body or headers, instead of URL parameters in a GET request.
Several parameters have been renamed, modified, or removed in the Routes API; consult the provided tables to update your code accordingly.
Waypoints should be specified using latitude/longitude coordinates instead of encoded polylines.
Billing considerations suggest migrating to the new API at the beginning of the month to optimize costs.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This guide describes how to migrate apps that use either
Directions API or Distance Matrix API to using the
Routes API. For details on the Routes API, see product
overview .
Note: If you were using the Preview release of Routes API, see
Migrate from Preview to GA
for information on migrating to the GA release.
Billing best practices for migration
warning_amber
This guidance applies if your API usage is high enough to
move into second-tier pricing. When migrating to a newer version of an API,
you're also being billed for a different SKU. To avoid increased costs during the month of
your transition, we recommend switching to the new APIs in production as close to the
beginning of the month as possible. This will ensure that you reach the most cost-effective
monthly pricing tiers during the migration month. For information about pricing tiers,
see the pricing page
and the pricing FAQ .
Update the REST API endpoints
Update your code to use the new Routes API endpoints
From Directions API
Directions API
https://maps.googleapis.com/maps/api/directions/ outputFormat ? parameters
Routes API
https://routes.googleapis.com/directions/v2:computeRoutes
From Distance Matrix API
Distance Matrix API
https://maps.googleapis.com/maps/api/distancematrix/ outputFormat ? parameters
Routes API
https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix
Convert URL parameters to use an HTTPS request body
With Directions API and Distance Matrix API, you
pass configuration properties as URL parameters to an HTTP GET request. For
example, for the Directions API:
https://maps.googleapis.com/maps/api/directions/ outputFormat ? parameters
With the Routes API, you pass parameters in a request body or in headers
as part of an HTTP POST request. For examples, see:
Compute a route
Compute a route matrix
Convert polyline-encoded waypoints to location waypoints
Specifying waypoints as encoded polylines is available in the
Directions API (Legacy) to fit a large
number of waypoints in the URL limit of 16384 characters. This feature is not
necessary in the Routes API because waypoints can be transmitted in the
REST or gRPC request body as latitude/longitude coordinates. For examples,
see the
HTTP Example
in the Compute a route matrix document, or
Define an intermediate waypoint
in the Specify intermediate waypoints document.
Convert parameters
The following tables lists parameters in the
Directions API and Distance Matrix API that have
been renamed or modified, or parameters that are not supported in the GA
release. Update your code if you are using any of these parameters.
Request parameter conversions
Directions or Distance matrix parameter
Routes API parameter
Notes
alternatives
computeAlternativeRoutes
arrival_time
arrivalTime
Available in TRANSIT mode only, and not at the same
time as departureTime .
avoid
routeModifiers
departure_time
departureTime
Cannot be used at the same time as arrivalTime .
language
languageCode
Supported for Compute Routes only.
mode
travelMode
Added support for TWO_WHEELER and
TRANSIT .
region
regionCode
traffic_model
trafficModel
Learn more
transit_mode
"travelMode": "TRANSIT"
In the Directions API (Legacy), in a transit route, each
segment of a trip with the same travel mode (for example, Walk or
Transit) is considered to be one step, and individual directions for
that travel mode are in substeps. In contrast, In the
Routes API, steps are consistently one navigation instruction
across all types of travel. So each navigation instruction is a step.
For multiple steps in one travel mode, the Routes API provides
metadata that contains a summary of the steps for that travel mode, in
`stepsOverview`. To request this metadata, use the
`routes.legs.stepsOverview` field mask.
Learn more .
transit_routing_preference
transitRoutingPreference
Learn more
units
units
Learn more
waypoints
intermediates
Removed support for encoded polylines .
optimize=true for waypoints
"optimizeWaypointOrder": "true"
Learn more
Response parameter conversions
Directions or Distance matrix parameter
Routes API parameter
Notes
copyrights
Not included in the response. You must include the following
statement when displaying the results to your users:
Powered by Google, © YEAR Google
For example:
Powered by Google, ©2022 Google
distance
distanceMeters
Distance is only available in meters.
duration_in_traffic
duration
Removed in the Routes API, use duration .
status
Not available. Use the HTTP response codes for
errors reported by the API. See Handle request errors
for more information.
geocoded_waypoints
geocoding_results
Supported for Compute Routes only. Contains geocoding response info only for waypoints specified as addresses.
bounds
viewport
legs.end_address
Not available.
legs.start_address
Not available.
overview_polyline
polyline
summary
description
waypoint_order
optimizedIntermediateWaypointIndex
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To migrate from the Directions API or Distance Matrix API to the Routes API, update your code to use the new `https://routes.googleapis.com/` endpoints for `computeRoutes` and `computeRouteMatrix`. Change `HTTP GET` requests with URL parameters to `HTTP POST` requests with parameters in the request body. Convert polyline-encoded waypoints to latitude/longitude coordinates. Modify renamed, changed, or unsupported parameters according to the provided conversion tables, ensuring adherence to new requirements and features. If high usage is expected, migrate at the start of the month for billing benefits.\n"]]

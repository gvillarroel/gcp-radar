---
title: "TransitPreferences \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TransitPreferences
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TransitPreferences
  title: "TransitPreferences \_|\_ Routes API \_|\_ Google for Developers"
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
TransitPreferences
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
TransitPreferences influence the TRANSIT based routes that are returned.
You can specify transit travel modes such as BUS , SUBWAY , TRAIN , LIGHT_RAIL , and RAIL or use the default of all supported modes.
TransitPreferences also allow you to indicate preferences for LESS_WALKING or FEWER_TRANSFERS when calculating a route.
JSON representation
TransitTravelMode
TransitRoutingPreference
Preferences for TRANSIT based routes that influence the route that is returned.
JSON representation
{
"allowedTravelModes" : [
enum ( TransitTravelMode )
] ,
"routingPreference" : enum ( TransitRoutingPreference )
}
Fields
allowedTravelModes[]
enum ( TransitTravelMode )
A set of travel modes to use when getting a TRANSIT route. Defaults to all supported modes of travel.
routingPreference
enum ( TransitRoutingPreference )
A routing preference that, when specified, influences the TRANSIT route returned.
TransitTravelMode
A set of values used to specify the mode of transit.
Enums
TRANSIT_TRAVEL_MODE_UNSPECIFIED
No transit travel mode specified.
BUS
Travel by bus.
SUBWAY
Travel by subway.
TRAIN
Travel by train.
LIGHT_RAIL
Travel by light rail or tram.
RAIL
Travel by rail. This is equivalent to a combination of SUBWAY , TRAIN , and LIGHT_RAIL .
TransitRoutingPreference
Specifies routing preferences for transit routes.
Enums
TRANSIT_ROUTING_PREFERENCE_UNSPECIFIED
No preference specified.
LESS_WALKING
Indicates that the calculated route should prefer limited amounts of walking.
FEWER_TRANSFERS
Indicates that the calculated route should prefer a limited number of transfers.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The content outlines preferences for `TRANSIT` routes, using a JSON structure with `allowedTravelModes` and `routingPreference`. `allowedTravelModes` specifies transit modes like `BUS`, `SUBWAY`, `TRAIN`, `LIGHT_RAIL`, or `RAIL`. `routingPreference` allows choosing between `LESS_WALKING` or `FEWER_TRANSFERS`, to influence the transit route, and it allows for selecting no preferences. All available preferences have a corresponding unspecified value. The default `allowedTravelModes` is all available options.\n"]]

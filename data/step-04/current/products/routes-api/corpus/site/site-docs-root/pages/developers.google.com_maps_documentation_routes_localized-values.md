---
title: "Request localized values \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/localized-values
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/localized-values
  title: "Request localized values \_|\_ Routes API \_|\_ Google for Developers"
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
Request localized values
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Localized response values provide localized text for trip distance, duration, and unit system in Routes Preferred.
You can request localized values using a field mask and specify language and unit system or utilize the API's inferred values.
If unspecified, the API infers language and units based on the origin waypoint for ComputeRoutes or defaults to 'en-US' and METRIC for ComputeRouteMatrix .
To receive localized values, include routes.localized_values in your field mask and optionally specify languageCode and units in your request.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Localized response values are an additional response field that provides
localized text for returned parameter values. Localized text is provided for
trip duration, distance, and unit system (metric or imperial). You request
localized values using a field mask, and can either specify the language and
unit system or use the values inferred by the API. For details, see
LocalizedValues .
For example, if you specify a language code for German (de) and imperial
units, you get a value for distanceMeters of 49889.7,
but also localized text providing that distance measurement in German and
imperial units, so "31 Meile."
Here is an example of what you would see for localized values:
{ "localized_values":
{
"distance": { "text": "31,0 Meile/n" },
"duration": { "text": 38 Minuten}.
"static_duration": { "text": 36 Minuten}.
}
}
Note: You get two values for the expected duration:
duration uses the traffic model you specify, and
static_duration does not take traffic into account. So,
if your requested traffic model is TRAFFIC_UNAWARE these times are
identical.
If you don't specify the language or unit system, the API infers the language
and units as follows:
The ComputeRoutes method infers the location and distance
units from the origin waypoint. So for a routing request in the US, the API
infers en-US language and IMPERIAL units.
The ComputeRouteMatrix method defaults to 'en-US' language
and METRIC units.
To request localized values
To include localized values in the response, you need to do the following:
Request localized values in your field mask. For example:
REST
-H X-Goog-FieldMask: routes.localizedValues
RPC
const ( fieldMask = "routes.localizedValues" )
If you want the localized values in a specific language or unit system,
specify the language code and unit system:
"languageCode": "language_code",
"units": "METRIC | IMPERIAL",
For example, this code snippet specifies the language as German (de), and
METRIC units:
"languageCode": "de",
"units": "METRIC",
For more information, see
Language Support .
Example request
curl -X POST -d '{
"origin": { "location": {
"latLng": { "latitude": 37.7873146, "longitude": -122.4159327 } }
},
"destination": { "location": {
"latLng": { "latitude": 37.7621008, "longitude": -122.4382503 } }
},
"travelMode": "DRIVE",
"computeAlternativeRoutes": true,
"languageCode": "de",
"units": "METRIC"
}' \
-H 'Content-Type: application/json' \
-H 'X-Goog-Api-Key: YOUR_API_KEY ' \
-H 'X-Goog-FieldMask: routes.localizedValues' \
'https://routes.googleapis.com/directions/v2:computeRoutes'
Example response
The response returns localized values for the distance , duration , and
staticDuration fields:
{
"localizedValues": {
"distance": {
"text": "15,5 km"
},
"duration": {
"text": "16 Minuten"
},
"staticDuration": {
"text": "16 Minuten"
}
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Localized response values provide translated text for trip distance, duration, and unit system. To request them, include `routes.localized_values` in your field mask. You can specify the desired language and unit system (metric or imperial) via `languageCode` and `units`. If unspecified, the API infers them from the origin waypoint (ComputeRoutes) or defaults to 'en-US' and METRIC (ComputeRouteMatrix). The response includes localized text for distance, `duration`(with traffic model) and `staticDuration`(without traffic model).\n"]]

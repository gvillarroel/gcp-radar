---
title: "FallbackInfo \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/FallbackInfo
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/FallbackInfo
  title: "FallbackInfo \_|\_ Routes API \_|\_ Google for Developers"
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
FallbackInfo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
FallbackInfo provides details on why and how a fallback routing result was used if the server deviated from the preferred routing mode.
This information includes the actual routing mode used (FallbackRoutingMode) and the reason for the fallback (FallbackReason).
FallbackRoutingMode specifies whether traffic conditions were considered in the fallback route (TRAFFIC_AWARE or TRAFFIC_UNAWARE).
FallbackReason clarifies if the fallback was due to a server error or exceeding the allowed calculation time.
JSON representation
FallbackRoutingMode
FallbackReason
Information related to how and why a fallback result was used. If this field is set, then it means the server used a different routing mode from your preferred mode as fallback.
JSON representation
{
"routingMode" : enum ( FallbackRoutingMode ) ,
"reason" : enum ( FallbackReason )
}
Fields
routingMode
enum ( FallbackRoutingMode )
Routing mode used for the response. If fallback was triggered, the mode may be different from routing preference set in the original client request.
reason
enum ( FallbackReason )
The reason why fallback response was used instead of the original response. This field is only populated when the fallback mode is triggered and the fallback response is returned.
FallbackRoutingMode
Actual routing mode used for returned fallback response.
Enums
FALLBACK_ROUTING_MODE_UNSPECIFIED
Not used.
FALLBACK_TRAFFIC_UNAWARE
Indicates the TRAFFIC_UNAWARE RoutingPreference was used to compute the response.
FALLBACK_TRAFFIC_AWARE
Indicates the TRAFFIC_AWARE RoutingPreference was used to compute the response.
FallbackReason
Reasons for using fallback response.
Enums
FALLBACK_REASON_UNSPECIFIED
No fallback reason specified.
SERVER_ERROR
A server error happened while calculating routes with your preferred routing mode, but we were able to return a result calculated by an alternative mode.
LATENCY_EXCEEDED
We were not able to finish the calculation with your preferred routing mode on time, but we were able to return a result calculated by an alternative mode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The server may use a fallback routing mode if the preferred mode fails. This fallback information is provided in JSON format, including the `routingMode` used and the `reason` for the fallback. The `routingMode` can be `FALLBACK_TRAFFIC_UNAWARE` or `FALLBACK_TRAFFIC_AWARE`. The `reason` can be `SERVER_ERROR` (due to an internal error) or `LATENCY_EXCEEDED` (calculation exceeded the allowed time). Specific enumerations define the exact fallback mode and reason used.\n"]]

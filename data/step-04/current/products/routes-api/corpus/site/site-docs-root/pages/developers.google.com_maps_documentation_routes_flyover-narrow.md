---
title: "Request flyovers and narrow roads \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/flyover-narrow
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/flyover-narrow
  title: "Request flyovers and narrow roads \_|\_ Routes API \_|\_ Google for Developers"
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
Request flyovers and narrow roads
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This feature, which includes flyover and narrow road information, is currently in an experimental, pre-GA phase, and as such, may have limited support with potential compatibility issues.
The Routes API can return data regarding flyovers (overpasses and bridges) and narrow roads, although no visual indicators are provided on the map itself, enabling developers to implement their own alerts for end-users.
This feature is exclusively supported in India, and is specifically for DRIVE and TWO-WHEELER travel modes when requesting flyover info and DRIVE only when requesting narrow road info.
Requests for flyover or narrow road data must include specific parameters like "extraComputations": ["FLYOVER_INFO_ON_POLYLINE"] or "extraComputations": ["NARROW_ROAD_INFO_ON_POLYLINE"] respectively, and avoid the optimizeWaypointOrder parameter.
Use of this experimental feature does not incur extra charges; users will be billed according to their standard Routes API usage.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This product or feature is Experimental (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage descriptions .
Compute Routes can return information about the
following route features, when known:
Flyovers : Information about elevated road segments, such as overpasses and
bridges.
Narrow roads : Information about roads that are deemed to be more narrow
than normal.
No visual indicators are provided on the map.
Supported countries: India only
Why use it
Use the flyover and narrow route options to notify your users of these features.
For example, provide alerts or visual indicators on the maps so that drivers
using your app can readily anticipate these routes and adjust their driving
accordingly.
For instructions, see the following sections:
Request flyover information
Request narrow road information
Request flyover information
Your request must meet the following criteria:
Request a route in India.
Set travelMode to DRIVE or TWO-WHEELER .
Include "extraComputations": ["FLYOVER_INFO_ON_POLYLINE"] .
Include a field mask for these fields:
routes.polyline_details.flyover_info
routes.polyline
Don't include the optimizeWaypointOrder parameter.
Note: Any request that doesn't meet these criteria returns an error.
For details, see
PolylineDetails.FlyoverInfo .
Example request: Flyover information
curl - X POST - d ' {
"origin" : {
"location" : {
"latLng" : {
"latitude" : 28.57580734159006 ,
"longitude" : 77.02719067373043
}
}
},
"destination" : {
"location" : {
"latLng" : {
"latitude" : 28.595737365438477 ,
"longitude" : 77.16870453065245
}
}
},
"travelMode" : "DRIVE" ,
"extraComputations" : [ "FLYOVER_INFO_ON_POLYLINE" ]
} \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes .polyli ne _de ta ils. fl yover , rou tes .polyli ne ' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
Example response: Flyover information
{
"routes" : [{
"polyline" : {
"encodedPolyline" : "selmD}jcuM?oBcDAqEF}DCOOZuCfAwJFMJM\\_Cd@mEv@gFHQF_C?eIGe@_@{@g@u@MY@Wz@cCp@}AF_@MeC?kLFy@xZpBxRlAdJj@zCPlBRxPfApP|@`@MVUHQv@iF~@aFfAeEnA_EpAgD`@kAjCeF~FiKPa@NOx@iApAyCtA{C`@wAEg@Ba@Xq@TU`@MZCLY^QPQx@kAn@cAh@s@^YZ]fA{@lAs@bBy@`DiAtDwAdB_ARCP@z@m@dAeAbA_BpAcCd@oAr@eBRe@nEsIjAiBdAuBZw@n@{BTsANi@p@wAJ]h@wCr@oEr@yEvAwI`AuGt@gG`@oEt@wFr@}FpB_N`CiQ`AqGVoAbEcP^_Br@uDr@yEPqA^cEj@iERyCReEf@}GvBkQXwATgC@_@AYK]u@wAGa@IoHFaEFoAXuDVqBdBsLb@qDRuCRaELu@Rs@d@u@lBaC\\o@Tm@VwANcAHmADuCCsAKo@YkAU}@AQ@WHa@iJyTs@uAe@q@c@i@oA_AuAw@kBu@iEwAuDoA_JeDiB}@qAaA]a@u@gAeAoB_CoG}@eCgAoCw@wAsByCe@i@iCmDmAmB}BeDu@aAaHyJ_BwBCEyBaD}AkBu@u@uAy@gBw@yAc@gFoAiKmC}E{@eCk@sF}@YCwDIqDG{Tq@mB@_Ne@k@AoBGkAKaB]{Am@gBkAcAgAcBeCmAwBwAwCmDeGq@yAcAwCmCgJQu@i@gAw@mAaAkA{@u@oAu@eAe@kAa@}GcBEAkDq@aAWkKaBqDq@oMuBuBc@e@Ok@Wm@e@_AaAm@aA[}@a@uAy@aDmCmJSi@cAmDsEyNgAaDcDeKEo@gAkDkD{I_AyCg@qBeAqEU_AgA_D[{@gBoGaDaIqDaIYs@"
},
"polylineDetails" : {
"flyoverInfo" : [{
"flyoverPresence" : "EXISTS" ,
"polylinePointIndex" : {
"startIndex" : 153 ,
"endIndex" : 173
}
}, {
"flyoverPresence" : "EXISTS" ,
"polylinePointIndex" : {
"startIndex" : 190 ,
"endIndex" : 213
}
}]
}
}]
}
Request narrow road information
Your request must meet the following criteria:
Request a route in India
Set travelMode to DRIVE .
Include "extraComputations": ["NARROW_ROAD_INFO_ON_POLYLINE"]
Include a field mask for these fields:
routes.polyline_details.narrow_road_info
routes.polyline .
Don't include the optimizeWaypointOrder parameter.
Note: Any request that doesn't meet these criteria returns an error.
For details, see
PolylineDetails.NarrowRoadInfo .
Example request: Narrow road information
curl - X POST - d ' {
"origin" : {
"location" : {
"latLng" : {
"latitude" : 12.9598336 ,
"longitude" : 80.1659834
}
}
},
"destination" : {
"location" : {
"latLng" : {
"latitude" : 12.9593739 ,
"longitude" : 80.1723585
}
}
},
"travelMode" : "DRIVE" ,
"extraComputations" : [ "NARROW_ROAD_INFO_ON_POLYLINE" ]
} \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : `rou tes .polyli ne _de ta ils. narr ow_road_i nf o` , rou tes .polyli ne ' \
' [ h tt ps : //routes.googleapis.com/directions/v2:computeRoutes](https://routes.googleapis.com/directions/v2:computeRoutes)'
Example response: Narrow roads
{
"routes" : [{
"polyline" : {
"encodedPolyline" : "{ebnA_mhhNqAGGeD?aAFq@Xy@Re@Jm@FmABOHOTQBYWgIBiHBo@j@@d@@"
},
"polylineDetails" : {
"narrowRoadInfo" : [{
"narrowRoadPresence" : "EXISTS" ,
"polylinePointIndex" : {
"startIndex" : 15 ,
"endIndex" : 16
}
}]
}
}]
}
Supported regions
Flyovers and narrow roads are supported in India only.
Billing
Google Maps Platform doesn't charge extra for the use of an experimental
feature. You are charged based on your usage of the API for other
parameters you set.
Learn more about billing
for Routes API Compute Routes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

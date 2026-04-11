---
title: "GcsBucketTraffic \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/GcsBucketTraffic
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/GcsBucketTraffic
  title: "GcsBucketTraffic \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Send feedback
GcsBucketTraffic
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TrafficPath
LocationType
Cloud Storage Bucket Traffic attributes for usage and forecast of egress/ingress bandwidth etc.
JSON representation
{
"trafficPath" : enum ( TrafficPath ) ,
"bucketLocationType" : enum ( LocationType ) ,
"bucketLocation" : string
}
Fields
trafficPath
enum ( TrafficPath )
Optional. Path type for the Cloud Storage bucket traffic.
bucketLocationType
enum ( LocationType )
Optional. Location type of the Cloud Storage bucket.
bucketLocation
string
Optional. Location of the Cloud Storage bucket e.g. us-central1 (single region), us (multi region) and eur4 - europe-north1 and europe-west4 (dual region).
TrafficPath
Path type for the Cloud Storage bucket traffic.
Enums
TRAFFIC_PATH_UNSPECIFIED
Unspecified traffic path.
TRAFFIC_PATH_GOOGLE
Traffic path through Google's network.
TRAFFIC_PATH_INTERNET
Traffic path through the internet.
LocationType
Location type/level of the Cloud Storage bucket.
Enums
LOCATION_TYPE_UNSPECIFIED
Unspecified location type.
LOCATION_TYPE_SINGLE_REGION
Single region location type.
LOCATION_TYPE_DUAL_REGION
Dual region location type.
LOCATION_TYPE_MULTI_REGION
Multi region location type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-06 UTC."],[],[]]

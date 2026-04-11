---
title: "InterceptLocation \_|\_ Network Security Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/InterceptLocation
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/InterceptLocation
  title: "InterceptLocation \_|\_ Network Security Integration \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Network Security Integration
Reference
Send feedback
InterceptLocation
Stay organized with collections
Save and categorize content based on your preferences.
Details about intercept in a specific cloud location.
JSON representation
{
"location" : string ,
"state" : enum ( State )
}
Fields
location
string
Output only. The cloud location, e.g. "us-central1-a" or "asia-south1".
state
enum ( State )
Output only. The current state of the association in this location.
State
The current state of a resource in the location.
Enums
STATE_UNSPECIFIED
State not set (this is not a valid state).
ACTIVE
The resource is ready and in sync in the location.
OUT_OF_SYNC
The resource is out of sync in the location. In most cases, this is a result of a transient issue within the system (e.g. an inaccessible location) and the system is expected to recover automatically.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]

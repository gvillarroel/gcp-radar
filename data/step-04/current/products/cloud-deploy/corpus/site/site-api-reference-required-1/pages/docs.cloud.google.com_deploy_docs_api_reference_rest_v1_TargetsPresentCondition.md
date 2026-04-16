---
title: "TargetsPresentCondition \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/TargetsPresentCondition
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/TargetsPresentCondition
  title: "TargetsPresentCondition \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
TargetsPresentCondition
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TargetsPresentCondition contains information on any Targets referenced in the Delivery Pipeline that do not actually exist.
JSON representation
{
"status" : boolean ,
"missingTargets" : [
string
] ,
"updateTime" : string
}
Fields
status
boolean
True if there aren't any missing Targets.
missingTargets[]
string
The list of Target names that do not exist. For example, projects/{projectId}/locations/{location_name}/targets/{target_name} .
updateTime
string ( Timestamp format)
Last time the condition was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]

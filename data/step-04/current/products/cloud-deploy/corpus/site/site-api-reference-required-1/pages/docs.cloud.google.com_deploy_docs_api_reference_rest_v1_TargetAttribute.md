---
title: "TargetAttribute \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/TargetAttribute
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/TargetAttribute
  title: "TargetAttribute \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
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
TargetAttribute
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Contains criteria for selecting Targets. This could be used to select targets for a Deploy Policy or for an Automation.
JSON representation
{
"id" : string ,
"labels" : {
string : string ,
...
}
}
Fields
id
string
Optional. ID of the Target . The value of this field could be one of the following:
The last segment of a target name
"*", all targets in a location
labels
map (key: string, value: string)
Target labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]

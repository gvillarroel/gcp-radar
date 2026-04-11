---
title: "Polling Long Running Operations \_|\_ Service Infrastructure \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/polling-operations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/polling-operations
  title: "Polling Long Running Operations \_|\_ Service Infrastructure \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Polling Long Running Operations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to programmatically poll the long-running
operation resources returned by methods in
Service Infrastructure APIs that take a substantial amount of time to complete, such
as
service.rollouts.create .
After an operation is done, the done field will be set to true.
Note: While you typically interact with long-running
operations
as a result of calling methods in the Service Management API, the
Service Consumer Management API also provides methods for interacting with long-running
operation resources, such as
operations.get .
To poll an operation, repeatedly invoke the
operations.get
method with a recommended 10 seconds backoff until the operation is done:
# This is an example of getting a pending `Operation` resource.
gcurl https :// servicemanagement . googleapis . com / v1 / operations / rollouts . endpointsapis . appspot . com : 2016 - 07 - 16r2
{
"name" : "operations/rollouts.endpointsapis.appspot.com:2016-07-16r2" ,
"metadata" : {
"@type" : "type.googleapis.com/google.api.servicemanagement.v1.OperationMetadata" ,
"resourceNames" : [
"services/endpointsapis.appspot.com/rollouts/2016-07-16r2"
] ,
"steps" : [
{
"description" : "update Service Controller" ,
"status" : "In_PROGRESS"
}
] ,
"progressPercentage" : 0 ,
"startTime" : "2016-07-16T00:56:55.737Z" ,
}
"response" : {
"@type" : "type.googleapis.com/google.api.servicemanagement.v1.Rollout" ,
"rolloutId" : "2016-07-16r2" ,
"createTime" : "2016-07-16T00:56:55.724Z" ,
"serviceSelectionStrategy" : {
"serviceConfigIds" : [
"2016-07-16r1"
]
} ,
"serviceName" : "endpointsapis.appspot.com"
}
# This is an example of getting a done `Operation` resource.
gcurl https :// servicemanagement . googleapis . com / v1 / operations / rollouts . endpointsapis . appspot . com : 2016 - 07 - 16r2
{
"name" : "operations/rollouts.endpointsapis.appspot.com:2016-07-16r2" ,
"metadata" : {
"@type" : "type.googleapis.com/google.api.servicemanagement.v1.OperationMetadata" ,
"resourceNames" : [
"services/endpointsapis.appspot.com/rollouts/2016-07-16r2"
] ,
"steps" : [
{
"description" : "update Service Controller" ,
"status" : "Done"
}
] ,
"progressPercentage" : 100 ,
"startTime" : "2016-07-16T00:56:55.737Z" ,
}
"done" : true ,
"response" : {
"@type" : "type.googleapis.com/google.api.servicemanagement.v1.Rollout" ,
"rolloutId" : "2016-07-16r2" ,
"createTime" : "2016-07-16T00:56:55.724Z" ,
"serviceSelectionStrategy" : {
"serviceConfigIds" : [
"2016-07-16r1"
]
} ,
"serviceName" : "endpointsapis.appspot.com"
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

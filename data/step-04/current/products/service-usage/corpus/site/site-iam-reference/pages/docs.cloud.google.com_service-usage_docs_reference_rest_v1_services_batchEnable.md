---
title: "Method: services.batchEnable \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/batchEnable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/batchEnable
  title: "Method: services.batchEnable \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Method: services.batchEnable
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the services.enable method instead.
HTTP request
POST https://serviceusage.googleapis.com/v1/{parent=*/*}/services:batchEnable
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Parent to enable services on.
An example name would be: projects/123 where 123 is the project number.
The services.batchEnable method currently only supports projects.
Authorization requires the following IAM permission on the specified resource parent :
serviceusage.services.enable
Request body
The request body contains data with the following structure:
JSON representation
{
"serviceIds" : [
string
]
}
Fields
serviceIds[]
string
The identifiers of the services to enable on the project.
A valid identifier would be: serviceusage.googleapis.com
Enabling services requires that each service is public or is shared with the user enabling the service.
A single request can enable a maximum of 20 services at a time. If more than 20 services are specified, the request will fail, and no state changes will occur.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/service.management
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]

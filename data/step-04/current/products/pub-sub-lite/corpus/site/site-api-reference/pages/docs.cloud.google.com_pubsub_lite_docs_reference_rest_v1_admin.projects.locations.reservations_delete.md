---
title: "Method: admin.projects.locations.reservations.delete \_|\_ Pub/Sub Lite \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations/delete
  title: "Method: admin.projects.locations.reservations.delete \_|\_ Pub/Sub Lite\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Send feedback
Method: admin.projects.locations.reservations.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Deletes the specified reservation.
HTTP request
DELETE https://{endpoint}/v1/admin/{name=projects/*/locations/*/reservations/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the reservation to delete. Structured like: projects/{project_number}/locations/{location}/reservations/{reservationId}
Authorization requires the following IAM permission on the specified resource name :
pubsublite.reservations.delete
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]

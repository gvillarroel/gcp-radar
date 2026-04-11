---
title: "Method: admin.projects.locations.subscriptions.patch \_|\_ Pub/Sub Lite \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.subscriptions/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.subscriptions/patch
  title: "Method: admin.projects.locations.subscriptions.patch \_|\_ Pub/Sub Lite\
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
Method: admin.projects.locations.subscriptions.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Updates properties of the specified subscription.
HTTP request
PATCH https://{endpoint}/v1/admin/{subscription.name=projects/*/locations/*/subscriptions/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
subscription.name
string
The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscriptionId}
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. A mask specifying the subscription fields to change.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Subscription .
Response body
If successful, the response body contains an instance of Subscription .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]

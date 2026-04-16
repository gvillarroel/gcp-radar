---
title: "Method: locations.regionalWebhook \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/locations/regionalWebhook
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/locations/regionalWebhook
  title: "Method: locations.regionalWebhook \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
Method: locations.regionalWebhook
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Try it!
locations.regionalWebhook is called when the API receives a regional GitHub webhook.
HTTP request
POST https://cloudbuild.googleapis.com/v1/{location=locations/*}/regionalWebhook
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
location
string
Required. The location where the webhook should be sent.
Query parameters
Parameters
webhookKey
string
For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
Request body
The request body contains an instance of HttpBody .
Response body
If successful, the response body is empty.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]

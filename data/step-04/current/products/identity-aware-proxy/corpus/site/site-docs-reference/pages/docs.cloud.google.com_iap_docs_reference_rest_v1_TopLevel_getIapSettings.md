---
title: "Method: getIapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIapSettings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIapSettings
  title: "Method: getIapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
Method: getIapSettings
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Gets the IAP settings on a particular IAP protected resource.
HTTP request
GET https://iap.googleapis.com/v1/{name=**}:iapSettings
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name for which to retrieve the settings. Authorization: Requires the getSettings permission for the associated resource.
Authorization requires one or more of the following IAM permissions on the specified resource name :
iap.organizations.getSettings
iap.folders.getSettings
iap.projects.getSettings
iap.web.getSettings
iap.webTypes.getSettings
iap.webServices.getSettings
iap.webServiceVersions.getSettings
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of IapSettings .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the name resource, depending on the resource type:
iap.folders.getSettings
iap.organizations.getSettings
iap.projects.getSettings
iap.web.getSettings
iap.webServices.getSettings
iap.webServiceVersions.getSettings
iap.webTypes.getSettings
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]

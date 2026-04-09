---
title: "Method: organizations.locations.getSettings \_|\_ Advisory Notifications \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations/getSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations/getSettings
  title: "Method: organizations.locations.getSettings \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Reference
Send feedback
Method: organizations.locations.getSettings
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Get notification settings.
HTTP request
GET https://advisorynotifications.googleapis.com/v1/{name=organizations/*/locations/*/settings}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Settings .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
advisorynotifications.settings.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]

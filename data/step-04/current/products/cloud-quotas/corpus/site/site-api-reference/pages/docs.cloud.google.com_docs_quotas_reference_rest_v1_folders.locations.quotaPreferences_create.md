---
title: "Method: folders.locations.quotaPreferences.create \_|\_ Cloud Quotas \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences/create
  title: "Method: folders.locations.quotaPreferences.create \_|\_ Cloud Quotas \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Reference
Send feedback
Method: folders.locations.quotaPreferences.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Creates a new QuotaPreference that declares the desired value for a quota.
HTTP request
POST https://cloudquotas.googleapis.com/v1/{parent=folders/*/locations/*}/quotaPreferences
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Value for parent.
Example: projects/123/locations/global
Query parameters
Parameters
quotaPreferenceId
string
Optional. Id of the requesting object, must be unique under its parent. If client does not set this field, the service will generate one.
ignoreSafetyChecks[]
enum ( QuotaSafetyCheck )
The list of quota safety checks to be ignored.
Request body
The request body contains an instance of QuotaPreference .
Response body
If successful, the response body contains a newly created instance of QuotaPreference .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudquotas.quotas.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]

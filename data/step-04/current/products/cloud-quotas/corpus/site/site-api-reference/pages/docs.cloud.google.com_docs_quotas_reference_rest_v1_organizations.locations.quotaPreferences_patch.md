---
title: "Method: organizations.locations.quotaPreferences.patch \_|\_ Cloud Quotas\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/organizations.locations.quotaPreferences/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/organizations.locations.quotaPreferences/patch
  title: "Method: organizations.locations.quotaPreferences.patch \_|\_ Cloud Quotas\
    \ \_|\_ Google Cloud Documentation"
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
Method: organizations.locations.quotaPreferences.patch
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
Updates the parameters of a single QuotaPreference. It can updates the config in any states, not just the ones pending approval.
HTTP request
PATCH https://cloudquotas.googleapis.com/v1/{quotaPreference.name=organizations/*/locations/*/quotaPreferences/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
quotaPreference.name
string
Required except in the CREATE requests. The resource name of the quota preference. The path that follows /locations must be /global . For example: projects/123/locations/global/quotaPreferences/my-config-for-us-east1
Query parameters
Parameters
updateMask
string ( FieldMask format)
Optional. Field mask is used to specify the fields to be overwritten in the QuotaPreference resource by the update. The fields specified in the updateMask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
allowMissing
boolean
Optional. If set to true, and the quota preference is not found, a new one will be created. In this situation, updateMask is ignored.
validateOnly
boolean
Optional. If set to true, validate the request, but do not actually update. Note that a request being valid does not mean that the request is guaranteed to be fulfilled.
ignoreSafetyChecks[]
enum ( QuotaSafetyCheck )
The list of quota safety checks to be ignored.
Request body
The request body contains an instance of QuotaPreference .
Response body
If successful, the response body contains an instance of QuotaPreference .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudquotas.quotas.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]

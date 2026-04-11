---
title: "Method: providers.entitlements.approvePlanChange \_|\_ Google Cloud Marketplace\
  \ Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approvePlanChange
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approvePlanChange
  title: "Method: providers.entitlements.approvePlanChange \_|\_ Google Cloud Marketplace\
    \ Partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
APIs and Reference
Send feedback
Method: providers.entitlements.approvePlanChange
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state.
This method is invoked by the provider to approve the plan change on the entitlement resource.
HTTP request
POST https://cloudcommerceprocurement.googleapis.com/v1/{name=providers/*/entitlements/*}:approvePlanChange
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the entitlement.
Authorization requires the following IAM permission on the specified resource name :
commerceprocurement.providerEntitlements.approve
Request body
The request body contains data with the following structure:
JSON representation
{
"pendingPlanName" : string
}
Fields
pendingPlanName
string
Required. Name of the pending plan that's being approved.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]

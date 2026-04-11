---
title: "Method: billingAccounts.budgets.patch \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/patch
  title: "Method: billingAccounts.budgets.patch \_|\_ Cloud Billing \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
Method: billingAccounts.budgets.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates a budget and returns the updated budget.
WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
HTTP request
PATCH https://billingbudgets.googleapis.com/v1/{budget.name=billingAccounts/*/budgets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
budget.name
string
Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form billingAccounts/{billingAccountId}/budgets/{budgetId} .
Query parameters
Parameters
updateMask
string ( FieldMask format)
Optional. Indicates which fields in the provided budget to update. Read-only fields (such as name ) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Budget .
Response body
If successful, the response body contains an instance of Budget .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-billing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]

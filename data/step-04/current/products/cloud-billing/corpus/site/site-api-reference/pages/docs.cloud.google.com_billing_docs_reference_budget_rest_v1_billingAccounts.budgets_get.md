---
title: "Method: billingAccounts.budgets.get \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets/get
  title: "Method: billingAccounts.budgets.get \_|\_ Cloud Billing \_|\_ Google Cloud\
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
Method: billingAccounts.budgets.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Returns a budget.
WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
HTTP request
GET https://billingbudgets.googleapis.com/v1/{name=billingAccounts/*/budgets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of budget to get. Values are of the form billingAccounts/{billingAccountId}/budgets/{budgetId} .
Authorization requires the following IAM permission on the specified resource name :
billing.budgets.get
Request body
The request body must be empty.
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

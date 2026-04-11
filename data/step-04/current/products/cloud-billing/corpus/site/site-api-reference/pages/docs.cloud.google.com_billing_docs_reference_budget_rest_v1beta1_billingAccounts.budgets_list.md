---
title: "Method: billingAccounts.budgets.list \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets/list
  title: "Method: billingAccounts.budgets.list \_|\_ Cloud Billing \_|\_ Google Cloud\
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
Method: billingAccounts.budgets.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns a list of budgets for a billing account.
WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
HTTP request
GET https://billingbudgets.googleapis.com/v1beta1/{parent=billingAccounts/*}/budgets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of billing account to list budgets under. Values are of the form billingAccounts/{billingAccountId} .
Authorization requires the following IAM permission on the specified resource parent :
billing.budgets.list
Query parameters
Parameters
scope
string
Optional. Set the scope of the budgets to be returned, in the format of the resource name. The scope of a budget is the cost that it tracks, such as costs for a single project, or the costs for all projects in a folder. Only project scope (in the format of "projects/project-id" or "projects/123") is supported in this field. When this field is set to a project's resource name, the budgets returned are tracking the costs for that project.
pageSize
integer
Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
pageToken
string
Optional. The value returned by the last ListBudgetsResponse which indicates that this is a continuation of a prior budgets.list call, and that the system should return the next page of data.
Request body
The request body must be empty.
Response body
Response for budgets.list
If successful, the response body contains data with the following structure:
JSON representation
{
"budgets" : [
{
object ( Budget )
}
] ,
"nextPageToken" : string
}
Fields
budgets[]
object ( Budget )
List of the budgets owned by the requested billing account.
nextPageToken
string
If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new ListBudgetsRequest .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-billing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]

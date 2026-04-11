---
title: "Method: providers.accounts.get \_|\_ Google Cloud Marketplace Partners \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/get
  title: "Method: providers.accounts.get \_|\_ Google Cloud Marketplace Partners \_\
    |\_ Google Cloud Documentation"
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
Method: providers.accounts.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
AccountView
Gets a requested Account resource.
HTTP request
GET https://cloudcommerceprocurement.googleapis.com/v1/{name=providers/*/accounts/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the account to retrieve.
Authorization requires the following IAM permission on the specified resource name :
commerceprocurement.providerAccounts.get
Query parameters
Parameters
view
enum ( AccountView )
Optional. What information to include in the response.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Account .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
AccountView
Indicates the view of the account.
Enums
ACCOUNT_VIEW_UNSPECIFIED
The default / unset value. For accounts.get and accounts.list , they default to the BASIC view. For accounts.list , it only supports the BASIC view.
ACCOUNT_VIEW_BASIC
Include base account information. This is the default view. All fields from Account are included except for the resellerParentBillingAccount field.
ACCOUNT_VIEW_FULL
Includes all available account information, inclusive of the accounts resellerParentBillingAccount, if it's a resold account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-07 UTC."],[],[]]

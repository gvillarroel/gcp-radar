---
title: "Method: customers.userinvitations.list \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/list
  title: "Method: customers.userinvitations.list \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Identity
Reference
Send feedback
Method: customers.userinvitations.list
Stay organized with collections
Save and categorize content based on your preferences.
Retrieves a list of UserInvitation resources.
Note: New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
HTTP request
GET https://cloudidentity.googleapis.com/v1/{parent=customers/*}/userinvitations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with.
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200.
pageToken
string
Optional. A page token, received from a previous userinvitations.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to ListBooks must match the call that provided the page token.
filter
string
Optional. A query string for filtering UserInvitation results by their current state, in the format: "state=='invited'" .
orderBy
string
Optional. The sort order of the list results.
You can sort the results in descending order based on either email or last update timestamp but not both, using order_by="email desc" . Currently, sorting is supported for update_time asc , update_time desc , email asc , and email desc .
If not specified, results will be returned based on email asc order.
Request body
The request body must be empty.
Response body
Response message for UserInvitation listing request.
If successful, the response body contains data with the following structure:
JSON representation
{
"userInvitations" : [
{
object ( UserInvitation )
}
] ,
"nextPageToken" : string
}
Fields
userInvitations[]
object ( UserInvitation )
The list of UserInvitation resources.
nextPageToken
string
The token for the next page. If not empty, indicates that there may be more UserInvitation resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-identity.userinvitations.readonly
https://www.googleapis.com/auth/cloud-identity.userinvitations
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-16 UTC."],[],[]]

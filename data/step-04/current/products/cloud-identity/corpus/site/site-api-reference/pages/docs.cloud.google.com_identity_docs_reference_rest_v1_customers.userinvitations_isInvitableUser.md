---
title: "Method: customers.userinvitations.isInvitableUser \_|\_ Cloud Identity \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations/isInvitableUser
  title: "Method: customers.userinvitations.isInvitableUser \_|\_ Cloud Identity \_\
    |\_ Google Cloud Documentation"
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
Method: customers.userinvitations.isInvitableUser
Stay organized with collections
Save and categorize content based on your preferences.
Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account).
Eligibility is based on the following criteria:
the email address is a consumer account and it's the primary email address of the account, and
the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain
If both conditions are met, the user is eligible.
Note: This method is not supported for Workspace Essentials customers.
HTTP request
GET https://cloudidentity.googleapis.com/v1/{name=customers/*/userinvitations/*}:isInvitableUser
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. UserInvitation name in the format customers/{customer}/userinvitations/{user_email_address}
Request body
The request body must be empty.
Response body
Response for userinvitations.isInvitableUser RPC.
If successful, the response body contains data with the following structure:
JSON representation
{
"isInvitableUser" : boolean
}
Fields
isInvitableUser
boolean
Returns true if the email address is invitable.
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

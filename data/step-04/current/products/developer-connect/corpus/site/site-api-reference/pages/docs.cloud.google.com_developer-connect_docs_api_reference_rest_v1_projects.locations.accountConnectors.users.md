---
title: "REST Resource: projects.locations.accountConnectors.users \_|\_ Developer\
  \ Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users
  title: "REST Resource: projects.locations.accountConnectors.users \_|\_ Developer\
    \ Connect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Reference
Send feedback
REST Resource: projects.locations.accountConnectors.users
Stay organized with collections
Save and categorize content based on your preferences.
Resource: User
JSON representation
Methods
Resource: User
User represents a user connected to the service providers through a AccountConnector.
JSON representation
{
"name" : string ,
"displayName" : string ,
"createTime" : string ,
"lastTokenRequestTime" : string
}
Fields
name
string
Identifier. Resource name of the user, in the format projects/*/locations/*/accountConnectors/*/users/* .
displayName
string
Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address.
createTime
string ( Timestamp format)
Output only. The timestamp when the user was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastTokenRequestTime
string ( Timestamp format)
Output only. The timestamp when the token was last requested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Methods
delete
Deletes a single User.
deleteSelf
Delete the User based on the user credentials.
fetchAccessToken
Fetches OAuth access token based on end user credentials.
fetchSelf
Fetch the User based on the user credentials.
finishOAuthFlow
Finishes OAuth flow for an account connector.
list
Lists Users in a given project, location, and account_connector.
startOAuthFlow
Starts OAuth flow for an account connector.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]

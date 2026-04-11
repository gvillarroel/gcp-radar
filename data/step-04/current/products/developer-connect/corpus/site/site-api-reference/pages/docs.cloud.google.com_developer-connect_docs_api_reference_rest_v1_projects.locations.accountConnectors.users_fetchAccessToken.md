---
title: "Method: projects.locations.accountConnectors.users.fetchAccessToken \_|\_\
  \ Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/fetchAccessToken
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/fetchAccessToken
  title: "Method: projects.locations.accountConnectors.users.fetchAccessToken \_|\_\
    \ Developer Connect \_|\_ Google Cloud Documentation"
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
Method: projects.locations.accountConnectors.users.fetchAccessToken
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Try it!
Fetches OAuth access token based on end user credentials.
HTTP request
POST https://developerconnect.googleapis.com/v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:fetchAccessToken
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
accountConnector
string
Required. The resource name of the AccountConnector in the format projects/*/locations/*/accountConnectors/* .
Request body
The request body must be empty.
Response body
Message for responding to getting an OAuth access token.
If successful, the response body contains data with the following structure:
JSON representation
{
"token" : string ,
"expirationTime" : string ,
"scopes" : [
string
] ,
"exchangeError" : {
object ( ExchangeError )
}
}
Fields
token
string
The token content.
expirationTime
string ( Timestamp format)
Expiration timestamp. Can be empty if unknown or non-expiring.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
scopes[]
string
The scopes of the access token.
exchangeError
object ( ExchangeError )
The error resulted from exchanging OAuth tokens from the service provider.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the accountConnector resource:
developerconnect.users.fetchAccessToken
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]

---
title: "Method: projects.locations.accountConnectors.users.startOAuthFlow \_|\_ Developer\
  \ Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/startOAuthFlow
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/startOAuthFlow
  title: "Method: projects.locations.accountConnectors.users.startOAuthFlow \_|\_\
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
Method: projects.locations.accountConnectors.users.startOAuthFlow
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
Starts OAuth flow for an account connector.
HTTP request
GET https://developerconnect.googleapis.com/v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:startOAuthFlow
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
accountConnector
string
Required. The resource name of the AccountConnector in the format projects/*/locations/*/accountConnectors/* .
Request body
The request body must be empty.
Response body
Message for responding to starting an OAuth flow.
If successful, the response body contains data with the following structure:
JSON representation
{
"ticket" : string ,
"codeChallenge" : string ,
"codeChallengeMethod" : string ,
"clientId" : string ,
"scopes" : [
string
] ,
"authUri" : string ,
// Union field id can be only one of the following:
"systemProviderId" : enum ( SystemProvider )
// End of list of possible types for union field id .
}
Fields
ticket
string
The ticket to be used for post processing the callback from the service provider.
codeChallenge
string
Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.1
codeChallengeMethod
string
Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.2
clientId
string
The client ID to the OAuth App of the service provider.
scopes[]
string
The list of scopes requested by the application.
authUri
string
The authorization server URL to the OAuth flow of the service provider.
Union field id . The ID of the service provider. id can be only one of the following:
systemProviderId
enum ( SystemProvider )
The ID of the system provider.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the accountConnector resource:
developerconnect.users.startOAuth
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]

---
title: "Method: projects.locations.accountConnectors.users.finishOAuthFlow \_|\_ Developer\
  \ Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/finishOAuthFlow
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.accountConnectors.users/finishOAuthFlow
  title: "Method: projects.locations.accountConnectors.users.finishOAuthFlow \_|\_\
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
Method: projects.locations.accountConnectors.users.finishOAuthFlow
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
OAuthParams
JSON representation
GoogleOAuthParams
JSON representation
Try it!
Finishes OAuth flow for an account connector.
HTTP request
GET https://developerconnect.googleapis.com/v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:finishOAuthFlow
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
accountConnector
string
Required. The resource name of the AccountConnector in the format projects/*/locations/*/accountConnectors/* .
Query parameters
Parameters
Union parameter params . The params returned by OAuth flow redirect. params can be only one of the following:
oauthParams
object ( OAuthParams )
The params returned by non-Google OAuth 2.0 flow redirect.
googleOauthParams
object ( GoogleOAuthParams )
The params returned by Google OAuth flow redirects.
Request body
The request body must be empty.
Response body
Message for responding to finishing an OAuth flow.
If successful, the response body contains data with the following structure:
JSON representation
{
"exchangeError" : {
object ( ExchangeError )
}
}
Fields
exchangeError
object ( ExchangeError )
The error resulted from exchanging OAuth tokens from the service provider.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the accountConnector resource:
developerconnect.users.finishOAuth
For more information, see the IAM documentation .
OAuthParams
The params returned by non-Google OAuth 2.0 flow redirect.
JSON representation
{
"code" : string ,
"ticket" : string
}
Fields
code
string
Required. The code to be used for getting the token from SCM provider.
ticket
string
Required. The ticket to be used for post processing the callback from SCM provider.
GoogleOAuthParams
The params returned by Google OAuth flow redirects.
JSON representation
{
"scopes" : [
string
] ,
"versionInfo" : string ,
"ticket" : string
}
Fields
scopes[]
string
Required. The scopes returned by Google OAuth flow.
versionInfo
string
Optional. The version info returned by Google OAuth flow.
ticket
string
Required. The ticket to be used for post processing the callback from Google OAuth flow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]

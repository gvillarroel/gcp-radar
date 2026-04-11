---
title: "Login \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/ApiAuth/login
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/ApiAuth/login
  title: "Login \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
API Reference
Send feedback
Login
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Present client credentials to obtain an authorization token
Looker API implements the OAuth2 Resource Owner Password Credentials Grant pattern.
The client credentials required for this login must be obtained by creating an API key on a user account
in the Looker Admin console. The API key consists of a public client_id and a private client_secret .
The access token returned by login must be used in the HTTP Authorization header of subsequent
API requests, like this:
Authorization: token 4QDkCyCtZzYgj4C2p2cj3csJH7zqS5RzKs2kTnG4
Replace "4QDkCy..." with the access_token value returned by login .
The word token is a string literal and must be included exactly as shown.
Example of passing credentials in the HTTP request body:
POST HTTP /login
Content-Type: application/x-www-form-urlencoded
client_id=CGc9B7v7J48dQSJvxxx&client_secret=nNVS9cSS3xNpSC9JdsBvvvvv
NOTICE
Pass 'client_id' and 'client_secret' as body parameters.
The ability to use query parameters for client_id and client_secret will be deprecated
before the end of 2026.
Request
POST
/login
Datatype
Description
Request
HTTP Request
query
HTTP Query
Expand HTTP Query definition...
client_id
string
client_id part of API Key.
client_secret
string
client_secret part of API Key.
Response
200: Access token with metadata.
Datatype
Description
(object)
AccessToken
access_token
lock
string
Access Token used for API calls
token_type
lock
string
Type of Token
expires_in
lock
integer
Number of seconds before the token expires
refresh_token
lock
string
Refresh token which can be used to obtain a new access token
400: Bad Request
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
404: Not Found
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
429: Too Many Requests
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]

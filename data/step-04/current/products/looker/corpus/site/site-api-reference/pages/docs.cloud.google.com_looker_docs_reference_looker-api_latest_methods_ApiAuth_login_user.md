---
title: "Login user \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/ApiAuth/login_user
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/ApiAuth/login_user
  title: "Login user \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Login user
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Create an access token that runs as a given user.
This can only be called by an authenticated admin user. It allows that admin to generate a new
authentication token for the user with the given user id. That token can then be used for subsequent
API calls - which are then performed as that target user.
The target user does not need to have a pre-existing API client_id/client_secret pair. And, no such
credentials are created by this call.
This allows for building systems where api user authentication for an arbitrary number of users is done
outside of Looker and funneled through a single 'service account' with admin permissions. Note that a
new access token is generated on each call. If target users are going to be making numerous API
calls in a short period then it is wise to cache this authentication token rather than call this before
each of those API calls.
See 'login' for more detail on the access token and how to use it.
In Looker (Google Cloud core) this call will be denied unless all of the following criteria are met:
The calling user is an API-only Service Account with the Admin role
The target user is an Embed User type
Regular user types can not be impersonated in Looker (Google Cloud core) . If your application needs to call the API for these users, use OAuth authentication instead.
Request
POST
/login/{user_id}
Datatype
Description
Request
HTTP Request
path
HTTP Path
Expand HTTP Path definition...
user_id
string
Id of user.
query
HTTP Query
Expand HTTP Query definition...
associative
boolean
When true (default), API calls using the returned access_token are attributed to the admin user who created the access_token. When false, API activity is attributed to the user the access_token runs as. False requires a looker license.
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
403: Permission Denied
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
Examples
Python
https://github.com/looker-open-source/sdk-codegen/blob/main/python/tests/integration/test_methods.py
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]

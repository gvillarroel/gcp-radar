---
title: "Get All OAuth Client Apps \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_oauth_client_apps
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_oauth_client_apps
  title: "Get All OAuth Client Apps \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Get All OAuth Client Apps
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
List All OAuth Client Apps
Lists all applications registered to use OAuth2 login with this Looker instance, including
enabled and disabled apps.
Results are filtered to include only the apps that the caller (current user)
has permission to see.
Request
GET
/oauth_client_apps
Datatype
Description
Request
HTTP Request
query
HTTP Query
Expand HTTP Query definition...
fields
string
Requested fields.
Response
200: OAuth Client App
Datatype
Description
(array)
OauthClientApp []
can
lock
object
Operations the current user is able to perform on this object
client_guid
lock
string
The globally unique id of this application
redirect_uri
string
The uri with which this application will receive an auth code by browser redirect.
display_name
string
The application's display name
description
string
A description of the application that will be displayed to users
enabled
boolean
When enabled is true, OAuth2 and API requests will be accepted from this app. When false, all requests from this app will be refused. Setting disabled invalidates existing tokens.
group_id
string
If set, only Looker users who are members of this group can use this web app with Looker. If group_id is not set, any Looker user may use this app to access this Looker instance
tokens_invalid_before
lock
string
All auth codes, access tokens, and refresh tokens issued for this application prior to this date-time for ALL USERS will be invalid.
activated_users
UserPublic []
Expand UserPublic definition...
can
lock
object
Operations the current user is able to perform on this object
id
lock
string
Unique Id
first_name
lock
string
First Name
last_name
lock
string
Last Name
display_name
lock
string
Full name for display (available only if both first_name and last_name are set)
avatar_url
lock
string
URL for the avatar image (may be generic)
url
lock
string
Link to get this item
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
Examples
Swift
https://github.com/looker-open-source/sdk-codegen/blob/main/swift/looker/Tests/lookerTests/smokeTests.swift
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]

---
title: "Get All User Login Lockouts \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts
  title: "Get All User Login Lockouts \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Get All User Login Lockouts
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Get currently locked-out users.
Request
GET
/user_login_lockouts
Datatype
Description
Request
HTTP Request
query
HTTP Query
Expand HTTP Query definition...
fields
string
Include only these fields in the response
Response
200: User Login Lockout
Datatype
Description
(array)
UserLoginLockout []
can
lock
object
Operations the current user is able to perform on this object
key
lock
string
Hash of user's client id
auth_type
lock
string
Authentication method for login failures
ip
lock
string
IP address of most recent failed attempt
user_id
lock
string
User ID
remote_id
lock
string
Remote ID of user if using LDAP
full_name
lock
string
User's name
email
lock
string
Email address associated with the user's account
fail_count
lock
integer
Number of failures that triggered the lockout
lockout_at
lock
string
Time when lockout was triggered
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
Kotlin
https://github.com/looker-open-source/sdk-codegen/blob/main/kotlin/src/test/TestMethods.kt
Swift
https://github.com/looker-open-source/sdk-codegen/blob/main/swift/looker/Tests/lookerTests/smokeTests.swift
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]

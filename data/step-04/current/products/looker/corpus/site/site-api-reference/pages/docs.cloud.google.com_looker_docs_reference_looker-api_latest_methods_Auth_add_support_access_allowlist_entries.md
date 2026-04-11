---
title: "Add Support Access Allowlist Users \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries
  title: "Add Support Access Allowlist Users \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Add Support Access Allowlist Users
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Add Support Access Allowlist Users
Adds a list of emails to the Allowlist, using the provided reason
Calls to this endpoint may be denied by Looker (Google Cloud core) .
Request
POST
/support_access/allowlist
Datatype
Description
Request
HTTP Request
body
HTTP Body
Expand HTTP Body definition...
body
SupportAccessAddEntries
Request params.
Expand SupportAccessAddEntries definition...
emails
string[]
reason
string
Reason for adding emails to the Allowlist
Response
200: Support Access Allowlist Entries
Datatype
Description
(array)
SupportAccessAllowlistEntry []
id
lock
string
Unique ID
email
string
Email address
full_name
lock
string
Full name of allowlisted user
reason
string
Reason the Email is included in the Allowlist
created_date
lock
string
Date the Email was added to the Allowlist
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
422: Validation Error
Datatype
Description
(object)
ValidationError
message
lock
string
Error details
errors
ValidationErrorDetail []
Expand ValidationErrorDetail definition...
field
lock
string
Field with error
code
lock
string
Error code
message
lock
string
Error info message
documentation_url
lock
string
Documentation link
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

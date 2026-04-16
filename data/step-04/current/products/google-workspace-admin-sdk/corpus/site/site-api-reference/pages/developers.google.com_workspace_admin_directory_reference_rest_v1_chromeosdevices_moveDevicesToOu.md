---
title: "Method: chromeosdevices.moveDevicesToOu \_|\_ Admin console \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/moveDevicesToOu
  title: "Method: chromeosdevices.moveDevicesToOu \_|\_ Admin console \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
Method: chromeosdevices.moveDevicesToOu
Stay organized with collections
Save and categorize content based on your preferences.
Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
HTTP request
POST https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
customerId
string
Immutable. ID of the Google Workspace account
Query parameters
Parameters
orgUnitPath
string
Full path of the target organizational unit or its ID
Request body
The request body contains an instance of ChromeOsMoveDevicesToOu .
Response body
If successful, the response is a generic HTTP response whose format is defined by the method.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admin.directory.device.chromeos
For more information, see the Authorization guide .
ChromeOsMoveDevicesToOu
JSON representation
{
"deviceIds" : [
string
]
}
Fields
deviceIds[]
string
Chrome OS devices to be moved to OU
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]

---
title: "Method: chromeosdevices.patch \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/patch
  title: "Method: chromeosdevices.patch \_|\_ Admin console \_|\_ Google for Developers"
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
Method: chromeosdevices.patch
Stay organized with collections
Save and categorize content based on your preferences.
Updates a device's updatable properties, such as annotatedUser , annotatedLocation , notes , orgUnitPath , or annotatedAssetId . This method supports patch semantics .
HTTP request
PATCH https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
customerId
string
The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the my_customer alias to represent your account's customerId . The customerId is also returned as part of the Users resource .
deviceId
string
The unique ID of the device. The deviceId s are returned in the response from the chromeosdevices.list method.
Query parameters
Parameters
projection
enum ( Projection )
Determines whether the response contains the full list of properties or only a subset.
Request body
The request body contains an instance of ChromeOsDevice .
Response body
If successful, the response body contains an instance of ChromeOsDevice .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admin.directory.device.chromeos
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]

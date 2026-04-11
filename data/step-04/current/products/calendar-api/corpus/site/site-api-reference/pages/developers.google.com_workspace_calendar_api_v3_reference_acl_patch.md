---
title: "Acl: patch \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/v3/reference/acl/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/v3/reference
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/v3/reference/acl/patch
  title: "Acl: patch \_|\_ Google Calendar \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Calendar
Reference
Send feedback
Acl: patch
Stay organized with collections
Save and categorize content based on your preferences.
Note:
Requires authorization .
Updates an access control rule. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
Try it now .
Request
HTTP request
PATCH https://www.googleapis.com/calendar/v3/calendars/ calendarId /acl/ ruleId
Parameters
Parameter name
Value
Description
Path parameters
calendarId
string
Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the " primary " keyword.
ruleId
string
ACL rule identifier.
Optional query parameters
sendNotifications
boolean
Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
Authorization
This request requires authorization with at least one of the following scopes:
Scope
https://www.googleapis.com/auth/calendar
https://www.googleapis.com/auth/calendar.acls
For more information, see the authentication and authorization page.
Request body
In the request body, supply the relevant portions of an Acl resource , according to the rules of patch semantics.
Response
If successful, this method returns an Acl resource in the response body.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]

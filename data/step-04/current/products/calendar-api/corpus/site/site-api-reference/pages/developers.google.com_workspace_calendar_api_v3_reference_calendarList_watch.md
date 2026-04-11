---
title: "CalendarList: watch \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/watch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/v3/reference
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/watch
  title: "CalendarList: watch \_|\_ Google Calendar \_|\_ Google for Developers"
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
CalendarList: watch
Stay organized with collections
Save and categorize content based on your preferences.
Note:
Requires authorization .
Watch for changes to CalendarList resources.
Request
HTTP request
POST https://www.googleapis.com/calendar/v3/users/me/calendarList/watch
Parameters
Parameter name
Value
Description
Authorization
This request requires authorization with at least one of the following scopes:
Scope
https://www.googleapis.com/auth/calendar.readonly
https://www.googleapis.com/auth/calendar
https://www.googleapis.com/auth/calendar.calendarlist
https://www.googleapis.com/auth/calendar.calendarlist.readonly
For more information, see the authentication and authorization page.
Request body
In the request body, supply data with the following structure:
{
"id" : string ,
"token" : string ,
"type" : string ,
"address" : string ,
"params" : {
"ttl" : string
}
}
Property name
Value
Description
Notes
id
string
A UUID or similar unique string that identifies this channel.
token
string
An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
type
string
The type of delivery mechanism used for this channel. Valid values are " web_hook " (or " webhook "). Both values refer to a channel where Http requests are used to deliver messages.
address
string
The address where notifications are delivered for this channel.
params
object
Additional parameters controlling delivery channel behavior. Optional.
params. ttl
string
The time-to-live in seconds for the notification channel. Default is 604800 seconds.
Response
If successful, this method returns a response body with the following structure:
{
"kind": "api#channel",
"id": string ,
"resourceId": string ,
"resourceUri": string ,
"token": string ,
"expiration": long
}
Property name
Value
Description
Notes
kind
string
Identifies this as a notification channel used to watch for changes to a resource, which is " api#channel ".
id
string
A UUID or similar unique string that identifies this channel.
resourceId
string
An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
resourceUri
string
A version-specific identifier for the watched resource.
token
string
An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
expiration
long
Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]

---
title: "Calendars \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/v3/reference/calendars
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/v3/reference
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/v3/reference/calendars
  title: "Calendars \_|\_ Google Calendar \_|\_ Google for Developers"
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
Calendars
Stay organized with collections
Save and categorize content based on your preferences.
A collection of all existing calendars. See also Calendars vs CalendarList .
For a list of methods for this resource, see the end of this page.
Resource representations
{
"kind": "calendar#calendar",
"etag": etag ,
"id": string ,
"summary": string ,
"description": string ,
"location": string ,
"timeZone": string ,
"dataOwner": string ,
"conferenceProperties": {
"allowedConferenceSolutionTypes": [
string
]
},
"autoAcceptInvitations": boolean
}
Property name
Value
Description
Notes
autoAcceptInvitations
boolean
Whether this calendar automatically accepts invitations. Only valid for resource calendars.
conferenceProperties
nested object
Conferencing properties for this calendar, for example what types of conferences are allowed.
conferenceProperties. allowedConferenceSolutionTypes[]
list
The types of conference solutions that are supported for this calendar. The possible values are: "eventHangout" "eventNamedHangout" "hangoutsMeet"
Optional.
dataOwner
string
The email of the owner of the calendar. Set only for secondary calendars. Read-only.
description
string
Description of the calendar. Optional.
writable
etag
etag
ETag of the resource.
id
string
Identifier of the calendar. To retrieve IDs call the calendarList.list() method.
kind
string
Type of the resource (" calendar#calendar ").
location
string
Geographic location of the calendar as free-form text. Optional.
writable
summary
string
Title of the calendar.
writable
timeZone
string
The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
writable
Methods
clear
Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
delete
Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
get
Returns metadata for a calendar.
insert
Creates a secondary calendar. The authenticated user for the request is made the data owner of the new calendar.
Note: We recommend to authenticate as the intended data owner of the calendar. You can use domain-wide delegation of authority to allow applications to act on behalf of a specific user. Don't use a service account for authentication. If you use a service account for authentication, the service account is the data owner, which can lead to unexpected behavior. For example, if a service account is the data owner, data ownership cannot be transferred.
patch
Updates metadata for a calendar. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
update
Updates metadata for a calendar.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-09 UTC."],[],[]]

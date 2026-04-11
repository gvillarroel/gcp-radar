---
title: "API Reference \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/v3/reference
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/v3/reference
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/v3/reference
  title: "API Reference \_|\_ Google Calendar \_|\_ Google for Developers"
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
API Reference
Stay organized with collections
Save and categorize content based on your preferences.
This API reference is organized by resource type. Each resource type has one or more data representations and one or more methods.
Resource types
Acl
CalendarList
Calendars
Channels
Colors
Events
Freebusy
Settings
Acl
For Acl Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
delete
DELETE /calendars/ calendarId /acl/ ruleId
Deletes an access control rule.
get
GET /calendars/ calendarId /acl/ ruleId
Returns an access control rule.
insert
POST /calendars/ calendarId /acl
Creates an access control rule.
list
GET /calendars/ calendarId /acl
Returns the rules in the access control list for the calendar.
patch
PATCH /calendars/ calendarId /acl/ ruleId
Updates an access control rule. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
update
PUT /calendars/ calendarId /acl/ ruleId
Updates an access control rule.
watch
POST /calendars/ calendarId /acl/watch
Watch for changes to ACL resources.
CalendarList
For CalendarList Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
delete
DELETE /users/me/calendarList/ calendarId
Removes a calendar from the user's calendar list.
get
GET /users/me/calendarList/ calendarId
Returns a calendar from the user's calendar list.
insert
POST /users/me/calendarList
Inserts an existing calendar into the user's calendar list.
list
GET /users/me/calendarList
Returns the calendars on the user's calendar list.
patch
PATCH /users/me/calendarList/ calendarId
Updates an existing calendar on the user's calendar list. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
update
PUT /users/me/calendarList/ calendarId
Updates an existing calendar on the user's calendar list.
watch
POST /users/me/calendarList/watch
Watch for changes to CalendarList resources.
Calendars
For Calendars Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
clear
POST /calendars/ calendarId /clear
Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
delete
DELETE /calendars/ calendarId
Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
get
GET /calendars/ calendarId
Returns metadata for a calendar.
insert
POST /calendars
Creates a secondary calendar. The authenticated user for the request is made the data owner of the new calendar.
Note: We recommend to authenticate as the intended data owner of the calendar. You can use domain-wide delegation of authority to allow applications to act on behalf of a specific user. Don't use a service account for authentication. If you use a service account for authentication, the service account is the data owner, which can lead to unexpected behavior. For example, if a service account is the data owner, data ownership cannot be transferred.
patch
PATCH /calendars/ calendarId
Updates metadata for a calendar. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
update
PUT /calendars/ calendarId
Updates metadata for a calendar.
Channels
For Channels Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
stop
POST /channels/stop
Stop watching resources through this channel.
Colors
For Colors Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
get
GET /colors
Returns the color definitions for calendars and events.
Events
For Events Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
delete
DELETE /calendars/ calendarId /events/ eventId
Deletes an event.
get
GET /calendars/ calendarId /events/ eventId
Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter .
import
POST /calendars/ calendarId /events/import
Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported. Deprecated behavior: If a non- default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.
insert
POST /calendars/ calendarId /events
Creates an event.
instances
GET /calendars/ calendarId /events/ eventId /instances
Returns instances of the specified recurring event.
list
GET /calendars/ calendarId /events
Returns events on the specified calendar.
move
POST /calendars/ calendarId /events/ eventId /move
Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday , focusTime , fromGmail , outOfOffice and workingLocation events cannot be moved.
Required query parameters:
destination
patch
PATCH /calendars/ calendarId /events/ eventId
Updates an event. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
quickAdd
POST /calendars/ calendarId /events/quickAdd
Creates an event based on a simple text string.
Required query parameters:
text
update
PUT /calendars/ calendarId /events/ eventId
Updates an event. This method does not support patch semantics and always updates the entire event resource. To do a partial update, perform a get followed by an update using etags to ensure atomicity.
watch
POST /calendars/ calendarId /events/watch
Watch for changes to Events resources.
Freebusy
For Freebusy Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
query
POST /freeBusy
Returns free/busy information for a set of calendars.
Settings
For Settings Resource details, see the resource representation page.
Method
HTTP request
Description
URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted
get
GET /users/me/settings/ setting
Returns a single user setting.
list
GET /users/me/settings
Returns all user settings for the authenticated user.
watch
POST /users/me/settings/watch
Watch for changes to Settings resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-28 UTC."],[],[]]

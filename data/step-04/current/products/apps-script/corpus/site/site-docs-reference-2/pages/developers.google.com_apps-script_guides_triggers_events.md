---
title: "Event Objects \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/triggers/events
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/guides/triggers/events
  title: "Event Objects \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Event Objects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script can run a function automatically using simple or installable triggers when a specific event occurs.
When a trigger fires, an event object ( e ) containing contextual information is passed to the function as an argument.
This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.
Events produced by installable triggers include a triggerUid to identify the specific trigger.
Calendar triggers indicate that a sync operation is needed, not which specific event changed.
Simple triggers and
installable triggers let
Google Apps Script run a function automatically if a certain event
occurs. When a trigger fires, Apps Script passes the function an
event object as an argument, typically e . The event object contains
information about the context that caused the trigger to fire. For example, the
following sample code shows a simple onEdit(e) trigger for a Google Sheets
script that uses the event object to determine which cell was edited.
function onEdit ( e ){
// Set a comment on the edited cell to indicate when it was changed .
var range = e . range ;
range . setNote ( 'Last modified: ' + new Date ());
}
This page describes the fields in the event object for different types of
triggers.
Events produced by installable triggers contain a triggerUid identifying the
trigger that produced the event. This helps scripts that have multiple
installable triggers.
Google Sheets events
The various Google Sheets-specific triggers let scripts respond to a user's
actions in a spreadsheet.
Open
( simple
and installable )
authMode
A value from the ScriptApp.AuthMode enum.
LIMITED
source
A Spreadsheet
object, representing the Sheets file to which the script is bound.
Spreadsheet
triggerUid
ID of trigger that produced this event (installable triggers only).
4034124084959907503
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
Change
( installable )
authMode
A value from the ScriptApp.AuthMode enum.
FULL
changeType
The type of change ( EDIT , INSERT_ROW ,
INSERT_COLUMN ,
REMOVE_ROW ,
REMOVE_COLUMN ,
INSERT_GRID ,
REMOVE_GRID ,
FORMAT , or OTHER ).
INSERT_ROW
source
A
Spreadsheet
object, representing the Sheets file to which the script is
bound.
Spreadsheet
triggerUid
ID of trigger that produced this event.
4034124084959907503
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
Edit
( simple
and installable )
authMode
A value from the ScriptApp.AuthMode enum.
LIMITED
oldValue
Cell value prior to the edit, if any. Only available if the edited
range is a single cell. Is undefined if the cell had no previous
content.
1234
range
A Range object,
representing the cell or range of cells that were edited.
Range
source
A Spreadsheet
object, representing the Sheets file to which the script is bound.
Spreadsheet
triggerUid
ID of trigger that produced this event (installable triggers only).
4034124084959907503
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
value
New cell value after the edit. Only available if the edited range is a
single cell.
10
Form submit
( installable )
Caution: Make sure you use this form submit trigger with SpreadsheetTriggerBuilder .
authMode
A value from the ScriptApp.AuthMode enum.
FULL
namedValues
An object containing the question names and values from the form submission.
{
'First Name': ['Jane'],
'Timestamp': ['6/7/2015 20:54:13'],
'Last Name': ['Doe']
}
range
A Range object,
representing the cell or range of cells that were edited.
Range
triggerUid
ID of trigger that produced this event.
4034124084959907503
values
Array with values in the same order as they appear in the spreadsheet.
[ '2015/05/04 15:00', 'amin@example.com', 'Bob', '27', 'Bill',
'28', 'Susan', '25' ]
Google Docs events
Triggers allow Docs to respond when a user opens a document.
Open
( simple
and installable )
authMode
A value from the ScriptApp.AuthMode enum.
LIMITED
source
A Document object,
representing the Docs file to which the script is bound.
Document
triggerUid
ID of trigger that produced this event (installable triggers only).
4034124084959907503
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
Google Slides events
Triggers allow Slides to respond when a user opens a presentation.
Open
( simple )
authMode
A value from the ScriptApp.AuthMode enum.
LIMITED
source
A Presentation object,
representing the Slides file to which the script is bound.
Presentation
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
Google Forms events
The Forms-specific triggers let scripts respond when a user
edits a form or submits a response.
Open
* ( simple
and installable )
authMode
A value from the ScriptApp.AuthMode enum.
LIMITED
source
A Form object,
representing the Forms file to which the script is bound.
Form
triggerUid
ID of trigger that produced this event (installable triggers only).
4034124084959907503
user
A User object,
representing the active user, if available
( depending on a complex set of security restrictions ).
amin@example.com
* This event does not occur when a user opens a form to respond, but rather
when an editor opens the form to modify it.
Form submit
( installable )
Caution: Make sure you use this form submit trigger with FormTriggerBuilder .
authMode
A value from the ScriptApp.AuthMode enum.
FULL
response
A FormResponse object,
representing the user's response to the form as a whole.
FormResponse
source
A Form object,
representing the Forms file to which the script is bound.
Form
triggerUid
ID of trigger that produced this event.
4034124084959907503
Google Calendar events
Google Calendar triggers fire when a user's calendar events are updated
(created, edited, or deleted).
These triggers do not tell you which event changed or how it changed.
Instead, they indicate that your code needs to do an incremental sync operation
to pick up recent changes to the calendar. For a full description
of this procedure, see the
Synchronizing resources guide for the
Calendar API .
To synchronize with Calendar in Apps Script,
perform the following steps:
Enable the Calendar advanced service
for the script project. The built-in
Calendar service isn't
sufficient for this workflow.
Determine what calendars to synchronize. For each calendar, perform an
initial sync operation using
the Calendar advanced service's
Events.list() method.
The initial sync returns a nextSyncToken for that calendar. Store this
token for later use.
When the Apps Script EventUpdated trigger fires indicating a
calendar event change, perform an
incremental sync for the
affected calendar using the stored nextSyncToken . This is essentially
another Events.list() request, but
providing the nextSyncToken limits the response to only events that have
changed since the last sync.
Examine the response of the sync to learn what events were updated and
have your code respond appropriately. For example, log the change,
update a spreadsheet, send email notices, or take other actions.
Update the nextSyncToken stored for that calendar with the one returned
by the incremental sync request. This forces the next sync operation to
only return the most current changes.
Occasionally sync tokens are invalidated by the server, resulting in a
410 error. When this happens, your code should conduct a
full sync
and replace all the stored synced data and tokens for that calendar.
EventUpdated
( installable )
authMode
A value from the
ScriptApp.AuthMode
enum.
FULL
calendarId
The string ID of the calendar where the event update occurred.
susan@example.com
triggerUid
ID of trigger that produced this event.
4034124084959907503
Google Workspace add-on events
The onInstall() trigger runs
automatically when a user installs an
add-on .
Install
( simple )
authMode
A value from the ScriptApp.AuthMode enum.
FULL
Google Chat app events
To learn about event objects in Google Chat, see
Receive and respond to interactions with your Google Chat app .
Time-driven events
Time-driven triggers
(also called clock triggers) let scripts execute at a particular time or on a
recurring interval.
Time-driven ( installable )
authMode
A value from the ScriptApp.AuthMode enum.
FULL
day-of-month
Between 1 and 31 .
Because this property name contains dashes it must be accessed via
e['day-of-month'] rather than dot notation.
31
day-of-week
Between 1 (Monday) and 7 (Sunday).
Because this property name contains dashes it must be accessed via
e['day-of-week'] rather than dot notation.
7
hour
Between 0 and 23 .
23
minute
Between 0 and 59 .
59
month
Between 1 and 12 .
12
second
Between 0 and 59 .
59
timezone
The time zone.
UTC
triggerUid
ID of trigger that produced this event.
4034124084959907503
week-of-year
Between 1 and 52 .
Because this property name contains dashes it must be accessed via
e['week-of-year'] rather than dot notation.
52
year
The year.
2015
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

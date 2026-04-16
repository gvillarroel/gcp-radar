---
title: "Class CalendarEventActionResponse \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response
  title: "Class CalendarEventActionResponse \_|\_ Apps Script \_|\_ Google for Developers"
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
Class CalendarEventActionResponse
Stay organized with collections
Save and categorize content based on your preferences.
CalendarEventActionResponse
Represents a response that makes changes to the calendar event that the user is currently editing
in reaction to an action taken in the UI, such as a button click.
// A CalendarEventActionResponse that adds two attendees to an event.
const calendarEventActionResponse =
AddOnsResponseService . newCalendarEventActionResponseBuilder ()
. addAttendees ([ 'user1@example.com' , 'user2@example.com' ])
. build ();
Methods
Method Return type Brief description
print Json() String Prints the JSON representation of this object.
Detailed documentation
printJson()
Prints the JSON representation of this object. This is for debugging only.
Return
String
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

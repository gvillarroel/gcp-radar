---
title: "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder
  title: "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
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
Class CalendarEventActionResponseBuilder
Stay organized with collections
Save and categorize content based on your preferences.
CalendarEventActionResponseBuilder
A builder for CalendarEventActionResponse objects.
Methods
Method Return type Brief description
add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the
associated UI action is taken.
add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the
associated UI action is taken.
build() Calendar Event Action Response Builds the current Calendar event action response and validates it.
set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when
the associated UI action is taken.
Detailed documentation
addAttachments(attachments)
Specifies that the response should add the attachments to the Calendar event when the
associated UI action is taken.
Parameters
Name Type Description
attachments Attachment[] An array of Attachment s to add.
Return
CalendarEventActionResponseBuilder — This object, for chaining.
addAttendees(emails)
Specifies that the response should add the indicated attendees to the Calendar event when the
associated UI action is taken.
Parameters
Name Type Description
emails String[] An array of email addresses to add to the event.
Return
CalendarEventActionResponseBuilder — This object, for chaining.
Throws
Error — If too many attendees have been added.
build()
Builds the current Calendar event action response and validates it.
Return
CalendarEventActionResponse — A validated CalendarEventActionResponse .
Throws
Error — If the constructed Calendar event action response isn't valid.
setConferenceData(conferenceData)
Specifies that the response should set the indicated conference data to the Calendar event when
the associated UI action is taken.
Parameters
Name Type Description
conference Data Conference Data Conference data to set to the event, created by an add on.
Return
CalendarEventActionResponseBuilder — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

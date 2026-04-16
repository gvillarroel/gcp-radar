---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.566Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar event triggers"
feature_slug: "calendar-event-triggers"
latest_feature_date: "2018-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response"
keywords:
  - "calendar"
  - "event"
  - "triggers"
  - "apps"
  - "script"
  - "adds"
  - "detecting"
  - "recently"
---

# Calendar event triggers

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script adds calendar event triggers for detecting recently changed calendar events alongside the Calendar advanced service.

## Extended Definition

Apps Script adds calendar event triggers for detecting recently changed calendar events alongside the Calendar advanced service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)

## Supporting Pages

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .
- Page Summary outlined flag Apps Script can run a function automatically using simple or installable triggers when a specific event occurs.
- Simple triggers and installable triggers let Google Apps Script run a function automatically if a certain event occurs.
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- December 07, 2023 Fixed To fix a bug that prevented events of eventType != 'default' from importing, we updated the code sample in Populate a team vacation calendar , the popular Apps Script + Calendar API solution.
- You can use these triggers in conjunction with the Calendar advanced service to discover recently changed calendar events via regular sync operations.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .

### Class CalendarEventActionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)
- Source ID: `site-docs-reference-3`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CalendarEventActionResponse Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click. // A CalendarEventActionResponse that adds two attendees to an event. const calendarEventActionResponse = AddOnsResponseService . newCalendarEventActionResponseBuilder () . addAttendees ([ 'user1@example.com' , 'user2@example.com' ]) . build (); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object.
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponse Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.501Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar event type detection"
feature_slug: "calendar-event-type-detection"
latest_feature_date: "2024-11-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response"
keywords:
  - "calendar"
  - "event"
  - "type"
  - "detection"
  - "lets"
  - "scripts"
  - "distinguish"
  - "regular"
---

# Calendar event type detection

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Calendar event type detection lets scripts distinguish regular events from event types such as out-of-office and working location.

## Extended Definition

Calendar event type detection lets scripts distinguish regular events from event types such as out-of-office and working location.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)

## Supporting Pages

### "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken. add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken. build() Calendar Event Action Response Builds the current Calendar event action response and validates it. set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- Throws Error — If the constructed Calendar event action response isn't valid. setConferenceData(conferenceData) Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- Return CalendarEventActionResponseBuilder — This object, for chaining. addAttendees(emails) Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken.
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.

### Class CalendarEventActionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CalendarEventActionResponse Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click. // A CalendarEventActionResponse that adds two attendees to an event. const calendarEventActionResponse = AddOnsResponseService . newCalendarEventActionResponseBuilder () . addAttendees ([ 'user1@example.com' , 'user2@example.com' ]) . build (); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object.
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponse Stay organized with collections Save and categorize content based on your preferences.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- Presentation user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Google Forms events The Forms-specific triggers let scripts respond when a user edits a form or submits a response.
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.500Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar event transparency"
feature_slug: "calendar-event-transparency"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response"
keywords:
  - "calendar"
  - "event"
  - "transparency"
  - "lets"
  - "scripts"
  - "get"
  - "set"
  - "whether"
---

# Calendar event transparency

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Calendar event transparency support lets scripts get and set whether events appear as Busy or Available.

## Extended Definition

Calendar event transparency support lets scripts get and set whether events appear as Busy or Available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.
- Feature Generally available : You can now get and set the transparency of a calendar event, meaning whether the event shows as "Busy" or "Available" in Google Calendar.
- This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.
- March 24, 2022 Feature For Google Workspace Add-ons, an Attachment class has been added to the Card Service that lets you add custom attachments to Calendar events.

### "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 118
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
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CalendarEventActionResponse Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click. // A CalendarEventActionResponse that adds two attendees to an event. const calendarEventActionResponse = AddOnsResponseService . newCalendarEventActionResponseBuilder () . addAttendees ([ 'user1@example.com' , 'user2@example.com' ]) . build (); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object.
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponse Stay organized with collections Save and categorize content based on your preferences.


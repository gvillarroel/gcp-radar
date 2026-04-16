---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.575Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar all-day event creation and lookup"
feature_slug: "calendar-all-day-event-creation-and-lookup"
latest_feature_date: "2017-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "calendar"
  - "all"
  - "day"
  - "event"
  - "creation"
  - "lookup"
  - "apps"
  - "script"
---

# Calendar all-day event creation and lookup

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Calendar service adds methods to create all-day events, retrieve events by iCal ID, and set all-day dates.

## Extended Definition

Apps Script Calendar service adds methods to create all-day events, retrieve events by iCal ID, and set all-day dates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### "Class CalendarEventActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description add Attachments(attachments) Calendar Event Action Response Builder Specifies that the response should add the attachments to the Calendar event when the associated UI action is taken. add Attendees(emails) Calendar Event Action Response Builder Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken. build() Calendar Event Action Response Builds the current Calendar event action response and validates it. set Conference Data(conferenceData) Calendar Event Action Response Builder Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- Throws Error — If the constructed Calendar event action response isn't valid. setConferenceData(conferenceData) Specifies that the response should set the indicated conference data to the Calendar event when the associated UI action is taken.
- Return CalendarEventActionResponseBuilder — This object, for chaining. addAttendees(emails) Specifies that the response should add the indicated attendees to the Calendar event when the associated UI action is taken.

### Class CalendarEventActionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/calendar-event-action-response)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class CalendarEventActionResponse Stay organized with collections Save and categorize content based on your preferences.
- CalendarEventActionResponse Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click. // A CalendarEventActionResponse that adds two attendees to an event. const calendarEventActionResponse = AddOnsResponseService . newCalendarEventActionResponseBuilder () . addAttendees ([ 'user1@example.com' , 'user2@example.com' ]) . build (); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- Creating events The following example demonstrates how to create an event in the user's default calendar. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/insert / function createEvent () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); // event details for creating event. let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- The conditional fetch is accomplished by setting the 'If-None-Match' header to the etag of the last known state of the event. / function conditionalFetch () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.


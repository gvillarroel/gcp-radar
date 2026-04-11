---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.842Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Calendar event series update and deletion"
feature_slug: "calendar-event-series-update-and-deletion"
latest_feature_date: "2010-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "calendareventseries"
  - "update"
  - "deletion"
  - "series"
  - "calendar"
  - "event"
  - "added"
  - "and"
---

# Calendar event series update and deletion

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added CalendarEventSeries capabilities to modify or delete an entire event series.

## Extended Definition

Added CalendarEventSeries capabilities to modify or delete an entire event series.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.
- September 17, 2010 Feature Added new methods to CalendarEvent to get the creation date and the date the event was last updated: getDateCreated() and getLastUpdated() .
- October 16, 2010 Feature Added ability for users to create new recurring calendar events through CalendarApp.newRecurrence() and Calendar.createEventSeries() .
- Added ability for users to modify or delete an entire event series through CalendarEventSeries .

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .
- Events . list ( calendarId , { timeMin : now . toISOString (), singleEvents : true , orderBy : "startTime" , maxResults : 10 , }); if ( ! events . items events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . start . date ) { // All-day event. const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); continue ; } const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } } Conditionally modifying an event The following example shows how to conditionally update a Calendar event using the If-Match header.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.
- When the Apps Script EventUpdated trigger fires indicating a calendar event change, perform an incremental sync for the affected calendar using the stored nextSyncToken .
- FULL calendarId The string ID of the calendar where the event update occurred. susan@example.com triggerUid ID of trigger that produced this event.
- 4034124084959907503 Google Calendar events Google Calendar triggers fire when a user's calendar events are updated (created, edited, or deleted).


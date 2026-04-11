---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.651Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Advanced Drive service Drive API v3 support"
feature_slug: "apps-script-advanced-drive-service-drive-api-v3-support"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "v3"
  - "advanced"
  - "drive"
  - "script"
  - "api"
  - "apps"
  - "now"
  - "can"
---

# Apps Script Advanced Drive service Drive API v3 support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script can now call version 3 of the Google Drive API through the Advanced Drive service.

## Extended Definition

Apps Script can now call version 3 of the Google Drive API through the Advanced Drive service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .
- Creating events The following example demonstrates how to create an event in the user's default calendar. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/insert / function createEvent () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); // event details for creating event. let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- Page Summary outlined flag The advanced Calendar service in Apps Script allows access to the public Google Calendar API, offering more features than the built-in service, such as setting event background colors.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Support for advanced services Because advanced services are thin wrappers around Google APIs, any issue encountered while using them is usually an issue with the underlying API, not with Apps Script.
- Page Summary outlined flag Advanced services in Apps Script allow experienced developers to connect to certain public Google APIs with less set-up than using their HTTP interfaces.
- Advanced services in Google Apps Script let you connect to certain public Google APIs with less setup than using their HTTP interfaces.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2023 Feature ( Generally Available ): You can now call version 3 of the Google Drive API from Apps Script with the advanced Drive service.
- November 06, 2023 Feature (Generally available) : You can now call the Chat API from Apps Script with the Advanced Chat Service.
- For more information refer to the following: Columns for Apps Script Columns for HTTP runtimes May 02, 2024 Feature To subscribe to events using Apps Script, you can now use the Advanced Google Workspace Events service.
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .


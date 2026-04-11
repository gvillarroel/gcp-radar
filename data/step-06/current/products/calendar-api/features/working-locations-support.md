---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.879Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Working locations support"
feature_slug: "working-locations-support"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/calendar-status"
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
keywords:
  - "locations"
  - "updating"
  - "working"
  - "through"
  - "reading"
  - "calendar"
  - "and"
  - "the"
---

# Working locations support

Product: Calendar API
Coverage: LOW

## Step 02 Summary

Reading and updating working locations through the Calendar API became generally available; The Calendar API added developer preview support for reading and updating working locations.

## Extended Definition

Reading and updating working locations through the Calendar API became generally available; The Calendar API added developer preview support for reading and updating working locations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)

## Supporting Pages

### "Manage focus time, out of office, and working location events \_|\_ Google\

- URL: [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For feature details, go to Set your working hours & location and Turn working location on or off for users How to show overlapping working location events A user can have multiple working location events on their calendar at the same time which overlap, meaning that any given time could have multiple working locations set for it.
- Creating and updating working location events through the batch endpoints isn't supported.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events#resource / function parseWorkingLocation ( event ) { if ( event . eventType != "workingLocation" ) { throw new Error ( "'" + event . summary + "' is not a working location event." ); } var location = 'No Location' ; const workingLocation = event . workingLocationProperties ; if ( workingLocation ) { if ( workingLocation . type === 'homeOffice' ) { location = 'Home' ; } if ( workingLocation . type === 'officeLocation' ) { location = workingLocation . officeLocation . label ; } if ( workingLocation . type === 'customLocation' ) { location = workingLocation . customLocation . label ; } } return ${ event . start . date } : ${ location } ; } Run the code sample Above the code editor, select the function to run from the drop-down menu, and click Run .
- Events . get ( calendarId , eventId ); var event = ( response . eventType === 'workingLocation' ) ? parseWorkingLocation ( response ) : response ; console . log ( event ); } catch ( exception ) { console . log ( exception . message ); } } / Lists focus time events. / function listFocusTimes () { listEvents ( 'focusTime' ); } / Lists out of office events. / function listOutOfOffices () { listEvents ( 'outOfOffice' ); } / Lists working location events. / function listWorkingLocations () { listEvents ( 'workingLocation' ); } / Lists events with the given event type.

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Focus time, out of office and working location The Google Calendar API can be used to create and manage events that show the status of Google Calendar users.
- Events . insert ( event , CALENDAR ID ); console . log ( response ); } catch ( exception ) { console . log ( exception . message ); } } Replace the following: CALENDAR ID : Email address of the calendar to retrieve and create events on.
- Available methods and classes in the API can be listed using the Calendar keyword in the editor. (Optional) Update the Google Cloud project Each Google Apps Script project has an associated Google Cloud project.
- The API allows updating the colorId , summary and reminders of birthday events using the update and patch methods. start and end fields can also be updated to change the event date.

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Private events will appear to users with reader access, but event details will be hidden. " writer " - Provides read and write access to the calendar.
- Private events will appear to users with writer access, and event details will be visible. " owner " - Provides manager access to the calendar.
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-09 UTC."],[],[]]


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.808Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Jdbc.getConnection useJDBCCompliantTimezoneShift argument"
feature_slug: "jdbc-getconnection-usejdbccomplianttimezoneshift-argument"
latest_feature_date: "2013-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "usejdbccomplianttimezoneshift"
  - "getconnection"
  - "jdbc"
  - "argument"
  - "advanced"
  - "added"
  - "for"
  - "the"
---

# Jdbc.getConnection useJDBCCompliantTimezoneShift argument

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for the useJDBCCompliantTimezoneShift advanced argument in Jdbc.getConnection when connecting to external databases.

## Extended Definition

Added support for the useJDBCCompliantTimezoneShift advanced argument in Jdbc.getConnection when connecting to external databases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- January 24, 2013 Feature Issue 1642 : When connecting to an external database with Jdbc.getConnection , you can now include the advanced argument use JDBCCompliantTimezoneShift .
- Feature Added the ability to set the subject line via the subject field in the advanced arguments for GmailMessage.forward() .
- Added a setOption method to the various chart builders to make it possible to set advanced options for Charts.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For example, to enable the Google Drive advanced service, add the enabledAdvancedServices field to the dependencies object: { "timeZone" : "America/Denver" , "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Drive" , "version" : "v3" , "serviceId" : "drive" } ] }, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" } After you enable an advanced service, it's available in autocomplete.
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Support for advanced services Because advanced services are thin wrappers around Google APIs, any issue encountered while using them is usually an issue with the underlying API, not with Apps Script.
- Before using an advanced service, you must enable it in your script project and ensure the corresponding API is enabled in your associated Cloud Platform project.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .
- Creating events The following example demonstrates how to create an event in the user's default calendar. advanced/calendar.gs View on GitHub / Creates an event in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/insert / function createEvent () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); // event details for creating event. let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- In most cases, the built-in service is easier to use, but this advanced service provides a few extra features, including setting the background color for individual events.


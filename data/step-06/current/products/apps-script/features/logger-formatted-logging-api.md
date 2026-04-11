---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.817Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Logger formatted logging API"
feature_slug: "logger-formatted-logging-api"
latest_feature_date: "2012-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/advanced/adsense"
keywords:
  - "logger"
  - "log"
  - "formatted"
  - "logging"
  - "gained"
  - "method"
  - "api"
  - "new"
---

# Logger formatted logging API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Logger gained a new log() method that accepts a format string and variable substitution values.

## Extended Definition

Logger gained a new log() method that accepts a format string and variable substitution values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Added a new log method to the Logger service which accepts a format string and a variable number of values to insert.
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Events . list ( calendarId , { timeMin : now . toISOString (), singleEvents : true , orderBy : "startTime" , maxResults : 10 , }); if ( ! events . items events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . start . date ) { // All-day event. const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); continue ; } const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } } Conditionally modifying an event The following example shows how to conditionally update a Calendar event using the If-Match header.

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Reports . generate ( accountName , { // Specify the desired ad client using a filter. filters : [ AD CLIENT ID== ${ escapeFilterParameter ( adClientReportingDimensionId ) } , ], metrics : [ "PAGE VIEWS" , "AD REQUESTS" , "AD REQUESTS COVERAGE" , "CLICKS" , "AD REQUESTS CTR" , "COST PER CLICK" , "AD REQUESTS RPM" , "ESTIMATED EARNINGS" , ], dimensions : [ "DATE" ], ... dateToJson ( "startDate" , oneWeekAgo ), ... dateToJson ( "endDate" , today ), // Sort by ascending date. orderBy : [ "+DATE" ], }); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "AdSense Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. sheet . appendRow ( report . headers . map (( header ) = > header . name )); // Append the results. sheet . getRange ( 2 , 1 , report . rows . length , report . headers . length ) . setValues ( report . rows . map (( row ) = > row . cells . map (( cell ) = > cell . value ))); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Escape special characters for a parameter being used in a filter. @param {string} parameter The parameter to be escaped. @return {string} The escaped parameter. / function escapeFilterParameter ( parameter ) { return parameter . replace ( "\\" , "\\\\" ). replace ( "," , "\\," ); } / Returns the JSON representation of a Date object (as a google.type.Date). @param {string} paramName the name of the date parameter @param {Date} value the date @return {object} formatted date / function dateToJson ( paramName , value ) { return { [ ${ paramName } .year ] : value . getFullYear (), [ ${ paramName } .month ] : value . getMonth () + 1 , [ ${ paramName } .day ] : value . getDate (), }; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Adunits . list ( adClientName , { pageSize : 50 , pageToken : pageToken , }); if ( ! response . adUnits ) { console . log ( "No ad units found for this ad client." ); return ; } for ( const adUnit of response . adUnits ) { console . log ( 'Found ad unit with resource name "%s" and display name "%s".' , adUnit . name , adUnit . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } Generate a report This sample generates a report over your AdSense account and outputs the results to a spreadsheet. advanced/adsense.gs View on GitHub / Generates a spreadsheet report for a specific ad client in an account. @param {string} accountName The resource name of the account. @param {string} adClientReportingDimensionId The reporting dimension ID of the ad client. / function generateReport ( accountName , adClientReportingDimensionId ) { // Prepare report. const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const report = AdSense .
- Detailed information about the service, including objects, methods, and parameters, can be found in the reference documentation for the AdSense Management API.
- Like all advanced services in Apps Script, the AdSense service uses the same objects, methods, and parameters as the public API.


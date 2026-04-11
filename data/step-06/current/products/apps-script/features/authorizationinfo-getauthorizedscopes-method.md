---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.641Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "AuthorizationInfo.getAuthorizedScopes method"
feature_slug: "authorizationinfo-getauthorizedscopes-method"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "getauthorizedscopes"
  - "authorizationinfo"
  - "retrieve"
  - "method"
  - "added"
  - "was"
  - "the"
  - "to"
---

# AuthorizationInfo.getAuthorizedScopes method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

AuthorizationInfo.getAuthorizedScopes() was added to retrieve the OAuth scopes granted to a script.

## Extended Definition

AuthorizationInfo.getAuthorizedScopes() was added to retrieve the OAuth scopes granted to a script.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- Feature Added seven new advanced services : + Admin SDK Directory service + Admin SDK Reports service + Fusion Tables service + Google+ Domains service + Mirror service + YouTube service + YouTube Analytics service December 02, 2013 Fixed Issue 3101 : Removed the SitesApp method Site.deleteSite() , which was never functional.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- Added several new ScriptApp methods, classes, and enums to support installable triggers in add-ons: AuthorizationInfo : An object used to determine whether the user needs to authorize this script to use one or more services, and to provide the URL for an authorization dialog.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Events . insert ( event , calendarId ); console . log ( Event ID: ${ event . id } ); } catch ( err ) { console . log ( "Failed with error %s" , err . message ); } } / Helper function to get a new Date object relative to the current date. @param {number} daysOffset The number of days in the future for the new date. @param {number} hour The hour of the day for the new date, in the time zone of the script. @return {Date} The new date. / function getRelativeDate ( daysOffset , hour ) { const date = new Date (); date . setDate ( date . getDate () + daysOffset ); date . setHours ( hour ); date . setMinutes ( 0 ); date . setSeconds ( 0 ); date . setMilliseconds ( 0 ); return date ; } Listing calendars The following example demonstrates how to retrieve details about the calendars shown in the user's calendar list. advanced/calendar.gs View on GitHub / Lists the calendars shown in the user's calendar list. @see https://developers.google.com/calendar/api/v3/reference/calendarList/list / function listCalendars () { let calendars ; let pageToken ; do { calendars = Calendar .
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- The conditional update is accomplished by setting the 'If-Match' header to the etag of the new event when it was created. / function conditionalUpdate () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For example, the DOUBLE() function shown earlier can be rewritten to accept a single cell or range of cells as follows: / Multiplies the input value by 2. @param {number Array<Array<number>>} input The value or range of cells to multiply. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return Array . isArray ( input ) ? input . map ( row = > row . map ( cell = > cell 2 )) : input 2 ; } This approach uses the map method of JavaScript's Array object on the two-dimensional array of cells to get each row, then for each row, it uses map again to return double each cell's value.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- Return values Every custom function must return a value to display, such that: If a custom function returns a value, the value displays in the cell the function was called from.
- If you use the getValue method in custom functions, be aware that the referenced range isn't directly passed as an argument to the custom function.


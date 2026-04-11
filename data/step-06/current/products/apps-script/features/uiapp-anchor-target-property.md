---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.828Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp Anchor target property"
feature_slug: "uiapp-anchor-target-property"
latest_feature_date: "2012-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "anchor"
  - "target"
  - "have"
  - "property"
  - "widgets"
  - "uiapp"
  - "now"
  - "can"
---

# UiApp Anchor target property

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp Anchor widgets can now have a target specified.

## Extended Definition

UiApp Anchor widgets can now have a target specified.

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
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- August 20, 2012 Feature UiApp widgets now have a setStyleAttributes method which allow you to set multiple attributes at once.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.
- March 15, 2021 Change The following updates have been made to deployments in the new editor: You can now have more than one active deployment.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .
- Events . list ( calendarId , { timeMin : now . toISOString (), singleEvents : true , orderBy : "startTime" , maxResults : 10 , }); if ( ! events . items events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . start . date ) { // All-day event. const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); continue ; } const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } } Conditionally modifying an event The following example shows how to conditionally update a Calendar event using the If-Match header.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Consequently, they can only call services that don't have access to personal data, specifically the following: Supported services Notes Cache Works, but not particularly useful in custom functions HTML Can generate HTML, but can't display it (rarely useful) JDBC Language Lock Works, but not particularly useful in custom functions Maps Can calculate directions, but not display maps Properties getUserProperties() only gets the properties of the spreadsheet owner.
- Here's a custom function, named DOUBLE , which multiplies an input value by 2: / Multiplies an input value by 2. @param {number} input The number to double. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } If you don't know how to write JavaScript and don't have time to learn, check the Google Workspace add-on store to see whether someone else has already built the custom function you need.
- Utilities XML If your custom function throws the error message You do not have permission to call X service. , the service requires user authorization and thus can't be used in a custom function.


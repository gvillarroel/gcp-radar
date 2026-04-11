---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.791Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList.getFilesByType method"
feature_slug: "docslist-getfilesbytype-method"
latest_feature_date: "2013-08-05"
deprecation_date: "2013-08-05"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/calendar"
  - "https://developers.google.com/apps-script/quickstart/vertex-ai"
keywords:
  - "getfilesbytype"
  - "filetype"
  - "deprecates"
  - "docslist"
  - "start"
  - "deprecated"
  - "max"
  - "method"
---

# DocsList.getFilesByType method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecates DocsList.getFilesByType(fileType, start, max); deprecated on 2013-08-05.

## Extended Definition

Deprecates DocsList.getFilesByType(fileType, start, max); deprecated on 2013-08-05.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- November 01, 2022 Deprecated Apps Script has sunset the following methods: getChatThreads() getChatThreads(start, max) There isn't a replacement method to get this data with Apps Script.
- Deprecated Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , { timeMin : now . toISOString (), singleEvents : true , orderBy : "startTime" , maxResults : 10 , }); if ( ! events . items events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . start . date ) { // All-day event. const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); continue ; } const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } } Conditionally modifying an event The following example shows how to conditionally update a Calendar event using the If-Match header.
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .

### "Quickstart: Generate text using Vertex AI \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/quickstart/vertex-ai](https://developers.google.com/apps-script/quickstart/vertex-ai)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Open the Code.gs file and replace its contents with the following code: / Main entry point to test the Vertex AI integration. / function main () { const prompt = 'What is Apps Script in one sentence?' ; try { const response = callVertexAI ( prompt ); console . log ( Response: ${ response } ); } catch ( error ) { console . error ( Failed to call Vertex AI: ${ error . message } ); } } / Calls the Vertex AI Gemini model. @param {string} prompt - The user's input prompt. @return {string} The text generated by the model. / function callVertexAI ( prompt ) { // Configuration const projectId = ' GOOGLE CLOUD PROJECT ID ' ; const region = 'us-central1' ; const modelName = 'gemini-2.5-flash' ; const model = projects/ ${ projectId } /locations/ ${ region } /publishers/google/models/ ${ modelName } ; const payload = { contents : [{ role : 'user' , parts : [{ text : prompt }] }], generationConfig : { temperature : 0.1 , maxOutputTokens : 2048 } }; // Execute the request using the Vertex AI Advanced Service const response = VertexAI .
- Home Google Workspace Apps Script Samples Send feedback Quickstart: Generate text using Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- To avoid incurring charges to your Google Cloud account for the resources used in this quickstart, we recommend that you delete the Cloud project.
- If you plan to explore multiple tutorials and quickstarts, reusing projects can help you avoid exceeding project quota limits.


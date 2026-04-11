---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.766Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "LockService.getPublicLock"
feature_slug: "lockservice-getpubliclock"
latest_feature_date: "2014-09-04"
deprecation_date: "2014-09-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/calendar"
keywords:
  - "getpubliclock"
  - "getuserlock"
  - "lockservice"
  - "replaced"
  - "deprecated"
  - "by"
  - "was"
  - "and"
---

# LockService.getPublicLock

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

LockService.getPublicLock() was deprecated and replaced by LockService.getUserLock() and LockService.getScriptLock(); deprecated on 2014-09-04.

## Extended Definition

LockService.getPublicLock() was deprecated and replaced by LockService.getUserLock() and LockService.getScriptLock(); deprecated on 2014-09-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- September 04, 2014 Deprecated Replaced the CacheService methods getPrivateCache() and getPublicCache() and the LockService methods getPrivateLock() and getPublicLock() with getUserCache() , getScriptCache() , getUserLock() , and getScriptLock() , respectively.
- February 10, 2015 Deprecated Deprecated the following class and methods, which have been replaced by the more powerful Protection class above.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- August 20, 2018 Feature The Utilities service has been extended with the following methods and classes: Utilities.computeRsaSha1Signature(value, key) Utilities.computeRsaSha1Signature(value, key, charset) Utilities.computeRsaSignature(algorithm, value, key) Utilities.computeRsaSignature(algorithm, value, key, charset) RsaAlgorithm June 19, 2018 Deprecated The quota on total data received by UrlFetch per day per user has been removed.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- To create a Cloud project, use the gcloud projects create command: gcloud projects create PROJECT ID Replace PROJECT ID by setting the ID for the project you want to create.

### Advanced Calendar Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/calendar](https://developers.google.com/apps-script/advanced/calendar)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Events . list ( calendarId , options ); } catch ( e ) { // Check to see if the sync token was invalidated by the server; // if so, perform a full sync instead. if ( e . message === "Sync token is no longer valid, a full sync is required." ) { properties . deleteProperty ( "syncToken" ); logSyncedEvents ( calendarId , true ); return ; } throw new Error ( e . message ); } if ( events . items && events . items . length === 0 ) { console . log ( "No events found." ); return ; } for ( const event of events . items ) { if ( event . status === "cancelled" ) { console . log ( "Event id %s was cancelled." , event . id ); return ; } if ( event . start . date ) { const start = new Date ( event . start . date ); console . log ( "%s (%s)" , event . summary , start . toLocaleDateString ()); return ; } // Events that don't last all day; they have defined start times. const start = new Date ( event . start . dateTime ); console . log ( "%s (%s)" , event . summary , start . toLocaleString ()); } pageToken = events . nextPageToken ; } while ( pageToken ); properties . setProperty ( "syncToken" , events . nextSyncToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The conditional update is accomplished by setting the 'If-Match' header to the etag of the new event when it was created. / function conditionalUpdate () { const calendarId = "primary" ; const start = getRelativeDate ( 1 , 12 ); const end = getRelativeDate ( 1 , 13 ); let event = { summary : "Lunch Meeting" , location : "The Deli" , description : "To discuss our plans for the presentation next week." , start : { dateTime : start . toISOString (), }, end : { dateTime : end . toISOString (), }, attendees : [ { email : "gduser1@workspacesample.dev" }, { email : "gduser2@workspacesample.dev" }, ], // Red background.
- If the sync token is missing or invalid, log all events from up to a month ago (a full sync). @param {string} calendarId The ID of the calender to retrieve events from. @param {boolean} fullSync If true, throw out any existing sync token and perform a full sync; if false, use the existing sync token if possible. / function logSyncedEvents ( calendarId , fullSync ) { const properties = PropertiesService . getUserProperties (); const options = { maxResults : 100 , }; const syncToken = properties . getProperty ( "syncToken" ); if ( syncToken && ! fullSync ) { options . syncToken = syncToken ; } else { // Sync events up to thirty days in the past. options . timeMin = getRelativeDate ( - 30 , 0 ). toISOString (); } // Retrieve events one page at a time. let events ; let pageToken ; do { try { options . pageToken = pageToken ; events = Calendar .
- CalendarList . list ({ maxResults : 100 , pageToken : pageToken , }); if ( ! calendars . items calendars . items . length === 0 ) { console . log ( "No calendars found." ); return ; } // Print the calendar id and calendar summary for ( const calendar of calendars . items ) { console . log ( "%s (ID: %s)" , calendar . summary , calendar . id ); } pageToken = calendars . nextPageToken ; } while ( pageToken ); } Listing events The following example demonstrates how to list the next 10 upcoming events in the user's default calendar. advanced/calendar.gs View on GitHub / Lists the next 10 upcoming events in the user's default calendar. @see https://developers.google.com/calendar/api/v3/reference/events/list / function listNext10Events () { const calendarId = "primary" ; const now = new Date (); const events = Calendar .


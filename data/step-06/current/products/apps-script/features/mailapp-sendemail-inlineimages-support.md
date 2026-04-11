---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.835Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "MailApp.sendEmail inlineImages support"
feature_slug: "mailapp-sendemail-inlineimages-support"
latest_feature_date: "2011-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reports"
keywords:
  - "inlineimages"
  - "mailapp"
  - "sendemail"
  - "supports"
  - "email"
  - "including"
  - "now"
  - "in"
---

# MailApp.sendEmail inlineImages support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

MailApp.sendEmail now supports including inlineImages in email messages.

## Extended Definition

MailApp.sendEmail now supports including inlineImages in email messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- September 26, 2011 Feature Added support for inlineImages when sending emails with MailApp.sendEmail() .
- Feature Added the ability to list alternate sender addresses using GmailApp.getAliases() and use them in GmailApp.sendEmail() with the advanced option "from".
- Fixed an issue to allow multiple comma-delimited replyTo addresses in MailApp.sendEmail() .
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Migrate emails from Gmail to a Google Group This sample gets three RFC 822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. advanced/adminSDK.gs View on GitHub / Gets three RFC822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. / function migrateMessages () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; const messagesToMigrate = getRecentMessagesContent (); for ( const messageContent of messagesToMigrate ) { const contentBlob = Utilities . newBlob ( messageContent , "message/rfc822" ); AdminGroupsMigration .
- This API gives administrators of Google Workspace domains (including resellers) the ability to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- By default, fetches 3 messages from the latest 3 threads. @return {Array} the messages' content. / function getRecentMessagesContent () { const NUM THREADS = 3 ; const NUM MESSAGES = 3 ; const threads = GmailApp . getInboxThreads ( 0 , NUM THREADS ); const messages = GmailApp . getMessagesForThreads ( threads ); const messagesContent = []; for ( let i = 0 ; i < messages . length ; i ++ ) { for ( let j = 0 ; j < NUM MESSAGES ; j ++ ) { const message = messages [ i ][ j ]; if ( message ) { messagesContent . push ( message . getRawContent ()); } } } return messagesContent ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.

### Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- UserUsageReport . get ( "all" , date , { parameters : parameters . join ( "," ), maxResults : 500 , pageToken : pageToken , }); if ( page . warnings ) { for ( const warning of page . warnings ) { console . log ( warning . message ); } } const reports = page . usageReports ; if ( reports ) { for ( const report of reports ) { const parameterValues = getParameterValues ( report . parameters ); const row = [ report . date , report . entity . userEmail , parameterValues [ "accounts:last login time" ], parameterValues [ "gmail:num emails received" ], parameterValues [ "drive:num items created" ], ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace User Usage Report" , ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Date" , "User" , "Last Login" , "Num Emails Received" , "Num Drive Files Created" , ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Gets a map of parameter names to values from an array of parameter objects. @param {Array} parameters An array of parameter objects. @return {Object} A map from parameter names to their values. / function getParameterValues ( parameters ) { return parameters . reduce (( result , parameter ) = > { const name = parameter . name ; let value ; if ( parameter . intValue !== undefined ) { value = parameter . intValue ; } else if ( parameter . stringValue !== undefined ) { value = parameter . stringValue ; } else if ( parameter . datetimeValue !== undefined ) { value = new Date ( parameter . datetimeValue ); } else if ( parameter . boolValue !== undefined ) { value = parameter . boolValue ; } result [ name ] = value ; return result ; }, {}); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Activities . list ( "all" , "login" , { startTime : startTime , endTime : endTime , maxResults : 500 , pageToken : pageToken , }); const items = page . items ; if ( items ) { for ( const item of items ) { const row = [ new Date ( item . id . time ), item . actor . email , item . events [ 0 ]. name , ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace Login Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Time" , "User" , "Login Result" ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } Generate user usage report This sample generates a user usage report for this day last week as a spreadsheet.
- The report includes the date, user, last login time, number of emails received, and number of drive files created. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/userUsageReport/get / function generateUserUsageReport () { const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const timezone = Session . getScriptTimeZone (); const date = Utilities . formatDate ( oneWeekAgo , timezone , "yyyy-MM-dd" ); const parameters = [ "accounts:last login time" , "gmail:num emails received" , "drive:num items created" , ]; const rows = []; let pageToken ; let page ; do { page = AdminReports .
- The report includes the time, user, and login result. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities/list / function generateLoginActivityReport () { const now = new Date (); const oneWeekAgo = new Date ( now . getTime () - 7 24 60 60 1000 ); const startTime = oneWeekAgo . toISOString (); const endTime = now . toISOString (); const rows = []; let pageToken ; let page ; do { page = AdminReports .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.847Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp availability expansion"
feature_slug: "uiapp-availability-expansion"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "availability"
  - "expansion"
  - "made"
  - "available"
  - "users"
  - "uiapp"
  - "all"
  - "to"
---

# UiApp availability expansion

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Made UiApp available to all users, not just Google Apps Premier domains.

## Extended Definition

Made UiApp available to all users, not just Google Apps Premier domains.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- UiApp is now available to all users.
- The Spreadsheet service has been extended with the following new methods to support Groups: Range.collapseGroups() Range.expandGroups() Range.shiftColumnGroupDepth(delta) Range.shiftRowGroupDepth(delta) Sheet.collapseAllColumnGroups() Sheet.collapseAllRowGroups() Sheet.expandAllColumnGroups() Sheet.expandAllRowGroups() Sheet.expandColumnGroupsUpToDepth(groupDepth) Sheet.expandRowGroupsUpToDepth(groupDepth) Sheet.getColumnGroup(columnIndex, groupDepth) Sheet.getColumnGroupControlPosition() Sheet.getColumnGroupDepth(columnIndex) Sheet.getRowGroup(rowIndex, groupDepth) Sheet.getRowGroupControlPosition() Sheet.getRowGroupDepth(rowIndex) Sheet.setColumnGroupControlPosition(position) Sheet.setRowGroupControlPosition(position) April 11, 2018 Announcement Macros for Google Sheets are now becoming available for users, and will finish rolling out over then next few weeks.
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- Added the Charts Services , which allow users to dynamically create charts and embed them in emails, UiApp, or export them as images.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- List all users This sample lists all the users in a domain sorted by first name. advanced/adminSDK.gs View on GitHub / Lists all the users in a domain sorted by first name. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list / function listAllUsers () { let pageToken ; let page ; do { page = AdminDirectory .
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Users . insert ( user ); console . log ( "User %s created with ID %s." , user . primaryEmail , user . id ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Create alias This sample creates an alias (nickname) for a user. advanced/adminSDK.gs View on GitHub / Creates an alias (nickname) for a user. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert / function createAlias () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; let alias = { alias : "chica@example.com" , }; try { alias = AdminDirectory .

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.
- The following example shows how to create two time-driven triggers—one that fires every 6 hours, and one that fires every Monday at 9 a.m. (in the time zone that your script is set to). triggers/triggers.gs View on GitHub / Creates two time-driven triggers. @see https://developers.google.com/apps-script/guides/triggers/installable#time-driven triggers / function createTimeDrivenTriggers () { // Trigger every 6 hours.
- Installable triggers are subject to restrictions, including not running in read-only mode, not being triggered by script executions or API requests (with one exception), and always running under the creator's account.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.780Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Advanced Service: Admin SDK Directory"
feature_slug: "apps-script-advanced-service-admin-sdk-directory"
latest_feature_date: "2013-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reports"
keywords:
  - "directory"
  - "admin"
  - "sdk"
  - "advanced"
  - "script"
  - "added"
  - "apps"
  - "for"
---

# Apps Script Advanced Service: Admin SDK Directory

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for the Admin SDK Directory Advanced Service in Apps Script.

## Extended Definition

Added support for the Admin SDK Directory Advanced Service in Apps Script.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)

## Supporting Pages

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.
- This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Settings Service Stay organized with collections Save and categorize content based on your preferences.
- Here, the description is modified, but various other settings can be changed in the same way. advanced/adminSDK.gs View on GitHub / Updates group's settings.

### Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like all advanced services in Apps Script, the Admin SDK Reports service uses the same objects, methods, and parameters as the public API.
- The report includes the date, user, last login time, number of emails received, and number of drive files created. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/userUsageReport/get / function generateUserUsageReport () { const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const timezone = Session . getScriptTimeZone (); const date = Utilities . formatDate ( oneWeekAgo , timezone , "yyyy-MM-dd" ); const parameters = [ "accounts:last login time" , "gmail:num emails received" , "drive:num items created" , ]; const rows = []; let pageToken ; let page ; do { page = AdminReports .
- The report includes the date, user, last login time, number of emails received, and number of docs owned. advanced/adminSDK.gs View on GitHub / Generates a user usage report for this day last week as a spreadsheet.
- Page Summary outlined flag The Admin SDK Reports service in Apps Script allows Google Workspace administrators to create custom usage reports using the Admin SDK Reports API.


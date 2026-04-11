---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.832Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Domain Service support"
feature_slug: "domain-service-support"
latest_feature_date: "2011-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/guides/services/quotas"
keywords:
  - "domain"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "the"
---

# Domain Service support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added support for the Domain service.

## Extended Definition

Apps Script added support for the Domain service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- July 22, 2013 Feature Added DriveApp and FormApp to the services tracked on the Apps Script Dashboard .

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .

### Quotas for Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Feature Consumer accounts (for example, gmail.com) Google Workspace accounts Calendar events created 5,000 / day 10,000 / day Contacts created 1,000 / day 2,000 / day Documents created 250 / day 1,500 / day Files converted 2,000 / day 4,000 / day Email recipients per day (for example, with MailApp) 100 / day 1,500 / day Email recipients per day within domain (for example, with MailApp) 100 / day 2,000 / day Email read/write (excluding send) 20,000 / day 50,000 / day Groups read 2,000 / day 10,000 / day JDBC connection 10,000 / day 50,000 / day JDBC failed connection 100 / day 500 / day Presentations created 250 / day 1,500 / day Properties read/write 50,000 / day 500,000 / day Slides created 250 / day 1,500 / day Spreadsheets created 250 / day 3,200 / day Triggers total runtime 90 min / day 6 hr / day URL Fetch calls 20,000 / day 100,000 / day Static Map render 1,000 / day 10,000 / day Google Map Direction query 1,000 / day 10,000 / day Google Map Geocode calls 1,000 / day 10,000 / day Translate calls 5,000 / day 20,000 / day Google Map elevation samples query 1,000 / day 10,000 / day Apps Script projects 50 / day 50 / day Additional limits apply for trial accounts.
- Monitor quota usage To monitor your script's quota consumption and execution health, use the following methods: Email quota : Use MailApp.getRemainingDailyQuota() to check the number of remaining email recipients you can send to for the rest of the day.
- After you convert from a free trial account to a paid subscription, your account limits automatically increase when both of the following are true: Your domain has cumulatively paid at least USD $100 (or equivalent).
- Google Cloud console : If your Apps Script project uses a standard Google Cloud project , you can monitor service-specific quotas and API usage in the Google Cloud console .


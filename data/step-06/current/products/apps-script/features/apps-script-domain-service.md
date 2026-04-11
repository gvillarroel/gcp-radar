---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.758Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Domain service"
feature_slug: "apps-script-domain-service"
latest_feature_date: "2014-12-11"
deprecation_date: "2014-12-11"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-license-manager"
keywords:
  - "directing"
  - "domain"
  - "removed"
  - "users"
  - "script"
  - "apps"
  - "was"
  - "the"
---

# Apps Script Domain service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Domain service was removed, directing users to alternatives; deprecated on 2014-12-11.

## Extended Definition

The Domain service was removed, directing users to alternatives; deprecated on 2014-12-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- August 07, 2024 Change Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's URL Fetch service .
- Fixed an issue where users would receive "Summary of failures for Apps Script" error for a failed trigger, even after the script was deleted.
- Feature Added seven new advanced services : + Admin SDK Directory service + Admin SDK Reports service + Fusion Tables service + Google+ Domains service + Mirror service + YouTube service + YouTube Analytics service December 02, 2013 Fixed Issue 3101 : Removed the SitesApp method Site.deleteSite() , which was never functional.
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- List all users This sample lists all the users in a domain sorted by first name. advanced/adminSDK.gs View on GitHub / Lists all the users in a domain sorted by first name. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list / function listAllUsers () { let pageToken ; let page ; do { page = AdminDirectory .

### "Admin SDK Enterprise License Manager Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-license-manager](https://developers.google.com/apps-script/advanced/admin-sdk-license-manager)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Enterprise License Manager service in Apps Script allows domain admins to manage user licenses using the Admin SDK Enterprise License Manager API.
- Notice the use of page tokens to access the full list of results. advanced/adminSDK.gs View on GitHub / Logs the license assignments, including the product ID and the sku ID, for the users in the domain.
- Get a list of license assignments for the domain This sample logs the license assignments, including the product ID and the sku ID, for the users in the domain.
- Like all advanced services in Apps Script, the Admin SDK Enterprise License Manager service uses the same objects, methods, and parameters as the public API.


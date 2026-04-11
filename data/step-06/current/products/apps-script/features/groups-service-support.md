---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.832Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Groups Service support"
feature_slug: "groups-service-support"
latest_feature_date: "2011-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "groups"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "the"
---

# Groups Service support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added support for the Groups service.

## Extended Definition

Apps Script added support for the Groups service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Migration service lets you use the Admin SDK's Groups Migration API in Google Apps Script.
- Migrate emails from Gmail to a Google Group This sample gets three RFC 822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. advanced/adminSDK.gs View on GitHub / Gets three RFC822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. / function migrateMessages () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; const messagesToMigrate = getRecentMessagesContent (); for ( const messageContent of messagesToMigrate ) { const contentBlob = Utilities . newBlob ( messageContent , "message/rfc822" ); AdminGroupsMigration .

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .

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


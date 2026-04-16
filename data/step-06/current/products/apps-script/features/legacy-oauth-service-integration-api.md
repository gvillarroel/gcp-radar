---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.591Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Legacy OAuth service integration API"
feature_slug: "legacy-oauth-service-integration-api"
latest_feature_date: "2015-05-20"
deprecation_date: "2015-05-20"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/client-verification"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "legacy"
  - "oauth"
  - "integration"
  - "oauthconfig"
  - "related"
  - "urlfetchapp"
  - "methods"
  - "integrations"
---

# Legacy OAuth service integration API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The legacy OAuthConfig and related UrlFetchApp OAuth service methods supported OAuth integrations before library-based alternatives; deprecated on 2015-05-20.

## Extended Definition

The legacy OAuthConfig and related UrlFetchApp OAuth service methods supported OAuth integrations before library-based alternatives; deprecated on 2015-05-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### OAuth Client Verification \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/client-verification](https://developers.google.com/apps-script/guides/client-verification)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following articles: Unverified Apps OAuth Application Verification FAQ Google API Services: User Data Policy Figure 1 : Unverified app screen Figure 2 : Unverified app authorization flow This change applies to Google OAuth web clients, including those used by all Apps Script projects.
- The verification process involves completing the OAuth consent screen in your app's Google Cloud project with details like application name, logo, support email, scopes, authorized domains, and homepage and privacy policy URLs.
- Page Summary outlined flag Google requires verification for Google OAuth clients requesting certain sensitive OAuth scopes, though Apps Script projects within the same Google Workspace domain or customer are exempt.
- Home Google Workspace Apps Script Guides Send feedback OAuth Client Verification Stay organized with collections Save and categorize content based on your preferences.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- The Advanced Chat service has limitations and does not support the media.download method or Developer Preview methods, which require using UrlFetchApp . manage Chat spaces, members, and messages.
- Chat API methods available in Developer Preview To download a message attachment or call a developer preview method, use UrlFetchApp instead.
- For details about authentication with service accounts, see Authenticate as a Google Chat app . advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the app. @param {string} spaceName The resource name of the space. / function postMessageWithAppCredentials ( spaceName ) { try { // See https://developers.google.com/chat/api/guides/auth/service-accounts // for details on how to obtain a service account OAuth token. const appToken = getToken (); const message = { text : "Hello world!" }; Chat .
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .


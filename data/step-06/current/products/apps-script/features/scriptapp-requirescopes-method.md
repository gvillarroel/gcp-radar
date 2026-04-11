---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.643Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ScriptApp.requireScopes method"
feature_slug: "scriptapp-requirescopes-method"
latest_feature_date: "2025-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "requirescopes"
  - "oauthscopes"
  - "authmode"
  - "scriptapp"
  - "method"
  - "added"
  - "was"
  - "to"
---

# ScriptApp.requireScopes method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptApp.requireScopes(authMode, oAuthScopes) was added to request specific OAuth scopes programmatically.

## Extended Definition

ScriptApp.requireScopes(authMode, oAuthScopes) was added to request specific OAuth scopes programmatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- ScriptApp class : requireScopes(authMode, oAuthScopes) requireAllScopes(authMode) getAuthorizationInfo(authMode, oAuthScopes) AuthorizationInfo class : getAuthorizedScopes() For more information, refer to Handle granular OAuth permissions .
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- In addition, the following ChartTypes have been added: TIMELINE BUBBLE CANDLESTICK GAUGE GEO RADAR ORG SPARKLINE STEPPED AREA TREEMAP WATERFALL March 26, 2018 Feature The Spreadsheet service has been extended with the following new methods: SpreadsheetApp.setActiveSheet(sheet, restoreSelection) Spreadsheet.setActiveSheet(sheet, restoreSelection) Deprecated The deprecated enable(restriction) method of the ScriptApp.Service class has been sunset.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Edit ( simple and installable ) authMode A value from the ScriptApp.AuthMode enum.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Change ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- 10 Form submit ( installable ) Caution: Make sure you use this form submit trigger with SpreadsheetTriggerBuilder . authMode A value from the ScriptApp.AuthMode enum.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- For example, to call the spaces.messages.create method, add the following: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Limits and considerations The Advanced Chat service doesn't support: The Chat API method media.download .
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .


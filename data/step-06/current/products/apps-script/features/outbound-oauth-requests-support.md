---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.844Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Outbound OAuth requests support"
feature_slug: "outbound-oauth-requests-support"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "outbound"
  - "addoauthservice"
  - "requests"
  - "urlfetchapp"
  - "oauth"
  - "via"
  - "added"
  - "for"
---

# Outbound OAuth requests support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added support for outbound OAuth requests via UrlFetchApp.addOAuthService().

## Extended Definition

Added support for outbound OAuth requests via UrlFetchApp.addOAuthService().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Added support for outbound OAuth requests.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- April 11, 2016 Feature Support for PATCH requests has been added to UrlFetchApp .
- Feature Added the UiService method DocsListDialog.setOAuthToken(oAuthToken) , which sets an OAuth 2.0 token to use when fetching data for the dialog, on behalf of the user whose content should be shown.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- Developers can access Google APIs via advanced services or by making direct requests using UrlFetch , with each method having different requirements and advantages.
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- For details about authentication with service accounts, see Authenticate as a Google Chat app . advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the app. @param {string} spaceName The resource name of the space. / function postMessageWithAppCredentials ( spaceName ) { try { // See https://developers.google.com/chat/api/guides/auth/service-accounts // for details on how to obtain a service account OAuth token. const appToken = getToken (); const message = { text : "Hello world!" }; Chat .
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .
- For example, to call the spaces.messages.create method, add the following: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Limits and considerations The Advanced Chat service doesn't support: The Chat API method media.download .
- Members . list ( spaceName , { pageSize : 10 , pageToken : pageToken , }); if ( ! response . memberships response . memberships . length === 0 ) { pageToken = response . nextPageToken ; continue ; } for ( const membership of response . memberships ) { console . log ( "Member: %s, Role: %s" , membership . member . displayName , membership . role , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Troubleshoot If you encounter Error 400: invalid scope with the error message Some requested scopes cannot be shown , it means you haven't specified any authorization scopes in the Apps Script project's appsscript.json file.


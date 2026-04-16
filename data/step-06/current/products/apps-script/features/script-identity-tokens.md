---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.533Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script identity tokens"
feature_slug: "script-identity-tokens"
latest_feature_date: "2019-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/cloud-run"
  - "https://developers.google.com/apps-script/advanced/groups"
keywords:
  - "script"
  - "identity"
  - "tokens"
  - "apps"
  - "adds"
  - "scriptapp"
  - "getidentitytoken"
  - "return"
---

# Script identity tokens

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Script service adds ScriptApp.getIdentityToken() to return an identity token for the effective user.

## Extended Definition

Apps Script Script service adds ScriptApp.getIdentityToken() to return an identity token for the effective user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- Added the ScriptApp enum AuthMode , which identifies categories of authorized services that Apps Script can execute through a triggered function.

### "Advanced Cloud Identity Groups Service \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/advanced/groups](https://developers.google.com/apps-script/advanced/groups)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Advanced Cloud Identity Groups Service Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.
- The advanced Cloud Identity Groups (CIG) service lets you use the CIG API in Google Apps Script.
- Sample code is provided for creating groups, searching for groups, and managing group memberships. access the CIG API in Apps Script.

### Connect to Google Cloud services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make an authenticated request Once configured, you can include the identity token in the Authorization header of your requests: function callCloudRunService () { const idToken = ScriptApp . getIdentityToken (); const url = 'https://your-service-url.a.run.app' ; const response = UrlFetchApp . fetch ( url , { headers : { 'Authorization' : 'Bearer ' + idToken } }); Logger . log ( response . getContentText ()); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To find your script's client ID, you can decode an identity token: function logClientId () { const idToken = ScriptApp . getIdentityToken (); const body = idToken . split ( '.' )[ 1 ]; const decoded = Utilities . newBlob ( Utilities . base64Decode ( body )). getDataAsString (); const payload = JSON . parse ( decoded ); Logger . log ( 'Client ID: ' + payload . aud ); } For Cloud Run, you can configure custom audiences to allow this client ID.
- You can use the ScriptApp.getIdentityToken() method to get an OpenID Connect identity token (a JSON Web Token or JWT) for the effective user.
- In your script project's manifest file ( appsscript.json ), add the openid scope and any other required scopes to the oauthScopes array: { "timeZone" : "America/New York" , "dependencies" : { }, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "openid" , "https://www.googleapis.com/auth/script.external request" , "https://www.googleapis.com/auth/userinfo.email" ] } Configure the Google Cloud service You must configure the Google Cloud service to accept the identity token issued to your script.


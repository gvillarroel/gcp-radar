---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.603Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsListDialog OAuth token support"
feature_slug: "docslistdialog-oauth-token-support"
latest_feature_date: "2014-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes"
  - "https://developers.google.com/apps-script/guides/service-account"
keywords:
  - "docslistdialog"
  - "oauth"
  - "token"
  - "can"
  - "accept"
  - "fetching"
  - "user"
  - "specific"
---

# DocsListDialog OAuth token support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocsListDialog can accept an OAuth 2.0 token for fetching user-specific dialog data.

## Extended Definition

DocsListDialog can accept an OAuth 2.0 token for fetching user-specific dialog data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes](https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes)
- [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the UiService method DocsListDialog.setOAuthToken(oAuthToken) , which sets an OAuth 2.0 token to use when fetching data for the dialog, on behalf of the user whose content should be shown.
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- Change The UiService widget DocsListDialog now requires that you call DocsListDialog.setOAuthToken(oAuthToken) before calling DocsListDialog.showDocsPicker() .
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.

### Monitor & restrict data access \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes](https://developers.google.com/apps-script/guides/admin/monitor-restrict-oauth-scopes)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor OAuth grant events by scope To view events where users grant access to a specific scope or scopes, follow these steps: In the Google Admin console, go to Menu menu Security Security center Investigation tool .
- To revoke access to a scope, follow the steps for Monitor OAuth grant events by scope , then select the events you want to revoke and click Revoke access tokens for users .
- If an app requests access to a restricted high-risk OAuth scope, and you have not specifically trusted the app, users cannot authorize it.
- Administrators can create alerts to be notified when users grant access to specific OAuth scopes.

### "Authenticate as an Google Apps Script project using service accounts \_\

- URL: [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call an API using service account credentials To use the service account credentials from your Apps Script project, you can use the following function getServiceAccountService() : / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties () . getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set. ' + 'Please follow the setup instructions.' ); } const serviceAccountKey = JSON . parse ( serviceAccountKeyString ); const CLIENT EMAIL = serviceAccountKey . client email ; const PRIVATE KEY = serviceAccountKey . private key ; // Replace with the specific scopes required for your API. const SCOPES = [ ' SCOPE ' ]; return OAuth2 . createService ( 'ServiceAccount' ) . setTokenUrl ( 'https://oauth2.googleapis.com/token' ) . setPrivateKey ( PRIVATE KEY ) . setIssuer ( CLIENT EMAIL ) . setPropertyStore ( PropertiesService . getScriptProperties ()) . setScope ( SCOPES ); } Replace SCOPE with the authorization scope that you need to call the API.
- If you're calling Google APIs using UrlFetchApp , you can get an access token for the script user by calling ScriptApp.getOAuthToken .
- The authentication method ScriptApp.getOAuthToken can fail when you share the project with other users.
- Using ScriptApp.getOAuthToken often grants a script all user permissions, which can be too broad.


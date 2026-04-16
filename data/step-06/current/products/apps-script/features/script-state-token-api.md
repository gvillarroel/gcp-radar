---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.612Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script state token API"
feature_slug: "script-state-token-api"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/service-account"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "script"
  - "state"
  - "token"
  - "scriptapp"
  - "can"
  - "create"
  - "tokens"
  - "use"
---

# Script state token API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptApp can create state tokens for use in callback flows such as OAuth.

## Extended Definition

ScriptApp can create state tokens for use in callback flows such as OAuth.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- Fixed Fixed a minor bug Script as a Service related to expired tokens.

### "Authenticate as an Google Apps Script project using service accounts \_\

- URL: [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call an API using service account credentials To use the service account credentials from your Apps Script project, you can use the following function getServiceAccountService() : / Get a new OAuth2 service for a given service account. / function getServiceAccountService () { const serviceAccountKeyString = PropertiesService . getScriptProperties () . getProperty ( 'SERVICE ACCOUNT KEY' ); if ( ! serviceAccountKeyString ) { throw new Error ( 'SERVICE ACCOUNT KEY property is not set. ' + 'Please follow the setup instructions.' ); } const serviceAccountKey = JSON . parse ( serviceAccountKeyString ); const CLIENT EMAIL = serviceAccountKey . client email ; const PRIVATE KEY = serviceAccountKey . private key ; // Replace with the specific scopes required for your API. const SCOPES = [ ' SCOPE ' ]; return OAuth2 . createService ( 'ServiceAccount' ) . setTokenUrl ( 'https://oauth2.googleapis.com/token' ) . setPrivateKey ( PRIVATE KEY ) . setIssuer ( CLIENT EMAIL ) . setPropertyStore ( PropertiesService . getScriptProperties ()) . setScope ( SCOPES ); } Replace SCOPE with the authorization scope that you need to call the API.
- If you're calling Google APIs using UrlFetchApp , you can get an access token for the script user by calling ScriptApp.getOAuthToken .
- However, using service accounts provides several advantages over ScriptApp.getOAuthToken in some scenarios.
- The authentication method ScriptApp.getOAuthToken can fail when you share the project with other users.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .
- In the Apps Script project, go to Project Settings , click Edit script properties , then click Add script property to add the following script properties: LOCATION with the location of the Google Cloud project created in previous steps such as us-central1 .
- Home Google Workspace Apps Script Samples Send feedback Fact-check statements with an ADK AI agent and Gemini model Stay organized with collections Save and categorize content based on your preferences.
- Go to Create a Project In the Project Name field, enter a descriptive name for your project.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.612Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ScriptApp.getOAuthToken()"
feature_slug: "scriptapp-getoauthtoken"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/service-account"
  - "https://developers.google.com/apps-script/guides/dialogs"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "scriptapp"
  - "getoauthtoken"
  - "returns"
  - "script"
  - "oauth"
  - "access"
  - "token"
---

# ScriptApp.getOAuthToken()

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptApp.getOAuthToken() returns the script's OAuth 2.0 access token.

## Extended Definition

ScriptApp.getOAuthToken() returns the script's OAuth 2.0 access token.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### "Authenticate as an Google Apps Script project using service accounts \_\

- URL: [https://developers.google.com/apps-script/guides/service-account](https://developers.google.com/apps-script/guides/service-account)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're calling Google APIs using UrlFetchApp , you can get an access token for the script user by calling ScriptApp.getOAuthToken .
- However, using service accounts provides several advantages over ScriptApp.getOAuthToken in some scenarios.
- The authentication method ScriptApp.getOAuthToken can fail when you share the project with other users.
- Using ScriptApp.getOAuthToken often grants a script all user permissions, which can be too broad.

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case, the function includes an unused call to a DriveApp method to ensure that Apps Script requests access to all files in the user's Drive. @return {string} The user's OAuth 2.0 access token. / function getOAuthToken () { return ScriptApp . getOAuthToken (); } dialog.html picker/dialog.html View on GitHub <!DOCTYPE html> <html> <head> <link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css" /> <style> #result { display: flex; flex-direction: column; gap: 0.25em; } pre { font-size: x-small; max-height: 25vh; overflow-y: scroll; background: #eeeeee; padding: 1em; border: 1px solid #cccccc; } </style> <script> // TODO: Replace the value for DEVELOPER KEY with the API key obtained // from the Google Developers Console. const DEVELOPER KEY = "AIza..."; // TODO: Replace the value for CLOUD PROJECT NUMBER with the project // number obtained from the Google Developers Console. const CLOUD PROJECT NUMBER = "1234567890"; let pickerApiLoaded = false; let oauthToken; / Loads the Google Picker API. / function onApiLoad() { gapi.load("picker", { callback: function () { pickerApiLoaded = true; }, }); } / Gets the user's OAuth 2.0 access token from the server-side script so that it can be passed to Picker.
- The Apps Script project manifest must specify the authorization scopes required by the Google Picker API so that ScriptApp.getOAuthToken returns the correct token for PickerBuilder.setOauthtoken .
- Otherwise, your Picker code will need to declare its own OAuth scopes. / function getOAuthToken() { google.script.run .withSuccessHandler((token) => { oauthToken = token; createPicker(token); }) .withFailureHandler(showError) .getOAuthToken(); } / Creates a Picker that can access the user's spreadsheets.
- For details on the response object, see https://developers.google.com/picker/reference/picker.responseobject @param {PickerResponse} data The response object. / function pickerCallback(data) { const action = data[google.picker.Response.ACTION]; if (action == google.picker.Action.PICKED) { handlePicked(data); } else if (action == google.picker.Action.CANCEL) { document.getElementById("result").innerHTML = "Picker canceled."; } } / Handles "PICKED" responsed from the Google Picker. @param {PickerResponse} data The response object. / function handlePicked(data) { const doc = data[google.picker.Response.DOCUMENTS][0]; const id = doc[google.picker.Document.ID]; google.script.run .withSuccessHandler((driveFilesGetResponse) => { // Render the response from Picker and the Drive.Files.Get API. const resultElement = document.getElementById("result"); resultElement.innerHTML = ""; for (const response of [ { title: "Picker response", content: JSON.stringify(data, null, 2), }, { title: "Drive.Files.Get response", content: JSON.stringify(driveFilesGetResponse, null, 2), }, ]) { const titleElement = document.createElement("h3"); titleElement.appendChild(document.createTextNode(response.title)); resultElement.appendChild(titleElement); const contentElement = document.createElement("pre"); contentElement.appendChild( document.createTextNode(response.content) ); resultElement.appendChild(contentElement); } }) .withFailureHandler(showError) .getFile(data[google.picker.Response.DOCUMENTS][0].id); } / Displays an error message within the #result element. @param {string} message The error message to display. / function showError(message) { document.getElementById("result").innerHTML = "Error: " + message; } </script> </head> <body> <div> <button onclick="getOAuthToken()">Select a file</button> <div id="result"></div> </div> <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script> </body> </html> appsscript.json picker/appsscript.json View on GitHub { "timeZone" : "America/Los Angeles" , "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "https://www.googleapis.com/auth/script.container.ui" , "https://www.googleapis.com/auth/drive.file" ], "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Drive" , "version" : "v3" , "serviceId" : "drive" } ] } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.


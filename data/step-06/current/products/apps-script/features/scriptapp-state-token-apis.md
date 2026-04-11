---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.775Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ScriptApp state-token APIs"
feature_slug: "scriptapp-state-token-apis"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "statetokenbuilder"
  - "newstatetoken"
  - "token"
  - "state"
  - "including"
  - "scriptapp"
  - "added"
  - "apis"
---

# ScriptApp state-token APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added ScriptApp state-token APIs, including StateTokenBuilder, ScriptApp.newStateToken(), and ScriptApp.getOAuthToken().

## Extended Definition

Added ScriptApp state-token APIs, including StateTokenBuilder, ScriptApp.newStateToken(), and ScriptApp.getOAuthToken().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- StateTokenBuilder ScriptApp.getOAuthToken() `ScriptApp.newStateToken() Added the method showModalDialog(userInterface, title) to the Ui class, and replaced the method showDialog(userInterface) with showModelessDialog(userInterface, title) .
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .
- It analyzes a statement, grounds its response using the latest web information, and returns the result in the format you need: Usage: =FACT CHECK("Your statement here") for a concise and summarized output. =FACT CHECK("Your statement here", "Your output formatting instructions here") for a specific output format.
- View on GitHub Create and configure in a new spreadsheet To make a complete copy of the sample Sheets spreadsheet including its container-bound Apps Script project, click the following button: Copy Google Sheets speadsheet In the newly created spreadsheet, go to Extensions > Apps Script .

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- Aliases . insert ( alias , userEmail ); console . log ( "Created alias %s for user %s." , alias . alias , userEmail ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } List all groups This sample lists all the groups in the domain. advanced/adminSDK.gs View on GitHub / Lists all the groups in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list / function listAllGroups () { let pageToken ; let page ; do { page = AdminDirectory .
- Members . insert ( member , groupEmail ); console . log ( "User %s added as a member of group %s." , userEmail , groupEmail , ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


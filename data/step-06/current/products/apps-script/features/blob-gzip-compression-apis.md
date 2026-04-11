---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.701Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Blob gzip compression APIs"
feature_slug: "blob-gzip-compression-apis"
latest_feature_date: "2018-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "compression"
  - "compress"
  - "gzip"
  - "blob"
  - "utilities"
  - "added"
  - "apis"
  - "to"
---

# Blob gzip compression APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added Utilities APIs to compress and decompress Blob objects using gzip.

## Extended Definition

Added Utilities APIs to compress and decompress Blob objects using gzip.

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
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The Utilities service now has methods to compress and decompress Blob objects using gzip .
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Members . insert ( member , groupEmail ); console . log ( "User %s added as a member of group %s." , userEmail , groupEmail , ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- Users . insert ( user ); console . log ( "User %s created with ID %s." , user . primaryEmail , user . id ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Create alias This sample creates an alias (nickname) for a user. advanced/adminSDK.gs View on GitHub / Creates an alias (nickname) for a user. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert / function createAlias () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; let alias = { alias : "chica@example.com" , }; try { alias = AdminDirectory .


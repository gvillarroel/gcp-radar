---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.801Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp DockPanel widget"
feature_slug: "uiapp-dockpanel-widget"
latest_feature_date: "2013-04-15"
deprecation_date: "2013-04-15"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "dockpanel"
  - "deprecated"
  - "limited"
  - "widget"
  - "uiapp"
  - "due"
  - "the"
  - "to"
---

# UiApp DockPanel widget

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Deprecated the UiApp DockPanel widget due to limited usability; deprecated on 2013-04-15.

## Extended Definition

Deprecated the UiApp DockPanel widget due to limited usability; deprecated on 2013-04-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Deprecated Deprecated UiApp widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel , which had limited usability.
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.
- Added the ability to include a limited set of HTML tags when working with UiApp widgets, in response to this issue .

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . list ({ domain : "example.com" , orderBy : "givenName" , maxResults : 100 , pageToken : pageToken , }); const users = page . users ; if ( ! users ) { console . log ( "No users found." ); return ; } // Print the user's full name and email. for ( const user of users ) { console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Get user This sample gets a user by their email address and logs all of their data as a JSON string. advanced/adminSDK.gs View on GitHub / Get a user by their email address and logs all of their data as a JSON string. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get / function getUser () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; try { const user = AdminDirectory .
- Users . insert ( user ); console . log ( "User %s created with ID %s." , user . primaryEmail , user . id ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Create alias This sample creates an alias (nickname) for a user. advanced/adminSDK.gs View on GitHub / Creates an alias (nickname) for a user. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert / function createAlias () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; let alias = { alias : "chica@example.com" , }; try { alias = AdminDirectory .
- Aliases . insert ( alias , userEmail ); console . log ( "Created alias %s for user %s." , alias . alias , userEmail ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } List all groups This sample lists all the groups in the domain. advanced/adminSDK.gs View on GitHub / Lists all the groups in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list / function listAllGroups () { let pageToken ; let page ; do { page = AdminDirectory .

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- LIMITED source A Presentation object, representing the Slides file to which the script is bound.
- LIMITED source A Spreadsheet object, representing the Sheets file to which the script is bound.
- LIMITED source A Document object, representing the Docs file to which the script is bound.
- LIMITED source A Form object, representing the Forms file to which the script is bound.


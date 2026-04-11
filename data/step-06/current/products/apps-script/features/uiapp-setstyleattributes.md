---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.817Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp setStyleAttributes"
feature_slug: "uiapp-setstyleattributes"
latest_feature_date: "2012-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/docs"
keywords:
  - "setstyleattributes"
  - "attributes"
  - "style"
  - "widgets"
  - "setting"
  - "multiple"
  - "uiapp"
  - "now"
---

# UiApp setStyleAttributes

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp widgets now support setting multiple style attributes at once through setStyleAttributes().

## Extended Definition

UiApp widgets now support setting multiple style attributes at once through setStyleAttributes().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 20, 2012 Feature UiApp widgets now have a setStyleAttributes method which allow you to set multiple attributes at once.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Issue 1030 : The setStyleAttribute() method of various UiApp objects now properly sets the 'float' attribute in Firefox.
- Issue 2052 : UiApp' s setStyleAttribute() method no longer rejects certain style attributes.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .
- Get a group's settings This sample gets a group's settings and logs them to the console. advanced/adminSDK.gs View on GitHub / Gets a group's settings and logs them to the console. / function getGroupSettings () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings .
- Groups . get ( groupId ); console . log ( JSON . stringify ( group , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Update a group's settings This sample shows how a group's settings can be changed.
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Note that when possible you should batch together multiple operations into a single batchUpdate call for efficiency. advanced/docs.gs View on GitHub / Insert text at the beginning of the first tab in the document and then style the inserted text. @param {string} documentId The document the text is inserted into. @param {string} text The text to insert into the document. @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function insertAndStyleText ( documentId , text ) { const requests = [ { insertText : { location : { index : 1 , // A tab can be specified using its ID.
- Documents . get ( documentId , { includeTabsContent : true , }); const firstTab = document . tabs [ 0 ]; const bodyElements = firstTab . documentTab . body . content ; for ( let i = 0 ; i < bodyElements . length ; i ++ ) { const structuralElement = bodyElements [ i ]; // Print the first paragraph text present in document if ( structuralElement . paragraph ) { const paragraphElements = structuralElement . paragraph . elements ; let paragraphText = "" ; for ( let j = 0 ; j < paragraphElements . length ; j ++ ) { const paragraphElement = paragraphElements [ j ]; if ( paragraphElement . textRun !== null ) { paragraphText += paragraphElement . textRun . content ; } } console . log ( paragraphText ); return paragraphText ; } } } Best Practices Batch Updates When using the advanced Docs service, combine multiple requests in an array rather than calling batchUpdate in a loop.
- Because of the structured nature of paragraphs in the Docs API, this involves combining the text of multiple sub-elements. advanced/docs.gs View on GitHub / Read the first paragraph of the first tab in a document. @param {string} documentId The ID of the document to read. @return {Object} paragraphText @see https://developers.google.com/docs/api/reference/rest/v1/documents/get / function readFirstParagraph ( documentId ) { // Get the document using document ID const document = Docs .
- Documents . batchUpdate ( { requests : requests }, documentId , ); const replies = response . replies ; for ( const [ index ] of replies . entries ()) { const numReplacements = replies [ index ]. replaceAllText . occurrencesChanged 0 ; console . log ( "Request %s performed %s replacements." , index , numReplacements , ); } return replies ; } Insert and style text This sample inserts new text at the start of the first tab in the document and styles it with a specific font and size.


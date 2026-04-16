---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.674Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Document service"
feature_slug: "document-service"
latest_feature_date: "2011-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs"
  - "https://developers.google.com/apps-script/advanced/docs"
keywords:
  - "document"
  - "apps"
  - "script"
  - "includes"
  - "interacting"
  - "docs"
  - "documents"
---

# Document service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a service for interacting with Google Docs documents.

## Extended Definition

Apps Script includes a service for interacting with Google Docs documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- For more information, see the following documentation: getEventType() for events getEventType() for event series EventType enum October 02, 2024 Announcement Apps Script has rescheduled the shutdown date of the Contacts service to January 31, 2025.

### Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In either case, you can interact with a Docs document by using Apps Script's Document Service , as the following example demonstrates. function createDoc () { var doc = DocumentApp . create ( 'Sample Document' ); var documentTab = doc . getTab ( 't.0' ). asDocumentTab (); var body = documentTab . getBody (); var rowsData = [[ 'Plants' , 'Animals' ], [ 'Ficus' , 'Goat' ], [ 'Basil' , 'Cat' ], [ 'Moss' , 'Frog' ]]; body . insertParagraph ( 0 , doc . getName ()) . setHeading ( DocumentApp .
- The basics Apps Script can interact with Docs in two broad ways: any script can create or modify a document if the script's user has appropriate permissions for the document, and a script can also be bound to a document, which gives the script special abilities to alter the user interface or respond when the document is opened.
- Structure of a document From Apps Script's perspective, a Docs document is structured much like an HTML document—that is, a document is composed of one or more Tab objects, each of which contain elements (like a Paragraph or Table ) that often contain other elements.
- Apps Script can interact with Google Docs by either creating or modifying a document with appropriate permissions or by being bound to a document for special UI abilities.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .
- Documents . get ( documentId , { includeTabsContent : true , }); const firstTab = document . tabs [ 0 ]; const bodyElements = firstTab . documentTab . body . content ; for ( let i = 0 ; i < bodyElements . length ; i ++ ) { const structuralElement = bodyElements [ i ]; // Print the first paragraph text present in document if ( structuralElement . paragraph ) { const paragraphElements = structuralElement . paragraph . elements ; let paragraphText = "" ; for ( let j = 0 ; j < paragraphElements . length ; j ++ ) { const paragraphElement = paragraphElements [ j ]; if ( paragraphElement . textRun !== null ) { paragraphText += paragraphElement . textRun . content ; } } console . log ( paragraphText ); return paragraphText ; } } } Best Practices Batch Updates When using the advanced Docs service, combine multiple requests in an array rather than calling batchUpdate in a loop.
- Note that when possible you should batch together multiple operations into a single batchUpdate call for efficiency. advanced/docs.gs View on GitHub / Insert text at the beginning of the first tab in the document and then style the inserted text. @param {string} documentId The document the text is inserted into. @param {string} text The text to insert into the document. @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function insertAndStyleText ( documentId , text ) { const requests = [ { insertText : { location : { index : 1 , // A tab can be specified using its ID.
- Because of the structured nature of paragraphs in the Docs API, this involves combining the text of multiple sub-elements. advanced/docs.gs View on GitHub / Read the first paragraph of the first tab in a document. @param {string} documentId The ID of the document to read. @return {Object} paragraphText @see https://developers.google.com/docs/api/reference/rest/v1/documents/get / function readFirstParagraph ( documentId ) { // Get the document using document ID const document = Docs .


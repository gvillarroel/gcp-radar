---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.502Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Document tabs in Document service"
feature_slug: "document-tabs-in-document-service"
latest_feature_date: "2024-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/docs/tabs"
  - "https://developers.google.com/apps-script/advanced/docs"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "document"
  - "tabs"
  - "lets"
  - "scripts"
  - "create"
  - "organize"
  - "docs"
  - "documents"
---

# Document tabs in Document service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Document service tabs support lets scripts create and organize tabs in Google Docs documents.

## Extended Definition

Document service tabs support lets scripts create and organize tabs in Google Docs documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Docs allows users to create one or more tabs within a single document, similar to how there are tabs in Sheets today.
- Changes to Document Class structure In the past, documents did not have a concept of tabs, so the Document Class exposed methods to directly access and modify the text contents of the document.
- Google Docs introduces tabs as an organizational layer within a single document, similar to Sheets.
- Google Apps Script for Google Docs lets you access content from any tab in the document.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .
- Documents . get ( documentId , { includeTabsContent : true , }); const firstTab = document . tabs [ 0 ]; const bodyElements = firstTab . documentTab . body . content ; for ( let i = 0 ; i < bodyElements . length ; i ++ ) { const structuralElement = bodyElements [ i ]; // Print the first paragraph text present in document if ( structuralElement . paragraph ) { const paragraphElements = structuralElement . paragraph . elements ; let paragraphText = "" ; for ( let j = 0 ; j < paragraphElements . length ; j ++ ) { const paragraphElement = paragraphElements [ j ]; if ( paragraphElement . textRun !== null ) { paragraphText += paragraphElement . textRun . content ; } } console . log ( paragraphText ); return paragraphText ; } } } Best Practices Batch Updates When using the advanced Docs service, combine multiple requests in an array rather than calling batchUpdate in a loop.
- Create document This sample creates a new document. advanced/docs.gs View on GitHub / Create a new document. @see https://developers.google.com/docs/api/reference/rest/v1/documents/create @return {string} documentId / function createDocument () { // Create document with title const document = Docs .
- Documents . create ({ title : "My New Document" }); console . log ( Created document with ID: ${ document . documentId } ); return document . documentId ; } Find and replace text This sample finds and replaces pairs of text across all tabs in a document.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- For scripts created prior to June 8, 2012, the Share button will remain if the checkbox to "Allow document collaborators to edit project" or "Allow site collaborators and owners to edit project" was not selected for that script.
- Feature Added the following DocumentApp classes and methods, which allow scripts to create bookmarks and named ranges, plus set the user's cursor position or selection.


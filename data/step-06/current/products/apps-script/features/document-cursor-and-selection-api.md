---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.610Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Document cursor and selection API"
feature_slug: "document-cursor-and-selection-api"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/docs/tabs"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/dialogs"
keywords:
  - "document"
  - "cursor"
  - "selection"
  - "documentapp"
  - "can"
  - "create"
  - "positions"
  - "ranges"
---

# Document cursor and selection API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocumentApp can create positions and ranges and set the user's cursor or selection.

## Extended Definition

DocumentApp can create positions and ranges and set the user's cursor or selection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)

## Supporting Pages

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes all child tabs . / function getAllTabs ( doc ) { const allTabs = []; // Iterate over all tabs and recursively add any child tabs to // generate a flat list of Tabs . for ( const tab of doc . getTabs ()) { addCurrentAndChildTabs ( tab , allTabs ); } return allTabs ; } / Adds the provided tab to the list of all tabs , and recurses through and adds all child tabs . / function addCurrentAndChildTabs ( tab , allTabs ) { allTabs . push ( tab ); for ( const childTab of tab . getChildTabs ()) { addCurrentAndChildTabs ( childTab , allTabs ); } } Read tab content from the first tab in the document This is similar to reading all tabs. / Logs all text contents from the first tab in the active document . / function logAllText () { // Generate a list of all the tabs in the document , including any // nested child tabs . const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); // Log the content from the first tab in the document . const firstTab = allTabs [ 0 ]; // Get the DocumentTab from the generic Tab object . const documentTab = firstTab . asDocumentTab (); // Get the body from the DocumentTab . const body = documentTab . getBody (); // Get the body text and log it to the console . console . log ( body . getText ()); } Update tab contents in the first tab The following partial code sample shows how to target a specific tab when making updates. / Inserts text into the first tab of the active document . / function insertTextInFirstTab () { // Get the first tab 's body. const doc = DocumentApp . getActiveDocument (); const firstTab = doc . getTabs ()[ 0 ]; const firstDocumentTab = firstTab . asDocumentTab (); const firstTabBody = firstDocumentTab . getBody (); // Append a paragraph and a page break to the first tab 's body // section . firstTabBody . appendParagraph ( "A paragraph." ); firstTabBody . appendPageBreak (); } Update tab contents in the active or selected tab The following partial code sample shows how to target the active tab when making updates. / Inserts text into the active / selected tab of the active document . / function insertTextInActiveTab () { // Get the active / selected tab 's body. const doc = DocumentApp . getActiveDocument (); const activeTab = doc . getActiveTab (); const activeDocumentTab = activeTab . asDocumentTab (); const activeTabBody = activeDocumentTab . getBody (); // Append a paragraph and a page break to the active tab 's body // section . activeTabBody . appendParagraph ( "A paragraph." ); activeTabBody . appendPageBreak (); } Set a cursor position or selection range in the active tab The following partial code sample shows how to update the cursor position or the selection range within the user's active tab.
- A document does not support multiple tab selections or multiple positions or ranges across different tabs.
- Only changes the selection if there is a tab following the currently selected one. / function selectNextTab () { const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); const activeTab = doc . getActiveTab (); // Find the index of the currently active tab . let activeTabIndex = - 1 ; for ( let i = 0 ; i allTabs . length ; i ++ ) { if ( allTabs [ i ] . getId () === activeTab . getId ()) { activeTabIndex = i ; } } // Update the user ' s selected tab if there is a valid next tab . const nextTabIndex = activeTabIndex + 1 ; if ( nextTabIndex allTabs . length ) { doc . setActiveTab ( allTabs [ nextTabIndex ] . getId ()); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This is only relevant in bound scripts. / Changes the user's selection to select all tables within the tab with the provided ID. / function selectAllTables ( tabId ) { const doc = DocumentApp . getActiveDocument (); const tab = doc . getTab ( tabId ); const documentTab = tab . asDocumentTab (); // Build a range that encompasses all tables within the specified // tab . const rangeBuilder = documentTab . newRange (); const tables = documentTab . getBody (). getTables (); for ( let i = 0 ; i tables . length ; i ++ ) { rangeBuilder . addElement ( tables [ i ] ); } // Set the document 's selection to the tables within the specified // tab.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the following DocumentApp classes and methods, which allow scripts to create bookmarks and named ranges, plus set the user's cursor position or selection.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- Change Any script that is container-bound to a Google Doc can now access the active user's Cursor and Selection by calling Document.getCursor() and Document.getSelection() , respectively.
- Change Renamed the Cursor object in DocumentApp to Position .

### "Dialogs and Sidebars in Google Workspace Documents \_|\_ Apps Script \_\

- URL: [https://developers.google.com/apps-script/guides/dialogs](https://developers.google.com/apps-script/guides/dialogs)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show dialog' , 'showDialog' ) . addToUi (); } function showDialog () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setWidth ( 400 ) . setHeight ( 300 ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showModalDialog ( html , 'My custom dialog' ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> Custom sidebars A sidebar can display an HTML service user interface inside a Docs, Forms, Slides, and Sheets editor.
- Code.gs function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . createMenu ( 'Custom Menu' ) . addItem ( 'Show sidebar' , 'showSidebar' ) . addToUi (); } function showSidebar () { const html = HtmlService . createHtmlOutputFromFile ( 'Page' ) . setTitle ( 'My custom sidebar' ); SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp . . showSidebar ( html ); } Page.html Hello, world! <input type="button" value="Close" onclick="google.script.host.close()" /> File-open dialogs Google Picker is a JavaScript API that lets users select or upload Google Drive files.
- To evaluate the user's response, capture the return value for prompt , then call PromptResponse.getResponseText to retrieve the user's input, and compare the return value for PromptResponse.getSelectedButton to the Ui.Button enum. function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp. . createMenu ( "Custom Menu" ) . addItem ( "Show prompt" , "showPrompt" ) . addToUi (); } function showPrompt () { const ui = SpreadsheetApp . getUi (); // Same variations. const result = ui . prompt ( "Let's get to know each other!" , "Please enter your name:" , ui .
- To evaluate which button the user clicked, compare the return value for alert to the Ui.Button enum. function onOpen () { SpreadsheetApp . getUi () // Or DocumentApp or SlidesApp or FormApp. . createMenu ( "Custom Menu" ) . addItem ( "Show alert" , "showAlert" ) . addToUi (); } function showAlert () { const ui = SpreadsheetApp . getUi (); // Same variations. const result = ui . alert ( "Please confirm" , "Are you sure you want to continue?" , ui .


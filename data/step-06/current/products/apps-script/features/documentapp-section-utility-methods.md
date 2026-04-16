---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.624Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocumentApp section utility methods"
feature_slug: "documentapp-section-utility-methods"
latest_feature_date: "2013-09-09"
deprecation_date: "2013-09-09"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs/tabs"
  - "https://developers.google.com/apps-script/guides/services"
keywords:
  - "documentapp"
  - "section"
  - "utility"
  - "methods"
  - "footnotes"
  - "link"
  - "urls"
  - "document"
---

# DocumentApp section utility methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocumentApp methods for footnotes, link URLs, document-end checks, and sibling navigation in header and footer sections were deprecated; deprecated on 2013-09-09.

## Extended Definition

DocumentApp methods for footnotes, link URLs, document-end checks, and sibling navigation in header and footer sections were deprecated; deprecated on 2013-09-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- September 09, 2013 Deprecated Deprecated the DocumentApp methods getFootnotes() , getLinkUrl() , setLinkUrl(url) , and isAtDocumentEnd() in the classes FooterSection , FootnoteSection , and HeaderSection , as well as the methods getNextSibling() and getPreviousSibling() in the classes FooterSection and HeaderSection .
- Feature Added the DocumentApp methods InlineImage.getLinkUrl() and InlineImage.setLinkUrl(url) .
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- To simplify the Document service, the following methods were removed from the Body class: getNextSibling() , getPreviousSibling() , isAtDocumentEnd() , getLinkUrl() , setLinkUrl() , and removeFromParent() .

### Work with tabs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs/tabs](https://developers.google.com/apps-script/guides/docs/tabs)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Includes all child tabs . / function getAllTabs ( doc ) { const allTabs = []; // Iterate over all tabs and recursively add any child tabs to // generate a flat list of Tabs . for ( const tab of doc . getTabs ()) { addCurrentAndChildTabs ( tab , allTabs ); } return allTabs ; } / Adds the provided tab to the list of all tabs , and recurses through and adds all child tabs . / function addCurrentAndChildTabs ( tab , allTabs ) { allTabs . push ( tab ); for ( const childTab of tab . getChildTabs ()) { addCurrentAndChildTabs ( childTab , allTabs ); } } Read tab content from the first tab in the document This is similar to reading all tabs. / Logs all text contents from the first tab in the active document . / function logAllText () { // Generate a list of all the tabs in the document , including any // nested child tabs . const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); // Log the content from the first tab in the document . const firstTab = allTabs [ 0 ]; // Get the DocumentTab from the generic Tab object . const documentTab = firstTab . asDocumentTab (); // Get the body from the DocumentTab . const body = documentTab . getBody (); // Get the body text and log it to the console . console . log ( body . getText ()); } Update tab contents in the first tab The following partial code sample shows how to target a specific tab when making updates. / Inserts text into the first tab of the active document . / function insertTextInFirstTab () { // Get the first tab 's body. const doc = DocumentApp . getActiveDocument (); const firstTab = doc . getTabs ()[ 0 ]; const firstDocumentTab = firstTab . asDocumentTab (); const firstTabBody = firstDocumentTab . getBody (); // Append a paragraph and a page break to the first tab 's body // section . firstTabBody . appendParagraph ( "A paragraph." ); firstTabBody . appendPageBreak (); } Update tab contents in the active or selected tab The following partial code sample shows how to target the active tab when making updates. / Inserts text into the active / selected tab of the active document . / function insertTextInActiveTab () { // Get the active / selected tab 's body. const doc = DocumentApp . getActiveDocument (); const activeTab = doc . getActiveTab (); const activeDocumentTab = activeTab . asDocumentTab (); const activeTabBody = activeDocumentTab . getBody (); // Append a paragraph and a page break to the active tab 's body // section . activeTabBody . appendParagraph ( "A paragraph." ); activeTabBody . appendPageBreak (); } Set a cursor position or selection range in the active tab The following partial code sample shows how to update the cursor position or the selection range within the user's active tab.
- The following methods fall into this category: Document.addBookmark Document.addFooter Document.addHeader Document.addNamedRange Document.getBody Document.getBookmark Document.getBookmarks Document.getFooter Document.getFootnotes Document.getHeader Document.getNamedRangeById Document.getNamedRanges Document.getNamedRanges Document.newPosition Document.newRange With the additional structural hierarchy of tabs, these methods no longer semantically represent the text content from all tabs in the document.
- For example, consider a document that contains a tab hierarchy as follows: In order to access Tab 3.1.2 , do the following: // Print the ID of Tab 3.1.2. const doc = DocumentApp . getActiveDocument (); const tab = doc . getTabs ()[ 2 ]. getChildTabs ()[ 0 ]. getChildTabs ()[ 1 ]; console . log ( tab . getId ()); See the sample code blocks in the later sections for sample code that iterates across all tabs in a document.
- Only changes the selection if there is a tab following the currently selected one. / function selectNextTab () { const doc = DocumentApp . getActiveDocument (); const allTabs = getAllTabs ( doc ); const activeTab = doc . getActiveTab (); // Find the index of the currently active tab . let activeTabIndex = - 1 ; for ( let i = 0 ; i allTabs . length ; i ++ ) { if ( allTabs [ i ] . getId () === activeTab . getId ()) { activeTabIndex = i ; } } // Update the user ' s selected tab if there is a valid next tab . const nextTabIndex = activeTabIndex + 1 ; if ( nextTabIndex allTabs . length ) { doc . setActiveTab ( allTabs [ nextTabIndex ] . getId ()); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Built-in Google Services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services](https://developers.google.com/apps-script/guides/services)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scripts make method calls in this format: GlobalObjectName.methodName(argument1, argument2, ..., argumentN); For example, a script can send an email by calling the sendEmail(recipient, subject, body) method of the Gmail service like so: GmailApp . sendEmail ( 'claire@example.com' , 'Subject line' , 'This is the body.' ); If a method returns another Apps Script class, chain method calls on one line. (Return types are shown both in autocomplete and in a method's reference documentation.) For example, the method DocumentApp.create() returns a Document ; thus, the following two sections of code are equivalent: var doc = DocumentApp . create ( 'New document' ); var body = doc . getTab ( 't.0' ) . asDocumentTab () . getBody (); body . appendParagraph ( 'New paragraph.' ); // Same result as above .
- DocumentApp . create ( 'New document' ) . getTab ( 't.0' ) . asDocumentTab () . getBody () . appendParagraph ( 'New paragraph.' ); Child classes Every service includes one or more child classes that you can't access from the top level as a global object.
- The reference documentation for services that control Google Workspace products are collected in the "Google Workspace Services" section under the "Reference" header in the sidebar of this site.
- If you're not sure how to access a certain class, visit the root page for the service's reference documentation—it lists the classes for the service, and the methods that return them.


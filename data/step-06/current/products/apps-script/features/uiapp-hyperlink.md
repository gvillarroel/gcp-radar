---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.623Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp hyperlink"
feature_slug: "uiapp-hyperlink"
latest_feature_date: "2013-09-16"
deprecation_date: "2013-09-16"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/libraries"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink"
keywords:
  - "uiapp"
  - "hyperlink"
  - "several"
  - "widgets"
  - "were"
  - "disabled"
  - "including"
  - "inlinehyperlink"
---

# UiApp hyperlink

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Several UiApp widgets were disabled, including Hyperlink, InlineHyperlink, LayoutPanel, and RichTextArea; deprecated on 2013-09-16.

## Extended Definition

Several UiApp widgets were disabled, including Hyperlink, InlineHyperlink, LayoutPanel, and RichTextArea; deprecated on 2013-09-16.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink](https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.
- Fixed an issue where ampersands in UiApp 's Hidden widgets were being escaped incorrectly.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.

### Class Hyperlink \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink](https://developers.google.com/apps-script/reference/add-ons-response-service/hyperlink)
- Source ID: `site-docs-reference-3`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only available for Google Workspace add-ons that extend Google Workspace Studio. const hyperLink = AddOnsResponseService . newHyperlink () . setText ( "Hyperlink text" ) . setLink ( "https://www.google.com" ); Methods Method Return type Brief description set Link(link) Hyperlink Sets the destination URL of the hyperlink. set Text(text) Hyperlink Sets the text of the hyperlink.
- Home Google Workspace Apps Script Reference Send feedback Class Hyperlink Stay organized with collections Save and categorize content based on your preferences.
- Return Hyperlink — This hyperlink object, for chaining. setText(text) Sets the text of the hyperlink.
- Parameters Name Type Description link String The destination URL of the hyperlink.

### Libraries \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/libraries](https://developers.google.com/apps-script/guides/libraries)
- Source ID: `site-docs-root`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ScriptApp UiApp User Properties Logger and execution transcript Sites, Sheets and other containers A call to getActive returns the container of the including script.
- Here is an example of a function that you would include in your library to expose its Script Properties: function getLibraryProperty ( key ) { const scriptProperties = PropertiesService . getScriptProperties (); return scriptProperties . getProperty ( key ); } The following diagram illustrates a not-shared resource using the example of Script Properties: This table lists the shared and not-shared resources for your reference: Resource Shared Not-Shared Notes Lock The same instance is visible to all including scripts when created in the library.
- The following diagram illustrates a shared resource using the example of User Properties: A not-shared resource means that both library and the including script have built-in access only to their instance of the resource.
- Libraries have both shared resources, accessible by both the library and including script, and not-shared resources, which require explicit functions to be accessed by the including script.


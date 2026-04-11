---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.646Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Docs tab creation and organization in Apps Script"
feature_slug: "docs-tab-creation-and-organization-in-apps-script"
latest_feature_date: "2024-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/docs"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reseller"
keywords:
  - "organization"
  - "creation"
  - "tab"
  - "docs"
  - "script"
  - "apps"
  - "and"
  - "in"
---

# Docs tab creation and organization in Apps Script

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Document service now supports creating and organizing tabs in Google Docs documents.

## Extended Definition

Apps Script Document service now supports creating and organizing tabs in Google Docs documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reseller](https://developers.google.com/apps-script/advanced/admin-sdk-reseller)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- Page Summary outlined flag Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.
- An add-on is an Apps Script project published to a store inside Docs or Sheets, which makes it easy for users to find and install new features.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The advanced Docs service in Apps Script allows you to use the Google Docs API to read, edit, and format Google Docs content.
- Like all advanced services in Apps Script, the advanced Docs service uses the same objects, methods, and parameters as the public API.
- Much like Apps Script's built-in Docs service , this API lets scripts read, edit, and format content in Google Docs.
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .

### "Admin SDK Google Workspace Reseller Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reseller](https://developers.google.com/apps-script/advanced/admin-sdk-reseller)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscriptions . list ({ pageToken : pageToken , }); for ( const sub of result . subscriptions ) { const creationDate = new Date (); creationDate . setUTCSeconds ( sub . creationTime ); console . log ( "customer ID: %s, date created: %s, plan name: %s, sku id: %s" , sub . customerId , creationDate . toDateString (), sub . plan . planName , sub . skuId , ); } pageToken = result . nextPageToken ; } while ( pageToken ); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Google Workspace Reseller Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Google Workspace Reseller service uses the same objects, methods, and parameters as the public API.
- Sample code is provided to demonstrate getting a list of subscriptions. in Apps Script to manage customer orders and Google Workspace subscriptions.


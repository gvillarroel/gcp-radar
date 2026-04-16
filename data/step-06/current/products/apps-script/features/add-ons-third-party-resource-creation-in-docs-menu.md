---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.511Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons third-party resource creation in Docs @ menu"
feature_slug: "add-ons-third-party-resource-creation-in-docs-menu"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs"
  - "https://developers.google.com/apps-script/guides/menus"
keywords:
  - "add"
  - "ons"
  - "third"
  - "party"
  - "resource"
  - "creation"
  - "docs"
  - "menu"
---

# Add-ons third-party resource creation in Docs @ menu

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs; Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs.

## Extended Definition

Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs; Google Workspace Add-ons can create third-party resources from the @ menu in Google Docs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- January 24, 2024 Feature ( Generally Available ): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.
- November 15, 2023 Feature ( Developer Preview ) : Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.
- To use this feature, see Create third-party resources from the @ menu .
- To use this feature, see Create third-party resources from the @ menu .

### Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add some placeholders function createPlaceholders () { var body = DocumentApp . getActiveDocument (). getActiveTab (). asDocumentTab (). getBody (); body . appendParagraph ( '{name}' ); body . appendParagraph ( '{address}' ); body . appendParagraph ( '{city} {state} {zip}' ); } Replace the placeholders function searchAndReplace () { var body = DocumentApp . getActiveDocument (). getActiveTab (). asDocumentTab (). getBody (); var client = { name : 'Joe Script-Guru' , address : '100 Script Rd' , city : 'Scriptville' , state : 'GA' , zip : 94043 }; body . replaceText ( '{name}' , client . name ); body . replaceText ( '{address}' , client . address ); body . replaceText ( '{city}' , client . city ); body . replaceText ( '{state}' , client . state ); body . replaceText ( '{zip}' , client . zip ); } Custom menus and user interfaces You can customize Docs by adding custom menus , dialog boxes, and sidebars .
- Google Apps Script lets you programmatically create and modify Docs, as well as customize the user interface with new menus, dialog boxes, and sidebars.
- Custom menus, dialog boxes, and sidebars can be added to Google Docs using Apps Script, but the script must be bound to the document.
- In either case, you can interact with a Docs document by using Apps Script's Document Service , as the following example demonstrates. function createDoc () { var doc = DocumentApp . create ( 'Sample Document' ); var documentTab = doc . getTab ( 't.0' ). asDocumentTab (); var body = documentTab . getBody (); var rowsData = [[ 'Plants' , 'Animals' ], [ 'Ficus' , 'Goat' ], [ 'Basil' , 'Cat' ], [ 'Moss' , 'Frog' ]]; body . insertParagraph ( 0 , doc . getName ()) . setHeading ( DocumentApp .

### Custom Menus in Google Workspace \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.
- The most common example is running a script from a custom menu item in Google Docs, Google Sheets, Google Slides, or Google Forms, but script functions can also be triggered by clicking on images and drawings in Sheets.
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.


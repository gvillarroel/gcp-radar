---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.647Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-ons multiselect menu support"
feature_slug: "add-ons-multiselect-menu-support"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/menus"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/add-ons/overview"
keywords:
  - "multiselect"
  - "generally"
  - "menus"
  - "menu"
  - "are"
  - "ons"
  - "now"
  - "add"
---

# Add-ons multiselect menu support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Multiselect menus are now generally available for Apps Script add-ons.

## Extended Definition

Multiselect menus are now generally available for Apps Script add-ons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)

## Supporting Pages

### Custom Menus in Google Workspace \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/menus](https://developers.google.com/apps-script/guides/menus)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Custom menus can be added to Google Docs, Sheets, Slides, or Forms and are tied to specific script functions.
- Custom menus in Docs, Sheets, Slides, or Forms Apps Script can add new menus in Docs, Sheets, Slides, or Forms, with each menu item tied to a function in a script. (In Forms, custom menus are visible only to an editor who opens the form to modify it, not to a user who opens the form to respond.) Only bound scripts can create menus.
- Editor add-ons can have menu items as well, but use special rules for how they are defined.
- For more information on the types of dialogs you can open, see the guide to dialogs and sidebars . function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp, SlidesApp or FormApp. ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menuItem1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menuItem2' )) . addToUi (); } function menuItem1 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the first menu item!' ); } function menuItem2 () { SpreadsheetApp . getUi () // Or DocumentApp, SlidesApp or FormApp. . alert ( 'You clicked the second menu item!' ); } A document, spreadsheet, presentation, or form can only contain one menu with a given name.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- July 25, 2024 Feature ( Generally Available ): Multiselect menus are now generally available for Add-ons.
- February 21, 2024 Feature ( Developer Preview ): Multiselect menus are now in Developer Preview for Add-ons.
- For more information refer to the following: SelectionInput for Apps Script SelectionInput for HTTP runtimes Feature ( Generally Available ): Columns are now generally available for Add-ons.
- January 24, 2024 Feature ( Generally Available ): Google Workspace Add-ons now support third-party resource creation from the @ menu in Google Docs.

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Subscribe now Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag Google Workspace add-ons are custom applications that enhance Google Workspace functionality by automating tasks, connecting to third-party services, and streamlining workflows.
- Google Workspace add-ons API Some features, like extending the Google Calendar conferencing drop-down and iOS capabilities, are not yet supported by the Google Workspace add-ons API.
- With add-ons, you can do the following: Create customized user interfaces that are directly integrated into Google Workspace applications.


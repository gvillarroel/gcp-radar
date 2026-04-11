---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.821Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Html Service"
feature_slug: "apps-script-html-service"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/overview"
  - "https://developers.google.com/apps-script/guides/triggers"
keywords:
  - "building"
  - "launched"
  - "html"
  - "web"
  - "script"
  - "apps"
  - "for"
  - "the"
---

# Apps Script Html Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script launched the Html Service for building web apps with HTML, CSS, and JavaScript.

## Extended Definition

Apps Script launched the Html Service for building web apps with HTML, CSS, and JavaScript.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Launched the Html Service , which you can use to create web apps using HTML, CSS, and JavaScript.
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .
- To build interfaces for web apps and Editor Add-ons, use the HTML service .

### Google Apps Script overview \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apps Script is versatile and can be used to add custom features to Google Docs, Sheets, and Forms, build web apps, interact with other Google services, and create add-ons.
- Page Summary outlined flag Google Apps Script is a rapid application development platform for creating business applications that integrate with Google Workspace, using modern JavaScript and built-in libraries for popular Google applications.
- If you're new to JavaScript, Codecademy offers a number of JavaScript courses . (These courses weren't developed by and aren't associated with Google.) What can Apps Script do?
- Quickstarts are available to help you get started with Apps Script projects quickly, such as building automation, custom functions, or a Google Chat bot.

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, if an empty cell is selected, the onSelectionChange(e) function sets the cell's background to red. triggers/triggers.gs View on GitHub / The event handler triggered when the selection changes in the spreadsheet. @param {Event} e The onSelectionChange event. @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee / function onSelectionChange ( e ) { // Set background to red if a single empty cell is selected. const range = e . range ; if ( range . getNumRows () === 1 && range . getNumColumns () === 1 && range . getCell ( 1 , 1 ). getValue () === "" ) { range . setBackground ( "red" ); } } doGet(e) and doPost(e) The doGet(e) trigger runs automatically when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- For example, the onEdit(e) function below sets a comment on the cell that records the last time it was edited. triggers/triggers.gs View on GitHub / The event handler triggered when editing the spreadsheet. @param {Event} e The onEdit event. @see https://developers.google.com/apps-script/guides/triggers#onedite / function onEdit ( e ) { // Set a comment on the edited cell to indicate when it was changed. const range = e . range ; range . setNote ( Last modified: ${ new Date () } ); } The onEdit() trigger only queues up to 2 trigger events. onSelectionChange(e) The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Simple triggers are a set of reserved functions built into Apps Script, like the function onOpen(e) , which executes when a user opens a Google Docs, Sheets, Slides, or Forms file.


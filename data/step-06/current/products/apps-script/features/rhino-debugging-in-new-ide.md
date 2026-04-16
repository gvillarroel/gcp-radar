---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.517Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Rhino debugging in new IDE"
feature_slug: "rhino-debugging-in-new-ide"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/templates"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "rhino"
  - "debugging"
  - "ide"
  - "apps"
  - "script"
  - "lets"
  - "developers"
  - "debug"
---

# Rhino debugging in new IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The new Apps Script IDE lets developers debug Rhino functions without migrating to the V8 runtime.

## Extended Definition

The new Apps Script IDE lets developers debug Rhino functions without migrating to the V8 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- To get the latest product updates delivered to you, add the URL of this page to your feed reader , or add the feed URL directly: https://developers.google.com/feeds/apps-script-release-notes.xml .

### HTML Service: Templated HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If it isn't obvious how the template is interpreting your scriptlets, two debugging methods in the HtmlTemplate class can help you better understand what's going on.
- Code.gs function doGet () { return HtmlService . createTemplateFromFile ( 'Index' ) . evaluate (); } function getData () { return SpreadsheetApp . openById ( '1234567890abcdefghijklmnopqrstuvwxyz' ) . getActiveSheet () . getDataRange () . getValues (); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <? var data = getData(); ?> <table> <? for (var i = 0; i < data.length; i++) { ?> <tr> <? for (var j = 0; j < data[i].length; j++) { ?> <td><?= data[i][j] ?></td> <? } ?> </tr> <? } ?> </table> </body> </html> Call Apps Script APIs directly You can also use Apps Script code directly in scriptlets.
- Inside a scriptlet, you can write any code that works in a normal Apps Script file: scriptlets can call functions defined in other code files, reference global variables, or use any of the Apps Script APIs.
- Apps Script code in scriptlets Scriptlets aren't restricted to running normal JavaScript; you can also use any of the following three techniques to give your templates access to Apps Script data.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.
- Apps Script now supports the V8 runtime, which powers Chrome and Node.js, enabling developers to use modern JavaScript syntax and features not available with the older Rhino runtime.
- Apps Script developers can't use more modern JavaScript syntax and features in scripts using the Rhino runtime.
- Page Summary outlined flag The Apps Script and JavaScript runtime environment includes the JavaScript engine that parses and executes script code, and historically Apps Script was powered by Mozilla's Rhino JavaScript interpreter.


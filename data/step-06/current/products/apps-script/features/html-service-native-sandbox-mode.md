---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.585Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML Service NATIVE sandbox mode"
feature_slug: "html-service-native-sandbox-mode"
latest_feature_date: "2016-07-06"
deprecation_date: "2016-07-06"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/restrictions"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
keywords:
  - "html"
  - "native"
  - "sandbox"
  - "mode"
  - "was"
  - "running"
  - "apps"
  - "script"
---

# HTML Service NATIVE sandbox mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

NATIVE was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2016-07-06.

## Extended Definition

NATIVE was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2016-07-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- November 12, 2015 Change In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
- In the HTML service, the NATIVE sandbox mode is now the default if you have not specified which mode your script should use.
- In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restrictions in IFRAME mode The IFRAME sandbox mode is based on the iframe sandboxing feature in HTML5, using the following keywords: allow-same-origin allow-forms allow-scripts allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation - This attribute is only set for stand-alone script projects .
- To protect users from malicious HTML or JavaScript, the HTML service uses iframes to sandbox web apps or custom user interfaces for Google Docs, Google Sheets, and Forms.
- Page Summary outlined flag Apps Script uses iframes to sandbox HTML-service web apps and custom user interfaces for security.
- Set the link target attribute In the IFRAME mode you need to set the link target attribute to either top or blank : Code.js function doGet () { var template = HtmlService . createTemplateFromFile ( 'top' ); return template . evaluate (). setSandboxMode ( HtmlService .

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Don't — load in templates <p>List of things:</p> <? var things = getLotsOfThings(); ?> <ul> <? for (var i = 0; i < things.length; i++) { ?> <li><?= things[i] ?></li> <? } ?> </ul> Do — load asynchronously <p>List of things:</p> <ul id="things"> <li>Loading...</li> </ul> <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"> </script> <script> // The code in this function runs when the page is loaded. $(function() { google.script.run.withSuccessHandler(showThings) .getLotsOfThings(); }); function showThings(things) { var list = $('#things'); list.empty(); for (var i = 0; i < things.length; i++) { list.append('<li>' + things[i] + '</li>'); } } </script> Load resources using HTTPS In IFRAME sandbox mode , all JavaScript and CSS files must be served over HTTPS.
- Use the HTML5 document type declaration If your page is served using the newer IFRAME sandbox mode , make sure to include the following snippet of code at the top of your HTML file. <!DOCTYPE html> This document type declaration tells the browser that you designed the page for modern browsers, and that it shouldn't render your page using quirks mode .
- Although Apps Script requires client-side code to be in .html files, you should still separate CSS and client-side JavaScript into their own files and include them in the main HTML page with a custom function.
- Home Google Workspace Apps Script Guides Send feedback HTML Service: Best Practices Stay organized with collections Save and categorize content based on your preferences.


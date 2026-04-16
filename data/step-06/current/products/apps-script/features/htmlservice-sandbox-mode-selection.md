---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.640Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HtmlService sandbox mode selection"
feature_slug: "htmlservice-sandbox-mode-selection"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/restrictions"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
keywords:
  - "htmlservice"
  - "sandbox"
  - "mode"
  - "selection"
  - "can"
  - "now"
  - "use"
  - "setsandboxmode"
---

# HtmlService sandbox mode selection

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

HtmlService can now use setSandboxMode to enable a faster sandbox implementation.

## Extended Definition

HtmlService can now use setSandboxMode to enable a faster sandbox implementation.

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
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
- Added a setSandboxMode method to enable a faster version of the HtmlService sandbox.
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Feature Added a new IFRAME sandbox mode for HTML service that imposes many fewer restrictions than the other sandbox modes and runs much faster.

### HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the link target attribute In the IFRAME mode you need to set the link target attribute to either top or blank : Code.js function doGet () { var template = HtmlService . createTemplateFromFile ( 'top' ); return template . evaluate (). setSandboxMode ( HtmlService .
- The setSandboxMode method now has no effect when called.
- Restrictions in IFRAME mode The IFRAME sandbox mode is based on the iframe sandboxing feature in HTML5, using the following keywords: allow-same-origin allow-forms allow-scripts allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation - This attribute is only set for stand-alone script projects .
- The IFRAME sandbox mode restricts certain actions, such as top-level navigation, by using specific HTML5 iframe sandboxing attributes.

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Don't — load in templates <p>List of things:</p> <? var things = getLotsOfThings(); ?> <ul> <? for (var i = 0; i < things.length; i++) { ?> <li><?= things[i] ?></li> <? } ?> </ul> Do — load asynchronously <p>List of things:</p> <ul id="things"> <li>Loading...</li> </ul> <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"> </script> <script> // The code in this function runs when the page is loaded. $(function() { google.script.run.withSuccessHandler(showThings) .getLotsOfThings(); }); function showThings(things) { var list = $('#things'); list.empty(); for (var i = 0; i < things.length; i++) { list.append('<li>' + things[i] + '</li>'); } } </script> Load resources using HTTPS In IFRAME sandbox mode , all JavaScript and CSS files must be served over HTTPS.
- Use the HTML5 document type declaration If your page is served using the newer IFRAME sandbox mode , make sure to include the following snippet of code at the top of your HTML file. <!DOCTYPE html> This document type declaration tells the browser that you designed the page for modern browsers, and that it shouldn't render your page using quirks mode .
- Ensure external resources like JavaScript and CSS files are loaded using HTTPS to avoid mixed content errors in the IFRAME sandbox mode.
- Code.gs function doGet(request) { return HtmlService.createTemplateFromFile('Page') .evaluate(); } function include(filename) { return HtmlService.createHtmlOutputFromFile(filename) .getContent(); } Page.html <!DOCTYPE html> <html> <head> <base target=" top"> <?!= include('Stylesheet'); ?> </head> <body> <h1>Welcome</h1> <p>Please enjoy this helpful script.</p> <?!= include('JavaScript'); ?> </body> </html> Stylesheet.html <style> p { color: green; } </style> JavaScript.html <script> window.addEventListener('load', function() { console.log('Page is loaded'); }); </script> Load data asynchronously, not in templates Templated HTML can be used to quickly build interfaces, but its use should be limited to ensure your UI is responsive.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.608Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google-styled CSS package for HTML Service"
feature_slug: "google-styled-css-package-for-html-service"
latest_feature_date: "2014-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/html"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
keywords:
  - "styled"
  - "css"
  - "package"
  - "html"
  - "applies"
  - "styling"
  - "fonts"
  - "buttons"
---

# Google-styled CSS package for HTML Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

A CSS package applies Google styling to fonts, buttons, and form elements in HTML Service dialogs and sidebars.

## Extended Definition

A CSS package applies Google styling to fonts, buttons, and form elements in HTML Service dialogs and sidebars.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)

## Supporting Pages

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs // Use this code for Google Docs, Slides, Forms, or Sheets. function onOpen() { SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .createMenu('Dialog') .addItem('Open', 'openDialog') .addToUi(); } function openDialog() { var html = HtmlService.createHtmlOutputFromFile('Index'); SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .showModalDialog(html, 'Dialog title'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! <input type="button" value="Close" onclick="google.script.host.close()" /> </body> </html> The first time you want to display this user interface, you must either run the onOpen function manually in the script editor or reload the window for the Docs, Sheets, or Forms editor (which closes the script editor).
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! </body> </html> Once that basic framework is in place, all you have to do is save a version of your script , then deploy your script as a web app .
- The HTML service can also display dialogs or sidebars as user interfaces in Google Docs, Sheets, Slides, or Forms if the script is container-bound, requiring a function that passes the HTML file as an HtmlOutput object to the showModalDialog() or showSidebar() methods of the Ui object.
- Page Summary outlined flag The HTML service in Google Apps Script allows you to serve web pages that can interact with server-side Apps Script functions, useful for building web apps or custom user interfaces in Google Docs, Sheets, and Forms, or generating email bodies.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Feature Released a CSS package to apply Google styling to fonts, buttons, and form elements in HTML service dialogs and sidebars, primarily for use in add-ons.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Here is the list of HTML tags that are permitted: B , BLOCKQUOTE , BODY , BR , CENTER , CAPTION , CITE , CODE , DIV , EM , H1 , H2 , H3 , H4 , H5 , H6 , HR , I , LABEL , LEGEND , LI , OL , P , SPAN , STRONG , SUB , SUP , TABLE , TBODY , TD , THEAD , TITLE , TR , TT , UL Added support for sheet protection, in reference to this issue .

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet(request) { return HtmlService.createTemplateFromFile('Page') .evaluate(); } function include(filename) { return HtmlService.createHtmlOutputFromFile(filename) .getContent(); } Page.html <!DOCTYPE html> <html> <head> <base target=" top"> <?!= include('Stylesheet'); ?> </head> <body> <h1>Welcome</h1> <p>Please enjoy this helpful script.</p> <?!= include('JavaScript'); ?> </body> </html> Stylesheet.html <style> p { color: green; } </style> JavaScript.html <script> window.addEventListener('load', function() { console.log('Page is loaded'); }); </script> Load data asynchronously, not in templates Templated HTML can be used to quickly build interfaces, but its use should be limited to ensure your UI is responsive.
- Use the HTML5 document type declaration If your page is served using the newer IFRAME sandbox mode , make sure to include the following snippet of code at the top of your HTML file. <!DOCTYPE html> This document type declaration tells the browser that you designed the page for modern browsers, and that it shouldn't render your page using quirks mode .
- Although Apps Script requires client-side code to be in .html files, you should still separate CSS and client-side JavaScript into their own files and include them in the main HTML page with a custom function.
- Load JavaScript last Many web developers recommend loading JavaScript code at the bottom of the page to increase responsiveness, and this is even more important with the HTML service.


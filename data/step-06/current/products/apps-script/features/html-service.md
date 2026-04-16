---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.659Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Html Service"
feature_slug: "html-service"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/html"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
  - "https://developers.google.com/apps-script/guides/html/templates"
keywords:
  - "html"
  - "was"
  - "launched"
  - "building"
  - "web"
  - "apps"
  - "css"
  - "javascript"
---

# Html Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Html Service was launched for building web apps with HTML, CSS, and JavaScript.

## Extended Definition

Html Service was launched for building web apps with HTML, CSS, and JavaScript.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)

## Supporting Pages

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The HTML service in Google Apps Script allows you to serve web pages that can interact with server-side Apps Script functions, useful for building web apps or custom user interfaces in Google Docs, Sheets, and Forms, or generating email bodies.
- To use the HTML service, you need to create HTML files within your Apps Script project where you can write standard HTML, CSS, and client-side JavaScript, along with template scriptlets.
- Home Google Workspace Apps Script Guides Send feedback HTML Service: Create and Serve HTML Stay organized with collections Save and categorize content based on your preferences.
- It is particularly useful for building web apps or adding custom user interfaces in Google Docs, Google Sheets, and Forms.

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although Apps Script requires client-side code to be in .html files, you should still separate CSS and client-side JavaScript into their own files and include them in the main HTML page with a custom function.
- Code.gs function doGet(request) { return HtmlService.createTemplateFromFile('Page') .evaluate(); } function include(filename) { return HtmlService.createHtmlOutputFromFile(filename) .getContent(); } Page.html <!DOCTYPE html> <html> <head> <base target=" top"> <?!= include('Stylesheet'); ?> </head> <body> <h1>Welcome</h1> <p>Please enjoy this helpful script.</p> <?!= include('JavaScript'); ?> </body> </html> Stylesheet.html <style> p { color: green; } </style> JavaScript.html <script> window.addEventListener('load', function() { console.log('Page is loaded'); }); </script> Load data asynchronously, not in templates Templated HTML can be used to quickly build interfaces, but its use should be limited to ensure your UI is responsive.
- Load JavaScript last Many web developers recommend loading JavaScript code at the bottom of the page to increase responsiveness, and this is even more important with the HTML service.
- Moving your <script> tags to the end of your page lets HTML content render before the JavaScript is processed, allowing you to present a spinner or other message to the user.

### HTML Service: Templated HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet () { return HtmlService . createTemplateFromFile ( 'Index' ) . evaluate (); } function getData () { return SpreadsheetApp . openById ( '1234567890abcdefghijklmnopqrstuvwxyz' ) . getActiveSheet () . getDataRange () . getValues (); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <? var data = getData(); ?> <table> <? for (var i = 0; i < data.length; i++) { ?> <tr> <? for (var j = 0; j < data[i].length; j++) { ?> <td><?= data[i][j] ?></td> <? } ?> </tr> <? } ?> </table> </body> </html> Call Apps Script APIs directly You can also use Apps Script code directly in scriptlets.
- Contextual escaping means that Apps Script keeps track of the output's context on the page — inside an HTML attribute, inside a client-side script tag, or anywhere else — and automatically adds escape characters to protect against cross-site scripting (XSS) attacks .
- HTML content outside of scriptlets (like the b tag) is appended using output. = (without contextual escaping ), and scriptlets are appended as JavaScript (with or without contextual escaping, depending on the type of scriptlet).
- Apps Script code in scriptlets Scriptlets aren't restricted to running normal JavaScript; you can also use any of the following three techniques to give your templates access to Apps Script data.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.664Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Limited HTML tags in UiApp widgets"
feature_slug: "limited-html-tags-in-uiapp-widgets"
latest_feature_date: "2012-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
  - "https://developers.google.com/apps-script/guides/html/templates"
keywords:
  - "limited"
  - "html"
  - "tags"
  - "uiapp"
  - "widgets"
  - "now"
  - "set"
  - "embedded"
---

# Limited HTML tags in UiApp widgets

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp widgets now support a limited set of embedded HTML tags.

## Extended Definition

UiApp widgets now support a limited set of embedded HTML tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Added the ability to include a limited set of HTML tags when working with UiApp widgets, in response to this issue .
- Deprecated Deprecated UiApp widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel , which had limited usability.
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .

### HTML Service: Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/best-practices](https://developers.google.com/apps-script/guides/html/best-practices)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet(request) { return HtmlService.createTemplateFromFile('Page') .evaluate(); } function include(filename) { return HtmlService.createHtmlOutputFromFile(filename) .getContent(); } Page.html <!DOCTYPE html> <html> <head> <base target=" top"> <?!= include('Stylesheet'); ?> </head> <body> <h1>Welcome</h1> <p>Please enjoy this helpful script.</p> <?!= include('JavaScript'); ?> </body> </html> Stylesheet.html <style> p { color: green; } </style> JavaScript.html <script> window.addEventListener('load', function() { console.log('Page is loaded'); }); </script> Load data asynchronously, not in templates Templated HTML can be used to quickly build interfaces, but its use should be limited to ensure your UI is responsive.
- Moving your <script> tags to the end of your page lets HTML content render before the JavaScript is processed, allowing you to present a spinner or other message to the user.
- Because these are HTML snippets rather than standalone .css or .js files, they must include <style> and <script> tags.
- Use the HTML5 document type declaration If your page is served using the newer IFRAME sandbox mode , make sure to include the following snippet of code at the top of your HTML file. <!DOCTYPE html> This document type declaration tells the browser that you designed the page for modern browsers, and that it shouldn't render your page using quirks mode .

### HTML Service: Templated HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Here's the template that displays a list of Google products again, followed by the result of getCode : Code.gs function myFunction () { Logger . log ( HtmlService . createTemplateFromFile ( 'Index' ) . getCode ()); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <?= 'My favorite Google products:' ?> <? var data = ['Gmail', 'Docs', 'Android']; for (var i = 0; i < data.length; i++) { ?> <b><?= data[i] ?></b> <? } ?> </body> </html> LOG (EVALUATED) ( function () { var output = HtmlService . initTemplate (); output . = '<!DOCTYPE html>\n' ; output . = '<html>\n' + ' <head>\n' + ' <base target=\" top\">\n' + ' </head>\n' + ' <body>\n' + ' ' ; output . $ = 'My favorite Google products:' ; output . = ' ' ; var data = [ 'Gmail' , 'Docs' , 'Android' ]; for ( var i = 0 ; i < data . length ; i ++ ) { ; output . = ' <b>' ; output . $ = data [ i ] ; output . = '</b>\n' ; output . = ' ' ; } ; output . = ' </body>\n' ; output . = '</html>' ; / End of user code / return output . $out . append ( '' ); })(); The getCodeWithComments function The getCodeWithComments function is similar to getCode() , but returns the evaluated code as comments that appear side-by-side with the original template.
- These examples show a few surprising effects of comments: <? var x; // a comment ?> This sentence won't print because a comment begins inside a scriptlet on the same line. <? var y; // ?> <?= "This sentence won't print because a comment begins inside a scriptlet on the same line."; output.append("This sentence prints because it's on the next line, even though it's in the same scriptlet.") ?> <? doSomething(); / ?> This entire block is commented out, even if you add a / in the HTML or in a <script> / </script> tag, <? until you end the comment inside a scriptlet. / ?> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Code.gs function doGet () { return HtmlService . createTemplateFromFile ( 'Index' ) . evaluate (); } function getData () { return SpreadsheetApp . openById ( '1234567890abcdefghijklmnopqrstuvwxyz' ) . getActiveSheet () . getDataRange () . getValues (); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <? var data = getData(); ?> <table> <? for (var i = 0; i < data.length; i++) { ?> <tr> <? for (var j = 0; j < data[i].length; j++) { ?> <td><?= data[i][j] ?></td> <? } ?> </tr> <? } ?> </table> </body> </html> Call Apps Script APIs directly You can also use Apps Script code directly in scriptlets.
- Code.gs function doGet () { return HtmlService . createTemplateFromFile ( 'Index' ) . evaluate (); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <? var data = SpreadsheetApp .openById('1234567890abcdefghijklmnopqrstuvwxyz') .getActiveSheet() .getDataRange() .getValues(); ?> <table> <? for (var i = 0; i < data.length; i++) { ?> <tr> <? for (var j = 0; j < data[i].length; j++) { ?> <td><?= data[i][j] ?></td> <? } ?> </tr> <? } ?> </table> </body> </html> Push variables to templates Lastly, you can push variables into a template by assigning them as properties of the HtmlTemplate object.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.520Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML Service user-activated top navigation"
feature_slug: "html-service-user-activated-top-navigation"
latest_feature_date: "2021-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/html/restrictions"
  - "https://developers.google.com/apps-script/guides/html"
  - "https://developers.google.com/apps-script/guides/html/templates"
keywords:
  - "html"
  - "user"
  - "activated"
  - "top"
  - "navigation"
  - "iframe"
  - "sandboxing"
  - "now"
---

# HTML Service user-activated top navigation

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

HTML Service iframe sandboxing now supports top-level navigation only through user activation via allow-top-navigation-by-user-activation.

## Extended Definition

HTML Service iframe sandboxing now supports top-level navigation only through user activation via allow-top-navigation-by-user-activation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)

## Supporting Pages

### HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/restrictions](https://developers.google.com/apps-script/guides/html/restrictions)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restrictions in IFRAME mode The IFRAME sandbox mode is based on the iframe sandboxing feature in HTML5, using the following keywords: allow-same-origin allow-forms allow-scripts allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation - This attribute is only set for stand-alone script projects .
- The IFRAME sandbox mode restricts certain actions, such as top-level navigation, by using specific HTML5 iframe sandboxing attributes.
- To protect users from malicious HTML or JavaScript, the HTML service uses iframes to sandbox web apps or custom user interfaces for Google Docs, Google Sheets, and Forms.
- Page Summary outlined flag Apps Script uses iframes to sandbox HTML-service web apps and custom user interfaces for security.

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs // Use this code for Google Docs, Slides, Forms, or Sheets. function onOpen() { SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .createMenu('Dialog') .addItem('Open', 'openDialog') .addToUi(); } function openDialog() { var html = HtmlService.createHtmlOutputFromFile('Index'); SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp. .showModalDialog(html, 'Dialog title'); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> Hello, World! <input type="button" value="Close" onclick="google.script.host.close()" /> </body> </html> The first time you want to display this user interface, you must either run the onOpen function manually in the script editor or reload the window for the Docs, Sheets, or Forms editor (which closes the script editor).
- The HTML service can also display dialogs or sidebars as user interfaces in Google Docs, Sheets, Slides, or Forms if the script is container-bound, requiring a function that passes the HTML file as an HtmlOutput object to the showModalDialog() or showSidebar() methods of the Ui object.
- Page Summary outlined flag The HTML service in Google Apps Script allows you to serve web pages that can interact with server-side Apps Script functions, useful for building web apps or custom user interfaces in Google Docs, Sheets, and Forms, or generating email bodies.
- Serve HTML as a Google Docs, Sheets, Google Slides, or Forms user interface The HTML service can display a dialog or sidebar in Google Docs, Sheets, Slides, or Forms if your script is container-bound to the file.

### HTML Service: Templated HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html/templates](https://developers.google.com/apps-script/guides/html/templates)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's the template that displays a list of Google products again, followed by the result of getCode : Code.gs function myFunction () { Logger . log ( HtmlService . createTemplateFromFile ( 'Index' ) . getCode ()); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <?= 'My favorite Google products:' ?> <? var data = ['Gmail', 'Docs', 'Android']; for (var i = 0; i < data.length; i++) { ?> <b><?= data[i] ?></b> <? } ?> </body> </html> LOG (EVALUATED) ( function () { var output = HtmlService . initTemplate (); output . = '<!DOCTYPE html>\n' ; output . = '<html>\n' + ' <head>\n' + ' <base target=\" top\">\n' + ' </head>\n' + ' <body>\n' + ' ' ; output . $ = 'My favorite Google products:' ; output . = ' ' ; var data = [ 'Gmail' , 'Docs' , 'Android' ]; for ( var i = 0 ; i < data . length ; i ++ ) { ; output . = ' <b>' ; output . $ = data [ i ] ; output . = '</b>\n' ; output . = ' ' ; } ; output . = ' </body>\n' ; output . = '</html>' ; / End of user code / return output . $out . append ( '' ); })(); The getCodeWithComments function The getCodeWithComments function is similar to getCode() , but returns the evaluated code as comments that appear side-by-side with the original template.
- The function shown here generates an HtmlTemplate object from the HTML file, then calls its evaluate method to execute the scriptlets and convert the template into an HtmlOutput object that the script can serve to the user.
- These examples show a few surprising effects of comments: <? var x; // a comment ?> This sentence won't print because a comment begins inside a scriptlet on the same line. <? var y; // ?> <?= "This sentence won't print because a comment begins inside a scriptlet on the same line."; output.append("This sentence prints because it's on the next line, even though it's in the same scriptlet.") ?> <? doSomething(); / ?> This entire block is commented out, even if you add a / in the HTML or in a <script> / </script> tag, <? until you end the comment inside a scriptlet. / ?> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Code.gs function doGet () { return HtmlService . createTemplateFromFile ( 'Index' ) . evaluate (); } function getData () { return SpreadsheetApp . openById ( '1234567890abcdefghijklmnopqrstuvwxyz' ) . getActiveSheet () . getDataRange () . getValues (); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> </head> <body> <? var data = getData(); ?> <table> <? for (var i = 0; i < data.length; i++) { ?> <tr> <? for (var j = 0; j < data[i].length; j++) { ?> <td><?= data[i][j] ?></td> <? } ?> </tr> <? } ?> </table> </body> </html> Call Apps Script APIs directly You can also use Apps Script code directly in scriptlets.


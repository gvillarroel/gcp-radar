---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.622Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML Service CSS3 support"
feature_slug: "html-service-css3-support"
latest_feature_date: "2013-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html"
  - "https://developers.google.com/apps-script/guides/html/communication"
keywords:
  - "html"
  - "css3"
  - "supports"
  - "most"
  - "features"
  - "within"
  - "caja"
  - "security"
---

# HTML Service CSS3 support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

HTML Service supports most CSS3 features within the Caja security sandbox.

## Extended Definition

HTML Service supports most CSS3 features within the Caja security sandbox.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- File.getOwner() Folder.getOwner() September 16, 2013 Feature HTML Service now supports most CSS3 features.
- To check whether the Caja security sandbox in HTML Service supports a specific feature, see the CSS whitelist definitions in Caja's public repository .
- A notable exception is the :nth-child() pseudo-selector, which remains unsupported, along with a small number of obscure or non-standardized CSS3 features.
- A new Card service supports Gmail add-ons by defining several UI widget elements that you can use to create a Gmail add-on interface without HTML or CSS.

### HTML Service: Create and Serve HTML \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/html](https://developers.google.com/apps-script/guides/html)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Within the HTML file, you can write most standard HTML, CSS, and client-side JavaScript.
- These examples include a few extra features for convenience: the onOpen function creates a custom menu that helps you open the interface, and the button in the HTML file calls google.script.host.close to close the interface.
- To use the HTML service, you need to create HTML files within your Apps Script project where you can write standard HTML, CSS, and client-side JavaScript, along with template scriptlets.
- The page is served as HTML5, although some advanced features of HTML5 are not available, as explained in Restrictions .

### "HTML Service: Communicate with Server Functions \_|\_ Apps Script \_|\_\

- URL: [https://developers.google.com/apps-script/guides/html/communication](https://developers.google.com/apps-script/guides/html/communication)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function processForm(formObject) { var formBlob = formObject.myFile; var driveFile = DriveApp.createFile(formBlob); return driveFile.getUrl(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> // Prevent forms from submitting. function preventFormSubmit() { var forms = document.querySelectorAll('form'); for (var i = 0; i < forms.length; i++) { forms[i].addEventListener('submit', function(event) { event.preventDefault(); }); } } window.addEventListener('load', preventFormSubmit); function handleFormSubmit(formObject) { google.script.run.withSuccessHandler(updateUrl).processForm(formObject); } function updateUrl(url) { var div = document.getElementById('output'); div.innerHTML = '<a href="' + url + '">Got it!</a>'; } </script> </head> <body> <form id="myForm" onsubmit="handleFormSubmit(this)"> <input name="myFile" type="file" /> <input type="submit" value="Submit" /> </form> <div id="output"></div> </body> </html> Script runners Think of google.script.run as a builder for a "script runner." If you add a success handler, failure handler, or user object to a script runner, you aren't changing the existing runner; instead, you get back a new script runner with new behavior.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getBankBalance() { var email = Session.getActiveUser().getEmail() return deepSecret (email); } function deepSecret (email) { // Do some secret calculations return email + ' has $1,000,000 in the bank.'; } var obj = { objectMethod: function() { // More secret calculations } }; Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onSuccess(balance) { var div = document.getElementById('output'); div.innerHTML = balance; } google.script.run.withSuccessHandler(onSuccess) .getBankBalance(); </script> </head> <body> <div id="output">No result yet...</div> </body> </html> Resize dialogs in Google Workspace applications Custom dialog boxes in Google Docs, Google Sheets, or Forms can be resized by calling the google.script.host methods setWidth(width) or setHeight(height) in client-side code. (To set the initial size of a dialog, use the HtmlOutput methods setWidth(width) and setHeight(height) .) Note that dialogs don't re-center in the parent window when resized, and it is not possible to resize sidebars .
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getEmail() { return Session.getActiveUser().getEmail(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function updateButton(email, button) { button.value = 'Clicked by ' + email; } </script> </head> <body> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> <input type="button" value="Not Clicked" onclick="google.script.run .withSuccessHandler(updateButton) .withUserObject(this) .getEmail()" /> </body> </html> Forms If you call a server function with a form element as a parameter, the form becomes a single object with field names as keys and field values as values.
- Code.gs function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); } function getUnreadEmails() { // 'got' instead of 'get' throws an error. return GmailApp.gotInboxUnreadCount(); } Index.html <!DOCTYPE html> <html> <head> <base target=" top"> <script> function onFailure(error) { var div = document.getElementById('output'); div.innerHTML = "ERROR: " + error.message; } google.script.run.withFailureHandler(onFailure) .getUnreadEmails(); </script> </head> <body> <div id="output"></div> </body> </html> User objects To reuse the same success or failure handler for multiple calls to the server, call withUserObject(object) to specify an object that's passed to the handler as a second parameter.


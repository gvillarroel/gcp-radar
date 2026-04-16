---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.588Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HTML Service EMULATED sandbox mode"
feature_slug: "html-service-emulated-sandbox-mode"
latest_feature_date: "2015-12-10"
deprecation_date: "2015-12-10"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/html/restrictions"
  - "https://developers.google.com/apps-script/guides/html/best-practices"
keywords:
  - "html"
  - "emulated"
  - "sandbox"
  - "mode"
  - "was"
  - "running"
  - "apps"
  - "script"
---

# HTML Service EMULATED sandbox mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

EMULATED was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2015-12-10.

## Extended Definition

EMULATED was an HTML Service sandbox mode for running Apps Script web content; deprecated on 2015-12-10.

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
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
- November 12, 2015 Change In the HTML service , all new scripts default to IFRAME sandbox mode unless NATIVE mode is explicitly specified.
- In the HTML service, the NATIVE sandbox mode is now the default if you have not specified which mode your script should use.
- December 10, 2015 Deprecated In the HTML service , EMULATED sandbox mode was sunset .

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


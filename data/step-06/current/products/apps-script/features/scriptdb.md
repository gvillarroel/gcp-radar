---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.659Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ScriptDb"
feature_slug: "scriptdb"
latest_feature_date: "2012-06-27"
deprecation_date: "2014-11-20"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/content"
keywords:
  - "scriptdb"
  - "was"
  - "apps"
  - "script"
  - "storage"
  - "scripts"
  - "launched"
  - "javascript"
---

# ScriptDb

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptDB was an Apps Script data storage service for scripts; ScriptDb was launched as a JavaScript object database for Apps Script; deprecated on 2014-11-20.

## Extended Definition

ScriptDB was an Apps Script data storage service for scripts; ScriptDb was launched as a JavaScript object database for Apps Script; deprecated on 2014-11-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Launched ScriptDb , a JavaScript object database for Apps Script.
- Launched the Html Service , which you can use to create web apps using HTML, CSS, and JavaScript.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- While Rhino provided a convenient way for Apps Script to execute developer scripts, it also tied Apps Script to a specific JavaScript version ( ES5 ).
- Apps Script developers can't use more modern JavaScript syntax and features in scripts using the Rhino runtime.
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.

### Content Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Apps Script's Content service allows scripts to act as "services" by responding to GET and POST requests with raw textual content of various MIME types instead of a user interface.
- The start and end parameters specify a time range in the standard Unix epoch. curl -L URL OF YOUR SCRIPT?start=1325437200&end=1325439000 The service returns JSON that reports if the calendar is open in that range. { "available" : true } Serve JSONP in web pages With a slight change, your JSON service can become JSONP to be called from JavaScript in a browser. function doGet ( request ) { var events = CalendarApp . getEvents ( new Date ( Number ( request . parameters . start ) 1000 ), new Date ( Number ( request . parameters . end ) 1000 )); var result = { available : events . length == 0 }; return ContentService . createTextOutput ( request . parameters . prefix + '(' + JSON . stringify ( result ) + ')' ) . setMimeType ( ContentService .
- This is the name of the function in your client-side JavaScript that is called with the value returned by the service. <script src="URL OF YOUR SCRIPT?start=1325437200&end=1325439000&prefix=alert"></script> This example shows a message box in the browser with the service output, using the browser's built-in alert function as the prefix.
- By adding a prefix parameter and setting the MIME type to JAVASCRIPT, JSON services can be transformed into JSONP to be called from JavaScript in a browser, though caution is advised due to security risks. that return raw textual content of various MIME types.


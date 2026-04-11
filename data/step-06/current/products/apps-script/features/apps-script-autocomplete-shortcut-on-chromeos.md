---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.792Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script autocomplete shortcut on ChromeOS"
feature_slug: "apps-script-autocomplete-shortcut-on-chromeos"
latest_feature_date: "2013-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
keywords:
  - "chromeos"
  - "enables"
  - "autocomplete"
  - "shortcut"
  - "content"
  - "script"
  - "apps"
  - "on"
---

# Apps Script autocomplete shortcut on ChromeOS

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enables autocomplete/content-assist in Apps Script on ChromeOS using Ctrl + Space.

## Extended Definition

Enables autocomplete/content-assist in Apps Script on ChromeOS using Ctrl + Space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Feature On ChromeOS devices, it is now possible to activate autocomplete (sometimes called "content assist") with the keyboard shortcut Ctrl + Space .
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.
- Deprecated The deprecated SOAP service and old XML service have now been removed from autocomplete and documentation, as announced on July 9, 2013 and documented in the Apps Script sunset schedule .
- Home Google Workspace Apps Script Support Send feedback Google Apps Script release notes Stay organized with collections Save and categorize content based on your preferences.

### ExecutionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionResponse)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback ExecutionResponse Stay organized with collections Save and categorize content based on your preferences.
- Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a Document or a Calendar ); they can only return primitive types such as a string , number , array , object , or boolean .
- Only primitive types like string, number, array, object, or boolean can be returned by functions called using the Apps Script API.
- Page Summary outlined flag ExecutionResponse represents the return value of a function executed using the Apps Script API.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- Home Google Workspace Apps Script Guides Send feedback Custom Functions in Google Sheets Stay organized with collections Save and categorize content based on your preferences.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.


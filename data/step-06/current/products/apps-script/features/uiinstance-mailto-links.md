---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.648Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiInstance mailto links"
feature_slug: "uiinstance-mailto-links"
latest_feature_date: "2013-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors"
  - "https://developers.google.com/apps-script/guides/admin/monitor-use"
keywords:
  - "uiinstance"
  - "mailto"
  - "links"
  - "createanchor"
  - "now"
  - "supports"
  - "use"
  - "scheme"
---

# UiInstance mailto links

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiInstance.createAnchor now supports links that use the mailto scheme.

## Extended Definition

UiInstance.createAnchor now supports links that use the mailto scheme.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [https://developers.google.com/apps-script/guides/admin/monitor-use](https://developers.google.com/apps-script/guides/admin/monitor-use)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Issue 619 : UiInstance 's createAnchor method now allows links using the mailto scheme.
- The Slides service has been extended with the following new methods to support concrete color schemes: ColorScheme.setConcreteColor(type, color) ColorScheme.setConcreteColor(type, red, green, blue) ColorScheme.setConcreteColor(type, hexColor) The Spreadsheet service has been extended with the following new methods to support trimming whitespace and removing duplicate values: RangeList.trimWhitespace() Range.removeDuplicates() Range.removeDuplicates(columnsToCompare) Range.trimWhitespace() May 20, 2019 Feature The Gmail service has been updated with the GmailMessage.getHeader(name) method that can retrieve a RFC 2822 header from a message.
- A new Card service supports Gmail add-ons by defining several UI widget elements that you can use to create a Gmail add-on interface without HTML or CSS.
- To check whether the Caja security sandbox in HTML Service supports a specific feature, see the CSS whitelist definitions in Caja's public repository .

### "Monitor and control Google Apps Script use in your Google Workspace organization\

- URL: [https://developers.google.com/apps-script/guides/admin/monitor-use](https://developers.google.com/apps-script/guides/admin/monitor-use)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Fix errors in your converted code \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- It is partially supported in Apps Scripts that supports only a subset of the values ( does not support xlLegendPositionCorner and xlLegendPositionCustom ). @ param { string } position / function handle legend position error ( position ) { // Please comment the throw statement and return a supported position value // instead. // Values that are supported here are xlLegendPositionTop, // xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight. throw new Error ( 'Google Sheets does not support legend position: ' + position ); } Fix partially supported API errors Define the handle <API name> error function to replace the unsupported values with an acceptable workaround for your needs.
- It is partially supported in Apps Scripts that supports only a subset of the values ( does not support xlLegendPositionCorner and xlLegendPositionCustom ). @ param { string } position / function handle legend position error ( position ) { // Please comment the throw statement and return a supported position value // instead. // Values that are supported here are xlLegendPositionTop, // xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight. throw new Error ( 'Google Sheets does not support legend position: ' + position ); } Manual work needed Manual work needed means that the VBA API can be converted into Apps Script, but it needs a workaround.
- Apps Script APIs : FindReplaceRequest , onEdit Apps Script documentation links : https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit https://developers.google.com/sheets/api/eap/reference/rest/v4/spreadsheets/request?hl=en#findreplacerequest Comments : AutoCorrect.AddReplacement was not converted, but there is an equivalent option you can implement manually.
- Apps Script APIs : createTextFinder , onEdit Apps Script documentation links : https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit , createTextFinder Comments : AutoCorrect.AddReplacement was not converted, but there is an equivalent option you can implement manually.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.828Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp supported HTML tags"
feature_slug: "uiapp-supported-html-tags"
latest_feature_date: "2012-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "accept"
  - "tags"
  - "supported"
  - "widgets"
  - "limited"
  - "html"
  - "uiapp"
  - "now"
---

# UiApp supported HTML tags

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp widgets now accept a limited, predefined set of HTML tags when rendering content.

## Extended Definition

UiApp widgets now accept a limited, predefined set of HTML tags when rendering content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Added the ability to include a limited set of HTML tags when working with UiApp widgets, in response to this issue .
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Deprecated Deprecated UiApp widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel , which had limited usability.
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Consequently, they can only call services that don't have access to personal data, specifically the following: Supported services Notes Cache Works, but not particularly useful in custom functions HTML Can generate HTML, but can't display it (rarely useful) JDBC Language Lock Works, but not particularly useful in custom functions Maps Can calculate directions, but not display maps Properties getUserProperties() only gets the properties of the spreadsheet owner.
- For example, the DOUBLE() function shown earlier can be rewritten to accept a single cell or range of cells as follows: / Multiplies the input value by 2. @param {number Array<Array<number>>} input The value or range of cells to multiply. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return Array . isArray ( input ) ? input . map ( row = > row . map ( cell = > cell 2 )) : input 2 ; } This approach uses the map method of JavaScript's Array object on the two-dimensional array of cells to get each row, then for each row, it uses map again to return double each cell's value.
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- Here's a custom function, named DOUBLE , which multiplies an input value by 2: / Multiplies an input value by 2. @param {number} input The number to double. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } If you don't know how to write JavaScript and don't have time to learn, check the Google Workspace add-on store to see whether someone else has already built the custom function you need.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- LIMITED source A Presentation object, representing the Slides file to which the script is bound.
- LIMITED source A Spreadsheet object, representing the Sheets file to which the script is bound.
- LIMITED source A Document object, representing the Docs file to which the script is bound.
- LIMITED source A Form object, representing the Forms file to which the script is bound.


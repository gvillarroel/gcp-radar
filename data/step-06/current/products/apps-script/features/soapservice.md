---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.634Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "SoapService"
feature_slug: "soapservice"
latest_feature_date: "2013-07-09"
deprecation_date: "2013-07-09"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition"
keywords:
  - "soapservice"
  - "was"
  - "deprecated"
  - "2013"
  - "07"
  - "09"
---

# SoapService

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

SoapService was deprecated; deprecated on 2013-07-09.

## Extended Definition

SoapService was deprecated; deprecated on 2013-07-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- July 09, 2013 Deprecated Deprecated the old Xml service, SoapService , and support for the JavaScript feature E4X.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- September 09, 2013 Deprecated Deprecated the DocumentApp methods getFootnotes() , getLinkUrl() , setLinkUrl(url) , and isAtDocumentEnd() in the classes FooterSection , FootnoteSection , and HeaderSection , as well as the methods getNextSibling() and getPreviousSibling() in the classes FooterSection and HeaderSection .
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Feature Deprecated Sunset Behavior after sunset date setAuthentication(clientId, signingKey) March 03, 2026 June 01, 2026 This method is unavailable and existing scripts fail when using this method.
- DecoratedPopupPanel DockLayoutPanel DockPanel StackLayoutPanel TabLayoutPanel Old XML service Jul 9, 2013 Service no longer appears in autocomplete, although existing scripts should still function.
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.

### Class BooleanCondition \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition)
- Source ID: `site-docs-reference-required-4`
- Final score: 33
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns null if underlining is unaffected. // Logs the boolean condition underline setting for each conditional format rule // on a sheet. const sheet = SpreadsheetApp . getActiveSheet (); const rules = sheet . getConditionalFormatRules (); for ( const rule of rules ) { const underline = rule . getBooleanCondition (). getUnderline (); Logger . log ( Underline: ${ underline } ); } Return Boolean null — whether or not the boolean condition underlines the text, or null if underlining is unaffected Deprecated methods getBackground() Deprecated.
- Returns null if not set. // Logs the boolean condition background color for each conditional format rule // on a sheet. const sheet = SpreadsheetApp . getActiveSheet (); const rules = sheet . getConditionalFormatRules (); for ( const rule of rules ) { const color = rule . getBooleanCondition (). getBackground (); Logger . log ( Background color: ${ color } ); } Return String null — The background color string, or null if not set for this condition. getFontColor() Deprecated.
- Deprecated methods Method Return type Brief description get Background() String null Gets the background color string for this boolean condition. get Font Color() String null Gets the font color string for this boolean condition.
- Some methods for getting background and font color strings are deprecated and replaced by methods that return Color objects.


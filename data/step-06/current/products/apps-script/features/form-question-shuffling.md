---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.599Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Form question shuffling"
feature_slug: "form-question-shuffling"
latest_feature_date: "2014-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/support"
  - "https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder"
keywords:
  - "form"
  - "question"
  - "shuffling"
  - "forms"
  - "can"
  - "get"
  - "set"
  - "whether"
---

# Form question shuffling

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Forms can get and set whether questions are shuffled on each page.

## Extended Definition

Forms can get and set whether questions are shuffled on each page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/support](https://developers.google.com/apps-script/support)
- [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder)

## Supporting Pages

### How to get help \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/support](https://developers.google.com/apps-script/support)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- We use a mixture of different platforms to provide support to developers, so review the options below to determine the best way to get help.
- Page Summary outlined flag Different platforms are available to support developers depending on the type of help needed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Developers can seek support through various channels.
- Search existing feedback Submit bug Submit feature request Contact Google Workspace support Google Workspace administrators can email a Google Workspace developer support specialist Make sure you include the following information when you contact us: A description of the problem, and the behavior you expected instead.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.
- December 01, 2014 Feature Added five new FormApp methods: Form.getShuffleQuestions() : Determines whether the order of the questions on each page of the form is randomized.
- Form.setShuffleQuestions(shuffle) : Sets whether the order of the questions on each page of the form is randomized.
- Feature The Forms service now has the following method: Form.deleteResponse(responseId) The Utilities service now has the following methods: Utilities.computeDigest(algorithm, value) , where value is a Byte array Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays Change The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.

### Class ConditionalFormatRuleBuilder \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder)
- Source ID: `site-docs-reference-required-4`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Passing in null removes the strikethrough format setting from the rule. // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to // strikethrough their text if the cell has text equal to "hello". const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 'A1:B3' ); const rule = SpreadsheetApp . newConditionalFormatRule () . whenTextEqualTo ( 'hello' ) . setStrikethrough ( true ) . setRanges ([ range ]) . build (); const rules = sheet . getConditionalFormatRules (); rules . push ( rule ); sheet . setConditionalFormatRules ( rules ); Parameters Name Type Description strikethrough Boolean Whether or not the text should be struckthrough if the format condition is met; null removes this setting.
- Passing in null removes the underline format setting from the rule. // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to // underline their text if the cell has text equal to "hello". const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 'A1:B3' ); const rule = SpreadsheetApp . newConditionalFormatRule () . whenTextEqualTo ( 'hello' ) . setUnderline ( true ) . setRanges ([ range ]) . build (); const rules = sheet . getConditionalFormatRules (); rules . push ( rule ); sheet . setConditionalFormatRules ( rules ); Parameters Name Type Description underline Boolean Whether or not the text should be underlined if the format condition is met; null removes this setting.
- Passing in null removes the italic format setting from the rule. // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to // turn their text italic if the cell has text equal to "hello". const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 'A1:B3' ); const rule = SpreadsheetApp . newConditionalFormatRule () . whenTextEqualTo ( 'hello' ) . setItalic ( true ) . setRanges ([ range ]) . build (); const rules = sheet . getConditionalFormatRules (); rules . push ( rule ); sheet . setConditionalFormatRules ( rules ); Parameters Name Type Description italic Boolean Whether or not the text should be italicised if the format condition is met; null removes this setting.
- Passing in null removes the bold format setting from the rule. // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to // turn their text bold if the cell has text equal to "hello". const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 'A1:B3' ); const rule = SpreadsheetApp . newConditionalFormatRule () . whenTextEqualTo ( 'hello' ) . setBold ( true ) . setRanges ([ range ]) . build (); const rules = sheet . getConditionalFormatRules (); rules . push ( rule ); sheet . setConditionalFormatRules ( rules ); Parameters Name Type Description bold Boolean Whether or not the text should be bolded if the format condition is met; null removes this setting.


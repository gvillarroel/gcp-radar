---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.620Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Form progress bar controls"
feature_slug: "form-progress-bar-controls"
latest_feature_date: "2013-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula"
  - "https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule"
keywords:
  - "form"
  - "progress"
  - "bar"
  - "controls"
  - "formapp"
  - "can"
  - "get"
  - "set"
---

# Form progress bar controls

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

FormApp can get and set whether a form shows a progress bar.

## Extended Definition

FormApp can get and set whether a form shows a progress bar.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula)
- [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
- December 01, 2014 Feature Added five new FormApp methods: Form.getShuffleQuestions() : Determines whether the order of the questions on each page of the form is randomized.
- This method is consistent with the getUi() methods in DocumentApp and FormApp , but only works in the new version of Google Sheets.

### Class ConditionalFormatRule \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule)
- Source ID: `site-docs-reference-required-4`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Boolean conditions contain formatting settings such as font weight, font color, and background color. // Log the boolean criteria type of the first conditional format rules of a // sheet. const rule = SpreadsheetApp . getActiveSheet (). getConditionalFormatRules ()[ 0 ]; const booleanCondition = rule . getBooleanCondition (); if ( booleanCondition != null ) { Logger . log ( booleanCondition . getCriteriaType ()); } Return BooleanCondition null — The boolean condition object, or null if the rule does not use a boolean condition. getGradientCondition() Retrieves the rule's GradientCondition information, if this rule uses gradient condition criteria.
- Logger . log ( gradientCondition . getMinColorObject (). asRgbColor (). asHexString ()); } Return GradientCondition null — The gradient condition object, or null if the rule does not use a gradient condition. getRanges() Retrieves the ranges to which this conditional format rule is applied. // Log each range of the first conditional format rule of a sheet. const rule = SpreadsheetApp . getActiveSheet (). getConditionalFormatRules ()[ 0 ]; const ranges = rule . getRanges (); for ( let i = 0 ; i < ranges . length ; i ++ ) { Logger . log ( ranges [ i ]. getA1Notation ()); } Return Range[] — The ranges to which this conditional format rule is applied.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Conditional format rules can be accessed and managed using the provided methods.
- Methods Method Return type Brief description copy() Conditional Format Rule Builder Returns a rule builder preset with this rule's settings. get Boolean Condition() Boolean Condition null Retrieves the rule's Boolean Condition information if this rule uses boolean condition criteria. get Gradient Condition() Gradient Condition null Retrieves the rule's Gradient Condition information, if this rule uses gradient condition criteria. get Ranges() Range[] Retrieves the ranges to which this conditional format rule is applied.

### Class DataSourceFormula \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula)
- Source ID: `site-docs-reference-required-4`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description cancel Data Refresh() Data Source Formula Cancels the data refresh associated with this object if it's currently running. force Refresh Data() Data Source Formula Refreshes the data of this object regardless of the current state. get Anchor Cell() Range Returns the Range representing the cell where this data source formula is anchored. get Data Source() Data Source Gets the data source the object is linked to. get Display Value() String Returns the display value of the data source formula. get Formula() String Returns the formula for this data source formula. get Status() Data Execution Status Gets the data execution status of the object. refresh Data() Data Source Formula Refreshes the data of the object. set Formula(formula) Data Source Formula Updates the formula. wait For Completion(timeoutInSeconds) Data Execution Status Waits until the current execution completes, timing out after the provided number of seconds.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets getAnchorCell() Returns the Range representing the cell where this data source formula is anchored.
- This example shows how to cancel a formula refresh. const spreadsheet = SpreadsheetApp . getActive (); const formula = spreadsheet . getDataSourceFormulas ()[ 0 ]; // Cancel the ongoing refresh on the formula. formula . cancelDataRefresh (); Throws an exception if the data source type is not enabled.


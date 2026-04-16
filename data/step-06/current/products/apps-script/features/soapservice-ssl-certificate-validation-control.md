---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.649Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "SoapService SSL certificate validation control"
feature_slug: "soapservice-ssl-certificate-validation-control"
latest_feature_date: "2012-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-validation"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria"
keywords:
  - "soapservice"
  - "ssl"
  - "certificate"
  - "validation"
  - "control"
  - "can"
  - "now"
  - "disable"
---

# SoapService SSL certificate validation control

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

SoapService can now disable SSL certificate validation when needed.

## Extended Definition

SoapService can now disable SSL certificate validation when needed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-validation](https://developers.google.com/apps-script/reference/spreadsheet/data-validation)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- November 13, 2012 Feature Added the ability to disable SSL certificate validation in the SoapService , in response to a feature request.
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.
- Passing in string values for the document type is deprecated but still functional. (Issue 1755) Change Enabled SSL certificate validation for UrlFetchApp requests.
- If you wish to disable this behavior you can set the advanced option validateHttpsCertificates to "false".

### Class DataValidation \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-validation](https://developers.google.com/apps-script/reference/spreadsheet/data-validation)
- Source ID: `site-docs-reference-required-4`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Range.setDataValidation(rule) to set the validation rule for a range. // Log information about the data validation rule for cell A1. const cell = SpreadsheetApp . getActive (). getRange ( 'A1' ); const rule = cell . getDataValidation (); if ( rule != null ) { const criteria = rule . getCriteriaType (); const args = rule . getCriteriaValues (); Logger . log ( 'The data validation rule is %s %s' , criteria , args ); } else { Logger . log ( 'The cell does not have a data validation rule.' ); } Methods Method Return type Brief description copy() Data Validation Builder Creates a builder for a data validation rule based on this rule's settings. get Allow Invalid() Boolean Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely. get Criteria Type() Data Validation Criteria Gets the rule's criteria type as defined in the Data Validation Criteria enum. get Criteria Values() Object[] Gets an array of arguments for the rule's criteria. get Help Text() String Gets the rule's help text, or null if no help text is set.
- To use these values to create or modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args) . // Log information about the data validation rule for cell A1. const cell = SpreadsheetApp . getActive (). getRange ( 'A1' ); const rule = cell . getDataValidation (); if ( rule != null ) { const criteria = rule . getCriteriaType (); const args = rule . getCriteriaValues (); Logger . log ( 'The data validation rule is %s %s' , criteria , args ); } else { Logger . log ( 'The cell does not have a data validation rule.' ); } Return Object[] — an array of arguments appropriate to the rule's criteria type; the number of arguments and their type match the corresponding require...() method of the DataValidationBuilder class getHelpText() Gets the rule's help text, or null if no help text is set.
- Detailed documentation copy() Creates a builder for a data validation rule based on this rule's settings. // Change existing data validation rules that require a date in 2013 to require // a date in 2014. const oldDates = [ new Date ( '1/1/2013' ), new Date ( '12/31/2013' )]; const newDates = [ new Date ( '1/1/2014' ), new Date ( '12/31/2014' )]; const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 1 , 1 , sheet . getMaxRows (), sheet . getMaxColumns ()); const rules = range . getDataValidations (); for ( let i = 0 ; i < rules . length ; i ++ ) { for ( let j = 0 ; j < rules [ i ]. length ; j ++ ) { const rule = rules [ i ][ j ]; if ( rule != null ) { const criteria = rule . getCriteriaType (); const args = rule . getCriteriaValues (); if ( criteria === SpreadsheetApp .
- To use these values to create or modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args) . // Log information about the data validation rule for cell A1. const cell = SpreadsheetApp . getActive (). getRange ( 'A1' ); const rule = cell . getDataValidation (); if ( rule != null ) { const criteria = rule . getCriteriaType (); const args = rule . getCriteriaValues (); Logger . log ( 'The data validation rule is %s %s' , criteria , args ); } else { Logger . log ( 'The cell does not have a data validation rule.' ); } Return DataValidationCriteria — the type of data validation criteria getCriteriaValues() Gets an array of arguments for the rule's criteria.

### Enum DataValidationCriteria \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria)
- Source ID: `site-docs-reference-required-4`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, SpreadsheetApp.DataValidationCriteria.DATE IS VALID DATE . // Change existing data-validation rules that require a date in 2013 to require // a date in 2014. const oldDates = [ new Date ( '1/1/2013' ), new Date ( '12/31/2013' )]; const newDates = [ new Date ( '1/1/2014' ), new Date ( '12/31/2014' )]; const sheet = SpreadsheetApp . getActiveSheet (); const range = sheet . getRange ( 1 , 1 , sheet . getMaxRows (), sheet . getMaxColumns ()); const rules = range . getDataValidations (); for ( let i = 0 ; i < rules . length ; i ++ ) { for ( let j = 0 ; j < rules [ i ]. length ; j ++ ) { const rule = rules [ i ][ j ]; if ( rule != null ) { const criteria = rule . getCriteriaType (); const args = rule . getCriteriaValues (); if ( criteria === SpreadsheetApp .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["DataValidationCriteria defines the types of data validation rules applicable to a spreadsheet range.
- DATE BETWEEN && args [ 0 ]. getTime () === oldDates [ 0 ]. getTime () && args [ 1 ]. getTime () === oldDates [ 1 ]. getTime ()) { // Create a builder from the existing rule, then change the dates. rules [ i ][ j ] = rule . copy (). withCriteria ( criteria , newDates ). build (); } } } } range . setDataValidations ( rules ); Properties Property Type Description DATE AFTER Enum Requires a date that is after the given value.
- For example, you can update all DATE BETWEEN rules from a date range in 2013 to a new date range in 2014, by copying and modifying the existing rule, or set new validation criteria on a range to ensure certain data types, including dates, numbers, or text, fit within specified parameters.\n"]]


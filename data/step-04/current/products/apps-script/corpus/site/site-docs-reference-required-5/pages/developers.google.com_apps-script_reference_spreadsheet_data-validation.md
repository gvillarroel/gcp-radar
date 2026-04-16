---
title: "Class DataValidation \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-validation
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-validation
  title: "Class DataValidation \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class DataValidation
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use SpreadsheetApp.newDataValidation() and DataValidationBuilder to create new data validation rules.
The Range.setDataValidation(rule) method sets a data validation rule for a specific range.
Data validation rules have methods to get their criteria type, criteria values, whether invalid input is allowed, and associated help text.
The copy() method creates a builder based on an existing data validation rule's settings, allowing for modifications.
DataValidation
Access data validation rules. To create a new rule, use SpreadsheetApp.newDataValidation() and DataValidationBuilder . You can use
Range.setDataValidation(rule) to set the validation rule for a range.
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp . getActive (). getRange ( 'A1' );
const rule = cell . getDataValidation ();
if ( rule != null ) {
const criteria = rule . getCriteriaType ();
const args = rule . getCriteriaValues ();
Logger . log ( 'The data validation rule is %s %s' , criteria , args );
} else {
Logger . log ( 'The cell does not have a data validation rule.' );
}
Methods
Method Return type Brief description
copy() Data Validation Builder Creates a builder for a data validation rule based on this rule's settings.
get Allow Invalid() Boolean Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely.
get Criteria Type() Data Validation Criteria Gets the rule's criteria type as defined in the Data Validation Criteria enum.
get Criteria Values() Object[] Gets an array of arguments for the rule's criteria.
get Help Text() String Gets the rule's help text, or null if no help text is set.
Detailed documentation
copy()
Creates a builder for a data validation rule based on this rule's settings.
// Change existing data validation rules that require a date in 2013 to require
// a date in 2014.
const oldDates = [ new Date ( '1/1/2013' ), new Date ( '12/31/2013' )];
const newDates = [ new Date ( '1/1/2014' ), new Date ( '12/31/2014' )];
const sheet = SpreadsheetApp . getActiveSheet ();
const range = sheet . getRange ( 1 , 1 , sheet . getMaxRows (), sheet . getMaxColumns ());
const rules = range . getDataValidations ();
for ( let i = 0 ; i < rules . length ; i ++ ) {
for ( let j = 0 ; j < rules [ i ]. length ; j ++ ) {
const rule = rules [ i ][ j ];
if ( rule != null ) {
const criteria = rule . getCriteriaType ();
const args = rule . getCriteriaValues ();
if ( criteria === SpreadsheetApp . DataValidationCriteria . DATE_BETWEEN &&
args [ 0 ]. getTime () === oldDates [ 0 ]. getTime () &&
args [ 1 ]. getTime () === oldDates [ 1 ]. getTime ()) {
// Create a builder from the existing rule, then change the dates.
rules [ i ][ j ] = rule . copy (). withCriteria ( criteria , newDates ). build ();
}
}
}
}
range . setDataValidations ( rules );
Return
DataValidationBuilder — a builder based on this rule's settings
getAllowInvalid()
Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely. The default for new data validation rules is true .
Return
Boolean — true if the rule allows input that fails data validation; false if not
getCriteriaType()
Gets the rule's criteria type as defined in the DataValidationCriteria enum. To get the
arguments for the criteria, use getCriteriaValues() . To use these values to create or
modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args) .
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp . getActive (). getRange ( 'A1' );
const rule = cell . getDataValidation ();
if ( rule != null ) {
const criteria = rule . getCriteriaType ();
const args = rule . getCriteriaValues ();
Logger . log ( 'The data validation rule is %s %s' , criteria , args );
} else {
Logger . log ( 'The cell does not have a data validation rule.' );
}
Return
DataValidationCriteria — the type of data validation criteria
getCriteriaValues()
Gets an array of arguments for the rule's criteria. To get the criteria type, use getCriteriaType() . To use these values to create or modify a data validation rule, see DataValidationBuilder.withCriteria(criteria, args) .
// Log information about the data validation rule for cell A1.
const cell = SpreadsheetApp . getActive (). getRange ( 'A1' );
const rule = cell . getDataValidation ();
if ( rule != null ) {
const criteria = rule . getCriteriaType ();
const args = rule . getCriteriaValues ();
Logger . log ( 'The data validation rule is %s %s' , criteria , args );
} else {
Logger . log ( 'The cell does not have a data validation rule.' );
}
Return
Object[] — an array of arguments appropriate to the rule's criteria type; the number of arguments
and their type match the corresponding require...() method of the DataValidationBuilder class
getHelpText()
Gets the rule's help text, or null if no help text is set.
Return
String — the rule's help text, or null if no help text is set
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

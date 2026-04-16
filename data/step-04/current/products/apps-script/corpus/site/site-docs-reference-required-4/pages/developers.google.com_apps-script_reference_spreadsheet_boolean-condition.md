---
title: "Class BooleanCondition \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition
  title: "Class BooleanCondition \_|\_ Apps Script \_|\_ Google for Developers"
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
Class BooleanCondition
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A BooleanCondition is accessed within ConditionalFormatRules and each rule can have one boolean condition.
A boolean condition contains a boolean criteria and formatting settings that are applied if the criteria evaluates to true for a cell.
Methods are available to retrieve the background color, font color, bold, italic, strikethrough, and underline settings of a boolean condition.
Methods also exist to retrieve the criteria type and criteria values of a boolean condition.
Some methods for getting background and font color strings are deprecated and replaced by methods that return Color objects.
BooleanCondition
Access boolean conditions in ConditionalFormatRules . Each
conditional format rule may contain a single boolean condition. The boolean condition itself
contains a boolean criteria (with values) and formatting settings. The criteria is evaluated
against the content of a cell resulting in either a true or false value. If the
criteria evaluates to true , the condition's formatting settings are applied to the cell.
Methods
Method Return type Brief description
get Background Object() Color |null Gets the background color for this boolean condition.
get Bold() Boolean|null Returns true if this boolean condition bolds the text and returns false if this
boolean condition removes bolding from the text.
get Criteria Type() Boolean Criteria Gets the rule's criteria type as defined in the Boolean Criteria enum.
get Criteria Values() Object[] Gets an array of arguments for the rule's criteria.
get Font Color Object() Color |null Gets the font color for this boolean condition.
get Italic() Boolean|null Returns true if this boolean condition italicises the text and returns false if
this boolean condition removes italics from the text.
get Strikethrough() Boolean|null Returns true if this boolean condition strikes through the text and returns false if this boolean condition removes strikethrough from the text.
get Underline() Boolean|null Returns true if this boolean condition underlines the text and returns false if
this boolean condition removes underlining from the text.
Deprecated methods
Method Return type Brief description
get Background() String|null Gets the background color string for this boolean condition.
get Font Color() String|null Gets the font color string for this boolean condition.
Detailed documentation
getBackgroundObject()
Gets the background color for this boolean condition. Returns null if not set.
// Logs the boolean condition background color for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const color = rule . getBooleanCondition (). getBackgroundObject ();
Logger . log ( `Background color: ${ color . asRgbColor (). asHexString () } ` );
}
Return
Color |null — The background color, or null if not set for this condition.
getBold()
Returns true if this boolean condition bolds the text and returns false if this
boolean condition removes bolding from the text. Returns null if bolding is unaffected.
// Logs the boolean condition font weight for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const bold = rule . getBooleanCondition (). getBold ();
Logger . log ( `Bold: ${ bold } ` );
}
Return
Boolean|null — whether or not the boolean condition bolds the text, or null if bolding is
unaffected
getCriteriaType()
Gets the rule's criteria type as defined in the BooleanCriteria enum. To get the
arguments for the criteria, use getCriteriaValues() . To use these values to create or
modify a conditional formatting rule, see ConditionalFormatRuleBuilder.withCriteria(criteria, args) .
// Log information about the conditional formats on the active sheet that use
// boolean conditions.
const formats = SpreadsheetApp . getActiveSheet . getConditionalFormats ();
SpreadsheetApp . getActiveSheet . getConditionalFormats (). forEach (( format ) = > {
const booleanCondition = format . getBooleanCondition ();
if ( booleanCondition ) {
const criteria = booleanCondition . getCriteriaType ();
const args = booleanCondition . getCriteriaValues ();
Logger . log ( `The conditional format rule is ${ criteria } ${ args } ` );
}
});
Return
BooleanCriteria — The type of conditional formatting criteria.
getCriteriaValues()
Gets an array of arguments for the rule's criteria. To get the criteria type, use getCriteriaType() . To use these values to create or modify a conditional formatting rule, see
ConditionalFormatRuleBuilder.withCriteria(criteria, args) .
// Log information about the conditional formats on the active sheet that use
// boolean conditions.
const formats = SpreadsheetApp . getActiveSheet . getConditionalFormats ();
SpreadsheetApp . getActiveSheet . getConditionalFormats (). forEach (( format ) = > {
const booleanCondition = format . getBooleanCondition ();
if ( booleanCondition ) {
const criteria = booleanCondition . getCriteriaType ();
const args = booleanCondition . getCriteriaValues ();
Logger . log ( `The conditional format rule is ${ criteria } ${ args } ` );
}
});
Return
Object[] — An array of arguments appropriate to the rule's criteria type; the number of arguments
and their type match the corresponding when...() method of the ConditionalFormatRuleBuilder class.
getFontColorObject()
Gets the font color for this boolean condition. Returns null if not set.
// Logs the boolean condition font color for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const color = rule . getBooleanCondition (). getFontColorObject ();
Logger . log ( `Font color: ${ color . asRgbColor (). asHexString () } ` );
}
Return
Color |null — The font color, or null if not set for this condition.
getItalic()
Returns true if this boolean condition italicises the text and returns false if
this boolean condition removes italics from the text. Returns null if italics are
unaffected.
// Logs the boolean condition font style for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const italic = rule . getBooleanCondition (). getItalic ();
Logger . log ( `Italic: ${ italic } ` );
}
Return
Boolean|null — whether or not the boolean condition italicises the text, or null if
italicising is unaffected
getStrikethrough()
Returns true if this boolean condition strikes through the text and returns false if this boolean condition removes strikethrough from the text. Returns null if
strikethrough is unaffected.
// Logs the boolean condition strikethrough setting for each conditional format
// rule on a sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const strikethrough = rule . getBooleanCondition (). getStrikethrough ();
Logger . log ( `Strikethrough: ${ strikethrough } ` );
}
Return
Boolean|null — whether or not the boolean condition strikes through the text, or null if
strikethrough is unaffected
getUnderline()
Returns true if this boolean condition underlines the text and returns false if
this boolean condition removes underlining from the text. Returns null if underlining
is unaffected.
// Logs the boolean condition underline setting for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const underline = rule . getBooleanCondition (). getUnderline ();
Logger . log ( `Underline: ${ underline } ` );
}
Return
Boolean|null — whether or not the boolean condition underlines the text, or null if
underlining is unaffected
Deprecated methods
getBackground()
Deprecated. Replaced by getBackgroundObject()
Gets the background color string for this boolean condition. Returns null if not set.
// Logs the boolean condition background color for each conditional format rule
// on a sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
const color = rule . getBooleanCondition (). getBackground ();
Logger . log ( `Background color: ${ color } ` );
}
Return
String|null — The background color string, or null if not set for this condition.
getFontColor()
Deprecated. Replaced by getFontColorObject()
Gets the font color string for this boolean condition. Returns null if not set.
// Logs the boolean condition font color for each conditional format rule on a
// sheet.
const sheet = SpreadsheetApp . getActiveSheet ();
const rules = sheet . getConditionalFormatRules ();
for ( const rule of rules ) {
Logger . log ( `Font color: ${ rule . getBooleanCondition (). getFontColor () } ` );
}
Return
String|null — The font color string, or null if not set for this condition.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Boolean conditions within `ConditionalFormatRules` evaluate cell content against a defined criteria, resulting in a `true` or `false` outcome. If `true`, formatting is applied. Key actions include: retrieving the criteria type and values (`getCriteriaType`, `getCriteriaValues`), managing text formatting like bolding, italics, strikethrough, underlining (`getBold`, `getItalic`, `getStrikethrough`, `getUnderline`), and obtaining background and font colors (`getBackgroundObject`, `getFontColorObject`). The deprecated methods are `getBackground` and `getFontColor`.\n"]]

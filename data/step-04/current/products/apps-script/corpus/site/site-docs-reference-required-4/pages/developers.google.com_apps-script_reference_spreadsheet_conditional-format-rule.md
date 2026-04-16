---
title: "Class ConditionalFormatRule \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule
  title: "Class ConditionalFormatRule \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ConditionalFormatRule
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder to create new conditional formatting rules.
You can set conditional format rules for a sheet using Sheet.setConditionalFormatRules() .
Methods available for ConditionalFormatRule include copy() , getBooleanCondition() , getGradientCondition() , and getRanges() .
copy() returns a builder preset with the current rule's settings.
getBooleanCondition() and getGradientCondition() retrieve condition details if applicable, otherwise return null .
getRanges() returns the ranges where the conditional format rule is applied.
ConditionalFormatRule
Access conditional formatting rules. To create a new rule, use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder .
You can use Sheet.setConditionalFormatRules(rules) to set the
rules for a given sheet.
For rules that use boolean condition criteria, you can access the formatting settings by
calling getBooleanCondition() and using the methods on the returned BooleanCondition object.
Methods
Method Return type Brief description
copy() Conditional Format Rule Builder Returns a rule builder preset with this rule's settings.
get Boolean Condition() Boolean Condition |null Retrieves the rule's Boolean Condition information if this rule uses
boolean condition criteria.
get Gradient Condition() Gradient Condition |null Retrieves the rule's Gradient Condition information, if this rule
uses gradient condition criteria.
get Ranges() Range[] Retrieves the ranges to which this conditional format rule is applied.
Detailed documentation
copy()
Returns a rule builder preset with this rule's settings.
Return
ConditionalFormatRuleBuilder — A builder based on this rule's settings.
getBooleanCondition()
Retrieves the rule's BooleanCondition information if this rule uses
boolean condition criteria. Otherwise returns null . Boolean conditions contain
formatting settings such as font weight, font color, and background color.
// Log the boolean criteria type of the first conditional format rules of a
// sheet.
const rule = SpreadsheetApp . getActiveSheet (). getConditionalFormatRules ()[ 0 ];
const booleanCondition = rule . getBooleanCondition ();
if ( booleanCondition != null ) {
Logger . log ( booleanCondition . getCriteriaType ());
}
Return
BooleanCondition |null — The boolean condition object, or null if the rule does not use a boolean
condition.
getGradientCondition()
Retrieves the rule's GradientCondition information, if this rule
uses gradient condition criteria. Otherwise returns null .
// Log the gradient minimum color of the first conditional format rule of a
// sheet.
const rule = SpreadsheetApp . getActiveSheet (). getConditionalFormatRules ()[ 0 ];
const gradientCondition = rule . getGradientCondition ();
if ( gradientCondition != null ) {
// Assume the color has ColorType.RGB.
Logger . log ( gradientCondition . getMinColorObject (). asRgbColor (). asHexString ());
}
Return
GradientCondition |null — The gradient condition object, or null if the rule does not use a gradient
condition.
getRanges()
Retrieves the ranges to which this conditional format rule is applied.
// Log each range of the first conditional format rule of a sheet.
const rule = SpreadsheetApp . getActiveSheet (). getConditionalFormatRules ()[ 0 ];
const ranges = rule . getRanges ();
for ( let i = 0 ; i < ranges . length ; i ++ ) {
Logger . log ( ranges [ i ]. getA1Notation ());
}
Return
Range[] — The ranges to which this conditional format rule is applied.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Conditional format rules can be accessed and managed using the provided methods. New rules are created via `SpreadsheetApp.newConditionalFormatRule()`. Existing rules can be copied with `copy()`, retrieving a builder with the same settings. The `getBooleanCondition()` and `getGradientCondition()` methods fetch information based on the rule's criteria, while `getRanges()` retrieves the ranges the rule applies to. `Sheet.setConditionalFormatRules(rules)` applies rule settings to a given sheet.\n"]]

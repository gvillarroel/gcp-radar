---
title: "Enum BooleanCriteria \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria
  title: "Enum BooleanCriteria \_|\_ Apps Script \_|\_ Google for Developers"
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
Enum BooleanCriteria
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BooleanCriteria is an enumeration used for boolean criteria in conditional formats or filters.
To use an enum property, you call its parent class, name, and property, such as SpreadsheetApp.BooleanCriteria.CELL_EMPTY .
Properties include criteria for cell emptiness, dates, numbers, text, and custom formulas.
BooleanCriteria
An enumeration representing the boolean criteria that can be used in conditional format or
filter.
To call an enum, you call its parent class, name, and property. For example,
SpreadsheetApp.BooleanCriteria.CELL_EMPTY .
Properties
Property Type Description
CELL_EMPTY Enum The criteria is met when a cell is empty.
CELL_NOT_EMPTY Enum The criteria is met when a cell is not empty.
DATE_AFTER Enum The criteria is met when a date is after the given value.
DATE_BEFORE Enum The criteria is met when a date is before the given value.
DATE_EQUAL_TO Enum The criteria is met when a date is equal to the given value.
DATE_NOT_EQUAL_TO Enum The criteria is met when a date is not equal to the given value.
DATE_AFTER_RELATIVE Enum The criteria is met when a date is after the relative date value.
DATE_BEFORE_RELATIVE Enum The criteria is met when a date is before the relative date value.
DATE_EQUAL_TO_RELATIVE Enum The criteria is met when a date is equal to the relative date value.
NUMBER_BETWEEN Enum The criteria is met when a number that is between the given values.
NUMBER_EQUAL_TO Enum The criteria is met when a number that is equal to the given value.
NUMBER_GREATER_THAN Enum The criteria is met when a number that is greater than the given value.
NUMBER_GREATER_THAN_OR_EQUAL_TO Enum The criteria is met when a number that is greater than or equal to the given value.
NUMBER_LESS_THAN Enum The criteria is met when a number that is less than the given value.
NUMBER_LESS_THAN_OR_EQUAL_TO Enum The criteria is met when a number that is less than or equal to the given value.
NUMBER_NOT_BETWEEN Enum The criteria is met when a number that is not between the given values.
NUMBER_NOT_EQUAL_TO Enum The criteria is met when a number that is not equal to the given value.
TEXT_CONTAINS Enum The criteria is met when the input contains the given value.
TEXT_DOES_NOT_CONTAIN Enum The criteria is met when the input does not contain the given value.
TEXT_EQUAL_TO Enum The criteria is met when the input is equal to the given value.
TEXT_NOT_EQUAL_TO Enum The criteria is met when the input is not equal to the given value.
TEXT_STARTS_WITH Enum The criteria is met when the input begins with the given value.
TEXT_ENDS_WITH Enum The criteria is met when the input ends with the given value.
CUSTOM_FORMULA Enum The criteria is met when the input makes the given formula evaluate to true .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

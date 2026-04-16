---
title: "Enum BorderStyle \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/border-style
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/border-style
  title: "Enum BorderStyle \_|\_ Apps Script \_|\_ Google for Developers"
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
Enum BorderStyle
Stay organized with collections
Save and categorize content based on your preferences.
BorderStyle
Styles that can be set on a range using Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style) .
To call an enum, you call its parent class, name, and property. For example,
SpreadsheetApp.BorderStyle.DOTTED .
Properties
Property Type Description
DOTTED Enum Dotted line borders.
DASHED Enum Dashed line borders.
SOLID Enum Thin solid line borders.
SOLID_MEDIUM Enum Medium solid line borders.
SOLID_THICK Enum Thick solid line borders.
DOUBLE Enum Two solid line borders.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Border styles can be applied to a range using `Range.setBorder()`, specifying top, left, bottom, right, vertical, and horizontal borders, along with color and style. The available border styles, accessed via `SpreadsheetApp.BorderStyle`, include `DOTTED`, `DASHED`, `SOLID`, `SOLID_MEDIUM`, `SOLID_THICK`, and `DOUBLE`. Each style corresponds to a different line appearance, ranging from dotted to thick solid lines, as well as double lines.\n"]]

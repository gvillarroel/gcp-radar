---
title: "Enum CopyPasteType \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/copy-paste-type
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/copy-paste-type
  title: "Enum CopyPasteType \_|\_ Apps Script \_|\_ Google for Developers"
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
Enum CopyPasteType
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CopyPasteType is an enumeration of possible special paste types.
To call an enum, you call its parent class, name, and property.
Properties include options like pasting values, formulas, formats, and more, with variations like excluding borders or pasting only specific elements.
CopyPasteType
An enumeration of possible special paste types.
To call an enum, you call its parent class, name, and property. For example,
SpreadsheetApp.CopyPasteType.PASTE_NORMAL .
Properties
Property Type Description
PASTE_NORMAL Enum Paste values, formulas, formats and merges.
PASTE_NO_BORDERS Enum Paste values, formulas, formats and merges but without borders.
PASTE_FORMAT Enum Paste the format only.
PASTE_FORMULA Enum Paste the formulas only.
PASTE_DATA_VALIDATION Enum Paste the data validation only.
PASTE_VALUES Enum Paste the values ONLY without formats, formulas or merges.
PASTE_CONDITIONAL_FORMATTING Enum Paste the color rules only.
PASTE_COLUMN_WIDTHS Enum Paste the column widths only.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

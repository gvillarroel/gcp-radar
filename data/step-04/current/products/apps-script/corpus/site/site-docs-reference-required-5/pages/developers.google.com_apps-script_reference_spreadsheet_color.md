---
title: "Class Color \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/color
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/color
  title: "Class Color \_|\_ Apps Script \_|\_ Google for Developers"
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
Class Color
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Color object represents a color and can be converted to an RgbColor or a ThemeColor.
You can get the type of the color using the getColorType() method.
Converting to RgbColor or ThemeColor may throw an error if the color is not of that type.
Using these methods requires specific spreadsheet authorization scopes.
Color
A representation for a color.
Methods
Method Return type Brief description
as Rgb Color() Rgb Color Converts this color to an Rgb Color .
as Theme Color() Theme Color Converts this color to a Theme Color .
get Color Type() Color Type Get the type of this color.
Detailed documentation
asRgbColor()
Converts this color to an RgbColor .
Return
RgbColor — The RGB color.
Throws
Error — if the color is not an RgbColor
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
asThemeColor()
Converts this color to a ThemeColor .
Return
ThemeColor — The theme color.
Throws
Error — if the color is not a ThemeColor .
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getColorType()
Get the type of this color.
Return
ColorType — The color type.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The core content defines a \"Color\" representation with three methods. `asRgbColor()` converts the color to an `RgbColor`, returning the RGB color and throwing an error if it's not an `RgbColor`. `asThemeColor()` converts the color to a `ThemeColor`, returning the theme color and throwing an error if it's not a `ThemeColor`. `getColorType()` retrieves and returns the color's type as a `ColorType`. Each method requires specific authorization scopes.\n"]]

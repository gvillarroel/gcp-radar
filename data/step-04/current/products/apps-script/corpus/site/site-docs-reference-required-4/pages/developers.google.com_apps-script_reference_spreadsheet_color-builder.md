---
title: "Class ColorBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/color-builder
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/color-builder
  title: "Class ColorBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ColorBuilder
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ColorBuilder is a builder for creating color objects in Apps Script spreadsheets.
A new ColorBuilder is created using SpreadsheetApp.newColor().
The builder allows setting a color as either an RGB color using a CSS string or as a theme color using a ThemeColorType.
Once configured, the build() method creates the final Color object.
You can also convert a built color object to its RgbColor or ThemeColor representation and get its ColorType.
ColorBuilder
The builder for ColorBuilder . To create a new builder, use SpreadsheetApp.newColor() .
Methods
Method Return type Brief description
as Rgb Color() Rgb Color Converts this color to an Rgb Color .
as Theme Color() Theme Color Converts this color to a Theme Color .
build() Color Creates a color object from the settings supplied to the builder.
get Color Type() Color Type Get the type of this color.
set Rgb Color(cssString) Color Builder Sets as RGB color.
set Theme Color(themeColorType) Color Builder Sets as theme color.
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
build()
Creates a color object from the settings supplied to the builder.
Return
Color — A color object created from this builder.
getColorType()
Get the type of this color.
Return
ColorType — The color type.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setRgbColor(cssString)
Sets as RGB color.
Parameters
Name Type Description
css String String The RGB color in CSS notation (such as '#ffffff').
Return
ColorBuilder — This builder, for chaining.
setThemeColor(themeColorType)
Sets as theme color.
Parameters
Name Type Description
theme Color Type Theme Color Type The theme color type.
Return
ColorBuilder — This builder, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["ColorBuilder facilitates creating color objects using `SpreadsheetApp.newColor()`. It allows conversion to `RgbColor` or `ThemeColor`. Key actions include `build()` to create a color object, `getColorType()` to retrieve the color type, `setRgbColor(cssString)` to define an RGB color, and `setThemeColor(themeColorType)` to define a theme color. Methods may require specific authorization scopes like `spreadsheets.currentonly` or `spreadsheets`. The builder can be chained.\n"]]

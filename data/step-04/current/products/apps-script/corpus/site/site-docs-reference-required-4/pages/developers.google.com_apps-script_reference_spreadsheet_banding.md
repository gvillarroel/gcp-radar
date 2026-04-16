---
title: "Class Banding \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/banding
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/banding
  title: "Class Banding \_|\_ Apps Script \_|\_ Google for Developers"
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
Class Banding
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Banding refers to the color patterns applied to rows or columns of a range within a spreadsheet.
Each banding is defined by a range and specific colors for its rows, columns, headers, and footers.
You can access and modify various color properties of a banding for the first and second alternating rows/columns, as well as header and footer rows/columns.
Banding provides methods to copy, remove, and set the range for the banding.
Some methods for getting color properties by returning a String color code are deprecated and replaced by methods that return a Color object.
Banding
Access and modify bandings, the color patterns applied to rows or columns of a range. Each
banding consists of a range and a set of colors for rows, columns, headers, and footers.
Methods
Method Return type Brief description
copy To(range) Banding Copies this banding to another range.
get First Column Color Object() Color |null Returns the first alternating column color in the banding, or null if no color is set.
get First Row Color Object() Color |null Returns the first alternating row color, or null if no color is set.
get Footer Column Color Object() Color |null Returns the color of the last column in the banding, or null if no color is set.
get Footer Row Color Object() Color |null Returns the last row color in the banding, or null if no color is set.
get Header Column Color Object() Color |null Returns the color of the first column in the banding, or null if no color is set.
get Header Row Color Object() Color |null Returns the color of the header row or null if no color is set.
get Range() Range Returns the range for this banding.
get Second Column Color Object() Color |null Returns the second alternating column color in the banding, or null if no color is set.
get Second Row Color Object() Color |null Returns the second alternating row color, or null if no color is set.
remove() void Removes this banding.
set First Column Color(color) Banding Sets the first column color that is alternating.
set First Column Color Object(color) Banding Sets the first alternating column color in the banding.
set First Row Color(color) Banding Sets the first row color that is alternating.
set First Row Color Object(color) Banding Sets the first alternating row color in the banding.
set Footer Column Color(color) Banding Sets the color of the last column.
set Footer Column Color Object(color) Banding Sets the color of the last column in the banding.
set Footer Row Color(color) Banding Sets the color of the last row.
set Footer Row Color Object(color) Banding Sets the color of the footer row in the banding.
set Header Column Color(color) Banding Sets the color of the header column.
set Header Column Color Object(color) Banding Sets the color of the header column.
set Header Row Color(color) Banding Sets the color of the header row.
set Header Row Color Object(color) Banding Sets the color of the header row.
set Range(range) Banding Sets the range for this banding.
set Second Column Color(color) Banding Sets the second column color that is alternating.
set Second Column Color Object(color) Banding Sets the second alternating column color in the banding.
set Second Row Color(color) Banding Sets the second row color that is alternating.
set Second Row Color Object(color) Banding Sets the second alternating color in the banding.
Deprecated methods
Method Return type Brief description
get First Column Color() String|null Returns the first column color that is alternating, or null if no color is set.
get First Row Color() String|null Returns the first row color that is alternating or null if no color is set.
get Footer Column Color() String|null Returns the color of the last column, or null if no color is set.
get Footer Row Color() String|null Returns the color of the last row, or null if no color is set.
get Header Column Color() String|null Returns the color of the header column, or null if no color is set.
get Header Row Color() String|null Returns the color of the header row or null if no color is set.
get Second Column Color() String|null Returns the second column color that is alternating, or null if no color is set.
get Second Row Color() String|null Returns the second row color that is alternating or null if no color is set.
Detailed documentation
copyTo(range)
Copies this banding to another range.
Parameters
Name Type Description
range Range The range to copy this banding to.
Return
Banding — The new banding.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFirstColumnColorObject()
Returns the first alternating column color in the banding, or null if no color is set.
Return
Color |null — The first alternating column color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFirstRowColorObject()
Returns the first alternating row color, or null if no color is set.
Return
Color |null — The first alternating row color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFooterColumnColorObject()
Returns the color of the last column in the banding, or null if no color is set.
Return
Color |null — The last column color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFooterRowColorObject()
Returns the last row color in the banding, or null if no color is set.
Return
Color |null — The footer row color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getHeaderColumnColorObject()
Returns the color of the first column in the banding, or null if no color is set.
Return
Color |null — The first column color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getHeaderRowColorObject()
Returns the color of the header row or null if no color is set.
Return
Color |null — The color of the header row; returns null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getRange()
Returns the range for this banding.
Return
Range — The range for this banding.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSecondColumnColorObject()
Returns the second alternating column color in the banding, or null if no color is set.
Return
Color |null — The second alternating column color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSecondRowColorObject()
Returns the second alternating row color, or null if no color is set.
Return
Color |null — The second alternating row color in the banding, or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
remove()
Removes this banding.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFirstColumnColor(color)
Sets the first column color that is alternating.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFirstColumnColorObject(color)
Sets the first alternating column color in the banding.
Parameters
Name Type Description
color Color The new first alternating column color in the banding; setting to null
clears the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFirstRowColor(color)
Sets the first row color that is alternating.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFirstRowColorObject(color)
Sets the first alternating row color in the banding.
Parameters
Name Type Description
color Color The new first alternating color in the banding; setting to null clears the
color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFooterColumnColor(color)
Sets the color of the last column.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFooterColumnColorObject(color)
Sets the color of the last column in the banding.
Parameters
Name Type Description
color Color The new color of the last column in the banding; setting to null clears
the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFooterRowColor(color)
Sets the color of the last row.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setFooterRowColorObject(color)
Sets the color of the footer row in the banding.
Parameters
Name Type Description
color Color The new footer row color; setting to null clears the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setHeaderColumnColor(color)
Sets the color of the header column.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setHeaderColumnColorObject(color)
Sets the color of the header column.
Parameters
Name Type Description
color Color The new header column color; setting to null clears the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setHeaderRowColor(color)
Sets the color of the header row.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setHeaderRowColorObject(color)
Sets the color of the header row.
Parameters
Name Type Description
color Color The new header row color; setting to null clears the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setRange(range)
Sets the range for this banding.
Parameters
Name Type Description
range Range The new range for this banding.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSecondColumnColor(color)
Sets the second column color that is alternating.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSecondColumnColorObject(color)
Sets the second alternating column color in the banding.
Parameters
Name Type Description
color Color The new second alternating column color in the banding; setting to null
clears the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSecondRowColor(color)
Sets the second row color that is alternating.
Parameters
Name Type Description
color String The color code in CSS notation (such as '#ffffff' or 'white' ), or
null to clear the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSecondRowColorObject(color)
Sets the second alternating color in the banding.
Parameters
Name Type Description
color Color The new second alternating color in the banding; setting to null clears
the color.
Return
Banding — This banding, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Deprecated methods
getFirstColumnColor()
Deprecated. Replaced by getFirstColumnColorObject()
Returns the first column color that is alternating, or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFirstRowColor()
Deprecated. Replaced by getFirstRowColorObject()
Returns the first row color that is alternating or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFooterColumnColor()
Deprecated. Replaced by getFooterColumnColorObject()
Returns the color of the last column, or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getFooterRowColor()
Deprecated. Replaced by getFooterRowColorObject()
Returns the color of the last row, or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getHeaderColumnColor()
Deprecated. Replaced by getHeaderColumnColorObject()
Returns the color of the header column, or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getHeaderRowColor()
Deprecated. Replaced by getHeaderRowColorObject()
Returns the color of the header row or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSecondColumnColor()
Deprecated. Replaced by getSecondColumnColorObject()
Returns the second column color that is alternating, or null if no color is set.
Return
String|null — The HEX color or null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getSecondRowColor()
Deprecated. Replaced by getSecondRowColorObject()
Returns the second row color that is alternating or null if no color is set.
Return
String|null — The color code in CSS notation (such as '#ffffff' or 'white' ), or
null if no color is set.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

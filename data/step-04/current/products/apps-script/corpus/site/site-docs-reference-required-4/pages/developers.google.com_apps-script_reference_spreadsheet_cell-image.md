---
title: "Class CellImage \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/cell-image
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/cell-image
  title: "Class CellImage \_|\_ Apps Script \_|\_ Google for Developers"
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
Class CellImage
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CellImage represents an image value in a cell and is added using SpreadsheetApp.newCellImage() and CellImageBuilder .
CellImage has a valueType property which is always ValueType.IMAGE .
Key methods include retrieving alt text ( getAltTextDescription , getAltTextTitle ), getting a Google-hosted content URL ( getContentUrl ), and creating a builder based on current properties ( toBuilder ).
The getUrl() method is deprecated as the source URL is often unavailable for newly inserted images.
CellImage
Represents an image value in a cell. To add an image to a cell, you must create a new image value
for the image using SpreadsheetApp.newCellImage() and CellImageBuilder . Then you can use Range.setValue(value) or Range.setValues(values) to
add the image value to the cell.
Properties
Property Type Description
value Type Value Type The value type of the cell image, which is Value Type.IMAGE .
Methods
Method Return type Brief description
get Alt Text Description() String Returns the alt text description for this image.
get Alt Text Title() String Returns the alt text title for this image.
get Content Url() String Returns a Google-hosted URL to the image.
to Builder() Cell Image Builder Creates a cell image builder based on the current image properties.
Deprecated methods
Method Return type Brief description
get Url() String Gets the image's source URL.
Detailed documentation
getAltTextDescription()
Returns the alt text description for this image.
Return
String — The alt text description.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getAltTextTitle()
Returns the alt text title for this image.
Return
String — The alt text title.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
getContentUrl()
Returns a Google-hosted URL to the image. This URL is tagged with the account of the requester,
so anyone with the URL effectively accesses the image as the original requester. Access to the
image might be lost if the spreadsheet's sharing settings change. The returned URL expires
after a short period of time.
const range = SpreadsheetApp . getActiveSpreadsheet (). getRange ( "Sheet1!A1" );
const value = range . getValue ();
if ( value . valueType == SpreadsheetApp . ValueType . IMAGE ) {
console . log ( value . getContentUrl ());
}
Return
String — The Google-hosted URL of the image.
toBuilder()
Creates a cell image builder based on the current image properties. Use CellImageBuilder.setSourceUrl(url) to set the source URL of the new image. Then you can add it to a
cell using Range.setValue(value) or Range.setValues(values) .
const ss = SpreadsheetApp . getActiveSpreadsheet ();
const range = ss . getRange ( "Sheet1!A1" );
const value = range . getValue ();
if ( value . valueType == SpreadsheetApp . ValueType . IMAGE ) {
const newImage =
value . toBuilder ()
. setSourceUrl (
'https://www.gstatic.com/images/branding/productlogos/apps_script/v10/web-64dp/logo_apps_script_color_1x_web_64dp.png' ,
)
. build ();
const newRange = ss . getRange ( "Sheet1!A2" );
newRange . setValue ( newImage );
}
Return
CellImageBuilder — A builder that creates an image value type based on the given image properties.
Deprecated methods
getUrl()
Deprecated. For most newly inserted images, the source URL is unavailable.
Gets the image's source URL. Returns an empty string if the URL is unavailable. For most newly
inserted images, the source URL is unavailable regardless how the image is inserted.
Return
String — The image's source URL if available; returns an empty string otherwise.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["To incorporate images into spreadsheet cells, create a new image value using `SpreadsheetApp.newCellImage()` and `CellImageBuilder`. Add the image to a cell via `Range.setValue()` or `Range.setValues()`. Key methods include: `getAltTextDescription()`, `getAltTextTitle()`, `getContentUrl()`, and `toBuilder()`. The method `getUrl()` is deprecated. `getContentUrl()` returns a Google-hosted URL to the image. `toBuilder()` creates a `CellImageBuilder` to modify image properties. `valueType` property is `ValueType.IMAGE`.\n"]]

---
title: "Class CellImageBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder
  title: "Class CellImageBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class CellImageBuilder
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CellImageBuilder is used to create the image value needed to add an image to a cell.
The value type for a CellImage is ValueType.IMAGE .
Key methods include build() to create the image value, setSourceUrl() to set the image source, and methods to get and set alt text ( getAltTextDescription , setAltTextDescription , getAltTextTitle , setAltTextTitle ).
The getContentUrl() method returns a temporary Google-hosted URL for the image.
The getUrl() method is deprecated and will often return an empty string.
CellImageBuilder
Builder for CellImage . This builder creates the image value needed to add an
image to a cell.
Properties
Property Type Description
value Type Value Type The value type of the cell image, which is Value Type.IMAGE .
Methods
Method Return type Brief description
build() Cell Image Creates the image value type needed to add an image to a cell.
get Alt Text Description() String Returns the alt text description for this image.
get Alt Text Title() String Returns the alt text title for this image.
get Content Url() String Returns a Google-hosted URL to the image.
set Alt Text Description(description) Cell Image Sets the alt-text description for this image.
set Alt Text Title(title) Cell Image Sets the alt text title for this image.
set Source Url(url) Cell Image Builder Sets the image source URL.
to Builder() Cell Image Builder Creates a cell image builder based on the current image properties.
Deprecated methods
Method Return type Brief description
get Url() String Gets the image's source URL.
Detailed documentation
build()
Creates the image value type needed to add an image to a cell. The image value is built from
the image properties added to the builder, such as the source URL.
Return
CellImage — A representation of the image to add to a cell.
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
setAltTextDescription(description)
Sets the alt-text description for this image.
Parameters
Name Type Description
description String The new alt text description for the image.
Return
CellImage — This image, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setAltTextTitle(title)
Sets the alt text title for this image.
Parameters
Name Type Description
title String The new alt text title for the image.
Return
CellImage — This image, for chaining.
Authorization
Scripts that use this method require authorization with one or more of the following scopes :
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/spreadsheets
setSourceUrl(url)
Sets the image source URL.
Parameters
Name Type Description
url String The URL for the image.
Return
CellImageBuilder — This builder, for chaining.
toBuilder()
Creates a cell image builder based on the current image properties. Use setSourceUrl(url) to set the source URL of the new image. Then you can add it to a
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `CellImageBuilder` facilitates adding images to spreadsheet cells. It constructs image values with `build()`, which requires a source URL set via `setSourceUrl()`. Alt text can be managed using `setAltTextDescription()` and `setAltTextTitle()`, and information can be retrieved by using `getAltTextDescription()` ,`getAltTextTitle()` and `getContentUrl()`. `toBuilder()` creates a new builder from an existing image. The value type for cell images is `ValueType.IMAGE`. A deprecated method, `getUrl()`, was used to retrieve source URLs.\n"]]

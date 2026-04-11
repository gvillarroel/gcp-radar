---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.840Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "FileUpload binary file support"
feature_slug: "fileupload-binary-file-support"
latest_feature_date: "2011-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/advanced/bigquery"
keywords:
  - "fileupload"
  - "uploading"
  - "binary"
  - "enabled"
  - "through"
  - "files"
  - "file"
---

# FileUpload binary file support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enabled uploading binary files through FileUpload.

## Extended Definition

Enabled uploading binary files through FileUpload.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Feature Binary files can be uploaded using FileUpload .
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- Added support for the custom JsDoc annotation @OnlyCurrentDoc , which forces the authorization dialog to ask only for access to files in which an add-on or script is used, rather than all of a user's spreadsheets, documents, or forms.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Files can be of different types, such as server-side Javascript, HTML, or JSON for the project's manifest.
- FileType An enumeration of different types of files.
- Each script project can contain multiple files.
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.

### BigQuery Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/bigquery](https://developers.google.com/apps-script/advanced/bigquery)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Jobs . getQueryResults ( projectId , jobId , { pageToken : queryResults . pageToken , }); rows = rows . concat ( queryResults . rows ); } if ( ! rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "BigQuery Results" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = queryResults . schema . fields . map (( field ) = > field . name ); sheet . appendRow ( headers ); // Append the results. const data = new Array ( rows . length ); for ( let i = 0 ; i < rows . length ; i ++ ) { const cols = rows [ i ]. f ; data [ i ] = new Array ( cols . length ); for ( let j = 0 ; j < cols . length ; j ++ ) { data [ i ][ j ] = cols [ j ]. v ; } } sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( data ); console . log ( "Results spreadsheet created: %s" , spreadsheet . getUrl ()); } Load CSV data This sample creates a new table and loads a CSV file from Google Drive into it. advanced/bigquery.gs View on GitHub / Loads a CSV into BigQuery / function loadCsv () { // Replace this value with the project ID listed in the Google // Cloud Platform project. const projectId = "XXXXXXXX" ; // Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com) // and enter its ID below. const datasetId = "YYYYYYYY" ; // Sample CSV file of Google Trends data conforming to the schema below. // https://docs.google.com/file/d/0BwzA1Orbvy5WMXFLaTR1Z1p2UDg/edit const csvFileId = "0BwzA1Orbvy5WMXFLaTR1Z1p2UDg" ; // Create the table. const tableId = pets ${ new Date (). getTime () } ; let table = { tableReference : { projectId : projectId , datasetId : datasetId , tableId : tableId , }, schema : { fields : [ { name : "week" , type : "STRING" }, { name : "cat" , type : "INTEGER" }, { name : "dog" , type : "INTEGER" }, { name : "bird" , type : "INTEGER" }, ], }, }; try { table = BigQuery .
- Tables . insert ( table , projectId , datasetId ); console . log ( "Table created: %s" , table . id ); } catch ( err ) { console . log ( "unable to create table" ); } // Load CSV data from Drive and convert to the correct format for upload. const file = DriveApp . getFileById ( csvFileId ); const data = file . getBlob (). setContentType ( "application/octet-stream" ); // Create the data upload job. const job = { configuration : { load : { destinationTable : { projectId : projectId , datasetId : datasetId , tableId : tableId , }, skipLeadingRows : 1 , }, }, }; try { const jobResult = BigQuery .
- This is an advanced service that needs to be enabled before use.
- This is an advanced service that must be enabled before use .


---
title: "BigQuery Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/bigquery
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/bigquery
  title: "BigQuery Service \_|\_ Apps Script \_|\_ Google for Developers"
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
BigQuery Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The BigQuery service in Apps Script allows management of BigQuery projects, data uploads, and query execution using the Google BigQuery API.
This is an advanced service that needs to be enabled before use.
The BigQuery service utilizes the same objects, methods, and parameters as the public API.
within Apps Script using the Google BigQuery API.
The BigQuery service lets you use the
Google BigQuery API in Google Apps Script.
This API gives users the ability to manage their BigQuery projects, upload new
data, and execute queries.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the BigQuery API.
Like all advanced services in Apps Script, the BigQuery service
uses the same objects, methods, and parameters as the public API. For more
information, see
How method signatures are determined .
To report issues and find other support, see the
Google Cloud support guide .
Sample code
The following sample code uses version 2 of the API.
Run query
This sample queries a list of the daily top Google Search terms.
advanced/bigquery.gs
View on GitHub
/**
* Runs a BigQuery query and logs the results in a spreadsheet.
*/
function runQuery () {
// Replace this value with the project ID listed in the Google
// Cloud Platform project.
const projectId = "XXXXXXXX" ;
const request = {
// TODO (developer) - Replace query with yours
query :
"SELECT refresh_date AS Day, term AS Top_Term, rank " +
"FROM `bigquery-public-data.google_trends.top_terms` " +
"WHERE rank = 1 " +
"AND refresh_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 2 WEEK) " +
"GROUP BY Day, Top_Term, rank " +
"ORDER BY Day DESC;" ,
useLegacySql : false ,
};
let queryResults = BigQuery . Jobs . query ( request , projectId );
const jobId = queryResults . jobReference . jobId ;
// Check on status of the Query Job.
let sleepTimeMs = 500 ;
while ( ! queryResults . jobComplete ) {
Utilities . sleep ( sleepTimeMs );
sleepTimeMs *= 2 ;
queryResults = BigQuery . Jobs . getQueryResults ( projectId , jobId );
}
// Get all the rows of results.
let rows = queryResults . rows ;
while ( queryResults . pageToken ) {
queryResults = BigQuery . Jobs . getQueryResults ( projectId , jobId , {
pageToken : queryResults . pageToken ,
});
rows = rows . concat ( queryResults . rows );
}
if ( ! rows ) {
console . log ( "No rows returned." );
return ;
}
const spreadsheet = SpreadsheetApp . create ( "BigQuery Results" );
const sheet = spreadsheet . getActiveSheet ();
// Append the headers.
const headers = queryResults . schema . fields . map (( field ) = > field . name );
sheet . appendRow ( headers );
// Append the results.
const data = new Array ( rows . length );
for ( let i = 0 ; i < rows . length ; i ++ ) {
const cols = rows [ i ]. f ;
data [ i ] = new Array ( cols . length );
for ( let j = 0 ; j < cols . length ; j ++ ) {
data [ i ][ j ] = cols [ j ]. v ;
}
}
sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( data );
console . log ( "Results spreadsheet created: %s" , spreadsheet . getUrl ());
}
Load CSV data
This sample creates a new table and loads a CSV file from Google Drive into it.
advanced/bigquery.gs
View on GitHub
/**
* Loads a CSV into BigQuery
*/
function loadCsv () {
// Replace this value with the project ID listed in the Google
// Cloud Platform project.
const projectId = "XXXXXXXX" ;
// Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com)
// and enter its ID below.
const datasetId = "YYYYYYYY" ;
// Sample CSV file of Google Trends data conforming to the schema below.
// https://docs.google.com/file/d/0BwzA1Orbvy5WMXFLaTR1Z1p2UDg/edit
const csvFileId = "0BwzA1Orbvy5WMXFLaTR1Z1p2UDg" ;
// Create the table.
const tableId = `pets_ ${ new Date (). getTime () } ` ;
let table = {
tableReference : {
projectId : projectId ,
datasetId : datasetId ,
tableId : tableId ,
},
schema : {
fields : [
{ name : "week" , type : "STRING" },
{ name : "cat" , type : "INTEGER" },
{ name : "dog" , type : "INTEGER" },
{ name : "bird" , type : "INTEGER" },
],
},
};
try {
table = BigQuery . Tables . insert ( table , projectId , datasetId );
console . log ( "Table created: %s" , table . id );
} catch ( err ) {
console . log ( "unable to create table" );
}
// Load CSV data from Drive and convert to the correct format for upload.
const file = DriveApp . getFileById ( csvFileId );
const data = file . getBlob (). setContentType ( "application/octet-stream" );
// Create the data upload job.
const job = {
configuration : {
load : {
destinationTable : {
projectId : projectId ,
datasetId : datasetId ,
tableId : tableId ,
},
skipLeadingRows : 1 ,
},
},
};
try {
const jobResult = BigQuery . Jobs . insert ( job , projectId , data );
console . log ( `Load job started. Status: ${ jobResult . status . state } ` );
} catch ( err ) {
console . log ( "unable to insert job" );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

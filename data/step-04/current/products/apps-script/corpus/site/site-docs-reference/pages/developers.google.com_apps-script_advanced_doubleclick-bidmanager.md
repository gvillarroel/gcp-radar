---
title: "DoubleClick Bid Manager Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/doubleclick-bidmanager
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/doubleclick-bidmanager
  title: "DoubleClick Bid Manager Service \_|\_ Apps Script \_|\_ Google for Developers"
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
DoubleClick Bid Manager Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The DoubleClick Bid Manager service in Apps Script allows programmatic access to DBM Reporting using the DV360 Bid Manager API.
This is an advanced service that requires prior enablement before use.
The service utilizes the same objects, methods, and parameters as the public DBM Reporting API.
Sample code is provided for tasks like listing queries, creating and running queries, and fetching the most recent report.
Apps Script using the DoubleClick Bid Manager service.
The DoubleClick Bid Manager service lets you use the
DV360 Bid Manager API in Google Apps Script. This API
provides programmatic access to DoubleClick Bid Manager (DBM) Reporting.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
DBM Reporting API. Like all advanced services in
Apps Script, the DoubleClick Bid Manager service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
DBM Reporting and Trafficking support guide .
Sample code
The following sample code uses
version 2 of the API.
Get a list of queries
This sample logs all of the queries available in the account.
advanced/doubleclickbidmanager.gs
View on GitHub
/**
* Logs all of the queries available in the account.
*/
function listQueries () {
// Retrieve the list of available queries
try {
const queries = DoubleClickBidManager . Queries . list ();
if ( queries . queries ) {
// Print out the ID and name of each
for ( let i = 0 ; i < queries . queries . length ; i ++ ) {
const query = queries . queries [ i ];
console . log (
'Found query with ID %s and name "%s".' ,
query . queryId ,
query . metadata . title ,
);
}
}
} catch ( e ) {
// TODO (Developer) - Handle exception
console . log ( "Failed with error: %s" , e . error );
}
}
Create and run a query
This sample creates and runs a new DBM query.
advanced/doubleclickbidmanager.gs
View on GitHub
/**
* Create and run a new DBM Query
*/
function createAndRunQuery () {
let result ;
let execution ;
//We leave the default date range blank for the report run to
//use the value defined during query creation
const defaultDateRange = {};
const partnerId = "1234567" ; //Replace with your Partner ID
const query = {
metadata : {
title : "Apps Script Example Report" ,
dataRange : {
range : "YEAR_TO_DATE" ,
},
format : "CSV" ,
},
params : {
type : "STANDARD" ,
groupBys : [
"FILTER_PARTNER" ,
"FILTER_PARTNER_NAME" ,
"FILTER_ADVERTISER" ,
"FILTER_ADVERTISER_NAME" ,
],
filters : [{ type : "FILTER_PARTNER" , value : partnerId }],
metrics : [ "METRIC_IMPRESSIONS" ],
},
schedule : {
frequency : "ONE_TIME" ,
},
};
try {
result = DoubleClickBidManager . Queries . create ( query );
if ( result . queryId ) {
console . log (
'Created query with ID %s and name "%s".' ,
result . queryId ,
result . metadata . title ,
);
execution = DoubleClickBidManager . Queries . run (
defaultDateRange ,
result . queryId ,
);
if ( execution . key ) {
console . log (
'Created query report with query ID %s and report ID "%s".' ,
execution . key . queryId ,
execution . key . reportId ,
);
}
}
} catch ( e ) {
// TODO (Developer) - Handle exception
console . log ( e );
console . log ( "Failed with error: %s" , e . error );
}
}
Fetch the most recent report for a DBM query
This sample fetches the most recent report for a DBM query and logs the content.
advanced/doubleclickbidmanager.gs
View on GitHub
/**
* Fetches a report file
*/
function fetchReport () {
const queryId = "1234567" ; // Replace with your query ID.
const orderBy = "key.reportId desc" ;
try {
const report = DoubleClickBidManager . Queries . Reports . list ( queryId , {
orderBy : orderBy ,
});
if ( report . reports ) {
const firstReport = report . reports [ 0 ];
if ( firstReport . metadata . status . state === "DONE" ) {
const reportFile = UrlFetchApp . fetch (
firstReport . metadata . googleCloudStoragePath ,
);
console . log ( "Printing report content to log..." );
console . log ( reportFile . getContentText ());
} else {
console . log (
"Report status is %s, and is not available for download" ,
firstReport . metadata . status . state ,
);
}
}
} catch ( e ) {
// TODO (Developer) - Handle exception
console . log ( e );
console . log ( "Failed with error: %s" , e . error );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

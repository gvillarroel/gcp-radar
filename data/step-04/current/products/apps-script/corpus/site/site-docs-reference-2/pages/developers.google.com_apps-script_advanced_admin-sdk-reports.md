---
title: "Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-reports
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-reports
  title: "Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Admin SDK Reports Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Reports service in Apps Script allows Google Workspace administrators to create custom usage reports using the Admin SDK Reports API.
This is an advanced service that needs to be enabled before it can be used.
Detailed information and reference documentation for the Admin SDK Reports API are available.
Sample code is provided to demonstrate generating both login activity reports and user usage reports as spreadsheets.
create custom usage reports for Google Workspace domains.
The Admin SDK Reports service allows you to use the Admin SDK's
Reports API in
Google Apps Script. This API gives administrators of Google Workspace
domains (including resellers) the ability to create custom usage reports for
their domain.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the Admin SDK
Reports API. Like all advanced services in
Apps Script, the Admin SDK Reports service uses the same objects,
methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Reports support guide .
Sample code
The following sample code uses version 1 of the
API.
Generate login activity report
This sample generates a login activity report for the last week as a
spreadsheet. The report includes the time, user, and login result.
advanced/adminSDK.gs
View on GitHub
/**
* Generates a login activity report for the last week as a spreadsheet. The
* report includes the time, user, and login result.
* @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities/list
*/
function generateLoginActivityReport () {
const now = new Date ();
const oneWeekAgo = new Date ( now . getTime () - 7 * 24 * 60 * 60 * 1000 );
const startTime = oneWeekAgo . toISOString ();
const endTime = now . toISOString ();
const rows = [];
let pageToken ;
let page ;
do {
page = AdminReports . Activities . list ( "all" , "login" , {
startTime : startTime ,
endTime : endTime ,
maxResults : 500 ,
pageToken : pageToken ,
});
const items = page . items ;
if ( items ) {
for ( const item of items ) {
const row = [
new Date ( item . id . time ),
item . actor . email ,
item . events [ 0 ]. name ,
];
rows . push ( row );
}
}
pageToken = page . nextPageToken ;
} while ( pageToken );
if ( rows . length === 0 ) {
console . log ( "No results returned." );
return ;
}
const spreadsheet = SpreadsheetApp . create ( "Google Workspace Login Report" );
const sheet = spreadsheet . getActiveSheet ();
// Append the headers.
const headers = [ "Time" , "User" , "Login Result" ];
sheet . appendRow ( headers );
// Append the results.
sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows );
console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ());
}
Generate user usage report
This sample generates a user usage report for this day last week as a
spreadsheet. The report includes the date, user, last login time, number of
emails received, and number of docs owned.
advanced/adminSDK.gs
View on GitHub
/**
* Generates a user usage report for this day last week as a spreadsheet. The
* report includes the date, user, last login time, number of emails received,
* and number of drive files created.
* @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/userUsageReport/get
*/
function generateUserUsageReport () {
const today = new Date ();
const oneWeekAgo = new Date ( today . getTime () - 7 * 24 * 60 * 60 * 1000 );
const timezone = Session . getScriptTimeZone ();
const date = Utilities . formatDate ( oneWeekAgo , timezone , "yyyy-MM-dd" );
const parameters = [
"accounts:last_login_time" ,
"gmail:num_emails_received" ,
"drive:num_items_created" ,
];
const rows = [];
let pageToken ;
let page ;
do {
page = AdminReports . UserUsageReport . get ( "all" , date , {
parameters : parameters . join ( "," ),
maxResults : 500 ,
pageToken : pageToken ,
});
if ( page . warnings ) {
for ( const warning of page . warnings ) {
console . log ( warning . message );
}
}
const reports = page . usageReports ;
if ( reports ) {
for ( const report of reports ) {
const parameterValues = getParameterValues ( report . parameters );
const row = [
report . date ,
report . entity . userEmail ,
parameterValues [ "accounts:last_login_time" ],
parameterValues [ "gmail:num_emails_received" ],
parameterValues [ "drive:num_items_created" ],
];
rows . push ( row );
}
}
pageToken = page . nextPageToken ;
} while ( pageToken );
if ( rows . length === 0 ) {
console . log ( "No results returned." );
return ;
}
const spreadsheet = SpreadsheetApp . create (
"Google Workspace User Usage Report" ,
);
const sheet = spreadsheet . getActiveSheet ();
// Append the headers.
const headers = [
"Date" ,
"User" ,
"Last Login" ,
"Num Emails Received" ,
"Num Drive Files Created" ,
];
sheet . appendRow ( headers );
// Append the results.
sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows );
console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ());
}
/**
* Gets a map of parameter names to values from an array of parameter objects.
* @param {Array} parameters An array of parameter objects.
* @return {Object} A map from parameter names to their values.
*/
function getParameterValues ( parameters ) {
return parameters . reduce (( result , parameter ) = > {
const name = parameter . name ;
let value ;
if ( parameter . intValue !== undefined ) {
value = parameter . intValue ;
} else if ( parameter . stringValue !== undefined ) {
value = parameter . stringValue ;
} else if ( parameter . datetimeValue !== undefined ) {
value = new Date ( parameter . datetimeValue );
} else if ( parameter . boolValue !== undefined ) {
value = parameter . boolValue ;
}
result [ name ] = value ;
return result ;
}, {});
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

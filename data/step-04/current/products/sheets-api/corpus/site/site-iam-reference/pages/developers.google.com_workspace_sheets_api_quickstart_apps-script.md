---
title: "Google Apps Script quickstart \_|\_ Google Sheets \_|\_ Google for Developers"
url: https://developers.google.com/workspace/sheets/api/quickstart/apps-script
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/sheets/api/scopes
source_metadata:
  url: https://developers.google.com/workspace/sheets/api/quickstart/apps-script
  title: "Google Apps Script quickstart \_|\_ Google Sheets \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Sheets
Guides
Send feedback
Google Apps Script quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a
Google Apps Script
that makes requests to the Google Sheets API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
In Apps Script, Google Workspace
quickstarts use
Advanced Google services to call
Google Workspace APIs and handle some details of the authentication
and authorization flow.
Objectives
Configure the environment.
Create and configure the script.
Run the script.
Prerequisites
A Google Account
Access to Google Drive
Create the script
Create a new script in the Apps Script editor by going to script.google.com/create .
Replace the contents of the script editor with the following code:
sheets/quickstart/quickstart.gs
View on GitHub
/**
* Creates a Sheets API service object and prints the names and majors of
* students in a sample spreadsheet:
* https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
* @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
*/
function logNamesAndMajors () {
const spreadsheetId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms" ;
const rangeName = "Class Data!A2:E" ;
try {
// Get the values from the spreadsheet using spreadsheetId and range.
const values = Sheets . Spreadsheets . Values . get (
spreadsheetId ,
rangeName ,
). values ;
// Print the values from spreadsheet if values are available.
if ( ! values ) {
console . log ( "No data found." );
return ;
}
console . log ( "Name, Major:" );
for ( const row in values ) {
// Print columns A and E, which correspond to indices 0 and 4.
console . log ( " - %s, %s" , values [ row ][ 0 ], values [ row ][ 4 ]);
}
} catch ( err ) {
// TODO (developer) - Handle Values.get() exception from Sheet API
console . log ( err . message );
}
}
Click Save .
Click Untitled project , type
Quickstart , and click Rename .
Configure the script
Enable the Google Sheets API
Open the Apps Script project.
Click Editor code .
Next to Services , click Add a service
add .
Select
Sheets API
and click Add .
Run the sample
In the Apps Script editor, click Run .
The first time you run the sample, it prompts you to authorize access:
Click Review permissions .
Choose an account.
Click Allow .
The script's execution log appears at the bottom of the window.
done
It worked!
Great!
Check out the further reading section below to learn more.
warning
There was a problem
Bummer ,
let us know what went wrong .
Check out our
troubleshooting section below for some common errors and solutions.
If you have found a bug in the code,
report the issue on GitHub or submit a pull request.
Next steps
Google Apps Script Advanced Services documentation
Try the Google Workspace APIs in the APIs explorer
Troubleshoot authentication and authorization issues
Sheets API reference documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

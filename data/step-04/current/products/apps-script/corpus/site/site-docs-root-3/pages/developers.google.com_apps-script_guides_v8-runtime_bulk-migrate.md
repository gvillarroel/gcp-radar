---
title: "Bulk migrate identical scripts from Rhino to V8 \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/apps-script/guides/libraries
source_metadata:
  url: https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate
  title: "Bulk migrate identical scripts from Rhino to V8 \_|\_ Apps Script \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Bulk migrate identical scripts from Rhino to V8
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Identical Apps Scripts using the Rhino runtime must be migrated to V8 before January 31, 2026.
The Apps Script API allows for migrating multiple identical scripts from Rhino to V8 simultaneously.
To migrate using the API, you need to set up your environment by enabling APIs, configuring a Cloud project, and creating an Apps Script project linked to it.
Migrating scripts involves replacing the existing files in each script project with V8-compatible files using the projects.UpdateContent method, ensuring all original files are included to avoid deletion.
This page describes how to migrate identical scripts to V8 using
Google Apps Script and the Apps Script API.
The Rhino runtime was turned down on or after January 31, 2026. Migrate
any scripts that use the Rhino runtime before that date. If you have multiple,
identical scripts running on Rhino, migrate them to V8 all together using the
Apps Script API.
Set up your environment
From the Apps Script dashboard settings, turn on the
Apps Script API.
Go to the Apps Script dashboard
settings .
If the API is turned off, click Apps Script API , then turn on
the Apps Script API toggle.
Create a standard Google Cloud project
or reuse an existing project.
In your Cloud project, configure the OAuth consent
screen .
In your Cloud project, turn on the
Apps Script API .
Turn on the Apps Script API
Create an Apps Script project and assign it to your
Cloud project.
Create a standalone Apps Script project from the
Apps Script dashboard or by going to script.new .
Click Project Settings .
In the Google Cloud Project section, click Change project .
Enter the project number of your Cloud project.
Click Set project .
Migrate scripts
The following code sample shows how to use the Apps Script API to
migrate identical scripts from Rhino to V8 by replacing the files in each
Apps Script project with a set of V8-compatible files.
When you use the
projects.UpdateContent
method of the Apps Script API, include all the files in the script
project, even ones you don't want to change. If you don't include a file, the
file is deleted and can't be restored.
Ensure you have at least editor access to the script projects you plan to
migrate.
Code.gs
function updateRhinoScripts () {
// An array of script IDs of script projects to migrate.
// TODO(developer): Replace with your script IDs.
const scriptIds = [ 'abcdef12345678' , 'abcdef12345678' ];
// An array of file objects to replace the existing files in each script project.
// Remember to include all files for the script, excluded files are deleted.
// TODO(developer): Replace with your script files.
const filesToUpdate = {
"files" : [
{
"name" : "Code" ,
"type" : "SERVER_JS" ,
"source" : "// New updates\nfunction myFunction() {\n console.log('Hello, world!');\n}"
},
{
"name" : "appsscript" ,
"type" : "JSON" ,
"source" : JSON . stringify ({
"timeZone" : "America/New_York" ,
"dependencies" : {},
"exceptionLogging" : "STACKDRIVER" ,
"runtimeVersion" : "V8"
})
}
]
};
updateMultipleAppsScripts ( scriptIds , filesToUpdate );
}
function updateMultipleAppsScripts ( scriptIds , filesToUpdate ) {
// 'scriptIds' should be an array of script IDs
// 'filesToUpdate' should be an array of objects, each with:
// name: The filename (For example, "Code", "Utilities")
// source: The source code for that file.
scriptIds . forEach ( function ( scriptId ) {
// Makes the API request.
const response = UrlFetchApp . fetch (
`https://script.googleapis.com/v1/projects/ ${ scriptId } /content` ,
{
method : "PUT" ,
headers : {
Authorization : `Bearer ${ ScriptApp . getOAuthToken () } `
},
contentType : "application/json" ,
payload : JSON . stringify ( filesToUpdate ),
muteHttpExceptions : true
}
);
if ( response . getResponseCode () !== 200 ) {
console . log ( `Error updating script ${ scriptId } : ${ response . getContentText () } ` );
} else {
console . log ( `Script ${ scriptId } updated successfully!` );
}
});
}
appsscript.json
To use the Apps Script API in your Apps Script
project, add the following OAuth scopes to your manifest file:
"https://www.googleapis.com/auth/script.projects"
"https://www.googleapis.com/auth/script.external_request"
To expose the manifest file in the editor, click Project Settings
and check the Show "appsscript.json" manifest file in editor box. The
following is a sample manifest file with the appropriate OAuth scopes:
{
"timeZone" : "America/Denver" ,
"dependencies" : {
},
"oauthScopes" : [
"https://www.googleapis.com/auth/script.projects" ,
"https://www.googleapis.com/auth/script.external_request"
],
"exceptionLogging" : "STACKDRIVER" ,
"runtimeVersion" : "V8"
}
Related topics
V8 runtime overview
Migrate scripts to the V8 runtime
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

---
title: "Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings
  title: "Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Admin SDK Groups Settings Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
This service is an advanced service that must be enabled before use.
The service uses the same objects, methods, and parameters as the public Admin SDK Groups Settings API.
Sample code is provided for getting and updating a group's settings.
Apps Script to manage group settings for Google Workspace domains.
The Admin SDK Groups Settings service lets you use the Admin SDK's
Groups Settings API in
Google Apps Script. This API gives administrators of Google Workspace
domains (including resellers) the ability to manage the group settings for
groups in their Google Workspace account.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
Admin SDK Groups Settings API. Like all advanced services in
Apps Script, the Admin SDK Groups Settings service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Groups Settings support guide .
Sample code
The following sample code uses version 1
of the API.
Get a group's settings
This sample gets a group's settings and logs them to the console.
advanced/adminSDK.gs
View on GitHub
/**
* Gets a group's settings and logs them to the console.
*/
function getGroupSettings () {
// TODO (developer) - Replace groupId value with yours
const groupId = "exampleGroup@example.com" ;
try {
const group = AdminGroupsSettings . Groups . get ( groupId );
console . log ( JSON . stringify ( group , null , 2 ));
} catch ( err ) {
// TODO (developer)- Handle exception from the API
console . log ( "Failed with error %s" , err . message );
}
}
Update a group's settings
This sample shows how a group's settings can be changed. Here, the description
is modified, but various other settings can be changed in the same way.
advanced/adminSDK.gs
View on GitHub
/**
* Updates group's settings. Here, the description is modified, but various
* other settings can be changed in the same way.
* @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch
*/
function updateGroupSettings () {
const groupId = "exampleGroup@example.com" ;
try {
const group = AdminGroupsSettings . newGroups ();
group . description = "Newly changed group description" ;
AdminGroupsSettings . Groups . patch ( group , groupId );
} catch ( err ) {
// TODO (developer)- Handle exception from the API
console . log ( "Failed with error %s" , err . message );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

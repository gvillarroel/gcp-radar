---
title: "Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration
  title: "Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Admin SDK Groups Migration Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
This is an advanced service that requires enabling before use.
Detailed reference documentation for the Admin SDK Groups Migration API is available.
Sample code is provided to demonstrate migrating emails from Gmail to a Google Group.
Script to migrate emails to Google Groups discussion archives.
The Admin SDK Groups Migration service lets you use the Admin SDK's
Groups Migration API in
Google Apps Script. This API gives administrators of Google Workspace
domains (including resellers) the ability to migrate emails from public folders
and distribution lists to Google Groups discussion archives.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
Admin SDK Groups Migration API. Like all advanced services in
Apps Script, the Admin SDK Groups Migration service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Groups Migration support guide .
Sample code
The following sample code uses version 1
of the API.
Migrate emails from Gmail to a Google Group
This sample gets three RFC 822 formatted messages from the each of the latest
three threads in the user's Gmail inbox, creates a blob from the
email content (including attachments), and inserts it in a Google Group in the
domain.
advanced/adminSDK.gs
View on GitHub
/**
* Gets three RFC822 formatted messages from the each of the latest three
* threads in the user's Gmail inbox, creates a blob from the email content
* (including attachments), and inserts it in a Google Group in the domain.
*/
function migrateMessages () {
// TODO (developer) - Replace groupId value with yours
const groupId = "exampleGroup@example.com" ;
const messagesToMigrate = getRecentMessagesContent ();
for ( const messageContent of messagesToMigrate ) {
const contentBlob = Utilities . newBlob ( messageContent , "message/rfc822" );
AdminGroupsMigration . Archive . insert ( groupId , contentBlob );
}
}
/**
* Gets a list of recent messages' content from the user's Gmail account.
* By default, fetches 3 messages from the latest 3 threads.
*
* @return {Array} the messages' content.
*/
function getRecentMessagesContent () {
const NUM_THREADS = 3 ;
const NUM_MESSAGES = 3 ;
const threads = GmailApp . getInboxThreads ( 0 , NUM_THREADS );
const messages = GmailApp . getMessagesForThreads ( threads );
const messagesContent = [];
for ( let i = 0 ; i < messages . length ; i ++ ) {
for ( let j = 0 ; j < NUM_MESSAGES ; j ++ ) {
const message = messages [ i ][ j ];
if ( message ) {
messagesContent . push ( message . getRawContent ());
}
}
}
return messagesContent ;
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

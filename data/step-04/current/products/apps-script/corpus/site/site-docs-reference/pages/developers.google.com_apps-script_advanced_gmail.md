---
title: "Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/gmail
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/gmail
  title: "Advanced Gmail Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Advanced Gmail Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Advanced Gmail service allows using the Gmail API in Apps Script to find and modify threads, messages, and labels.
While the built-in Gmail service is often simpler, the advanced service offers extra features and more detailed information.
This is an advanced service that requires enabling before use.
Reference documentation for the Gmail API is available for detailed information on this service.
To improve performance, list requests often return limited information, requiring a follow-up get request for full details.
to access additional features and detailed information from the Gmail API.
The Advanced Gmail service lets you use the
Gmail API in Google Apps Script. Much like
Apps Script's built-in Gmail
service , this API lets scripts find and
modify threads, messages, and labels in a Gmail mailbox. In most
cases, the built-in service is easier to use, but this advanced service
provides a few extra features and access to more detailed information about
Gmail content.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the
Gmail API. Like all advanced services in
Apps Script, the advanced Gmail service uses the
same objects, methods, and parameters as the public API. For more information,
see
How method signatures are determined .
Note: To improve performance, the Gmail API often restricts the amount
of information returned from list requests to thread, message or label IDs and
other simple information. More detailed information about a particular thread,
message or label can be obtained by issuing a follow-up get request using the
associated ID.
To report issues and find other support, see the
Gmail support guide .
Sample code
The following sample code uses version 1 of the API.
List label information
The following example demonstrates how to list all the user's label information.
This includes the label name, type, ID and visibility settings.
advanced/gmail.gs
View on GitHub
/**
* Lists the user's labels, including name, type,
* ID and visibility information.
*/
function listLabelInfo () {
try {
const response = Gmail . Users . Labels . list ( "me" );
for ( let i = 0 ; i < response . labels . length ; i ++ ) {
const label = response . labels [ i ];
console . log ( JSON . stringify ( label ));
}
} catch ( err ) {
console . log ( err );
}
}
List inbox snippets
The following example demonstrates how to list text snippets associated with
each thread in the user's Inbox. Notice the use of page tokens to access the
full list of results.
advanced/gmail.gs
View on GitHub
/**
* Lists, for each thread in the user's Inbox, a
* snippet associated with that thread.
*/
function listInboxSnippets () {
try {
let pageToken ;
do {
const threadList = Gmail . Users . Threads . list ( "me" , {
q : "label:inbox" ,
pageToken : pageToken ,
});
if ( threadList . threads && threadList . threads . length > 0 ) {
for ( const thread of threadList . threads ) {
console . log ( `Snippet: ${ thread . snippet } ` );
}
}
pageToken = threadList . nextPageToken ;
} while ( pageToken );
} catch ( err ) {
console . log ( err );
}
}
List recent history
The following example demonstrates how to log recent activity history.
Specifically, this example recovers the history record ID associated with the
user's most recently sent message, and then logs the message IDs of every
message that has changed since that time. Each changed message is only logged
once, no matter how many change events are in the history records. Notice the
use of page tokens to access the full list of results.
advanced/gmail.gs
View on GitHub
/**
* Gets a history record ID associated with the most
* recently sent message, then logs all the message IDs
* that have changed since that message was sent.
*/
function logRecentHistory () {
try {
// Get the history ID associated with the most recent
// sent message.
const sent = Gmail . Users . Threads . list ( "me" , {
q : "label:sent" ,
maxResults : 1 ,
});
if ( ! sent . threads || ! sent . threads [ 0 ]) {
console . log ( "No sent threads found." );
return ;
}
const historyId = sent . threads [ 0 ]. historyId ;
// Log the ID of each message changed since the most
// recent message was sent.
let pageToken ;
const changed = [];
do {
const recordList = Gmail . Users . History . list ( "me" , {
startHistoryId : historyId ,
pageToken : pageToken ,
});
const history = recordList . history ;
if ( history && history . length > 0 ) {
for ( const record of history ) {
for ( const message of record . messages ) {
if ( changed . indexOf ( message . id ) === - 1 ) {
changed . push ( message . id );
}
}
}
}
pageToken = recordList . nextPageToken ;
} while ( pageToken );
for ( const id of changed ) {
console . log ( "Message Changed: %s" , id );
}
} catch ( err ) {
console . log ( err );
}
}
List messages
The following example demonstrates how to list the Gmail user's
unread messages.
advanced/gmail.gs
View on GitHub
/**
* Lists unread messages in the user's inbox using the advanced Gmail service.
*/
function listMessages () {
// The special value 'me' indicates the authenticated user.
const userId = "me" ;
// Define optional parameters for the request.
const options = {
maxResults : 10 , // Limit the number of messages returned.
q : "is:unread" , // Search for unread messages.
};
try {
// Call the Gmail.Users.Messages.list method.
const response = Gmail . Users . Messages . list ( userId , options );
const messages = response . messages ;
console . log ( "Unread Messages:" );
for ( const message of messages ) {
console . log ( `- Message ID: ${ message . id } ` );
}
} catch ( err ) {
// Log any errors to the Apps Script execution log.
console . log ( `Failed with error: ${ err . message } ` );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

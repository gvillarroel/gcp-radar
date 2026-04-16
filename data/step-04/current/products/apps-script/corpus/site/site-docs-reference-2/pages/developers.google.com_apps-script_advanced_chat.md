---
title: "Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/chat
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/chat
  title: "Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Advanced Chat Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Advanced Chat service allows using the Google Chat API in Apps Script to manage Chat spaces, members, and messages.
Prerequisites include a configured Google Chat app in the Google Cloud console using a standard Google Cloud project and proper authentication set up.
This is an advanced service that must be explicitly turned on before use.
Sample code demonstrates how to perform common Chat API actions, such as posting messages, getting a space, creating a space, and listing memberships.
Troubleshoot Error 400: invalid_scope by manually adding required authorization scopes to the Apps Script project's appsscript.json file.
The Advanced Chat service has limitations and does not support the media.download method or Developer Preview methods, which require using UrlFetchApp .
manage Chat spaces, members, and messages.
The Advanced Chat service lets you use the
Google Chat API in Google Apps Script. This API lets
scripts find, create, and modify Chat spaces, add or remove
members to spaces, and read or post messages with text, cards, attachments, and
reactions.
Prerequisites
An Apps Script Google Chat app configured on the
Chat API configuration page in the Google Cloud console. The app's
Apps Script project must use a standard Google Cloud project instead
of the default one created automatically for Apps Script
projects. To create a compatible Google Chat app, see
Build a Google Chat app with Google Apps Script .
Authentication configured for the Chat app.
Performing an action on behalf of a user requires
user authentication . Performing an action as the
Chat app requires
app authentication with a service account .
To check which form of authentication a Chat API method supports, see
Types of required authentication for Google Chat API calls .
This is an advanced service that you must
turn on before use .
Reference
For more information about this service, see the
Chat API reference documentation .
Like all advanced services in Apps Script, the
Chat service uses the same objects, methods, and parameters as
the public API.
Sample code
These samples show you how to perform common
Google Chat API
actions using the advanced service.
Post a message with user credentials
The following example demonstrates how to post a message to a
Chat space on behalf of the user.
Add the chat.messages.create authorization scope to the
Apps Script project's appsscript.json file:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.messages.create"
]
Add a function like this one to the Apps Script project's
code:
advanced/chat.gs
View on GitHub
/**
* Posts a new message to the specified space on behalf of the user.
* @param {string} spaceName The resource name of the space.
*/
function postMessageWithUserCredentials ( spaceName ) {
try {
const message = { text : "Hello world!" };
Chat . Spaces . Messages . create ( message , spaceName );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to create message with error %s" , err . message );
}
}
Post a message with app credentials
The following example demonstrates how to post a message to a
Chat space on behalf of the app. Using the advanced
Chat service with a service account doesn't require you to
specify authorization scopes in appsscript.json . For details about
authentication with service accounts, see
Authenticate as a Google Chat app .
advanced/chat.gs
View on GitHub
/**
* Posts a new message to the specified space on behalf of the app.
* @param {string} spaceName The resource name of the space.
*/
function postMessageWithAppCredentials ( spaceName ) {
try {
// See https://developers.google.com/chat/api/guides/auth/service-accounts
// for details on how to obtain a service account OAuth token.
const appToken = getToken_ ();
const message = { text : "Hello world!" };
Chat . Spaces . Messages . create (
message ,
spaceName ,
{},
// Authenticate with the service account token.
{ Authorization : `Bearer ${ appToken } ` },
);
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to create message with error %s" , err . message );
}
}
Get a space
The following example demonstrates how to get information about a
Chat space.
Add the chat.spaces.readonly authorization scope to the
Apps Script project's appsscript.json file:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.spaces.readonly"
]
Add a function like this one to the Apps Script project's
code:
advanced/chat.gs
View on GitHub
/**
* Gets information about a Chat space.
* @param {string} spaceName The resource name of the space.
*/
function getSpace ( spaceName ) {
try {
const space = Chat . Spaces . get ( spaceName );
console . log ( "Space display name: %s" , space . displayName );
console . log ( "Space type: %s" , space . spaceType );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to get space with error %s" , err . message );
}
}
Create a space
The following example demonstrates how to create a Chat space.
Add the chat.spaces.create authorization scope to the
Apps Script project's appsscript.json file:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.spaces.create"
]
Add a function like this one to the Apps Script project's
code:
advanced/chat.gs
View on GitHub
/**
* Creates a new Chat space.
*/
function createSpace () {
try {
const space = { displayName : "New Space" , spaceType : "SPACE" };
Chat . Spaces . create ( space );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to create space with error %s" , err . message );
}
}
List memberships
The following example demonstrates how to list all the members of a
Chat space.
Add the chat.memberships.readonly authorization scope to the
Apps Script project's appsscript.json file:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.memberships.readonly"
]
Add a function like this one to the Apps Script project's
code:
advanced/chat.gs
View on GitHub
/**
* Lists all the members of a Chat space.
* @param {string} spaceName The resource name of the space.
*/
function listMemberships ( spaceName ) {
let response ;
let pageToken = null ;
try {
do {
response = Chat . Spaces . Members . list ( spaceName , {
pageSize : 10 ,
pageToken : pageToken ,
});
if ( ! response . memberships || response . memberships . length === 0 ) {
pageToken = response . nextPageToken ;
continue ;
}
for ( const membership of response . memberships ) {
console . log (
"Member: %s, Role: %s" ,
membership . member . displayName ,
membership . role ,
);
}
pageToken = response . nextPageToken ;
} while ( pageToken );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
}
Troubleshoot
If you encounter Error 400: invalid_scope with the error message
Some requested scopes cannot be shown ,
it means you haven't specified any authorization scopes in the
Apps Script project's appsscript.json file. In most cases,
Apps Script automatically determines what scopes a script needs,
but when you use the Chat advanced service, you must manually add
the authorization scopes that your script uses to your
Apps Script project's manifest file. See
Setting explicit scopes .
To resolve the error, add the appropriate authorization scopes
to the Apps Script project's appsscript.json file as part of
the oauthScopes array. For example, to call the
spaces.messages.create
method, add the following:
"oauthScopes" : [
"https://www.googleapis.com/auth/chat.messages.create"
]
Limits and considerations
The Advanced Chat service doesn't support:
The Chat API method
media.download .
Chat API methods available in
Developer Preview
To download a message attachment or call a developer preview method, use
UrlFetchApp instead.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

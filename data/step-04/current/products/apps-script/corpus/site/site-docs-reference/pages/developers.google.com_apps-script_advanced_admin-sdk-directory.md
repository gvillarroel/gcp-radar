---
title: "Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/admin-sdk-directory
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/admin-sdk-directory
  title: "Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Admin SDK Directory Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.
Detailed information and reference documentation for this service are available, mirroring the public Admin SDK Directory API.
Sample code is provided demonstrating various operations like listing users and groups, getting and adding users, creating aliases, and adding group members.
to manage Google Workspace domains, including devices, groups, and users.
The Admin SDK Directory service lets you use the Admin SDK's
Directory API in Google Apps Script. This API
gives administrators of Google Workspace domains (including resellers) the
ability to manage devices, groups, users, and other entities in their domains.
This is an advanced service that must be
enabled before use . Additionally, the
Admin SDK must be enabled on your domain, as described in the API's
prerequisites documentation .
Reference
For detailed information on this service, see the
reference documentation for the Admin SDK
Directory API. Like all advanced services in
Apps Script, the Admin SDK Directory service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Admin SDK Directory support guide .
Sample code
The following sample code uses version 1 of
the API.
List all users
This sample lists all the users in a domain sorted by first name.
advanced/adminSDK.gs
View on GitHub
/**
* Lists all the users in a domain sorted by first name.
* @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list
*/
function listAllUsers () {
let pageToken ;
let page ;
do {
page = AdminDirectory . Users . list ({
domain : "example.com" ,
orderBy : "givenName" ,
maxResults : 100 ,
pageToken : pageToken ,
});
const users = page . users ;
if ( ! users ) {
console . log ( "No users found." );
return ;
}
// Print the user's full name and email.
for ( const user of users ) {
console . log ( "%s (%s)" , user . name . fullName , user . primaryEmail );
}
pageToken = page . nextPageToken ;
} while ( pageToken );
}
Get user
This sample gets a user by their email address and logs all of their data as a
JSON string.
advanced/adminSDK.gs
View on GitHub
/**
* Get a user by their email address and logs all of their data as a JSON string.
* @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get
*/
function getUser () {
// TODO (developer) - Replace userEmail value with yours
const userEmail = "liz@example.com" ;
try {
const user = AdminDirectory . Users . get ( userEmail );
console . log ( "User data:\n %s" , JSON . stringify ( user , null , 2 ));
} catch ( err ) {
// TODO (developer)- Handle exception from the API
console . log ( "Failed with error %s" , err . message );
}
}
Add user
This sample adds a new user to the domain, including only the required
information. For the full list of user fields, see the API's
reference documentation .
advanced/adminSDK.gs
View on GitHub
/**
* Adds a new user to the domain, including only the required information. For
* the full list of user fields, see the API's reference documentation:
* @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert
*/
function addUser () {
let user = {
// TODO (developer) - Replace primaryEmail value with yours
primaryEmail : "liz@example.com" ,
name : {
givenName : "Elizabeth" ,
familyName : "Smith" ,
},
// Generate a random password string.
password : Math . random (). toString ( 36 ),
};
try {
user = AdminDirectory . Users . insert ( user );
console . log ( "User %s created with ID %s." , user . primaryEmail , user . id );
} catch ( err ) {
// TODO (developer)- Handle exception from the API
console . log ( "Failed with error %s" , err . message );
}
}
Create alias
This sample creates an alias (nickname) for a user.
advanced/adminSDK.gs
View on GitHub
/**
* Creates an alias (nickname) for a user.
* @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert
*/
function createAlias () {
// TODO (developer) - Replace userEmail value with yours
const userEmail = "liz@example.com" ;
let alias = {
alias : "chica@example.com" ,
};
try {
alias = AdminDirectory . Users . Aliases . insert ( alias , userEmail );
console . log ( "Created alias %s for user %s." , alias . alias , userEmail );
} catch ( err ) {
// TODO (developer)- Handle exception from the API
console . log ( "Failed with error %s" , err . message );
}
}
List all groups
This sample lists all the groups in the domain.
advanced/adminSDK.gs
View on GitHub
/**
* Lists all the groups in the domain.
* @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list
*/
function listAllGroups () {
let pageToken ;
let page ;
do {
page = AdminDirectory . Groups . list ({
domain : "example.com" ,
maxResults : 100 ,
pageToken : pageToken ,
});
const groups = page . groups ;
if ( ! groups ) {
console . log ( "No groups found." );
return ;
}
// Print group name and email.
for ( const group of groups ) {
console . log ( "%s (%s)" , group . name , group . email );
}
pageToken = page . nextPageToken ;
} while ( pageToken );
}
Add group member
This sample adds a user to an existing group in the domain.
advanced/adminSDK.gs
View on GitHub
/**
* Adds a user to an existing group in the domain.
* @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert
*/
function addGroupMember () {
// TODO (developer) - Replace userEmail value with yours
const userEmail = "liz@example.com" ;
// TODO (developer) - Replace groupEmail value with yours
const groupEmail = "bookclub@example.com" ;
const member = {
email : userEmail ,
role : "MEMBER" ,
};
try {
AdminDirectory . Members . insert ( member , groupEmail );
console . log (
"User %s added as a member of group %s." ,
userEmail ,
groupEmail ,
);
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

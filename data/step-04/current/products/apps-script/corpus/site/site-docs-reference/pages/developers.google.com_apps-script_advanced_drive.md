---
title: "Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/drive
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/drive
  title: "Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Advanced Drive Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The advanced Drive service in Apps Script allows interaction with the Google Drive API for file and folder manipulation.
This service offers extra features compared to the built-in Drive service, such as access to custom file properties and revisions.
The advanced Drive service must be enabled before use and uses the same objects, methods, and parameters as the public Drive API.
Sample code is provided for common tasks like uploading files, listing folders, listing revisions, and adding file properties using API version 3.
to manage files and folders, including custom properties and revisions.
The advanced Drive service lets you use the
Google Drive API in Google Apps Script. Much like
Apps Script's built-in Drive
service , this API allows scripts to create, find,
and modify files and folders in Google Drive. In most cases, the built-in
service is easier to use, but this advanced service provides a few extra
features, including access to custom file properties as well as revisions for
files and folders.
This is an advanced service that must be enabled before
use .
Reference
For detailed information on this service, see the reference
documentation for the Drive API. Like
all advanced services in Apps Script, the advanced
Drive service uses the same objects, methods, and parameters as
the public API. For more information, see How method signatures are
determined .
Also, methods named delete in the Drive API are named remove in
the advanced service (such as Drive.Permissions.remove() ), since delete is a
reserved word in JavaScript.
To report issues and find other support, see the Drive API support
guide .
Sample code
The code samples in this section use version 3
of the API.
Upload files
The following code sample shows how to save a file to a user's
Drive.
advanced/drive.gs
View on GitHub
/**
* Uploads a new file to the user's Drive.
*/
function uploadFile () {
try {
// Makes a request to fetch a URL.
const image = UrlFetchApp . fetch ( "http://goo.gl/nd7zjB" ). getBlob ();
let file = {
name : "google_logo.png" ,
mimeType : "image/png" ,
};
// Create a file in the user's Drive.
file = Drive . Files . create ( file , image , { fields : "id,size" });
console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size );
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed to upload file with error %s" , err . message );
}
}
Create a folder
The following code sample shows how to create a folder in Drive.
/**
* Creates a new folder.
*/
function createFolder () {
var folderMetadata = {
'name' : 'New Folder' ,
'mimeType' : 'application/vnd.google-apps.folder'
};
var folder = Drive . Files . create ( folderMetadata );
Logger . log ( 'Folder ID: ' + folder . id );
}
Search for files
The following code sample shows how to search for files using a query string.
/**
* Searches for files with a specific name.
*/
function searchFiles () {
var query = 'name contains "Project Plan" and trashed = false' ;
var files = Drive . Files . list ({
'q' : query ,
'fields' : 'files(id, name, mimeType)'
});
if ( files . files && files . files . length > 0 ) {
for ( var i = 0 ; i < files . files . length ; i ++ ) {
var file = files . files [ i ];
Logger . log ( '%s (ID: %s)' , file . name , file . id );
}
} else {
Logger . log ( 'No files found.' );
}
}
List folders
The following code sample shows how to list the top-level folders in the user's
Drive. Note the use of page tokens to access the full list of
results.
advanced/drive.gs
View on GitHub
/**
* Lists the top-level folders in the user's Drive.
*/
function listRootFolders () {
const query =
'"root" in parents and trashed = false and ' +
'mimeType = "application/vnd.google-apps.folder"' ;
let folders ;
let pageToken = null ;
do {
try {
folders = Drive . Files . list ({
q : query ,
pageSize : 100 ,
pageToken : pageToken ,
});
if ( ! folders . files || folders . files . length === 0 ) {
console . log ( "All folders found." );
return ;
}
for ( let i = 0 ; i < folders . files . length ; i ++ ) {
const folder = folders . files [ i ];
console . log ( "%s (ID: %s)" , folder . name , folder . id );
}
pageToken = folders . nextPageToken ;
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
} while ( pageToken );
}
List revisions
The following code sample shows how to list the revisions for a given file. Note
that some files can have several revisions and you should use page tokens to
access the full list of results.
advanced/drive.gs
View on GitHub
/**
* Lists the revisions of a given file.
* @param {string} fileId The ID of the file to list revisions for.
*/
function listRevisions ( fileId ) {
let revisions ;
let pageToken = null ;
do {
try {
revisions = Drive . Revisions . list ( fileId , {
fields : "revisions(modifiedTime,size),nextPageToken" ,
});
if ( ! revisions . revisions || revisions . revisions . length === 0 ) {
console . log ( "All revisions found." );
return ;
}
for ( let i = 0 ; i < revisions . revisions . length ; i ++ ) {
const revision = revisions . revisions [ i ];
const date = new Date ( revision . modifiedTime );
console . log (
"Date: %s, File size (bytes): %s" ,
date . toLocaleString (),
revision . size ,
);
}
pageToken = revisions . nextPageToken ;
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
} while ( pageToken );
}
Add file properties
The following code sample uses the appProperties field to add a custom
property to a file. The custom property is only visible to the script. To add a
custom property to the file that's also visible to other apps, use the
properties field, instead. For more information, see Add custom file
properties .
advanced/drive.gs
View on GitHub
/**
* Adds a custom app property to a file. Unlike Apps Script's DocumentProperties,
* Drive's custom file properties can be accessed outside of Apps Script and
* by other applications; however, appProperties are only visible to the script.
* @param {string} fileId The ID of the file to add the app property to.
*/
function addAppProperty ( fileId ) {
try {
let file = {
appProperties : {
department : "Sales" ,
},
};
// Updates a file to add an app property.
file = Drive . Files . update ( file , fileId , null , {
fields : "id,appProperties" ,
});
console . log (
"ID: %s, appProperties: %s" ,
file . id ,
JSON . stringify ( file . appProperties , null , 2 ),
);
} catch ( err ) {
// TODO (developer) - Handle exception
console . log ( "Failed with error %s" , err . message );
}
}
Add a user to a file
The following code sample shows how to add a user as an editor to a file and suppress the email notification.
/**
* Adds a user to a file as an editor without sending an email notification.
*/
function addEditor () {
var fileId = '1234567890abcdefghijklmnopqrstuvwxyz' ;
var userEmail = 'bob@example.com' ;
var request = {
'role' : 'writer' ,
'type' : 'user' ,
'emailAddress' : userEmail
};
Drive . Permissions . create ( request , fileId , {
'sendNotificationEmail' : false
});
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

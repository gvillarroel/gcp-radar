---
title: "List labels on a file \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/list-labels
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/about-sdk
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/list-labels
  title: "List labels on a file \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
List labels on a file
Stay organized with collections
Save and categorize content based on your preferences.
Your organization can have multiple labels, with labels having any number of
fields. This page describes how to list all labels on a single Google Drive
file.
To list the file labels, use the
files.listLabels method. The
request body must be empty. The method also takes the optional query parameter
maxResults to set the maximum number of labels to return per page. If not set,
100 results are returned.
If successful, the response
body contains the
list of labels applied to a file. These exist within an items object of type
Label .
Example
The following code sample shows how to use the label's fileId to retrieve the
correct labels.
Java
List<Label> labelList =
labelsDriveClient . files (). listLabels ( " FILE_ID " ). execute (). getItems ();
Python
label_list_response = drive_service . files () . listLabels ( fileId = " FILE_ID " ) . execute ();
Node.js
/**
* Lists all the labels on a Drive file
* @return{obj} a list of Labels
**/
async function listLabels () {
// Get credentials and build service
// TODO (developer) - Use appropriate auth mechanism for your app
const { GoogleAuth } = require ( 'google-auth-library' );
const { google } = require ( 'googleapis' );
const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' });
const service = google . drive ({ version : 'v3' , auth });
try {
const labelListResponse = await service . files . listLabels ({
fileId : ' FILE_ID ' ,
});
return labelListResponse ;
} catch ( err ) {
// TODO (developer) - Handle error
throw err ;
}
}
Replace FILE_ID with the fileId of the file for which you
want the list of labels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

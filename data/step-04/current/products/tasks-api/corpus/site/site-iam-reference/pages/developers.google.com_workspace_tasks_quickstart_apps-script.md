---
title: "Google Apps Script quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/quickstart/apps-script
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/auth
source_metadata:
  url: https://developers.google.com/workspace/tasks/quickstart/apps-script
  title: "Google Apps Script quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Guides
Send feedback
Google Apps Script quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a
Google Apps Script
that makes requests to the Google Tasks API.
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
A Google account with Google Tasks enabled.
Access to Google Drive
Create the script
Create a new script in the Apps Script editor by going to script.google.com/create .
Replace the contents of the script editor with the following code:
tasks/quickstart/quickstart.gs
View on GitHub
/**
* Lists the user's tasks.
* @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list
*/
function listTaskLists () {
const optionalArgs = {
maxResults : 10 ,
};
try {
// Returns all the authenticated user's task lists.
const response = Tasks . Tasklists . list ( optionalArgs );
const taskLists = response . items ;
// Print task list of user if available.
if ( ! taskLists || taskLists . length === 0 ) {
console . log ( "No task lists found." );
return ;
}
for ( const taskList of taskLists ) {
console . log ( "%s (%s)" , taskList . title , taskList . id );
}
} catch ( err ) {
// TODO (developer) - Handle exception from Task API
console . log ( "Failed with error %s" , err . message );
}
}
Click Save .
Click Untitled project , type
Quickstart , and click Rename .
Configure the script
Enable the Google Tasks API
Open the Apps Script project.
Click Editor code .
Next to Services , click Add a service
add .
Select
Tasks API
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
Tasks API reference documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

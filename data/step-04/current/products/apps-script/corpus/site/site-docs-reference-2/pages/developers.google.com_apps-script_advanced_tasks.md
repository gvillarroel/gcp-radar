---
title: "Tasks Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/tasks
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/apps-script/reference?skip_cache=false
source_metadata:
  url: https://developers.google.com/apps-script/advanced/tasks
  title: "Tasks Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Tasks Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Tasks service in Apps Script allows you to use the Google Tasks API to manage tasks in Gmail.
This is an advanced service that needs to be enabled before use.
Detailed information and a sample application demonstrating read and write operations are available.
Sample code is provided for listing task lists, listing tasks within a list, and adding a new task.
the Google Tasks API.
The Tasks service lets you use the
Google Tasks API in Google Apps Script. This API
gives users the ability to manage their tasks in Gmail.
This is an advanced service that must be
enabled before use .
Reference
For detailed information on this service, see the
reference documentation for the Tasks API.
Like all advanced services in Apps Script, the
Tasks service uses the same objects, methods, and parameters as
the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Tasks support guide .
Sample application
The sample web application Simple Tasks demonstrates how to use
the Tasks service for both read and write operations. You can
view the full source code on our
GitHub repository .
Sample code
The following sample code uses version 1 of
the API.
List task lists
This sample lists the task lists in your account.
advanced/tasks.gs
View on GitHub
/**
* Lists the titles and IDs of tasksList.
* @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list
*/
function listTaskLists () {
try {
// Returns all the authenticated user's task lists.
const taskLists = Tasks . Tasklists . list ();
// If taskLists are available then print all tasklists.
if ( ! taskLists . items ) {
console . log ( "No task lists found." );
return ;
}
// Print the tasklist title and tasklist id.
for ( let i = 0 ; i < taskLists . items . length ; i ++ ) {
const taskList = taskLists . items [ i ];
console . log (
'Task list with title "%s" and ID "%s" was found.' ,
taskList . title ,
taskList . id ,
);
}
} catch ( err ) {
// TODO (developer) - Handle exception from Task API
console . log ( "Failed with an error %s " , err . message );
}
}
List tasks
This sample lists the tasks within a given task list.
advanced/tasks.gs
View on GitHub
/**
* Lists task items for a provided tasklist ID.
* @param {string} taskListId The tasklist ID.
* @see https://developers.google.com/tasks/reference/rest/v1/tasks/list
*/
function listTasks ( taskListId ) {
try {
// List the task items of specified tasklist using taskList id.
const tasks = Tasks . Tasks . list ( taskListId );
// If tasks are available then print all task of given tasklists.
if ( ! tasks . items ) {
console . log ( "No tasks found." );
return ;
}
// Print the task title and task id of specified tasklist.
for ( let i = 0 ; i < tasks . items . length ; i ++ ) {
const task = tasks . items [ i ];
console . log (
'Task with title "%s" and ID "%s" was found.' ,
task . title ,
task . id ,
);
}
} catch ( err ) {
// TODO (developer) - Handle exception from Task API
console . log ( "Failed with an error %s" , err . message );
}
}
Add task
This sample adds a new task to a task list.
advanced/tasks.gs
View on GitHub
/**
* Adds a task to a tasklist.
* @param {string} taskListId The tasklist to add to.
* @see https://developers.google.com/tasks/reference/rest/v1/tasks/insert
*/
function addTask ( taskListId ) {
// Task details with title and notes for inserting new task
let task = {
title : "Pick up dry cleaning" ,
notes : "Remember to get this done!" ,
};
try {
// Call insert method with taskDetails and taskListId to insert Task to specified tasklist.
task = Tasks . Tasks . insert ( task , taskListId );
// Print the Task ID of created task.
console . log ( 'Task with ID "%s" was created.' , task . id );
} catch ( err ) {
// TODO (developer) - Handle exception from Tasks.insert() of Task API
console . log ( "Failed with an error %s" , err . message );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

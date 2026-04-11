---
title: "Classroom Service \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/advanced/classroom
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/reference
source_metadata:
  url: https://developers.google.com/apps-script/advanced/classroom
  title: "Classroom Service \_|\_ Apps Script \_|\_ Google for Developers"
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
Classroom Service
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Classroom service in Apps Script allows you to use the Google Classroom API to manage courses and rosters.
This is an advanced service that requires enabling before use.
The Classroom service utilizes the same objects, methods, and parameters as the public Google Classroom API.
Sample code is provided to demonstrate listing courses using the service.
manage courses and rosters.
The Classroom service lets you use the
Google Classroom API in Google Apps Script. This API gives
admins, teachers, and students the ability to view and manage their courses and
rosters.
This is an advanced service that must be
enabled before use . Follow along with
the quickstart for step-by-step
instructions on how to get started.
Reference
For detailed information on this service, see the
reference documentation for the
Classroom API. Like all advanced services in
Apps Script, the Classroom service uses the same
objects, methods, and parameters as the public API. For more information, see
How method signatures are determined .
To report issues and find other support, see the
Classroom support guide .
Sample code
The following sample code uses version 1 of the
API.
List courses
This sample lists the first ten courses the user has access to.
advanced/classroom.gs
View on GitHub
/**
* Lists 10 course names and IDs.
*/
function listCourses () {
/**
* @see https://developers.google.com/classroom/reference/rest/v1/courses/list
*/
const optionalArgs = {
pageSize : 10 ,
// Use other query parameters here if needed.
};
try {
const response = Classroom . Courses . list ( optionalArgs );
const courses = response . courses ;
if ( ! courses || courses . length === 0 ) {
console . log ( "No courses found." );
return ;
}
// Print the course names and IDs of the available courses.
for ( const course in courses ) {
console . log ( "%s (%s)" , courses [ course ]. name , courses [ course ]. id );
}
} catch ( err ) {
// TODO (developer)- Handle Courses.list() exception from Classroom API
console . log ( "Failed with error %s" , err . message );
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

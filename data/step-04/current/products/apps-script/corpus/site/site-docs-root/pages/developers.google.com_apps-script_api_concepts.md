---
title: "Introduction \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/concepts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/api/concepts
  title: "Introduction \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Introduction
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Apps Script API allows programmatically creating, modifying, and deploying Apps Script projects.
This API replaces and extends the Apps Script Execution API for remote function execution.
The API is divided into resources for managing projects, deployments, versions, processes, and script executions.
The Apps Script API does not work with service accounts and requires enabling and granting access for third-party applications.
The Google Apps Script API lets you automate script creation, management, and
execution in Google Apps Script. You can programmatically create, modify, and
deploy Google Apps Script projects, and execute Apps Script
functions remotely—actions that otherwise require using the
Apps Script editor or its UI.
This API is often used to:
Create and manage Apps Script projects and deployments.
Add or update functions in script projects.
Execute Apps Script functions from other applications.
Monitor script execution logs and statuses.
Warning: The Apps Script API doesn't work with
service accounts .
The Apps Script API also replaces and extends the
Apps Script Execution API. You can use the
Apps Script API to execute Apps Script functions
remotely, just as you could with the Execution API.
To use this API in your apps, you must
enable it for use .
To allow other apps to manage your scripts, you must
grant them access .
Overview of the API
The Apps Script API is divided into several resources, each with a
specific purpose and set of requests you can make. These resources are as
follows:
projects — A
representation of a script project. The API provides methods to create,
read, monitor, and modify projects. Use this resource to manage the script
files and metadata of your project.
projects.deployments
— A representation of a script deployment. The API provides methods to
create, list, update, and delete script project deployments. Use deployments
to make your script available as a web app, add-on, or executable.
projects.versions
— A representation of a script project version. The API provides
methods to create and read project versions. Use versions to track different
iterations of your script project.
processes — A
representation of a script function execution. The API provides methods to
list existing processes and gather information about them, such as type
and current status. Use this resource to monitor script executions initiated
using the scripts.run method.
scripts — The endpoint
that provides methods to remotely execute Apps Script functions.
Use this resource to run functions in your script project from your
application.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

---
title: "Apps Script API \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest
  title: "Apps Script API \_|\_ Google for Developers"
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
Apps Script API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API manages and executes Google Apps Script projects.
It provides REST resources for processes, projects, deployments, versions, and scripts.
The service uses the script.googleapis.com endpoint and offers a Discovery document for machine-readable API specifications.
You can use Google-provided client libraries or your own libraries to call this service.
Manages and executes Google Apps Script projects.
REST Resource: v1.processes
REST Resource: v1.projects
REST Resource: v1.projects.deployments
REST Resource: v1.projects.versions
REST Resource: v1.scripts
Service: script.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://script.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://script.googleapis.com
REST Resource: v1.processes
Methods
list
GET /v1/processes
List information about processes made by or on behalf of a user, such as process type and current status.
listScriptProcesses
GET /v1/processes:listScriptProcesses
List information about a script's executed processes, such as process type and current status.
REST Resource: v1.projects
Methods
create
POST /v1/projects
Creates a new, empty script project with no script files and a base manifest file.
get
GET /v1/projects/{scriptId}
Gets a script project's metadata.
getContent
GET /v1/projects/{scriptId}/content
Gets the content of the script project, including the code source and metadata for each script file.
getMetrics
GET /v1/projects/{scriptId}/metrics
Get metrics data for scripts, such as number of executions and active users.
updateContent
PUT /v1/projects/{scriptId}/content
Updates the content of the specified script project.
REST Resource: v1.projects.deployments
Methods
create
POST /v1/projects/{scriptId}/deployments
Creates a deployment of an Apps Script project.
delete
DELETE /v1/projects/{scriptId}/deployments/{deploymentId}
Deletes a deployment of an Apps Script project.
get
GET /v1/projects/{scriptId}/deployments/{deploymentId}
Gets a deployment of an Apps Script project.
list
GET /v1/projects/{scriptId}/deployments
Lists the deployments of an Apps Script project.
update
PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId}
Updates a deployment of an Apps Script project.
REST Resource: v1.projects.versions
Methods
create
POST /v1/projects/{scriptId}/versions
Creates a new immutable version using the current code, with a unique version number.
get
GET /v1/projects/{scriptId}/versions/{versionNumber}
Gets a version of a script project.
list
GET /v1/projects/{scriptId}/versions
List the versions of a script project.
REST Resource: v1.scripts
Methods
run
POST /v1/scripts/{scriptId}:run
Runs a function in an Apps Script project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]

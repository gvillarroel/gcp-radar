---
title: "Google Workspace add-ons API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest
  title: "Google Workspace add-ons API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Google Workspace add-ons API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This service, gsuiteaddons.googleapis.com , provides REST APIs for managing Google Workspace Add-ons deployments.
You can use Google-provided client libraries or your own libraries with the provided discovery document and service endpoint information to interact with the APIs.
The v1.projects resource allows you to retrieve authorization details for add-on deployments in a project.
The v1.projects.deployments resource offers methods to create, delete, retrieve, install, list, replace, and uninstall add-on deployments.
Use the service endpoint https://gsuiteaddons.googleapis.com as the base URL for all API requests.
REST Resource: v1.projects
REST Resource: v1.projects.deployments
Service: gsuiteaddons.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://gsuiteaddons.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://gsuiteaddons.googleapis.com
REST Resource: v1.projects
Methods
getAuthorization
GET /v1/{name=projects/*/authorization}
Gets the authorization information for deployments in a given project.
REST Resource: v1.projects.deployments
Methods
create
POST /v1/{parent=projects/*}/deployments
Creates a deployment with the specified name and configuration.
delete
DELETE /v1/{name=projects/*/deployments/*}
Deletes the deployment with the given name.
get
GET /v1/{name=projects/*/deployments/*}
Gets the deployment with the specified name.
getInstallStatus
GET /v1/{name=projects/*/deployments/*/installStatus}
Gets the install status of a test deployment.
install
POST /v1/{name=projects/*/deployments/*}:install
Installs a deployment to your account for testing.
list
GET /v1/{parent=projects/*}/deployments
Lists all deployments in a particular project.
replaceDeployment
PUT /v1/{deployment.name=projects/*/deployments/*}
Creates or replaces a deployment with the specified name.
uninstall
POST /v1/{name=projects/*/deployments/*}:uninstall
Uninstalls a test deployment from the user’s account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["The `gsuiteaddons.googleapis.com` service provides REST resources for managing projects and their deployments. Key actions for `v1.projects.deployments` include creating, deleting, getting, listing, and replacing deployments, and getting the install status. Additionally, deployments can be installed or uninstalled. The `v1.projects` resource supports retrieving authorization information for deployments. The API utilizes a base URL `https://gsuiteaddons.googleapis.com` and offers a Discovery Document for machine-readable specifications.\n"]]

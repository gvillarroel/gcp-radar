---
title: "Google Workspace add-ons API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rpc
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rpc
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
The service gsuiteaddons.googleapis.com enables the creation of RPC client stubs for managing Google Workspace Add-ons deployments.
google.cloud.gsuiteaddons.v1.GSuiteAddOns provides methods to manage add-on deployments, including creating, deleting, getting, and listing them.
This service allows for installing and uninstalling test deployments, as well as retrieving authorization information and install statuses.
Developers can use this service to control the lifecycle of their Google Workspace Add-ons within specific projects.
Service: gsuiteaddons.googleapis.com
The Service name gsuiteaddons.googleapis.com is needed to create RPC client stubs.
google.cloud.gsuiteaddons.v1.GSuiteAddOns
Methods
CreateDeployment
Creates a deployment with the specified name and configuration.
DeleteDeployment
Deletes the deployment with the given name.
GetAuthorization
Gets the authorization information for deployments in a given project.
GetDeployment
Gets the deployment with the specified name.
GetInstallStatus
Gets the install status of a test deployment.
InstallDeployment
Installs a deployment to your account for testing.
ListDeployments
Lists all deployments in a particular project.
ReplaceDeployment
Creates or replaces a deployment with the specified name.
UninstallDeployment
Uninstalls a test deployment from the user’s account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["The service `gsuiteaddons.googleapis.com` is used to create RPC client stubs. It allows users to manage deployments through various methods: creating, deleting, getting, replacing, and listing deployments. Users can also retrieve authorization information and check the install status of deployments. Finally, it supports installing and uninstalling deployments for testing purposes on user's accounts.\n"]]

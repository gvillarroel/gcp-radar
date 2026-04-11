---
title: "Method: projects.deployments.uninstall \_|\_ Google Workspace add-ons \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/uninstall
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/uninstall
  title: "Method: projects.deployments.uninstall \_|\_ Google Workspace add-ons \_\
    |\_ Google for Developers"
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
Method: projects.deployments.uninstall
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Uninstalls a specified test deployment from a user's account.
Requires an empty request body and returns an empty JSON object upon successful completion.
Uses the POST method with the URL https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}:uninstall , where {name} represents the deployment's full resource name.
Needs the gsuiteaddons.deployments.execute IAM permission and the https://www.googleapis.com/auth/cloud-platform OAuth scope for authorization.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Uninstalls a test deployment from the user’s account. For more information, see Test your add-on .
HTTP request
POST https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}:uninstall
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The full resource name of the deployment to install.
Example: projects/my_project/deployments/my_deployment .
Authorization requires the following IAM permission on the specified resource name :
gsuiteaddons.deployments.execute
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This document outlines how to uninstall a test deployment from a user's account via an HTTP POST request. The request is sent to a specific URL, incorporating a required path parameter, `name`, which identifies the deployment. The request body must be empty. Successful uninstallation results in an empty JSON response. Authorization requires the `gsuiteaddons.deployments.execute` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope. The provided URL uses gRPC Transcoding syntax.\n"]]

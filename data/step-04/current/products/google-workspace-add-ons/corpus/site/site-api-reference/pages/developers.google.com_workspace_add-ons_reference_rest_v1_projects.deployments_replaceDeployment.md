---
title: "Method: projects.deployments.replaceDeployment \_|\_ Google Workspace add-ons\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/replaceDeployment
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/replaceDeployment
  title: "Method: projects.deployments.replaceDeployment \_|\_ Google Workspace add-ons\
    \ \_|\_ Google for Developers"
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
Method: projects.deployments.replaceDeployment
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Creates or replaces a Google Workspace Add-on deployment with a specific name.
Utilizes an HTTP PUT request with path parameters to identify the target deployment.
Requires a request body containing the deployment details and an authorization scope for cloud platform access.
Returns the updated deployment details in the response body upon successful execution.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Creates or replaces a deployment with the specified name.
HTTP request
PUT https://gsuiteaddons.googleapis.com/v1/{deployment.name=projects/*/deployments/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
deployment.name
string
The deployment resource name. Example: projects/123/deployments/my_deployment .
Request body
The request body contains an instance of Deployment .
Response body
If successful, the response body contains an instance of Deployment .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This documentation details the process of creating or replacing a deployment via a `PUT` HTTP request to the specified URL. The URL structure is defined using gRPC Transcoding, and the request requires a deployment name as a path parameter (e.g., `projects/123/deployments/my_deployment`). The request body and successful response both utilize the `Deployment` resource. The authorization scope required is `https://www.googleapis.com/auth/cloud-platform`. The documentation also provide a \"Try it!\" section to test the API.\n"]]

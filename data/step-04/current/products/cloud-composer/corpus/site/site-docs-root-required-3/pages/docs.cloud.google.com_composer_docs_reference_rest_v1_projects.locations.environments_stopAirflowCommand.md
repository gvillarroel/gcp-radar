---
title: "Method: projects.locations.environments.stopAirflowCommand \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/stopAirflowCommand
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/stopAirflowCommand
  title: "Method: projects.locations.environments.stopAirflowCommand \_|\_ Cloud Composer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
Method: projects.locations.environments.stopAirflowCommand
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Try it!
Stops Airflow CLI command execution.
HTTP request
POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:stopAirflowCommand
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
environment
string
The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}".
Authorization requires the following IAM permission on the specified resource environment :
composer.environments.executeAirflowCommand
Request body
The request body contains data with the following structure:
JSON representation
{
"executionId" : string ,
"pod" : string ,
"podNamespace" : string ,
"force" : boolean
}
Fields
executionId
string
The unique ID of the command execution.
pod
string
The name of the pod where the command is executed.
podNamespace
string
The namespace of the pod where the command is executed.
force
boolean
If true, the execution is terminated forcefully (SIGKILL). If false, the execution is stopped gracefully, giving it time for cleanup.
Response body
Response to StopAirflowCommandRequest.
If successful, the response body contains data with the following structure:
JSON representation
{
"isDone" : boolean ,
"output" : [
string
]
}
Fields
isDone
boolean
Whether the execution is still running.
output[]
string
Output message from stopping execution request.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudcomposer
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

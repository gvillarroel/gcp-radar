---
title: "Method: projects.locations.environments.loadSnapshot \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/loadSnapshot
  title: "Method: projects.locations.environments.loadSnapshot \_|\_ Cloud Composer\
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
Method: projects.locations.environments.loadSnapshot
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Loads a snapshot of a Cloud Composer environment.
As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
HTTP request
POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:loadSnapshot
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
environment
string
The resource name of the target environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
Authorization requires the following IAM permission on the specified resource environment :
composer.environments.update
Request body
The request body contains data with the following structure:
JSON representation
{
"snapshotPath" : string ,
"skipPypiPackagesInstallation" : boolean ,
"skipEnvironmentVariablesSetting" : boolean ,
"skipAirflowOverridesSetting" : boolean ,
"skipGcsDataCopying" : boolean
}
Fields
snapshotPath
string
A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".
skipPypiPackagesInstallation
boolean
Whether or not to skip installing Pypi packages when loading the environment's state.
skipEnvironmentVariablesSetting
boolean
Whether or not to skip setting environment variables when loading the environment's state.
skipAirflowOverridesSetting
boolean
Whether or not to skip setting Airflow overrides when loading the environment's state.
skipGcsDataCopying
boolean
Whether or not to skip copying Cloud Storage data when loading the environment's state.
Response body
If successful, the response body contains an instance of Operation .
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

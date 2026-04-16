---
title: "Method: projects.locations.environments.userWorkloadsSecrets.list \_|\_ Cloud\
  \ Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.userWorkloadsSecrets/list
  title: "Method: projects.locations.environments.userWorkloadsSecrets.list \_|\_\
    \ Cloud Composer \_|\_ Google Cloud Documentation"
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
Method: projects.locations.environments.userWorkloadsSecrets.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists user workloads Secrets.
This method is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
HTTP request
GET https://composer.googleapis.com/v1/{parent=projects/*/locations/*/environments/*}/userWorkloadsSecrets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
Authorization requires the following IAM permission on the specified resource parent :
composer.userworkloadssecrets.list
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of Secrets to return.
pageToken
string
Optional. The nextPageToken value returned from a previous List request, if any.
Request body
The request body must be empty.
Response body
The user workloads Secrets for a given environment.
If successful, the response body contains data with the following structure:
JSON representation
{
"userWorkloadsSecrets" : [
{
object ( UserWorkloadsSecret )
}
] ,
"nextPageToken" : string
}
Fields
userWorkloadsSecrets[]
object ( UserWorkloadsSecret )
The list of Secrets returned by a ListUserWorkloadsSecretsRequest.
nextPageToken
string
The page token used to query for the next page if one exists.
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

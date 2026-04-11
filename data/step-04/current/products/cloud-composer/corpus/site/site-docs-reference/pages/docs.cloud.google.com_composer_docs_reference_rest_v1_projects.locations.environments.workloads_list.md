---
title: "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list
  title: "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\
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
Method: projects.locations.environments.workloads.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
ComposerWorkload
JSON representation
ComposerWorkloadType
ComposerWorkloadStatus
JSON representation
ComposerWorkloadState
Try it!
Lists workloads in a Cloud Composer environment. Workload is a unit that runs a single Composer component.
This method is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
HTTP request
GET https://composer.googleapis.com/v1/{parent=projects/*/locations/*/environments/*}/workloads
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
Authorization requires the following IAM permission on the specified resource parent :
composer.environments.get
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of environments to return.
pageToken
string
Optional. The nextPageToken value returned from a previous List request, if any.
filter
string
Optional. The list filter. Currently only supports equality on the type field. The value of a field specified in the filter expression must be one ComposerWorkloadType enum option. It's possible to get multiple types using "OR" operator, e.g.: "type=SCHEDULER OR type=CELERY_WORKER". If not specified, all items are returned.
Request body
The request body must be empty.
Response body
Response to ListWorkloadsRequest.
If successful, the response body contains data with the following structure:
JSON representation
{
"workloads" : [
{
object ( ComposerWorkload )
}
] ,
"nextPageToken" : string
}
Fields
workloads[]
object ( ComposerWorkload )
The list of environment workloads.
nextPageToken
string
The page token used to query for the next page if one exists.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudcomposer
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ComposerWorkload
Information about a single workload.
JSON representation
{
"name" : string ,
"type" : enum ( ComposerWorkloadType ) ,
"status" : {
object ( ComposerWorkloadStatus )
}
}
Fields
name
string
Name of a workload.
type
enum ( ComposerWorkloadType )
Type of a workload.
status
object ( ComposerWorkloadStatus )
Output only. Status of a workload.
ComposerWorkloadType
Supported workload types.
Enums
COMPOSER_WORKLOAD_TYPE_UNSPECIFIED
Not able to determine the type of the workload.
CELERY_WORKER
Celery worker.
KUBERNETES_WORKER
Kubernetes worker.
KUBERNETES_OPERATOR_POD
Workload created by Kubernetes Pod Operator.
SCHEDULER
Airflow scheduler.
DAG_PROCESSOR
Airflow Dag processor.
TRIGGERER
Airflow triggerer.
WEB_SERVER
Airflow web server UI.
REDIS
Redis.
ComposerWorkloadStatus
Workload status.
JSON representation
{
"state" : enum ( ComposerWorkloadState ) ,
"statusMessage" : string ,
"detailedStatusMessage" : string
}
Fields
state
enum ( ComposerWorkloadState )
Output only. Workload state.
statusMessage
string
Output only. Text to provide more descriptive status.
detailedStatusMessage
string
Output only. Detailed message of the status.
ComposerWorkloadState
Workload states.
Enums
COMPOSER_WORKLOAD_STATE_UNSPECIFIED
Not able to determine the status of the workload.
PENDING
Workload is in pending state and has not yet started.
OK
Workload is running fine.
WARNING
Workload is running but there are some non-critical problems.
ERROR
Workload is not running due to an error.
SUCCEEDED
Workload has finished execution with success.
FAILED
Workload has finished execution with failure.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

---
title: "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade
  title: "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\
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
Method: projects.locations.environments.checkUpgrade
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Check if an upgrade operation on the environment will succeed.
In case of problems detailed info can be found in the returned Operation.
HTTP request
POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:checkUpgrade
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
environment
string
Required. The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
Authorization requires the following IAM permission on the specified resource environment :
composer.environments.update
Request body
The request body contains data with the following structure:
JSON representation
{
"imageVersion" : string
}
Fields
imageVersion
string
Optional. The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?) . When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version.
The Cloud Composer portion of the image version is a full semantic version , or an alias in the form of major version number or latest . When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias.
The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version.
In all cases, the resolved image version is stored in the same field.
See also version list and versioning overview .
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

---
title: "Method: projects.locations.imageVersions.list \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.imageVersions/list
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.imageVersions/list
  title: "Method: projects.locations.imageVersions.list \_|\_ Cloud Composer \_|\_\
    \ Google Cloud Documentation"
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
Method: projects.locations.imageVersions.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
ImageVersion
JSON representation
Try it!
List ImageVersions for provided location.
HTTP request
GET https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/imageVersions
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
List ImageVersions in the given project and location, in the form: "projects/{projectId}/locations/{locationId}"
Authorization requires the following IAM permission on the specified resource parent :
composer.imageversions.list
Query parameters
Parameters
pageSize
integer
The maximum number of imageVersions to return.
pageToken
string
The nextPageToken value returned from a previous List request, if any.
includePastReleases
boolean
Whether or not image versions from old releases should be included.
Request body
The request body must be empty.
Response body
The ImageVersions in a project and location.
If successful, the response body contains data with the following structure:
JSON representation
{
"imageVersions" : [
{
object ( ImageVersion )
}
] ,
"nextPageToken" : string
}
Fields
imageVersions[]
object ( ImageVersion )
The list of supported ImageVersions in a location.
nextPageToken
string
The page token used to query for the next page if one exists.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudcomposer
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ImageVersion
ImageVersion information
JSON representation
{
"imageVersionId" : string ,
"isDefault" : boolean ,
"supportedPythonVersions" : [
string
] ,
"releaseDate" : {
object ( Date )
} ,
"creationDisabled" : boolean ,
"upgradeDisabled" : boolean
}
Fields
imageVersionId
string
The string identifier of the ImageVersion, in the form: "composer-x.y.z-airflow-a.b.c"
isDefault
boolean
Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified.
supportedPythonVersions[]
string
supported python versions
releaseDate
object ( Date )
The date of the version release.
creationDisabled
boolean
Whether it is impossible to create an environment with the image version.
upgradeDisabled
boolean
Whether it is impossible to upgrade an environment running with the image version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

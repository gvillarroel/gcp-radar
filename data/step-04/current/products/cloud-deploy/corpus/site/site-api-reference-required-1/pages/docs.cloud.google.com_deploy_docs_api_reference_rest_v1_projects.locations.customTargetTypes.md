---
title: "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes
  title: "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
REST Resource: projects.locations.customTargetTypes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CustomTargetType
JSON representation
CustomTargetSkaffoldActions
JSON representation
SkaffoldModules
JSON representation
SkaffoldGitSource
JSON representation
SkaffoldGCSSource
JSON representation
SkaffoldGCBRepoSource
JSON representation
Methods
Resource: CustomTargetType
A CustomTargetType resource in the Cloud Deploy API.
A CustomTargetType defines a type of custom target that can be referenced in a Target in order to facilitate deploying to other systems besides the supported runtimes.
JSON representation
{
"name" : string ,
"customTargetTypeId" : string ,
"uid" : string ,
"description" : string ,
"annotations" : {
string : string ,
...
} ,
"labels" : {
string : string ,
...
} ,
"createTime" : string ,
"updateTime" : string ,
"etag" : string ,
// Union field definition can be only one of the following:
"customActions" : {
object ( CustomTargetSkaffoldActions )
}
// End of list of possible types for union field definition .
}
Fields
name
string
Identifier. Name of the CustomTargetType . Format is projects/{project}/locations/{location}/customTargetTypes/{customTargetType} . The customTargetType component must match [a-z]([a-z0-9-]{0,61}[a-z0-9])?
customTargetTypeId
string
Output only. Resource id of the CustomTargetType .
uid
string
Output only. Unique identifier of the CustomTargetType .
description
string
Optional. Description of the CustomTargetType . Max length is 255 characters.
annotations
map (key: string, value: string)
Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
labels
map (key: string, value: string)
Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints:
Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes.
All characters must use UTF-8 encoding, and international characters are allowed.
Keys must start with a lowercase letter or international character.
Each resource is limited to a maximum of 64 labels.
Both keys and values are additionally constrained to be <= 128 bytes.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. Time at which the CustomTargetType was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Most recent time at which the CustomTargetType was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
Union field definition . Defines the CustomTargetType renderer and deployer. definition can be only one of the following:
customActions
object ( CustomTargetSkaffoldActions )
Optional. Configures render and deploy for the CustomTargetType using Skaffold custom actions.
CustomTargetSkaffoldActions
CustomTargetSkaffoldActions represents the CustomTargetType configuration using Skaffold custom actions.
JSON representation
{
"renderAction" : string ,
"deployAction" : string ,
"includeSkaffoldModules" : [
{
object ( SkaffoldModules )
}
]
}
Fields
renderAction
string
Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via skaffold
render .
deployAction
string
Required. The Skaffold custom action responsible for deploy operations.
includeSkaffoldModules[]
object ( SkaffoldModules )
Optional. List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.
SkaffoldModules
Skaffold Config modules and their remote source.
JSON representation
{
"configs" : [
string
] ,
// Union field source can be only one of the following:
"git" : {
object ( SkaffoldGitSource )
} ,
"googleCloudStorage" : {
object ( SkaffoldGCSSource )
} ,
"googleCloudBuildRepo" : {
object ( SkaffoldGCBRepoSource )
}
// End of list of possible types for union field source .
}
Fields
configs[]
string
Optional. The Skaffold Config modules to use from the specified source.
Union field source . The source that contains the Skaffold Config modules. source can be only one of the following:
git
object ( SkaffoldGitSource )
Optional. Remote git repository containing the Skaffold Config modules.
googleCloudStorage
object ( SkaffoldGCSSource )
Optional. Cloud Storage bucket containing the Skaffold Config modules.
googleCloudBuildRepo
object ( SkaffoldGCBRepoSource )
Optional. Cloud Build V2 repository containing the Skaffold Config modules.
SkaffoldGitSource
Git repository containing Skaffold Config modules.
JSON representation
{
"repo" : string ,
"path" : string ,
"ref" : string
}
Fields
repo
string
Required. Git repository the package should be cloned from.
path
string
Optional. Relative path from the repository root to the Skaffold file.
ref
string
Optional. Git branch or tag to use when cloning the repository.
SkaffoldGCSSource
Cloud Storage bucket containing Skaffold Config modules.
JSON representation
{
"source" : string ,
"path" : string
}
Fields
source
string
Required. Cloud Storage source paths to copy recursively. For example, providing "gs://my-bucket/dir/configs/*" will result in Skaffold copying all files within the "dir/configs" directory in the bucket "my-bucket".
path
string
Optional. Relative path from the source to the Skaffold file.
SkaffoldGCBRepoSource
Cloud Build V2 Repository containing Skaffold Configs.
JSON representation
{
"repository" : string ,
"path" : string ,
"ref" : string
}
Fields
repository
string
Required. Name of the Cloud Build V2 Repository. Format is projects/{project}/locations/{location}/connections/{connection}/repositories/{repository}.
path
string
Optional. Relative path from the repository root to the Skaffold Config file.
ref
string
Optional. Branch or tag to use when cloning the repository.
Methods
create
Creates a new CustomTargetType in a given project and location.
delete
Deletes a single CustomTargetType.
get
Gets details of a single CustomTargetType.
getIamPolicy
Gets the access control policy for a resource.
list
Lists CustomTargetTypes in a given project and location.
patch
Updates a single CustomTargetType.
setIamPolicy
Sets the access control policy on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]

---
title: "Deployment \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/Deployment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/Deployment
  title: "Deployment \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
Deployment
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A Deployment is a group of resources and configs managed and provisioned by Infra Manager.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"latestRevision" : string ,
"stateDetail" : string ,
"errorCode" : enum ( ErrorCode ) ,
"deleteResults" : {
object ( ApplyResults )
} ,
"deleteBuild" : string ,
"deleteLogs" : string ,
"tfErrors" : [
{
object ( TerraformError )
}
] ,
"errorLogs" : string ,
"lockState" : enum ( LockState ) ,
"tfVersion" : string ,
"quotaValidation" : enum ( QuotaValidation ) ,
"annotations" : {
string : string ,
...
} ,
"providerConfig" : {
object ( ProviderConfig )
} ,
// Union field blueprint can be only one of the following:
"terraformBlueprint" : {
object ( TerraformBlueprint )
}
// End of list of possible types for union field blueprint .
"artifactsGcsBucket" : string ,
"serviceAccount" : string ,
"importExistingResources" : boolean ,
"workerPool" : string ,
"tfVersionConstraint" : string
}
Fields
name
string
Identifier. Resource name of the deployment. Format: projects/{project}/locations/{location}/deployments/{deployment}
createTime
string ( Timestamp format)
Output only. Time when the deployment was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Time when the deployment was last modified.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. User-defined metadata for the deployment.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. Current state of the deployment.
latestRevision
string
Output only. Revision name that was most recently applied. Format: projects/{project}/locations/{location}/deployments/{deployment}/
revisions/{revision}
stateDetail
string
Output only. Additional information regarding the current state.
errorCode
enum ( ErrorCode )
Output only. Error code describing errors that may have occurred.
deleteResults
object ( ApplyResults )
Output only. Location of artifacts from a deployments.delete operation.
deleteBuild
string
Output only. Cloud Build instance UUID associated with deleting this deployment.
deleteLogs
string
Output only. Location of Cloud Build logs in Google Cloud Storage, populated when deleting this deployment. Format: gs://{bucket}/{object} .
tfErrors[]
object ( TerraformError )
Output only. Errors encountered when deleting this deployment. Errors are truncated to 10 entries, see deleteResults and errorLogs for full details.
errorLogs
string
Output only. Location of Terraform error logs in Google Cloud Storage. Format: gs://{bucket}/{object} .
lockState
enum ( LockState )
Output only. Current lock state of the deployment.
tfVersion
string
Output only. The current Terraform version set on the deployment. It is in the format of "Major.Minor.Patch", for example, "1.3.10".
quotaValidation
enum ( QuotaValidation )
Optional. Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies.
annotations
map (key: string, value: string)
Optional. Arbitrary key-value metadata storage e.g. to help client tools identify deployments during automation. See https://google.aip.dev/148#annotations for details on format and size limitations.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
providerConfig
object ( ProviderConfig )
Optional. This field specifies the provider configurations.
Union field blueprint . Blueprint to deploy. blueprint can be only one of the following:
terraformBlueprint
object ( TerraformBlueprint )
A blueprint described using Terraform's HashiCorp Configuration Language as a root module.
artifactsGcsBucket
string
Optional. User-defined location of Cloud Build logs and artifacts in Google Cloud Storage. Format: gs://{bucket}/{folder}
A default bucket will be bootstrapped if the field is not set or empty. Default bucket format: gs://<project number>-<region>-blueprint-config Constraints: - The bucket needs to be in the same project as the deployment - The path cannot be within the path of gcsSource - The field cannot be updated, including changing its presence
serviceAccount
string
Required. User-specified Service Account (SA) credentials to be used when actuating resources. Format: projects/{projectID}/serviceAccounts/{serviceAccount}
importExistingResources
boolean
By default, Infra Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infra Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation.
Not all resource types are supported, refer to documentation.
workerPool
string
Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId} . If this field is unspecified, the default Cloud Build worker pool will be used.
tfVersionConstraint
string
Optional. The user-specified Terraform version constraint. Example: "=1.3.10".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]

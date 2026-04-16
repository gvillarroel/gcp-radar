---
title: "Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/authorization
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch
  title: "Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Deployments: patch
Stay organized with collections
Save and categorize content based on your preferences.
Patches a deployment and all of the resources described by the
deployment manifest. This method supports patch semantics .
Try it now .
Request
HTTP request
PATCH https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ deployment
Parameters
Parameter name
Value
Description
Path parameters
deployment
string
The name of the deployment for this request.
project
string
The project ID for this request.
Optional query parameters
createPolicy
string
Sets the policy to use for creating new resources.
Acceptable values are:
" ACQUIRE ": Acquire an existing resource. If the resource does not exist, the deployment will fail.
" CREATE_OR_ACQUIRE ": Acquire the resource if it exists, create the resource if it does not.
(default)
deletePolicy
string
Sets the policy to use for deleting resources.
Acceptable values are:
" ABANDON ": Removes the resource from Deployment Manager but does not delete the underlying resource.
" DELETE ": Removes the resource from Deployment Manager and deletes the underlying resource.
(default)
preview
boolean
If set to true, updates the deployment and creates and updates the "shell"
resources but does not actually alter or instantiate these resources.
This allows you to preview what your deployment will look like. You can use
this intent to preview how an update would affect your deployment. You must
provide a target.config with a configuration if this is set to
true. After previewing a deployment, you can deploy your resources by
making a request with the update() or you can
cancelPreview() to remove the preview altogether.
Note that the deployment will still exist after you cancel the preview and
you must separately delete this deployment if you want to remove it.
(Default: false )
Request body
In the request body, supply the relevant portions of a Deployments resource , according to the rules of patch semantics.
Response
If successful, this method returns a response body with the following structure:
{
"kind" : "deploymentmanager#operation" ,
"id" : unsigned long ,
"creationTimestamp" : string ,
"name" : string ,
"zone" : string ,
"clientOperationId" : string ,
"operationType" : string ,
"targetLink" : string ,
"targetId" : unsigned long ,
"status" : string ,
"statusMessage" : string ,
"user" : string ,
"progress" : integer ,
"insertTime" : string ,
"startTime" : string ,
"endTime" : string ,
"error" : {
"errors" : [
{
"code" : string ,
"location" : string ,
"message" : string
}
]
} ,
"warnings" : [
{
"code" : string ,
"message" : string ,
"data" : [
{
"key" : string ,
"value" : string
}
]
}
],
"httpErrorStatusCode" : integer ,
"httpErrorMessage" : string ,
"selfLink" : string ,
"region" : string ,
"description" : string
}
Property name
Value
Description
Notes
kind
string
[Output Only] Type of the resource. Always compute#operation for Operation resources.
id
unsigned long
[Output Only] The unique identifier for the resource. This identifier is defined by the server.
creationTimestamp
string
[Deprecated] This field is deprecated.
name
string
[Output Only] Name of the resource.
zone
string
[Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
clientOperationId
string
[Output Only] The value of `requestId` if you provided it in the request. Not present otherwise.
operationType
string
[Output Only] The type of operation, such as insert , update , or delete , and so on.
targetLink
string
[Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
targetId
unsigned long
[Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
status
string
[Output Only] The status of the operation, which can be one of the following: PENDING , RUNNING , or DONE .
statusMessage
string
[Output Only] An optional textual description of the current status of the operation.
user
string
[Output Only] User who requested the operation, for example: user@example.com .
progress
integer
[Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
insertTime
string
[Output Only] The time that this operation was requested. This value is in RFC3339 text format.
startTime
string
[Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
endTime
string
[Output Only] The time that this operation was completed. This value is in RFC3339 text format.
error
object
[Output Only] If errors are generated during processing of the operation, this field will be populated.
error. errors[]
list
[Output Only] The array of errors encountered while processing this operation.
error.errors[]. code
string
[Output Only] The error type identifier for this error.
error.errors[]. location
string
[Output Only] Indicates the field in the request that caused the error. This property is optional.
error.errors[]. message
string
[Output Only] An optional, human-readable error message.
warnings[]
list
[Output Only] If warning messages are generated during processing of the operation, this field will be populated.
warnings[]. code
string
[Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
warnings[]. message
string
[Output Only] A human-readable description of the warning code.
warnings[]. data[]
list
[Output Only] Metadata about this warning in key: value format. For example:
"data": [ { "key": "scope", "value": "zones/us-east1-d" }
warnings[].data[]. key
string
[Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
warnings[].data[]. value
string
[Output Only] A warning data value corresponding to the key.
httpErrorStatusCode
integer
[Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
httpErrorMessage
string
[Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND .
selfLink
string
[Output Only] Server-defined URL for the resource.
region
string
[Output Only] The URL of the region where the operation resides. Only available when performing regional operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
description
string
[Output Only] A textual description of the operation, which is set when the operation is created.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Alternatively, try the
standalone
Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]

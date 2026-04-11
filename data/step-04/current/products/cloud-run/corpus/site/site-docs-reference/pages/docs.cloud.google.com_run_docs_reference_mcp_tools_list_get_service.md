---
title: "MCP Tools Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/get_service
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/get_service
  title: "MCP Tools Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
MCP Tools Reference: run.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_service
Get info about a Cloud Run service, such as its URI and whether the deploy succeeded.
The following sample demonstrate how to use curl to invoke the get_service MCP tool.
Curl Request
curl --location 'https://run.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_service",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for obtaining a Service by its full name.
GetServiceRequest
JSON representation
{
"name" : string ,
"project" : string ,
"region" : string
}
Fields
name
string
Required. The short name of the Service.
project
string
Required. The project ID or project number to get the Service from.
region
string
Required. The region to get the Service from.
Output Schema
The output of a managed Cloud Run Service returned by the API.
ServiceOutput
JSON representation
{
"name" : string ,
"template" : {
object ( RevisionTemplateOutput )
} ,
"createTime" : string ,
"updateTime" : string ,
"creator" : string ,
"lastModifier" : string ,
"uri" : string ,
"terminalCondition" : {
object ( Condition )
}
}
Fields
name
string
The fully qualified name of this Service.
Format: projects/{project}/locations/{location}/services/{service_id}
template
object ( RevisionTemplateOutput )
The template used to create revisions for this Service.
createTime
string ( Timestamp format)
The creation time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
The last-modified time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
creator
string
Email address of the creator.
lastModifier
string
Email address of the last modifier.
uri
string
The main URI in which this Service is serving traffic.
terminalCondition
object ( Condition )
The terminal condition of this Service, indicating its readiness status. State CONDITION_SUCCEEDED means the service is ready. If the service is not ready, this condition will contain detailed error information.
RevisionTemplateOutput
JSON representation
{
"containers" : [
{
object ( ContainerOutput )
}
]
}
Fields
containers[]
object ( ContainerOutput )
Holds the containers that define this Revision.
ContainerOutput
JSON representation
{
"image" : string ,
"command" : [
string
] ,
"args" : [
string
] ,
"env" : [
{
object ( EnvVar )
}
] ,
"ports" : [
{
object ( ContainerPort )
}
] ,
"baseImageUri" : string ,
"sourceCode" : {
object ( SourceCode )
}
}
Fields
image
string
Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed.
command[]
string
Entrypoint array. Not executed within a shell.
args[]
string
Arguments to the entrypoint.
env[]
object ( EnvVar )
List of environment variables to set in the container.
ports[]
object ( ContainerPort )
List of ports exposed from the container.
baseImageUri
string
Base image for this container. Only supported for services. If set, it indicates that the service is enrolled into automatic base image update.
sourceCode
object ( SourceCode )
The location of the source code from which this container was built.
EnvVar
JSON representation
{
"name" : string ,
// Union field values can be only one of the following:
"value" : string ,
"valueSource" : {
object ( EnvVarSource )
}
// End of list of possible types for union field values .
}
Fields
name
string
Required. Name of the environment variable. Must not exceed 32768 characters.
Union field values .
values can be only one of the following:
value
string
Literal value of the environment variable. Defaults to "", and the maximum length is 32768 bytes. Variable references are not supported in Cloud Run.
valueSource
object ( EnvVarSource )
Source for the environment variable's value.
EnvVarSource
JSON representation
{
"secretKeyRef" : {
object ( SecretKeySelector )
}
}
Fields
secretKeyRef
object ( SecretKeySelector )
Selects a secret and a specific version from Cloud Secret Manager.
SecretKeySelector
JSON representation
{
"secret" : string ,
"version" : string
}
Fields
secret
string
Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project.
version
string
The Cloud Secret Manager secret version. Can be 'latest' for the latest version, an integer for a specific version, or a version alias.
ContainerPort
JSON representation
{
"name" : string ,
"containerPort" : integer
}
Fields
name
string
If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
containerPort
integer
Port number the container listens on. This must be a valid TCP port number, 0 < container_port < 65536.
SourceCode
JSON representation
{
// Union field source_type can be only one of the following:
"cloudStorageSource" : {
object ( CloudStorageSource )
} ,
"inlinedSource" : {
object ( InlinedSource )
}
// End of list of possible types for union field source_type .
}
Fields
Union field source_type . The source type. source_type can be only one of the following:
cloudStorageSource
object ( CloudStorageSource )
The source is a Cloud Storage bucket.
inlinedSource
object ( InlinedSource )
Optional. Input only. Source code inlined in the request. Cloud Run will store the inlined_source to Cloud Storage and replace the field with cloud_storage_source.
CloudStorageSource
JSON representation
{
"bucket" : string ,
"object" : string ,
"generation" : string
}
Fields
bucket
string
Required. The Cloud Storage bucket name.
object
string
Required. The Cloud Storage object name.
generation
string ( int64 format)
Optional. The Cloud Storage object generation.
InlinedSource
JSON representation
{
"sources" : [
{
object ( SourceFile )
}
]
}
Fields
sources[]
object ( SourceFile )
Required. Input only. The source code.
SourceFile
JSON representation
{
"filename" : string ,
"content" : string
}
Fields
filename
string
Required. Input only. The file name for the source code. e.g., "index.js" or "node_modules/dependency.js" . The filename must be less than 255 characters and cannot contain .. , ./ , // , or end with a / . Cloud Run will place the files in the container subdirectories, please use relative path to access the file.
content
string
Required. Input only. Represents the exact, literal, and complete source code of the file. Placeholders like ... or comments such as # [rest of code] should NEVER be used as omission. Every character in this field will be built into the final container. Any omission will result in a broken application.
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
Condition
JSON representation
{
"type" : string ,
"state" : enum ( State ) ,
"message" : string ,
"lastTransitionTime" : string ,
"severity" : enum ( Severity ) ,
// Union field reasons can be only one of the following:
"reason" : enum ( CommonReason ) ,
"revisionReason" : enum ( RevisionReason ) ,
"executionReason" : enum ( ExecutionReason )
// End of list of possible types for union field reasons .
}
Fields
type
string
type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.
state
enum ( State )
State of the condition.
message
string
Human readable message indicating details about the current status.
lastTransitionTime
string ( Timestamp format)
Last time the condition transitioned from one status to another.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
severity
enum ( Severity )
How to interpret failures of this condition, one of Error, Warning, Info
Union field reasons . The reason for this condition. Depending on the condition type, it will populate one of these fields. Successful conditions cannot have a reason. reasons can be only one of the following:
reason
enum ( CommonReason )
Output only. A common (service-level) reason for this condition.
revisionReason
enum ( RevisionReason )
Output only. A reason for the revision condition.
executionReason
enum ( ExecutionReason )
Output only. A reason for the execution condition.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

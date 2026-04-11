---
title: "MCP Tools Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/deploy_service_from_archive
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/deploy_service_from_archive
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
Tool: deploy_service_from_archive
Deploy a Cloud Run service directly from a self-contained source code archive (.tar.gz), skipping the container image build step for faster deployment.
The archive must include all dependencies:
For compiled languages (Go, Java), include pre-compiled binaries.
For scripting languages (Python, Node.js), include pre-installed libraries (e.g., vendor/, node_modules/).
Deployment steps:
Package source code and dependencies into a .tar.gz archive (max 250MiB). It's recommended to create archive from the root of the application's source directory.
Upload the archive to a Google Cloud Storage bucket, preferably in the same region as the service.
Deploy to Cloud Run using this tool, specifying:
source_code: Google Cloud Storage object path to the archive (e.g., gs://bucket/object).
command: Command to start the application.
base_image_uri: Base image for the container (e.g., us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/runtimes/go124). See https://docs.cloud.google.com/run/docs/configuring/services/runtime-base-images for options. The runtime picked should match the local environment.
args: (Optional) Arguments for the command.
env: (Optional) Environment variables (e.g., name: PYTHONPATH , value: ./vendor ).
ports: (Optional) Container ports to expose (defaults to 8080).
The following sample demonstrate how to use curl to invoke the deploy_service_from_archive MCP tool.
Curl Request
curl --location 'https://run.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "deploy_service_from_archive",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for deploying source code as a Cloud Run service.
DeploySourceServiceRequest
JSON representation
{
"service" : {
object ( SourceService )
}
}
Fields
service
object ( SourceService )
Required. The service to deploy.
SourceService
JSON representation
{
"name" : string ,
"project" : string ,
"region" : string ,
"template" : {
object ( SourceServiceRevisionTemplate )
} ,
"invokerIamDisabled" : boolean
}
Fields
name
string
Required. Identifier. The short name of the Service.
project
string
Required. Identifier. The project ID or project number to get the Service from.
region
string
Required. Identifier. The region to get the Service from.
template
object ( SourceServiceRevisionTemplate )
Required. The template used to create revisions for this Service.
invokerIamDisabled
boolean
Optional. Disables IAM permission check for run.routes.invoke for callers of this service. Set to true to make this service public and allow unauthenticated access. This field defaults to false when unset, which means the service is private and only allows access from authenticated users.
SourceServiceRevisionTemplate
JSON representation
{
"containers" : [
{
object ( SourceContainer )
}
]
}
Fields
containers[]
object ( SourceContainer )
Required. Holds the containers that define this Revision.
SourceContainer
JSON representation
{
"sourceCode" : {
object ( SourceCode )
} ,
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
"baseImageUri" : string
}
Fields
sourceCode
object ( SourceCode )
Required. The location of the source code to be used for the container. This can be either source code inlined as text or source code as a Cloud Storage object.
command[]
string
Required. Entrypoint array to start the app.
args[]
string
Optional. Arguments to the entrypoint.
env[]
object ( EnvVar )
Optional. List of environment variables to set in the container.
ports[]
object ( ContainerPort )
Optional. List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
If multiple containers are specified, exactly one container must have this field set.
If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
baseImageUri
string
Required. Base image URI to use for the container. The full list of images can be found in https://docs.cloud.google.com/run/docs/configuring/services/runtime-base-images , i.e. nodejs24. The runtime picked should match the local environment.
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
Output Schema
This resource represents a long-running operation that is the result of a network API call.
Operation
JSON representation
{
"name" : string ,
"metadata" : {
"@type" : string ,
field1 : ... ,
...
} ,
"done" : boolean ,
// Union field result can be only one of the following:
"error" : {
object ( Status )
} ,
"response" : {
"@type" : string ,
field1 : ... ,
...
}
// End of list of possible types for union field result .
}
Fields
name
string
The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id} .
metadata
object
Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
done
boolean
If the value is false , it means the operation is still in progress. If true , the operation is completed, and either error or response is available.
Union field result . The operation result, which can be either an error or a valid response . If done == false , neither error nor response is set. If done == true , exactly one of error or response can be set. Some services might not provide the result. result can be only one of the following:
error
object ( Status )
The error result of the operation in case of failure or cancellation.
response
object
The normal, successful response of the operation. If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty . If the original method is standard Get / Create / Update , the response should be the resource. For other methods, the response should have the type XxxResponse , where Xxx is the original method name. For example, if the original method name is TakeSnapshot() , the inferred response type is TakeSnapshotResponse .
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Any
JSON representation
{
"typeUrl" : string ,
"value" : string
}
Fields
typeUrl
string
Identifies the type of the serialized Protobuf message with a URI reference consisting of a prefix ending in a slash and the fully-qualified type name.
Example: type.googleapis.com/google.protobuf.StringValue
This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot. Do not write a scheme on these URI references so that clients do not attempt to contact them.
The prefix is arbitrary and Protobuf implementations are expected to simply strip off everything up to and including the last / to identify the type. type.googleapis.com/ is a common default prefix that some legacy implementations require. This prefix does not indicate the origin of the type, and URIs containing it are not expected to respond to any requests.
All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-.~_!$&()*+,;= . Despite our allowing percent encodings, implementations should not unescape them to prevent confusion with existing parsers. For example, type.googleapis.com%2FFoo should be rejected.
In the original design of Any , the possibility of launching a type resolution service at these type URLs was considered but Protobuf never implemented one and considers contacting these URLs to be problematic and a potential security issue. Do not attempt to contact type URLs.
value
string ( bytes format)
Holds a Protobuf serialization of the type described by type_url.
A base64-encoded string.
Status
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Tool Annotations
Destructive Hint: ✅ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

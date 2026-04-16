---
title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_get
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_get
  title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
MCP Tools Reference: container.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: kube_get
Gets one or more Kubernetes resources from a cluster. Resources can be filtered by type, name, namespace, and label selectors. Returns the resources in YAML format. This is similar to running kubectl get .
The following sample demonstrate how to use curl to invoke the kube_get MCP tool.
Curl Request
curl --location 'https://container.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "kube_get",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for retrieving Kubernetes resources.
GetK8SResourceRequest
JSON representation
{
"parent" : string ,
"resourceType" : string ,
"name" : string ,
"namespace" : string ,
"labelSelector" : string ,
"fieldSelector" : string ,
"customColumns" : string ,
"outputFormat" : enum ( OutputFormat )
}
Fields
parent
string
Required. The cluster, which owns this collection of resources. Format: projects/{project}/locations/{location}/clusters/{cluster}
resourceType
string
Required. The type of resource to retrieve. Kubernetes resource/kind name in singular form, lower case. e.g. "pod", "deployment", "service".
name
string
Optional. The name of the resource to retrieve. If not specified, all resources of the given type are returned.
namespace
string
Optional. The namespace of the resource. If not specified, all namespaces are searched.
labelSelector
string
Optional. A label selector to filter resources.
fieldSelector
string
Optional. A field selector to filter resources.
customColumns
string ( FieldMask format)
Optional. The field mask to specify columns to display. Use a single "*" to get all fields. When both custom_columns and output_format are specified, output_format is ignored.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
outputFormat
enum ( OutputFormat )
Optional. The output format. One of: (table, wide, yaml, json). If not specified, defaults to table. When both custom_columns and output_format are specified, output_format is ignored.
FieldMask
JSON representation
{
"paths" : [
string
]
}
Fields
paths[]
string
The set of field mask paths.
Output Schema
Response for retrieving Kubernetes resources.
GetK8SResourceResponse
JSON representation
{
"output" : string
}
Fields
output
string
The output of the command in the requested format. It may contain resources in YAML or JSON format, or a table in plain text, or errors.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]

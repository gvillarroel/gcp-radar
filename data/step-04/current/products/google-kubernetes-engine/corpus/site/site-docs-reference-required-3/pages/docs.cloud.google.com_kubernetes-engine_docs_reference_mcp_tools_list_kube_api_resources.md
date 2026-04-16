---
title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources
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
Tool: kube_api_resources
Retrieves the available API groups and resources from a Kubernetes cluster. This is similar to running kubectl api-resources .
The following sample demonstrate how to use curl to invoke the kube_api_resources MCP tool.
Curl Request
curl --location 'https://container.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "kube_api_resources",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for retrieving Kubernetes API resources.
ListK8SAPIResourcesRequest
JSON representation
{
"parent" : string
}
Fields
parent
string
Required. The cluster, which owns this collection of resource types. Format: projects/{project}/locations/{location}/clusters/{cluster}
Output Schema
APIGroupDiscoveryList is a list of API group discovery.
APIGroupDiscoveryList
JSON representation
{
"groups" : [
{
object ( APIGroupDiscovery )
}
]
}
Fields
groups[]
object ( APIGroupDiscovery )
The list of API group discovery.
APIGroupDiscovery
JSON representation
{
"name" : string ,
"versions" : [
string
] ,
"preferredVersion" : string
}
Fields
name
string
The name of the resource type. e.g. "pods", "deployments", "services".
versions[]
string
The list of versions for this API group, in the form {group}/{version}.
preferredVersion
string
The preferred version for this API group, in the form {group}/{version}.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]

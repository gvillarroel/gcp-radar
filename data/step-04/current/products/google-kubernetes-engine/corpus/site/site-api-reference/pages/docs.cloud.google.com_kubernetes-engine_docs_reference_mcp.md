---
title: "MCP Reference: container.googleapis.com \_|\_ Google Kubernetes Engine (GKE)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
  title: "MCP Reference: container.googleapis.com \_|\_ Google Kubernetes Engine (GKE)\
    \ \_|\_ Google Cloud Documentation"
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
MCP Reference: container.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
This is an MCP server which provides tools to manage Google Kubernetes Engine (GKE) clusters and their Kubernetes resources.
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The container.googleapis.com MCP server has the following MCP endpoint:
https://container.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The container.googleapis.com MCP server has the following tools:
MCP Tools
kube_api_resources
Retrieves the available API groups and resources from a Kubernetes cluster. This is similar to running kubectl api-resources .
kube_get
Gets one or more Kubernetes resources from a cluster. Resources can be filtered by type, name, namespace, and label selectors. Returns the resources in YAML format. This is similar to running kubectl get .
list_clusters
Lists GKE clusters in a given project and location. Location can be a region, zone, or '-' for all locations.
get_cluster
Gets the details of a specific GKE cluster.
list_operations
Lists GKE operations in a given project and location. Location can be a region, zone, or '-' for all locations.
get_operation
Gets the details of a specific GKE operation.
list_node_pools
Lists the node pools for a specific GKE cluster.
get_node_pool
Gets the details of a specific node pool within a GKE cluster.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://container.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]

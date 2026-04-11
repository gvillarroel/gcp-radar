---
title: "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster_certificate_authority
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/apis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster_certificate_authority
  title: "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Reference
Send feedback
MCP Tools Reference: redis.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_cluster_certificate_authority
Get the certificate authority for a cluster in Memorystore for Redis Cluster.
The following sample demonstrate how to use curl to invoke the get_cluster_certificate_authority MCP tool.
Curl Request
curl --location 'https://redis.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_cluster_certificate_authority",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for GetClusterCertificateAuthority .
GetClusterCertificateAuthorityRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. Redis cluster certificate authority resource name using the form: projects/{project_id}/locations/{location_id}/clusters/{cluster_id}/certificateAuthority where location_id refers to a Google Cloud region.
Output Schema
Redis cluster certificate authority
CertificateAuthority
JSON representation
{
"name" : string ,
// Union field server_ca can be only one of the following:
"managedServerCa" : {
object ( ManagedCertificateAuthority )
}
// End of list of possible types for union field server_ca .
}
Fields
name
string
Identifier. Unique name of the resource in this scope including project, location and cluster using the form: projects/{project}/locations/{location}/clusters/{cluster}/certificateAuthority
Union field server_ca . server ca information server_ca can be only one of the following:
managedServerCa
object ( ManagedCertificateAuthority )
ManagedCertificateAuthority
JSON representation
{
"caCerts" : [
{
object ( CertChain )
}
]
}
Fields
caCerts[]
object ( CertChain )
The PEM encoded CA certificate chains for redis managed server authentication
CertChain
JSON representation
{
"certificates" : [
string
]
}
Fields
certificates[]
string
The certificates that form the CA chain, from leaf to root order.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]

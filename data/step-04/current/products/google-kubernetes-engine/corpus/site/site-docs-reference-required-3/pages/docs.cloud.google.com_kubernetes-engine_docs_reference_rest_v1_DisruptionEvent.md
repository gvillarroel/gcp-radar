---
title: "DisruptionEvent \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/DisruptionEvent
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-organization
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/DisruptionEvent
  title: "DisruptionEvent \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
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
DisruptionEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PdbBlockedPod
JSON representation
DisruptionEvent is a notification sent to customers about the disruption event of a resource.
JSON representation
{
"disruptionType" : enum ( DisruptionType ) ,
"pdbBlockedNode" : string ,
"pdbBlockedPod" : [
{
object ( PdbBlockedPod )
}
] ,
"pdbViolationTimeout" : string
}
Fields
disruptionType
enum ( DisruptionType )
The type of the disruption event.
pdbBlockedNode
string
The node whose drain is blocked by PDB. This field is set for both POD_PDB_VIOLATION and POD_NOT_ENOUGH_PDB event.
pdbBlockedPod[]
object ( PdbBlockedPod )
The pods whose evictions are blocked by PDB. This field is set for both POD_PDB_VIOLATION and POD_NOT_ENOUGH_PDB event.
pdbViolationTimeout
string ( Duration format)
The timeout in seconds for which the node drain is blocked by PDB. After this timeout, pods are forcefully evicted. This field is only populated when eventType is POD_PDB_VIOLATION.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
PdbBlockedPod
The namespace/name of the pod whose eviction is blocked by PDB.
JSON representation
{
"namespace" : string ,
"name" : string
}
Fields
namespace
string
The namespace of the pod.
name
string
The name of the pod.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],[]]

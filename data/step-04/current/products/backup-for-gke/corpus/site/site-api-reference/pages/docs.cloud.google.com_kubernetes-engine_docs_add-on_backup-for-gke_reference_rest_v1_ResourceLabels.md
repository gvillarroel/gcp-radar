---
title: "ResourceLabels \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/ResourceLabels
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/Policy
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/ResourceLabels
  title: "ResourceLabels \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Reference
Send feedback
ResourceLabels
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Label
JSON representation
A list of Kubernetes labels.
JSON representation
{
"resourceLabels" : [
{
object ( Label )
}
]
}
Fields
resourceLabels[]
object ( Label )
Optional. A list of Kubernetes label-value pairs.
Label
A single Kubernetes label-value pair.
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
Optional. The key/name of the label.
value
string
Optional. The value of the label.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]

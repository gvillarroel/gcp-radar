---
title: "TroubleshootingInfo \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/TroubleshootingInfo
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/Policy
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/TroubleshootingInfo
  title: "TroubleshootingInfo \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
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
TroubleshootingInfo
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Stores information about troubleshooting doc for debugging a particular state of an operation (eg - backup/restore). This will be used by the end user to debug their operation failure scenario easily.
JSON representation
{
"stateReasonCode" : string ,
"stateReasonUri" : string
}
Fields
stateReasonCode
string
Output only. Unique code for each backup/restore operation failure message which helps user identify the failure.
stateReasonUri
string
Output only. URL for the troubleshooting doc which will help the user fix the failing backup/restore operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]

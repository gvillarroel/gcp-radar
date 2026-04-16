---
title: "Method: projects.locations.fleetPackages.rollouts.abort \_|\_ Config Sync\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts/abort
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts/abort
  title: "Method: projects.locations.fleetPackages.rollouts.abort \_|\_ Config Sync\
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
Config Sync
Reference
Send feedback
Method: projects.locations.fleetPackages.rollouts.abort
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Abort a Rollout.
HTTP request
POST https://configdelivery.googleapis.com/v1alpha/{name=projects/*/locations/*/fleetPackages/*/rollouts/*}:abort
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of the Rollout.
Request body
The request body contains data with the following structure:
JSON representation
{
"reason" : string
}
Fields
reason
string
Optional. Reason for aborting.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]

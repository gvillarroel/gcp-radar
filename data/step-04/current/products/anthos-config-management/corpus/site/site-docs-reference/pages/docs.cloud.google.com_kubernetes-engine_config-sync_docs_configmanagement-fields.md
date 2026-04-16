---
title: "ConfigManagement fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/configmanagement-fields
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/configmanagement-fields
  title: "ConfigManagement fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
ConfigManagement fields
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the different fields that you can set in your
ConfigManagement object. You can use this object when you are configuring
Config Sync using kubectl commands.
Note: The gcloud CLI apply command uses a
different file format
than the ConfigManagement object. Caution: Don't change configuration values outside the spec field.
Configuration for Config Sync features
Key
Description
spec.enableMultiRepo
If true , enables the RootSync and RepoSync APIs. These APIs
provide you with additional Config Sync features , such as
syncing from multiple repositories.
and syncing Kustomize and Helm configurations .
Defaults to false .
spec.preventDrift
If true , enables the Config Sync admission webhook to
prevent drifts
by rejecting conflicting changes from being pushed to live
clusters. Defaults to false .
Config Sync always remediates drifts no matter the value of this field.
Configuration for behavior of the ConfigManagement object
Key
Description
spec.clusterName
The user-defined name for the cluster used by
ClusterSelectors to
group clusters together. Unique within an Config Sync
installation. You cannot configure this field in the Google Cloud console.
Example ConfigManagement object
apiVersion : configmanagement.gke.io/v1
kind : ConfigManagement
metadata :
name : config-management
spec :
clusterName : my-cluster
enableMultiRepo : true
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

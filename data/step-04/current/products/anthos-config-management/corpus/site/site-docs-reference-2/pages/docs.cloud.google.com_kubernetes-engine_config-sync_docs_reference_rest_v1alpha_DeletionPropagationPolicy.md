---
title: "DeletionPropagationPolicy \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/DeletionPropagationPolicy
  title: "DeletionPropagationPolicy \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
DeletionPropagationPolicy
Stay organized with collections
Save and categorize content based on your preferences.
Deletion Propagation Policy determines what happens to the underlying Kubernetes resources on a cluster when the FleetPackage managing those resources no longer targets the cluster or is deleted.
Enums
DELETION_PROPAGATION_POLICY_UNSPECIFIED
Unspecified deletion propagation policy. Defaults to FOREGROUND.
FOREGROUND
Foreground deletion propagation policy. Any resources synced to the cluster will be deleted.
ORPHAN
Orphan deletion propagation policy. Any resources synced to the cluster will be abandoned.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]

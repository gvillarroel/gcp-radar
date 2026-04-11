---
title: "Disable Hierarchy Controller \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller
  title: "Disable Hierarchy Controller \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Disable Hierarchy Controller
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to disable Hierarchy Controller so that you can
upgrade Config Sync.
Hierarchy Controller is no longer available and
Config Sync blocks upgrades if Hierarchy Controller is installed.
To determine how to disable Hierarchy Controller, inspect the
kubectl ConfigManagement object
or gcloud apply spec file
and take an action that corresponds to the value in the following fields:
hierarchyController.enablePodTreeLabels : if true , and you previously enabled
hierarchical observability,
don't proceed with the steps on this page. Instead, reach out to
Cloud Customer Care for help removing Hierarchy Controller.
hierarchyController.enabled: if true , follow the instructions on
this page to disable Hierarchy Controller.
When you disable Hierarchy Controller, it deletes the Hierarchy Controller
components in your cluster. It does not
delete the Hierarchy Controller Custom Resource Definitions (CRD). You
need to manually remove those CRDs using kubectl :
HierarchyConfiguration
HNCConfiguration
SubnamespaceAnchor
HierarchicalResourceQuota
To remove the Hierarchy Controller fields, review the instructions
for the method that you used to install Hierarchy Controller:
gcloud
Remove the hierarchyController block from your
Google Cloud CLI apply spec file .
Terraform
Remove the hierarchyController block from your
Terraform resource .
Config Connector
Set Hierarchy Controller fields to false in the
GKEHubFeatureMembership
resource.
Important: Don't remove the Hierarchy Controller fields from the GKEHubFeatureMembership resource.
Removing the fields doesn't disable Hierarchy Controller and causes
the fields to become externally-managed
instead of managed by Config Connector.
kubectl
Remove the hierarchyController block from the
ConfigManagement object .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

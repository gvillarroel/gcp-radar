---
title: "Attached clusters API access control \_|\_ GKE attached clusters \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/api-permissions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/api-permissions
  title: "Attached clusters API access control \_|\_ GKE attached clusters \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE attached clusters
Reference
Send feedback
Attached clusters API access control
Stay organized with collections
Save and categorize content based on your preferences.
To use the GKE attached clusters API, users must have specific Identity and Access Management
(IAM) permissions on their Google Cloud account for access
to GKE Multi-Cloud resources. GKE attached clusters includes two
predefined roles that bundle together two commonly-used sets of permissions:
gkemulticloud.viewer (for read-only access) and
gkemulticloud.admin (to grant administrative control).
The permissions in these roles are:
gkemulticloud.admin
gkemulticloud.*
resourcemanager.projects.get
resourcemanager.projects.list
gkemulticloud.viewer
gkemulticloud.attachedClusters.get
gkemulticloud.attachedClusters.list
gkemulticloud.attachedServerConfigs.get
gkemulticloud.attachedClusters.generateInstallManifest
gkemulticloud.awsClusters.generateAccessToken
gkemulticloud.awsClusters.get
gkemulticloud.awsClusters.list
gkemulticloud.awsNodePools.get
gkemulticloud.awsNodePools.list
gkemulticloud.awsServerConfigs.get
gkemulticloud.azureClients.get
gkemulticloud.azureClients.list
gkemulticloud.azureClusters.generateAccessToken
gkemulticloud.azureClusters.get
gkemulticloud.azureClusters.list
gkemulticloud.azureNodePools.get
gkemulticloud.azureNodePools.list
gkemulticloud.azureServerConfigs.get
gkemulticloud.operations.get
gkemulticloud.operations.list
gkemulticloud.operations.wait
resourcemanager.projects.get
resourcemanager.projects.list
To learn about granting and revoking these permissions, see
Manage access to projects, folders, and organizations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]

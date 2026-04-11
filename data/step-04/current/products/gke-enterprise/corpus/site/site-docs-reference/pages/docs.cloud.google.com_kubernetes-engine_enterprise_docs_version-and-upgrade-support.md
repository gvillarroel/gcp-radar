---
title: "Version and upgrade support \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support
  title: "Version and upgrade support \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
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
Send feedback
Version and upgrade support
Stay organized with collections
Save and categorize content based on your preferences.
This document shows which versions of Google Kubernetes Engine and
GKE-related products 1
are compatible with each other and
with each cluster type. This information is updated after
these products have been tested with the latest minor
version of each cluster type. To learn about the features available for
each cluster type, see
Deployment options .
To avoid compatibility issues and ensure support, we encourage
you to maintain your cluster environment with the product's latest major or
minor release.
What versions are recommended?
To ensure a proper upgrade path, recommended patch versions are proven against
our highest standard for production use. When available, upgrade to the
recommended patch version. Learn about the recommended patch versions in the
following table.
In addition to meeting rigorous qualification requirements, a patch release
must satisfy the following criteria for it to be designated as recommended:
It's not the initial (1.x. 0 ) patch release of a minor version.
It's been available for at least two weeks.
It's free of major defects.
Where do I find information for cluster types that don't have a recommended version?
For details on GKE recommended versions, see
Current versions .
Attached clusters supports the latest minor versions listed in the tables.
For details about recommended versions, see
Amazon EKS platform versions
and Supported Kubernetes versions in Azure Kubernetes Service (AKS) .
GKE
GKE on Google Cloud
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.33
-
1.33
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.32
-
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.31
-
1.31
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
Google Distributed Cloud
On bare metal
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.34
1.34.200-gke.68
1.34
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
1.33
1.33.600-gke.39
1.33
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
1.32
1.32.1000-gke.57
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
On VMware
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.34
1.34.200-gke.68
1.34
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
1.33
1.33.600-gke.40
1.33
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
1.32
1.32.1000-gke.57
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.28 1.27 1.26
GKE Multi-Cloud
Important: GKE on AWS and GKE on Azure are now in maintenance
mode. No new functionality will be added except as needed to fix bugs.
On AWS
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.32
-
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.31
1.31.6-gke.200
1.31
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.30
1.30.10-gke.200
1.30
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
On Azure
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.32
-
1.32
1.23 1.22 1.21
1.23 1.22 1.21
-
1.31
1.31.6-gke.200
1.31
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.30
1.30.10-gke.200
1.30
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
GKE attached clusters: Amazon Elastic Kubernetes Service (EKS)
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.32
-
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.31
-
1.31
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.30
-
1.30
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
GKE attached clusters: Azure Kubernetes Service (AKS)
Cluster Version
Recommended Patch
Kubernetes Version
Config Sync
Policy Controller
Cloud Service Mesh
1.32
-
1.32
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.31
-
1.31
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1.30
-
1.30
1.23 1.22 1.21
1.23 1.22 1.21
1.27 1.26 1.25
1 Connect, Cloud Logging, and
Cloud Monitoring are supported on all cluster types.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

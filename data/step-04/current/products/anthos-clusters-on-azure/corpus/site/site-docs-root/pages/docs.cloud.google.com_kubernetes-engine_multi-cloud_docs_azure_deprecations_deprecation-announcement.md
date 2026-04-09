---
title: "GKE on Azure deprecation announcement \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement
  title: "GKE on Azure deprecation announcement \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on Azure, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE on Azure
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
GKE on Azure deprecation announcement
GKE on Azure will no longer be supported on March 17, 2027.
What this means
Google will cease maintenance and contracted support for GKE on Azure
from March 17, 2027.
The following schedule lists the significant dates in this shutdown.
March 17, 2025 : Maintenance mode starts.
Google continues to fix bugs and resolve CVEs during this phase.
Google support contracts continue as before.
No new functionality will be added except as needed to fix bugs.
March 17, 2027 : Product no longer supported.
No further upgrades or bug fixes occur.
APIs will be disabled.
What you should do now
We recommend that you migrate to GKE or another Kubernetes
distribution before March 17, 2027. To continue using
Google Cloud features, you can use
GKE attached clusters .
To migrate from GKE on Azure to another Kubernetes distribution, keep
the following points in mind:
Deploy new Kubernetes clusters with the same configurations as your
GKE on Azure clusters. To ensure identical configurations across
your old and new clusters, you can use
Config Sync
or another GitOps solution.
Identify the workloads that you want to migrate to the new GKE on Azure cluster.
Deploy a single workload on your new cluster and update the DNS settings to
enable your old GKE on Azure cluster to point to the same workload on
the new cluster.
Test the new workload.
Repeat the preceding two steps for all the workloads that you want to deploy on the
cluster.
After all workloads are migrated and tested, delete your GKE on Azure clusters .
Contact Cloud Customer Care
Your account's lead customer engineer is your best contact point for deprecation
support. Alternatively, you can file a support case
through Google Cloud console or contact Cloud Customer Care .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]

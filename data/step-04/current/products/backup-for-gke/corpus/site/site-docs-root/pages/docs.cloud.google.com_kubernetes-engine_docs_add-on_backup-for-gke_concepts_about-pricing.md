---
title: "Backup for GKE pricing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/about-pricing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/about-pricing
  title: "Backup for GKE pricing \_|\_ Google Cloud Documentation"
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
Resources
Send feedback
Backup for GKE pricing
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Note: Starting March 2nd, 2026, Backup for GKE will transition to a namespace-based pricing model for simpler, more predictable billing. Learn more about the transition.
Backup for GKE pricing is based on three different dimensions:
Backup management : this dimension is calculated at the BackupPlan
level and is based on the number of non-system namespaces that are protected by the BackupPlan
(the number of non-system namespaces contained in the most recent Backup for that plan).
Backup storage : this dimension is calculated at the Backup level and is
based on the number of bytes stored for each Backup over time.
Network egress : this dimension is calculated at the Backup level and is
based on the number of bytes that's transferred across regions during the
backup operation. Note that these charges apply only when the source cluster
and the BackupPlan are in two separate regions.
Pricing details may be found on the GKE pricing page .
Pricing for cross-project backups and restores
For any cross-project backup and restore scenarios, three projects are
potentially involved:
cluster_project : the project that contains the cluster that you
want to back up.
backup_project : the project where you want your backups to be
stored.
restore_project : the project that contains the restore's
target cluster.
All three dimensions are billed in the backup_project under the
Backup for GKE line item.
Network data transfer charges
Similar to single-project backup and restore operations, network data transfer
charges apply for cross-region backup and restore operations. Additionally,
there are network data transfer changes for Config backup during
backup operations, between backup regions, and between restore regions when
restoring a volume. These charges are listed under Compute Engine.
Adjust future billing
To stop any future billing for Backup for GKE, delete any existing Backup
resources and then delete or disable any BackupPlans .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

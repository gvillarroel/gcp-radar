---
title: "Quotas and limits \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/quotas-and-limits
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/quotas-and-limits
  title: "Quotas and limits \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
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
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
Standard
Backup for GKE is subject to
GKE scalability limitations
and cluster limits . In addition, the following
limitations apply to the GA version of the Backup for GKE agent on
GKE clusters running version 1.24 or higher.
Known scalability limits
Kubernetes resource limits per backup or restore operation
The Backup for GKE limits per backup or restore operation are:
20,000 resources per GroupKind, per namespace, for namespaced resources.
20,000 resources per GroupKind for non-namespaced resources.
PersistentVolumeClaim (PVC) limits per backup or restore operation
The known Backup for GKE limit for PVCs that are backed by Compute Engine
persistent disk is 1,000 per backup or restore operation.
This limit applies to Backup resources with the include_volume set and
Restore resources with the restore_volume_data_from_backup policy.
Fine-grained restore filter condition limits per restore operation
The maximum combined number of filter conditions for inclusion and exclusion filters is 50 .
Quotas
VolumeBackup resources
These limits apply to VolumeBackup resources for Compute Engine persistent
disk volume only. Since the service change on January 9th, 2023, the quota is
computed in the following way:
For BackupPlan resources created after January 9th, 2023,
Backup for GKE allows a total of 180,000 VolumeBackup resources
per region per project . This quota applies to the sum of all active
(non-deleted) VolumeBackup resources in the project at a given point of
time, independent of which BackupPlan or Backup produced those VolumeBackups .
For BackupPlan resources created prior to January 9th, 2023,
Backup for GKE allows a total 180,000 VolumeBackup resources per
project . This quota applies to the sum of all active (non-deleted)
VolumeBackup resources in the project at a given point of time,
independent of which BackupPlan or Backup produced those VolumeBackups
.
If higher limits are required, contact Cloud Customer Care to request more
resources. If the requested limits are exceeded, the backup fails with a
Quota 'SNAPSHOTS' exceeded message.
API requests
The rate limit quota for the
Backup for GKE API
is 1,200 requests per minute per project.
Note: To request an increase to your quotas, contact the Google Cloud support
team.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

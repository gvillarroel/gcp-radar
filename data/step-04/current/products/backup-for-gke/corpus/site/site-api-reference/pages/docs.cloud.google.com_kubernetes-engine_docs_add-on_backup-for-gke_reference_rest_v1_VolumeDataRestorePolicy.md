---
title: "VolumeDataRestorePolicy \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/Policy
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy
  title: "VolumeDataRestorePolicy \_|\_ Backup for GKE \_|\_ Google Cloud Documentation"
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
VolumeDataRestorePolicy
Stay organized with collections
Save and categorize content based on your preferences.
Defines how volume data should be restored.
Enums
VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED
Unspecified (illegal).
RESTORE_VOLUME_DATA_FROM_BACKUP
For each PVC to be restored, create a new underlying volume and PV from the corresponding VolumeBackup contained within the Backup.
REUSE_VOLUME_HANDLE_FROM_BACKUP
For each PVC to be restored, attempt to reuse the original PV contained in the Backup (with its original underlying volume). This option is likely only usable when restoring a workload to its original cluster.
NO_VOLUME_DATA_RESTORATION
For each PVC to be restored, create PVC without any particular action to restore data. In this case, the normal Kubernetes provisioning logic would kick in, and this would likely result in either dynamically provisioning blank PVs or binding to statically provisioned PVs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],[]]

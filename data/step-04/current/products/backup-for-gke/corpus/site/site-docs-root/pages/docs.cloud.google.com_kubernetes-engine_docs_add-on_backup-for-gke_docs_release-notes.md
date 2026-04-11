---
title: "Backup for GKE release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes
  title: "Backup for GKE release notes \_|\_ Google Cloud Documentation"
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
Backup for GKE release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Backup for GKE. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
September 16, 2025
Feature
Backup for GKE now supports restoring disks in pre-existing Storage Pools for Hyperdisk Balanced and Hyperdisk Throughput volumes. This feature is available in clusters running the following GKE versions:
1.33: Versions 1.33.4-gke.1245000 and later
1.34 and later: All versions from 1.34.0-gke.1532000 onwards
August 20, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Backup for GKE resources. For more information, see Manage Backup for GKE resources using custom constraints . This feature is generally available ( GA ).
July 01, 2025
Announcement
Backup for GKE now supports backing up and restoring Hyperdisk ML and Hyperdisk Balanced High Availability volumes. This feature is available for GKE clusters running version 1.33.1-gke.1959000 and later.
May 22, 2025
Change
Backup for GKE is now available in two new regions: europe-north2 and northamerica-south1
November 15, 2024
Announcement
Backup for GKE now supports backing up and restoring Hyperdisk throughput, extreme, and balanced types volumes.
July 29, 2024
Feature
Backup for GKE now offers committed use discounts (CUDs) that provide 20% discount (one year term) and 45% discount (3 year term) on backup management fee in exchange for your commitment. For more information, see Backup for GKE Committed use discounts .
June 27, 2024
Feature
Backup for GKE now supports creating a backup plan when creating a cluster.
June 03, 2024
Feature
Backup for GKE now supports specifying the restore order when you create or update a restore plan. For more information, see Specify resource restore ordering during restoration .
Feature
Backup for GKE now allows configuration of volume data restore policies bound to specific volume types and overridden for specific volumes. This gives you more flexibility when restoring volumes. For more information, see Define volume data restore behavior .
Feature
Starting June 24, 2024, Backup for GKE will gradually roll out the Backup-Side Restore Validation feature to help ensure that backups are restorable. This change applies to backups under backup plans created from June 24, 2024 onwards. For more information, see Enable permissive mode on a backup plan .
Feature
Backup for GKE introduces new policies for handling namespaced resources conflict during restoration that are compatible with GitOps tools. For more information, see Handle resource conflicts during restore .
Feature
Backup for GKE now provides enhanced granularity in resource selection during the restore creation process. For more information, see Enable fine-grained restore .
April 22, 2024
Feature
Backup index is now available for viewing the resource information in backups. See details on view backup index .
Feature
Backup for GKE now supports Smart Scheduling, an alternative backup creation scheduling approach based on desired RPO instead of a fixed schedule. This approach is in addition to the existing cron scheduling approach. For more information, see Automatic backup creation and deletion .
March 05, 2024
Change
Backup for GKE is now available in three new regions: africa-south1, europe-west10, and us-west8.
October 31, 2023
Feature
Terraform now supports managing Backup for GKE RestorePlan resources. For more information, see google_gke_backup_restore_plan .
Feature
Backup for GKE now supports transformation rules that allow for the modification of resources during restore. This is an improvement over the existing substitution rules. For more information, see Modify resources during restoration .
July 21, 2023
Change
Backup for GKE is now available in five new regions: europe-west12, me-west1, me-central1, us-south1, and us-east5.
July 11, 2023
Feature
Backup for GKE now supports a blocklist for restoring cluster-scoped and namespaced resources. For more information, see Create a restore plan .
Feature
When you create your first BackupPlan or RestorePlan resource for a cluster, the Backup for GKE agent is automatically installed in that cluster.
November 16, 2022
Announcement
Backup for GKE is now generally available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.531Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Committed use discounts for Backup for GKE"
feature_slug: "committed-use-discounts-for-backup-for-gke"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "committed"
  - "discounts"
  - "offers"
  - "use"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Committed use discounts for Backup for GKE

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now offers committed use discounts for backup management fees, with 20% savings for one year and 45% for three years.

## Extended Definition

Backup for GKE now offers committed use discounts for backup management fees, with 20% savings for one year and 45% for three years.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### Backup for GKE release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 29, 2024 Feature Backup for GKE now offers committed use discounts (CUDs) that provide 20% discount (one year term) and 45% discount (3 year term) on backup management fee in exchange for your commitment.
- For more information, see Backup for GKE Committed use discounts .
- This feature is available in clusters running the following GKE versions: 1.33: Versions 1.33.4-gke.1245000 and later 1.34 and later: All versions from 1.34.0-gke.1532000 onwards August 20, 2025 Feature You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Backup for GKE resources.
- May 22, 2025 Change Backup for GKE is now available in two new regions: europe-north2 and northamerica-south1 November 15, 2024 Announcement Backup for GKE now supports backing up and restoring Hyperdisk throughput, extreme, and balanced types volumes.

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Automatic pause : Backup for GKE can automatically pause a backup plan in the following scenarios: When initiating a backup (scheduled or manual), if any of the following errors occur: StatusInvalidCluster : The StatusInvalidCluster error indicates an unrecoverable condition where the cluster name is invalid or metadata information of the cluster is unavailable.
- Autopilot Standard This page describes how to create a Backup for GKE backup plan, which is used for backing up your workloads in Google Kubernetes Engine (GKE).
- Backups are retained for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-namespaces = my-ns \ --include-secrets \ --include-volume-data \ --cron-schedule = "15 " \ --backup-retain-days = 3 Create a backup plan for a selected ProtectedApplication The following command creates a backup plan to select the ProtectedApplication ( my-ns/my-app ). gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-applications = my-ns1/my-app1,my-ns2/my-app2 \ --include-secrets \ --include-volume-data Note: To use this scope for a backup, you must first create ProtectedApplications in the cluster.
- For instructions, see Set up alerts for paused backup plans . gcloud To pause a backup schedule, run the following command: gcloud beta container backup-restore backup-plans update BACKUP PLAN \ --project = PROJECT ID \ --location = LOCATION \ --paused For the full list of options, refer to the gcloud beta container backup-restore backup-plans update documentation.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- However, Backup for GKE can be used to provide solutions for workloads that are backed by Filestore volumes.
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Backup for GKE Stay organized with collections Save and categorize content based on your preferences.
- The following diagram shows the relationship between the different Backup for GKE components: Service overview The Backup for GKE service provides an API endpoint for clients to interact with.


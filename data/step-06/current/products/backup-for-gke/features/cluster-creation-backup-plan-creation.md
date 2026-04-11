---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.532Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Cluster-creation backup plan creation"
feature_slug: "cluster-creation-backup-plan-creation"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "creation"
  - "plan"
  - "cluster"
  - "supports"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Cluster-creation backup plan creation

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports creating a backup plan during cluster creation.

## Extended Definition

Backup for GKE now supports creating a backup plan during cluster creation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 1440 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with 2 hours RPO and multiple exclusion windows Create a window.yaml file, containing a YAML array of exclusionWindows : one weekly window and one single occurrence window. exclusionWindows : - startTime : hours : 15 minutes : 0 duration : "5400s" daysOfWeek : daysOfWeek : - MONDAY - FRIDAY - startTime : hours : 1 minutes : 0 duration : "3600s" singleOccurrenceDate : day : 1 month : 3 year : 2024 The following command creates a backup plan for all namespaces with 2 hours target RPO and no backups allowed from 1 AM to 2 AM on March 1, 2024 and 3 PM to 4:30 PM every Monday and Friday.
- Backups are retained for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-namespaces = my-ns \ --include-secrets \ --include-volume-data \ --cron-schedule = "15 " \ --backup-retain-days = 3 Create a backup plan for a selected ProtectedApplication The following command creates a backup plan to select the ProtectedApplication ( my-ns/my-app ). gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-applications = my-ns1/my-app1,my-ns2/my-app2 \ --include-secrets \ --include-volume-data Note: To use this scope for a backup, you must first create ProtectedApplications in the cluster.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 120 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with a daily cron schedule The following command creates a backup plan to schedule daily backup for all namespaces at 5:20 AM every day.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --cron-schedule = "20 5 " \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for a selected namespace with an hourly cron schedule The following command creates a backup plan to schedule hourly backup for the selected namespace ( my-ns ) at minute 15 every hour.

### Backup for GKE release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- June 27, 2024 Feature Backup for GKE now supports creating a backup plan when creating a cluster.
- Feature Backup for GKE now supports Smart Scheduling, an alternative backup creation scheduling approach based on desired RPO instead of a fixed schedule.
- June 03, 2024 Feature Backup for GKE now supports specifying the restore order when you create or update a restore plan.
- July 11, 2023 Feature Backup for GKE now supports a blocklist for restoring cluster-scoped and namespaced resources.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- You can also create backup plans for a GKE cluster in the same project as the cluster.
- Backup for GKE supports backing up or restoring a cluster across projects.
- This resource contains a restore configuration including the target cluster in which you want to restore the backup, the source backup plan, the scope of the restore, conflict handling, and transformation rules.


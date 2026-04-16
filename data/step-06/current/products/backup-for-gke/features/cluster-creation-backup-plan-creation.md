---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.549Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Cluster-creation backup plan creation"
feature_slug: "cluster-creation-backup-plan-creation"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
keywords:
  - "creation"
  - "plan"
  - "creating"
  - "cluster"
  - "supports"
---

# Cluster-creation backup plan creation

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now supports creating a backup plan during cluster creation.

## Extended Definition

Backup for GKE now supports creating a backup plan during cluster creation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 1440 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with 2 hours RPO and multiple exclusion windows Create a window.yaml file, containing a YAML array of exclusionWindows : one weekly window and one single occurrence window. exclusionWindows : - startTime : hours : 15 minutes : 0 duration : "5400s" daysOfWeek : daysOfWeek : - MONDAY - FRIDAY - startTime : hours : 1 minutes : 0 duration : "3600s" singleOccurrenceDate : day : 1 month : 3 year : 2024 The following command creates a backup plan for all namespaces with 2 hours target RPO and no backups allowed from 1 AM to 2 AM on March 1, 2024 and 3 PM to 4:30 PM every Monday and Friday.
- Backups are retained for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-namespaces = my-ns \ --include-secrets \ --include-volume-data \ --cron-schedule = "15 " \ --backup-retain-days = 3 Create a backup plan for a selected ProtectedApplication The following command creates a backup plan to select the ProtectedApplication ( my-ns/my-app ). gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-applications = my-ns1/my-app1,my-ns2/my-app2 \ --include-secrets \ --include-volume-data Note: To use this scope for a backup, you must first create ProtectedApplications in the cluster.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 120 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with a daily cron schedule The following command creates a backup plan to schedule daily backup for all namespaces at 5:20 AM every day.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --cron-schedule = "20 5 " \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for a selected namespace with an hourly cron schedule The following command creates a backup plan to schedule hourly backup for the selected namespace ( my-ns ) at minute 15 every hour.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before creating a restore plan, you must create the target cluster.
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- This resource contains a restore configuration including the target cluster in which you want to restore the backup, the source backup plan, the scope of the restore, conflict handling, and transformation rules.
- This resource contains a backup configuration including the source cluster, the selection of which workloads to back up, and the region in which Backup artifacts produced under this plan are stored.

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Note: This will automatically install the Backup for GKE agent in the specified cluster. gcloud To create a restore plan, run the following command: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --project = PROJECT ID \ --location = RESTORE LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = NAMESPACED RESOURCE RESTORE MODE \ --all-namespaces \ --cluster-resource-conflict-policy = CLUSTER RESOURCE CONFLICT POLICY \ --cluster-resource-scope-selected-group-kinds = CLUSTER RESOURCE SCOPE \ --volume-data-restore-policy = VOLUME DATA RESTORE POLICY Replace the following: RESTORE PLAN : the name of the restore plan that you want to create.
- In the Name your plan and choose a cluster section, complete the following and click Next : Enter the restore plan name and optional description.
- Choose a backup plan for an existing cluster that corresponds to the backups that you want to restore.


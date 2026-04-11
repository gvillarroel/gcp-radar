---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.536Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Smart Scheduling for automatic backups"
feature_slug: "smart-scheduling-for-automatic-backups"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
keywords:
  - "scheduling"
  - "smart"
  - "automatic"
  - "backups"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Smart Scheduling for automatic backups

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports Smart Scheduling, an RPO-based backup scheduling model in addition to cron scheduling.

## Extended Definition

Backup for GKE now supports Smart Scheduling, an RPO-based backup scheduling model in addition to cron scheduling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create a backup plan with a backup scheduling method to automatically create backups: smart scheduling or cron scheduling.
- Smart scheduling uses this value to automatically create backups.
- Automatic pause : Backup for GKE can automatically pause a backup plan in the following scenarios: When initiating a backup (scheduled or manual), if any of the following errors occur: StatusInvalidCluster : The StatusInvalidCluster error indicates an unrecoverable condition where the cluster name is invalid or metadata information of the cluster is unavailable.
- If this value is set, then backups created for that plan cannot be deleted (either automatically or manually) until that lifetime expires.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- Backup for GKE also includes two configuration and control resource types: BackupPlan : a parent resource for Backup resources that represent a chain of backups.
- For backups stored in a region different from the region of the GKE cluster, outbound network data transfer charges apply.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Backup for GKE Stay organized with collections Save and categorize content based on your preferences.

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- If ProtectedApplication resources are not present, Backup for GKE creates volume backups for all volumes within the scope of a backup and the resulting volume backups will be crash consistent - all writes flushed to the disk at a particular point in time will be captured (i.e., no partial writes).
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet with dedicated PersistentVolumeClaims for both primary and secondary StatefulSets, shows a DumpAndLoad strategy: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb-dump resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : DumpAndLoad dumpAndLoad : loadTarget : mariadb-primary dumpTarget : mariadb-secondary dumpHooks : - name : db dump container : mariadb command : - bash - "-c" - mysqldump -u root --all-databases > /backup/mysql backup.dump loadHooks : - name : db load container : mariadb command : - bash - "-c" - mysql -u root < /backup/mysql backup.sql volumeSelector : matchLabels : gkebackup.gke.io/backup : dedicated-volume Check if a ProtectedApplication is ready for backup You can check whether a ProtectedApplication is ready for a backup by running the following command: kubectl describe protectedapplication APPLICATION NAME Replace APPLICATION NAME with the name of your application.
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.


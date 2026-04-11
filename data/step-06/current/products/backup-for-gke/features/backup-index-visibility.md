---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.535Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Backup index visibility"
feature_slug: "backup-index-visibility"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "visibility"
  - "index"
  - "provides"
  - "to"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Backup index visibility

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now provides a backup index to view resource information within backups.

## Extended Definition

Backup for GKE now provides a backup index to view resource information within backups.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard When you enable the Backup for GKE agent in your Google Kubernetes Engine cluster, Backup for GKE provides a CustomResourceDefinition that introduces a new kind of Kubernetes resource: the ProtectedApplication .
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet with dedicated PersistentVolumeClaims for both primary and secondary StatefulSets, shows a DumpAndLoad strategy: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb-dump resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : DumpAndLoad dumpAndLoad : loadTarget : mariadb-primary dumpTarget : mariadb-secondary dumpHooks : - name : db dump container : mariadb command : - bash - "-c" - mysqldump -u root --all-databases > /backup/mysql backup.dump loadHooks : - name : db load container : mariadb command : - bash - "-c" - mysql -u root < /backup/mysql backup.sql volumeSelector : matchLabels : gkebackup.gke.io/backup : dedicated-volume Check if a ProtectedApplication is ready for backup You can check whether a ProtectedApplication is ready for a backup by running the following command: kubectl describe protectedapplication APPLICATION NAME Replace APPLICATION NAME with the name of your application.
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.

### Back up your workloads \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create and manage a backup, ask your administrator to grant you the Backup for GKE Backup Admin ( roles/gkebackup.backupAdmin ), which is a subset of Backup for GKE Admin ( roles/gkebackup.admin ) IAM role on your project.
- Autopilot Standard This page describes how to create a backup of your workloads in Google Kubernetes Engine (GKE) using the Backup for GKE service.
- For the full list of options, refer to the gcloud beta container backup-restore backups get-backup-index-download-url documentation.
- View backup index The backup index provides information about the resources that are included in a backup.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following diagram shows the relationship between the different Backup for GKE components: Service overview The Backup for GKE service provides an API endpoint for clients to interact with.
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- Backup for GKE manages a database of these application-specific resources and the service API methods mostly correspond to create, read, update, or delete operations against these resources.
- Agent overview The Backup for GKE agent is deployed and runs in each GKE cluster that you configure to be backed up by the Backup for GKE service.


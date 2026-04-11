---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.539Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Restore resource blocklist"
feature_slug: "restore-resource-blocklist"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "blocklist"
  - "resource"
  - "supports"
  - "restore"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Restore resource blocklist

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports a blocklist for excluding cluster-scoped and namespaced resources during restore operations.

## Extended Definition

Backup for GKE now supports a blocklist for excluding cluster-scoped and namespaced resources during restore operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### Backup for GKE release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Backup for GKE now supports transformation rules that allow for the modification of resources during restore.
- July 11, 2023 Feature Backup for GKE now supports a blocklist for restoring cluster-scoped and namespaced resources.
- October 31, 2023 Feature Terraform now supports managing Backup for GKE RestorePlan resources.
- June 03, 2024 Feature Backup for GKE now supports specifying the restore order when you create or update a restore plan.

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet with dedicated PersistentVolumeClaims for both primary and secondary StatefulSets, shows a DumpAndLoad strategy: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb-dump resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : DumpAndLoad dumpAndLoad : loadTarget : mariadb-primary dumpTarget : mariadb-secondary dumpHooks : - name : db dump container : mariadb command : - bash - "-c" - mysqldump -u root --all-databases > /backup/mysql backup.dump loadHooks : - name : db load container : mariadb command : - bash - "-c" - mysql -u root < /backup/mysql backup.sql volumeSelector : matchLabels : gkebackup.gke.io/backup : dedicated-volume Check if a ProtectedApplication is ready for backup You can check whether a ProtectedApplication is ready for a backup by running the following command: kubectl describe protectedapplication APPLICATION NAME Replace APPLICATION NAME with the name of your application.
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- These ProtectedApplication resources are unique to Backup for GKE and provide more fine-grained options for defining backup and restore scope.
- Architecture Backup for GKE consists of two main components: A service that runs in Google Cloud and supports a resource-based REST API.
- This resource contains a restore configuration including the target cluster in which you want to restore the backup, the source backup plan, the scope of the restore, conflict handling, and transformation rules.


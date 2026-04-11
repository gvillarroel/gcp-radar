---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.534Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Fine-grained resource selection in restore creation"
feature_slug: "fine-grained-resource-selection-in-restore-creation"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
keywords:
  - "selection"
  - "grained"
  - "fine"
  - "creation"
  - "resource"
  - "restore"
  - "in"
  - "backup"
---

# Fine-grained resource selection in restore creation

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now provides more granular resource selection when creating restores.

## Extended Definition

Backup for GKE now provides more granular resource selection when creating restores.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)

## Supporting Pages

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ProtectedApplication resources provide you with these capabilities when customizing backup and restore logic at the application level: More fine-grained backup and restore operations.
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 1440 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with 2 hours RPO and multiple exclusion windows Create a window.yaml file, containing a YAML array of exclusionWindows : one weekly window and one single occurrence window. exclusionWindows : - startTime : hours : 15 minutes : 0 duration : "5400s" daysOfWeek : daysOfWeek : - MONDAY - FRIDAY - startTime : hours : 1 minutes : 0 duration : "3600s" singleOccurrenceDate : day : 1 month : 3 year : 2024 The following command creates a backup plan for all namespaces with 2 hours target RPO and no backups allowed from 1 AM to 2 AM on March 1, 2024 and 3 PM to 4:30 PM every Monday and Friday.
- Backups are retained for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-namespaces = my-ns \ --include-secrets \ --include-volume-data \ --cron-schedule = "15 " \ --backup-retain-days = 3 Create a backup plan for a selected ProtectedApplication The following command creates a backup plan to select the ProtectedApplication ( my-ns/my-app ). gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-applications = my-ns1/my-app1,my-ns2/my-app2 \ --include-secrets \ --include-volume-data Note: To use this scope for a backup, you must first create ProtectedApplications in the cluster.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 120 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with a daily cron schedule The following command creates a backup plan to schedule daily backup for all namespaces at 5:20 AM every day.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --cron-schedule = "20 5 " \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for a selected namespace with an hourly cron schedule The following command creates a backup plan to schedule hourly backup for the selected namespace ( my-ns ) at minute 15 every hour.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - Node - ComponentStatus - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode - storage.k8s.io/VolumeAttachment Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume JSON representation { "selectedGroupKinds" : [ { object ( GroupKind ) } ] , "excludedGroupKinds" : [ { object ( GroupKind ) } ] , "allGroupKinds" : boolean , "noGroupKinds" : boolean } Fields selectedGroupKinds[] object ( GroupKind ) Optional.
- DELETE AND RESTORE When conflicting top-level resources (either Namespaces or ProtectedApplications, depending upon the scope) are encountered, this will first trigger a delete of the conflicting resource AND ALL OF ITS REFERENCED RESOURCES (e.g., all resources in the Namespace or all resources referenced by the ProtectedApplication) before restoring the resources from the Backup.
- Enums VOLUME TYPE UNSPECIFIED Default GCE PERSISTENT DISK Compute Engine Persistent Disk volume RestoreOrder Allows customers to specify dependencies between resources that Backup for GKE can use to compute a resasonable restore order.
- To replace an existing resource, the first attempt is to update the resource to match the one from the backup; if the update fails, the second attempt is to delete the resource and restore it from the backup.


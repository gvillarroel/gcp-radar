---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.551Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Fine-grained resource selection in restore creation"
feature_slug: "fine-grained-resource-selection-in-restore-creation"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
keywords:
  - "selection"
  - "grained"
  - "fine"
  - "creation"
  - "resource"
  - "restore"
---

# Fine-grained resource selection in restore creation

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now provides more granular resource selection when creating restores.

## Extended Definition

Backup for GKE now provides more granular resource selection when creating restores.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)

## Supporting Pages

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ProtectedApplication resources provide you with these capabilities when customizing backup and restore logic at the application level: More fine-grained backup and restore operations.
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .

### Backup for GKE API Version v1: Error Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- UNSUPPORTED MODE FOR RESTORE FILTER 400 Fine-grained filtering is supported only with the following namespaced resource restore modes: MERGE SKIP ON CONFLICT, MERGE REPLACE VOLUME ON CONFLICT, or MERGE REPLACE ON CONFLICT.
- UNSUPPORTED RESOURCE FOR RESTORE 400 Cannot select provided resource: {resource name} for restore - {reason} INVALID NAMESPACED RESOURCE RESTORE SCOPE 400 Invalid Namespaced resource restore scope in this request.
- MISSING NAMESPACED RESOURCE RESTORE MODE 400 Restore plans with namespaced resources selected to restore must also set namespaced resource restore mode.
- MISSING CLUSTER RESOURCE CONFLICT POLICY 400 Restore plans with cluster resource scope set must also set cluster resource conflict policy.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - Node - ComponentStatus - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode - storage.k8s.io/VolumeAttachment Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume JSON representation { "selectedGroupKinds" : [ { object ( GroupKind ) } ] , "excludedGroupKinds" : [ { object ( GroupKind ) } ] , "allGroupKinds" : boolean , "noGroupKinds" : boolean } Fields selectedGroupKinds[] object ( GroupKind ) Optional.
- NamespacedResourceRestoreMode Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.
- ClusterResourceConflictPolicy Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.
- Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.


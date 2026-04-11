---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.537Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Restore transformation rules"
feature_slug: "restore-transformation-rules"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
keywords:
  - "transformation"
  - "rules"
  - "supports"
  - "restore"
  - "backup"
  - "now"
  - "for"
  - "gke"
---

# Restore transformation rules

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports transformation rules that modify resources during restore operations.

## Extended Definition

Backup for GKE now supports transformation rules that modify resources during restore operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)

## Supporting Pages

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- Enums VOLUME TYPE UNSPECIFIED Default GCE PERSISTENT DISK Compute Engine Persistent Disk volume RestoreOrder Allows customers to specify dependencies between resources that Backup for GKE can use to compute a resasonable restore order.
- Contains a list of group kind dependency pairs provided by the customer, that is used by Backup for GKE to generate a group kind restore order.
- A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup.

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- Execution hooks A hook is a shell command that Backup for GKE executes in a container at particular phase of the backup or restore process.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet with dedicated PersistentVolumeClaims for both primary and secondary StatefulSets, shows a DumpAndLoad strategy: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb-dump resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : DumpAndLoad dumpAndLoad : loadTarget : mariadb-primary dumpTarget : mariadb-secondary dumpHooks : - name : db dump container : mariadb command : - bash - "-c" - mysqldump -u root --all-databases > /backup/mysql backup.dump loadHooks : - name : db load container : mariadb command : - bash - "-c" - mysql -u root < /backup/mysql backup.sql volumeSelector : matchLabels : gkebackup.gke.io/backup : dedicated-volume Check if a ProtectedApplication is ready for backup You can check whether a ProtectedApplication is ready for a backup by running the following command: kubectl describe protectedapplication APPLICATION NAME Replace APPLICATION NAME with the name of your application.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This resource contains a restore configuration including the target cluster in which you want to restore the backup, the source backup plan, the scope of the restore, conflict handling, and transformation rules.
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- These ProtectedApplication resources are unique to Backup for GKE and provide more fine-grained options for defining backup and restore scope.
- A GKE add-on (the Backup for GKE agent) that must be enabled in each cluster for which you wish to perform backup and restore operations.


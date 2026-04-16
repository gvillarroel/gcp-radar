---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.555Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Restore resource blocklist"
feature_slug: "restore-resource-blocklist"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
keywords:
  - "blocklist"
  - "excluding"
  - "resource"
  - "supports"
  - "restore"
---

# Restore resource blocklist

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now supports a blocklist for excluding cluster-scoped and namespaced resources during restore operations.

## Extended Definition

Backup for GKE now supports a blocklist for excluding cluster-scoped and namespaced resources during restore operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)

## Supporting Pages

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .
- Then, you include a volumeSelector clause in your component definition as follows: spec : ... components : ... strategy : ... volumeSelector : matchLabels : label name : label value If you supply a volumeSelector for a component, then only the volumes whose PersistentVolumeClaim resources have the given label are backed up and restored.

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Note: This will automatically install the Backup for GKE agent in the specified cluster. gcloud To create a restore plan, run the following command: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --project = PROJECT ID \ --location = RESTORE LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = NAMESPACED RESOURCE RESTORE MODE \ --all-namespaces \ --cluster-resource-conflict-policy = CLUSTER RESOURCE CONFLICT POLICY \ --cluster-resource-scope-selected-group-kinds = CLUSTER RESOURCE SCOPE \ --volume-data-restore-policy = VOLUME DATA RESTORE POLICY Replace the following: RESTORE PLAN : the name of the restore plan that you want to create.
- Use one of these options: merge-skip-on-conflict : skip the individual conflicting resources. merge-replace-volume-on-conflict : skip the individual conflicting resources but replace the underlying persistent volume data. merge-replace-on-conflict : replace the individual conflicting resources and underlying persistent volume data. delete-and-restore : When the target cluster contains the same group of resources that are targeted for restore to the cluster, the existing group of resources is deleted before the new resources are restored. fail-on-conflict : If any groups of resources targeted for restore from a backup already exist in the target cluster, the restore will fail. --all-namespaces : restores all namespaced resources in the backup.
- Alternatively, specify: --excluded-namespaces with a list of namespaces as NAMESPACE1 , NAMESPACE2 ,... to restore all namespaces except the ones in the list. --selected-applications with a list of ProtectedApplications as NAMESPACE1/APP1 , NAMESPACE2/APP2 ,... to restore. --selected-namespaces with a list of namespaces as NAMESPACE1 , NAMESPACE2 ,... to restore. --no-namespaces restores no namespaced resources in the backup.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - Node - ComponentStatus - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode - storage.k8s.io/VolumeAttachment Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume JSON representation { "selectedGroupKinds" : [ { object ( GroupKind ) } ] , "excludedGroupKinds" : [ { object ( GroupKind ) } ] , "allGroupKinds" : boolean , "noGroupKinds" : boolean } Fields selectedGroupKinds[] object ( GroupKind ) Optional.
- JSON representation ClusterResourceConflictPolicy NamespacedResourceRestoreMode ClusterResourceRestoreScope JSON representation SubstitutionRule JSON representation TransformationRule JSON representation TransformationRuleAction JSON representation Op ResourceFilter JSON representation VolumeDataRestorePolicyBinding JSON representation VolumeType RestoreOrder JSON representation GroupKindDependency JSON representation Configuration of a restore.
- DELETE AND RESTORE When conflicting top-level resources (either Namespaces or ProtectedApplications, depending upon the scope) are encountered, this will first trigger a delete of the conflicting resource AND ALL OF ITS REFERENCED RESOURCES (e.g., all resources in the Namespace or all resources referenced by the ProtectedApplication) before restoring the resources from the Backup.


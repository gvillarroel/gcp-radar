---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.535Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Volume-type-specific data restore policy configuration"
feature_slug: "volume-type-specific-data-restore-policy-configuration"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy"
keywords:
  - "configuration"
  - "volume"
  - "type"
  - "specific"
  - "policy"
  - "restore"
  - "backup"
  - "for"
---

# Volume-type-specific data restore policy configuration

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE allows configuring volume data restore policies by volume type, with overrides for specific volumes.

## Extended Definition

Backup for GKE allows configuring volume data restore policies by volume type, with overrides for specific volumes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy)

## Supporting Pages

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Note: This will automatically install the Backup for GKE agent in the specified cluster. gcloud To create a restore plan, run the following command: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --project = PROJECT ID \ --location = RESTORE LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = NAMESPACED RESOURCE RESTORE MODE \ --all-namespaces \ --cluster-resource-conflict-policy = CLUSTER RESOURCE CONFLICT POLICY \ --cluster-resource-scope-selected-group-kinds = CLUSTER RESOURCE SCOPE \ --volume-data-restore-policy = VOLUME DATA RESTORE POLICY Replace the following: RESTORE PLAN : the name of the restore plan that you want to create.
- Click Merge replace (destructive) if a specific resource already exists, replace that resource with the one from backup and the associated volume data by following the volume data restore policy.
- Use one of these options: merge-skip-on-conflict : skip the individual conflicting resources. merge-replace-volume-on-conflict : skip the individual conflicting resources but replace the underlying persistent volume data. merge-replace-on-conflict : replace the individual conflicting resources and underlying persistent volume data. delete-and-restore : When the target cluster contains the same group of resources that are targeted for restore to the cluster, the existing group of resources is deleted before the new resources are restored. fail-on-conflict : If any groups of resources targeted for restore from a backup already exist in the target cluster, the restore will fail. --all-namespaces : restores all namespaced resources in the backup.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation ClusterResourceConflictPolicy NamespacedResourceRestoreMode ClusterResourceRestoreScope JSON representation SubstitutionRule JSON representation TransformationRule JSON representation TransformationRuleAction JSON representation Op ResourceFilter JSON representation VolumeDataRestorePolicyBinding JSON representation VolumeType RestoreOrder JSON representation GroupKindDependency JSON representation Configuration of a restore.
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- It is similar to MERGE SKIP ON CONFLICT except that it will apply the volume data policy for the conflicting PVCs: - RESTORE VOLUME DATA FROM BACKUP: restore data only and respect the reclaim policy of the original PV; - REUSE VOLUME HANDLE FROM BACKUP: reconnect and respect the reclaim policy of the original PV; - NO VOLUME DATA RESTORATION: new provision and respect the reclaim policy of the original PV.
- JSON representation { "policy" : enum ( VolumeDataRestorePolicy ) , // Union field scope can be only one of the following: "volumeType" : enum ( VolumeType ) // End of list of possible types for union field scope . } Fields policy enum ( VolumeDataRestorePolicy ) Required.

### VolumeDataRestorePolicy \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RESTORE VOLUME DATA FROM BACKUP For each PVC to be restored, create a new underlying volume and PV from the corresponding VolumeBackup contained within the Backup.
- REUSE VOLUME HANDLE FROM BACKUP For each PVC to be restored, attempt to reuse the original PV contained in the Backup (with its original underlying volume).
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Reference Send feedback VolumeDataRestorePolicy Stay organized with collections Save and categorize content based on your preferences.
- NO VOLUME DATA RESTORATION For each PVC to be restored, create PVC without any particular action to restore data.


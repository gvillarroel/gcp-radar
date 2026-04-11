---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.529Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Pre-existing Storage Pool restore for Hyperdisk volumes"
feature_slug: "pre-existing-storage-pool-restore-for-hyperdisk-volumes"
latest_feature_date: "2025-09-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes"
keywords:
  - "hyperdisk"
  - "existing"
  - "storage"
  - "pool"
  - "pre"
  - "volumes"
  - "restore"
  - "for"
---

# Pre-existing Storage Pool restore for Hyperdisk volumes

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports restoring Hyperdisk Balanced and Hyperdisk Throughput disks to pre-existing Storage Pools.

## Extended Definition

Backup for GKE now supports restoring Hyperdisk Balanced and Hyperdisk Throughput disks to pre-existing Storage Pools.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)

## Supporting Pages

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Use one of these options: merge-skip-on-conflict : skip the individual conflicting resources. merge-replace-volume-on-conflict : skip the individual conflicting resources but replace the underlying persistent volume data. merge-replace-on-conflict : replace the individual conflicting resources and underlying persistent volume data. delete-and-restore : When the target cluster contains the same group of resources that are targeted for restore to the cluster, the existing group of resources is deleted before the new resources are restored. fail-on-conflict : If any groups of resources targeted for restore from a backup already exist in the target cluster, the restore will fail. --all-namespaces : restores all namespaced resources in the backup.
- Use one of these options: use-existing-version : If the resources that are being restored already exist in the target cluster, Backup for GKE keeps the existing resources. use-backup-version : If the resources that are being restored already exist in the target cluster, Backup for GKE replaces the existing resources with the new resources from the backup.
- Any PersistentVolumeClaims are bound to volumes that reference existing persistent disks. (Optional) In the Choose cluster-scoped resources section, complete the following and click Next : Choose what group kinds to restore: Click All cluster-scoped resources to restore all cluster-scoped resources in the backup.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - Node - ComponentStatus - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode - storage.k8s.io/VolumeAttachment Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume JSON representation { "selectedGroupKinds" : [ { object ( GroupKind ) } ] , "excludedGroupKinds" : [ { object ( GroupKind ) } ] , "allGroupKinds" : boolean , "noGroupKinds" : boolean } Fields selectedGroupKinds[] object ( GroupKind ) Optional.
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- JSON representation ClusterResourceConflictPolicy NamespacedResourceRestoreMode ClusterResourceRestoreScope JSON representation SubstitutionRule JSON representation TransformationRule JSON representation TransformationRuleAction JSON representation Op ResourceFilter JSON representation VolumeDataRestorePolicyBinding JSON representation VolumeType RestoreOrder JSON representation GroupKindDependency JSON representation Configuration of a restore.
- JSON representation { "policy" : enum ( VolumeDataRestorePolicy ) , // Union field scope can be only one of the following: "volumeType" : enum ( VolumeType ) // End of list of possible types for union field scope . } Fields policy enum ( VolumeDataRestorePolicy ) Required.

### Backup for GKE release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- September 16, 2025 Feature Backup for GKE now supports restoring disks in pre-existing Storage Pools for Hyperdisk Balanced and Hyperdisk Throughput volumes.
- May 22, 2025 Change Backup for GKE is now available in two new regions: europe-north2 and northamerica-south1 November 15, 2024 Announcement Backup for GKE now supports backing up and restoring Hyperdisk throughput, extreme, and balanced types volumes.
- Feature Backup for GKE now allows configuration of volume data restore policies bound to specific volume types and overridden for specific volumes.
- July 01, 2025 Announcement Backup for GKE now supports backing up and restoring Hyperdisk ML and Hyperdisk Balanced High Availability volumes.


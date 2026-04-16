---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.550Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Configurable resource restore order in restore plans"
feature_slug: "configurable-resource-restore-order-in-restore-plans"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
keywords:
  - "configurable"
  - "order"
  - "plans"
  - "resource"
  - "restore"
---

# Configurable resource restore order in restore plans

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now supports specifying restore order when creating or updating a restore plan.

## Extended Definition

Backup for GKE now supports specifying restore order when creating or updating a restore plan.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)

## Supporting Pages

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.
- Note: This will automatically install the Backup for GKE agent in the specified cluster. gcloud To create a restore plan, run the following command: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --project = PROJECT ID \ --location = RESTORE LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = NAMESPACED RESOURCE RESTORE MODE \ --all-namespaces \ --cluster-resource-conflict-policy = CLUSTER RESOURCE CONFLICT POLICY \ --cluster-resource-scope-selected-group-kinds = CLUSTER RESOURCE SCOPE \ --volume-data-restore-policy = VOLUME DATA RESTORE POLICY Replace the following: RESTORE PLAN : the name of the restore plan that you want to create.
- Use one of these options: merge-skip-on-conflict : skip the individual conflicting resources. merge-replace-volume-on-conflict : skip the individual conflicting resources but replace the underlying persistent volume data. merge-replace-on-conflict : replace the individual conflicting resources and underlying persistent volume data. delete-and-restore : When the target cluster contains the same group of resources that are targeted for restore to the cluster, the existing group of resources is deleted before the new resources are restored. fail-on-conflict : If any groups of resources targeted for restore from a backup already exist in the target cluster, the restore will fail. --all-namespaces : restores all namespaced resources in the backup.
- Update a restore plan Update a restore plan and its details by using the gcloud CLI. gcloud To update a restore plan, for example by adding a new description, run the following command: gcloud beta container backup-restore restore-plans update RESTORE PLAN \ --project = PROJECT ID \ --location = LOCATION \ --description = DESCRIPTION For the full list of options, refer to the gcloud beta container backup-restore restore-plans update documentation.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- JSON representation ClusterResourceConflictPolicy NamespacedResourceRestoreMode ClusterResourceRestoreScope JSON representation SubstitutionRule JSON representation TransformationRule JSON representation TransformationRuleAction JSON representation Op ResourceFilter JSON representation VolumeDataRestorePolicyBinding JSON representation VolumeType RestoreOrder JSON representation GroupKindDependency JSON representation Configuration of a restore.
- Enums VOLUME TYPE UNSPECIFIED Default GCE PERSISTENT DISK Compute Engine Persistent Disk volume RestoreOrder Allows customers to specify dependencies between resources that Backup for GKE can use to compute a resasonable restore order.
- Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - Node - ComponentStatus - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode - storage.k8s.io/VolumeAttachment Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume JSON representation { "selectedGroupKinds" : [ { object ( GroupKind ) } ] , "excludedGroupKinds" : [ { object ( GroupKind ) } ] , "allGroupKinds" : boolean , "noGroupKinds" : boolean } Fields selectedGroupKinds[] object ( GroupKind ) Optional.

### "Modify resources during restoration \_|\_ Backup for GKE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following action copies environment variables from the nginx container to the install init container. op : copy fromPath : "/spec/containers/0/env" path : "/spec/initContainers/0/env" Original apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch Transformed apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch env : # copy from "nginx" container - name : PROTOCOL value : https To learn more about defining transformation rules in the Google Cloud console, see Plan a set of restores .
- Change StorageClass of PVCs This example changes the StorageClass in all restored PersistentVolumeClaim resources from standard to premium-rwo : YAML transformationRules : - description : Change StorageClass in PVC from standard to premium-rwo resourceFilter : namespaces : [] jsonPath : ".spec[?(@.storageClassName == 'standard')]" groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "premium-rwo" Terraform transformation rules { description = "Change StorageClass in PVC from standard to premium-rwo" resource filter { json path = ".spec[?(@.storageClassName == 'standard')]" group kinds { resource kind = "PersistentVolumeClaim" } } field actions { op = "REPLACE" path = "/spec/storageClassName" value = "premium-rwo" } } Note: To change the StorageClass of PVC templates defined in the StatefulSet, a separate transformation rule has to be configured.
- To define transformation rules through gcloud CLI, create a file containing a YAML array of transformationRules and include the --transformation-rules-file= parameter in the gcloud beta container backup-restore restore-plans create command.
- Overview There are several reasons why you might want to modify Kubernetes resources as part of the restore process: You might want to create a PersistentVolumeClaim (PVC) using a different storage provisioner.


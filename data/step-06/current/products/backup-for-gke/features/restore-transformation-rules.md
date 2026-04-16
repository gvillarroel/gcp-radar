---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:38:03.553Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Restore transformation rules"
feature_slug: "restore-transformation-rules"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan"
keywords:
  - "transformation"
  - "modify"
  - "rules"
  - "supports"
  - "restore"
---

# Restore transformation rules

Product: Backup for GKE
Coverage: MEDIUM

## Step 02 Summary

Backup for GKE now supports transformation rules that modify resources during restore operations.

## Extended Definition

Backup for GKE now supports transformation rules that modify resources during restore operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)

## Supporting Pages

### "Modify resources during restoration \_|\_ Backup for GKE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following action copies environment variables from the nginx container to the install init container. op : copy fromPath : "/spec/containers/0/env" path : "/spec/initContainers/0/env" Original apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch Transformed apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch env : # copy from "nginx" container - name : PROTOCOL value : https To learn more about defining transformation rules in the Google Cloud console, see Plan a set of restores .
- Change StorageClass of PVCs This example changes the StorageClass in all restored PersistentVolumeClaim resources from standard to premium-rwo : YAML transformationRules : - description : Change StorageClass in PVC from standard to premium-rwo resourceFilter : namespaces : [] jsonPath : ".spec[?(@.storageClassName == 'standard')]" groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "premium-rwo" Terraform transformation rules { description = "Change StorageClass in PVC from standard to premium-rwo" resource filter { json path = ".spec[?(@.storageClassName == 'standard')]" group kinds { resource kind = "PersistentVolumeClaim" } } field actions { op = "REPLACE" path = "/spec/storageClassName" value = "premium-rwo" } } Note: To change the StorageClass of PVC templates defined in the StatefulSet, a separate transformation rule has to be configured.
- To define transformation rules through gcloud CLI, create a file containing a YAML array of transformationRules and include the --transformation-rules-file= parameter in the gcloud beta container backup-restore restore-plans create command.
- All the resources—except CustomResourceDefinition resources, for which transformations are not available—to be restored move sequentially through this list of rules.

### RestoreConfig \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "volumeDataRestorePolicy" : enum ( VolumeDataRestorePolicy ) , "clusterResourceConflictPolicy" : enum ( ClusterResourceConflictPolicy ) , "namespacedResourceRestoreMode" : enum ( NamespacedResourceRestoreMode ) , "clusterResourceRestoreScope" : { object ( ClusterResourceRestoreScope ) } , "substitutionRules" : [ { object ( SubstitutionRule ) } ] , "transformationRules" : [ { object ( TransformationRule ) } ] , "volumeDataRestorePolicyBindings" : [ { object ( VolumeDataRestorePolicyBinding ) } ] , "restoreOrder" : { object ( RestoreOrder ) } , // Union field namespaced resource restore scope can be only one of the // following: "allNamespaces" : boolean , "selectedNamespaces" : { object ( Namespaces ) } , "selectedApplications" : { object ( NamespacedNames ) } , "noNamespaces" : boolean , "excludedNamespaces" : { object ( Namespaces ) } // End of list of possible types for union field // namespaced resource restore scope . } Fields volumeDataRestorePolicy enum ( VolumeDataRestorePolicy ) Optional.
- JSON representation ClusterResourceConflictPolicy NamespacedResourceRestoreMode ClusterResourceRestoreScope JSON representation SubstitutionRule JSON representation TransformationRule JSON representation TransformationRuleAction JSON representation Op ResourceFilter JSON representation VolumeDataRestorePolicyBinding JSON representation VolumeType RestoreOrder JSON representation GroupKindDependency JSON representation Configuration of a restore.
- An empty list means no transformation will occur. volumeDataRestorePolicyBindings[] object ( VolumeDataRestorePolicyBinding ) Optional.
- A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup.

### Plan a set of restores \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to restrict the transformation rules to resources that match specific conditions, do the following in the Specify resource conditions and actions section: Click Namespaces condition and type a list of namespaces to match resources within those namespaces.
- For example, deleting a CRD will cause Kubernetes to delete all CRs of that type. (Optional) In the Add transformation rules section, complete the following and click Next : Click Add rule and enter an optional description.
- During restoration, you can optionally apply transformation rules, which are used to match a set of resources and substitute the current value of an attribute on those resources for a new value.
- Create a restore plan for all namespaces The following command creates a restore plan to restore all namespaces and cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --all-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a namespace The following command creates a restore plan to roll back the namespace my-ns from backup: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-namespaces = my-ns \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-selected-group-kinds = apiextension.k8s.io/CustomResourceDefinition,storage.k8s.io/StorageClass \ --volume-data-restore-policy = restore-volume-data-from-backup Create a restore plan to roll back a ProtectedApplication to reconnect original volumes The following command creates a restore plan to roll back the protected application my-ns/my-app to reconnect original volumes: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = delete-and-restore \ --selected-applications = my-ns/my-app \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-no-group-kinds \ --volume-data-restore-policy = reuse-volume-handle-from-backup Create a restore plan to restore cluster resources only The following command creates a restore plan to restore all cluster resources: gcloud beta container backup-restore restore-plans create RESTORE PLAN \ --location = LOCATION \ --backup-plan = projects/ PROJECT ID /locations/ BACKUP LOCATION /backupPlans/ BACKUP PLAN NAME \ --cluster = CLUSTER \ --namespaced-resource-restore-mode = fail-on-conflict \ --no-namespaces \ --cluster-resource-conflict-policy = use-existing-version \ --cluster-resource-scope-all-group-kinds Console Use the following instructions to create a restore plan in the Google Cloud console: Go to the Google Kubernetes Engine page in the Google Cloud console.


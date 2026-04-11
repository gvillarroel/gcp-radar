---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.538Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Terraform management of RestorePlan resources"
feature_slug: "terraform-management-of-restoreplan-resources"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules"
keywords:
  - "terraform"
  - "of"
  - "restoreplan"
  - "management"
  - "resources"
  - "backup"
  - "for"
  - "gke"
---

# Terraform management of RestorePlan resources

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports managing RestorePlan resources via Terraform.

## Extended Definition

Backup for GKE now supports managing RestorePlan resources via Terraform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)

## Supporting Pages

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Automatic pause : Backup for GKE can automatically pause a backup plan in the following scenarios: When initiating a backup (scheduled or manual), if any of the following errors occur: StatusInvalidCluster : The StatusInvalidCluster error indicates an unrecoverable condition where the cluster name is invalid or metadata information of the cluster is unavailable.
- Before you begin Enable Backup for GKE API Enable Backup for GKE for a cluster Required roles To get the permissions that you need to create and manage a backup plan, ask your administrator to grant you the Backup for GKE Backup Admin ( roles/gkebackup.backupAdmin ), which is a subset of Backup for GKE Admin ( roles/gkebackup.admin ) IAM role on your project.
- Terraform Create a google gke backup backup plan resource. resource "google gke backup backup plan" "basic" { name = " BACKUP PLAN " cluster = google container cluster.
- Terraform resource "google gke backup backup plan" "basic" { name = " BACKUP PLAN " cluster = google container cluster.

### Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Administrators don't interact with the agent, as the agent is driven by custom Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the cluster by the Backup for GKE service in response to the creation of backup and restore cloud resources.
- Backup for GKE manages a database of these application-specific resources and the service API methods mostly correspond to create, read, update, or delete operations against these resources.
- Backup for GKE also includes two configuration and control resource types: BackupPlan : a parent resource for Backup resources that represent a chain of backups.
- These ProtectedApplication resources are unique to Backup for GKE and provide more fine-grained options for defining backup and restore scope.

### "Modify resources during restoration \_|\_ Backup for GKE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup for GKE provides a mechanism for making these changes called transformation rules , which you may optionally define as part of a RestorePlan .
- YAML transformationRules : - description : Rename namespace name from alpha to beta resourceFilter : namespaces : [] jsonPath : ".metadata[?(@.name == 'alpha')]" groupKinds : - resourceGroup : "" resourceKind : Namespace fieldActions : - op : REPLACE path : "/metadata/name" value : "beta" - description : Clone all resources from namespace alpha to beta resourceFilter : namespaces : [ "alpha" ] fieldActions : - op : REPLACE path : "/metadata/namespace" value : "beta" Terraform transformation rules { description = "Rename namespace name from alpha to beta" resource filter { json path = ".metadata[?(@.name == 'alpha')]" group kinds { resource kind = "Namespace" } } field actions { op = "REPLACE" path = "/metadata/name" value = "beta" } } transformation rules { description = "Clone all resources from namespace alpha to beta" resource filter { namespaces = ["alpha"] } field actions { op = "REPLACE" path = "/metadata/namespace" value = "beta" } } Change StorageClass of PVCs and replica count in a cloned namespace This example clones a namespace, and then applies a set of changes to resources in the new namespace: Change the StorageClass on PVCs from standard to premium-rwo Change the replica count of the Deployment nginx to 3 YAML transformationRules : - description : Rename the namespace from alpha to beta resourceFilter : namespaces : [] jsonPath : ".metadata[?(@.name == 'alpha')]" groupKinds : - resourceGroup : "" resourceKind : Namespace fieldActions : - op : REPLACE path : "/metadata/name" value : "beta" - description : Change all resources from namespace alpha to beta resourceFilter : namespaces : [ "alpha" ] fieldActions : - op : REPLACE path : "/metadata/namespace" value : "beta" - description : Change the StorageClass on PVCs from standard to premium-rwo resourceFilter : namespaces : [ "beta" ] jsonPath : ".spec[?(@.storageClassName == 'standard')]" groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "premium-rwo" - description : Change the replica count of the Deployment nginx from 7 to 3 resourceFilter : namespaces : [ "beta" ] jsonPath : ".metadata[?(@.name == 'nginx')]" groupKinds : - resourceGroup : apps resourceKind : Deployment fieldActions : - op : REPLACE path : "/spec/replicas" value : "3" Terraform transformation rules { description = "Rename the namespace from alpha to beta" resource filter { json path = ".metadata[?(@.name == 'alpha')]" group kinds { resource kind = "Namespace" } } field actions { op = "REPLACE" path = "/metadata/name" value = "beta" } } transformation rules { description = "Change all resources from namespace alpha to beta" resource filter { namespaces = ["alpha"] } field actions { op = "REPLACE" path = "/metadata/namespace" value = "beta" } } transformation rules { description = "Change the StorageClass on PVCs from standard to premium-rwo" resource filter { namespaces = ["beta"] json path = ".spec[?(@.storageClassName == 'standard')]" group kinds { resource kind = "PersistentVolumeClaim" } } field actions { op = "REPLACE" path = "/spec/storageClassName" value = "premium-rwo" } } transformation rules { description = "Change the replica count of the Deployment nginx from 7 to 3" resource filter { namespaces = ["beta"] json path = ".metadata[?(@.name == 'nginx')]" group kinds { resource group = "apps" resource kind = "Deployment" } } field actions { op = "REPLACE" path = "/spec/replicas" value = "3" } } Change, insert, and remove ConfigMap entries This example modifies the ConfigMap that contains the label key "app.kubernetes.io/name" in the namespace "mysql" to: Change the value of the entry "endpoint" to "192.0.2.127" .
- YAML transformationRules : - description : Change, insert, remove ConfigMap entres resourceFilter : namespaces : [ "mysql" ] jsonPath : ".metadata.labels['app\\.kubernetes\\.io/name']" groupKinds : - resourceGroup : "" resourceKind : ConfigMap fieldActions : - op : REPLACE path : "/data/endpoint" value : "192.0.2.127" - op : ADD path : "/data/connection-timeout" value : "30s" - op : REMOVE path : "/data/read-timeout" Terraform transformation rules { description = "Change, insert, remove ConfigMap entres" resource filter { namespaces = ["mysql"] json path = ".metadata.labels['app\\.kubernetes\\.io/name']" group kinds { resource kind = "ConfigMap" } } field actions { op = "REPLACE" path = "/data/endpoint" value = "192.0.2.127" } field actions { op = "ADD" path = "/data/connection-timeout" value = "30s" } field actions { op = "REMOVE" path = "/data/read-timeout" } } Add a label app.kubernetes.io/name to resources whose name starts with mysql- ; This example adds a label app.kubernetes.io/name with the value mysql to all resources whose name starts with mysql- : YAML transformationRules : - description : Add a label to resources whose name starts with resourceFilter : namespaces : [] jsonPath : ".metadata[?(@.name = /^mysql-. /i)]" fieldActions : - op : ADD path : "/metadata/labels/app.kubernetes.io 1name" value : "mysql" Terraform transformation rules { description = "Add a label to resources whose name starts with" resource filter { json path = ".metadata[?(@.name = /^mysql-. /i)]" } field actions { op = "ADD" path = "/metadata/labels/app.kubernetes.io 1name" value = "mysql" } } Assign a static IP address for a LoadBalancer type Service This example assigns a static IP address for the Service "nginx-svc" in the namespace "nginx" : YAML transformationRules : - description : Assign a static IP to Service nginx-svc resourceFilter : namespaces : [ "nginx" ] jsonPath : ".metadata[?(@.name == 'nginx-svc')]" groupKinds : - resourceGroup : "" resourceKind : Service fieldActions : - op : ADD path : "/spec/loadBalancerIP" value : "192.0.2.127" Terraform transformation rules { description = "Assign a static IP to Service nginx-svc" resource filter { namespaces = ["nginx"] json path = ".metadata[?(@.name == 'nginx-svc')]" group kinds { resource kind = "Service" } } field actions { op = "ADD" path = "/spec/loadBalancerIP" value = "192.0.2.127" } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Change StorageClass of PVCs This example changes the StorageClass in all restored PersistentVolumeClaim resources from standard to premium-rwo : YAML transformationRules : - description : Change StorageClass in PVC from standard to premium-rwo resourceFilter : namespaces : [] jsonPath : ".spec[?(@.storageClassName == 'standard')]" groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "premium-rwo" Terraform transformation rules { description = "Change StorageClass in PVC from standard to premium-rwo" resource filter { json path = ".spec[?(@.storageClassName == 'standard')]" group kinds { resource kind = "PersistentVolumeClaim" } } field actions { op = "REPLACE" path = "/spec/storageClassName" value = "premium-rwo" } } Note: To change the StorageClass of PVC templates defined in the StatefulSet, a separate transformation rule has to be configured.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.211Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Hyperdisk ML support"
feature_slug: "hyperdisk-ml-support"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk"
keywords:
  - "option"
  - "hyperdisk"
  - "attached"
  - "persistent"
  - "supports"
  - "disk"
---

# Hyperdisk ML support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE supports Hyperdisk ML as an attached persistent disk option for Autopilot and Standard clusters.

## Extended Definition

GKE supports Hyperdisk ML as an attached persistent disk option for Autopilot and Standard clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)

## Supporting Pages

### "About Hyperdisk for GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If true , GKE ensures Pods are scheduled only on nodes that support the selected disk type. false hyperdisk-type The Hyperdisk type to use on supported nodes (such as hyperdisk-balanced ). hyperdisk-balanced pd-type The Persistent Disk type to use as a fallback on other nodes (such as pd-balanced ). pd-balanced disk-type-preference Overrides the default preference for hyperdisk-type when a node supports both options. hyperdisk-type NOTE: You can still use standard block storage parameters.
- If there are multiple Hyperdisk and Persistent Disk volumes attached to the same VM requesting IOPS at the same time, and the VM limits are reached, then each volume has an IOPS level proportional to their share in the total IOPS provisioned across all attached Hyperdisk Extreme volumes.
- This approach lets you create a single StorageClass that supports clusters with older VM generations as you migrate to newer compute technology, provisioning Hyperdisk on compatible newer instances (like C3 or C4) while falling back to Persistent Disk on older generations.
- Unlike Persistent Disk volumes where performance is shared across all volumes attached to a node, with Hyperdisk, you can specify and tune the level of performance for each Hyperdisk volume.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This tutorial demonstrates how to migrate stateful applications in GKE from older generation machine types, such as N2, with attached Persistent Disk volumes, to newer generation machine types, such as N4, with attached Hyperdisk volumes by using Backup for GKE .
- This file defines how resources are modified during restore: transformationRules : - description : Change the StorageClass on PVCs from premium-rwo to balanced-storage resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "balanced-storage" - description : Change node type from n2-standard-4 to n4-standard-4 resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] jsonPath : ".metadata[?(@.name == 'existing-mysql')]" groupKinds : - resourceGroup : apps resourceKind : Deployment fieldActions : - op : REPLACE path : "/spec/template/spec/affinity/nodeAffinity/preferredDuringSchedulingIgnoredDuringExecution/0/preference/matchExpressions/0/values/0" value : "n4-standard-4" PVC transformation: changes the storageClassName to balanced-storage (Hyperdisk).
- Clone the sample code repository and navigate to the directory: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd kubernetes-engine-samples/databases/backup-migration Create the source GKE cluster Create a zonal cluster with a node pool that uses N2 machine types and attached Persistent Disk volumes.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup for GKE Stay organized with collections Save and categorize content based on your preferences.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This StorageClass will be used later in the tutorial. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume. apiVersion : v1 kind : Service metadata : name : regular-mysql labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-pv-claim kubectl apply -f manifests/02-mysql/mysql-deployment.yaml This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
- Scale down the MySQL deployment to 0 replicas to stop writes: kubectl scale deployment regular-mysql --replicas = 0 Create a snapshot from the existing Persistent Disk: gcloud compute disks snapshot ${ PV NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd" Create a new Hyperdisk volume named mysql-recovery from the snapshot: gcloud compute disks create mysql-recovery --project = ${ PROJECT ID } \ --type = hyperdisk-balanced \ --size = 150GB --location = ${ LOCATION } \ --source-snapshot = projects/ ${ PROJECT ID } /global/snapshots/original-snapshot Update the manifest file for the restored PV with your project ID: apiVersion : v1 kind : PersistentVolume metadata : name : backup spec : storageClassName : balanced-storage capacity : storage : 150G accessModes : - ReadWriteOnce claimRef : name : hyperdisk-recovery namespace : default csi : driver : pd.csi.storage.gke.io volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery fsType : ext4 --- apiVersion : v1 kind : PersistentVolumeClaim metadata : namespace : default name : hyperdisk-recovery spec : storageClassName : balanced-storage accessModes : - ReadWriteOnce resources : requests : storage : 150G sed -i "s/PRJCTID/ $PROJECT ID /g" manifests/02-mysql/restore pv.yaml Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk: kubectl apply -f manifests/02-mysql/restore pv.yaml Verify the data migration Deploy a new MySQL instance that uses the newly created Hyperdisk volume.
- Deploy the new MySQL instance: apiVersion : v1 kind : Service metadata : name : recovered-mysql labels : app : new-mysql spec : ports : - port : 3306 selector : app : new-mysql clusterIP : None --- apiVersion : apps/v1 kind : Deployment metadata : name : new-mysql labels : app : new-mysql spec : selector : matchLabels : app : new-mysql strategy : type : Recreate template : metadata : labels : app : new-mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "cloud.google.com/gke-nodepool" operator : In values : - "hyperdisk-pool" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : hyperdisk-recovery kubectl apply -f manifests/02-mysql/recovery mysql deployment.yaml To verify data integrity, connect to the MySQL client Pod again: kubectl exec -it mysql-client -- bash Inside the client Pod, connect to the new MySQL database ( recovered-mysql.default ) and verify the data.
- Create a zonal GKE cluster: gcloud container clusters create ${ KUBERNETES CLUSTER PREFIX } -cluster \ --location ${ LOCATION } \ --node-locations ${ LOCATION } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Add a node pool with a N2 machine type for the initial MySQL deployment: gcloud container node-pools create regular-pool \ --cluster ${ KUBERNETES CLUSTER PREFIX } -cluster \ --machine-type n2-standard-4 \ --location ${ LOCATION } \ --num-nodes 1 Add a node pool with a N4 machine type on Hyperdisk where the MySQL deployment will be migrated and run: gcloud container node-pools create hyperdisk-pool \ --cluster ${ KUBERNETES CLUSTER PREFIX } -cluster \ --machine-type n4-standard-4 \ --location ${ LOCATION } \ --num-nodes 1 Connect to the cluster: gcloud container clusters get-credentials ${ KUBERNETES CLUSTER PREFIX } -cluster --location ${ LOCATION } Deploy MySQL on Persistent Disk In this section, you deploy a MySQL instance that uses a Persistent Disk for storage, and load it with sample data.


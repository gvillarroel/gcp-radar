---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.138Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Automated Hyperdisk disk type selection"
feature_slug: "automated-hyperdisk-disk-type-selection"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk"
keywords:
  - "selects"
  - "automated"
  - "selection"
  - "hyperdisk"
  - "automatically"
  - "disk"
  - "type"
---

# Automated Hyperdisk disk type selection

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE automatically selects Hyperdisk or Persistent Disk based on the node machine type when provisioning volumes.

## Extended Definition

GKE automatically selects Hyperdisk or Persistent Disk based on the node machine type when provisioning volumes.

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
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following StorageClass shows how to configure dynamic disk type selection that prioritizes hyperdisk-balanced for supported nodes and automatically uses pd-balanced for others. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : dynamic-volume provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : dynamic pd-type : pd-balanced hyperdisk-type : hyperdisk-balanced use-allowed-disk-topology : "true" The parameters below only apply to the hyperdisk-type and are ignored if the pd-type is selected. provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "3000" Hyperdisk and Autopilot Compute Classes If you want to use Hyperdisk on Autopilot clusters that use Compute Classes , make sure your node's machine type is both supported by Hyperdisk and supported by the Compute Class .
- The following shows an example of a StorageClass with the feature enabled. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : hyperdisk-balanced-compatible-scheduling provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced use-allowed-disk-topology : "true" Automated disk type selection GKE can select the appropriate disk type for your workloads based on the machine type of the node where they are scheduled.
- If true , GKE ensures Pods are scheduled only on nodes that support the selected disk type. false hyperdisk-type The Hyperdisk type to use on supported nodes (such as hyperdisk-balanced ). hyperdisk-balanced pd-type The Persistent Disk type to use as a fallback on other nodes (such as pd-balanced ). pd-balanced disk-type-preference Overrides the default preference for hyperdisk-type when a node supports both options. hyperdisk-type NOTE: You can still use standard block storage parameters.
- Limitations After volume creation, you can only modify the following settings through the Compute Engine API: Throughput: Hyperdisk Throughput and Hyperdisk Balanced volumes IOPS: Hyperdisk Extreme and Hyperdisk Balanced volumes You can only attach Hyperdisk volumes to specific instance types ; Read-Only attachments are not supported.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the target GKE cluster on an N4 node: gcloud container clusters create ${ TARGET CLUSTER PREFIX } -cluster \ --location ${ ZONE } \ --node-locations ${ ZONE } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Create a node pool with n4-standard-4 machine types, which are required for Hyperdisk: gcloud container node-pools create hyperdisk-pool \ --cluster ${ TARGET CLUSTER PREFIX } -cluster \ --machine-type n4-standard-4 \ --zone ${ ZONE } \ --num-nodes 1 Get credentials for the target cluster: gcloud container clusters get-credentials ${ TARGET CLUSTER PREFIX } -cluster --zone ${ ZONE } Apply the Hyperdisk StorageClass named balanced-storage : kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml The following manifest defines a Hyperdisk StorageClass : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" Review the transformation rules in the manifests/03-transformation-rule/volume.yaml file.
- This file defines how resources are modified during restore: transformationRules : - description : Change the StorageClass on PVCs from premium-rwo to balanced-storage resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "balanced-storage" - description : Change node type from n2-standard-4 to n4-standard-4 resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] jsonPath : ".metadata[?(@.name == 'existing-mysql')]" groupKinds : - resourceGroup : apps resourceKind : Deployment fieldActions : - op : REPLACE path : "/spec/template/spec/affinity/nodeAffinity/preferredDuringSchedulingIgnoredDuringExecution/0/preference/matchExpressions/0/values/0" value : "n4-standard-4" PVC transformation: changes the storageClassName to balanced-storage (Hyperdisk).
- Autopilot Standard This tutorial demonstrates how to migrate stateful applications in GKE from older generation machine types, such as N2, with attached Persistent Disk volumes, to newer generation machine types, such as N4, with attached Hyperdisk volumes by using Backup for GKE .
- Deployment architecture The following diagram illustrates the process of using Backup for GKE to migrate stateful MySQL workloads from Persistent Disk on N2 machine types to Hyperdisk on N4 machine types.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- This StorageClass will be used later in the tutorial. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume. apiVersion : v1 kind : Service metadata : name : regular-mysql labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-pv-claim kubectl apply -f manifests/02-mysql/mysql-deployment.yaml This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
- Scale down the MySQL deployment to 0 replicas to stop writes: kubectl scale deployment regular-mysql --replicas = 0 Create a snapshot from the existing Persistent Disk: gcloud compute disks snapshot ${ PV NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd" Create a new Hyperdisk volume named mysql-recovery from the snapshot: gcloud compute disks create mysql-recovery --project = ${ PROJECT ID } \ --type = hyperdisk-balanced \ --size = 150GB --location = ${ LOCATION } \ --source-snapshot = projects/ ${ PROJECT ID } /global/snapshots/original-snapshot Update the manifest file for the restored PV with your project ID: apiVersion : v1 kind : PersistentVolume metadata : name : backup spec : storageClassName : balanced-storage capacity : storage : 150G accessModes : - ReadWriteOnce claimRef : name : hyperdisk-recovery namespace : default csi : driver : pd.csi.storage.gke.io volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery fsType : ext4 --- apiVersion : v1 kind : PersistentVolumeClaim metadata : namespace : default name : hyperdisk-recovery spec : storageClassName : balanced-storage accessModes : - ReadWriteOnce resources : requests : storage : 150G sed -i "s/PRJCTID/ $PROJECT ID /g" manifests/02-mysql/restore pv.yaml Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk: kubectl apply -f manifests/02-mysql/restore pv.yaml Verify the data migration Deploy a new MySQL instance that uses the newly created Hyperdisk volume.
- Deploy the new MySQL instance: apiVersion : v1 kind : Service metadata : name : recovered-mysql labels : app : new-mysql spec : ports : - port : 3306 selector : app : new-mysql clusterIP : None --- apiVersion : apps/v1 kind : Deployment metadata : name : new-mysql labels : app : new-mysql spec : selector : matchLabels : app : new-mysql strategy : type : Recreate template : metadata : labels : app : new-mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "cloud.google.com/gke-nodepool" operator : In values : - "hyperdisk-pool" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : hyperdisk-recovery kubectl apply -f manifests/02-mysql/recovery mysql deployment.yaml To verify data integrity, connect to the MySQL client Pod again: kubectl exec -it mysql-client -- bash Inside the client Pod, connect to the new MySQL database ( recovered-mysql.default ) and verify the data.
- Create a zonal GKE cluster: gcloud container clusters create ${ KUBERNETES CLUSTER PREFIX } -cluster \ --location ${ LOCATION } \ --node-locations ${ LOCATION } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Add a node pool with a N2 machine type for the initial MySQL deployment: gcloud container node-pools create regular-pool \ --cluster ${ KUBERNETES CLUSTER PREFIX } -cluster \ --machine-type n2-standard-4 \ --location ${ LOCATION } \ --num-nodes 1 Add a node pool with a N4 machine type on Hyperdisk where the MySQL deployment will be migrated and run: gcloud container node-pools create hyperdisk-pool \ --cluster ${ KUBERNETES CLUSTER PREFIX } -cluster \ --machine-type n4-standard-4 \ --location ${ LOCATION } \ --num-nodes 1 Connect to the cluster: gcloud container clusters get-credentials ${ KUBERNETES CLUSTER PREFIX } -cluster --location ${ LOCATION } Deploy MySQL on Persistent Disk In this section, you deploy a MySQL instance that uses a Persistent Disk for storage, and load it with sample data.


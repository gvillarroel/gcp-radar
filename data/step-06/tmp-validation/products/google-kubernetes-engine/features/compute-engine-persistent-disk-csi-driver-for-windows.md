---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.391Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compute Engine persistent disk CSI Driver for Windows"
feature_slug: "compute-engine-persistent-disk-csi-driver-for-windows"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk"
keywords:
  - "enables"
  - "persistent"
  - "windows"
  - "driver"
  - "disk"
  - "compute"
---

# Compute Engine persistent disk CSI Driver for Windows

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Enables the Compute Engine persistent disk CSI Driver for Windows in GKE to provide snapshot and volume expansion support.

## Extended Definition

Enables the Compute Engine persistent disk CSI Driver for Windows in GKE to provide snapshot and volume expansion support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)

## Supporting Pages

### "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn about using the Compute Engine Persistent Disk CSI Driver for managing Persistent Disk and Hyperdisk volumes.
- Scale down the MySQL deployment to 0 replicas to stop writes: kubectl scale deployment regular-mysql --replicas = 0 Create a snapshot from the existing Persistent Disk: gcloud compute disks snapshot ${ PV NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd" Create a new Hyperdisk volume named mysql-recovery from the snapshot: gcloud compute disks create mysql-recovery --project = ${ PROJECT ID } \ --type = hyperdisk-balanced \ --size = 150GB --location = ${ LOCATION } \ --source-snapshot = projects/ ${ PROJECT ID } /global/snapshots/original-snapshot Update the manifest file for the restored PV with your project ID: apiVersion : v1 kind : PersistentVolume metadata : name : backup spec : storageClassName : balanced-storage capacity : storage : 150G accessModes : - ReadWriteOnce claimRef : name : hyperdisk-recovery namespace : default csi : driver : pd.csi.storage.gke.io volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery fsType : ext4 --- apiVersion : v1 kind : PersistentVolumeClaim metadata : namespace : default name : hyperdisk-recovery spec : storageClassName : balanced-storage accessModes : - ReadWriteOnce resources : requests : storage : 150G sed -i "s/PRJCTID/ $PROJECT ID /g" manifests/02-mysql/restore pv.yaml Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk: kubectl apply -f manifests/02-mysql/restore pv.yaml Verify the data migration Deploy a new MySQL instance that uses the newly created Hyperdisk volume.
- This StorageClass will be used later in the tutorial. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume. apiVersion : v1 kind : Service metadata : name : regular-mysql labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-pv-claim kubectl apply -f manifests/02-mysql/mysql-deployment.yaml This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
- Delete the snapshot: gcloud compute snapshots delete original-snapshot --quiet Delete the GKE cluster: gcloud container clusters delete ${ KUBERNETES CLUSTER PREFIX } -cluster --location = ${ LOCATION } --quiet Delete the Persistent Disk and Hyperdisk volumes: gcloud compute disks delete ${ PV NAME } --location = ${ LOCATION } --quiet gcloud compute disks delete mysql-recovery --location = ${ LOCATION } --quiet What's next Look through more code samples in the GKE samples GitHub repository .

### "Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the target GKE cluster on an N4 node: gcloud container clusters create ${ TARGET CLUSTER PREFIX } -cluster \ --location ${ ZONE } \ --node-locations ${ ZONE } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Create a node pool with n4-standard-4 machine types, which are required for Hyperdisk: gcloud container node-pools create hyperdisk-pool \ --cluster ${ TARGET CLUSTER PREFIX } -cluster \ --machine-type n4-standard-4 \ --zone ${ ZONE } \ --num-nodes 1 Get credentials for the target cluster: gcloud container clusters get-credentials ${ TARGET CLUSTER PREFIX } -cluster --zone ${ ZONE } Apply the Hyperdisk StorageClass named balanced-storage : kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml The following manifest defines a Hyperdisk StorageClass : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" Review the transformation rules in the manifests/03-transformation-rule/volume.yaml file.
- Costs In this document, you use the following billable components of Google Cloud: GKE Compute Engine (Persistent Disk and Hyperdisk) Backup for GKE To generate a cost estimate based on your projected usage, use the pricing calculator .
- The root password is set to migration : apiVersion : v1 kind : Service metadata : name : mysql-a labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-a-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql-a labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql-a volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-a-pv-claim Deploy the mysql-b-deployment.yaml file: kubectl apply -f manifests/02-mysql/mysql-b-deployment.yaml -n namespace-b The following manifest creates a MySQL Pod in namespace-b with dynamically provisioned Persistent Disk SSD disks on the regular-pool nodes.
- This file defines how resources are modified during restore: transformationRules : - description : Change the StorageClass on PVCs from premium-rwo to balanced-storage resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "balanced-storage" - description : Change node type from n2-standard-4 to n4-standard-4 resourceFilter : namespaces : [ "namespace-a" , "namespace-b" ] jsonPath : ".metadata[?(@.name == 'existing-mysql')]" groupKinds : - resourceGroup : apps resourceKind : Deployment fieldActions : - op : REPLACE path : "/spec/template/spec/affinity/nodeAffinity/preferredDuringSchedulingIgnoredDuringExecution/0/preference/matchExpressions/0/values/0" value : "n4-standard-4" PVC transformation: changes the storageClassName to balanced-storage (Hyperdisk).

### "About Hyperdisk for GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following StorageClass shows how to configure dynamic disk type selection that prioritizes hyperdisk-balanced for supported nodes and automatically uses pd-balanced for others. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : dynamic-volume provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : dynamic pd-type : pd-balanced hyperdisk-type : hyperdisk-balanced use-allowed-disk-topology : "true" The parameters below only apply to the hyperdisk-type and are ignored if the pd-type is selected. provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "3000" Hyperdisk and Autopilot Compute Classes If you want to use Hyperdisk on Autopilot clusters that use Compute Classes , make sure your node's machine type is both supported by Hyperdisk and supported by the Compute Class .
- The following shows an example of a StorageClass with the feature enabled. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : hyperdisk-balanced-compatible-scheduling provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced use-allowed-disk-topology : "true" Automated disk type selection GKE can select the appropriate disk type for your workloads based on the machine type of the node where they are scheduled.
- This approach lets you create a single StorageClass that supports clusters with older VM generations as you migrate to newer compute technology, provisioning Hyperdisk on compatible newer instances (like C3 or C4) while falling back to Persistent Disk on older generations.
- You can use this storage option in your GKE clusters in a similar way as with other Compute Engine Persistent Disk volumes with added flexibility to tune performance for your workload.


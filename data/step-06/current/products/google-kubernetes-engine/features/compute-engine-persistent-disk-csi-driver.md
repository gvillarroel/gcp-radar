---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.951Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compute Engine persistent disk CSI driver"
feature_slug: "compute-engine-persistent-disk-csi-driver"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke"
keywords:
  - "compute"
  - "engine"
  - "persistent"
  - "disk"
  - "csi"
  - "driver"
  - "installs"
  - "provision"
---

# Compute Engine persistent disk CSI driver

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Installs the Compute Engine persistent disk CSI driver to provision PersistentVolumes with pd.csi.storage.gke.io.

## Extended Definition

Installs the Compute Engine persistent disk CSI driver to provision PersistentVolumes with pd.csi.storage.gke.io.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)

## Supporting Pages

### Using the Compute Engine persistent disk CSI Driver | Google Kubernetes Engine (GKE) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver)
- Source ID: `feature-recovery-http`
- Final score: 469
- Re-rank relevance: N/A

Evidence snippets:
- Create a StorageClass Save the following manifest as a YAML file named pd-xfs-class.yaml : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : xfs-class provisioner : pd.csi.storage.gke.io parameters : # The type of Compute Engine persistent disk to provision. type : pd-balanced # Specify "xfs" as the filesystem type. csi.storage.k8s.io/fstype : xfs volumeBindingMode : WaitForFirstConsumer Apply the manifest: kubectl apply -f pd-xfs-class.yaml Create a PersistentVolumeClaim Save the following manifest as pd-xfs-pvc.yaml : apiVersion : v1 kind : PersistentVolumeClaim metadata : name : xfs-pvc spec : # References the StorageClass created earlier. storageClassName : xfs-class accessModes : - ReadWriteOnce resources : requests : # The amount of storage requested. storage : 10Gi Apply the manifest: kubectl apply -f pd-xfs-pvc.yaml Create a Pod that consumes the volume Save the following manifest as pd-xfs-pod.yaml : apiVersion : v1 kind : Pod metadata : name : pd-xfs-pod spec : containers : - name : cloud-sdk image : google/cloud-sdk:slim # Keep the container running for 1 hour. args : [ "sleep" , "3600" ] volumeMounts : # The path in the container where the volume will be mounted. - mountPath : /xfs name : xfs-volume # Define the volumes available to the containers in the Pod. volumes : - name : xfs-volume persistentVolumeClaim : # References the PersistentVolumeClaim created earlier. claimName : xfs-pvc Apply the manifest: kubectl apply -f pd-xfs-pod.yaml Verify that the volume was mounted correctly Open a shell session in the Pod: kubectl exec -it pd-xfs-pod -- /bin/bash Look for xfs partitions: df -aTh --type = xfs The output should be similar to the following: Filesystem Type Size Used Avail Use% Mounted on /dev/sdb xfs 30G 63M 30G 1% /xfs View logs for Compute Engine persistent disk CSI Driver You can use Cloud Logging to view events that relate to the Compute Engine persistent disk CSI Driver.
- Make sure to add csi.storage.k8s.io/fstype: NTFS to the parameters list: apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : pd-sc-windows provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : pd-balanced csi.storage.k8s.io/fstype : NTFS Create a PersistentVolumeClaim After creating a StorageClass for Windows, you can now create a PersistentVolumeClaim that references that StorageClass: kind : PersistentVolumeClaim apiVersion : v1 metadata : name : podpvc-windows spec : accessModes : - ReadWriteOnce storageClassName : pd-sc-windows resources : requests : storage : 6Gi Create a Pod that consumes the volume The following example consumes the volume that you created in the previous task: apiVersion : v1 kind : Pod metadata : name : web-server spec : # Node selector to ensure the Pod runs on a Windows node. nodeSelector : kubernetes.io/os : windows containers : - name : iis-server # The container image to use. image : mcr.microsoft.com/windows/servercore/iis ports : - containerPort : 80 volumeMounts : # The path in the container where the volume will be mounted. - mountPath : /var/lib/www/html name : mypvc volumes : - name : mypvc persistentVolumeClaim : # References the PersistentVolumeClaim created earlier. claimName : podpvc-windows readOnly : false Dynamically modify Hyperdisk IOPS and throughput by using VolumeAttributeClass You can use VolumeAttributesClass with the Compute Engine persistent disk CSI Driver to dynamically modify persistent disk attributes, including IOPS and throughput.
- This field must be set to the same value as the provisioned IOPS value that you specified when you created your persistent disk. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : pd-extreme-example provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : pd-extreme provisioned-iops-on-create:'10000' After creating the pd-example-class.yaml file, run the following command: kubectl create -f pd-example-class.yaml Create a PersistentVolumeClaim You can create a PersistentVolumeClaim that references the Compute Engine persistent disk CSI Driver's StorageClass.
- You can find the name of your installed StorageClasses by running the following command: kubectl get sc You can also install a different StorageClass that uses the Compute Engine persistent disk CSI Driver by adding pd.csi.storage.gke.io in the provisioner field.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scale down the MySQL deployment to 0 replicas to stop writes: kubectl scale deployment regular-mysql --replicas = 0 Create a snapshot from the existing Persistent Disk: gcloud compute disks snapshot ${ PV NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd" Create a new Hyperdisk volume named mysql-recovery from the snapshot: gcloud compute disks create mysql-recovery --project = ${ PROJECT ID } \ --type = hyperdisk-balanced \ --size = 150GB --location = ${ LOCATION } \ --source-snapshot = projects/ ${ PROJECT ID } /global/snapshots/original-snapshot Update the manifest file for the restored PV with your project ID: apiVersion : v1 kind : PersistentVolume metadata : name : backup spec : storageClassName : balanced-storage capacity : storage : 150G accessModes : - ReadWriteOnce claimRef : name : hyperdisk-recovery namespace : default csi : driver : pd.csi.storage.gke.io volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery fsType : ext4 --- apiVersion : v1 kind : PersistentVolumeClaim metadata : namespace : default name : hyperdisk-recovery spec : storageClassName : balanced-storage accessModes : - ReadWriteOnce resources : requests : storage : 150G sed -i "s/PRJCTID/ $PROJECT ID /g" manifests/02-mysql/restore pv.yaml Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk: kubectl apply -f manifests/02-mysql/restore pv.yaml Verify the data migration Deploy a new MySQL instance that uses the newly created Hyperdisk volume.
- This StorageClass will be used later in the tutorial. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume. apiVersion : v1 kind : Service metadata : name : regular-mysql labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-pv-claim kubectl apply -f manifests/02-mysql/mysql-deployment.yaml This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
- Learn about using the Compute Engine Persistent Disk CSI Driver for managing Persistent Disk and Hyperdisk volumes.
- Costs In this document, you use the following billable components of Google Cloud: GKE Compute Engine , which includes: Storage capacity provisioned for both Persistent Disk and Hyperdisk.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk by using Backup\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the target GKE cluster on an N4 node: gcloud container clusters create ${ TARGET CLUSTER PREFIX } -cluster \ --location ${ ZONE } \ --node-locations ${ ZONE } \ --shielded-secure-boot \ --shielded-integrity-monitoring \ --machine-type "e2-micro" \ --num-nodes "1" Create a node pool with n4-standard-4 machine types, which are required for Hyperdisk: gcloud container node-pools create hyperdisk-pool \ --cluster ${ TARGET CLUSTER PREFIX } -cluster \ --machine-type n4-standard-4 \ --zone ${ ZONE } \ --num-nodes 1 Get credentials for the target cluster: gcloud container clusters get-credentials ${ TARGET CLUSTER PREFIX } -cluster --zone ${ ZONE } Apply the Hyperdisk StorageClass named balanced-storage : kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml The following manifest defines a Hyperdisk StorageClass : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" Review the transformation rules in the manifests/03-transformation-rule/volume.yaml file.
- Costs In this document, you use the following billable components of Google Cloud: GKE Compute Engine (Persistent Disk and Hyperdisk) Backup for GKE To generate a cost estimate based on your projected usage, use the pricing calculator .
- The root password is set to migration : apiVersion : v1 kind : Service metadata : name : mysql-a labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-a-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql-a labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql-a volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-a-pv-claim Deploy the mysql-b-deployment.yaml file: kubectl apply -f manifests/02-mysql/mysql-b-deployment.yaml -n namespace-b The following manifest creates a MySQL Pod in namespace-b with dynamically provisioned Persistent Disk SSD disks on the regular-pool nodes.
- Create the namespace-a and namespace-b namespaces: kubectl create namespace namespace-a kubectl create namespace namespace-b Deploy the MySQL workloads in namespace-a and namespace-b : Deploy the mysql-a-deployment.yaml file: kubectl apply -f manifests/02-mysql/mysql-a-deployment.yaml -n namespace-a The following manifest creates a MySQL Pod in namespace-a with dynamically provisioned Persistent Disk SSD disks on the regular-pool nodes.


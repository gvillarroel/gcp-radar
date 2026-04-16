---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.723Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Confidential Hyperdisk Balanced volumes"
feature_slug: "confidential-hyperdisk-balanced-volumes"
latest_feature_date: "2024-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "confidential"
  - "hyperdisk"
  - "balanced"
  - "volumes"
  - "can"
  - "created"
  - "mode"
  - "custom"
---

# Confidential Hyperdisk Balanced volumes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Hyperdisk Balanced volumes can be created in Confidential mode for custom boot disks and persistent volumes and attached to Confidential GKE Nodes.

## Extended Definition

Hyperdisk Balanced volumes can be created in Confidential mode for custom boot disks and persistent volumes and attached to Confidential GKE Nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The supported technologies at the node pool level depend on whether the node pool uses node auto-provisioning, as follows: Manually created node pools : AMD SEV AMD SEV-SNP Intel TDX Auto-provisioned node pools : AMD SEV AMD SEV-SNP Confidential mode for Hyperdisk Balanced You can also enable Confidential mode for Hyperdisk Balanced on your boot disk storage, which encrypts your data on additional hardware-backed enclaves.
- Confidential mode for Hyperdisk Balanced has the following limitations: All of the limitations of using customer-managed encryption keys (CMEK) to encrypt disks apply to Confidential mode for Hyperdisk Balanced.
- For any node pool created with the Confidential mode for Hyperdisk Balanced setting, only the nodes in the node pool are restricted to the setup configuration.
- The following examples show how you can create a Confidential mode for Hyperdisk Balanced StorageClass for each Hyperdisk type: Hyperdisk Balanced Save the following manifest in a file named confidential-hdb-example-class.yaml : apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" enable-confidential-storage : true disk-encryption-kms-key : "projects/ KMS PROJECT ID /locations/ REGION /keyRings/ KEY RING /cryptoKeys/ HSM KEY NAME " Replace the following: KMS PROJECT ID : the project that owns the Cloud KMS key REGION : the region where the disk is located KEY RING : the name of the key ring that includes the key HSM KEY NAME : the name of the HSM key used to encrypt the disk Create the StorageClass: kubectl create -f hdb-example-class.yaml Create a Hyperdisk Persistent Volume Claim for GKE that uses your Confidential mode for Hyperdisk Balanced volume.

### "Migrate your MySQL data from Persistent Disk to Hyperdisk in GKE \_|\_ Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This StorageClass will be used later in the tutorial. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : balanced-storage provisioner : pd.csi.storage.gke.io volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true parameters : type : hyperdisk-balanced provisioned-throughput-on-create : "250Mi" provisioned-iops-on-create : "7000" kubectl apply -f manifests/01-storage-class/storage-class-hdb.yaml Create and deploy a MySQL instance that includes node affinity to ensure Pods are scheduled on regular-pool nodes, and provisions a Persistent Disk SSD volume. apiVersion : v1 kind : Service metadata : name : regular-mysql labels : app : mysql spec : ports : - port : 3306 selector : app : mysql clusterIP : None --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : mysql-pv-claim labels : app : mysql spec : accessModes : - ReadWriteOnce resources : requests : storage : 30Gi storageClassName : premium-rwo --- apiVersion : apps/v1 kind : Deployment metadata : name : existing-mysql labels : app : mysql spec : selector : matchLabels : app : mysql strategy : type : Recreate template : metadata : labels : app : mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "node.kubernetes.io/instance-type" operator : In values : - "n2-standard-4" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : mysql-pv-claim kubectl apply -f manifests/02-mysql/mysql-deployment.yaml This manifest creates a MySQL deployment and service, with a dynamically provisioned Persistent Disk for data storage.
- Scale down the MySQL deployment to 0 replicas to stop writes: kubectl scale deployment regular-mysql --replicas = 0 Create a snapshot from the existing Persistent Disk: gcloud compute disks snapshot ${ PV NAME } --location = ${ LOCATION } --snapshot-name = original-snapshot --description = "snapshot taken from pd-ssd" Create a new Hyperdisk volume named mysql-recovery from the snapshot: gcloud compute disks create mysql-recovery --project = ${ PROJECT ID } \ --type = hyperdisk-balanced \ --size = 150GB --location = ${ LOCATION } \ --source-snapshot = projects/ ${ PROJECT ID } /global/snapshots/original-snapshot Update the manifest file for the restored PV with your project ID: apiVersion : v1 kind : PersistentVolume metadata : name : backup spec : storageClassName : balanced-storage capacity : storage : 150G accessModes : - ReadWriteOnce claimRef : name : hyperdisk-recovery namespace : default csi : driver : pd.csi.storage.gke.io volumeHandle : projects/PRJCTID/zones/us-central1-a/disks/mysql-recovery fsType : ext4 --- apiVersion : v1 kind : PersistentVolumeClaim metadata : namespace : default name : hyperdisk-recovery spec : storageClassName : balanced-storage accessModes : - ReadWriteOnce resources : requests : storage : 150G sed -i "s/PRJCTID/ $PROJECT ID /g" manifests/02-mysql/restore pv.yaml Create the PersistentVolume (PVC) and PersistentVolumeClaim from the new Hyperdisk: kubectl apply -f manifests/02-mysql/restore pv.yaml Verify the data migration Deploy a new MySQL instance that uses the newly created Hyperdisk volume.
- TABLE NAME TABLE ROWS +----------------------------+------------+ actor 200 actor info NULL address 603 category 16 city 600 country 109 customer 599 customer list NULL film 1000 film actor 5462 film category 1000 film list NULL film text 1000 inventory 4581 language 6 nicer but slower film list NULL payment 16086 rental 16419 sales by film category NULL sales by store NULL staff 2 staff list NULL store 2 +----------------------------+------------+ 23 rows in set (0.01 sec) Exit the mysql session: exit ; Exit the client Pod shell: exit Get the name of the PersistentVolume (PV) created for MySQL and store it in an environment variable: export PV NAME = $( kubectl get pvc mysql-pv-claim -o jsonpath = '{.spec.volumeName}' ) Migrate the data to a Hyperdisk volume Now you have a MySQL workload with data stored on a Persistent Disk SSD volume.
- Deploy the new MySQL instance: apiVersion : v1 kind : Service metadata : name : recovered-mysql labels : app : new-mysql spec : ports : - port : 3306 selector : app : new-mysql clusterIP : None --- apiVersion : apps/v1 kind : Deployment metadata : name : new-mysql labels : app : new-mysql spec : selector : matchLabels : app : new-mysql strategy : type : Recreate template : metadata : labels : app : new-mysql spec : containers : - image : mysql:8.0 name : mysql env : - name : MYSQL ROOT PASSWORD value : migration - name : MYSQL DATABASE value : mysql - name : MYSQL USER value : app - name : MYSQL PASSWORD value : migration ports : - containerPort : 3306 name : mysql volumeMounts : - name : mysql-persistent-storage mountPath : /var/lib/mysql affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : - key : "cloud.google.com/gke-nodepool" operator : In values : - "hyperdisk-pool" volumes : - name : mysql-persistent-storage persistentVolumeClaim : claimName : hyperdisk-recovery kubectl apply -f manifests/02-mysql/recovery mysql deployment.yaml To verify data integrity, connect to the MySQL client Pod again: kubectl exec -it mysql-client -- bash Inside the client Pod, connect to the new MySQL database ( recovered-mysql.default ) and verify the data.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.
- Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion} aggregationCa string The Certificate Authority Service caPool to use for the aggregation CA in this cluster. controlPlaneDiskEncryptionKey string The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes. controlPlaneDiskEncryptionKeyVersions[] string Output only.


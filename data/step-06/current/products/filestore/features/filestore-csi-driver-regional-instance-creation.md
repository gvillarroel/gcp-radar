---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.654Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore CSI driver regional instance creation"
feature_slug: "filestore-csi-driver-regional-instance-creation"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/editing-instances"
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
keywords:
  - "filestore"
  - "csi"
  - "driver"
  - "regional"
  - "instance"
  - "creation"
  - "the"
  - "can"
---

# Filestore CSI driver regional instance creation

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

The Filestore CSI driver can create Filestore regional instances.

## Extended Definition

The Filestore CSI driver can create Filestore regional instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/editing-instances](https://docs.cloud.google.com/filestore/docs/editing-instances)
- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)

## Supporting Pages

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- Create a volume using the Filestore CSI driver The following sections describe the typical process for using a Kubernetes volume backed by a Filestore CSI driver in GKE: Create a StorageClass Use a PersistentVolumeClaim to access the volume Create a Deployment that consumes the volume Create a StorageClass After you enable the Filestore CSI driver, GKE automatically installs the following StorageClasses for provisioning Filestore instances: zonal-rwx , using the Filestore zonal tier . enterprise-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a Filestore instance. enterprise-multishare-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a share of a given Filestore instance.
- Create a StorageClass when using the Filestore CSI driver with Shared VPC The following example shows how you can create a StorageClass when using the Filestore CSI driver with Shared VPC: cat <<EOF kubectl apply -f - apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name: filestore-sharedvpc-example provisioner: filestore.csi.storage.gke.io parameters: network: "projects/ HOST PROJECT ID /global/networks/ SHARED VPC NAME " connect-mode: PRIVATE SERVICE ACCESS reserved-ip-range: RESERVED IP RANGE NAME allowVolumeExpansion: true EOF Replace the following: HOST PROJECT ID : the ID or name of the host project of the Shared VPC network.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- You can set the default location by running the config set filestore/zone command: gcloud config set filestore/zone zone For the regional or enterprise tier, use the config set filestore/region command: gcloud config set filestore/region region DESCRIPTION A description of the Filestore instance.
- Access Filestore instances with the Filestore CSI driver .

### Edit instances \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/editing-instances](https://docs.cloud.google.com/filestore/docs/editing-instances)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once created, you can modify a Filestore instance in the following ways: Increase its capacity Decrease capacity for the following service tiers : Zonal Regional Enterprise Configure performance Change its description Manage IP-based access control rules Manage labels For more information, see Managing labels .
- Access Filestore instances with the Filestore CSI driver .
- Instructions for editing an instance Google Cloud console To edit Filestore instances using the Google Cloud console, navigate to the Edit instance page, where you can edit the instance description, manage IP-based access control rules, and scale the file share performance: In the Google Cloud console, go to the Filestore Instances page.
- Click Save . gcloud Before you begin To use the gcloud CLI, you must either install the gcloud CLI or use the Cloud Shell that's built into the Google Cloud console: Go to the Google Cloud console gcloud command for editing an instance You can edit a Filestore instance by running the instances update command.

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- The Filestore CSI driver does not support dynamic provisioning or backup workflows for the Regional Filestore service tier : You can back up only one share per instance at a time.
- You can verify that you're using a CSI driver by checking that the PersistentVolume spec has a csi section with driver: pd.csi.storage.gke.io or filestore.csi.storage.gke.io .
- To learn more, see Access Filestore instances with the Filestore CSI driver .
- Both volumeSnapshotRef.name and volumeSnapshotRef.namespace must point to the previously created VolumeSnapshot for the bi-directional binding to be valid. apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotContent metadata : name : restored-snapshot-content spec : deletionPolicy : Retain driver : filestore.csi.storage.gke.io source : snapshotHandle : projects/ PROJECT ID /global/snapshots /SNAPSHOT NAME volumeSnapshotRef : kind : VolumeSnapshot name : restored-snapshot namespace : default Apply the manifest: kubectl apply -f restored-snapshot-content.yaml Save the following PersistentVolumeClaim manifest as restored-pvc.yaml .


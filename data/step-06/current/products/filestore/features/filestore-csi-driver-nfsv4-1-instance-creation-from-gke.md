---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.654Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore CSI driver NFSv4.1 instance creation from GKE"
feature_slug: "filestore-csi-driver-nfsv4-1-instance-creation-from-gke"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/about-supported-protocols"
keywords:
  - "filestore"
  - "csi"
  - "driver"
  - "nfsv4"
  - "instance"
  - "creation"
  - "from"
  - "gke"
---

# Filestore CSI driver NFSv4.1 instance creation from GKE

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

The Filestore CSI driver can create Filestore instances with the NFSv4.1 protocol from Google Kubernetes Engine clusters.

## Extended Definition

The Filestore CSI driver can create Filestore instances with the NFSv4.1 protocol from Google Kubernetes Engine clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)

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
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.
- Use NFSv4.1 file system protocol with Filestore The Filestore CSI driver supports the NFSv4.1 file system protocol with GKE version 1.33 or later.

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both volumeSnapshotRef.name and volumeSnapshotRef.namespace must point to the previously created VolumeSnapshot for the bi-directional binding to be valid. apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotContent metadata : name : restored-snapshot-content spec : deletionPolicy : Retain driver : filestore.csi.storage.gke.io source : snapshotHandle : projects/ PROJECT ID /global/snapshots /SNAPSHOT NAME volumeSnapshotRef : kind : VolumeSnapshot name : restored-snapshot namespace : default Apply the manifest: kubectl apply -f restored-snapshot-content.yaml Save the following PersistentVolumeClaim manifest as restored-pvc.yaml .
- Filestore apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotClass metadata : name : my-snapshotclass driver : filestore.csi.storage.gke.io parameters : type : backup deletionPolicy : Delete In this example: The driver field is used by the CSI driver to provision the snapshot.
- The Filestore CSI driver does not support dynamic provisioning or backup workflows for the Regional Filestore service tier : You can back up only one share per instance at a time.
- You can verify that you're using a CSI driver by checking that the PersistentVolume spec has a csi section with driver: pd.csi.storage.gke.io or filestore.csi.storage.gke.io .

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Access Filestore instances with the Filestore CSI driver .
- Configure IP-based access control By default, a Filestore instance grants root level read and write access to all clients, including Compute Engine VMs and GKE clusters, that share the same Google Cloud project and VPC network.
- Alternatively, Filestore multishares for GKE , available for enterprise-tier instances only, offers access to multiple shares on a single instance.
- See how to retrieve instance details, such as the instance's IP address, so that you can access the Filestore file share from clients .

### "About supported file system protocols \_|\_ Filestore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/about-supported-protocols](https://docs.cloud.google.com/filestore/docs/about-supported-protocols)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a comprehensive list of supported GKE versions for each Filestore service tier and protocol, see the compatibility table in Access Filestore instances with the Filestore CSI driver .
- Supported by Filestore CSI driver to create zonal or enterprise instances and mount them with NFSv4.1 semantics.
- Create a Filestore instance with Private Service Connect Configure the NFSv4.1 protocol Create a Filestore instance with Managed Microsoft AD Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- GKE limitations The NFSv4.1 protocol can't be combined with Filestore multishares for GKE .


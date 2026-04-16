---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.658Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Enterprise single-share backups for GKE"
feature_slug: "enterprise-single-share-backups-for-gke"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/backups"
  - "https://docs.cloud.google.com/filestore/docs/overview"
keywords:
  - "enterprise"
  - "single"
  - "share"
  - "backups"
  - "for"
  - "gke"
  - "filestore"
  - "kubernetes"
---

# Enterprise single-share backups for GKE

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore Enterprise single-share backups for Google Kubernetes Engine are generally available.

## Extended Definition

Filestore Enterprise single-share backups for Google Kubernetes Engine are generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)

## Supporting Pages

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only the following Filestore service tiers are supported: Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Use control plane versions 1.17 or later.
- You can check the status by running the following command: kubectl get volumesnapshot \ -o custom-columns = 'NAME:.metadata.name,READY:.status.readyToUse' If the snapshot is ready to use, the output is similar to the following: NAME READY my-snapshot true Delete the test file Delete the test file that you created: kubectl exec POD NAME \ -- sh -c 'rm /usr/share/hello/hello.txt' Verify that the file no longer exists: kubectl exec POD NAME \ -- sh -c 'cat /usr/share/hello/hello.txt' The output is similar to the following: cat: /usr/share/hello/hello.txt: No such file or directory Restore the volume snapshot Save the following manifest as pvc-restore.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : pvc-restore spec : dataSource : name : my-snapshot kind : VolumeSnapshot apiGroup : snapshot.storage.k8s.io storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti Note: The namespace of the PersistentVolumeClaim must be the same as the namespace of the VolumeSnapshot .
- Both volumeSnapshotRef.name and volumeSnapshotRef.namespace must point to the previously created VolumeSnapshot for the bi-directional binding to be valid. apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotContent metadata : name : restored-snapshot-content spec : deletionPolicy : Retain driver : filestore.csi.storage.gke.io source : snapshotHandle : projects/ PROJECT ID /global/snapshots /SNAPSHOT NAME volumeSnapshotRef : kind : VolumeSnapshot name : restored-snapshot namespace : default Apply the manifest: kubectl apply -f restored-snapshot-content.yaml Save the following PersistentVolumeClaim manifest as restored-pvc.yaml .
- Apply the manifest: kubectl apply -f pvc-restore.yaml Update the my-deployment.yaml file to use the new PersistentVolumeClaim : ... volumes : - name : my-volume persistentVolumeClaim : claimName : pvc-restore Apply the updated manifest: kubectl apply -f my-deployment.yaml Check that the snapshot restored successfully Get the name of the new Pod that GKE creates for the updated Deployment : kubectl get pods -l app = hello-app Verify that the test file exists: kubectl exec NEW POD NAME \ -- sh -c 'cat /usr/share/hello/hello.txt' Replace NEW POD NAME with the name of the new Pod that GKE created.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Create a volume using the Filestore CSI driver The following sections describe the typical process for using a Kubernetes volume backed by a Filestore CSI driver in GKE: Create a StorageClass Use a PersistentVolumeClaim to access the volume Create a Deployment that consumes the volume Create a StorageClass After you enable the Filestore CSI driver, GKE automatically installs the following StorageClasses for provisioning Filestore instances: zonal-rwx , using the Filestore zonal tier . enterprise-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a Filestore instance. enterprise-multishare-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a share of a given Filestore instance.
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.

### About backups \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the differences between standard and enhanced backups: Feature Standard backups Enhanced backups Backup management Filestore Backup and DR Service Tier availability Basic , Zonal, Regional, Enterprise Zonal, Regional, Enterprise Backup scheduling No Yes Backup secured against unauthorized deletion or changes - Immutable and indelible backups through backup vault Automated backup frequency - Hourly, daily, weekly, monthly, yearly On-demand backup retention Retained indefinitely until manually deleted Retained until expired (by a backup rule) or manually deleted Backups protected against source project deletion - ✔ Centralized backup management across resources and projects - ✔ Long-term (>1 year) backup retention - ✔ Backups protected against source instance deletion ✔ ✔ Customer-managed encryption (CMEK) ✔ Planned Multi-regional backups ✔ Planned Cross-region backups ✔ Planned Back up a file share Backed up data include all the file system data and metadata.
- Supported tiers The following table shows the Filestore service tiers that support backups, encryption, and related restore operations: Tier Backups support restore to new instance restore to existing instance restore to source instance CMEK support Basic HDD Yes Yes Yes Yes No Basic SSD Yes Yes Yes Yes No Zonal Yes Yes No No Yes Regional Yes Yes No No Yes Enterprise Yes Yes No No Yes Backup options Filestore offers the following backup options: Standard backups: Filestore creates, manages, and stores standard backups in the same project as your Filestore instances..
- The following table shows what instance information backups preserve and what information they don't: Preserved Not preserved Instance ID Description Tier of the source instance Location Capacity Network File share name IP address IP-based access controls File locks Lock state Snapshots Backup deletion Backups are project-level resources, not a sub-resource of the source instance, and require their own separate storage.
- You can use a backup to restore a file share to a new Filestore instance or, for basic tier instances, to the source of an existing file share.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- For Google Kubernetes Engine users, for example, Filestore provides multiple reader, multiple writer access, letting you mount your GKE PersistentVolumes as read-write by many nodes.
- Multishares for GKE (Enterprise): Optimized for GKE workloads that require high availability and multishares.
- Networking For information related to Filestore networking requirements, see the following resources: Filestore networking and IP resource requirements Configure NFS ports on client VMs Configure firewall rules Create an instance on a Shared VPC network in service projects Supported file system protocols Performance Custom performance lets you define the performance settings for your Filestore instances independently of the specified capacity.
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.


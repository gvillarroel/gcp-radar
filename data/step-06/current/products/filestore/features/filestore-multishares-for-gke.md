---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.663Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore Multishares for GKE"
feature_slug: "filestore-multishares-for-gke"
latest_feature_date: "2022-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
  - "https://docs.cloud.google.com/filestore/docs/getting-instance-information"
keywords:
  - "filestore"
  - "multishares"
  - "for"
  - "gke"
  - "is"
  - "generally"
  - "available"
  - "in"
---

# Filestore Multishares for GKE

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore Multishares for GKE is generally available; Filestore Multishares for GKE is available in preview.

## Extended Definition

Filestore Multishares for GKE is generally available; Filestore Multishares for GKE is available in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)

## Supporting Pages

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to provision a volume backed by Filestore multishares on GKE clusters running version 1.23 or later, see Optimize storage with Filestore multishares for GKE .
- Access pre-existing Filestore instances using the Filestore CSI driver This section describes the typical process for using a Kubernetes volume to access pre-existing Filestore instances using Filestore CSI driver in GKE: Create a PersistentVolume and a PersistentVolumeClaim to access the instance Create a manifest file like the one shown in the following example, and name it preprov-filestore.yaml : apiVersion : v1 kind : PersistentVolume metadata : name : PV NAME spec : storageClassName : "" capacity : storage : 1Ti accessModes : - ReadWriteMany persistentVolumeReclaimPolicy : Retain volumeMode : Filesystem csi : driver : filestore.csi.storage.gke.io volumeHandle : "modeInstance/ FILESTORE INSTANCE LOCATION / FILESTORE INSTANCE NAME / FILESTORE SHARE NAME " volumeAttributes : ip : FILESTORE INSTANCE IP volume : FILESTORE SHARE NAME protocol : FILESYSTEM PROTOCOL claimRef : name : PVC NAME namespace : NAMESPACE --- kind : PersistentVolumeClaim apiVersion : v1 metadata : name : PVC NAME namespace : NAMESPACE spec : accessModes : - ReadWriteMany storageClassName : "" resources : requests : storage : 1Ti To create the PersistentVolumeClaim and PersistentVolume resources based on the preprov-filestore.yaml manifest file, run the following command: kubectl apply -f preprov-filestore.yaml To specify the NFSv4.1 file system protocol, set the protocol field to NFS V4 1 in the volumeAttributes field of a PersistentVolume object.
- Create a volume using the Filestore CSI driver The following sections describe the typical process for using a Kubernetes volume backed by a Filestore CSI driver in GKE: Create a StorageClass Use a PersistentVolumeClaim to access the volume Create a Deployment that consumes the volume Create a StorageClass After you enable the Filestore CSI driver, GKE automatically installs the following StorageClasses for provisioning Filestore instances: zonal-rwx , using the Filestore zonal tier . enterprise-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a Filestore instance. enterprise-multishare-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a share of a given Filestore instance.
- Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Filestore uses the NFSv3 file system protocol on the Filestore instance by default and supports any NFSv3-compatible client.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternatively, Filestore multishares for GKE , available for enterprise-tier instances only, offers access to multiple shares on a single instance.
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both volumeSnapshotRef.name and volumeSnapshotRef.namespace must point to the previously created VolumeSnapshot for the bi-directional binding to be valid. apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotContent metadata : name : restored-snapshot-content spec : deletionPolicy : Retain driver : filestore.csi.storage.gke.io source : snapshotHandle : projects/ PROJECT ID /global/snapshots /SNAPSHOT NAME volumeSnapshotRef : kind : VolumeSnapshot name : restored-snapshot namespace : default Apply the manifest: kubectl apply -f restored-snapshot-content.yaml Save the following PersistentVolumeClaim manifest as restored-pvc.yaml .
- Only the following Filestore service tiers are supported: Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Use control plane versions 1.17 or later.
- Filestore apiVersion : snapshot.storage.k8s.io/v1 kind : VolumeSnapshotClass metadata : name : my-snapshotclass driver : filestore.csi.storage.gke.io parameters : type : backup deletionPolicy : Delete In this example: The driver field is used by the CSI driver to provision the snapshot.
- Home Documentation Storage Filestore Guides Send feedback Back up and restore persistent storage for your GKE clusters Stay organized with collections Save and categorize content based on your preferences.

### Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Filestore instances page Click the instance ID to open the instance details page. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe instance-id --project= project-id --location= location The response to the instances describe command is similar to the following: createTime: '2021-10-11T17:28:23.340943077Z' customPerformanceSupported: true fileShares: - capacityGb: '1024' name: vol1 kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key labels: key:val name: projects/yourproject/locations/us-central1/instances/nfs-server networks: - ipAddresses: - 10.0.0.2 network: default reservedIpRange: 10.0.0.0/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' state: READY tier: REGIONAL These fields represent the following values: createTime : The time the instance was created, in RFC 3339 format. fileShares : capacityGb : The size of the Filestore file share in binary gigabytes ( GB ), where 1 GB = 1024 3 bytes. name : The name of the Filestore file share.
- List the mount points for an instance You can list all mount points where a Filestore instance is mounted by running: sudo showmount -a INSTANCE IP Example The following command lists all mount points for a Filestore instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 The response looks similar to the following: All mount points on 10 .77.67.226: 10 .128.0.1:/fileshare 10 .128.0.2:/fileshare 10 .128.0.3:/fileshare Get the number of mount points for an instance You can get the total number of mount points for a Filestore instance by running: sudo showmount -a INSTANCE IP --no-headers wc -l Example The following command displays the number of mount points for an instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 --no-headers wc -l What's next Create another instance .
- View all instances in a project Google Cloud console You can get information about your Filestore instances, and view all instances in a project, by going to the Filestore instances page: Go to the Filestore instances page gcloud You can get information about your Filestore instances, and view all instances in a project, by running the instances list command: gcloud filestore instances list --project= project-id --zone= zone where: project-id is the project ID of the Google Cloud project that contains the Filestore instance.
- INSTANCE NAME ZONE TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-loc europe-west1-b BASIC HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28 nfs3 us-central1-c BASIC HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18 Example The following command lists the Filestore instances in project myproject : gcloud filestore instances list --project=myproject REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.


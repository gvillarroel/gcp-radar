---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.664Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Enterprise tier"
feature_slug: "enterprise-tier"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/overview"
keywords:
  - "enterprise"
  - "tier"
  - "filestore"
  - "is"
  - "generally"
  - "available"
  - "lets"
  - "you"
---

# Enterprise tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore Enterprise tier is generally available; Filestore Enterprise tier lets you create 1-10 TiB regional instances that scale with storage needs.

## Extended Definition

Filestore Enterprise tier is generally available; Filestore Enterprise tier lets you create 1-10 TiB regional instances that scale with storage needs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)

## Supporting Pages

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the status by running the following command: kubectl get volumesnapshot \ -o custom-columns = 'NAME:.metadata.name,READY:.status.readyToUse' If the snapshot is ready to use, the output is similar to the following: NAME READY my-snapshot true Delete the test file Delete the test file that you created: kubectl exec POD NAME \ -- sh -c 'rm /usr/share/hello/hello.txt' Verify that the file no longer exists: kubectl exec POD NAME \ -- sh -c 'cat /usr/share/hello/hello.txt' The output is similar to the following: cat: /usr/share/hello/hello.txt: No such file or directory Restore the volume snapshot Save the following manifest as pvc-restore.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : pvc-restore spec : dataSource : name : my-snapshot kind : VolumeSnapshot apiGroup : snapshot.storage.k8s.io storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti Note: The namespace of the PersistentVolumeClaim must be the same as the namespace of the VolumeSnapshot .
- Only the following Filestore service tiers are supported: Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Use control plane versions 1.17 or later.
- Create a PersistentVolumeClaim and a Deployment To create the PersistentVolumeClaim object, save the following manifest as my-pvc.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : my-pvc spec : storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti This example creates an enterprise tier Filestore PVC.
- The Filestore CSI driver does not support dynamic provisioning or backup workflows for the Regional Filestore service tier : You can back up only one share per instance at a time.

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Create a volume using the Filestore CSI driver The following sections describe the typical process for using a Kubernetes volume backed by a Filestore CSI driver in GKE: Create a StorageClass Use a PersistentVolumeClaim to access the volume Create a Deployment that consumes the volume Create a StorageClass After you enable the Filestore CSI driver, GKE automatically installs the following StorageClasses for provisioning Filestore instances: zonal-rwx , using the Filestore zonal tier . enterprise-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a Filestore instance. enterprise-multishare-rwx , using the Filestore enterprise tier , where each Kubernetes PersistentVolume maps to a share of a given Filestore instance.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.
- Reconnect Filestore single share volumes If you are using Filestore with the basic HDD, basic SSD, or enterprise (single share) tier, you can follow these instructions to reconnect your existing Filestore instance to your GKE workloads.
- The following example manifest shows how to specify the configuration: apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : filestore-example provisioner : filestore.csi.storage.gke.io volumeBindingMode : Immediate allowVolumeExpansion : true parameters : tier : "enterprise" nfs-export-options-on-create : '[ { "accessMode": "READ WRITE", "ipRanges": [ "10.0.0.0/24" ], "squashMode": "ROOT SQUASH", "anonUid": "1003", "anonGid": "1003" }, { "accessMode": "READ WRITE", "ipRanges": [ "10.0.0.0/28" ], "squashMode": "NO ROOT SQUASH" } ]' Note: Use the node primary IP range instead of the Pod IP in the nfs-export-options-on-create parameter.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- You can set the default location by running the config set filestore/zone command: gcloud config set filestore/zone zone For the regional or enterprise tier, use the config set filestore/region command: gcloud config set filestore/region region DESCRIPTION A description of the Filestore instance.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn more about Filestore's service tiers to decide which service tier is right for you.
- Networking For information related to Filestore networking requirements, see the following resources: Filestore networking and IP resource requirements Configure NFS ports on client VMs Configure firewall rules Create an instance on a Shared VPC network in service projects Supported file system protocols Performance Custom performance lets you define the performance settings for your Filestore instances independently of the specified capacity.
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.
- When you delete a Filestore instance, Google discards the encryption information used by the instance, rendering the data irretrievable as per the description in Data deletion on Google Cloud .


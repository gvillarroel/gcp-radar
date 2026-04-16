---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.176Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "gitRepo volume driver"
feature_slug: "gitrepo-volume-driver"
latest_feature_date: "2025-05-09"
deprecation_date: "2025-05-09"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr"
keywords:
  - "gitrepo"
  - "clones"
  - "repository"
  - "into"
  - "volume"
  - "driver"
---

# gitRepo volume driver

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The gitRepo volume driver clones a Git repository into a volume for use by a Pod; deprecated on 2025-05-09.

## Extended Definition

The gitRepo volume driver clones a Git repository into a volume for use by a Pod; deprecated on 2025-05-09.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If the git repository is maliciously constructed, a user with the ability to create a Pod and associate a gitRepo volume could execute arbitrary commands beyond the container boundary.
- If the git repository is maliciously constructed, a user with the ability to create a Pod and associate a gitRepo volume could execute arbitrary commands beyond the container boundary.
- If the git repository is maliciously constructed, a user with the ability to create a Pod and associate a gitRepo volume could execute arbitrary commands beyond the container boundary.
- If the git repository is maliciously constructed, a user with the ability to create a Pod and associate a gitRepo volume could execute arbitrary commands beyond the container boundary.

### "Manually optimize Cloud Storage FUSE CSI driver for performance \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Inference serving example The following example shows how to enable parallel download for inference serving: Create a PersistentVolume and PersistentVolumeClaim manifest with the following specification: apiVersion : v1 kind : PersistentVolume metadata : name : serving-bucket-pv spec : accessModes : - ReadWriteMany capacity : storage : 64Gi persistentVolumeReclaimPolicy : Retain storageClassName : example-storage-class claimRef : namespace : NAMESPACE name : serving-bucket-pvc mountOptions : - implicit-dirs #avoid if list cache enabled and doing metadata prefetch - metadata-cache:ttl-secs:-1 - metadata-cache:stat-cache-max-size-mb:-1 - metadata-cache:type-cache-max-size-mb:-1 - file-cache:max-size-mb:-1 - file-cache:cache-file-for-range-read:true - file-system:kernel-list-cache-ttl-secs:-1 - file-cache:enable-parallel-downloads:true - read ahead kb=1024 csi : driver : gcsfuse.csi.storage.gke.io volumeHandle : BUCKET NAME volumeAttributes : skipCSIBucketAccessCheck : "true" gcsfuseMetadataPrefetchOnMount : "true" --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : serving-bucket-pvc namespace : NAMESPACE spec : accessModes : - ReadWriteMany resources : requests : storage : 64Gi volumeName : serving-bucket-pv storageClassName : example-storage-class Replace the following values: NAMESPACE : the Kubernetes namespace where you want to deploy your Pod.
- To use a RAM disk with the Cloud Storage FUSE CSI driver, add the following to your manifest: volumes : - name : gke-gcsfuse-cache emptyDir : medium : Memory Stat cache The Cloud Storage FUSE CSI driver enhances performance by caching file metadata, like size and modification time.
- Use metadata prefetch to pre-populate the metadata cache The metadata prefetch feature lets the Cloud Storage FUSE CSI driver proactively load relevant metadata about the objects in your Cloud Storage bucket into Cloud Storage FUSE caches.
- During volume mount, the Cloud Storage FUSE CSI driver fetches the target's node instance type and passes it to Cloud Storage FUSE through a new mount option machine-type .

### "Cloud Storage FUSE CSI driver volume attributes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback Cloud Storage FUSE CSI driver volume attributes Stay organized with collections Save and categorize content based on your preferences.
- If you want to fine-tune specific behavior of the Cloud Storage FUSE CSI driver, you can use volume attributes .
- Valid values (ordered from lowest severity to highest severity): trace debug info warning error Default value : info . gcsfuseMetadataPrefetchOnMount Description : Enable the prefetch of the metadata caches for a specified volume.
- Default value : "60". skipCSIBucketAccessCheck Description : Directs the CSI driver to skip redundant access control checks for the Cloud Storage bucket, when set to "true".


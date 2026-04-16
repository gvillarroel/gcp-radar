---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.789Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Managed Cloud Storage FUSE CSI driver"
feature_slug: "managed-cloud-storage-fuse-csi-driver"
latest_feature_date: "2023-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "managed"
  - "storage"
  - "fuse"
  - "csi"
  - "driver"
  - "provides"
  - "consuming"
  - "buckets"
---

# Managed Cloud Storage FUSE CSI driver

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides a managed Cloud Storage FUSE CSI driver for consuming Cloud Storage buckets from GKE workloads; The managed Cloud Storage FUSE CSI driver is available in Preview for GKE versions 1.26.3 and later.

## Extended Definition

Provides a managed Cloud Storage FUSE CSI driver for consuming Cloud Storage buckets from GKE workloads; The managed Cloud Storage FUSE CSI driver is available in Preview for GKE versions 1.26.3 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Manually optimize Cloud Storage FUSE CSI driver for performance \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- Source ID: `site-docs-reference-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- File caching You can use the Cloud Storage FUSE CSI driver with file caching to improve the read performance of applications that handle small files from Cloud Storage buckets.
- Configure mount options The Cloud Storage FUSE CSI driver supports mount options to configure how Cloud Storage buckets are mounted on your local file system.
- Configure caching This section provides an overview of caching options available with Cloud Storage FUSE CSI driver to enhance performance.
- Inference serving example The following example shows how to enable parallel download for inference serving: Create a PersistentVolume and PersistentVolumeClaim manifest with the following specification: apiVersion : v1 kind : PersistentVolume metadata : name : serving-bucket-pv spec : accessModes : - ReadWriteMany capacity : storage : 64Gi persistentVolumeReclaimPolicy : Retain storageClassName : example-storage-class claimRef : namespace : NAMESPACE name : serving-bucket-pvc mountOptions : - implicit-dirs #avoid if list cache enabled and doing metadata prefetch - metadata-cache:ttl-secs:-1 - metadata-cache:stat-cache-max-size-mb:-1 - metadata-cache:type-cache-max-size-mb:-1 - file-cache:max-size-mb:-1 - file-cache:cache-file-for-range-read:true - file-system:kernel-list-cache-ttl-secs:-1 - file-cache:enable-parallel-downloads:true - read ahead kb=1024 csi : driver : gcsfuse.csi.storage.gke.io volumeHandle : BUCKET NAME volumeAttributes : skipCSIBucketAccessCheck : "true" gcsfuseMetadataPrefetchOnMount : "true" --- apiVersion : v1 kind : PersistentVolumeClaim metadata : name : serving-bucket-pvc namespace : NAMESPACE spec : accessModes : - ReadWriteMany resources : requests : storage : 64Gi volumeName : serving-bucket-pv storageClassName : example-storage-class Replace the following values: NAMESPACE : the Kubernetes namespace where you want to deploy your Pod.

### "Cloud Storage FUSE CSI driver volume attributes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr](https://docs.cloud.google.com/kubernetes-engine/docs/reference/cloud-storage-fuse-csi-driver/volume-attr)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Storage FUSE CSI driver provides an abstraction layer for Cloud Storage FUSE to ensure consistency, stability, and security for GKE users.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback Cloud Storage FUSE CSI driver volume attributes Stay organized with collections Save and categorize content based on your preferences.
- If you want to fine-tune specific behavior of the Cloud Storage FUSE CSI driver, you can use volume attributes .
- This attribute is required if you manually manage the Cloud Storage FUSE sidecars for your hostNetwork: true Pods and want to enable those Pods to use their own Kubernetes Service Account (KSA) for authentication when accessing Cloud Storage.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- GcsFuseCsiDriverConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether the Cloud Storage Fuse CSI driver is enabled for this cluster.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- Configuration for the StatefulHA add-on. parallelstoreCsiDriverConfig object ( ParallelstoreCsiDriverConfig ) Configuration for the Cloud Storage Parallelstore CSI driver. rayOperatorConfig object ( RayOperatorConfig ) Optional.


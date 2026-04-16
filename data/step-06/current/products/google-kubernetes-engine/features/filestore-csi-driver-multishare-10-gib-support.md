---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.786Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Filestore CSI driver multishare 10 GiB support"
feature_slug: "filestore-csi-driver-multishare-10-gib-support"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "filestore"
  - "csi"
  - "driver"
  - "multishare"
  - "10"
  - "gib"
  - "supports"
  - "smaller"
---

# Filestore CSI driver multishare 10 GiB support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Supports smaller 10 GiB share sizes for Filestore multishares in GKE Enterprise instances.

## Extended Definition

Supports smaller 10 GiB share sizes for Filestore multishares in GKE Enterprise instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Optimize storage with Filestore Multishares for GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/optimize-multishares)
- Source ID: `site-docs-reference-required-5`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Referencing this StorageClass, the GKE Filestore CSI driver uses dynamic volume provisioning to automatically create Persistent Volumes (PVs) for new Persistent Volume Claims (PVCs) as GKE workload demand requires: kubectl describe sc enterprise-multishare-rwx Name: enterprise-multishare-rwx IsDefaultClass: No Annotations: components.gke.io/component-name=filestorecsi,components.gke.io/component-version=0.7.2,components.gke.io/layer=addon Provisioner: filestore.csi.storage.gke.io Parameters: instance-storageclass-label=enterprise-multishare-rwx,multishare=true,tier=enterprise AllowVolumeExpansion: True MountOptions: <none> ReclaimPolicy: Delete VolumeBindingMode: WaitForFirstConsumer Events: <none> Create a custom StorageClass If you want to take advantage of the latest capacity limit of up to 80 shares per Filestore instance, create a custom StorageClass based on the following template: apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name: csi-filestore-multishare-128 provisioner: filestore.csi.storage.gke.io parameters: tier: enterprise multishare: "true" max-volume-size: "128Gi" network: default allowVolumeExpansion: true When renaming the StorageClass, consider the following requirements: The StorageClass name must be a valid DNS subdomain name .
- From the command line, run the following command to see the applied change: kubectl get pvc test-pvc-multishare-web-0 You should see something similar to the following response: NAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE test-pvc-multishare-web-0 Bound pvc-7aa21b5a-5343-4547-b7d7-414c16af15a7 500Gi RWX enterprise-multishare-rwx 28m The Filestore CSI driver accepted the request, first expanding the underlying Filestore instance, and then expanding the share backing the PVC.
- The following section shows how to use the Filestore CSI driver to dynamically provision volumes on Filestore multishare instances in a service project under a Shared VPC network.
- After the GKE Filestore CSI driver is enabled, users can access the GKE-provided multishare StorageClass enterprise-multishare-rwx with the following configuration.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- GcpFilestoreCsiDriverConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether the Filestore CSI driver is enabled for this cluster.
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes. cloudRunConfig object ( CloudRunConfig ) Configuration for the Cloud Run addon, which allows the user to use a managed Knative service. dnsCacheConfig object ( DnsCacheConfig ) Configuration for NodeLocalDNS, a dns cache running on cluster nodes configConnectorConfig object ( ConfigConnectorConfig ) Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted Google Cloud services through the Kubernetes API. gcePersistentDiskCsiDriverConfig object ( GcePersistentDiskCsiDriverConfig ) Configuration for the Compute Engine Persistent Disk CSI driver. gcpFilestoreCsiDriverConfig object ( GcpFilestoreCsiDriverConfig ) Configuration for the Filestore CSI driver. gkeBackupAgentConfig object ( GkeBackupAgentConfig ) Configuration for the Backup for GKE agent addon. gcsFuseCsiDriverConfig object ( GcsFuseCsiDriverConfig ) Configuration for the Cloud Storage Fuse CSI driver. statefulHaConfig object ( StatefulHAConfig ) Optional.
- GcpFilestoreCsiDriverConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether the Filestore CSI driver is enabled for this cluster.
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.


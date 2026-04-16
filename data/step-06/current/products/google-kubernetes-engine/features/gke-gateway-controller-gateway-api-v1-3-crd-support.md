---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.694Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Gateway controller Gateway API v1.3 CRD support"
feature_slug: "gke-gateway-controller-gateway-api-v1-3-crd-support"
latest_feature_date: "2025-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "gke"
  - "gateway"
  - "controller"
  - "v1"
  - "crd"
  - "supports"
  - "custom"
  - "resource"
---

# GKE Gateway controller Gateway API v1.3 CRD support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The GKE Gateway controller supports Gateway API v1.3 custom resource definitions; The GKE Gateway controller supports Gateway API v1.3 custom resource definitions.

## Extended Definition

The GKE Gateway controller supports Gateway API v1.3 custom resource definitions; The GKE Gateway controller supports Gateway API v1.3 custom resource definitions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- To review your Azure configuration to check whether there are any public IP addresses configured on your GKE on Azure cluster, run the following command: az network public-ip list -g CLUSTER RESOURCE GROUP NAME -o tsv Disallow SSH to the cluster nodes Even though GKE on Azure doesn't allow traffic on port 22 on any node by default, customers can update NetworkSecurityGroup rules to node pools, enabling inbound SSH traffic from the public internet.
- None GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- As the firewall is a VPC-level allow list, the following types of resources might have been network reachable during the time period: Customer applications running on GKE worker nodes accessible through public IPs.


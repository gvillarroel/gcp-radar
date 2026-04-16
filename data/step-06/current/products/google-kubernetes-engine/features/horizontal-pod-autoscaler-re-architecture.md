---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.688Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Horizontal Pod Autoscaler re-architecture"
feature_slug: "horizontal-pod-autoscaler-re-architecture"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform"
keywords:
  - "horizontal"
  - "pod"
  - "autoscaler"
  - "re"
  - "architecture"
  - "gke"
  - "was"
  - "architected"
---

# Horizontal Pod Autoscaler re-architecture

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster; The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster.

## Extended Definition

The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster; The Horizontal Pod Autoscaler in GKE was re-architected for a consistent 15-second recalculation period and support for up to 5,000 HPA objects per cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- TaintConfig JSON representation { // Union field architecture taint behavior can be only one of the following: "architectureTaintBehavior" : enum ( ArchitectureTaintBehavior ) // End of list of possible types for union field architecture taint behavior . } Fields Union field architecture taint behavior . architecture taint behavior can be only one of the following: architectureTaintBehavior enum ( ArchitectureTaintBehavior ) Optional.
- Autoscaler is enabled only if a valid configuration is present. management object ( NodeManagement ) NodeManagement configuration for this NodePool. maxPodsConstraint object ( MaxPodsConstraint ) The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. conditions[] object ( StatusCondition ) Which conditions caused the current node pool state. podIpv4CidrSize integer Output only.
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- TaintConfig JSON representation { // Union field architecture taint behavior can be only one of the following: "architectureTaintBehavior" : enum ( ArchitectureTaintBehavior ) // End of list of possible types for union field architecture taint behavior . } Fields Union field architecture taint behavior . architecture taint behavior can be only one of the following: architectureTaintBehavior enum ( ArchitectureTaintBehavior ) Optional.
- Autoscaler is enabled only if a valid configuration is present. management object ( NodeManagement ) NodeManagement configuration for this NodePool. maxPodsConstraint object ( MaxPodsConstraint ) The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. conditions[] object ( StatusCondition ) Which conditions caused the current node pool state. podIpv4CidrSize integer Output only.
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.

### "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A


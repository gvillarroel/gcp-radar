---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:13:28.365Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "FlowSchema API v1beta3"
feature_slug: "flowschema-api-v1beta3"
latest_feature_date: "2024-01-11"
deprecation_date: "2024-01-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_operation"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "flowschema"
  - "v1beta3"
  - "flowcontrol"
  - "apiserver"
  - "k8s"
  - "io"
  - "deprecated"
  - "favor"
---

# FlowSchema API v1beta3

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The flowcontrol.apiserver.k8s.io/v1beta3 FlowSchema API is deprecated in favor of flowcontrol.apiserver.k8s.io/v1; deprecated on 2024-01-11.

## Extended Definition

The flowcontrol.apiserver.k8s.io/v1beta3 FlowSchema API is deprecated in favor of flowcontrol.apiserver.k8s.io/v1; deprecated on 2024-01-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_operation](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_operation)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/kube_api_resources)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_operation](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_operation)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StatusCondition JSON representation { "code" : enum ( Code ) , "message" : string , "canonicalCode" : enum ( google.rpc.Code ) } Fields code (deprecated) enum ( Code ) This item is deprecated!
- Progress information for an operation. clusterConditions[] (deprecated) object ( StatusCondition ) This item is deprecated!
- Use field error instead. nodepoolConditions[] (deprecated) object ( StatusCondition ) This item is deprecated!
- Detailed operation progress, if available. statusMessage (deprecated) string This item is deprecated!

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- AutoprovisioningNodePoolDefaults JSON representation { "oauthScopes" : [ string ] , "serviceAccount" : string , "upgradeSettings" : { object ( UpgradeSettings ) } , "management" : { object ( NodeManagement ) } , "minCpuPlatform" : string , "diskSizeGb" : integer , "diskType" : string , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "bootDiskKmsKey" : string , "imageType" : string , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . } Fields oauthScopes[] string Scopes that are used by NAP when creating node pools. serviceAccount string The Google Cloud Platform Service Account to be used by the node VMs. upgradeSettings object ( UpgradeSettings ) Specifies the upgrade settings for NAP created node pools management object ( NodeManagement ) Specifies the node management options for NAP created node-pools. minCpuPlatform (deprecated) string This item is deprecated!
- Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false") resourceLabels map (key: string, value: string) The resource labels for the cluster to use to annotate any related Google Compute Engine resources. labelFingerprint string The fingerprint of the set of labels for this cluster. legacyAbac object ( LegacyAbac ) Configuration for the legacy ABAC authorization mode. networkPolicy object ( NetworkPolicy ) Configuration options for the NetworkPolicy feature. ipAllocationPolicy object ( IPAllocationPolicy ) Configuration for cluster IP allocation. masterAuthorizedNetworksConfig (deprecated) object ( MasterAuthorizedNetworksConfig ) This item is deprecated!
- Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized networks config instead. maintenancePolicy object ( MaintenancePolicy ) Configure the maintenance policy for this cluster. binaryAuthorization object ( BinaryAuthorization ) Configuration for Binary Authorization. autoscaling object ( ClusterAutoscaling ) Cluster-level autoscaling configuration. networkConfig object ( NetworkConfig ) Configuration for cluster networking. defaultMaxPodsConstraint object ( MaxPodsConstraint ) The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster.


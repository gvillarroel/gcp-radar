---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.687Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Streaming list response encoding"
feature_slug: "streaming-list-response-encoding"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "streaming"
  - "list"
  - "response"
  - "encoding"
  - "now"
  - "generally"
  - "available"
  - "more"
---

# Streaming list response encoding

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Streaming list response encoding is now generally available for more efficient handling of large object collections; The API server can stream list responses for large object collections to improve reliability and performance.

## Extended Definition

Streaming list response encoding is now generally available for more efficient handling of large object collections; The API server can stream list responses for large object collections to improve reliability and performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- ListClustersResponse JSON representation { "clusters" : [ { object ( Cluster ) } ] , "missingZones" : [ string ] } Fields clusters[] object ( Cluster ) A list of clusters in the project in the specified zone, or across all ones. missingZones[] string If any zones are listed here, the list of clusters returned may be missing those zones.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- For more information, read how to specify min CPU platform workloadMetadataConfig object ( WorkloadMetadataConfig ) The workload metadata configuration for this node. taints[] object ( NodeTaint ) List of kubernetes taints to be applied to each node.
- See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances. accelerators[] object ( AcceleratorConfig ) A list of hardware accelerators to be attached to each node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
- For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption gcfsConfig object ( GcfsConfig ) Google Container File System (image streaming) configs. advancedMachineFeatures object ( AdvancedMachineFeatures ) Advanced features for the Compute Engine VM. gvnic object ( VirtualNIC ) Enable or disable gvnic in the node pool. spot boolean Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag. confidentialNodes object ( ConfidentialNodes ) Confidential nodes config.
- For more information, read how to specify min CPU platform workloadMetadataConfig object ( WorkloadMetadataConfig ) The workload metadata configuration for this node. taints[] object ( NodeTaint ) List of kubernetes taints to be applied to each node.


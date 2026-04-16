---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.677Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GatewayClass network tier configuration"
feature_slug: "gatewayclass-network-tier-configuration"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "gatewayclass"
  - "network"
  - "tier"
  - "configuration"
  - "you"
  - "can"
  - "specify"
  - "standard"
---

# GatewayClass network tier configuration

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

You can specify the Standard or Premium network tier for ephemeral IP addresses used by the gke-l7-regional-external-managed-mc GatewayClass.

## Extended Definition

You can specify the Standard or Premium network tier for ephemeral IP addresses used by the gke-l7-regional-external-managed-mc GatewayClass.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- By default, no private IPv6 access to or from Google Services (all access will be via IPv4) dnsConfig object ( DNSConfig ) DNSConfig contains clusterDNS config for this cluster. serviceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. gatewayApiConfig object ( GatewayAPIConfig ) GatewayAPIConfig contains the desired config of Gateway API on this cluster. enableMultiNetworking boolean Whether multi-networking is enabled for this cluster. networkPerformanceConfig object ( ClusterNetworkPerformanceConfig ) Network bandwidth tier configuration.
- Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8 . addonsConfig object ( AddonsConfig ) Configurations for the various addons available to run in the cluster. subnetwork string The name of the Google Compute Engine subnetwork to which the cluster is connected. nodePools[] object ( NodePool ) The node pools associated with this cluster.
- If enable private nodes is not specified, then the value is derived from [Cluster.NetworkConfig.default enable private nodes][] Union field network performance config . network performance config can be only one of the following: networkPerformanceConfig object ( NetworkPerformanceConfig ) Network bandwidth tier configuration.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- If enable private nodes is not specified, then the value is derived from [Cluster.NetworkConfig.default enable private nodes][] Union field network performance config . network performance config can be only one of the following: networkPerformanceConfig object ( NetworkPerformanceConfig ) Network bandwidth tier configuration.
- The network tier configuration for the node pool inherits from the cluster-level configuration and remains immutable throughout the node pool's lifecycle, including during upgrades.
- NetworkTierConfig JSON representation { "networkTier" : enum ( NetworkTier ) } Fields networkTier enum ( NetworkTier ) Network tier configuration.
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- By default, no private IPv6 access to or from Google Services (all access will be via IPv4) dnsConfig object ( DNSConfig ) DNSConfig contains clusterDNS config for this cluster. serviceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. gatewayApiConfig object ( GatewayAPIConfig ) GatewayAPIConfig contains the desired config of Gateway API on this cluster. enableMultiNetworking boolean Whether multi-networking is enabled for this cluster. networkPerformanceConfig object ( ClusterNetworkPerformanceConfig ) Network bandwidth tier configuration.
- Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8 . addonsConfig object ( AddonsConfig ) Configurations for the various addons available to run in the cluster. subnetwork string The name of the Google Compute Engine subnetwork to which the cluster is connected. nodePools[] object ( NodePool ) The node pools associated with this cluster.
- If enable private nodes is not specified, then the value is derived from [Cluster.NetworkConfig.default enable private nodes][] Union field network performance config . network performance config can be only one of the following: networkPerformanceConfig object ( NetworkPerformanceConfig ) Network bandwidth tier configuration.
- AutoIpamConfig contains all information related to Auto IPAM networkTierConfig object ( NetworkTierConfig ) Cluster-level network tier configuration is used to determine the default network tier for external IP addresses on cluster resources, such as node pools and load balancers.


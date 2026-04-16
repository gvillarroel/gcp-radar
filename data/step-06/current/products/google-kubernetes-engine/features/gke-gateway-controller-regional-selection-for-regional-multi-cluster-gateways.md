---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.728Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Gateway controller regional selection for regional multi-cluster Gateways"
feature_slug: "gke-gateway-controller-regional-selection-for-regional-multi-cluster-gateways"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "gke"
  - "gateway"
  - "controller"
  - "regional"
  - "selection"
  - "multi"
  - "cluster"
  - "gateways"
---

# GKE Gateway controller regional selection for regional multi-cluster Gateways

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The GKE Gateway controller now supports regional selection for regional multi-cluster Gateways.

## Extended Definition

The GKE Gateway controller now supports regional selection for regional multi-cluster Gateways.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GDC (bare metal) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- None GKE on Azure Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- By default, no private IPv6 access to or from Google Services (all access will be via IPv4) dnsConfig object ( DNSConfig ) DNSConfig contains clusterDNS config for this cluster. serviceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. gatewayApiConfig object ( GatewayAPIConfig ) GatewayAPIConfig contains the desired config of Gateway API on this cluster. enableMultiNetworking boolean Whether multi-networking is enabled for this cluster. networkPerformanceConfig object ( ClusterNetworkPerformanceConfig ) Network bandwidth tier configuration.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- LustreCsiDriverConfig JSON representation { "enabled" : boolean , "enableLegacyLustrePort" : boolean , "disableMultiNic" : boolean } Fields enabled boolean Whether the Lustre CSI driver is enabled for this cluster. enableLegacyLustrePort (deprecated) boolean This item is deprecated!

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- By default, no private IPv6 access to or from Google Services (all access will be via IPv4) dnsConfig object ( DNSConfig ) DNSConfig contains clusterDNS config for this cluster. serviceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. gatewayApiConfig object ( GatewayAPIConfig ) GatewayAPIConfig contains the desired config of Gateway API on this cluster. enableMultiNetworking boolean Whether multi-networking is enabled for this cluster. networkPerformanceConfig object ( ClusterNetworkPerformanceConfig ) Network bandwidth tier configuration.
- AddonsConfig JSON representation { "httpLoadBalancing" : { object ( HttpLoadBalancing ) } , "horizontalPodAutoscaling" : { object ( HorizontalPodAutoscaling ) } , "kubernetesDashboard" : { object ( KubernetesDashboard ) } , "networkPolicyConfig" : { object ( NetworkPolicyConfig ) } , "cloudRunConfig" : { object ( CloudRunConfig ) } , "dnsCacheConfig" : { object ( DnsCacheConfig ) } , "configConnectorConfig" : { object ( ConfigConnectorConfig ) } , "gcePersistentDiskCsiDriverConfig" : { object ( GcePersistentDiskCsiDriverConfig ) } , "gcpFilestoreCsiDriverConfig" : { object ( GcpFilestoreCsiDriverConfig ) } , "gkeBackupAgentConfig" : { object ( GkeBackupAgentConfig ) } , "gcsFuseCsiDriverConfig" : { object ( GcsFuseCsiDriverConfig ) } , "statefulHaConfig" : { object ( StatefulHAConfig ) } , "parallelstoreCsiDriverConfig" : { object ( ParallelstoreCsiDriverConfig ) } , "rayOperatorConfig" : { object ( RayOperatorConfig ) } , "highScaleCheckpointingConfig" : { object ( HighScaleCheckpointingConfig ) } , "lustreCsiDriverConfig" : { object ( LustreCsiDriverConfig ) } , "sliceControllerConfig" : { object ( SliceControllerConfig ) } } Fields httpLoadBalancing object ( HttpLoadBalancing ) Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster. horizontalPodAutoscaling object ( HorizontalPodAutoscaling ) Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods. kubernetesDashboard (deprecated) object ( KubernetesDashboard ) This item is deprecated!
- LustreCsiDriverConfig JSON representation { "enabled" : boolean , "enableLegacyLustrePort" : boolean , "disableMultiNic" : boolean } Fields enabled boolean Whether the Lustre CSI driver is enabled for this cluster. enableLegacyLustrePort (deprecated) boolean This item is deprecated!


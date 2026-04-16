---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.978Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE cluster creation UI"
feature_slug: "gke-cluster-creation-ui"
latest_feature_date: "2020-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "gke"
  - "cluster"
  - "creation"
  - "ui"
  - "console"
  - "interface"
  - "creating"
  - "clusters"
---

# GKE cluster creation UI

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices; The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices.

## Extended Definition

The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices; The Google Cloud Console interface for creating GKE clusters was redesigned to better guide best practices.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.
- Modify an existing cluster In the Google Cloud console, go to the Kubernetes clusters page.
- For example, you can't modify clusters to be VPC-native after cluster creation.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Alpha enabled clusters are automatically deleted thirty days after creation. alphaClusterFeatureGates[] string The list of user specified Kubernetes feature gates.
- It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications.
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Alpha enabled clusters are automatically deleted thirty days after creation. alphaClusterFeatureGates[] string The list of user specified Kubernetes feature gates.
- It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications.
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.


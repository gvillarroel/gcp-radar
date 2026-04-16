---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.268Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Additional IPv4 secondary Pod ranges"
feature_slug: "additional-ipv4-secondary-pod-ranges"
latest_feature_date: "2023-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "additional"
  - "secondary"
  - "ipv4"
  - "ranges"
---

# Additional IPv4 secondary Pod ranges

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

You can add more IPv4 secondary Pod ranges to GKE Standard and Autopilot clusters running version 1.26 and later.

## Extended Definition

You can add more IPv4 secondary Pod ranges to GKE Standard and Autopilot clusters running version 1.26 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- AdditionalPodRangesConfig JSON representation { "podRangeNames" : [ string ] , "podRangeInfo" : [ { object ( RangeInfo ) } ] } Fields podRangeNames[] string Name for pod secondary ipv4 range which has the actual range defined ahead. podRangeInfo[] object ( RangeInfo ) Output only.
- Example1: my-subnet Example2: projects/gke-project/regions/us-central1/subnetworks/my-subnet podIpv4RangeNames[] string List of secondary ranges names within this subnetwork that can be used for pod IPs.
- AdditionalIPRangesConfig JSON representation { "subnetwork" : string , "podIpv4RangeNames" : [ string ] , "status" : enum ( Status ) } Fields subnetwork string Name of the subnetwork.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- AdditionalPodRangesConfig JSON representation { "podRangeNames" : [ string ] , "podRangeInfo" : [ { object ( RangeInfo ) } ] } Fields podRangeNames[] string Name for pod secondary ipv4 range which has the actual range defined ahead. podRangeInfo[] object ( RangeInfo ) Output only.
- Example1: my-subnet Example2: projects/gke-project/regions/us-central1/subnetworks/my-subnet podIpv4RangeNames[] string List of secondary ranges names within this subnetwork that can be used for pod IPs.
- AdditionalIPRangesConfig JSON representation { "subnetwork" : string , "podIpv4RangeNames" : [ string ] , "status" : enum ( Status ) } Fields subnetwork string Name of the subnetwork.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A


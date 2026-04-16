---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.832Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Shared Services secondary range"
feature_slug: "shared-services-secondary-range"
latest_feature_date: "2022-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "shared"
  - "secondary"
  - "range"
  - "vpc"
  - "native"
  - "clusters"
  - "can"
  - "share"
---

# Shared Services secondary range

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

VPC-native clusters can share the user-managed secondary range for Services across clusters in the same subnet.

## Extended Definition

VPC-native clusters can share the user-managed secondary range for Services across clusters in the same subnet.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- This field is deprecated, use services ipv4 cidr block. clusterSecondaryRangeName string The name of the secondary range to be used for the cluster CIDR block.
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- This field is deprecated, use services ipv4 cidr block. clusterSecondaryRangeName string The name of the secondary range to be used for the cluster CIDR block.
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.
- If unspecified, ephemeral storage is backed by the boot disk. soleTenantConfig object ( SoleTenantConfig ) Parameters for node pools to be backed by shared sole tenant node groups. containerdConfig object ( ContainerdConfig ) Parameters for containerd customization. resourceManagerTags object ( ResourceManagerTags ) A map of resource manager tag keys and values to be attached to the nodes. enableConfidentialStorage boolean Optional.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are not shared between clusters or customers.
- Applications protected by the following mechanisms would've reduced or eliminated their exposure: Equal or higher priority DENY firewall rules (MCG sets firewall rules priority to 1000 by default) Service mesh using identity-based authorization Application-level authorization Affected resources 2025-01-23 Update: GKE fleets (or hubs) using MCG in shared VPC service projects are not affected by the issue as firewall rules are not managed from shared VPC service projects.
- The exploitation path for this vulnerability that relies on the "unshare" syscall is blocked on GKE Autopilot clusters by default using seccomp filtering.
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.


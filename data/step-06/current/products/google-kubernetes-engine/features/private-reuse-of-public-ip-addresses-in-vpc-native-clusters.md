---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.969Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Private reuse of public IP addresses in VPC-native clusters"
feature_slug: "private-reuse-of-public-ip-addresses-in-vpc-native-clusters"
latest_feature_date: "2020-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "private"
  - "reuse"
  - "public"
  - "ip"
  - "addresses"
  - "vpc"
  - "native"
  - "clusters"
---

# Private reuse of public IP addresses in VPC-native clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Supports privately reusing public IP address ranges in VPC-native clusters.

## Extended Definition

Supports privately reusing public IP address ranges in VPC-native clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- AutoIpamConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . } Fields Union field enabled . enabled can be only one of the following: enabled boolean The flag that enables Auto IPAM on this cluster MasterAuthorizedNetworksConfig JSON representation { "enabled" : boolean , "cidrBlocks" : [ { object ( CidrBlock ) } ] , // Union field gcp public cidrs access enabled can be only one of the // following: "gcpPublicCidrsAccessEnabled" : boolean // End of list of possible types for union field // gcp public cidrs access enabled . // Union field private endpoint enforcement enabled can be only one of the // following: "privateEndpointEnforcementEnabled" : boolean // End of list of possible types for union field // private endpoint enforcement enabled . } Fields enabled boolean Whether or not master authorized networks is enabled. cidrBlocks[] object ( CidrBlock ) cidr blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
- IPEndpointsConfig JSON representation { "authorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "publicEndpoint" : string , "privateEndpoint" : string , "privateEndpointSubnetwork" : string , // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field enable public endpoint can be only one of the following: "enablePublicEndpoint" : boolean // End of list of possible types for union field enable public endpoint . // Union field global access can be only one of the following: "globalAccess" : boolean // End of list of possible types for union field global access . } Fields authorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Configuration of authorized networks.
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!
- Note that the value of enable public endpoint is reversed: if enable private endpoint is false, then enable public endpoint will be true. masterIpv4CidrBlock string The IP range in CIDR notation to use for the hosted master network.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To find all clusters originally created with public nodes, use this Cloud Asset Inventory query in the project or organization: SELECT resource.data.name AS cluster name, resource.parent AS project name, resource.data.privateClusterConfig.enablePrivateNodes FROM container googleapis com Cluster WHERE resource.data.privateClusterConfig.enablePrivateNodes is null OR resource.data.privateClusterConfig.enablePrivateNodes = false Disallow SSH to the cluster nodes 2024-07-02 Update: This section applies to both Autopilot and Standard clusters.
- Legacy public clusters with --master-authorized-networks and PSC-based clusters with --master-authorized-networks and --enable-google-cloud (default) configured are additionally accessible by the following: Public IP addresses of all Compute Engine VMs in Google Cloud Google Cloud platform IP addresses What vulnerabilities are addressed by this patch?
- Convert public node pools to private 2024-07-02 Update: For Autopilot clusters originally created as public clusters, you can place your workloads on private nodes by using nodeSelectors .
- If you are not able to disallow SSH through the firewall rules, you can convert public node pools on GKE Standard clusters to private by following this guidance to isolate node pools .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- AutoIpamConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . } Fields Union field enabled . enabled can be only one of the following: enabled boolean The flag that enables Auto IPAM on this cluster MasterAuthorizedNetworksConfig JSON representation { "enabled" : boolean , "cidrBlocks" : [ { object ( CidrBlock ) } ] , // Union field gcp public cidrs access enabled can be only one of the // following: "gcpPublicCidrsAccessEnabled" : boolean // End of list of possible types for union field // gcp public cidrs access enabled . // Union field private endpoint enforcement enabled can be only one of the // following: "privateEndpointEnforcementEnabled" : boolean // End of list of possible types for union field // private endpoint enforcement enabled . } Fields enabled boolean Whether or not master authorized networks is enabled. cidrBlocks[] object ( CidrBlock ) cidr blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
- IPEndpointsConfig JSON representation { "authorizedNetworksConfig" : { object ( MasterAuthorizedNetworksConfig ) } , "publicEndpoint" : string , "privateEndpoint" : string , "privateEndpointSubnetwork" : string , // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field enable public endpoint can be only one of the following: "enablePublicEndpoint" : boolean // End of list of possible types for union field enable public endpoint . // Union field global access can be only one of the following: "globalAccess" : boolean // End of list of possible types for union field global access . } Fields authorizedNetworksConfig object ( MasterAuthorizedNetworksConfig ) Configuration of authorized networks.
- PrivateClusterConfig JSON representation { "enablePrivateNodes" : boolean , "enablePrivateEndpoint" : boolean , "masterIpv4CidrBlock" : string , "privateEndpoint" : string , "publicEndpoint" : string , "peeringName" : string , "masterGlobalAccessConfig" : { object ( PrivateClusterMasterGlobalAccessConfig ) } , "privateEndpointSubnetwork" : string } Fields enablePrivateNodes (deprecated) boolean This item is deprecated!
- Note that the value of enable public endpoint is reversed: if enable private endpoint is false, then enable public endpoint will be true. masterIpv4CidrBlock string The IP range in CIDR notation to use for the hosted master network.


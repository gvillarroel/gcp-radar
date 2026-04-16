---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.745Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Google-managed Service IP range for GKE Services"
feature_slug: "google-managed-service-ip-range-for-gke-services"
latest_feature_date: "2024-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "managed"
  - "ip"
  - "range"
  - "gke"
  - "standard"
  - "clusters"
  - "can"
  - "have"
---

# Google-managed Service IP range for GKE Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New Standard clusters can have Service IP addresses assigned from a Google-managed secondary range by default.

## Extended Definition

New Standard clusters can have Service IP addresses assigned from a Google-managed secondary range by default.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- ClusterPolicyConfig JSON representation { // Union field no system mutation can be only one of the following: "noSystemMutation" : boolean // End of list of possible types for union field no system mutation . // Union field no system impersonation can be only one of the following: "noSystemImpersonation" : boolean // End of list of possible types for union field no system impersonation . // Union field no unsafe webhooks can be only one of the following: "noUnsafeWebhooks" : boolean // End of list of possible types for union field no unsafe webhooks . // Union field no standard node pools can be only one of the following: "noStandardNodePools" : boolean // End of list of possible types for union field no standard node pools . } Fields Union field no system mutation . no system mutation can be only one of the following: noSystemMutation boolean Denotes that preventing creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources .
- If unspecified, the default disk size is 100GB. diskType string Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard' shieldedInstanceConfig object ( ShieldedInstanceConfig ) Shielded Instance options. bootDiskKmsKey string The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
- Union field autopilot compatibility auditing enabled . autopilot compatibility auditing enabled can be only one of the following: autopilotCompatibilityAuditingEnabled boolean If true, enables the GCW Auditor that audits workloads on standard clusters.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Determine whether your nodes have public IP addresses 2024-07-02 Update: This section applies to both Autopilot and Standard clusters.
- Users who have manually enabled the default container runtime seccomp profile on GKE Standard clusters are also protected.
- Users who have manually enabled the default container runtime seccomp profile on GKE Standard clusters are also protected.
- Users who have manually enabled the default container runtime seccomp profile on GKE Standard clusters are also protected.


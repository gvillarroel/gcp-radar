---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.291Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Clusters List Observability tab"
feature_slug: "gke-clusters-list-observability-tab"
latest_feature_date: "2022-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "page"
  - "infrastructure"
  - "includes"
  - "observability"
  - "list"
  - "clusters"
---

# GKE Clusters List Observability tab

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The GKE Clusters List page includes an Observability tab for infrastructure health trends and ingestion visibility.

## Extended Definition

The GKE Clusters List page includes an Observability tab for infrastructure health trends and ingestion visibility.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- AdvancedDatapathObservabilityConfig JSON representation { "enableMetrics" : boolean , "relayMode" : enum ( RelayMode ) , // Union field enable relay can be only one of the following: "enableRelay" : boolean // End of list of possible types for union field enable relay . } Fields enableMetrics boolean Expose flow metrics on nodes relayMode enum ( RelayMode ) Method used to make Relay available Union field enable relay . enable relay can be only one of the following: enableRelay boolean Enable Relay component NodePoolAutoConfig JSON representation { "networkTags" : { object ( NetworkTags ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "nodeKubeletConfig" : { object ( NodeKubeletConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } } Fields networkTags object ( NetworkTags ) The list of instance tags applied to all nodes.
- Amount of 1G hugepages SwapConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field encryption config can be only one of the following: "encryptionConfig" : { object ( EncryptionConfig ) } // End of list of possible types for union field encryption config . // Union field performance profile can be only one of the following: "bootDiskProfile" : { object ( BootDiskProfile ) } , "ephemeralLocalSsdProfile" : { object ( EphemeralLocalSsdProfile ) } , "dedicatedLocalSsdProfile" : { object ( DedicatedLocalSsdProfile ) } // End of list of possible types for union field performance profile . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Optional.
- LinuxNodeConfig JSON representation { "sysctls" : { string : string , ... } , "cgroupMode" : enum ( CgroupMode ) , "transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) , "transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) , "nodeKernelModuleLoading" : { object ( NodeKernelModuleLoading ) } , // Union field hugepages can be only one of the following: "hugepages" : { object ( HugepagesConfig ) } // End of list of possible types for union field hugepages . // Union field swap config can be only one of the following: "swapConfig" : { object ( SwapConfig ) } // End of list of possible types for union field swap config . } Fields sysctls map (key: string, value: string) The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
- SysctlsEntry JSON representation { "key" : string , "value" : string } Fields key string value string HugepagesConfig JSON representation { // Union field hugepage size2m can be only one of the following: "hugepageSize2m" : integer // End of list of possible types for union field hugepage size2m . // Union field hugepage size1g can be only one of the following: "hugepageSize1g" : integer // End of list of possible types for union field hugepage size1g . } Fields Union field hugepage size2m . hugepage size2m can be only one of the following: hugepageSize2m integer Optional.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a command to enable observability features: gcloud container clusters update $CLUSTER NAME \ --project = $PROJECT ID \ --location = $LOCATION \ --enable-managed-prometheus \ --logging = SYSTEM,WORKLOAD \ --monitoring = SYSTEM,DEPLOYMENT,HPA,POD,DCGM \ --auto-monitoring-scope = ALL For more information, see Monitor your inference workloads . (HPA only) Deploy a metrics adapter : A metrics adapter, such as the Custom Metrics Stackdriver Adapter , is necessary if HPA resources were generated in the deployment manifests.
- This page is for Machine learning (ML) engineers, Platform admins and operators, and for Data and AI specialists who want to understand how to efficiently manage and optimize GKE for AI/ML inference.
- Enable auto-monitoring GKE includes an auto-monitoring feature that is part of the broader observability features.
- The manifest includes comments and a recommender.ai.gke.io/version annotation in the following format: Generated on DATE using: GKE cluster CLUSTER VERSION GPU DRIVER VERSION GPU driver for node version NODE VERSION Model server MODEL SERVER MODEL SERVER VERSION The previous annotation has the following values: DATE : the date the manifest was generated.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Use this XML feed to subscribe to security bulletins for this page. rss feed GCP-2026-018 Published: 2026-04-07 Reference: CVE-2026-23111 GKE Description Severity The following vulnerabilities were discovered in the Linux kernel that can lead to a privilege escalation on Container-Optimized OS nodes: CVE-2026-23111 GKE Standard clusters are impacted.
- We have identified several clusters where users have granted Kubernetes privileges to the system:authenticated group, which includes all users with a Google account.
- Upgrade your GKE clusters to a version that includes the fix.
- To list the MCG managed firewall rules in your current environment, run the following command: gcloud compute firewall-rules list --format = "json" --filter = "name:gkemcg1-l7- " jq -r '.[] "\(.name): \(.sourceRanges // "No source range")"' awk -F: '{if ($2 /No source range ^\s $/) print "Rule "$1" has an EMPTY or MISSING source range."; else print "Rule "$1" has source range(s): "$2;}' To search logs for updates to MCG managed firewall configurations, use the Logs Explorer with the below query: protoPayload.serviceName="compute.googleapis.com" resource.type="gce firewall rule" protoPayload.resourceName= "projects/[^/]+/global/firewalls/gkemcg1-" -operation.last="true" To list the MCG managed firewall rules across your organization, run the following command to query Cloud Asset Inventory: gcloud asset search-all-resources --scope = 'organizations/ ' --asset-types = 'compute.googleapis.com/Firewall' --query 'name: //compute.googleapis.com/projects/ / /firewalls/gkemcg ' The following additional controls provide defense in depth against untrusted networks and can be considered to strengthen security posture: Use private GKE nodes to ensure your nodes only get private IPs.


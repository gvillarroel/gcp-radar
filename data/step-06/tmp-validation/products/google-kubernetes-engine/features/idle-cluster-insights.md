---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.264Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Idle Cluster insights"
feature_slug: "idle-cluster-insights"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "idle"
  - "utilization"
  - "identify"
  - "insights"
  - "clusters"
  - "cluster"
---

# Idle Cluster insights

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Idle Cluster insights identify clusters with low or no utilization.

## Extended Definition

Idle Cluster insights identify clusters with low or no utilization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the GKE cluster In Cloud Shell, create a GKE cluster for running the scheduled autoscaler: gcloud container clusters create scheduled-autoscaler \ --enable-ip-alias \ --release-channel = stable \ --machine-type = e2-standard-2 \ --enable-autoscaling --min-nodes = 1 --max-nodes = 10 \ --num-nodes = 1 \ --autoscaling-profile = optimize-utilization The output is similar to the following: NAME LOCATION MASTER VERSION MASTER IP MACHINE TYPE NODE VERSION NUM NODES STATUS scheduled-autoscaler us-central1-f 1.22.15-gke.100 34.69.187.253 e2-standard-2 1.22.15-gke.100 1 RUNNING This is not a production configuration, but it's a configuration that's suitable for this tutorial.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Reducing costs by scaling down GKE clusters during off-peak hours Stay organized with collections Save and categorize content based on your preferences.
- This document shows how to scale GKE clusters up in the morning and down at night, but you can use a similar approach to increase and decrease capacity for any known events, such as peak scale events, ad campaigns, or weekend traffic.
- The tutorial is for developers and operators who want to reliably scale up clusters before spikes arrive, and scale them down again to save money at night, on weekends, or any other time when fewer users are online.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- Unique id for the cluster. loggingConfig object ( LoggingConfig ) Logging configuration for the cluster. monitoringConfig object ( MonitoringConfig ) Monitoring configuration for the cluster. nodePoolAutoConfig object ( NodePoolAutoConfig ) Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. podAutoscaling object ( PodAutoscaling ) The config for pod autoscaling. etag string This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding. fleet object ( Fleet ) Fleet information for the cluster. securityPostureConfig object ( SecurityPostureConfig ) Optional.
- Curl Request curl --location 'https://container.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list clusters", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema MCPListClustersRequest lists clusters.
- Default: clusters.autopilot,clusters.createTime,clusters.currentMasterVersion,clusters.currentNodeCount,clusters.currentNodeVersion,clusters.description,clusters.endpoint,clusters.fleet,clusters.location,clusters.name,clusters.network,clusters.nodePools.name,clusters.releaseChannel,clusters.resourceLabels,clusters.selfLink,clusters.status,clusters.statusMessage,clusters.subnetwork,missingZones.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following command enables optimize-utilization autoscaling profile in an existing cluster: gcloud container clusters update CLUSTER NAME \ --autoscaling-profile optimize-utilization Considering Pod scheduling and disruption When scaling down, the cluster autoscaler respects scheduling and eviction rules set on Pods.
- The balanced profile isn't available for Autopilot clusters. optimize-utilization : Prioritize optimizing utilization over keeping spare resources in the cluster.
- The optimize-utilization autoscaling profile helps the cluster autoscaler to identify and remove underutilized nodes.
- Total nodes example The following command, available in GKE version 1.24 or later, creates an autoscaling multi-zonal cluster with six nodes across three zones initially, with a minimum of three nodes and a maximum of twelve nodes in the node pool across all zones: gcloud container clusters create example-cluster \ --num-nodes=2 \ --location=us-central1-a \ --node-locations=us-central1-a,us-central1-b,us-central1-f \ --enable-autoscaling --total-min-nodes=3 --total-max-nodes=12 In this example, the total size of the cluster can be between three and twelve nodes, regardless of spreading between zones.


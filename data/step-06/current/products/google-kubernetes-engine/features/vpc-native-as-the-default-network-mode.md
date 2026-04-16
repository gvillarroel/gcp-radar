---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.902Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "VPC-native as the default network mode"
feature_slug: "vpc-native-as-the-default-network-mode"
latest_feature_date: "2021-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "vpc"
  - "native"
  - "default"
  - "network"
  - "mode"
  - "gke"
  - "clusters"
  - "use"
---

# VPC-native as the default network mode

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

New GKE clusters use VPC-native networking by default, while routes-based clusters remain available with --no-enable-ip-alias.

## Extended Definition

New GKE clusters use VPC-native networking by default, while routes-based clusters remain available with --no-enable-ip-alias.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Use the container-optimized compute platform with modifications : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : general-purpose-class spec : autopilot : enabled : true priorities : - podFamily : general-purpose priorityDefaults : location : zones : [ 'us-central1-a' , 'us-central1-b' , 'us-central1-f' ] This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Autopilot Standard Cluster administrators and application operators can get the benefits of Google Kubernetes Engine (GKE) Autopilot, like pricing and pre-configured settings, in Standard mode clusters.

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must use one of the following accelerator-optimized machine types: Machine series Machine type Accelerator model Networking technology A3 Ultra a3-ultragpu-8g NVIDIA H200 GPU RDMA A4 a4-highgpu-8g NVIDIA B200 GPU RDMA A4X a4x-highgpu-4g NVIDIA GB200 GPU RDMA A4X Max a4x-maxgpu-4g-metal NVIDIA B300 GPU RDMA TPU v7 tpu7x-standard-4t TPU v7 NetDevice TPU v6e ct6e-standard-8t Trillium TPU NetDevice TPU v6e ct6e-standard-4t Trillium TPU NetDevice TPU v6e ct6e-standard-1t Trillium TPU NetDevice Limitations GKE DRANET has the following limitations: You can't use GKE DRANET to allocate the default network interface card (NIC) or virtual NICs (such as veth).
- Save the manifest as agnhost-rdma-pod.yaml : apiVersion : v1 kind : Pod metadata : name : agnhost-rdma namespace : default labels : app : agnhost spec : containers : - name : agnhost image : registry.k8s.io/e2e-test-images/agnhost:2.39 args : [ "netexec" , "--http-port" , "80" ] ports : - name : agnhost-port containerPort : 80 resources : claims : - name : rdma limits : nvidia.com/gpu : 1 resourceClaims : - name : rdma resourceClaimTemplateName : all-mrdma Apply the manifest: kubectl apply -f agnhost-rdma-pod.yaml Verify that the additional allocated network interfaces are visible inside the Pod. kubectl exec agnhost-rdma -- ls /sys/class/net The following example output shows the default eth0 and lo interfaces, as well as the allocated RDMA interfaces, such as gpu0rdma0 .
- The following example requests two RDMA network devices: apiVersion : resource.k8s.io/v1 kind : ResourceClaimTemplate metadata : name : two-mrdma spec : spec : devices : requests : - name : req-mrdma exactly : deviceClassName : mrdma.google.com allocationMode : ExactCount count : 2 What's next Learn more about Dynamic Resource Allocation .
- Apply the manifest: kubectl apply -f netdev-pod.yaml Verify that the additional allocated network interfaces are visible inside the Pod. kubectl exec agnhost-netdev -- ls /sys/class/net The following example output shows the default eth0 and lo interfaces, along with the allocated network devices, which have names like eth1 and eth2 .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.
- Default: clusters.autopilot,clusters.createTime,clusters.currentMasterVersion,clusters.currentNodeCount,clusters.currentNodeVersion,clusters.description,clusters.endpoint,clusters.fleet,clusters.location,clusters.name,clusters.network,clusters.nodePools.name,clusters.releaseChannel,clusters.resourceLabels,clusters.selfLink,clusters.status,clusters.statusMessage,clusters.subnetwork,missingZones.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode createSubnetwork boolean Whether a new subnetwork will be created automatically for the cluster.


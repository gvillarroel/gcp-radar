---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.755Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Dual-stack LoadBalancer Services"
feature_slug: "dual-stack-loadbalancer-services"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "dual"
  - "stack"
  - "loadbalancer"
  - "let"
  - "gke"
  - "expose"
  - "over"
  - "ipv4"
---

# Dual-stack LoadBalancer Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Dual-stack LoadBalancer Services let GKE expose Services over IPv4, IPv6, or both in dual-stack clusters; Dual-stack LoadBalancer Services are available in Preview on GKE dual-stack clusters.

## Extended Definition

Dual-stack LoadBalancer Services let GKE expose Services over IPv4, IPv6, or both in dual-stack clusters; Dual-stack LoadBalancer Services are available in Preview on GKE dual-stack clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.
- NodeNetworkConfig JSON representation { "createPodRange" : boolean , "podRange" : string , "podIpv4CidrBlock" : string , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "additionalNodeNetworkConfigs" : [ { object ( AdditionalNodeNetworkConfig ) } ] , "additionalPodNetworkConfigs" : [ { object ( AdditionalPodNetworkConfig ) } ] , "podIpv4RangeUtilization" : number , "subnetwork" : string , "networkTierConfig" : { object ( NetworkTierConfig ) } , // Union field enable private nodes can be only one of the following: "enablePrivateNodes" : boolean // End of list of possible types for union field enable private nodes . // Union field network performance config can be only one of the following: "networkPerformanceConfig" : { object ( NetworkPerformanceConfig ) } // End of list of possible types for union field network performance config . } Fields createPodRange boolean Input only.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- IPAllocationPolicy JSON representation { "useIpAliases" : boolean , "createSubnetwork" : boolean , "subnetworkName" : string , "clusterIpv4Cidr" : string , "nodeIpv4Cidr" : string , "servicesIpv4Cidr" : string , "clusterSecondaryRangeName" : string , "servicesSecondaryRangeName" : string , "clusterIpv4CidrBlock" : string , "nodeIpv4CidrBlock" : string , "servicesIpv4CidrBlock" : string , "tpuIpv4CidrBlock" : string , "useRoutes" : boolean , "stackType" : enum ( StackType ) , "ipv6AccessType" : enum ( IPv6AccessType ) , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "subnetIpv6CidrBlock" : string , "servicesIpv6CidrBlock" : string , "additionalPodRangesConfig" : { object ( AdditionalPodRangesConfig ) } , "defaultPodIpv4RangeUtilization" : number , "additionalIpRangesConfigs" : [ { object ( AdditionalIPRangesConfig ) } ] , "autoIpamConfig" : { object ( AutoIpamConfig ) } , "networkTierConfig" : { object ( NetworkTierConfig ) } } Fields useIpAliases boolean Whether alias IPs will be used for pod IPs in the cluster.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.
- NodeNetworkConfig JSON representation { "createPodRange" : boolean , "podRange" : string , "podIpv4CidrBlock" : string , "podCidrOverprovisionConfig" : { object ( PodCIDROverprovisionConfig ) } , "additionalNodeNetworkConfigs" : [ { object ( AdditionalNodeNetworkConfig ) } ] , "additionalPodNetworkConfigs" : [ { object ( AdditionalPodNetworkConfig ) } ] , "podIpv4RangeUtilization" : number , "subnetwork" : string , "networkTierConfig" : { object ( NetworkTierConfig ) } , // Union field enable private nodes can be only one of the following: "enablePrivateNodes" : boolean // End of list of possible types for union field enable private nodes . // Union field network performance config can be only one of the following: "networkPerformanceConfig" : { object ( NetworkPerformanceConfig ) } // End of list of possible types for union field network performance config . } Fields createPodRange boolean Input only.
- If both use ip aliases and use routes are false, then the server picks the default IP allocation mode stackType enum ( StackType ) The IP stack type of the cluster ipv6AccessType enum ( IPv6AccessType ) The ipv6 access type (internal or external) when create subnetwork is true podCidrOverprovisionConfig object ( PodCIDROverprovisionConfig ) [PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The Kubernetes project recently discovered a new security vulnerability, CVE-2020-8554 , that might allow an attacker who has obtained permissions to create a Kubernetes Service of type LoadBalancer or ClusterIP to intercept network traffic originating from other Pods in the cluster.
- The Kubernetes project recently discovered a new security vulnerability, CVE-2020-8554 , that might allow an attacker who has obtained permissions to create a Kubernetes Service of type LoadBalancer or ClusterIP to intercept network traffic originating from other Pods in the cluster.
- The Kubernetes project recently discovered a new security vulnerability, CVE-2020-8554 , that might allow an attacker who has obtained permissions to create a Kubernetes Service of type LoadBalancer or ClusterIP to intercept network traffic originating from other Pods in the cluster.
- CVE-2022-23606 (CVSS score 4.4, Medium): Stack exhaustion when a cluster is deleted via Cluster Discovery Service.


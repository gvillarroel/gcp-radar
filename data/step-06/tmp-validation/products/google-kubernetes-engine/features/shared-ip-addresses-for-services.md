---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.424Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Shared IP addresses for Services"
feature_slug: "shared-ip-addresses-for-services"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "shared"
  - "addresses"
  - "internal"
  - "single"
---

# Shared IP addresses for Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Shared IP addresses let a single internal TCP/UDP load balancer IP support more ports and multiple protocols for a Service.

## Extended Definition

Shared IP addresses let a single internal TCP/UDP load balancer IP support more ports and multiple protocols for a Service.

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
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Union field enable private nodes . enable private nodes can be only one of the following: enablePrivateNodes boolean Whether nodes have internal IP addresses only.
- This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP.
- Whether nodes have internal IP addresses only.
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Union field enable private nodes . enable private nodes can be only one of the following: enablePrivateNodes boolean Whether nodes have internal IP addresses only.
- This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP.
- Whether nodes have internal IP addresses only.
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Applications protected by the following mechanisms would've reduced or eliminated their exposure: Equal or higher priority DENY firewall rules (MCG sets firewall rules priority to 1000 by default) Service mesh using identity-based authorization Application-level authorization Affected resources 2025-01-23 Update: GKE fleets (or hubs) using MCG in shared VPC service projects are not affected by the issue as firewall rules are not managed from shared VPC service projects.
- To review your Azure configuration to check whether there are any public IP addresses configured on your GKE on Azure cluster, run the following command: az network public-ip list -g CLUSTER RESOURCE GROUP NAME -o tsv Disallow SSH to the cluster nodes Even though GKE on Azure doesn't allow traffic on port 22 on any node by default, customers can update NetworkSecurityGroup rules to node pools, enabling inbound SSH traffic from the public internet.
- Legacy public clusters with --master-authorized-networks and PSC-based clusters with --master-authorized-networks and --enable-google-cloud (default) configured are additionally accessible by the following: Public IP addresses of all Compute Engine VMs in Google Cloud Google Cloud platform IP addresses What vulnerabilities are addressed by this patch?
- Updated GDC software for VMware versions will include will the latest version of OpenSSL, which addresses the following CVEs: CVE-2025-11187 CVE-2025-15467 CVE-2025-15468 CVE-2025-15469 CVE-2025-66199 CVE-2025-68160 CVE-2025-69418 CVE-2025-69419 CVE-2025-69420 CVE-2025-69421 CVE-2026-22795 CVE-2026-22796 What should I do?


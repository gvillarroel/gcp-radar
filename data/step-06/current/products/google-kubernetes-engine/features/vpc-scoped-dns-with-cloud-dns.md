---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.857Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "VPC-scoped DNS with Cloud DNS"
feature_slug: "vpc-scoped-dns-with-cloud-dns"
latest_feature_date: "2022-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray"
keywords:
  - "vpc"
  - "scoped"
  - "dns"
  - "provides"
  - "wide"
  - "resolution"
  - "gke"
---

# VPC-scoped DNS with Cloud DNS

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

VPC-scoped DNS using Cloud DNS provides VPC-wide DNS resolution of GKE Services.

## Extended Definition

VPC-scoped DNS using Cloud DNS provides VPC-wide DNS resolution of GKE Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- ClusterPolicyConfig JSON representation { // Union field no system mutation can be only one of the following: "noSystemMutation" : boolean // End of list of possible types for union field no system mutation . // Union field no system impersonation can be only one of the following: "noSystemImpersonation" : boolean // End of list of possible types for union field no system impersonation . // Union field no unsafe webhooks can be only one of the following: "noUnsafeWebhooks" : boolean // End of list of possible types for union field no unsafe webhooks . // Union field no standard node pools can be only one of the following: "noStandardNodePools" : boolean // End of list of possible types for union field no standard node pools . } Fields Union field no system mutation . no system mutation can be only one of the following: noSystemMutation boolean Denotes that preventing creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources .
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.
- DNSConfig JSON representation { "clusterDns" : enum ( Provider ) , "clusterDnsScope" : enum ( DNSScope ) , "clusterDnsDomain" : string , "additiveVpcScopeDnsDomain" : string } Fields clusterDns enum ( Provider ) cluster dns indicates which in-cluster DNS provider should be used. clusterDnsScope enum ( DNSScope ) cluster dns scope indicates the scope of access to cluster DNS records. clusterDnsDomain string cluster dns domain is the suffix used for all cluster service records. additiveVpcScopeDnsDomain string Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.
- ClusterPolicyConfig JSON representation { // Union field no system mutation can be only one of the following: "noSystemMutation" : boolean // End of list of possible types for union field no system mutation . // Union field no system impersonation can be only one of the following: "noSystemImpersonation" : boolean // End of list of possible types for union field no system impersonation . // Union field no unsafe webhooks can be only one of the following: "noUnsafeWebhooks" : boolean // End of list of possible types for union field no unsafe webhooks . // Union field no standard node pools can be only one of the following: "noStandardNodePools" : boolean // End of list of possible types for union field no standard node pools . } Fields Union field no system mutation . no system mutation can be only one of the following: noSystemMutation boolean Denotes that preventing creation and mutation of resources in GKE managed namespaces and cluster-scoped GKE managed resources .
- AdditionalNodeNetworkConfig JSON representation { "network" : string , "subnetwork" : string } Fields network string Name of the VPC where the additional interface belongs subnetwork string Name of the subnetwork where the additional interface belongs AdditionalPodNetworkConfig JSON representation { "subnetwork" : string , "secondaryPodRange" : string , // Union field max pods per node can be only one of the following: "maxPodsPerNode" : { object ( MaxPodsConstraint ) } // End of list of possible types for union field max pods per node . } Fields subnetwork string Name of the subnetwork where the additional pod network belongs. secondaryPodRange string The name of the secondary range on the subnet which provides IP address for this pod range.
- DNSConfig JSON representation { "clusterDns" : enum ( Provider ) , "clusterDnsScope" : enum ( DNSScope ) , "clusterDnsDomain" : string , "additiveVpcScopeDnsDomain" : string } Fields clusterDns enum ( Provider ) cluster dns indicates which in-cluster DNS provider should be used. clusterDnsScope enum ( DNSScope ) cluster dns scope indicates the scope of access to cluster DNS records. clusterDnsDomain string cluster dns domain is the suffix used for all cluster service records. additiveVpcScopeDnsDomain string Optional.

### "Serve an LLM using TPUs on GKE with KubeRay \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-ray)
- Source ID: `site-docs-reference-required-4`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- 8000:8000" kubectl --namespace ${ NAMESPACE } port-forward service/vllm-tpu-serve-svc 8265 :8265 2>&1 >/dev/null & kubectl --namespace ${ NAMESPACE } port-forward service/vllm-tpu-serve-svc 8000 :8000 2>&1 >/dev/null & Send a request to the model: curl -X POST http://localhost:8000/ -H "Content-Type: application/json" -d '{"prompt": "What is the most popular programming language for machine learning and why?", "max tokens": 1000}' The output is similar to the following: {"text": [" used in various data science projects, including building machine learning models, preprocessing data, and visualizing results.\n\nSure, here is a single sentence summarizing the text:\n\nPython is the most popular programming language for machine learning and is widely used in data science projects, encompassing model building, data preprocessing, and visualization."]} Build and deploy the TPU image This tutorial uses hosted TPU images from vLLM . vLLM provides a Dockerfile.tpu image that builds vLLM on top of the required PyTorch XLA image that includes TPU dependencies.
- Verify that GKE created the RayCluster Service: kubectl --namespace ${ NAMESPACE } get raycluster/vllm-tpu \ --output wide The output is similar to the following: NAME DESIRED WORKERS AVAILABLE WORKERS CPUS MEMORY GPUS TPUS STATUS AGE HEAD POD IP HEAD SERVICE IP vllm-tpu 1 1 ### ###G 0 8 ready ### ###.###.###.### ###.###.###.### Wait until the STATUS is ready and the HEAD POD IP and HEAD SERVICE IP columns have an IP address.
- Be brief.", "text": " (Note: This answer may change over time.)\n\nAccording to the TIOBE Index, a widely followed measure of programming language popularity, the top 5 languages are:\n\n1.
- Java: A general-purpose programming language used in a wide range of applications, including Android app development, web services, and enterprise-level applications.\n\n4.


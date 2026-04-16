---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.691Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Performance HorizontalPodAutoscaler profile"
feature_slug: "performance-horizontalpodautoscaler-profile"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "performance"
  - "horizontalpodautoscaler"
  - "profile"
  - "enabled"
  - "default"
  - "qualifying"
  - "gke"
  - "standard"
---

# Performance HorizontalPodAutoscaler profile

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability; The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability.

## Extended Definition

The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability; The Performance HorizontalPodAutoscaler profile is enabled by default for qualifying GKE Standard clusters and improves HPA responsiveness and scalability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- It looks similar to the following: Instance Type Accelerator Cost/M Input Tokens Cost/M Output Tokens Output Tokens/s NTPOT(ms) TTFT(ms) Model Server Model Server Version Model a3-highgpu-1g nvidia-h100-80gb 0.009 0.035 13335 67 297 vllm gptoss openai/gpt-oss-20b The values represent the performance observed at the point where throughput stops increasing and latency starts dramatically increasing (that is, the inflection or saturation point) for a given profile with this accelerator type.
- For example: gcloud container ai profiles list \ --model = openai/gpt-oss-20b \ --pricing-model = on-demand \ --target-ttft-milliseconds = 300 The output shows supported profiles with performance metrics like throughput, latency, and cost per million tokens at the inflection point.
- Use this command to get the most up-to-date list of supported models, as we routinely update them. gcloud container ai profiles models list Profiles Use the list command to explore generated profiles and filter them based on your performance and cost requirements.
- For example: gcloud container ai profiles manifests create \ --model = google/gemma-2-27b-it \ --accelerator-type = nvidia-l4 \ --target-ntpot-milliseconds = 250 Tip: The gcloud container ai profiles manifests create command prints the manifest to standard output.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Amount of 1G hugepages SwapConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field encryption config can be only one of the following: "encryptionConfig" : { object ( EncryptionConfig ) } // End of list of possible types for union field encryption config . // Union field performance profile can be only one of the following: "bootDiskProfile" : { object ( BootDiskProfile ) } , "ephemeralLocalSsdProfile" : { object ( EphemeralLocalSsdProfile ) } , "dedicatedLocalSsdProfile" : { object ( DedicatedLocalSsdProfile ) } // End of list of possible types for union field performance profile . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Optional.
- By default, no private IPv6 access to or from Google Services (all access will be via IPv4) dnsConfig object ( DNSConfig ) DNSConfig contains clusterDNS config for this cluster. serviceExternalIpsConfig object ( ServiceExternalIPsConfig ) ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not. gatewayApiConfig object ( GatewayAPIConfig ) GatewayAPIConfig contains the desired config of Gateway API on this cluster. enableMultiNetworking boolean Whether multi-networking is enabled for this cluster. networkPerformanceConfig object ( ClusterNetworkPerformanceConfig ) Network bandwidth tier configuration.
- If omitted, defaults to the 'boot disk profile'. performance profile can be only one of the following: bootDiskProfile object ( BootDiskProfile ) Swap on the node's boot disk. ephemeralLocalSsdProfile object ( EphemeralLocalSsdProfile ) Swap on the local SSD shared with pod ephemeral storage. dedicatedLocalSsdProfile object ( DedicatedLocalSsdProfile ) Provisions a new, separate local NVMe SSD exclusively for swap.
- NetworkConfig JSON representation { "network" : string , "subnetwork" : string , "enableIntraNodeVisibility" : boolean , "defaultSnatStatus" : { object ( DefaultSnatStatus ) } , "enableL4ilbSubsetting" : boolean , "datapathProvider" : enum ( DatapathProvider ) , "privateIpv6GoogleAccess" : enum ( PrivateIPv6GoogleAccess ) , "dnsConfig" : { object ( DNSConfig ) } , "serviceExternalIpsConfig" : { object ( ServiceExternalIPsConfig ) } , "gatewayApiConfig" : { object ( GatewayAPIConfig ) } , "enableMultiNetworking" : boolean , "networkPerformanceConfig" : { object ( ClusterNetworkPerformanceConfig ) } , // Union field enable fqdn network policy can be only one of the following: "enableFqdnNetworkPolicy" : boolean // End of list of possible types for union field enable fqdn network policy . // Union field in transit encryption config can be only one of the following: "inTransitEncryptionConfig" : enum ( InTransitEncryptionConfig ) // End of list of possible types for union field in transit encryption config . // Union field enable cilium clusterwide network policy can be only one of the // following: "enableCiliumClusterwideNetworkPolicy" : boolean // End of list of possible types for union field // enable cilium clusterwide network policy . // Union field default enable private nodes can be only one of the following: "defaultEnablePrivateNodes" : boolean // End of list of possible types for union field default enable private nodes . // Union field disable l4 lb firewall reconciliation can be only one of the // following: "disableL4LbFirewallReconciliation" : boolean // End of list of possible types for union field // disable l4 lb firewall reconciliation . } Fields network string Output only.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Amount of 1G hugepages SwapConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field encryption config can be only one of the following: "encryptionConfig" : { object ( EncryptionConfig ) } // End of list of possible types for union field encryption config . // Union field performance profile can be only one of the following: "bootDiskProfile" : { object ( BootDiskProfile ) } , "ephemeralLocalSsdProfile" : { object ( EphemeralLocalSsdProfile ) } , "dedicatedLocalSsdProfile" : { object ( DedicatedLocalSsdProfile ) } // End of list of possible types for union field performance profile . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Optional.
- If omitted, defaults to the 'boot disk profile'. performance profile can be only one of the following: bootDiskProfile object ( BootDiskProfile ) Swap on the node's boot disk. ephemeralLocalSsdProfile object ( EphemeralLocalSsdProfile ) Swap on the local SSD shared with pod ephemeral storage. dedicatedLocalSsdProfile object ( DedicatedLocalSsdProfile ) Provisions a new, separate local NVMe SSD exclusively for swap.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.
- Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: "cluster-location" "cluster-name" "cluster-uid" "configure-sh" "containerd-configure-sh" "enable-os-login" "gci-ensure-gke-docker" "gci-metrics-enabled" "gci-update-strategy" "instance-template" "kube-env" "startup-script" "user-data" "disable-address-manager" "windows-startup-script-ps1" "common-psm1" "k8s-node-setup-psm1" "install-ssh-psm1" "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.293Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Node system configuration cgroupv2 support"
feature_slug: "node-system-configuration-cgroupv2-support"
latest_feature_date: "2022-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "cgroupv2"
  - "cgroup"
  - "configuration"
  - "system"
  - "node"
---

# Node system configuration cgroupv2 support

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE node system configuration can set the cgroup mode to use the cgroupv2 resource management subsystem.

## Extended Definition

GKE node system configuration can set the cgroup mode to use the cgroupv2 resource management subsystem.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.
- WritableCgroups defines writable cgroups configuration for the node pool. registryHosts[] object ( RegistryHostConfig ) RegistryHostConfig configures containerd registry host configuration.
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version. bootDisk object ( BootDisk ) The boot disk configuration for the node pool. consolidationDelay string ( Duration format) Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes.
- WritableCgroups defines writable cgroups configuration for the node pool. registryHosts[] object ( RegistryHostConfig ) RegistryHostConfig configures containerd registry host configuration.
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For more information about logging configuration, see Adjust log throughput . nodeRecycling nodeRecycling : leadTimeSeconds : integer Fields leadTimeSeconds required integer The amount of time, in seconds, before a node reaches the end of its run that GKE should start provisioning a replacement node. nodeSystemConfig nodeSystemConfig : kubeletConfig : object( kubeletConfig ) linuxNodeConfig : object( linuxNodeConfig ) Fields kubeletConfig optional object ( kubeletConfig ) The kubelet configuration for the node. linuxNodeConfig optional object ( linuxNodeConfig ) The Linux kernel configuration for the node. placement placement : policyName : string Fields policyName required string The resource policy name to be used in custom compact placement policies .
- The following example configures a ComputeClass that prioritizes Spot VMs for the n4-custom-8-20480 custom machine type, and falls back to on-demand VMs of the same type if Spot capacity is unavailable: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : custom-machine-type spec : priorities : - machineType : n4-custom-8-20480 spot : true - machineType : n4-custom-8-20480 spot : false nodePoolAutoCreation : enabled : true priorityDefaults priorityDefaults : nodeSystemConfig : object( nodeSystemConfig ) location : object( location ) Fields nodeSystemConfig optional object ( nodeSystemConfig ) Default values for the node system configuration.
- The default value is true for cgroupv1 nodes, false for cgroupv2 nodes. evictionMinimumReclaim evictionMinimumReclaim : imagefsAvailable : string imagefsInodesFree : string memoryAvailable : string nodefsAvailable : string nodefsInodesFree : string pidAvailable : string Fields imagefsAvailable optional string The minimum reclaim for imagefs.available .
- Unsupported when the spec.autopilot.enabled field is set to true . nodeSystemConfig optional object ( nodeSystemConfig ) Requires GKE version 1.32.1-gke.1729000 or later The node system configuration. placement optional object ( placement ) Requires GKE version 1.33.2-gke.1335000 or later The placement configuration.


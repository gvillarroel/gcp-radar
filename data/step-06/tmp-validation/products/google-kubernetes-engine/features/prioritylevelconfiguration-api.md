---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.246Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "PriorityLevelConfiguration API"
feature_slug: "prioritylevelconfiguration-api"
latest_feature_date: "2023-09-05"
deprecation_date: "2023-09-05"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "prioritylevelconfiguration"
  - "priority"
  - "defines"
  - "flow"
  - "level"
  - "resources"
  - "control"
---

# PriorityLevelConfiguration API

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; deprecated on 2023-09-05.

## Extended Definition

The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; The PriorityLevelConfiguration API defines flow control priority level resources for Kubernetes API requests; deprecated on 2023-09-05.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- IdentityServiceConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether to enable the Identity Service component Autopilot JSON representation { "enabled" : boolean , "workloadPolicyConfig" : { object ( WorkloadPolicyConfig ) } , "privilegedAdmissionConfig" : { object ( PrivilegedAdmissionConfig ) } , "clusterPolicyConfig" : { object ( ClusterPolicyConfig ) } } Fields enabled boolean Enable Autopilot workloadPolicyConfig object ( WorkloadPolicyConfig ) WorkloadPolicyConfig is the configuration related to GCW workload policy privilegedAdmissionConfig object ( PrivilegedAdmissionConfig ) PrivilegedAdmissionConfig is the configuration related to privileged admission control. clusterPolicyConfig object ( ClusterPolicyConfig ) ClusterPolicyConfig denotes cluster level policies that are enforced for the cluster.
- Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized networks config instead. maintenancePolicy object ( MaintenancePolicy ) Configure the maintenance policy for this cluster. binaryAuthorization object ( BinaryAuthorization ) Configuration for Binary Authorization. autoscaling object ( ClusterAutoscaling ) Cluster-level autoscaling configuration. networkConfig object ( NetworkConfig ) Configuration for cluster networking. defaultMaxPodsConstraint object ( MaxPodsConstraint ) The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster.
- Resource usage export is disabled when this config is unspecified. authenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) Configuration controlling RBAC group membership information. privateClusterConfig object ( PrivateClusterConfig ) Configuration for private cluster. databaseEncryption object ( DatabaseEncryption ) Configuration of etcd encryption. verticalPodAutoscaling object ( VerticalPodAutoscaling ) Cluster-level Vertical Pod Autoscaling configuration. shieldedNodes object ( ShieldedNodes ) Shielded Nodes configuration. releaseChannel object ( ReleaseChannel ) Release channel configuration.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.
- The following parameters are supported. net.core.busy poll net.core.busy read net.core.netdev max backlog net.core.rmem max net.core.rmem default net.core.wmem default net.core.wmem max net.core.optmem max net.core.somaxconn net.ipv4.tcp rmem net.ipv4.tcp wmem net.ipv4.tcp tw reuse net.ipv4.tcp mtu probing net.ipv4.tcp max orphans net.ipv4.tcp max tw buckets net.ipv4.tcp syn retries net.ipv4.tcp ecn net.ipv4.tcp congestion control net.netfilter.nf conntrack max net.netfilter.nf conntrack buckets net.netfilter.nf conntrack tcp timeout close wait net.netfilter.nf conntrack tcp timeout time wait net.netfilter.nf conntrack tcp timeout established net.netfilter.nf conntrack acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf event paranoid kernel.sched rt runtime us kernel.softlockup panic kernel.yama.ptrace scope kernel.kptr restrict kernel.dmesg restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max user instances fs.inotify.max user watches fs.nr open vm.dirty background ratio vm.dirty background bytes vm.dirty expire centisecs vm.dirty ratio vm.dirty bytes vm.dirty writeback centisecs vm.max map count vm.overcommit memory vm.overcommit ratio vm.vfs cache pressure vm.swappiness vm.watermark scale factor vm.min free kbytes cgroupMode enum ( CgroupMode ) cgroup mode specifies the cgroup mode to be used on the node. transparentHugepageEnabled enum ( TransparentHugepageEnabled ) Optional.
- The grace period is the amount of time that a pod must be under pressure before an eviction occurs. evictionMinimumReclaim object ( EvictionMinimumReclaim ) Optional. eviction minimum reclaim is a map of signal names to quantities that defines minimum reclaims, which describe the minimum amount of a given resource the kubelet will reclaim when performing a pod eviction while that resource is under pressure. evictionMaxPodGracePeriodSeconds integer Optional. eviction max pod grace period seconds is the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
- All the nodes in the node pool will be Confidential VM once enabled. resourceLabels map (key: string, value: string) The resource labels for the node pool to use to annotate any related Google Compute Engine resources. loggingConfig object ( NodePoolLoggingConfig ) Logging configuration. windowsNodeConfig object ( WindowsNodeConfig ) Parameters that can be configured on Windows nodes. localNvmeSsdBlockConfig object ( LocalNvmeSsdBlockConfig ) Parameters for using raw-block Local NVMe SSDs. ephemeralStorageLocalSsdConfig object ( EphemeralStorageLocalSsdConfig ) Parameters for the node ephemeral storage using Local SSDs.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- IdentityServiceConfig JSON representation { "enabled" : boolean } Fields enabled boolean Whether to enable the Identity Service component Autopilot JSON representation { "enabled" : boolean , "workloadPolicyConfig" : { object ( WorkloadPolicyConfig ) } , "privilegedAdmissionConfig" : { object ( PrivilegedAdmissionConfig ) } , "clusterPolicyConfig" : { object ( ClusterPolicyConfig ) } } Fields enabled boolean Enable Autopilot workloadPolicyConfig object ( WorkloadPolicyConfig ) WorkloadPolicyConfig is the configuration related to GCW workload policy privilegedAdmissionConfig object ( PrivilegedAdmissionConfig ) PrivilegedAdmissionConfig is the configuration related to privileged admission control. clusterPolicyConfig object ( ClusterPolicyConfig ) ClusterPolicyConfig denotes cluster level policies that are enforced for the cluster.
- Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized networks config instead. maintenancePolicy object ( MaintenancePolicy ) Configure the maintenance policy for this cluster. binaryAuthorization object ( BinaryAuthorization ) Configuration for Binary Authorization. autoscaling object ( ClusterAutoscaling ) Cluster-level autoscaling configuration. networkConfig object ( NetworkConfig ) Configuration for cluster networking. defaultMaxPodsConstraint object ( MaxPodsConstraint ) The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster.
- Resource usage export is disabled when this config is unspecified. authenticatorGroupsConfig object ( AuthenticatorGroupsConfig ) Configuration controlling RBAC group membership information. privateClusterConfig object ( PrivateClusterConfig ) Configuration for private cluster. databaseEncryption object ( DatabaseEncryption ) Configuration of etcd encryption. verticalPodAutoscaling object ( VerticalPodAutoscaling ) Cluster-level Vertical Pod Autoscaling configuration. shieldedNodes object ( ShieldedNodes ) Shielded Nodes configuration. releaseChannel object ( ReleaseChannel ) Release channel configuration.


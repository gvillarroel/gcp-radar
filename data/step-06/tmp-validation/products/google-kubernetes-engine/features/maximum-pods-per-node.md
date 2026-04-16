---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.292Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Maximum Pods per node"
feature_slug: "maximum-pods-per-node"
latest_feature_date: "2022-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "increased"
  - "maximum"
  - "number"
  - "pods"
  - "node"
---

# Maximum Pods per node

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE increased the maximum number of Pods per node to 256 on supported versions.

## Extended Definition

GKE increased the maximum number of Pods per node to 256 on supported versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The node pool might contain any number of TPU nodes between zero and the maximum size of the node pool as determined by the --max-nodes and the --total-max-nodes autoscaling flags.
- If the number of Pods in an auto-created node pool decreases, the cluster autoscaler gradually scales the node pool down.
- When you create this example Deployment, GKE creates a node pool that contains a TPU v4 slice with a 2x2x2 topology and two ct4p-hightpu-4t machines. apiVersion: apps/v1 kind: Deployment metadata: name: tpu-workload labels: app: tpu-workload spec: replicas: 2 template: spec: nodeSelector: cloud.google.com/gke-tpu-accelerator: tpu-v4-podslice cloud.google.com/gke-tpu-topology: 2x2x2 containers: - name: tpu-job image: us-docker.pkg.dev/cloud-tpu-images/jax-ai-image/tpu:latest ports: - containerPort: 8431 # Port to export TPU runtime metrics, if supported. securityContext: privileged: true # Required for GKE versions earlier than 1.28 to access TPUs. command: - bash - -c - python -c 'import jax; print("Total TPU chips:", jax.device count())' resources: requests: google.com/tpu: 4 limits: google.com/tpu: 4 ports: - containerPort: 80 In this manifest, the following fields define TPU configuration: cloud.google.com/gke-tpu-accelerator : the TPU version and type .
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Surge upgrade behavior is determined by the maxSurge and maxUnavailable settings, which determine how many nodes are upgraded at the same time in a rolling window with the described steps. maxSurge : GKE creates a new surge node before removing an existing one Set maxSurge to choose the maximum number of additional, surge nodes that can be added to the node pool during an upgrade, per zone, increasing the likelihood that workloads running on the existing node can migrate to a new node immediately.
- For more information, see Resources for surge upgrades . maxUnavailable : GKE makes an existing node unavailable to recreate it Set maxUnavailable to choose the maximum number of nodes that can be simultaneously unavailable during an upgrade, per zone.
- The maximum number of nodes that can be upgraded in parallel will be no higher than the sum of maxSurge plus maxUnavailable , and no higher than the number of nodes in the zone.
- This configuration upgrades 20 nodes in parallel while the PDB limits the number of Pods that can be drained at a given time.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Autoscaler is enabled only if a valid configuration is present. management object ( NodeManagement ) NodeManagement configuration for this NodePool. maxPodsConstraint object ( MaxPodsConstraint ) The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool. conditions[] object ( StatusCondition ) Which conditions caused the current node pool state. podIpv4CidrSize integer Output only.
- Union field max pods per node . max pods per node can be only one of the following: maxPodsPerNode object ( MaxPodsConstraint ) The maximum number of pods per node which use this pod network.
- NodeKubeletConfig JSON representation { "cpuManagerPolicy" : string , "topologyManager" : { object ( TopologyManager ) } , "memoryManager" : { object ( MemoryManager ) } , "cpuCfsQuota" : boolean , "cpuCfsQuotaPeriod" : string , "podPidsLimit" : string , "imageGcLowThresholdPercent" : integer , "imageGcHighThresholdPercent" : integer , "imageMinimumGcAge" : string , "imageMaximumGcAge" : string , "containerLogMaxSize" : string , "containerLogMaxFiles" : integer , "allowedUnsafeSysctls" : [ string ] , "evictionSoft" : { object ( EvictionSignals ) } , "evictionSoftGracePeriod" : { object ( EvictionGracePeriod ) } , "evictionMinimumReclaim" : { object ( EvictionMinimumReclaim ) } , "evictionMaxPodGracePeriodSeconds" : integer , "maxParallelImagePulls" : integer , "crashLoopBackOff" : { object ( CrashLoopBackOffConfig ) } , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . // Union field single process oom kill can be only one of the following: "singleProcessOomKill" : boolean // End of list of possible types for union field single process oom kill . // Union field shutdown grace period seconds can be only one of the following: "shutdownGracePeriodSeconds" : integer // End of list of possible types for union field // shutdown grace period seconds . // Union field shutdown grace period critical pods seconds can be only one of // the following: "shutdownGracePeriodCriticalPodsSeconds" : integer // End of list of possible types for union field // shutdown grace period critical pods seconds . } Fields cpuManagerPolicy string Control the CPU management policy on the node.
- UpgradeSettings JSON representation { "maxSurge" : integer , "maxUnavailable" : integer , // Union field strategy can be only one of the following: "strategy" : enum ( NodePoolUpdateStrategy ) // End of list of possible types for union field strategy . // Union field blue green settings can be only one of the following: "blueGreenSettings" : { object ( BlueGreenSettings ) } // End of list of possible types for union field blue green settings . } Fields maxSurge integer The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process. maxUnavailable integer The maximum number of nodes that can be simultaneously unavailable during the upgrade process.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.196Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Compact placement policy for node auto-provisioning"
feature_slug: "compact-placement-policy-for-node-auto-provisioning"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool"
keywords:
  - "compact"
  - "placement"
  - "provisioning"
  - "policy"
  - "auto"
  - "node"
---

# Compact placement policy for node auto-provisioning

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Node auto-provisioning can use a custom resource policy as a compact placement policy.

## Extended Definition

Node auto-provisioning can use a custom resource policy as a compact placement policy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)

## Supporting Pages

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following example: apiVersion: cloud.google.com/v1 kind: ComputeClass metadata: name: my-class spec: priorities: - machineFamily: n4 placement: policyName: my-placement-policy nodePoolAutoCreation: enabled: true In this configuration, GKE applies the compact placement policy for all workloads that use this ComputeClass and provisions their nodes according to the existing resource policy named my-placement-policy .
- If this value is unspecified, the default is MODE UNSPECIFIED . placement : The specifics of machine placement: policyName : The name of either a GKE Autopilot compact placement policy or a workload policy .
- Request a placement policy Starting with GKE version 1.33.2-gke.1335000, in GKE Autopilot clusters, you can use compact placement with a custom placement policy or workload policy.
- You want to specify a compact placement policy to use with GKE Autopilot.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For more information about logging configuration, see Adjust log throughput . nodeRecycling nodeRecycling : leadTimeSeconds : integer Fields leadTimeSeconds required integer The amount of time, in seconds, before a node reaches the end of its run that GKE should start provisioning a replacement node. nodeSystemConfig nodeSystemConfig : kubeletConfig : object( kubeletConfig ) linuxNodeConfig : object( linuxNodeConfig ) Fields kubeletConfig optional object ( kubeletConfig ) The kubelet configuration for the node. linuxNodeConfig optional object ( linuxNodeConfig ) The Linux kernel configuration for the node. placement placement : policyName : string Fields policyName required string The resource policy name to be used in custom compact placement policies .
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- You can specify a resource policy name to be used in custom compact placement policies . podFamily optional string Requires GKE version 1.35.2-gke.1485000 or later Use the Autopilot container-optimized compute platform to run the Pod.
- Unsupported when the spec.autopilot.enabled field is set to true . nodeSystemConfig optional object ( nodeSystemConfig ) Requires GKE version 1.32.1-gke.1729000 or later The node system configuration. placement optional object ( placement ) Requires GKE version 1.33.2-gke.1335000 or later The placement configuration.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- NodePool JSON representation { "name" : string , "config" : { object ( NodeConfig ) } , "initialNodeCount" : integer , "locations" : [ string ] , "networkConfig" : { object ( NodeNetworkConfig ) } , "selfLink" : string , "version" : string , "instanceGroupUrls" : [ string ] , "status" : enum ( Status ) , "statusMessage" : string , "autoscaling" : { object ( NodePoolAutoscaling ) } , "management" : { object ( NodeManagement ) } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "conditions" : [ { object ( StatusCondition ) } ] , "podIpv4CidrSize" : integer , "upgradeSettings" : { object ( UpgradeSettings ) } , "placementPolicy" : { object ( PlacementPolicy ) } , "updateInfo" : { object ( UpdateInfo ) } , "etag" : string , "queuedProvisioning" : { object ( QueuedProvisioning ) } , "bestEffortProvisioning" : { object ( BestEffortProvisioning ) } , "nodeDrainConfig" : { object ( NodeDrainConfig ) } } Fields name string The name of the node pool. config object ( NodeConfig ) The node configuration of the pool. initialNodeCount integer The initial node count for the pool.
- BlueGreenSettings JSON representation { // Union field rollout policy can be only one of the following: "standardRolloutPolicy" : { object ( StandardRolloutPolicy ) } , "autoscaledRolloutPolicy" : { object ( AutoscaledRolloutPolicy ) } // End of list of possible types for union field rollout policy . // Union field node pool soak duration can be only one of the following: "nodePoolSoakDuration" : string // End of list of possible types for union field node pool soak duration . } Fields Union field rollout policy .
- NodePoolAutoscaling JSON representation { "enabled" : boolean , "minNodeCount" : integer , "maxNodeCount" : integer , "autoprovisioned" : boolean , "locationPolicy" : enum ( LocationPolicy ) , "totalMinNodeCount" : integer , "totalMaxNodeCount" : integer } Fields enabled boolean Is autoscaling enabled for this node pool. minNodeCount integer Minimum number of nodes for one location in the node pool.
- The pod CIDR block size per node in this node pool. upgradeSettings object ( UpgradeSettings ) Upgrade settings control disruption and speed of the upgrade. placementPolicy object ( PlacementPolicy ) Specifies the node placement policy. updateInfo object ( UpdateInfo ) Output only.


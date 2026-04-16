---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.669Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Coherent Driver-Based Memory Management"
feature_slug: "coherent-driver-based-memory-management"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "coherent"
  - "driver"
  - "based"
  - "memory"
  - "management"
  - "cdmm"
  - "lets"
  - "gpu"
---

# Coherent Driver-Based Memory Management

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

CDMM lets GPU memory be managed by the driver instead of the operating system and is enabled by default on supported A4X nodes.

## Extended Definition

CDMM lets GPU memory be managed by the driver instead of the operating system and is enabled by default on supported A4X nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- It is recommended that you: Upgrade your AWSManagementService , AWSCluster and AWSNodePool objects to the following version: 1.8.2 Update the gke-version of your AWSCluster and AWSNodePool objects to one of the supported Kubernetes versions : 1.17.17-gke.15800 1.18.20-gke.4800 1.19.14-gke.600 1.20.10-gke.600 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.
- Applications protected by the following mechanisms would've reduced or eliminated their exposure: Equal or higher priority DENY firewall rules (MCG sets firewall rules priority to 1000 by default) Service mesh using identity-based authorization Application-level authorization Affected resources 2025-01-23 Update: GKE fleets (or hubs) using MCG in shared VPC service projects are not affected by the issue as firewall rules are not managed from shared VPC service projects.
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- We recommend that you upgrade your nodes to one of the following GKE on AWS versions: Current generation: 1.23.7-gke.1300 1.22.10-gke.1500 1.21.11-gke.1900 Previous generation: 1.23.7-gke.1500 1.22.10-gke.1500 1.21.13-gke.1600 Note: This section applies to both the current and previous generation of GKE on AWS Three new memory corruption vulnerabilities (CVE-2022-29581, CVE-2022-29582, CVE-2022-1116) have been discovered in the Linux kernel.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- Huge pages are a memory management feature that can improve performance for memory-intensive applications.
- If you specify this field, the minimum value is 1 . secondaryBootDisks[] optional []object( secondaryBootDisks ) Requires GKE version 1.31.2-gke.1105000 or later The configuration of secondary boot disks that are used to preload nodes with data, such as ML models or container images. sysctls sysctls : kernel.keys.maxbytes : integer kernel.keys.maxkeys : integer kernel.shmmni : integer kernel.shmmax : integer kernel.shmall : integer net.core.netdev max backlog : integer net.core.rmem default : integer net.core.rmem max : integer net.core.wmem default : integer net.core.wmem max : integer net.core.optmem max : integer net.core.somaxconn : integer net.ipv4.neigh.default.gc thresh1 : integer net.ipv4.neigh.default.gc thresh2 : integer net.ipv4.neigh.default.gc thresh3 : integer net.ipv4.tcp max orphans : integer net.ipv4.tcp rmem : string net.ipv4.tcp wmem : string net.ipv4.tcp tw reuse : integer net.core.busy poll : integer net.core.busy read : integer net.ipv6.conf.all.disable ipv6 : boolean net.ipv6.conf.default.disable ipv6 : boolean net.netfilter.nf conntrack max : integer net.netfilter.nf conntrack buckets : integer net.netfilter.nf conntrack tcp timeout close wait : integer net.netfilter.nf conntrack tcp timeout time wait : integer net.netfilter.nf conntrack tcp timeout established : integer net.netfilter.nf conntrack acct : boolean vm.max map count : integer vm.dirty background ratio : integer vm.dirty expire centisecs : integer vm.dirty ratio : integer vm.dirty writeback centisecs : integer vm.overcommit memory : integer vm.overcommit ratio : integer vm.vfs cache pressure : integer vm.min free kbytes : integer vm.swappiness : integer vm.watermark scale factor : integer fs.aio-max-nr : integer fs.file-max : integer fs.inotify.max user instances : integer fs.inotify.max user watches : integer fs.nr open : integer Fields kernel.keys.maxbytes optional integer Requires GKE version 1.35.3-gke.1234000 or later The maximum number of bytes that a nonroot user can hold in the payload section of all their keys.
- When the machineType field is specified, the resulting set of zones includes only those zones where the specified machine type is available. priorities priorities : - capacityCheckWaitTimeSeconds : integer flexStart : object( flexStart ) gpu : object( gpu ) location : object( location ) machineFamily : string machineType : string maxRunDurationSeconds : integer minCores : integer minCpuPlatform : string minMemoryGb : integer nodeLabels : map nodepools : [] string nodeSystemConfig : object( nodeSystemConfig ) machineType : string location : object( location ) maxPodsPerNode : integer placement : object ( placement ) priorityScore : integer reservations : object( reservations ) spot : boolean storage : object( storage ) taints : [ object ( taints ) ] tpu : object( tpu ) Fields capacityCheckWaitTimeSeconds optional integer Requires GKE version 1.33.1-gke.1788000 or later Duration, in seconds, for which GKE attempts to provision the priority before falling back to lower priorities.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- When you use ComputeClasses, update your workloads to remove the following labels from node selectors and configure the corresponding field in the ComputeClasses that you create: Node label ComputeClass field cloud.google.com/machine-family priorities.machineFamily cloud.google.com/machine-type priorities.machineType cloud.google.com/gke-spot priorities.spot cloud.google.com/gke-accelerator priorities.gpu.type cloud.google.com/gke-gpu-driver-version priorities.gpu.driverVersion cloud.google.com/reservation-name priorities.reservations.specific.name cloud.google.com/reservation-project priorities.reservations.specific.project cloud.google.com/reservation-affinity priorities.reservations.affinity cloud.google.com/gke-ephemeral-storage-local-ssd priorities.storage.localSSDCount cloud.google.com/gke-boot-disk priorities.storage.bootDiskType cloud.google.com/gke-boot-disk-size priorities.storage.bootDiskSize cloud.google.com/gke-node-pool-group-name nodePoolGroup.name cloud.google.com/gke-workload-type nodePoolConfig.workloadType node.kubernetes.io/instance-type priorities.machineType Limitations The name of your ComputeClass can't begin with gke or autopilot .
- For example, the following manifest requests the cost-optimized ComputeClass: apiVersion : apps/v1 kind : Deployment metadata : name : custom-workload spec : replicas : 2 selector : matchLabels : app : custom-workload template : metadata : labels : app : custom-workload spec : nodeSelector : cloud.google.com/compute-class : cost-optimized containers : - name : test image : registry.k8s.io/pause resources : requests : cpu : 1.5 memory : "4Gi" Node selectors for system node labels GKE adds system labels to nodes to identify nodes by criteria like the machine type, attached hardware accelerators, or the boot disk type.
- The following example shows a priority rule that uses machineFamily : priorities: - machineFamily: n4 spot: true minCores: 16 minMemoryGb: 64 storage: bootDiskType: hyperdisk-balanced bootDiskSize: 100 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks: - diskImageName: pytorch-mnist project: k8s-staging-jobset machineType configurations The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 .
- The following example shows a priority rule that uses machineType to provision n4-standard-32 machine types: priorities: - machineType: n4-standard-32 spot: true storage: bootDiskType: hyperdisk-balanced bootDiskSize: 250 localSSDCount: 2 bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 GPU configuration To select GPUs in your priority rules, specify the type, count, and driverVersion (optional) of the GPU in the gpu field of a priority rule.


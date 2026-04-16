---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.698Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Confidential GKE Nodes with Intel TDX and AMD SEV-SNP"
feature_slug: "confidential-gke-nodes-with-intel-tdx-and-amd-sev-snp"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "confidential"
  - "gke"
  - "nodes"
  - "intel"
  - "tdx"
  - "amd"
  - "sev"
  - "snp"
---

# Confidential GKE Nodes with Intel TDX and AMD SEV-SNP

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Confidential GKE Nodes can use Intel TDX and AMD SEV-SNP to protect workload data in use.

## Extended Definition

Confidential GKE Nodes can use Intel TDX and AMD SEV-SNP to protect workload data in use.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This field supports the following values, which you must specify in uppercase: SEV : AMD SEV SEV SNP : AMD SEV-SNP TDX : Intel TDX To let a workload run on any confidential nodes, regardless of the Confidential Computing technology, use a node affinity rule , like in the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : Exists To let a workload run on nodes that use only a subset of the available Confidential Computing technologies, use a node affinity rule that's similar to the following example: apiVersion : v1 kind : Pod spec : containers : - name : confidential-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 affinity : nodeAffinity : requiredDuringSchedulingIgnoredDuringExecution : nodeSelectorTerms : - matchExpressions : - key : cloud.google.com/gke-confidential-nodes-instance-type operator : In values : - SEV - SEV SNP - TDX In the values field, specify only the Confidential Computing technologies that you want to run the workload on.
- Confidential GKE Nodes supports the following Confidential Computing technologies: AMD Secure Encrypted Virtualization (SEV) AMD Secure Encrypted Virtualization-Secure Nested Paging (SEV-SNP) Intel Trust Domain Extensions (TDX) For more information about these technologies and for help choosing the optimal technology for your requirements, see the Confidential VM overview .
- The supported technologies at the cluster level depend on the cluster mode of operation, as follows: Autopilot clusters : AMD SEV Standard clusters : AMD SEV AMD SEV-SNP Intel TDX Node pool level Enable Confidential GKE Nodes when you create a new node pool in a Standard cluster.
- The following values are supported: sev : AMD SEV sev snp : AMD SEV-SNP tdx : Intel TDX Console You can update an existing node pool to use Confidential GKE Nodes only if the machine type of the node pool is supported by your chosen Confidential Computing technology.

### "ConfidentialNodes \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "enabled" : boolean , "confidentialInstanceType" : enum ( ConfidentialInstanceType ) } Fields enabled boolean Whether Confidential Nodes feature is enabled. confidentialInstanceType enum ( ConfidentialInstanceType ) Defines the type of technology used by the confidential node.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Reference Send feedback ConfidentialNodes Stay organized with collections Save and categorize content based on your preferences.
- JSON representation ConfidentialInstanceType ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
- ConfidentialInstanceType The type of technology used by the confidential node.

### ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT HUGEPAGE ENABLED ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER IMAGE CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- TDX : Intel Trust Domain eXtension taints[] optional object ( taints ) Requires GKE version 1.33.4-gke.1350000 or later Applies Kubernetes taints to all nodes in a new node pool.
- If you specify this field, the minimum value is 1 . secondaryBootDisks[] optional []object( secondaryBootDisks ) Requires GKE version 1.31.2-gke.1105000 or later The configuration of secondary boot disks that are used to preload nodes with data, such as ML models or container images. sysctls sysctls : kernel.keys.maxbytes : integer kernel.keys.maxkeys : integer kernel.shmmni : integer kernel.shmmax : integer kernel.shmall : integer net.core.netdev max backlog : integer net.core.rmem default : integer net.core.rmem max : integer net.core.wmem default : integer net.core.wmem max : integer net.core.optmem max : integer net.core.somaxconn : integer net.ipv4.neigh.default.gc thresh1 : integer net.ipv4.neigh.default.gc thresh2 : integer net.ipv4.neigh.default.gc thresh3 : integer net.ipv4.tcp max orphans : integer net.ipv4.tcp rmem : string net.ipv4.tcp wmem : string net.ipv4.tcp tw reuse : integer net.core.busy poll : integer net.core.busy read : integer net.ipv6.conf.all.disable ipv6 : boolean net.ipv6.conf.default.disable ipv6 : boolean net.netfilter.nf conntrack max : integer net.netfilter.nf conntrack buckets : integer net.netfilter.nf conntrack tcp timeout close wait : integer net.netfilter.nf conntrack tcp timeout time wait : integer net.netfilter.nf conntrack tcp timeout established : integer net.netfilter.nf conntrack acct : boolean vm.max map count : integer vm.dirty background ratio : integer vm.dirty expire centisecs : integer vm.dirty ratio : integer vm.dirty writeback centisecs : integer vm.overcommit memory : integer vm.overcommit ratio : integer vm.vfs cache pressure : integer vm.min free kbytes : integer vm.swappiness : integer vm.watermark scale factor : integer fs.aio-max-nr : integer fs.file-max : integer fs.inotify.max user instances : integer fs.inotify.max user watches : integer fs.nr open : integer Fields kernel.keys.maxbytes optional integer Requires GKE version 1.35.3-gke.1234000 or later The maximum number of bytes that a nonroot user can hold in the payload section of all their keys.
- When the machineType field is specified, the resulting set of zones includes only those zones where the specified machine type is available. priorities priorities : - capacityCheckWaitTimeSeconds : integer flexStart : object( flexStart ) gpu : object( gpu ) location : object( location ) machineFamily : string machineType : string maxRunDurationSeconds : integer minCores : integer minCpuPlatform : string minMemoryGb : integer nodeLabels : map nodepools : [] string nodeSystemConfig : object( nodeSystemConfig ) machineType : string location : object( location ) maxPodsPerNode : integer placement : object ( placement ) priorityScore : integer reservations : object( reservations ) spot : boolean storage : object( storage ) taints : [ object ( taints ) ] tpu : object( tpu ) Fields capacityCheckWaitTimeSeconds optional integer Requires GKE version 1.33.1-gke.1788000 or later Duration, in seconds, for which GKE attempts to provision the priority before falling back to lower priorities.


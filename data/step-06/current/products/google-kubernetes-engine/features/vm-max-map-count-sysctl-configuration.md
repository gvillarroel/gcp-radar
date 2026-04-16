---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.765Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "vm.max_map_count sysctl configuration"
feature_slug: "vm-max-map-count-sysctl-configuration"
latest_feature_date: "2023-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass"
keywords:
  - "vm"
  - "max"
  - "map"
  - "count"
  - "sysctl"
  - "configuration"
  - "gke"
  - "standard"
---

# vm.max_map_count sysctl configuration

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Standard node pools can use node system configuration to set the vm.max_map_count Linux kernel attribute.

## Extended Definition

GKE Standard node pools can use node system configuration to set the vm.max_map_count Linux kernel attribute.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)

## Supporting Pages

### Automatically bootstrap GKE nodes with DaemonSets | Kubernetes Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
- Source ID: `feature-recovery-direct-http`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- This Pod runs a privileged init container that applies the sysctl configuration ( vm.max_map_count=262144 ) and removes the node taint, which makes the node schedulable.
- SYSCTL_PARAM="vm.max_map_count" SYSCTL_VALUE="262144" TAINT_KEY="node.config.status/stage" echo "Running configuration on node: ${NODE_NAME}" # 1.
- This tutorial applies the vm.max_map_count=262144 kernel parameter as an example configuration.
- Only use this on clusters where you have # strict controls over what is deployed. --- apiVersion : v1 kind : ServiceAccount metadata : name : node-config-sa namespace : default --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : node-patcher-role rules : - apiGroups : [ "" ] resources : [ "nodes" ] # Permissions needed to read and remove a taint from the node. verbs : [ "get" , "patch" , "update" ] --- apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRoleBinding metadata : name : node-config-binding subjects : - kind : ServiceAccount name : node-config-sa namespace : default roleRef : kind : ClusterRole name : node-patcher-role apiGroup : rbac.authorization.k8s.io --- apiVersion : apps/v1 kind : DaemonSet metadata : name : auto-untaint-daemonset labels : app : auto-untaint-configurator spec : selector : matchLabels : app : auto-untaint-configurator updateStrategy : type : RollingUpdate template : metadata : labels : app : auto-untaint-configurator spec : serviceAccountName : node-config-sa hostPID : true # Toleration now matches the taint on your node. tolerations : - key : "node.config.status/stage" operator : "Equal" value : "configuring" effect : "NoSchedule" volumes : - name : host-root-fs hostPath : path : / initContainers : - name : configure-and-untaint image : ubuntu:22.04 # Using a standard container image. securityContext : privileged : true # Required for chroot and sysctl. env : - name : NODE_NAME valueFrom : fieldRef : fieldPath : spec.nodeName volumeMounts : - name : host-root-fs mountPath : /host command : [ "/bin/bash" , "-c" ] args : - | # Using explicit error checking for each critical command. # Define the configuration and taint details.

### ComputeClass | Google Kubernetes Engine (GKE) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- Source ID: `feature-recovery-direct-http`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If you specify this field, the minimum value is 1 . secondaryBootDisks[] optional []object( secondaryBootDisks ) Requires GKE version 1.31.2-gke.1105000 or later The configuration of secondary boot disks that are used to preload nodes with data, such as ML models or container images. sysctls sysctls : kernel.keys.maxbytes : integer kernel.keys.maxkeys : integer kernel.shmmni : integer kernel.shmmax : integer kernel.shmall : integer net.core.netdev_max_backlog : integer net.core.rmem_default : integer net.core.rmem_max : integer net.core.wmem_default : integer net.core.wmem_max : integer net.core.optmem_max : integer net.core.somaxconn : integer net.ipv4.neigh.default.gc_thresh1 : integer net.ipv4.neigh.default.gc_thresh2 : integer net.ipv4.neigh.default.gc_thresh3 : integer net.ipv4.tcp_max_orphans : integer net.ipv4.tcp_rmem : string net.ipv4.tcp_wmem : string net.ipv4.tcp_tw_reuse : integer net.core.busy_poll : integer net.core.busy_read : integer net.ipv6.conf.all.disable_ipv6 : boolean net.ipv6.conf.default.disable_ipv6 : boolean net.netfilter.nf_conntrack_max : integer net.netfilter.nf_conntrack_buckets : integer net.netfilter.nf_conntrack_tcp_timeout_close_wait : integer net.netfilter.nf_conntrack_tcp_timeout_time_wait : integer net.netfilter.nf_conntrack_tcp_timeout_established : integer net.netfilter.nf_conntrack_acct : boolean vm.max_map_count : integer vm.dirty_background_ratio : integer vm.dirty_expire_centisecs : integer vm.dirty_ratio : integer vm.dirty_writeback_centisecs : integer vm.overcommit_memory : integer vm.overcommit_ratio : integer vm.vfs_cache_pressure : integer vm.min_free_kbytes : integer vm.swappiness : integer vm.watermark_scale_factor : integer fs.aio-max-nr : integer fs.file-max : integer fs.inotify.max_user_instances : integer fs.inotify.max_user_watches : integer fs.nr_open : integer Fields kernel.keys.maxbytes optional integer Requires GKE version 1.35.3-gke.1234000 or later The maximum number of bytes that a nonroot user can hold in the payload section of all their keys.
- The value must be true or false . vm.max_map_count optional integer Limit the number of distinct memory regions that a process can map into its address space.
- It is not a working example. apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : my-class spec : activeMigration : optimizeRulePriority : false autoscalingPolicy : consolidationDelayMinutes : 1 consolidationThreshold : 0 gpuConsolidationThreshold : 0 description : "Short description of the ComputeClass." nodePoolAutoCreation : enabled : false nodePoolConfig : imageType : ubuntu_containerd ipType : public serviceAccount : example-service-account@example-project. iam.gserviceaccount.com autoRepair : true autoUpgrade : true nodeLabels : example-label-key : example-label-value confidentialNodeType : SEV taints : - effect : NoSchedule key : example-key value : example-value imageStreaming : enabled : true gvnic : enabled : true resourceManagerTags : - key : example-project/example-tag-key value : example-tag-value loggingConfig : loggingVariantConfig : variant : DEFAULT priorityDefaults : nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 256 transparentHugepageEnabled : TRANSPARENT_HUGEPAGE_ENABLED_ALWAYS kubeletConfig : cpuCfsQuota : true location : zones : [ 'us-central1-a' , 'us-central1-b' ] priorities : - machineFamily : n4 maxRunDurationSeconds : 360 minCores : 16 minCpuPlatform : "Intel Emerald Rapids" minMemoryGb : 64 placement : policyName : my-resource-policy reservations : affinity : Specific specific : - name : n4-shared-reservation project : reservation-project zones : [ 'us-central1-a' ] reservationBlock : name : reservation-block-name reservationSubBlock : name : reservation-sub-block-name spot : true storage : bootDiskSize : 100 bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1 secondaryBootDisks : - diskImageName : pytorch-mnist project : k8s-staging-jobset mode : CONTAINER_IMAGE_CACHE nodeSystemConfig : linuxNodeConfig : sysctls : net.core.somaxconn : 512 - machineType : n4-standard-32 nodeLabels : example-priority-label-key : example-priority-label-value location : zones : [ 'us-central1-c' ] locationPolicy : ANY spot : true reservations : affinity : AnyBestEffort storage : bootDiskSize : 100 bootDiskType : hyperdisk-balanced localSSDCount : 1 taints : - effect : NoSchedule key : example-priority-key value : example-priority-value nodeSystemConfig : linuxNodeConfig : swapConfig : enabled : true bootDiskProfile : swapSizeGib : 10 - machineType : n4-standard-32 location : zoneTypes : [ 'STANDARD' , 'AI' ] - nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ] - podFamily : general-purpose - gpu : count : 1 driverVersion : default type : nvidia-l4 - tpu : count : 8 topology : "2x4" type : tpu-v5-lite-podslice - flexStart : enabled : true nodeRecycling : leadTimeSeconds : 1200 capacityCheckWaitTimeSeconds : 3600 whenUnsatisfiable : ScaleUpAnyway status : conditions : - lastTransitionTime : 2024-10-10T00:00:00Z message : example-message observedGeneration : 1 reason : example-reason status : "True" type : example-type ComputeClass specification metadata : name : string spec : activeMigration : object( activeMigration ) autoscalingPolicy : object( autoscalingPolicy ) nodePoolAutoCreation : object( nodePoolAutoCreation ) nodePoolGroup : object( nodePoolGroup ) nodePoolConfig : object( nodePoolConfig ) autopilot : object( autopilot ) priorities : [ object( priorities ) ] priorityDefaults : object( priorityDefaults ) whenUnsatisfiable : string Fields metadata required object A field that identifies the ComputeClass. metadata.name optional string The name of the ComputeClass. spec required object The ComputeClass specification, which defines how the ComputeClass works. spec.activeMigration optional object ( activeMigration ) A specification that lets you choose whether GKE automatically replaces existing nodes that are lower in a ComputeClass priority list with new nodes that are higher in that priority list. spec.autoscalingPolicy optional object ( autoscalingPolicy ) A specification that lets you fine-tune the timing and thresholds that cause GKE to remove underused nodes and consolidate workloads on other nodes. spec.nodePoolAutoCreation optional object( nodePoolAutoCreation ) A specification that lets you choose whether GKE can create and delete node pools in Standard mode clusters based on the ComputeClass priority rules.
- For limitations and requirements, see Linux huge page configuration options . imageStreaming imageStreaming : enabled : boolean Fields enabled required boolean Specifies whether to use image streaming to pull container images. gvnic gvnic : enabled : boolean Fields enabled required boolean Specifies whether Google Virtual NIC (gVNIC) is enabled on the node pool. kubeletConfig kubeletConfig : cpuCfsQuota : boolean cpuCfsQuotaPeriod : string cpuManagerPolicy : string podPidsLimit : integer containerLogMaxSize : string containerLogMaxFiles : integer imageGcLowThresholdPercent : integer imageGcHighThresholdPercent : integer imageMinimumGcAge : string imageMaximumGcAge : string allowedUnsafeSysctls : [] string evictionMaxPodGracePeriodSeconds : integer evictionMinimumReclaim : object( evictionMinimumReclaim ) evictionSoft : object( evictionSoft ) evictionSoftGracePeriod : object( evictionSoftGracePeriod ) maxParallelImagePulls : integer singleProcessOOMKill : boolean Fields cpuCfsQuota optional boolean Enables CPU Completely Fair Scheduler (CFS) quota enforcement for containers that specify CPU limits.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.
- To install the DaemonSet on COS , add the following block in your Terraform configuration: data "http" "nvidia driver installer manifest" { url = "https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/cos/daemonset-preloaded.yaml" } resource "kubectl manifest" "nvidia driver installer" { yaml body = data.http.nvidia driver installer manifest.body } To install DaemonSet on Ubuntu , add the following block in your Terraform configuration: data "http" "nvidia driver installer manifest" { url = "https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/nvidia-driver-installer/ubuntu/daemonset-preloaded.yaml" } resource "kubectl manifest" "nvidia driver installer" { yaml body = data.http.nvidia driver installer manifest.body } Map the GKE version and Container-Optimized OS node image version to the GPU driver version To find the GPU driver versions that are mapped with GKE versions and Container-Optimized OS node image versions, do the following steps: Map Container-Optimized OS node image versions to GKE patch versions for the specific GKE version where you want to find the GPU driver version.
- Test new GKE versions for compatibility in a staging environment before automatic upgrades change the version on your production GPU nodes, or disable automatic upgrades in those node pools. gcloud To create a node pool with GPUs in a cluster, run the following command: gcloud container node-pools create POOL NAME \ --accelerator type = GPU TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER VERSION \ --machine-type MACHINE TYPE \ --cluster CLUSTER NAME \ --location CONTROL PLANE LOCATION \ --node-locations COMPUTE ZONE1 [ , COMPUTE ZONE2 ] \ [ --sandbox = type = gvisor ] [ --enable-autoscaling \ --min-nodes MIN NODES \ --max-nodes MAX NODES ] \ [ --scopes = SCOPES ] \ [ --service-account = SERVICE ACCOUNT ] \ [ --reservation-affinity = specific --reservation = RESERVATION NAME ] Replace the following: POOL NAME : the name you choose for the node pool.
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.


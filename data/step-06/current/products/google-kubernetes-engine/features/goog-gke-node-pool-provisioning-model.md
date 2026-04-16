---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.710Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "goog-gke-node-pool-provisioning-model"
feature_slug: "goog-gke-node-pool-provisioning-model"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
keywords:
  - "goog"
  - "gke"
  - "node"
  - "pool"
  - "provisioning"
  - "model"
  - "automatically"
  - "applied"
---

# goog-gke-node-pool-provisioning-model

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This automatically applied node-pool label identifies the provisioning model used by the node pool.

## Extended Definition

This automatically applied node-pool label identifies the provisioning model used by the node pool.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)

## Supporting Pages

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- The following example ComputeClass manifest enables node pool auto-creation for any Pod that uses the ComputeClass: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : example-computeclass spec : priorities : - machineFamily : n4 - machineFamily : c4 whenUnsatisfiable : ScaleUpAnyway nodePoolAutoCreation : enabled : true Cluster-level enablement with node auto-provisioning To enable node pool auto-creation for the entire cluster, you enable the node auto-provisioning feature for the cluster by using the Kubernetes Engine API.
- Enable node auto-provisioning in situations like the following: You want GKE to automatically create node pools in a cluster that runs a GKE version earlier than 1.33.3-gke.1136000.
- Standard Google Kubernetes Engine (GKE) can automatically create and manage node pools in your clusters based on the configuration of your workloads.
- When you create this example Deployment, GKE creates a node pool that contains a TPU v4 slice with a 2x2x2 topology and two ct4p-hightpu-4t machines. apiVersion: apps/v1 kind: Deployment metadata: name: tpu-workload labels: app: tpu-workload spec: replicas: 2 template: spec: nodeSelector: cloud.google.com/gke-tpu-accelerator: tpu-v4-podslice cloud.google.com/gke-tpu-topology: 2x2x2 containers: - name: tpu-job image: us-docker.pkg.dev/cloud-tpu-images/jax-ai-image/tpu:latest ports: - containerPort: 8431 # Port to export TPU runtime metrics, if supported. securityContext: privileged: true # Required for GKE versions earlier than 1.28 to access TPUs. command: - bash - -c - python -c 'import jax; print("Total TPU chips:", jax.device count())' resources: requests: google.com/tpu: 4 limits: google.com/tpu: 4 ports: - containerPort: 80 In this manifest, the following fields define TPU configuration: cloud.google.com/gke-tpu-accelerator : the TPU version and type .

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- ClusterAutoscaling JSON representation { "enableNodeAutoprovisioning" : boolean , "resourceLimits" : [ { object ( ResourceLimit ) } ] , "autoscalingProfile" : enum ( AutoscalingProfile ) , "autoprovisioningNodePoolDefaults" : { object ( AutoprovisioningNodePoolDefaults ) } , "autoprovisioningLocations" : [ string ] , "defaultComputeClassConfig" : { object ( DefaultComputeClassConfig ) } , "autopilotGeneralProfile" : enum ( AutopilotGeneralProfile ) } Fields enableNodeAutoprovisioning boolean Enables automatic node pool creation and deletion. resourceLimits[] object ( ResourceLimit ) Contains global constraints regarding minimum and maximum amount of resources in the cluster. autoscalingProfile enum ( AutoscalingProfile ) Defines autoscaling behaviour. autoprovisioningNodePoolDefaults object ( AutoprovisioningNodePoolDefaults ) AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP. autoprovisioningLocations[] string The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP. defaultComputeClassConfig object ( DefaultComputeClassConfig ) Default compute class is a configuration for default compute class. autopilotGeneralProfile enum ( AutopilotGeneralProfile ) Autopilot general profile for the cluster, which defines the configuration for the cluster.
- AutoprovisioningNodePoolDefaults JSON representation { "oauthScopes" : [ string ] , "serviceAccount" : string , "upgradeSettings" : { object ( UpgradeSettings ) } , "management" : { object ( NodeManagement ) } , "minCpuPlatform" : string , "diskSizeGb" : integer , "diskType" : string , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "bootDiskKmsKey" : string , "imageType" : string , // Union field insecure kubelet readonly port enabled can be only one of the // following: "insecureKubeletReadonlyPortEnabled" : boolean // End of list of possible types for union field // insecure kubelet readonly port enabled . } Fields oauthScopes[] string Scopes that are used by NAP when creating node pools. serviceAccount string The Google Cloud Platform Service Account to be used by the node VMs. upgradeSettings object ( UpgradeSettings ) Specifies the upgrade settings for NAP created node pools management object ( NodeManagement ) Specifies the node management options for NAP created node-pools. minCpuPlatform (deprecated) string This item is deprecated!
- Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8 . addonsConfig object ( AddonsConfig ) Configurations for the various addons available to run in the cluster. subnetwork string The name of the Google Compute Engine subnetwork to which the cluster is connected. nodePools[] object ( NodePool ) The node pools associated with this cluster.
- NodeConfig JSON representation { "machineType" : string , "diskSizeGb" : integer , "oauthScopes" : [ string ] , "serviceAccount" : string , "metadata" : { string : string , ... } , "imageType" : string , "labels" : { string : string , ... } , "localSsdCount" : integer , "tags" : [ string ] , "preemptible" : boolean , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "diskType" : string , "minCpuPlatform" : string , "workloadMetadataConfig" : { object ( WorkloadMetadataConfig ) } , "taints" : [ { object ( NodeTaint ) } ] , "sandboxConfig" : { object ( SandboxConfig ) } , "nodeGroup" : string , "reservationAffinity" : { object ( ReservationAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "linuxNodeConfig" : { object ( LinuxNodeConfig ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "bootDiskKmsKey" : string , "gcfsConfig" : { object ( GcfsConfig ) } , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "gvnic" : { object ( VirtualNIC ) } , "spot" : boolean , "confidentialNodes" : { object ( ConfidentialNodes ) } , "resourceLabels" : { string : string , ... } , "loggingConfig" : { object ( NodePoolLoggingConfig ) } , "windowsNodeConfig" : { object ( WindowsNodeConfig ) } , "localNvmeSsdBlockConfig" : { object ( LocalNvmeSsdBlockConfig ) } , "ephemeralStorageLocalSsdConfig" : { object ( EphemeralStorageLocalSsdConfig ) } , "soleTenantConfig" : { object ( SoleTenantConfig ) } , "containerdConfig" : { object ( ContainerdConfig ) } , "resourceManagerTags" : { object ( ResourceManagerTags ) } , "enableConfidentialStorage" : boolean , "secondaryBootDisks" : [ { object ( SecondaryBootDisk ) } ] , "storagePools" : [ string ] , "maxRunDuration" : string , "effectiveCgroupMode" : enum ( EffectiveCgroupMode ) , "bootDisk" : { object ( BootDisk ) } , "consolidationDelay" : string , // Union field fast socket can be only one of the following: "fastSocket" : { object ( FastSocket ) } // End of list of possible types for union field fast socket . // Union field secondary boot disk update strategy can be only one of the // following: "secondaryBootDiskUpdateStrategy" : { object ( SecondaryBootDiskUpdateStrategy ) } // End of list of possible types for union field // secondary boot disk update strategy . // Union field gpu direct config can be only one of the following: "gpuDirectConfig" : { object ( GPUDirectConfig ) } // End of list of possible types for union field gpu direct config . // Union field local ssd encryption mode can be only one of the following: "localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode ) // End of list of possible types for union field local ssd encryption mode . // Union field flex start can be only one of the following: "flexStart" : boolean // End of list of possible types for union field flex start . // Union field taint config can be only one of the following: "taintConfig" : { object ( TaintConfig ) } // End of list of possible types for union field taint config . } Fields machineType string The name of a Google Compute Engine machine type If unspecified, the default machine type is e2-medium . diskSizeGb integer Size of the disk attached to each node, specified in GB.

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To grant the required scopes, modify the default scopes for node auto-provisioning to add logging.write , monitoring , devstorage.read only , and compute , such as in the following example. gcloud container clusters update CLUSTER NAME --enable-autoprovisioning \ --min-cpu = 1 --max-cpu = 10 --min-memory = 1 --max-memory = 32 \ --autoprovisioning-scopes = https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring,https://www.googleapis.com/auth/devstorage.read only,https://www.googleapis.com/auth/compute For clusters running GKE version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- Add the following block to your Terraform configuration: provider "google" { project = var.project id region = var.region } resource "google container cluster" "ml cluster" { name = var.cluster name location = var.region initial node count = 1 } resource "google container node pool" "gpu pool" { name = google container cluster.ml cluster.name location = var.region node locations = [ var.zones ] cluster = google container cluster.ml cluster.name node count = 3 autoscaling { total min node count = "1" total max node count = "5" } management { auto repair = "true" auto upgrade = "true" } node config { oauth scopes = [ "https://www.googleapis.com/auth/logging.write" , "https://www.googleapis.com/auth/monitoring" , "https://www.googleapis.com/auth/devstorage.read only" , "https://www.googleapis.com/auth/trace.append" , "https://www.googleapis.com/auth/service.management.readonly" , "https://www.googleapis.com/auth/servicecontrol" , ] labels = { env = var.project id } guest accelerator { type = var.gpu type count = 1 gpu driver installation config { gpu driver version = var.gpu driver version } } image type = "cos containerd" machine type = var.machine type tags = [ "gke-node", "${var.project id}-gke" ] disk size gb = "30" disk type = "pd-standard" metadata = { disable-legacy-endpoints = "true" } } } Terraform calls Google Cloud APIs to set create a new cluster with a node pool that uses GPUs.
- Based on the following scenarios, GKE automatically adds the nvidia.com/gpu=present:NoSchedule taint, or you can manually add it: When you add a GPU node pool to an existing cluster that already runs a non-GPU node pool, GKE automatically taints the GPU nodes with the following node taint: Key : nvidia.com/gpu Value : present Effect : NoSchedule GKE only adds this taint if there is at least one non-GPU node pool in the cluster.


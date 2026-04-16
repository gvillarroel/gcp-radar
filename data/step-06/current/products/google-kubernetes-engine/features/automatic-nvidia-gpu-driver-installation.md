---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.733Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Automatic NVIDIA GPU driver installation"
feature_slug: "automatic-nvidia-gpu-driver-installation"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "automatic"
  - "nvidia"
  - "gpu"
  - "driver"
  - "installation"
  - "gke"
  - "can"
  - "automatically"
---

# Automatic NVIDIA GPU driver installation

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can automatically install the default NVIDIA GPU driver version for GPU node pools when no driver version is specified; GKE can automatically install NVIDIA GPU drivers on nodes without a DaemonSet starting in version 1.27.2-gke.1200.

## Extended Definition

GKE can automatically install the default NVIDIA GPU driver version for GPU node pools when no driver version is specified; GKE can automatically install NVIDIA GPU drivers on nodes without a DaemonSet starting in version 1.27.2-gke.1200.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- GKE supports automatic installation of NVIDIA drivers in the following scenarios: For GKE clusters with control plane version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.
- To grant the required scopes, modify the default scopes for node auto-provisioning to add logging.write , monitoring , devstorage.read only , and compute , such as in the following example. gcloud container clusters update CLUSTER NAME --enable-autoprovisioning \ --min-cpu = 1 --max-cpu = 10 --min-memory = 1 --max-memory = 32 \ --autoprovisioning-scopes = https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring,https://www.googleapis.com/auth/devstorage.read only,https://www.googleapis.com/auth/compute For clusters running GKE version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.
- GKE automatically installs the default drivers on those nodes. gcloud container node-pools create p100 \ --accelerator type = nvidia-tesla-p100,count = 2 ,gpu-driver-version = default \ --cluster p100-cluster \ --location us-central1 \ --node-locations us-central1-c \ --min-nodes 0 --max-nodes 5 --enable-autoscaling You can also update an existing node pool.
- For GKE clusters with control plane version 1.30.1-gke.1156000 to 1.32.2-gke.1297000, GKE automatically installs the default NVIDIA driver version for nodes not created with node auto-provisioning.

### "Analyze model serving performance and costs with GKE Inference Quickstart\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/machine-learning/inference/inference-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- This automatically utilizes the high-performance Run:ai Model Streamer for supported vLLM versions, or the Cloud Storage FUSE CSI driver for other configurations.
- The model automatically uses the high-performance Run:ai Model Streamer for supported vLLM versions, falling back to the Cloud Storage FUSE CSI driver for others.
- For example: gcloud container ai profiles manifests create \ --accelerator-type = nvidia-h100-80gb \ --model = openai/gpt-oss-120b \ --model-server = vllm \ --serving-stack = llm-d \ --use-case 'Multi Agent Large Document Summarization' Check the manifests create output for additional cluster creation and dependency installation instructions to correctly set up your environment for llm-d.
- These optimizations can improve LLM Pod startup time by more than 7x. (Optional) Autoscaling-optimized configuration : generates a manifest with a Horizontal Pod Autoscaler (HPA) to automatically adjust the number of model server replicas based on traffic.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- By default, GKE enables multi-NIC support, which allows the Lustre CSI driver to automatically detect and configure all suitable network interfaces on a node to maximize I/O performance for demanding workloads.
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.
- GPUDriverInstallationConfig JSON representation { // Union field gpu driver version can be only one of the following: "gpuDriverVersion" : enum ( GPUDriverVersion ) // End of list of possible types for union field gpu driver version . } Fields Union field gpu driver version . gpu driver version can be only one of the following: gpuDriverVersion enum ( GPUDriverVersion ) Mode for how the GPU driver is installed.
- Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8 . addonsConfig object ( AddonsConfig ) Configurations for the various addons available to run in the cluster. subnetwork string The name of the Google Compute Engine subnetwork to which the cluster is connected. nodePools[] object ( NodePool ) The node pools associated with this cluster.


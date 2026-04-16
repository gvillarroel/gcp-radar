---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.839Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Time-sharing GPUs"
feature_slug: "time-sharing-gpus"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "time"
  - "sharing"
  - "gpus"
  - "multiple"
  - "containers"
  - "can"
  - "share"
  - "full"
---

# Time-sharing GPUs

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Multiple containers can share the full compute resources of a single NVIDIA GPU accelerator.

## Extended Definition

Multiple containers can share the full compute resources of a single NVIDIA GPU accelerator.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Time-sharing GPUs Available on: Autopilot and Standard Present a single GPU as multiple units to multiple containers on a node.
- Improve GPU utilization Multi-instance GPUs Time-sharing GPUs Multi-instance GPUs Time-sharing GPUs NVIDIA MPS Security GPUs with GKE Sandbox GPUs with Confidential GKE Nodes GPUs with GKE Sandbox GPUs with Confidential GKE Nodes Pricing Autopilot GPU Pod pricing Compute Engine GPU pricing To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
- GKE offers some GPU-specific features to improve efficient GPU resource utilization of workloads running on your nodes, including time-sharing, multi-instance GPUs, and multi-instance GPUs with NVIDIA MPS.
- These metrics apply at the container level ( container/accelerator ) and are not collected for containers scheduled on a GPU that uses GPU time-sharing or NVIDIA MPS.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your Pod specification should look similar to the following example, which requests four T4 GPUs: apiVersion : v1 kind : Pod metadata : name : t4-pod spec : Optional: Use GKE Sandbox runtimeClassName: gvisor nodeSelector : cloud.google.com/gke-accelerator : "nvidia-tesla-t4" containers : - name : t4-container-1 image : nvidia/cuda:11.0.3-runtime-ubuntu20.04 command : [ "/bin/bash" , "-c" , "--" ] args : [ "while true; do sleep 600; done;" ] resources : limits : nvidia.com/gpu : 3 cpu : "54" memory : "54Gi" requests : cpu : "54" memory : "54Gi" - name : t4-container-2 image : nvidia/cuda:11.0.3-runtime-ubuntu20.04 command : [ "/bin/bash" , "-c" , "--" ] args : [ "while true; do sleep 600; done;" ] resources : limits : nvidia.com/gpu : 1 cpu : "18" memory : "18Gi" requests : cpu : "18" memory : "18Gi" Optional runtimeClassname: gvisor : the setting that lets your run this Pod in GKE Sandbox.
- These metrics apply at the container level ( container/accelerator ) and are not collected for containers scheduled on a GPU that uses GPU time-sharing or NVIDIA MPS.
- You can only use features like multi-instance GPUs or time-sharing if you explicitly specify the cloud.google.com/compute-class: Accelerator node selector.
- You can only use features like multi-instance GPUs or time-sharing if you explicitly specify the cloud.google.com/compute-class: Accelerator node selector.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- GPUSharingConfig JSON representation { "maxSharedClientsPerGpu" : string , // Union field gpu sharing strategy can be only one of the following: "gpuSharingStrategy" : enum ( GPUSharingStrategy ) // End of list of possible types for union field gpu sharing strategy . } Fields maxSharedClientsPerGpu string ( int64 format) The max number of containers that can share a physical GPU.
- MetadataEntry JSON representation { "key" : string , "value" : string } Fields key string value string LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string AcceleratorConfig JSON representation { "acceleratorCount" : string , "acceleratorType" : string , "gpuPartitionSize" : string , // Union field gpu sharing config can be only one of the following: "gpuSharingConfig" : { object ( GPUSharingConfig ) } // End of list of possible types for union field gpu sharing config . // Union field gpu driver installation config can be only one of the // following: "gpuDriverInstallationConfig" : { object ( GPUDriverInstallationConfig ) } // End of list of possible types for union field // gpu driver installation config . } Fields acceleratorCount string ( int64 format) The number of the accelerator cards exposed to an instance. acceleratorType string The accelerator type resource name.
- Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR Windows can span multiple days.
- Union field gpu sharing strategy . gpu sharing strategy can be only one of the following: gpuSharingStrategy enum ( GPUSharingStrategy ) The type of GPU sharing strategy to enable on the GPU node.


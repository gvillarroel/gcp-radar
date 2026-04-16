---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.755Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Sandbox with NVIDIA GPUs"
feature_slug: "gke-sandbox-with-nvidia-gpus"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus"
keywords:
  - "gke"
  - "sandbox"
  - "nvidia"
  - "gpus"
  - "supports"
  - "standard"
  - "autopilot"
  - "clusters"
---

# GKE Sandbox with NVIDIA GPUs

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Sandbox supports NVIDIA GPUs on Standard and Autopilot clusters in public preview.

## Extended Definition

GKE Sandbox supports NVIDIA GPUs on Standard and Autopilot clusters in public preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)

## Supporting Pages

### Run GPUs in GKE Standard node pools \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 nodeSelector: cloud.google.com/gke-accelerator: nvidia-tesla-t4 Upgrade node pools using accelerators (GPUs and TPUs) GKE automatically upgrades Standard clusters, including node pools.
- The following manifest is an example of a Pod specification that consumes GPUs: apiVersion: v1 kind: Pod metadata: name: my-gpu-pod spec: Optional: Use GKE Sandbox runtimeClassName: gvisor containers: - name: my-gpu-container image: nvidia/cuda:11.0.3-runtime-ubuntu20.04 command: ["/bin/bash", "-c", "--"] args: ["while true; do sleep 600; done;"] resources: limits: nvidia.com/gpu: 2 Note: If you run the workload with GKE Sandbox, you need to create a GKE Sandbox node pool.
- Standard This page shows you how to run and optimize your compute-intensive workloads, such as artificial intelligence (AI) and graphics processing, by attaching and using NVIDIA® graphics processing unit (GPU) hardware accelerators in your Google Kubernetes Engine (GKE) Standard clusters' nodes .
- GKE supports automatic installation of NVIDIA drivers in the following scenarios: For GKE clusters with control plane version 1.32.2-gke.1297000 and later, GKE automatically installs the default NVIDIA driver version for all GPU nodes, including those created with node auto-provisioning.

### GKE Sandbox \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Direct access to hardware or virtualization Applies to Autopilot and Standard clusters If your workload needs any of the following, GKE Sandbox might not be a good fit because it prevents direct access to the host kernel on the node: Direct access to the node's hardware Kernel-level virtualization features Privileged containers What's next Configure GKE Sandbox .
- System calls Applies to Autopilot and Standard clusters Workloads that generate a large volume of low-overhead system calls, such as a large number of small I/O operations, may require more system resources when running in a sandbox, so you may need to use more powerful nodes or add additional nodes to your cluster.
- External dependencies Applies to Autopilot and Standard clusters Untrusted code running inside the sandbox may be allowed to reach external services such as database servers, APIs, other containers, and CSI drivers .
- Access to cluster metadata Applies to Autopilot and Standard clusters Nodes running sandboxed Pods are prevented from accessing cluster metadata at the level of the operating system on the node.

### "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page helps you to consider choices for requesting GPUs in GKE, including the following: Choosing your GPU quota , the maximum number of GPUs that can run in your project Deciding between Autopilot and Standard modes Manage the GPU stack through GKE or NVIDIA GPU Operator on GKE Choosing features to reduce the amount of underutilized GPU resources Accessing NVIDIA CUDA-X libraries for CUDA applications Monitoring GPU node metrics Handling disruption due to node maintenance Use GKE Sandbox to secure GPU workloads Available GPU models The GPU hardware that's available for use in GKE is a subset of the GPU models available on Compute Engine .
- Get started with GKE for GPU node management by choosing one of the following: Deploy GPU workloads in Autopilot Run GPUs in Standard node pools Deploy clusters with NVIDIA B200 or NVIDIA H200 141GB GPUs The NVIDIA GPU Operator may be used as an alternative to fully managed GPU support on GKE on both Container-Optimized OS (COS) and Ubuntu node images.
- Improve GPU utilization Multi-instance GPUs Time-sharing GPUs Multi-instance GPUs Time-sharing GPUs NVIDIA MPS Security GPUs with GKE Sandbox GPUs with Confidential GKE Nodes GPUs with GKE Sandbox GPUs with Confidential GKE Nodes Pricing Autopilot GPU Pod pricing Compute Engine GPU pricing To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
- Choose GPU support using Autopilot or Standard GPUs are available in Autopilot and Standard clusters.


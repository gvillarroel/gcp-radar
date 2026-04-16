---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.754Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multiple GPU Pods per node in GKE Autopilot"
feature_slug: "multiple-gpu-pods-per-node-in-gke-autopilot"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "multiple"
  - "gpu"
  - "pods"
  - "per"
  - "node"
  - "gke"
  - "autopilot"
  - "can"
---

# Multiple GPU Pods per node in GKE Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot can schedule multiple GPU Pods on a single node when using the Accelerator compute class.

## Extended Definition

GKE Autopilot can schedule multiple GPU Pods on a single node when using the Accelerator compute class.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- Placing multiple Pods on a single GPU node is useful in situations like the following: You have capacity reservations for large Accelerator machine types and you run single-GPU workloads, so deploying one Pod per node would waste the other GPUs on that machine You have GPU workloads that must run on the same host In these situations, we recommend that you use all of the GPUs on the node by ensuring that the sum of Pod GPU resource requests on the node is equal to the number of GPUs attached to the node.
- Before you proceed, ensure that you're familiar with the following concepts: About GPUs in GKE Kubernetes node selectors Select accelerators in Pods Autopilot uses the specialized Accelerator compute class to run GPU Pods.

### "About node pool auto-creation \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- When you create this example Deployment, GKE creates a node pool that contains a TPU v4 slice with a 2x2x2 topology and two ct4p-hightpu-4t machines. apiVersion: apps/v1 kind: Deployment metadata: name: tpu-workload labels: app: tpu-workload spec: replicas: 2 template: spec: nodeSelector: cloud.google.com/gke-tpu-accelerator: tpu-v4-podslice cloud.google.com/gke-tpu-topology: 2x2x2 containers: - name: tpu-job image: us-docker.pkg.dev/cloud-tpu-images/jax-ai-image/tpu:latest ports: - containerPort: 8431 # Port to export TPU runtime metrics, if supported. securityContext: privileged: true # Required for GKE versions earlier than 1.28 to access TPUs. command: - bash - -c - python -c 'import jax; print("Total TPU chips:", jax.device count())' resources: requests: google.com/tpu: 4 limits: google.com/tpu: 4 ports: - containerPort: 80 In this manifest, the following fields define TPU configuration: cloud.google.com/gke-tpu-accelerator : the TPU version and type .
- The following example configuration file enables node auto-repair and auto-upgrade for any new auto-created node pools: management : autoRepair : true autoUpgrade : true The following example configuration file sets the cluster-wide resource limits for node auto-provisioning and configures multiple default settings: resourceLimits : - resourceType : 'cpu' minimum : 4 maximum : 10 - resourceType : 'memory' maximum : 64 - resourceType : 'nvidia-tesla-t4' maximum : 4 management : autoRepair : true autoUpgrade : true shieldedInstanceConfig : enableSecureBoot : true enableIntegrityMonitoring : true diskSizeGb : 100 This configuration file sets the following default values: Enables node auto-repair and auto-upgrade for any new auto-created node pools.
- You should already be familiar with the following concepts: GKE cluster architecture About GKE cluster autoscaling In Autopilot mode, GKE always creates and manages nodes and node pools for you based on your workloads.
- You can configure workload separation in auto-created node pools in the following ways: ComputeClasses : the nodes that GKE creates for a specific ComputeClass can only run Pods that select that ComputeClass.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .
- Scheduling : Autopilot manages Pod bin-packing for you, so you don't have to think about how many Pods are running on each node.
- In Autopilot, GKE automatically scales your nodes based on the number of Pods in your cluster.
- For an interactive guide in the Google Cloud console for deploying and exposing an app in an Autopilot cluster, click Guide me : Guide me The following table shows some common requirements and provides recommendations for what you should do: Use case Resources Control individual node properties when scaling a cluster Create a custom ComputeClass and request it in your workload manifest.


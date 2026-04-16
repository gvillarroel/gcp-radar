---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.314Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Spot Pods"
feature_slug: "spot-pods"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
keywords:
  - "lower"
  - "spot"
  - "workloads"
  - "autopilot"
  - "pods"
---

# Spot Pods

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Spot Pods let GKE Autopilot workloads run on lower-cost, interruptible capacity.

## Extended Definition

Spot Pods let GKE Autopilot workloads run on lower-cost, interruptible capacity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- In GKE, you can use Pod affinity and anti-affinity with the following labels in topologyKey : topology.kubernetes.io/zone kubernetes.io/hostname Pod topology spread constraints To improve the availability of your workloads as Kubernetes scales the number of Pods up and down, you can set Pod topology spread constraints .

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Placing multiple Pods on a single GPU node is useful in situations like the following: You have capacity reservations for large Accelerator machine types and you run single-GPU workloads, so deploying one Pod per node would waste the other GPUs on that machine You have GPU workloads that must run on the same host In these situations, we recommend that you use all of the GPUs on the node by ensuring that the sum of Pod GPU resource requests on the node is equal to the number of GPUs attached to the node.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- This ComputeClass can be any of the following: One of the following built-in Autopilot ComputeClasses , which place general-purpose workloads on the Autopilot container-optimized compute platform: autopilot autopilot-spot A ComputeClass that you create, such as the n4-class ComputeClass that's described in the Configure a custom Autopilot ComputeClass section.
- This value can be any of the following: One of the following built-in Autopilot ComputeClasses , which place general-purpose workloads on the Autopilot container-optimized compute platform: autopilot autopilot-spot A ComputeClass that you create, such as the n4-class ComputeClass that's described in the Configure a custom Autopilot ComputeClass section.
- The type of Autopilot ComputeClass that you use depends on whether your workloads need specific hardware, as follows: General-purpose workloads : use one of the built-in Autopilot ComputeClasses, which place Pods on the container-optimized compute platform .
- The following steps show you how to create an example Deployment that selects a ComputeClass and verify that the Pods run in Autopilot mode: Save the following example Deployment as autopilot-cc-deployment.yaml : apiVersion : apps/v1 kind : Deployment metadata : name : helloweb labels : app : hello spec : selector : matchLabels : app : hello template : metadata : labels : app : hello spec : nodeSelector : Replace with the name of a compute class cloud.google.com/compute-class : COMPUTE CLASS containers : - name : hello-app image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 ports : - containerPort : 8080 resources : requests : cpu : "250m" memory : "1Gi" Replace COMPUTE CLASS with the name of the compute class to use.


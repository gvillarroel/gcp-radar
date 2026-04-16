---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.275Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GPU workloads on Autopilot clusters"
feature_slug: "gpu-workloads-on-autopilot-clusters"
latest_feature_date: "2023-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "workloads"
  - "autopilot"
  - "clusters"
  - "based"
---

# GPU workloads on Autopilot clusters

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot clusters can run GPU-based workloads.

## Extended Definition

GKE Autopilot clusters can run GPU-based workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.
- Verify that the ComputeClass exists: kubectl get computeclasses The output is similar to the following: NAME AGE n4-class 3s Enable Autopilot for an existing custom ComputeClass Best Practice : To migrate your workloads to Autopilot mode in stages, or to immediately start node creation, create a new Autopilot ComputeClass and recreate specific workloads to select the new ComputeClass.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Deploy GPU workloads in Autopilot Stay organized with collections Save and categorize content based on your preferences.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Request specific machine types using custom ComputeClasses In some cases, you might need to run your GPU workload on a specific machine type, for example if the machine type that you want is not a default machine type for Autopilot clusters.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Pricing Autopilot pricing uses different models depending on the type of hardware that your Pods use, as follows: General-purpose Autopilot Pods : the following types of Pods use a Pod-based billing model and are categorized as general-purpose Pods : Pods that run on the container-optimized compute platform in Autopilot clusters or Standard clusters.
- The container-optimized compute platform provides the following benefits: Compute capacity matches workloads : Autopilot dynamically adjusts the compute capacity for the container-optimized compute platform based on factors like the number of Pods and resource consumption.
- Run workloads that require minimal disruptions, such as game servers or work queues In Autopilot clusters only, specify the cluster-autoscaler.kubernetes.io/safe-to-evict=false annotation in the Pod specification.
- Autopilot workloads that select specific hardware : Pods that select specific hardware, such as Compute Engine machine series or hardware accelerators, use a node-based billing model .


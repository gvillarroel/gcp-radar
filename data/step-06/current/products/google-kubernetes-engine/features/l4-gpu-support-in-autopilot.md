---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.769Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "L4 GPU support in Autopilot"
feature_slug: "l4-gpu-support-in-autopilot"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads"
keywords:
  - "l4"
  - "gpu"
  - "autopilot"
  - "gke"
  - "clusters"
  - "can"
  - "run"
  - "workloads"
---

# L4 GPU support in Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot clusters can run workloads on L4 GPUs in supported versions.

## Extended Definition

GKE Autopilot clusters can run workloads on L4 GPUs in supported versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)

## Supporting Pages

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Guides Send feedback Run workloads in Autopilot mode in Standard clusters Stay organized with collections Save and categorize content based on your preferences.
- Modify clusters to meet Autopilot requirements You can use the Google Cloud console to check whether your Standard cluster meets all of the requirements to run workloads in Autopilot mode.
- Verify that the ComputeClass exists: kubectl get computeclasses The output is similar to the following: NAME AGE n4-class 3s Enable Autopilot for an existing custom ComputeClass Best Practice : To migrate your workloads to Autopilot mode in stages, or to immediately start node creation, create a new Autopilot ComputeClass and recreate specific workloads to select the new ComputeClass.

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.
- Request specific machine types using custom ComputeClasses In some cases, you might need to run your GPU workload on a specific machine type, for example if the machine type that you want is not a default machine type for Autopilot clusters.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE AI/ML Guides Send feedback Deploy GPU workloads in Autopilot Stay organized with collections Save and categorize content based on your preferences.

### "About privileged workload admission in Autopilot mode \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- You might want to control privileged workloads in Autopilot mode in situations like the following: You run workloads in Autopilot mode in Standard clusters and you want privileged workloads to run on those nodes.
- About privileged workloads in Autopilot mode To improve your security posture, Autopilot mode clusters and nodes enforce specific security constraints by default.
- For more information about configuring clusters, see Run privileged workloads in Autopilot .
- Managed constraint parameters The autopilotPrivilegedAdmission managed constraint has the following specification: spec : rules : - enforce : true parameters : allowAnyGKEPath : ALLOW GKE PATHS allowPaths : - PATH1 - PATH2 - PATH3 The following fields in the specification control the set of allowlists that clusters can use: allowAnyGKEPath : a boolean value that controls whether clusters can use the default set of GKE-approved allowlist paths.


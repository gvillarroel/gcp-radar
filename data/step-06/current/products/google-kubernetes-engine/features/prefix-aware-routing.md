---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.668Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Prefix-Aware Routing"
feature_slug: "prefix-aware-routing"
latest_feature_date: "2025-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "prefix"
  - "aware"
  - "routing"
  - "sends"
  - "requests"
  - "shared"
  - "prefixes"
  - "same"
---

# Prefix-Aware Routing

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Prefix-Aware Routing sends requests with shared prefixes to the same model replica to improve cache hits and latency.

## Extended Definition

Prefix-Aware Routing sends requests with shared prefixes to the same model replica to improve cache hits and latency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### About GKE Inference Gateway \_|\_ GKE networking \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This enables Prefix-Cache Aware Routing , a key feature that sends requests with shared context, identified by analyzing the request body, to the same model replica by maximizing cache hits.
- It monitors server load and availability, then makes optimal routing decisions by calculating a score for each server combining a number of optimization heuristics: Prefix cache aware routing : GKE Inference Gateway tracks available prefix cache indexes on each model server, and gives a higher score to a server with a longer prefix cache match.
- Model-aware routing : routes inference requests based on the model names defined in the OpenAI API specifications within your GKE cluster.
- LoRA aware routing : when dynamic LoRA serving is enabled, GKE Inference Gateway monitors active LoRA adapters per server, and gives a higher score to a server with the requested LoRA adapter active, or additional room to dynamically load the requested LoRA adapter.

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- These system labels have one of the following prefixes in the label key: k8s.io cloud.google.com gke.io node.kubernetes.io/instance-type In GKE version 1.32.3-gke.1499000 and later, you can deploy workloads that use a node selector to select system labels and a ComputeClass at the same time.
- When you use this feature, be aware of these considerations: These features apply only to specific reservations in either a single or a shared project.
- If the prioritized instance types aren't available, GKE then falls back to any matching reservations in the specification: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : accelerator-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : specific : - name : a3-shared-reservation project : reservation-project affinity : Specific - machineType : a3-highgpu-1g storage : localSSDCount : 2 gpu : type : nvidia-h100-80gb count : 1 reservations : affinity : AnyBestEffort whenUnsatisfiable : DoNotScaleUp If you deploy a Pod that uses the accelerator-reservations ComputeClass, GKE first attempts to use the a3-shared-reservation reservation when creating new a3-highgpu-1g instances to run the Pod.
- The following example shows a shared specific reservation, which falls back to Spot VMs, and then finally to on-demand VMs: apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : shared-specific-reservations spec : nodePoolAutoCreation : enabled : true priorities : - machineFamily : n4 reservations : specific : - name : n4-shared-reservation project : reservation-project affinity : Specific - machineFamily : n4 spot : true - machineFamily : n4 whenUnsatisfiable : DoNotScaleUp You can consume the following types of reservations: Specific single-project reservations : configure the following fields: reservations.specific.name : the reservation name. reservations.affinity : must be Specific .

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Applications protected by the following mechanisms would've reduced or eliminated their exposure: Equal or higher priority DENY firewall rules (MCG sets firewall rules priority to 1000 by default) Service mesh using identity-based authorization Application-level authorization Affected resources 2025-01-23 Update: GKE fleets (or hubs) using MCG in shared VPC service projects are not affected by the issue as firewall rules are not managed from shared VPC service projects.
- Upgrade your Container-Optimized OS node pools to one of the following versions or later: 1.27.5-gke.200 1.28.2-gke.1157000 Upgrade your Ubuntu node pools to one of the following versions or later: 1.25.14-gke.1421000 1.26.9-gke.1437000 1.27.6-gke.1248000 1.28.2-gke.1157000 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- For security purposes, even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and node pools to one of the following GKE versions or later: 1.27.16-gke.1008000 1.28.12-gke.1052000 1.29.7-gke.1008000 1.30.3-gke.1225000 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.
- Even if you have node auto-upgrade enabled, we recommend that you manually upgrade your cluster and Windows Server node pools to one of the following GKE versions or later: 1.24.17-gke.6100 1.25.15-gke.2000 1.26.10-gke.2000 1.27.7-gke.2000 1.28.3-gke.1600 You can apply patch versions from newer release channels if your cluster runs the same minor version in its own release channel.


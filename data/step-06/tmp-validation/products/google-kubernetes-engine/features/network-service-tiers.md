---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.152Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Network Service Tiers"
feature_slug: "network-service-tiers"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
keywords:
  - "tiers"
  - "premium"
  - "tier"
  - "choose"
  - "network"
  - "standard"
---

# Network Service Tiers

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Network Service Tiers let you choose Standard Tier or Premium Tier for external traffic to GKE Services.

## Extended Definition

Network Service Tiers let you choose Standard Tier or Premium Tier for external traffic to GKE Services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)

## Supporting Pages

### "Allocate network resources by using GKE managed DRANET \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- You must use one of the following accelerator-optimized machine types: Machine series Machine type Accelerator model Networking technology A3 Ultra a3-ultragpu-8g NVIDIA H200 GPU RDMA A4 a4-highgpu-8g NVIDIA B200 GPU RDMA A4X a4x-highgpu-4g NVIDIA GB200 GPU RDMA A4X Max a4x-maxgpu-4g-metal NVIDIA B300 GPU RDMA TPU v7 tpu7x-standard-4t TPU v7 NetDevice TPU v6e ct6e-standard-8t Trillium TPU NetDevice TPU v6e ct6e-standard-4t Trillium TPU NetDevice TPU v6e ct6e-standard-1t Trillium TPU NetDevice Limitations GKE DRANET has the following limitations: You can't use GKE DRANET to allocate the default network interface card (NIC) or virtual NICs (such as veth).
- Autopilot Standard Google Kubernetes Engine (GKE) DRANET is a managed GKE feature that builds upon the open-source DRANET project, which implements the Kubernetes DRA API for networking resources.
- When to use GKE managed DRANET GKE DRANET provides a standardized way to manage network resources that are aware of topology and dependencies.
- This standardization makes it a suitable solution for AI and ML workloads that require high-performance networking.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard Networking in Google Kubernetes Engine (GKE) covers a broad set of concepts, including Pods, services, DNS, load balancing, security, and IP address management.
- An end-to-end architecture for a secure, multi-tier retail application on GKE, highlighting the key networking components used in each phase of deployment and scaling.
- Configure Tier 1 networking on critical nodes for maximum throughput.
- Phase 3: accelerate ML tasks by using gVNIC and Tier 1 networking.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard Networking in Google Kubernetes Engine (GKE) covers a broad set of concepts, including Pods, services, DNS, load balancing, security, and IP address management.
- An end-to-end architecture for a secure, multi-tier retail application on GKE, highlighting the key networking components used in each phase of deployment and scaling.
- Configure Tier 1 networking on critical nodes for maximum throughput.
- Phase 3: accelerate ML tasks by using gVNIC and Tier 1 networking.


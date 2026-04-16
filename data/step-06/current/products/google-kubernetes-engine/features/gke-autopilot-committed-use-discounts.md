---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.912Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE Autopilot committed use discounts"
feature_slug: "gke-autopilot-committed-use-discounts"
latest_feature_date: "2021-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
keywords:
  - "gke"
  - "autopilot"
  - "committed"
  - "use"
  - "discounts"
  - "cover"
  - "pod"
  - "vcpu"
---

# GKE Autopilot committed use discounts

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts for GKE Autopilot cover pod vCPU, memory, and ephemeral storage usage in the committed region.

## Extended Definition

Committed use discounts for GKE Autopilot cover pod vCPU, memory, and ephemeral storage usage in the committed region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)

## Supporting Pages

### Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Accelerator compatibility with GKE capabilities The following table shows the compatible GKE capabilities for each method of selecting accelerators in GKE Autopilot: Accelerator compute class selected Compatibility with GKE capabilities Spot Pods Compute flexible committed use discounts (CUDs) for the Autopilot premium Compute Engine CUDs for the node hardware Compute Engine capacity reservations GKE Sandbox Spot Pods Autopilot committed use discounts (CUDs) for regular Pods Caution: Autopilot committed use discounts (CUDs) are no longer available for purchase.
- If you want to purchase new commitments to cover your Autopilot usage, then purchase compute flexible commitments instead.
- GPU use cases in Autopilot You can allocate GPUs to containers in Autopilot Pods to facilitate workloads such as the following: Machine learning (ML) inference ML training Rendering Supported GPU quantities When you request GPUs in your Pod specification, you must use the following quantities based on the GPU type: GPU quantities NVIDIA B200 (180GB) nvidia-b200 8 NVIDIA H200 (141GB) nvidia-h200-141gb 8 NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb 8 NVIDIA H100 (80GB) nvidia-h100-80gb 1, 2, 4, 8 NVIDIA A100 (80GB) nvidia-a100-80gb 1, 2, 4, 8 NVIDIA A100 (40GB) nvidia-tesla-a100 1, 2, 4, 8, 16 NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000 1, 2, 4, 8 NVIDIA L4 nvidia-l4 1, 2, 4, 8 NVIDIA T4 nvidia-tesla-t4 1, 2, 4 Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later.
- Ensure that you have a GKE Autopilot cluster running one of the following versions to use the following GPUs or features: NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and 1.29.4-gke.1542000 or later NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and 1.29.1-gke.1575000 or later NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4 machine types that have less than one GPU, see the limitations ) Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later Other GPUs: all supported versions Note: For GKE Sandbox GPU clusters, see GPU model support for gVisor compatibility.

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- HashiCorp Consul HashiCorp Consul is a service networking solution to automate network configurations, discover services, and enable secure connectivity across environments, including GKE Autopilot.
- Checkmk can automatically discover and collect cluster-wide data, providing visibility into GKE Autopilot performance and health, and visualize the information with dashboards.
- Partner Description Aqua Aqua supports securing and ensuring compliance for the full lifecycle of workloads on GKE Autopilot, and specifically the Kubernetes pods, which run multiple containers with shared sets of storage and networking resources.
- Google Kubernetes Engine (GKE) Autopilot clusters don't usually allow workloads that require elevated privileges, such as access to /var/run , privileged: true , or highly-privileged Linux file capabilities such as NET RAW and SYS ADMIN .

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Scaling down a cluster if you have committed use discounts This tutorial explains how to reduce costs by scaling down your GKE clusters to the minimum during off-peak hours.
- Committed use contracts give you deeply discounted prices when you commit to paying for a set quantity of resources (vCPUs, memory, and others).
- However, if you've purchased a committed use discount , it's important to understand how these discounts work in conjunction with autoscaling.
- Last reviewed 2022-11-24 UTC Autopilot Standard This tutorial explains how you can reduce costs by deploying a scheduled autoscaler on Google Kubernetes Engine (GKE).


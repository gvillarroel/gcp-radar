---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.248Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "A2 machine types"
feature_slug: "a2-machine-types"
latest_feature_date: "2021-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "a2"
  - "machine"
  - "types"
  - "accelerator"
  - "optimized"
  - "vm"
  - "instances"
  - "designed"
---

# A2 machine types

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

A2 machine types are accelerator-optimized VM instances designed for GPU-intensive workloads.

## Extended Definition

A2 machine types are accelerator-optimized VM instances designed for GPU-intensive workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)

## Supporting Pages

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By leveraging GPUDirect-TCPX, these machine type achieve much higher throughput between instances in a cluster when compared to the A2 or G2 accelerator-optimized machine types.
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- G4 machine types G4 accelerator-optimized machine types use NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 ) and are suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- GPU machine types AI and ML workloads Graphics and visualization Other GPU workloads Accelerator-optimized A series machine types are designed for high performance computing (HPC), artificial intelligence (AI), and machine learning (ML) workloads.
- Accelerator-optimized G series machine types are designed for workloads such as NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.
- G4 machine series G4 accelerator-optimized machine types use NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 ) and are suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.
- This document also details which GPUs come pre-attached to accelerator-optimized machine series such as A4X Max, A4X, A4, A3, A2, G4, and G2, and which GPUs you can attach to N1 general-purpose instances.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- GPU machine types AI and ML workloads Graphics and visualization Other GPU workloads Accelerator-optimized A series machine types are designed for high performance computing (HPC), artificial intelligence (AI), and machine learning (ML) workloads.
- Accelerator-optimized G series machine types are designed for workloads such as NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.
- G4 machine series G4 accelerator-optimized machine types use NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 ) and are suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.
- This document also details which GPUs come pre-attached to accelerator-optimized machine series such as A4X Max, A4X, A4, A3, A2, G4, and G2, and which GPUs you can attach to N1 general-purpose instances.


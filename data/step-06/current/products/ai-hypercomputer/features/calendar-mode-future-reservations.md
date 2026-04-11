---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.591Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Calendar mode future reservations"
feature_slug: "calendar-mode-future-reservations"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy"
keywords:
  - "pre-provisioned reserved capacity"
  - "reserve capacity up to 90 days"
  - "future date reservation window"
  - "calendar mode reservations"
  - "calendar mode scheduling"
  - "calendar mode"
  - "future reservations"
  - "future reservation"
---

# Calendar mode future reservations

Product: AI Hypercomputer
Coverage: HIGH

## Step 02 Summary

In preview, AI Hypercomputer supports creating future reservations in calendar mode up to 90 days ahead to reserve up to 80 GPU VMs and use that capacity for model training, fine-tuning, simulations, or inference.

## Extended Definition

Calendar mode future reservation in AI Hypercomputer is a scheduling feature that lets users request reserved GPU capacity to start at a specific future date and time. In Feature Preview it supported reserving up to 80 GPU VMs for dates up to 90 days ahead, and it reached General Availability with support for future-date reservations up to one year ahead; it is recommended for fine-tuning and inferencing workloads.

## Evidence Summary

The release notes provide lifecycle and capacity constraints (preview 90-day limit, GA one-year future reservations, up to 80 GPU VMs), while the recommendations page links calendar-mode future reservations to fine-tuning and inference usage.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes](https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)

## Supporting Pages

### AI Hypercomputer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes](https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes general future-reservation capability in AI Hypercomputer, which is closely related to calendar-mode future reservations despite different stated limits.

Evidence snippets:
- July 07, 2025 Feature Preview : You can use future reservations in calendar mode to obtain resources for up to 90 days.
- October 21, 2025 Feature Generally available : You can use future reservations in AI Hypercomputer to request to reserve capacity starting on a specific date up to one year in the future.
- By creating a request in calendar mode, you can reserve up to 80 GPU VMs for a future date and time.

### Recommended configurations \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses recommended consumption types in general, but it does not explicitly cover calendar-mode reservation behavior, preview limits, or related operational constraints.

Evidence snippets:
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Fine-tuning large models A4X Max A4X A4 GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Fine-tuning large models A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Fine-tuning large models A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended consumption type For fine-tuning workloads we recommend using future reservation in calendar mode to provision resources.
- Workloads Recommendations VM deployment guide Machine type Orchestrator Single-host frontier inference A4 A3 Ultra N/A Create an AI-optimized instance Single-host frontier inference A3 High N/A Create an A3 VM with GPUDirect-TCPX enabled Recommended consumption type For inferencing we recommend using either a long running reservation or future reservation in calendar mode.


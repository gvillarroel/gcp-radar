---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.179Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "NVIDIA A100 80GB GPU availability"
feature_slug: "nvidia-a100-80gb-gpu-availability"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "nvidia"
  - "a100"
  - "80gb"
  - "gpu"
  - "availability"
  - "gpus"
  - "provide"
  - "accelerator"
---

# NVIDIA A100 80GB GPU availability

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones; NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones.

## Extended Definition

NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones; NVIDIA A100 80GB GPUs provide accelerator capacity for Compute Engine workloads in additional zones.

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
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- This document describes the accelerator-optimized machine family, which provides you with Compute Engine instances that have pre-attached NVIDIA GPUs.
- VM instances created by using the A2 machine types provide the following features: GPU acceleration : each A2 instance has NVIDIA A100 GPUs .
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A2 machine series A2 accelerator-optimized machine types have NVIDIA A100 GPUs attached and are ideal for model fine tuning, large model and cost optimized inference.
- The A2 machine series offers two types: A2 Ultra : these machine types have A100 80GB GPUs ( nvidia-a100-80gb ) and Local SSD disks attached.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A2 machine series A2 accelerator-optimized machine types have NVIDIA A100 GPUs attached and are ideal for model fine tuning, large model and cost optimized inference.
- The A2 machine series offers two types: A2 Ultra : these machine types have A100 80GB GPUs ( nvidia-a100-80gb ) and Local SSD disks attached.


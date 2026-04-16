---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.192Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "A2 Ultra GPU machine types with A100 80GB GPUs"
feature_slug: "a2-ultra-gpu-machine-types-with-a100-80gb-gpus"
latest_feature_date: "2022-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "a2"
  - "ultra"
  - "gpu"
  - "machine"
  - "types"
  - "a100"
  - "80gb"
  - "gpus"
---

# A2 Ultra GPU machine types with A100 80GB GPUs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Accelerator-optimized A2 Ultra GPU machine types provide attached NVIDIA A100 80GB GPUs in additional zones.

## Extended Definition

Accelerator-optimized A2 Ultra GPU machine types provide attached NVIDIA A100 80GB GPUs in additional zones.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)

## Supporting Pages

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The A2 machine series offers two types: A2 Ultra : these machine types have A100 80GB GPUs ( nvidia-a100-80gb ) and Local SSD disks attached.
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The A2 machine series offers two types: A2 Ultra : these machine types have A100 80GB GPUs ( nvidia-a100-80gb ) and Local SSD disks attached.
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- A2 Ultra machine types These machine types have a fixed number of A100 80GB GPUs .
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.


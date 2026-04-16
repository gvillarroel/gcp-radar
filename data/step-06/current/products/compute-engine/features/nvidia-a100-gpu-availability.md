---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.212Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "NVIDIA A100 GPU availability"
feature_slug: "nvidia-a100-gpu-availability"
latest_feature_date: "2021-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "nvidia"
  - "a100"
  - "gpu"
  - "availability"
  - "compute"
  - "engine"
  - "provides"
  - "attachments"
---

# NVIDIA A100 GPU availability

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine provides NVIDIA A100 GPU attachments in additional regions and zones.

## Extended Definition

Compute Engine provides NVIDIA A100 GPU attachments in additional regions and zones.

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
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- This document describes the accelerator-optimized machine family, which provides you with Compute Engine instances that have pre-attached NVIDIA GPUs.
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- To use vGPUs, Compute Engine provides the following VM instance shapes: g4-standard-6 (1/8 GPU), g4-standard-12 (1/4 GPU), and g4-standard-24 (1/2 GPU).
- Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- This document outlines the NVIDIA GPU models that you can use to accelerate machine learning (ML), data processing, and graphics-intensive workloads on your Compute Engine instances.
- General comparison chart The following table describes the GPU memory size, feature availability, and ideal workload types of different GPU models on Compute Engine.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- This document outlines the NVIDIA GPU models that you can use to accelerate machine learning (ML), data processing, and graphics-intensive workloads on your Compute Engine instances.
- General comparison chart The following table describes the GPU memory size, feature availability, and ideal workload types of different GPU models on Compute Engine.


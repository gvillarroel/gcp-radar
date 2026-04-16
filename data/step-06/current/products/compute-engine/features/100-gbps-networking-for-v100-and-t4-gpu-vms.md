---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.277Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "100 Gbps networking for V100 and T4 GPU VMs"
feature_slug: "100-gbps-networking-for-v100-and-t4-gpu-vms"
latest_feature_date: "2019-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "100"
  - "gbps"
  - "networking"
  - "v100"
  - "t4"
  - "gpu"
  - "vms"
  - "enables"
---

# 100 Gbps networking for V100 and T4 GPU VMs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

100 Gbps networking for V100 and T4 GPU VMs enables very high network bandwidth on supported GPU instances.

## Extended Definition

100 Gbps networking for V100 and T4 GPU VMs enables very high network bandwidth on supported GPU instances.

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
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- For general purpose networking, each instance also has up to 400 Gbps of bandwidth.
- For general purpose networking, each instance also has up to 400 Gbps of bandwidth.
- 30 days Yes Yes G2 1, 2, 4, or 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes N1+T4 1 or 2 Minimum of 15 days Terminate and Restart 7 days No Yes N1+T4 4 Minimum of 30 days Terminate and Restart 7 days Yes Yes N1+P4 1 or 2 Minimum of 15 days Terminate and Restart 7 days No Yes N1+P4 4 Minimum of 30 days Terminate and Restart 7 days Yes Yes N1+P100 1 or 2 Minimum of 15 days Terminate and Restart 7 days No Yes N1+P100 4 Minimum of 30 days Terminate and Restart 7 days Yes Yes N1+V100 1, 2, or 4 Minimum of 15 days Terminate and Restart 7 days No Yes N1+V100 8 Minimum of 30 days Terminate and Restart 7 days Yes Yes 1 Excluding instances covered by specific customer maintenance agreements.
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .


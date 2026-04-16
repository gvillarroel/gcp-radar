---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.250Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "NVIDIA A100 GPUs"
feature_slug: "nvidia-a100-gpus"
latest_feature_date: "2021-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "nvidia"
  - "a100"
  - "gpus"
  - "provide"
  - "high"
  - "performance"
  - "gpu"
  - "acceleration"
---

# NVIDIA A100 GPUs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

NVIDIA A100 GPUs provide high-performance GPU acceleration for Compute Engine workloads.

## Extended Definition

NVIDIA A100 GPUs provide high-performance GPU acceleration for Compute Engine workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)

## Supporting Pages

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A3 Ultra machine type A3 Ultra machine types have NVIDIA H200 SXM GPUs ( nvidia-h200-141gb ) attached and provides the highest network performance in the A3 series.
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- G2 machine series G2 accelerator-optimized machine types have NVIDIA L4 GPUs attached and are ideal for cost-optimized inference, graphics-intensive and high performance computing workloads.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A3 Ultra machine type A3 Ultra machine types have NVIDIA H200 SXM GPUs ( nvidia-h200-141gb ) attached and provides the highest network performance in the A3 series.
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- G2 machine series G2 accelerator-optimized machine types have NVIDIA L4 GPUs attached and are ideal for cost-optimized inference, graphics-intensive and high performance computing workloads.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- VM instances created by using the A3 machine types provide the following features: Feature A3 Ultra A3 Mega, High, Edge GPU acceleration NVIDIA H200 SXM GPUs attached, which offers 141 GB GPU memory per GPU and provides larger and faster memory for supporting large language models and HPC workloads.
- A3 Ultra machine type A3 Ultra machine types have NVIDIA H200 SXM GPUs ( nvidia-h200-141gb ) attached and provides the highest network performance in the A3 series.
- VM instances created by using the A2 machine types provide the following features: GPU acceleration : each A2 instance has NVIDIA A100 GPUs .
- Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .


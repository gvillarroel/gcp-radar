---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.244Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Memory-optimized machine types"
feature_slug: "memory-optimized-machine-types"
latest_feature_date: "2021-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "memory"
  - "optimized"
  - "machine"
  - "types"
  - "provide"
  - "high"
  - "vm"
  - "configurations"
---

# Memory-optimized machine types

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads; Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads.

## Extended Definition

Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads; Memory-optimized machine types provide high-memory VM configurations for memory-intensive workloads.

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
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-megagpu-8g 208 1,872 6,000 9 1,800 8 640 A3 High Note: When provisioning a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types, you must create instances by using Spot VMs or Flex-start VMs.
- GPU machine types AI and ML workloads Graphics and visualization Other GPU workloads Accelerator-optimized A series machine types are designed for high performance computing (HPC), artificial intelligence (AI), and machine learning (ML) workloads.
- G2 machine series G2 accelerator-optimized machine types have NVIDIA L4 GPUs attached and are ideal for cost-optimized inference, graphics-intensive and high performance computing workloads.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-megagpu-8g 208 1,872 6,000 9 1,800 8 640 A3 High Note: When provisioning a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types, you must create instances by using Spot VMs or Flex-start VMs.
- GPU machine types AI and ML workloads Graphics and visualization Other GPU workloads Accelerator-optimized A series machine types are designed for high performance computing (HPC), artificial intelligence (AI), and machine learning (ML) workloads.
- G2 machine series G2 accelerator-optimized machine types have NVIDIA L4 GPUs attached and are ideal for cost-optimized inference, graphics-intensive and high performance computing workloads.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- VM instances created by using the A3 machine types provide the following features: Feature A3 Ultra A3 Mega, High, Edge GPU acceleration NVIDIA H200 SXM GPUs attached, which offers 141 GB GPU memory per GPU and provides larger and faster memory for supporting large language models and HPC workloads.
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- For the A3 Edge ( a3-edgegpu-8g ) and A3 High ( a3-highgpu-8g ) machine types, GPUDirect-TCPX increases the network performance by allowing data packet payloads to transfer directly from GPU memory to the network interface.


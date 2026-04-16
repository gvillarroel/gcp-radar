---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.249Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "C2 machine types"
feature_slug: "c2-machine-types"
latest_feature_date: "2021-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "c2"
  - "machine"
  - "types"
  - "provide"
  - "compute"
  - "optimized"
  - "vm"
  - "instances"
---

# C2 machine types

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

C2 machine types provide compute-optimized VM instances for high-performance workloads; C2 machine types provide compute-optimized VM instances for high-performance workloads.

## Extended Definition

C2 machine types provide compute-optimized VM instances for high-performance workloads; C2 machine types provide compute-optimized VM instances for high-performance workloads.

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
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This document describes the accelerator-optimized machine family, which provides you with Compute Engine instances that have pre-attached NVIDIA GPUs.
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- VM instances created by using the A3 machine types provide the following features: Feature A3 Ultra A3 Mega, High, Edge GPU acceleration NVIDIA H200 SXM GPUs attached, which offers 141 GB GPU memory per GPU and provides larger and faster memory for supporting large language models and HPC workloads.
- A4X Max and A4X comparison The following table provides a detailed comparison of the A4X Max and A4X machine types: Feature A4X Max A4X GPU acceleration A4X Max instances have NVIDIA GB300 Ultra Superchips automatically attached.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-megagpu-8g 208 1,872 6,000 9 1,800 8 640 A3 High Note: When provisioning a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types, you must create instances by using Spot VMs or Flex-start VMs.
- G4 machine series G4 accelerator-optimized machine types use NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 ) and are suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-megagpu-8g 208 1,872 6,000 9 1,800 8 640 A3 High Note: When provisioning a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types, you must create instances by using Spot VMs or Flex-start VMs.
- G4 machine series G4 accelerator-optimized machine types use NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 ) and are suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video transcoding, and virtual desktops.


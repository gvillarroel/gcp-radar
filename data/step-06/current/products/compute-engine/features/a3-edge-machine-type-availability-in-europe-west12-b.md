---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.153Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "A3 Edge machine type availability in europe-west12-b"
feature_slug: "a3-edge-machine-type-availability-in-europe-west12-b"
latest_feature_date: "2024-12-16"
deprecation_date: "2024-12-16"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "a3"
  - "edge"
  - "machine"
  - "type"
  - "availability"
  - "europe"
  - "west12"
  - "accelerator"
---

# A3 Edge machine type availability in europe-west12-b

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

A3 Edge accelerator-optimized virtual machines were available in the Turin zone europe-west12-b; deprecated on 2024-12-16.

## Extended Definition

A3 Edge accelerator-optimized virtual machines were available in the Turin zone europe-west12-b; deprecated on 2024-12-16.

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
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.
- A3 Edge A3 Edge instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a3-edgegpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- Machine type (GPU model) FP64 (TFLOPS) TF32 (TFLOPS) Mixed FP16/32 (TFLOPS) INT8 (TOPS) INT4 (TOPS) FP8 (TFLOPS) A3 Ultra (H200) 67 989 1,979 3,958 - 3,958 A3 Mega/High/Edge (H100) 67 989 1,979 3,958 - 3,958 A2 Ultra (A100 80GB) 19.5 156 312 624 1248 - A2 Standard (A100 40GB) 19.5 156 312 624 1248 - G2 (L4) - 120 242 485 - 485 Additional notes : For mixed precision training, NVIDIA H200, H100, A100, and L4 also support the bfloat16 data type.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) GPU memory Interconnect NVIDIA RTX Virtual Workstation (vWS) support Best used for A4X Max (GB300) 279 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC A4X (GB200) 186 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A4 (B200) 180 GB HBM3e @ 8 TBps NVLink Full Mesh @ 1,800 GBps Large-scale distributed training and inference of LLMs, Recommenders, HPC A3 Ultra (H200) 141 GB HBM3e @ 4.8 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A3 Mega, A3 High, A3 Edge (H100) 80 GB HBM3 @ 3.35 TBps NVLink Full Mesh @ 900 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Ultra (A100 80GB) 80 GB HBM2e @ 1.9 TBps NVLink Full Mesh @ 600 GBps Large models with massive data tables for ML Training, Inference, HPC, BERT, DLRM A2 Standard (A100 40GB) 40 GB HBM2 @ 1.6 TBps NVLink Full Mesh @ 600 GBps ML Training, Inference, HPC G4 (RTX PRO 6000) 96 GB GDDR7 with ECC @ 1597 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC G2 (L4) 24 GB GDDR6 @ 300 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding, HPC N1 (T4) 16 GB GDDR6 @ 320 GBps N/A ML Inference, Training, Remote Visualization Workstations, Video Transcoding N1 (P4) 8 GB GDDR5 @ 192 GBps N/A Remote Visualization Workstations, ML Inference, and Video Transcoding N1 (V100) 16 GB HBM2 @ 900 GBps NVLink Ring @ 300 GBps ML Training, Inference, HPC N1 (P100) 16 GB HBM2 @ 732 GBps N/A ML Training, Inference, HPC, Remote Visualization Workstations To compare GPU pricing for the different GPU models and regions available on Compute Engine, see GPU pricing .
- A4X Max (NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 ) A4X (NVIDIA GB200 Superchips) ( nvidia-gb200 ) A4 (NVIDIA B200) ( nvidia-b200 ) A3 Ultra (NVIDIA H200) ( nvidia-h200-141gb ) A3 Mega (NVIDIA H100) ( nvidia-h100-mega-80gb ) A3 High (NVIDIA H100) ( nvidia-h100-80gb ) A3 Edge (NVIDIA H100) ( nvidia-h100-80gb ) A2 Ultra (NVIDIA A100 80GB) ( nvidia-a100-80gb ) A2 Standard (NVIDIA A100) ( nvidia-a100-40gb ) G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws ) G2 (NVIDIA L4) ( nvidia-l4 ) ( nvidia-l4-vws ) The following GPU models can be attached to N1 general-purpose machine types: NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws ) NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws ) NVIDIA V100 ( nvidia-tesla-v100 ) NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws ) You can also use some GPU machine types on AI Hypercomputer .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) A3 Ultra (H200) 34 67 A3 Mega, High, Edge (H100) 34 67 A2 Ultra (A100 80GB) 9.7 19.5 A2 Standard (A100 40GB) 9.7 19.5 G2 (L4) 0.5 30.3 Volta, Pascal, and Turing architectures The N1 machine types use the following GPU architectures: Volta (V100) Pascal (P100 and P4) Turing (T4) Tensor Core NVIDIA's Turing and Volta architectures, available on N1 instances, provide Tensor Core support for mixed-precision, INT8, and INT4 operations, offering foundational acceleration for deep learning inference.
- Machine type (GPU model) FP64 (TFLOPS) TF32 (TFLOPS) Mixed FP16/32 (TFLOPS) INT8 (TOPS) INT4 (TOPS) FP8 (TFLOPS) A3 Ultra (H200) 67 989 1,979 3,958 - 3,958 A3 Mega/High/Edge (H100) 67 989 1,979 3,958 - 3,958 A2 Ultra (A100 80GB) 19.5 156 312 624 1248 - A2 Standard (A100 40GB) 19.5 156 312 624 1248 - G2 (L4) - 120 242 485 - 485 Additional notes : For mixed precision training, NVIDIA H200, H100, A100, and L4 also support the bfloat16 data type.


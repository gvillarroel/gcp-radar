---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.128Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Z3 bare metal machine type"
feature_slug: "z3-bare-metal-machine-type"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/gpus"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "z3"
  - "bare"
  - "metal"
  - "machine"
  - "type"
  - "series"
  - "adds"
  - "192"
---

# Z3 bare metal machine type

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

The Z3 machine series adds a bare metal machine type with 192 vCPUs, 1,536 GB of memory, and 72 TiB of Local SSD storage; The Z3 machine series adds a bare metal machine type with 192 vCPUs.

## Extended Definition

The Z3 machine series adds a bare metal machine type with 192 vCPUs, 1,536 GB of memory, and 72 TiB of Local SSD storage; The Z3 machine series adds a bare metal machine type with 192 vCPUs.

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
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- A4X Max machine types (bare metal) A4X Max accelerator-optimized machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and are ideal for foundation model training and serving.
- A4X Max machine types are available as bare metal instances .
- Attached NVIDIA GB300 Grace Blackwell Ultra Superchips Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3e) a4x-maxgpu-4g-metal 144 960 12,000 6 3,600 4 1,116 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) FP16 (TFLOPS) A4X Max (GB300) 1.3 80 - A4X (GB200) 40 80 - A4 (B200) 40 80 - G4 (RTX PRO 6000) 2 117 117 Hopper, Ada Lovelace, and Ampere architectures The A3 series uses the Hopper architecture , which introduced specialized engines for transformer models.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/gpus](https://developers.google.com/compute/docs/gpus)
- Source ID: `site-docs-root-3`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- A4X Max machine types (bare metal) A4X Max accelerator-optimized machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and are ideal for foundation model training and serving.
- A4X Max machine types are available as bare metal instances .
- Attached NVIDIA GB300 Grace Blackwell Ultra Superchips Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3e) a4x-maxgpu-4g-metal 144 960 12,000 6 3,600 4 1,116 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Machine type (GPU model) FP64 (TFLOPS) FP32 (TFLOPS) FP16 (TFLOPS) A4X Max (GB300) 1.3 80 - A4X (GB200) 40 80 - A4 (B200) 40 80 - G4 (RTX PRO 6000) 2 117 117 Hopper, Ada Lovelace, and Ampere architectures The A3 series uses the Hopper architecture , which introduced specialized engines for transformer models.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- A4X Max machine type (bare metal) A4X Max accelerator-optimized machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and are ideal for foundation model training and serving.
- A4X Max machine types are available as bare metal instances .
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- Attached NVIDIA GB300 Grace Blackwell Ultra Superchips Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3e) a4x-maxgpu-4g-metal 144 960 12,000 6 3,600 4 1,116 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .


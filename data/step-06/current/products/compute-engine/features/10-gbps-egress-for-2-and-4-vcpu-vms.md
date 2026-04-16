---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.277Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "10 Gbps egress for 2- and 4-vCPU VMs"
feature_slug: "10-gbps-egress-for-2-and-4-vcpu-vms"
latest_feature_date: "2019-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://docs.cloud.google.com/compute/docs/general-purpose-machines"
  - "https://docs.cloud.google.com/compute/docs/gpus"
keywords:
  - "10"
  - "gbps"
  - "egress"
  - "vcpu"
  - "vms"
  - "increases"
  - "maximum"
  - "outbound"
---

# 10 Gbps egress for 2- and 4-vCPU VMs

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

10 Gbps egress for 2- and 4-vCPU VMs increases maximum outbound network throughput for smaller virtual machines.

## Extended Definition

10 Gbps egress for 2- and 4-vCPU VMs increases maximum outbound network throughput for smaller virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)

## Supporting Pages

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA RTX PRO 6000 GPUs Machine type vCPU count 1 Instance memory (GB) Maximum Titanium SSD supported (GiB) 2 Physical NIC count Maximum network bandwidth (Gbps) 3 GPU count GPU memory 4 (GB GDDR7) g4-standard-6 6 22 0 1 20 1/8 12 g4-standard-12 12 45 375 1 20 1/4 24 g4-standard-24 24 90 750 1 20 1/2 48 g4-standard-48 48 180 1,500 1 50 1 96 g4-standard-96 96 360 3,000 1 100 2 192 g4-standard-192 192 720 6,000 1 200 4 384 g4-standard-384 384 1,440 12,000 2 400 8 768 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-highgpu-1g 26 234 750 1 25 1 80 a3-highgpu-2g 52 468 1,500 1 50 2 160 a3-highgpu-4g 104 936 3,000 1 100 4 320 a3-highgpu-8g 208 1,872 6,000 5 1,000 8 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### General-purpose machine family for Compute Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- Source ID: `site-docs-reference-required-9-http`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The amount of memory configured per vCPU differs depending on the machine type: standard : 4 GB of system memory per vCPU highmem : 8 GB of system memory per vCPU highcpu : 1 GB of system memory per vCPU Shared core: micro : 0.5 GB of system memory per vCPU small : 1 GB of system memory per vCPU medium : 2 GB of system memory per vCPU E2 standard Machine types vCPUs Memory (GB) Local SSD Max number of Persistent Disk (PDs) 1 Max total PD size (TiB) Maximum egress bandwidth (Gbps) 2 e2-standard-2 2 8 No 128 257 Up to 4 e2-standard-4 4 16 No 128 257 Up to 8 e2-standard-8 8 32 No 128 257 Up to 16 e2-standard-16 16 64 No 128 257 Up to 16 e2-standard-32 32 128 No 128 257 Up to 16 1 Persistent Disk and Hyperdisk usage is charged separately from machine pricing .
- E2 high-cpu Machine types vCPUs Memory (GB) Local SSD Max number of Persistent Disk (PDs) 1 Max total PD size (TiB) Maximum egress bandwidth (Gbps) 2 e2-highcpu-2 2 2 No 128 257 Up to 4 e2-highcpu-4 4 4 No 128 257 Up to 8 e2-highcpu-8 8 8 No 128 257 Up to 16 e2-highcpu-16 16 16 No 128 257 Up to 16 e2-highcpu-32 32 32 No 128 257 Up to 16 1 Persistent Disk and Hyperdisk usage is charged separately from machine pricing .
- E2 high-mem Machine types vCPUs Memory (GB) Local SSD Max number of Persistent Disk (PDs) 1 Max total Persistent Disk size (TiB) Maximum egress bandwidth (Gbps) 2 e2-highmem-2 2 16 No 128 257 Up to 4 e2-highmem-4 4 32 No 128 257 Up to 8 e2-highmem-8 8 64 No 128 257 Up to 16 e2-highmem-16 16 128 No 128 257 Up to 16 1 Persistent Disk and Hyperdisk usage is charged separately from machine pricing .
- E2 shared-core Machine types vCPUs Fractional vCPUs 1 Memory (GB) Local SSD Max number of Persistent Disk (PDs) 2 Max total PD size (TiB) Maximum egress bandwidth (Gbps) 3 e2-micro 2 0.25 1 1 No 16 3 Up to 1 e2-small 2 0.5 1 2 No 16 3 Up to 1 e2-medium 2 1 1 4 No 16 3 Up to 2 1 Fractional vCPU of 0.25, 0.5, or 1.0 with 2 vCPUs exposed to the guest operating system.

### GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gpus](https://docs.cloud.google.com/compute/docs/gpus)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- A2 Ultra Attached NVIDIA A100 80GB GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2e) a2-ultragpu-1g 12 170 375 24 1 80 a2-ultragpu-2g 24 340 750 32 2 160 a2-ultragpu-4g 48 680 1,500 50 4 320 a2-ultragpu-8g 96 1,360 3,000 100 8 640 A2 Standard Attached NVIDIA A100 40GB GPUs Machine type vCPU count 1 Instance memory (GB) Local SSD supported Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM2) a2-highgpu-1g 12 85 Yes 24 1 40 a2-highgpu-2g 24 170 Yes 32 2 80 a2-highgpu-4g 48 340 Yes 50 4 160 a2-highgpu-8g 96 680 Yes 100 8 320 a2-megagpu-16g 96 1,360 Yes 100 16 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA L4 GPUs Machine type vCPU count 1 Default instance memory (GB) Custom instance memory range (GB) Max Local SSD supported (GiB) Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB GDDR6) g2-standard-4 4 16 16 to 32 375 10 1 24 g2-standard-8 8 32 32 to 54 375 16 1 24 g2-standard-12 12 48 48 to 54 375 16 1 24 g2-standard-16 16 64 54 to 64 375 32 1 24 g2-standard-24 24 96 96 to 108 750 32 2 48 g2-standard-32 32 128 96 to 128 375 32 1 24 g2-standard-48 48 192 192 to 216 1,500 50 4 96 g2-standard-96 96 384 384 to 432 3,000 100 8 192 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA RTX PRO 6000 GPUs Machine type vCPU count 1 Instance memory (GB) Maximum Titanium SSD supported (GiB) 2 Physical NIC count Maximum network bandwidth (Gbps) 3 GPU count GPU memory 4 (GB GDDR7) g4-standard-6 6 22 0 1 20 1/8 12 g4-standard-12 12 45 375 1 20 1/4 24 g4-standard-24 24 90 750 1 20 1/2 48 g4-standard-48 48 180 1,500 1 50 1 96 g4-standard-96 96 360 3,000 1 100 2 192 g4-standard-192 192 720 6,000 1 200 4 384 g4-standard-384 384 1,440 12,000 2 400 8 768 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-highgpu-1g 26 234 750 1 25 1 80 a3-highgpu-2g 52 468 1,500 1 50 2 160 a3-highgpu-4g 104 936 3,000 1 100 4 320 a3-highgpu-8g 208 1,872 6,000 5 1,000 8 640 A3 Edge Note: To get started with A3 Edge instances, see Create an A3 VM with GPUDirect-TCPX enabled .


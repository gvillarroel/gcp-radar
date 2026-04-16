---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.228Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "and image availability in northamerica-northeast2"
feature_slug: "and-image-availability-in-northamerica-northeast2"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "image"
  - "availability"
  - "northamerica"
  - "northeast2"
  - "disks"
  - "snapshots"
  - "images"
  - "available"
---

# and image availability in northamerica-northeast2

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region.

## Extended Definition

Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)

## Supporting Pages

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Regional Persistent Disk and Hyperdisk Balanced High Availability volumes have different performance characteristics than their corresponding zonal disks.
- Replicating within the region to different zones, as shown in the following image, helps with availability and reduces disk latency.
- Snapshots are incremental, and take only minutes to create even if you snapshot disks that are attached to running VMs.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Regional Persistent Disk and Hyperdisk Balanced High Availability volumes have different performance characteristics than their corresponding zonal disks.
- Replicating within the region to different zones, as shown in the following image, helps with availability and reduces disk latency.
- Snapshots are incremental, and take only minutes to create even if you snapshot disks that are attached to running VMs.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Attached NVIDIA H100 GPUs Machine type vCPU count 1 Instance memory (GB) Attached Local SSD (GiB) Physical NIC count Maximum network bandwidth (Gbps) 2 GPU count GPU memory 3 (GB HBM3) a3-edgegpu-8g 208 1,872 6,000 5 600: for asia-south1 and northamerica-northeast2 400: for all other A3 Edge regions 8 640 1 A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- If you want to use an OS image that is available on Compute Engine, OS images that support IDPF .
- You can't use Deep Learning VM Images as boot disks for instances that use the G2 machine type.
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.196Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "UEFI bootloader support for imported virtual disks"
feature_slug: "uefi-bootloader-support-for-imported-virtual-disks"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/local-ssd"
  - "https://docs.cloud.google.com/compute/docs/disks/local-ssd"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
keywords:
  - "uefi"
  - "bootloader"
  - "imported"
  - "virtual"
  - "disks"
  - "compute"
  - "engine"
  - "can"
---

# UEFI bootloader support for imported virtual disks

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine can import virtual disks that use a UEFI bootloader by enabling UEFI booting with guest OS features.

## Extended Definition

Compute Engine can import virtual disks that use a UEFI bootloader by enabling UEFI booting with guest OS features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)

## Supporting Pages

### About Local SSD disks \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/local-ssd](https://docs.cloud.google.com/compute/docs/disks/local-ssd)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Scenarios where Compute Engine might not persist Local SSD data Data on Local SSD disks might be lost if a host error occurs on the instance and Compute Engine can't recover the data on the Local SSD disks attached to the instance within a specified time.
- Committed use discounts for Local SSD disks Resource-based commitments provide deep discounts for Compute Engine resources in return for committing to using the resources in a specific region for at least one year.
- If Compute Engine can't recover the data on the Local SSD disks before the timeout expires, the instance restarts with blank, unformatted Local SSD disks attached, and the original data is unrecoverable.
- Before you delete a Compute Engine instance that has Local SSD disks attached, make sure that you migrate any critical data on the Local SSD disks to a Persistent Disk, Hyperdisk, or to another instance.

### About Local SSD disks \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- Source ID: `site-docs-root-3`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Scenarios where Compute Engine might not persist Local SSD data Data on Local SSD disks might be lost if a host error occurs on the instance and Compute Engine can't recover the data on the Local SSD disks attached to the instance within a specified time.
- Committed use discounts for Local SSD disks Resource-based commitments provide deep discounts for Compute Engine resources in return for committing to using the resources in a specific region for at least one year.
- If Compute Engine can't recover the data on the Local SSD disks before the timeout expires, the instance restarts with blank, unformatted Local SSD disks attached, and the original data is unrecoverable.
- Before you delete a Compute Engine instance that has Local SSD disks attached, make sure that you migrate any critical data on the Local SSD disks to a Persistent Disk, Hyperdisk, or to another instance.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.
- For most Compute Engine machine types, these disks have the same maximum IOPS as SSD Persistent Disk and lower IOPS per GiB.
- Compute Engine manages the physical disks and the data distribution for you to ensure redundancy and optimal performance.
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .


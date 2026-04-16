---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.245Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Custom and public images"
feature_slug: "custom-and-public-images"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/local-ssd"
  - "https://docs.cloud.google.com/compute/docs/disks/local-ssd"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
keywords:
  - "custom"
  - "public"
  - "images"
  - "compute"
  - "engine"
  - "provide"
  - "boot"
  - "disk"
---

# Custom and public images

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine images provide boot disk templates for creating VM instances.

## Extended Definition

Compute Engine images provide boot disk templates for creating VM instances.

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
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OS image : For a list of which public OS images provided by Compute Engine support SCSI or NVMe, see the Interfaces tab for each table in the operating system details documentation.
- Similarly, some of the public OS images provided by Compute Engine might support both NVMe and SCSI, or only one of the two.
- If you use the public images provided by Compute Engine, then you don't have to take any further action.
- Committed use discounts for Local SSD disks Resource-based commitments provide deep discounts for Compute Engine resources in return for committing to using the resources in a specific region for at least one year.

### About Local SSD disks \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/local-ssd](https://developers.google.com/compute/docs/disks/local-ssd)
- Source ID: `site-docs-root-3`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OS image : For a list of which public OS images provided by Compute Engine support SCSI or NVMe, see the Interfaces tab for each table in the operating system details documentation.
- Similarly, some of the public OS images provided by Compute Engine might support both NVMe and SCSI, or only one of the two.
- If you use the public images provided by Compute Engine, then you don't have to take any further action.
- Committed use discounts for Local SSD disks Resource-based commitments provide deep discounts for Compute Engine resources in return for committing to using the resources in a specific region for at least one year.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- If you need block storage for a virtual machine (VM) instance or container, such as for a boot disk or data disk, use Persistent Disk volumes if Google Cloud Hyperdisk isn't available for your compute instance.
- To enable multi-writer mode for new Persistent Disk volumes, create a new Persistent Disk and specify the --multi-writer flag in the gcloud CLI or the multiWriter property in the Compute Engine API.
- Ease of use Compute Engine handles most disk management tasks for you so that you don't need to deal with partitioning, redundant disk arrays, or subvolume management.


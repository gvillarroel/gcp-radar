---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.204Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Suspend and resume for VMs"
feature_slug: "suspend-and-resume-for-vms"
latest_feature_date: "2022-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/compute/docs/disks/data-protection"
  - "https://docs.cloud.google.com/compute/docs/disks/data-protection"
  - "https://docs.cloud.google.com/compute/docs/gcloud-compute/common-commands"
keywords:
  - "suspend"
  - "resume"
  - "vms"
  - "compute"
  - "engine"
  - "supports"
  - "suspending"
  - "resuming"
---

# Suspend and resume for VMs

Product: Compute Engine
Coverage: LOW

## Step 02 Summary

Compute Engine supports suspending and resuming virtual machine instances.

## Extended Definition

Compute Engine supports suspending and resuming virtual machine instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/data-protection](https://developers.google.com/compute/docs/disks/data-protection)
- [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- [https://docs.cloud.google.com/compute/docs/gcloud-compute/common-commands](https://docs.cloud.google.com/compute/docs/gcloud-compute/common-commands)

## Supporting Pages

### "Data protection options for disks and instances \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- This document discusses the options available on Compute Engine to back up and replicate the following Compute Engine resources: Persistent Disk and Google Cloud Hyperdisk volumes Virtual machine (VM) and bare metal instances Workloads running in Compute Engine and on-premises To safeguard important data, Google recommends using one of the backup options discussed in this document.
- Home Documentation Compute Compute Engine Guides Send feedback Data protection options for disks and instances Stay organized with collections Save and categorize content based on your preferences.
- Because Compute Engine performs local caching in target zones, disk creation from images is faster than disk creation from snapshots.
- Resource to back up Feature Description Use cases VMs, including attached disks Backup and DR Service Managed service providing secure backups for compute instances across projects.

### "Data protection options for disks and instances \_|\_ Compute Engine \_\

- URL: [https://developers.google.com/compute/docs/disks/data-protection](https://developers.google.com/compute/docs/disks/data-protection)
- Source ID: `site-docs-root-3`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- This document discusses the options available on Compute Engine to back up and replicate the following Compute Engine resources: Persistent Disk and Google Cloud Hyperdisk volumes Virtual machine (VM) and bare metal instances Workloads running in Compute Engine and on-premises To safeguard important data, Google recommends using one of the backup options discussed in this document.
- Home Documentation Compute Compute Engine Guides Send feedback Data protection options for disks and instances Stay organized with collections Save and categorize content based on your preferences.
- Because Compute Engine performs local caching in target zones, disk creation from images is faster than disk creation from snapshots.
- Resource to back up Feature Description Use cases VMs, including attached disks Backup and DR Service Managed service providing secure backups for compute instances across projects.

### Common gcloud compute commands \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/gcloud-compute/common-commands](https://docs.cloud.google.com/compute/docs/gcloud-compute/common-commands)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describing projects Run the following command to query information about your Compute Engine project, such as project metadata, ssh keys, and quota metrics: gcloud compute project-info describe For more information about describing your project, see the gcloud compute project-info describe reference documentation.
- Home Documentation Compute Compute Engine APIs & Reference Send feedback Common gcloud compute commands Stay organized with collections Save and categorize content based on your preferences.
- To run code or samples from a local development environment, you can authenticate to Compute Engine by selecting one of the following options: Install the Google Cloud CLI.
- For example, if you specify --image-family debian-10 , Compute Engine creates a VM from the latest version of the OS image in the Debian 10 image family.


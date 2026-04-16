---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:21:05.187Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "and 580.126.09 support"
feature_slug: "and-580-126-09-support"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
keywords:
  - "and"
  - "580"
  - "126"
  - "09"
  - "container"
  - "optimized"
  - "os"
  - "supports"
---

# and 580.126.09 support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports NVIDIA driver versions 535.288.01, 570.211.01, and 580.126.09; Container-Optimized OS supports NVIDIA driver versions 535.288.01, 570.211.01, and 580.126.09.

## Extended Definition

Container-Optimized OS supports NVIDIA driver versions 535.288.01, 570.211.01, and 580.126.09; Container-Optimized OS supports NVIDIA driver versions 535.288.01, 570.211.01, and 580.126.09.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)

## Supporting Pages

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.
- This document explains what the CIS Benchmark is, how the benchmark relates to Container-Optimized OS (COS), how to audit the status of compliance in the instance and how to troubleshoot in case of failure.
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.
- Since /etc/ is stateless on Container-Optimized OS, you cannot use /etc/fstab to automatically fsck (file system consistency check) and mount the disks on boot.
- Mounting and formatting disks You can attach a persistent disk or create an instance with Local SSDs when using Container-Optimized OS.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- For example, the following command shows currently active LTS image families: gcloud compute images list --no-standard-images --project=cos-cloud grep lts cos-101-17162-40-16 cos-cloud cos-101-lts READY cos-89-16108-766-3 cos-cloud cos-89-lts READY cos-93-16623-295-5 cos-cloud cos-93-lts READY cos-97-16919-189-3 cos-cloud cos-97-lts READY cos-arm64-101-17162-40-16 cos-cloud cos-arm64-101-lts READY Lifecycle of an LTS milestone A new Container-Optimized OS LTS milestone is introduced approximately every 6 months on its own image family named cos-[MILESTONE]-lts (x86) and cos-arm64-[MILESTONE]-lts (Arm).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Versioning scheme Stay organized with collections Save and categorize content based on your preferences.
- Over the lifetime of a Container-Optimized OS milestone, we may release several updates containing bug fixes, security fixes and other changes.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Selecting the logging agent x86-based Container-Optimized OS 105 and 109 images ship two implementations of the logging agent: fluentd (legacy) and fluent-bit.
- For Arm images of all versions and x86 images for Container-Optimized OS 109 and later, the logging agent is a built-in OS package called fluent-bit .
- Container-Optimized OS 105 uses fluentd by default and Container-Optimized OS 109 uses fluent-bit by default.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.


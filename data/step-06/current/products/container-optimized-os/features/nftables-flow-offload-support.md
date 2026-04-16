---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.067Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "nftables flow offload support"
feature_slug: "nftables-flow-offload-support"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
keywords:
  - "nftables"
  - "flow"
  - "offload"
  - "container"
  - "optimized"
  - "os"
  - "supports"
  - "flowtable"
---

# nftables flow offload support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports nftables flow offload and flowtable infrastructure.

## Extended Definition

Container-Optimized OS supports nftables flow offload and flowtable infrastructure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)

## Supporting Pages

### Support policy \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Contact us For technical support: Contact Google Cloud support For general questions: StackOverflow: google-container-os tag Mailing list for Compute Engine users: gce-discussion Mailing list for Kubernetes Users: kubernetes-users Visit the Google Cloud Slack community ; use this form to sign up .
- Support duration Approximately twice each year, the Container-Optimized OS team releases a Long Term Supported (LTS) milestone on its cos-[MILESTONE]-lts and cos-arm64-[MILESTONE]-lts image families.
- Home Documentation Compute Compute Engine Container-Optimized OS Resources Send feedback Support policy Stay organized with collections Save and categorize content based on your preferences.
- Container-Optimized OS image support is available for our Long Term Supported (LTS) family of images in the cos-cloud project.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.
- When using Container-Optimized OS, be aware of the partitioning if you run your own services that have certain expectations about the file system layout outside of containers.
- Since /etc/ is stateless on Container-Optimized OS, you cannot use /etc/fstab to automatically fsck (file system consistency check) and mount the disks on boot.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- Features and Benefits Container-Optimized OS provides the following benefits: Run Containers Out of the Box : Container-Optimized OS instances come pre-installed with the Docker and containerd runtimes and cloud-init .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Container-Optimized OS Overview Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.075Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "dev-go/grpc package"
feature_slug: "dev-go-grpc-package"
latest_feature_date: "2024-08-20"
deprecation_date: "2024-08-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "dev"
  - "go"
  - "grpc"
  - "package"
  - "provides"
  - "container"
  - "optimized"
  - "os"
---

# dev-go/grpc package

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Provides the dev-go/grpc package in Container-Optimized OS; Container-Optimized OS previously included the dev-go/grpc package; deprecated on 2024-08-20.

## Extended Definition

Provides the dev-go/grpc package in Container-Optimized OS; Container-Optimized OS previously included the dev-go/grpc package; deprecated on 2024-08-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Scanning COS images with Oval vulnerability feed \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Scanning COS images with Oval vulnerability feed Stay organized with collections Save and categorize content based on your preferences.
- Extract the downloaded Oval feed: tar xf cos-109.oval.xml.tar.gz Copy cos-package-info.json from your VM instance, in this case my-cos-instance : gcloud compute scp my - cos - instance : / etc / cos - package - info . json .
- In this case, we use OpenSCAP : oscap oval eval --report report.html cos-109.oval.xml Note that the cos-package-info.json file and the COS Oval feed need to be in the same directory.
- COS provides an Open Vulnerability and Assessment Language (OVAL) vulnerability feed, which is a structured, machine-readable dataset for all supported COS releases.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS enables the following EXT4-related features: Support for the EXT4 filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used EXT4 features enabled: CONFIG EXT4 FS=y CONFIG EXT4 USE FOR EXT2=y CONFIG EXT4 FS POSIX ACL=y CONFIG EXT4 FS SECURITY=y CONFIG JBD2=y e2fsprogs package : The e2fsprogs package contains several critical user space utilities available for the EXT4 filesystem (for example, mkfs and fsck ).
- Container-Optimized OS enables the following XFS-related features: Support for the XFS filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used XFS features enabled: CONFIG XFS FS=y CONFIG XFS SUPPORT V4=y CONFIG XFS QUOTA=y CONFIG XFS POSIX ACL=y xfsprogs package : The xfsprogs package contains several critical user space utilities available for the XFS filesystem (for example, mkfs and fsck ).
- This page provides an overview of the filesystems available in Container-Optimized OS.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Supported filesystems Stay organized with collections Save and categorize content based on your preferences.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Since Container-Optimized OS is optimized to run containers and containers package their own dependencies, we can trim unnecessary packages and thus minimize the OS attack surface.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Security-centric defaults Container-Optimized OS provides another level of hardening by providing security-minded default values for several features.
- This page provides an overview of the security features of Container-Optimized OS running on Google Cloud.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.040Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "zswap kernel support"
feature_slug: "zswap-kernel-support"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
keywords:
  - "zswap"
  - "kernel"
  - "container"
  - "optimized"
  - "os"
  - "adds"
  - "linux"
---

# zswap kernel support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS adds support for zswap in the Linux kernel.

## Extended Definition

Container-Optimized OS adds support for zswap in the Linux kernel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)

## Supporting Pages

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Container-Optimized OS enables the following EXT4-related features: Support for the EXT4 filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used EXT4 features enabled: CONFIG EXT4 FS=y CONFIG EXT4 USE FOR EXT2=y CONFIG EXT4 FS POSIX ACL=y CONFIG EXT4 FS SECURITY=y CONFIG JBD2=y e2fsprogs package : The e2fsprogs package contains several critical user space utilities available for the EXT4 filesystem (for example, mkfs and fsck ).
- Container-Optimized OS enables the following XFS-related features: Support for the XFS filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used XFS features enabled: CONFIG XFS FS=y CONFIG XFS SUPPORT V4=y CONFIG XFS QUOTA=y CONFIG XFS POSIX ACL=y xfsprogs package : The xfsprogs package contains several critical user space utilities available for the XFS filesystem (for example, mkfs and fsck ).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Supported filesystems Stay organized with collections Save and categorize content based on your preferences.
- XFS filesystem Container-Optimized OS comes with a fully-supported XFS filesystem starting from COS M105.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- The Container-Optimized OS kernel is locked down; you'll be unable to install third-party kernel modules or drivers.
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.
- Features and Benefits Container-Optimized OS provides the following benefits: Run Containers Out of the Box : Container-Optimized OS instances come pre-installed with the Docker and containerd runtimes and cloud-init .


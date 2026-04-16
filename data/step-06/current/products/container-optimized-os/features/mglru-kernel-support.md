---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.079Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "MGLRU kernel support"
feature_slug: "mglru-kernel-support"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "mglru"
  - "kernel"
  - "enables"
  - "multi"
  - "generational"
  - "lru"
  - "linux"
  - "container"
---

# MGLRU kernel support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Enables Multi-Generational LRU support in the Linux kernel; Container-Optimized OS enables MGLRU support in the Linux kernel.

## Extended Definition

Enables Multi-Generational LRU support in the Linux kernel; Container-Optimized OS enables MGLRU support in the Linux kernel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS enables the following EXT4-related features: Support for the EXT4 filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used EXT4 features enabled: CONFIG EXT4 FS=y CONFIG EXT4 USE FOR EXT2=y CONFIG EXT4 FS POSIX ACL=y CONFIG EXT4 FS SECURITY=y CONFIG JBD2=y e2fsprogs package : The e2fsprogs package contains several critical user space utilities available for the EXT4 filesystem (for example, mkfs and fsck ).
- Container-Optimized OS enables the following XFS-related features: Support for the XFS filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used XFS features enabled: CONFIG XFS FS=y CONFIG XFS SUPPORT V4=y CONFIG XFS QUOTA=y CONFIG XFS POSIX ACL=y xfsprogs package : The xfsprogs package contains several critical user space utilities available for the XFS filesystem (for example, mkfs and fsck ).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Supported filesystems Stay organized with collections Save and categorize content based on your preferences.
- XFS filesystem Container-Optimized OS comes with a fully-supported XFS filesystem starting from COS M105.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- For advanced scenarios where you can deploy multiple containers and configure Docker options using cloud-init , you can create a Compute Engine instance with your choice of Container-Optimized OS image, and then proceed to configure the container as needed.
- Creating an instance for advanced scenarios Use this method to select a specific Container-Optimized OS image, to deploy multiple containers, and to use cloud-init for advanced configuration.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:56:31.206Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Hardware-optimized SHA256 algorithms"
feature_slug: "hardware-optimized-sha256-algorithms"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
keywords:
  - "hardware"
  - "optimized"
  - "sha256"
  - "algorithms"
  - "container"
  - "os"
  - "enables"
  - "x86"
---

# Hardware-optimized SHA256 algorithms

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS enables hardware-optimized SHA256 algorithms on supported x86 and ARM64 machines; Container-Optimized OS supports hardware-optimized SHA256 acceleration on eligible x86 and ARM64 machines.

## Extended Definition

Container-Optimized OS enables hardware-optimized SHA256 algorithms on supported x86 and ARM64 machines; Container-Optimized OS supports hardware-optimized SHA256 acceleration on eligible x86 and ARM64 machines.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)

## Supporting Pages

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.
- When using Container-Optimized OS, be aware of the partitioning if you run your own services that have certain expectations about the file system layout outside of containers.
- Since /etc/ is stateless on Container-Optimized OS, you cannot use /etc/fstab to automatically fsck (file system consistency check) and mount the disks on boot.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.
- This document explains what the CIS Benchmark is, how the benchmark relates to Container-Optimized OS (COS), how to audit the status of compliance in the instance and how to troubleshoot in case of failure.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- Features and Benefits Container-Optimized OS provides the following benefits: Run Containers Out of the Box : Container-Optimized OS instances come pre-installed with the Docker and containerd runtimes and cloud-init .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Container-Optimized OS Overview Stay organized with collections Save and categorize content based on your preferences.


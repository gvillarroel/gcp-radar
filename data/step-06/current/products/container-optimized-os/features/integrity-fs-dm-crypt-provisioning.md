---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.077Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "integrity-fs dm-crypt provisioning"
feature_slug: "integrity-fs-dm-crypt-provisioning"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "integrity"
  - "fs"
  - "dm"
  - "crypt"
  - "provisioning"
  - "supports"
  - "creating"
  - "devices"
---

# integrity-fs dm-crypt provisioning

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Supports creating dm-crypt devices for integrity-fs; integrity-fs supports reliable dm-crypt device creation during provisioning.

## Extended Definition

Supports creating dm-crypt devices for integrity-fs; integrity-fs supports reliable dm-crypt device creation during provisioning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- For more information about how to use cloud-init on Container-Optimized OS VM instances, see the creating and configuring instances page.
- The output from the command shows the GPU devices information, such as devices state and driver version.
- This is to ensure the integrity of the Container-Optimized OS kernel and reduce the attack surface.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Creating and configuring instances Stay organized with collections Save and categorize content based on your preferences.
- Creating an instance for advanced scenarios Use this method to select a specific Container-Optimized OS image, to deploy multiple containers, and to use cloud-init for advanced configuration.
- Creating a simple instance Use this method to deploy a single container on a VM using the latest version of Container-Optimized OS.
- Creating an instance You can create an instance using the Google Cloud console, gcloud CLI, or the API.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- The disks can be mounted by creating a subdirectory under /mnt/disks directory.
- The root file system is mounted as read-only to protect system integrity.


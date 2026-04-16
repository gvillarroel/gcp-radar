---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.077Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "integrity-fs disk resize and dm-clone support"
feature_slug: "integrity-fs-disk-resize-and-dm-clone-support"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "integrity"
  - "fs"
  - "disk"
  - "resize"
  - "dm"
  - "clone"
  - "extends"
  - "supports"
---

# integrity-fs disk resize and dm-clone support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Extends integrity-fs with disk resize and dm-clone support; integrity-fs supports disk resizing and dm-clone operations.

## Extended Definition

Extends integrity-fs with disk resize and dm-clone support; integrity-fs supports disk resizing and dm-clone operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Create a script file using the following contents: #cloud-config bootcmd : - fsck.ext4 -tvy /dev/ DEVICE ID - mkdir -p /mnt/disks/ MNT DIR - mount -t ext4 -o ... /dev/ DEVICE ID /mnt/disks/ MNT DIR Replace the following: DEVICE ID : the device ID of the disk that you want to format and mount.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For example: POST https://compute.googleapis.com/compute/v1/projects/ project-id /zones/ compute-zone /instances { 'machineType': 'zones/ compute-zone /machineTypes/ machine-type-name ', 'name': ' instance-name ', 'networkInterfaces': [ { 'accessConfigs': [ { 'type': 'ONE TO ONE NAT', 'name': 'External NAT' } ], 'network': 'global/networks/default' } ], 'disks': [ { 'type': 'PERSISTENT', 'boot': true, 'autoDelete': true, 'initializeParams': { 'sourceImage': 'projects/cos-cloud/global/images/ image-name ' } } ] } Configuring an instance In some cases, you might want to do additional configuration when the instance boots.
- For example: mounting a PD. bootcmd : - fsck.ext4 -tvy /dev/[DEVICE ID] - mkdir -p /mnt/disks/[MNT DIR] - mount -t ext4 -O ... /dev/[DEVICE ID] /mnt/disks/[MNT DIR] Note: Using systemctl enable in the runcmd section of cloud-init will not work as intended.
- See Disks and Filesystem for more information on Container-Optimized OS's filesystem.
- In the Boot disk section, select a Container-Optimized OS image.


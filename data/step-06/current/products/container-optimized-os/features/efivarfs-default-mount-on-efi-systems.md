---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.087Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "efivarfs default mount on EFI systems"
feature_slug: "efivarfs-default-mount-on-efi-systems"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
keywords:
  - "efivarfs"
  - "default"
  - "mount"
  - "efi"
  - "systems"
  - "enabled"
  - "now"
---

# efivarfs default mount on EFI systems

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

EFI-enabled systems now mount efivarfs by default.

## Extended Definition

EFI-enabled systems now mount efivarfs by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The previous example can be expanded to collect usage statistics and crash dump collection with the following command: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename \ --metadata=cos-metrics-enabled=true Other metadata flags Metadata Key Description Default Behavior cos-update-strategy Specifies automatic update behavior.
- If enabled, the behavior depends on the release channel: cos-dev and cos-beta: Updates from latest OS version in the corresponding image family LTS milestone and cos-stable: Updates from latest OS version from the same milestone Milestones < 117: Enabled by default Milestones >= 117: Disabled by default cos-metrics-enabled Enables crash dump collection.
- Disabled by default Caution: Enabling the cos-metrics-enabled setting permits collection of some crash reports that help Google improve the cos node image.
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS enables the following EXT4-related features: Support for the EXT4 filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used EXT4 features enabled: CONFIG EXT4 FS=y CONFIG EXT4 USE FOR EXT2=y CONFIG EXT4 FS POSIX ACL=y CONFIG EXT4 FS SECURITY=y CONFIG JBD2=y e2fsprogs package : The e2fsprogs package contains several critical user space utilities available for the EXT4 filesystem (for example, mkfs and fsck ).
- Container-Optimized OS enables the following XFS-related features: Support for the XFS filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used XFS features enabled: CONFIG XFS FS=y CONFIG XFS SUPPORT V4=y CONFIG XFS QUOTA=y CONFIG XFS POSIX ACL=y xfsprogs package : The xfsprogs package contains several critical user space utilities available for the XFS filesystem (for example, mkfs and fsck ).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Supported filesystems Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the filesystems available in Container-Optimized OS.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, several other mounts are non-executable by default.
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.


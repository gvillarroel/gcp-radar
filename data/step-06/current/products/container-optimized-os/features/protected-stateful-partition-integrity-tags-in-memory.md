---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.095Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "protected stateful partition integrity tags in memory"
feature_slug: "protected-stateful-partition-integrity-tags-in-memory"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "protected"
  - "stateful"
  - "partition"
  - "integrity"
  - "tags"
  - "memory"
  - "kernel"
  - "command"
---

# protected stateful partition integrity tags in memory

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

A kernel command-line option can move protected stateful partition integrity tags into memory; Container-Optimized OS adds a kernel command-line option to move protected stateful partition integrity tags into memory.

## Extended Definition

A kernel command-line option can move protected stateful partition integrity tags into memory; Container-Optimized OS adds a kernel command-line option to move protected stateful partition integrity tags into memory.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- However, home directories and /mnt/stateful partition are persistent and writable.
- Stateful partitions , which are writable and stateful.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- This is to ensure the integrity of the Container-Optimized OS kernel and reduce the attack surface.
- To check all GPUs attached to your current Container-Optimized OS VM instances, run the following command: gcloud compute instances describe INSTANCE NAME \ --project= PROJECT ID \ --zone ZONE \ --format="value(guestAccelerators)" Replace the following: INSTANCE NAME : The name of the new VM instance.
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.


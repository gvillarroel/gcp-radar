---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.028Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Automatic RDMA kernel module loading for CX-8 devices"
feature_slug: "automatic-rdma-kernel-module-loading-for-cx-8-devices"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
keywords:
  - "automatic"
  - "rdma"
  - "kernel"
  - "module"
  - "loading"
  - "cx"
  - "devices"
  - "container"
---

# Automatic RDMA kernel module loading for CX-8 devices

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected.

## Extended Definition

Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.

### Automatic updates \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The image ships with the automatic updates feature enabled; this means that a default Container-Optimized OS instance always downloads the latest OS version and installs it on the passive partition soon after it's released.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Automatic updates Stay organized with collections Save and categorize content based on your preferences.
- Changes to automatic update behavior The Container-Optimized OS team is actively working on improving our backend infrastructure that makes automatic updates possible.
- Users running production workloads that are sensitive to kernel upgrades and require controlled qualification and rollout should also disable automatic updates.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- The Container-Optimized OS kernel is locked down; you'll be unable to install third-party kernel modules or drivers.
- Automatic Updates : Container-Optimized OS instances are configured to automatically download weekly updates in the background; only a reboot is necessary to use the latest updates.
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.


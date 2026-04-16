---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.042Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Automatic RDMA kernel module loading for CX-8"
feature_slug: "automatic-rdma-kernel-module-loading-for-cx-8"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
keywords:
  - "automatic"
  - "rdma"
  - "kernel"
  - "module"
  - "loading"
  - "cx"
  - "container"
  - "optimized"
---

# Automatic RDMA kernel module loading for CX-8

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected; Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected.

## Extended Definition

Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected; Container-Optimized OS automatically loads RDMA kernel modules when CX-8 devices are detected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Automatic updates Container-Optimized OS's automatic updates feature allows timely delivery of security patches to running VMs.

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
- Enable or disable automatic updates In milestone 117 and later, the automatic updates feature is disabled by default on all Container-Optimized OS images.


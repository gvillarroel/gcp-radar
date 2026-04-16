---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.066Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Intel TDX support"
feature_slug: "intel-tdx-support"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools"
keywords:
  - "intel"
  - "tdx"
  - "container"
  - "optimized"
  - "os"
  - "backports"
  - "upstream"
  - "kernel"
---

# Intel TDX support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS backports upstream kernel patches to enable Intel Trust Domain Extensions support; Container-Optimized OS backports upstream kernel patches to enable Intel Trust Domain Extensions support.

## Extended Definition

Container-Optimized OS backports upstream kernel patches to enable Intel Trust Domain Extensions support; Container-Optimized OS backports upstream kernel patches to enable Intel Trust Domain Extensions support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools)

## Supporting Pages

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.
- This is to ensure the integrity of the Container-Optimized OS kernel and reduce the attack surface.

### Use debugging tools \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- This user guide explains how to collect kernel crash dumps on GKE nodes with Container-Optimized OS or Container-Optimized OS instances created from Compute Engine.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Use debugging tools Stay organized with collections Save and categorize content based on your preferences.
- Run the perf tool on Container-Optimized OS By default, perf is installed on Container-Optimized OS.
- This page explains tools that you can use to debug Container-Optimized OS.


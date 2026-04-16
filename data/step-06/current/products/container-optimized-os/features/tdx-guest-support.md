---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.096Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "TDX guest support"
feature_slug: "tdx-guest-support"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "tdx"
  - "guest"
  - "linux"
  - "kernel"
  - "container"
  - "optimized"
  - "os"
  - "supports"
---

# TDX guest support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

The Linux kernel in Container-Optimized OS supports Intel TDX guests; Container-Optimized OS enables TDX guest support in the Linux kernel.

## Extended Definition

The Linux kernel in Container-Optimized OS supports Intel TDX guests; Container-Optimized OS enables TDX guest support in the Linux kernel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Configuring instances with user-defined guest policies \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example that shows how users can use assignment and recipes features of guest policies to create a file on instances located at us-central1-a. assignment : zones : - us-central1-a recipes : - name : recipe-runscript desiredState : INSTALLED installSteps : - scriptRun : interpreter : SHELL script : touch /tmp/TOUCH FILE Note: While it is optional to provide an interpreter on other distros, Container-Optimized OS requires interpreter to execute the given script.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring instances with user-defined guest policies Stay organized with collections Save and categorize content based on your preferences.
- You can use OS Config's guest policies to configure your instance. packages and packageRepositories features of guest policies are not supported on Container-Optimized OS.
- Note: While recipes are run once-per-instance on other distros, on Container-Optimized OS, recipes are run on every boot.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Additionally, Container-Optimized OS supports security features like seccomp and AppArmor that make it possible to enforce finer grained security policies.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- To check all GPUs attached to your current Container-Optimized OS VM instances, run the following command: gcloud compute instances describe INSTANCE NAME \ --project= PROJECT ID \ --zone ZONE \ --format="value(guestAccelerators)" Replace the following: INSTANCE NAME : The name of the new VM instance.
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.


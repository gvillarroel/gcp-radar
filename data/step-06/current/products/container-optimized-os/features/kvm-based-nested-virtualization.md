---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.103Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "KVM-based nested virtualization"
feature_slug: "kvm-based-nested-virtualization"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
keywords:
  - "kvm"
  - "based"
  - "nested"
  - "virtualization"
  - "container"
  - "optimized"
  - "os"
  - "enables"
---

# KVM-based nested virtualization

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS enables KVM-based nested virtualization on x86; Container-Optimized OS enables KVM-based nested virtualization on x86.

## Extended Definition

Container-Optimized OS enables KVM-based nested virtualization on x86; Container-Optimized OS enables KVM-based nested virtualization on x86.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)

## Supporting Pages

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- You can also see all available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images --filter = "name 'cos-arm64- '" The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY Arm-based Container-Optimized OS images share the same versioning scheme and LTS milestone lifecycle with x86-based images.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Using Arm-based Container-Optimized OS images Stay organized with collections Save and categorize content based on your preferences.
- Differences between Arm and x86 images The Arm-based and x86-based Container-Optimized OS images share the same source code , but the build and compile configurations are different.
- This means that an Arm-based Container-Optimized OS image might not be functionally identical with a x86-based Container-Optimized OS image even if they have the same version.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Security Overview Stay organized with collections Save and categorize content based on your preferences.
- OS Security Based on Chromium OS , Container-Optimized OS from Google implements several security design principles to provide a well-configured platform for running production services.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Using Cloud Logging with Container-Optimized OS Stay organized with collections Save and categorize content based on your preferences.
- However, if you have a custom logging configuration, you might experience breakage when migrating workloads to images that are based on a different architecture or to a newer version of Container-Optimized OS.
- Logging agent configuration compatibility The logging agent is a fluentd-based container on x86-based Container-Optimized OS images and a fluent-bit binary on Arm-based Container-Optimized OS images.
- Selecting the logging agent x86-based Container-Optimized OS 105 and 109 images ship two implementations of the logging agent: fluentd (legacy) and fluent-bit.


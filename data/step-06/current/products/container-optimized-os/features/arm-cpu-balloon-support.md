---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.044Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "ARM CPU balloon support"
feature_slug: "arm-cpu-balloon-support"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "arm"
  - "cpu"
  - "balloon"
  - "container"
  - "optimized"
  - "os"
  - "supports"
  - "ballooning"
---

# ARM CPU balloon support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports CPU ballooning on ARM CPUs.

## Extended Definition

Container-Optimized OS supports CPU ballooning on ARM CPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Securing containers with AppArmor \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You can also specify unconfined with the apparmor option to indicate that the container is to be run with no security profile, as in the following example: docker run --rm -it --security-opt apparmor=unconfined debian:jessie bash -i Viewing the active AppArmor security profiles You can see what AppArmor profile, if any, applies to the processes on your Container-Optimized OS instance by inspecting the /proc/<pid>/attr/current file, where <pid> is the process ID.
- To ensure that your custom security profile is present when your Container-Optimized OS instance boots, and remains persistent across reboots, you can use cloud-init to install the profile in /etc/apparmor.d .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Securing containers with AppArmor Stay organized with collections Save and categorize content based on your preferences.
- Using the default Docker AppArmor security profile When you start a container on your Container-Optimized OS instance, the system automatically applies the docker-default AppArmor security profile.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You can also see all available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images --filter = "name 'cos-arm64- '" The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY Arm-based Container-Optimized OS images share the same versioning scheme and LTS milestone lifecycle with x86-based images.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Using Arm-based Container-Optimized OS images Stay organized with collections Save and categorize content based on your preferences.
- Differences between Arm and x86 images The Arm-based and x86-based Container-Optimized OS images share the same source code , but the build and compile configurations are different.
- This means that an Arm-based Container-Optimized OS image might not be functionally identical with a x86-based Container-Optimized OS image even if they have the same version.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Container-Optimized OS supports security features like seccomp and AppArmor that make it possible to enforce finer grained security policies.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.


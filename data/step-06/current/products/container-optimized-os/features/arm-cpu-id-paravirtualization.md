---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.042Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "ARM CPU ID paravirtualization"
feature_slug: "arm-cpu-id-paravirtualization"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig"
keywords:
  - "arm"
  - "cpu"
  - "id"
  - "paravirtualization"
  - "container"
  - "optimized"
  - "os"
  - "supports"
---

# ARM CPU ID paravirtualization

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports guest paravirtualization of CPU IDs on ARM machines.

## Extended Definition

Container-Optimized OS supports guest paravirtualization of CPU IDs on ARM machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)

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

### "Configuring instances with user-defined guest policies \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example that shows how users can use assignment and recipes features of guest policies to create a file on instances located at us-central1-a. assignment : zones : - us-central1-a recipes : - name : recipe-runscript desiredState : INSTALLED installSteps : - scriptRun : interpreter : SHELL script : touch /tmp/TOUCH FILE Note: While it is optional to provide an interpreter on other distros, Container-Optimized OS requires interpreter to execute the given script.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring instances with user-defined guest policies Stay organized with collections Save and categorize content based on your preferences.
- You can use OS Config's guest policies to configure your instance. packages and packageRepositories features of guest policies are not supported on Container-Optimized OS.
- Note: While recipes are run once-per-instance on other distros, on Container-Optimized OS, recipes are run on every boot.


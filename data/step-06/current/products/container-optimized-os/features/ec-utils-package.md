---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.073Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "ec-utils Package"
feature_slug: "ec-utils-package"
latest_feature_date: "2024-09-09"
deprecation_date: "2024-09-09"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox"
keywords:
  - "ec"
  - "utils"
  - "package"
  - "provides"
  - "container"
  - "optimized"
  - "os"
  - "deprecated"
---

# ec-utils Package

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Provides the ec-utils package in Container-Optimized OS; deprecated on 2024-09-09.

## Extended Definition

Provides the ec-utils package in Container-Optimized OS; deprecated on 2024-09-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)

## Supporting Pages

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- The lifecycle of a Container-Optimized OS LTS milestone looks as follows: Stage Duration Description Development 6 months Active development during which the milestone receives major package upgrades, new features.
- For example, the following command shows currently active LTS image families: gcloud compute images list --no-standard-images --project=cos-cloud grep lts cos-101-17162-40-16 cos-cloud cos-101-lts READY cos-89-16108-766-3 cos-cloud cos-89-lts READY cos-93-16623-295-5 cos-cloud cos-93-lts READY cos-97-16919-189-3 cos-cloud cos-97-lts READY cos-arm64-101-17162-40-16 cos-cloud cos-arm64-101-lts READY Lifecycle of an LTS milestone A new Container-Optimized OS LTS milestone is introduced approximately every 6 months on its own image family named cos-[MILESTONE]-lts (x86) and cos-arm64-[MILESTONE]-lts (Arm).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Versioning scheme Stay organized with collections Save and categorize content based on your preferences.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Since Container-Optimized OS is optimized to run containers and containers package their own dependencies, we can trim unnecessary packages and thus minimize the OS attack surface.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.
- Security-centric defaults Container-Optimized OS provides another level of hardening by providing security-minded default values for several features.
- This page provides an overview of the security features of Container-Optimized OS running on Google Cloud.

### "Debugging node issues using toolbox \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Although Container-Optimized OS does not include a package manager, you can use the pre-installed toolbox utility to install any additional packages or tools you require.
- You might need to install additional packages or tools on Container-Optimized OS for certain tasks, such as debugging.
- TOOLBOX DOCKER IMAGE = "gcr.io/cos-cloud/toolbox" TOOLBOX DOCKER TAG = "v20220722" TOOLBOX DOCKER IMAGE TARBALL = <var> [ location/to/tarball ] </var> TOOLBOX BIND = "--bind=/:/media/root/ --bind=/mnt/disks/:/media/root/mnt/disks/ --bind=/var/:/media/root/var/ --bind=/home:/media/root/home/" : ${ USER :=root } USER@cos-dev $ toolbox Install and run tools from toolbox Once you've invoked the toolbox utility to start the shell, you can use apt-get inside the resulting container to install packages.
- Access toolbox directory from the host USER@cos-dev $ sudo cp some-file /var/lib/toolbox/USER-gcr.io cos-cloud toolbox-v20220722/root Run a command inside toolbox and save its output in your home directory USER@cos-dev $ toolbox strace -o /media/root/ $HOME /ls.strace ls USER@cos-dev $ more $HOME /ls.strace Clean up disk space used by toolbox The toolbox installation consumes approximately 2-3 GB of disk space in /var (disk usage varies with the Container-Optimized OS version).


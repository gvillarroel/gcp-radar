---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.082Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "OpenSSH Package Revision Banner"
feature_slug: "openssh-package-revision-banner"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "openssh"
  - "package"
  - "revision"
  - "banner"
  - "displays"
  - "number"
  - "ssh"
---

# OpenSSH Package Revision Banner

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Displays the OpenSSH package revision number in the SSH banner.

## Extended Definition

Displays the OpenSSH package revision number in the SSH banner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- The lifecycle of a Container-Optimized OS LTS milestone looks as follows: Stage Duration Description Development 6 months Active development during which the milestone receives major package upgrades, new features.
- In this file, the value of the VERSION ID (for example, VERSION ID=81 ) represents the milestone and the value of the BUILD ID field (for example, BUILD ID=12871.1160.0 ) represents the build number.
- The milestone and build number of the Container-Optimized OS you are using can be identified by inspecting the /etc/os-release file.
- Milestones and Build Numbers Major versions of Container-Optimized OS images are identified using what we call milestones .

### "Debugging node issues using toolbox \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- TOOLBOX DOCKER IMAGE = "gcr.io/cos-cloud/toolbox" TOOLBOX DOCKER TAG = "v20220722" TOOLBOX DOCKER IMAGE TARBALL = <var> [ location/to/tarball ] </var> TOOLBOX BIND = "--bind=/:/media/root/ --bind=/mnt/disks/:/media/root/mnt/disks/ --bind=/var/:/media/root/var/ --bind=/home:/media/root/home/" : ${ USER :=root } USER@cos-dev $ toolbox Install and run tools from toolbox Once you've invoked the toolbox utility to start the shell, you can use apt-get inside the resulting container to install packages.
- On the host, the root directory of toolbox is accessible through the following path: /var/lib/toolbox/USER-gcr.io cos-cloud toolbox-VERSION/root where USER is your username and VERSION is the toolbox version number (for example, v20220722 ).
- Although Container-Optimized OS does not include a package manager, you can use the pre-installed toolbox utility to install any additional packages or tools you require.
- You might need to install additional packages or tools on Container-Optimized OS for certain tasks, such as debugging.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Since Container-Optimized OS is optimized to run containers and containers package their own dependencies, we can trim unnecessary packages and thus minimize the OS attack surface.
- Continuous vulnerability (CVE) scanning and response A CVE-scanning system alerts us whenever a vulnerability is discovered in the kernel or any package of the OS.
- Built from source at Google Each package in Container-Optimized OS, including the Linux kernel itself, is built from source from ChromiumOS code repositories.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.083Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "versioned NVIDIA driver packages"
feature_slug: "versioned-nvidia-driver-packages"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox"
keywords:
  - "versioned"
  - "nvidia"
  - "driver"
  - "packages"
  - "separates"
  - "major"
  - "version"
  - "installation"
---

# versioned NVIDIA driver packages

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Separates NVIDIA driver packages by major version for installation and management; NVIDIA driver packages are split into separate packages for each major version.

## Extended Definition

Separates NVIDIA driver packages by major version for installation and management; NVIDIA driver packages are split into separate packages for each major version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- Make the driver installation path executable by re-mounting it. sudo mount --bind /var/lib/nvidia /var/lib/nvidia sudo mount -o remount,exec /var/lib/nvidia /var/lib/nvidia/bin/nvidia-smi Configure containers to consume GPUs After the GPU drivers are installed, you can configure containers to consume GPUs.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A tiered testing setup like this should help to minimize issues when rolling out newer major versions of Container-Optimized OS images to your production environment.
- Milestones and Build Numbers Major versions of Container-Optimized OS images are identified using what we call milestones .
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- The lifecycle of a Container-Optimized OS LTS milestone looks as follows: Stage Duration Description Development 6 months Active development during which the milestone receives major package upgrades, new features.

### "Debugging node issues using toolbox \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access toolbox directory from the host USER@cos-dev $ sudo cp some-file /var/lib/toolbox/USER-gcr.io cos-cloud toolbox-v20220722/root Run a command inside toolbox and save its output in your home directory USER@cos-dev $ toolbox strace -o /media/root/ $HOME /ls.strace ls USER@cos-dev $ more $HOME /ls.strace Clean up disk space used by toolbox The toolbox installation consumes approximately 2-3 GB of disk space in /var (disk usage varies with the Container-Optimized OS version).
- For example, to install and run the strace utility to trace the execution of the Docker daemon, you can do the following: USER@cos-dev $ toolbox apt-get install -y strace USER@cos-dev $ toolbox strace -p pidof dockerd The Google Cloud CLI is pre-installed in toolbox: USER@cos-dev $ toolbox root@cos-dev: # which gcloud /google-cloud-sdk/bin/gcloud View installed components root@cos-dev: # gcloud components list Your current gcloud CLI version is: 287 .0.0 The latest available version is: 295 .0.0 ...
- TOOLBOX DOCKER IMAGE = "gcr.io/cos-cloud/toolbox" TOOLBOX DOCKER TAG = "v20220722" TOOLBOX DOCKER IMAGE TARBALL = <var> [ location/to/tarball ] </var> TOOLBOX BIND = "--bind=/:/media/root/ --bind=/mnt/disks/:/media/root/mnt/disks/ --bind=/var/:/media/root/var/ --bind=/home:/media/root/home/" : ${ USER :=root } USER@cos-dev $ toolbox Install and run tools from toolbox Once you've invoked the toolbox utility to start the shell, you can use apt-get inside the resulting container to install packages.
- To free disk space used by toolbox, perform the following tasks depending on your Container-Optimized OS version: remove files in /var/lib/toolbox sudo rm -rf /var/lib/toolbox/ remove container artifacts sudo ctr images rm $IMAGE NAME You can run sudo ctr images ls -q to determine this value.


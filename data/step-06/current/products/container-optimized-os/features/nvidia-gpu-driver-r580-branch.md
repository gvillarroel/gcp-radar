---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.047Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA GPU driver R580 branch"
feature_slug: "nvidia-gpu-driver-r580-branch"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
keywords:
  - "nvidia"
  - "gpu"
  - "driver"
  - "r580"
  - "branch"
  - "adds"
  - "updates"
  - "label"
---

# NVIDIA GPU driver R580 branch

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Adds the NVIDIA GPU driver R580 branch and updates the latest GPU driver label to version 580.65.06; Adds the NVIDIA GPU driver R580 branch and updates the latest GPU driver label to version 580.65.06.

## Extended Definition

Adds the NVIDIA GPU driver R580 branch and updates the latest GPU driver label to version 580.65.06; Adds the NVIDIA GPU driver R580 branch and updates the latest GPU driver label to version 580.65.06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NVIDIA driver branch : Installs the latest stable driver within a specific NVIDIA branch to stay current with security updates and bug fixes within that branch.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.

### Automatic updates \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Configure auto-updates on a new instance Create a new instance with automatic updates enabled: gcloud compute instances create INSTANCE NAME \ --metadata cos-update-strategy = update enabled Create a new instance with automatic updates disabled: gcloud compute instances create INSTANCE NAME \ --metadata cos-update-strategy = update disabled Configure auto-updates on an existing instance Enable automatic updates for an existing instance: gcloud compute instances add-metadata INSTANCE NAME \ --metadata cos-update-strategy = update enabled Disable automatic updates for an existing instance: gcloud compute instances add-metadata INSTANCE NAME \ --metadata cos-update-strategy = update disabled Configure auto-updates on all instances in a project Starting from milestone 97 , you can enable or disable auto-updates for all instances in a project using metadata flags in project metadata.
- The affected list of images are as followings: These images cannot be updated to latest versions: On Milestone 77: images prior to cos-77-12371-1000-0 On Milestone 81: images prior to cos-81-12871-1000-0 On Milestone 85: images prior to cos-85-13310-1000-0 On Milestone 86: images prior to cos-dev-86-15053-0-0 These images will no longer receive any updates: All milestones before 77, including any previously deprecated milestones.
- Enable updates for all instances in a project: gcloud compute project-info add-metadata \ --metadata cos-update-strategy = update enabled Disable updates for all instances in a project: gcloud compute project-info add-metadata \ --metadata cos-update-strategy = update disabled Note: Metadata flags defined at the instance level take precedence over metadata flags defined at project level.
- The image ships with the automatic updates feature enabled; this means that a default Container-Optimized OS instance always downloads the latest OS version and installs it on the passive partition soon after it's released.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Long Term Supported (LTS) milestones Milestones that are intended for production use and supported for longer duration are labelled as LTS (for Long Term Supported).
- Before being labeled as LTS, the milestone undergoes approximately 6 months of feature development and 2 months of extensive testing and stabilization.
- Each new milestone indicates the start of a new development cycle (a branch in our code) and may introduce new features and other major changes.
- Over the lifetime of a Container-Optimized OS milestone, we may release several updates containing bug fixes, security fixes and other changes.


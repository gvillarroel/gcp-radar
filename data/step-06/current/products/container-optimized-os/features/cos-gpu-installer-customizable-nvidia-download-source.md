---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.086Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer customizable NVIDIA download source"
feature_slug: "cos-gpu-installer-customizable-nvidia-download-source"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
  - "https://docs.cloud.google.com/container-optimized-os/docs/resources"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "customizable"
  - "nvidia"
  - "download"
  - "source"
  - "can"
---

# cos-gpu-installer customizable NVIDIA download source

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer can customize NVIDIA installer runfile downloads from Google Cloud Storage using bucket and prefix flags.

## Extended Definition

Cos-gpu-installer can customize NVIDIA installer runfile downloads from Google Cloud Storage using bucket and prefix flags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- [https://docs.cloud.google.com/container-optimized-os/docs/resources](https://docs.cloud.google.com/container-optimized-os/docs/resources)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- For earlier Container-Optimized OS release milestones, use the cos-gpu-installer open source tool to manually install GPU drivers.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, cos-src in your home directory: mkdir $HOME/cos-src cd $HOME/cos-src Now download source code using the following commands: repo init https://cos.googlesource.com/cos/manifest.git repo sync Note: Depending on your network speed, downloading the source code may take several minutes.
- Obtaining the Container-Optimized OS source code You can download the source code for Container-Optimized OS by using the repo tool that is included in depot tools .
- You can use the cros sdk tool included in depot tools to create and enter a chroot that's ready for Container-Optimized OS compilation by running the following command in the source directory that you created in the previous step: cd $HOME/cos-src cros sdk --enter Once inside chroot , you can build the disk image.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Building Container-Optimized OS from source Stay organized with collections Save and categorize content based on your preferences.

### Resources \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/resources](https://docs.cloud.google.com/container-optimized-os/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Container-Optimized OS Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Release Notes and Source Code Access source code This page documents instructions about where to find and access source code for Container-Optimized OS.


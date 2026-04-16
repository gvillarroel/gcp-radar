---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.050Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "IMEX channel character device for GB200 GPUs"
feature_slug: "imex-channel-character-device-for-gb200-gpus"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
keywords:
  - "imex"
  - "channel"
  - "character"
  - "device"
  - "gb200"
  - "gpus"
  - "injects"
---

# IMEX channel character device for GB200 GPUs

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Injects an IMEX channel character device for GB200 GPUs.

## Extended Definition

Injects an IMEX channel character device for GB200 GPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Install NVIDIA GPU device drivers After you create an instance with one or more GPUs, your system requires device drivers so that your applications can access the device.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Create a script file using the following contents: #cloud-config bootcmd : - fsck.ext4 -tvy /dev/ DEVICE ID - mkdir -p /mnt/disks/ MNT DIR - mount -t ext4 -o ... /dev/ DEVICE ID /mnt/disks/ MNT DIR Replace the following: DEVICE ID : the device ID of the disk that you want to format and mount.
- Follow the instructions on Formatting and mounting a persistent disk or Format and mount a local SSD device for the appropriate use-case.
- The following example mounts the disk DEVICE ID under the /mnt/disks directory.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- If enabled, the behavior depends on the release channel: cos-dev and cos-beta: Updates from latest OS version in the corresponding image family LTS milestone and cos-stable: Updates from latest OS version from the same milestone Milestones < 117: Enabled by default Milestones >= 117: Disabled by default cos-metrics-enabled Enables crash dump collection.
- For example: mounting a PD. bootcmd : - fsck.ext4 -tvy /dev/[DEVICE ID] - mkdir -p /mnt/disks/[MNT DIR] - mount -t ext4 -O ... /dev/[DEVICE ID] /mnt/disks/[MNT DIR] Note: Using systemctl enable in the runcmd section of cloud-init will not work as intended.


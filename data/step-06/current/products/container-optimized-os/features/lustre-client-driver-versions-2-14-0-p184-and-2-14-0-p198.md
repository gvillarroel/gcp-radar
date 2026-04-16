---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.055Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Lustre client driver versions 2.14.0_p184 and 2.14.0_p198"
feature_slug: "lustre-client-driver-versions-2-14-0-p184-and-2-14-0-p198"
latest_feature_date: "2025-07-24"
deprecation_date: "2025-07-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
keywords:
  - "lustre"
  - "client"
  - "driver"
  - "versions"
  - "14"
  - "p184"
  - "p198"
  - "container"
---

# Lustre client driver versions 2.14.0_p184 and 2.14.0_p198

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS support for Lustre client driver versions 2.14.0_p184 and 2.14.0_p198 is being removed; deprecated on 2025-07-24.

## Extended Definition

Container-Optimized OS support for Lustre client driver versions 2.14.0_p184 and 2.14.0_p198 is being removed; deprecated on 2025-07-24.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- Some GPU driver versions won't qualify for Container-Optimized OS, and the qualification timeline is not guaranteed.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- For Arm images of all versions and x86 images for Container-Optimized OS 109 and later, the logging agent is a built-in OS package called fluent-bit .
- A workaround is to not use gcplogs as a Docker logging driver, and to instead use the default driver as configured by Container-Optimized OS.
- The docker command that starts the logging agent is defined in the Container-Optimized OS source for stackdriver-logging systemd service .

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.
- When using Container-Optimized OS, be aware of the partitioning if you run your own services that have certain expectations about the file system layout outside of containers.
- Since /etc/ is stateless on Container-Optimized OS, you cannot use /etc/fstab to automatically fsck (file system consistency check) and mount the disks on boot.


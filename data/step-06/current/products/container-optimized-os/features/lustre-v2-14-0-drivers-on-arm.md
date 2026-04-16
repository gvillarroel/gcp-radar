---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.051Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Lustre v2.14.0 drivers on Arm"
feature_slug: "lustre-v2-14-0-drivers-on-arm"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
keywords:
  - "lustre"
  - "v2"
  - "14"
  - "drivers"
  - "arm"
  - "adds"
---

# Lustre v2.14.0 drivers on Arm

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Adds Arm support for Lustre v2.14.0 drivers.

## Extended Definition

Adds Arm support for Lustre v2.14.0 drivers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Make the driver installation path executable by re-mounting it. sudo mount --bind /var/lib/nvidia /var/lib/nvidia sudo mount -o remount,exec /var/lib/nvidia /var/lib/nvidia/bin/nvidia-smi Configure containers to consume GPUs After the GPU drivers are installed, you can configure containers to consume GPUs.
- Shell After you connect to your Container-Optimized OS VM instances , you can run the following command manually to install drivers: sudo cos-extensions install gpu Note: You need to run the preceding command on every VM reboot to configure GPU drivers.
- Restrictions Container-Optimized OS version restrictions Only Container-Optimized OS LTS release milestone 85 and later support the cos-extensions utility mentioned in the Installing NVIDIA GPU device drivers section.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A


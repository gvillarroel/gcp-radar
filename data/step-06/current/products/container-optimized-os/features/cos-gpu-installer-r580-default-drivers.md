---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.031Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer R580 default drivers"
feature_slug: "cos-gpu-installer-r580-default-drivers"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "r580"
  - "default"
  - "drivers"
  - "container"
  - "optimized"
---

# cos-gpu-installer R580 default drivers

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS configures cos-gpu-installer to use R580 drivers as the default GPU drivers.

## Extended Definition

Container-Optimized OS configures cos-gpu-installer to use R580 drivers as the default GPU drivers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For earlier Container-Optimized OS release milestones, use the cos-gpu-installer open source tool to manually install GPU drivers.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- To install a specific GPU driver version, run the following command: sudo cos-extensions install gpu -- -version= DRIVER VERSION Replace DRIVER VERSION with one of the following options: default : Installs the default driver designated by the Container-Optimized OS release.
- Shell After you connect to your Container-Optimized OS VM instances , you can run the following command manually to install drivers: sudo cos-extensions install gpu Note: You need to run the preceding command on every VM reboot to configure GPU drivers.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- Using Container-Optimized OS Container-Optimized OS is the default node OS Image in Kubernetes Engine and other Kubernetes deployments on Google Cloud Platform.
- Locked-down by default : Container-Optimized OS instances include a locked-down firewall and other security settings by default.
- The Container-Optimized OS kernel is locked down; you'll be unable to install third-party kernel modules or drivers.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Security-centric defaults Container-Optimized OS provides another level of hardening by providing security-minded default values for several features.
- Firewall By default, Container-Optimized OS is configured to drop all incoming TCP/UDP connections except SSH on port 22.
- Instance access By default, Container-Optimized OS does not contain any accessible user accounts.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.


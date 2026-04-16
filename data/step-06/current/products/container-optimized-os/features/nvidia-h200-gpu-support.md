---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.070Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA H200 GPU support"
feature_slug: "nvidia-h200-gpu-support"
latest_feature_date: "2024-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "nvidia"
  - "h200"
  - "gpu"
  - "container"
  - "optimized"
  - "os"
  - "supports"
  - "gpus"
---

# NVIDIA H200 GPU support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports NVIDIA H200 GPUs; Container-Optimized OS supports NVIDIA H200 GPUs.

## Extended Definition

Container-Optimized OS supports NVIDIA H200 GPUs; Container-Optimized OS supports NVIDIA H200 GPUs.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- To create a Container-Optimized OS VM that has attached NVIDIA T4, P4, P100, or V100 GPUs, see Create an N1 VM that has attached GPUs .
- To create a Container-Optimized OS VM that has attached NVIDIA H100, A100, or L4 GPUs, see Create an accelerator-optimized VM .
- For A3 Ultra accelerator-optimized machine types, NVIDIA H200 141GB GPUs are attached.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, Container-Optimized OS supports security features like seccomp and AppArmor that make it possible to enforce finer grained security policies.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.


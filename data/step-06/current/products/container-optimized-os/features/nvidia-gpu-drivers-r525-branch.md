---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.095Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA GPU drivers R525 branch"
feature_slug: "nvidia-gpu-drivers-r525-branch"
latest_feature_date: "2024-03-25"
deprecation_date: "2024-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy"
keywords:
  - "nvidia"
  - "gpu"
  - "drivers"
  - "r525"
  - "branch"
  - "was"
  - "deprecated"
  - "removed"
---

# NVIDIA GPU drivers R525 branch

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

The R525 branch of NVIDIA GPU drivers was deprecated and removed from Container-Optimized OS; The R525 branch of NVIDIA GPU drivers was deprecated and removed from Container-Optimized OS; deprecated on 2024-03-25.

## Extended Definition

The R525 branch of NVIDIA GPU drivers was deprecated and removed from Container-Optimized OS; The R525 branch of NVIDIA GPU drivers was deprecated and removed from Container-Optimized OS; deprecated on 2024-03-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Make the driver installation path executable by re-mounting it. sudo mount --bind /var/lib/nvidia /var/lib/nvidia sudo mount -o remount,exec /var/lib/nvidia /var/lib/nvidia/bin/nvidia-smi Configure containers to consume GPUs After the GPU drivers are installed, you can configure containers to consume GPUs.
- Restrictions Container-Optimized OS version restrictions Only Container-Optimized OS LTS release milestone 85 and later support the cos-extensions utility mentioned in the Installing NVIDIA GPU device drivers section.
- In this case, include /usr/local/cuda-XX.X/lib64 , which contains the NVIDIA CUDA-X libraries, and /usr/local/nvidia/lib64 , which contains the NVIDIA device drivers, in the LD LIBRARY PATH environment variable.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Deprecation N/A All images on the milestone are marked deprecated and the cos-[MILESTONE]-lts and cos-arm64-[MILESTONE]-lts are removed.
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- Each new milestone indicates the start of a new development cycle (a branch in our code) and may introduce new features and other major changes.
- Warning: Any image family API references to the deprecated image family will return errors and break any workflows depending on it.

### Support policy \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, we set the DEPRECATED flag on images in that milestone and those images stop appearing in the active list of images in the cos-cloud project.
- Deprecation At the end of a milestone's support window, the corresponding cos-[MILESTONE]-lts and cos-arm64-[MILESTONE]-lts families are deprecated.
- Warning: Any Image Family API references to the deprecated image family will return errors and break any workflows depending on it.
- Deprecated images are still accessible and usable when accessed directly by name using the images get API .


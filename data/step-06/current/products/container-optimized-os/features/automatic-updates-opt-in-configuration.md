---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.073Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Automatic updates opt-in configuration"
feature_slug: "automatic-updates-opt-in-configuration"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "automatic"
  - "updates"
  - "opt"
  - "configuration"
  - "os"
  - "now"
  - "require"
  - "explicit"
---

# Automatic updates opt-in configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Automatic OS updates now require explicit enablement through the cos-update-strategy metadata setting; Automatic OS updates now require explicit enablement through the cos-update-strategy metadata setting.

## Extended Definition

Automatic OS updates now require explicit enablement through the cos-update-strategy metadata setting; Automatic OS updates now require explicit enablement through the cos-update-strategy metadata setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### Automatic updates \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users running production workloads that are sensitive to kernel upgrades and require controlled qualification and rollout should also disable automatic updates.
- Configure auto-updates on a new instance Create a new instance with automatic updates enabled: gcloud compute instances create INSTANCE NAME \ --metadata cos-update-strategy = update enabled Create a new instance with automatic updates disabled: gcloud compute instances create INSTANCE NAME \ --metadata cos-update-strategy = update disabled Configure auto-updates on an existing instance Enable automatic updates for an existing instance: gcloud compute instances add-metadata INSTANCE NAME \ --metadata cos-update-strategy = update enabled Disable automatic updates for an existing instance: gcloud compute instances add-metadata INSTANCE NAME \ --metadata cos-update-strategy = update disabled Configure auto-updates on all instances in a project Starting from milestone 97 , you can enable or disable auto-updates for all instances in a project using metadata flags in project metadata.
- The image ships with the automatic updates feature enabled; this means that a default Container-Optimized OS instance always downloads the latest OS version and installs it on the passive partition soon after it's released.
- You can enable or disable automatic updates by setting the cos-update-strategy metadata on new instances, existing instances, or on all instances in a project, as described in the following sections.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- For example: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata cos-update-strategy=update disabled Starting from milestone 97 , you can also disable or enable automatic updates in project metadata: gcloud compute project-info add-metadata \ --metadata cos-update-strategy=update disabled Note: Metadata flags defined at instance level takes precedence over metadata flags defined at project level.
- You can also disable automatic updates on a running instance with systemctl : sudo systemctl stop update-engine sudo systemctl mask update-engine Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enabling or disabling automatic updates There are two ways to enable or disable automatic updates.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- Requirements Running GPUs on Container-Optimized OS VM instances has the following requirements: Container-Optimized OS x86 images: only x86-based Container-Optimized OS images support running GPUs.
- To run the installation scripts, the cos-extensions utility requires the https://www.googleapis.com/auth/devstorage.read only scope for communicating with the gcr.io ( cos-cloud ).


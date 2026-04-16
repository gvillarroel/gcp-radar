---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.099Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA kernel module load ordering"
feature_slug: "nvidia-kernel-module-load-ordering"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor"
keywords:
  - "nvidia"
  - "kernel"
  - "module"
  - "load"
  - "ordering"
  - "container"
  - "optimized"
  - "os"
---

# NVIDIA kernel module load ordering

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS uses corrected load ordering for the nvidia-modeset and nvidia-drm kernel modules; Container-Optimized OS uses corrected load ordering for the nvidia-modeset and nvidia-drm kernel modules.

## Extended Definition

Container-Optimized OS uses corrected load ordering for the nvidia-modeset and nvidia-drm kernel modules; Container-Optimized OS uses corrected load ordering for the nvidia-modeset and nvidia-drm kernel modules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Security Just like other kernel modules on Container-Optimized OS, GPU drivers are cryptographically signed and verified by keys that are built into the Container-Optimized OS kernel.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- The Container-Optimized OS kernel is locked down; you'll be unable to install third-party kernel modules or drivers.
- Automatic Updates : Container-Optimized OS instances are configured to automatically download weekly updates in the background; only a reboot is necessary to use the latest updates.
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.

### "Securing containers with AppArmor \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following script creates a file for a security profile called no-ping at /etc/apparmor.d/no raw net : cat > /etc/apparmor.d/no raw net <<EOF include <tunables/global> profile no-ping flags=(attach disconnected,mediate deleted) { #include <abstractions/base> network inet tcp, network inet udp, network inet icmp, deny network raw, deny network packet, file, mount, } EOF Once you've created the security profile file, you can use apparmor parser to load the profile into AppArmor: /sbin/apparmor parser --replace --write-cache /etc/apparmor.d/no raw net Once loaded, you can test the no-ping profile as follows: $ docker run --rm -i --security-opt apparmor = no-ping debian:jessie ping -c3 8 .8.8.8 The command creates a container with the no-ping security profile and attempts to run ping from within the container.
- You can also specify unconfined with the apparmor option to indicate that the container is to be run with no security profile, as in the following example: docker run --rm -it --security-opt apparmor=unconfined debian:jessie bash -i Viewing the active AppArmor security profiles You can see what AppArmor profile, if any, applies to the processes on your Container-Optimized OS instance by inspecting the /proc/<pid>/attr/current file, where <pid> is the process ID.
- To ensure that your custom security profile is present when your Container-Optimized OS instance boots, and remains persistent across reboots, you can use cloud-init to install the profile in /etc/apparmor.d .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Securing containers with AppArmor Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.106Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Executable GPU driver installation path via cos-extensions"
feature_slug: "executable-gpu-driver-installation-path-via-cos-extensions"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "executable"
  - "gpu"
  - "driver"
  - "installation"
  - "path"
  - "via"
  - "cos"
  - "extensions"
---

# Executable GPU driver installation path via cos-extensions

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS simplifies GPU driver installation by remounting the driver installation path as executable through cos-extensions.

## Extended Definition

Container-Optimized OS simplifies GPU driver installation by remounting the driver installation path as executable through cos-extensions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make the driver installation path executable by re-mounting it. sudo mount --bind /var/lib/nvidia /var/lib/nvidia sudo mount -o remount,exec /var/lib/nvidia /var/lib/nvidia/bin/nvidia-smi Configure containers to consume GPUs After the GPU drivers are installed, you can configure containers to consume GPUs.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Container-Optimized OS provides a built-in utility cos-extensions to simplify the NVIDIA driver installation process.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- The kernel verifies integrity root filesystem during boot up, and refuses to boot in case of errors. /home /var writable non-executable stateful These paths are meant for storing data that persists for the lifetime of the boot disk.
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .


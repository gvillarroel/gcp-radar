---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.105Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Toolbox registry compatibility"
feature_slug: "toolbox-registry-compatibility"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "toolbox"
  - "registry"
  - "compatibility"
  - "compatible"
  - "both"
  - "artifact"
  - "container"
---

# Toolbox registry compatibility

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Toolbox is compatible with both Artifact Registry and Google Container Registry.

## Extended Definition

Toolbox is compatible with both Artifact Registry and Google Container Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Debugging node issues using toolbox \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To free disk space used by toolbox, perform the following tasks depending on your Container-Optimized OS version: remove files in /var/lib/toolbox sudo rm -rf /var/lib/toolbox/ remove container artifacts sudo ctr images rm $IMAGE NAME You can run sudo ctr images ls -q to determine this value.
- TOOLBOX DOCKER IMAGE = "gcr.io/cos-cloud/toolbox" TOOLBOX DOCKER TAG = "v20220722" TOOLBOX DOCKER IMAGE TARBALL = <var> [ location/to/tarball ] </var> TOOLBOX BIND = "--bind=/:/media/root/ --bind=/mnt/disks/:/media/root/mnt/disks/ --bind=/var/:/media/root/var/ --bind=/home:/media/root/home/" : ${ USER :=root } USER@cos-dev $ toolbox Install and run tools from toolbox Once you've invoked the toolbox utility to start the shell, you can use apt-get inside the resulting container to install packages.
- Access toolbox directory from the host USER@cos-dev $ sudo cp some-file /var/lib/toolbox/USER-gcr.io cos-cloud toolbox-v20220722/root Run a command inside toolbox and save its output in your home directory USER@cos-dev $ toolbox strace -o /media/root/ $HOME /ls.strace ls USER@cos-dev $ more $HOME /ls.strace Clean up disk space used by toolbox The toolbox installation consumes approximately 2-3 GB of disk space in /var (disk usage varies with the Container-Optimized OS version).
- For example, assuming that you want toolbox to use fedora:latest as its container, you can run the following commands: USER@cos-dev $ echo "TOOLBOX DOCKER IMAGE=docker.io/library/fedora" > " ${ HOME } /.toolboxrc" USER@cos-dev $ echo "TOOLBOX DOCKER TAG=latest" >> " ${ HOME } /.toolboxrc" USER@cos-dev $ toolbox The /etc/default/toolbox file can be modified as shown in the following.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container Registry docker-credential-gcr configure-docker The following output appears: /home/username/.docker/config.json configured to use this credential helper To run an image from the registry, use the following command: Artifact Registry docker run --rm LOCATION -docker.pkg.dev/ your-project / repository / your-image Replace LOCATION with the location of your repository.
- Status: Downloaded newer image for gcr.io/google-containers/busybox:latest hello world Accessing private images in Artifact Registry or Container Registry Starting with milestone 60 releases, docker-credential-gcr is pre-installed in Container-Optimized OS images.
- Accessing public images in Container Registry or Artifact Registry Container Registry support is built in to the cos node image.
- It's the recommended way to access private images in Artifact Registry or Container Registry.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- The Container-Optimized OS team qualifies the supported GPU drivers against the Container-Optimized OS version before release to make sure they are compatible.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.


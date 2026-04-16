---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.076Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "igzip CLI tool"
feature_slug: "igzip-cli-tool"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "igzip"
  - "cli"
  - "tool"
  - "provides"
  - "command"
  - "line"
  - "compression"
  - "container"
---

# igzip CLI tool

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Provides the igzip command-line compression tool in Container-Optimized OS; Container-Optimized OS includes the igzip command-line compression tool.

## Extended Definition

Provides the igzip command-line compression tool in Container-Optimized OS; Container-Optimized OS includes the igzip command-line compression tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Debugging node issues using toolbox \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox](https://docs.cloud.google.com/container-optimized-os/docs/how-to/toolbox)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access toolbox directory from the host USER@cos-dev $ sudo cp some-file /var/lib/toolbox/USER-gcr.io cos-cloud toolbox-v20220722/root Run a command inside toolbox and save its output in your home directory USER@cos-dev $ toolbox strace -o /media/root/ $HOME /ls.strace ls USER@cos-dev $ more $HOME /ls.strace Clean up disk space used by toolbox The toolbox installation consumes approximately 2-3 GB of disk space in /var (disk usage varies with the Container-Optimized OS version).
- For example, assuming that you want toolbox to use fedora:latest as its container, you can run the following commands: USER@cos-dev $ echo "TOOLBOX DOCKER IMAGE=docker.io/library/fedora" > " ${ HOME } /.toolboxrc" USER@cos-dev $ echo "TOOLBOX DOCKER TAG=latest" >> " ${ HOME } /.toolboxrc" USER@cos-dev $ toolbox The /etc/default/toolbox file can be modified as shown in the following.
- These are only run the first time you invoke /usr/bin/toolbox . systemd-nspawn to run the given command or (in absence of any command) provides you a shell toolbox has some other properties to keep in mind: Invoking toolbox after the first invocation does not require a working Docker daemon, nor does it incur any network or disk overhead.
- TOOLBOX DOCKER IMAGE = "gcr.io/cos-cloud/toolbox" TOOLBOX DOCKER TAG = "v20220722" TOOLBOX DOCKER IMAGE TARBALL = <var> [ location/to/tarball ] </var> TOOLBOX BIND = "--bind=/:/media/root/ --bind=/mnt/disks/:/media/root/mnt/disks/ --bind=/var/:/media/root/var/ --bind=/home:/media/root/home/" : ${ USER :=root } USER@cos-dev $ toolbox Install and run tools from toolbox Once you've invoked the toolbox utility to start the shell, you can use apt-get inside the resulting container to install packages.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- To check all GPUs attached to your current Container-Optimized OS VM instances, run the following command: gcloud compute instances describe INSTANCE NAME \ --project= PROJECT ID \ --zone ZONE \ --format="value(guestAccelerators)" Replace the following: INSTANCE NAME : The name of the new VM instance.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- To create a Container-Optimized OS VM instance that references this cloud-init file, use the --metadata-from-file command line flag.
- Use the docker run commands in a startup script or use the cloud-init tool to configure and to run containers on your VMs and MIGs.
- For example, the following command creates a new VM instance named nginx-vm , which will launch and run the gcr.io/cloud-marketplace/google/nginx1:1.15 container image: gcloud compute instances create-with-container nginx-vm \ --container-image gcr.io/cloud-marketplace/google/nginx1:1.15 Similarly, you can create a new VM instance named hello-app which will launch and run a sample container in Artifact Registry: gcloud compute instances create-with-container hello-app \ --container-image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 When using a container image from Docker Hub, you must always specify a full Docker image name.


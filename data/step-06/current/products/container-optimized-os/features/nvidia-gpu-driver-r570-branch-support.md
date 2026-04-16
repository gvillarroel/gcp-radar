---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.067Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA GPU driver R570 branch support"
feature_slug: "nvidia-gpu-driver-r570-branch-support"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
keywords:
  - "nvidia"
  - "gpu"
  - "driver"
  - "r570"
  - "branch"
  - "container"
  - "optimized"
  - "os"
---

# NVIDIA GPU driver R570 branch support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS adds support for the NVIDIA GPU driver R570 branch; Container-Optimized OS adds support for the NVIDIA GPU driver R570 branch.

## Extended Definition

Container-Optimized OS adds support for the NVIDIA GPU driver R570 branch; Container-Optimized OS adds support for the NVIDIA GPU driver R570 branch.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- A workaround is to not use gcplogs as a Docker logging driver, and to instead use the default driver as configured by Container-Optimized OS.
- The docker command that starts the logging agent is defined in the Container-Optimized OS source for stackdriver-logging systemd service .
- The version of the containerized agent being run is defined in the Container-Optimized OS source app-admin/stackdriver directory .

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Collecting debugging information using sosreport Stay organized with collections Save and categorize content based on your preferences.
- Container-Optimized OS includes the sosreport utility, which collects information on demand to help you debug problems in a Container-Optimized OS virtual machine instance.


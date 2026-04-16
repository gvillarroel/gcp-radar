---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.084Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "GPU driver version control by GPU type"
feature_slug: "gpu-driver-version-control-by-gpu-type"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
keywords:
  - "gpu"
  - "driver"
  - "version"
  - "control"
  - "type"
  - "container"
  - "optimized"
  - "os"
---

# GPU driver version control by GPU type

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS can use the gpu_driver_versions proto file to select specific GPU driver versions for each GPU type; Container-Optimized OS can use the gpu_driver_versions proto file to select specific GPU driver versions for each GPU type.

## Extended Definition

Container-Optimized OS can use the gpu_driver_versions proto file to select specific GPU driver versions for each GPU type; Container-Optimized OS can use the gpu_driver_versions proto file to select specific GPU driver versions for each GPU type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- Note: When using different GPU types on the same Container-Optimized OS version, the GPU driver version associated with the same label may differ.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Review the available images , then use the following command to create a cos node image instance: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --machine-type machine-type-name Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance, obtained from the list of available images .
- Newer versions of Container-Optimized OS images are now being pushed only to the cos-cloud project; please update your development or production workflow to use the cos images in cos-cloud to get the latest releases.
- These images are identical to the previous versions of Container-Optimized OS, which used the name prefix gci and were accessible through the google-containers project.
- Compute Engine creates the instance with the latest version of Container-Optimized OS and launches the specified container when the VM starts.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The version of the containerized agent being run is defined in the Container-Optimized OS source app-admin/stackdriver directory .
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- However, if you have a custom logging configuration, you might experience breakage when migrating workloads to images that are based on a different architecture or to a newer version of Container-Optimized OS.
- For Arm images of all versions and x86 images for Container-Optimized OS 109 and later, the logging agent is a built-in OS package called fluent-bit .


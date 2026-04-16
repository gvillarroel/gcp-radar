---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.061Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer skip nvidia-smi verification flag"
feature_slug: "cos-gpu-installer-skip-nvidia-smi-verification-flag"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "skip"
  - "nvidia"
  - "smi"
  - "verification"
  - "flag"
---

# cos-gpu-installer skip nvidia-smi verification flag

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer supports a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation; cos-gpu-installer supports a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation.

## Extended Definition

Cos-gpu-installer supports a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation; cos-gpu-installer supports a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- Pass parameters to the kernel modules You can pass specific parameters to the NVIDIA kernel module upon installation using the --module-arg flag.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata cos-update-strategy=update disabled Starting from milestone 97 , you can also disable or enable automatic updates in project metadata: gcloud compute project-info add-metadata \ --metadata cos-update-strategy=update disabled Note: Metadata flags defined at instance level takes precedence over metadata flags defined at project level.
- The previous example can be expanded to collect usage statistics and crash dump collection with the following command: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename \ --metadata=cos-metrics-enabled=true Other metadata flags Metadata Key Description Default Behavior cos-update-strategy Specifies automatic update behavior.
- For example, the following command creates an instanced named cos-test using the cos-beta-67-10575-13-0 image: gcloud compute instances create cos-test \ --image cos-beta-67-10575-13-0 \ --image-project cos-cloud \ --zone us-east1-d \ --machine-type n1-standard-1 You can add the --preemptible flag for one-off, experimental instances.
- Also, starting from milestone 97 , you can set metadata flags in project metadata using the --metadata flag in the gcloud compute project-info add-metadata command.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshooting Resolving option conflicts between Docker daemon.json and flags When configuring the Docker daemon, if the same option is set with a daemon.json file and with flags, Docker will fail to start with an error similar to: unable to configure the Docker daemon with file /etc/docker/daemon.json: the following directives are specified both as a flag and in the configuration file: The recommended solution to resolve this conflict is to modify the default daemon.json , which is located at /etc/docker/daemon.json .
- The -E command-line flag makes docker use the .docker/config.json file from a user's home directory instead of the root home directory.


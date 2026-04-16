---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.087Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer target GPU selection"
feature_slug: "cos-gpu-installer-target-gpu-selection"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "target"
  - "selection"
  - "supports"
  - "flag"
  - "precise"
---

# cos-gpu-installer target GPU selection

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer supports a target GPU flag for precise driver installation when no GPU is attached.

## Extended Definition

Cos-gpu-installer supports a target GPU flag for precise driver installation when no GPU is attached.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Pass parameters to the kernel modules You can pass specific parameters to the NVIDIA kernel module upon installation using the --module-arg flag.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .
- Troubleshooting Resolving option conflicts between Docker daemon.json and flags When configuring the Docker daemon, if the same option is set with a daemon.json file and with flags, Docker will fail to start with an error similar to: unable to configure the Docker daemon with file /etc/docker/daemon.json: the following directives are specified both as a flag and in the configuration file: The recommended solution to resolve this conflict is to modify the default daemon.json , which is located at /etc/docker/daemon.json .
- The -E command-line flag makes docker use the .docker/config.json file from a user's home directory instead of the root home directory.

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A


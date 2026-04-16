---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.107Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "L4 GPU support in cos-gpu-installer"
feature_slug: "l4-gpu-support-in-cos-gpu-installer"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed"
keywords:
  - "l4"
  - "gpu"
  - "cos"
  - "installer"
  - "supports"
  - "gpus"
---

# L4 GPU support in cos-gpu-installer

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer supports L4 GPUs.

## Extended Definition

Cos-gpu-installer supports L4 GPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- For N1 general-purpose machine types, you can attach the following GPUs: NVIDIA T4 NVIDIA V100 NVIDIA P100 NVIDIA P4 GPUs provide compute power to drive deep-learning tasks such as image recognition and natural language processing, as well as other compute-intensive tasks such as video transcoding and image processing.
- Make the driver installation path executable by re-mounting it. sudo mount --bind /var/lib/nvidia /var/lib/nvidia sudo mount -o remount,exec /var/lib/nvidia /var/lib/nvidia/bin/nvidia-smi Configure containers to consume GPUs After the GPU drivers are installed, you can configure containers to consume GPUs.
- To check all GPUs attached to your current Container-Optimized OS VM instances, run the following command: gcloud compute instances describe INSTANCE NAME \ --project= PROJECT ID \ --zone ZONE \ --format="value(guestAccelerators)" Replace the following: INSTANCE NAME : The name of the new VM instance.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes which containers are compatible with Arm-based images: Container images Compatible with Arm-based images gcr.io/cos-cloud/toolbox Yes gcr.io/cos-cloud/cos-gpu-installer No gcr.io/stackdriver-agents/stackdriver-logging-agent No gcr.io/gce-containers/konlet No Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Scanning COS images with Oval vulnerability feed \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed](https://docs.cloud.google.com/container-optimized-os/docs/how-to/scanning-with-oval-vulnerability-feed)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.086Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer Google Cloud Storage download client"
feature_slug: "cos-gpu-installer-google-cloud-storage-download-client"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "storage"
  - "download"
  - "client"
  - "uses"
  - "improve"
---

# cos-gpu-installer Google Cloud Storage download client

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer uses a Google Cloud Storage client to improve the reliability of NVIDIA runfile downloads.

## Extended Definition

Cos-gpu-installer uses a Google Cloud Storage client to improve the reliability of NVIDIA runfile downloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .
- To run the installation scripts, the cos-extensions utility requires the https://www.googleapis.com/auth/devstorage.read only scope for communicating with the gcr.io ( cos-cloud ).
- For earlier Container-Optimized OS release milestones, use the cos-gpu-installer open source tool to manually install GPU drivers.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- The following table describes which containers are compatible with Arm-based images: Container images Compatible with Arm-based images gcr.io/cos-cloud/toolbox Yes gcr.io/cos-cloud/cos-gpu-installer No gcr.io/stackdriver-agents/stackdriver-logging-agent No gcr.io/gce-containers/konlet No Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The most noticeable difference is that Arm-based images use NVMe interface for storage instead of SCSI interface, and Google virtual NIC (gVNIC) for networking instead of Virtionet.
- Container images Container-Optimized OS includes tools that download containers at runtime.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .
- The following example uses the cloud-config format to configure a registry-mirror : #cloud-config runcmd : - echo 'DOCKER OPTS="--registry-mirror=https://mirror.gcr.io"' tee /etc/default/docker - systemctl daemon-reload - systemctl restart docker Note: For recommendations on handling DockerHub pull request limits in instances running as part of a GKE cluster, see the Preparing Google Cloud deployments for Docker Hub pull request limits blog post.
- Status: Downloaded newer image for gcr.io/google-containers/busybox:latest hello world Accessing private images in Artifact Registry or Container Registry Starting with milestone 60 releases, docker-credential-gcr is pre-installed in Container-Optimized OS images.


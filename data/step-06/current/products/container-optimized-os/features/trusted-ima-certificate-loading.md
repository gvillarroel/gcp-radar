---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:21:05.268Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Trusted IMA certificate loading"
feature_slug: "trusted-ima-certificate-loading"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "trusted"
  - "ima"
  - "certificate"
  - "loading"
  - "container"
  - "optimized"
  - "os"
  - "supports"
---

# Trusted IMA certificate loading

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports loading trusted IMA certificates from /etc/ima/pubkey.x509; Container-Optimized OS supports loading trusted IMA certificates from /etc/ima/pubkey.x509.

## Extended Definition

Container-Optimized OS supports loading trusted IMA certificates from /etc/ima/pubkey.x509; Container-Optimized OS supports loading trusted IMA certificates from /etc/ima/pubkey.x509.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Status: Downloaded newer image for gcr.io/google-containers/busybox:latest hello world Accessing private images in Artifact Registry or Container Registry Starting with milestone 60 releases, docker-credential-gcr is pre-installed in Container-Optimized OS images.
- You can run a Docker container on a machine running Container-Optimized OS in much the same way as you would on most other node image distributions, by using the docker run command.
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- You can also see all available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images --filter = "name 'cos-arm64- '" The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY Arm-based Container-Optimized OS images share the same versioning scheme and LTS milestone lifecycle with x86-based images.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Using Arm-based Container-Optimized OS images Stay organized with collections Save and categorize content based on your preferences.
- Differences between Arm and x86 images The Arm-based and x86-based Container-Optimized OS images share the same source code , but the build and compile configurations are different.
- This means that an Arm-based Container-Optimized OS image might not be functionally identical with a x86-based Container-Optimized OS image even if they have the same version.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Requirements Running GPUs on Container-Optimized OS VM instances has the following requirements: Container-Optimized OS x86 images: only x86-based Container-Optimized OS images support running GPUs.
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- Arm-based Container-Optimized OS images don't support the feature.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.


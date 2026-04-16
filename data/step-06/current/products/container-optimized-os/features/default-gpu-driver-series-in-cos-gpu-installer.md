---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.044Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Default GPU driver series in cos-gpu-installer"
feature_slug: "default-gpu-driver-series-in-cos-gpu-installer"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "default"
  - "gpu"
  - "driver"
  - "series"
  - "cos"
  - "installer"
  - "uses"
  - "r580"
---

# Default GPU driver series in cos-gpu-installer

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer uses R580 drivers as the default GPU driver series; cos-gpu-installer uses R580 drivers as the default GPU driver series.

## Extended Definition

Cos-gpu-installer uses R580 drivers as the default GPU driver series; cos-gpu-installer uses R580 drivers as the default GPU driver series.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To install a specific GPU driver version, run the following command: sudo cos-extensions install gpu -- -version= DRIVER VERSION Replace DRIVER VERSION with one of the following options: default : Installs the default driver designated by the Container-Optimized OS release.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- A workaround is to not use gcplogs as a Docker logging driver, and to instead use the default driver as configured by Container-Optimized OS.
- Container-Optimized OS 105 uses fluentd by default and Container-Optimized OS 109 uses fluent-bit by default.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- The logging agent is configured by default to send logs from certain system critical services and user application containers to the Cloud Logging backend.

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .
- The following example uses the cloud-config format to configure a registry-mirror : #cloud-config runcmd : - echo 'DOCKER OPTS="--registry-mirror=https://mirror.gcr.io"' tee /etc/default/docker - systemctl daemon-reload - systemctl restart docker Note: For recommendations on handling DockerHub pull request limits in instances running as part of a GKE cluster, see the Preparing Google Cloud deployments for Docker Hub pull request limits blog post.
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .
- Configure the daemon to use the registry-mirror option in one of the following ways: In the /etc/default/docker file, add the registry-mirror option for the registry (for example, https://mirror.gcr.io ): echo 'DOCKER OPTS="--registry-mirror=https://mirror.gcr.io"' tee /etc/default/docker In the /etc/default/docker file, append "--registry-mirror=https://mirror.gcr.io" to the existing DOCKER OPTS : sed -i -e 's "$ --registry-mirror=https://mirror.gcr.io" ' /etc/default/docker After adding the registry mirror, restart the Docker daemon for the changes to take effect: sudo systemctl daemon-reload sudo systemctl restart docker Adding a configuration to /etc/default/docker is non-persistent across reboot.


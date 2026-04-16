---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:21:05.207Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cloud-final.service startup dependency removal"
feature_slug: "cloud-final-service-startup-dependency-removal"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
keywords:
  - "final"
  - "startup"
  - "dependency"
  - "removal"
  - "removes"
  - "the"
  - "on"
  - "multi"
---

# cloud-final.service startup dependency removal

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts; Removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts.

## Extended Definition

Removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts; Removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For advanced scenarios where you can deploy multiple containers and configure Docker options using cloud-init , you can create a Compute Engine instance with your choice of Container-Optimized OS image, and then proceed to configure the container as needed.
- For example: gcloud compute ssh instance-name \ --project project-id \ --zone compute-zone Running startup scripts You can specify a startup script through the metadata server, using the startup-script metadata key.
- Use the docker run commands in a startup script or use the cloud-init tool to configure and to run containers on your VMs and MIGs.
- Caution: The container startup agent that deploys containers on VMs during VM creation is deprecated.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- There may be multiple active LTS milestones at any time.
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- For example, the following command shows currently active LTS image families: gcloud compute images list --no-standard-images --project=cos-cloud grep lts cos-101-17162-40-16 cos-cloud cos-101-lts READY cos-89-16108-766-3 cos-cloud cos-89-lts READY cos-93-16623-295-5 cos-cloud cos-93-lts READY cos-97-16919-189-3 cos-cloud cos-97-lts READY cos-arm64-101-17162-40-16 cos-cloud cos-arm64-101-lts READY Lifecycle of an LTS milestone A new Container-Optimized OS LTS milestone is introduced approximately every 6 months on its own image family named cos-[MILESTONE]-lts (x86) and cos-arm64-[MILESTONE]-lts (Arm).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- The following is an example startup script to install drivers: #! /bin/bash sudo cos-extensions install gpu Cloud-init Cloud-init is similar to startup scripts but more powerful.
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that your docker configuration remains persistent across reboots, consider adding the commands either in the cloud-init script of the instance's metadata in the cloud-config format or startup script .
- This can be done using cloud-init , for example using a cloud-config similar to: #cloud-config write files: - path: /tmp/modify docker daemon opts.py permissions: 0744 owner: root content: import json, sys, os, logging DAEMON OPTS FILE = '/etc/docker/daemon.json' opts = {} if os.path.exists(DAEMON OPTS FILE): with open(DAEMON OPTS FILE) as f: try: opts = json.load(f) except: logging.info("json parsing failed, starting with empty config.") pass Add your daemon option modifications here For example, opts['log-opts']['max-size'] = '100m' with open(DAEMON OPTS FILE, 'w') as f: json.dump(opts, f) runcmd: - python /tmp/modify docker daemon opts.py - rm -f /tmp/modify docker daemon opts.py - systemctl restart docker.service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:21:05.189Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cloud-final.service dependency removal from multi-user.target"
feature_slug: "cloud-final-service-dependency-removal-from-multi-user-target"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "final"
  - "dependency"
  - "removal"
  - "from"
  - "multi"
  - "user"
  - "target"
  - "container"
---

# cloud-final.service dependency removal from multi-user.target

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts.

## Extended Definition

Container-Optimized OS removes the cloud-final.service dependency on multi-user.target to avoid indefinite delays in cloud-init user-data scripts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- Google Cloud provides a seamless experience for you to run your GPU workloads within containers on Container-Optimized OS VM instances so that you can benefit from other Container-Optimized OS features such as security and reliability.
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .

### "Running containers on instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-container-instance)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- The example below uses the Cloud Config format to start a Docker container from an image stored in Container Registry: #cloud-config write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container Wants=gcr-online.target After=gcr-online.target [Service] Environment="HOME=/home/cloudservice" ExecStartPre=/usr/bin/docker-credential-gcr configure-docker ExecStart=/usr/bin/docker run --rm --name=mycloudservice gcr.io/google-containers/busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Note: docker-credential-gcr writes credentials to $HOME/.docker/config.json .
- Container Registry docker-credential-gcr configure-docker The following output appears: /home/username/.docker/config.json configured to use this credential helper To run an image from the registry, use the following command: Artifact Registry docker run --rm LOCATION -docker.pkg.dev/ your-project / repository / your-image Replace LOCATION with the location of your repository.
- Container Registry sudo -E docker run --rm gcr.io/ your-project / your-image Supported Container Registry hostnames are: us.gcr.io eu.gcr.io asia.gcr.io Alternately, you can fetch appropriate OAuth access tokens from Compute Engine metadata and use them with the docker login command manually, as shown in the following example: METADATA = http://metadata.google.internal/computeMetadata/v1 SVC ACCT = $METADATA /instance/service-accounts/default ACCESS TOKEN = $( curl -H 'Metadata-Flavor: Google' $SVC ACCT /token cut -d '"' -f 4 ) docker login -u oauth2accesstoken -p $ACCESS TOKEN https://gcr.io docker run … gcr.io/ your-project / your-image Using cloud-init with Container Registry This cloud-init example uses the Cloud Config format to start a Docker container from an image stored in Docker's container registry called DockerHub .
- To start a container from Container Registry, run: docker run --rm gcr.io/google-containers/busybox echo "hello world" The following output appears: Unable to find image 'gcr.io/google-containers/busybox:latest' locally Pulling repository gcr.io/google-containers/busybox . . .

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Building Container-Optimized OS from source Stay organized with collections Save and categorize content based on your preferences.
- The test image includes the debug tools from the dev image as well as tools necessary for running automatic Container-Optimized OS tests.
- If you like, you can build a Container-Optimized OS image yourself directly from the Container-Optimized OS source code.
- Container-Optimized OS is based on, and built using, tools from the open-source Chromium OS project.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Assuming the cloud-init file is called filename in the current directory, the following command creates a Container-Optimized OS instance and trigger cloud-init by assigning the contents of the file to the user-data key in the Instance Metadata: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance.
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- Here's an example cloud-init file showing how to create a user account and create a systemd service owned by this user that controls the management of a Docker busybox container: #cloud-config users : - name : cloudservice uid : 2000 write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container [Service] ExecStart=/usr/bin/docker run --rm -u 2000 --name=mycloudservice busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Optional once-per-boot setup.
- For example, the following command creates a new VM instance named nginx-vm , which will launch and run the gcr.io/cloud-marketplace/google/nginx1:1.15 container image: gcloud compute instances create-with-container nginx-vm \ --container-image gcr.io/cloud-marketplace/google/nginx1:1.15 Similarly, you can create a new VM instance named hello-app which will launch and run a sample container in Artifact Registry: gcloud compute instances create-with-container hello-app \ --container-image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 When using a container image from Docker Hub, you must always specify a full Docker image name.


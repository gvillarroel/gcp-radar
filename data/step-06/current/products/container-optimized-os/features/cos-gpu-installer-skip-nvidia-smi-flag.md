---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.050Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer skip-nvidia-smi flag"
feature_slug: "cos-gpu-installer-skip-nvidia-smi-flag"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "skip"
  - "nvidia"
  - "smi"
  - "flag"
  - "adds"
---

# cos-gpu-installer skip-nvidia-smi flag

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Adds a skip-nvidia-smi flag to cos-gpu-installer to disable nvidia-smi verification during GPU driver installation.

## Extended Definition

Adds a skip-nvidia-smi flag to cos-gpu-installer to disable nvidia-smi verification during GPU driver installation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 97
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

### "Securing containers with AppArmor \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- The following cloud-config script adds the no-ping profile to /etc/apparmor.d : cloud-configs write files: - path: /etc/apparmor.d/no raw net permissions: 0644 owner: root content: #include <tunables/global> profile no-ping flags=(attach disconnected,mediate deleted) { #include <abstractions/base> network inet tcp, network inet udp, network inet icmp, deny network raw, deny network packet, file, mount, } To ensure that your service file loads your custom profile into AppArmor and tells Docker to use it, run the following commands on your instance: ExecStartPre=/sbin/apparmor parser -r -W /etc/apparmor.d/no raw net ExecStart=/usr/bin/docker run --security-opt apparmor=no-ping ...
- The following script creates a file for a security profile called no-ping at /etc/apparmor.d/no raw net : cat > /etc/apparmor.d/no raw net <<EOF include <tunables/global> profile no-ping flags=(attach disconnected,mediate deleted) { #include <abstractions/base> network inet tcp, network inet udp, network inet icmp, deny network raw, deny network packet, file, mount, } EOF Once you've created the security profile file, you can use apparmor parser to load the profile into AppArmor: /sbin/apparmor parser --replace --write-cache /etc/apparmor.d/no raw net Once loaded, you can test the no-ping profile as follows: $ docker run --rm -i --security-opt apparmor = no-ping debian:jessie ping -c3 8 .8.8.8 The command creates a container with the no-ping security profile and attempts to run ping from within the container.
- Suppose you have the following processes running on your instance (shown by the ps -ef grep '[b]ash -i' command): root 1903 1897 0 21:58 pts/3 00:00:00 docker run --rm -it debian:jessie bash -i root 1927 1913 0 21:58 pts/4 00:00:00 bash -i root 1978 1001 0 22:01 pts/0 00:00:00 docker run --rm -it --security-opt apparmor=unconfined debian:jessie bash -i root 2001 1988 0 22:01 pts/2 00:00:00 bash -i Note: You can also add the -Z flag to your ps command to display the security profile for each process.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.057Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer skip-nvidia-smi option"
feature_slug: "cos-gpu-installer-skip-nvidia-smi-option"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "skip"
  - "nvidia"
  - "smi"
  - "option"
  - "provides"
---

# cos-gpu-installer skip-nvidia-smi option

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer provides a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation; cos-gpu-installer provides a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation.

## Extended Definition

Cos-gpu-installer provides a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation; cos-gpu-installer provides a -skip-nvidia-smi flag to disable nvidia-smi verification during GPU driver installation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Container-Optimized OS provides a built-in utility cos-extensions to simplify the NVIDIA driver installation process.
- This option is available starting from cos-gpu-installer:v2.2.1 .
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Example 1 The following example configuration starts periodic CIS Level 1 scanning with the default period of once a day. #cloud-config runcmd : Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 2 The following example configures periodic CIS Level 1 scanning once every hour. #cloud-config Override cis-compliance-scanner.timer with 1 hour frequency. write files : - path : /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf permissions : 0600 owner : root content : [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h runcmd : Reload systemd units. - systemctl daemon-reload Check the compliance status of the instance once an hour. - systemctl start cis-compliance-scanner.timer Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day. #cloud-config runcmd : Configure the instance for CIS level 2. - systemctl start cis-level2.service Change the scan level to CIS Level 2. - sed -i 's/^LEVEL=. $/LEVEL="2"/' /etc/cis-scanner/env vars Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 4 The following example configures the scanner to run once a day and opts out of a specific CIS recommendation. #cloud-config runcmd : Opt-out of the etc-passwd-permissions check. - sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars Check the compliance of the instance once a day. - systemctl start cis-compliance-scanner.timer Using OS Policy You can use an OS Policy to configure CIS Benchmark scanning.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL Return an exit code of 100 to indicate that the desired changes were successfully applied. script : - Opt-out of the etc-passwd-permissions check. sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars && Check the compliance of the instance once a day. systemctl start cis-compliance-scanner.timer Ensure cis-compliance-scanner completes before exiting PID=$(systemctl show --property MainPID --value cis-compliance-scanner.service) && timeout 5m bash -c -- 'while [ -e /proc/'$PID' ]; do echo "CIS Scanner with PID:'$PID' is still running"; sleep 1; done' && exit 100 Troubleshooting This section describes how to resolve issues related to CIS benchmark scanning.
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- It can be 1 or 2 LEVEL="2" Extra options that can be passed to cis scanner For valid options, see output of cis scanner -h EXTRA OPTIONS="" Configure the timer To set up periodic compliance scanning, start the cis-compliance-scanner.timer unit: systemctl start cis-compliance-scanner.timer By default, cis-compliance-scanner.timer starts cis-compliance-scanner.service once a day.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Here's an example cloud-init file showing how to create a user account and create a systemd service owned by this user that controls the management of a Docker busybox container: #cloud-config users : - name : cloudservice uid : 2000 write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container [Service] ExecStart=/usr/bin/docker run --rm -u 2000 --name=mycloudservice busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Optional once-per-boot setup.
- For advanced scenarios where you can deploy multiple containers and configure Docker options using cloud-init , you can create a Compute Engine instance with your choice of Container-Optimized OS image, and then proceed to configure the container as needed.
- For simple scenarios where you want to run a single container on a VM or on each VM in a managed instance group , you can specify a container image and optional configuration parameters when you define the instance or instance template.
- This option explicitly sets the ID for the user and allows you to make sure the ID is consistent between different instances.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:21:05.262Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "systemd named service sequencing"
feature_slug: "systemd-named-service-sequencing"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
keywords:
  - "systemd"
  - "named"
  - "sequencing"
  - "the"
  - "can"
  - "be"
  - "ordered"
  - "before"
---

# systemd named service sequencing

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

The named service can be ordered before nss-lookup.target in systemd startup sequencing.

## Extended Definition

The named service can be ordered before nss-lookup.target in systemd startup sequencing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following command creates an instanced named cos-test using the cos-beta-67-10575-13-0 image: gcloud compute instances create cos-test \ --image cos-beta-67-10575-13-0 \ --image-project cos-cloud \ --zone us-east1-d \ --machine-type n1-standard-1 You can add the --preemptible flag for one-off, experimental instances.
- Time synchronization Before milestone 85 , Container-Optimized OS uses systemd 's systemd-timesyncd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the SNTP protocol.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- For example, the following command creates a new VM instance named nginx-vm , which will launch and run the gcr.io/cloud-marketplace/google/nginx1:1.15 container image: gcloud compute instances create-with-container nginx-vm \ --container-image gcr.io/cloud-marketplace/google/nginx1:1.15 Similarly, you can create a new VM instance named hello-app which will launch and run a sample container in Artifact Registry: gcloud compute instances create-with-container hello-app \ --container-image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 When using a container image from Docker Hub, you must always specify a full Docker image name.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Example 1 The following example configuration starts periodic CIS Level 1 scanning with the default period of once a day. #cloud-config runcmd : Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 2 The following example configures periodic CIS Level 1 scanning once every hour. #cloud-config Override cis-compliance-scanner.timer with 1 hour frequency. write files : - path : /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf permissions : 0600 owner : root content : [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h runcmd : Reload systemd units. - systemctl daemon-reload Check the compliance status of the instance once an hour. - systemctl start cis-compliance-scanner.timer Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day. #cloud-config runcmd : Configure the instance for CIS level 2. - systemctl start cis-level2.service Change the scan level to CIS Level 2. - sed -i 's/^LEVEL=. $/LEVEL="2"/' /etc/cis-scanner/env vars Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 4 The following example configures the scanner to run once a day and opts out of a specific CIS recommendation. #cloud-config runcmd : Opt-out of the etc-passwd-permissions check. - sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars Check the compliance of the instance once a day. - systemctl start cis-compliance-scanner.timer Using OS Policy You can use an OS Policy to configure CIS Benchmark scanning.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL Return an exit code of 100 to indicate that the desired changes were successfully applied. script : - Opt-out of the etc-passwd-permissions check. sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars && Check the compliance of the instance once a day. systemctl start cis-compliance-scanner.timer Ensure cis-compliance-scanner completes before exiting PID=$(systemctl show --property MainPID --value cis-compliance-scanner.service) && timeout 5m bash -c -- 'while [ -e /proc/'$PID' ]; do echo "CIS Scanner with PID:'$PID' is still running"; sleep 1; done' && exit 100 Troubleshooting This section describes how to resolve issues related to CIS benchmark scanning.
- The systemd service supports all of the CIS Level 2 recommendations except for the following: 4.1.1.2 Ensure Logging is running (ID: logging-service-running) This recommendation is opted-out by default but can be re-enabled by deleting the ID from the opted-out list which can be found in the /etc/cis-scanner/env vars file.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL Return an exit code of 100 to indicate that the desired changes were successfully applied. script : - Overwrite "OnUnitActiveSec" field of the cis-compliance-scanner.timer to trigger cis-compliance-scanner.service once an hour instead of once a day. mkdir /etc/systemd/system/cis-compliance-scanner.timer.d tee /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf <<EOF [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h EOF Reload systemd units. systemctl daemon-reload Check the compliance of the instance once an hour. systemctl start cis-compliance-scanner.timer && exit 100 Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- Google Cloud provides a seamless experience for you to run your GPU workloads within containers on Container-Optimized OS VM instances so that you can benefit from other Container-Optimized OS features such as security and reliability.
- For example, the NVIDIA CUDA-X libraries and debug utilities in Docker containers can be at /usr/local/cuda-11.0/lib64 and /usr/local/nvidia/bin , respectively.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- In the following example, the nginx container will be accessible on the network on port 80: docker run --rm -d -p 80 :80 --name = nginx nginx Note: If IPv6 address is used for accessing the deployed container over the network, you must explicitly configure the host firewall using ip6tables commands like "ip6tables -A INPUT -p tcp --dport 80 -j ACCEPT" .This is because Docker does not automatically configure the IPv6 rules for host firewall to expose your application on the network due to known limitation .
- Running containers in the host's network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are using Docker's --net=host option, you must explicitly configure the host firewall yourself.
- Running containers in Docker's default network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are not using Docker's --net=host option, run your container with Docker's -p option.


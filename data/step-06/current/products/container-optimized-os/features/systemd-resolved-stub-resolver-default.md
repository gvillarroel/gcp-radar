---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.027Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "systemd-resolved stub resolver default"
feature_slug: "systemd-resolved-stub-resolver-default"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "systemd"
  - "resolved"
  - "stub"
  - "resolver"
  - "default"
  - "container"
  - "optimized"
  - "os"
---

# systemd-resolved stub resolver default

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS uses the systemd-resolved stub resolver by default for DNS resolution.

## Extended Definition

Container-Optimized OS uses the systemd-resolved stub resolver by default for DNS resolution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Example 1 The following example configuration starts periodic CIS Level 1 scanning with the default period of once a day. #cloud-config runcmd : Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 2 The following example configures periodic CIS Level 1 scanning once every hour. #cloud-config Override cis-compliance-scanner.timer with 1 hour frequency. write files : - path : /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf permissions : 0600 owner : root content : [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h runcmd : Reload systemd units. - systemctl daemon-reload Check the compliance status of the instance once an hour. - systemctl start cis-compliance-scanner.timer Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day. #cloud-config runcmd : Configure the instance for CIS level 2. - systemctl start cis-level2.service Change the scan level to CIS Level 2. - sed -i 's/^LEVEL=. $/LEVEL="2"/' /etc/cis-scanner/env vars Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 4 The following example configures the scanner to run once a day and opts out of a specific CIS recommendation. #cloud-config runcmd : Opt-out of the etc-passwd-permissions check. - sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars Check the compliance of the instance once a day. - systemctl start cis-compliance-scanner.timer Using OS Policy You can use an OS Policy to configure CIS Benchmark scanning.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL Return an exit code of 100 to indicate that the desired changes were successfully applied. script : - Overwrite "OnUnitActiveSec" field of the cis-compliance-scanner.timer to trigger cis-compliance-scanner.service once an hour instead of once a day. mkdir /etc/systemd/system/cis-compliance-scanner.timer.d tee /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf <<EOF [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h EOF Reload systemd units. systemctl daemon-reload Check the compliance of the instance once an hour. systemctl start cis-compliance-scanner.timer && exit 100 Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- Time synchronization Before milestone 85 , Container-Optimized OS uses systemd 's systemd-timesyncd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the SNTP protocol.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- Here's an example cloud-init file showing how to create a user account and create a systemd service owned by this user that controls the management of a Docker busybox container: #cloud-config users : - name : cloudservice uid : 2000 write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container [Service] ExecStart=/usr/bin/docker run --rm -u 2000 --name=mycloudservice busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Optional once-per-boot setup.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- To install a specific GPU driver version, run the following command: sudo cos-extensions install gpu -- -version= DRIVER VERSION Replace DRIVER VERSION with one of the following options: default : Installs the default driver designated by the Container-Optimized OS release.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.


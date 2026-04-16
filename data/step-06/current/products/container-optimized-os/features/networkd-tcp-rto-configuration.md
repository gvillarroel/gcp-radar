---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.094Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "networkd TCP RTO configuration"
feature_slug: "networkd-tcp-rto-configuration"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
keywords:
  - "networkd"
  - "tcp"
  - "rto"
  - "configuration"
  - "systemd"
  - "supports"
  - "retransmission"
  - "timeout"
---

# networkd TCP RTO configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Systemd-networkd supports TCP retransmission timeout configuration; systemd-networkd supports TCP retransmission timeout configuration.

## Extended Definition

Systemd-networkd supports TCP retransmission timeout configuration; systemd-networkd supports TCP retransmission timeout configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)

## Supporting Pages

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 1 The following example configuration starts periodic CIS Level 1 scanning with the default period of once a day. #cloud-config runcmd : Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 2 The following example configures periodic CIS Level 1 scanning once every hour. #cloud-config Override cis-compliance-scanner.timer with 1 hour frequency. write files : - path : /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf permissions : 0600 owner : root content : [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h runcmd : Reload systemd units. - systemctl daemon-reload Check the compliance status of the instance once an hour. - systemctl start cis-compliance-scanner.timer Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day. #cloud-config runcmd : Configure the instance for CIS level 2. - systemctl start cis-level2.service Change the scan level to CIS Level 2. - sed -i 's/^LEVEL=. $/LEVEL="2"/' /etc/cis-scanner/env vars Check the compliance status of the instance once a day. - systemctl start cis-compliance-scanner.timer Example 4 The following example configures the scanner to run once a day and opts out of a specific CIS recommendation. #cloud-config runcmd : Opt-out of the etc-passwd-permissions check. - sed -i 's/^EXTRA. $/EXTRA OPTIONS="--benchmark-opt-out-ids=etc-passwd-permissions"/' /etc/cis-scanner/env vars Check the compliance of the instance once a day. - systemctl start cis-compliance-scanner.timer Using OS Policy You can use an OS Policy to configure CIS Benchmark scanning.
- The systemd service supports all of the CIS Level 2 recommendations except for the following: 4.1.1.2 Ensure Logging is running (ID: logging-service-running) This recommendation is opted-out by default but can be re-enabled by deleting the ID from the opted-out list which can be found in the /etc/cis-scanner/env vars file.
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.
- Otherwise, return an exit code of 101 to run enforce step. script : - is active=$(systemctl is-active cis-compliance-scanner.timer) result=$(systemctl show -p Result --value cis-compliance-scanner.service) if [ "$is active" == "active" ] && [ "$result" == "success" ]; then exit 100; else exit 101; fi enforce : interpreter : SHELL Return an exit code of 100 to indicate that the desired changes were successfully applied. script : - Overwrite "OnUnitActiveSec" field of the cis-compliance-scanner.timer to trigger cis-compliance-scanner.service once an hour instead of once a day. mkdir /etc/systemd/system/cis-compliance-scanner.timer.d tee /etc/systemd/system/cis-compliance-scanner.timer.d/override.conf <<EOF [Unit] Description=Run CIS Scanner once an hour [Timer] OnUnitActiveSec=1h EOF Reload systemd units. systemctl daemon-reload Check the compliance of the instance once an hour. systemctl start cis-compliance-scanner.timer && exit 100 Example 3 The following example configures periodic CIS Level 2 scanning with the default period of once a day.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in /etc/systemd/timesyncd.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/systemd/timesyncd.conf comments omitted for brevity [Time] #NTP= #FallbackNTP=metadata.google.internal #RootDistanceMaxSec=5 #PollIntervalMinSec=32 #PollIntervalMaxSec=2048 So the maximum acceptable root distance is 5 seconds and the minimum and maximum poll intervals for NTP messages are 32 and 2048 seconds respectively.
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- Here's an example cloud-init file showing how to create a user account and create a systemd service owned by this user that controls the management of a Docker busybox container: #cloud-config users : - name : cloudservice uid : 2000 write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container [Service] ExecStart=/usr/bin/docker run --rm -u 2000 --name=mycloudservice busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Optional once-per-boot setup.
- For example: POST https://compute.googleapis.com/compute/v1/projects/ project-id /zones/ compute-zone /instances { 'machineType': 'zones/ compute-zone /machineTypes/ machine-type-name ', 'name': ' instance-name ', 'networkInterfaces': [ { 'accessConfigs': [ { 'type': 'ONE TO ONE NAT', 'name': 'External NAT' } ], 'network': 'global/networks/default' } ], 'disks': [ { 'type': 'PERSISTENT', 'boot': true, 'autoDelete': true, 'initializeParams': { 'sourceImage': 'projects/cos-cloud/global/images/ image-name ' } } ] } Configuring an instance In some cases, you might want to do additional configuration when the instance boots.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- Warning: The default firewall configuration might be different if you are using Container-Optimized OS through another Google Cloud product like Containers on Compute Engine or Google Kubernetes Engine.
- To ensure that the host firewall is correctly configured on every boot, configure the host firewall in your cloud-init configuration.
- You can see the exact host firewall configuration by running sudo iptables -L on a VM instance running Container-Optimized OS.


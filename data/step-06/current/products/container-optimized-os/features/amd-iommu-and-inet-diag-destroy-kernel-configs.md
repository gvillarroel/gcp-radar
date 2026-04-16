---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:51:39.137Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "AMD IOMMU and INET_DIAG_DESTROY kernel configs"
feature_slug: "amd-iommu-and-inet-diag-destroy-kernel-configs"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
keywords:
  - "amd"
  - "iommu"
  - "inet"
  - "diag"
  - "destroy"
  - "kernel"
  - "configs"
  - "container"
---

# AMD IOMMU and INET_DIAG_DESTROY kernel configs

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS enables the CONFIG_AMD_IOMMU, CONFIG_AMD_IOMMU_V2, and INET_DIAG_DESTROY kernel configurations.

## Extended Definition

Container-Optimized OS enables the CONFIG_AMD_IOMMU, CONFIG_AMD_IOMMU_V2, and INET_DIAG_DESTROY kernel configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)

## Supporting Pages

### "Securing containers with AppArmor \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following script creates a file for a security profile called no-ping at /etc/apparmor.d/no raw net : cat > /etc/apparmor.d/no raw net <<EOF include <tunables/global> profile no-ping flags=(attach disconnected,mediate deleted) { #include <abstractions/base> network inet tcp, network inet udp, network inet icmp, deny network raw, deny network packet, file, mount, } EOF Once you've created the security profile file, you can use apparmor parser to load the profile into AppArmor: /sbin/apparmor parser --replace --write-cache /etc/apparmor.d/no raw net Once loaded, you can test the no-ping profile as follows: $ docker run --rm -i --security-opt apparmor = no-ping debian:jessie ping -c3 8 .8.8.8 The command creates a container with the no-ping security profile and attempts to run ping from within the container.
- The following cloud-config script adds the no-ping profile to /etc/apparmor.d : cloud-configs write files: - path: /etc/apparmor.d/no raw net permissions: 0644 owner: root content: #include <tunables/global> profile no-ping flags=(attach disconnected,mediate deleted) { #include <abstractions/base> network inet tcp, network inet udp, network inet icmp, deny network raw, deny network packet, file, mount, } To ensure that your service file loads your custom profile into AppArmor and tells Docker to use it, run the following commands on your instance: ExecStartPre=/sbin/apparmor parser -r -W /etc/apparmor.d/no raw net ExecStart=/usr/bin/docker run --security-opt apparmor=no-ping ...
- The following example command runs a container with the docker-default security profile: docker run --rm -it debian:jessie bash -i To test the docker-default security profile, you can try to read the /proc/sysrq-trigger file with the cat command, as follows: root @88 cef496c1a5 :/ # cat / proc / sysrq - trigger The output should contain a "Permission Denied" error, similar to the following: cat: /proc/sysrq-trigger: Permission denied Note: See Docker's AppArmor security profiles for Docker documentation for additional information on Docker's default AppArmor security profile.
- You can also specify unconfined with the apparmor option to indicate that the container is to be run with no security profile, as in the following example: docker run --rm -it --security-opt apparmor=unconfined debian:jessie bash -i Viewing the active AppArmor security profiles You can see what AppArmor profile, if any, applies to the processes on your Container-Optimized OS instance by inspecting the /proc/<pid>/attr/current file, where <pid> is the process ID.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- In the following example, the nginx container will be accessible on the network on port 80: docker run --rm -d -p 80 :80 --name = nginx nginx Note: If IPv6 address is used for accessing the deployed container over the network, you must explicitly configure the host firewall using ip6tables commands like "ip6tables -A INPUT -p tcp --dport 80 -j ACCEPT" .This is because Docker does not automatically configure the IPv6 rules for host firewall to expose your application on the network due to known limitation .
- Running containers in the host's network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are using Docker's --net=host option, you must explicitly configure the host firewall yourself.
- Running containers in Docker's default network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are not using Docker's --net=host option, run your container with Docker's -p option.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- For example: POST https://compute.googleapis.com/compute/v1/projects/ project-id /zones/ compute-zone /instances { 'machineType': 'zones/ compute-zone /machineTypes/ machine-type-name ', 'name': ' instance-name ', 'networkInterfaces': [ { 'accessConfigs': [ { 'type': 'ONE TO ONE NAT', 'name': 'External NAT' } ], 'network': 'global/networks/default' } ], 'disks': [ { 'type': 'PERSISTENT', 'boot': true, 'autoDelete': true, 'initializeParams': { 'sourceImage': 'projects/cos-cloud/global/images/ image-name ' } } ] } Configuring an instance In some cases, you might want to do additional configuration when the instance boots.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- Here's an example cloud-init file showing how to create a user account and create a systemd service owned by this user that controls the management of a Docker busybox container: #cloud-config users : - name : cloudservice uid : 2000 write files : - path : /etc/systemd/system/cloudservice.service permissions : 0644 owner : root content : [Unit] Description=Start a simple docker container [Service] ExecStart=/usr/bin/docker run --rm -u 2000 --name=mycloudservice busybox:latest /bin/sleep 3600 ExecStop=/usr/bin/docker stop mycloudservice ExecStopPost=/usr/bin/docker rm mycloudservice runcmd : - systemctl daemon-reload - systemctl start cloudservice.service Optional once-per-boot setup.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.105Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Protected stateful partition wait timeout"
feature_slug: "protected-stateful-partition-wait-timeout"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
keywords:
  - "protected"
  - "stateful"
  - "partition"
  - "wait"
  - "timeout"
  - "container"
  - "optimized"
  - "os"
---

# Protected stateful partition wait timeout

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS increases the /dev/stateful wait timeout when using a protected stateful partition.

## Extended Definition

Container-Optimized OS increases the /dev/stateful wait timeout when using a protected stateful partition.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)

## Supporting Pages

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using Container-Optimized OS, be aware of the partitioning if you run your own services that have certain expectations about the file system layout outside of containers.
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- Running containers in the host's network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are using Docker's --net=host option, you must explicitly configure the host firewall yourself.
- Running containers in Docker's default network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are not using Docker's --net=host option, run your container with Docker's -p option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring the host firewall Stay organized with collections Save and categorize content based on your preferences.


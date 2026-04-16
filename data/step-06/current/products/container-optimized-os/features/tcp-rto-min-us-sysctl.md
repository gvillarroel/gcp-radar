---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.086Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "tcp_rto_min_us sysctl"
feature_slug: "tcp-rto-min-us-sysctl"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
keywords:
  - "tcp"
  - "rto"
  - "min"
  - "us"
  - "sysctl"
  - "container"
  - "optimized"
  - "os"
---

# tcp_rto_min_us sysctl

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS adds the tcp_rto_min_us sysctl for network tuning.

## Extended Definition

Container-Optimized OS adds the tcp_rto_min_us sysctl for network tuning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)

## Supporting Pages

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- Running containers in the host's network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are using Docker's --net=host option, you must explicitly configure the host firewall yourself.
- Running containers in Docker's default network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are not using Docker's --net=host option, run your container with Docker's -p option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring the host firewall Stay organized with collections Save and categorize content based on your preferences.

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Collecting debugging information using sosreport Stay organized with collections Save and categorize content based on your preferences.
- Container-Optimized OS includes the sosreport utility, which collects information on demand to help you debug problems in a Container-Optimized OS virtual machine instance.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.088Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "IPv6 support for endor boards"
feature_slug: "ipv6-support-for-endor-boards"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
keywords:
  - "ipv6"
  - "endor"
  - "boards"
  - "container"
  - "optimized"
  - "os"
  - "adds"
---

# IPv6 support for endor boards

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS adds IPv6 support for endor boards.

## Extended Definition

Container-Optimized OS adds IPv6 support for endor boards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Supporting Pages

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.
- This document explains what the CIS Benchmark is, how the benchmark relates to Container-Optimized OS (COS), how to audit the status of compliance in the instance and how to troubleshoot in case of failure.

### "Configuring the host firewall \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall](https://docs.cloud.google.com/container-optimized-os/docs/how-to/firewall)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following cloud-init example: #cloud-config write files : - path : /etc/systemd/system/config-firewall.service permissions : 0644 owner : root content : [Unit] Description=Configures the host firewall [Service] Type=oneshot RemainAfterExit=true ExecStart=/sbin/iptables -A INPUT -p tcp --dport 80 -j ACCEPT - path : /etc/systemd/system/myhttp.service permissions : 0644 owner : root content : [Unit] Description=My HTTP service After=docker.service config-firewall.service Wants=docker.service config-firewall.service [Service] Restart=always ExecStart=/usr/bin/docker run --rm --name=%n --net=host nginx ExecStop=-/usr/bin/docker exec %n -s quit runcmd : - systemctl daemon-reload - systemctl start myhttp.service Using this cloud-init configuration with a VM running Container-Optimized OS will result in the following behaviors on every boot: The host firewall will be configured to allow incoming TCP connections on port 80.
- In the following example, the nginx container will be accessible on the network on port 80: docker run --rm -d -p 80 :80 --name = nginx nginx Note: If IPv6 address is used for accessing the deployed container over the network, you must explicitly configure the host firewall using ip6tables commands like "ip6tables -A INPUT -p tcp --dport 80 -j ACCEPT" .This is because Docker does not automatically configure the IPv6 rules for host firewall to expose your application on the network due to known limitation .
- Running containers in the host's network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are using Docker's --net=host option, you must explicitly configure the host firewall yourself.
- Running containers in Docker's default network namespace If you are deploying a container on Container-Optimized OS that must be accessible over the network and you are not using Docker's --net=host option, run your container with Docker's -p option.

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Collecting debugging information using sosreport Stay organized with collections Save and categorize content based on your preferences.
- Container-Optimized OS includes the sosreport utility, which collects information on demand to help you debug problems in a Container-Optimized OS virtual machine instance.


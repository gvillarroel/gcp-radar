---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.035Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "IDPF transmit timeout handling"
feature_slug: "idpf-transmit-timeout-handling"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring"
keywords:
  - "idpf"
  - "transmit"
  - "timeout"
  - "handling"
  - "container"
  - "optimized"
  - "os"
  - "includes"
---

# IDPF transmit timeout handling

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS includes patches to handle IDPF transmit timeouts; Container-Optimized OS includes patches to handle IDPF transmit timeouts.

## Extended Definition

Container-Optimized OS includes patches to handle IDPF transmit timeouts; Container-Optimized OS includes patches to handle IDPF transmit timeouts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)

## Supporting Pages

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.
- This document explains what the CIS Benchmark is, how the benchmark relates to Container-Optimized OS (COS), how to audit the status of compliance in the instance and how to troubleshoot in case of failure.

### "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Using user-defined guest policies Container-Optimized OS includes OS Config agent , that uses OS system utilities to maintain the state for the VM that is specified in the guest policy.
- Starting with Milestone 77, Container-Optimized OS includes the Node Problem Detector agent.
- You can use cloud-init to enable health monitoring with the following cloud-config example: #cloud-config runcmd: - systemctl start node-problem-detector Using metadata In Container-Optimized OS Milestone 88 and later, the Node Problem Detector can also be enabled by setting the value of google-monitoring-enabled to true in the custom metadata section.
- To enable monitoring when creating an instance: gcloud compute instances create VM NAME \ --image= IMAGE \ --image-project=cos-cloud \ --metadata=google-monitoring-enabled=true Replace the following: VM NAME : name of the new VM IMAGE : a specific version of a public Container-Optimized OS image.

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites To build a Container-Optimized OS image, you'll need to install the following tools on your development machine: git and curl A package of Chromium scripts called depot tools that includes tools like repo and cros sdk .
- The test image includes the debug tools from the dev image as well as tools necessary for running automatic Container-Optimized OS tests.
- To build Container-Optimized OS, specify lakitu (x86 image) or lakitu-arm64 (Arm image) for the board name as follows: x86 image build packages --board = lakitu build image --board = lakitu test Arm image build packages --board = lakitu-arm64 build image --board = lakitu-arm64 test In addition to test , you can build either a base , or dev image by passing the appropriate parameter to the ./build image script command.
- You can use the cros sdk tool included in depot tools to create and enter a chroot that's ready for Container-Optimized OS compilation by running the following command in the source directory that you created in the previous step: cd $HOME/cos-src cros sdk --enter Once inside chroot , you can build the disk image.


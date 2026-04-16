---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:51:39.144Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "INET_DIAG_DESTROY kernel configuration"
feature_slug: "inet-diag-destroy-kernel-configuration"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring"
keywords:
  - "inet"
  - "diag"
  - "destroy"
  - "kernel"
  - "configuration"
  - "enabled"
  - "container"
  - "optimized"
---

# INET_DIAG_DESTROY kernel configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Support for the INET_DIAG_DESTROY kernel configuration is enabled in Container-Optimized OS.

## Extended Definition

Support for the INET_DIAG_DESTROY kernel configuration is enabled in Container-Optimized OS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- Creating an instance for advanced scenarios Use this method to select a specific Container-Optimized OS image, to deploy multiple containers, and to use cloud-init for advanced configuration.
- You can use the cloud-init tool with Container-Optimized OS to apply configuration information that you supply in a cloud-config format .
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --metadata google-logging-enabled=true Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- Create an instance with a logging agent enabled Console To run a Compute Engine instance on Container-Optimized OS with the fluent-bit logging agent enabled, perform the following: Open the Compute Engine instance creation page on Google Cloud console.
- Click Create to create and boot the instance. gcloud To run a Compute Engine instance on Container-Optimized OS with the logging agent enabled, use the gcloud compute instances create command, and include google-logging-enabled=true in the metadata.

### "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use cloud-init to enable health monitoring with the following cloud-config example: #cloud-config runcmd: - systemctl start node-problem-detector Using metadata In Container-Optimized OS Milestone 88 and later, the Node Problem Detector can also be enabled by setting the value of google-monitoring-enabled to true in the custom metadata section.
- To enable monitoring when creating an instance: gcloud compute instances create VM NAME \ --image= IMAGE \ --image-project=cos-cloud \ --metadata=google-monitoring-enabled=true Replace the following: VM NAME : name of the new VM IMAGE : a specific version of a public Container-Optimized OS image.
- Disabling health monitoring To disable the service that has already been enabled through your cloud-config or through your startup script , remove the systemctl start node-problem-detector step, and then reboot the Container-Optimized OS instance.
- Enabling health monitoring Note: Google Kubernetes Engine Container-Optimized OS nodes and Google Distributed Cloud cluster nodes from version 1.4.0+ have Node Problem Detector enabled by default.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.044Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "SCSI logging"
feature_slug: "scsi-logging"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
keywords:
  - "scsi"
  - "logging"
  - "container"
  - "optimized"
  - "os"
  - "supports"
---

# SCSI logging

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS supports SCSI logging; Container-Optimized OS supports SCSI logging.

## Extended Definition

Container-Optimized OS supports SCSI logging; Container-Optimized OS supports SCSI logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)

## Supporting Pages

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --metadata google-logging-enabled=true Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.
- Create an instance with a logging agent enabled Console To run a Compute Engine instance on Container-Optimized OS with the fluent-bit logging agent enabled, perform the following: Open the Compute Engine instance creation page on Google Cloud console.
- Click Create to create and boot the instance. gcloud To run a Compute Engine instance on Container-Optimized OS with the logging agent enabled, use the gcloud compute instances create command, and include google-logging-enabled=true in the metadata.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Logging agent Container-Optimized OS Arm-based images use fluent-bit as Cloud Logging agent and x86-based images use fluentd.
- You can also see all available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images --filter = "name 'cos-arm64- '" The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY Arm-based Container-Optimized OS images share the same versioning scheme and LTS milestone lifecycle with x86-based images.
- The following table describes which containers are compatible with Arm-based images: Container images Compatible with Arm-based images gcr.io/cos-cloud/toolbox Yes gcr.io/cos-cloud/cos-gpu-installer No gcr.io/stackdriver-agents/stackdriver-logging-agent No gcr.io/gce-containers/konlet No Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Using Arm-based Container-Optimized OS images Stay organized with collections Save and categorize content based on your preferences.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- The systemd service supports all of the CIS Level 2 recommendations except for the following: 4.1.1.2 Ensure Logging is running (ID: logging-service-running) This recommendation is opted-out by default but can be re-enabled by deleting the ID from the opted-out list which can be found in the /etc/cis-scanner/env vars file.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.032Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "DNSSEC disabled by default for COS TPU VMs"
feature_slug: "dnssec-disabled-by-default-for-cos-tpu-vms"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
keywords:
  - "dnssec"
  - "disabled"
  - "default"
  - "cos"
  - "tpu"
  - "vms"
  - "container"
  - "optimized"
---

# DNSSEC disabled by default for COS TPU VMs

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS disables DNSSEC by default on COS TPU virtual machines.

## Extended Definition

Container-Optimized OS disables DNSSEC by default on COS TPU virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- Assuming the cloud-init file is called filename in the current directory, the following command creates a Container-Optimized OS instance and trigger cloud-init by assigning the contents of the file to the user-data key in the Instance Metadata: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance.
- Review the available images , then use the following command to create a cos node image instance: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --machine-type machine-type-name Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance, obtained from the list of available images .

### Automatic updates \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable or disable automatic updates In milestone 117 and later, the automatic updates feature is disabled by default on all Container-Optimized OS images.
- The image ships with the automatic updates feature enabled; this means that a default Container-Optimized OS instance always downloads the latest OS version and installs it on the passive partition soon after it's released.
- UEFI Secure Boot is not enabled on Container-Optimized OS VMs by default.
- When Container-Optimized OS is used as part of a managed service (for example, Google Kubernetes Engine, Cloud SQL, etc.), the managed service takes care of updating the Container-Optimized OS instance for the users.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.
- For the following recommendations, cis-level2 service configures the instance but does not verify the compliance status: 105 and lower: 3.3.1.1 Ensure IPv6 default deny firewall policy 3.3.1.2 Ensure IPv6 loopback traffic is configured 3.3.1.3 Ensure IPv6 outbound and established connections are configured 3.3.1.4 Ensure IPv6 firewall rules exist for all open ports 3.3.2.1 Ensure default deny firewall policy 3.3.2.2 Ensure loopback traffic is configured 3.3.2.3 Ensure outbound and established connections are configured 109 and later: 3.3.1.4 Ensure IPv6 firewall rules exist for all open ports The cis-level2 service is disabled by default.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .


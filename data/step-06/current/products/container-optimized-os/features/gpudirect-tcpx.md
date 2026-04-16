---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.101Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "GPUDirect-TCPX"
feature_slug: "gpudirect-tcpx"
latest_feature_date: "2023-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits"
keywords:
  - "gpudirect"
  - "tcpx"
  - "container"
  - "optimized"
  - "os"
  - "syncs"
  - "updates"
  - "adds"
---

# GPUDirect-TCPX

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS syncs updates for GPUDirect-TCPX support; Container-Optimized OS adds support for GPUDirect-TCPX.

## Extended Definition

Container-Optimized OS syncs updates for GPUDirect-TCPX support; Container-Optimized OS adds support for GPUDirect-TCPX.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)

## Supporting Pages

### Automatic updates \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The image ships with the automatic updates feature enabled; this means that a default Container-Optimized OS instance always downloads the latest OS version and installs it on the passive partition soon after it's released.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Automatic updates Stay organized with collections Save and categorize content based on your preferences.
- Changes to automatic update behavior The Container-Optimized OS team is actively working on improving our backend infrastructure that makes automatic updates possible.
- Enable or disable automatic updates In milestone 117 and later, the automatic updates feature is disabled by default on all Container-Optimized OS images.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- You can also see all currently available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-69-10895-385-0 cos-cloud cos-69-lts READY cos-73-11647-534-0 cos-cloud cos-73-lts READY cos-77-12371-251-0 cos-cloud cos-77-lts READY cos-81-12871-103-0 cos-cloud cos-81-lts READY cos-beta-81-12871-44-0 cos-cloud cos-beta READY cos-dev-84-13078-0-0 cos-cloud cos-dev READY cos-stable-81-12871-103-0 cos-cloud cos-stable READY Note: The most current Container-Optimized OS images are now available under the project cos-cloud , and use the name prefix of cos .
- Assuming the cloud-init file is called filename in the current directory, the following command creates a Container-Optimized OS instance and trigger cloud-init by assigning the contents of the file to the user-data key in the Instance Metadata: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance.
- Review the available images , then use the following command to create a cos node image instance: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --machine-type machine-type-name Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance, obtained from the list of available images .

### Container-Optimized OS Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Automatic Updates : Container-Optimized OS instances are configured to automatically download weekly updates in the background; only a reboot is necessary to use the latest updates.
- Limitations Container-Optimized OS has limited or no support for some of the common features you may be familiar with on other operating systems: Container-Optimized OS does not include a package manager; as such, you'll be unable to install software packages directly on an instance.
- Container-Optimized OS may not be the right choice for you in the following cases: Your application is not containerized or your containerized application depends on kernel modules, drivers and other additional packages that are not available in Container-Optimized OS.
- Features and Benefits Container-Optimized OS provides the following benefits: Run Containers Out of the Box : Container-Optimized OS instances come pre-installed with the Docker and containerd runtimes and cloud-init .


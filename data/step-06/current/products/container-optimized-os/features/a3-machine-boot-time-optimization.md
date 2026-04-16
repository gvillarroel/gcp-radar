---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.088Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "A3 machine boot time optimization"
feature_slug: "a3-machine-boot-time-optimization"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "a3"
  - "machine"
  - "boot"
  - "time"
  - "optimization"
  - "container"
  - "optimized"
  - "os"
---

# A3 machine boot time optimization

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS improves boot time on A3 machines by about five seconds; Container-Optimized OS improves boot time on A3 machines by about five seconds.

## Extended Definition

Container-Optimized OS improves boot time on A3 machines by about five seconds; Container-Optimized OS improves boot time on A3 machines by about five seconds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following entries in the /etc/chrony/chrony.conf configuration file show commented out default configuration values to help the administrator make any desired changes: cat /etc/chrony/chrony.conf Use custom NTP servers server metadata.google.internal prefer iburst Record the rate at which the system clock gains/losses time. driftfile /var/lib/chrony/drift Allow the system clock to be stepped in the first three updates if its offset is larger than 1 second. makestep 1.0 3 Enable kernel synchronization of the real-time clock (RTC). rtcsync The NTP server is set from eth0 's DHCP response, which is usually the Compute Engine's metadata server: networkctl status eth0 grep NTP NTP: 169.254.169.254 Changing the time zone The default time zone of Container-Optimized OS from Google is UTC0.
- Review the available images , then use the following command to create a cos node image instance: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --zone compute-zone \ --machine-type machine-type-name Replace the following: instance-name : the name of your VM instance. image-name : the name of the Container-Optimized OS image for the instance, obtained from the list of available images .
- An alternative to systemctl enable is to use systemctl start , as in the example above. cloud-init modules such as write files and runcmd , which are typically run once-per-instance on other distros, are run on every boot on Container-Optimized OS.
- Time synchronization Before milestone 85 , Container-Optimized OS uses systemd 's systemd-timesyncd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the SNTP protocol.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Thus, every time a Container-Optimized OS node reboots, it starts from a clean slate.
- Automatic updates Container-Optimized OS's automatic updates feature allows timely delivery of security patches to running VMs.
- Immutable root filesystem and verified boot The Container-Optimized OS root filesystem is always mounted as read-only.
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Shell After you connect to your Container-Optimized OS VM instances , you can run the following command manually to install drivers: sudo cos-extensions install gpu Note: You need to run the preceding command on every VM reboot to configure GPU drivers.
- Unlike some other distros, Container-Optimized OS does not allow users to enroll their Machine Owner Key (MOK) and use the keys to sign custom kernel modules.
- This page describes how to use NVIDIA graphics processing unit (GPU) hardware accelerators on Container-Optimized OS virtual machine (VM) instances.
- Some GPU driver versions won't qualify for Container-Optimized OS, and the qualification timeline is not guaranteed.


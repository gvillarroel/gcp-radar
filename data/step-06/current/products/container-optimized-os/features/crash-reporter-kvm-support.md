---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.074Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Crash reporter KVM support"
feature_slug: "crash-reporter-kvm-support"
latest_feature_date: "2024-08-20"
deprecation_date: "2024-08-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools"
keywords:
  - "crash"
  - "reporter"
  - "kvm"
  - "enables"
  - "component"
  - "previously"
  - "collecting"
  - "environments"
---

# Crash reporter KVM support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Enables KVM support in the crash reporter component; The crash reporter previously supported collecting crash data in KVM environments; deprecated on 2024-08-20.

## Extended Definition

Enables KVM support in the crash reporter component; The crash reporter previously supported collecting crash data in KVM environments; deprecated on 2024-08-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools)

## Supporting Pages

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Collecting debugging information using sosreport Stay organized with collections Save and categorize content based on your preferences.
- The archive may contain personally identifiable information (PII), because it collects data from many critical system components (e.g. journald).
- Note: When troubleshooting node availability and startup issues, collecting sosreport might be challenging.

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If enabled, the behavior depends on the release channel: cos-dev and cos-beta: Updates from latest OS version in the corresponding image family LTS milestone and cos-stable: Updates from latest OS version from the same milestone Milestones < 117: Enabled by default Milestones >= 117: Disabled by default cos-metrics-enabled Enables crash dump collection.
- The previous example can be expanded to collect usage statistics and crash dump collection with the following command: gcloud compute instances create instance-name \ --image image-name \ --image-project cos-cloud \ --metadata-from-file user-data= filename \ --metadata=cos-metrics-enabled=true Other metadata flags Metadata Key Description Default Behavior cos-update-strategy Specifies automatic update behavior.
- Crash reports contain a snippet of the most recent portion of the kernel log buffer at the time of the crash, and may contain user or personal information, depending on what was happening at the time of the crash.
- Disabled by default Caution: Enabling the cos-metrics-enabled setting permits collection of some crash reports that help Google improve the cos node image.

### Use debugging tools \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Enable kernel crash dump collection In the rare event of a kernel panic, enabling kernel crash dump collection can help you and Cloud Customer Care determine the root cause.
- This user guide explains how to collect kernel crash dumps on GKE nodes with Container-Optimized OS or Container-Optimized OS instances created from Compute Engine.
- To enable crash dumps, see User Guide: Kernel Crash Dump Collection for COS in the open source documentation.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.421Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "TS54 firmware for Bare Metal Solution servers"
feature_slug: "ts54-firmware-for-bare-metal-solution-servers"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
  - "https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console"
keywords:
  - "introduced"
  - "available"
  - "ts54"
  - "firmware"
  - "servers"
---

# TS54 firmware for Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

TS54 is introduced as the latest available firmware version for Bare Metal Solution servers.

## Extended Definition

TS54 is introduced as the latest available firmware version for Bare Metal Solution servers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)

## Supporting Pages

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- General information Firmware version Machine series Machine type Lifecycle stage EOL and firmware deprecation date BIOS PUR043.45.00.002 (TS54) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA To be determined BIOS PUR043.37.14.021 (TS24.02) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 BIOS PUR043.37.16.023 (TS24.05) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 3.50.58 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA March 2024 3.80.24 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA To be determined Features Firmware version Features BIOS PUR043.45.00.002 (TS54) Support for interactive serial console.
- Server name CPU cores vCPUs Sockets Memory CPU platform Ethernet ports General-purpose servers o2-standard-16-metal 8 16 2 192 GB Intel Xeon Gold, 5200 series, 3.8 GHz 4 port 25GbE NIC o2-standard-32-metal 16 32 2 384 GB Intel Xeon Gold, 6200 series, 3.2 GHz 4 port 25GbE NIC o2-standard-48-metal 24 48 2 768 GB Intel Xeon Gold, 6200 series, 3.0 GHz 4 port 25GbE NIC o2-standard-112-metal 56 112 2 1.5 TB Intel Xeon Platinum, 8200 series, 2.2 GHz 4 port 25GbE NIC High-memory general-purpose servers o2-highmem-224-metal 112 224 4 3 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 4 port 25GbE NIC Memory-optimized servers o2-ultramem-672-metal 336 672 12 18 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 6 port 25GbE NIC o2-ultramem-896-metal 448 896 16 24 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 8 port 25GbE NIC Firmware We recommend that you install the latest version of Bare Metal Solution firmware on your servers: TS54 .
- Identify your firmware version To identify the current firmware version of your Bare Metal Solution server, run the following command: sudo dmidecode -s bios-version Available firmware versions The following table provides details for the firmware versions available for Bare Metal Solution.
- If you need to control traffic between the servers or applications within the Bare Metal Solution environment (east-west traffic), ask your Google Cloud sales representative for the available options.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform all tasks in this document, you must have either of the following roles: roles/baremetalsolution.admin roles/baremetalsolution.editor Verify that you have the required version of the firmware: For general-purpose servers, TS54 ( 43.45.00.002 ) or higher.
- The interactive serial console is supported only on the following servers: General-purpose servers with TS54 ( 43.45.00.002 ) or higher firmware version.
- For example, in the case of a general-purpose server, the output shows a BIOS version of 43.45.00.002 or higher: Version: BIOS PUR043.45.00.002 If the BIOS version is lower than the required firmware, upgrade the firmware for your servers.
- Memory-optimized servers with 3.50.58 or higher firmware version.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform all tasks in this document, you must have either of the following roles: roles/baremetalsolution.admin roles/baremetalsolution.editor Verify that you have the required version of the firmware: For general-purpose servers, TS54 ( 43.45.00.002 ) or higher.
- The interactive serial console is supported only on the following servers: General-purpose servers with TS54 ( 43.45.00.002 ) or higher firmware version.
- For example, in the case of a general-purpose server, the output shows a BIOS version of 43.45.00.002 or higher: Version: BIOS PUR043.45.00.002 If the BIOS version is lower than the required firmware, upgrade the firmware for your servers.
- Memory-optimized servers with 3.50.58 or higher firmware version.


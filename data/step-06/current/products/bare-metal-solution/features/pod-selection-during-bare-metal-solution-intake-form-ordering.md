---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.412Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Pod selection during Bare Metal Solution intake form ordering"
feature_slug: "pod-selection-during-bare-metal-solution-intake-form-ordering"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "selection"
  - "during"
  - "intake"
  - "form"
---

# Pod selection during Bare Metal Solution intake form ordering

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

You can now select the pod for Bare Metal Solution resources through the Google Cloud console intake form.

## Extended Definition

You can now select the pod for Bare Metal Solution resources through the Google Cloud console intake form.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- See Choose standard networking or explore advanced networking options and Use the Google Cloud console intake form to enter your selections .
- See Use the Google Cloud console intake form to enter your selections .
- Note: You can also configure multiple networks on a server while provisioning through the Google Cloud console intake form.
- Create a VRF When you provision a new network through the Google Cloud console intake form , a VRF is created implicitly.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Use the Google Cloud console intake form to enter your selections Now that you have ordered your Bare Metal Solution resources and are prepared to bring them online, you need to enter the information for your Bare Metal Solution environment into the Google Cloud console intake form.
- Before you begin Before you start filling out the Bare Metal Solution intake form, do the following: Place your order for networking, servers, and storage with Google Cloud Sales .
- Go to the Google Cloud console intake form. https://console.cloud.google.com/compute/bareMetalSolution/add Select the region where your Bare Metal Solution environment is located.
- We recommend that you coordinate with your network team to have your IP addresses, VLANs, and other network information ready before you submit the intake form.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- By default, bond0 is mapped to a client network and bond1 to a private network created through the Google Cloud console intake form.
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- General information Firmware version Machine series Machine type Lifecycle stage EOL and firmware deprecation date BIOS PUR043.45.00.002 (TS54) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA To be determined BIOS PUR043.37.14.021 (TS24.02) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 BIOS PUR043.37.16.023 (TS24.05) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 3.50.58 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA March 2024 3.80.24 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA To be determined Features Firmware version Features BIOS PUR043.45.00.002 (TS54) Support for interactive serial console.
- Server name CPU cores vCPUs Sockets Memory CPU platform Ethernet ports General-purpose servers o2-standard-16-metal 8 16 2 192 GB Intel Xeon Gold, 5200 series, 3.8 GHz 4 port 25GbE NIC o2-standard-32-metal 16 32 2 384 GB Intel Xeon Gold, 6200 series, 3.2 GHz 4 port 25GbE NIC o2-standard-48-metal 24 48 2 768 GB Intel Xeon Gold, 6200 series, 3.0 GHz 4 port 25GbE NIC o2-standard-112-metal 56 112 2 1.5 TB Intel Xeon Platinum, 8200 series, 2.2 GHz 4 port 25GbE NIC High-memory general-purpose servers o2-highmem-224-metal 112 224 4 3 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 4 port 25GbE NIC Memory-optimized servers o2-ultramem-672-metal 336 672 12 18 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 6 port 25GbE NIC o2-ultramem-896-metal 448 896 16 24 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 8 port 25GbE NIC Firmware We recommend that you install the latest version of Bare Metal Solution firmware on your servers: TS54 .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.437Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Draft request support in Bare Metal Solution intake form"
feature_slug: "draft-request-support-in-bare-metal-solution-intake-form"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "draft"
  - "request"
  - "intake"
  - "allows"
  - "form"
---

# Draft request support in Bare Metal Solution intake form

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Allows saving intake requests as drafts and submitting them later.

## Extended Definition

Allows saving intake requests as drafts and submitting them later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the Google Cloud console intake form to enter your selections Now that you have ordered your Bare Metal Solution resources and are prepared to bring them online, you need to enter the information for your Bare Metal Solution environment into the Google Cloud console intake form.
- Before you begin Before you start filling out the Bare Metal Solution intake form, do the following: Place your order for networking, servers, and storage with Google Cloud Sales .
- Go to the Google Cloud console intake form. https://console.cloud.google.com/compute/bareMetalSolution/add Select the region where your Bare Metal Solution environment is located.
- Note: If you need to make changes to your Bare Metal Solution environment after you submit the form, contact Customer Care and include the reference number in your request.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can provision multiple storage volumes in a single request only through the Google Cloud console intake form.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /nfsShares" -d \ '{ "name": "projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS VOLUME NAME ", "labels": { "nfsKey1": "some value", "key2": "another value", }, "requestedSizeGib": " SIZE GIB ", "storageType": " STORAGE TYPE ", "allowedClients": [ { "network": "projects/ PROJECT ID /locations/ REGION /networks/ NETWORK NAME ", "allowedClientsCidr": " IP ADDRESS RANGE ", "mountPermissions": " MOUNT PERMISSIONS ", "allowDev": ALLOW DEV , "allowSuid": ALLOW SUID , "noRootSquash": ENABLE ROOT SQUASH , } ], }' Because creating an NFS volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- See Choose standard networking or explore advanced networking options and Use the Google Cloud console intake form to enter your selections .
- Note: You can also configure multiple networks on a server while provisioning through the Google Cloud console intake form.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- By default, bond0 is mapped to a client network and bond1 to a private network created through the Google Cloud console intake form.
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- General information Firmware version Machine series Machine type Lifecycle stage EOL and firmware deprecation date BIOS PUR043.45.00.002 (TS54) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA To be determined BIOS PUR043.37.14.021 (TS24.02) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 BIOS PUR043.37.16.023 (TS24.05) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 3.50.58 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA March 2024 3.80.24 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA To be determined Features Firmware version Features BIOS PUR043.45.00.002 (TS54) Support for interactive serial console.
- Server name CPU cores vCPUs Sockets Memory CPU platform Ethernet ports General-purpose servers o2-standard-16-metal 8 16 2 192 GB Intel Xeon Gold, 5200 series, 3.8 GHz 4 port 25GbE NIC o2-standard-32-metal 16 32 2 384 GB Intel Xeon Gold, 6200 series, 3.2 GHz 4 port 25GbE NIC o2-standard-48-metal 24 48 2 768 GB Intel Xeon Gold, 6200 series, 3.0 GHz 4 port 25GbE NIC o2-standard-112-metal 56 112 2 1.5 TB Intel Xeon Platinum, 8200 series, 2.2 GHz 4 port 25GbE NIC High-memory general-purpose servers o2-highmem-224-metal 112 224 4 3 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 4 port 25GbE NIC Memory-optimized servers o2-ultramem-672-metal 336 672 12 18 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 6 port 25GbE NIC o2-ultramem-896-metal 448 896 16 24 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 8 port 25GbE NIC Firmware We recommend that you install the latest version of Bare Metal Solution firmware on your servers: TS54 .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.997Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Provision storage volume resources in Bare Metal Solution"
feature_slug: "provision-storage-volume-resources-in-bare-metal-solution"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
keywords:
  - "provision"
  - "resources"
  - "volume"
  - "storage"
  - "solution"
  - "metal"
  - "bare"
  - "in"
---

# Provision storage volume resources in Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Adds support for provisioning storage volume resources in Bare Metal Solution.

## Extended Definition

Adds support for provisioning storage volume resources in Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- Provision storage volume resources in your Bare Metal Solution environment After ordering storage resources for your Bare Metal Solution environment, you can provision the resources once they are available.
- You can use either the NFS share name or ID as the NFS SHARE variable: gcloud bms nfs-shares describe NFS SHARE --project= PROJECT ID --region= REGION The output provides details about the allowed clients, NFS settings, the NFS server and its state, and the storage volume. allowedClients: – allowDev: true allowedClientsCidr: 192.168.1.1/32 mountPermissions: READ WRITE network: projects/ PROJECT ID /locations/ REGION /networks/at-1111111-vlan001 noRootSquash: true shareIp: 192.168.1.240 name: projects/ PROJECT ID /locations/ REGION /nfsShares/ NFS SHARE nfsShareId: at-2222222-nfs001 state: PROVISIONED volume: projects/ PROJECT ID /locations/ REGION /volumes/at-2222222-nfs001-vol000 API To view the status of your NFS file storage within theBare Metal Solution environment, including allowed clients and NFS properties, enter your project ID and region into the following curl command.
- Manage NFS file storage You can manage your NFS file storage in the following ways: View NFS volumes Organize NFS volumes by using labels Rename an NFS volume Create an NFS volume Update an NFS volume Delete an NFS volume View NFS volumes After you order and provision NFS for Bare Metal Solution, you can view the status of your NFS file storage and confirm that Google Cloud implemented your configured settings as expected.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- Use the following storage recommendations to improve the performance of your databases and applications in your Bare Metal Solution environment: When you deploy multiple storage volumes, use consistent volume sizes to get consistent performance for databases and applications.
- When you remove a storage volume from service in a Bare Metal Solution environment, the Bare Metal Solution server reboots.
- Consider using a single VPC network with global dynamic routing enabled if your Bare Metal Solution environment will require access to other Google Cloud regions to connect to any of the following resources: Other Bare Metal Solution environments VMs in other regions Other Google Cloud services Your on-premises sites in other geographical locations Using a VPC network with global dynamic routing and custom advertisement mode , you can set up a routed environment to connect your Bare Metal Solution instances directly to your Google Cloud and extended on-premises environments in other regions, without any additional configuration in Google Cloud.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bare Metal Solution lets you provision up to 10 Fiber Channel storage volumes in a single configuration request.
- Get the list of the Bare Metal Solution resources you ordered, including the server types, requested storage, quantity, and location.
- Create a Google Cloud project to provision Bare Metal Solution resources and submit the intake form.
- Use the Google Cloud console intake form to enter your selections Now that you have ordered your Bare Metal Solution resources and are prepared to bring them online, you need to enter the information for your Bare Metal Solution environment into the Google Cloud console intake form.


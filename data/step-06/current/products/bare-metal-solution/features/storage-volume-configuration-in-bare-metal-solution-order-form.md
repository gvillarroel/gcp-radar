---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.015Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Storage volume configuration in Bare Metal Solution Order Form"
feature_slug: "storage-volume-configuration-in-bare-metal-solution-order-form"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "configuration"
  - "volume"
  - "storage"
  - "order"
  - "solution"
  - "metal"
  - "bare"
  - "in"
---

# Storage volume configuration in Bare Metal Solution Order Form

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Allows selecting storage volume name, type, size, and protocol during server deployment requests.

## Extended Definition

Allows selecting storage volume name, type, size, and protocol during server deployment requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Manage NFS file storage You can manage your NFS file storage in the following ways: View NFS volumes Organize NFS volumes by using labels Rename an NFS volume Create an NFS volume Update an NFS volume Delete an NFS volume View NFS volumes After you order and provision NFS for Bare Metal Solution, you can view the status of your NFS file storage and confirm that Google Cloud implemented your configured settings as expected.
- Provision storage volume resources in your Bare Metal Solution environment After ordering storage resources for your Bare Metal Solution environment, you can provision the resources once they are available.
- Before detaching the storage volume through the Google Cloud console, you must update the OS configuration of your Bare Metal Solution server.
- NAME PROJECT REGION MACHINE TYPE IP ADDRESSES STATE SERVER NAME PROJECT ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING Additional command options include: --region : View devices in a specific Google Cloud region. --limit : Limit the output to show a specific number of devices To get network and storage information for a specific server in your Bare Metal Solution environment, enter your server name, project ID, and region, and issue the gcloud bms instances describe command: gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION The following output example shows an operational server with 12 LUNs, a client network of 192.168.1.1, and a private network of 192.168.2.1. luns: - bootLun: true name: SERVER NAME -lun000-b1 sizeGb: '200' state: READY storageVolume: SERVER NAME -vol000-b1 - name: STORAGE DEVICE NAME -lun001 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun002 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun003 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun004 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun005 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun006 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun007 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun008 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun009 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun010 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun011 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 - name: STORAGE DEVICE NAME -lun012 sizeGb: '85' state: READY storageVolume: STORAGE DEVICE NAME -vol001 machineType: o2-standard-32-metal name: projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME networks: - ipAddress: 192.168.1.1 macAddress: - 34:80:0D:52:AF:28 - 34:80:0D:15:3E:0D network: STORAGE DEVICE NAME -vlan001 - ipAddress: 192.168.2.1 macAddress: - 34:80:0D:52:AF:38 - 34:80:0D:15:3E:1D network: STORAGE DEVICE NAME -vlan002 state: RUNNING API Open a Cloud Shell terminal window in your Google Cloud console.

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- Set the ORACLEASM SCANORDER variable If you're using Oracle ASMLib, then to stop Oracle ASM from selecting your single path ASM device first, set the scan order as follows: ORACLEASM SCANORDER="dm" ORACLEASM SCANEXCLUDE="sd" We require this setting because the Bare Metal Solution storage environment uses DM devices that you can view in /proc/partitions file.
- To stop Oracle ASM from selecting your single path ASM device first, set the scan order as follows: ORACLEASM SCANORDER="dm" ORACLEASM SCANEXCLUDE="sd" We require this setting because the Bare Metal Solution storage environment uses DM devices that you can view in /proc/partitions .
- 118 @ bond0 : < BROADCAST , MULTICAST , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 13 : virbr0 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000 14 : virbr0 - nic : < BROADCAST , MULTICAST > mtu 1500 qdisc pfifo fast master virbr0 state DOWN mode DEFAULT group default qlen 1000 Using root-level privileges, add MTU=9000 to the interface configuration file for all servers in the Bare Metal Solution environment that use jumbo frames.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- When you place your order for data volume snapshots, you need to tell Google Cloud which action we should take when the snapshot reserve fills up: Delete the oldest snapshot first (recommended) Delete the newest snapshot first Take the volume offline Google Cloud takes snapshots of the boot OS volume automatically every day at 12:10 AM in the region where your Bare Metal Solution servers are located.
- Use the following storage recommendations to improve the performance of your databases and applications in your Bare Metal Solution environment: When you deploy multiple storage volumes, use consistent volume sizes to get consistent performance for databases and applications.
- When you remove a storage volume from service in a Bare Metal Solution environment, the Bare Metal Solution server reboots.


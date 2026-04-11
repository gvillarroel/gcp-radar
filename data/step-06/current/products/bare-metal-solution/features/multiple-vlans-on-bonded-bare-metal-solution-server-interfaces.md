---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.999Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Multiple VLANs on bonded Bare Metal Solution server interfaces"
feature_slug: "multiple-vlans-on-bonded-bare-metal-solution-server-interfaces"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "bonded"
  - "vlans"
  - "multiple"
  - "server"
  - "solution"
  - "metal"
  - "bare"
  - "on"
---

# Multiple VLANs on bonded Bare Metal Solution server interfaces

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Allows users to add multiple VLANs to the same bonded server interface.

## Extended Definition

Allows users to add multiple VLANs to the same bonded server interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- During the PoC, we learned how to configure multiple elements together successfully – Oracle, Google Cloud Backup and DR, storage, and regional extension links – in a Bare Metal Solution environment.
- Number of processors used The Bare Metal Solution servers come in several sizes .

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- 118 @ bond0 : < BROADCAST , MULTICAST , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 13 : virbr0 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000 14 : virbr0 - nic : < BROADCAST , MULTICAST > mtu 1500 qdisc pfifo fast master virbr0 state DOWN mode DEFAULT group default qlen 1000 Using root-level privileges, add MTU=9000 to the interface configuration file for all servers in the Bare Metal Solution environment that use jumbo frames.
- In this case, 192.x.x.x is your Bare Metal Solution server. restrict 192.x.x.x mask 255.255.255.0 nomodify notrap server 10.x.x.x prefer To start syncing, update the time server to start syncing. ntpdate -qu SERVER NAME Run root script on one node at a time Run the root script root.sh on one node at a time.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Fibre Channel-based block storage presented as multipath LUNs and shared with multiple Bare Metal Solution servers.
- OS version OS image code Machine series Machine type Lifecycle stage EOL and image deprecation date RHEL 7.7 for SAP LAMBRHEL77SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers End of Life August 2023 RHEL 7.9 RHEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2024 RHEL 8.4 (Minor version locked) RHEL84 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 8 (Latest minor release) RHEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2029 RHEL 8.0 for SAP RHEL80SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life December 2020 RHEL 8.1 for SAP RHEL81SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life November 2023 RHEL 9.4 (Minor version locked) RHEL94 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 9 (Latest minor release) RHEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2032 OEL 7.9 OEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2024 OEL 8 (Latest minor release) OEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2029 OEL 8.8 (Minor version locked) OEL88 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2025 OEL 9 OEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2032 SLES 15 SP1 SLES15SPx o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life January 2024 SLES 12 SP4 for SAP SLES12SP4SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Life June 2023 SLES 12 SP5 for SAP SLES12SP5SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support October 2027 SLES 15 for SAP SLES15SAP o2-standard-48-metal o2-standard-32-metal o2-standard-112-metal o2-standard-16-metal o2-highmem-224-metal General-purpose End of Life December 2022 SLES 15 SP1 for SAP SLES15SPxSAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support January 2024 SLES 15 SP2 for SAP LAMBSLES15SP2SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA December 2024 Bring Your Own Image (BYOI) The Bare Metal Solution servers are certified to run only the OS images of the following distributions: Red Hat Enterprise Linux (RHEL) Oracle Linux (OL) SUSE Linux Enterprise Server (SLES) Any other OS hasn't been tested or certified to run on the Bare Metal Solution servers.
- Server name CPU cores vCPUs Sockets Memory CPU platform Ethernet ports General-purpose servers o2-standard-16-metal 8 16 2 192 GB Intel Xeon Gold, 5200 series, 3.8 GHz 4 port 25GbE NIC o2-standard-32-metal 16 32 2 384 GB Intel Xeon Gold, 6200 series, 3.2 GHz 4 port 25GbE NIC o2-standard-48-metal 24 48 2 768 GB Intel Xeon Gold, 6200 series, 3.0 GHz 4 port 25GbE NIC o2-standard-112-metal 56 112 2 1.5 TB Intel Xeon Platinum, 8200 series, 2.2 GHz 4 port 25GbE NIC High-memory general-purpose servers o2-highmem-224-metal 112 224 4 3 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 4 port 25GbE NIC Memory-optimized servers o2-ultramem-672-metal 336 672 12 18 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 6 port 25GbE NIC o2-ultramem-896-metal 448 896 16 24 TB Intel Xeon Platinum, 8200 series, 2.7 GHz 8 port 25GbE NIC Firmware We recommend that you install the latest version of Bare Metal Solution firmware on your servers: TS54 .
- Keeping routing simple Outside of the other servers in the same Bare Metal Solution region, your servers likely need to communicate with one or more of the following: Your endpoints in your Google Cloud environment Your extended on-premises environment through your Google Cloud environment Your servers in Bare Metal Solution environments in other regions through your Google Cloud environment The internet through your Google Cloud environment Note: For simplicity and flexibility, we recommend configuring custom advertisement mode with a default route (0.0.0.0/0).


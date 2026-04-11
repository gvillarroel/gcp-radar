---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.000Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Network templates for Bare Metal Solution deployments"
feature_slug: "network-templates-for-bare-metal-solution-deployments"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
keywords:
  - "deployments"
  - "templates"
  - "introduces"
  - "network"
  - "solution"
  - "metal"
  - "bare"
  - "for"
---

# Network templates for Bare Metal Solution deployments

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Introduces network templates to support active/active and active/backup high-availability designs.

## Extended Definition

Introduces network templates to support active/active and active/backup high-availability designs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.
- Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution Overview To provide resiliency for your Oracle databases inside a Bare Metal Solution environment, you need to have a clear strategy for database backups and disaster recovery.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- We recommend using the following Bare Metal Solution standard networking configuration for small scale deployments: The standard networking configuration consist of the following: A single client network connects Bare Metal Solution servers to the Google Cloud using a single Partner Interconnect VLAN attachment pair.
- Choose standard networking or explore advanced networking options The standard networking configuration for Bare Metal Solution offers a basic network topology that is appropriate for most small-scale deployments.
- To learn more about templates and request them for your Bare Metal Solution network, contact Google Cloud Sales .
- The diagram shows three different traffic flows: Green flow On-premises network -> Cloud Interconnect ( or cloud VPN) -> Partner Interconnect to BMS -> BMS server Red flow BMS server -> Partner Interconnect -> NATVM -> Internet Blue flow Remote or Home offices -> Public Internet -> JumpVMs -> BMS server Partner Interconnect for Bare Metal Solution The connection between your Google Cloud environment and your Bare Metal Solution environment uses the Partner Interconnect framework.

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- 118 @ bond0 : < BROADCAST , MULTICAST , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 13 : virbr0 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000 14 : virbr0 - nic : < BROADCAST , MULTICAST > mtu 1500 qdisc pfifo fast master virbr0 state DOWN mode DEFAULT group default qlen 1000 Using root-level privileges, add MTU=9000 to the interface configuration file for all servers in the Bare Metal Solution environment that use jumbo frames.
- These instructions use 10g as a value, but the behavior is the same for 19c Grid Infrastructure as well. (Follow MOS Note : 1679409.1) Create your ASM disk group with external redundancy The storage provided by Bare Metal Solution uses NETAPP RAID-DP , which is a form of RAID 6 that protects data even if two disks fail.


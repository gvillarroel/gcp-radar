---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.003Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Start stopped Bare Metal Solution servers"
feature_slug: "start-stopped-bare-metal-solution-servers"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-setup"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
keywords:
  - "operators"
  - "stopped"
  - "start"
  - "allows"
  - "servers"
  - "solution"
  - "metal"
  - "bare"
---

# Start stopped Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Allows operators to start a Bare Metal Solution server that has stopped.

## Extended Definition

Allows operators to start a Bare Metal Solution server that has stopped.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- Number of processors used The Bare Metal Solution servers come in several sizes .

### "Quickstart: Set up Google Cloud to work with your Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-setup](https://docs.cloud.google.com/bare-metal/docs/bms-setup)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example, adds the 0.0.0.0/0 custom IP to the Cloud Router's advertisements: gcloud compute routers update-bgp-peer router-name \ --peer-name bgp-session-name \ --add-advertisement-ranges 0.0.0.0/0 Optionally, set the VPC Network Dynamic Routing Mode to global If you have Bare Metal Solution servers in two different regions, consider enabling global routing mode on the VPC network to have your Bare Metal Solution regions talk to each other directly over the VPC network.
- Add the network tag ( default-igw-tags ) that you just created to any existing VMs in your VPC network that need internet access, so that they can continue to access the internet after you create a new default route that your Bare Metal Solution servers can also use.
- Access internet using a Compute Engine VM and Cloud NAT The following instructions set up a NAT gateway on a Compute Engine VM to connect the servers in a Bare Metal Solution environment to the internet for purposes such as receiving software updates.
- After Google Cloud notifies you that your Bare Metal Solution servers are ready, add your new VLAN attachments to a VRF by following these steps: To add VLAN attachments to an existing VRF, follow the instructions in Add a VLAN attachment .

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- 118 @ bond0 : < BROADCAST , MULTICAST , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 13 : virbr0 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000 14 : virbr0 - nic : < BROADCAST , MULTICAST > mtu 1500 qdisc pfifo fast master virbr0 state DOWN mode DEFAULT group default qlen 1000 Using root-level privileges, add MTU=9000 to the interface configuration file for all servers in the Bare Metal Solution environment that use jumbo frames.
- In this case, 192.x.x.x is your Bare Metal Solution server. restrict 192.x.x.x mask 255.255.255.0 nomodify notrap server 10.x.x.x prefer To start syncing, update the time server to start syncing. ntpdate -qu SERVER NAME Run root script on one node at a time Run the root script root.sh on one node at a time.


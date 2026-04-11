---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.976Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Ops Agent setup on Bare Metal Solution servers"
feature_slug: "ops-agent-setup-on-bare-metal-solution-servers"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
keywords:
  - "agent"
  - "setup"
  - "ops"
  - "servers"
  - "solution"
  - "metal"
  - "bare"
  - "on"
---

# Ops Agent setup on Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

You can now set up Ops Agent on Bare Metal Solution servers to view solution metrics.

## Extended Definition

You can now set up Ops Agent on Bare Metal Solution servers to view solution metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms](https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)

## Supporting Pages

### Set up Ops Agent for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms](https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Go to Servers Identify the following information for your server: Project ID Server name Location of the server On your Bare Metal Solution server, run the following commands: GOOGLE APPLICATION CREDENTIALS="/etc/google/auth/application default credentials.json" sudo mkdir -p /etc/google/auth sudo mv "$HOME/temp.json" "$GOOGLE APPLICATION CREDENTIALS" sudo chown root:root "$GOOGLE APPLICATION CREDENTIALS" sudo chmod 0400 "$GOOGLE APPLICATION CREDENTIALS" The variable GOOGLE APPLICATION CREDENTIALS must be visible to the Ops Agent process.
- On your Bare Metal Solution server, restart the Ops Agent to use the new credentials by running the following command: sudo service google-cloud-ops-agent restart Install the Ops Agent To install the agent using the command line, do the following: Open a terminal connection to your Bare Metal Solution server using SSH or a similar tool and ensure that you have sudo access.
- DefaultEnvironment=GOOGLE APPLICATION CREDENTIALS= path to credentials file BMS PROJECT ID= PROJECT ID BMS LOCATION= REGION BMS INSTANCE ID= SERVER ID Reload the environment variables. sudo systemctl daemon - reload Your Bare Metal Solution server now has the credentials that the Ops Agent needs.
- Authorize a service account with a private key To authorize the Ops Agent by using a service account private key, do the following: Copy the private key file to the following location on your Bare Metal Solution server so that the Ops Agent can recognize the credentials.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- If you use a block-based backup disk with iSCSI, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on port TCP-3260.
- Number of processors used The Bare Metal Solution servers come in several sizes .

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- 118 @ bond0 : < BROADCAST , MULTICAST , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 13 : virbr0 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000 14 : virbr0 - nic : < BROADCAST , MULTICAST > mtu 1500 qdisc pfifo fast master virbr0 state DOWN mode DEFAULT group default qlen 1000 Using root-level privileges, add MTU=9000 to the interface configuration file for all servers in the Bare Metal Solution environment that use jumbo frames.
- Reboot your Bare Metal Solution servers after ASM disk creation After you create your ASM disk groups, you should reboot all Bare Metal Solution servers in the cluster to make sure that both the ASM instance and the disk groups come online after the reboot.


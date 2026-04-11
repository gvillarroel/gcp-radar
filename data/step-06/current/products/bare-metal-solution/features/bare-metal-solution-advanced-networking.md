---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.990Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution advanced networking"
feature_slug: "bare-metal-solution-advanced-networking"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "attaching"
  - "advanced"
  - "networking"
  - "supports"
  - "solution"
  - "metal"
  - "now"
  - "bare"
---

# Bare Metal Solution advanced networking

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Bare Metal Solution now supports attaching a server to multiple networks and viewing advanced networking information in the console.

## Extended Definition

Bare Metal Solution now supports attaching a server to multiple networks and viewing advanced networking information in the console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- View advanced networking information for a Bare Metal Solution environment If you selected the advanced networking option for complex deployments in your Bare Metal Solution environment, you can view this information by using the following server commands.
- For example, "state" : "RUNNING" Manage resources in your Bare Metal Solution environment Bare Metal Solution management APIs, gcloud commands, and the Google Cloud console enable you to view the status of the resources in your Bare Metal Solution environment, such as servers, networking, and storage.
- To add a VLAN attachment pair from different project: Make sure to Enable and activate the Bare Metal Solutions API and gcloud CLI in your networking project that contains your VLAN attachments Clear the Select VLAN attachments in your current project checkbox.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Choose standard networking or explore advanced networking options The standard networking configuration for Bare Metal Solution offers a basic network topology that is appropriate for most small-scale deployments.
- If you already have a Bare Metal Solution environment and would like to migrate to an advanced networking configuration, contact Customer Care .
- We recommend using the following Bare Metal Solution standard networking configuration for small scale deployments: The standard networking configuration consist of the following: A single client network connects Bare Metal Solution servers to the Google Cloud using a single Partner Interconnect VLAN attachment pair.
- Multi-region networking considerations For any outside communication, including communication with services or your on-premises environments, the communication from your Bare Metal Solution environment must pass through the VPC network that you are using to connect to your Bare Metal Solution environment.


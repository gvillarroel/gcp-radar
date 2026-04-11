---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.003Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Restart running Bare Metal Solution servers"
feature_slug: "restart-running-bare-metal-solution-servers"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
keywords:
  - "restarting"
  - "restart"
  - "running"
  - "enables"
  - "servers"
  - "solution"
  - "metal"
  - "bare"
---

# Restart running Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Enables restarting a Bare Metal Solution server that is currently running.

## Extended Definition

Enables restarting a Bare Metal Solution server that is currently running.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Architecture Figure 1 shows a simplified view of the infrastructure that you need to build when you deploy Backup and DR to protect Oracle databases running in a Bare Metal Solution environment.
- Backup and DR service project– Enables you to host your backup/recovery appliance, and backup Bare Metal Solution and Google Cloud workloads in Cloud Storage buckets.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- To turn the power off for your server, enter your project ID, region, and server name and issue the following curl command. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :stop" Because starting, stopping, and restarting a server takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- For example, "state" : "RUNNING" Manage resources in your Bare Metal Solution environment Bare Metal Solution management APIs, gcloud commands, and the Google Cloud console enable you to view the status of the resources in your Bare Metal Solution environment, such as servers, networking, and storage.
- Maintain the Bare Metal Solution environment After your Bare Metal Solution environment is up and running, use the information included in this guide to maintain your Bare Metal Solution servers, storage, and networking.
- Restarting a server requires you to Enable and activate the Bare Metal Solutions API and the gcloud CLI .

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- As shown in Figure 5 , use VPC peering to enable resources running in a different VPC in the same project or a different project to access the Bare Metal Solution servers.
- Similarly, resources running in newly added subnets also have access to the Bare Metal Solution servers.
- Provide security for enterprise workloads in a Bare Metal Solution environment Because Bare Metal Solution enables you to bring traditional enterprise workloads closer to Google Cloud, a common question from enterprise architects and security architects is "How do I secure my workloads?" The goal of this guide is to provide you with the security and compliance design elements that you should consider when planning to bring your enterprise workloads, such as Oracle databases, to Bare Metal Solution.
- Figure 4 shows an example of Private Google Access: Figure 4: Private Google Access in a Bare Metal Solution environment Data security When planning for data security in a Bare Metal Solution environment, you need to be aware of how encrypted data gets stored and how to secure your applications running on Google Cloud or in an on-premises data center.


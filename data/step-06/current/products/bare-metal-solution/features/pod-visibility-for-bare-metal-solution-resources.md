---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.985Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Pod visibility for Bare Metal Solution resources"
feature_slug: "pod-visibility-for-bare-metal-solution-resources"
latest_feature_date: "2023-09-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/bare-metal/docs/plan-for-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "visibility"
  - "pod"
  - "resources"
  - "solution"
  - "you"
  - "metal"
  - "bare"
  - "for"
---

# Pod visibility for Bare Metal Solution resources

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

You can now view pod assignments for Bare Metal Solution servers, networks, volumes, and NFS shares.

## Extended Definition

You can now view pod assignments for Bare Metal Solution servers, networks, volumes, and NFS shares.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/bare-metal/docs/plan-for-dr](https://docs.cloud.google.com/bare-metal/docs/plan-for-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.
- The Pod drop-down list also shows the number of your existing Bare Metal Solution resources in each pod of the selected location.
- Procurements let you order resources as you scale, without having to execute a new Bare Metal Solution Order Form every time.

### "Plan for disaster recovery \_|\_ Bare Metal Solution \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bare-metal/docs/plan-for-dr](https://docs.cloud.google.com/bare-metal/docs/plan-for-dr)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Plan for disaster recovery This page provides information that you can use to plan for disaster recovery for your workloads running in the Bare Metal Solution environment.
- In some regions, Bare Metal Solution resources are served from multiple pods, but there is no requirement or expectation that pods are geographically separated.
- Recommended resources for disaster recovery planning We recommend that you go through the following resources to plan for disaster recovery: Plan for disaster recovery (this document) Google Cloud disaster recovery planning guide (provides more guidance that you can use to implement your disaster recovery plan) Disaster recovery options for Oracle databases workloads (applicable if you're running Oracle databases workloads) Cross-pod connectivity Pods and region extensions don't have direct connectivity.
- The BGP advertisements are configured so that each Cloud Router in the Replication VPC advertises a route to the cross-region Bare Metal Solution network, forcing cross-region traffic to flow over the Replication VPC .

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.


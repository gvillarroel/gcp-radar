---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.992Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution server power management"
feature_slug: "bare-metal-solution-server-power-management"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "power"
  - "management"
  - "server"
  - "users"
  - "solution"
  - "metal"
  - "can"
  - "bare"
---

# Bare Metal Solution server power management

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Users can power on, power off, restart, and check the status of Bare Metal Solution servers.

## Extended Definition

Users can power on, power off, restart, and check the status of Bare Metal Solution servers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Fortunately, Google Cloud provides and manages the following components for Bare Metal Solution: Core infrastructure, including secure, controlled-environment facilities and power Physical security Network infrastructure and security Hardware monitoring capabilities Access to Google Cloud services Provisioning and maintenance of sole-tenancy hardware Local storage area network (SAN) Smart hands support: Onsite support for activities like hardware replacements In a Bare Metal Solution environment, security is a shared responsibility.
- Encryption for data at rest and in-transit While Bare Metal Solution automatically encrypts user data at rest using a unique AES 256-bit key per data volume , you can also enable Transparent Data Encryption (TDE) to gain more control over the encryption key lifecycle.
- Figure 1: Bare Metal Solution - Regional Extension connected to Google Cloud Because of this architecture, you need to consider ways to secure both your Bare Metal Solution servers and the Google Cloud components included in your design.
- To connect to your Bare Metal Solution servers from your on-premises environment, you must connect your on-premises data center to Google Cloud by using a Dedicated Interconnect , Partner Interconnect , or Cloud VPN .

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- In the networks section of the output, you can view the network template, logical interfaces, bonded interfaces, and network type assigned to each interface. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Implement IP Address Management in a Bare Metal Solution environment Being able to manage your network topology inside your Bare Metal Solution environment is important.
- To turn the power off for your server, enter your project ID, region, and server name and issue the following curl command. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :stop" Because starting, stopping, and restarting a server takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- You can perform the following operations on your Bare Metal Solution server: Start—Turns the power on for the server.


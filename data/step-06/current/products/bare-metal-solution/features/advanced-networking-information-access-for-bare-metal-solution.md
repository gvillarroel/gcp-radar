---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.995Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Advanced networking information access for Bare Metal Solution"
feature_slug: "advanced-networking-information-access-for-bare-metal-solution"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "information"
  - "advanced"
  - "networking"
  - "access"
  - "solution"
  - "metal"
  - "bare"
  - "for"
---

# Advanced networking information access for Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Introduces enhanced access to advanced networking information for Bare Metal Solution users.

## Extended Definition

Introduces enhanced access to advanced networking information for Bare Metal Solution users.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.
- Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution Overview To provide resiliency for your Oracle databases inside a Bare Metal Solution environment, you need to have a clear strategy for database backups and disaster recovery.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required networking information for your Bare Metal Solution order When you submit a Bare Metal Solution order, include the following networking information: The Google Cloud project ID that you are using with your Bare Metal Solution environment.
- Choose standard networking or explore advanced networking options The standard networking configuration for Bare Metal Solution offers a basic network topology that is appropriate for most small-scale deployments.
- JumpVM A Virtual Machine for providing secure remote access to Bare Metal Solution servers from the public internet If you have a Cloud Interconnect (Partner or Dedicated interconnect) or a Cloud VPN connecting your on-premises network directly to Google Cloud project, you can connect from on-premises network to BMS directly without jumpVMs.
- For more information about the Partner Interconnect framework, see the Partner Interconnect documentation, but keep in mind the following differences applicable in the context of Bare Metal Solution: This connection to the Bare Metal Solution environment is not subject to the pricing model that the Partner Interconnect product uses.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- View advanced networking information for a Bare Metal Solution environment If you selected the advanced networking option for complex deployments in your Bare Metal Solution environment, you can view this information by using the following server commands.
- To list the servers in your Bare Metal Solution environment and see their status, enter your project ID and region into the following curl command, copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances" To get network and storage information for a server in your Bare Metal Solution environment, issue the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Organize servers by using labels To help organize your servers, you can use labels.
- Maintain the Bare Metal Solution environment After your Bare Metal Solution environment is up and running, use the information included in this guide to maintain your Bare Metal Solution servers, storage, and networking.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.991Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution network management"
feature_slug: "bare-metal-solution-network-management"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups"
keywords:
  - "create"
  - "management"
  - "network"
  - "users"
  - "solution"
  - "metal"
  - "can"
  - "bare"
---

# Bare Metal Solution network management

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Users can create, attach, detach, and delete networks, and manage VLAN attachments for Bare Metal Solution resources.

## Extended Definition

Users can create, attach, detach, and delete networks, and manage VLAN attachments for Bare Metal Solution resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Host project– Lets you create regional subnets in a shared VPC that can connect the Bare Metal Solution regional extension to the Backup and DR Service, the backup/recovery appliance, your Cloud Storage buckets, and your Compute Engine VMs.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fortunately, Google Cloud provides and manages the following components for Bare Metal Solution: Core infrastructure, including secure, controlled-environment facilities and power Physical security Network infrastructure and security Hardware monitoring capabilities Access to Google Cloud services Provisioning and maintenance of sole-tenancy hardware Local storage area network (SAN) Smart hands support: Onsite support for activities like hardware replacements In a Bare Metal Solution environment, security is a shared responsibility.
- Figure 2: Summary of security responsibilities - customer and Google Cloud Plan security for your Bare Metal Solution environment To plan your security strategy for Bare Metal Solution, you need to consider the following six security pillars : Physical security Compliance Network security Data security Operational security Database security Let's explore each of these security pillars in more detail.
- Figure 3: Network security in a Bare Metal Solution environment If you use Google Cloud APIs from within the Bare Metal Solution environment to access Google Cloud services, Google Cloud encrypts the data transfer by default between Bare Metal Solution and the particular service per our encryption policies.
- Here are a few facts about storage encryption at rest in a Bare Metal Solution environment: To provision storage, we create a Storage Virtual Machine (SVM) on a NetApp cluster for each customer, and associate the SVM with a reserved data volume before giving it to the customer.

### "Create Oracle backups with Filestore on Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1 oracle dba 53685944320 Sep 24 13:32 j9vb7fcs 9 1 You can now create Oracle backups in the Filestore file share on your Bare Metal Solution server.
- IP ranges : You can either allow access to all IP addresses in the network or you can limit the access to your Bare Metal Solution environment.
- Create a Filestore instance Create a Filestore instance in the same network and region as that of your Bare Metal Solution server.
- Perform the following steps as the root user: In your Bare Metal Solution server, create an NFS mount point for the Filestore file share. mkdir /nfs backups Mount the file share by running the mount command and specifying the Filestore instance IP address and name of the file share. mount \ -o hard,vers=3,proto=tcp,timeo=600,retrans=3,rsize=1048576,wsize=1048576,resvport,async \ FILESTORE IP ADDRESS :/ FILESTORE FILE SHARE / NFS MOUNT POINT Replace the following: FILESTORE IP ADDRESS : IP address of the Filestore instance.


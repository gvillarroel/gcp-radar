---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.991Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution boot volume snapshot management"
feature_slug: "bare-metal-solution-boot-volume-snapshot-management"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "boot"
  - "snapshot"
  - "management"
  - "volume"
  - "users"
  - "solution"
  - "metal"
  - "bare"
---

# Bare Metal Solution boot volume snapshot management

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Users can create, delete, and restore Bare Metal Solution boot volume snapshots.

## Extended Definition

Users can create, delete, and restore Bare Metal Solution boot volume snapshots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots" -d \ '{\''name\'': \''projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots/ SNAPSHOT NAME \'', \''description\'': \'' DESCRIPTION \''}' \ Delete a boot volume snapshot You can delete boot volume snapshots.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ -H "Content-Length:0" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots/ SNAPSHOT NAME :restoreVolumeSnapshot" Because restoring a boot volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots" To view details of a boot volume snapshot, enter your project ID, region, volume name, and snapshot name into the following curl command.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- You can use one profile for Compute Engine VM snapshots, and you can edit the other profile and use it for Bare Metal Solution backups.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- When you place your order for data volume snapshots, you need to tell Google Cloud which action we should take when the snapshot reserve fills up: Delete the oldest snapshot first (recommended) Delete the newest snapshot first Take the volume offline Google Cloud takes snapshots of the boot OS volume automatically every day at 12:10 AM in the region where your Bare Metal Solution servers are located.
- Storage volume snapshots The Bare Metal Solution provides options to save snapshots of your storage volumes to use for recovery purposes.
- When you remove a storage volume from service in a Bare Metal Solution environment, the Bare Metal Solution server reboots.
- Data volume: You can request daily snapshots when you place your initial order for Bare Metal Solution.


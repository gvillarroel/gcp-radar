---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.421Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution boot volume snapshot management"
feature_slug: "bare-metal-solution-boot-volume-snapshot-management"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
keywords:
  - "boot"
  - "snapshot"
  - "management"
  - "volume"
  - "users"
---

# Bare Metal Solution boot volume snapshot management

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Users can create, delete, and restore Bare Metal Solution boot volume snapshots.

## Extended Definition

Users can create, delete, and restore Bare Metal Solution boot volume snapshots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- On the Volume details page, in the Snapshots section, you can view the list of snapshots and their details. gcloud To list all the snapshots for a boot volume, issue the gcloud bms volumes snapshots list command. gcloud bms volumes snapshots list --project= PROJECT ID --region= REGION --volume= VOLUME NAME To view details of a specific boot volume snapshot, issue the gcloud bms volumes snapshots describe command. gcloud bms volumes snapshots describe --project= PROJECT ID --region= REGION --volume= VOLUME NAME --snapshot= SNAPSHOT NAME API To list all boot volume snapshots, enter your project ID, region, and volume name into the following curl command.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots" -d \ '{\''name\'': \''projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots/ SNAPSHOT NAME \'', \''description\'': \'' DESCRIPTION \''}' \ Delete a boot volume snapshot You can delete boot volume snapshots.
- Copy the command, paste it into the Cloud Shell prompt, and press the Enter or Return key. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ -H "Content-Length:0" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME /snapshots/ SNAPSHOT NAME :restoreVolumeSnapshot" Because restoring a boot volume takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When you place your order for data volume snapshots, you need to tell Google Cloud which action we should take when the snapshot reserve fills up: Delete the oldest snapshot first (recommended) Delete the newest snapshot first Take the volume offline Google Cloud takes snapshots of the boot OS volume automatically every day at 12:10 AM in the region where your Bare Metal Solution servers are located.
- To delete data volume snapshots and bring a data volume back online, or restore an OS boot volume snapshot, contact Customer Care .
- Snapshots are available as follows: OS boot volume: Google Cloud takes a daily snapshot by default.
- Storage type Snapshot support Common Workloads SSD (solid-state drive) Yes Mission-critical production workloads HDD (hard drive) Yes Local backups or archival workloads Here are some additional storage volume considerations that you need to understand: We don't recommended using hard disk drives (HDDs) to run mission-critical Oracle production workloads, because performance guidance is not available for HDD storage.

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the different types of block storage offered by Compute Engine, their performance characteristics, and how to work with them, see the Compute Engine documentation: Storage options About Google Cloud Hyperdisk performance Persistent Disk performance Other factors that affect performance Adding or resizing zonal persistent disks Creating persistent disk snapshots Persistent disks deployed by the deployment templates If you deploy the host VM by using the Terraform configuration files that Google Cloud provides for SAP NetWeaver, then the deployment automation scripts attach two or three Persistent Disk or Hyperdisk volumes for the required SAP NetWeaver volumes or drives, depending on whether you are using Windows Server or Linux.
- After a user with administrative privileges has connected to an instance through SSH or RDP, they can add other system users with standard Linux commands or Windows user-account management.
- For example, it can simplify the use of persistent disk snapshots for specific volumes.
- For example, if you attach two Balanced Persistent Disk volumes as shown in the figure, one that provides 180 IOPS for read and write, and throughput of 8.4 MB per second, and the other that provides 1,500 IOPS for reads and writes and 70 MB per second of throughput, then together the two Balanced Persistent Disk volumes provide 1,680 IOPS for reads and writes and 78.4 MB per second of throughput.


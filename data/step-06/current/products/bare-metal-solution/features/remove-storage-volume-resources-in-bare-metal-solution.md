---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.428Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Remove storage volume resources in Bare Metal Solution"
feature_slug: "remove-storage-volume-resources-in-bare-metal-solution"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/order-bms-resources"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide"
keywords:
  - "remove"
  - "resources"
  - "volume"
  - "storage"
  - "adds"
---

# Remove storage volume resources in Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds support for removing storage volume resources from Bare Metal Solution.

## Extended Definition

Adds support for removing storage volume resources from Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To clear all reservations, replace the end of the command with the following: -d "{ 'reservations' : [] }" Manage storage You can manage the storage in your Bare Metal Solution environment in the following ways: View storage volumes Organize storage volumes by using labels Rename a storage volume Provision storage volume resources Remove storage volume resources View boot volume snapshots and their details Create a boot volume snapshot Delete a boot volume snapshot Restore a boot volume snapshot View storage volumes Paying attention to your storage resources in the Bare Metal Solution environment helps you determine if your servers have enough storage capacity for applications and workloads.
- In this example, we remove lines 9 and 10 as they are associated with the disk DEMO 0001 and the WWID of 3600a0980383146354a2b522d53374247 identified in Step 1.b of this procedure. cat -n /etc/udev/rules.d/99-oracle-asmdevices.rules 1 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244 2 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374244", SYMLINK+="asmdisks/DATA1", GROUP="asmadmin", OWNER="grid", MODE="0660" 3 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244 4 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243 5 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374243", SYMLINK+="asmdisks/RECO1", GROUP="asmadmin", OWNER="grid", MODE="0660" 6 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243 7 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374242 8 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374242", SYMLINK+="asmdisks/DEMO1", GROUP="asmadmin", OWNER="grid", MODE="0660" 9 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247 10 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374247", SYMLINK+="asmdisks/DEMO2", GROUP="asmadmin", OWNER="grid", MODE="0660" 11 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247 (Perform this step on all nodes in the cluster.) Apply udev ruleset changes. sudo udevadm control -R Oracle Linux Virtualization Manager Detach a storage volume through Oracle Linux Virtualization Manager 4.4.10.7.
- The following sample command removes all the labels except environment = test . curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME ?updateMask=labels" -d "{ 'labels' : {' environment ': ' test '} }" Filter storage volumes using labels You can search your storage volumes and filter results by using labels.
- The following sample command assigns a label of environment = test . curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /volumes/ VOLUME NAME ?updateMask=labels" -d "{ 'labels' : {' environment ': ' test '} }" Remove labels from storage volumes You can remove labels from the storage volumes.

### Order Bare Metal Solution resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/order-bms-resources](https://docs.cloud.google.com/bare-metal/docs/order-bms-resources)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As your resources are procured, you can provision them through the following options and start using them: Google Cloud console intake form Create a network UI Create a storage volume UI Create an NFS volume UI What's next Deploy your Bare Metal Solution environment .
- You can use procurements to order the following Bare Metal Solution resources: Servers ( available server configurations ) Storage ( available storage choices ) Partner Interconnect bandwidth To procure any other Bare Metal Solution resource, contact Google Cloud sales .
- The following pages show you the pods that contain your existing resources: Servers Networks Volumes NFS Shares If you're unsure about which pod to select, contact Google Cloud Sales .
- After you've executed a simplified, one-time Bare Metal Solution Order Form, you can order your Bare Metal Solution resources online by creating procurements through the Google Cloud console.

### "SAP HANA high-availability planning guide \_|\_ SAP on Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are implementing a backup solution, such as the Cloud Storage Backint agent for SAP HANA, you can remove the /hanabackup volume from the NFS server after the deployment is complete.
- The following example shows the contents of a global.ini that is created for the storage manager for SAP HANA: [persistence] basepath datavolumes = %BASEPATH DATAVOLUMES% basepath logvolumes = %BASEPATH LOGVOLUMES% use mountpoints = %USE MOUNTPOINTS% basepath shared = %BASEPATH SHARED% [storage] ha provider = gceStorageClient ha provider path = %STORAGE CONNECTOR PATH% Example configuration for 2+1 setup partition 1 pd = node-mnt00001 partition 2 pd = node-mnt00002 partition 3 pd = node-mnt00003 partition data dev = /dev/hana/data partition log dev = /dev/hana/log partition gcloudAccount = svc-acct-name@project-id.iam.gserviceaccount.com partition data mountOptions = -t xfs -o logbsize=256k partition log mountOptions = -t xfs -o logbsize=256k partition fencing = disabled [trace] ha gcestorageclient = info Sudo access for the storage manager for SAP HANA To manage SAP HANA services and storage, the storage manager for SAP HANA uses the SID LC adm user account and requires sudo access to certain system binaries.
- For an SAP HANA scale-out system that includes the SAP HANA host auto-failover feature, the Terraform configuration provided by Google Cloud deploys the following: One master SAP HANA instance 1 to 15 worker hosts 1 to 3 standby hosts A VM for each SAP HANA host SSD-based Persistent Disk or Hyperdisk volumes for the master and worker hosts The Google Cloud storage manager for SAP HANA standby nodes An SAP HANA scale-out system with host auto-failover requires an NFS solution, such as Filestore, to share the /hana/shared and /hanabackup volumes between all hosts.
- The storage manager for SAP HANA works with the SAP Storage Connector API (not shown) to detach the disks that contain the /hana/data and /hana/logs volumes from the failed worker node and to remount them on the standby node, which then becomes worker node 2 while the failed node becomes the standby node.


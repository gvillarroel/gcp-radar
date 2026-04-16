---
title: "Manage your storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/manage-storage-pool
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/manage-storage-pool
  title: "Manage your storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Manage your storage pool
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to edit storage pool settings or delete a storage pool.
Edit storage pool settings
You can change the following settings after you create a storage pool:
Storage pool capacity
You can resize storage pool capacity to control charges. Storage pool
capacity is adjustable in 1 GiB increments. You can't decrease pool
capacity below the sum of all capacity of the volumes attached to the pool.
Pools with Flex service level can't be decreased in capacity. Pools with
Flex Unified or Flex custom performance can only be increased once every
four hours.
Performance
Pools with the Flex Unified or Flex zonal custom performance service
level lets you adjust throughput, but only once every four hours.
Active Directory policy
You can attach an Active Directory policy to a storage pool that
doesn't already have an Active Directory policy. You can modify the
Active Directory policy, however, you can't replace a policy that is
already attached to a pool with another policy.
Adding an Active Directory policy doesn't affect existing volumes in a pool.
Auto-tiering settings
For Premium and Extreme pools, you can enable auto-tiering only once
for a pool. Your selection is permanent.
For the Flex Unified and Flex File with custom-performance pools and
auto-tiering enabled, you can adjust the Hot tier threshold by
increasing its size and also enable or disable auto-increase .
Pool description and labels
You can change storage pool descriptions and add, modify, or delete labels.
Switch active and replica zones
Regional storage pools of the Flex Unified or Flex File service level replicate
data synchronously between two zones. The active zone serves all volumes of the
pool, while the replica zone acts as a standby. If the active zone stops
working, NetApp Volumes automatically switches the NFS, SMB, or
iSCSI service to the replica zone. While this switch happens after a brief I/O
pause, file service operations resume without any data loss.
File service operations from clients in the previously active zone can have
increased latency because of the cross-zone traffic with the newly active zone.
Note that cross-zone exit from the clients can incur a Compute Engine
inter-zone data transfer charge. For pricing information, see
Network Pricing .
You can also trigger a zone switch manually, and this can also cause an I/O
pause.
Note: Manually switching zones isn't supported for Flex Unified regional pools
during preview. Automatic failover is supported.
Use the following instructions to switch a zone manually using the
Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Storage pools .
Click the name of the regional Flex Unified or Flex File storage pool you
want to fail over.
Click Switch active/replica zones .
Review the current zone versus replica zone settings and the new settings
that appear in the dialog.
Click Switch to proceed.
Read through the confirmation dialog and enter the name of the pool and
then click Switch .
After the switch operation ends, your active zone and replica zone will
have changed roles.
gcloud
Switch a zone manually for a regional pool:
gcloud netapp storage-pools switch POOL_NAME \
--project = PROJECT_ID \
--location = LOCATION \
Replace the following information:
POOL_NAME : the name of the storage pool.
PROJECT_ID : the name of the project.
LOCATION : the location of the pool.
For more information about additional optional flags, see
Google Cloud SDK documentation on storage-pools switch .
Delete a storage pool
You can delete storage pools to control charges. Use the following instructions
to delete a storage pool.
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Storage pools .
Select the storage pool you want to delete.
Click Delete .
To confirm deletion, enter the name of the storage pool.
Click Delete .
What's next
Read about volumes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

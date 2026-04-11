---
title: "Create a storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/create-storage-pool
  title: "Create a storage pool \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
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
Create a storage pool
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a storage pool .
Before you begin
Consider the following requirements before you create a storage pool:
You must complete the following steps before you can create a storage pool:
Select or create a project in Google Cloud and enable billing .
Enable private services access
for the VPC you intend to use. You can also enable private services
access as part of the storage pool creation if you are using the
Google Cloud console.
If you want to use customer-managed encryption keys (CMEK),
create a CMEK policy
first.
If you want to use Active Directory, create an Active Directory policy
first.
You can only assign a CMEK policy during storage pool creation unless you
choose to use the EncryptVolumes function to encrypt all existing volumes in a
region with CMEK policy after creation.
You can only change the description, capacity, and labels after creation.
Once an Active Directory policy is attached to a storage pool, it cannot be
detached.
Storage pool capacity is subject to a location-based quota of 25 TiB. If you
need more capacity, request a quota increase for the Storage pool capacity (GiB)
per location quota. For more information, see
NetApp Volumes quotas .
Create a storage pool
Use the following instructions to create a storage pool using the
Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Storage pools .
Click Create .
In the Storage pool details section, complete the following actions:
Enter a name for the pool in the Name field. The name must be
unique for each project.
Optional: enter a description for the pool in the Description
field.
Select a location for the pool.
Select a service level:
Flex
Standard
Premium
Extreme
For the Flex service level, configure the following options:
Type : you can select either the File or Unified type.
Important: When creating a Flex Unified storage pool, you must choose
either Default-mode or ONTAP-mode. You can't change the mode after
creation, and features exclusive to one mode aren't available in the
other.
ONTAP Mode : for the Flex Unified service level, click
Enable ONTAP Mode to enable ONTAP-mode.
Important: If you enable ONTAP-mode, you can't switch to Default-mode
or from Default-mode to ONTAP-mode after the pool is created. Before
enabling ONTAP-mode, review the
ONTAP-mode documentation.
Availability : select either zonal or regional availability.
For zonal availability, you need to specify the zone to use.
For regional availability, you need to specify a primary zone and a
replica zone.
Optional: for the Flex Unified service level, enable the Large volume
option to create large volumes .
Important: This setting can't be changed after the pool is created.
Enter the capacity for the storage pool in the Capacity field.
Optional: for the Flex Unified and Flex File in custom-performance enabled
regions, complete the following steps for the storage pool:
Enter the throughput for the storage pool in the Throughput field.
Enter the IOPS for the storage pool in the IOPS field.
In the Set up connections section, select the VPC you want to use.
If you haven't peered your VPC, click Set up connection and complete
the following steps:
Enable the Service networking API .
Click Use an automatically allocated IP range or to choose a CIDR manually , click
Select one or more existing IP ranges or create a new one .
Review your selections.
Click Create connection .
After peering is complete, a notification appears that indicates VPC
peering is successful.
In the Active Directory policy section, complete the following steps:
Select the Assign an Active Directory policy to the storage pool
checkbox to provision a storage pool for volumes that use LDAP, Kerberos, or any SMB protocol variations .
Select a policy from the Active Directory policy list.
For Flex Unified in ONTAP-mode ,
configure Active Directory at the ONTAP level.
If you plan to use NFS protocol combinations, select the Enable LDAP
checkbox. When you select this option, you can only create LDAP-enabled
NFS volumes in the pool. You need to configure Active Directory LDAP to provide UNIX user information .
If you want to create NFSv3 or NFSv4 volumes that use regular AUTH_SYS
authentication, don't select the Enable LDAP checkbox.
For Flex Unified in ONTAP-mode ,
configure the LDAP setting at the ONTAP level.
Important: Your selection is permanent.
In the Encryption section, complete the following steps:
Select Google-managed encryption key or
Customer-managed encryption key (CMEK) .
If you select Customer-managed encryption key (CMEK) , select a
CMEK policy.
To enable auto-tiering, select the Allow auto-tiering checkbox.
Important: Your selection is permanent.
For Premium and Extreme pools: auto-tiering can be enabled during pool
creation or for existing pools. For volumes you create in these pools,
you can enable auto-tiering on a per-volume basis; by default, it is
disabled. Standard pools don't allow auto-tiering.
For Flex Unified (Preview) and Flex File custom-performance zonal pools
(generally available (GA)): you must enable auto-tiering during pool
creation. For Flex Unified, you can't enable it on existing pools. All
volumes in the pool are automatically created with auto-tiering enabled,
unless you disable it at volume creation. Creating such a pool also
requires you to specify the size of the hot tier using the
Hot tier threshold parameter. For more information, see
Performance and hot tier sizing .
Optional: you can enable auto-increase for the hot tier if it reaches
capacity. The hot tier threshold can't be decreased.
Optional: click Add label to enter relevant labels for reporting and
querying purposes from the Labels section.
Click Create .
gcloud
Create a Standard, Premium, or Extreme storage pool
Create a storage pool:
gcloud netapp storage-pools create POOL_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--capacity = CAPACITY \
--service-level = SERVICE_LEVEL \
--network = name = NETWORK_NAME
Replace the following information:
POOL_NAME : the name of the pool you want to create.
Your pool name must be unique per location.
PROJECT_ID : the name of the project you want to
create the storage pool in.
LOCATION : the location of the pool you want to
create.
CAPACITY : the capacity of the pool in GiB.
SERVICE_LEVEL : the service level for your storage
pool: Flex, Standard, Premium, or Extreme.
NETWORK_NAME : the name of the VPC.
Create a Flex Unified storage pool with auto-tiering in preview
Important: To create an ONTAP-mode storage pool, your Google Cloud CLI version
must be at least 559.0.0 . If you use a Google Cloud CLI version earlier
than 559.0.0 to create a pool, you receive an error indicating that
--mode isn't supported.
Create a storage pool:
gcloud beta netapp storage-pools create POOL_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--capacity = CAPACITY \
--service-level = Flex \
--network = name = NETWORK_NAME \
--type = UNIFIED \
--mode = MODE \
--total-iops = IOPS \
--total-throughput = THROUGHPUT \
--allow-auto-tiering = true \
--hot-tier-size = HOT_TIER_SIZE \
--enable-hot-tier-auto-resize = ENABLE_HOT_TIER_AUTO_RESIZE
Replace the following information:
POOL_NAME : the name of the pool you want to create.
Your pool name must be unique per location.
PROJECT_ID : the name of the project you want to
create the storage pool in.
LOCATION : the location of the pool you want to
create. For zonal pools, specify a zone name. For regional pools, specify a
region name and include primary and standby zones using the --zone and
--replica-zone parameters.
CAPACITY : the capacity of the pool in GiB.
NETWORK_NAME : the name of the VPC.
MODE : to create an ONTAP-mode pool, specify mode
as ONTAP . For Default-mode pools, specify mode as DEFAULT or skip this
parameter.
THROUGHPUT : the throughput of the storage pool in
MiBps.
IOPS : the IOPS of the storage pool.
HOT_TIER_SIZE : the size in GiB of the hot tier.
ENABLE_HOT_TIER_AUTO_RESIZE : Optional: set to true
to enable auto-resizing of the hot tier.
For more information about additional optional flags, see
Google Cloud SDK documentation on storage pool creation .
What's next
Manage storage pools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/volumes/create-volume
  title: "Create a volume \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
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
Create a volume
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a volume .
Before you begin
Review the following prerequisites before you create a volume:
You must have an existing storage pool connected to the network you intend
to share the volumes to. For more information, see
Storage pools overview .
The pool you intend to share volumes to must have enough available capacity
to host the volumes.
If you intend to use Active Directory, make sure the correct Active
Directory policy is attached to the storage pool.
If you want to encrypt your volume using a customer-managed encryption key
(CMEK), make sure that the pool has a CMEK policy.
If you require LDAP access, make sure you enable the LDAP option on the pool.
If the existing pool doesn't meet your requirements, create a new pool.
Capacity adjustments and constraints
The minimum and maximum size of a volume depends on the service level. For
more information, see the volume capacity
limits.
The capacity of a volume can be increased or decreased in 1 GiB increments
between its capacity limits.
Volume capacities are subject to the remaining available capacity in the
hosting storage pool. If you run out of space, increase the capacity of the
storage pool.
The service level of the pool has a significant impact on the performance you
can expect from your volume. To determine the appropriate service level for
your performance objectives, see Volume performance sizing .
Create a volume
Use the following instructions to create a volume using the Google Cloud console or
Google Cloud CLI or ONTAP-mode.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Volumes .
Click Create .
In the Storage pool details section, complete the following steps:
Click Select storage pool .
Choose a storage pool to host the volume.
The volume you create inherits the settings of the storage pool you
select.
Click Select .
If the storage pools in the list don't have the settings you want,
click Create new storage pool .
In the Volume details section, complete the following steps:
Enter a name for the volume in the Volume name field. The name must
be unique for each project within a location.
Optional: enter a description in the Description field for the
volume.
For storage pools with Flex (File type), Standard, Premium, or Extreme service level
Complete the following steps:
Enter the share name of the volume in the Share name field. The
name must be unique for each project within a location.
For NFS exports, the share name corresponds to the export path.
Enter the capacity of the volume in the Capacity field.
The minimum and maximum size of a volume depends on the service level.
For more information about the limits, see
Service levels .
For more information about volume capacities, see Capacity adjustments and constraints .
Optional: if the selected storage pool allows auto-tiering, complete
the following steps:
Click Enable auto-tiering if you want to enable auto-tiering for
the volume.
Specify a Cooling threshold between 2 to 183 days for Premium,
Extreme, or custom-performance Flex zonal pools. The default cooling
threshold value is 31 days.
Volumes in Flex Unified and Flex File custom-performance pools offer
the option to enable or disable the Hot tier bypass . For more
information, see Manage auto-tiering .
Click the Protocol(s) drop-down list, and select the protocol you
want to use. Protocol options depend on protocol choice.
Note: Dual-protocol (NFS and SMB combined) isn't allowed for the Flex
tier volumes.
Some protocol choices require an Active Directory. For more
information, see Use cases for using Active Directory .
Protocol types
Protocol options
NFSv3
NFSv4.1
Both (NFSv3 and NFSv4.1)
SMB
Dual-protocol
Enable Kerberos: choose between Kerberos with or without
signing and NFS encryption in transit in the volumes export rules.
check
Security style: choose the permission model (NTFS or UNIX)
for the volume. For more information, see Multi-protocol user mapping.
check
Enable SMB encryption: enable SMB3 transport encryption.
When enabled, clients that don't support SMB3 encryption can't access
the share.
check
check
Hide SMB share: disable discoverability for the share
using network browsing.
check
check
Enable access-based enumeration: access-based
enumeration hides files and folders that users don't have permissions
to access.
check
check
Enable continuous availability share support for SQL Server, FSLogix :
enable this option only for SQL Server and FSLogix workloads that
require continuous availability (CA).
check
Click Block volume from deletion when clients are connected in the
Configuration for selected protocol(s) for volumes used as GCVE
datastores. This setting is permanent.
Specify the Export Policy for NFSv3, NFSv4.1, and dual-protocol types
to allow client access. Settings depend on your protocol choices.
Export policy definition is only required for any protocol combination
that contains NFSv3 or v4.1. You can't define export policies for SMB
volumes.
If required, you can add up to 20 additional export rules. For more
information, see NFS volume access control through export rules .
Click to expand Export rules .
Click Add rule .
In Allowed Clients , specify the IPv4 addresses of the clients
the export rule applies to. Enter a comma-separated list of IP
addresses or CIDRs with a maximum length of 4,096 characters.
In Access , select Read & Write or Read Only .
In Root Access (no_root_squash) , Select On or Off .
An important security mechanism of NFS is to map the root user,
UID 0 , to nobody, UID 65534 . We recommend that you disable root
access for all of your clients, except for a few management hosts.
Create a dedicated export rule with root access enabled for the
management hosts.
Apply protocol-specific settings based on your protocol type:
NFSv3 , NFSv4.1 , without Kerberos , and
dual-protocol : Specify if the rule is Read & Write or
Read-Only .
NFSv4.1 with Kerberos enabled : Specify if access is
not enabled , read only , or read & write for
kerberos5 (krb5), kerberos5i (krb5i), and kerberos5p
(krb5p).
Both (NFSv3 or NFSv4.1): Specify if the rule applies to NFSv3
only, NFSv4.1 only, or both.
Click Done .
For storage pools of the Flex service level of the Unified type
Complete the following steps:
Enter the capacity of the volume in the Capacity field.
In the Protocol(s) configuration section, select the Operating
system from the drop-down list. This specifies the operating system
to which the volume will be attached.
In the Host groups section, you can either select an existing host
group or click Add a host group to create a new one. This initiates
the host group creation workflow.
Optional settings
Optional: define a snapshot schedule:
Select Make snapshot directory visible to enable file system
access to snapshot versions by clients. For more information, see
NetApp Volumes volume snapshots overview .
Select Allow scheduled snapshots to configure the volume to
automatically take snapshots. You can specify the number of
snapshots to keep at hourly, daily, weekly, and monthly snapshot
intervals. Times are specified in UTC. If you reach the maximum
number of snapshots, the oldest snapshot deletes.
Review your snapshot selections.
Optional: define a backup schedule:
Select Allow scheduled backups to configure automatic daily,
weekly, or monthly backups.
Select or create a backup policy .
Select or create a backup vault .
Optional: in the Labels section, click Add label to enter
relevant labels for reporting and querying purposes.
Click Create .
The new volume is listed on the Volumes page. Volumes take up to 20
minutes to create the first volume that appears in the Creating state.
Additional volumes generate within a few seconds to a few minutes.
gcloud
Create a volume
Create a volume using the following command:
gcloud netapp volumes create VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--storage-pool = STORAGE_POOL \
--capacity = CAPACITY \
--protocols = PROTOCOLS \
--share-name = SHARE_NAME
Replace the following information:
VOLUME_NAME : the name of the volume. This name must
be unique per location.
PROJECT_ID : the name of the project to
create the volume in.
LOCATION : the location for the volume.
STORAGE_POOL : the storage pool to create the volume
in.
CAPACITY : the capacity of the volume. It defines
the capacity that NAS clients see.
PROTOCOLS : the NAS protocols the volume is
exported with. Flex tier volumes cannot be created with
dual-protocol (NFS and SMB).
Valid choices:
smb
nfsv3
nfsv4
nfsv3,nfsv4
nfsv3,smb
nfsv4,smb
Depending on the protocol type you choose, we recommend that you add the
protocol specific parameters like export-policy or smb-settings .
SHARE_NAME : the NFS export path or SMB share name of
the volume.
Create an iSCSI volume
Create an iSCSI volume in the Flex service level of the Unified type pool:
gcloud netapp volumes create VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--storage-pool = STORAGE_POOL \
--capacity = CAPACITY \
--protocols = ISCSI \
--block-devices = name = LUN_NAME ,host-groups = HOST_GROUP_NAME ,os-type = OS_TYPE \
--snapshot-directory = false
Replace the following information:
VOLUME_NAME : the name of the volume. This name must
be unique per location.
PROJECT_ID : the name of the project to create the
volume in.
LOCATION : the location for the volume.
STORAGE_POOL : the storage pool to create the volume
in.
CAPACITY : the capacity of the volume. It defines
the capacity that iSCSI clients see.
LUN_NAME : Optional: if a name is provided, the LUN
will be assigned that name. Otherwise, the LUN will be named as
lun_<VOLUME_NAME> .
HOST_GROUP_NAME : the name of the host group to which
the volume needs to be attached. Multiple host groups can be specified with
a # sign separating each host group.
OS_TYPE : the operating system of the hosts. The
supported values include LINUX , WINDOWS , and ESXI .
For more information about additional optional flags like enabling large
capacity volumes and auto-tiering, see
Google Cloud SDK documentation on volume creation .
ONTAP-mode
Identify the required ONTAP commands in the
ONTAP documentation .
Complete the following steps:
Create a volume
and mount it into the namespace. To enable tiering on enabled pools, see
the tiering-policy .
For SMB volumes, create a SMB share
and set share-level permissions.
For NFS volumes, create an export policy.
After you identify the required commands, see ONTAP-mode
for instructions about how to submit ONTAP commands to the storage pool.
What's next
Manage volumes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Google Cloud NetApp Volumes features \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/discover/features
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/discover/features
  title: "Google Cloud NetApp Volumes features \_|\_ Google Cloud Documentation"
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
Google Cloud NetApp Volumes features
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the features and functionality of
Google Cloud NetApp Volumes.
Network-attached storage
NetApp Volumes shares file systems, or volumes, to
network-attached storage (NAS) clients. NAS clients are usually virtual
machines (VMs) that run on Windows or Linux operating systems using the
industry-standard Network File System (NFS) and Server Message Block (SMB)
protocols.
Client-server model
Both NFS and SMB use a client-server model in which a client sends requests to a
server to act on the file system. The server performs operations such as
creating or deleting files or folders, modifying files, and browsing and reading
files.
File systems are embedded in volumes which can be shared by many clients.
Typically, Windows, Linux, and UNIX operating systems include built-in SMB and
NFS client software.
Access permissions
All file system objects must have an owner, but you can grant other users and
groups access permissions for objects.
For NFS, ownership specifies user IDs and group IDs, which use standard
UNIX-style user and group permissions. NFSv4.1 can use user IDs and group IDs
or security principals. When you use NFSv4.1 with Kerberos, the usage of
Kerberos principals replaces user ID access, which authenticates user identities.
In addition to standard UNIX permissions, NFSv4.1 also offers NFSv4.1 access
control lists as an alternative method to manage access.
For SMB, Windows security identifiers specify ownership and use NTFS-style
access control lists to manage access to objects.
Block storage
Note: NetApp Volumes offers block storage feature with iSCSI
protocol in General Availability (GA) for the Flex Unified service level and in
Preview for the Flex Unified ONTAP-mode.
The block storage lets you provision block level storage using the iSCSI
protocol. With block storage, you can run workloads that require direct disk
access, such as databases, while the users still benefit from a fully managed
experience. The integration of block storage with iSCSI protocol increases
deployment flexibility, expanding the range of applications you can host on
Google Cloud.
NetApp Volumes presents block devices to hosts over a TCP/IP
network using the industry standard iSCSI protocol. iSCSI allows VMs running
both Windows and Linux to access NetApp Volumes as locally
attached disks, despite the physical storage being remote.
Initiator-target model
iSCSI uses an initiator-target model. The client, known as the iSCSI initiator,
sends SCSI commands over IP networks to the storage system, which acts as the
iSCSI target. The target receives these commands and performs block level
operations such as reading and writing data, formatting disks, and managing
partitions.
NetApp Volumes are presented as iSCSI Logical Unit Numbers (LUNs)
to initiators as block devices. Each LUN appears to the client as a raw disk,
allowing the operating system to create and manage its own file systems, such as
NTFS, ext4, or XFS. Most Windows and Linux operating systems have built-in iSCSI
initiator software, simplifying connection to iSCSI targets.
For more information about how to create and manage host groups, see
About host groups .
Storage pools
Storage pools
act as containers for volumes. All volumes in a storage pool share the following
information:
Location
Service level
Virtual Private Cloud (VPC) network
Active Directory policy
LDAP use for NFS volumes, if applicable
Customer-managed encryption key (CMEK) policy
Zonal or regional pool availability
Auto-tiering capability
The capacity of the pool can be split up and assigned to volumes within the
pool. Storage pools are a billable component of NetApp Volumes.
Billing is based on the location, service level, and capacity allocated to a
pool independent of consumption at the volume level.
Storage pools also provide performance capabilities to volumes:
Volumes in storage pools for the Standard, Premium, and Extreme service
levels provide 16, 64, and 128 MiBps of throughput, respectively, per TiB of
provisioned volume capacity.
Volumes in storage pools for the Flex File default performance service level
share the pool's performance, which is 16 MiBps per TiB of provisioned pool
capacity.
Volumes in storage pools for the Flex Unified or Flex File custom
performance service levels share the pool's performance. You can configure
the pool performance independently of the capacity.
Flex Unified: Default-mode versus ONTAP-mode
The Flex Unified service level offers two ways to provision storage pools:
Default-mode
ONTAP-mode
Unless otherwise specified, all information in this documentation applies to
both modes.
Default-mode
Default-mode is fully managed by Google. All resources are managed through
Google Cloud console, Google Cloud CLI, and the Google Terraform provider, all of
which operate through Google APIs, similar to Standard, Premium, and Extreme
service levels.
Designed for users who prefer a simplified management and might have limited
storage expertise.
Powered by Google Cloud NetApp ONTAP; however, only ONTAP features that are
exposed through Google APIs are available. You can't access or modify ONTAP
features that Google APIs don't support.
iSCSI is generally available (GA). For NFS and SMB support, contact
sales .
ONTAP-mode
Provides advanced control of the ONTAP storage operating system, which lets
you use most ONTAP features and settings for SVMs, volumes, and protocols.
Designed for users experienced with configuring and operating ONTAP storage
systems.
Google manages only storage pools, networking, and CMEK, while ONTAP APIs
control all other resources, such as volumes, protocols, and snapshots.
You are responsible for monitoring all resources except storage pools, for
example, volumes.
ONTAP-mode is in Preview.
Note: In ONTAP-mode, most features except storage pools and CMEK policies are
managed outside of the Google Cloud console and Google Cloud CLI. For more
information, see About ONTAP-mode .
Volumes
A volume is a file
system container in a storage pool that stores application, database, and user
data.
You can create a volume's capacity using the available capacity in the storage
pool and you can define and resize the capacity without disruption to any
processes.
Storage pool settings apply to the volumes contained within them automatically.
Snapshots and snapshot-based data management
NetApp Volumes helps you manage your data usage using
snapshot
capabilities. This lets you take snapshots of your data in seconds without
requiring additional storage space.
NetApp Volumes snapshots aren't a separate physical copy of your
data. Instead, NetApp Volumes snapshots capture only the data
that's been changed since the last snapshot. Note that when you overwrite all of
your data, snapshots can consume significant volume capacity.
Volume replication
You can protect your data through cross-location volume replication ,
which asynchronously replicates a source volume in one location to a destination
volume in a different location. This capability lets you use the other volume
for critical application activity in case of a location-wide outage or disaster.
Volume replication moves only used data blocks during the initial transfer.
During subsequent incremental transfers, only changed blocks transfer. Charges
incur only for bytes transferred, which optimizes transfer times and lowers
costs.
Backups
A backup is a copy of a
volume stored independently from the volume in a backup vault. If a volume is
unavailable or deleted, you can use backups to restore your data to a new volume.
NetApp Volumes supports manual and scheduled volume backups.
The first backup of a volume contains all the volume's data. Subsequent backups
capture only incremental changes which allows for fast incremental-forever
backups and reduces the required capacity inside the backup vault.
Active Directory integration
File sharing protocols like SMB (CIFS), NFSv3 with extended groups, and NFSv4.1,
rely on external directory services to provide user identity information using
security principals. NetApp Volumes relies on
Active Directory
for directory services. Active Directory provides services like LDAP servers for
looking up the following objects:
Users
Groups
Machine accounts
DNS servers (for hostname resolution)
Kerberos servers (for authentication purposes)
Data encryption
NetApp Volumes always encrypts your data at rest using
volume-specific keys.
With customer-managed encryption keys (CMEK) , volume-specific
keys are wrapped using your keys stored in
Cloud Key Management Service . This feature gives you greater
control over the encryption keys you use and adds an additional layer of
security by storing the keys on a system or in a location different from the
data. NetApp Volumes supports Cloud Key Management Service capabilities such as
hardware security modules, Encryption Key Management, and the full key
management lifecycle of generate, use, rotate, and destroy.
Auto-tiering
Users who have large amounts of inactive data can reduce their overall storage
cost by using auto-tiering. Auto-tiering moves inactive data to a cheaper
storage tier. This process is transparent for NFS and SMB clients, and the users
have full visibility and accessibility to the data. Accessing cold data is
slower than accessing hot data. For more information, see
Manage auto-tiering .
Volume migration
Note: The volume migration feature is available in allow-listed
General Availability (GA) for Standard, Premium, and Extreme service levels and
isn't open by default. To request access to this feature, contact
sales .
The volume migration
feature lets you migrate ONTAP-based Flex volumes to NetApp Volumes
using a SnapMirror-based migration. SnapMirror uses baseline and asynchronous
incremental transfers to minimize the downtime required during transition of
your workloads to NetApp Volumes.
This feature is intended for time-limited migrations. For ongoing replications
between ONTAP systems and NetApp Volumes, see
External replication .
External replication
Note: The external replication feature is available in allow-listed
General Availability (GA) for Standard, Premium, and Extreme service levels and
isn't open by default. To request access to this feature, contact
sales .
External replication lets you set up volume replications between ONTAP-based source systems and
NetApp Volumes using SnapMirror. SnapMirror uses baseline and
asynchronous incremental transfers to keep source and destination volumes in
sync. Like volume replication ,
external replications can be stopped, resumed, and their replication direction
reversed. This functionality lets you use NetApp Volumes as
disaster recovery targets for on-premise ONTAP systems.
FlexCache
Note: The FlexCache feature is available in allow-listed
General Availability (GA) for Premium and Extreme service levels and in Preview
for Flex Unified. To request access to this feature, contact
sales .
ONTAP FlexCache
is a NetApp technology, which optimizes data access by creating writable,
sparse, and persistent copies of volumes in remote locations, bringing data
closer to users. This significantly improves performance for read-intensive
workloads by reducing latency and increasing throughput. FlexCache also
simplifies data management in hybrid cloud environments, enabling data caching
in the cloud without requiring a complete data migration.
Additionally, NetApp Volumes lets you create cache volumes from
origin volumes hosted on ONTAP-based source systems, including Flex Unified
volumes in ONTAP-mode.
NetApp Volumes integration with NetApp Console
NetApp Volumes is integrated with the NetApp Console agent. This
integration is intended to simplify your storage management, offering you a
unified platform that simplifies the handling of all your Cloud Storage
requirements. For more information about the NetApp Console agent, see
NetApp Console .
What's next
Read about service levels of
Google Cloud NetApp Volumes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

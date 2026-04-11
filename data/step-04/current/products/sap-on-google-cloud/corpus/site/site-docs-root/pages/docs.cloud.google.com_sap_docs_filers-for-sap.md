---
title: "File sharing solutions for SAP on Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/filers-for-sap
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/filers-for-sap
  title: "File sharing solutions for SAP on Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
File sharing solutions for SAP on Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud supports several file sharing solutions for
SAP on Google Cloud. Which you choose depends on what
you are using the file sharing solution for, whether your SAP systems
extend across zones or regions, and the performance requirements of your
workloads.
Supported file sharing solutions for SAP on Google Cloud
The following table shows the file sharing solutions that
Google Cloud supports for SAP systems.
If you are already using one of these file sharing solutions for other
purposes and the solutions meets all of the requirements of your SAP workloads,
then you can use that solution for your SAP systems also.
Important: NetApp Cloud Volumes Services (CVS) for Google Cloud
has reached its end of support. If you're using NetApp CVS, then we strongly
recommend that you transition to another file sharing solution such as
Google Cloud NetApp Volumes
at the earliest.
File sharing solution
Description
Filestore
Google Cloud high-performance, fully managed file storage.
For multi-zonal highly available deployments, we recommend
using the Regional service tier of
Filestore (Filestore Regional, formerly Filestore Enterprise).
For information about the Filestore service tiers, see
Service tiers .
For a quickstart guide to Filestore Regional, see
Create a
Filestore instance by using the Google Cloud console .
NetApp Cloud Volumes ONTAP
A full-featured, smart storage solution that you deploy and manage
yourself on a Compute Engine virtual machine.
For more information about NetApp Cloud Volumes ONTAP, see
Overview of Cloud Volumes ONTAP .
Google Cloud NetApp Volumes
Google Cloud NetApp Volumes is a fully managed, cloud-based data
storage service that provides advanced data management capabilities
and highly scalable performance.
NetApp Volumes offers four service levels:
Flex , Standard , Premium , and Extreme . For most
SAP use cases, you need to use the Extreme service level, but, if
your use case doesn't require high performance, you
can use the Flex, Standard, or Premium service level. For the SAP
HANA data and log directories, you must use the Premium or Extreme
service level.
For more information, see
About Google Cloud NetApp Volumes .
File sharing solutions by SAP use case
The following table lists the most common use cases for
file sharing solutions in SAP landscapes and the solutions that
support the use cases.
Use case
Purpose
Recommended solutions
Interface directory
For use as a general storage location by SAP and other software
systems to pass files between servers.
Filestore Regional (formerly Enterprise)
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes, Premium or Extreme service level
SAP transport directory
For use as an SAP storage location by SAP systems to hold shared
application files in distributed or high-availability deployments,
or to transport SAP files and updates between different operational
environments.
Filestore Regional (formerly Enterprise)
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes, Premium or Extreme service level
Backup directory
For use by SAP or other systems as a centralized storage location
for backups.
Filestore Regional (formerly Enterprise)
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes, Premium or Extreme service level
SAP HANA scaleout system directory
For use within a single zone by SAP HANA scaleout systems to share
binaries and configuration files between the SAP HANA nodes.
Filestore Regional (formerly Enterprise) or Basic
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes, Premium or Extreme service level
SAP HANA shared files
For storing shared binaries and configuration files used by the SAP HANA
nodes.
Filestore Regional (formerly Enterprise)
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes, Premium or Flex service level
Features supported by each file sharing solution
The following table shows the common features that SAP systems require
of file sharing solutions and the solutions that support those features.
Feature
Filestore Basic
Filestore Regional (formerly Enterprise)
NetApp Cloud Volumes ONTAP
Google Cloud NetApp Volumes
Disaster recovery
Manual
Manual
Automated with Snapmirror
Multi-region replication
High availability
Zonal service, 99.9% SLA
Multi-zonal service, 99.99% SLA
Multi-zone HA solution; 99.99% SLA for only the Google Cloud
infrastructure
Premium or Extreme service levels as zonal service with 99.95%
SLA .
Flex service level as regional service with 99.99%
SLA .
Snapshots/Backup
Yes
Yes
Yes
Yes
Managed service
Yes
Yes
No
Yes
Protocols
NFSv3
NFSv3
NFSv3, NFSv4.1, SMB, iSCSI
NFSv3, NFSv4.1, SMB
Regional replication
No
No
With Snapmirror
Yes
Regional availability
All regions
All regions
All regions
In regions where NetApp Volumes is available. See
NetApp Volumes locations .
RPO for disaster recovery
Not applicable
Not applicable
As low as 15 minutes Note 1
As low as 10 minutes Note 1 for cross-regional outages.
Storage, minimum
1 TB
1 TB
100 GB volume with 638 GB system disk
1 TB Note 4
Support provider
Google Cloud
Google Cloud
NetApp for NetApp software and
Google Cloud for infrastructure
Google Cloud
Throughput performance
100 MB/s R/W Note 2
120/100 MB/s R/W Note 2
Configuration dependent. See the NetApp documentation.
128 MiB/s R/W Note 3
Table notes:
Note 1: The times shown are
approximate and depend on a variety of factors, including your system
and network configuration, backup intervals, and recovery procedures.
Note 2: With the
Filestore Basic and Regional tiers, the volume size
affects the storage speed.
The R/W throughput that is shown in the table is based on a volume
size of 1 TB. For more information, see
Service tiers . The performance
of Filestore Regional scales to 1,200/1,000 MiB/s with a 10 TB volume.
Note 3: With
Google Cloud NetApp Volumes, the storage speed (throughput) is determined based
on the service level and volume size. The R/W throughput that is shown in
the table is for the lowest cost option and is based on a volume size of
1 TB.
Note 4: Google Cloud NetApp Volumes supports the
volume sizes as low as 1 GiB.
About Google Cloud NetApp Volumes
Google Cloud NetApp Volumes is a fully-managed, cloud-based
data storage service that you can use to create an NFS file system for SAP
HANA scale-up systems on all Compute Engine instance types that are
certified for use with SAP HANA.
NetApp Volumes offers the following service levels: Flex,
Standard, Premium, and Extreme. With the SAP HANA data and log directories, you
must use Premium or Extreme service level. For SAP shared files, you can
use Premium, Extreme, or Flex service level. For more information about the
service levels, see
Key features .
Support for NetApp Volumes in scale-out deployments is limited to
specific Compute Engine instance types, as noted in the table in
Certified machine types for SAP HANA .
With NetApp Volumes, you can place all of the SAP HANA directories,
including /hana/data and /hana/logs , in shared storage, instead of
using Persistent Disk or Google Cloud Hyperdisk volumes. With most other shared storage
systems, you can place only the /hana/shared directory in shared storage.
SAP support for NetApp Volumes is listed in the
Certified and Supported SAP HANA Hardware Directory .
Regional availability of NetApp Volumes for SAP HANA
Your NetApp Volumes volumes must be in the same region as the
Compute Engine instances that host your SAP HANA system.
Support for SAP HANA by NetApp Volumes is not available in every
region that NetApp Volumes is available in.
You can use NetApp Volumes with SAP HANA in the following
Google Cloud regions:
Region
Location
europe-west4
Eemshaven, Netherlands, Europe
us-east4
Ashburn, Northern Virginia, USA
us-west2
Los Angeles, California, USA
If you are interested in running SAP HANA with NetApp Volumes in
a Google Cloud region that is not listed in the preceding table, then
contact Google Cloud sales .
NFS protocol support
NetApp Volumes supports the NFSv3 and NFSv4.1 protocols with
SAP HANA on Google Cloud.
NFSv3 is recommended for volumes that are configured to allow multiple TCP
connections. NFSv4.1 is not supported with multiple TCP connections.
Volume requirements for NetApp Volumes with SAP HANA
The NetApp Volumes volumes must be in the same region as the host
VM instances.
For the /hana/data and /hana/log volumes, the Extreme or Premium service
level of NetApp Volumes is required. You can use the
Premium service level for the /hana/shared directory if it is in a
separate volume from the /hana/data and /hana/log directories.
For the best performance with SAP HANA systems that are larger than 1 TB,
create separate volumes for /hana/data , /hana/log , and /hana/shared .
To meet SAP HANA performance requirements, the following minimum volume sizes
are required when running SAP HANA with NetApp Volumes:
Directory
Minimum size
/hana/shared
1 TB
/hana/log
2.5 TB
/hana/data
4 TB
Adjust the size of your volumes to meet your throughput requirements. The
maximum throughput for the Extreme service level is 128 MB per second for each
1 TB volume, up to a maximum of 4.5 GiBps per volume. 30 GiBps with large
capacity volumes. For more information about the expected performance of
NetApp Volumes, see Maximum volume throughput and IOPS . Provisioning more disk
space for the /hana/data volume can reduce startup times. For the /hana/data
volume, we recommend either 1.5 times the size of your memory or 4 TB, whichever
is greater.
The minimum size for the /hanabackup volume is determined by your backup
strategy. You can also use the Backint feature of Google Cloud's Agent for SAP to
backup the database directly into Cloud Storage. For more information,
see
Backup and recovery for SAP HANA by using Backint .
Deploying an SAP HANA system with NetApp Volumes
To deploy NetApp Volumes with SAP HANA on Google Cloud,
you need to deploy your VMs and install SAP HANA first. You can use the
Terraform configuration files that Google Cloud provides
to deploy the Compute Engine instances and SAP HANA, or you can create
the compute instances and install SAP HANA manually.
If you use the Terraform configuration files, then the compute instances are
deployed with the /hana/data and /hana/log directories mapped to
Persistent Disk or Hyperdisk volumes. After you mount the
NetApp Volumes volumes to the compute instances, you need to copy
the contents of the deployed disks, as described in the following steps.
To deploy SAP HANA with NetApp Volumes by using the
deployment files that Google Cloud provides:
Deploy SAP HANA with Persistent Disk or Hyperdisk volumes by
following the instructions provided in
Terraform: SAP HANA deployment guide .
Create your NetApp Volumes volumes. For information about how
to do this, see Create a volume .
Mount NetApp Volumes to a temporary mount point
by using the mount command with following settings:
mount -t nfs -o OPTIONS server:path mountpoint
For OPTIONS , use the following settings:
rw,bg,hard,rsize=1048576,wsize=1048576,vers=3,tcp,nconnect=16,noatime,nolock
The option vers=3 indicates NFSv3. The option nconnect=16 specifies
support for multiple TCP connections.
Stop SAP HANA and any related services that are using the attached
Persistent Disk or Hyperdisk volumes.
Copy the contents of the Persistent Disk or Hyperdisk
volumes to the corresponding NetApp Volumes volumes.
Detach the Persistent Disk or Hyperdisk volumes.
Remount the NetApp Volumes volumes to the permanent mount
points by updating the /etc/fstab with the following settings:
server:path /mountpoint nfs OPTIONS 0 0
For OPTIONS , use the following settings:
rw,bg,hard,rsize=1048576,wsize=1048576,vers=3,tcp,nconnect=16,noatime,nolock
For more information about updating the /etc/fstab file, see the
nfs page in the Linux File Formats manual.
For the best performance, update the fileio category in the SAP HANA
global.ini file with the following suggested settings:
Parameter
Value
async_read_submit
on
async_write_submit_active
on
async_write_submit_blocks
all
max_parallel_io_requests
128
max_parallel_io_requests[data]
128
max_parallel_io_requests[log]
128
num_completion_queues
4
num_completion_queues[data]
4
num_completion_queues[log]
4
num_submit_queues
8
num_submit_queues[data]
8
num_submit_queues[log]
8
Restart SAP HANA.
After confirming that everything works as expected, delete the
Persistent Disk or Hyperdisk volumes to avoid being charged
for them.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

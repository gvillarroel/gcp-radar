---
title: "Certifications for SAP HANA on Google Cloud \_|\_ SAP on Google Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/certifications-sap-hana
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/certifications-sap-hana
  title: "Certifications for SAP HANA on Google Cloud \_|\_ SAP on Google Cloud \_\
    |\_ Google Cloud Documentation"
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
Certifications for SAP HANA on Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
SAP certifies a wide range of Google Cloud machine types for use
with SAP HANA on Google Cloud. With each machine type, you can
have different options for the operating system, CPU platform, block
storage, and so forth. SAP also certifies Compute Engine instances for
SAP HANA dynamic tiering.
Certified machine types for SAP HANA
For SAP HANA, SAP certifies only a subset of the machine types that are
available from Google Cloud.
From the machine types that SAP certifies for use with SAP HANA, you can choose
to create virtual machine (VM) instances or bare metal instances.
Custom configurations of the general-purpose n1- and n2-highmem machine types
are also certified by SAP. For more information, see
Certified custom machine types for SAP HANA .
For the operating systems that are certified for use with HANA on each
machine type, see Certified operating systems for SAP HANA .
Some machine types are not available in all Google Cloud
regions. To check the regional availability of a Compute Engine
machine type, see Available regions & zones .
SAP lists the certified machine types for SAP HANA in the
Certified and Supported SAP HANA Hardware Directory .
For more information about different Compute Engine machine types and
their use cases, see machine types .
Certified Compute Engine machine types for SAP HANA
The following table shows Compute Engine machine types that are certified by SAP
for SAP HANA:
Note: The prefix in the following machine names changed from
" n1 " to " m1 " to more clearly identify the machines
as members of the memory-optimized machine family:
n1-megamem-96 is now m1 -megamem-96
n1-ultramem-40 is now m1 -ultramem-40
n1-ultramem-80 is now m1 -ultramem-80
n1-ultramem-160 is now m1 -ultramem-160
The machines themselves did not change and the former names are still
supported as aliases for these machines.
The following table shows all of the Google Cloud machine types
that are certified by SAP for production use of SAP HANA.
The table does not include the machine types that SAP certifies for
SAP Business One on SAP HANA. For the machine types that SAP certifies for
SAP HANA with SAP Business One, see
Certified SAP applications on Google Cloud .
Machine types
vCPUs
Memory
Operating system
CPU platform
Application type
Notes
N1 high-memory, general-purpose machine types
n1-highmem-32
32
208 GB
RHEL , SUSE
Intel Broadwell
OLAP or OLTP
Block storage: Compute Engine Persistent Disk or, for
scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n1-highmem-64
64
416 GB
RHEL , SUSE
Intel Broadwell
OLAP or OLTP
Block storage: Compute Engine Persistent Disk or, for
scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n1-highmem-96
96
624 GB
RHEL , SUSE
Intel Skylake
OLAP or OLTP
Block storage: Compute Engine Persistent Disk or, for scale up only,
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
N2 high-memory, general-purpose machine types
n2-highmem-32
32
256 GB
RHEL , SUSE
Intel Ice Lake,
Intel Cascade Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk or
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n2-highmem-48
48
384 GB
RHEL , SUSE
Intel Ice Lake,
Intel Cascade Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk or
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n2-highmem-64
64
512 GB
RHEL , SUSE
Intel Ice Lake,
Intel Cascade Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk or
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n2-highmem-80
80
640 GB
RHEL , SUSE
Intel Ice Lake,
Intel Cascade Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n2-highmem-96
96
768 GB
RHEL , SUSE
Intel Ice Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
n2-highmem-128
128
864 GB
RHEL , SUSE
Intel Ice Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
C3 general-purpose machine types
c3-standard-44
44
176 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Balanced,
or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c3-highmem-44
44
352 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Balanced,
or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c3-highmem-88
88
704 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced,
or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c3-highmem-176
176
1,408 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced,
or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
C3 general-purpose bare metal machine types
c3-highmem-192-metal
192
1,536 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced.
C4 general-purpose machine types
c4-highmem-32
32
248 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only. Block storage:
Hyperdisk Balanced or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c4-highmem-48
48
372 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only. Block storage:
Hyperdisk Balanced or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c4-highmem-96
96
744 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only. Block storage: Hyperdisk Extreme,
Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c4-highmem-144
144
1,116 GB
RHEL , SUSE
Intel Granite Rapids
OLAP or OLTP
Scale up only. Block storage: Hyperdisk Extreme or
Hyperdisk Balanced
c4-highmem-192
192
1,488 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only. Block storage: Hyperdisk Extreme,
Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
c4-highmem-288
288
2,232 GB
RHEL , SUSE
Intel Granite Rapids
OLAP or OLTP
Scale up only. Block storage: Hyperdisk Extreme or
Hyperdisk Balanced
c4-highmem-288-metal
288
2,232 GB
RHEL , SUSE
Intel Granite Rapids
OLAP or OLTP
Scale up only. Block storage: Hyperdisk Extreme or
Hyperdisk Balanced
M1 memory-optimized machine types
m1-megamem-96
96
1,433 GB
RHEL , SUSE
Intel Skylake
OLAP or OLTP
OLAP: scale up, and scale out up to 16 nodes.
OLTP: scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or, for OLTP scale
up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m1-ultramem-40
40
961 GB
RHEL , SUSE
Intel Broadwell
OLTP only
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m1-ultramem-80
80
1,922 GB
RHEL , SUSE
Intel Broadwell
OLTP only
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m1-ultramem-160
160
3,844 GB
RHEL , SUSE
Intel Broadwell
OLAP or OLTP
2 TB OLAP workloads certified for scale up and scale out up to 16 nodes. Up to 4 TB OLAP workloads supported with workload based sizing.
OLTP workloads certified for scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or, for OLTP scale
up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
M2 memory-optimized machine types
m2-megamem-416
416
5,888 GB
RHEL , SUSE
Intel Cascade Lake
OLAP or OLTP
OLAP workloads certified for scale up and scale out up to 16 nodes.
OLTP workloads are certified for scale up, and scale out up to 4
nodes.
Certification for OLTP scale out includes SAP S/4HANA.
For scale out with S/4HANA, see SAP Note 2408419 .
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or, for
scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes) .
m2-ultramem-208
208
5,888 GB
RHEL , SUSE
Intel Cascade Lake
OLTP only
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced,
or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m2-ultramem-416
416
11,776 GB
RHEL , SUSE
Intel Cascade Lake-SP
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for
scale up, and scale out up to 16 nodes.
OLTP workloads are certified for scale up, and scale out up to 4
nodes.
Certification for OLTP scale out includes SAP S/4HANA.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced,
or, for scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
For scale out with S/4HANA, see SAP Note 2408419 .
m2-hypermem-416
416
8,832 GB
RHEL , SUSE
Intel Cascade Lake
OLTP only
OLTP workloads are certified for scale up, and scale out up to 4 nodes.
Certification for OLTP scale out includes SAP S/4HANA.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced,
or, for scale up only, Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
For scale out with S/4HANA, see SAP Note 2408419 .
M3 memory-optimized machine types
m3-ultramem-32
32
976 GB
RHEL , SUSE
Intel Ice Lake
OLTP only
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m3-ultramem-64
64
1,952 GB
RHEL , SUSE
Intel Ice Lake
OLTP only
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m3-ultramem-128
128
3,904 GB
RHEL , SUSE
Intel Ice Lake
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for scale-up, and scale-out up to 8 nodes. OLTP workloads are certified for scale up.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m3-megamem-64
64
976 GB
RHEL , SUSE
Intel Ice Lake
OLAP or OLTP
Scale up only.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes).
m3-megamem-128
128
1,952 GB
RHEL , SUSE
Intel Ice Lake
OLAP or OLTP
Scale up, and scale out up to 16 nodes.
Block storage: Compute Engine Persistent Disk,
Hyperdisk Extreme, Hyperdisk Balanced, or
Google Cloud NetApp Volumes (the Premium or Extreme service level for the SAP HANA data and log volumes) (scale-up only).
M4 memory-optimized machine types
m4-megamem-28
28
372 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Balanced.
m4-megamem-56
56
744 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Balanced.
m4-megamem-112
112
1,488 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced.
m4-megamem-224
224
2,976 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up, or scale-out up to 8 nodes
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced.
m4-ultramem-56
56
1,488 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
OLAP workloads are certified with workload-based sizing.
Block storage: Hyperdisk Balanced.
m4-ultramem-112
112
2,976 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
OLAP workloads are certified with workload-based sizing.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced.
m4-ultramem-224
224
5,952 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
OLAP workloads are certified with workload-based sizing.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced.
m4-hypermem-16
16
248 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Balanced.
m4-hypermem-32
32
496 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
Scale up only.
Block storage: Hyperdisk Balanced.
m4-hypermem-64
64
992 GB
RHEL , SUSE
Intel Emerald Rapids
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for scale-up
and scale-out up to 8 nodes. OLTP workloads are certified for scale up.
Block storage: Hyperdisk Balanced.
X4 memory-optimized bare metal machine types
Note : From December 12, 2025, the naming convention for X4 machine types
has changed to clarify the memory they offer. For example, x4-megamem-960-metal has
changed to x4-960-16t-metal because it offers 16 TB of memory. While this naming
change is backwards compatible, we recommend that you use the updated names for new deployments.
x4-480-6t-metal
480
6,144 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for scale-up
and scale-out up to 8 nodes. OLTP workloads are certified for scale up.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
x4-480-8t-metal
480
8,192 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for scale-up
and scale-out up to 8 nodes. OLTP workloads are certified for
scale-up and scale-out up to 4 nodes.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
x4-960-12t-metal
960
12,288 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLAP workloads are certified with workload-based sizing for scale-up
and scale-out up to 8 nodes. OLTP workloads are certified for
scale-up, and scale-out up to 4 nodes.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
x4-960-16t-metal
960
16,384 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLTP workloads are certified for scale out up to 4 nodes, and scale up.
OLAP workloads are certified for scale out up to 8 nodes, and scale up.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
x4-1440-24t-metal
1,440
24,576 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLTP workloads are certified for scale out up to 4 nodes, and scale up.
OLAP workloads are certified for scale out up to 8 nodes, and scale up.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
x4-1920-32t-metal
1,920
32,768 GB
RHEL , SUSE
Intel Sapphire Rapids
OLAP or OLTP
OLTP workloads are certified for scale out up to 4 nodes, and scale up.
OLAP workloads are certified for scale out up to 8 nodes, and scale up.
Block storage: Hyperdisk Extreme,
Hyperdisk Balanced
Certified custom machine types for SAP HANA
The following table shows the Compute Engine custom machine
types that are certified by SAP for production use of SAP HANA
on Google Cloud.
SAP certifies only a subset of the custom machine types that are
available from Compute Engine.
Custom machine types are subject to customization rules that are defined by
Compute Engine. The rules differ depending on which
machine type you are customizing. For complete customization rules, see
Create a VM with a custom machine type .
Base machine type
vCPUs
Memory (GB)
Operating system
CPU platforms
n1-highmem
A number of vCPUs from 32 to 64 that is evenly divisible by 2.
6.5 GB for each vCPU
RHEL , SUSE
Intel Broadwell
n2-highmem (Scale up only)
On Intel Ice Lake, a number of vCPUs from 32 to 80 that is evenly
divisible by 4.
On Intel Cascade Lake, a number of vCPUs from 32 to 80 that is evenly
divisible by 4.
Up to 8 GB per vCPU
RHEL , SUSE
Intel Ice Lake,
Intel Cascade Lake
If the custom machine types that are available from Compute Engine don't
meet the memory requirements of your SAP HANA system, then additional options are
available through partners that provide managed services. To find a
partner that offers managed services for SAP HANA, contact Google Cloud sales .
Certified operating systems for SAP HANA
The following table shows the Red Hat Enterprise
Linux (RHEL) and SUSE Linux Enterprise Server (SLES) operating systems
that are certified by SAP for production use with SAP HANA on
Google Cloud.
Except where noted in the table, each operating system is supported with
SAP HANA on all certified Compute Engine machine types .
For information about the current support status of each operating system
and which operating systems are available from
Google Cloud, see Operating system support for SAP HANA on Google Cloud .
For information from SAP about which operating systems SAP supports with
SAP HANA on Google Cloud, go to
Certified and Supported SAP HANA Hardware Directory ,
click the required machine type, and then see Operating System .
For SLES 15 SP5 and earlier, SAP HANA table load performance can be slower
because of a Linux kernel limitation that is optimized in SLES 15 SP6 and later.
For more information, see the SUSE knowledge base article High system CPU during HANA table load in SUSE Linux Enterprise 15 SP5 and earlier .
The following table doesn't include the following:
Certified operating system versions that are no longer in mainstream
support.
Operating system versions that are not specific to SAP.
Operating system
Version
Supported SAP-certified machine types for use with SAP HANA
Minimum kernel version
RHEL for SAP
9.6 Note
All
5.14.0-570.16.1.el9_6 , for X4, C3-metal, and C4-metal
9.4 Note
All
5.14.0-427.70.1.el9_4 , for X4, C3-metal, and C4-metal
9.2 Note
All except X4, C3-metal, C4-metal
N/A
9.0 Note
All except X4, C3-metal, C4-metal
N/A
8.10
All
4.18.0-553.58.1.el8_10 , for X4, C3-metal, and C4-metal
8.8
All except X4, C3-metal, C4-metal
N/A
8.6
All except X4, C3-metal, C4-metal
N/A
8.4
All except X4, C3-metal, M4, C4-metal
N/A
8.2
All except X4, C3-metal, M4, C4-metal
N/A
8.1
All except X4, C3, M3, M4, C4-metal
N/A
7.9
All except C4, X4, C3-metal, M4
N/A
SLES for SAP
15 SP7
All
6.4.0-150700.53.3 , for X4, C3-metal, and C4-metal
15 SP6
All
6.4.0-150600.23.38.1 , for X4, C3-metal, and C4-metal
15 SP5
All
5.14.21-150500.55.94.1 , for X4, C3-metal, and C4-metal
15 SP4
All
5.14.21-150400.24.161.1 , for X4, C3-metal, and C4-metal
15 SP3
All except X4, C3-metal, C4-metal
N/A
15 SP2
All except X4, C3-metal, M4, C4-metal
N/A
12 SP5
All except X4, C3-metal, C4-metal
N/A
Note:
Before you install any SAP software on RHEL for SAP 9.x, additional packages must be installed on
your host machines, especially chkconfig and compat-openssl11 . If you use
an image provided by Compute Engine, then these packages are automatically installed for
you. For more information from SAP, see
SAP Note 3108316 - Red Hat Enterprise Linux 9.x: Installation and Configuration .
Persistent disk storage for SAP HANA
For persistent block storage, you can attach
Persistent Disk or Hyperdisk volumes when you create your
compute instances or add them to your compute instances later.
Supported disk types
Compute Engine offers different Persistent Disk and
Hyperdisk types based on either
solid-state drive (SSD)
technology or
standard hard disk drive (HDD)
technology. Each type has different performance characteristics.
Google Cloud manages the underlying hardware of the
disks to ensure data redundancy and to optimize performance.
For performance reasons, the SAP HANA /hana/data and /hana/log volumes
require SSD-based persistent storage disks.
SSD-based Persistent Disk and Hyperdisk types that are
certified by SAP for use with SAP HANA include the following:
SSD-based Persistent Disk types : Balanced ( pd-balanced ), Performance or
SSD ( pd-ssd ), and Extreme ( pd-extreme )
These disk types provide cost-effective and reliable block storage.
Performance (SSD) Persistent Disk ( pd-ssd ) provides higher performance
than Balanced Persistent Disk ( pd-balanced ).
Use Balanced Persistent Disk as the recommended disk for hosting the
following volumes:
Boot volume of the compute instance.
The /usr/sap volume.
The /hana/shared volume, if you're hosting it on its own disk.
The /hanabackup volume, if you save your backups to a disk. If you
want to reduce the backup costs, then you can use a Standard HDD
Persistent Disk ( pd-standard ). Balanced Persistent Disk provides
faster backups than Standard HDD Persistent Disk. While selecting the
disk, make sure that your machine type supports the disk type.
Balanced and Performance (SSD) Persistent Disk support
PD Async Replication. You can use this feature for cross-region
active-passive disaster recovery. For more information, see
Disaster recovery using PD Async Replication .
While Extreme Persistent Disk ( pd-extreme ) is certified for use with SAP
HANA, we recommend that you instead use Hyperdisk Extreme
( hyperdisk-extreme ), which provides greater performance. If you want to
use Extreme Persistent Disk, then make sure to provision the disks in
accordance with the information in
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes .
Hyperdisk types : Hyperdisk Extreme ( hyperdisk-extreme ) and
Hyperdisk Balanced ( hyperdisk-balanced )
Hyperdisk Extreme provides higher maximum IOPS and
throughput options than SSD-based Persistent Disk types.
For a list of the machine types that support Hyperdisk Extreme
and Hyperdisk Balanced, see
Machine type support .
Use Hyperdisk Balanced as the recommended disk for hosting
the following for Compute Engine bare metal instances such as X4:
The boot disk.
The /usr/sap volume.
The /hana/shared volume, if you're hosting it on its own disk.
The /hanabackup volume, if you save your backups to a disk.
For Hyperdisk Extreme, you select
the performance you need by provisioning IOPS, which also
determines your throughput. For more information, see
Size and performance limits for Hyperdisk Extreme .
For Hyperdisk Balanced, you select
the performance you need by provisioning IOPS and throughput. For more
information, see Size and performance limits for Hyperdisk Balanced .
You can use Hyperdisk Extreme for the /hana/data and
/hana/log volumes when you require the highest performance.
To enable the best performance from Hyperdisk Extreme for
SAP HANA, update your SAP HANA system properties as recommended in
Hyperdisk Extreme performance .
For more information about persistent disk storage for SAP HANA on
Google Cloud, see
Persistent disk storage .
For more information about the different types of
Persistent Disk and Hyperdisk volumes, their performance
characteristics, and how to work with them, see the following documentation:
Storage options
About Hyperdisk
Hyperdisk performance
Hyperdisk performance limits
Persistent Disk performance
Other factors that affect Persistent Disk performance
Attach a non-boot disk to a VM
Create and manage disk snapshots
Migrate SAP HANA Persistent Disk volumes to Hyperdisk volumes
Minimum sizes and performance for Persistent Disk and Hyperdisk volumes
When you size certain Compute Engine SSD-based Persistent Disk
or Hyperdisk volumes for
SAP HANA, you need to account for not only the storage requirements of
your SAP HANA instance, but also for the performance of the disk.
Within limits, the performance of an SSD or Balanced
Persistent Disk volume increases as the size of the disk and the number of
vCPUs increase. If an SSD or Balanced Persistent Disk volume is too small, then it
might not provide the performance that SAP HANA requires.
The performance of Hyperdisk is not
affected by disk size. Its performance is determined by the IOPS or throughput
that you provision. For information about the performance of Hyperdisk, see
Google Cloud Hyperdisk overview .
A 550 GB SSD or a 943 GB balanced persistent disk provides
a sustained throughput of 400 MB per second for reads and writes, which
is the minimum. For general information
about Persistent Disk performance, see Persistent Disk performance overview .
The following table shows the minimum recommended sizes for SSD Persistent Disk
( pd-ssd ), Balanced Persistent Disk ( pd-balanced ),
Hyperdisk Extreme ( hyperdisk-extreme ),
and Hyperdisk Balanced ( hyperdisk-balanced ) to meet SAP HANA performance
requirements in a
production environment for each Compute Engine
machine type that is certified for SAP HANA. The minimum sizes for Hyperdisk
volumes, which are based solely on the amount of memory, are included in the table
for reference.
For information about the recommended storage configuration for SAP HANA systems
running on X4 instances, see
Supported block storage for X4 .
The sizes in the following table assume that you are mounting all the SAP HANA
volumes on individual disks.
Balanced Persistent Disk
If you want to use more than one Balanced Persistent Disk volume to
host your /hana/data volume, then make sure to equally divide
the size value given in the " /hana/data size (GB)" column among
the disk volumes that you provision.
Compute Engine machine type
/hana/data size (GB)
/hana/log size (GB)
/hana/shared size (GB)
/usr/sap size (GB)
Total size (GB)
n1-highmem-32
599
104
208
32
943
n1-highmem-64
499
208
416
32
1,155
n1-highmem-96
748
312
624
32
1,716
n2-highmem-32
527
128
256
32
943
n2-highmem-48
460
192
384
32
1,068
n2-highmem-64
614
256
512
32
1,414
n2-highmem-80
768
320
640
32
1,760
n2-highmem-96
921
384
768
32
2,105
n2-highmem-128
1,036
432
864
32
2,364
c3-standard-44
647
88
176
32
943
c3-highmem-44
422
176
352
32
982
c3-highmem-88
844
352
704
32
1,932
c3-highmem-176
1,689
512
1,024
32
3,257
m1-megamem-96
1,719
512
1,024
32
3,287
m1-ultramem-40
1,153
480
961
32
2,626
m1-ultramem-80
2,306
512
1,024
32
3,874
m1-ultramem-160
4,612
512
1,024
32
6,180
m2-megamem-416
7,065
512
1,024
32
8,633
m2-ultramem-208
7,065
512
1,024
32
8,633
m2-ultramem-416
14,092
512
1,024
32
15,660
m2-hypermem-416
10,598
512
1,024
32
12,166
m3-ultramem-32
1,171
488
976
32
2,667
m3-ultramem-64
2,342
512
1,024
32
3,910
m3-ultramem-128
4,684
512
1,024
32
6,252
m3-megamem-64
1,171
488
976
32
2,667
m3-megamem-128
2,342
512
1,024
32
3,910
SSD Persistent Disk
If you want to use more than one SSD Persistent Disk volume to
host your /hana/data volume, then make sure to equally divide
the size value provided in the " /hana/data size (GB)" column among
the disk volumes that you provision.
Compute Engine machine type
/hana/data size (GB)
/hana/log size (GB)
/hana/shared size (GB)
/usr/sap size (GB)
Total size (GB)
n1-highmem-32
249
104
208
32
593
n1-highmem-64
499
208
416
32
1,155
n1-highmem-96
748
312
624
32
1,716
n2-highmem-32
307
128
256
32
723
n2-highmem-48
460
192
384
32
1,068
n2-highmem-64
614
256
512
32
1,414
n2-highmem-80
768
320
640
32
1,760
n2-highmem-96
921
384
768
32
2,105
n2-highmem-128
1,036
432
864
32
2,364
c3-standard-44
254
88
176
32
550
c3-highmem-44
422
176
352
32
982
c3-highmem-88
844
352
704
32
1,932
c3-highmem-176
1,689
512
1,024
32
3,257
m1-megamem-96
1,719
512
1,024
32
3,287
m1-ultramem-40
1,153
480
961
32
2,626
m1-ultramem-80
2,306
512
1,024
32
3,874
m1-ultramem-160
4,612
512
1,024
32
6,180
m2-megamem-416
7,065
512
1,024
32
8,633
m2-ultramem-208
7,065
512
1,024
32
8,633
m2-ultramem-416
14,092
512
1,024
32
15,660
m2-hypermem-416
10,598
512
1,024
32
12,166
m3-ultramem-32
1,171
488
976
32
2,667
m3-ultramem-64
2,342
512
1,024
32
3,910
m3-ultramem-128
4,684
512
1,024
32
6,252
m3-megamem-64
1,171
488
976
32
2,667
m3-megamem-128
2,342
512
1,024
32
3,910
Hyperdisk Extreme
When you use Hyperdisk Extreme to host the /hana/data
and /hana/log volumes, make sure to host the
/hana/shared and /usr/sap volumes on separate
balanced persistent disks. This is because the /hana/shared and
/usr/sap volumes don't require as high a performance as the
data and log volumes.
If you want to use more than one Hyperdisk Extreme volume
to host your /hana/data volume, then make sure to equally
divide the size and IOPS values provided in the
" /hana/data (GB) size and IOPS" column among the disk volumes
that you provision.
Compute Engine machine type
/hana/data size (GB) and IOPS
/hana/log size (GB) and IOPS
/hana/shared size (GB)
/usr/sap size (GB)
Total size (GB)
n2-highmem-80
768 GB with 10,000 IOPS
320 GB with 10,000 IOPS
640
32
1,760
n2-highmem-96
921 GB with 10,000 IOPS
384 GB with 10,000 IOPS
768
32
2,105
n2-highmem-128
1,036 GB with 10,000 IOPS
432 GB with 10,000 IOPS
864
32
2,364
c3-highmem-88
844
GB with 10,000 IOPS
352
GB with 10,000 IOPS
704
32
1,932
c3-highmem-176
1,689
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,257
c3-highmem-192-metal
1,843
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,411
c4-highmem-96
892
GB with 10,000 IOPS
372
GB with 10,000 IOPS
744
32
2,040
c4-highmem-144
1,339
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
2,907
c4-highmem-192
1,785
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,353
c4-highmem-288
2,678
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
4,246
c4-highmem-288-metal
2,678
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
4,246
m1-megamem-96
1,719
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,287
m1-ultramem-80
2,306
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,874
m1-ultramem-160
4,612
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
6,180
m2-megamem-416
7,065
GB with 14,130 IOPS
512
GB with 3,000 IOPS
1,024
32
8,633
m2-ultramem-208
7,065
GB with 14,130 IOPS
512
GB with 10,000 IOPS
1,024
32
8,633
m2-ultramem-416
14,092
GB with 28,184 IOPS
512
GB with 10,000 IOPS
1,024
32
15,660
m2-hypermem-416
10,598
GB with 21,196 IOPS
512
GB with 10,000 IOPS
1,024
32
12,166
m3-ultramem-64
2,342
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,910
m3-ultramem-128
4,684
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
6,252
m3-megamem-64
1,171
GB with 10,000 IOPS
488
GB with 10,000 IOPS
976
32
2,667
m3-megamem-128
2,342
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,910
m4-megamem-112
1,785
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
3,353
m4-megamem-224
3,571
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
5,139
m4-ultramem-112
3,571
GB with 10,000 IOPS
512
GB with 10,000 IOPS
1,024
32
5,139
m4-ultramem-224
7,142
GB with 14,130 IOPS
512
GB with 10,000 IOPS
1,024
32
8,710
Hyperdisk Balanced
For SAP HANA, the minimum supported provisioned IOPS is 3000
and throughput is 400 MBps. However, you can tune these values to your
specific performance requirements. We recommend a starting value of
3000 IOPS and 750 MBps throughput, as these are the default values
used in the Terraform configuration files that
Google Cloud provides for automated deployment of SAP HANA.
If you want to use more than one Hyperdisk Balanced volume
to host your /hana/data volume, then make sure to equally
divide the size, IOPS, and throughput values provided in the
" /hana/data size (GB), IOPS, and throughput" column among the
disk volumes that you provision.
Compute Engine machine type
/hana/data size (GB), IOPS, and throughput
/hana/log size (GB), IOPS, and throughput
/hana/shared size (GB)
/usr/sap size (GB)
Total size (GB)
c3-standard-44
211 GB with 10,000 IOPS and 400 MBps throughput
88 GB with 3,000 IOPS and 400 MBps throughput
176
32
507
c3-highmem-44
422 GB with 10,000 IOPS and 400 MBps throughput
176 GB with 3,000 IOPS and 400 MBps throughput
352
32
982
c3-highmem-88
844
GB with 10,000 IOPS and 1,200 MBps throughput
352
GB with 3,000 IOPS and 400 MBps throughput
704
32
1,932
c3-highmem-176
1,689
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,257
c3-highmem-192-metal
1,843
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,411
c4-highmem-32
297
GB with 10,000 IOPS and 400 MBps throughput
124
GB with 3,000 IOPS and 400 MBps throughput
248
32
701
c4-highmem-48
446
GB with 10,000 IOPS and 400 MBps throughput
186
GB with 3,000 IOPS and 400 MBps throughput
372
32
1,036
c4-highmem-96
892
GB with 10,000 IOPS and 800 MBps throughput
372
GB with 3,000 IOPS and 400 MBps throughput
744
32
2,040
c4-highmem-144
1,339
GB with 10,000 IOPS and 800 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
2,907
c4-highmem-192
1,785
GB with 10,000 IOPS and 800 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,353
c4-highmem-288
2,678
GB with 10,000 IOPS and 800 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
4,246
c4-highmem-288-metal
2,678
GB with 10,000 IOPS and 800 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
4,246
m1-megamem-96
1,719
GB with 8,000 IOPS and 1,000 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,287
m1-ultramem-40
1,153
GB with 8,000 IOPS and 900 MBps throughput
480
GB with 3,000 IOPS and 400 MBps throughput
961
32
2,626
m1-ultramem-80
2,306
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,874
m1-ultramem-160
4,612
GB with 15,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
6,180
m2-megamem-416
7,065
GB with 20,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
8,633
m2-ultramem-208
7,065
GB 20,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
8,633
m2-ultramem-416
14,092
GB with 20,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
15,660
m2-hypermem-416
10,598
GB with 20,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
12,166
m3-ultramem-32
1,171 GB with 10,000 IOPS and 900 MBps throughput
488 GB with 3,000 IOPS and 400 MBps throughput
976
32
2,667
m3-ultramem-64
2,342
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,910
m3-ultramem-128
4,684
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
6,252
m3-megamem-64
1,171
GB with 10,000 IOPS and 900 MBps throughput
488
GB with 3,000 IOPS and 400 MBps throughput
976
32
2,667
m3-megamem-128
2,342
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,910
m4-megamem-28
446
GB with 10,000 IOPS and 400 MBps throughput
186
GB with 3,000 IOPS and 400 MBps throughput
372
32
1,036
m4-megamem-56
892
GB with 10,000 IOPS and 1,200 MBps throughput
372
GB with 3,000 IOPS and 400 MBps throughput
744
32
2,040
m4-megamem-112
1,785
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,353
m4-megamem-224
3,571
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
5,139
m4-ultramem-56
1,785
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
3,353
m4-ultramem-112
3,571
GB with 10,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
5,139
m4-ultramem-224
7,142
GB with 20,000 IOPS and 1,200 MBps throughput
512
GB with 3,000 IOPS and 400 MBps throughput
1,024
32
8,710
m4-hypermem-16
297 GB with 10,000 IOPS and 750 MBps throughput
124 GB with 3,000 IOPS and 400 MBps throughput
248
32
701
m4-hypermem-32
595 GB with 10,000 IOPS and 750 MBps throughput
248 GB with 3,000 IOPS and 400 MBps throughput
496
32
1,371
m4-hypermem-64
1,190 GB with 10,000 IOPS and 1,200 MBps throughput
496 GB with 3,000 IOPS and 400 MBps throughput
992
32
2,710
Disk sizes for mounting all SAP HANA volumes on a single disk
The sizes in the following table assume that you are using a single disk to
host all of the following volumes: /hana/data ,
/hana/log , /hana/shared , and /usr/sap
volumes.
Balanced Persistent Disk
Compute Engine machine type
Size (GB)
n1-highmem-32
943
n1-highmem-64
1,155
n1-highmem-96
1,716
n2-highmem-32
943
n2-highmem-48
1,068
n2-highmem-64
1,414
n2-highmem-80
1,760
n2-highmem-96
2,105
n2-highmem-128
2,364
c3-standard-44
943
c3-highmem-44
982
c3-highmem-88
1,932
c3-highmem-176
3,257
m1-megamem-96
3,287
m1-ultramem-40
2,626
m1-ultramem-80
3,874
m1-ultramem-160
6,180
m2-megamem-416
8,633
m2-ultramem-208
8,633
m2-ultramem-416
15,660
m2-hypermem-416
12,166
m3-ultramem-32
2,667
m3-ultramem-64
3,910
m3-ultramem-128
6,252
m3-megamem-64
2,667
m3-megamem-128
3,910
SSD Persistent Disk
Compute Engine machine type
Size (GB)
n1-highmem-32
593
n1-highmem-64
1,155
n1-highmem-96
1,716
n2-highmem-32
723
n2-highmem-48
1,068
n2-highmem-64
1,414
n2-highmem-80
1,760
n2-highmem-96
2,105
n2-highmem-128
2,364
c3-standard-44
550
c3-highmem-44
982
c3-highmem-88
1,932
c3-highmem-176
3,257
m1-megamem-96
3,287
m1-ultramem-40
2,626
m1-ultramem-80
3,874
m1-ultramem-160
6,180
m2-megamem-416
8,633
m2-ultramem-208
8,633
m2-ultramem-416
15,660
m2-hypermem-416
12,166
m3-ultramem-32
2,667
m3-ultramem-64
3,910
m3-ultramem-128
6,252
m3-megamem-64
2,667
m3-megamem-128
3,910
Hyperdisk Extreme
Compute Engine machine type
Size (GB) and IOPS
n2-highmem-80
1,760 GB with 20,000 IOPS
n2-highmem-96
2,105 GB with 20,000 IOPS
n2-highmem-128
2,364 GB with 20,000 IOPS
c3-highmem-88
1,932
GB with 20,000 IOPS
c3-highmem-176
3,257
GB with 20,000 IOPS
c3-highmem-192-metal
3,411
GB with 20,000 IOPS
c4-highmem-96
2,040
GB with 20,000 IOPS
c4-highmem-144
2,907
GB with 20,000 IOPS
c4-highmem-192
3,353
GB with 20,000 IOPS
c4-highmem-288
4,246
GB with 20,000 IOPS
c4-highmem-288-metal
4,246
GB with 20,000 IOPS
m1-megamem-96
3,287
GB with 20,000 IOPS
m1-ultramem-80
3,874
GB with 20,000 IOPS
m1-ultramem-160
6,180
GB with 20,000 IOPS
m2-megamem-416
8,633
GB with 24,130 IOPS
m2-ultramem-208
8,633
GB with 24,130 IOPS
m2-ultramem-416
15,660
GB with 38,184 IOPS
m2-hypermem-416
12,166
GB with 31,196 IOPS
m3-ultramem-64
3,910
GB with 20,000 IOPS
m3-ultramem-128
6,252
GB with 20,000 IOPS
m3-megamem-64
2,667
GB with 20,000 IOPS
m3-megamem-128
3,910
GB with 20,000 IOPS
m4-megamem-112
3,353
GB with 20,000 IOPS
m4-megamem-224
5,139
GB with 20,000 IOPS
m4-ultramem-112
5,139
GB with 20,000 IOPS
m4-ultramem-224
8,710
GB with 24,130 IOPS
Hyperdisk Balanced
Compute Engine machine type
Size (GB), IOPS, and throughput
c3-standard-44
507 GB with 13,000 IOPS and 800 MBps throughput
c3-highmem-44
982 GB with 13,000 IOPS and 800 MBps throughput
c3-highmem-88
1,932
GB with 13,000 IOPS and 1,600 MBps throughput
c3-highmem-176
3,257
GB with 13,000 IOPS and 1,600 MBps throughput
c3-highmem-192-metal
3,411
GB with 13,000 IOPS and 1,600 MBps throughput
c4-highmem-32
701
GB with 13,000 IOPS and 800 MBps throughput
c4-highmem-48
1,036
GB with 13,000 IOPS and 800 MBps throughput
c4-highmem-96
2,040
GB with 13,000 IOPS and 1,200 MBps throughput
c4-highmem-144
2,907
GB with 13,000 IOPS and 1,200 MBps throughput
c4-highmem-192
3,353
GB with 13,000 IOPS and 1,200 MBps throughput
c4-highmem-288
4,246
GB with 13,000 IOPS and 1,200 MBps throughput
c4-highmem-288-metal
4,246
GB with 13,000 IOPS and 1,200 MBps throughput
m1-megamem-96
3,287
GB with 11,000 IOPS and 1,400 MBps throughput
m1-ultramem-40
2,626
GB with 11,000 IOPS and 1,300 MBps throughput
m1-ultramem-80
3,874
GB with 13,000 IOPS and 1,600 MBps throughput
m1-ultramem-160
6,180
GB with 18,000 IOPS and 1,600 MBps throughput
m2-megamem-416
8,633
GB with 23,000 IOPS and 1,600 MBps throughput
m2-ultramem-208
8,633
GB with 23,000 IOPS and 1,600 MBps throughput
m2-ultramem-416
15,660
GB with 23,000 IOPS and 1,600 MBps throughput
m2-hypermem-416
12,166
GB with 23,000 IOPS and 1,600 MBps throughput
m3-ultramem-32
2,667 GB with 13,000 IOPS and 1,300 MBps throughput
m3-ultramem-64
3,910
GB with 13,000 IOPS and 1,600 MBps throughput
m3-ultramem-128
6,252
GB with 13,000 IOPS and 1,600 MBps throughput
m3-megamem-64
2,667
GB with 13,000 IOPS and 1,300 MBps throughput
m3-megamem-128
3,910
GB with 13,000 IOPS and 1,600 MBps throughput
m4-megamem-28
1,036
GB with 13,000 IOPS and 800 MBps throughput
m4-megamem-56
2,040
GB with 13,000 IOPS and 1,600 MBps throughput
m4-megamem-112
3,353
GB with 13,000 IOPS and 1,600 MBps throughput
m4-megamem-224
5,139
GB with 13,000 IOPS and 1,600 MBps throughput
m4-ultramem-56
3,353
GB with 13,000 IOPS and 1,600 MBps throughput
m4-ultramem-112
5,139
GB with 13,000 IOPS and 1,600 MBps throughput
m4-ultramem-224
8,710
GB with 23,000 IOPS and 1,600 MBps throughput
m4-hypermem-16
701 GB with 13,000 IOPS and 1,150 MBps throughput
m4-hypermem-32
1,371 GB with 13,000 IOPS and 1,150 MBps throughput
m4-hypermem-64
2,710 GB with 13,000 IOPS and 1,600 MBps throughput
Google Cloud NetApp Volumes
SAP has certified SAP HANA scale-up deployments with the
Premium and Extreme service tiers of Google Cloud NetApp Volumes on
all Compute Engine instances that are certified for SAP HANA.
SAP support for NetApp Volumes in scale-out deployments
is limited to specific Compute Engine machine types, as noted
in the table in Certified machine types for SAP HANA .
NetApp Volumes can be used instead of Persistent Disk volumes
for the following SAP HANA volumes:
/hana/data
/hana/log
/hana/shared
/hanabackup
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
For configuration requirements and recommendations, see the
SAP HANA planning guide .
SAP indicates support for NetApp Volumes in the
Certified and Supported SAP HANA Hardware Directory .
Certified machine types for SAP HANA dynamic tiering
On Google Cloud, SAP HANA dynamic tiering must be installed on a dedicated
Compute Engine instance. The following table shows the Compute Engine
machine types that are certified by SAP for SAP HANA dynamic tiering on Google Cloud:
Warm store capacity
Production certified machine types
512 GB
1,300 GB
5,000 GB
10,000 GB
n1-highmem-8
n1-highmem-16
n1-highmem-32
n1-megamem-96
Custom configurations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

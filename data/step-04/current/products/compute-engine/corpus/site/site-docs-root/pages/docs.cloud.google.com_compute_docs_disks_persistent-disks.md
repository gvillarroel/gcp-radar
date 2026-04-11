---
title: "Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/disks/persistent-disks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/disks/persistent-disks
  title: "Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Persistent Disk
Stay organized with collections
Save and categorize content based on your preferences.
Linux
Windows
This document describes the features, types, performance and benefits of Persistent Disk
volumes. If you need block storage for a virtual machine (VM) instance or container,
such as for a boot disk or data disk, use Persistent Disk volumes if
Google Cloud Hyperdisk isn't available for your compute instance. To learn about the
other block storage options in Compute Engine, see
Choose a disk type .
Persistent Disk volumes are durable network storage devices that your instances
can access like physical disks in a desktop or a server. Persistent Disk volumes
aren't attached to the physical machine hosting the instance. Instead, they are
attached to the instance as network block devices .
When you read to or write from a Persistent Disk volume, data is transmitted over the network.
The data on each Persistent Disk volume is distributed across several physical disks.
Compute Engine manages the physical disks and the data distribution for
you to ensure redundancy and optimal performance.
You can detach or move the volumes to keep your data even after you delete your
instances. Persistent Disk performance increases with size, so you can resize your
existing Persistent Disk volumes or add more Persistent Disk volumes to a
VM to meet your performance and storage space requirements.
Add a non-boot disk to your instance
when you need reliable and affordable storage with consistent performance
characteristics.
Add a Persistent Disk to your instance
Persistent Disk types
When you create a Persistent Disk volume, you can select one of the following disk
types:
Balanced Persistent Disk ( pd-balanced )
An alternative to SSD (Performance) Persistent Disk.
Balance of performance and cost. For most Compute Engine machine
types, these disks have the same maximum IOPS as
SSD Persistent Disk and lower IOPS per GiB. This disk type offers performance
levels suitable for most general-purpose applications at a price point
between that of standard and SSD Persistent Disk.
Uses solid-state drives (SSD).
SSD (Performance) Persistent Disk ( pd-ssd )
Suitable for enterprise applications and high-performance databases
that require lower latency and more IOPS than standard Persistent Disk
provides.
Uses solid-state drives (SSD).
Standard Persistent Disk ( pd-standard )
Suitable for large data processing workloads that primarily use
sequential I/Os.
Uses standard hard disk drives (HDD).
Extreme Persistent Disk ( pd-extreme )
Offers consistently high performance for both random access workloads and
bulk throughput.
Designed for high-end database workloads.
Lets you provision the target IOPS.
Uses solid-state drives (SSD).
Available with a limited number of
machine types .
If you create a disk in the Google Cloud console, the default disk type is
pd-balanced . If you create a disk using the gcloud CLI or the
Compute Engine API, the default disk type is pd-standard .
For information about machine type support, refer to the following:
Zonal Persistent Disk
Regional Persistent Disk
Durability of Persistent Disk
Disk durability represents the probability of data loss, by design, for a
typical disk in a typical year, using a set of assumptions about hardware
failures, the likelihood of catastrophic events, isolation practices and
engineering processes in Google data centers, and the internal encodings used
by each disk type. Persistent Disk data loss events are extremely rare and have
historically been the result of coordinated hardware failures, software bugs, or
a combination of the two. Google also takes many steps to mitigate the
industry-wide risk of silent data corruption .
Human error by a Google Cloud customer, such as when a customer
accidentally deletes a disk, is outside the scope of Persistent Disk durability.
There is a very small risk of data loss occurring with a regional Persistent Disk
volume due to its internal data encodings and replication. Regional Persistent Disk
provides high availability
and can be used for disaster recovery if an entire data center is lost and
can't be recovered.
Regional Persistent Disk provides twice as many disk replicas as zonal Persistent Disk,
with each replica distributed between two zones in the same region. If a primary zone
becomes unavailable during an outage, the replica in the second zone can be
accessed immediately.
For more information about region-specific considerations, see
Geography and regions .
The following table shows durability for each disk type's design. 99.999% durability
means that with 1,000 disks, you would likely go a hundred years without
losing a single one.
Note: Durability is in the aggregate for each disk type, and doesn't
represent a financially backed service level agreement (SLA).
Zonal standard Persistent Disk
Zonal balanced Persistent Disk
Zonal SSD Persistent Disk
Zonal extreme Persistent Disk
Regional standard Persistent Disk
Regional balanced Persistent Disk
Regional SSD Persistent Disk
Better than 99.99%
Better than 99.999%
Better than 99.999%
Better than 99.9999%
Better than 99.999%
Better than 99.9999%
Better than 99.9999%
Machine series support
A2
A3 (H100)
A3 (H200)
A4
A4X
A4X Max
C2
C2D
C3
C3D
C4
C4A
C4D
E2
G2
G4
H3
H4D
M1
M2
M3
M4
N1
N1+GPU
N2
N2D
N4
N4A
N4D
T2A
T2D
TPU v2
TPU v3
TPU v4
TPU v5e
TPU v5p
TPU v6e
TPU7x
X4
Z3
Select a machine series to see its supported Persistent Disk (PD) types.
Machine series
SSD PD
Balanced PD
Extreme PD
Standard PD
A2
—
A3 (H100)
—
—
A3 (H200)
—
—
—
—
A4
—
—
—
—
A4X
—
—
—
—
A4X Max
—
—
—
—
C2
—
C2D
—
C3
—
—
C3D
—
—
C4
—
—
—
—
C4A
—
—
—
—
C4D
—
—
—
—
E2
—
G2
—
—
G4
—
—
—
—
H3
—
—
—
H4D
—
—
—
—
M1
M2
M3
—
M4
—
—
—
—
N1
—
N1+GPU
—
N2
N2D
—
N4
—
—
—
—
N4A
—
—
—
—
N4D
—
—
—
—
T2A
—
T2D
—
TPU v2
—
—
—
TPU v3
—
—
—
TPU v4
—
—
—
TPU v5e
—
—
—
TPU v5p
—
—
—
TPU v6e
—
—
—
—
TPU7x
—
—
—
—
X4
—
—
—
—
Z3
—
—
Maximum capacity
Persistent Disk volumes can be up to 64 TiB in size. You can add
up to 127 secondary, non-boot zonal Persistent Disk volumes to a VM instance.
However, the combined total capacity of all Persistent Disk volumes attached
to a single VM can't exceed 257 TiB.
You can create single logical volumes of up to 257 TiB using logical volume
management inside your VM. For information about how to ensure maximum
performance with large volumes, see
Logical volume size .
Zonal Persistent Disk
A zonal Persistent Disk is a Persistent Disk that's accessible only within one
specific zone, for example, europe-west-2 .
Ease of use
Compute Engine handles most disk management tasks for you so that
you don't need to deal with partitioning, redundant disk arrays, or subvolume
management.
Generally, you don't need to create larger logical volumes. However, you can extend
your secondary attached Persistent Disk capacity to 257 TiB per
VM and apply these practices to your Persistent Disk volumes.
You can save time and get the best performance if you
format your Persistent Disk volumes
with a single file system and no partition tables.
If you need to separate your data into multiple unique volumes,
create additional disks
rather than dividing your existing disks into multiple partitions.
When you require additional space on your Persistent Disk volumes,
resize your disks rather than
repartitioning and formatting.
Performance
Persistent Disk performance is predictable and scales linearly with
provisioned capacity until the limits for a VM's provisioned vCPUs are
reached. For more information about performance scaling limits and optimization,
see Configure disks to meet performance requirements .
Standard Persistent Disk volumes are efficient and economical for handling
sequential read/write operations, but they aren't optimized to handle high
rates of random input/output operations per second (IOPS). If your apps require
high rates of random IOPS, use SSD or extreme Persistent Disk. SSD Persistent Disk is
designed for single-digit millisecond latencies. Observed latency is
application specific.
Compute Engine optimizes performance and scaling on Persistent Disk
volumes automatically. You don't need to stripe multiple disks together or
pre-warm disks to get the best performance. When you need more disk space or
better performance, resize your disks
and possibly add more vCPUs to add more storage space, throughput, and IOPS.
Persistent Disk performance is based on the total Persistent Disk capacity attached to a
VM and the number of vCPUs that the VM has.
For boot devices, you can reduce costs by using a standard
Persistent Disk. Small, 10 GiB Persistent Disk volumes can work for basic boot and
package management use cases. However, to ensure consistent performance for more
general use of the boot device, use a balanced Persistent Disk as your boot
disk.
Because Persistent Disk write operations contribute to the cumulative network
egress traffic for your VM, Persistent Disk write operations are capped by the
network egress cap
for your VM.
Reliability
Persistent Disk has built-in redundancy to protect your data against
equipment failure and to ensure data availability through data center
maintenance events. Checksums are calculated for all Persistent Disk operations,
so we can ensure that what you read is what you wrote.
Additionally, you can
create snapshots of Persistent Disk to
protect against data loss due to user error. Snapshots are incremental, and
take only minutes to create even if you snapshot disks that are attached
to running VMs.
Regional Persistent Disk
Regional Persistent Disk volumes have storage qualities that are similar to zonal
Persistent Disk. However, regional Persistent Disk volumes provide durable storage and
replication of data between two zones in the same region.
About synchronous disk replication
When you create a new Persistent Disk, you can either
create the disk in one zone, or replicate it across two zones within the
same region.
For example, if you create one disk in a zone, such as in us-west1-a , you
have one copy of the disk. A disk created in only one zone is referred to as a
zonal disk. You can increase the disk's availability by storing another
copy of the disk in a different zone within the region, such as in
us-west1-b .
Persistent Disk replicated across two zones in the same region are called
Regional Persistent Disk. You can also use Hyperdisk Balanced High Availability for cross-zonal synchronous
replication of Google Cloud Hyperdisk.
It's unlikely for a region to fail altogether, but zonal failures can happen.
Replicating within the region to different zones, as shown in the following
image, helps with availability and reduces disk latency. If both replication
zones fail, it's considered a region-wide failure.
Disk is replicated in two zones.
In the replicated scenario, the data is available in the local zone
( us-west1-a ) which is the zone the virtual machine (VM) is running in. Then,
the data is replicated to another zone ( us-west1-b ). One of the zones must be
the same zone that the VM is running in.
If a zonal outage occurs, you can usually failover your workload
running on Regional Persistent Disk to another zone. To learn more, see
Manage failures for regional disks .
Note: Disk replication only provides high availability of the disks.
Zonal outages might also affect the VMs or other components, which can also
cause outages.
Design considerations for Regional Persistent Disk
If you're designing robust systems or
high availability services on
Compute Engine, use Regional Persistent Disk combined with other best
practices such as backing up your data using snapshots .
Regional Persistent Disk volumes are also designed to work with
regional managed instance groups .
Performance
Regional Persistent Disk volumes are designed for workloads that require a lower
Recovery Point Objective (RPO)
and
Recovery Time Objective (RTO)
compared to using Persistent Disk snapshots.
Regional Persistent Disk are an option when write performance is less critical
than data redundancy across multiple zones.
Like zonal Persistent Disk, Regional Persistent Disk can achieve greater
IOPS and throughput performance on VMs with a greater number of vCPUs.
For more information about this and other limitations, see
Configure disks to meet performance requirements .
When you need more disk space or better performance, you can
resize your regional disks
to add more storage space, throughput, and IOPS.
Reliability
Compute Engine replicates data of your regional Persistent Disk to the
zones you selected when you created your disks. The data of each replica is
spread across multiple physical machines within the zone to ensure redundancy.
Similar to zonal Persistent Disk, you can
create snapshots of Persistent Disk to
protect against data loss due to user error. Snapshots are incremental, and
take only minutes to create even if you snapshot disks that are attached
to running VMs.
Limitations for Regional Persistent Disk
You can attach regional Persistent Disk only to VMs that use
E2 ,
N1 ,
N2 , and
N2D machine types.
You can attach Hyperdisk Balanced High Availability only to supported
machine types .
You can't create a regional Persistent Disk from an OS image , or from a disk that was created
from an OS image.
You can't create a Hyperdisk Balanced High Availability disk by cloning a zonal disk. To create a Hyperdisk Balanced High Availability disk from an
zonal disk, complete the steps in
Change a zonal disk to a
Hyperdisk Balanced High Availability disk.
When using read-only mode, you can attach a regional balanced Persistent Disk to a maximum of 10
VM instances.
The minimum size of a regional standard Persistent Disk is 200 GiB.
You can only increase the size of a
regional Persistent Disk or
Hyperdisk Balanced High Availability volume; you can't decrease its size.
Regional Persistent Disk and Hyperdisk Balanced High Availability volumes have different performance
characteristics than their corresponding zonal disks. For more information, see
About Persistent Disk performance and
Hyperdisk Balanced High Availability performance limits .
You can't use a Hyperdisk Balanced High Availability volume that's in multi-writer mode as a boot disk.
If you create a replicated disk by cloning a zonal disk, then the two zonal replicas
aren't fully in sync at the time of creation. After creation, you can use the regional disk
clone within 3 minutes, on average. However, you might need to wait for tens of minutes
before the disk reaches a fully replicated state and the
recovery point objective (RPO) is close to zero. Learn how to
check if your replicated disk is fully replicated .
You can't create regional disks in AI zones .
Storage interface types
The storage interface is chosen automatically for you when you create your
instance or add Persistent Disk volumes to a VM. Tau T2A and third generation VMs
(such as M3) use the NVMe
interface for Persistent Disk.
Confidential VM
instances also use NVMe Persistent Disk. All other Compute Engine machine
series use the SCSI disk
interface for Persistent Disk.
Most public images include both NVMe and SCSI drivers. Most images include a
kernel with optimized drivers that allow your VM to achieve the best performance
using NVMe. Your imported Linux images achieve the best performance with NVMe if
they include kernel version 4.14.68 or later.
To determine if an operating system version supports NVMe, see the
operating system details page.
Multi-writer mode
Caution: Google recommends using Hyperdisk Balanced or Hyperdisk Balanced High Availability ( Preview )
volumes in multi-writer mode instead of SSD Persistent Disk volumes.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can attach an SSD Persistent Disk in multi-writer mode to up to two N2
VMs simultaneously so that both VMs can read and write to the disk.
Persistent Disk in multi-writer mode provides a shared block storage capability
and presents an infrastructural foundation for building highly available
shared file systems and databases. These specialized file systems and databases
should be designed to work with shared block storage and handle cache coherence
between VMs by using tools such as
SCSI Persistent Reservations .
However, Persistent Disk with multi-writer mode should generally not be used
directly. Many file systems such as EXT4, XFS,
and NTFS aren't designed to be used with shared block storage. For more
information about the best practices when sharing Persistent Disk between VMs,
see Best practices .
If you require a fully managed file storage, you can mount a Filestore
file share on your Compute Engine VMs .
To enable multi-writer mode for new Persistent Disk volumes, create a new
Persistent Disk and specify the --multi-writer flag in the gcloud CLI
or the multiWriter property in the Compute Engine API. For more information, see
Share Persistent Disk volumes between VMs .
Persistent Disk encryption
Compute Engine automatically encrypts your data before it travels
outside of your VM to the Persistent Disk storage space. Each Persistent Disk
remains encrypted either with system-defined keys or with
customer-supplied keys .
Google distributes Persistent Disk data across multiple physical
disks in a manner that users don't control.
When you delete a Persistent Disk volume, Google discards the cipher keys,
rendering the data irretrievable. This process is irreversible.
If you want to control the encryption keys that are used to encrypt your data,
create your disks with your own encryption keys .
Restrictions
You can't attach a Persistent Disk volume to a VM in another project.
You can attach a balanced Persistent Disk to a maximum of 10 VMs in
read-only mode.
For
custom machine types
or predefined machine types with a minimum of 1 vCPU, you can attach up to
128 Persistent Disk volumes.
Each Persistent Disk volume can be up to 64 TiB in size, so there is no
need to manage arrays of disks to create large logical volumes. Each VM can
attach only a limited amount of total Persistent Disk space and a limited
number of individual Persistent Disk volumes. Predefined machine types and
custom machine types have the same Persistent Disk limits.
Most VMs can have up to 128 Persistent Disk volumes and up to 257 TiB of
total disk space attached. Total disk space for a VM includes the size
of the boot disk.
Shared-core machine types
are limited to 16 Persistent Disk volumes and 3 TiB of total Persistent Disk
space.
Creating logical volumes larger than 64 TiB might require special
consideration. For more information about larger logical volume performance
see
logical volume size .
Note: If you created a VM before March 30, 2016, it might retain an
earlier 10 TiB limit for total Persistent Disk space. Recreate those VMs
to enable the current limits.
Persistent Disk and Colossus
Persistent Disk is designed to run in tandem with Google's file system,
Colossus ,
which is a distributed block storage system. Persistent Disk drivers
automatically encrypt data on the VM before it's transmitted from the VM onto
the network. Then, Colossus persists the data. When Colossus reads the data, the
driver decrypts the incoming data.
Persistent Disk volumes use Colossus for the storage backend.
Having disks as a service is useful in a number of cases, for example:
Resizing the disks while the instance is running becomes easier than
stopping the instance first. You can increase the disk size without stopping
the instance.
Attaching and detaching disks becomes easier when disks and VMs don't have
to share the same lifecycle or be co-located. It's possible to stop a VM and
use its Persistent Disk boot disk to boot another VM.
High availability features like replication become easier because the disk
driver can hide replication details and provide automatic write-time
replication.
What's next
Learn how to
add a Persistent Disk volume to your VM .
Review disk and image pricing information.
Learn how to
clone a Persistent Disk volume .
Learn how to
share Persistent Disk volumes between VMs .
Learn how to
optimize Persistent Disk performance .
Learn how to
view your Persistent Disk volumes' actual and forecasted usage .
See best practices for disk snapshots .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/disks/hyperdisks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/disks/hyperdisks
  title: "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\
    \ Documentation"
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
Google Cloud Hyperdisk overview
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the features of Google Cloud Hyperdisk.
Hyperdisk is the fastest and most efficient durable disk for
Compute Engine. If you need boot or data disks for your compute
instances—virtual machine (VM) instances, containers, and bare metal
instances—then Google recommends using Hyperdisk.
For information about the other block storage options in
Compute Engine, see Choose a disk type .
To create a new Hyperdisk volume, see
Create a Hyperdisk volume .
Hyperdisk features
With Hyperdisk you can provision, manage, and scale your
Compute Engine workloads without the cost and complexity of a typical
on-premises storage area network (SAN).
Hyperdisk volumes have the following features:
Function as physical disks : you can use a Hyperdisk
volume with a compute instance as if it were a physical disk attached to the
instance. When you read to or write from a Hyperdisk volume,
data is transmitted over the network.
Higher performance : Hyperdisk offers higher IOPS and
throughput than Persistent Disk by leveraging Google's Titanium
storage offload technology.
Customizable performance : you can choose the performance—IOPS or
throughput—of each Hyperdisk volume. You can also
increase or decrease a Hyperdisk volume's performance while
it's in use.
Support for high availability : in the unlikely event of a zonal or
regional outage, you can ensure high availability for your data by enabling
one or both of the following features:
To protect your data in case of a zonal outage, use
Hyperdisk Balanced High Availability .
Data on Hyperdisk Balanced High Availability volumes is synchronously replicated across two zones
within the same region to protect against up to one zonal outage.
To protect your data from a regional outage, maintain a replica of your
data in another region by using
Asynchronous Replication .
When you enable Asynchronous Replication for a disk, data in one region is
continuously copied to a replica in a secondary region. If a regional
outage occurs, you can failover
your data to a secondary region. Asynchronous Replication is available for
Hyperdisk Balanced, Hyperdisk Balanced High Availability, and Hyperdisk Extreme volumes.
Portability : you can change the compute instance that a
Hyperdisk volume is attached to.
Shareable between VMs : for high availability workloads, certain
Hyperdisk types can be shared by multiple VMs. Each VM has
simultaneous read-write or read-only access to the volume.
Support for pooled capacity and performance : to simplify planning,
avoid overprovisioning storage, and reduce costs, you can purchase
Hyperdisk storage and performance in bulk by using
Hyperdisk Storage Pools.
Choose a Hyperdisk type for your workload
To add Hyperdisk volumes to your workloads, you must choose a
Hyperdisk type. Each Hyperdisk type is designed
and optimized for a specific type of workload.
The following is a list of the available Hyperdisk types.
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Extreme
Hyperdisk Throughput
Hyperdisk ML
For most workloads, we recommend Hyperdisk Balanced.
To select a Hyperdisk type, compare your workload's type and its
performance requirements with the information in the following table. For
detailed information about a specific Hyperdisk type, see the
linked page in the Recommended Hyperdisk type column.
Workload type
Recommended Hyperdisk type
Unique features
Max IOPS and throughput per volume
Most enterprise applications
Boot disks
Virtual desktops
Postgres, MySQL
Hyperdisk Balanced
Designed to be the best fit for the majority of workloads
Best combination of price and performance
Supports simultaneous read-write access to the same volume from up to
8 instances
IOPS : 160,000
Throughput : 2,400 MiB/s
Highly-available, mission-critical applications that require a
recovery
point objective of 0
Hyperdisk Balanced High Availability
Offers data replication in two zones within the same region for
quick failover
Supports simultaneous read-write access to the same volume from up to
8 instances
IOPS : 100,000
Throughput : 2,400 MiB/s
SAP HANA
High-end SQL Server, Oracle, and in-memory RDBMS
Hyperdisk Extreme
Offers the highest IOPS
IOPS : 350,000
Throughput : 5,000 MiB/s 1
High-performance computing (HPC)
Machine learning, AI inference or training
Accelerator-optimized workloads
Hyperdisk ML
Supports attaching a single volume in read-only mode to up to
2,500 instances.
Offers the highest read-only throughput
IOPS : 33,554,432 2
Throughput : 2,097,152 MiB/s
Scale out analytics workloads like Hadoop, Spark, and Kafka
Cold disks
Hyperdisk Throughput
High throughput for bandwidth and capacity-intensive applications that
don't need high IOPS
Cost-effective data disks for cost-sensitive applications
IOPS : 9,600 2
Throughput : 2,400 MiB/s
1 You can't specify a throughput level for Hyperdisk Extreme
volumes. The provisioned throughput is based on the IOPS level you specify.
2 You can't specify an IOPS level for Hyperdisk Throughput and
Hyperdisk ML volumes. The provisioned IOPS is based on the throughput level you
specify.
Hyperdisk size limits
The following table lists the size limits for each Hyperdisk type.
Hyperdisk type
Minimum size
Maximum size
Default size
Hyperdisk Balanced
4 GiB
64 TiB
100 GiB
Hyperdisk Balanced High Availability
4 GiB
64 TiB
100 GiB
Hyperdisk Extreme
64 GiB
64 TiB
1 TiB
Hyperdisk ML
4 GiB
64 TiB
100 GiB
Hyperdisk Throughput
2 TiB
32 TiB
2 TiB
However, the size of a Hyperdisk volume that's attached to an instance
can't exceed the instance's
Hyperdisk limits .
Hyperdisk performance
The following is a summary of key Hyperdisk performance concepts:
You can configure the performance (IOPS and/or throughput) limit and size of
each Hyperdisk volume. You can also increase or decrease a
Hyperdisk volume's performance without changing its size.
The performance limit you specify is referred to as the
provisioned performance . The provisioned performance isn't the expected
performance, rather, it's the maximum performance the disk can achieve.
The actual performance for a Hyperdisk volume is the observed
performance while the volume is in use.
For a Hyperdisk volume to reach its provisioned performance,
you must attach it to a compute instance that supports the same level
of performance or higher.
For a discussion of how Hyperdisk performance works, see
About Hyperdisk performance .
For performance limits for each Hyperdisk type, see
Hyperdisk performance limits .
Latency
Each Hyperdisk type has different latency profiles. Google
recommends comparing Hyperdisk Throughput to the latency of a hard disk drive. You can
compare the latency for Hyperdisk Balanced, Hyperdisk Balanced High Availability, Hyperdisk Extreme, and Hyperdisk ML to the
latency of enterprise SSDs.
Hyperdisk Balanced and Hyperdisk Extreme offer sub-millisecond latency.
Machine series support for Hyperdisk
This section lists the machine series
that each Hyperdisk type supports.
If a machine series doesn't support Hyperdisk, use Persistent Disk.
Select one or more machine series to see the supported Hyperdisk types.
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
Clear all
Machine series
Hyperdisk Balanced
Hyperdisk Balanced HA
Hyperdisk Extreme
Hyperdisk Throughput
Hyperdisk ML
A2
—
—
—
—
A3 (H100)
A3 (H200)
—
A4
—
—
A4X
—
—
A4X Max
—
C2
—
—
—
—
—
C2D
—
—
—
—
—
C3
C3D
C4
—
C4A
C4D
—
—
E2
—
—
—
—
—
G2
—
—
—
G4
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
—
—
—
M2
—
—
—
M3
—
M4
—
—
—
N1
—
—
—
—
—
N1+GPU
—
—
—
—
—
N2
—
—
—
N2D
—
—
—
—
N4
—
N4A
—
—
N4D
—
T2A
—
—
—
—
—
T2D
—
—
—
—
TPU v2
—
—
—
—
—
TPU v3
—
—
—
—
—
TPU v4
—
—
—
—
—
TPU v5e
—
—
—
—
TPU v5p
—
—
—
—
TPU v6e
—
—
—
TPU7x
—
—
—
X4
—
—
—
Z3
—
Restrictions for machine series support
This section lists the restrictions that apply to the machine series
that each Hyperdisk type supports.
For Hyperdisk Extreme, the following restrictions apply:
C3 machine type require at least 88 vCPUs.
C3D machine types require at least 60 vCPUs.
C4 and G4 machine types require at least 96 vCPUs.
M1 machine types require at least 80 vCPUs.
C4A, C4D, M3, and M4 machine types require at least 64 vCPUs.
N2 machine types require at least 80 vCPUs; Custom N2 machine types aren't
supported
For Hyperdisk Throughput, the following restrictions apply:
You can't use Hyperdisk Throughput on bare metal instances with the exception of
A4X Max bare metal instances.
Additional limitations apply to attaching Hyperdisk Throughput volumes to certain machine series,
including C4, C4A, and N4. For more information, see
Limitations for attaching Hyperdisk Throughput volumes to 4th-generation instances .
Regional availability for Hyperdisk
Some Hyperdisk types are available in all
regions and zones , while
others are available only in specific locations. The following table summarizes
regional availability for each Hyperdisk type.
Hyperdisk type
Supported regions
Hyperdisk Balanced
Available in all zones and regions
Hyperdisk Balanced High Availability
Available in all zones and regions except for AI zones
Hyperdisk Extreme
Available in all zones and regions
Hyperdisk ML
Available in all zones and regions
Hyperdisk Throughput
Available in all zones and regions
Share Hyperdisk volumes between VMs
You can share a Hyperdisk volume between multiple VMs by
simultaneously attaching the same volume to multiple VMs.
The following scenarios are supported:
Concurrent read-write access to a single volume from multiple VMs.
Recommended for clustered file systems and highly available workloads like
SQL Server Failover Cluster Infrastructure. Supported for the following
Hyperdisk types:
Hyperdisk Balanced
Hyperdisk Extreme
Hyperdisk Balanced High Availability
Concurrent read-only access to a single volume from multiple VMs.
This is more cost effective than having multiple disks with the same data.
Recommended for accelerator-optimized machine learning workloads.
Supported for Hyperdisk ML volumes.
To learn about disk sharing, see
Share a disk between VMs .
High availability and disaster recovery protection for Hyperdisk volumes
You can protect your data in the rare event of a zonal or regional outage by
enabling replication, that is, maintaining a copy of the data in another zone or
region.
Cross-zonal synchronous replication
To replicate data to another zone within the same region, you must use Hyperdisk Balanced High Availability
volumes. Hyperdisk Balanced High Availability is the only supported Hyperdisk type for
zonal replication.
For more information, see
About synchronous disk replication .
Cross-regional asynchronous replication
You can protect your data in the unlikely event of a regional outage by enabling Asynchronous Replication. Asynchronous Replication maintains a copy of
the data on your volume in another region. For example, to protect a
Hyperdisk volume in us-west1 ,
you can use Asynchronous Replication to replicate the volume to a secondary volume in
the us-east4 region. If the volume in us-west1
became unavailable, then you could use the secondary volume in us-east4 .
You can use Asynchronous Replication with the following Hyperdisk types:
Hyperdisk Balanced
Hyperdisk Extreme
Hyperdisk Balanced High Availability
To learn more about cross-regional replication, see Asynchronous Replication .
Encryption for Hyperdisk volumes
By default, Compute Engine protects your Hyperdisk volumes with
Google-owned and Google-managed encryption keys. You can also encrypt your
Hyperdisk volumes with customer-managed encryption keys (CMEK).
For more information, see About disk encryption .
Confidential Computing with Hyperdisk volumes
You can add hardware-based encryption to a Hyperdisk Balanced disk by enabling
Confidential mode for the disk when you create it.
You can use Confidential mode only with Hyperdisk Balanced disks that are attached to
Confidential VMs.
For more information, see Confidential mode for Hyperdisk Balanced volumes .
Durability of Hyperdisk
Compute Engine distributes the data on Hyperdisk volumes
across several physical disks to ensure durability and optimize performance.
Disk durability represents the probability of data loss, by design, for a
typical disk in a typical year. Hyperdisk data loss events are
extremely rare and have historically been the result of coordinated hardware
failures, software bugs, or a combination of the two. Google takes many steps to
mitigate the industry-wide risk of silent data corruption.
Durability is calculated with a set of assumptions about hardware failures,
the likelihood of catastrophic events, isolation practices and engineering
processes in Google data centers, and the internal encodings used by each disk
type.
Human error by a Google Cloud customer, such as when a customer accidentally
deletes a disk, is outside the scope of Hyperdisk durability.
The table below shows durability for each disk type's design. 99.999% durability
means that with 1,000 Hyperdisk volumes, you would likely go a
hundred years without losing a single one.
Note: Durability is an aggregate for each disk type, and doesn't
represent a financially backed service level agreement (SLA).
Hyperdisk Balanced
Hyperdisk Extreme
Hyperdisk ML
Hyperdisk Throughput
Hyperdisk Balanced High Availability
Better than 99.999%
Better than 99.9999%
Better than 99.999%
Better than 99.999%
Better than 99.9999%
Supported disk interfaces
Hyperdisk volumes are mounted as a disk on a VM using the NVMe or
SCSI interface, depending on the machine type of the instance.
Hyperdisk pools
Hyperdisk pools let you purchase Hyperdisk performance
and capacity in bulk, which can help lower your block storage total cost of
ownership and simplify management. With Hyperdisk pools, you purchase
Hyperdisk storage at an aggregate level and can then share
the purchased resources (capacity and performance) or storage between
as many as 10,000 disks in a single project.
Setting up a pool is a two-step process:
Create a pool : create a pool with
the estimated capacity and performance for
all workloads in a project in a specific zone. Each pool
can contain one type of Hyperdisk, such as Hyperdisk Throughput.
Create disks in the pool :
create disks in this pool and attach them
to existing instances. You can also create a disk in the pool
when you create a new instance.
You can use Hyperdisk Balanced or Hyperdisk Throughput volumes with Hyperdisk pools.
Compute Engine offers the following types of pools:
Hyperdisk Storage Pools for workloads that require up to 5 PiB of
capacity per project per zone.
Hyperdisk Exapools for workloads that require up to
5 EiB of capacity per project per zone.
For more information about pools, see
About Hyperdisk pools .
Pricing
You are billed for the total provisioned capacity of your
Hyperdisk volumes until you delete them. Charges incur even if
the volume isn't attached to any instances or if the instance is suspended or
stopped. You are charged per GiB per month. Additionally, you are billed for the
following:
Hyperdisk Balanced charges a monthly rate for the provisioned IOPS and provisioned
throughput (in MiB/s) in excess of the baseline values of
3,000 IOPS and
140 MiB/s throughput.
Hyperdisk Extreme charges a monthly rate based on the provisioned IOPS.
Hyperdisk ML charges a monthly rate based on the provisioned throughput
(in MiB/s).
There is no additional charge for attaching multiple VMs to a single
Hyperdisk ML volume.
Hyperdisk Throughput charges a monthly rate based on the provisioned throughput
(in MiB/s).
Because the data for regional disks is written to two locations,
the cost of Hyperdisk Balanced High Availability storage is twice the cost of Hyperdisk Balanced storage.
For more pricing information, see
Disk pricing .
Hyperdisk and committed use discounts
Hyperdisk volumes are not eligible for:
Resource-based committed use discounts (CUDs)
Sustained use discounts (SUDs)
Hyperdisk and preemptible VM instances
Hyperdisk can be used with Spot VMs (or
preemptible VMs). However, there are no discounted spot prices for
Hyperdisk.
Limitations for Hyperdisk
You can't create a machine image from a
Hyperdisk volume.
You can't create an image
from a Hyperdisk Extreme, Hyperdisk Throughput, or Hyperdisk Balanced High Availability volume.
You can't create an instant snapshot from a Hyperdisk ML or Hyperdisk Throughput volume.
Hyperdisk Extreme, Hyperdisk ML and Hyperdisk Throughput volumes can't be used as boot disks.
You can attach a Hyperdisk ML volume to up to 100 VMs at most once every
30 seconds.
You can't create a Hyperdisk ML disk in read-write mode from a snapshot or a
disk image. You must create the disk in read-only mode.
If you enable read-only mode for a Hyperdisk ML volume, you can't re-enable
read-write mode.
If you create a volume in multi-writer mode, see
additional limitations .
If you create a Hyperdisk Balanced volume in Confidential mode, see
additional limitations .
Confidential VMs with AMD SEV on C3D machine types don't support
Hyperdisk Balanced and Hyperdisk Throughput.
What's next?
Learn how to create a Hyperdisk volume .
Learn how to clone a Hyperdisk volume .
Learn about synchronous disk replication
with Hyperdisk Balanced High Availability.
Learn about Hyperdisk pools .
Review Disk pricing information.
Learn how to optimize performance of Hyperdisk .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines
  title: "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\
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
Accelerator-optimized machine family
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the accelerator-optimized machine family, which provides
you with Compute Engine instances that have pre-attached NVIDIA GPUs. These
instances are designed specifically for artificial intelligence (AI), machine
learning (ML), high performance computing (HPC), and graphics-intensive
applications.
The accelerator-optimized machine family is available in the following machine
series: A4X Max, A4X, A4, A3, A2, G4, and G2. Each machine type within a series
has a specific model and number of NVIDIA GPUs attached. You can also attach
some GPU models to
N1 general-purpose machine types.
Recommended machine series by workload type
The following section provides the recommended machine series based on your
GPU workloads:
Workload type
Recommended machine type
Pre-training models
A4X Max, A4X, A4, A3 Ultra, A3 Mega, A3 High, and A2
To identify the best fit, see
Recommendations for pre-training models in the
AI Hypercomputer documentation.
Fine-tuning models
A4X Max, A4X, A4, A3 Ultra, A3 Mega, A3 High, A2, and G4
To identify the best fit, see
Recommendations for fine-tuning models in the
AI Hypercomputer documentation.
Serving inference
A4X Max, A4X, A4, A3 Ultra, A3 Mega, A3 High, A3 Edge, A2, and G4
To identify the best fit, see
Recommendations for serving inference in the
AI Hypercomputer documentation.
Graphics-intensive workloads
G4, G2, and N1+T4
High performance computing
For high performance computing workloads, any accelerator-optimized machine
series works well. The best fit depends on the amount of computation that must
be offloaded to the GPU.
For more information, see
Recommendations for HPC in the AI Hypercomputer
documentation.
Pricing and consumption options
Consumption options refers to the ways to get and use compute resources.
Google Cloud bills accelerator-optimized machine types for their attached GPUs,
predefined vCPU, memory, and bundled Local SSD (if applicable). Discounts
for accelerator-optimized instances vary based on the consumption option you use.
For more pricing information for accelerator-optimized instances, see the
Accelerator-optimized machine type family
section on the VM instance pricing page.
Discounts for accelerator-optimized instances vary based on the consumption
option you choose:
On-demand: You can receive
committed use discounts (CUDs)
for some resources by purchasing resource-based commitments. However, GPUs
and Local SSD disks that you use with the on-demand option are
ineligible for CUDs. To receive CUDs for GPUs and Local SSD disks, use one
of the reservation options instead.
Spot: Spot VMs automatically receive discounts through
Spot VMs pricing .
Flex-start: Instances provisioned by using the Flex-start consumption
option automatically receive discounts through
Dynamic Workload Scheduler pricing .
Reservations: You can receive CUDs for your accelerator-optimized machine type
resources by purchasing resource-based commitments. Commitments for
GPUs and Local SSD disks require attached reservations for those resources .
Consumption option availability by machine type
The following table summarizes the availability of each consumption option by
machine types. For more information about how to choose a consumption
option, see Choose a consumption model
in the AI Hypercomputer documentation.
Note: Before you create and submit a future reservation request for a
supported GPU machine type, you must contact your
account team or the
sales team to discuss
your request. Otherwise, Google Cloud is likely to decline it.
Machine type (GPU model)
On-demand
Spot
Flex-start
On-demand reservations
Future reservations
Future reservations in calendar mode
Future reservations in AI Hypercomputer
A4X Max (GB300) and A4X (GB200)
A4 (B200)
A3 Ultra (H200)
A3 Mega (H100)
A3 High with 8 GPUs (H100)
A3 High with less than 8 GPUs (H100)
A3 Edge (H100)
A2 (A100)
G4 (RTX PRO 6000)
G2 (L4)
N1 with GPUs (T4/P4/P100/V100)
Maintenance experience for accelerator-optimized machine types
During the lifecycle of a
Compute Engine instance , the host machine that your instance runs on undergoes multiple
host events .
A host event can include the regular maintenance of
Compute Engine infrastructure, or in rare cases, a host error. Compute Engine also
applies some non-disruptive lightweight upgrades for the hypervisor and network
in the background.
The following table describes the host maintenance features for accelerator-optimized machine
types:
Machine type
Number of GPUs
Typical scheduled maintenance event frequency
Maintenance behavior
Advanced notification for scheduled maintenance
On-demand maintenance
Simulate maintenance
A4X Max 2 and A4X 2
4
Minimum of 90 days
Terminates with
Local SSD data persistence
90 days
Yes
No
A4 2
8
Minimum of 90 days
Terminates with Local SSD data persistence
90 days
Yes
No
A3 Ultra 2
8
Minimum of 90 days
Terminates with Local SSD data persistence
90 days
Yes
No
A3 Mega 2 and A3 High 2
8
Minimum of 30 days 1
Terminate and restart
7 days
Yes
Yes
A3 High
1, 2, 4
Minimum of 30 days 1
Terminate and restart
7 days 1
No
Yes
A3 Edge
8
Minimum of 30 days
Terminate and restart
7 days
Yes
Yes
A2 Ultra
1, 2, 4, 8
Minimum of 30 days
Terminate and restart
7 days
Yes (8 GPUs only)
Yes
A2 Standard
1, 2, 4, 8, or 16
Minimum of 30 days
Terminate and restart
7 days
Yes (8 and 16 GPUs only)
Yes
G4
1, 2, or 4
Minimum of 30 days
Terminate and restart. If Local SSD disks are attached, the instance terminates
with Local SSD data persistence.
7 days
No
Yes
G4
8
Minimum of 90 days
Terminate and restart. If Local SSD disks are attached, the instance terminates
with Local SSD data persistence.
30 days
Yes
Yes
G2
1, 2, 4, or 8
Minimum of 30 days
Terminate and restart
7 days
Yes (8 GPUs only)
Yes
N1+T4
1 or 2
Minimum of 15 days
Terminate and Restart
7 days
No
Yes
N1+T4
4
Minimum of 30 days
Terminate and Restart
7 days
Yes
Yes
N1+P4
1 or 2
Minimum of 15 days
Terminate and Restart
7 days
No
Yes
N1+P4
4
Minimum of 30 days
Terminate and Restart
7 days
Yes
Yes
N1+P100
1 or 2
Minimum of 15 days
Terminate and Restart
7 days
No
Yes
N1+P100
4
Minimum of 30 days
Terminate and Restart
7 days
Yes
Yes
N1+V100
1, 2, or 4
Minimum of 15 days
Terminate and Restart
7 days
No
Yes
N1+V100
8
Minimum of 30 days
Terminate and Restart
7 days
Yes
Yes
1 Excluding instances covered by specific customer maintenance
agreements.
2 See also Understand host maintenance
in the AI Hypercomputer documentation.
The maintenance frequencies shown in the previous table are approximations, not guarantees.
Compute Engine might occasionally perform maintenance more frequently.
The A4X Max and A4X machine series
Caution: The
Compute Engine Service Level Agreement (SLA)
doesn't apply to the A4X Max and A4X machine series.
The A4X Max and A4X machine series runs on an exascale platform based on
NVIDIA's rack-scale architecture
and is optimized for compute and memory-intensive, network-bound ML training and
HPC workloads. A4X Max and A4X differ primarily in their GPU and networking
components. A4X Max also offers
bare metal instances ,
which provide direct access to the host server's CPU and memory,
without Compute Engine's hypervisor in the middle.
All machine types in the A4X Max and A4X series have two sockets with NVIDIA
Grace™ CPUs with Arm® Neoverse™ V2 cores. These CPUs connect to four GPUs with
fast chip-to-chip
NVLink-C2 communication.
NVLink domain
Both A4X Max and A4X machine series are built on NVIDIA's NVL72 rack-scale
architecture, which uses NVLink domains to enable large-scale,
high-performance GPU computing.
An NVLink Domain is a group of interconnected NVIDIA NVSwitch chips and the
GPUs that connect to them, forming a high-speed network fabric that allows for
direct and fast communication between GPUs. For A4X Max and A4X machine types,
a single NVL72 (NVLink) Domain is composed of 18 instances and 72 GPUs.
A4X Max and A4X comparison
The following table provides a detailed comparison of the A4X Max and A4X
machine types:
Feature
A4X Max
A4X
GPU acceleration
A4X Max instances have NVIDIA GB300 Ultra Superchips automatically attached.
These Superchips feature
NVIDIA B300 GPUs ,
offering up to 20 TB of total GPU memory per NVL72 domain, which
provides roughly 279 GB per GPU.
A4X instances have NVIDIA GB200 Superchips automatically attached.
These Superchips have
NVIDIA B200 GPUs
and offer 186 GB memory per GPU.
Enhanced networking with RoCE
For A4X Max instances, RoCE increases network performance by combining
NVIDIA ConnectX-8 (CX-8) SuperNICs and
Google's datacenter-wide network, which features eight-way rail-alignment .
This configuration delivers even higher performance with up to
3,200 Gbps of bandwidth, optimized for demanding large-scale
training and HPC tasks.
For general purpose networking, each instance also has up to
400 Gbps of bandwidth.
For A4X instances, RDMA over Converged Ethernet (RoCE) increases
network performance by combining NVIDIA ConnectX-7 (CX-7) NICs
Google's datacenter-wide network, which features four-way rail-alignment .
This
architecture provides up to 1,600 Gbps of bandwidth, enabling
high-throughput, low-latency communication for large-scale distributed
workloads.
For general purpose networking, each instance also has
up to 400 Gbps of bandwidth.
Performance
The NVIDIA GB300 Ultra Superchips provide 15 PetaFLOPS of dense FP4
performance. For
large-scale FP4 inference, the GB300 Ultra Superchips are expected to deliver
20-40% higher performance over the GB200 Superchips.
The NVIDIA GB200 Superchips provide 10 PetaFLOPS of dense FP4
performance.
Bare metal and VM support
Bare metal instances only
VM instances only
OS support
A4X Max instances support a range of Linux OS images. However, because
bare metal instances use the IDPF network driver, your OS image must
support IDPF. If you want to use an OS image that is available on
Compute Engine, OS images that support IDPF .
A4X instances support a range of Linux OS images. For a complete list
of supported operating systems on Compute Engine, see
OS support for GPUs .
CPU platform
Both A4X Max and A4X machine types use the NVIDIA Grace CPU
platform with Arm® Neoverse™ V2 cores. For more details about the platform,
see CPU platforms .
NVLink scalability
For both A4X Max and A4X machine types, multi-node NVLink
scales up to 72 GPUs in a single domain and provides GPU NVLink bandwidth
of 1800 GBps, bidirectionally per GPU.
Disk support
A4X Max and A4X instances support Local SSD for fast
scratch disks, which is useful for feeding data into GPUs while
preventing I/O bottlenecks. For durable storage, you can attach
Hyperdisk volumes.
12,000 GiB of Local SSD is automatically added to A4X
Max and A4X instances.
For durable storage, you can also attach up to
512 TiB of Hyperdisk storage. For more information
about disk types, see
Choose a disk type .
Dense allocation and topology-aware scheduling support
Both A4X Max and A4X machine types support requesting
blocks of densely allocated capacity. Your host machines are allocated
physically close to each other, provisioned as blocks of resources, and
are interconnected with a dynamic ML network fabric to minimize network
hops and optimize for low latency. Additionally, for A4X Max and A4X
instances you can get topology information at the node and cluster level
that can be used for job placement.
A4X Max machine type (bare metal)
A4X Max accelerator-optimized
machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and
are ideal for foundation model training and serving. A4X Max machine types are available
as bare metal instances .
A4X Max is an exascale platform based on
NVIDIA GB300
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B300 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X Max instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview in
the AI Hypercomputer documentation.
Attached NVIDIA GB300 Grace Blackwell Ultra Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-maxgpu-4g-metal
144
960
12,000
6
3,600
4
1,116
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4X machine type
A4X accelerator-optimized
machine types use NVIDIA GB200 Grace Blackwell Superchips ( nvidia-gb200 ) and
are ideal for foundation model training and serving.
A4X is an exascale platform based on
NVIDIA GB200
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B200 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview in
the AI Hypercomputer documentation.
Attached NVIDIA GB200 Grace Blackwell Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-highgpu-4g
140
884
12,000
6
2,000
4
744
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4X Max and A4X limitations
The following limitations apply to A4X Max and A4X instances:
A4X Max instances
Caution: The
Compute Engine Service Level Agreement (SLA) doesn't apply to the A4X Max machine series.
You can only request capacity that uses the
supported consumption options .
You don't receive sustained
use discounts or flexible committed use
discounts for instances that use this machine type.
You can only create instances in certain regions and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
This machine type is only available on the NVIDIA Grace platform .
Machine type changes aren't supported for A4X Max. To switch to or from this
machine type, you must create a new instance.
You can't run Windows operating systems on this machine type. For a list of
supported Linux operating systems, review the
supported operating systems for GPU instances .
A4X Max instances don't support the following:
Sole-tenancy
Spot VMs
Flex-start VMs
You can't attach Hyperdisk ML disks created before February 4, 2026 to A4X Max machine types.
A4X instances
Caution: The
Compute Engine Service Level Agreement (SLA) doesn't apply to the A4X machine series.
You can only request capacity that uses the
supported consumption options .
You don't receive sustained
use discounts or flexible committed use
discounts for instances that use this machine type.
You can only create instances in certain regions and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
This machine type is only available on the NVIDIA Grace platform .
Machine type changes aren't supported for A4X. To switch to or from this
machine type, you must create a new instance.
You can't run Windows operating systems on this machine type. For a list of
supported Linux operating systems, review the
supported operating systems for GPU instances .
For A4X instances, when you use ethtool -S to monitor GPU networking,
the physical port counters that end in _phy don't update. This is expected behavior for
instances that use the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
A4X instances don't support the following:
Sole-tenancy
Spot VMs
Flex-start VMs
You can't attach Hyperdisk ML disks created before February 4, 2026 to A4X machine types.
Supported disk types for A4X Max and A4X instances
A4X Max
A4X Max instances can use the following block storage types:
Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported
for the boot disk
Hyperdisk Throughput ( hyperdisk-throughput )
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Extreme ( hyperdisk-extreme )
Local SSD: which is automatically added to instances that are created by using any of
the A4X Max machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD
a4x-maxgpu-4g-metal
32
32
32
32
8
4
A4X
A4X instances can use the following block storage types:
Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported
for the boot disk
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk ML ( hyperdisk-ml )
Local SSD: which is automatically added to instances that are created by using any of
the A4X machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD
a4x-highgpu-4g
128
128
0
0
128
8
4
1 Hyperdisk usage is charged separately from
machine type pricing . For disk pricing, see
Hyperdisk pricing .
Disk and capacity limits
You can attach a mixture of different Hyperdisk types to
an instance, but the maximum total disk capacity (in TiB) across all disk
types can't exceed 512 TiB for all Hyperdisks.
For details about the capacity limits, see
Hyperdisk size and attachment limits .
The A4 machine series
The A4 machine series offers machine types with up to 224 vCPUs, and
3,968 GB of memory. A4 instances provide up to 3x performance of previous
GPU instance types for most GPU accelerated workloads. A4 is recommended for ML
training workloads especially at large scales—for example,
hundreds or thousands of GPUs. The A4 machine series is available in a single
machine type.
VM instances created by using the A4 machine type provide the following
features:
GPU acceleration with NVIDIA B200 GPUs :
NVIDIA B200 GPUs
are automatically attached to A4 instances,
which offer 180 GB GPU memory per GPU.
5th Generation Intel Xeon Scalable Processor (Emerald Rapids) : offers up
to 4.0 GHz sustained single-core max turbo frequency. For more information
about this processor, see CPU platform .
Industry-leading NVLink scalability : NVIDIA B200 GPUs provide
GPU NVLink bandwidth
of 1,800 GBps, bidirectionally per GPU.
With all-to-all NVLink topology between 8 GPUs in a system, the
aggregate NVLink Bandwidth is up to 14.4 TBps.
Enhanced networking with RoCE : RDMA over Converged Ethernet (RoCE) increases the network performance
by combining NVIDIA ConnectX-7 network interface cards (NICs)
with Google's datacenter-wide four-way rail-aligned network. By leveraging
RDMA over Converged Ethernet (RoCE), A4 instances achieve much higher throughput between instances in a
cluster compared to most A3 instances, except those running on the
A3 Ultra machine type.
Note: Because of the difference in network topology, you can't move workloads
between A4 instances and instances created by using any of the previous generation
accelerator-optimized machine series. You can only move workloads between
instances running on A4 and A3 Ultra machine types.
Increased network speeds : Offers up to 4x networking speeds when compared
to the previous generation A2 instances.
For more information about networking, see
Network bandwidths and GPUs .
Virtualization optimizations for data transfers and recovery :
the Peripheral Component Interconnect Express (PCIe) topology of A4 instances
provides more accurate locality information that workloads can use to optimize
data transfers.
The GPUs also expose Function Level Reset (FLR) for graceful recovery
from failures and atomic operations support for concurrency improvements
in certain scenarios.
Disk support : A4 instances support Local SSD for fast scratch disks,
which is useful for feeding data into GPUs while preventing I/O
bottlenecks. For durable storage, you can attach Hyperdisk
volumes.
12,000 GiB of Local SSD is automatically added to A4 instances.
For workloads that require durable block storage, you can also attach up to
512 TiB of Hyperdisk to A4 instances. For more information
about disk types, see Choose a disk type .
Dense allocation and topology aware scheduling support : When you provision
A4 instances, you can request blocks of densely allocated capacity. Your host
machines are allocated physically close to each other, provisioned as blocks
of resources, and are interconnected with a dynamic ML network fabric to
minimize network hops and optimize for the lowest latency. Additionally, you
can get topology information at node and cluster level that can be used for
job placement.
A4 machine type
A4 accelerator-optimized
machine types have
NVIDIA B200 Blackwell GPUs
( nvidia-b200 ) attached and are ideal for foundation model
training and serving.
Note: When provisioning A4 machine types, you must
reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For instructions on how to create A4
instances, see
Create an A3 Ultra or A4 instance .
.
Attached NVIDIA B200 Blackwell GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4-highgpu-8g
224
3,968
12,000
10
3,600
8
1,440
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth, see
Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4 limitations
You can only request capacity by using the
supported consumption options
for an A4 machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A4 machine type.
You can only use an A4 machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
The A4 machine type is only available on the Emerald Rapids CPU platform .
You can't change the machine type of an instance to or from A4 machine type. You must create a
new instance with this machine type.
A4 machine types don't support
sole-tenancy .
You can't run Windows operating systems on an A4 machine type.
For A4 instances, when you use ethtool -S to monitor GPU networking, physical port
counters that end in _phy don't update. This is expected behavior for instances that use
the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
You can't attach Hyperdisk ML disks that were created before February 4, 2026 to A4 machine types.
Supported disk types for A4 instances
A4 instances can use the following block storage types:
Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported
for the boot disk
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk ML ( hyperdisk-ml )
Local SSD: which is automatically added to instances that are created by using any of
the A4 machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD
a4-highgpu-8g
128
128
N/A
128
8
32
1 Hyperdisk usage is charged separately from
machine type pricing . For disk pricing, see
Hyperdisk pricing .
Disk and capacity limits
You can attach a mixture of different Hyperdisk types to
an instance, but the maximum total disk capacity (in TiB) across all disk
types can't exceed 512 TiB for all Hyperdisks.
For details about the capacity limits, see
Hyperdisk size and attachment limits .
The A3 machine series
The A3 machine series has up to 224 vCPUs, and 2,944 GB of memory. This machine
series is optimized for compute and memory intensive, network bound ML training,
and HPC workloads. The A3 machine series is available in A3 Ultra, A3 Mega,
A3 High, and A3 Edge machine types.
VM instances created by using the A3 machine types provide the following
features:
Feature
A3 Ultra
A3 Mega, High, Edge
GPU acceleration
NVIDIA H200 SXM GPUs
attached, which offers 141 GB GPU memory per GPU and provides larger and
faster memory for supporting large language models and HPC workloads.
NVIDIA H100 SXM GPUs
attached, which offers 80 GB GPU memory per GPU and is ideal for large
transformer-based language models, databases, and HPC.
Intel Xeon Scalable Processors
5th Generation Intel Xeon Scalable
processor (Emerald Rapids) and offers up to 4.0 GHz sustained single-core
max turbo frequency. For more information about this processor, see
CPU platform .
4th Generation Intel Xeon Scalable
processor (Sapphire Rapids) and offers up to 3.3 GHz sustained single-core
max turbo frequency. For more information about this processor, see
CPU platform .
Industry-leading NVLink scalability
NVIDIA H200 GPUs provide peak
GPU NVLink bandwidth
of 900 GB/s, unidirectionally.
With all-to-all NVLink topology between 8 GPUs in a system, the
aggregate NVLink Bandwidth is up to 7.2 TB/s.
NVIDIA H100 GPUs provide peak
GPU NVLink bandwidth
of 450 GB/s, unidirectionally.
With all-to-all NVLink topology between 8 GPUs in a system, the
aggregate NVLink Bandwidth is up to 7.2 TB/s.
Enhanced networking
For this machine type, RDMA over Converged Ethernet (RoCE) increases the network performance by
combining
NVIDIA ConnectX-7 network interface cards (NICs) with our
datacenter-wide four-way rail-aligned network. By leveraging RDMA over Converged Ethernet (RoCE),
the a3-ultragpu-8g machine type achieves much higher
throughput between instances in a cluster when compared to other
A3 machine types.
Note: Because of the difference in network topology between
A3 Ultra and the previous A3 series (A3 Mega, High, and Edge),
you can't move workloads between instances that run on A3 Ultra and the
previous A3 series.
For the A3 Mega machine types, GPUDirect-TCPXO further
improves on GPUDirect-TCPX by offloading TCP protocol. By leveraging
GPUDirect-TCPXO, the a3-megagpu-8g machine type doubles
the network bandwidth when compared to the A3 High and A3 Edge
machine types.
For the A3 Edge ( a3-edgegpu-8g ) and A3
High ( a3-highgpu-8g ) machine types, GPUDirect-TCPX
increases the network performance by allowing data packet payloads to
transfer directly from GPU memory to the network interface. By leveraging
GPUDirect-TCPX, these machine type achieve much higher throughput
between instances in a cluster when compared to the A2 or G2
accelerator-optimized machine types.
Improved networking speeds
Offers up to 4x networking speeds when
compared to the previous generation A2 machine series.
For more information about networking, see
Network bandwidths and GPUs .
Offers up to
2.5X networking speeds when compared to the previous generation A2
machine series.
For more information about networking, see
Network bandwidths and GPUs .
Virtualization optimizations
The Peripheral Component Interconnect Express (PCIe) topology of
A3 instances provides more accurate locality information that workloads can
use to optimize data transfers.
The GPUs also expose Function Level Reset (FLR) for
graceful recovery from failures and atomic operations support for
concurrency improvements in certain scenarios.
Disk support
A3 instances support Local SSD for fast scratch disks,
which is useful for feeding data into GPUs while preventing I/O
bottlenecks. For durable storage, you can attach Persistent Disk and
Hyperdisk volumes.
Local SSD is attached as follows:
12,000 GiB of Local SSD is automatically added to A3 Ultra instances.
6,000 GiB of Local SSD is automatically added to A3 Mega,
High, and Edge instances.
For workloads that require durable block storage, you can also attach
up to 512 TiB of Persistent Disk and Hyperdisk to
machine types in these series. For select machine types, up to
257 TiB of Persistent Disk is also supported. For more information
about disk types, see Choose a disk type .
Compact placement policy support
Provides you with more control over the physical
placement of your instances within data centers.
This enables lower-latency and higher bandwidth for instances that are
located within a single availability zone.
For more information, see
About compact placement policies .
Caution: By default, you can't apply compact placement policies with a max distance value
to A3 VMs in Compute Engine. To request access to this feature, contact your assigned
Technical Account Manager (TAM) or the
Sales team .
A3 Ultra machine type
A3 Ultra
machine types have NVIDIA H200 SXM GPUs
( nvidia-h200-141gb ) attached and provides the highest network
performance in the A3 series. A3 Ultra machine types are ideal for foundation model training and
serving.
Note: When provisioning A3 Ultra machine
types, you must reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For more information about the
parameters to set when creating an A3 Ultra instance, see
Create an A3 Ultra or A4 instance .
Attached NVIDIA H200 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a3-ultragpu-8g
224
2,952
12,000
10
3,600
8
1128
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Ultra limitations
You can only request capacity by using the
supported consumption options
for an A3 Ultra machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Ultra machine type.
You can only use an A3 Ultra machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
The A3 Ultra machine type is only available on the Emerald Rapids CPU platform .
Machine type changes aren't supported for A3 Ultra machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Ultra machine type.
A3 Ultra machine types don't support
sole-tenancy .
For A3 Ultra instances, when you use ethtool -S to monitor GPU networking,
physical port counters that end in _phy don't update. This is expected behavior for
instances that use the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
A3 Mega machine type
A3 Mega
machine types have NVIDIA H100 SXM GPUs
and are ideal for large model training and multi-host inference.
Note: When provisioning
a3-megagpu-8g machine types, we recommend using a cluster of these instances and deploying
with a scheduler such as Google Kubernetes Engine (GKE) or Slurm. For detailed instructions on either of
these options, review the following:
To create Google Kubernetes Engine cluster, see
Deploy an A3 Mega cluster
with GKE .
To create a Slurm cluster, see
Deploy an A3 Mega Slurm cluster .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-megagpu-8g
208
1,872
6,000
9
1,800
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Mega limitations
You can only request capacity by using the
supported consumption options
for an A3 Mega machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Mega machine type.
You can only use an A3 Mega machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 Mega machine type.
The A3 Mega machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 Mega machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Mega machine type.
A3 High machine type
A3 High
machine types have NVIDIA H100 SXM GPUs
and are well-suited for both large model inference and model fine tuning.
Note: When provisioning
a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types,
you must create instances by using Spot VMs or
Flex-start VMs. For detailed instructions on these options, review the following:
To create Spot VMs, set the provisioning model to SPOT when you
create an accelerator-optimized
VM .
To create Flex-start VMs, you can use one of the following methods:
Create a standalone VM and set the provisioning model to FLEX_START when you
create an
accelerator-optimized VM .
Create a resize request in a managed instance group (MIG). For instructions, see
Create a MIG with GPU
VMs .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-highgpu-1g
26
234
750
1
25
1
80
a3-highgpu-2g
52
468
1,500
1
50
2
160
a3-highgpu-4g
104
936
3,000
1
100
4
320
a3-highgpu-8g
208
1,872
6,000
5
1,000
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 High limitations
You can only request capacity by using the
supported consumption options
for an A3 High machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 High machine type.
You can only use an A3 High machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 High machine type.
The A3 High machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 High machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 High machine type.
For a3-highgpu-1g , a3-highgpu-2g , and a3-highgpu-4g
machine types,
you must create instances by using Spot VMs or
Flex-start VMs. For detailed instructions on these options, review the following:
To create Spot VMs, set the provisioning model to SPOT when you
create an accelerator-optimized
VM .
To create Flex-start VMs, you can use one of the following methods:
Create a standalone VM and set the provisioning model to FLEX_START when you
create an
accelerator-optimized VM .
Create a resize request in a managed instance group (MIG). For instructions, see
Create a MIG with GPU
VMs .
You can only use a
Confidential VM
with an a3-highgpu-1g machine type in limited regions and zones ,
and all the
limitations for Confidential VM running on the A3 High machine type
apply.
A3 Edge machine type
A3 Edge
machine types have NVIDIA H100 SXM GPUs
and are designed specifically for serving and are available in
a limited set of regions .
Note: To get started with A3 Edge instances, see
Create an A3 VM with GPUDirect-TCPX enabled .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-edgegpu-8g
208
1,872
6,000
5
600: for asia-south1 and northamerica-northeast2
400: for all other A3 Edge regions
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Edge limitations
You can only request capacity by using the
supported consumption options
for an A3 Edge machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Edge machine type.
You can only use an A3 Edge machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 Edge machine type.
The A3 Edge machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 Edge machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Edge machine type.
A3 Edge machine types don't support
sole-tenancy .
Supported disk types for A3 instances
A3 Ultra
A3 Ultra instances can use the following block storage types:
Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported
for the boot disk
Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability )
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk ML ( hyperdisk-ml )
Local SSD: which is automatically added to instances that are created by using any of
the A3 machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD disks
a3-ultragpu-8g
128
128
128
N/A
128
8
32
1 Hyperdisk usage is charged separately from
machine type pricing . For disk pricing, see
Hyperdisk pricing .
A3 Mega
A3 Mega instances can use the following block storage types:
Balanced Persistent Disk ( pd-balanced )
SSD (performance) Persistent Disk ( pd-ssd )
Hyperdisk Balanced ( hyperdisk-balanced )
Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability )
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk Throughput ( hyperdisk-throughput )
Local SSD: which is automatically added to instances that are created by using
any of the A3 machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD disks
a3-megagpu-8g
128
32
32
64
64
8
16
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
A3 High
A3 High instances can use the following block storage types:
Balanced Persistent Disk ( pd-balanced )
SSD (performance) Persistent Disk ( pd-ssd )
Hyperdisk Balanced ( hyperdisk-balanced )
Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability )
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk Throughput ( hyperdisk-throughput )
Local SSD: which is automatically added to instances that are created by using
any of the A3 machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD disks
a3-highgpu-1g
128
32
32
64
64
N/A
2
a3-highgpu-2g
128
32
32
64
64
N/A
4
a3-highgpu-4g
128
32
32
64
64
8
8
a3-highgpu-8g
128
32
32
64
64
8
16
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
A3 Edge
A3 Edge instances can use the following block storage types:
Balanced Persistent Disk ( pd-balanced )
SSD (performance) Persistent Disk ( pd-ssd )
Hyperdisk Balanced ( hyperdisk-balanced )
Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability )
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Extreme ( hyperdisk-extreme )
Hyperdisk Throughput ( hyperdisk-throughput )
Local SSD: which is automatically added to instances that are created by using
any of the A3 machine types
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Throughput
Hyperdisk ML
Hyperdisk Extreme
Attached Local SSD
a3-edgegpu-8g
128
32
32
64
64
8
16
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
Disk and capacity limits
If supported by the machine type, you can attach a mixture of
Hyperdisk and Persistent Disk volumes to an instance, but the following
restrictions apply:
The combined number of both Hyperdisk and Persistent Disk
volumes can't exceed 128 per instance.
The maximum total disk capacity (in TiB) across all disk types can't
exceed:
For machine types with less than 32 vCPUs:
257 TiB for all Hyperdisk or all Persistent Disk
257 TiB for a mixture of Hyperdisk and
Persistent Disk
For machine types with 32 or more vCPUs:
512 TiB for all Hyperdisk
512 TiB for a mixture of Hyperdisk and
Persistent Disk
257 TiB for all Persistent Disk
For details about the capacity limits, see
Hyperdisk size and attachment limits and
Persistent Disk
maximum capacity .
The A2 machine series
The A2 machine series is available in A2 Standard and A2 Ultra machine types.
These machine types have 12 to 96 vCPUs, and up to 1,360 GB of memory.
VM instances created by using the A2 machine types provide the following
features:
GPU acceleration : each A2 instance has
NVIDIA A100 GPUs .
These are available in both A100 40GB and A100 80GB options.
Industry-leading NVLink scale
that provides peak GPU to GPU NVLink bandwidth of 600 GBps.
For example, systems with 16 GPUs have an aggregate NVLink bandwidth of up
to 9.6 TBps. These 16 GPUs can be used as a single high performance
accelerator with unified memory space to deliver up to 10 petaFLOPS of
compute power and up to 20 petaFLOPS of inference compute power that can be
used for artificial intelligence, deep learning, and machine learning workloads.
Improved computing speeds : the attached NVIDIA A100 GPUs offer up
to 10x improvements in computing speed when compared to previous generation
NVIDIA V100 GPUs.
With the A2 machine series, you can get up to 100 Gbps network bandwidth.
Disk support : A2 instances support Local SSD for fast scratch disks,
which is useful for feeding data into GPUs while preventing I/O
bottlenecks. For durable storage, you can attach Persistent Disk and
Hyperdisk volumes.
Local SSD is supported as follows:
For A2 Standard machine types, you can add up to 3,000 GiB of
Local SSD when you create an instance.
For A2 Ultra machine types, Local SSD is automatically attached when you
create an instance.
For workloads that require durable block storage, you can attach
up to 257 TiB of Persistent Disk and 512 TiB of Hyperdisk
volumes to A2 instances. For more information about disk types, see
Choose a disk type .
Compact placement policy support : provides you with more control over the
physical placement of your instances within data centers. This enables
lower-latency and higher bandwidth for instances that are located within a
single availability zone. For more information, see
Reduce latency by using compact placement policies .
The following machine types are available for the A2 machine series.
A2 Ultra machine types
These machine types have a
fixed number of A100 80GB GPUs .
Local SSD is automatically attached to instances created by using the A2 Ultra
machine types.
Attached NVIDIA A100 80GB GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM2e)
a2-ultragpu-1g
12
170
375
24
1
80
a2-ultragpu-2g
24
340
750
32
2
160
a2-ultragpu-4g
48
680
1,500
50
4
320
a2-ultragpu-8g
96
1,360
3,000
100
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A2 Ultra limitations
You can only request capacity by using the
supported consumption options
for an A2 Ultra machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A2 Ultra machine type.
You can only use an A2 Ultra machine type in certain regions
and zones .
The A2 Ultra machine type is only available on the Cascade Lake platform .
If your instance uses an A2 Ultra machine type, you can't change the machine type.
If you need to use a different A2 Ultra machine type, or any other machine type, you must create a
new instance.
You can't change any other machine type to an A2 Ultra machine type. If you need a
instance that uses an A2 Ultra machine type, you must create a new instance.
You can't do a quick format of the attached Local SSDs on Windows instances that use A2 Ultra
machine types. To format these Local SSDs, you must do a full format by using the diskpart
utility and specifying format fs=ntfs label=tmpfs .
A2 Standard machine types
These machine types have a fixed number of A100 40GB GPUs .
You can also add Local SSD disks when creating an A2 Standard instance. For the
number of disks you can attach, see
Machine types that require you to choose a number of Local SSD disks .
Attached NVIDIA A100 40GB GPUs
Machine type
vCPU count 1
Instance memory (GB)
Local SSD supported
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM2)
a2-highgpu-1g
12
85
Yes
24
1
40
a2-highgpu-2g
24
170
Yes
32
2
80
a2-highgpu-4g
48
340
Yes
50
4
160
a2-highgpu-8g
96
680
Yes
100
8
320
a2-megagpu-16g
96
1,360
Yes
100
16
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A2 Standard limitations
You can only request capacity by using the
supported consumption options
for an A2 Standard machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A2 Standard machine type.
You can only use an A2 Standard machine type in certain regions
and zones .
The A2 Standard machine type is only available on the Cascade Lake platform .
If your instance uses an A2 Standard machine type, you can only switch from one A2 Standard machine type
type to another A2 Standard machine type. You can't change to any other machine type.
For more information, see
Modify accelerator-optimized instances .
You can't use the Windows operating system with the a2-megagpu-16g machine type.
When using a Windows operating system, choose a different A2 Standard machine type.
You can't do a quick format of the attached Local SSDs on Windows instances that use A2 Standard machine types.
To format these Local SSDs, you must do a full format by using the diskpart
utility and specifying format fs=ntfs label=tmpfs .
Supported disk types for A2 instances
A2 instances can use the following block storage types:
Hyperdisk ML ( hyperdisk-ml )
Balanced Persistent Disk ( pd-balanced )
SSD (performance) Persistent Disk ( pd-ssd )
Standard Persistent Disk ( pd-standard )
Local SSD: which is automatically attached to instances created by using the
A2 Ultra machine types.
A2 Ultra
Maximum number of disks per instance 1
Machine types
All disks 2
Hyperdisk ML
Attached Local SSD
a2-ultragpu-1g
128
32
1
a2-ultragpu-2g
128
48
2
a2-ultragpu-4g
128
64
4
a2-ultragpu-8g
128
64
8
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
2 This limit applies to Persistent Disk and Hyperdisk, but doesn't include
Local SSD disks.
A2 Standard
Maximum number of disks per instance 1
Machine types
All disks 2
Hyperdisk ML
Local SSD
a2-highgpu-1g
128
32
8
a2-highgpu-2g
128
48
8
a2-highgpu-4g
128
64
8
a2-highgpu-8g
128
64
8
a2-megagpu-16g
128
64
8
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
2 This limit applies to Persistent Disk and Hyperdisk, but doesn't include
Local SSD disks.
If supported by the machine type, you can attach a mixture of
Hyperdisk and Persistent Disk volumes to an instance, but the following
restrictions apply:
The combined number of both Hyperdisk and Persistent Disk
volumes can't exceed 128 per instance.
The maximum total disk capacity (in TiB) across all disk types can't
exceed:
For machine types with less than 32 vCPUs:
257 TiB for all Hyperdisk or all Persistent Disk
257 TiB for a mixture of Hyperdisk and
Persistent Disk
For machine types with 32 or more vCPUs:
512 TiB for all Hyperdisk
512 TiB for a mixture of Hyperdisk and
Persistent Disk
257 TiB for all Persistent Disk
For details about the capacity limits, see
Hyperdisk size and attachment limits and
Persistent Disk
maximum capacity .
The G4 machine series
The G4 machine series uses the AMD EPYC Turin CPU platform and features
NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs. This machine series offers
significant improvements over the previous-generation G2 machine series,
with considerably more GPU memory, increased GPU memory bandwidth, and
higher networking bandwidth.
G4 instances have up to 384 vCPUs, 1,440 GB of memory, and 12 TiB of
Titanium SSD disks attached. G4 instances also provide up to
400 Gbps of standard network performance.
This machine series is particularly intended for workloads such as NVIDIA
Omniverse simulation workloads, graphics-intensive applications, video transcoding, and
virtual desktops. The G4 machine series also provide a low-cost solution for
performing single host inference and model tuning compared with A series machine
types.
Instances that use the G4 machine type provide the following features:
GPU acceleration with NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs :
G4 instances automatically attach
NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ,
which offer 96 GB GPU memory per GPU.
5th Generation AMD EPYC Turin CPU Platform : this platform offers up to
4.1 GHz sustained max boost frequency. For more information about this
processor, see CPU platform .
Next generation graphics performance : the NVIDIA RTX PRO 6000 GPUs provide
significant performance and feature upgrades over the NVIDIA L4 GPUs that
are attached to the G2 machine series. Thesed upgrades are as follows:
5th-Generation Tensor Cores : these cores introduce support for FP4
precision and DLSS 4 Multi Frame Generation. By using these 5th Generation
tensor cores, NVIDIA RTX PRO 6000 GPUs offers improved performance to
accelerate tasks like local LLM development and content creation, compared
to NVIDIA L4 GPUs.
4th-Generation RT Cores : these cores deliver up to twice the ray-tracing
performance of the previous generation NVIDIA L4 GPUs, accelerating
rendering for design and manufacturing workloads.
Core count : the NVIDIA RTX PRO 6000 GPU includes 24,064 CUDA cores,
752 5th-gen Tensor cores, and 188 4th-gen RT cores. This update represents
a substantial increase over prior generations like the L4 GPU, which has
7,680 CUDA cores and 240 Tensor cores.
GPU sharing : there are a number of options that you can use to allow
multiple workloads to access a single physical GPU. GPU sharing is useful
for workloads that don't require the resources of a full GPU, helping you
optimize costs. The following GPU sharing options are available for G4 instances:
Fractional GPU (vGPU) support
( Preview ): this feature allows a single
physical GPU to be shared by multiple virtual machine (VM) instances.
vGPUs provide multi-tenant security isolation because each vGPU is a
separate VM instance. To use vGPUs, Compute Engine provides the
following VM instance shapes: g4-standard-6 (1/8 GPU),
g4-standard-12 (1/4 GPU), and g4-standard-24 (1/2 GPU).
Multi-Instance GPU (MIG) : this feature allows a single GPU to be partitioned
into up to four fully isolated instances on a single virtual machine. This
option doesn't offer multi-tenant security isolation as all partitions
belong to a single VM.
Peripheral Component Interconnect Express (PCIe) Gen 5 support : G4
instances supports PCI Express Gen 5, which improves the data transfer
speed from CPU memory to GPU compared to PCIe Gen 3 used by G2 instances.
Disk support : G4 instances support
Titanium SSD for
fast scratch disks, which is useful for feeding data into GPUs while
preventing I/O bottlenecks. For durable storage, you can attach
Hyperdisk volumes.
G4 instances support attaching up to 12,000 GiB of Titanium SSD.
For workloads that require durable block storage, G4 instances also
support attaching up to 512 TiB of Hyperdisk. For more
information about disk types, see Choose a disk type .
GPU Peer-to-Peer (P2P) communication : G4 instances support GPU P2P
communication, enabling direct data transfer between GPUs within the same
instance. This can significantly improve performance for multi-GPU workloads
by reducing data transfer latency and freeing up CPU resources. For more
information, see G4 GPU peer-to-peer (P2P) communication .
G4 machine types
G4 accelerator-optimized
machine types use
NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 )
and are
suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video
transcoding, and virtual desktops. G4 machine types also provide a low-cost solution for
performing single host inference and model tuning compared with A series machine types.
Note: To get started with G4 instances, see
Create a G4 instance .
Attached NVIDIA RTX PRO 6000 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Maximum Titanium SSD supported (GiB) 2
Physical NIC count
Maximum network bandwidth (Gbps) 3
GPU count
GPU memory 4 (GB GDDR7)
g4-standard-6
6
22
0
1
20
1/8
12
g4-standard-12
12
45
375
1
20
1/4
24
g4-standard-24
24
90
750
1
20
1/2
48
g4-standard-48
48
180
1,500
1
50
1
96
g4-standard-96
96
360
3,000
1
100
2
192
g4-standard-192
192
720
6,000
1
200
4
384
g4-standard-384
384
1,440
12,000
2
400
8
768
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 You can add Titanium SSD disks when creating a G4 instance. For the number of disks
you can attach, see
Machine types that require you to choose a number of Local SSD disks .
3 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
See Network bandwidth .
4 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
G4 limitations
You can only request capacity by using the
supported consumption options
for a G4 machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use a G4 machine type.
You can only use a G4 machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal)
on an instance that uses a G4 machine type.
The G4 machine type is only available on the AMD EPYC Turin 5th Generation platform .
You can't create Confidential VM instances that use a G4 machine type.
You can't create G4 instances on sole-tenant nodes.
You can't use Windows operating systems on g4-standard-384 instances.
You can't attach Hyperdisk ML disks that were created before February 4, 2026 to G4 machine types.
Supported disk types for G4 instances
G4 instances can use the following block storage types:
Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported
for the boot disk
Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability )
Hyperdisk Extreme ( hyperdisk-extreme ): this disk type is only supported on G4
instances that have two or more GPUs attached
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Throughput ( hyperdisk-throughput )
Titanium SSD: you can add Titanium SSD to instances created by
using the G4 machine types.
Maximum number of disks per instance 1
Machine types
All Hyperdisk
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Extreme
Hyperdisk ML
Hyperdisk Throughput
Titanium SSD
g4-standard-6
8
8
8
0
8
8
0
g4-standard-12
16
16
16
0
16
16
1
g4-standard-24
32
32
32
0
32
32
2
g4-standard-48
32
32
32
0
32
32
4
g4-standard-96
32
32
32
8
32
32
8
g4-standard-192
64
64
64
8
64
64
16
g4-standard-384
128
128
128
8
128
128
32
1 Hyperdisk usage is charged separately from
machine type pricing . For disk pricing, see
Hyperdisk pricing .
You can attach a mixture of different Hyperdisk types to
an instance, but the maximum total disk capacity (in TiB) across all disk
types can't exceed 512 TiB for all Hyperdisks.
For details about the capacity limits, see
Hyperdisk size and attachment limits .
GPU peer-to-peer (P2P) communication
G4 instances enhance multi-GPU workload performance by using direct GPU
peer-to-peer (P2P) communication, which is supported only on machine types with
two or more GPUs. This approach allows GPUs that attach to the same G4 instance
to exchange data directly over the PCIe bus, bypassing the need to transfer data
through the CPU's main memory. This direct path reduces latency, lowers CPU
utilization, and increases the effective bandwidth between GPUs. P2P
communication significantly accelerates multi-GPU applications such as machine
learning (ML) training and high performance computing (HPC).
This feature typically requires no modifications to your application code. You
only need to configure NCCL to use P2P. To configure NCCL, before you run your
workloads, set the NCCL_P2P_LEVEL environment
variable
on your G4 instance based on the machine type:
For G4 instances with 2 or 4 GPUs ( g4-standard-96 , g4-standard-192 ): set
NCCL_P2P_LEVEL=PHB
For G4 instances with 8 GPUs ( g4-standard-384 ): set NCCL_P2P_LEVEL=SYS
Set the environment variable using one of the following options:
On the command line, run the appropriate export command (for example,
export NCCL_P2P_LEVEL=SYS ) in the shell session where you plan to run your
application. To make this setting persistent, add this command to your
shell's startup script (for example, ~/.bashrc ).
Add the appropriate setting (for example, NCCL_P2P_LEVEL=SYS ) to the NCCL
configuration file located at /etc/nccl.conf .
Key benefits and performance
Accelerates multi-GPU workloads on G4 instances with two or more GPUs :
provides faster runtimes for applications running on g4-standard-96 ,
g4-standard-192 , and g4-standard-384 machine types.
Provides high-bandwidth communication : enables high data transfer speeds
between GPUs.
Improves NCCL performance : provides significant performance improvements for
applications that use the NVIDIA Collective Communication Library (NCCL)
when compared to communication that doesn't use P2P. Google's hypervisor
securely isolates this P2P communication within your instances.
On four GPU instances ( g4-standard-192 ), all GPUs are on a single NUMA
node, allowing for the most efficient P2P communication. This can lead to
performance improvements of up to 2.04x for collectives such as Allgather ,
Allreduce , and ReduceScatter .
On eight GPU instances ( g4-standard-384 ), GPUs are distributed across
two NUMA nodes. P2P communication is accelerated for traffic both within and
between these nodes, with performance improvements of up to 2.19x for the
same collectives.
The G2 machine series
The G2 machine series is available in standard machine types that have 4 to 96
vCPUs, and up to 432 GB of memory. This machine series is optimized for
inference and graphics workloads. The G2 machine series is available in a single
standard machine type with multiple configurations.
Instances created by using the G2 machine types provide the following features:
GPU acceleration : each G2 machine type has
NVIDIA L4 GPUs .
Improved inference rates : the G2 machine type provides support for the
FP8 (8-bit floating point)
data type which speeds up ML inference rates and
reduces memory requirements.
Next generation graphics performance : NVIDIA L4 GPUs provide
up to 3X improvement in graphics performance by using third-generation
RT cores
and
NVIDIA DLSS 3 (Deep Learning Super Sampling)
technology.
High performance network bandwidth : with the G2 machine types, you can
get up to 100 Gbps network bandwidth.
Disk support : G2 instances support Local SSD for fast scratch disks,
which is useful for feeding data into GPUs while preventing I/O
bottlenecks. For durable storage, you can attach Persistent Disk and
Hyperdisk volumes.
You can add up to 3,000 GiB of Local SSD to G2 instances.
For workloads that require durable block storage, you can attach
Hyperdisk and Persistent Disk volumes to
G2 instances. The maximum storage capacity depends on the number of vCPUs
the instance has. For more information about disk types, see
Choose a disk type .
Compact placement policy support : provides you with more control over the
physical placement of your instances within data centers. This enables
lower-latency and higher bandwidth for instances that are located within a
single availability zone. For more information, see
Reduce latency by using compact placement policies .
G2 machine types
G2 accelerator-optimized
machine types have NVIDIA L4 GPUs
attached and are ideal for cost-optimized inference, graphics-intensive and
high performance computing workloads.
Each G2 machine type also has a default memory and a custom
memory range. The custom memory range defines the amount of memory that
you can allocate to your instance for each machine type. You can also add Local
SSD disks when creating a G2 instance. For the number of disks
you can attach, see
Machine types that require you to choose a number of Local SSD disks .
Attached NVIDIA L4 GPUs
Machine type
vCPU count 1
Default instance memory (GB)
Custom instance memory range (GB)
Max Local SSD supported (GiB)
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB GDDR6)
g2-standard-4
4
16
16 to 32
375
10
1
24
g2-standard-8
8
32
32 to 54
375
16
1
24
g2-standard-12
12
48
48 to 54
375
16
1
24
g2-standard-16
16
64
54 to 64
375
32
1
24
g2-standard-24
24
96
96 to 108
750
32
2
48
g2-standard-32
32
128
96 to 128
375
32
1
24
g2-standard-48
48
192
192 to 216
1,500
50
4
96
g2-standard-96
96
384
384 to 432
3,000
100
8
192
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
G2 limitations
You can only request capacity by using the
supported consumption options
for a G2 machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use a G2 machine type.
You can only use a G2 machine type in certain regions
and zones .
The G2 machine type is only available on the Cascade Lake platform .
Standard Persistent Disk ( pd-standard ) isn't supported on instances that use the
G2 machine type. For supported disk types, see
Supported disk types for G2 .
You can't create Multi-Instance
GPUs on an instance that uses a G2 machine type.
If you need to change the machine type of a G2 instance, review
Modify accelerator-optmized instances .
You can't use Deep Learning VM Images as boot disks
for instances that use the G2 machine type.
The current default driver for Container-Optimized OS doesn't support L4 GPUs running on
G2 machine types. Also, Container-Optimized OS only supports a select set of drivers.
If you want to use Container-Optimized OS on G2 machine types, review the following notes:
Use a Container-Optimized OS version that supports the minimum recommended
NVIDIA driver version 525.60.13 or later. For more information, review the
Container-Optimized OS release notes .
When you install the driver ,
specify the latest available version that works for the L4 GPUs.
For example, sudo cos-extensions install gpu -- -version=525.60.13 .
You must use the Google Cloud CLI or REST to
create G2 instances
for the following scenarios:
You want to specify custom memory values.
You want to customize the number of visible CPU cores.
Supported disk types for G2 instances
G2 instances can use the following block storage types:
Balanced Persistent Disk ( pd-balanced )
SSD (performance) Persistent Disk ( pd-ssd )
Hyperdisk ML ( hyperdisk-ml )
Hyperdisk Throughput ( hyperdisk-throughput )
Local SSD: you can add Local SSD to instances created by using the G2 machine
types.
Maximum number of disks per instance 1
Machine types
All disks 2
Hyperdisk ML
Hyperdisk Throughput
Local SSD
g2-standard-4
128
24
24
1
g2-standard-8
128
32
32
1
g2-standard-12
128
32
32
1
g2-standard-16
128
48
48
1
g2-standard-24
128
48
48
2
g2-standard-32
128
64
64
1
g2-standard-48
128
64
64
4
g2-standard-96
128
64
64
8
1 Hyperdisk and Persistent Disk usage are charged separately from
machine type pricing . For disk pricing, see
Persistent Disk and Hyperdisk pricing .
2 This limit applies to Persistent Disk and Hyperdisk, but doesn't include
Local SSD disks.
If supported by the machine type, you can attach a mixture of
Hyperdisk and Persistent Disk volumes to an instance, but the following
restrictions apply:
The combined number of both Hyperdisk and Persistent Disk
volumes can't exceed 128 per instance.
The maximum total disk capacity (in TiB) across all disk types can't
exceed:
For machine types with less than 32 vCPUs:
257 TiB for all Hyperdisk or all Persistent Disk
257 TiB for a mixture of Hyperdisk and
Persistent Disk
For machine types with 32 or more vCPUs:
512 TiB for all Hyperdisk
512 TiB for a mixture of Hyperdisk and
Persistent Disk
257 TiB for all Persistent Disk
For details about the capacity limits, see
Hyperdisk size and attachment limits and
Persistent Disk
maximum capacity .
What's next
Create a VM with attached GPUs
GPU pricing
VM instance pricing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

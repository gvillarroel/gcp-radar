---
title: "About Local SSD disks \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/disks/local-ssd
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/disks/local-ssd
  title: "About Local SSD disks \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
About Local SSD disks
Stay organized with collections
Save and categorize content based on your preferences.
Linux
Windows
For workloads that require temporary storage with high performance and low
latency, consider using local solid-state drive (Local SSD) disks when you
create your compute instance. Local SSD disks are always-encrypted temporary
solid-state storage for Compute Engine. To learn about the other disks
available in Compute Engine, see
Choose a disk type .
Local SSD disks are ideal when you need storage for any of the following use
cases:
Caches or storage for transient data
Scratch processing space for high performance computing or data analytics
Temporary data storage like for the tempdb system database for Microsoft
SQL Server
Local SSD disks offer superior I/O operations per second (IOPS), and very low
latency compared to the persistent storage provided by
Google Cloud Hyperdisk and
Persistent Disk . This low latency is
because Local SSD disks are physically attached to the server that hosts your
instance. For this same reason, Local SSD disks can
provide only temporary storage .
Warning: Local SSD storage is not automatically replicated and
all data on the Local SSD may be lost if the instance stops or is terminated
for any reason. See Local SSD data persistence for details.
Because Local SSD is suitable only for temporary storage, you must store data
that isn't temporary or ephemeral in nature on a Hyperdisk
or Persistent Disk volume.
To use Local SSD disks with a compute instance,
add Local SSD disks when you create the instance .
You can't add Local SSD disks to an instance after creating the instance.
Limitations
Local SSD has the following limitations:
You can't use Local SSD disks with virtual machine (VM) instances that use
shared-core machine
types.
Not all machine series and machine types support Local SSD. For a full list of
machine series that support Local SSD, see
Machine series support .
You can't use customer-supplied encryption keys or customer-managed encryption
keys with Local SSD disks. Compute Engine automatically encrypts
your data when it's written to Local SSD storage.
You can't back up Local SSD disks with snapshots, clones, machine images, or
images. Store important data on Hyperdisk or Persistent Disk
volumes.
Types of Local SSD disks
Local SSD disks come in two types:
Titanium SSD : Titanium SSD is a custom-designed Local SSD disk
that uses Titanium I/O offload processing
and offers enhanced SSD security, performance, and management.
Titanium offers higher storage IOPS, throughput, and lower latency
than the previous generation of Local SSD. The following machine series offer
Local SSD storage using Titanium SSD:
General-purpose:
C4 ,
C4A , and
C4D machine series
Storage-optimized:
Z3 machine series
Compute-optimized:
H4D
Accelerator-optimized
A4X Max and A4X machine series ,
G4 machine series
Titanium SSD disks are directly attached to the compute instances
inside their host server.
Local SSD : Local SSD is the original local SSD feature for Google Cloud.
Each Local SSD disk attached to an instance provides 375 GiB of capacity.
These disks provide higher performance than Hyperdisk or
Persistent Disk. You can use either the NVMe or SCSI interface to mount Local
SSD disks.
Local SSD disks are directly attached to the instances inside their host
server.
Unless Titanium SSD is specifically mentioned, the term
"Local SSD" applies to both Local SSD and Titanium SSD when describing
features of local SSD disks.
Performance
Local SSD performance depends on several factors, including the number of
attached Local SSD disks, the selected disk interface
( NVMe or
SCSI ), and the instance's
machine type. The available performance increases as you attach more Local SSD
disks to your instance.
Local SSD performance by number of attached disks
The following tables list the maximum IOPS and throughput for NVMe- and
SCSI-attached Local SSD disks. The metrics are listed by the total capacity of
Local SSD disks attached to the instance.
Titanium SSD performance
The following table lists the performance limits for Titanium SSD disks on
C4 ,
C4A ,
C4D ,
G4 ,
H4D , and
Z3 instances.
Machine type
# of attached Titanium SSD disks
Total storage space (GiB)
IOPS
Throughput (MiB/s)
Read
Write
Read
Write
C4 (with 375 GiB disks)
c4-standard-4-lssd
c4-highmem-4-lssd
1
375
150,000
75,000
625
330
c4-standard-8-lssd
c4-highmem-8-lssd
1
375
150,000
75,000
625
330
c4-standard-16-lssd
c4-highmem-16-lssd
2
750
300,000
150,000
1,250
660
c4-standard-24-lssd
c4-highmem-24-lssd
4
1,500
600,000
300,000
2,500
1,320
c4-standard-32-lssd
c4-highmem-32-lssd
5
1,875
750,000
375,000
3,125
1,650
c4-standard-48-lssd
c4-highmem-48-lssd
8
3,000
1,200,000
600,000
5,000
2,640
c4-standard-96-lssd
c4-highmem-96-lssd
16
6,000
2,400,000
1,200,000
10,000
5,280
c4-standard-144-lssd
c4-highmem-144-lssd
24
9,000
3,600,000
1,800,000
15,000
7,920
c4-standard-192-lssd
c4-highmem-192-lssd
32
12,000
4,800,000
2,400,000
20,000
10,560
c4-standard-288-lssd
c4-highmem-288-lssd
48
18,000
7,200,000
3,600,000
30,000
15,840
c4-standard-288-lssd-metal
c4-highmem-288-lssd-metal
6
18,000
7,200,000
3,600,000
30,000
15,840
C4A (with 375 GiB disks)
c4a-standard-4-lssd
c4a-highmem-4-lssd
1
375
150,000
75,000
650
330
c4a-standard-8-lssd
c4a-highmem-8-lssd
2
750
300,000
150,000
1,300
660
c4a-standard-16-lssd
c4a-highmem-16-lssd
4
1,500
600,000
300,000
2,600
1,320
c4a-standard-32-lssd
c4a-highmem-32-lssd
6
2,250
900,000
450,000
3,900
1,980
c4a-standard-48-lssd
c4a-highmem-48-lssd
10
3,750
1,500,000
750,000
6,500
3,300
c4a-standard-64-lssd
c4a-highmem-64-lssd
14
5,250
2,100,000
1,050,000
9,100
4,620
c4a-standard-72-lssd
c4a-highmem-72-lssd
16
6,000
2,400,000
1,200,000
10,400
5,280
C4D (with 375 GiB disks)
c4d-standard-8-lssd
c4d-highmem-8-lssd
c4d-standard-16-lssd
c4d-highmem-16-lssd
1
375
150,000
75,000
625
330
c4d-standard-32-lssd
c4d-highmem-32-lssd
2
750
300,000
150,000
1,250
660
c4d-standard-48-lssd
c4d-highmem-48-lssd
4
1,500
600,000
300,000
2,500
1,320
c4d-standard-64-lssd
c4d-highmem-64-lssd
6
2,250
900,000
450,000
3,750
1,980
c4d-standard-96-lssd
c4d-highmem-96-lssd
8
3,000
1,200,000
600,000
5,000
2,640
c4d-standard-192-lssd
c4d-highmem-192-lssd
16
6,000
2,400,000
1,200,000
10,000
5,280
c4d-standard-384-lssd
c4d-highmem-384-lssd
32
12,000
4,800,000
2,400,000
20,000
10,560
G4 (with 375 GiB disks)
g4-standard-48
4
1,500
600,000
300,000
2,500
1,320
g4-standard-96
8
3,000
1,200,000
600,000
5,000
2,640
g4-standard-192
16
6,000
2,400,000
1,200,000
10,000
5,280
g4-standard-384
32
12,000
4,800,000
2,400,000
20,000
10,560
H4D (with 375 GiB disks)
h4d-highmem-192-lssd
10
3,750
1,500,000
750,000
6,250
3,300
Z3 (with 3 TiB disks)
z3-highmem-8-highlssd
z3-highmem-14-standardlssd
1
3,000
750,000
500,000
3,000
2,500
z3-highmem-16-highlssd
z3-highmem-22-standardlssd
2
6,000
1,500,000
1,000,000
6,000
5,000
z3-highmem-22-highlssd
z3-highmem-44-standardlssd
3
9,000
2,250,000
1,500,000
9,000
7,500
z3-highmem-32-highlssd
4
12,000
3,000,000
2,000,000
12,000
10,000
z3-highmem-44-highlssd
z3-highmem-88-standard
6
18,000
4,500,000
3,000,000
18,000
15,000
z3-highmem-88-highlssd
z3-highmem-176-standardlssd
12
36,000
9,000,000
6,000,000
36,000
30,000
Z3 bare metal (with 6 TiB disks)
z3-highmem-192-highlssd-metal
12
72,000
9,000,000
6,000,000
36,000
30,000
NVMe Local SSD performance
The following table lists the performance limits for Local SSD disks that are
attached to instances using NVMe.
# of attached Local SSD disks
Total storage space (GiB)
Capacity per disk (GiB)
IOPS
Throughput (MiB/s)
Read
Write
Read
Write
1
375
375
170,000
90,000
660
350
2
750
375
340,000
180,000
1,320
700
3
1,125
375
510,000
270,000
1,980
1,050
4
1,500
375
680,000
360,000
2,650
1,400
5
1,875
375
680,000
360,000
2,650
1,400
6
2,250
375
680,000
360,000
2,650
1,400
7
2,625
375
680,000
360,000
2,650
1,400
8
3,000
375
680,000
360,000
2,650
1,400
16
6,000
375
1,600,000
800,000
6,240
3,120
24
9,000
375
2,400,000
1,200,000
9,360
4,680
32
12,000
375
3,200,000
1,600,000
12,480
6,240
SCSI Local SSD performance
The following table lists the performance limits for Local SSD disks that are
attached to instances using SCSI.
# of combined Local SSD disks
Storage space (GiB)
IOPS
Throughput (MiB/s)
Read
Write
Read
Write
1
375
100,000
70,000
390
270
2
750
200,000
140,000
780
550
3
1,125
300,000
210,000
1,170
820
4
1,500
400,000
280,000
1,560
1,090
5
1,875
400,000
280,000
1,560
1,090
6
2,250
400,000
280,000
1,560
1,090
7
2,625
400,000
280,000
1,560
1,090
8
3,000
400,000
280,000
1,560
1,090
16
6,000
900,000
800,000
6,240
3,120
24
9,000
900,000
800,000
9,360
4,680
Configure your instance to maximize performance
To reach the stated performance levels, you must configure your compute instance
as follows:
Attach the Local SSD disks with the NVMe interface. Disks attached using the
SCSI interface have lower performance.
The following machine types also require a minimum number of vCPUs to reach
these maximums:
N2 ,
N2D ,
or A2 machine types
require at least 24 vCPUs.
N1 machine types
require at least 32 vCPUs.
If your instance uses a custom Linux image, then the image must use version
4.14.68 or later of the Linux kernel. If you use the public images provided by
Compute Engine, then you don't have to take any further action.
For additional instance and disk configuration settings that can improve Local
SSD performance, see
Optimizing Local SSD performance .
For more information about selecting a disk interface,
see Choose a disk interface .
Local SSD data persistence
Compute Engine preserves the data on Local SSD disks only in certain
scenarios.
Scenarios where Compute Engine persists Local SSD data
Compute Engine preserves the data on Local SSD disks in the
following events:
You reboot the guest operating system (OS).
You configure your instance for
live migration
and the instance goes through a host maintenance event.
You opt to preserve the Local SSD data when you stop or
suspend the instance
( Preview ).
A compute instance with attached Local SSD disks that supports only
termination and automatic restart undergoes a maintenance event. The
instance restarts in place, preserving the Local SSD data, instead of
migrating to a new host.
Scenarios where Compute Engine might not persist Local SSD data
Data on Local SSD disks might be lost if a
host error occurs on the instance and
Compute Engine can't recover the data on the Local SSD disks attached to
the instance within a specified time.
You can control how much time, if any, is spent attempting to recover
the data with Local SSD recovery timeout .
Recovery is attempted only if your instance is configured to automatically
restart ( automaticRestart ) after the repair operation completes.
If Compute Engine can recover the data on the Local SSD disks, the
instance restarts with all disks attached, and the recovered disk states will be
consistent with the disk states prior to the failure.
If Compute Engine can't recover the data on the Local SSD disks before
the timeout expires, the instance restarts with blank, unformatted Local SSD
disks attached, and the original data is unrecoverable.
Scenarios where Compute Engine doesn't persist Local SSD data
Data on Local SSD disks doesn't persist through the following events:
You shut down the guest OS and force the instance to stop.
You create a Spot VM or
preemptible VM and the VM goes
through the preemption process.
You configure the instance to
stop on host maintenance events
instead of using live migration, and the instance goes through a host
maintenance event.
You misconfigure a Local SSD disk and it becomes unreachable.
You disable project billing, causing the instance to stop.
If automaticRestart isn't configured on your instance.
If Compute Engine can't recover an instance's Local SSD data,
the instance restarts with blank Local SSD disks attached, and the
original data is unrecoverable.
Machine series support
You can use Local SSD disks with the following machine series.
Note: You can only use Local SSD disks with a
bare metal instance
if the machine type name contains both metal and lssd .
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
Select a machine series to display its support for Local SSD.
Machine series
Local SSD support
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
—
G2
G4
H3
—
H4D
M1
M2
—
M3
M4
—
N1
N1+GPU
N2
N2D
N4
—
N4A
—
N4D
—
T2A
—
T2D
—
TPU v2
—
TPU v3
—
TPU v4
—
TPU v5e
—
TPU v5p
—
TPU v6e
—
TPU7x
—
X4
—
Z3
However, there are constraints around how many Local SSD disks you can
attach based on each machine type. For more information, see
Choose a valid number of Local SSD disks .
Local SSD encryption
Compute Engine automatically encrypts your data when it is written to
Local SSD disks. You can't use
customer-supplied encryption keys
with Local SSD disks.
Local SSD data backup
Since you can't back up Local SSD data with disk images, standard snapshots, or
disk clones, Google recommends that you always store valuable data on a
durable storage option .
If you need to preserve the data on a Local SSD disk, attach a Persistent Disk or
Google Cloud Hyperdisk to the instance. After you mount the Persistent Disk or
Hyperdisk copy the data from the Local SSD disk to the newly
attached disk.
Choose a disk interface
To achieve the highest Local SSD performance, you must attach your disks to the
instance with the NVMe interface. Performance is lower if you use the SCSI
interface.
The disk interface you choose also depends on the machine type and OS that your
instance uses. Some of the available machine types in Compute Engine
allow you to choose between NVMe and SCSI interfaces, while others support
either only NVMe or only SCSI. Similarly, some of the public OS images provided
by Compute Engine might support both NVMe and SCSI, or only one of the
two.
Disk interface support by machine type and OS image
The following pages provide more information about available machine types and
supported public images, as well as performance details.
Supported interfaces by machine types : See
Machine series comparison .
In the Choose instance properties to compare list, select
Disk interface type .
OS image : For a list of which public OS images provided by
Compute Engine support SCSI or NVMe, see the
Interfaces tab for each table
in the operating system details documentation.
Considerations for NVMe for custom images
If your instance uses a custom Linux image, you must use version 4.14.68 or
later of the Linux kernel for optimal NVMe performance.
If your instance uses Windows, and your instance was created before May 2022,
you must replace your NVMe driver. For more information, see
Replace the NVMe driver on VMs created before May 2022 .
Considerations for SCSI for custom images
If you have an existing setup that requires using a SCSI interface, consider
using multi-queue SCSI to achieve better performance over the standard SCSI
interface.
If you are using a custom image that you imported, see
Enable multi-queue SCSI .
Choose a valid number of Local SSD disks
Most machine types available on Compute Engine support Local SSD disks.
Some machine types always include a fixed number of Local SSD disks by default,
while others allow you to add specific numbers of disks. You can only add Local
SSD disks when you create the instance. You can't add Local SSD disks to an
instance after you create it.
For C4 bare metal instances, each attached Titanium SSD disk has a
partition size of 3,000 GiB.
For VM instances created using the A4X machine series or storage-optimized
Z3 machine series, each attached Titanium SSD disk has a partition size
of 3,000 GiB.
For bare metal instances created using the A4X Max machine series, each
attached Titanium SSD disk has a partition size of 3,000 GiB.
For Z3 bare metal instances, each attached Titanium SSD disk has a
partition size of 6,000 GiB.
For all other machine series, each Titanium SSD or Local SSD disk attached
to the instance has a partition size of 375 GiB.
Machine types that automatically attach Local SSD disks
The following table lists the machine types that come with Local SSD disks by
default. The table also shows the number of these disks that are attached when
you create the instance.
Machine type
Number of Local SSD disks automatically attached per instance
C4 using Titanium SSD
Only the
-lssd variants of the C4 machine types
support local Titanium SSD.
c4-standard-4-lssd
c4-highmem-4-lssd
1
c4-standard-8-lssd
c4-highmem-8-lssd
1
c4-standard-16-lssd
c4-highmem-16-lssd
2
c4-standard-24-lssd
c4-highmem-24-lssd
4
c4-standard-32-lssd
c4-highmem-32-lssd
5
c4-standard-48-lssd
c4-highmem-48-lssd
8
c4-standard-96-lssd
c4-highmem-96-lssd
16
c4-standard-144-lssd
c4-highmem-144-lssd
24
c4-standard-192-lssd
c4-highmem-192-lssd
32
c4-standard-288-lssd
c4-highmem-288-lssd
48
c4-standard-288-lssd-metal
c4-highmem-288-lssd-metal
6
C4A using Titanium SSD
Only the
-lssd variants of the C4A machine types
support local Titanium SSD.
c4a-standard-4-lssd
c4a-highmem-4-lssd
1
c4a-standard-8-lssd
c4a-highmem-8-lssd
2
c4a-standard-16-lssd
c4a-highmem-16-lssd
4
c4a-standard-32-lssd
c4a-highmem-32-lssd
6
c4a-standard-48-lssd
c4a-highmem-48-lssd
10
c4a-standard-64-lssd
c4a-highmem-64-lssd
14
c4a-standard-72-lssd
c4a-highmem-72-lssd
16
C4D machine types
Only the
-lssd variants of the C4D machine types
support Local SSD.
c4d-standard-8-lssd
c4d-highmem-8-lssd
1
c4d-standard-16-lssd
c4d-highmem-16-lssd
1
c4d-standard-32-lssd
c4d-highmem-32-lssd
2
c4d-standard-48-lssd
c4d-highmem-48-lssd
4
c4d-standard-64-lssd
c4d-highmem-64-lssd
6
c4d-standard-96-lssd
c4d-highmem-96-lssd
8
c4d-standard-192-lssd
c4d-highmem-192-lssd
16
c4d-standard-384-lssd
c4d-highmem-384-lssd
32
C3
Only the
-lssd variants of the C3 machine types
support Local SSD.
c3-standard-4-lssd
1
c3-standard-8-lssd
2
c3-standard-22-lssd
4
c3-standard-44-lssd
8
c3-standard-88-lssd
16
c3-standard-176-lssd
32
C3D
Only the
-lssd variants of the C3D machine types
support Local SSD.
c3d-standard-8-lssd
c3d-highmem-8-lssd
1
c3d-standard-16-lssd
c3d-highmem-16-lssd
1
c3d-standard-30-lssd
c3d-highmem-30-lssd
2
c3d-standard-60-lssd
c3d-highmem-60-lssd
4
c3d-standard-90-lssd
c3d-highmem-90-lssd
8
c3d-standard-180-lssd
c3d-highmem-180-lssd
16
c3d-standard-360-lssd
c3d-highmem-360-lssd
32
H4D using Titanium SSD
h4d-highmem-192-lssd
10
A4X Max
a4x-maxgpu-4g-metal
4
A4X
a4x-highgpu-4g
4
A4
a4-highgpu-8g
32
A3 Ultra
a3-ultragpu-8g
32
A3 Mega
a3-megagpu-8g
16
A3 High
a3-highgpu-1g
2
a3-highgpu-2g
4
a3-highgpu-4g
8
a3-highgpu-8g
16
A3 Edge
a3-edgegpu-8g
16
A2 Ultra
a2-ultragpu-1g
1
a2-ultragpu-2g
2
a2-ultragpu-4g
4
a2-ultragpu-8g
8
Z3 using Titanium SSD
Each disk is 3 TiB in size:
z3-highmem-8-highlssd
z3-highmem-14-standardlssd
1
z3-highmem-16-highlssd
z3-highmem-22-standardlssd
2
z3-highmem-22-highlssd
z3-highmem-44-standardlssd
3
z3-highmem-32-highlssd
4
z3-highmem-44-highlssd
z3-highmem-88-standardlssd
6
z3-highmem-88-highlssd
z3-highmem-176-standardlssd
12
Each disk is 6 TiB in size:
z3-highmem-192-highlssd-metal
12
Machine types that require you to choose a number of Local SSD disks
The machine types listed in the following table don't attach Local SSD disks to
a newly created instance unless you specify how many disks to attach. Because
you can add Local SSD disks only during instance creation, use the information
in this section to determine how many Local SSD disks to attach when you create
an instance.
Machine type
Number of Local SSD disks allowed per instance
N1
Machine types with T4 GPUs
1 to 8, 16
All other machine types
1 to 8, 16, or 24
N2
Machine types with 2 to 10 vCPUs, inclusive
1, 2, 4, 8, 16, or 24
Machine types with 12 to 20 vCPUs, inclusive
2, 4, 8, 16, or 24
Machine types with 22 to 40 vCPUs, inclusive
4, 8, 16, or 24
Machine types with 42 to 80 vCPUs, inclusive
8, 16, or 24
Machine types with 82 to 128 vCPUs, inclusive
16 or 24
N2D
Machine types with 2 to 16 vCPUs, inclusive
1, 2, 4, 8, 16, or 24
Machine types with 32 or 48 vCPUs
2, 4, 8, 16, or 24
Machine types with 64 or 80 vCPUs
4, 8, 16, or 24
Machine types with 96 to 224 vCPUs, inclusive
8, 16, or 24
C2
Machine types with 4 or 8 vCPUs
1, 2, 4, or 8
Machine types with 16 vCPUs
2, 4, or 8
Machine types with 30 vCPUs
4 or 8
Machine types with 60 vCPUs
8
C2D
Machine types with 2 to 16 vCPUs, inclusive
1, 2, 4, 8
Machine types with 32 vCPUs
2, 4, 8
Machine types with 56 vCPUs
4, 8
Machine types with 112 vCPUs
8
A2 Standard
a2-highgpu-1g
1, 2, 4, or 8
a2-highgpu-2g
2, 4, or 8
a2-highgpu-4g
4 or 8
a2-highgpu-8g or a2-megagpu-16g
8
G2
g2-standard-4
1
g2-standard-8
1
g2-standard-12
1
g2-standard-16
1
g2-standard-24
2
g2-standard-32
1
g2-standard-48
4
g2-standard-96
8
G4 using Titanium SSD
g4-standard-6
0
g4-standard-12
1
g4-standard-24
2
g4-standard-48
4
g4-standard-96
8
g4-standard-192
16
g4-standard-384
32
M1
m1-ultramem-40
1 to 5
m1-ultramem-80
1 to 8
m1-megamem-96
Not available
m1-ultramem-160
Not available
M3
m3-ultramem-32
4, 8
m3-megamem-64
4, 8
m3-ultramem-64
4, 8
m3-megamem-128
8
m3-ultramem-128
8
Reserve capacity for Local SSD disks
Reservations provide high assurance of capacity for zone-specific resources,
including Local SSD disks. You can use reservations to ensure that you have
Local SSD disks available when you need to use them for growth or disaster
recovery. For the different methods to reserve zone-specific resources in
Compute Engine, see
Choose a reservation type .
For most machine series, reservations are also useful when you want to
receive committed use discounts (CUDs) for your Local SSD disks .
Pricing
For each Local SSD disk you create, you are billed for the total capacity of
the disk for the lifetime of the instance that it is attached to.
For detailed information about Local SSD pricing and available discounts,
see Local SSD pricing .
For Titanium SSD pricing, see the pricing for the machine series on the
VM instance pricing page. For
example, for the pricing for Titanium SSD attached to a Z3 instance,
see the Z3 instance pricing .
Local SSD disks and Spot VM instances
If you start a Spot VM or preemptible VM
with a Local SSD disk, Compute Engine charges discounted
spot prices
for the Local SSD usage. Local SSD disks that are attached to Spot VMs or
preemptible VMs work like normal Local SSD disks, retain the same
data persistence characteristics ,
and remain attached for the life of the VM.
Compute Engine doesn't charge you for Local SSD disk usage on a
Spot VM or preemptible VM if the VM is preempted within a minute after it
starts running.
Committed use discounts for Local SSD disks
Resource-based commitments provide deep discounts for
Compute Engine resources in return for committing to using the resources
in a specific region for at least one year. You typically purchase commitments
for resources (vCPUs, memory, GPUs, and Local SSD disks) of a specific machine
series. When you use your resources, you receive qualifying resource usage at
discounted prices. To learn more about these discounts, see
Resource-based committed use discounts .
To purchase a commitment with Local SSD disks for most machine series, you
must also reserve the disks and attach the reservations to your commitment.
If you specify any local Titanium SSD disks in your commitment for use with
the following instances, then you don't need attached reservations for those
disks:
C4
C4A
C4D
H4D
Z3
For more information about attaching reservations to
commitments, see
Attach reservations to resource-based commitments .
Use Local SSD disks with an instance
To use a Local SSD disk with a compute instance, you must complete the
following steps:
Add Local SSD disks when you create an instance .
Format and mount Local SSD disks
that you added to your instance.
Device naming on Linux instances
The Linux device names for the disks attached to your instance depend on the
interface that you choose when creating the disks. When you use the lsblk
operating system command to view your disk devices, it displays the prefix
nvme for disks attached with the NVMe interface, and the prefix sd for
disks attached with the SCSI interface.
The ordering of the disk numbers or NVMe controllers is not predictable or
consistent across instance restarts. On the first boot, a disk might be
nvme0n1 (or sda for SCSI). On the second boot, the device name for the same
disk might be nvme2n1 or nvme0n3 (or sdc for SCSI).
When accessing attached disks, you should use the symbolic links created in
/dev/disk/by-id/ instead. These names persist across reboots.
For more information about symlinks, see
Symbolic links for disks attached to an instance .
For more information about device names, see
Device naming on Linux instances .
Stop or suspend a Compute Engine instance with Local SSD disks
When you stop or
suspend an instance ,
Compute Engine discards the data of any
Local SSD disks attached to the instance by default. When you resume the
instance, all Local SSD disks attached to the instance are blank.
Preserve Local SSD data when you stop or suspend an instance
Preview
— Preserving Local SSD data
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
When you stop or suspend a compute instance, you can optionally preserve the
data on the Local SSD disks attached to the instance.
When the stop or suspend operation starts, Compute Engine
performs a managed migration of the Local SSD disk data to durable storage.
When you resume or restart the instance, Compute Engine copies the
preserved data to Local SSD disks attached to the instance. After you resume or
restart the instance, you might have to
remount the Local SSD disk into the file system .
Warning: In the unlikely event that a hardware failure occurs while
Compute Engine is copying the Local SSD data, Compute Engine
attempts to preserve the Local SSD data. However, the data might be lost or
corrupted when you restart or resume the instance if the attempt was
unsuccessful.
You're billed for the storage space used to preserve the Local SSD data until
you restart or resume the instance. The used storage space consumes your
project's Persistent disk standard GB quota .
Limitations
Preserving Local SSD data is in Preview
only and is not covered under the GA terms for Compute Engine.
Preserving Local SSD data isn't available for machine types that use
Titanium SSD.
You can't preserve Local SSD data for disks that have custom device names.
You can only preserve Local SSD data for a disk that has a default
device name ,
for example local-ssd-0 .
You can't preserve the Local SSD data if you stop or suspend an instance
that has more than 32 Local SSD disks
attached.
You can't preserve Local SSD data if you stop or suspend an instance from
the Google Cloud console.
Saving the Local SSD data begins only after the suspend or stop operation
starts.
Restoring the Local SSD data is a background process that begins after the
instance starts. Reading data that isn't already restored triggers an
immediate restoration of the requested data.
If you're using Spot VMs or preemptible VMs and you opt to preserve
Local SSD data during a suspend or stop operation,
then the Local SSD data is lost if Compute Engine preempts the
instance during the stop or suspend operation.
To learn how to preserve Local SSD data when you stop or suspend an instance,
see Stop an instance with Local SSD disks
and
Suspend an instance with Local SSD disks ,
respectively.
Delete Local SSD disks
To remove or delete Local SSD disks, you must delete the compute instance that
the disks are attached to. You can't delete Local SSD disks unless you delete
the instance.
Before you delete a Compute Engine instance
that has Local SSD disks attached, make sure that you migrate any critical data
on the Local SSD disks to a Persistent Disk, Hyperdisk, or to
another instance. Otherwise, the data on the Local SSD disks is
permanently lost.
What's next
Learn how to Create a compute instance with Local SSD disks .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

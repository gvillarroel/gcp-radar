---
title: "Compute Engine release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/release-notes
  title: "Compute Engine release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Resources
Send feedback
Compute Engine release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains the latest release notes for features and updates to the
Compute Engine service.
The following release notes are also available for Compute Engine:
Guest environment release notes :
contains feature rollouts and updates for the guest agent and other
essential software required for your instances to function correctly on
Compute Engine.
The archive : contains older release
notes.
Latest API version: v1
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 09, 2026
Feature
Generally available : Hyperdisk ML disks are supported by the following machine
series:
A3 Ultra
C4D
N4
N4D
Hyperdisk ML offers the highest throughput of all Google Cloud Hyperdisk types,
up to 2 TiB/s (2,097,152 MiB/s). For more information,
see Hyperdisk ML overview .
April 02, 2026
Feature
Preview : To control the use of the deprecated container startup agent, an option for
deploying containers on Compute Engine instances, you can enforce the
constraints/compute.managed.disableVmsWithContainerStartupAgent organization
policy constraint. This constraint prevents the creation of
Compute Engine instances that use the container startup
agent and the gce-container-declaration metadata.
You can also enforce this organization policy in dry-run mode to identify
projects that use the deprecated metadata, without blocking resource creation.
For more information, see Prevent the creation of VMs that use the container
metadata and Migrate containers
deployed on VMs during VM creation .
March 31, 2026
Feature
Generally available : The maximum throughput for a Hyperdisk ML
disk is increased to 2,097,152 MiB/s from 1,200,000 MiB/s.
Hyperdisk ML provides the highest throughput per disk for machine learning and
for workloads that require high read throughput on immutable datasets.
For more information, see About Hyperdisk ML .
March 27, 2026
Security
A vulnerability (CVE-2026-23268) about CrackArmor was discovered and has been addressed.
For more information, see the GCP-2026-015 security bulletin .
March 24, 2026
Feature
Generally available : The maximum throughput for a Hyperdisk Balanced High
Availability disk is increased to 2,400 MiB/s from 1,200 MiB/s.
Hyperdisk Balanced High Availability provides high availability block storage for
mission-critical workloads by synchronously replicating data between two zones
within a region.
For more information, see Hyperdisk Balanced High Availability overview .
March 23, 2026
Feature
Preview : The instance flexibility policy of a managed instance group (MIG)
lets you override the minimum CPU platform and disk definition that is specified
in the MIG's instance template. With these overrides, you can select machine
types that run on different CPU platforms and that have different architectures.
For more information, see About instance flexibility in MIGs .
March 19, 2026
Breaking
Changed : The following operations on the boot disk of a Compute Engine instance
that has a service account attached require the iam.serviceAccounts.actAs permission
on the service account. In the following list, the boot disk of such an instance is
referred to as the source disk .
Creating a standard or archive snapshot of the source disk, including application
consistent snapshots
Cloning the source disk
Creating a machine image of the instance
Creating a custom image of the source disk
Starting asynchronous replication of the source disk to another region
Creating a new disk when you create an instance, if the new disk is
created from an instant snapshot of the source disk
If you have already have the Compute Instance Admin (v1)
( roles/compute.instanceAdmin.v1 ) role and the Service Account User (v1)
( roles/iam.serviceAccountUser ) role on the project, no action is required.
Otherwise, ask your administrator to grant you the iam.serviceAccounts.actAs
permission on the service account. For instructions, see
Manage access to other resources .
March 11, 2026
Issue
To address high-severity kernel vulnerabilities (including CVE-2025-21756 and CVE-2025-38052 ) in Rocky Linux 8 and 9, updates are available for the Compute Engine images maintained by CIQ . If your VM instances use images dated before September 2025 (version v20250912 ), you must take action to ensure you continue to receive security patches.
How to determine if your Compute Engine VMs are affected
You are affected if your VM instance uses a Rocky Linux image from an -optimized-gcp or -optimized-gcp-nvidia family with a version date older than v20250912 (for example, rocky-linux-9-optimized-gcp-v20250807 ). To check your VM's source image, see View VM instance image details . You can view details for these image families in Rocky Linux OS details .
Action required
If your image version is v20250912 or later: Your VM is already configured to use the newer SIG/Cloud Next (SCN) repositories and is receiving security updates. No action is required.
If your image version is older than v20250912 : Your VM is configured to use legacy SIG/Cloud repositories that no longer receive regular kernel updates and won't receive future security patches. While running sudo dnf update applies a one-time patch for the vulnerabilities listed, you must manually migrate the VM to the SCN repositories to receive ongoing updates by following the CIQ migration guide .
March 10, 2026
Feature
When you autoscale a managed instance group (MIG), you can monitor the
configured group size and the size recommended by the autoscaler on a chart. For
more information, see
Monitor group size .
March 05, 2026
Issue
For Red Hat Enterprise Linux (RHEL) operating system, VM Manager provides
vulnerability scanning results based on the latest minor version for each major
version released. If your VM runs an earlier minor version of RHEL, you might get
inaccurate results in the vulnerability reports. For more information about
supported operating systems for vulnerability reports, see supported operating
systems .
March 04, 2026
Feature
Generally available : You can use managed constraints with Organization Policy Service
for centralized, programmatic control of your Compute Engine resources.
Managed constraints replace legacy compute.* constraints and are identifiable
by the compute.managed.* prefix. They also include built-in support for safe
rollout tools like Policy Simulator and dry run mode.
For more information, see
Organization policies for Compute Engine
and
Managed constraints .
March 02, 2026
Feature
Generally available : You can apply compact placement policies to standalone
Flex-start VMs. These policies let you colocate your standalone
Flex-start VMs as close to each other as possible. Applying a
compact placement policy minimizes network hops and improves the performance of
latency-sensitive workloads. For more information, see
About compact placement policies
and
About Flex-start VMs .
February 23, 2026
Feature
Generally available : H4D VMs, designed for high performance computing (HPC)
workloads, are now generally available. Based on 5th generation AMD EPYC Turin
with Cloud RDMA 200 Gbps networking, H4D VMs offer 192 cores (SMT
disabled), up to 1,488 GB of memory, and 3,750 GiB of Local SSD. H4D is
optimized for tightly-coupled applications that scale across multiple nodes.
For more information, see H4D machine series .
February 18, 2026
Feature
Generally available : You can use Hyperdisk Exapools for large-scale
workloads, such as AI and machine learning, that require between 500 TiB and 5
EiB of block storage and more than 100 GiB/s of concurrent performance in a
single zone. With Hyperdisk Exapools, you purchase storage and performance in bulk
and share those resources across as many as 500,000 disks in a single project.
To use Hyperdisk Exapools with your projects, contact your account team
to get access.
To learn more about Hyperdisk Exapools, see
Hyperdisk Exapools overview .
February 17, 2026
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026,
organization policies that use the gcp.managed.allowedMCPServices constraint
won't work, and you can control MCP use with IAM deny policies.
For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Compute Engine,
the Compute Engine MCP server is automatically enabled.
February 12, 2026
Feature
Generally available : You can use instance flexibility to improve resource
availability when creating VMs in bulk in a region. With instance flexibility,
you specify one or more suitable machine types for your workload.
Compute Engine then provisions VMs from the list of machine types based
on capacity and quota availability.
For more information, see
About instance flexibility for VMs created in bulk
and
Create VMs in bulk with instance flexibility .
February 10, 2026
Feature
Preview : You can use consistency groups of instant snapshots to back up a
group of disks at the same point in time, ensuring data consistency across
multiple disks. Consistency groups of instant snapshots offer the following
benefits:
Simultaneous backups : create instant snapshots for all disks in a
consistency group with a single operation.
Bulk restoration : restore multiple disks at once from a consistency group
of instant snapshots.
To learn more, see
About instant snapshots .
February 09, 2026
Feature
You can autoscale a managed instance group (MIG) that
has instance flexibility configured. Autoscaling lets the MIG create or
delete virtual machine instances based on an increase or decrease in load. For
more information, see
About instance flexibility .
February 06, 2026
Change
Expanded coverage for compute flexible committed use discounts (CUDs) is
available to all Cloud Billing accounts. All Cloud Billing accounts have
been automatically migrated to the
new spend-based CUD model and you no longer need to opt
in to benefit from the expanded coverage. For the full list of eligible SKUs
across Compute Engine, GKE, and Cloud Run,
see SKU Groups - Compute Flexible CUD Eligible SKUs .
To learn more about compute flexible CUDs and how they apply to your usage, see
the compute flexible CUDs documentation .
February 05, 2026
Feature
Generally available : You can use Hyperdisk ML with the following machine
series and Cloud TPU versions:
C4A machine series
A4 machine series
A4X machine series
G4 machine series
TPU v5e
TPU v5p
TPU7x
For more information, see About Hyperdisk ML .
January 26, 2026
Feature
Generally available : The N4A machine family is powered by Google's latest
custom-designed Axion processor, built on Arm Neoverse N3 compute core and
powered by Titanium IPU. This machine family has between 1-64 vCPUs with up to
512 GB of memory, and supports Google Cloud Hyperdisk volume storage.
It is available in standard , highmem , highcpu , and custom machine types.
For detailed information, see
General-purpose machines .
See Regions and zones to learn where you can
create N4A VMs.
January 20, 2026
Feature
Generally available : You can create N4, C4, M4, and M3 VM instances in
Bangkok, Thailand asia-southeast3-a,b,c . To learn more about these
machine types, see
General-purpose machines and
Memory-optimized machines .
January 07, 2026
Feature
Generally available : You can view future resource availability before you
create a future reservation request in calendar mode. This action helps increase
the likelihood that Google Cloud approves your request. For more information,
see
View resource future availability .
December 22, 2025
Feature
When you autoscale a regional managed instance group (MIG), you can view the
reasons why the autoscaler adds or removes VMs in your MIG. Autoscaling
reasons were previously available only for zonal MIGs. For more information, see
Viewing autoscaler logs .
December 19, 2025
Feature
Public Preview : The C4A VM family now offers a c4a-highmem-96-metal bare
metal instance. This machine type has 96 vCPUs and 768 GB of DDR5 memory,
Titanium I/O offload processing ,
and supports Hyperdisk Balanced, Hyperdisk Extreme, and Hyperdisk ML storage volumes.
This bare metal instance is offered
in select regions and zones .
For more information, see
C4A machine series .
Feature
Generally available : The G4 accelerator-optimized machine series supports
the flex-start provisioning model. When you specify the flex-start provisioning
model for your G4 virtual machine (VM) instances, you receive a discount up to
50% for vCPUs, memory, and GPUs. Flex-start is ideal for fault-tolerant or
temporary workloads that can benefit from lower costs by having a flexible start
time. For more information, see
About Flex-start VMs .
December 17, 2025
Feature
Generally available : You can create future reservation requests in calendar
mode to reserve GPU, TPU, or H4D resources for your virtual machine (VM)
instances. Use these requests to obtain high-demand resources for creating VMs
that you plan to run for up to 90 days, such as when you want to run model
pre-training, model fine-tuning, or high performance computing (HPC) jobs. For
more information, see
About future reservation requests in calendar mode .
December 16, 2025
Feature
Sole-tenancy is now supported for the following GPU machine types:
A2 Ultra, A2 Mega, and A2 High machine types.
You can provision sole-tenant nodes using the following node types:
a2-ultragpu-node-96-1360-lssd
a2-megagpu-node-96-1360
a2-highgpu-node-96-680
A3 Mega and A3 High machine types.
You can provision sole-tenant nodes using the following node types:
a3-megagpu-node-208-1872-lssd
a3-highgpu-node-208-1872-lssd
For more information, see Sole-tenant nodes .
December 14, 2025
Feature
Instance flexibility in regional managed instance
groups (MIGs) support the ANY target distribution shape. Selecting this shape
lets you maximize resource obtainability and the utilization of unused zonal
reservations. For more information, see
About instance flexibility in MIGs .
December 12, 2025
Feature
The memory-optimized X4 machine series offers additional bare metal machine
types with 6 TB, 8 TB, and 12 TB of memory. For more information,
see X4 machine series .
Issue
Workloads on A4 VMs might experience interruptions due to a firmware issue
for NVIDIA B200 GPUs. To help prevent the issue, we recommend resetting the GPUs
on A4 VMs at least once every 60 days. For more information, see the
known issue .
December 10, 2025
Feature
Generally available : The general purpose C4 machine series now supports the
following machine types on Intel's Xeon 6 processor (Granite Rapids):
c4-standard-288-lssd-metal
c4-highmem-288-lssd-metal
To learn more, see the C4 machine series .
For more information, see
Machine types that automatically attach Local SSD disks
and
Bare metal instances on Compute Engine .
Fixed
If you clone a source disk that's encrypted with a customer-supplied encryption
key or customer-managed encryption key, you must use the same key to encrypt the
clone.
For more information, see Create a clone of an encrypted source disk .
Feature
Preview : You can use the Compute Engine remote Model Context Protocol (MCP)
server to let LLM agents manage
Compute Engine resources, such as VMs and disks. This server provides a standardized interface for AI applications to securely and reliably interact with
Compute Engine resources using natural language or autonomous workflows.
December 08, 2025
Feature
Preview : VM Extension Manager lets you manage Compute Engine
guest agent extensions on your virtual machines (VMs). You can use VM Extension Manager to install and manage extensions, such as Ops Agent and Agent for SAP, on your
Compute Engine VMs at scale, without connecting to each VM.
Use VM Extension Manager to create policies that install extensions on
your VMs. You can install extensions based on a specific criteria, such as VM labels,
for both existing and new VMs that match the criteria. VM Extension Manager
automates the lifecycle of extensions across
your entire fleet of VMs and monitors their health status while they are running.
For more information, see the following:
About VM Extension Manager
Install VM extensions by creating extension policies
Manage VM extensions by using extension policies
November 26, 2025
Issue
C4 machine type virtual machine (VM) instances running on sole tenant nodes
might encounter unexpected VM terminations due to host errors or VM
creation failures. For more information, see
known issues .
November 24, 2025
Feature
Public Preview : You can now access the VM metadata server using IPv6 connectivity
from single-stack IPv6 VM instances. For more information, see
About VM metadata .
November 19, 2025
Fixed
For the Windows operating system, gVNIC driver version 2.0.15 is
available.
This version fixes the handling for highly fragmented TSO packets. Without this
updated driver version, you might experience intermittent network
connectivity loss on Windows VMs that use any Compute Engine machine types.
The affected versions are 2.0.7 - 2.0.14.
Symptoms include ARP resolution failures and an inability to reach local
subnet IPs, including the metadata server. We recommend upgrading your Windows
instances to this latest version of the driver. To learn about upgrading, read
the Windows components
section of the Guest environment documentation.
November 18, 2025
Feature
Preview : The general purpose C4 machine series now supports the following
machine types on Intel's Xeon 6 processor (Granite Rapids):
c4-standard-288-lssd-metal
c4-highmem-288-lssd-metal
To learn more, see the C4 machine series .
For more information, see
Machine types that automatically attach Local SSD disks
and
Bare metal instances on Compute Engine .
Feature
You can autoscale a regional managed instance group
(MIG) that has the target distribution shape set to ANY or ANY_SINGLE_ZONE .
These shapes are particularly beneficial for batch workloads.
For more information about target distribution shapes, see
Regional MIG target distribution shape .
November 13, 2025
Feature
Preview : Future reservation requests in calendar mode support reserving
capacity for a3-megagpu-8g and a3-highgpu-8g machine types. Use future
reservation requests in calendar mode to obtain resources for running model
pre-training, model fine-tuning, simulation, and inference workloads. For more
information, see
About future reservation requests in calendar mode .
November 10, 2025
Issue
The Windows guest agent identifies administrator accounts and groups using
string matching. Therefore, credential management features only function
correctly when you use English language names for user accounts and groups,
for example, Administrators . If you use non-English language names, credential
management features such as generating or resetting passwords might not function
as expected. For more information about managing Windows user accounts, see
Manage accounts and credentials on Windows VMs and
Known issues for Windows VM instances .
Feature
Generally available : Two new features that provide better observability for
Compute Engine reservations and deeper insights into their capacity usage and
costs:
A new consumedReservation field in the VM instance details showing the
full resource name of the consumed reservation, providing reservation
consumption status on VMs and better visibility for resource management and
troubleshooting.
Two new system labels in the BigQuery billing export for instances
consuming a reservation and the unused portion of a reservation, providing
more detailed cost analysis:
compute.googleapis.com/reservation_name : the short name of the
Compute Engine reservation.
compute.googleapis.com/reservation_project_id : the Project ID owning
the Compute Engine reservation.
For more information, see the following:
View consumption history for a given instance .
Analyze usage distribution per project for a shared reservation .
List all the instances consuming a reservation .
November 07, 2025
Feature
Generally available : N4D VMs are powered by the fifth generation AMD EPYC
Turin processor and
Titanium I/O offload processing .
N4D machine types have up to 96 vCPUs and up to 768 GB of DDR5 memory,
and a max-boost frequency of 4.1 GHz. They are offered in predefined and
custom machine types and are available in select
regions and zones .
N4D VM instances support standard networking with up to 50 Gbps of
networking bandwidth and Hyperdisk storage. For more information, see
General-purpose machine types .
November 06, 2025
Feature
Preview : N4A VMs are powered by Google's next-generation Axion processor, which is built on the Arm Neoverse N3 platform. N4A includes machine types with up to 64 vCPUs and 512 GB of DDR5 memory. N4A is available as standard, high-mem, high-cpu, and custom machine types with extended memory and up to 50 Gbps of standard networking. These machine types are available in limited regions and zones . For more information, see N4A machine series .
To access these VMs, complete this access request form , or speak to your account team.
November 04, 2025
Feature
Public preview : You can configure a regional managed instance group (MIG) to
repair a VM in an alternate zone when the MIG can't repair the VM in its
original zone. Repairing a VM in an alternate zone can improve your
application's resiliency and resource obtainability. For more information, see
Repair a VM in an alternate zone .
Feature
Generally available : You can verify which reservation a VM consumes and
view a list of VMs that consume a reservation. For more information,
see View reservation consumption .
November 02, 2025
Feature
If you need to synchronize time with high accuracy and monitor its accuracy for
your Compute Engine instances, you can sync your VM clock with its host
server clock using chrony and ptp_kvm . This configuration provides accuracy
within 1 ms for supported setups. For more information, see
Configure accurate time for Compute Engine VMs .
October 30, 2025
Feature
Generally available : Dynamic NICs let you add or remove network interfaces
to or from an instance without restarting or recreating the instance.
You can also use Dynamic NICs when you need more network interfaces. The
maximum number of vNICs for most machine types in Google Cloud is 10; however,
you can configure up to 16 total interfaces by using Dynamic NICs.
For more information, see the following:
Multiple network interfaces overview
Create VM instances with multiple network interfaces
Add Dynamic NICs to an instance
October 28, 2025
Feature
Generally available : You can create managed instance groups (MIGs) that consist
of IPv6-only VM instances.
For more information, see
Basic scenarios for creating managed instance groups (MIGs) .
October 21, 2025
Feature
Generally available : Future reservations let you reserve capacity for a
specific date up to one year in advance. For more information, see
About future reservation requests .
Change
As part of the consolidation of CIQ's kernel trees, the kernel dist-tag that supports the Rocky Linux Optimized and Accelerator images on Compute Engine is changing from elX_ycld_next to elX_y_ciq . There are no changes to Secure Boot or GPG signing keys.
For example, 6.12.0-55.32.1.el10_0cld_next.2.1 changes to 6.12.0-55.39.1.el10_0_ciq.2.1 , where ciq replaces the cld_next tag.
This change affects the Rocky Linux 8, 9, and 10 optimized and accelerator images in an upcoming kernel update over the next month. The major version 8 and 9 kernels now include FIPS 140-3 patches as part of CIQ's ongoing FIPS 140-3 validation efforts for Rocky Linux. These patches have no effect if FIPS mode is not enabled. There are no code changes to the major version 10 kernel.
You can find the kernel source tree in the CIQ kernel-src-tree GitHub repository.
October 20, 2025
Security
A vulnerability affecting AMD Zen 5 processors (Turin) is being addressed. For more information, see the
GCP-2025-058 security bulletin .
Feature
Generally Available : The G4
accelerator-optimized machine series
is designed for graphics-intensive workloads such as NVIDIA Omniverse simulations,
video transcoding, and virtual desktops. The G4 machine series also provides a
cost-effective solution for single-host inference and model tuning.
The G4 machine series is now available in the following regions and zones:
APAC
Jurong West, Singapore: asia-southeast1-b
Europe
Eemshaven, Netherlands: europe-west4-a
North America
Council Bluffs, Iowa: us-central1-b
Ashburn, Virginia: us-east4-c
Columbus, Ohio: us-east5-c
To get started with G4 machine types, see
Create a G2 or G4 instance .
October 18, 2025
Feature
Generally Available : You can use the Compute Engine alpha API at the
project level through a self-service process. By enabling the alpha API, you can
use the Google Cloud console, Google Cloud CLI, API, and Terraform to view and manage
preview features. For more information, see Use the Compute Engine alpha API .
October 17, 2025
Feature
Generally Available : You can use the Compute Engine alpha API at the
project level through a self-service process. By enabling the alpha API, you can
use the Google Cloud console, Google Cloud CLI, API, and Terraform to view and manage
preview features. For more information, see Use the Compute Engine alpha API .
October 16, 2025
Change
Starting with SUSE Linux Enterprise Server (SLES) 16, including variants for SAP, the default file system for the root partition ( / ) is Btrfs , which replaces the previous default of XFS. For more information, see File systems in SLES in the SUSE documentation.
October 06, 2025
Change
The Google Cloud optimized ( -optimized-gcp ) and accelerated
( optimized-gcp-nvidia-* ) versions of the Rocky Linux images include the
CIQ SIG/Cloud Next repository ,
which provides a cloud-optimized kernel. The accelerated
images also include the CIQ SIG/Cloud Next Nonfree
repository ,
which provides proprietary GPU drivers for the cloud-optimized kernel.
This update applies to images created on or after September 12, 2025.
For more information about Rocky Linux OS images, see Rocky
Linux on
the operating system details page.
September 22, 2025
Feature
Generally available : You can create and use Flex-start VMs. Flex-start VMs are virtual machine (VM) instances that can run for up to seven days, and that use the flex-start provisioning model. This model provisions resources from a secure pool of capacity, increasing your chances of obtaining high-demand resources like GPUs. These features make Flex-start VMs suitable for short-duration workloads that can start at any time, such as the following:
Small model pre-training
Model fine-tuning
High performance computing (HPC) simulation
Batch inference
You can create standalone Flex-start VMs, or add Flex-start VMs all at once to a managed instance group (MIG) by using resize requests. Based on the machine type that your Flex-start VMs use, you get discounts for vCPUs, memory, and any attached GPUs.
For more information, see About Flex-start VMs .
September 17, 2025
Change
Compute Engine enforces limits to the total baseline performance that a project's Hyperdisk Balanced and Hyperdisk Balanced High Availability disks that are in the same zone can consume at the same time. The aggregate baseline performance limit is 50 GiB/s of throughput and 500,000 IOPS, and it only applies to baseline performance. For a detailed explanation, see Concurrent consumption limits for baseline performance .
September 15, 2025
Feature
Generally available : You can decrease a Compute Engine instance shutdown time by skipping the guest OS shutdown. This action speeds up an instance stop or deletion operation to release resources and quota faster. However, as abrupt guest OS shutdowns may cause data loss or corrupt file system data, we recommend that you skip a guest OS shutdown only when you delete instances, or when you stop instances which boot disks you don't plan to reuse. For more information, see Decrease Compute Engine instances shutdown time .
September 12, 2025
Feature
Preview : H4D VMs, designed for high performance computing (HPC) workloads, are now in preview. Based on 5th generation AMD EPYC Turin with Cloud RDMA 200 Gbps networking, H4D VMs offer 192 cores (SMT disabled), up to 1,488 GB of memory, and 3,750 GiB of Local SSD. H4D is optimized for tightly-coupled applications that scale across multiple nodes and offers RDMA-enabled 200 Gbps networking.
For more information, see H4D machine series .
September 10, 2025
Feature
Generally available : The accelerator-optimized A4X machine type , the first GPU VM to run on Arm, is available on Compute Engine. The A4X machine series has the NVIDIA GB200 Grace Blackwell Superchips attached and runs on the NVIDIA GB200 NVL72 platform. Use this machine type to run your large artificial intelligence (AI) models, machine learning (ML), and high performance computing (HPC) workloads. The A4X machine type is currently available in the us-central1-a zone.
September 09, 2025
Feature
Preview: Eight new organization policy constraints are available to help you
enforce security best practices for Compute Engine virtual machine (VM)
instances.
These managed constraints
simplify governance for common security scenarios and integrate with safe
rollout tools like
dry-run
and
simulation ,
letting you test their impact before enforcement.
The new constraints are as follows:
compute.managed.disableNestedVirtualization
compute.managed.disableSerialPortAccess
compute.managed.disableSerialPortLogging
compute.managed.disallowGlobalDns
compute.managed.requireOsConfig
compute.managed.requireOsLogin
compute.managed.vmCanIpForward
compute.managed.vmExternalIpAccess
These constraints can evaluate metadata values at the VM instance, project, or
zonal level . For more information about these managed constraints, see Managed
Constraints in the Resource Manager documentation.
Change
Hyperdisk Balanced High Availability disks are available in all regions.
Hyperdisk Balanced High Availability disks synchronously replicate disk data from one zone to another. Cross-zonal replication provides data protection in the unlikely event of a zonal outage. For more information, see About Hyperdisk Balanced High Availability .
September 04, 2025
Feature
Hyperdisk Balanced High Availability (Hyperdisk Balanced HA) volumes attached to C3 instances have increased performance limits for several C3 machine types. The new limits for the updated machine types are as follows:
c3-*-8 : 50,000 IOPS and 800 MiB/s of throughput
c3-*-22 : 120,000 IOPS and 1,800 MiB/s of throughput
c3-*-44 : 160,000 IOPS and 2,400 MiB/s of throughput
c3-*-88 : 160,000 IOPS and 4,800 MiB/s of throughput
c3-*-176 : 160,000 IOPS and 10,000 MiB/s of throughput
c3-*-192 : 160,000 IOPS and 10,000 MiB/s of throughput
For more information, see Performance limits when attached to an instance .
Feature
Generally available : Windows OS images have been updated with a new version of the gVNIC driver. Third generation and later compute instances that use these updated Windows OS images support up to 200 Gbps networking bandwidth and Jumbo frames .
August 28, 2025
Feature
Generally available: M4 memory-optimized hypermem VMs are now generally available. These smaller machine types expand the memory-optimized family to allow for greater flexibility in matching your specific application needs. Hypermem VMs have a GB/vCPU ratio of 15.5:1 and are offered in the following sizes:
m4-hypermem-16
m4-hypermem-32
m4-hypermem-64
See the Regions and zones page to learn where you can create M4 VMs.
August 26, 2025
Feature
Generally available : You can create instances that use only IPv6 IP addresses. For more information, see Create an IPv6-only instance .
August 20, 2025
Feature
You can use instant snapshots to back up Extreme Persistent Disk volumes. For more information, see About instant snapshots .
August 14, 2025
Feature
Public Preview : You can now access the Compute Engine alpha API at the project level through a self-service process. By enabling the alpha API, you can use the Google Cloud console, gcloud CLI, API, and Terraform to view and manage Preview features. For more information, see Use the Compute Engine alpha API .
August 13, 2025
Feature
Generally available: License Manager is now generally available. License Manager lets you subscribe, manage, and track your third-party license usage on Google Cloud. As an administrator, you can use License Manager to offer per-user licensing products, like Microsoft Office, to your users with no long-term commitments and no overhead of managing compliance.
For more information, see About License Manager .
August 11, 2025
Feature
Preview : The
G4 accelerator-optimized machine series
is designed for graphics-intensive workloads such as NVIDIA Omniverse
simulations, video transcoding, and virtual desktops. The G4 machine series also
provides a cost-effective solution for single-host inference and model tuning.
Powered by the 5th Generation AMD EPYC Turin CPU platform and featuring
NVIDIA RTX PRO 6000 Blackwell Server Edition
GPUs, the G4 machine series offer significant performance improvements over the
previous G2 machine series. For available G4
regions and zones, see
GPU regions and zones .
To get started with G4 machine types, contact your Google account team.
Feature
You can attach up to 128 instances to the same Hyperdisk ML volume whose size is between 2 TiB and 16 TiB. The previous limit was 30. For more information, see Share a disk between instances .
August 05, 2025
Feature
For Hyperdisk Throughput, the maximum IOPS for a single volume has increased from 600 MiB/s to 2,400 MiB/s. The maximum IOPS for a single volume has increased from 2,400 IOPS to 9,600 IOPS. Hyperdisk Throughput volumes are designed for cost-sensitive workloads, analytics workloads, and workloads that have sequential I/O and large block sizes. For more information, see About Hyperdisk Throughput .
Feature
Generally Available : The storage-optimized Z3 machine series offers a bare metal ( z3-highmem-192-highlssd-metal ) machine type with 192 vCPUs, 1,536 GB of memory, and 72 TiB of Local SSD storage.
Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. Z3 uses Titanium to deliver more compute and memory resources for your workloads by offloading network and I/O processing from the host hardware. To learn more, see Z3 machine series . For information about bare metal instances, including regional availability, see Bare metal instances on Compute Engine .
Deprecated
The Compute Engine feature that deploys containers on VMs during VM creation is deprecated. For more information about the alternative solutions for running containers on VMs and MIGs, see Compute Engine container startup agent deprecation .
July 30, 2025
Feature
Generally available : The general purpose C4 machine series now supports the following machine types on Intel's Xeon 6 processor (Granite Rapids):
C4 VMs with Titanium Local SSD attached using new machine types:
c4-standard-*-lssd
c4-highmem-*-lssd
New bare metal machine types:
c4-standard-288-metal
c4-highmem-288-metal
C4 standard , highmem , and highcpu VMs with 144 and 288 vCPUs
To learn more, see the C4 machine series .
For more information, about the attached Local SSD disks, see Machine types that automatically attach Local SSD disks .
July 25, 2025
Change
Hyperdisk Extreme is available in all regions and zones.
For more information, see About Hyperdisk Extreme .
Change
You can now resize Hyperdisk Balanced volumes twice within a 4-hour window. For more information, see Capacity changes .
July 24, 2025
Feature
Generally available : The general-purpose C4 machine series now supports Hyperdisk Balanced High Availability. For more information, see Supported disk types for C4 .
July 23, 2025
Change
When a regional Persistent Disk volume is fully replicated, Compute Engine now refreshes its replica recovery checkpoint every 15 minutes.
Learn more about Regional Persistent Disk replica recovery checkpoints and how to use checkpoints to recover a degraded disk .
July 22, 2025
Feature
Preview : Multi-writer support for Hyperdisk Extreme disks. You can give up to 16 instances simultaneous read-write access to the same disk. For more information, see Share disks between instances .
July 21, 2025
Feature
Generally available : The general-purpose C4D machine series offers the following bare metal machine types:
c4d-standard-384-metal
c4d-highcpu-384-metal
c4d-highmem-384-metal
This is the first machine series to offer AMD-based bare metal instances. Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. C4D uses Titanium to deliver more compute and memory resources for your workloads by offloading network and I/O processing from the host hardware. To learn more, see C4D machine series . For information about bare metal instances, including regional availability, see Bare metal instances on Compute Engine .
July 18, 2025
Feature
Generally available : You can create instant and standard snapshots from Hyperdisk volumes in multi-writer mode. You can also clone Hyperdisk volumes in multi-writer mode.
For more information, see Share disks between instances .
July 15, 2025
Change
Compute flexible committed use discounts (CUDs) offer expanded coverage by
supporting the following resources and services:
Memory-optimized M1, M2, M3, and M4 VMs
Compute-optimized H3 instances
Cloud Run services with request-based billing
Cloud Run Functions
To receive the expanded coverage for flexible CUDs, you must opt in to the new
spend-based CUD model. Cloud Billing accounts that meet specific criteria are
automatically opted into the new model. On January 21, 2026, all remaining
accounts will automatically migrate to the new model. You can opt in before that
date to start receiving the expanded coverage. To learn more about the new model
and the opt-in details, see
Spend-based CUDs program improvements .
To learn more about this change and how your flexible CUDs apply after you opt
in, see
Compute flexible CUDs .
July 02, 2025
Feature
Preview : You can reserve GPU VMs that use A4 and A3 Ultra machine types by using future reservations in calendar mode. This feature lets you reserve up to 80 GPU VMs for up to 90 days to obtain capacity for the following workloads:
Model pre-training jobs
Model fine-tuning jobs
High performance computing (HPC) simulation workloads
Short-term expected increases in inference workloads
For more information, see About future reservation requests in calendar mode .
Feature
Generally available : You can create Z3 VMs using smaller machine types, ranging in size from 14 to 88 vCPUs. Also, Z3 now offers -standardlssd and -highlssd predefined machine types. These new machine types have different amounts of Local SSD capacity per vCPU.
When you use Local SSD disks with Z3 VMs, you can receive committed use discounts (CUDs) without needing to attach reservations to your commitments .
For more information, see Storage-optimized machines .
Feature
Preview : The general purpose C4 machine series now supports the following machine types on Intel's Xeon 6 processor (Granite Rapids):
C4 VMs with Titanium Local SSD attached using two new machine types:
c4-standard-*-lssd
c4-highmem-*-lssd
Three new bare metal machine types:
c4-standard-288-metal
c4-highcpu-288-metal
c4-highmem-288-metal
C4 standard , highmem , and highcpu VMs with 144 and 288 vCPUs
To learn more, see the C4 machine series .
For more information, about the attached Local SSD disks, see Machine types that automatically attach Local SSD disks .
June 30, 2025
Feature
Generally available : You can now modify licenses attached to your disks. Previously, licenses on disk resources were immutable. You had to delete and recreate disks, or engage our support team to change licenses.
This feature provides greater flexibility for managing your disk licenses. You can now:
Append, remove, replace, and view the history of license updates.
Perform in-place license upgrades, such as Ubuntu to Ubuntu Pro , using the gcloud CLI and REST.
Switch from PAYG to BYOS billing models.
Review license changes and restrictions and append a RHEL ELS license to a newer version.
For more information on how to manage licenses, see Manage licenses .
June 27, 2025
Feature
Generally available : You can specify a custom ephemeral external IPv6 address when creating an instance. For more information, see Create instances that use IPv6 addresses .
June 13, 2025
Feature
Generally available : General purpose C4D machine types , powered by the fifth generation AMD EPYC processors (Turin) and Google Titanium, are generally available.
C4D is designed to run mission-critical workloads including web app and game servers, AI inference, web serving, video streaming, and data centric applications like analytics, relational, and in-memory databases.
C4D is available in standard , highmem , and highcpu machine types and supports only Google Cloud Hyperdisk storage and Titanium SSD. To learn more about C4D, refer to the C4D release blog . For details about where you can create C4D instances, see the Regions and zones page.
Feature
Preview : Dynamic NICs let you add or remove network interfaces to or from an instance without having to restart or recreate the instance.
You can also use Dynamic NICs when you need more network interfaces. The maximum number of vNICs for most machine types in Google Cloud is 10; however, you can configure up to 16 total interfaces by using Dynamic NICs.
For more information, see the following:
Multiple network interfaces overview
Create VM instances with multiple network interfaces
Add Dynamic NICs to an instance
June 11, 2025
Feature
Preview : The storage-optimized Z3 machine series offers a bare metal ( -metal ) machine type with 192 vCPUs. Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. To learn more, see Z3 machine series . For information about bare metal instances, including regional availability, see Bare metal instances on Compute Engine .
June 10, 2025
Security
A vulnerability (CVE-2025-2884) affecting Shielded VMs using virtual Trusted Platform Module (vTPM) was discovered and is being addressed. For more information, see the GCP-2025-031 security bulletin .
June 06, 2025
Change
Generally available : The Security Risk Overview dashboard for Compute Engine is generally available. In addition, it provides a Top CVE findings table that lists the most severe CVEs that affect your Compute Engine instances.
June 04, 2025
Feature
Preview : OS Login now supports connections from SSH certificates in addition to SSH keys. For more information, see Set up OS Login to require SSH certificates for SSH connections .
June 03, 2025
Feature
Preview : You can enable your project to send HTTP requests to a Compute Engine feature alpha URI. This action lets you test and develop with experimental features in the alpha stage using REST. For more information, see Use the Compute Engine API in alpha .
June 02, 2025
Feature
Preview : The general-purpose C4D machine series offers bare metal ( -metal ) machine types with 384 vCPUs. Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. To learn more, see C4D machine series . For information about bare metal instances, including regional availability, see Bare metal instances on Compute Engine .
May 26, 2025
Feature
Generally Available : A3 Ultra accelerator-optimized machine types are now available in the following additional regions and zones:
APAC
Mumbai, India: asia-south1-b
Delhi, India: asia-south2-c
Europe:
St. Ghislain, Belgium: europe-west1-b
Eemshaven, Netherlands: europe-west4-b
North America:
Council Bluffs, Iowa: us-central1-b
Moncks Corner, South Carolina: us-east1-d
Ashburn, Virginia,: us-east4-b
The Dalles, Oregon: us-west1-c
Dallas, Texas: us-south1-b
For a complete list of A3 Ultra regions and zones, see GPU regions and zones .
May 23, 2025
Feature
Generally available : Resource-based committed use discounts (CUDs) are available for M4 machine types that come with 6 TB of memory. Learn more about how to purchase commitments for M4 6 TB machine types .
May 22, 2025
Feature
Public preview : The general-purpose C4D machine series offers Local SSD ( -lssd ) machine types with up to 12 TiB of Titanium SSD. Learn more about C4D machine series and the available C4D Local SSD machine types .
May 20, 2025
Feature
Preview : You can use future reservation requests in calendar mode to reserve capacity for creating VMs with TPUs attached. This feature helps you obtain and reserve high-demand resources to run generative artificial intelligence (AI), machine learning (ML), or high performance computing (HPC) workloads.
For more information, see the following pages:
About future reservation requests in calendar mode
Create a future reservation request in calendar mode
Feature
Preview: You can edit your instance's configuration to change the Backup and DR backup plan that is applied to that instance. Backup and DR backup plans let you create rule-based, indelible backups of your Compute Engine instances and store those backups in a secure and isolated storage locations. By changing your instance's backup plan, you can adapt your data protection strategy to match your changing operational requirements.
For more information, see Change your instance's backup plan . To learn more about Backup and DR backup plans, see Backup and DR Service overview .
May 15, 2025
Feature
Public Preview : You can use the flex-start provisioning model to increase your chances of obtaining GPUs for short-duration workloads. You can use flex-start with resize requests in managed instance groups (MIGs).
For more information, see the following:
About resize requests in a MIG
Compute Engine instances provisioning models
May 13, 2025
Security
Google has applied fixes for a vulnerability (CVE-2024-45332) affecting the following Intel processors: CascadeLake, Ice Lake XeonSP, Ice Lake XeonD, Sapphire Rapids and Emerald Rapids. For more information, see the GCP-2025-025 security bulletin .
May 12, 2025
Security
A vulnerability (CVE-2024-28956) affecting Intel Cascade Lake processors and Intel Ice Lake processors was discovered and is being addressed. For more information, see the GCP-2025-024 security bulletin .
Feature
Public preview : In a managed instance group (MIG), you can use a health check to monitor your application health without triggering repairs of an unhealthy VM, if the application fails the health check. You can prevent the MIG from repairing an unhealthy VM by turning off autohealing. For more information, see Turn off repairs in a MIG .
May 09, 2025
Feature
Public preview: A Security Risk Overview dashboard for Compute Engine , available in the Google Cloud console, shows the top Security Command Center findings that affect your Compute Engine resources.
April 28, 2025
Feature
Generally available: The Memory-optimized machine family has added two new M4 machine types:
m4-megamem-28
m4-ultramem-224
The m4-megamem-28 offers 28 vCPUs with 372 GB of memory. The m4-ultramem-224 offers 224 vCPUs with 5,952 GB of memory.
Feature
Public preview : Resize request in a managed instance group (MIG) lets you specify the name of the VMs to create all at once. This feature helps if your orchestration mechanism or workload requires specific VM naming. For more information, see About resize requests in a MIG .
April 25, 2025
Feature
Public Preview: License Manager lets you subscribe, manage, and track your third-party license usage on Google Cloud. As an administrator, you can use License Manager to offer per-user licensing products, like Microsoft Office, to your users with no long-term commitments and no overhead of managing compliance.
For more information, see About License Manager .
April 22, 2025
Feature
Public Preview : General purpose C4D machine types have reached Public Preview. C4D is powered by the fifth generation AMD EPYC processor (Turin) and Google Titanium.
C4D is designed to run mission critical workloads including web app and game servers, AI inference, web serving, video streaming, and data centric applications like analytics, relational, and in-memory databases.
C4D is available in standard , highmem , and highcpu machine types and only supports Google Cloud Hyperdisk storage.
To learn where to create C4D instances, see the Regions and zones page.
April 21, 2025
Feature
Generally available : Compute flexible committed use discounts (CUDs) are available for the sole-tenancy premium that you pay for eligible sole-tenant node types. Flexible CUDs add flexibility to your Compute Engine spending capabilities by eliminating the need to restrict your commitments to a single project, region, or machine series.
For more information, see Compute flexible CUDs .
April 04, 2025
Deprecated
On June 30th, 2024, CentOS 7 will reach end of support and the images marked deprecated on Google Cloud. If you use CentOS 7 images in your project, review CentOS end of support guidance .
Deprecated
On June, 30, 2024, Red Hat Enterprise Linux (RHEL) 7 will reach end of support and the images marked deprecated on Google Cloud. If you use RHEL 7 images in your project, review RHEL end of support .
April 02, 2025
Feature
Generally available : You can manage OS policy assignments across projects and zones at scale in large organizations using the OS policy orchestrator feature in VM Manager. OS policy assignment was previously available only for zonal resources in a project. For more information, see About OS Policy Orchestrator .
March 31, 2025
Deprecated
Compute Engine provides the interactive serial console for troubleshooting malfunctioning instances. The serial console SSH key endpoint is deprecated and a new serial SSH key endpoint is available. For more information, see Serial console SSH host key endpoint deprecation .
March 26, 2025
Feature
Generally available : You can use instant snapshots to take in-place backups of the following types of disks:
Hyperdisk Balanced
Hyperdisk Balanced High Availability
Hyperdisk Extreme
Instant snapshots are ideal for rapid data restoration only within the same location as the source disk. You can use an instant snapshot to create a new disk in under a minute. For more information, see About instant snapshots .
Feature
Generally available : You can specify a custom ephemeral internal IPv6 address when creating an instance. For more information, see Create instances that use IPv6 addresses .
Feature
Generally available : Asynchronous Replication is now generally available for Hyperdisk Balanced, Hyperdisk Balanced High Availability, and Hyperdisk Extreme disks. Asynchronous Replication provides low-RPO and low-RTO block storage replication for cross-region disaster recovery. For more information, see About Asynchronous Replication .
March 25, 2025
Fixed
Resolved: Fixed the issue that caused Persistent Disks attached to VMs with n2d-standard-64 machine types to inconsistently reach the maximum performance limit of 100,000 IOPS.
For more information, see Known issues .
March 24, 2025
Feature
Generally available : Multi-writer support for Hyperdisk Balanced High Availability disks. You can give up to 8 VMs, across two zones, simultaneous read-write access to the same disk. For more information, see Share disks between instances .
March 21, 2025
Feature
Generally available : Resource-based committed use discounts (CUDs) are available for licenses of RHEL operating system images. You can purchase commitments with a 1-year plan for these licenses and receive up to 20% discounts over on-demand prices.
To learn how to purchase these commitments, see Purchase commitments for licenses . For pricing information, reach out to your Technical account manager (TAM) .
March 19, 2025
Feature
Preview : You can create regionally scoped snapshots. Setting a regional scope ensures that all snapshot data and the metadata necessary to use the snapshot are co-located within the scoped region. Regionally scoped snapshots also support additional location control by letting you restrict allowed snapshot creation and restore locations.
For more information, see Snapshot scopes .
March 17, 2025
Feature
Generally available : The A4 accelerator-optimized machine type is now generally available. A4 instances are powered by NVIDIA B200 GPUs and provide up to 3x performance of previous GPU instance types for most GPU accelerated workloads. A4 is especially recommended for ML training workloads at large scales. A4 is available in the a4-highgpu-8g machine type in the us-central1-b zone.
To create A4 instances, you must
either use AI Hypercomputer to request capacity and create VMs or clusters, or use Spot VMs. For detailed instructions, see Create an A3 Ultra or A4 VM .
March 14, 2025
Feature
Generally available: The Create an instance page in the Google Cloud console has a Data protection pane where you can specify how to back up and replicate your data. For more information, see Configuration options during instance creation and Data protection options .
Feature
Generally available : Memory-optimized M4 VMs are now generally available. M4 3T VMs run on Intel's 5th generation Emerald Rapids CPU. They offer up to 224 vCPUs with up to 3 TB of memory.
M4 is available in five predefined machine types. The megamem VMs have a GB/vCPU ratio of 13.29:1 and the ultramem VMs have a GB/vCPU ratio of 25.57:1.
March 10, 2025
Feature
Generally available : Compute flexible committed use discounts (CUDs) are available for Local SSD disks that you attach to instances of eligible machine types. Flexible CUDs add flexibility to your Compute Engine spending capabilities by eliminating the need to restrict your commitments to a single project, region, or machine series.
For more information, see Compute flexible CUDs .
Feature
Generally available : Configure the host error detection time, which is the maximum amount of time Compute Engine waits to restart or terminate an instance after detecting that the instance is unresponsive. For more information, see Set VM host maintenance policy .
March 04, 2025
Feature
Generally available: Stockholm, Sweden, Europe (europe-north2-a,b,c) has launched with N4, C3D highmem, C4 highmem, and E2 machine types available in all three zones. For more information, see Cloud locations and VM instance pricing .
February 14, 2025
Change
Starting as soon as February 14, 2025, projects might start seeing a Data protection pane on the Create an instance page in the Google Cloud console. If you see the Data protection pane, it selects an option to automatically back up data by default, which is recommended to make sure you can recover your data if it's lost due to unforeseen events. The backup incurs additional costs according to either Backup and DR pricing or Compute Engine pricing for disk snapshots .
If desired, you can select a different backup option (or disable backups) before you finish creating an instance. You can also change which backup option your project selects by default. For more information, see Configure the default backup setting for the console .
Feature
You can apply a Backup and DR Service backup plan during instance creation . Use backup plans to centralize backup management of instances across projects and improve cyber resilience through immutable and indelible backups to backup vaults.
January 29, 2025
Feature
Preview: You can now modify which machine types are recommended, so that the generated recommendations only include your preferred machine series. You can also change the metrics used to generate memory recommendations to improve the accuracy of the recommendations. For more information, see Configure machine type recommendations .
January 24, 2025
Feature
Preview : To prevent data loss or corruption when a compute instance is stopped, you can enable graceful shutdown in the instance. This setting gives the guest OS up to one hour to finish running tasks. Gracefully shutting down an instance is helpful when, for example, your database needs time to complete active transactions, your multiplayer session needs time to end properly, or you want to cleanly shutdown a high performance computing (HPC) job.
For more information, see the following pages:
Graceful shutdown overview
Enable graceful shutdown in a Compute Engine instance
View graceful shutdown in a Compute Engine instance
Disable graceful shutdown in a Compute Engine instance
January 20, 2025
Feature
Generally available : Managed instance groups (MIGs) let you create pools of suspended and stopped virtual machine (VM) instances. You can manually suspend and stop VMs in a MIG to save on costs, or use suspended and stopped pools to speed up scale out operations of your MIG. For more information, see About suspending and stopping VMs in a MIG .
January 17, 2025
Feature
Compute Engine is enabled for use with Cloud KMS Autokey.
Using keys generated by Autokey can help you consistently align with industry
standards and recommended practices for data security, including the HSM
protection level, separation of duties, key rotation, location, and key
specificity. Keys requested using Autokey function identically to other
Cloud HSM keys with the same settings.
For more information, see About disk encryption . To learn more
about Cloud KMS Autokey, see
Autokey overview .
January 16, 2025
Feature
Generally available : Google Axion Processor-based C4A VMs with Titanium SSD are now generally available. Part of our general-purpose machine family, these instances come with up to 6 TiB of Titanium SSD disks. Titanium SSD is our latest generation of Local SSD. It uses Titanium I/O offload processing and offers enhanced SSD security, performance, and management.
January 15, 2025
Issue
The metadata server might display old physicalHost metadata if a VM experiences a host error. For more information, see known issues .
January 13, 2025
Fixed
Resolved: Fixed the issue that caused missing symlinks for Local SSD devices on C3 and C3D VMs running SUSE Linux.
For more information, see Known issues .
December 31, 2024
Feature
Generally available : The A3 Ultra accelerator-optimized machine type is now generally available. A3 Ultra VMs are powered by NVIDIA H200 Tensor Core GPUs and support the new Titanium ML network adapter, which delivers non-blocking 3.2 Tbps of GPU-to-GPU traffic with RDMA over Converged Ethernet (RoCE). A3 Ultra VMs are ideal for foundation ML model training and serving. The A3 Ultra machine type is available in the following region and zone:
St. Ghislain, Belgium, Europe - europe-west1-b
When provisioning A3 Ultra machine types, you must use Hypercompute Cluster to request capacity and create VMs or clusters. To get started see Overview of creating VMs and clusters in the AI Hypercomputer documentation.
December 17, 2024
Feature
Preview : You can create instances that use only IPv6 IP addresses. For more information, see IP addresses .
December 16, 2024
Deprecated
The A3 Edge accelerator-optimized machine type is no longer available in Turin, Italy: europe-west12-b . For a list of available regions and zones, see GPU regions and zones .
December 11, 2024
Change
C3 bare metal instances are available in the following additional zones:
c3-highcpu-192-metal : asia-southeast1-a and c, europe-west4-c, us-east1-d, us-east4-c, us-east5-a, us-west1-a and b
c3-standard-192-metal : europe-west1-b and c, europe-west4-b and c, us-east1-d, us-east4-a, us-west1-a and b
c3-highmem-192-metal : europe-west4-c, us-east4-a and c, us-west1-a and b
December 10, 2024
Feature
Generally available : Instance flexibility in a managed instance group (MIG) lets you configure multiple machine types in the group. This can improve resource availability for applications that require large-scale capacity and high-demand hardware. Support for Terraform has also been added. For more information, see About instance flexibility in MIGs .
December 09, 2024
Fixed
Fixed the issue causing incorrect detection of CPU load on T2D machine series VMs in managed instance groups (MIGs). This issue affected MIG autoscaling based on CPU utilization in projects that were created before June 18, 2023.
December 03, 2024
Feature
Generally available : Hyperdisk Balanced High Availability provides cross-zonal, synchronous replication for your disk data, offering the best set of options for RPO, RTO, and performance.
November 26, 2024
Feature
Preview: Use the disk performance status metric to monitor the health of your Hyperdisk or Persistent Disk volumes. This metric indicates whether your disks might be affected by adverse events within Compute Engine.
To learn more, see Monitor disk health .
November 19, 2024
Change
The documentation has been updated to clarify that future reservation requests don't support E2 machine types. To reserve VMs that use E2 machine types, use on-demand reservations instead.
For more information, see Restrictions on creation .
November 18, 2024
Feature
Generally available : Queretaro, Mexico, North America ( northamerica-south1-a,b,c ) has launched with E2, N4, C4, and C3D VMs available in all three zones. For more information, see Global Locations and VM instance pricing .
November 13, 2024
Feature
Preview : The OS policy orchestrator feature in VM Manager lets you manage OS policy assignments across projects and zones at scale in large organizations. OS policy assignment was previously available only for zonal resources in a project. For more information, see About OS Policy Orchestrator .
November 05, 2024
Feature
Generally available : An updated version of the gVNIC driver for Windows offers improved network performance and support for Jumbo frames. For more information, see Update to the latest gVNIC driver for Windows .
November 04, 2024
Feature
Preview : You can create GPU VMs all at once in a regional managed instance group (MIG) by using resize requests. This feature was previously available only for zonal MIGs. For more information, see About resize requests in a MIG .
October 30, 2024
Feature
Generally available : General purpose C4A Arm VMs on Google's custom-built Axiom processors. C4A VMs are available as predefined configurations in sizes ranging from 1 vCPU to 72 vCPUs and up to 576 GB of DDR5 memory. C4A uses Google Cloud's latest generation storage options including Hyperdisk Balanced and Hyperdisk Extreme.
C4A VMs are available in the following regions and zones:
Singapore - asia-southeast1-a,b,c
Belgium - europe-west1-b,c,d
Frankfurt - europe-west3-a,b,c
Netherlands - europe-west4-a,b,c
Iowa - us-central1-a,b,c
South Carolina - us-east1-b,c,d
Virginia - us-east4-a,b,c
Feature
Generally available : You can autoscale a regional MIG with a BALANCED target distribution shape. With the BALANCED shape, the autoscaler is aware of the capacity in each zone and creates VMs in zones that have resource availability. For more information, see Autoscaling a regional MIG .
October 25, 2024
Feature
Generally available : The A3 Edge accelerator-optimized machine type is now available. The A3 Edge machine type has NVIDIA® H100 80GB GPUs attached and provides up to 800 Gbps of network bandwidth speed depending on the region. A3 Edge VMs are ideal for inference or training ML workloads that require a single node. The A3 Edge machine type is available in the following regions and zones:
APAC
Tokyo, Japan: asia-northeast1-c
Seoul, South Korea: asia-northeast3-a,c
Mumbai, India: asia-south1-c
Europe
London, England: europe-west2-b
Frankfurt, Germany: europe-west3-a
Eemshaven, Netherlands: europe-west4-b
Milan, Italy: europe-west8-c
Paris, France: europe-west9-c
Turin, Italy: europe-west12-b
North America
Toronto, Ontario: northamerica-northeast2-c
To get started with A3 Edge VMs, see Create an A3 VM .
October 23, 2024
Feature
Generally available : You can extend the term lengths of your resource-based commitments beyond the preset 1 or 3 years and choose custom term lengths such as 2, 3.5, or 5.5 years. Term extensions let you tailor commitments to match your resource usage needs and keep receiving committed use discounts (CUDs) for a longer time.
For more information, see Extend the term length of commitments .
October 16, 2024
Deprecated
End of life: On October 31, 2024, SLES 12 SP5 and SLES 12 SP5 for SAP are reaching end of life and the images will be deprecated on Google Cloud. If you use SLES 12 SP5 or SLES 12 SP5 for SAP images in your project, review Long Term Service Support Pack (LTSS) options .
October 15, 2024
Feature
Generally available : In addition to the A3 High machine type that has 8 NVIDIA H100 GPUs attached, we now have smaller machine types available that have 1, 2, or 4 NVIDIA H100 GPUs attached. These smaller machine types are ideal for workloads such as inference, simulations, and small-scale training.
To get started, review A3 High machine types .
October 09, 2024
Feature
Public preview : Instance flexibility in a managed instance group (MIG) lets you configure multiple machine types in the group. This can improve resource availability for applications that require large-scale capacity and high-demand hardware. For more information, see
About instance flexibility in MIGs .
October 08, 2024
Feature
Preview : An updated version of the gVNIC driver for Windows offers improved network performance and support for Jumbo frames. For more information, see Update to the latest gVNIC driver for Windows .
September 30, 2024
Feature
Preview: Multi-writer support for Hyperdisk Balanced High Availability disks. You can allow up to 8 VMs simultaneous read-write access to the same disk. For more information, see Share disks between VMs .
September 26, 2024
Deprecated
OS Login POSIX groups support is deprecated. For more information, see OS Login POSIX groups support deprecation .
September 18, 2024
Change
You can create a future reservation request by reusing the properties of an existing VM. This lets you consume the auto-created reservations for the future reservation by creating VMs with properties that exactly match the reference VM's properties. For more information, see the following:
Create future reservation requests for a single project
Create shared future reservation requests
Change
You can determine the number of running VMs and reservations that match the properties of a future reservation request. By subtracting this number from the total count specified in a future reservation request, you can determine the number of reserved VMs that an existing future reservation provisions at its start time. For more information, see Determine the number of provisioned VMs .
Feature
Generally available : Hyperdisk Balanced volumes can be created in Confidential mode and attached to Confidential VMs .
September 05, 2024
Feature
Generally available: Multi-writer support for Hyperdisk Balanced disks. Up to 8 VMs can simultaneously read from and write to the same disk. For more information, see Share disks between VMs .
September 02, 2024
Feature
Generally available : You can use the performance monitoring unit (PMU) to monitor low-level CPU events and metrics in VMs that use a C4 machine type. Using the PMU is helpful to analyze and optimize the performance of the software running on your VM when running performance-sensitive workloads, such as high-performance computing (HPC) or machine learning (ML) workloads.
For more information, see the following pages:
PMU overview
Enable the PMU in VMs
Manage the PMU in VMs
August 30, 2024
Feature
Generally available : When applying a spread placement policy to VMs, you can specify the availability domain in which to place the VMs. Specifying an availability domain lets you decide how to physically locate VMs among each other, which can increase the reliability of your workload by placing VMs in different domains, or try to limit network latency among VMs by placing them in the same domain. Viewing the availability domains of your VMs is also useful for planning, deploying, or upgrading your application, as well as developing your availability SLAs.
For more information, see Create and apply spread placement policies to VMs .
Feature
The fleetwide and per-instance Observability tabs on the Compute Engine VM instances page now include charts for GPU metrics the from NVIDIA Management Library (NVML). To view the fleetwide GPU charts, select Compute Engine > VM instances > Observability . To view the GPU charts for a VM instance, select Compute Engine > VM instances , click on the name of a VM instance, and then select Observability . These charts are available only for VM instances with attached GPUs, with both the Ops Agent and the NVIDIA GPU driver installed. For information about configuring these VMs, see About the gpu metrics .
August 23, 2024
Feature
Generally available : Hyperdisk Storage Pools with Advanced Performance provisioning help you to manage the performance needs of your Hyperdisk Balanced and Hyperdisk Throughput disks. By creating your disks in a storage pool, you can provision your disks to handle peak performance spikes while also optimizing costs. For more information, see Provisioning types for Hyperdisk Storage Pools .
August 19, 2024
Feature
Generally available : General purpose C4 VMs on the Intel Emerald Rapids CPU. The C4 machine series offers consistently high performance with up to 192 vCPUs and 1.5 TB of DDR5 memory, and support for Hyperdisk storage .
C4 VMs are available in the following regions and zones :
Singapore - asia-southeast1-a,b
Belgium - europe-west1-b,c
Netherlands - europe-west4-a,b,c
Iowa - us-central1-a,b,c
South Carolina - us-east1-b,c,d
Virginia - us-east4-a,b,c
August 01, 2024
Feature
Generally available : You can use instant snapshots to take in-place disk backups that can be restored to new disks in under a minute.
Instant snapshots are ideal for rapid data restoration within the same location as the source disk. For more information, see Instant snapshots .
July 26, 2024
Change
Persistent Disk Asynchronous Replication can now replicate up to 12.5 GB per minute per disk of compressed changed blocks, which is an increase from the previous maximum of 2 GB per minute. This increase helps to support scaled production databases and other demanding workloads. You can read more about PD Async Replication performance in the documentation . There is no action required to use the increased performance - new and existing PD Async Replication disks automatically have more headroom to replicate.
July 16, 2024
Feature
Generally available : C3 bare metal machine types are available in the C3 machine series. Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. With bare metal instances, you can access all the raw compute resources of the server. For more information, see the C3 machine series .
July 15, 2024
Change
Compute flexible committed use discounts (CUDs) —previously known as Compute Engine flexible CUDs—have been expanded to also cover your Cloud Billing account's spend across Google Kubernetes Engine (GKE) and Cloud Run. A single flexible commitment covers your eligible spend across all three services. For more information, see Compute flexible CUDs .
To learn about how flexible CUDs apply to the other services, see the following:
CUDs documentation for GKE
CUDs documentation for Cloud Run
Feature
Generally available: You can limit the run time of VMs, which automatically stops or deletes a VM after a specific time or duration. Limiting your VMs' run times can help you optimize temporary workloads by minimizing costs and releasing quota.
For more information, see Limit the run time of a VM and
Limit the runtime of VMs in a MIG .
July 12, 2024
Feature
Preview : Hyperdisk Balanced High Availability provides cross-zonal, synchronous replication for your disk data, offering the best set of options for RPO, RTO, and performance.
July 11, 2024
Change
You can only create on-demand reservations of A3 VMs if you create specifically targeted reservations. This restriction doesn't affect reservations that were created before July 11, 2024, which you can continue to consume based on their consumption type.
For more information, see the following pages:
Reservations of Compute Engine zonal resources
Create a reservation for a single project
Create a shared reservation
July 09, 2024
Feature
Generally available : Hyperdisk ML, block storage designed specifically for high-performance AI workloads. Each Hyperdisk ML volume can achieve up to 1,200,000 MBps of throughput. For large-scale training and inference workloads, you can attach a single Hyperdisk ML volume to up to 2,500 VM instances. For more information, see About Hyperdisk .
Feature
Generally available : You can create GPU VMs in a managed instance group (MIG) by using resize requests. Resize requests help you create VMs all at once and give you higher chances to obtain highly demanded resources such as GPUs.
For more information, see About resize requests in a MIG .
July 01, 2024
Fixed
The issue related to creating larger (>90 vCPUs) C3D standard-lssd or highmem-lssd VM instances.
June 18, 2024
Change
Preemptible allocation quotas also apply to some temporary GPU VMs. This behavior can help you improve quota obtainability for temporary GPU VMs while maintaining the benefits of uninterrupted run time of the standard provisioning model. For more information, see GPU VMs and preemptible allocation quotas .
Fixed
The issue related to creating C2 sole tenant nodes with more than 60 CPUs.
June 17, 2024
Feature
Generally available : You can now use the Require OS Config organization policy constraint to automatically enable VM Manager for all new VMs in your organization, folder, or project. For more information, see Enable VM Manager using an organization policy .
June 14, 2024
Change
Spot VMs are now available for the H3 machine series .
June 13, 2024
Feature
Preview : C3 bare metal machine types are available in Preview in the C3 machine series. Bare metal instances let you create an instance with direct access to the machine's CPU and memory, without a virtualization layer in the middle. With bare metal instances, you can access all the raw compute resources of the server. For more information, see the C3 machine series .
June 12, 2024
Feature
Preview : General Purpose C4 VM instances are now available in Public Preview on the Intel Emerald Rapids CPU . The C4 machine series offers consistently high performance with up to 192 vCPUs and 1.5 TB of DDR5 memory, and support for Hyperdisk storage.
Change
Expanded Hyperdisk Balanced support for M3 and C3 machine types : The maximum number of Hyperdisk Balanced volumes that you can use with C3 and M3 virtual machines has been increased, as follows:
C3 VMs with 4 or 8 vCPUs now support attaching up to 16 Hyperdisk Balanced volumes.
C3 VMs with 16 or more vCPUs support 32 Hyperdisk Balanced volumes.
M3 virtual machines support up to 32 Hyperdisk Balanced volumes, up from 2.
For more information, see the documentation for M3 and C3 VMs.
June 11, 2024
Change
Generally available : The A3 Mega accelerator-optimized machine type is now available. The A3 Mega machine type has NVIDIA® H100 80GB GPUs attached and provides twice the network bandwidth speed when compared to A3 Standard. A3 Mega VMs can be used to support your large artificial intelligence (AI) models, machine learning (ML), and high performance computing (HPC) workloads. The A3 machine type is available in the following regions and zones:
APAC
Singapore: asia-southeast1-b
Europe
Netherlands: europe-west4-b,c
North America
Iowa: us-central1-a,c
Virginia: us-east4-a,b
Ohio: us-east5-a
Oregon: us-west1-a,b
Nevada: us-west4-a
To get started with A3 Mega VMs, see Run large-scale model training and fine-tuning .
Feature
C3 and C3D VMs are available in the following regions and zones :
C3:
asia-northeast1-b Tokyo, Japan
europe-west3-b,c Frankfurt, Germany
us-west1-a,b The Dalles, OR
us-west2-a Los Angeles, CA
us-south1-a Dallas, TX
C3D:
australia-southeast1-c Sydney, Australia
europe-west3-c Frankfurt, Germany
us-west4-a Las Vegas, NV
June 05, 2024
Issue
You can't provision C2 sole tenant nodes with 60 vCPUs. For details, see Known issues .
June 04, 2024
Feature
You can now order and request quota for X4 bare metal instances. You create bare metal instances using a new predefined machine type for the X4 memory-optimized machine series. X4 instances can be used to host the largest production SAP HANA databases. For more information, see the X4 machine series .
May 31, 2024
Issue
Creating a larger (>90 vCPUs) C3D standard-lssd or highmem-lssd VM results in an error message. See Known issues for the workaround. Larger C3D VMs that don't require -lssd are not impacted.
May 15, 2024
Feature
Generally Available: Advanced maintenance control for sole-tenancy lets you control planned maintenance events for sole-tenant node groups and minimize maintenance-related disruptions. This
feature is available only for sole-tenant node groups. To use this feature with your existing virtual machines, you must first move your VMs to sole-tenant node groups that have advanced maintenance
control enabled.
The advanced maintenance control for sole-tenancy feature lets you:
Check for maintenance events scheduled for a sole-tenant node 28 days in advance.
Trigger maintenance immediately or schedule it for later. Note that if you trigger maintenance
immediately, the maintenance takes place within 6 hours from the time you trigger the request.
For more information, see Advanced maintenance control for sole-tenancy .
May 08, 2024
Feature
Preview : You can now use the Require OS Config organization policy constraint to automatically enable VM Manager for all new VMs in your organization, folder, or project. For more information, see Enable VM Manager using an organization policy .
April 30, 2024
Deprecated
The global serial console gateway is deprecated. For more information, see Global serial console gateway deprecation .
April 29, 2024
Breaking
Starting the week of April 29, 2024, when you limit the run time of a standalone VM or a VM in a managed instance group (MIG), the following changes take effect:
When you stop or suspend a VM that has a time limit, the time limit will no longer be automatically removed. Whenever you start or resume the VM, its time limit is reapplied until you update or remove the time limit. If a VM's time limit is defined as a specific time and that time has passed, you can't rerun the VM until you update or remove its time limit.
When a VM in a MIG reaches its time limit, the MIG deletes that VM instead of repairing it.
For more information, see Limit the run time of a VM and
Limit the run time of VMs in a MIG .
April 26, 2024
Feature
Generally available : Zonal metadata (previously known as project zonal metadata) is custom metadata that you define at a zonal scope within a project and provides information about VMs in that specific zone. Zonal metadata helps you with fault isolation and provides greater reliability. By setting custom zonal metadata, you gain more control over the metadata for VMs in your project and limit the impact of any incorrect metadata updates to VMs within a specific zone.
To get started working with zonal metadata, see Set custom zonal metadata .
April 19, 2024
Feature
General purpose C3 VMs are now available in Sydney, (australia-southeast1-c) .
April 16, 2024
Feature
Generally available : Z3 VMs, which offer the latest compute, networking, and storage innovations in one platform with a particular focus on high density, high performing Local SSD are now available on Compute Engine. For more information, see Storage-optimized machine family .
Feature
Generally available : Hyperdisk Balanced is available with M1 and M2 VMs . Hyperdisk Balanced is a good fit for a wide range of use cases such as LOB applications, and medium-tier databases that don't require the performance of Hyperdisk Extreme. For more information, see About Hyperdisk .
April 09, 2024
Feature
Generally available: N4 VMs are generally available on the Intel Emerald Rapids CPU with 640 GB DDR5 memory. The N4 machine series offers predefined and custom machine types with extended memory and Hyperdisk Balanced storage.
N4 VMs are available in limited regions and zones .
See VM pricing for cost details.
Feature
Generally available : You can plan ahead for VM maintenance on M1, M2, and M3 machine types by viewing their maintenance schedule notifications . For specific machine types within these families, you can also trigger VM maintenance ahead of schedule.
April 08, 2024
Announcement
Pricing change : On January 26, 2024, Red Hat announced a price model update on RHEL and RHEL for SAP for all Cloud providers that scales image subscription costs according to vCPU count. The new pricing model will be reflected on Compute Engine starting July 1, 2024.
For the pricing changes, see Premium images . To learn about your options to optimize subscription costs, see the Red Hat Enterprise Linux pricing FAQs .
Announcement
On January 26, 2024, Red Hat announced a price model update on RHEL and RHEL for SAP for all Cloud providers that scales image subscription costs according to vCPU count. As a result, starting July 1, 2024, any active commitments for RHEL and RHEL for SAP licenses will be canceled and will not be charged for the remainder of the commitment's term duration.
Google Cloud has notified and will issue adjustments to affected customers.
April 04, 2024
Feature
Generally available : Simplify block storage management for Compute Engine instances with Hyperdisk Storage Pools. A Hyperdisk Storage Pool is a pre-purchased collection of disk capacity, throughput, and IOPS which you can then provision to your applications as needed. By managing disks in aggregate, you can save costs while achieving expected capacity and performance growth. For more information, see About Hyperdisk Storage Pools .
April 03, 2024
Security
Compute Engine is not affected by CVE-2024-3094. For more information, see the GCP-2024-021 security bulletin .
March 22, 2024
Feature
Generally available : Disaster recovery with Persistent Disk Async Replication has been expanded to allow you to replicate data on a disk in one region to any other region within the same continent .
Also, the following performance and capacity enhancements are available:
Data replication change rate increased to 2 GiB/min from 250 MB/min.
Maximum provisioned disk size increased to 32 TB from 5 TB per disk.
The number of disks per project increased to 1000 from 100.
The number of disks per consistency group increased to 128 from 64.
March 21, 2024
Feature
Generally available : In a managed instance group (MIG), you can set metadata and labels for all VMs in the group without the need to create a new instance template. For more information, see Override instance template properties with an all-instances configuration .
Feature
Generally available : In a managed instance group (MIG), you can turn off repairs to inspect failed and unhealthy VMs, to implement your own repair logic, or to monitor the application health without triggering repairs by MIG. For more information, see Turn off repairs in a MIG .
March 18, 2024
Announcement
Generally available : The organization-wide patch status dashboard and organization-wide OS policy compliance reports in VM Manager are now generally available.
March 13, 2024
Feature
Generally available : You can use SSH-in-browser to connect to TPU VMs. For more information, see Connecting to a Cloud TPU .
March 12, 2024
Feature
Generally available : You can scale a single VM into a managed instance group (MIG), which is a group of VMs that you can manage as a single entity. A MIG can make your workload scalable and highly available using features like autoscaling, autohealing, regional (multiple zones) deployment, and automatic updating.
For more information, see Create a MIG from an existing VM .
March 11, 2024
Feature
Generally available : Hyperdisk Balanced is available with C3 and H3 VMs. Hyperdisk Balanced is a good fit for a wide range of use cases such as LOB applications, web applications, and medium-tier databases that don't require the performance of Hyperdisk Extreme. For more information, see About Hyperdisk .
February 21, 2024
Feature
Preview : With managed workload identities for Compute Engine, you can implement mutually authenticated and encrypted communications between any two Compute Engine VMs. Workload applications running on the configured VMs can use the X.509 credentials for per-VM mTLS. These mTLS certificates are automatically rotated and managed for you by Certificate Authority Service.
For more information, see Authenticate workloads to other workloads over mTLS .
February 15, 2024
Feature
Preview : You can now use SSH-in-browser to connect to VMs using security keys with OS Login. For more information, see Enable security keys with OS Login .
February 13, 2024
Feature
Generally available : The following quotas and metrics are now available to help you monitor the usage and limits for Compute Engine concurrent operation quotas:
Quotas for global concurrent operations (metric - compute.googleapis.com/global_concurrent_operations ):
Concurrent global operations per project
Concurrent global operations per project operation type
Quotas for regional concurrent operations (metric: compute.googleapis.com/regional_concurrent_operations ):
Concurrent regional operations per project
Concurrent regional operations per project operation type
For more information, see Concurrent operation quotas .
February 08, 2024
Feature
Generally available : Hyperdisk Throughput is available with the following VMs:
A3
C3
C3D
G2
H3
M3
Hyperdisk Throughput support for Z3 VMs is also available in Preview.
Also, the maximum number of Hyperdisk Throughput volumes you can attach to a VM has been increased. See Hyperdisk capacity limits per VM for more information.
Hyperdisk volumes are durable network storage devices that your VMs can access, similar to Persistent Disk. Hyperdisk Throughput provides cost-effective and throughput-oriented storage with dynamically configurable capacity and throughput. For more information, see About Hyperdisk .
February 07, 2024
Feature
When you purchase a resource-based commitment for GPUs, Local SSD disks, or both, you can attach any of your existing on-demand or auto-created future reservations to that commitment. By attaching existing reservations, you can reserve resources in advance and minimize resource unavailability issues when you purchase commitments for GPU or Local SSD disk resources.
For more information, see Purchase commitments with attached reservations .
February 02, 2024
Feature
Generally available : You can plan ahead for VM maintenance on C3, C3D , and Z3 Preview machine types by viewing their maintenance schedule notifications . For specific machine types within these families, you can also trigger VM maintenance ahead of schedule.
January 31, 2024
Feature
Preview : You can create GPU VMs in a MIG by using resize requests. Resize requests help you create VMs all at once and give you higher chances to obtain highly demanded resources such as GPUs.
For more information, see About resize requests in a MIG .
Feature
Generally available: Johannesburg, South Africa africa-south1-a,b,c has launched with E2, N2, N2D, and T2D general-purpose VMs in all three zones.
January 30, 2024
Feature
Generally available : Persistent Disk Asynchronous Replication is available between the following region pairs:
europe-west3 (Frankfurt, Germany) and europe-west8 (Milan, Italy)
europe-west3 (Frankfurt, Germany) and europe-west10 (Berlin, Germany)
us-east1 (Moncks Corner, South Carolina) and northamerica-northeast1 (Montréal, Québec)
For the full list of available regions, see Supported region pairs .
Feature
Generally available : Snapshot settings are centralized configuration parameters for all snapshots in a project. You can use snapshot settings to customize the default storage location for all future snapshots in your project. By enabling you to do this, snapshot settings remove the need for you to manually specify a storage location during each individual snapshot creation.
For information about how to use snapshot settings and set your project's default snapshot storage location, see the snapshot settings documentation .
Feature
Preview : Z3 VMs, which offer the latest compute, networking, and storage innovations in one platform with a particular focus on high density, high performing Local SSD are now in Preview. For more information, see Storage-optimized machine family for Compute Engine .
Feature
Generally available : NVIDIA L4 GPUs are now available in the following additional region and zone:
Zurich, Switzerland ( europe-west6-b )
For more information about using GPUs on Compute Engine, see GPU platforms .
January 25, 2024
Feature
Generally available : Hyperdisk Balanced is available with M3 VMs. Hyperdisk Balanced is a good fit for a wide range of use cases such as LOB applications, web applications, and medium-tier databases that don't require the performance of Hyperdisk Extreme. For more information, see About Hyperdisk .
January 22, 2024
Feature
Generally available : In the Google Cloud console, in the Observability tab on the VM instances page, you can customize the predefined dashboard to monitor specific VM metrics that you want. For more information, see Create a customized dashboard to view specific metrics .
January 09, 2024
Security
Google has patched several vulnerabilities that were discovered in the TianoCore EDK II UEFI firmware used in Google Compute Engine VMs. For more information, see the GCP-2024-001 security bulletin .
January 08, 2024
Feature
Generally available : NVIDIA L4 GPUs are now available in the following additional zone:
Changhua County, Taiwan ( asia-east1-b )
For more information about using GPUs on Compute Engine, see GPU platforms .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

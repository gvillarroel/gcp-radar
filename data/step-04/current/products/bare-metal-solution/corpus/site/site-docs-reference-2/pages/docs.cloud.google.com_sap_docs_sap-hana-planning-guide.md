---
title: "SAP HANA planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide
  title: "SAP HANA planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation"
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
SAP HANA planning guide
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides an overview of what is required to run SAP HANA
on Google Cloud, and provides details that you can use
when planning the implementation of a new SAP HANA system.
For details about how to deploy SAP HANA on Google Cloud, see:
For single-host scale-up and multi-host scale-out deployments, see:
Terraform: SAP HANA scale-up deployment guide
For scale-out system with host auto-failover deployments, see:
Terraform: SAP HANA scale-out system with host auto-failover deployment guide
For scale-up high-availability cluster configurations, see:
Terraform: SAP HANA scale-up high-availability cluster configuration guide
Manual HA scale-up cluster configuration on RHEL
Manual HA scale-up cluster configuration on SLES
For scale-out high-availability cluster configurations, see:
Terraform: SAP HANA scale-out high-availability cluster configuration guide
Manual HA scale-out cluster configuration on SLES
About SAP HANA on Google Cloud
SAP HANA is an in-memory, column-oriented, relational database that provides
high-performance analytics and real-time data processing. Customers can leverage
ease of provisioning, highly scalable, and redundant Google Cloud infrastructure
capabilities to run their business critical workloads. Google Cloud
provides a set of physical assets, such as computers and hard disk drives, and
virtual resources, such as Compute Engine instances, located in
Google data centers around the world.
When you deploy SAP HANA on Google Cloud, you deploy to
instances running on Compute Engine. Compute Engine instances
provide disks for persistent storage, which function similarly to physical disks in a
desktop or a server, but are automatically managed for you by
Compute Engine to ensure data redundancy and optimized performance.
Google Cloud basics
Google Cloud consists of many cloud-based services and products.
When running SAP products on Google Cloud, you mainly use the IaaS-based services offered
through Compute Engine and
Cloud Storage ,
as well as some platform-wide features, such as
tools .
See the Google Cloud platform overview
for important concepts and terminology. This guide duplicates some
information from the overview for convenience and context.
For an overview of considerations that enterprise-scale organizations should
take into account when running on Google Cloud, see the
Google Cloud Well-Architected Framework .
Interacting with Google Cloud
Google Cloud offers three main ways to interact with the platform, and your resources,
in the cloud:
The Google Cloud console, which is a web-based user interface.
The gcloud command-line tool, which provides a superset of the
functionality that Google Cloud console offers.
Client libraries ,
which provide APIs for accessing services and management of resources.
Client libraries are useful when building your own tools.
Important : If you are using the gcloud CLI,
then make sure that you are using the latest version.
To install the latest version of the gcloud CLI, see the
gcloud install instructions.
Google Cloud services
SAP deployments typically utilize some or all of the following Google Cloud
services:
Service
Description
VPC networking
Connects your Compute Engine instances to each other and to the internet.
Each compute instance is a member of either a legacy network with a single
global IP range, or a recommended subnet network, where the instance is
a member of a single subnetwork that is a member of a larger network.
Note that a Virtual Private Cloud (VPC) network cannot span
Google Cloud projects, but a Google Cloud project can have multiple
VPC networks.
To connect resources from multiple projects to a common
VPC network, you can use
Shared VPC , so that the
resources can communicate with each other securely and efficiently by
using internal IP addresses from that network. For information about how
to provision a Shared VPC including requirements, configuration
steps, and usage, see
Provision Shared VPC .
Compute Engine
Creates and manages compute instances with your choice of operating system and software
stack.
Persistent Disk and
Hyperdisk
You can use Persistent Disk and Google Cloud Hyperdisk:
Persistent Disk volumes are available as either standard hard disk
drives (HDD) or solid-state drives (SSD). For Balanced Persistent Disk
and SSD Persistent Disk volumes,
PD Async Replication
provides asynchronous replication of SAP data between two
Google Cloud regions.
Hyperdisk Extreme volumes provide higher maximum
IOPS and throughput options than SSD Persistent Disk volumes.
Compute Engine enables
default encryption at rest ,
including content inside Persistent Disk and
Hyperdisk volumes. For more information about disk
encryption and possible encryption options, see
About disk encryption .
Google Cloud console
A browser-based tool for managing Compute Engine resources.
Use a template to describe all of the Compute Engine resources
and instances you need. You don't have to individually create and
configure the resources or figure out dependencies because the
Google Cloud console does that for you.
Cloud Storage
You can store your SAP database backups in Cloud Storage for
added durability and reliability, with replication.
Cloud Monitoring
Provides visibility into the deployment, performance, uptime, and
health of Compute Engine, network, and persistent storage disks.
Monitoring collects metrics, events, and metadata from
Google Cloud and uses these to generate insights through dashboards,
charts, and alerts. You can monitor the compute metrics at no cost through
Monitoring.
IAM
Provides unified control over permissions for Google Cloud resources.
IAM lets you control who can perform control-plane
operations on your compute instances, including creating, modifying, and deleting
instances and persistent storage disks, and creating and modifying networks.
Pricing and quotas
You can use the pricing calculator
to estimate your usage costs. For more pricing information, see
Compute Engine pricing ,
Cloud Storage pricing ,
and Google Cloud Observability pricing .
Google Cloud resources are subject to quotas. If you plan to use high-CPU or
high-memory machines, then you might need to request additional quota. For more
information, see Allocation quotas .
Compliance and sovereign controls
If you require your SAP workload to run in compliance with data residency, access control, support
personnel, or regulatory requirements, then you must plan for using Assured Workloads
- a service that helps you run secure and compliant workloads on Google Cloud without
compromising the quality of your cloud experience.
For more information, see Compliance and sovereign controls
for SAP on Google Cloud .
Resource requirements
This section provides guidance to help you identify the resources that you'd
require to run SAP HANA on Google Cloud.
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
Sole tenancy
You can deploy SAP HANA on a sole-tenant node. A sole-tenant node is a physical Compute Engine server that is dedicated to host the VMs in your SAP HANA
deployment.
Sole-tenant nodes let you keep
your SAP HANA VMs physically separate from VMs used by other deployments in your
Google Cloud project or VMs in other Google Cloud projects. This lets you
control the usage of the underlying hardware. Also, by using a sole-tenant node
for your SAP HANA deployment, you can meet security or compliance requirements
with workloads that require physical isolation from other workloads or VMs.
For more information about sole tenancy, see
Sole tenancy overview .
Deployment architecture for sole-tenant nodes
The following diagram shows the architectures for SAP HANA scale-up and SAP
HANA scale-up HA deployments on Google Cloud that use sole tenancy:
The following diagram shows the architecture for an SAP HANA multi-host
scale-out deployment on Google Cloud that uses sole tenancy without node
anti-affinity:
The following diagram shows the architecture for an SAP HANA scale-out HA
deployment on Google Cloud that uses sole tenancy without node
anti-affinity:
Automation support for sole-tenant nodes
You can automate the deployment of a sole-tenant node for the following
architectures:
SAP HANA scale-up
SAP HANA scale-up with high availability
SAP HANA multi-host scale-out without node anti-affinity
SAP HANA scale-out with high availability without node anti-affinity
For this, you use version 1.3.704310921 or later of the sap_hana and
sap_hana_ha Terraform modules provided by Google Cloud.
When you use these Terraform modules to deploy SAP HANA with a sole-tenant node,
Terraform provisions the following resources:
A sole-tenant node template based on the node type that you specify. This is
provisioned is the region that corresponds to the zone that you specify.
A sole-tenant node group for each SAP HANA node in your deployment. The node
group is created by using the node template provisioned as part of the same
deployment.
One or more sole-tenant nodes, depending on the deployment architecture you
choose, on top of which the Compute Engine VMs are deployed.
To see a diagram that shows this deployment architecture, see
Deployment architecture for sole-tenant nodes .
For more information about automating the deployment of a sole-tenant node for
SAP HANA, see the following deployment guides:
Terraform: SAP HANA scale-up deployment guide
Terraform: SAP HANA scale-up high-availability cluster configuration guide
Terraform: SAP HANA scale-out high-availability cluster configuration guide for SLES
Memory configuration
Your memory configuration options are determined by the Compute Engine
machine type that you choose. For more information, see the table in
Certified machine types for SAP HANA .
Network configuration
Your Compute Engine instance network capabilities are determined by its
machine family ,
and not by its network interface (NIC) or IP address.
Based on its machine type, your compute instance is capable of 2-32 Gbps
network throughput. Certain machine types also support throughputs up to 100 Gbps,
which requires the use of the Google Virtual NIC (gVNIC) interface type with a
Tier_1 network configuration. The ability to achieve these throughput rates is
further dependent on the traffic direction and the type of the destination IP
address.
Compute Engine instance network interfaces are backed by redundant and
resilient network infrastructure using physical and software-defined network
components. These interfaces inherit the redundancy and resiliency of the
underlying platform. Multiple virtual NICs can be used for traffic separation,
but that offers no additional resilience or performance benefits.
A single NIC provides the needed performance for SAP HANA deployments on
Compute Engine. Your particular use case, security requirements or
preferences might also require additional interfaces for separating traffic, such
as Internet traffic, internal SAP HANA System Replication traffic, or other
flows that might benefit from specific network policy rules. We recommend that
you employ traffic encryption offered by the application, and
secure network access following a least privilege firewall policy to restrict
access.
Depending on your requirements, you can improve security on multiple ways as
described in the
SAP HANA Security Guide for SAP HANA Platform .
For example, you can implement network isolation but it provides lower
security without encryption and port and IP specific allowlisting.
Consider the need for traffic separation early on as part of your network design
and allocate additional NICs when you deploy compute instances. Your choice for the number of network
interfaces depends on the level of isolation that you require. For more information
about multi-NIC compute instances, such as network and subnetwork requirements and the maximum
number of network interfaces, see Multiple network interfaces .
For example, you might define a Virtual Private Cloud network for your SAP HANA SQL application
clients (SAP NetWeaver application servers, custom applications, etc.), and a
separate network for inter-server traffic, such as SAP HANA System Replication.
Consider that too many segments might complicate management and troubleshooting of
network issues. If you change your mind later, then you can use Compute Engine machine images
to recreate your compute instance while retaining all associated configuration, metadata and
data.
For more information, see the following:
Networking overview for VMs
Network bandwidth
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
Custom operating system images
You can use a Linux image that Google Cloud provides and maintains (a public image) or
you can provide and maintain your own Linux image (a custom image).
Use a custom image if the version of the SAP-certified operating system
that you require is not available from Google Cloud as a public image. The following
steps, which are described in detail in Importing Boot Disk Images to Compute Engine ,
summarize the procedure for using a custom image:
Prepare your boot disk so it can boot within the Google Cloud Compute Engine
environment and so you can access it after it boots.
Create and compress the boot disk image file.
Upload the image file to Cloud Storage and import the
image to Compute Engine as a new
custom image .
Use the imported image to create a virtual machine instance and make sure
it boots properly.
Optimize the image
and install the Linux Guest Environment
so that your imported operating system image can communicate with the
metadata server and use additional Compute Engine features.
After your custom image is ready, you can use it when creating compute instances
for your SAP HANA system.
If you are moving a RHEL operating system from an on-premises installation to
Google Cloud, you need to add Red Hat Cloud Access to your Red Hat subscription. For more
information, see Red Hat Cloud Access .
For more information about the operating system images that Google Cloud provides, see
Images .
For more information about importing an operating system into Google Cloud as a custom
image, see
Importing Boot Disk Images to Compute Engine .
For more information about the operating systems that SAP HANA supports, see:
Certified and Supported SAP HANA Hardware Directory
SAP note
2235581 - SAP HANA: Supported Operating Systems
OS clocksource on Compute Engine instances
For SAP HANA on Compute Engine instances, the required OS clocksource
is TSC , which is the default setting for SLES and RHEL images.
For more information about this requirement from SAP, see SAP note 2753418 - Potential Performance Degradation Due to Timer Fallback .
To confirm that the TSC clocksource is active, run the following command:
cat /sys/devices/system/clocksource/current_clocksource
If the output is not TSC , then you must change the OS clocksource.
To change the OS clocksource to TSC , first connect to your instance by
using SSH, and then run the following commands:
echo "tsc" | sudo tee /sys/devices/system/clocksource/*/current_clocksource
sudo cp /etc/default/grub /etc/default/grub.backup
sudo sed -i '/GRUB_CMDLINE_LINUX/ s|"| clocksource=tsc"|2' /etc/default/grub
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
Persistent disk storage
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
Supported disk layouts
The following figure shows the disk storage layout in suggested architectures for SAP HANA
on Google Cloud.
In the preceding figure, the configuration on the left uses a split-disk layout.
The /hana/data and /hana/log volumes are on separate Hyperdisk volumes. The
/hana/data volume can be hosted on more than one disk. The
/hana/shared and /usr/sap volumes, which don't require as high a
performance, are on individual Balanced Persistent Disk volumes, which cost less than
one Hyperdisk Extreme volume.
The configuration on the right uses a unified-disk layout, where the
/hana/data , /hana/log , /hana/shared , and /usr/sap volumes are all
mounted on a single Hyperdisk Extreme volume.
Persistent Disk and Hyperdisk volumes are located independently
from your compute instances, so you can detach or
move these disks to keep your data, even after you delete your compute instances.
In the Google Cloud console ,
you can see the Persistent Disk and Hyperdisk volumes that are
attached to your compute instances under Additional disks on the
VM instance details page for each compute instance.
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
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes
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
Determining disk size
Calculate the amount of disk storage that you need for the SAP HANA
volumes based on the amount of memory that your selected
Compute Engine machine type contains.
The following guidance about disk sizes refers to the minimum sizes that
Google Cloud recommends for your deployments. This guidance, while
exceeding SAP's minimum requirements, is designed to balance the storage
requirements of your SAP HANA system, the performance requirements of the disks,
and the total cost of ownership.
You can increase the disk sizes up to the limit that the underlying disk types support.
For information about the required minimum disk sizes, see
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes .
Persistent disk size requirements for scale-up systems
For SAP HANA scale-up systems, use the following formulas for each volume:
/hana/data : 1.2 x memory
/hana/log : either 0.5 x memory or 512 GB, whichever is smaller
/hana/shared : either 1 x memory or 1,024 GB, whichever is smaller
/usr/sap : 32 GB
/hanabackup : 2 x memory, optional allocation
Persistent disk size requirements for scale-out systems
For SAP HANA scale-out systems, use the same formula as SAP HANA scale-up systems
for /hana/data , /hana/log , and /usr/sap volumes. For /hana/shared volume, calculate
the disk size based on the number of worker hosts in your deployment.
For each four worker hosts, increase the disk size by 1 x memory, or 1 TB,
whichever is smaller. For example:
From 1 to 4 worker hosts: 1 x memory, or 1 TB, whichever is smaller
From 5 to 8 worker hosts: 2 x memory, or 2 TB, whichever is smaller
From 9 to 12 worker hosts: 3 x memory, or 3 TB, whichever is smaller
From 13 to 16 worker hosts: 4 x memory, or 4 TB, whichever is smaller
To determine your overall storage quota requirements for SAP HANA scale-out systems,
you need to total up the disk sizes for each type of disk that is used with all
of the hosts in the scale-out system. For example, if you have put /hana/data
and /hana/log on SSD Persistent Disk ( pd-ssd ) volumes, but /hana/shared
and /usr/sap on Balanced Persistent Disk ( pd-balanced ) volumes, then you
need separate totals for pd-ssd and pd-balanced to
request separate quotas.
For an SAP HANA scale-out system with host auto-failover, you only need to calculate
the disk size for master and worker hosts. The standby hosts don't have
their own /hana/data , /hana/log , and /usr/sap volumes. If there is a
failure, then SAP HANA automatic failover unmounts the /hana/data , /hana/log , and
/usr/sap volumes from the failed host and mounts on them on a standby host. The
/hana/shared and /hanabackup volumes for a standby host are mounted on a
separately-deployed NFS solution.
Allocating additional persistent disk storage
Select a disk size that
is no smaller than the minimum size listed in
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes .
If you are using SSD or Balanced Persistent Disk, then the minimum
size might be determined by SAP HANA performance requirements rather than
SAP HANA storage requirements.
For example, if you are running SAP HANA on an n2-highmem-32 instance,
which has 256 GB of memory, then your total storage requirement for the
SAP HANA volumes is 723 GB: 307 GB for the data volume, 128 GB for the log
volume, 256 GB for the shared volume, and 32 GB for the /usr/sap volume.
However, if you use Balanced Persistent Disk, then the required minimum size
is 943 GB, where the additional 220 GB is
allocated to the data volume to meet the required performance. Therefore, if you
use a n2-highmem-32 instance with Balanced Persistent Disk to run SAP HANA,
then you need to provision 943 GB or more of disk storage. The additional
provision of 220 GB is applied
to the disk that hosts the /hana/data volume to provide the required performance.
Apply any additional disk storage to the /hana/data volume.
For information from SAP about sizing for SAP HANA, see
Sizing SAP HANA .
Hyperdisk performance
Hyperdisk provides higher maximum IOPS and
throughput options for the /hana/log and /hana/data volumes than the other
SSD-based persistent disks. For more information about
provisioning IOPS and throughput options for Hyperdisk, see
About provisioning performance .
Unlike with SSD-based Persistent Disk types, when you use Hyperdisk
with SAP HANA, you don't need to worry about performance when you
size the Hyperdisk. The sizing for Hyperdisk is based
solely on the storage requirements of SAP HANA. For more information about
sizing persistent disks or Hyperdisk, see Determining persistent disk size .
While using Hyperdisk with SAP HANA, to enable the best performance, we
recommend that you update your SAP HANA system properties as follows:
Update your global.ini file:
In the fileio section, set num_completion_queues = 12
In the fileio section, set num_submit_queues = 12
Update your indexserver.ini file:
In the parallel section, set tables_preloaded_in_parallel = 32
In the global section, set load_table_numa_aware = true
When you create a Hyperdisk Extreme volume, the number of IOPS that you provision
determines its maximum throughput. The following formula can be used as a
starting point. It provides a minimum of 2500 MiB/s throughput
(256 KB per IOPS * 10,000 IOPS) and more for larger machine types with larger
disks.
When using the default deployment with separate disks for /hana/log and /hana/data :
IOPS for the data disk: maximum(10,000, size of data disk in GB * 2)
IOPS for the log disk: maximum(10,000, size of log disk in GB * 2)
When a single disk is used for /hana/data , /hana/log , /hana/shared , and /usr/sap :
IOPS for disk: maximum(10,000, size of data disk GB * 2) + maximum(10,000, size of log disk in GB * 2)
The maximum number of IOPS that you can provision can
differ depending on the machine type you are using. For a list of the machine
types that support Hyperdisk Extreme, as
well as the maximum IOPS and throughput that Hyperdisk Extreme can
provide with each machine type, see Machine type support .
When you create a Hyperdisk Balanced volume, you can provision the IOPS and
throughput to meet your workload performance needs, taking into consideration
the rules for IOPS provisioning and throughput provisioning .
For SAP HANA, the minimum supported provisioned IOPS is 3000 and throughput
is 400 MiB/s.
Disks deployed by the deployment automation scripts
When you deploy an SAP HANA system using the Terraform configurations that
Google Cloud provides, the deployment script allocates Persistent Disk
or Hyperdisk volumes for the SAP volumes as follows:
By default, separate disks are deployed for each of the following directories:
/hana/data , /hana/log , /hana/shared , and /usr/sap .
Optionally, you can choose to deploy a single-disk layout where a single
Persistent Disk or Hyperdisk volume hosts these SAP directories. Also, for SAP HANA
scale-out deployments, the /hana/shared directory is hosted by an NFS
solution.
Optionally, a disk for the /hanabackup directory.
The following example shows how Terraform maps the volumes for SAP HANA on a
Compute Engine n2-highmem-32 instance, which has 256 GB of memory:
hana-ssd-example:~ # lvs
LV VG Attr LSize Pool Origin Data% Meta% Move Log Cpy%Sync Convert
data vg_hana_data -wi-ao---- 308.00g
log vg_hana_log -wi-ao---- 128.00g
shared vg_hana_shared -wi-ao---- 256.00g
usrsap vg_hana_usrsap -wi-ao---- 32.00g
backup vg_hanabackup -wi-ao---- 512.00g
The sizes of your volumes for the same machine type might differ slightly from
what is shown in this example.
When you opt to deploy a single-disk layout using the Terraform configurations
provided by Google Cloud, the deployment script
maps the /hana/data , /hana/log , /usr/sap , and /hana/shared
directories to their own individual logical volume for simplified resizing and maps them to
the SSD-based Persistent Disk or Hyperdisk volume in a single volume group.
The Terraform configurations also map the /hanabackup directory
to a logical volume in a separate volume group, which is then mapped to a Balanced
Persistent Disk or Hyperdisk Balanced.
Optional persistent disk storage for backups
When storing SAP HANA backups on a disk, we recommend that you use a Balanced Persistent Disk ( pd-balanced ).
If you want to reduce costs, then you can use a Standard HDD Persistent Disk
( pd-standard ). However, use a Balanced Persistent Disk when a higher
throughput or concurrency is needed.
The SAP HANA backup volume size is designed to provide optimal baseline and
burst throughput as well as the ability to hold several backup sets. Holding
multiple backup sets in the backup volume makes it easier to recover your
database if necessary.
To make the SAP HANA backups available as a regional resource for disaster recovery,
you can use Compute Engine disk snapshots. You can schedule
snapshots to regularly and automatically back up your disk. For more information, see
About archive and standard disk snapshots .
If you use SAP HANA dynamic tiering, then the backup storage must be large enough to
hold both the in-memory data and the data that is managed on disk by the dynamic
tiering server.
You can use other mechanisms for storing SAP HANA backups. If you use the
Backint feature of Google Cloud's Agent for SAP, then you can backup SAP HANA
directly to a Cloud Storage bucket, which makes the use of a Persistent Disk
volume for storing backups optional.
SAP HANA dynamic tiering
SAP HANA dynamic tiering is certified by SAP for use in production environments
on Google Cloud. SAP HANA dynamic tiering extends SAP HANA data storage by
storing data that is infrequently accessed on disk instead of in memory.
For more information, see SAP HANA Dynamic Tiering on Google Cloud .
SAP HANA Fast Restart option
For SAP HANA 2.0 SP04 and later, Google Cloud strongly
recommends the SAP HANA Fast Restart option .
This option is automatically enabled if you deploy SAP HANA using
Google Cloud's Terraform module sap_hana or sap_hana_ha , version
202309280828 or later. For information about how to manually enable SAP HANA Fast Restart, see
Enable the SAP HANA Fast Restart option .
SAP HANA Fast Restart reduces restart time in the event that SAP HANA
terminates, but the operating system remains running. To reduce the restart
time, SAP HANA leverages the SAP HANA persistent memory functionality to
preserve MAIN data fragments of column store tables in DRAM that is
mapped to the tmpfs file system.
Additionally, on instances in the M2, M3, and M4 families of Compute Engine
memory-optimized machine types, SAP HANA Fast Restart improves recovery
time if uncorrectable errors occur in memory. For more information,
see Memory-error recovery with Fast Restart on Compute Engine instances .
Required OS settings for SAP HANA Fast Restart
To use SAP HANA Fast Restart, your operating system must be tuned as
required by SAP.
If you use the Terraform configuration files that
Google Cloud provides, then the kernel settings are set
for you.
If you don't use the deployment files that Google Cloud provides, SAP
provides guidance for configuring both the RHEL and SLES operating systems
for SAP HANA. For SAP HANA Fast Restart, pay particular attention to
setting numa_balancing and transparent_hugepage correctly.
If you use RHEL, use the sap-hana tuned profile, if it is available.
For the configuration steps, see:
SAP note 2292690 - SAP HANA DB: Recommended OS settings for RHEL 7
SAP note 2777782 - SAP HANA DB: Recommended OS Settings for RHEL 8
SAP note 3108302 - SAP HANA DB: Recommended OS Settings for RHEL 9
If you use SLES, use the saptune tool from SUSE to apply the required
configuration. To apply all of the recommended SAP HANA settings, including
both of the preceding kernel parameters, specify the following
saptune command:
saptune solution apply HANA
For more information about configuring SLES for SAP HANA, see:
SAP note 2205917 - SAP HANA DB: Recommended OS settings for SLES 12 / SLES for SAP Applications 12
SAP note 2684254 - SAP HANA DB: Recommended OS settings for SLES 15 / SLES for SAP Applications 15
Memory-error recovery with Fast Restart on Compute Engine instances
Enabling SAP HANA Fast Restart on compute instances in the M2, M3, and M4 families of
Compute Engine memory-optimized machine types reduces the time it
takes SAP HANA to recover from uncorrectable memory errors.
By leveraging Intel processor capabilities, the M2, M3, and M4 machine types can
keep running when uncorrectable errors occur in the memory subsystem.
If SAP HANA Fast Restart is enabled when the memory error
occurs, then the affected SAP HANA process restarts, but the whole database
doesn't need to be reloaded, only the affected file block.
Machine types that support memory-error recovery
The following Compute Engine machine types support
memory-error recovery:
M4:
m4-megamem-28
m4-megamem-56
m4-megamem-112
m4-megamem-224
m4-ultramem-56
m4-ultramem-112
m4-ultramem-224
M3:
m3-ultramem-32
m3-ultramem-64
m3-ultramem-128
m3-megamem-64
m3-megamem-128
M2:
m2-ultramem-208
m2-ultramem-416
m2-megamem-416
m2-hypermem-416
Required operating systems for memory-error recovery
With the required kernel patches, the following operating systems support
memory-error recovery with SAP HANA Fast Restart:
SUSE Linux Enterprise Server (SLES) for SAP, 12 SP3 or later.
Included in Compute Engine public images with a build date of
v202103* or later.
If you need to apply the latest kernel patches to an existing
deployment, follow your standard update process. For example,
issue the following commands:
sudo zypper refresh
sudo zypper update
Red Hat Enterprise Linux (RHEL) for SAP, 8.4 or later.
File server options
The file server options for SAP HANA on Google Cloud include
Filestore and Google Cloud NetApp Volumes.
For more information about all of the file server options for
SAP on Google Cloud, see
File sharing solutions for SAP on Google Cloud .
Filestore
For the /hana/shared volume in a single zone scale-out configuration, we
suggest using the Filestore Basic
service tier as it is designed for zonal resources. For scenarios where
additional resilience is required, you can use
Filestore Regional (formerly Enterprise). For more information, see
Components in an SAP HANA scale-out system on Google Cloud .
Google Cloud NetApp Volumes
Google Cloud NetApp Volumes is a fully-managed, cloud-based
data storage service that you can use to create an NFS file system for SAP
HANA scale-up systems on all Compute Engine instance types that are
certified for use with SAP HANA.
To use NetApp Volumes with the SAP HANA data or log volumes, use
the Premium or Extreme service level.
For information about using
NetApp Volumes with your SAP HANA deployment, see
About Google Cloud NetApp Volumes .
User identification and resource access
When planning security for an SAP deployment on Google Cloud,
you must identify:
The user accounts and applications that need access to the
Google Cloud resources in your Google Cloud project
The specific Google Cloud resources in your project that each user
needs to access
You must add each user to your project by adding their Google account ID
to the project as a principal. For an application program that uses
Google Cloud resources,
you create a service account , which provides a user identity for the
program within your project.
Compute Engine VMs have their own service account. Any programs that
run on a VM can use the VM service account, as long as the VM service
account has the resource permissions that the program needs.
After you identify the Google Cloud resources that each user needs
to use, you grant each user permission to use each resource by assigning
resource-specific roles to the user. Review the predefined roles that
IAM provides for each resource,
and assign roles to each user that provide just enough permissions to
complete the user's tasks or functions and no more.
If you need more granular or restrictive control over permissions than
the predefined IAM roles provide, you can create custom roles.
For more information about the IAM roles that SAP
programs need on Google Cloud, see Identity and access management for SAP
programs on Google Cloud .
For an overview of identity and access management for SAP on
Google Cloud, see Identity and access management overview for SAP
on Google Cloud .
Bare metal machine types for SAP HANA
This section provides information about running
SAP HANA on the bare metal machine types provided by Compute Engine,
which include the following:
C3 bare metal machine types : The C3 series of general-purpose machines
includes bare metal machine types.
For information about the C3 bare metal machine types that SAP has certified
for use with SAP HANA, see
C3 general-purpose bare metal machine types .
For information about the operating system versions that you can use with
the C3 bare metal machine types to run SAP HANA workloads, see
Certified operating systems for SAP HANA .
For information about the minimum block storage that you need to run SAP
HANA on the C3 bare metal machine types, see
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes .
For more information about the C3 machine series, see
C3 machine series .
X4 : The fourth generation of memory-optimized machine types offered by
Compute Engine. These machines are designed to primarily support SAP
workloads that require up to 32 TB of memory.
For information about the X4 machine types that SAP has certified for use
with SAP HANA, see
X4 memory-optimized bare metal machine types .
For information about the operating system versions that you can use with
the X4 machine types to run SAP HANA workloads, see
Certified operating systems for SAP HANA .
For information about supported block storage for running SAP HANA on X4
machine types, see
Supported block storage for X4 .
For more information about the X4 machine series, see
X4 machine series .
Supported block storage for X4
To provide block storage for running SAP HANA workloads on X4 machines, you can
use Hyperdisk Extreme or Hyperdisk Balanced
volumes.
For information about storage configurations recommended by Google Cloud
for X4 instances, see the following sections:
Cost-optimized configuration
Performance-tuned configuration
Flexible performance configuration
Note: The following storage configurations are only initial recommendations. We
strongly recommend that you size your workloads and perform validations to
ensure optimal performance.
Cost-optimized configuration
The following table shows a cost-optimized storage configuration for running SAP
HANA on X4 machine types. The sizes in the following table assume that you are
mounting all the SAP HANA volumes on individual disks.
Machine type
Boot volume (GB)
/usr/sap (GB)
/hana/shared (GB)
/hana/log size (GB), IOPS, and throughput
/hana/data (GB), IOPS, and throughput
Hyperdisk Balanced
x4-480-6t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
6,144 GB with 6,144 IOPS and 2,400 Mbps throughput
x4-480-8t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
8,192 GB with 8,192 IOPS and 2,400 Mbps throughput
x4-960-12t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
12,288 GB with 12,288 IOPS and 2,400 Mbps throughput
x4-960-16t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
16,384 GB with 16,384 IOPS and 2,400 Mbps throughput
x4-1440-24t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
24,576 GB with 24,576 IOPS and 2,400 Mbps throughput
x4-1920-32t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
32,768 GB with 32,768 IOPS and 2,400 Mbps throughput
Performance-tuned configuration
The following table shows a performance-tuned storage configuration for running
SAP HANA on X4 machine types. The sizes in the following table assume that you
are mounting all the SAP HANA volumes on individual disks.
Machine type
Boot volume (GB)
/usr/sap (GB)
/hana/shared (GB)
/hana/log size (GB), IOPS, and throughput
/hana/data (GB), IOPS, and throughput
Hyperdisk Balanced
Hyperdisk Extreme
x4-480-6t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
6,144 GB with 12,288 IOPS and 5,000 Mbps throughput
x4-480-8t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
8,192 GB with 16,384 IOPS and 5,000 Mbps throughput
x4-960-12t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
12,288 GB with 24,576 IOPS and 5,000 Mbps throughput
x4-960-16t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
16,384 GB with 32,768 IOPS and 5,000 Mbps throughput
x4-1440-24t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
24,576 GB with 49,152 IOPS and 5,000 Mbps throughput
x4-1920-32t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
32,768 GB with 65,536 IOPS and 5,000 Mbps throughput
Flexible performance configuration
The following table shows a storage configuration that offers a flexible
performance for running SAP HANA on X4 machine types. The sizes in the following
table assume that you are mounting all the SAP HANA volumes on individual disks.
Machine type
Boot volume (GB)
/usr/sap (GB)
/hana/shared (GB)
/hana/log size (GB), IOPS, and throughput
/hana/data (GB), IOPS, and throughput
Hyperdisk Balanced
Hyperdisk Extreme
x4-480-6t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
6,144 GB with 12,288 IOPS and 5,000 Mbps throughput
x4-480-8t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
8,192 GB with 16,384 IOPS and 5,000 Mbps throughput
x4-960-12t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,400 Mbps throughput
12,288 GB with 24,576 IOPS and 5,000 Mbps throughput
x4-960-16t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,500 Mbps throughput
16,384 GB with 32,768 IOPS and 5,000 Mbps throughput
x4-1440-24t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,500 Mbps throughput
24,576 GB with 49,152 IOPS and 5,000 Mbps throughput
x4-1920-32t-metal
50
32
1,024
512 GB with 10,000 IOPS, and 2,500 Mbps throughput
32,768 GB with 65,536 IOPS and 5,000 Mbps throughput
Deployment automation
To run SAP HANA, you can deploy the bare metal instances using the Terraform
configurations provided by Google Cloud. These configurations are designed
to perform the following by default:
Deploy Hyperdisk Extreme volumes to host the SAP HANA data and
log volumes. To deploy Hyperdisk Balanced volumes instead, use
the disk_type Terraform argument.
Enable the SAP HANA Fast Restart option .
If you're hosting the SAP HANA backup volume on a disk, then these Terraform
configurations deploy a Hyperdisk Balanced volume for it by
default. This disk deployment is determined by the backup_disk_type
Terraform argument.
For information about the Terraform configurations that Google Cloud
provides for deploying SAP HANA, see
Supported SAP solutions .
Post-deployment tasks
After you deploy a bare metal instance to run SAP HANA, we recommend that you do
the following:
Make sure that version 3.12 (latest) of
Google Cloud's Agent for SAP is installed. For information about how to install
the agent, see
Install and configure Google Cloud's Agent for SAP on a Compute Engine VM instance .
For information about how to update to the latest version, see
Update Google Cloud's Agent for SAP .
On X4 instances, optimize the OS configuration to best support SAP HANA
workloads. You can do this by using Google Cloud's Agent for SAP. For more
information, see
Configure guest OS on bare metal instances .
Evaluate your SAP workload using Workload Manager - a
rule-based validation service that lets you scan your workloads and detect
deviations from standards, rules, and best practices prescribed by SAP,
Google Cloud, and OS vendors. For information about how to evaluate
your SAP workload, see
Create and run an evaluation . For
information about the supported evaluations for SAP workloads, see
Workload Manager best practices for SAP .
Hyperthreading
Hyperthreading is enabled by default and is the recommended setting for all
Compute Engine machine types.
For the optimal performance of SAP HANA on compute instances with over 1,000
vCPUs, we strongly recommend that you use SAP HANA 2.0 SPS7 revision 76 or
later.
If you're running an older version of SAP HANA with an OLTP workload on compute
instances with over 1,000 vCPUs, then
turning off hyperthreading might have a marginal performance benefit. We
recommend testing this during load testing. For information about how to disable
hyperthreading for your X4 instance by using Google Cloud's Agent for SAP, see
Disable hyperthreading for an X4 instance .
Pricing and quota considerations for SAP HANA
You are responsible for the costs incurred for using the resources created by
following this deployment guide. Use the
Google Cloud pricing calculator
to help estimate your actual costs.
Important : RHEL and SLES are
premium images and all prices for premium images are in addition to charges for
using a machine type. For details about premium image pricing, refer to the
Premium images .
Note: You might be able to achieve a
sustained use discount
of up to 30% for your Compute Engine instances.
Quotas
SAP HANA requires more CPU and memory than many workloads on Google Cloud.
If you have a new Google Cloud account, or if you
haven't asked for an increased quota, then you would need to do so to deploy SAP
HANA.
The following table shows quota values for single-host, scale-up SAP HANA
systems by Compute Engine machine type.
For a scale-out SAP HANA system or multiple scale-up systems, you
need to include the total resource amounts for all systems.
For guidance on determining the storage requirements for
scale-out systems, see Determining persistent disk size .
View your existing quota ,
and compare with your resource (CPU, memory, and storage) requirements to see
what increase to ask for. You can then request a quota-limit increase .
While extreme persistent disk ( pd-extreme ) is still certified for use with SAP
HANA, we recommend that you use Hyperdisk Extreme instead, which provides
greater performance. If you want to use extreme persistent disks, then you must
provision them using the Hyperdisk Extreme sizes.
Balanced Persistent Disk
Compute Engine machine type
vCPU
Memory (GB)
Quota (GB)
n1-highmem-32
32
208
943
n1-highmem-64
64
416
1,155
n1-highmem-96
96
624
1,716
n2-highmem-32
32
256
943
n2-highmem-48
48
384
1,068
n2-highmem-64
64
512
1,414
n2-highmem-80
80
640
1,760
n2-highmem-96
96
768
2,105
n2-highmem-128
128
864
2,364
c3-standard-44
44
176
507
c3-highmem-44
44
352
982
c3-highmem-88
88
704
1,932
c3-highmem-176
176
1,408
3,257
m1-megamem-96
96
1,433
3,287
m1-ultramem-40
40
961
2,626
m1-ultramem-80
80
1,922
3,874
m1-ultramem-160
160
3,844
6,180
m2-megamem-416
416
5,888
8,633
m2-ultramem-208
208
5,888
8,633
m2-ultramem-416
416
11,766
15,660
m2-hypermem-416
416
8,832
12,166
m3-ultramem-32
32
976
2,667
m3-ultramem-64
64
1,952
3,910
m3-ultramem-128
128
3,904
6,252
m3-megamem-64
64
976
2,667
m3-megamem-128
128
1,952
3,910
SSD Persistent Disk
Compute Engine machine type
vCPU
Memory (GB)
Quota (GB)
n1-highmem-32
32
208
593
n1-highmem-64
64
416
1,155
n1-highmem-96
96
624
1,716
n2-highmem-32
32
256
723
n2-highmem-48
48
384
1,068
n2-highmem-64
64
512
1,414
n2-highmem-80
80
640
1,760
n2-highmem-96
96
768
2,105
n2-highmem-128
128
864
2,364
c3-standard-44
44
176
507
c3-highmem-44
44
352
982
c3-highmem-88
88
704
1,932
c3-highmem-176
176
1,408
3,257
m1-megamem-96
96
1,433
3,287
m1-ultramem-40
40
961
2,626
m1-ultramem-80
80
1,922
3,874
m1-ultramem-160
160
3,844
6,180
m2-megamem-416
416
5,888
8,633
m2-ultramem-208
208
5,888
8,633
m2-ultramem-416
416
11,766
15,660
m2-hypermem-416
416
8,832
12,166
m3-ultramem-32
32
976
2,667
m3-ultramem-64
64
1,952
3,910
m3-ultramem-128
128
3,904
6,252
m3-megamem-64
64
976
2,667
m3-megamem-128
128
1,952
3,910
Hyperdisk Extreme
Compute Engine machine type
vCPU
Memory (GB)
Quota (GB)
n2-highmem-80
80
640
1,760
n2-highmem-96
96
768
2,105
n2-highmem-128
128
864
2,364
c3-highmem-88
88
704
1,932
c3-highmem-176
176
1,408
3,257
c3-highmem-192-metal
192
1,536
3,411
c4-highmem-96
96
744
2,040
c4-highmem-144
144
1,116
2,907
c4-highmem-192
192
1,488
3,353
c4-highmem-288
288
2,232
4,246
c4-highmem-288-metal
288
2,232
4,246
m1-megamem-96
96
1,433
3,287
m1-ultramem-80
80
1,922
3,874
m1-ultramem-160
160
3,844
6,180
m2-megamem-416
416
5,888
8,633
m2-ultramem-208
208
5,888
8,633
m2-ultramem-416
416
11,766
15,660
m2-hypermem-416
416
8,832
12,166
m3-ultramem-64
64
1,952
3,910
m3-ultramem-128
128
3,904
6,252
m3-megamem-64
64
976
2,667
m3-megamem-128
128
1,952
3,910
m4-megamem-112
112
1,488
3,353
m4-megamem-224
224
2,976
5,139
m4-ultramem-112
112
2,976
5,139
m4-ultramem-224
224
5,952
8,710
Note : From December 12, 2025, the naming convention for X4 machine types
has changed to clarify the memory they offer. For example, x4-megamem-960-metal has
changed to x4-960-16t-metal because it offers 16 TB of memory. While this naming
change is backwards compatible, we recommend that you use the updated names for new deployments.
x4-480-6t-metal
480
6,144
7,712
x4-480-8t-metal
480
8,192
9,760
x4-960-12t-metal
960
12,288
13,856
x4-960-16t-metal
960
16,384
17,952
x4-1440-24t-metal
1,440
24,576
26,144
x4-1920-32t-metal
1,920
32,768
34,336
Hyperdisk Balanced
Compute Engine machine type
vCPU
Memory (GB)
Quota (GB)
c3-standard-44
44
176
507
c3-highmem-44
44
352
982
c3-highmem-88
88
704
1,932
c3-highmem-176
176
1,408
3,257
c3-highmem-192-metal
192
1,536
3,411
c4-highmem-32
32
248
701
c4-highmem-48
48
372
1,036
c4-highmem-96
96
744
2,040
c4-highmem-144
144
1,116
2,907
c4-highmem-192
192
1,488
3,353
c4-highmem-288
288
2,232
4,246
c4-highmem-288-metal
288
2,232
4,246
m1-megamem-96
96
1,433
3,287
m1-ultramem-40
40
961
2,626
m1-ultramem-80
80
1,922
3,874
m1-ultramem-160
160
3,844
6,180
m2-megamem-416
416
5,888
8,633
m2-ultramem-208
208
5,888
8,633
m2-ultramem-416
416
11,766
15,660
m2-hypermem-416
416
8,832
12,166
m3-ultramem-32
32
976
2,667
m3-ultramem-64
64
1,952
3,910
m3-ultramem-128
128
3,904
6,252
m3-megamem-64
64
976
2,667
m3-megamem-128
128
1,952
3,910
m4-megamem-28
28
372
1,036
m4-megamem-56
56
744
892
m4-megamem-112
112
1,488
3,353
m4-megamem-224
224
2,976
5,139
m4-ultramem-56
56
2,976
3,353
m4-ultramem-112
112
2,976
5,139
m4-ultramem-224
224
5,952
8,710
m4-hypermem-16
16
248
701
m4-hypermem-32
32
496
1,371
m4-hypermem-64
64
992
2,710
Note : From December 12, 2025, the naming convention for X4 machine types
has changed to clarify the memory they offer. For example, x4-megamem-960-metal has
changed to x4-960-16t-metal because it offers 16 TB of memory. While this naming
change is backwards compatible, we recommend that you use the updated names for new deployments.
x4-480-6t-metal
480
6,144
7,712
x4-480-8t-metal
480
8,192
9,760
x4-960-12t-metal
960
12,288
13,856
x4-960-16t-metal
960
16,384
17,952
x4-1440-24t-metal
1,440
24,576
26,144
x4-1920-32t-metal
1,920
32,768
34,336
Standard Persistent Disk
Compute Engine machine type
vCPU
Memory (GB)
Quota (GB)
n1-highmem-32
32
208
448
n1-highmem-64
64
416
864
n1-highmem-96
96
624
1,280
n2-highmem-32
32
256
544
n2-highmem-48
48
384
800
n2-highmem-64
64
512
1,056
n2-highmem-80
80
640
1,312
n2-highmem-96
96
768
1,568
n2-highmem-128
128
864
1,760
m1-megamem-96
96
1,433
2,898
m1-ultramem-40
40
961
1,954
m1-ultramem-80
80
1,922
3,876
m1-ultramem-160
160
3,844
7,720
m2-megamem-416
416
5,888
11,832
m2-ultramem-208
208
5,888
11,832
m2-ultramem-416
416
11,766
23,564
m2-hypermem-416
416
8,832
17,696
Licensing
Running SAP HANA on Google Cloud requires you to bring your own license (BYOL).
Note: After you deploy SAP HANA on Google Cloud, you must install your
permanent SAP HANA
license before the temporary license for SAP HANA expires. If you don't, then your
SAP HANA system might go into database lockdown after the temporary license
expires.
For more information from SAP about managing your SAP HANA licenses, see
License Keys for the SAP HANA Database .
Deployment architectures
On Google Cloud, you can deploy SAP HANA in scale-up and scale-out
architectures.
Scale-up architecture
The following diagram shows the scale-up architecture. In the diagram, notice
both the deployment on Google Cloud and the disk layout. You can use Cloud Storage
to back up your local backups available in /hanabackup . This mount must be
sized equal to or greater than the data mount.
On Google Cloud, an SAP HANA single-host, scale-up architecture can
include the following components:
One Compute Engine instance for the SAP HANA database with a network
bandwidth of up to 32 Gbps, or up to 100 Gbps on selected machine types using
high-bandwidth networking .
For information about the machine types that are certified for use with SAP
HANA, see
Certified machine types for SAP HANA .
If you choose to deploy a compute instance, then you can also deploy it on top of
a sole-tenant node. For more information, see
Sole tenancy .
SSD based Compute Engine Persistent Disk or Hyperdisk
volumes, as follows:
One disk for each of the following directories: /hana/data , /hana/log
/hana/shared , and /usr/sap . For information about disk recommendations
for SAP HANA, see
Persistent disk storage .
For SAP optimum performance, the Persistent Disk or
Hyperdisk volumes must be sized according to the table in
Minimum sizes for SSD-based Persistent Disk and Hyperdisk volumes .
One Balanced Persistent Disk for the boot disk.
Optionally, a disk for the backup of the SAP HANA database.
Compute Engine firewall rules restricting access to instances.
Google Cloud's Agent for SAP .
From version 2.0, you can configure this agent to collect the SAP HANA
monitoring metrics, which lets you monitor your SAP HANA instances. From
version 3.0, you can also use its
Backint
feature to store SAP HANA backups directly in Cloud Storage bucket,
and retrieve as required.
An optional, but recommended, subnetwork with a custom topology and IP ranges
in the Google Cloud region of your choice. The SAP HANA database and the
other Compute Engine instances are launched within this subnetwork.
You can use an existing subnetwork for SAP HANA.
Optional components:
SAP HANA Cockpit or SAP HANA Studio on a small Compute Engine instance.
If you provision your SAP HANA system without a public IP, then it cannot connect
directly to resources through the public internet. Therefore, you need to
provide an indirect method for internet access using the following options:
Configure Google private access
so that your compute instance can access the Google Cloud APIs.
Use Cloud NAT
or configure a compute instance as a NAT gateway to access the public internet.
For administrative purposes, you can use TCP forwarding to connect to the systems.
For information about using Identity-Aware Proxy for TCP forwarding, see
Using IAP for TCP forwarding .
Use a compute instance that is configured as a bastion host to
access the public internet.
Scale-out architectures
The scale-out architecture consists of one master host, a number of worker
hosts, and, optionally, one or more standby hosts. The hosts are interconnected
through a network that supports sending data between hosts at rates of up to
32 Gbps, or up to 100 Gbps on selected machine types using
high-bandwidth networking .
As the workload demand increases, especially when using Online Analytical
Processing (OLAP), a multi-host scale-out architecture can distribute the load
across all hosts.
The following diagram shows a scale-out architecture for SAP HANA on
Google Cloud:
Standby hosts support the SAP HANA host auto-failover fault recovery solution.
For more information about host auto-failover on Google Cloud, see
SAP HANA host auto-failover on Google Cloud .
The following diagram shows a scale-out architecture with host auto-failover on Google Cloud.
Disk structures for SAP HANA scale-out systems on Google Cloud
Except for standby hosts, each host has its own /hana/data , /hana/log , and,
usually, /usr/sap volumes on SSD-based Persistent Disk or Hyperdisk volumes, which provide
consistent, high IOPS, and IO services. The master host also serves as an NFS
master for the /hana/shared and /hanabackup volumes, and this NFS master is mounted on
each worker and standby host.
For a standby host, the /hana/data and /hana/log volumes are not mounted
until a takeover occurs.
Components in an SAP HANA scale-out system on Google Cloud
A multi-host SAP HANA scale-out architecture on Google Cloud contains the following components:
1 Compute Engine instance for each SAP HANA host in the system,
including 1 master host, up to 15 worker hosts, and up to 3 optional
standby hosts.
Each compute instance uses the same Compute Engine machine type. For information
about the machine types that are certified for use with SAP HANA, see
Certified machine types for SAP HANA .
SSD based Persistent Disk or Hyperdisk volumes, as follows:
Each compute instance must include a disk, mounted in the correct location.
Optionally, if you are not deploying an SAP HANA host auto-failover system,
then a disk for the /hanabackup local volume for each compute instance.
A separately deployed NFS solution for sharing the /hana/shared and the
/hanabackup volumes with the worker and standby hosts. You can use
Filestore or another NFS solution.
Compute Engine firewall rules or other network access controls that
restrict access to your Compute Engine instances while allowing
communication between the instances and any other distributed or remote
resources that your SAP HANA system requires.
Google Cloud's Agent for SAP .
From version 2.0, you can configure this agent to collect the SAP HANA
monitoring metrics, which lets you monitor your SAP HANA instances. From
version 3.0, you can also use its
Backint
feature to store SAP HANA backups directly in Cloud Storage bucket,
and retrieve as required.
An optional, but recommended, subnetwork with a custom topology and IP ranges
in the Google Cloud region of your choice. The SAP HANA database
and the other Compute Engine instances are launched within this
subnetwork. You can use an existing subnetwork if you prefer.
Optional components:
SAP HANA Cockpit or SAP HANA Studio on a small Compute Engine instance.
If you provision your SAP HANA system without a public IP, then it cannot connect
directly to resources through the public internet. Therefore, you need to
provide an indirect method for internet access using the following options:
Configure Google private access
so that your compute instance can access the Google Cloud APIs.
Use Cloud NAT
or configure a compute instance as a NAT gateway to access the public internet.
For administrative purposes, you can use TCP forwarding to connect to the systems.
For information about using Identity-Aware Proxy for TCP forwarding, see Using IAP for TCP forwarding .
Use a compute instance that is configured as a bastion host to
access the public internet.
High availability for SAP HANA systems on Google Cloud
To design a high-availability configuration for SAP HANA on Google Cloud,
you can use a combination of Google Cloud, SAP, and OS-native features.
For information about the high-availability options, see
SAP HANA high-availability planning guide .
Automation for SAP HANA deployments
Google Cloud provides Terraform configuration files
that you can use to automate the deployment of Google Cloud
infrastructure and, optionally, SAP HANA.
The deployment automation options that Google Cloud
provides support the following SAP HANA deployment scenarios:
Scale up
Scale up in a two-node high-availability cluster
Scale out without standby nodes
Scale out without standby nodes in a high-availability cluster
Scale out with SAP HANA Host auto-failover standby nodes
For more information about the automation for the scale-up or scale-out
deployment scenarios, see:
Deployment automation for scale-up systems
Deployment automation for scale-out systems
Automating the deployment of the SAP HANA instance
Optionally, you can include the installation of SAP HANA with the automated
deployment of the Google Cloud infrastructure.
The installation scripts that Google Cloud provides install SAP
HANA after the infrastructure is deployed.
If any problems prevent the
installation of an SAP HANA instance, the infrastructure is usually still
deployed and configured. You can then either use the deployed infrastructure
and install SAP HANA manually or delete the infrastructure, correct the
problem, and rerun the deployment automation until the SAP HANA instance
is installed successfully.
When you use the installation scripts that Google Cloud to install SAP
HANA, you must provide values for certain parameters. If you
omit these parameters or don't specify valid values for all of them, then the
installation script fails to install the SAP HANA instance on the deployed
infrastructure.
When you use the Terraform configuration files that Google Cloud
provides to install SAP HANA, you must provide valid values for the following
arguments: sap_hana_deployment_bucket , sap_hana_sid ,
sap_hana_sidadm_uid , sap_hana_sidadm_password , and
sap_hana_system_password . For more information about the Terraform
arguments, see
Terraform: SAP HANA scale-up deployment guide .
Password management
To automate the installation of SAP HANA on the deployed Compute Engine
instances, you must specify the passwords for the SID adm user
and the database user.
To specify these passwords, use one of the following options:
(Recommended) To provide the passwords to the installation scripts securely, you can create
secrets using
Secret Manager ,
which is a charged service of Google Cloud, and then specify the names
of the secrets as values for the sap_hana_sidadm_password_secret and
sap_hana_system_password_secret arguments.
Make sure that the secret you use is the same Google Cloud project where
you deploy SAP HANA.
For information about Secret Manager pricing, see
Secret Manager pricing .
Alternatively, you can specify the passwords in plain text on the
sap_hana_sidadm_password and sap_hana_system_password arguments.
You must use either secrets for both passwords or specify them both
directly in plain text.
Backup management
While automating your SAP HANA deployment by using the Terraform configurations
provided by Google Cloud, you can use one of the following backup options:
Disk based backup : You can choose to deploy a disk to host the
/hanabackup volume. For this, use the following Terraform arguments:
include_backup_disk , backup_disk_type , and sap_hana_backup_size .
This option is not available for scale-out deployments that use the host
auto-failover solution. For such deployments, you can use the Backint related
Terraform arguments.
Backint based backup : You can choose to configure Backint based backup and
recovery for your SAP HANA deployment. For this, use the following Terraform
arguments: configure_backint and backint_gcs_bucket .
The Backint related Terraform arguments are available from version
1.5.807307812 or later of the Terraform configurations that
deploy SAP HANA. For information about Backint based backup and recovery,
see Backup and recovery for SAP HANA by using Backint .
Disk deployment by Terraform
When you automate the deployment of SAP HANA by using the Terraform
configuration provided by Google Cloud, then the default disk deployment
is as follows:
Volume or directory
Default disk deployed for X4 instances
Default disk deployed for C3 bare metal instances
Default disk deployed for VM instances
Boot volume
Hyperdisk Balanced
Hyperdisk Balanced
Balanced Persistent Disk
/hana/data
Hyperdisk Extreme
Hyperdisk Balanced
SSD Persistent Disk
/hana/log
Hyperdisk Extreme
Hyperdisk Balanced
SSD Persistent Disk
/hana/shared
Hyperdisk Balanced
Hyperdisk Balanced
SSD Persistent Disk, if you specify
disk_type = "pd-ssd" in your Terraform configuration file.
Balanced Persistent Disk, in all other scenarios.
/hanabackup
Hyperdisk Balanced
Hyperdisk Balanced
Balanced Persistent Disk
/usr/sap
Hyperdisk Balanced
Hyperdisk Balanced
SSD Persistent Disk, if you specify
disk_type = "pd-ssd" in your Terraform configuration file.
Balanced Persistent Disk, in all other scenarios.
Custom machine types and automated deployments
The Terraform configuration files provided by Google Cloud don't support
the deployment of Compute Engine custom machine types.
If you need to use a custom machine type, then deploy an instance based on a
small predefined machine type first and, after the deployment is complete,
customize the instance as needed.
For more information about modifying compute instances, see
Modify compute instance configurations for SAP systems .
Deployment automation for scale-up systems
Google Cloud provides Terraform configuration files
that you can use to automate the deployment of SAP
HANA single-host scale-up systems.
The Terraform configuration files can be used to deploy the following:
A standalone, scale-up SAP HANA system.
For more information, see
Terraform: SAP HANA scale-up deployment guide .
An active and standby scale-up SAP HANA system on a Linux high-availability cluster.
For more information, see
Terraform: SAP HANA scale-up high-availability cluster configuration guide .
The Terraform configuration files can deploy the compute instances, disks for
block storage, SAP HANA, and, in the case of the Linux HA cluster, the required HA
components.
For information about creating these components, see the Prerequisites section
in Terraform: SAP HANA scale-up deployment guide .
Deployment automation for scale-out systems
Google Cloud provides Terraform configuration files that you can use to
automate the deployment of the SAP HANA multi-host scale-out systems.
To deploy a scale-out system that does not include SAP HANA host auto-failover,
see Terraform: SAP HANA Deployment Guide .
To deploy a scale-out system without standby hosts in a Linux high-availability
cluster, see
Terraform: SAP HANA high-availability cluster configuration guide .
To deploy a scale-out system that includes standby hosts, see
Terraform: SAP HANA Scale-Out System with Host Auto-Failover Deployment Guide .
The Terraform configuration can
deploy the compute instances, disks for block storage, and SAP HANA. They can also map NFS mount
points to the SAP HANA shared and backup volumes. For multi-host scale-out
deployments, the Terraform configuration can also deploy new Filestore instances to host the SAP
HANA shared and backup volumes.
File sharing solutions for multi-host scale-out and scale-out HA deployments
The Terraform configuration that Google Cloud provides for SAP HANA
multi-host scale-out deployment, by default, creates NFS exports for the
/hana/shared and /hanabackup volumes on the compute instance that hosts the
primary SAP HANA instance
and shares the volumes with the worker nodes.
However, if you want to use an NFS solution for sharing the /hana/shared and
/hanabackup volumes with your worker hosts, then you can use one of the
following options:
For multi-host scale-out setup:
To use an existing NFS solution that you have deployed on
Google Cloud, you need to specify the NFS mount points of the
/hana/shared and /hanabackup volumes to the sap_hana_shared_nfs and
sap_hana_backup_nfs arguments, respectively, in your Terraform configuration
file.
To deploy new Filestore instances and associate their file
shares with the /hana/shared and /hanabackup volumes, you need to define
a google_filestore_instance resource
and then specify the names of the file shares to the
sap_hana_shared_nfs_resource and sap_hana_backup_nfs_resource arguments,
respectively, in your Terraform configuration file.
To view an example, see
sample configuration .
For scale-out HA setup:
To use an existing NFS solution that you have deployed on
Google Cloud, you need to specify the NFS mount points of the
/hana/shared and /hanabackup volumes to the primary_sap_hana_shared_nfs
and primary_sap_hana_backup_nfs arguments for the primary SAP HANA
system, and secondary_sap_hana_shared_nfs and
secondary_sap_hana_backup_nfs arguments for the secondary SAP HANA
system , respectively, in your Terraform configuration file.
To view an example, see
sample configuration .
Support
For issues with Google Cloud infrastructure or services, contact Customer Care. You can find the contact information on the
Support Overview page
in the Google Cloud console. If Customer Care determines that a problem
resides in your SAP systems, then you are referred to SAP Support.
For SAP product-related issues, log your support request with
SAP support .
SAP evaluates the support ticket and, if it appears to be a Google Cloud
infrastructure issue, then SAP transfers that ticket to the appropriate
Google Cloud component in its system: BC-OP-LNX-GOOGLE or
BC-OP-NT-GOOGLE .
Support requirements
Before you can receive support for SAP systems and the
Google Cloud
infrastructure and services that they use, you must meet the minimum
support plan requirements.
For more information about the minimum support requirements for SAP on
Google Cloud, see:
Getting support for SAP on Google Cloud
SAP Note 2456406 - SAP on Google Cloud Platform: Support Prerequisites (An SAP user account is required)
What's next
For more information from SAP about SAP HANA dynamic tiering, see
SAP HANA Dynamic Tiering .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

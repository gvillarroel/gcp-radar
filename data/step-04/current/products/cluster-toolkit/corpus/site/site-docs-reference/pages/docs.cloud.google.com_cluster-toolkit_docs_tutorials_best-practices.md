---
title: "Best practices for running HPC workloads \_|\_ Cluster Toolkit \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices
  title: "Best practices for running HPC workloads \_|\_ Cluster Toolkit \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Best practices for running HPC workloads
Stay organized with collections
Save and categorize content based on your preferences.
This document provides best practices for tuning Google Cloud resources for
optimal performance of high performance computing (HPC) workloads.
Tip:
You can configure all recommendations in this document by using a
cluster blueprint .
To review cluster blueprints that follow these best practices, see
Cluster blueprint catalog .
Use HPC or compute optimized machine types
We recommend that you use the
Compute-optimized machine family ,
which includes machine types that are tailored to the specific requirements of
HPC and compute-intensive workloads, with a focus on delivering the highest
return on investment for a given workload class or usage model.
H4D machine types are optimized for tightly-coupled applications that scale
across multiple nodes. You can create H4D instances using a variety of
consumption and provisioning models, including on-demand instance creation,
one and three year committed use discounts (CUDs), and Dynamic Workload Scheduler. H4D also
supports remote direct memory access (RDMA) communication between H4D instances.
C2 and C2D machine series. Virtual machine (VM) instances
created using these machine series have a fixed virtual-to-physical core
mapping. They also expose NUMA cell
architecture to the guest OS. Both features are critical for performance of
tightly-coupled HPC applications.
To reduce the communication overhead between VM nodes, consolidate onto a
smaller number of c2-standard-60 or c2d-standard-112 VMs (with the same
total core count) instead of launching a larger number of smaller C2 or C2D VMs.
Inter-node communication is the greatest bottleneck in MPI workloads. Larger VM
shapes minimize this communication.
Use compact placement policies
To reduce internode latency,
VM instance placement policies
let you control the placement of VMs in Google Cloud data centers. We
recommend compact placement policies because they provide lower-latency
communication within a single zone.
Use the HPC VM image
Use the HPC VM image ,
which incorporates best practices for running HPC applications on Google Cloud.
These images are based on Rocky Linux 8 and are available at no additional cost
on Google Cloud.
Disable automatic updates
Caution: If your installed software is out-of-date, disabling automatic updates
can cause a security risk.
Automatic updates can significantly and unpredictably degrade performance. To
disable automatic updates, use the
google_disable_automatic_updates metadata flag
on VMs that use HPC VM images version v20240712 or later. Any VM image that
has an HPC VM image as its base can also use this feature, for example, Slurm
images.
For example, this setting affects dnf automatic package updates on the
following image families:
HPC images, such as hpc-rocky-linux-8 (project cloud-hpc-image-public )
Slurm images, such as slurm-gcp-6-6-hpc-rocky-linux-8 (project schedmd-slurm-public )
Cluster Toolkit provides a convenient setting on relevant modules to set this
metadata flag for you: allow_automatic_updates: false . Here is an example
using the vm-instance module:
- id: workstation-rocky
source: modules/compute/vm-instance
use: [network]
settings:
allow_automatic_updates: false
Here is an example for a Slurm nodeset:
- id: dynamic_nodeset
source: community/modules/compute/schedmd-slurm-gcp-v6-nodeset
use: [network]
settings:
node_count_static: 1
node_count_dynamic_max: 4
allow_automatic_updates: false
The examples/hpc-slurm-h4d/hpc-slurm-h4d.yaml
blueprint is configured to automatically disable updates by setting
allow_automatic_updates to false .
Adjust HPC VM image tunings
To get the best performance on Google Cloud, use the following image tunings.
You can use the following sample command to
manually configure a VM
to run HPC workloads. However, Cluster Toolkit automatically handles all of
this tuning when you use a cluster blueprint.
To create the VM manually, use the Google Cloud CLI and provide the following
settings.
gcloud compute instances create VM_NAME \
--image-family=hpc-rocky-linux-8 \
--image-project=cloud-hpc-image-public \
--machine-type= MACHINE_TYPE \
--network-interface=nic-type=GVNIC \
--metadata=google_mpi_tuning=--hpcthroughput \
--threads-per-core=1
The preceding sample command applies the following tunings:
Sets Google Virtual NIC (gVNIC)
network interface to enable better communication performance and higher
throughput: --network-interface=nic-type=GVNIC .
Sets network HPC throughput profile: --metadata=google_mpi_tuning=--hpcthroughput .
If the VM already exists, run sudo google_mpi_tuning --hpcthroughput to
update the network HPC throughput profile setting.
Disables simultaneous multithreading
(SMT) in the guest OS: --threads-per-core=1 .
If the machine type you entered doesn't support SMT ,
then omit this setting. If the VM already exists, run
sudo google_mpi_tuning --nosmt to disable simultaneous multithreading.
Turns off
Meltdown and Spectre mitigations .
The HPC VM image enables this setting by default.
Caution: Disabling these mitigations can incur a security risk.
If the VM already exists, run sudo google_mpi_tuning --nomitigation to turn
off Meltdown and Spectre mitigations.
Configure file system tuning
Each primary storage choice for tightly-coupled applications has its own cost,
performance profile, APIs, and consistency semantics. The primary choices
include the following:
Cloud Storage is a highly scalable, highly
durable, low cost object store. We recommend using Cloud Storage
with Cloud Storage FUSE because it lets you scale your data storage in a more
cost effective manner than file system services. You can use
Rapid Cache to colocate storage
in the same zone as your HPC workloads, providing higher throughput (up to
2.5 TB/s), lower latency, and location flexibility when used with a
multi-region bucket. However, this solution is not recommended for
applications that require full POSIX compliance.
Network File System (NFS) solutions, such as
Filestore and
Google Cloud NetApp Volumes . These solutions
let you deploy shared storage options. Both
Filestore and NetApp Volumes are
fully managed by Google Cloud. Use them when your
application does not have extreme I/O requirements to a single dataset. For
performance limits, see the Filestore documentation
and the NetApp Volumes documentation .
Google Cloud Managed Lustre is a fully
managed POSIX-based parallel file system. This solution is commonly used by
MPI applications.
Use Intel MPI
For best performance, use Intel MPI .
For Ansys Fluent, use Intel MPI 2018.4.274 . Set the version of Intel MPI in
Ansys Fluent by using the following command.
Replace MPI_DIRECTORY with the path to
the directory that contains your Intel MPI library.
export INTELMPI_ROOT=" MPI_DIRECTORY /compilers_and_libraries_2018.5.274/linux/mpi/intel64/"
Intel MPI collective algorithms can be tuned for optimal performance.
The recommended collective algorithms for Ansys Fluent is
-genv I_MPI_ADJUST_BCAST 8 -genv I_MPI_ADJUST_ALLREDUCE 10 .
For Simcenter STAR-CCM+, we also recommend you use the TCP fabric providers
by specifying the following environment variables: I_MPI_FABRICS shm:ofi
and FI_PROVIDER tcp .
For information about configuring MPI applications with H4D and Cloud RDMA, see
Set up and scale MPI applications on H4D VMs with Cloud RDMA .
Summary of best practices
The following is a summary of the recommended best practices for running
HPC workloads on Google Cloud.
Resource
Recommendation
Machine family
Use a machine type from one of the following
machine series:
H4D
H3
C2
C2D
OS image
Use the HPC VM image
Apply the HPC VM image best practices
File system
Use one of the following:
A Google Cloud managed NFS service such as Filestore or NetApp Volumes
A Google Cloud managed posix-based parallel
file system, such as Managed
Lustre
MPI
Use Intel MPI
Review
Set up and scale MPI applications on H4D VMs with Cloud RDMA
What's next
Run Ansys Fluent on Google Cloud .
Run Simcenter STAR-CCM+ on Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

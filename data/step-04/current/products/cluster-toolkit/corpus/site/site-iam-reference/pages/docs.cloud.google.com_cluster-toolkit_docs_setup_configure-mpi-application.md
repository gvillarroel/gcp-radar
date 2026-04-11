---
title: "Set up and scale MPI applications on H4D VMs with Cloud RDMA \_|\_ Cluster\
  \ Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application
  title: "Set up and scale MPI applications on H4D VMs with Cloud RDMA \_|\_ Cluster\
    \ Toolkit \_|\_ Google Cloud Documentation"
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
Set up and scale MPI applications on H4D VMs with Cloud RDMA
Stay organized with collections
Save and categorize content based on your preferences.
H4D instances on Google Cloud are optimized for High Performance Computing (HPC)
workloads and feature Cloud RDMA technology to deliver low-latency,
high-bandwidth inter-node communication. This guide provides procedures for
setting up and configuring Message Passing Interface (MPI) libraries to take
advantage of Cloud RDMA on your H4D clusters. It also provides best
practices for compiling and scaling your MPI applications on H4D instances.
Before you begin
Before you attempt any of the tasks in this guide, you must meet the
following prerequisites:
You have configured a Virtual Private Cloud (VPC) network and subnet
enabled for Cloud RDMA .
Increase memory lock and open file limits .
Overview of configuration steps
This page shows how to configure an H4D cluster for your MPI applications by
completing the following steps:
Create a cluster using Cluster Toolkit.
Set up the MPI library.
Configure the guest OS environment.
Optimize and scale MPI with Cloud RDMA.
Use specific commands to run MPI applications.
Set up the HPC cluster and MPI with Cluster Toolkit
To set up the cluster and MPI using Cluster Toolkit, Terraform, and
Slurm, complete the following steps:
Clone a GitHub repository that contains Terraform
scripts for deploying a Slurm cluster, for example the
GoogleCloudPlatform/cluster-toolkit/examples/hpc-slurm-h4d
folder.
Modify the Terraform configuration template to match your requirements:
Specify regions, zones, placement policies, and the H4D machine type.
Define virtual network interfaces (vNICs). To use Cloud RDMA,
each VM instance must have between 2 and 10 network interfaces: one IRDMA
vNIC and between one and nine standard gVNIC network interfaces.
Specify storage options such as Lustre, NFS, or Local SSD.
Reference a preconfigured Slurm scheduler setup.
Create or edit a Slurm job script to define the
application execution, including how to load the MPI environment.
Run Terraform to deploy the Slurm cluster based on your
configuration.
The following configuration steps are handled by the startup scripts within the
Cluster Toolkit blueprint, which are run during deployment:
Creates VM instances that use a pre-curated Google HPC VM image designed
for H4D, which includes the necessary network tunings, Intel RDMA
drivers, and ibverbs libraries.
Installs the specified MPI library, for example Intel MPI.
Installs the necessary storage client software, for example, NFS,
Cloud Storage FUSE, or Lustre.
Set up the MPI library
You can use Cloud RDMA on H4D with Intel MPI or Open
MPI. Your application's requirements or recommendations should determine
which MPI library you use. Many applications are built and tuned for a specific
MPI implementation.
Configure Intel MPI
Install the Intel MPI library on all of the nodes in the cluster.
Requirements
To successfully use Intel MPI with Cloud RDMA on H4D instances, you
must use the following versions:
Intel MPI : version 2021.17.2 or later.
libfabric library : version: 2.2.0 or later.
Configuration instructions
Refer to Intel's official documentation for the latest installation
procedures. If you use Cluster Toolkit, then it runs scripts that
typically handle the installation.
After installation, to ensure that Intel MPI uses the Cloud RDMA
interface, set the following environment variables in your job scripts or user
environment:
export FI_PROVIDER = "verbs;ofi_rxm"
export FI_VERBS_INLINE_SIZE: 39
export FI_OFI_RXM_BUFFER_SIZE: 4096
export FI_UNIVERSE_SIZE: N_MPI_RANKS
Replace N_MPI_RANKS with a value that is based on the number
of H4D instances you have provisioned. For example, if you have a 16-node
cluster, you would use the value 3072, which is 192 * 16 machines.
Configure Open MPI
Install the Open MPI library on all nodes in the cluster.
Requirements
To successfully use Open MPI with Cloud RDMA on H4D instances, you
must use the following versions:
Open MPI : version 5.0.9 or later.
Unified Communication X (UCX) framework : version 1.20.0 or later.
Configuration instructions
To configure your instances to use Open MPI, complete the following steps:
Install the Open MPI library on all nodes in the cluster. You can often
install Open MPI using system package managers or compile from source. If
you use Cluster Toolkit, then it runs scripts that typically handle
the installation.
Ensure your Open MPI installation is built with Unified Communication X (UCX)
framework and libfabric support. Open MPI uses UCX by default in many
configurations.
After installation, to ensure that Open MPI uses the Cloud RDMA
interface, set the following environment variables in your job scripts or
user environment:
# Open MPI flags
-mca pml ucx
# Environment variables
UCX_TLS = rc,sm
UCX_UD_VERBS_TIMEOUT = 1800s
UCX_RC_VERBS_TIMEOUT = 5s
UCX_UD_VERBS_TIMER_TICK = 1s
UCX_UD_VERBS_TX_MIN_INLINE = 128
UCX_RC_VERBS_RX_QUEUE_LEN = 32752
UCX_RC_VERBS_TX_POLL_ALWAYS = y
UCX_RC_VERBS_SEG_SIZE = 4096
UCX_RC_VERBS_FC_WND_SIZE = 8
IRDMA_TRANSPARENT_UD_QD_OVERRIDE = 1
An example command for Open MPI resembles the following:
mpirun -mca pml ucx -x UCX_TLS=rc,sm -x UCX_UD_VERBS_TIMEOUT=1800s -x UCX_RC_VERBS_TIMEOUT=5s -x UCX_UD_VERBS_TIMER_TICK=1s -x UCX_UD_VERBS_TX_MIN_INLINE=128 -x UCX_RC_VERBS_RX_QUEUE_LEN=32752 -x UCX_RC_VERBS_TX_POLL_ALWAYS=y -x UCX_RC_VERBS_SEG_SIZE=4096 -x UCX_RC_VERBS_FC_WND_SIZE=8 -x IRDMA_TRANSPARENT_UD_QD_OVERRIDE=1
Configure the guest OS environment
After you have created the H4D instances, configure the guest environment.
Set up user limits for MPI
In the guest OS of each H4D instance, increase the memory lock and open file
limits, using the values shown in the following example:
cat << EOF | sudo tee -a /etc/security/limits.conf
* hard memlock unlimited
* soft memlock unlimited
* hard nofile 65535
* soft nofile 65535
EOF
Set environment variables for Intel MPI
You can optionally set the following environment variables:
To pin MPI processes within NUMA nodes, potentially improving locality, set
the following:
export I_MPI_PIN_DOMAIN = numa
To increase output verbosity for troubleshooting and debugging, use the
following:
export I_MPI_DEBUG = 5
Optimize and scale MPI with Cloud RDMA
To achieve optimal performance with MPI on H4D VMs, use the following
configuration steps to optimize and scale your MPI applications.
Network tuning for Cloud RDMA
Use the following information when configuring your H4D instances to use
Cloud RDMA:
Interface selection : Explicitly configure your MPI library to use the
IRDMA network interface for inter-node communication. This is often
configured by using environment variables that select the fabric
provider, for example FI_PROVIDER for MPIs based on libfabric.
See Set up the MPI library .
MTU : The Falcon VPC network used with Cloud RDMA
supports a large MTU size . Ensure your interface and MPI
configuration take advantage of a larger MTU size to
reduce overhead. If you use Cluster Toolkit to deploy your
cluster, then the MTU size is set to 8896.
Buffer sizes : Tuning MPI buffer sizes can sometimes improve performance,
but default settings are often a good starting point.
Adjust the SAR threshold for libfabric
When using RxM (RDM over unreliable messaging), set the segmentation and
reassembly (SAR) threshold to 2147483648 (2 GB).
The SAR threshold setting determines the message size (in bytes) at which the
communication protocol switches from an in-order messaging protocol (also called
eager ) to the rendezvous protocol.
The rendezvous protocol is used to avoid excessive buffering by requiring a
handshake between the sender and receiver before transferring data directly from
the source to the destination buffer. The rendezvous protocol is generally used
for larger messages to avoid consuming excessive memory buffers on the
receiving side.
The default value for the SAR threshold ranges from 16 KB to 256 KB.
Except for StarCCM+ applications, use the environment variable
FI_OFI_RXM_SAR_LIMIT to adjust the threshold to 2 GB.
export FI_OFI_RXM_SAR_LIMIT = "2147483648"
Pin MPI processes
Binding MPI processes to specific CPU cores is crucial for performance,
especially on NUMA systems like H4D instances. This minimizes remote memory
access and helps to ensure consistent performance.
Intel MPI : Use I_MPI_PIN_DOMAIN or related environment variables,
or command-line options with mpirun like -genv I_MPI_PIN_PROCESSOR_LIST .
Open MPI : Use --map-by and --bind-to options with mpirun . For
example, the following pins N processes per node to
cores:
--map-by ppr: N :node --bind-to core
Experiment with different pinning strategies (for example, per core or per NUMA
node) based on your application's characteristics. Simultaneous multi-threading
(SMT) is disabled on H4D instances, so each vCPU represents a physical core.
Optimize MPI collectives
Collective communication, such as MPI_Bcast or MPI_Allreduce , can
significantly impact performance at scale.
Intel MPI : Explore environment variables like I_MPI_COLL_ALGO to
select different algorithms for collectives. Intel MPI often has tuned
algorithms for various message sizes and process counts.
Open MPI : Different collective algorithms can be selected through
Modular Component Architecture (MCA) parameters. Open MPI's hcoll or ucx
components often provide optimized collectives.
Compile applications
Compile your HPC applications with
compiler flags optimized for the AMD EPYC Turin architecture .
Use modern compilers : Use recent versions of GNU compiler collection
(GCC), Intel compilers, or AMD Optimizing C/C++ Compiler (AOCC), if
available within your environment.
Architecture flags : Use flags like -march=znver4 for AMD EPYC
Turin architecture if using GCC or AOCC.
Optimization levels : Employ appropriate optimization levels, for example
-O2 , -O3 , or -Ofast .
Vectorization : Ensure vectorization is enabled, which is often the
default when using optimization level -O2 or higher.
Link time optimization (LTO) : Consider using LTO with flags like -flto .
Optimize application scaling
Load Balancing : Ensure work is evenly distributed across MPI processes.
Communication Patterns : Analyze and optimize communication patterns to
reduce synchronization overhead and latency. Use point-to-point
communication instead of collectives where possible, or use non-blocking
operations.
I/O : For large-scale jobs, parallel I/O solutions like Lustre or other
parallel file systems accessible from your cluster are critical to avoid
bottlenecks. H4D supports Hyperdisk Balanced disks with
capped performance; for I/O intensive needs, we recommend using Local SSD.
Keep the drivers up to date
If you disable automatic updates on your H4D instances, then you should
regularly run the dnf update command on the instance to keep the
Cloud RDMA driver up to date.
Alternatively, if you used Cluster Toolkit to create your H4D
instances, then you can use the install_cloud_rdma_drivers setting in the
startup-script module to ensure that the latest Cloud RDMA drivers
are installed on instance startup.
Run MPI applications
To run your MPI application, use the mpirun command from your chosen MPI
library.
Open MPI
Create a host file that lists the network names of the H4D instances in
the cluster. Then use the following command:
# Example for Open MPI
mpirun -np TOTAL_PROCESSES --hostfile HOST_FILE --map-by ppr: PROCESSES_PER_NODE :node ./ YOUR_APPLICATION
Intel MPI
Create a host file that lists the network names of the H4D instances in
the cluster. Then use the following command:
# Example for Intel MPI
mpirun -n TOTAL_PROCESSES -ppn PROCESSES_PER_NODE -hosts HOST_FILE ./ YOUR_APPLICATION
Intel MPI within a Slurm script
To run your MPI application, use the mpirun command from your chosen MPI
library within your Slurm job script.
# Example for Intel MPI in a Slurm script
#SBATCH --nodes= NUMBER_OF_NODES
#SBATCH --ntasks-per-node= PROCESSES_PER_NODE
# Load Intel MPI module if necessary
module load intelmpi
# Set environment variables for Cloud RDMA
export FI_PROVIDER = "verbs;ofi_rxm"
export FI_VERBS_INLINE_SIZE: 39
export FI_OFI_RXM_BUFFER_SIZE: 4096
export FI_UNIVERSE_SIZE: N_MPI_RANKS
# Run the application
mpirun ./your_application
Replace the following:
NUMBER_OF_NODES : the number of instances in your cluster
PROCESSES_PER_NODE : the number of processes per node
N_MPI_RANKS : number of MPI ranks. For example, if you have
a 16 node cluster, you might use the value 192 * 16 , or 3072.
What's next
Explore Best practices for running HPC workloads .
Review the H4D machine series
documentation.
Consult the documentation for your specific MPI library and HPC application
for detailed tuning and environment variable options.
Explore the Cluster Toolkit GitHub repository
for HPC examples.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

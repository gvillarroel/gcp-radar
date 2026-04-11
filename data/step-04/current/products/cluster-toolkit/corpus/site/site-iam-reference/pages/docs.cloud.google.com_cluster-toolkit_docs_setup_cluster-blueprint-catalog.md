---
title: "Cluster blueprint catalog \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog
  title: "Cluster blueprint catalog \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Cluster blueprint catalog
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Google's catalog of cluster blueprints, which are reusable
YAML configuration files for deploying specific, opinionated solutions with the
Cluster Toolkit. Each blueprint defines a specific environment,
including the scheduler, storage, machine types, and base operating system.
You can filter the catalog by your required scheduler, storage, machine types,
and base operating system. Each entry highlights featured applications and
Google Cloud resources that the blueprint leverages.
A cluster blueprint is a YAML file that defines a reusable configuration and
describes the specific environment that you want to deploy using
Cluster Toolkit. A cluster blueprint implements and documents a
specific opinionated solution. For more information about cluster blueprints,
see Cluster blueprint .
To search the catalog, you can filter by a combination of your required
scheduler, storage, machine types, and base operating system. For machine types
that have NVIDIA GPUs automatically attached, the GPU type is listed in brackets.
For each cluster blueprint, featured applications and Google Cloud resources
that can be leveraged by using the blueprint are also highlighted.
Batch
GKE
Slurm
HTCondor
None
Cloud Storage
Filestore
Google Cloud Managed Lustre
Local SSD
None
A4X Max (NVIDIA GB300)
A4 (NVIDIA B200)
A4X (NVIDIA GB200 Superchips)
A3 Ultra (NVIDIA H200)
A3 Mega (NVIDIA H100)
A3 High (NVIDIA H100)
A2 (NVIDIA A100)
C2
C2D
C3
E2
G4 (NVIDIA RTX PRO 6000)
G2 (NVIDIA L4)
H4D
H3
N2
N1
TPUv4
TPU v6e
TPU7x
Container-Optimized OS
debian-11
debian-12
hpc-centos-7
hpc-rocky-linux-8
rocky-linux-8-optimized-gcp
rocky-linux-8
slurm-gcp-6-4-tf-2.14.0
ubuntu-2004-lts
ubuntu-2204-lts
ubuntu-2404-lts
Ansys Fluent
Bare metal
GPUs
TPUs
GROMACS
JAX
Kueue
Jobset
Maxtext
NCCL
NVIDIA IMEX
OpenFoam
Packer
PyTorch
QSim
Spack
Star CCM+
TensorFlow
VDI with VMD
WRF
Clear all
Cluster blueprint
Scheduler
Storage
Machine types
Base operating system
Featured software and compute resources
Collection
a4x-maxgpu-4g-metal
Slurm
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4X Max
ubuntu-accelerator-2404-arm64-with-nvidia-580
NVIDIA ConnectX-8
Bare Metal
NVIDIA IMEX
GPUs
RDMA
Core
gke-a4xmax
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4X Max
Container-Optimized OS
NVIDIA ConnectX-8
Bare Metal
GPUs
Jobset
Kueue
Core
gke-tpu-7x
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
TPU7x
Container-Optimized OS
TPUs
Jobset
Kueue
JAX
Multi-VPC Networking
Core
gke-tpu-v6e
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
TPU v6e
Container-Optimized OS
TPUs
Jobset
Kueue
JAX
Multi-VPC Networking
Core
a4-highgpu-8g
Slurm
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4
ubuntu-accelerator-2204-amd64-with-nvidia-570
NVIDIA ConnectX-7
Google Virtual NIC (gVNIC)
GPUs
Virtual Private Cloud
Core
a4x-highgpu-4g
Slurm
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4X
ubuntu-accelerator-2404-arm64-with-nvidia-570
NVIDIA ConnectX-7
Google Virtual NIC (gVNIC)
NVIDIA IMEX
GPUs
Core
gke-a4x
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4X
Container-Optimized OS
GPUs
Jobset
Kueue
Core
gke-a3-ultragpu
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
A3 Ultra
Container-Optimized OS
NVIDIA ConnectX-7
Google Virtual NIC (gVNIC)
GPUs
Core
gke-a3-highgpu
GKE
None
A3 High
Container-Optimized OS
GPUs
Jobset
Kueue
Core
gke-a3-megagpu
GKE
None
A3 Mega
Container-Optimized OS
GPUs
Jobset
Kueue
Core
gke-managed-hyperdisk
GKE
Filestore, Cloud Storage
C3
Container-Optimized OS
Core
gke-managed-lustre
GKE
Google Cloud Managed Lustre
N2
Container-Optimized OS
Core
gke-a4
GKE
Filestore, Cloud Storage, Google Cloud Managed Lustre
A4
Container-Optimized OS
GPUs
Jobset
Kueue
Core
gke-g4
GKE
Cloud Storage
G4
Container-Optimized OS
GPUs
Jobset
Kueue
Core
gke-h4d
GKE
Filestore, Cloud Storage
H4D
Container-Optimized OS
Google Virtual NIC (gVNIC) and Cloud RDMA
Kueue and Jobset
Service account
Core
a3-ultragpu-8g
Slurm
Filestore, Cloud Storage, Google Cloud Managed Lustre
A3 Ultra
ubuntu-accelerator-2204-amd64-with-nvidia-570
NVIDIA ConnectX-7
Google Virtual NIC (gVNIC)
GPUs
Core
a3-highgpu-8g
Slurm
Filestore, Cloud Storage
A3 High
ubuntu-2004-lts*
Google Virtual NIC (gVNIC)
GPUs
Core
a3-megagpu-8g
Slurm
Filestore, Cloud Storage
A3 Mega
debian-12*
Google Virtual NIC (gVNIC)
GPUs
Core
h4d-vm
None
Filestore, Local SSD
H4D
hpc-rocky-linux-8
Google Virtual NIC (gVNIC)
Cloud RDMA
Core
hpc-slurm-h4d
Slurm
Filestore, Local SSD
N2, H4D
hpc-rocky-linux-8
Google Virtual NIC (gVNIC)
Cloud RDMA
Core
hpc-slurm
Slurm
Filestore
N2, C2, H3
hpc-rocky-linux-8*
Core
hpc-slurm6-tpu-maxtext
Slurm
None
TPUv4, N2, C2
slurm-gcp-6-4-tf-2.14.0*
TPUs
Maxtext
Community, Experimental
ml-slurm
Slurm
Filestore, Cloud Storage
N2, A2, G2
debian-11*
GPUs
NCCL
PyTorch
TensorFlow
Core
serverless-batch
Batch
Filestore
N2
rocky-linux-8-optimized-gcp
Core
serverless-batch-mpi
Batch
Filestore
C2
hpc-rocky-linux-8
Spack
Weather Research and Forecasting (WRF)
Core
tutorial-starccm
None
Filestore
C2
hpc-centos-7
Star CCM+
Community, Experimental
tutorial-fluent
None
Filestore
C2
hpc-rocky-linux-8
Ansys Fluent
Community, Experimental
image-builder
Slurm
Filestore
C2, N2
hpc-rocky-linux-8*
Packer
Core
hpc-build-slurm-image
Slurm
None
N2D
hpc-rocky-linux-8*
Packer
Building Slurm
Community
hpc-amd-slurm
Slurm
Filestore
C2D
hpc-rocky-linux-8*
AMD
AMD Optimizing C/C++ and Fortran Compilers (AOCC)
OpenFoam
Spack
Community
hpc-slurm-local-ssd
Slurm
Filestore, Local SSD
N1
hpc-rocky-linux-8*
Community, Experimental
hpc-slurm-ubuntu2204
Slurm
Filestore
N2, C2
ubuntu-2204-lts
Community
hpc-slurm-gromacs
Slurm
Filestore
C2
hpc-rocky-linux-8*
GROMACS
Spack
Community, Experimental
hpc-slurm-hcls
Slurm
Cloud Storage, Filestore
A2, C2
hpc-rocky-linux-8*
GPUs
GROMACS on GPUs
Spack
VDI with VMD
Community
htc-htcondor
HTCondor
None
C2
hpc-rocky-linux-8
Community, Experimental
ml-gke
GKE
None
N2, A2
Container-Optimized OS
GPUs
Community, Experimental
hpc-gke
GKE
None
N2, C2
Container-Optimized OS
Community, Experimental
storage-gke
GKE
Filestore, Local SSD
N2D
Container-Optimized OS
CSI Drivers
Persistent Volumes
Community, Experimental
client-google-cloud-storage
None
Cloud Storage
E2
hpc-rocky-linux-8
Community, Experimental
hpc-slurm-sharedvpc
Slurm
Filestore
N2, C2
hpc-rocky-linux-8*
Shared VPC configuration
Community
* This OS image is an optimized Schedmd's
Slurm image that is based on the specified operating system.
† This OS image has DAOS drivers pre-installed and needs to
be built following instructions in the DAOS project.
What's next
Set up Cluster Toolkit
Review Cluster deployment overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

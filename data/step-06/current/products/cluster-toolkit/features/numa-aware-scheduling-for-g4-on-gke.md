---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.442Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "NUMA-aware scheduling for G4 on GKE"
feature_slug: "numa-aware-scheduling-for-g4-on-gke"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application"
keywords:
  - "numa"
  - "aware"
  - "scheduling"
  - "for"
  - "g4"
  - "on"
  - "gke"
  - "cluster"
---

# NUMA-aware scheduling for G4 on GKE

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds NUMA-aware scheduling in GKE clusters for G4 machines.

## Extended Definition

Cluster Toolkit adds NUMA-aware scheduling in GKE clusters for G4 machines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application)

## Supporting Pages

### Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reconfigure the cluster For GKE clusters, you can update the cluster as follows: Edit the deployment blueprint to update the supported parameters.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Reconfigure a GKE cluster Stay organized with collections Save and categorize content based on your preferences.
- Limitations The following changes can't be made by editing the blueprint: You can't switch from a zonal to a regional GKE cluster.
- You can't update the GKE version by using the Cluster Toolkit.

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- This document outlines the deployment steps for provisioning an A3 Mega ( a3-megagpu-8g ) Google Kubernetes Engine (GKE) cluster that is ideal for running large-scale artificial intelligence (AI) and machine learning (ML) training workloads.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega GKE cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.

### Cluster blueprint catalog \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Batch GKE Slurm HTCondor None Cloud Storage Filestore Google Cloud Managed Lustre Local SSD None A4X Max (NVIDIA GB300) A4 (NVIDIA B200) A4X (NVIDIA GB200 Superchips) A3 Ultra (NVIDIA H200) A3 Mega (NVIDIA H100) A3 High (NVIDIA H100) A2 (NVIDIA A100) C2 C2D C3 E2 G4 (NVIDIA RTX PRO 6000) G2 (NVIDIA L4) H4D H3 N2 N1 TPUv4 TPU v6e TPU7x Container-Optimized OS debian-11 debian-12 hpc-centos-7 hpc-rocky-linux-8 rocky-linux-8-optimized-gcp rocky-linux-8 slurm-gcp-6-4-tf-2.14.0 ubuntu-2004-lts ubuntu-2204-lts ubuntu-2404-lts Ansys Fluent Bare metal GPUs TPUs GROMACS JAX Kueue Jobset Maxtext NCCL NVIDIA IMEX OpenFoam Packer PyTorch QSim Spack Star CCM+ TensorFlow VDI with VMD WRF Clear all Cluster blueprint Scheduler Storage Machine types Base operating system Featured software and compute resources Collection a4x-maxgpu-4g-metal Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Max ubuntu-accelerator-2404-arm64-with-nvidia-580 NVIDIA ConnectX-8 Bare Metal NVIDIA IMEX GPUs RDMA Core gke-a4xmax GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Max Container-Optimized OS NVIDIA ConnectX-8 Bare Metal GPUs Jobset Kueue Core gke-tpu-7x GKE Filestore, Cloud Storage, Google Cloud Managed Lustre TPU7x Container-Optimized OS TPUs Jobset Kueue JAX Multi-VPC Networking Core gke-tpu-v6e GKE Filestore, Cloud Storage, Google Cloud Managed Lustre TPU v6e Container-Optimized OS TPUs Jobset Kueue JAX Multi-VPC Networking Core a4-highgpu-8g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4 ubuntu-accelerator-2204-amd64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Virtual Private Cloud Core a4x-highgpu-4g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4X ubuntu-accelerator-2404-arm64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) NVIDIA IMEX GPUs Core gke-a4x GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Container-Optimized OS GPUs Jobset Kueue Core gke-a3-ultragpu GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A3 Ultra Container-Optimized OS NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Core gke-a3-highgpu GKE None A3 High Container-Optimized OS GPUs Jobset Kueue Core gke-a3-megagpu GKE None A3 Mega Container-Optimized OS GPUs Jobset Kueue Core gke-managed-hyperdisk GKE Filestore, Cloud Storage C3 Container-Optimized OS Core gke-managed-lustre GKE Google Cloud Managed Lustre N2 Container-Optimized OS Core gke-a4 GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4 Container-Optimized OS GPUs Jobset Kueue Core gke-g4 GKE Cloud Storage G4 Container-Optimized OS GPUs Jobset Kueue Core gke-h4d GKE Filestore, Cloud Storage H4D Container-Optimized OS Google Virtual NIC (gVNIC) and Cloud RDMA Kueue and Jobset Service account Core a3-ultragpu-8g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A3 Ultra ubuntu-accelerator-2204-amd64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Core a3-highgpu-8g Slurm Filestore, Cloud Storage A3 High ubuntu-2004-lts Google Virtual NIC (gVNIC) GPUs Core a3-megagpu-8g Slurm Filestore, Cloud Storage A3 Mega debian-12 Google Virtual NIC (gVNIC) GPUs Core h4d-vm None Filestore, Local SSD H4D hpc-rocky-linux-8 Google Virtual NIC (gVNIC) Cloud RDMA Core hpc-slurm-h4d Slurm Filestore, Local SSD N2, H4D hpc-rocky-linux-8 Google Virtual NIC (gVNIC) Cloud RDMA Core hpc-slurm Slurm Filestore N2, C2, H3 hpc-rocky-linux-8 Core hpc-slurm6-tpu-maxtext Slurm None TPUv4, N2, C2 slurm-gcp-6-4-tf-2.14.0 TPUs Maxtext Community, Experimental ml-slurm Slurm Filestore, Cloud Storage N2, A2, G2 debian-11 GPUs NCCL PyTorch TensorFlow Core serverless-batch Batch Filestore N2 rocky-linux-8-optimized-gcp Core serverless-batch-mpi Batch Filestore C2 hpc-rocky-linux-8 Spack Weather Research and Forecasting (WRF) Core tutorial-starccm None Filestore C2 hpc-centos-7 Star CCM+ Community, Experimental tutorial-fluent None Filestore C2 hpc-rocky-linux-8 Ansys Fluent Community, Experimental image-builder Slurm Filestore C2, N2 hpc-rocky-linux-8 Packer Core hpc-build-slurm-image Slurm None N2D hpc-rocky-linux-8 Packer Building Slurm Community hpc-amd-slurm Slurm Filestore C2D hpc-rocky-linux-8 AMD AMD Optimizing C/C++ and Fortran Compilers (AOCC) OpenFoam Spack Community hpc-slurm-local-ssd Slurm Filestore, Local SSD N1 hpc-rocky-linux-8 Community, Experimental hpc-slurm-ubuntu2204 Slurm Filestore N2, C2 ubuntu-2204-lts Community hpc-slurm-gromacs Slurm Filestore C2 hpc-rocky-linux-8 GROMACS Spack Community, Experimental hpc-slurm-hcls Slurm Cloud Storage, Filestore A2, C2 hpc-rocky-linux-8 GPUs GROMACS on GPUs Spack VDI with VMD Community htc-htcondor HTCondor None C2 hpc-rocky-linux-8 Community, Experimental ml-gke GKE None N2, A2 Container-Optimized OS GPUs Community, Experimental hpc-gke GKE None N2, C2 Container-Optimized OS Community, Experimental storage-gke GKE Filestore, Local SSD N2D Container-Optimized OS CSI Drivers Persistent Volumes Community, Experimental client-google-cloud-storage None Cloud Storage E2 hpc-rocky-linux-8 Community, Experimental hpc-slurm-sharedvpc Slurm Filestore N2, C2 hpc-rocky-linux-8 Shared VPC configuration Community This OS image is an optimized Schedmd's Slurm image that is based on the specified operating system. † This OS image has DAOS drivers pre-installed and needs to be built following instructions in the DAOS project.
- This page describes Google's catalog of cluster blueprints, which are reusable YAML configuration files for deploying specific, opinionated solutions with the Cluster Toolkit.
- For each cluster blueprint, featured applications and Google Cloud resources that can be leveraged by using the blueprint are also highlighted.
- For more information about cluster blueprints, see Cluster blueprint .

### "Set up and scale MPI applications on H4D VMs with Cloud RDMA \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up user limits for MPI In the guest OS of each H4D instance, increase the memory lock and open file limits, using the values shown in the following example: cat << EOF sudo tee -a /etc/security/limits.conf hard memlock unlimited soft memlock unlimited hard nofile 65535 soft nofile 65535 EOF Set environment variables for Intel MPI You can optionally set the following environment variables: To pin MPI processes within NUMA nodes, potentially improving locality, set the following: export I MPI PIN DOMAIN = numa To increase output verbosity for troubleshooting and debugging, use the following: export I MPI DEBUG = 5 Optimize and scale MPI with Cloud RDMA To achieve optimal performance with MPI on H4D VMs, use the following configuration steps to optimize and scale your MPI applications.
- Example for Intel MPI in a Slurm script #SBATCH --nodes= NUMBER OF NODES #SBATCH --ntasks-per-node= PROCESSES PER NODE Load Intel MPI module if necessary module load intelmpi Set environment variables for Cloud RDMA export FI PROVIDER = "verbs;ofi rxm" export FI VERBS INLINE SIZE: 39 export FI OFI RXM BUFFER SIZE: 4096 export FI UNIVERSE SIZE: N MPI RANKS Run the application mpirun ./your application Replace the following: NUMBER OF NODES : the number of instances in your cluster PROCESSES PER NODE : the number of processes per node N MPI RANKS : number of MPI ranks.
- Set up the HPC cluster and MPI with Cluster Toolkit To set up the cluster and MPI using Cluster Toolkit, Terraform, and Slurm, complete the following steps: Clone a GitHub repository that contains Terraform scripts for deploying a Slurm cluster, for example the GoogleCloudPlatform/cluster-toolkit/examples/hpc-slurm-h4d folder.
- The following configuration steps are handled by the startup scripts within the Cluster Toolkit blueprint, which are run during deployment: Creates VM instances that use a pre-curated Google HPC VM image designed for H4D, which includes the necessary network tunings, Intel RDMA drivers, and ibverbs libraries.


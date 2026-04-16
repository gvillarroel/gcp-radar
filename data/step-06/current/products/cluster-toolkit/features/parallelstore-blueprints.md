---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.449Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Parallelstore blueprints"
feature_slug: "parallelstore-blueprints"
latest_feature_date: "2025-07-15"
deprecation_date: "2025-07-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d"
keywords:
  - "parallelstore"
  - "blueprints"
  - "for"
  - "deploying"
  - "are"
  - "deprecated"
  - "in"
  - "cluster"
---

# Parallelstore blueprints

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Blueprints for deploying Parallelstore are deprecated in Cluster Toolkit; deprecated on 2025-07-15.

## Extended Definition

Blueprints for deploying Parallelstore are deprecated in Cluster Toolkit; deprecated on 2025-07-15.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)

## Supporting Pages

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to cleanly destroy infrastructure and for advanced manual deployment instructions, see the deployment folder located at the root of the Cluster Toolkit directory: DEPLOYMENT FOLDER /instructions.txt Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To go to the main Cluster Toolkit working directory, run the following command. cd cluster-toolkit Set up Cloud Storage bucket Cluster blueprints use Terraform modules to provision Cloud infrastructure.
- Redeploy the Cluster If you need to increase the number of compute nodes or add new partitions to your cluster, you might need to update configurations for your Slurm cluster by redeploying.
- In the deployment file, specify the Cloud Storage bucket, set names for your network and subnetwork, and set deployment variables such as project ID, region, and zone. --- terraform backend defaults: type: gcs configuration: bucket: BUCKET NAME vars: deployment name: a3mega-base project id: PROJECT ID region: REGION zone: ZONE network name system: NETWORK NAME subnetwork name system: SUBNETWORK NAME enable ops agent: true enable nvidia dcgm: true enable nvidia persistenced: true disk size gb: 200 final image family: slurm-a3mega slurm cluster name: CLUSTER NAME a3mega reservation name: RESERVATION NAME a3mega cluster size: NUMBER OF VMS Replace the following: BUCKET NAME : the name of your Cloud Storage bucket, created in the previous section.

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you create multiple clusters using these same cluster blueprints, ensure that all VPC and subnet names are unique per project to prevent errors.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- To target a specific block within your reservation, use the reservation and block names in the following format: RESERVATION NAME /reservationBlocks/ BLOCK NAME If you don't know which blocks are available in your reservation, see View the topology of a reservation .

### Cluster blueprint catalog \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint-catalog)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- This page describes Google's catalog of cluster blueprints, which are reusable YAML configuration files for deploying specific, opinionated solutions with the Cluster Toolkit.
- Batch GKE Slurm HTCondor None Cloud Storage Filestore Google Cloud Managed Lustre Local SSD None A4X Max (NVIDIA GB300) A4 (NVIDIA B200) A4X (NVIDIA GB200 Superchips) A3 Ultra (NVIDIA H200) A3 Mega (NVIDIA H100) A3 High (NVIDIA H100) A2 (NVIDIA A100) C2 C2D C3 E2 G4 (NVIDIA RTX PRO 6000) G2 (NVIDIA L4) H4D H3 N2 N1 TPUv4 TPU v6e TPU7x Container-Optimized OS debian-11 debian-12 hpc-centos-7 hpc-rocky-linux-8 rocky-linux-8-optimized-gcp rocky-linux-8 slurm-gcp-6-4-tf-2.14.0 ubuntu-2004-lts ubuntu-2204-lts ubuntu-2404-lts Ansys Fluent Bare metal GPUs TPUs GROMACS JAX Kueue Jobset Maxtext NCCL NVIDIA IMEX OpenFoam Packer PyTorch QSim Spack Star CCM+ TensorFlow VDI with VMD WRF Clear all Cluster blueprint Scheduler Storage Machine types Base operating system Featured software and compute resources Collection a4x-maxgpu-4g-metal Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Max ubuntu-accelerator-2404-arm64-with-nvidia-580 NVIDIA ConnectX-8 Bare Metal NVIDIA IMEX GPUs RDMA Core gke-a4xmax GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Max Container-Optimized OS NVIDIA ConnectX-8 Bare Metal GPUs Jobset Kueue Core gke-tpu-7x GKE Filestore, Cloud Storage, Google Cloud Managed Lustre TPU7x Container-Optimized OS TPUs Jobset Kueue JAX Multi-VPC Networking Core gke-tpu-v6e GKE Filestore, Cloud Storage, Google Cloud Managed Lustre TPU v6e Container-Optimized OS TPUs Jobset Kueue JAX Multi-VPC Networking Core a4-highgpu-8g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4 ubuntu-accelerator-2204-amd64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Virtual Private Cloud Core a4x-highgpu-4g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A4X ubuntu-accelerator-2404-arm64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) NVIDIA IMEX GPUs Core gke-a4x GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4X Container-Optimized OS GPUs Jobset Kueue Core gke-a3-ultragpu GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A3 Ultra Container-Optimized OS NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Core gke-a3-highgpu GKE None A3 High Container-Optimized OS GPUs Jobset Kueue Core gke-a3-megagpu GKE None A3 Mega Container-Optimized OS GPUs Jobset Kueue Core gke-managed-hyperdisk GKE Filestore, Cloud Storage C3 Container-Optimized OS Core gke-managed-lustre GKE Google Cloud Managed Lustre N2 Container-Optimized OS Core gke-a4 GKE Filestore, Cloud Storage, Google Cloud Managed Lustre A4 Container-Optimized OS GPUs Jobset Kueue Core gke-g4 GKE Cloud Storage G4 Container-Optimized OS GPUs Jobset Kueue Core gke-h4d GKE Filestore, Cloud Storage H4D Container-Optimized OS Google Virtual NIC (gVNIC) and Cloud RDMA Kueue and Jobset Service account Core a3-ultragpu-8g Slurm Filestore, Cloud Storage, Google Cloud Managed Lustre A3 Ultra ubuntu-accelerator-2204-amd64-with-nvidia-570 NVIDIA ConnectX-7 Google Virtual NIC (gVNIC) GPUs Core a3-highgpu-8g Slurm Filestore, Cloud Storage A3 High ubuntu-2004-lts Google Virtual NIC (gVNIC) GPUs Core a3-megagpu-8g Slurm Filestore, Cloud Storage A3 Mega debian-12 Google Virtual NIC (gVNIC) GPUs Core h4d-vm None Filestore, Local SSD H4D hpc-rocky-linux-8 Google Virtual NIC (gVNIC) Cloud RDMA Core hpc-slurm-h4d Slurm Filestore, Local SSD N2, H4D hpc-rocky-linux-8 Google Virtual NIC (gVNIC) Cloud RDMA Core hpc-slurm Slurm Filestore N2, C2, H3 hpc-rocky-linux-8 Core hpc-slurm6-tpu-maxtext Slurm None TPUv4, N2, C2 slurm-gcp-6-4-tf-2.14.0 TPUs Maxtext Community, Experimental ml-slurm Slurm Filestore, Cloud Storage N2, A2, G2 debian-11 GPUs NCCL PyTorch TensorFlow Core serverless-batch Batch Filestore N2 rocky-linux-8-optimized-gcp Core serverless-batch-mpi Batch Filestore C2 hpc-rocky-linux-8 Spack Weather Research and Forecasting (WRF) Core tutorial-starccm None Filestore C2 hpc-centos-7 Star CCM+ Community, Experimental tutorial-fluent None Filestore C2 hpc-rocky-linux-8 Ansys Fluent Community, Experimental image-builder Slurm Filestore C2, N2 hpc-rocky-linux-8 Packer Core hpc-build-slurm-image Slurm None N2D hpc-rocky-linux-8 Packer Building Slurm Community hpc-amd-slurm Slurm Filestore C2D hpc-rocky-linux-8 AMD AMD Optimizing C/C++ and Fortran Compilers (AOCC) OpenFoam Spack Community hpc-slurm-local-ssd Slurm Filestore, Local SSD N1 hpc-rocky-linux-8 Community, Experimental hpc-slurm-ubuntu2204 Slurm Filestore N2, C2 ubuntu-2204-lts Community hpc-slurm-gromacs Slurm Filestore C2 hpc-rocky-linux-8 GROMACS Spack Community, Experimental hpc-slurm-hcls Slurm Cloud Storage, Filestore A2, C2 hpc-rocky-linux-8 GPUs GROMACS on GPUs Spack VDI with VMD Community htc-htcondor HTCondor None C2 hpc-rocky-linux-8 Community, Experimental ml-gke GKE None N2, A2 Container-Optimized OS GPUs Community, Experimental hpc-gke GKE None N2, C2 Container-Optimized OS Community, Experimental storage-gke GKE Filestore, Local SSD N2D Container-Optimized OS CSI Drivers Persistent Volumes Community, Experimental client-google-cloud-storage None Cloud Storage E2 hpc-rocky-linux-8 Community, Experimental hpc-slurm-sharedvpc Slurm Filestore N2, C2 hpc-rocky-linux-8 Shared VPC configuration Community This OS image is an optimized Schedmd's Slurm image that is based on the specified operating system. † This OS image has DAOS drivers pre-installed and needs to be built following instructions in the DAOS project.
- For each cluster blueprint, featured applications and Google Cloud resources that can be leveraged by using the blueprint are also highlighted.
- For more information about cluster blueprints, see Cluster blueprint .

### "Create a Cloud RDMA-enabled HPC Slurm cluster with H4D instances \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Clone the Cluster Toolkit GitHub repository In Cloud Shell, clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git Go to the main working directory: cd cluster-toolkit/ Build the Cluster Toolkit binary In Cloud Shell, build the Cluster Toolkit binary from source by running the following command: make To verify the build, run the following command: To deploy an HPC-optimized Slurm cluster that uses H4D instances, you must use version v1.70.0 or later of the Cluster Toolkit. ./gcluster --version After building the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${H4D RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ): grants permissions to manage Compute Engine instances that are required for the Slurm cluster to function correctly.
- Cluster Toolkit is open-source software offered by Google Cloud to simplify the process of deploying workloads on Google Cloud.


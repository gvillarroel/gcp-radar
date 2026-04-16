---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.435Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "NCCL test script for Slurm on GKE"
feature_slug: "nccl-test-script-for-slurm-on-gke"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit"
keywords:
  - "nccl"
  - "test"
  - "script"
  - "for"
  - "slurm"
  - "on"
  - "gke"
  - "cluster"
---

# NCCL test script for Slurm on GKE

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit provides an example NCCL test script for Slurm on GKE deployments.

## Extended Definition

Cluster Toolkit provides an example NCCL test script for Slurm on GKE deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit](https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit)

## Supporting Pages

### "Enable GPUDirect-TCPXO optimized NCCL communication \_|\_ Cluster Toolkit\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Slurm would otherwise only pass these env vars to the job environment on the host. shellcheck disable=SC2001 HOST VARS = $( sed 's/ \{1,\}/,/g' <<< " ${ !NCCL } " ) Mount /var/tmp to allow the rest of the enroot container to be read-only, and mount current $PWD to /nccl to for accessing nccl-tests binary CONTAINER MOUNTS = "/var/tmp:/var/tmp" Mount PWD to /nccl in the enroot container CONTAINER MOUNTS = ${ CONTAINER MOUNTS } , " $PWD :/nccl" Mount required directories for GPUDirect-TCPXO functionality CONTAINER MOUNTS = ${ CONTAINER MOUNTS } , "/var/lib/tcpxo/lib64/" Run the workload srun -l \ -N " ${ SLURM NNODES } " \ --mpi = pmi2 \ --ntasks-per-node = 8 \ --container-image = " ${ CONTAINER IMAGE } " \ --container-env = " ${ HOST VARS } " \ --container-mounts = " ${ CONTAINER MOUNTS } " \ sh -c " export LD LIBRARY PATH=/var/lib/tcpxo/lib64:/usr/lib/x86 64-linux-gnu:\$LD LIBRARY PATH; /nccl/nccl-tests/build/all gather perf -b 8M -e 8G -f 2 -g 1 -w 5 --iters 200; " Submit the script. sbatch run-nccl-tests.sh This results in a slurm-XX.out file that contains the results of the nccl all gather perf benchmark.
- This document provides an overview of how to enable GPUDirect-TCPXO for optimizing communication in multi-node workloads, such as ML training, by using a NCCL tests to measure NCCL collective performance between two nodes of an A3 Mega a3-megagpu-8g Slurm cluster.
- Run NCCL test As part of the cluster deployment process, a Slurm prolog and epilog are installed which handles automatic installation of both a custom libnccl-net.so and the running of a sidecar process that enables GPUDirect-TCPXO optimized communication.
- The cluster deployment blueprint The examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml blueprint includes a Slurm prolog and epilog script that runs before and after every job running on more than one a3-megagpu-8g compute node.

### Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reconfigure the cluster For GKE clusters, you can update the cluster as follows: Edit the deployment blueprint to update the supported parameters.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Reconfigure a GKE cluster Stay organized with collections Save and categorize content based on your preferences.
- Limitations The following changes can't be made by editing the blueprint: You can't switch from a zonal to a regional GKE cluster.
- You can't update the GKE version by using the Cluster Toolkit.

### "Set up and scale MPI applications on H4D VMs with Cloud RDMA \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-mpi-application)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example for Intel MPI in a Slurm script #SBATCH --nodes= NUMBER OF NODES #SBATCH --ntasks-per-node= PROCESSES PER NODE Load Intel MPI module if necessary module load intelmpi Set environment variables for Cloud RDMA export FI PROVIDER = "verbs;ofi rxm" export FI VERBS INLINE SIZE: 39 export FI OFI RXM BUFFER SIZE: 4096 export FI UNIVERSE SIZE: N MPI RANKS Run the application mpirun ./your application Replace the following: NUMBER OF NODES : the number of instances in your cluster PROCESSES PER NODE : the number of processes per node N MPI RANKS : number of MPI ranks.
- Set up the HPC cluster and MPI with Cluster Toolkit To set up the cluster and MPI using Cluster Toolkit, Terraform, and Slurm, complete the following steps: Clone a GitHub repository that contains Terraform scripts for deploying a Slurm cluster, for example the GoogleCloudPlatform/cluster-toolkit/examples/hpc-slurm-h4d folder.
- The following configuration steps are handled by the startup scripts within the Cluster Toolkit blueprint, which are run during deployment: Creates VM instances that use a pre-curated Google HPC VM image designed for H4D, which includes the necessary network tunings, Intel RDMA drivers, and ibverbs libraries.
- Then use the following command: Example for Intel MPI mpirun -n TOTAL PROCESSES -ppn PROCESSES PER NODE -hosts HOST FILE ./ YOUR APPLICATION Intel MPI within a Slurm script To run your MPI application, use the mpirun command from your chosen MPI library within your Slurm job script.

### Update Cluster Toolkit version \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit](https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions, see the documentation for your environment: For Compute Engine and Slurm: Reconfigure a running cluster For Google Kubernetes Engine: Reconfigure a GKE cluster To modify the hardware infrastructure, change immutable properties of the cluster, or if Cluster Toolkit software has a major change, then follow these steps: Delete the existing cluster.
- Google Kubernetes Engine For Google Kubernetes Engine environments: See Reconfigure a GKE cluster for instructions on managing nodes within a GKE cluster.
- Windows To update on Windows, pull the latest changes from the GitHub repository and rebuild the binary as follows: Go to the toolkit directory where you originally cloned the repository: cd cluster-toolkit Pull the updates from the upstream repository: git pull Note: If you have made local changes that conflict with the latest updates, then a prompt with a request to resolve them appears.
- You can use the following command to gracefully drain and power down nodes: scontrol update NodeName= NODES TO UPDATE State=POWER DOWN ASAP Alternatively, you can configure the cleanup compute nodes setting on the Slurm controller to automatically destroy static compute nodes when the cluster is destroyed.


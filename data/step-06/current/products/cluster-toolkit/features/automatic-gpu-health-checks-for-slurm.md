---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.453Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Automatic GPU health checks for Slurm"
feature_slug: "automatic-gpu-health-checks-for-slurm"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
keywords:
  - "automatic"
  - "gpu"
  - "health"
  - "checks"
  - "for"
  - "slurm"
  - "cluster"
  - "toolkit"
---

# Automatic GPU health checks for Slurm

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds automatic GPU health checks for Slurm deployments.

## Extended Definition

Cluster Toolkit adds automatic GPU health checks for Slurm deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)

## Supporting Pages

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Create a deployment file In the Cluster Toolkit directory, create your Slurm deployment YAML file. nano ${A4 DEPLOYMENT FILE NAME}.yaml Paste the following content into the YAML file. --- terraform backend defaults: type: gcs configuration: bucket: GOOGLE CLOUD BUCKET NAME vars: deployment name: A4 DEPLOYMENT FILE NAME project id: A4 RESERVATION PROJECT ID region: A4 REGION zone: A4 ZONE a4h reservation name: A4 RESERVATION NAME a4h cluster size: 1 To save and exit the file, press Ctrl+O > Enter > Ctrl+X .
- A4 accelerator-optimized machine types come with NVIDIA B200 GPUs attached and are specifically engineered for intensive AI computation to help your Slurm cluster efficiently handle large-scale model training and inference.
- Destroy the Slurm cluster Before running the destroy command, navigate to the root of the Cluster Toolkit directory.

### "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the HPC cluster using Terraform To deploy the HPC cluster, complete the following steps: Use the gcluster deploy command to begin automatic deployment of your cluster: ./gcluster deploy hpc-slurm gcluster reports the changes that Terraform is proposing to make for your cluster.
- Summary of proposed changes: Plan: 37 to add, 0 to change, 0 to destroy. (D)isplay full proposed changes, (A)pply proposed changes, (S)top and exit, (C)ontinue without applying Please select an option [d,a,s,c]: After accepting the changes, gcluster executes terraform apply automatically.
- When the job finishes you should see an output similar to: $ srun -N 3 hostname hpcslurm-debug-ghpc-0 hpcslurm-debug-ghpc-1 hpcslurm-debug-ghpc-2 The auto-scaled nodes are automatically destroyed by the Slurm controller if left idle for more than 60 seconds.
- Compute nodes use the following naming convention: hpcslurm-debug-ghpc- If you see any of these nodes, wait several minutes for them to be automatically deleted.

### "Enable GPUDirect-TCPXO optimized NCCL communication \_|\_ Cluster Toolkit\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo](https://docs.cloud.google.com/cluster-toolkit/docs/machine-learning/a3-mega-enable-gpudirect-tcpxo)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document provides an overview of how to enable GPUDirect-TCPXO for optimizing communication in multi-node workloads, such as ML training, by using a NCCL tests to measure NCCL collective performance between two nodes of an A3 Mega a3-megagpu-8g Slurm cluster.
- Run NCCL test As part of the cluster deployment process, a Slurm prolog and epilog are installed which handles automatic installation of both a custom libnccl-net.so and the running of a sidecar process that enables GPUDirect-TCPXO optimized communication.
- The cluster deployment blueprint The examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml blueprint includes a Slurm prolog and epilog script that runs before and after every job running on more than one a3-megagpu-8g compute node.
- A3 Mega Slurm clusters that are created by using Cluster Toolkit version 1.39.0 or later have automatic integration of topology aware scheduling.

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- To redeploy the cluster using an existing image run the following command from the main Cluster Toolkit directory : ./gcluster deploy -d \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \ --only primary,cluster --auto-approve -w This command is only for redeployments where an image already exists as it only redeploys the cluster and its infrastructure.
- This document outlines the deployment steps for provisioning an A3 Mega ( a3-megagpu-8g ) Slurm cluster that is ideal for running large-scale artificial intelligence (AI) and machine learning (ML) training workloads.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega Slurm cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- In the deployment file, specify the Cloud Storage bucket, set names for your network and subnetwork, and set deployment variables such as project ID, region, and zone. --- terraform backend defaults: type: gcs configuration: bucket: BUCKET NAME vars: deployment name: a3mega-base project id: PROJECT ID region: REGION zone: ZONE network name system: NETWORK NAME subnetwork name system: SUBNETWORK NAME enable ops agent: true enable nvidia dcgm: true enable nvidia persistenced: true disk size gb: 200 final image family: slurm-a3mega slurm cluster name: CLUSTER NAME a3mega reservation name: RESERVATION NAME a3mega cluster size: NUMBER OF VMS Replace the following: BUCKET NAME : the name of your Cloud Storage bucket, created in the previous section.


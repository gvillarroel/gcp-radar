---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.444Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "AArch64 architecture support"
feature_slug: "aarch64-architecture-support"
latest_feature_date: "2025-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices"
keywords:
  - "aarch64"
  - "architecture"
  - "cluster"
  - "toolkit"
  - "adds"
  - "for"
  - "based"
---

# AArch64 architecture support

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds support for aarch64-based architecture.

## Extended Definition

Cluster Toolkit adds support for aarch64-based architecture.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)

## Supporting Pages

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega GKE cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- For the clusters created with Cluster Toolkit, the cluster names are based on the DEPLOYMENT NAME name.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega Slurm cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- To redeploy the cluster using an existing image run the following command from the main Cluster Toolkit directory : ./gcluster deploy -d \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \ --only primary,cluster --auto-approve -w This command is only for redeployments where an image already exists as it only redeploys the cluster and its infrastructure.
- To learn how to cleanly destroy infrastructure and for advanced manual deployment instructions, see the deployment folder located at the root of the Cluster Toolkit directory: DEPLOYMENT FOLDER /instructions.txt Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To go to the main Cluster Toolkit working directory, run the following command. cd cluster-toolkit Set up Cloud Storage bucket Cluster blueprints use Terraform modules to provision Cloud infrastructure.

### "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Architecture diagram for an HPC cluster that uses Slurm Launch Cloud Shell In the Google Cloud console, activate Cloud Shell.
- Ensure that the default Compute Engine service account is enabled Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and that the Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) and the Service Account User role ( roles/iam.serviceAccountUser ) are granted to the service account.
- Summary of proposed changes: Plan: 37 to add, 0 to change, 0 to destroy. (D)isplay full proposed changes, (A)pply proposed changes, (S)top and exit, (C)ontinue without applying Please select an option [d,a,s,c]: After accepting the changes, gcluster executes terraform apply automatically.

### "Best practices for running HPC workloads \_|\_ Cluster Toolkit \_|\_ Google\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Cluster Toolkit Guides Send feedback Best practices for running HPC workloads Stay organized with collections Save and categorize content based on your preferences.
- For example, this setting affects dnf automatic package updates on the following image families: HPC images, such as hpc-rocky-linux-8 (project cloud-hpc-image-public ) Slurm images, such as slurm-gcp-6-6-hpc-rocky-linux-8 (project schedmd-slurm-public ) Cluster Toolkit provides a convenient setting on relevant modules to set this metadata flag for you: allow automatic updates: false .
- However, Cluster Toolkit automatically handles all of this tuning when you use a cluster blueprint.
- To create the VM manually, use the Google Cloud CLI and provide the following settings. gcloud compute instances create VM NAME \ --image-family=hpc-rocky-linux-8 \ --image-project=cloud-hpc-image-public \ --machine-type= MACHINE TYPE \ --network-interface=nic-type=GVNIC \ --metadata=google mpi tuning=--hpcthroughput \ --threads-per-core=1 The preceding sample command applies the following tunings: Sets Google Virtual NIC (gVNIC) network interface to enable better communication performance and higher throughput: --network-interface=nic-type=GVNIC .


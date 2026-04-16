---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.434Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Automated Google Cloud resource cleanup script"
feature_slug: "automated-google-cloud-resource-cleanup-script"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
keywords:
  - "automated"
  - "resource"
  - "cleanup"
  - "script"
  - "cluster"
  - "toolkit"
  - "adds"
  - "an"
---

# Automated Google Cloud resource cleanup script

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit adds an automated script to clean up Google Cloud resources that are no longer needed.

## Extended Definition

Cluster Toolkit adds an automated script to clean up Google Cloud resources that are no longer needed.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)

## Supporting Pages

### "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the default Compute Engine service account is enabled Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and that the Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) and the Service Account User role ( roles/iam.serviceAccountUser ) are granted to the service account.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Important: If you use Cloud Shell , the Cluster Toolkit dependencies are already pre-installed.
- Costs for submitting additional jobs The following resources are not used as a part of this tutorial but because Slurm can autoscale compute nodes, the following resources might be created if you submit additional jobs to the compute or debug partitions: Jobs submitted to the default debug partition: 4 N2 VM instances: n2-standard-2 .

### Compute Engine API \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complete one of the following options: With Slurm From the login VM instance, submit the batch script to Slurm on the HPC cluster as follows: sbatch starccm.sh This will output something like: Submitted batch job 4 To monitor the status of job, run the squeue command.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Compute Engine API Stay organized with collections Save and categorize content based on your preferences.
- The HPC cluster deployment is done by using Cluster Toolkit and this tutorial assumes that you've already set up Cluster Toolkit in your environment.
- Before you begin Important: If you use Cloud Shell , the Cluster Toolkit dependencies are already pre-installed.

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Download the gcluster bundle linux.zip file by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle linux.zip Extract the bundle files to a new gcluster-bundle directory: unzip gcluster bundle linux.zip -d gcluster-bundle Go to the gcluster-bundle directory: cd gcluster-bundle Make the binary gcluster file: chmod +x gcluster To verify the installation, run the following command: ./gcluster --version After installing the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Create a deployment file In the Cluster Toolkit directory, create your Slurm deployment YAML file. nano ${A4 DEPLOYMENT FILE NAME}.yaml Paste the following content into the YAML file. --- terraform backend defaults: type: gcs configuration: bucket: GOOGLE CLOUD BUCKET NAME vars: deployment name: A4 DEPLOYMENT FILE NAME project id: A4 RESERVATION PROJECT ID region: A4 REGION zone: A4 ZONE a4h reservation name: A4 RESERVATION NAME a4h cluster size: 1 To save and exit the file, press Ctrl+O > Enter > Ctrl+X .
- Create an AI-optimized Slurm cluster with A4 VMs This page describes how to quickly create and deploy an AI-optimized Slurm cluster using A4 accelerator-optimized machine types with the gcloud CLI and Cluster Toolkit .

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- Clean up resources created by Cluster Toolkit.
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega GKE cluster for ML training Stay organized with collections Save and categorize content based on your preferences.


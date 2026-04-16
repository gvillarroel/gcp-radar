---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.432Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Report and Replace API integration for Slurm"
feature_slug: "report-and-replace-api-integration-for-slurm"
latest_feature_date: "2026-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload"
keywords:
  - "report"
  - "and"
  - "replace"
  - "api"
  - "integration"
  - "for"
  - "slurm"
  - "cluster"
---

# Report and Replace API integration for Slurm

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit integrates the Report and Replace API with Slurm to report faulty nodes for repair or replacement.

## Extended Definition

Cluster Toolkit integrates the Report and Replace API with Slurm to report faulty nodes for repair or replacement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload)

## Supporting Pages

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Advanced Slurm tasks: Learn how to Redeploy the Slurm cluster Learn how to Test network performance on the Slurm cluster Learn how to manage host events: Manage host events across compute instances Manage host events across reservations View the topology of a compute instance Monitor compute instances in your Slurm cluster Report a faulty host Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Get required roles for your Compute Engine default service account To get the permissions that you need to deploy a Slurm cluster, ask your administrator to grant you the following IAM roles: Storage Object Viewer ( roles/storage.objectViewer ) on your project Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the service account itself For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a deployment file In the Cluster Toolkit directory, create your Slurm deployment YAML file. nano ${A4 DEPLOYMENT FILE NAME}.yaml Paste the following content into the YAML file. --- terraform backend defaults: type: gcs configuration: bucket: GOOGLE CLOUD BUCKET NAME vars: deployment name: A4 DEPLOYMENT FILE NAME project id: A4 RESERVATION PROJECT ID region: A4 REGION zone: A4 ZONE a4h reservation name: A4 RESERVATION NAME a4h cluster size: 1 To save and exit the file, press Ctrl+O > Enter > Ctrl+X .

### "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the HPC cluster using Terraform To deploy the HPC cluster, complete the following steps: Use the gcluster deploy command to begin automatic deployment of your cluster: ./gcluster deploy hpc-slurm gcluster reports the changes that Terraform is proposing to make for your cluster.
- To create a deployment folder from the cluster blueprint, run the following command from Cloud Shell: ./gcluster create examples/hpc-slurm.yaml \ -l ERROR --vars project id= PROJECT ID Replace PROJECT ID with your project ID.
- From the command line of the VM, run the hostname command using Slurm. srun -N 3 hostname This command creates three compute nodes for your HPC cluster.
- This command creates the hpc-slurm/ deployment folder, which contains the Terraform needed to deploy your cluster.

### "Create a Cloud RDMA-enabled HPC Slurm cluster with H4D instances \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the Cluster Toolkit GitHub repository In Cloud Shell, clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git Go to the main working directory: cd cluster-toolkit/ Build the Cluster Toolkit binary In Cloud Shell, build the Cluster Toolkit binary from source by running the following command: make To verify the build, run the following command: To deploy an HPC-optimized Slurm cluster that uses H4D instances, you must use version v1.70.0 or later of the Cluster Toolkit. ./gcluster --version After building the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${H4D RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- What's next Learn how to Reconfigure the Slurm cluster Learn how to manage host events: Manage host events across VMs Manage host events across reservations View VMs topology Monitor VMs in your Slurm cluster Report a faulty host Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the Compute Engine, Filestore, Cloud Storage, Service Usage, and Cloud Resource Manager API: Enable the APIs To deploy a Slurm cluster, you must have the following roles: Storage Object Viewer ( roles/storage.objectViewer ): grants permission to read cluster installation artifacts from Cloud Storage.

### Compute Engine API \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set a default region and zone in which to deploy your compute nodes. gcloud config set compute/region REGION gcloud config set compute/zone ZONE Replace the following: REGION : your preferred region ZONE : a zone within your preferred region Define environment variables. export DEPLOYMENT NAME= DEPLOYMENT NAME export GOOGLE CLOUD PROJECT=gcloud config list --format 'value(core.project)' export CLUSTER REGION=gcloud config list --format 'value(compute.region)' export CLUSTER ZONE=gcloud config list --format 'value(compute.zone)' Replace DEPLOYMENT NAME with a name for your deployment.
- To create a deployment folder from the cluster blueprint, run the following command from Cloud Shell: ./gcluster create community/examples/tutorial-starccm-slurm.yaml \ --vars "deployment name=${DEPLOYMENT NAME}" \ --vars "project id=${GOOGLE CLOUD PROJECT}" \ --vars "region=${CLUSTER REGION}" \ --vars "zone=${CLUSTER ZONE}" This command creates the DEPLOYMENT NAME / deployment folder, which contains the Terraform needed to deploy your cluster.
- Two blueprints are provided for the deployment of the cluster as follows: community/examples/tutorial-starccm-slurm.yaml : this blueprint uses Slurm , which is a cluster management and job scheduling system that is used in many HPC centers.
- Use the gcluster deploy command to begin automatic deployment of your cluster: ./gcluster deploy ${DEPLOYMENT NAME} gcluster reports the changes that Terraform is proposing to make for your cluster.


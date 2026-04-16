---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.434Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Cloud Build cleanup pipeline"
feature_slug: "cloud-build-cleanup-pipeline"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
keywords:
  - "build"
  - "cleanup"
  - "pipeline"
  - "cluster"
  - "toolkit"
  - "integrates"
  - "for"
  - "removing"
---

# Cloud Build cleanup pipeline

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit integrates a Cloud Build pipeline for removing unneeded resources.

## Extended Definition

Cluster Toolkit integrates a Cloud Build pipeline for removing unneeded resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit](https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)

## Supporting Pages

### Update Cluster Toolkit version \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit](https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Windows To update on Windows, pull the latest changes from the GitHub repository and rebuild the binary as follows: Go to the toolkit directory where you originally cloned the repository: cd cluster-toolkit Pull the updates from the upstream repository: git pull Note: If you have made local changes that conflict with the latest updates, then a prompt with a request to resolve them appears.
- For instructions, see the documentation for your environment: For Compute Engine and Slurm: Reconfigure a running cluster For Google Kubernetes Engine: Reconfigure a GKE cluster To modify the hardware infrastructure, change immutable properties of the cluster, or if Cluster Toolkit software has a major change, then follow these steps: Delete the existing cluster.
- Redeploy the cluster For basic changes to a running cluster, like adding or removing a partition or resizing an existing one, you can edit and redeploy the cluster blueprint.
- Regularly check the Cluster Toolkit release notes for new versions and updates.

### Set up Cluster Toolkit \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment](https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the bundle by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle mac.zip Extract the bundle files to a new directory: unzip gcluster bundle mac.zip -d gcluster-bundle Go to the new directory: cd gcluster-bundle Make the binary executable: chmod +x gcluster Verify the installation by running the following commands: ./gcluster --version ./gcluster --help Build from source If you use a Windows environment, you must build the Cluster Toolkit binary from source.
- Clone the Cluster Toolkit GitHub repository: git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git Go to the main working directory: cd cluster-toolkit/ Build the Cluster Toolkit binary: make Verify that the build was successful: ./gcluster --version What's next Learn about Cluster blueprints .
- If OS Login is already enabled at the organization level, you don't need to enable it on your project. gcloud compute project-info add-metadata \ --metadata enable-oslogin=TRUE Install Cluster Toolkit To install Cluster Toolkit, download the gcluster bundle linux.zip file for Linux, or the gcluster bundle mac.zip file for macOS, from the releases pa.ge These bundles contain the gcluster binary, the examples directory, and the community/examples` directory.
- Download the bundle by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle linux.zip Extract the bundle files to a new directory: unzip gcluster bundle linux.zip -d gcluster-bundle Go to the new directory: cd gcluster-bundle Make the binary executable: chmod +x gcluster macOS Set the version tag that you want to install.

### "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- To go to the main Cluster Toolkit blueprint's working directory, run the following command from the CLI. cd cluster-toolkit Create a Cloud Storage bucket to store the state of the Terraform deployment: gcloud storage buckets create gs:// BUCKET NAME \ --default-storage-class = STANDARD \ --project = PROJECT ID \ --location = COMPUTE REGION TERRAFORM STATE \ --uniform-bucket-level-access gcloud storage buckets update gs:// BUCKET NAME --versioning Replace the following variables: BUCKET NAME : the name of the new Cloud Storage bucket.
- Clean up resources created by Cluster Toolkit To avoid recurring charges for the resources used on this page, clean up the resources provisioned by Cluster Toolkit, including the VPC networks and GKE cluster: cd /cluster-toolkit ./gcluster destroy CLUSTER NAME / Replace CLUSTER NAME with the name of your cluster.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega GKE cluster for ML training Stay organized with collections Save and categorize content based on your preferences.
- For the clusters created with Cluster Toolkit, the cluster names are based on the DEPLOYMENT NAME name.

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- To redeploy the cluster using an existing image run the following command from the main Cluster Toolkit directory : ./gcluster deploy -d \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \ --only primary,cluster --auto-approve -w This command is only for redeployments where an image already exists as it only redeploys the cluster and its infrastructure.
- To learn how to cleanly destroy infrastructure and for advanced manual deployment instructions, see the deployment folder located at the root of the Cluster Toolkit directory: DEPLOYMENT FOLDER /instructions.txt Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To go to the main Cluster Toolkit working directory, run the following command. cd cluster-toolkit Set up Cloud Storage bucket Cluster blueprints use Terraform modules to provision Cloud infrastructure.
- Home Documentation Compute Cluster Toolkit Guides Send feedback Deploy an A3 Mega Slurm cluster for ML training Stay organized with collections Save and categorize content based on your preferences.


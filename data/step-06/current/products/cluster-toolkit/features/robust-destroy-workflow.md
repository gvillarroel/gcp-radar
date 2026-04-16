---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.435Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Robust destroy workflow"
feature_slug: "robust-destroy-workflow"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d"
keywords:
  - "robust"
  - "destroy"
  - "workflow"
  - "cluster"
  - "toolkit"
  - "introduces"
  - "more"
  - "reliable"
---

# Robust destroy workflow

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Cluster Toolkit introduces a more reliable process for deleting provisioned resources.

## Extended Definition

Cluster Toolkit introduces a more reliable process for deleting provisioned resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)

## Supporting Pages

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Destroy the Slurm cluster Before running the destroy command, navigate to the root of the Cluster Toolkit directory.
- Download the gcluster bundle linux.zip file by using the curl command: curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster bundle linux.zip Extract the bundle files to a new gcluster-bundle directory: unzip gcluster bundle linux.zip -d gcluster-bundle Go to the gcluster-bundle directory: cd gcluster-bundle Make the binary gcluster file: chmod +x gcluster To verify the installation, run the following command: ./gcluster --version After installing the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Get required roles for your Compute Engine default service account To get the permissions that you need to deploy a Slurm cluster, ask your administrator to grant you the following IAM roles: Storage Object Viewer ( roles/storage.objectViewer ) on your project Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the service account itself For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the default Compute Engine service account is enabled Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and that the Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 ) and the Service Account User role ( roles/iam.serviceAccountUser ) are granted to the service account.
- Summary of proposed changes: Plan: 37 to add, 0 to change, 0 to destroy. (D)isplay full proposed changes, (A)pply proposed changes, (S)top and exit, (C)ontinue without applying Please select an option [d,a,s,c]: After accepting the changes, gcluster executes terraform apply automatically.
- When the job finishes you should see an output similar to: $ srun -N 3 hostname hpcslurm-debug-ghpc-0 hpcslurm-debug-ghpc-1 hpcslurm-debug-ghpc-2 The auto-scaled nodes are automatically destroyed by the Slurm controller if left idle for more than 60 seconds.
- After the compute nodes are removed, from the Cloud Shell terminal, run the following command: ./gcluster destroy hpc-slurm --auto-approve When complete you should see something like: Destroy complete!

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to cleanly destroy infrastructure and for advanced manual deployment instructions, see the deployment folder located at the root of the Cluster Toolkit directory: DEPLOYMENT FOLDER /instructions.txt Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After you destroy your cluster, you can delete the reservation if you don't need it anymore.
- Before running the destroy command, navigate to the root of the Cluster Toolkit directory.
- Get required roles for your Compute Engine default service account To get the permissions that you need to deploy a Slurm cluster, ask your administrator to grant you the following IAM roles: Storage Object Viewer ( roles/storage.objectViewer ) on your project Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the service account itself For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Create a Cloud RDMA-enabled HPC Slurm cluster with H4D instances \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Create a deployment file In the Cluster Toolkit directory, create your Slurm deployment YAML file. nano ${H4D DEPLOYMENT FILE NAME}.yaml Tip: Alternatively, for an example of a more detailed deployment file, you can copy examples/hpc-slurm-h4d/hpc-slurm-h4d-deployment.yaml to your workspace and edit it.
- Destroy the Slurm cluster Before running the destroy command, navigate to the root of the Cluster Toolkit directory.
- Clone the Cluster Toolkit GitHub repository In Cloud Shell, clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git Go to the main working directory: cd cluster-toolkit/ Build the Cluster Toolkit binary In Cloud Shell, build the Cluster Toolkit binary from source by running the following command: make To verify the build, run the following command: To deploy an HPC-optimized Slurm cluster that uses H4D instances, you must use version v1.70.0 or later of the Cluster Toolkit. ./gcluster --version After building the binary, you are now ready to deploy clusters to run your jobs or workloads.
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${H4D RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.


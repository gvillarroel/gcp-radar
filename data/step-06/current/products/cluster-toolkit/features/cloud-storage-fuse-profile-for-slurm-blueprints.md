---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.430Z"
product_name: "Cluster Toolkit"
product_slug: "cluster-toolkit"
feature_name: "Cloud Storage FUSE profile for Slurm blueprints"
feature_slug: "cloud-storage-fuse-profile-for-slurm-blueprints"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4"
  - "https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices"
keywords:
  - "storage"
  - "fuse"
  - "profile"
  - "for"
  - "slurm"
  - "blueprints"
  - "cluster"
  - "use"
---

# Cloud Storage FUSE profile for Slurm blueprints

Product: Cluster Toolkit
Coverage: MEDIUM

## Step 02 Summary

Slurm cluster blueprints use the Cloud Storage FUSE profile feature for AI and ML bucket mounts.

## Extended Definition

Slurm cluster blueprints use the Cloud Storage FUSE profile feature for AI and ML bucket mounts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)

## Supporting Pages

### "Create a Cloud RDMA-enabled HPC Slurm cluster with H4D instances \_|\_ Cluster\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${H4D RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Clone the Cluster Toolkit GitHub repository In Cloud Shell, clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git Go to the main working directory: cd cluster-toolkit/ Build the Cluster Toolkit binary In Cloud Shell, build the Cluster Toolkit binary from source by running the following command: make To verify the build, run the following command: To deploy an HPC-optimized Slurm cluster that uses H4D instances, you must use version v1.70.0 or later of the Cluster Toolkit. ./gcluster --version After building the binary, you are now ready to deploy clusters to run your jobs or workloads.
- This bucket is used to store these blueprints. export GOOGLE CLOUD BUCKET NAME= BUCKET NAME export GOOGLE CLOUD BUCKET LOCATION= BUCKET LOCATION Replace the following: BUCKET NAME : the name that you want to use for your Cloud Storage bucket that meets the bucket naming requirements .
- Create a Cloud RDMA-enabled HPC Slurm cluster with H4D instances This page is a quick-start tutorial that describes how to create a high performance computing (HPC) Slurm cluster that uses remote direct memory access (RDMA) with H4D machine types and enhanced management capabilities.

### "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster](https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- Get required roles for your Compute Engine default service account To get the permissions that you need to deploy a Slurm cluster, ask your administrator to grant you the following IAM roles: Storage Object Viewer ( roles/storage.objectViewer ) on your project Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the service account itself For more information about granting roles, see Manage access to projects, folders, and organizations .
- To go to the main Cluster Toolkit working directory, run the following command. cd cluster-toolkit Set up Cloud Storage bucket Cluster blueprints use Terraform modules to provision Cloud infrastructure.
- In the deployment file, specify the Cloud Storage bucket, set names for your network and subnetwork, and set deployment variables such as project ID, region, and zone. --- terraform backend defaults: type: gcs configuration: bucket: BUCKET NAME vars: deployment name: a3mega-base project id: PROJECT ID region: REGION zone: ZONE network name system: NETWORK NAME subnetwork name system: SUBNETWORK NAME enable ops agent: true enable nvidia dcgm: true enable nvidia persistenced: true disk size gb: 200 final image family: slurm-a3mega slurm cluster name: CLUSTER NAME a3mega reservation name: RESERVATION NAME a3mega cluster size: NUMBER OF VMS Replace the following: BUCKET NAME : the name of your Cloud Storage bucket, created in the previous section.
- To redeploy the cluster using an existing image run the following command from the main Cluster Toolkit directory : ./gcluster deploy -d \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \ examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \ --only primary,cluster --auto-approve -w This command is only for redeployments where an image already exists as it only redeploys the cluster and its infrastructure.

### "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- On Google Cloud, you can create a Cloud Storage bucket that has versioning enabled. gcloud storage buckets create gs://${GOOGLE CLOUD BUCKET NAME} \ --project=${A4 RESERVATION PROJECT ID} \ --default-storage-class=STANDARD \ --location=${GOOGLE CLOUD BUCKET LOCATION} \ --uniform-bucket-level-access gcloud storage buckets update gs://${GOOGLE CLOUD BUCKET NAME} --versioning Set up the Cluster Toolkit To create a Slurm cluster in a Google Cloud project, you can use Cluster Toolkit to handle deploying and provisioning the cluster.
- Get required roles for your Compute Engine default service account To get the permissions that you need to deploy a Slurm cluster, ask your administrator to grant you the following IAM roles: Storage Object Viewer ( roles/storage.objectViewer ) on your project Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) on your project Service Account User ( roles/iam.serviceAccountUser ) on the service account itself For more information about granting roles, see Manage access to projects, folders, and organizations .
- This bucket is used to store these blueprints. export GOOGLE CLOUD BUCKET NAME= GOOGLE CLOUD BUCKET NAME export GOOGLE CLOUD BUCKET LOCATION= GOOGLE CLOUD BUCKET LOCATION Replace the following: GOOGLE CLOUD BUCKET NAME : the name that you want to use for your Cloud Storage bucket that meets the bucket naming requirements .
- Specifically, you set up a cluster with Compute Engine virtual machines, create a Cloud Storage bucket to store the necessary Terraform modules, and set up a Filestore instance to provision your Slurm cluster.

### "Best practices for running HPC workloads \_|\_ Cluster Toolkit \_|\_ Google\

- URL: [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example using the vm-instance module: - id: workstation-rocky source: modules/compute/vm-instance use: [network] settings: allow automatic updates: false Here is an example for a Slurm nodeset: - id: dynamic nodeset source: community/modules/compute/schedmd-slurm-gcp-v6-nodeset use: [network] settings: node count static: 1 node count dynamic max: 4 allow automatic updates: false The examples/hpc-slurm-h4d/hpc-slurm-h4d.yaml blueprint is configured to automatically disable updates by setting allow automatic updates to false .
- For example, this setting affects dnf automatic package updates on the following image families: HPC images, such as hpc-rocky-linux-8 (project cloud-hpc-image-public ) Slurm images, such as slurm-gcp-6-6-hpc-rocky-linux-8 (project schedmd-slurm-public ) Cluster Toolkit provides a convenient setting on relevant modules to set this metadata flag for you: allow automatic updates: false .
- Configure file system tuning Each primary storage choice for tightly-coupled applications has its own cost, performance profile, APIs, and consistency semantics.
- We recommend using Cloud Storage with Cloud Storage FUSE because it lets you scale your data storage in a more cost effective manner than file system services.


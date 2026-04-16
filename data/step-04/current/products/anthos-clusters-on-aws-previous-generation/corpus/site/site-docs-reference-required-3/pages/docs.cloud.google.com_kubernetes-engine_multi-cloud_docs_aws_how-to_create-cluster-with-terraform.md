---
title: "Create a VPC and cluster with Terraform \_|\_ GKE on AWS \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform
  title: "Create a VPC and cluster with Terraform \_|\_ GKE on AWS \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create a VPC and cluster with Terraform
Stay organized with collections
Save and categorize content based on your preferences.
Overview
Terraform is an open source tool for configuring cloud environments such as
AWS and installing software such as Kubernetes on
them. You can configure your AWS environment and create your clusters
in it either with Terraform or with the GKE on AWS
installation instructions .
This page describes how to use Terraform to configure your AWS
environment and install a cluster using a sample configuration
stored on GitHub. This page is for IT administrators and Operators
who want to set up, monitor, and manage cloud infrastructure, automate
deployments, and use templates and declarative configuration. To learn more
about common roles and example tasks that we reference in Google Cloud content,
see
Common GKE user roles and tasks .
To use these scripts, you need a basic familiarity
with Terraform. In particular, you must edit the Terraform configuration files
to add your own user and project information and to make any changes you need to
the default cluster configuration.
To configure your AWS environment and create clusters without using
Terraform, see
AWS prerequisites overview
and the instructions to create a cluster .
What the scripts do
This script configures Terraform to create an AWS VPC and deploy
a cluster on it. The resulting VPC meets all
GKE on AWS prerequisites
and has the same network topology as the VPC created by Google's manual
VPC creation instructions .
The cluster that the script set creates has the following characteristics:
three control plane nodes (one in each of the three configured availability zones).
These nodes are of type t3.large .
One node pool with two nodes of type t3.large .
This node pool is deployed in the AWS us-east-1 region and can
autoscale to five nodes.
How to change the default VPC and cluster
You can change the characteristics of the VPC and cluster created by the Terraform
scripts by editing the appropriate Terraform files.
Adjust the region and availability zones by editing the variables.tf file.
Change the
AWS instance type .
Alter the characteristics of the VPC, including the subnets, availability zones
and load balancer, by editing the files in the modules/vpc subfolder.
For a list of AWS regions controlled from a particular Google Cloud
region and their associated Kubernetes versions, run the following command:
gcloud container aws get-server-config --location ` GOOGLE_CLOUD_REGION `
Replace GOOGLE_CLOUD_REGION with the name of the
Google Cloud region you want
GKE on AWS to control your cluster from.
Prerequisites
Install the Google Cloud CLI with the
Google Cloud CLI installation instructions .
If you've already installed it, use these instructions to make sure you're running
version 412.0.0 or higher.
Install the AWS CLI with the
AWS CLI installation instructions .
Create your
AWS access keys .
Configure your local AWS environment with the following command:
aws configure
Prepare Terraform
Configure Google Cloud CLI authentication by running the following commands:
gcloud config set project GOOGLE_PROJECT_ID
gcloud auth application-default login --no-launch-browser
Enable the required services in your Google Cloud project.
gcloud --project = " GOOGLE_PROJECT_ID " services enable \
gkemulticloud.googleapis.com \
gkeconnect.googleapis.com \
connectgateway.googleapis.com \
cloudresourcemanager.googleapis.com \
anthos.googleapis.com \
logging.googleapis.com \
monitoring.googleapis.com \
opsconfigmonitoring.googleapis.com
Replace GOOGLE_PROJECT_ID with your Google project ID.
Make a local copy of the repository and change to the AWS folder:
git clone https://github.com/GoogleCloudPlatform/anthos-samples.git
cd anthos-samples/anthos-multi-cloud/AWS
Deploy GKE on AWS
Edit the following lines in the terraform.tfvars file to replace the
default values:
gcp_project_id = GOOGLE_PROJECT_ID
admin_users = [" GCP_ACCOUNT_EMAIL "]
cluster_version = GKE_VERSION
Replace the following:
GOOGLE_PROJECT_ID : your Google project id. You can find
this on the left side of the dashboard page of the
Google Cloud console .
ACCOUNT_EMAILS : a comma-separated list of email
addresses that can login to the clusters after it's created— for
example "admin@example.com","operator@example.com" . At least one address
must have a Google Cloud account. To add additional identity
providers to your cluster, see
Manage identity with GKE Identity Service .
GKE_VERSION : a supported GKE version for your chosen
region. To find the supported versions, see
GKE on AWS versioning and support .
Initialize and create the Terraform plan:
terraform init
Terraform installs any needed libraries, such as the Google Cloud
provider.
Apply the Terraform plan to create the AWS Virtual Private Cloud and cluster:
terraform apply
Follow the instructions to start creating a cluster.
The installation takes about 12 minutes. When Terraform completes creating your
AWS Virtual Private Cloud and cluster, it prints out information on the cluster and creates a
file named var.sh . You can use the values in this file if you create
additional node pools.
To verify that the cluster has been created successfully, watch for it to
appear in the
Kubernetes Engine page
of the Google Cloud console in your Google Cloud project.
Connect to your cluster
To verify connectivity to your cluster and fetch its details, run the following
command:
gcloud container fleet memberships get-credentials CLUSTER_NAME
kubectl get nodes
Replace CLUSTER_NAME with the name of your cluster. You can
find your cluster name in the var.sh Terraform output file.
The output includes a list of nodes in your cluster and their status.
Delete your cluster and AWS Virtual Private Cloud
Before you delete your cluster and AWS Virtual Private Cloud, you must remove all of the
following:
Any active AWS load balancers in the AWS Virtual Private Cloud
Any additional node pools in your cluster not created with Terraform
Any additional clusters in the AWS Virtual Private Cloud not created with Terraform
To remove the cluster and AWS Virtual Private Cloud you created with Terraform, run the
following command:
terraform destroy
Terraform drains workloads from your nodes, deletes your primary node pool and
cluster, and deletes your AWS Virtual Private Cloud.
Authorize Cloud Logging and Cloud Monitoring
Note: Starting with GKE on AWS version 1.28, manual policy binding to
authorize the gke-system/gke-telemetry-agent service account for log and
metric collection is no longer necessary. The required permissions are now
automatically granted to this service account. You can therefore disregard
this section.
If you want to enable Cloud Logging and Cloud Monitoring, you must add an
allow policy to your Google Cloud project after you create a
cluster.
Add an allow policy with the Google Cloud CLI:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[gke-system/gke-telemetry-agent]" \
--role = roles/gkemulticloud.telemetryWriter
Replace PROJECT_ID with your project ID.
Next steps
To learn about Google's centralized cluster event logging, see
Cloud Logging .
To read about Google's Cloud Monitoring tools, see
Cloud Monitoring .
To install centralized configuration management, see
Configure a cluster with Config Controller .
For more information about Terraform GKE on AWS scripts, see
Terraform AWS clusters reference
Terraform AWS node pool reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

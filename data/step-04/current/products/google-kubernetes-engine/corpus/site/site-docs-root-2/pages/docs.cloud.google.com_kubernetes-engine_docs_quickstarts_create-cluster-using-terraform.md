---
title: "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\
  |\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform
  title: "Quickstart: Create a GKE cluster and deploy a workload using Terraform \_\
    |\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a cluster and deploy a workload using Terraform
Autopilot
A Kubernetes cluster provides compute, storage, networking,
and other services for applications, similar to a virtual data center. Apps and
their associated services that run in Kubernetes are called workloads .
This tutorial lets you quickly see a running Google Kubernetes Engine cluster and sample workload, all set up using Terraform. You can then explore the workload in the Google Cloud console before going on to our more in-depth learning path , or to start planning and creating your own production-ready cluster. This tutorial assumes that you are already familiar with Terraform.
If you'd prefer to set up your sample cluster and workload in the Google Cloud console, see Create a cluster in the Google Cloud console .
What is Terraform? Infrastructure as Code (IaC) is a practice of managing and provisioning software infrastructure resources using code. Terraform is a popular open source IaC tool created by HashiCorp
that supports a wide range of Cloud services, including GKE. As a
GKE platform administrator, you can use Terraform to standardize configuration of your Kubernetes clusters in production and streamline your DevOps workflows.
To learn more, see
Terraform support for GKE .
Before you begin
Take the following steps to enable the Kubernetes Engine API:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/container.admin, roles/compute.networkAdmin, roles/iam.serviceAccountUser
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Prepare the environment
In this tutorial you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell is preinstalled with the
software you need for this tutorial, including Terraform ,
kubectl , and the
the Google Cloud CLI .
Launch a Cloud Shell session from the Google Cloud console, by clicking
the Cloud Shell activation icon Activate Cloud Shell
. This
launches a session in the bottom pane of the Google Cloud console.
The service credentials associated with this virtual machine are automatic,
so you don't have to set up or download a service account key.
Before you run commands, set your default project in the
gcloud CLI using the following command:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your
project ID .
Clone the GitHub repository:
git clone https://github.com/terraform-google-modules/terraform-docs-samples.git --single-branch
Change to the working directory:
cd terraform-docs-samples/gke/quickstart/autopilot
Review the Terraform files
The
Google Cloud provider
is a plugin that lets you manage and provision Google Cloud resources
using Terraform. It serves as a
bridge between Terraform configurations and Google Cloud APIs,
letting you declaratively define infrastructure resources, such as virtual machines and
networks.
The cluster and sample app for this tutorial are specified in two Terraform files that use the Google Cloud and Kubernetes providers.
Review the cluster.tf file:
cat cluster.tf
The output is similar to the following
resource "google_compute_network" "default" {
name = "example-network"
auto_create_subnetworks = false
enable_ula_internal_ipv6 = true
}
resource "google_compute_subnetwork" "default" {
name = "example-subnetwork"
ip_cidr_range = "10.0.0.0/16"
region = "us-central1"
stack_type = "IPV4_IPV6"
ipv6_access_type = "INTERNAL" # Change to "EXTERNAL" if creating an external loadbalancer
network = google_compute_network.default.id
secondary_ip_range {
range_name = "services-range"
ip_cidr_range = "192.168.0.0/24"
}
secondary_ip_range {
range_name = "pod-ranges"
ip_cidr_range = "192.168.1.0/24"
}
}
resource "google_container_cluster" "default" {
name = "example-autopilot-cluster"
location = "us-central1"
enable_autopilot = true
enable_l4_ilb_subsetting = true
network = google_compute_network.default.id
subnetwork = google_compute_subnetwork.default.id
ip_allocation_policy {
stack_type = "IPV4_IPV6"
services_secondary_range_name = google_compute_subnetwork.default.secondary_ip_range[0].range_name
cluster_secondary_range_name = google_compute_subnetwork.default.secondary_ip_range[1].range_name
}
# Set `deletion_protection` to `true` will ensure that one cannot
# accidentally delete this instance by use of Terraform.
deletion_protection = false
}
This file describes the following resources:
google_compute_network : a VPC network with internal IPv6
enabled.
google_compute_subnetwork : a
dual-stack subnetwork .
google_container_cluster : a
dual-stack Autopilot mode cluster
located in us-central1 . The deletion_protection setting controls
whether you can use Terraform to delete this cluster. If you set the
value in the deletion_protection field to false , Terraform can delete
the cluster. For details, see the
google_container_cluster reference .
Review the app.tf file:
cat app.tf
The output is similar to the following:
data "google_client_config" "default" {}
provider "kubernetes" {
host = "https://${google_container_cluster.default.endpoint}"
token = data.google_client_config.default.access_token
cluster_ca_certificate = base64decode ( google_container_cluster.default.master_auth[0].cluster_ca_certificate )
ignore_annotations = [
"^autopilot\\.gke\\.io\\/.*" ,
"^cloud\\.google\\.com\\/.*"
]
}
resource "kubernetes_deployment_v1" "default" {
metadata {
name = "example-hello-app-deployment"
}
spec {
selector {
match_labels = {
app = "hello-app"
}
}
template {
metadata {
labels = {
app = "hello-app"
}
}
spec {
container {
image = "us-docker.pkg.dev/google-samples/containers/gke/hello-app:2.0"
name = "hello-app-container"
port {
container_port = 8080
name = "hello-app-svc"
}
security_context {
allow_privilege_escalation = false
privileged = false
read_only_root_filesystem = false
capabilities {
add = []
drop = [ "NET_RAW" ]
}
}
liveness_probe {
http_get {
path = "/"
port = "hello-app-svc"
http_header {
name = "X-Custom-Header"
value = "Awesome"
}
}
initial_delay_seconds = 3
period_seconds = 3
}
}
security_context {
run_as_non_root = true
seccomp_profile {
type = "RuntimeDefault"
}
}
# Toleration is currently required to prevent perpetual diff:
# https://github.com/hashicorp/terraform-provider-kubernetes/pull/2380
toleration {
effect = "NoSchedule"
key = "kubernetes.io/arch"
operator = "Equal"
value = "amd64"
}
}
}
}
}
resource "kubernetes_service_v1" "default" {
metadata {
name = "example-hello-app-loadbalancer"
annotations = {
"networking.gke.io/load-balancer-type" = "Internal" # Remove to create an external loadbalancer
}
}
spec {
selector = {
app = kubernetes_deployment_v1.default.spec[0].selector[0].match_labels.app
}
ip_family_policy = "RequireDualStack"
port {
port = 80
target_port = kubernetes_deployment_v1.default.spec[0].template[0].spec[0].container[0].port[0].name
}
type = "LoadBalancer"
}
depends_on = [ time_sleep.wait_service_cleanup ]
}
# Provide time for Service cleanup
resource "time_sleep" "wait_service_cleanup" {
depends_on = [ google_container_cluster.default ]
destroy_duration = "180s"
}
This file describes the following resources:
A
Deployment
with a sample container image.
A
Service of type LoadBalancer . The Service exposes the
Deployment on port 80.
(Optional) Expose the application to the internet
The Terraform files for the example describe an application with an internal IP address , which can only be accessed from the same Virtual Private Cloud (VPC) as the sample app. If you want to access the running demo app's web interface from the internet (for example, from your laptop), modify the Terraform files to create a public IP address instead before you create the cluster. You can do this using a text editor directly in Cloud Shell or by using the Cloud Shell Editor.
To expose the demo application to the internet:
In cluster.tf , change ipv6_access_type from INTERNAL to EXTERNAL .
ipv6_access_type = "EXTERNAL"
In app.tf , configure an external load balancer by removing the
networking.gke.io/load-balancer-type annotation.
annotations = {
"networking.gke.io/load-balancer-type" = "Internal" # Remove this line
}
Create a cluster and deploy an application
In Cloud Shell, run this command to verify that Terraform is available:
terraform
The output should be similar to the following:
Usage: terraform [global options] <subcommand> [args]
The available commands for execution are listed below.
The primary workflow commands are given first, followed by
less common or more advanced commands.
Main commands:
init Prepare your working directory for other commands
validate Check whether the configuration is valid
plan Show changes required by the current configuration
apply Create or update infrastructure
destroy Destroy previously-created infrastructure
Initialize Terraform:
terraform init
Plan the Terraform configuration:
terraform plan
Apply the Terraform configuration
terraform apply
When prompted, enter yes to confirm actions. This command might take
several minutes to complete. The output is similar to the following:
Apply complete! Resources: 6 added, 0 changed, 0 destroyed.
Verify the cluster is working
Do the following to confirm your cluster is running correctly:
Go to the Workloads page in the Google Cloud console:
Go to Workloads
Click the example-hello-app-deployment workload. The Pod details page
displays. This page shows information about the Pod, such as annotations,
containers running on the Pod, Services exposing the Pod, and metrics
including CPU, Memory, and Disk usage.
Go to the Services & Ingress page in the Google Cloud console:
Go to Services & Ingress
Click the example-hello-app-loadbalancer LoadBalancer Service. The Service
details page displays. This page shows information about the Service, such
as the Pods associated with the Service, and the Ports the Services uses.
In the External endpoints section, click the IPv4 link or the
IPv6 link to view your Service in the browser. The output is similar to
the following:
Hello, world!
Version: 2.0.0
Hostname: example-hello-app-deployment-5df979c4fb-kdwgr
Success: You've successfully created a cluster and deployed a workload to
GKE using Terraform.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
If you plan to take additional tutorials or to explore your sample further , wait until you're finished to perform this cleanup step.
In Cloud Shell, run the following command to delete the Terraform resources:
terraform destroy --auto-approve
Troubleshoot cleanup errors
If you see an error message similar to The network resource 'projects/PROJECT_ID/global/networks/example-network' is already being used by 'projects/PROJECT_ID/global/firewalls/example-network-yqjlfql57iydmsuzd4ot6n5v' ,
do the following:
Delete the firewall rules:
gcloud compute firewall-rules list --filter = "NETWORK:example-network" --format = "table[no-heading](name)" | xargs gcloud --quiet compute firewall-rules delete
Re-run the Terraform command:
terraform destroy --auto-approve
What's next
Explore your cluster and workload in the Google Cloud console
to learn about the some of the key workload settings and resources that
you deployed.
Learn more about setting up and using Terraform with GKE in Terraform support for GKE .
Try our more in-depth Learning path: Scalable apps .
Learn how to get started with real life cluster administration in our Cluster administration overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

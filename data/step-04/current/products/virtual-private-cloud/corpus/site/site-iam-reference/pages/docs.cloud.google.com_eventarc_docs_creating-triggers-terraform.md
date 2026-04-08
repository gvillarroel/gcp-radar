---
title: "Create a trigger using Terraform \_|\_ Eventarc Standard \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/all-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform
  title: "Create a trigger using Terraform \_|\_ Eventarc Standard \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a trigger using Terraform | Eventarc Standard | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Eventarc
Standard
Start free
Overview
Eventarc Standard
Site selector
Eventarc Advanced documentation
Understanding and using Eventarc Advanced
Eventarc Standard documentation
Understanding and using Eventarc Standard
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Eventarc Standard
More
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Choose Eventarc Advanced or Eventarc Standard
Event-driven architectures
Event providers and destinations
Google event types supported
Event format
Event routes
Get started
Quickstart: Receive events from Cloud Storage in Cloud Run
Target: Cloud Run
Receive events using Cloud Audit Logs (gcloud CLI)
Receive events using Pub/Sub messages (gcloud CLI)
Receive events using Pub/Sub messages (Terraform)
Receive direct events from Cloud Storage (gcloud CLI)
Receive direct events from Cloud Storage (console)
Target: GKE
Receive events using Cloud Audit Logs (gcloud CLI)
Receive events using Pub/Sub messages (gcloud CLI)
Target: Workflows
Trigger Workflows using Cloud Audit Logs (gcloud CLI)
Trigger Workflows using Pub/Sub messages (gcloud CLI)
Trigger Workflows with direct events from Cloud Storage (gcloud CLI)
Create a trigger
Target: Cloud Run functions
Target: Cloud Run
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Target: GKE
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Target: Internal HTTP endpoint
Route events to an internal HTTP endpoint in a VPC network
Target: Workflows
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Create a trigger using Terraform
Configure and manage
Manage triggers
Understand Eventarc locations
Determine event filters for audit logs
Understand path patterns
List event providers
Retry events
Control access
Access control with IAM
Set roles and permissions
All roles and permissions
Target: Cloud Run
Target: GKE
Target: Workflows
Target: Internal HTTP endpoint in a VPC network
Support a cross-project service account
Set up a service perimeter
Use customer-managed encryption keys (CMEK)
Use custom organization policies
Disable Eventarc Advanced resources
Develop
Develop event receivers
Route events
Receive Cloud Audit Logs events using an authenticated Cloud Run service
Receive Pub/Sub events using an authenticated Cloud Run service
Route events across Google Cloud projects
Receive Pub/Sub events at an internal HTTP endpoint in a VPC network
Receive Pub/Sub events at a private HTTP endpoint in a private GKE cluster
Build a BigQuery processing pipeline for Cloud Run
Migrate Pub/Sub triggers from Events for Cloud Run for Anthos to Eventarc
Build a BigQuery processing pipeline for Knative serving
Deploy third-party events
About third-party events
Third-party providers
Subscribe to events
From Check Point CloudGuard
From Datadog
From ForgeRock
Create a channel
Create a trigger
Offer an Eventarc source
Overview
Register as a provider
Configure your source
Test the configuration
Troubleshoot event publishing
Monitor
Observability in Eventarc
Eventarc audit logging
Eventarc Publishing audit logging
Troubleshoot
View audit logs
Troubleshoot issues
All targets
Target: Cloud Run
Target: GKE
Target: Workflows
Customer-managed encryption key (CMEK) errors
Debug routing events to Cloud Run
Known issues
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
Site selector
Eventarc Advanced documentation
Eventarc Standard documentation
On this page
Before you begin
Prepare to deploy Terraform Prepare Cloud Shell
Prepare the directory
Define your Terraform configuration Enable APIs
Create a service account and configure its access
Create a Cloud Storage bucket as an event provider
Create an event receiver to be the event target
Define an Eventarc trigger
Apply Terraform
Verify the creation of resources
Generate and view an event
Clean up
What's next
Home
Documentation
Application development
Eventarc
Standard
Guides
Was this helpful?
Send feedback
Create a trigger using Terraform
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Prepare to deploy Terraform Prepare Cloud Shell
Prepare the directory
Define your Terraform configuration Enable APIs
Create a service account and configure its access
Create a Cloud Storage bucket as an event provider
Create an event receiver to be the event target
Define an Eventarc trigger
Apply Terraform
Verify the creation of resources
Generate and view an event
Clean up
What's next
Standard
This document describes how to use Terraform and the
google_eventarc_trigger
resource to create Eventarc triggers for the following Google Cloud
destinations:
Cloud Run
Google Kubernetes Engine
Workflows
For more information about using Terraform, see the
Terraform on Google Cloud documentation.
The code samples in this guide route direct events from Cloud Storage but
can be adapted for any
event provider . For example,
to learn how to route direct events from Pub/Sub to Cloud Run,
see the
Terraform quickstart .
Before you begin
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Resource Manager and Identity and Access Management (IAM) APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Terraform is integrated into the Cloud Shell environment and you
can use Cloud Shell to deploy your Terraform resources without
having to install Terraform.
Prepare to deploy Terraform
Before deploying any Terraform resources, you must create a Terraform
configuration file. A Terraform configuration file lets you define your
preferred end-state for your infrastructure using the Terraform syntax.
Prepare Cloud Shell
In Cloud Shell, set the default Google Cloud project where you want to
apply your Terraform configurations. You only need to run this command once per
project, and you can run it in any directory:
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Replace PROJECT_ID with the ID of your Google Cloud project.
Note that environment variables are overridden if you set explicit values in the
Terraform configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also called a
root module ). In Cloud Shell, create a directory and a create
a new file within that directory:
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
The filename must have the .tf extension—for
example, in this document, the file is referred to as main.tf .
Define your Terraform configuration
Copy the applicable Terraform code samples into your newly created
main.tf file. Optionally, you can copy the code from GitHub. This
is recommended when the Terraform snippet is part of an end-to-end solution.
Typically, you apply the entire configuration at once. However,
you can also target a specific resource. For example:
terraform apply -target = "google_eventarc_trigger.default"
Note that the Terraform code samples use
interpolation
for substitutions such as reference variables, attributes of resources, and call
functions.
Enable APIs
Terraform samples typically assume that the required APIs are enabled in your
Google Cloud project. Use the following code to enable the APIs:
Cloud Run GKE Workflows
More
# Enable Cloud Run API
resource "google_project_service" "run" {
service = "run.googleapis.com"
disable_on_destroy = false
}
# Enable Eventarc API
resource "google_project_service" "eventarc" {
service = "eventarc.googleapis.com"
disable_on_destroy = false
}
# Enable Pub/Sub API
resource "google_project_service" "pubsub" {
service = "pubsub.googleapis.com"
disable_on_destroy = false
}
# Enable GKE API
resource "google_project_service" "container" {
service = "container.googleapis.com"
disable_on_destroy = false
}
# Enable Eventarc API
resource "google_project_service" "eventarc" {
service = "eventarc.googleapis.com"
disable_on_destroy = false
}
# Enable Pub/Sub API
resource "google_project_service" "pubsub" {
service = "pubsub.googleapis.com"
disable_on_destroy = false
}
# Enable Workflows API
resource "google_project_service" "workflows" {
service = "workflows.googleapis.com"
disable_on_destroy = false
}
# Enable Eventarc API
resource "google_project_service" "eventarc" {
service = "eventarc.googleapis.com"
disable_on_destroy = false
}
# Enable Pub/Sub API
resource "google_project_service" "pubsub" {
service = "pubsub.googleapis.com"
disable_on_destroy = false
}
Create a service account and configure its access
Every Eventarc trigger is associated with an IAM
service account at the time the trigger is created. Use the following code to
create a dedicated service account and grant the user-managed service account
specific Identity and Access Management roles to manage events:
Cloud Run GKE Workflows
More
# Used to retrieve project information later
data "google_project" "project" {}
# Create a dedicated service account
resource "google_service_account" "default" {
account_id = "eventarc-trigger-sa"
display_name = "Eventarc Trigger Service Account"
}
# Grant permission to receive Eventarc events
resource "google_project_iam_member" "eventreceiver" {
project = data.google_project.project.id
role = "roles/eventarc.eventReceiver"
member = "serviceAccount:${google_service_account.default.email}"
}
# Grant permission to invoke Cloud Run services
resource "google_project_iam_member" "runinvoker" {
project = data.google_project.project.id
role = "roles/run.invoker"
member = "serviceAccount:${google_service_account.default.email}"
}
The Pub/Sub service agent is automatically created when the
Pub/Sub API is enabled. If the Pub/Sub service agent was
created on or before April 8, 2021, and the service account does not have
the Cloud Pub/Sub Service Agent role
( roles/pubsub.serviceAgent ), grant the
Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. For more information, see
Create and grant roles to service agents .
resource "google_project_iam_member" "tokencreator" {
project = data.google_project.project.id
role = "roles/iam.serviceAccountTokenCreator"
member = "serviceAccount:service- ${ data .google_project.project.number } @gcp-sa-pubsub.iam.gserviceaccount.com"
}
Before creating the service account, enable Eventarc to
manage GKE clusters:
# Used to retrieve project_number later
data "google_project" "project" {}
# Enable Eventarc to manage GKE clusters
# This is usually done with: gcloud eventarc gke-destinations init
#
# Eventarc creates a separate Event Forwarder pod for each trigger targeting a
# GKE service, and requires explicit permissions to make changes to the
# cluster. This is done by granting permissions to a special service account
# (the Eventarc P4SA) to manage resources in the cluster. This needs to be done
# once per Google Cloud project.
# This identity is created with: gcloud beta services identity create --service eventarc.googleapis.com
# This local variable is used for convenience
locals {
eventarc_sa = "serviceAccount:service-${data.google_project.project.number}@gcp-sa-eventarc.iam.gserviceaccount.com"
}
resource "google_project_iam_member" "computeViewer" {
project = data.google_project.project.id
role = "roles/compute.viewer"
member = local.eventarc_sa
}
resource "google_project_iam_member" "containerDeveloper" {
project = data.google_project.project.id
role = "roles/container.developer"
member = local.eventarc_sa
}
resource "google_project_iam_member" "serviceAccountAdmin" {
project = data.google_project.project.id
role = "roles/iam.serviceAccountAdmin"
member = local.eventarc_sa
}
Create the service account:
# Create a service account to be used by GKE trigger
resource "google_service_account" "eventarc_gke_trigger_sa" {
account_id = "eventarc-gke-trigger-sa"
display_name = "Evenarc GKE Trigger Service Account"
}
# Grant permission to receive Eventarc events
resource "google_project_iam_member" "eventreceiver" {
project = data.google_project.project.id
role = "roles/eventarc.eventReceiver"
member = "serviceAccount:${google_service_account.eventarc_gke_trigger_sa.email}"
}
# Grant permission to subscribe to Pub/Sub topics
resource "google_project_iam_member" "pubsubscriber" {
project = data.google_project.project.id
role = "roles/pubsub.subscriber"
member = "serviceAccount:${google_service_account.eventarc_gke_trigger_sa.email}"
}
# Used to retrieve project information later
data "google_project" "project" {}
# Create a service account for Eventarc trigger and Workflows
resource "google_service_account" "eventarc" {
account_id = "eventarc-workflows-sa"
display_name = "Eventarc Workflows Service Account"
}
# Grant permission to invoke Workflows
resource "google_project_iam_member" "workflowsinvoker" {
project = data.google_project.project.id
role = "roles/workflows.invoker"
member = "serviceAccount:${google_service_account.eventarc.email}"
}
# Grant permission to receive events
resource "google_project_iam_member" "eventreceiver" {
project = data.google_project.project.id
role = "roles/eventarc.eventReceiver"
member = "serviceAccount:${google_service_account.eventarc.email}"
}
# Grant permission to write logs
resource "google_project_iam_member" "logwriter" {
project = data.google_project.project.id
role = "roles/logging.logWriter"
member = "serviceAccount:${google_service_account.eventarc.email}"
}
The Pub/Sub service agent is automatically created when the
Pub/Sub API is enabled. If the Pub/Sub service agent was
created on or before April 8, 2021, and the service account does not have a
the Cloud Pub/Sub Service Agent role
( roles/pubsub.serviceAgent ), grant the
Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. For more information, see
Create and grant roles to service agents .
resource "google_project_iam_member" "tokencreator" {
project = data.google_project.project.id
role = "roles/iam.serviceAccountTokenCreator"
member = "serviceAccount:service- ${ data .google_project.project.number } @gcp-sa-pubsub.iam.gserviceaccount.com"
}
Create a Cloud Storage bucket as an event provider
Use the following code to create a Cloud Storage bucket, and grant the
Pub/Sub
Publisher role ( roles/pubsub.publisher ) to the
Cloud Storage service agent.
Cloud Run GKE Workflows
More
# Cloud Storage bucket names must be globally unique
resource "random_id" "bucket_name_suffix" {
byte_length = 4
}
# Create a Cloud Storage bucket
resource "google_storage_bucket" "default" {
name = "trigger-cloudrun-${data.google_project.project.name}-${random_id.bucket_name_suffix.hex}"
location = google_cloud_run_v2_service.default.location
force_destroy = true
uniform_bucket_level_access = true
}
# Grant the Cloud Storage service account permission to publish pub/sub topics
data "google_storage_project_service_account" "gcs_account" {}
resource "google_project_iam_member" "pubsubpublisher" {
project = data.google_project.project.id
role = "roles/pubsub.publisher"
member = "serviceAccount:${data.google_storage_project_service_account.gcs_account.email_address}"
depends_on = [ data.google_storage_project_service_account.gcs_account ]
}
# Cloud Storage bucket names must be globally unique
resource "random_id" "bucket_name_suffix" {
byte_length = 4
}
# Create a Cloud Storage bucket
resource "google_storage_bucket" "default" {
name = "trigger-gke-${data.google_project.project.name}-${random_id.bucket_name_suffix.hex}"
location = "us-central1"
force_destroy = true
uniform_bucket_level_access = true
}
# Grant the Cloud Storage service account permission to publish pub/sub topics
data "google_storage_project_service_account" "gcs_account" {}
resource "google_project_iam_member" "pubsubpublisher" {
project = data.google_project.project.id
role = "roles/pubsub.publisher"
member = "serviceAccount:${data.google_storage_project_service_account.gcs_account.email_address}"
}
# Cloud Storage bucket names must be globally unique
resource "random_id" "bucket_name_suffix" {
byte_length = 4
}
# Create a Cloud Storage bucket
resource "google_storage_bucket" "default" {
name = "trigger-workflows-${data.google_project.project.name}-${random_id.bucket_name_suffix.hex}"
location = google_workflows_workflow.default.region
force_destroy = true
uniform_bucket_level_access = true
}
# Grant the Cloud Storage service account permission to publish Pub/Sub topics
data "google_storage_project_service_account" "gcs_account" {}
resource "google_project_iam_member" "pubsubpublisher" {
project = data.google_project.project.id
role = "roles/pubsub.publisher"
member = "serviceAccount:${data.google_storage_project_service_account.gcs_account.email_address}"
}
Create an event receiver to be the event target
Create an event receiver using one of the following Terraform resources:
google_cloud_run_v2_service
google_container_cluster
google_workflows_workflow
Cloud Run GKE Workflows
More
Create a Cloud Run service as an event destination for the
Eventarc trigger:
# Deploy Cloud Run service
resource "google_cloud_run_v2_service" "default" {
name = "hello-events"
location = "us-central1"
deletion_protection = false # set to "true" in production
template {
containers {
# This container will log received events
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
service_account = google_service_account.default.email
}
depends_on = [ google_project_service.run ]
}
To simplify this guide, create a Google Kubernetes Engine service as an event
destination outside of Terraform, in between applying Terraform
configurations.
If you haven't created a trigger in this Google Cloud project before,
run the following command to create the
Eventarc service agent :
gcloud beta services identity create --service eventarc.googleapis.com
Note: It can take a few minutes
before all necessary permissions are propagated to the Eventarc
service agent. If you encounter this issue, wait a few minutes, then run
terraform apply again.
Create a GKE cluster:
# Create an auto-pilot GKE cluster
resource "google_container_cluster" "gke_cluster" {
name = "eventarc-cluster"
location = "us-central1"
enable_autopilot = true
depends_on = [
google_project_service.container
]
}
Deploy a Kubernetes service on GKE that will receive HTTP
requests and log events by using a prebuilt Cloud Run image,
us-docker.pkg.dev/cloudrun/container/hello :
Get authentication credentials to interact with the cluster:
gcloud container clusters get-credentials eventarc-cluster \
--region = us-central1
Create a deployment named hello-gke :
kubectl create deployment hello-gke \
--image = us-docker.pkg.dev/cloudrun/container/hello
Expose the deployment as a Kubernetes service:
kubectl expose deployment hello-gke \
--type ClusterIP --port 80 --target-port 8080
Make sure the pod is running:
kubectl get pods
The output should be similar to the following:
NAME READY STATUS RESTARTS AGE
hello-gke-5b6574b4db-rzzcr 1 /1 Running 0 2m45s
If the STATUS is Pending or ContainerCreating , the pod is deploying.
Wait a minute for the deployment to complete, and check the status again.
Make sure the service is running:
kubectl get svc
The output should be similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT ( S ) AGE
hello-gke ClusterIP 34 .118.230.123 <none> 80 /TCP 4m46s
kubernetes ClusterIP 34 .118.224.1 <none> 443 /TCP 14m
Deploy a workflow that executes when an object is updated in the
Cloud Storage bucket:
# Create a workflow
resource "google_workflows_workflow" "default" {
name = "storage-workflow-tf"
region = "us-central1"
description = "Workflow that returns information about storage events"
service_account = google_service_account.eventarc.email
deletion_protection = false # set to "true" in production
# Note that $$ is needed for Terraform
source_contents = << EOF
main :
params : [ event ]
steps :
- log_event :
call : sys.log
args :
text : $$ { event }
severity : INFO
- gather_data :
assign :
- bucket : $$ { event.data.bucket }
- name : $$ { event.data.name }
- message : $$ { "Received event " + event.type + " - " + bucket + ", " + name }
- return_data :
return : $$ { message }
EOF
depends_on = [
google_project_service.workflows
]
}
Define an Eventarc trigger
An Eventarc trigger routes events from an event provider to an
event destination. Use the
google_eventarc_trigger
resource to specify CloudEvents attributes in the matching_criteria
and filter the events. For more information, follow the instructions when
creating a trigger for a specific provider, event type, and destination .
Events that match all the filters are sent to the destination.
Important: Because Eventarc Standard uses Pub/Sub as its transport layer,
Cloud Storage triggers can fail if a Cloud Storage event originates from a region not
permitted by your Pub/Sub message storage policy, and if in-transit operations are
enforced ( "enforceInTransit": true ). When you create a Cloud Storage
trigger in a multi-region location, ensure
your message storage policy allows all source regions within that multi-region. For more
information, see
Configure message storage policies .
Cloud Run GKE Workflows
More
Create an Eventarc trigger that routes Cloud Storage
events to the hello-event Cloud Run service.
# Create an Eventarc trigger, routing Cloud Storage events to Cloud Run
resource "google_eventarc_trigger" "default" {
name = "trigger-storage-cloudrun-tf"
location = google_cloud_run_v2_service.default.location
# Capture objects changed in the bucket
matching_criteria {
attribute = "type"
value = "google.cloud.storage.object.v1.finalized"
}
matching_criteria {
attribute = "bucket"
value = google_storage_bucket.default.name
}
# Send events to Cloud Run
destination {
cloud_run_service {
service = google_cloud_run_v2_service.default.name
region = google_cloud_run_v2_service.default.location
}
}
# Specify a single delivery attempt with no retries
retry_policy {
max_attempts = 1
}
service_account = google_service_account.default.email
depends_on = [
google_project_service.eventarc ,
google_storage_bucket.default ,
google_project_iam_member.pubsubpublisher
]
}
Create an Eventarc trigger that routes Cloud Storage
events to the hello-gke GKE service.
# Create an Eventarc trigger, routing Storage events to GKE
resource "google_eventarc_trigger" "default" {
name = "trigger-storage-gke-tf"
location = "us-central1"
# Capture objects changed in the bucket
matching_criteria {
attribute = "type"
value = "google.cloud.storage.object.v1.finalized"
}
matching_criteria {
attribute = "bucket"
value = google_storage_bucket.default.name
}
# Send events to GKE service
destination {
gke {
cluster = "eventarc-cluster"
location = "us-central1"
namespace = "default"
path = "/"
service = "hello-gke"
}
}
service_account = google_service_account.eventarc_gke_trigger_sa.email
}
Create an Eventarc trigger that routes Cloud Storage
events to the workflow named storage-workflow-tf .
# Create an Eventarc trigger, routing Cloud Storage events to Workflows
resource "google_eventarc_trigger" "default" {
name = "trigger-storage-workflows-tf"
location = google_workflows_workflow.default.region
# Capture objects changed in the bucket
matching_criteria {
attribute = "type"
value = "google.cloud.storage.object.v1.finalized"
}
matching_criteria {
attribute = "bucket"
value = google_storage_bucket.default.name
}
# Send events to Workflows
destination {
workflow = google_workflows_workflow.default.id
}
service_account = google_service_account.eventarc.email
depends_on = [
google_project_service.eventarc ,
google_project_service.workflows ,
]
}
Apply Terraform
Use the Terraform CLI to provision infrastructure based on the configuration
file.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the
-upgrade option:
terraform init -upgrade
Review the configuration and verify that the resources that Terraform is
going to create or update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and
entering yes at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Verify the creation of resources
Cloud Run GKE Workflows
More
Confirm that the service has been created:
gcloud run services list --region us-central1
Confirm that the trigger has been created:
gcloud eventarc triggers list --location us-central1
The output should be similar to the following:
NAME: trigger-storage-cloudrun-tf
TYPE: google.cloud.storage.object.v1.finalized
DESTINATION: Cloud Run service: hello-events
ACTIVE: Yes
LOCATION: us-central1
Confirm that the service has been created:
kubectl get service hello-gke
Confirm that the trigger has been created:
gcloud eventarc triggers list --location us-central1
The output should be similar to the following:
NAME: trigger-storage-gke-tf
TYPE: google.cloud.storage.object.v1.finalized
DESTINATION: GKE: hello-gke
ACTIVE: Yes
LOCATION: us-central1
Confirm that the workflow has been created:
gcloud workflows list --location us-central1
Confirm that the Eventarc trigger has been created:
gcloud eventarc triggers list --location us-central1
The output should be similar to the following:
NAME: trigger-storage-workflows-tf
TYPE: google.cloud.storage.object.v1.finalized
DESTINATION: Workflows: storage-workflow-tf
ACTIVE: Yes
LOCATION: us-central1
Generate and view an event
You can generate an event and confirm that the Eventarc trigger
is working as expected.
Note: Although your trigger is created immediately, it can take up to two
minutes for a trigger to propagate and filter events.
Retrieve the name of the Cloud Storage bucket you previously created:
gcloud storage ls
Upload a text file to the Cloud Storage bucket:
echo "Hello World" > random.txt
gcloud storage cp random.txt gs:// BUCKET_NAME /random.txt
Replace BUCKET_NAME with the Cloud Storage
bucket name you retrieved in the previous step. For example:
gcloud storage cp random.txt gs:// BUCKET_NAME /random.txt
The upload generates an event and the event receiver service logs the event's
message.
Verify that an event is received:
Note: If you don't see a log entry, wait a few minutes before retrying.
Cloud Run GKE Workflows
More
Filter the log entries created by your service:
gcloud logging read 'jsonPayload.message: "Received event of type google.cloud.storage.object.v1.finalized."'
Look for a log entry similar to the following:
Received event of type google.cloud.storage.object.v1.finalized.
Event data: { "kind" : "storage#object" , "id" : "trigger-cloudrun- BUCKET_NAME /random.txt" , ... }
Find the pod ID:
POD_NAME = $( kubectl get pods -o custom-columns = ":metadata.name" --no-headers )
This command uses kubectl 's formatted output .
Check the logs of the pod:
kubectl logs $POD_NAME
Look for a log entry similar to the following:
{ "severity" : "INFO" , "eventType" : "google.cloud.storage.object.v1.finalized" , "message" :
"Received event of type google.cloud.storage.object.v1.finalized. Event data: ...}
Verify that a workflows execution is triggered by listing the last five
executions:
gcloud workflows executions list storage-workflow-tf --limit = 5
The output should include a list of executions with a NAME , STATE ,
START_TIME , and END_TIME .
Get the results for the most recent execution:
EXECUTION_NAME = $( gcloud workflows executions list storage-workflow-tf --limit = 1 --format "value(name)" )
gcloud workflows executions describe $EXECUTION_NAME
Confirm that the output is similar to the following:
...
result: '"Received event google.cloud.storage.object.v1.finalized - BUCKET_NAME , random.txt"'
startTime: '2024-12-13T17:23:50.451316533Z'
state: SUCCEEDED
...
Clean up
Remove resources previously applied with your Terraform configuration by running the following
command and entering yes at the prompt:
terraform destroy
You can also delete your Google Cloud project to avoid incurring charges.
Deleting your Google Cloud project stops billing for all the resources used
within that project.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Quickstart: Receive events using Pub/Sub messages (Terraform)
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial

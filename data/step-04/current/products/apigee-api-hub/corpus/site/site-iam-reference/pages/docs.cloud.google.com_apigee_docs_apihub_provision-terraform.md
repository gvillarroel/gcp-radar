---
title: "Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform
  title: "Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Provision API hub using Terraform
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page explains how to provision API hub using Terraform for Google Cloud in Cloud Shell .
Terraform is an infrastructure-as-code tool that enables you to predictably create, change, and improve your cloud infrastructure by using code. For more information about using Terraform to provision infrastructure on Google Cloud, see Terraform on Google Cloud .
If you prefer to provision API hub using Google Cloud console, see Provision API hub in the Cloud console
.
Before you begin
Prepare your development environment, either Cloud Shell or a local shell:
Cloud Shell
To use an online terminal with the gcloud CLI and
Terraform already set up, activate Cloud Shell.
At the bottom of this page, a Cloud Shell session starts and
displays a command-line prompt. It can take a few seconds for the session
to initialize.
Note that Cloud Shell has Terraform already integrated.
Local shell
To use a local development environment, follow these steps:
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install Terraform .
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Resource Manager and Identity, Access Management (IAM) APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com iam.googleapis.com
Ensure that your Google Cloud project doesn't have the Google Cloud Platform - Resource Location Restriction organization policy constraint added.
Important: API hub uses Cloud Scheduler for some of its features. Cloud Scheduler is not available in all Google Cloud locations. If you are provisioning API hub in a location where Cloud Scheduler is not available, it will be provisioned in a fallback location. For a list of these locations and their fallbacks, see API hub locations . If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.
Optional: Configure VPC Service Controls .
Provision API hub using Terraform
To provision API hub using Terraform, complete the following steps:
Caution: If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project. This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , API hub can only be reprovisioned after the Apigee org is permanently deleted.
Create a Terraform configuration file using the API hub resources .
Deploy the Terraform configuration .
Note: If you haven't already provisioned Apigee in your project, API hub provisioning also creates an Apigee organization in your project.
Create a Terraform configuration file
To create a Terraform configuration file and define the API hub resources , do the following:
Create a directory and a new Terraform configuration ( main.tf ) file within that directory. Type the following command, and then press Enter :
mkdir terraform && cd terraform && cat > main.tf
Copy and paste the following configuration into the main.tf file:
Create a Google Cloud project and provide a latency to allow project creation:
resource "google_project" "project" {
name = " PROJECT_NAME "
project_id = " PROJECT_ID "
org_id = " ORG_ID "
billing_account = " BILLING_ACCOUNT "
deletion_policy = "DELETE"
}
resource "time_sleep" "wait_60_seconds" {
create_duration = "60s"
depends_on = [google_project.project]
}
Replace the following:
PROJECT_NAME : the name of the Google Cloud project.
PROJECT_ID : the ID of the Google Cloud project.
ORG_ID : the ID of the Apigee organization.
BILLING_ACCOUNT : the billing account for the project.
Enable the API hub API for your project:
resource "google_project_service" "apihub_service" {
project = google_project.project. PROJECT_ID
service = "apihub.googleapis.com"
depends_on = [time_sleep.wait_60_seconds]
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
Important: Enabling the API hub API also automatically enables the Apigee API ( apigee.googleapis.com ) for your Google Cloud project. This applies to all projects, regardless of whether Apigee has been provisioned or if the Apigee API was previously disabled.
Note that API hub remains a free service. Auto-enablement of the Apigee API during the API hub provisioning process has no pricing or billing implications for your project.
Note: If you haven't already provisioned Apigee in your project, API hub provisioning also creates an Apigee organization in your project.
Note that API hub remains a free service. Enabling the Apigee API during the API hub provisioning process has no pricing or billing implications for your project.
Register a host project. A host project is a Google Cloud project in your Apigee organization that you designate as the consumer project for all API hub resources. You can provision only one API hub instance per host project.
resource "google_apihub_host_project_registration" "apihub_host_project"{
project = google_project.project. PROJECT_ID
location = " HOST_PROJECT_LOCATION "
host_project_registration_id = google_project.project. PROJECT_ID
gcp_project = "projects/${google_project.project. PROJECT_ID }"
depends_on = [google_project_service.apihub_service]
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
HOST_PROJECT_LOCATION : the location of the API hub host project.
Create a service identity for API hub:
resource "google_project_service_identity" "apihub_service_identity" {
project = google_project.project. PROJECT_ID
service = "apihub.googleapis.com"
}
Replace PROJECT_ID with the ID of the Google Cloud project.
Grant the apihub.admin and apihub.runtimeProjectServiceAgent roles to the API hub default service account:
resource "google_project_iam_member" "apihub_service_identity_permission" {
for_each = toset([
"roles/apihub.admin",
"roles/apihub.runtimeProjectServiceAgent"
])
role = each.key
member = "serviceAccount:${google_project_service_identity.apihub_service_identity.email}"
depends_on = [google_project_service_identity.apihub_service_identity]
}
Optional: Grant the API hub service identity access to the CMEK key.
If you plan to provision an API hub instance with Custom Managed Encryption Keys (CMEK), you must enable the Cloud KMS API and grant the API hub service identity access to the CMEK key using:
Enable the Cloud KMS API:
resource "google_project_service" "kms_service" {
project = google_project.project. PROJECT_ID
service = "cloudkms.googleapis.com"
depends_on = [time_sleep.wait_60_seconds]
}
Replace PROJECT_ID with the ID of the Google Cloud project.
Grant the API hub service identity access to the CMEK key:
resource "google_project_iam_member" "apihub_service_identity_cmek_permission" {
project = google_project.project. PROJECT_ID
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
member = "serviceAccount:${google_project_service_identity.apihub_service_identity.email}"
depends_on = [google_project_service_identity.apihub_service_identity]
}
Replace PROJECT_ID with the ID of the Google Cloud project.
Provision an API hub instance:
Using default GMEK
resource "google_apihub_api_hub_instance" "apihub-instance-without-search"{
location = " HUB_LOCATION "
config {
disable_search = SEMANTIC_SEARCH_BOOLEAN
}
}
Replace the following:
HUB_LOCATION : the location of the API hub instance.
Note: The location of the API hub instance must be the same as the location of the host project.
SEMANTIC_SEARCH_BOOLEAN : false if you want to enable semantic search, true otherwise. For information about semantic search, see Search APIs .
Using CMEK
resource "google_apihub_api_hub_instance" "apihub-instance-search"{
project = " PROJECT_ID "
api_hub_instance_id = " API_HUB_INSTANCE_ID "
description = " DESCRIPTION "
location = " LOCATION "
config {
encryption_type = "CMEK"
cmek_key_name = "projects/ PROJECT_ID /locations/ HUB_LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID "
disable_search = SEMANTIC_SEARCH_BOOLEAN
vertex_location = " VERTEX_AI_LOCATION "
}
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
API_HUB_INSTANCE_ID : the ID of the API hub instance.
DESCRIPTION : a description of the API hub instance.
HUB_LOCATION : the location of the API hub instance.
Note: The location of the API hub instance must be the same as the location of the host project.
KEY_RING_ID : the ID of the CMEK key ring.
KEY_ID : the ID of the CMEK key.
SEMANTIC_SEARCH_BOOLEAN : false if you want to enable semantic search, true otherwise. For information about semantic search, see Search APIs .
VERTEX_AI_LOCATION : the location of the Vertex AI instance where the data is stored. See Vertex AI Locations for a list of supported locations.
Caution: When you use CMEK to encrypt your API hub data, ensure the key remains enabled and available. If the key is disabled or becomes unavailable for more than 7 days , all data in your API hub instance will be permanently deleted and the instance will enter an unrecoverable state.
Save and close the file, press Ctrl+D (or Command+D on macOS).
Deploy the Terraform configuration to provision API hub
Deploy the Terraform configuration by initializing Terraform, generating the planned changes, and applying these changes. After deploying the Terraform configuration, you can access the API hub instance in the Google Cloud console.
Initialize Terraform in the directory:
terraform init
Generate the Terraform execution plan based on the current state of your project and the configuration file:
terraform plan
Apply the plan to provision API hub:
terraform apply
If prompted, enter yes to confirm the deployment.
After the deployment is complete, you can access the API hub instance in the Google Cloud console.
Considerations
If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project. This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , and API hub can only be reprovisioned after the Apigee org is permanently deleted.
What's next
Learn about the Get started with API hub page.
Review the roles and permissions required to use API hub
Configure API hub attributes:
Manage attributes
Quickstart: Create and edit attributes
Register an API resource:
Manage API resources
Quickstart: Register an API
Add an API version:
Versions overview
Quickstart: Create an API version
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

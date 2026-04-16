---
title: "Quickstart: Issue a certificate using Terraform \_|\_ Certificate Authority\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform
  title: "Quickstart: Issue a certificate using Terraform \_|\_ Certificate Authority\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Issue a certificate using Terraform
Learn how to use Terraform with
Certificate Authority Service to do the following:
Create a CA pool and a root CA in the new CA pool.
Create a CA pool and a subordinate CA within it which is signed by the root CA
Generate a new Certificate Signing Request (CSR).
Use the generated CSR to request a certificate from the CA pool that contains the subordinate CA.
Terraform is an open-source software that lets you create and manage your
CA Service resources using its
infrastructure-as-code paradigm . This quickstart uses
the
Google Cloud Terraform Provider
for Terraform.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Make sure that you have the CA Service Admin ( roles/privateca.admin )
IAM role. If you don't have this IAM role, read
Grant a single role
for information about granting this role.
Create a Google Cloud project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Enable the CA Service API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the CA Service API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI
If you haven't already, install the Google Cloud CLI .
When prompted, choose the project that you selected or created earlier.
If you already have the Google Cloud CLI installed, update it by running the
gcloud components update command :
gcloud components update
Terraform configuration sample
provider "google" {}
provider "tls" {}
resource "google_project_service" "privateca_api" {
service = "privateca.googleapis.com"
disable_on_destroy = false
}
# Root CaPool & CA
resource "google_privateca_ca_pool" "root" {
name = "root-pool"
location = "us-central1"
tier = "ENTERPRISE"
publishing_options {
publish_ca_cert = true
publish_crl = true
}
}
resource "google_privateca_certificate_authority" "root-ca" {
certificate_authority_id = "my-root-ca"
location = "us-central1"
pool = google_privateca_ca_pool.root.name
config {
subject_config {
subject {
organization = "google"
common_name = "my-certificate-authority"
}
}
x509_config {
ca_options {
is_ca = true
}
key_usage {
base_key_usage {
cert_sign = true
crl_sign = true
}
extended_key_usage {
server_auth = true
}
}
}
}
type = "SELF_SIGNED"
key_spec {
algorithm = "RSA_PKCS1_4096_SHA256"
}
// Disable CA deletion related safe checks for easier cleanup.
deletion_protection = false
skip_grace_period = true
ignore_active_certificates_on_deletion = true
}
# Sub CaPool & CA
resource "google_privateca_ca_pool" "subordinate" {
name = "sub-pool"
location = "us-central1"
tier = "ENTERPRISE"
publishing_options {
publish_ca_cert = true
publish_crl = true
}
issuance_policy {
baseline_values {
ca_options {
is_ca = false
}
key_usage {
base_key_usage {
digital_signature = true
key_encipherment = true
}
extended_key_usage {
server_auth = true
}
}
}
}
}
resource "google_privateca_certificate_authority" "sub-ca" {
pool = google_privateca_ca_pool.subordinate.name
certificate_authority_id = "my-sub-ca"
location = "us-central1"
subordinate_config {
certificate_authority = google_privateca_certificate_authority.root-ca.name
}
config {
subject_config {
subject {
organization = "HashiCorp"
common_name = "my-subordinate-authority"
}
subject_alt_name {
dns_names = [ "hashicorp.com" ]
}
}
x509_config {
ca_options {
is_ca = true
# Force the sub CA to only issue leaf certs
max_issuer_path_length = 0
}
key_usage {
base_key_usage {
cert_sign = true
crl_sign = true
}
extended_key_usage {
server_auth = true
}
}
}
}
lifetime = "31536000s"
key_spec {
algorithm = "RSA_PKCS1_4096_SHA256"
}
type = "SUBORDINATE"
// Disable CA deletion related safe checks for easier cleanup.
deletion_protection = false
skip_grace_period = true
ignore_active_certificates_on_deletion = true
}
# Leaf cert
resource "tls_private_key" "example" {
algorithm = "RSA"
}
resource "tls_cert_request" "example" {
private_key_pem = tls_private_key.example.private_key_pem
subject {
common_name = "example.com"
organization = "ACME Examples, Inc"
}
}
resource "google_privateca_certificate" "default" {
pool = google_privateca_ca_pool.subordinate.name
# Explicitly refer the sub-CA so that the certificate creation will wait for the CA creation.
certificate_authority = google_privateca_certificate_authority.sub-ca.certificate_authority_id
location = "us-central1"
lifetime = "860s"
name = "my-certificate"
pem_csr = tls_cert_request.example.cert_request_pem
}
Run the Terraform configuration file
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
Clean Up
To avoid incurring charges to your Google Cloud account for the resources used
in this quickstart, delete your CA pool and all the resources defined in the
Terraform configuration file:
terraform destroy
When prompted, enter yes .
If you created a new project for this quickstart and you no longer need it, then
delete the project .
What's next
Learn more about running gcloud commands with Cloud Shell .
Learn more about using Terraform with Google Cloud .
Learn more about using Terraform with CA Service .
Read the Terraform documentation about CA Service support .
Get started with the Google Cloud Provider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

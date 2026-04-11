---
title: "Create a sample IaC validation report \_|\_ Security Command Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/iac-validation-tutorial
  title: "Create a sample IaC validation report \_|\_ Security Command Center \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Create a sample IaC validation report
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Premium, and Enterprise service tiers (requires organization-level activation )
This tutorial describes how you can verify that your infrastructure as
code (IaC) doesn't violate your organization policies or Security Health Analytics detectors.
Objectives
Create a security posture.
Deploy the posture on a project.
Check an example Terraform file for violations.
Fix the violations in the Terraform file, and check the file again to verify
the fix.
Before you begin
Set up permissions
Make sure that you have the following role or roles on the organization:
Project Creator and Security Posture Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Set up Cloud Shell
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Find your organization ID:
gcloud organizations list
Prepare the environment
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
Enable the Security posture service and Security Command Center management APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable securityposture.googleapis.com securitycentermanagement.googleapis.com
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
Enable the Security posture service and Security Command Center management APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable securityposture.googleapis.com securitycentermanagement.googleapis.com
Copy the project number. You will need the project number to set the target resource while deploying the posture.
gcloud projects describe PROJECT_ID
Initialize Terraform:
terraform init
Create and deploy a posture
In Cloud Shell, launch the Cloud Shell Editor. To launch the
editor, click
Open Editor on the toolbar of the Cloud Shell window.
Create a YAML file named example-standard.yaml .
Paste the following code into your file:
name: organizations/ ORGANIZATION_ID /locations/global/postures/example-standard
state: ACTIVE
policySets:
- policies:
- constraint:
orgPolicyConstraintCustom:
customConstraint:
actionType: ALLOW
condition: "resource.initialNodeCount == 3"
description: Set initial node count to be exactly 3.
displayName: fixedNodeCount
methodTypes:
- CREATE
name: organizations/ ORGANIZATION_ID /customConstraints/custom.fixedNodeCount
resourceTypes:
- container.googleapis.com/NodePool
policyRules:
- enforce: true
policyId: fixedNodeCount
- constraint:
securityHealthAnalyticsCustomModule:
config:
customOutput: {}
description: Set MTU for a network to be exactly 1000.
predicate:
expression: "!(resource.mtu == 1000)"
recommendation: Only create networks whose MTU is 1000.
resourceSelector:
resourceTypes:
- compute.googleapis.com/Network
severity: HIGH
displayName: fixedMTU
moduleEnablementState: ENABLED
policyId: fixedMTU
- constraint:
securityHealthAnalyticsModule:
moduleEnablementState: ENABLED
moduleName: BUCKET_POLICY_ONLY_DISABLED
policyId: bucket_policy_only_disabled
- constraint:
securityHealthAnalyticsModule:
moduleEnablementState: ENABLED
moduleName: BUCKET_LOGGING_DISABLED
policyId: bucket_logging_disabled
policySetId: policySet1
Replace ORGANIZATION_ID with your organization ID.
In Cloud Shell, create the posture:
gcloud scc postures create organizations/ ORGANIZATION_ID /locations/global/postures/example-standard --posture-from-file=example-standard.yaml
Copy the posture revision ID that the command generates.
Deploy the posture to your project:
gcloud scc posture-deployments create organizations/ ORGANIZATION_ID /locations/global/postureDeployments/example-standard \
--posture-name=organizations/ ORGANIZATION_ID /locations/global/postures/example-standard \
--posture-revision-id=" POSTURE_REVISION_ID " \
--target-resource=projects/ PROJECT_NUMBER
Replace the following:
ORGANIZATION_ID : your organization ID.
POSTURE REVISION_ID : your posture revision ID that
you copied.
PROJECT_NUMBER : your project number.
Create the Terraform file and validate
In Cloud Shell, launch the Cloud Shell Editor.
Create a Terraform file named main.tf .
Paste the following code into your file:
terraform {
required_providers {
google = {
source = "hashicorp/google"
}
}
}
provider "google" {
region = "us-central1"
zone = "us-central1-c"
}
resource "google_compute_network" "example_network"{
name = "example-network-1"
delete_default_routes_on_create = false
auto_create_subnetworks = false
routing_mode = "REGIONAL"
mtu = 100
project = " PROJECT_ID "
}
resource "google_container_node_pool" "example_node_pool" {
name = "example-node-pool-1"
cluster = "example-cluster-1"
project = " PROJECT_ID "
initial_node_count = 2
node_config {
preemptible = true
machine_type = "e2-medium"
}
}
resource "google_storage_bucket" "example_bucket" {
name = "example-bucket-1"
location = "EU"
force_destroy = true
project = " PROJECT_ID "
uniform_bucket_level_access = false
}
Replace PROJECT_ID with the project ID of the project
that you created.
In Cloud Shell, create the Terraform plan file and convert it to JSON format:
terraform plan -out main.plan
terraform show -json main.plan > mainplan.json
Create the IaC validation report for mainplan.json :
gcloud scc iac-validation-reports create organizations/ ORGANIZATION_ID /locations/global --tf-plan-file=mainplan.json
This command returns an IaC validation report that describes the following violations:
The mtu for example_network isn't 1000.
The initial_node_count for example_node_pool isn't 3.
The example_bucket doesn't have uniform bucket level access enabled.
The example_bucket doesn't have logging enabled.
Resolve violations
In Cloud Shell, launch the Cloud Shell Editor.
Update the main.tf file with the following changes:
terraform {
required_providers {
google = {
source = "hashicorp/google"
}
}
}
provider "google" {
region = "us-central1"
zone = "us-central1-c"
}
resource "google_compute_network" "example_network"{
name = "example-network-1"
delete_default_routes_on_create = false
auto_create_subnetworks = false
routing_mode = "REGIONAL"
mtu = 1000
project = " PROJECT_ID "
}
resource "google_container_node_pool" "example_node_pool" {
name = "example-node-pool-1"
cluster = "example-cluster-1"
project = " PROJECT_ID "
initial_node_count = 3
node_config {
preemptible = true
machine_type = "e2-medium"
}
}
resource "google_storage_bucket" "example_bucket" {
name = "example-bucket-1"
location = "EU"
force_destroy = true
project = " PROJECT_ID "
uniform_bucket_level_access = true
logging {
log_bucket = "my-unique-logging-bucket" // Create a separate bucket for logs
log_object_prefix = "tf-logs/" // Optional prefix for better structure
}
}
Replace PROJECT_ID with the project ID of the
project that you created.
In Cloud Shell, create the Terraform plan file and convert it to
JSON format:
terraform plan -out main.plan
terraform show -json main.plan > mainplan.json
Recreate the IaC validation report for mainplan.json :
gcloud scc iac-validation-reports create organizations/ ORGANIZATION_ID /locations/global --tf-plan-file=mainplan.json
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Review
Validate your IaC against your organization's policies .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform
  title: "Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Enabling Access Approval using Terraform
Terraform is an open-source infrastructure-as-code software tool that
lets you manage your Access Approval requests. Terraform lets you perform
all the actions that you can perform using Access Approval APIs.
This page describes how you can enable Access Approval using Terraform.
This tutorial uses the Google Cloud Terraform Provider .
Objective
This tutorial teaches how you can create a Terraform configuration file that:
Sets email addresses for Access Approval request notifications.
Enables Access Approval for all supported Google Cloud products. For
the complete list of Google Cloud products supported by
Access Approval, see Supported services .
Before you begin
To use Access Approval and Access Transparency, your organization must meet
specific support requirements.
For more information, see Requirements for using
Access Approval .
Enable Access Transparency
on your organization. For more information, see
Enabling Access Transparency .
Ensure that you have the Access Approval
Config Editor ( roles/accessapproval.configEditor ) Identity and Access Management
(IAM) role. For more information about IAM roles
for Access Approval, see Access Approval
roles .
Creating a Google Cloud project
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
Enable the Access Approval API.
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
Enable the Access Approval API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Installing Google Cloud CLI
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
When prompted, choose the project that you selected or created earlier.
If you already have Google Cloud CLI installed, update it using the following command:
gcloud components update
Creating a Terraform configuration file
Open Cloud Shell to launch a standalone Cloud Shell
session.
Open a workspace.
Create a new folder.
Add a Terraform configuration file named main.tf to this folder.
Copy the following resource, and paste it in your main.tf file.
main.tf
variable "parent_value" {
type = string
}
variable "email_1" {
type = string
}
variable "email_2" {
type = string
}
resource "google_folder" "my_folder" {
display_name = "my-folder"
parent = var.parent_value
# parent = "organizations/123456789"
}
resource "google_folder_access_approval_settings" "folder_access_approval" {
folder_id = google_folder.my_folder.folder_id
notification_emails = [ var.email_1 , var.email_2 ]
enrolled_services {
cloud_product = "all"
}
}
Enter values for the following variables:
email_1 and email_2 : provide the email addresses of users who you
want to set as reviewers for the access requests for this project.
Note: These users must have the IAM roles with required
permissions to view or approve an Access Approval request. To
ensure these users have sufficient permissions, follow these
steps: Go to the IAM
page in the Google Cloud console.
To
enable a user or service account to approve access requests for a
project, grant them the Access Approval Approver
( roles/accessapproval.approver ) IAM role.
parent_value : name of the folder in which you want to create the
my_folder folder. For more information about folders, see Creating and
managing folders .
Running the Terraform configuration file
Run the following commands in Cloud Shell.
Initialize Terraform in the directory.
terraform init
Run the created Terraform configuration file.
terraform apply
When prompted to confirm if you want to run the configuration file, enter
yes .
For more information about operating Access Approval with Terraform,
see this Terraform document:
google_folder_access_approval_settings .
What's next
Using Terraform with Google Cloud
Using Terraform with Access Approval
Getting started with Terraform on Google Cloud
Kickstart Terraform on Google Cloud with Cloud Shell
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Deploy virtual machine (VM) products using the command-line interface (CLI)\
  \ \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI
  title: "Deploy virtual machine (VM) products using the command-line interface (CLI)\
    \ \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Deploy virtual machine (VM) products using the command-line interface (CLI)
Stay organized with collections
Save and categorize content based on your preferences.
Virtual machine (VM) products offered through Google Cloud Marketplace are custom VM
instances that you can run on Compute Engine. For an overview of
Compute Engine concepts, visit the
Compute Engine documentation .
Some VM products on Google Cloud Marketplace support deployment through the command-line
interface (CLI) using Terraform ,
an open-source tool for provisioning and managing infrastructure. For more
information on Terraform, visit
Get started with Terraform .
Overview
This page describes the steps for deploying VM products through the CLI by using
Terraform. At a high level, you:
Visit the relevant section of the product's Google Cloud Marketplace
listing.
Optionally,
select or create the service account that you
want to use for your command-line deployment.
Optionally,
set up service account impersonation .
Configure your gcloud environment for Terraform.
Download the Terraform module or code snippet that you
use to deploy the VM product through the CLI.
Use the module or code snippet to deploy the VM product .
Visit the command-line deployment tab
To start deploying a VM product through the CLI:
In Cloud Marketplace, visit the product listing page for the VM product
that you want to deploy through the CLI.
Go to Marketplace
Click the Launch button, or click Deploy with CLI to visit the
Command-line deployment tab.
(Optional) Select or create your service account
Within the Command-line deployment tab, you can choose to select or create
the service account that you want to use for your command-line deployment. If
you haven't selected or created a service account in the
Command-line deployment tab when you
generate your code snippet , you must manually edit the
generated Terraform snippet to add a service account before you use it. For more
information about service accounts, visit
Creating and managing service accounts .
If you want to deploy a Cloud Marketplace VM product through the CLI, the
service account that you use must have the
Compute Admin ( roles/compute.admin ) Identity and Access Management (IAM) role .
If you create a new service account from the Command-line deployment tab,
Google Cloud Marketplace automatically grants this role to the new service account. If
you select an existing service account from the Command-line deployment tab,
you must verify that the service account has this role.
To select or create your service account:
From the Command-line deployment tab of the VM product's
Google Cloud Marketplace listing, under Configure a service account (optional) ,
click the Configure button.
Under Service account requesting permissions , you can click to
Select an existing service account , or Create a new service account .
Select an existing service account
To select an existing service account:
Under Select a service account , select the service account that you want
to use. The list contains all of your existing service accounts that have the
Compute Admin ( roles/compute.admin ) role .
If none of your existing service accounts have the Compute Admin
( roles/compute.admin ) role, the list is empty. If the list is empty, you
can grant this role to one of your existing service accounts and then return
to this tab, or you can choose to
create a new service account instead.
Click the Submit button.
Create a new service account
To create a new service account:
Choose a name for your service account, and add it in the
Service account name field.
Choose an ID for your service account, and add it in the
Service account ID field.
Add a description for your service account to the
Service account description field.
Click the Create service account button.
After you've created your service account, you can continue to
manage the service account's access control by using
IAM.
(Optional) Set up service account impersonation
We recommend that you use service account impersonation to manage access to
your command-line deployment. If you use impersonation, instead of creating
service account keys that anyone can use to access your deployment, you manage
access by granting or revoking the
Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) IAM role
to specific principals.
To learn how to grant and revoke roles on a service accounts, see
Manage access to service accounts .
To learn more about service account impersonation, see Service account
impersonation .
Configure your gcloud environment for Terraform
In the Command-line deployment tab, under Configure gcloud , you see a
series of commands. To configure your gcloud environment for Terraform, you
can copy and run the provided commands.
Download the Terraform module
You use either an included Terraform module or a generated code snippet to
deploy a VM product through the CLI, depending on how the VM product is
configured. To verify whether you use an included module or a generated code
snippet to deploy a VM product, visit the Command-line deployment tab of the
product's Cloud Marketplace listing. If you use an included module to
deploy the product, you see a Download button. If you use a generated code
snippet to deploy the product, you see a Generate code button.
To download the included module or generated code snippet, complete the
following steps:
Included Terraform module
From the Command-line deployment tab of the VM product's
Cloud Marketplace listing, click the Download button. This
downloads a zip file that contains the Terraform module you use.
Extract the Terraform module from the zip file that you downloaded.
Generated code snippet
From the Command-line deployment tab of the VM product's
Cloud Marketplace listing, click the Generate code button. This
generates a code snippet that you can copy and use with Terraform to deploy
a VM with Terraform.
To copy the generated code snippet, click Copy to clipboard .
Use the included module or generated code snippet to deploy the VM product
To use the included module or generated code snippet to deploy the VM product
through the CLI, complete the following steps:
Included Terraform module
In the Terraform module that you downloaded , locate the
README.md file .
Follow the product-specific instructions from the README.md file.
While you follow the product-specific instructions, if you experience
issues, you can optionally try to deploy the module by running the
following commands:
terraform init
terraform apply
Generated code snippet
Verify that the generated code snippet includes the service account that
you want to use. If you've
configured a service account for your
command-line deployment, that service account's information is included in
the generated code snippet. If you haven't configured a service account,
you must edit the generated code snippet to specify the service account
that you want to use.
Create a new file named main.tf on the machine where you've installed
Terraform.
Paste the generated code snippet, with any edits you've made to it, into
the main.tf file that you created.
Run the following commands:
terraform init
terraform apply
Next steps
For information on managing your CLI deployments of VM products, visit
Manage CLI deployments of VM products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

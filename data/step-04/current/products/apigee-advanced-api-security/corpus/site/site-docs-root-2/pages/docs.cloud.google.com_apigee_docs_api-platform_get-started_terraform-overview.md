---
title: "Use Terraform with Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-security/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview
  title: "Use Terraform with Apigee \_|\_ Google Cloud Documentation"
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
Use Terraform with Apigee
Stay organized with collections
Save and categorize content based on your preferences.
HashiCorp Terraform is an
Infrastructure as Code (IaC) tool that you can use to provision and configure Apigee
using code.
When you use Terraform with Apigee, you create
Terraform
files that describe your desired configuration for provisioning or a feature. When you
apply the configuration , Terraform creates an execution plan and performs the
operations needed to configure Apigee.
This page summarizes the Terraform functionality available for Apigee. For general
information about using Terraform with Google Cloud, see
Terraform on Google Cloud documentation .
Note: See
Get support for Terraform issues
for information on getting help with Terraform.
Before you begin
In order to set up Terraform for your Apigee project:
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
Terraform resources for Apigee
The following table summarizes the features and functionality you can manage using Terraform
resources for Apigee. This list might not be exhaustive. Find all of the Terraform
resources for Apigee in the
Google Cloud Platform Cloud Foundation Fabric GitHub repository and the
HashiCorp Google Provider documentation for Apigee . Always check these resources
for the latest functionality.
Apigee feature or functionality
Terraform support summary
More information
Provision Apigee
Provision Apigee instances using Terraform.
Provisioning
options
Provision Apigee API hub
Configure and manage API hub using Terraform.
Provision API hub with
Terraform
Configure Advanced API Security
Configure risk assessment security profiles and monitoring conditions (v2)
Configure abuse detection exclusion lists
Configure security actions
Configure Advanced API Security with Terraform
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

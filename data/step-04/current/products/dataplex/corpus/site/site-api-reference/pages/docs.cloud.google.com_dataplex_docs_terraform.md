---
title: "Provision Dataplex Universal Catalog resources with Terraform \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/terraform
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/terraform
  title: "Provision Dataplex Universal Catalog resources with Terraform \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
Provision Dataplex Universal Catalog resources with Terraform
Stay organized with collections
Save and categorize content based on your preferences.
HashiCorp Terraform is an infrastructure-as-code (IaC) tool that lets you
provision and manage cloud infrastructure. Terraform provides plugins called
providers that let you interact with cloud providers and other APIs. You can
use the Terraform provider for Google Cloud to provision and manage
Google Cloud resources, including Dataplex Universal Catalog.
This page introduces you to using Terraform with Dataplex Universal Catalog, including an
introduction to how Terraform works and some resources to help you get started using
Terraform with Google Cloud. You'll also find links to Terraform reference docs for
Dataplex Universal Catalog, code examples, and guides for using Terraform to provision
Dataplex Universal Catalog resources.
For instructions on how to get started with Terraform for Google Cloud, see
Install and configure Terraform or the
Terraform for Google Cloud quickstart .
How Terraform works
Terraform has a declarative and configuration-oriented syntax, which you can
use to describe the infrastructure that you want to provision in your
Google Cloud project. After you author this configuration in one or more
Terraform configuration files, you can use the Terraform CLI to apply this
configuration to your Dataplex Universal Catalog resources.
The following steps explain how Terraform works:
You describe the infrastructure you want to provision in a Terraform
configuration file . You don't need to write code describing how to
provision the infrastructure. Terraform provisions the infrastructure for you.
You run the terraform plan command, which evaluates your configuration and
generates an execution plan. You can review the plan and make changes as
needed.
You run the terraform apply command, which performs the following
actions:
It provisions your infrastructure based on your execution plan by invoking
the corresponding Dataplex Universal Catalog APIs in the background.
It creates a Terraform state file , which is a JSON file that maps the resources
in your configuration file to the resources in the real-world infrastructure. Terraform uses
this file to keep a record of the most recent state of your infrastructure, and to determine
when to create, update, and destroy resources.
When you run terraform apply , Terraform uses the mapping in
the state file to compare the existing infrastructure to the code, and make
updates as necessary:
If a resource object is defined in the configuration file, but doesn't exist in the
state file, Terraform creates it.
If a resource object exists in the state file, but has a different
configuration from your configuration file, Terraform updates the resource
to match your configuration file.
If a resource object in the state file matches your configuration file,
Terraform leaves the resource unchanged.
Terraform resources for Dataplex Universal Catalog
Resources are the fundamental elements in the Terraform language. Each
resource block describes one or more infrastructure objects, such as virtual
networks or compute instances.
The following table lists the Terraform resources available for
Dataplex Universal Catalog:
Service
Terraform resources
Data sources
Dataplex Universal Catalog
google_dataplex_aspect_type
google_dataplex_aspect_type_iam
google_dataplex_asset
google_dataplex_asset_iam
google_dataplex_datascan
google_dataplex_datascan_iam
google_dataplex_entry
google_dataplex_entry_group
google_dataplex_entry_group_iam
google_dataplex_entry_type
google_dataplex_entry_type_iam
google_dataplex_lake
google_dataplex_lake_iam
google_dataplex_task
google_dataplex_task_iam
google_dataplex_zone
google_dataplex_zone_iam
google_dataplex_aspect_type_iam_policy
google_dataplex_asset_iam_policy
google_dataplex_datascan_iam_policy
google_dataplex_entry_group_iam_policy
google_dataplex_entry_type_iam_policy
google_dataplex_lake_iam_policy
google_dataplex_task_iam_policy
google_dataplex_zone_iam_policy
Terraform-based guides for Dataplex Universal Catalog
The following table lists Terraform-based how-to guides and tutorials for
Dataplex Universal Catalog:
Guide
Details
Manage data quality rules as code with Terraform
This tutorial explains how to manage Dataplex Universal Catalog data quality
rules as code with Terraform, Cloud Build, and GitHub.
Codelab: Build the data foundation with Dataplex Universal Catalog metadata
This codelab explains how to build the data foundation with Dataplex Universal Catalog metadata.
Terraform modules and blueprints for Dataplex Universal Catalog
Modules and blueprints help you automate provisioning and managing of
Google Cloud resources at scale. A module is a
reusable set of Terraform configuration files that creates a logical abstraction
of Terraform resources. A blueprint is a package of deployable and reusable
modules, and a policy that implements and documents a specific solution.
The following table lists modules and blueprints related to
Dataplex Universal Catalog:
Module or blueprint
Details
dataplex-auto-data-quality
This module shows how to deploy data quality rules on BigQuery tables
across development and production environments using Cloud Build.
What's next
Terraform code samples for Dataplex Universal Catalog
Terraform on Google Cloud documentation
Google Cloud provider documentation in HashiCorp
Infrastructure as code for Google Cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

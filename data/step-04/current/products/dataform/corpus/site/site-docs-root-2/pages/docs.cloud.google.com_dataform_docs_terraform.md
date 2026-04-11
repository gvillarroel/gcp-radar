---
title: "Use Terraform with Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/terraform
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/terraform
  title: "Use Terraform with Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Use Terraform with Dataform
Stay organized with collections
Save and categorize content based on your preferences.
This document describes Terraform support for Dataform.
Terraform
is an infrastructure-as-code (IaC) tool that you can use to provision resources
and permissions for the following Dataform resources:
Repository
Release configuration
Workflow configuration
For example, you can use Terraform to create and configure Dataform repositories,
release configurations, and workflow configurations.
To use Terraform with Dataform, you need to
create a configuration file
to describe your infrastructure, and then
apply the configuration file
to create an execution plan and perform operations to provision your
infrastructure.
The following table lists Dataform configuration samples that
appear in the
Terraform registry
and in
GitHub .
Dataform resource
Terraform registry sample
Repository
google_dataform_repository
Release configuration
google_dataform_repository_release_config
Workflow configuration
google_dataform_repository_workflow_config
Manage IAM access in Terraform
You can use Terraform to set and manage the
dataform_repository_iam policy for the repository resource.
The following resources help you manage the dataform_repository_iam policy:
google_dataform_repository_iam_policy
google_dataform_repository_iam_binding
google_dataform_repository_iam_member
For best practices for managing IAM in Terraform, see
Manage Identity and Access Management .
What's next
Learn more about Terraform:
What is Terraform?
Terraform registry
Terraform Developer website
Terraform Language Documentation
Terraform CLI Documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

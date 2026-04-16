---
title: "Terraform support for Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/terraform-support-for-cloud-workstations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/terraform-support-for-cloud-workstations
  title: "Terraform support for Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Terraform support for Cloud Workstations
Stay organized with collections
Save and categorize content based on your preferences.
Terraform
is an infrastructure-as-code (IaC) tool that you can use to provision resources
and permissions for Cloud Workstations.
To use Terraform with Cloud Workstations, you need to
create a configuration file
to describe your infrastructure, and then
apply the configuration file
to create an execution plan and perform operations to provision your
infrastructure.
For example, you can use Terraform to create workstations,
create various workstation configurations (templates), and
create workstation configurations for public or private workstation clusters.
Terraform resources for Cloud Workstations
The following table lists Cloud Workstations configuration samples that
appear in the Terraform registry
and from GitHub .
Cloud Workstations resource
Terraform registry sample
Cluster
Basic google_workstations_workstation_cluster
Private google_workstations_workstation_cluster
Basic workstation configuration
google_workstations_workstation_config
Workstation configuration with additional features
From a container: google_workstations_workstation_config
With persistent directories: google_workstations_workstation_config
With shielded instance configuration: google_workstations_workstation_config
With customer-managed encryption keys (CMEK) google_workstations_workstation_config
Workstation
google_workstations_workstation
What's next
Learn more about Terraform:
What is Terraform?
Terraform registry
Terraform Developer website
Terraform Language Documentation
Terraform CLI Documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

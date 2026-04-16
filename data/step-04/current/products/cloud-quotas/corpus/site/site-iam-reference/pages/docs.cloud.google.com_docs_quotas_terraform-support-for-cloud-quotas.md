---
title: "Terraform support for Cloud Quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/permissions
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas
  title: "Terraform support for Cloud Quotas \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Terraform support for Cloud Quotas
Stay organized with collections
Save and categorize content based on your preferences.
Terraform
is an Infrastructure as code (IaC) tool that you can use to provision resources
and permissions for Cloud Quotas. To learn how to use Terraform
to provision infrastructure on Google Cloud, refer to the
Terraform on Google Cloud documentation .
You can use Terraform to do the following with Cloud Quotas:
Retrieve the QuotaInfo data source of a quota for a project, folder or
organization.
List QuotaInfos data source of all quotas for a given project, folder or
organization.
Create a new, or update an existing, QuotaPreference quota configuration
that specifies the preferred value for a quota.
Before you begin
Before you begin, you need access to Terraform:
If you're getting started, note that Cloud Shell has
Terraform already integrated, and you can follow this step by step
tutorial,
Deploy a basic Flask web server
using Terraform and Cloud Shell.
If you'd prefer to install Terraform yourself, see HashiCorp's
Terraform installation instructions .
To use Terraform with Cloud Quotas,
create a configuration file
to describe your infrastructure, and then
apply the configuration file
to create an execution plan and perform operations to provision your
infrastructure.
Terraform resources and data sources
The following lists contain links to Cloud Quotas Terraform
resources and data source samples that appear in the
Terraform registry .
Resources
Cloud Quotas provides the following Terraform resources:
google_cloud_quotas_quota_preference
google_cloud_quotas_quota_adjuster_settings ( Preview )
Data sources
Cloud Quotas provides the following Terraform data sources:
google_cloud_quotas_quota_info
google_cloud_quotas_quota_infos
What's next
Learn more about Terraform:
What is Terraform?
Terraform Developer website
Terraform Language Documentation
Terraform CLI Documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

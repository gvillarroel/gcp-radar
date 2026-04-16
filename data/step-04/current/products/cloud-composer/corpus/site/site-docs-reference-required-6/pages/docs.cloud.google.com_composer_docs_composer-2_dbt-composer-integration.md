---
title: "Create an integrated DBT and Cloud Composer operations environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/dbt-composer-integration
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/dbt-composer-integration
  title: "Create an integrated DBT and Cloud Composer operations environment \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 2 Guides
Send feedback
Create an integrated DBT and Cloud Composer operations environment
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to use Terraform to create an integrated DBT and
Cloud Composer operations environment.
About the terraform-google-dbt-composer-blueprint` module
The
terraform-google-dbt-composer-blueprint module
uses Terraform to do the following:
Applies required APIs and permissions in the project.
Creates documentation (for DBT) bucket.
Creates a Cloud Composer environment, including networking
configuration, and a service account.
Copies across DAG utilities for Cloud Composer
Exports audit logs for the project into a BigQuery project,
including two materialized views and a view on top to support dashboards.
In addition, the module provides an end-to-end example of using the DAG
utilities and creating an example DBT job in Cloud Composer.
Module's code on GitHub
For more information and code samples, see
terraform-google-dbt-composer-blueprint module
page on GitHub.
What's next
Test, synchronize, and deploy your DAGs from GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/migration-intro
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/migration-intro
  title: "Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Introduction to BigQuery Migration Service
This document provides an overview of the BigQuery Migration Service.
The BigQuery Migration Service is a comprehensive solution for migrating your data
warehouse to BigQuery. It includes features that help you with
each phase of migration, including assessment and planning, SQL translation for
a variety of SQL dialects ,
data transfer, and data validation. Together, these services help you accelerate
migrations and reduce risk, shortening the time to value.
The BigQuery Migration Service includes the following features:
BigQuery migration assessment : Assess and plan your data warehouse migration by
running a BigQuery migration assessment .
SQL translation services : The translation services automate the conversion of
your SQL queries into GoogleSQL, including Gemini-enhanced
SQL customization. You can use the batch SQL
translator to migrate your SQL scripts
in bulk, or the interactive SQL translator
to translate individual queries. You can also use the SQL translation API
to migrate your workloads to BigQuery.
BigQuery Data Transfer Service : Set up a data transfer that loads data from your
data source to BigQuery. For more information, see What is the BigQuery Data Transfer Service? .
You can also use the following open-source tools to help you with your migration process:
Data migration tool : Use the data migration
tool to automate
your data warehouse migration to BigQuery. The tool uses the
BigQuery Data Transfer Service, the BigQuery translation services, and
the data validation tool to transfer data, translate and validate DDL, DML,
and SQL queries.
Data validation tool : After migrating your data to
BigQuery, run the data validation
tool
to validate that your source and destination tables match.
BigQuery permission mapper : Use the permission
mapper
to automate the creation and maintenance of user-modifiable permission maps.
You can use the permission mapper to analyze and reconcile duplicate
permissions and user groups, while also generating error reports. The tool
outputs JSON and Terraform scripts for BigQuery group, user,
and binding creation.
Cloud Composer templates : Use Cloud Composer
templates
to simplify the creation of new Airflow DAGs or the migration of existing
orchestrated jobs from on-premises to the cloud.
Cloud Foundation Fabric : View Terraform examples and modules for
Google Cloud ,
including an organization-wide landing zone blueprint, reference blueprints
for network patterns and product features, and a library of adaptable modules.
Quotas
Quotas and limits apply to the number of jobs as well as the size of files.
For more information on migration service quotas and limits, see
Quotas and limits .
Pricing
There is no charge to use the BigQuery Migration API. However, storage used for
input and output files incurs the normal fees. For more information, see
Storage pricing .
Additionally, you can use the cost estimation functionality in Google Cloud Migration Center
to generate a cost estimate of running your data warehouse setup that you
migrate to BigQuery. For more information, see
Start a cost estimation and
Specify data warehousing requirements .
What's next
For more information on using the BigQuery Migration Service MCP server, see
Learn how to use the BigQuery Migration Service MCP server .
For more information on batch SQL translator, see
Batch SQL translator .
For more information on using the interactive SQL translator, see
Interactive SQL translator .
For more information on BigQuery migration assessment, see
BigQuery migration assessment .
Learn about the
Data Validation Tool .
For information about quotas and limits for the BigQuery Migration Service, see
Quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

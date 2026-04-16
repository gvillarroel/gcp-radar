---
title: "SCHEMATA_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-options
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/information-schema-project-options-changes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata-options
  title: "SCHEMATA_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
SCHEMATA_OPTIONS view
The INFORMATION_SCHEMA.SCHEMATA_OPTIONS view contains one row for each option
that is set in each dataset in a project.
Before you begin
To query the SCHEMATA_OPTIONS
view for dataset metadata, you need the bigquery.datasets.get
Identity and Access Management (IAM) permission at the project level.
Each of the following predefined IAM roles includes the
permissions that you need in order to get the SCHEMATA_OPTIONS view:
roles/bigquery.admin
roles/bigquery.dataEditor
roles/bigquery.dataOwner
roles/bigquery.dataViewer
For more information about BigQuery permissions, see
Access control with IAM .
Schema
When you query the INFORMATION_SCHEMA.SCHEMATA_OPTIONS view, the query results
contain one row for each option that is set in each dataset in a project.
The INFORMATION_SCHEMA.SCHEMATA_OPTIONS view has the following schema:
Column name
Data type
Value
catalog_name
STRING
The name of the project that contains the dataset
schema_name
STRING
The name of the dataset, also referred to as the datasetId
option_name
STRING
The name of the option. For a list of supported options, see the
schema options list .
The storage_billing_model option is only displayed for
datasets that have been updated after December 1, 2022. For datasets that
were last updated before that date, the storage billing model is
LOGICAL .
option_type
STRING
The data type of the option
option_value
STRING
The value of the option
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must include a region
qualifier . If you do not
specify a regional qualifier, metadata is retrieved from the US region.
The following table explains the region scope for this view:
View Name
Resource scope
Region scope
[ PROJECT_ID .]INFORMATION_SCHEMA.SCHEMATA_OPTIONS
Project level
US region
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.SCHEMATA_OPTIONS
Project level
REGION
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
REGION : any dataset region name .
For example, `region-us` .
Note: You must use a region qualifier
to query INFORMATION_SCHEMA views. The location of the query
execution must match the region of the INFORMATION_SCHEMA view.
Example
-- Returns metadata for datasets in a region.
SELECT * FROM region - us . INFORMATION_SCHEMA . SCHEMATA_OPTIONS ;
Examples
Retrieve the default table expiration time for all datasets in your project
To run the query against a project other than your default project, add the
project ID to the dataset in the following format:
` PROJECT_ID `.INFORMATION_SCHEMA.SCHEMATA_OPTIONS
for example, `myproject`.INFORMATION_SCHEMA.SCHEMATA_OPTIONS .
SELECT
*
FROM
INFORMATION_SCHEMA . SCHEMATA_OPTIONS
WHERE
option_name = 'default_table_expiration_days' ;
Note: INFORMATION_SCHEMA view names are case-sensitive.
The result is similar to the following:
+----------------+---------------+-------------------------------+-------------+---------------------+
| catalog_name | schema_name | option_name | option_type | option_value |
+----------------+---------------+-------------------------------+-------------+---------------------+
| myproject | mydataset3 | default_table_expiration_days | FLOAT64 | 0.08333333333333333 |
| myproject | mydataset2 | default_table_expiration_days | FLOAT64 | 90.0 |
| myproject | mydataset1 | default_table_expiration_days | FLOAT64 | 30.0 |
+----------------+---------------+-------------------------------+-------------+---------------------+
Note: 0.08333333333333333 is the floating point representation of 2 hours.
Retrieve labels for all datasets in your project
To run the query against a project other than your default project, add the
project ID to the dataset in the following format:
` PROJECT_ID `.INFORMATION_SCHEMA.SCHEMATA_OPTIONS ;
for example, `myproject`.INFORMATION_SCHEMA.SCHEMATA_OPTIONS .
SELECT
*
FROM
INFORMATION_SCHEMA . SCHEMATA_OPTIONS
WHERE
option_name = 'labels' ;
Note: INFORMATION_SCHEMA view names are case-sensitive.
The result is similar to the following:
+----------------+---------------+-------------+---------------------------------+------------------------+
| catalog_name | schema_name | option_name | option_type | option_value |
+----------------+---------------+-------------+---------------------------------+------------------------+
| myproject | mydataset1 | labels | ARRAY<STRUCT<STRING, STRING>> | [STRUCT("org", "dev")] |
| myproject | mydataset2 | labels | ARRAY<STRUCT<STRING, STRING>> | [STRUCT("org", "dev")] |
+----------------+---------------+-------------+---------------------------------+------------------------+
Note: Datasets without labels are excluded from the query results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

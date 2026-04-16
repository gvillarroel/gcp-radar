---
title: "COLUMN_FIELD_PATHS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-column-field-paths
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-column-field-paths
  title: "COLUMN_FIELD_PATHS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
COLUMN_FIELD_PATHS view
The INFORMATION_SCHEMA.COLUMN_FIELD_PATHS view contains one row for each
top-level column or column
nested within a RECORD (or STRUCT ) column.
Required permissions
To query the INFORMATION_SCHEMA.COLUMN_FIELD_PATHS view, you need the following
Identity and Access Management (IAM) permissions:
bigquery.tables.get
bigquery.tables.list
Each of the following predefined IAM roles includes the preceding
permissions:
roles/bigquery.admin
roles/bigquery.dataViewer
roles/bigquery.dataEditor
roles/bigquery.metadataViewer
For more information about BigQuery permissions, see
Access control with IAM .
Schema
Query results contain one row for each top-level column or column
nested within a RECORD (or
STRUCT ) column.
When you query the INFORMATION_SCHEMA.COLUMN_FIELD_PATHS view, the query
results contain one row for each column
nested within a RECORD
(or STRUCT ) column.
The INFORMATION_SCHEMA.COLUMN_FIELD_PATHS view has the following schema:
Column name
Data type
Value
table_catalog
STRING
The project ID of the project that contains the dataset.
table_schema
STRING
The name of the dataset that contains the table also referred to as
the datasetId .
table_name
STRING
The name of the table or view also referred to as the tableId .
column_name
STRING
The name of the top-level column.
field_path
STRING
The name of the top-level column or the path to the column
nested
within a RECORD or STRUCT column.
data_type
STRING
The column's GoogleSQL
data type .
description
STRING
The column's description.
collation_name
STRING
The name of the collation specification
if it exists; otherwise, NULL .
If a STRING , ARRAY<STRING> , or
STRING field in a STRUCT is passed in, the
collation specification is returned if it exists; otherwise,
NULL is returned.
rounding_mode
STRING
The mode of rounding that's used when applying precision and scale to+
parameterized NUMERIC or BIGNUMERIC values;
otherwise, the value is NULL .
data_policies.name
STRING
The list of data policies that are attached to the column to control access and masking. This field is in ( Preview ).
policy_tags
ARRAY<STRING>
The list of policy tags that are attached to the column.
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must include a dataset or a region qualifier. For
queries with a dataset qualifier, you must have permissions for the dataset.
For queries with a region qualifier, you must have permissions for the project.
For more
information see Syntax .
The following table explains the region and resource scopes for this view:
View name
Resource scope
Region scope
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.COLUMN_FIELD_PATHS
Project level
REGION
[ PROJECT_ID .] DATASET_ID .INFORMATION_SCHEMA.COLUMN_FIELD_PATHS
Dataset level
Dataset location
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
REGION : any dataset region name .
For example, `region-us` .
DATASET_ID : the ID of your dataset. For more
information, see Dataset qualifier .
Note: You must use a region qualifier
to query INFORMATION_SCHEMA views. The location of the query
execution must match the region of the INFORMATION_SCHEMA view.
Example
The following example retrieves metadata from the
INFORMATION_SCHEMA.COLUMN_FIELD_PATHS view for the commits table in the
github_repos dataset .
This dataset is part of the BigQuery
public dataset program .
Because the table you're querying is in another project, the
bigquery-public-data project, you add the project ID to the dataset in the
following format:
` project_id `. dataset .INFORMATION_SCHEMA. view ;
for example,
`bigquery-public-data`.github_repos.INFORMATION_SCHEMA.COLUMN_FIELD_PATHS .
The commits table contains the following nested and nested and repeated
columns:
author : nested RECORD column
committer : nested RECORD column
trailer : nested and repeated RECORD column
difference : nested and repeated RECORD column
To view metadata about the author and difference columns, run the following query.
Note: INFORMATION_SCHEMA view names are case-sensitive.
SELECT
*
FROM
`bigquery-public-data` . github_repos . INFORMATION_SCHEMA . COLUMN_FIELD_PATHS
WHERE
table_name = 'commits'
AND ( column_name = 'author' OR column_name = 'difference' );
The result is similar to the following. For readability, some columns
are excluded from the result.
+------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+
| table_name | column_name | field_path | data_type | description | policy_tags |
+------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+
| commits | author | author | STRUCT<name STRING, email STRING, time_sec INT64, tz_offset INT64, date TIMESTAMP> | NULL | 0 rows |
| commits | author | author.name | STRING | NULL | 0 rows |
| commits | author | author.email | STRING | NULL | 0 rows |
| commits | author | author.time_sec | INT64 | NULL | 0 rows |
| commits | author | author.tz_offset | INT64 | NULL | 0 rows |
| commits | author | author.date | TIMESTAMP | NULL | 0 rows |
| commits | difference | difference | ARRAY<STRUCT<old_mode INT64, new_mode INT64, old_path STRING, new_path STRING, old_sha1 STRING, new_sha1 STRING, old_repo STRING, new_repo STRING>> | NULL | 0 rows |
| commits | difference | difference.old_mode | INT64 | NULL | 0 rows |
| commits | difference | difference.new_mode | INT64 | NULL | 0 rows |
| commits | difference | difference.old_path | STRING | NULL | 0 rows |
| commits | difference | difference.new_path | STRING | NULL | 0 rows |
| commits | difference | difference.old_sha1 | STRING | NULL | 0 rows |
| commits | difference | difference.new_sha1 | STRING | NULL | 0 rows |
| commits | difference | difference.old_repo | STRING | NULL | 0 rows |
| commits | difference | difference.new_repo | STRING | NULL | 0 rows |
+------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

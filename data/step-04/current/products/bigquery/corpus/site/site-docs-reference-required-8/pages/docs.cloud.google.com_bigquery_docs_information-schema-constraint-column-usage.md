---
title: "CONSTRAINT_COLUMN_USAGE view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage
  title: "CONSTRAINT_COLUMN_USAGE view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
CONSTRAINT_COLUMN_USAGE view
The CONSTRAINT_COLUMN_USAGE view contains all columns used by
constraints .
For PRIMARY KEY constraints, these are the columns from
the KEY_COLUMN_USAGE view. For FOREIGN KEY constraints, these are the columns
of the referenced tables.
Schema
The INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE view has the following schema:
Column Name
Data type
Value
table_catalog
STRING
The name of the project that contains the dataset.
table_schema
STRING
The name of the dataset that contains the table. Also
referred to as the datasetId .
table_name
STRING
The name of the table. Also referred to as the
tableId .
column_name
STRING
The column name.
constraint_catalog
STRING
The constraint project name.
constraint_schema
STRING
The constraint dataset name.
constraint_name
STRING
The constraint name. It can be the name of the
primary key if the column is used by the primary key or the name of
foreign key if the column is used by a foreign key.
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must include a dataset qualifier. For queries with a
dataset qualifier, you must have permissions for the dataset. For more
information see
Syntax .
The following table shows the region and resource scopes for this view:
View name
Resource scope
Region scope
[ PROJECT_ID .] DATASET .INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE;
Dataset level
Dataset location
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
Examples
The following query shows the constraints for a single table in a dataset:
SELECT *
FROM PROJECT_ID . DATASET . INFORMATION_SCHEMA . CONSTRAINT_COLUMN_USAGE
WHERE table_name = TABLE ;
Replace the following:
PROJECT_ID : Optional. The name of your cloud project. If not
specified, this command uses the default project.
DATASET : The name of your dataset.
TABLE : The name of the table.
Conversely, the following query shows the constraints for all tables in a single dataset.
SELECT *
FROM PROJECT_ID . DATASET . INFORMATION_SCHEMA . CONSTRAINT_COLUMN_USAGE ;
With existing constraints, the query results are similar to the following:
+-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+
| row | table_catalog | table_schema | table_name | column_name | constraint_catalog | constraint_schema | constraint_name |
+-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+
| 1 | myConstraintCatalog | myDataset | orders | o_okey | myConstraintCatalog | myDataset | orders.pk$ |
| 2 | myConstraintCatalog | myDataset | orders | o_okey | myConstraintCatalog | myDataset | lineitem.lineitem_order |
+-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+
Note: lineitem.lineitem_order is the foreign key defined in the lineitem table.
If the table or dataset has no constraints, the query results look like this:
+-----------------------------+
| There is no data to display |
+-----------------------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

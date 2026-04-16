---
title: "COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-columns
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-columns
  title: "COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
COLUMNS view
The INFORMATION_SCHEMA.COLUMNS view contains one row for each column
(field) in a table.
Required permissions
To query the INFORMATION_SCHEMA.COLUMNS view, you need the following
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
When you query the INFORMATION_SCHEMA.COLUMNS view, the query results contain
one row for each column (field) in a table.
The INFORMATION_SCHEMA.COLUMNS view has the following schema:
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
The name of the column.
ordinal_position
INT64
The 1-indexed offset of the column within the table; if it's a pseudo
column such as _PARTITIONTIME or _PARTITIONDATE, the value is
NULL .
is_nullable
STRING
YES or NO depending on whether the column's
mode allows NULL values.
data_type
STRING
The column's GoogleSQL data type .
is_generated
STRING
The value is ALWAYS if the column is an
automatically
generated embedding column ;
otherwise, the value is NEVER .
generation_expression
STRING
The value is the generation expression used to define the column
if the column is an automatically
generated embedding column; otherwise the value is NULL .
is_stored
STRING
The value is YES if the column is an automatically
generated embedding column; otherwise, the value is
NULL .
is_hidden
STRING
YES or NO depending on whether the column is
a pseudo column such as _PARTITIONTIME or _PARTITIONDATE.
is_updatable
STRING
The value is always NULL .
is_system_defined
STRING
YES or NO depending on whether the column is
a pseudo column such as _PARTITIONTIME or _PARTITIONDATE.
is_partitioning_column
STRING
YES or NO depending on whether the column is
a partitioning column .
clustering_ordinal_position
INT64
The 1-indexed offset of the column within the table's
clustering columns; the value is NULL if the table is not a
clustered table.
collation_name
STRING
The name of the collation specification
if it exists; otherwise, NULL .
If a STRING or ARRAY<STRING> is passed
in, the collation specification is returned if it exists; otherwise
NULL is returned.
column_default
STRING
The default value of the
column if it exists; otherwise, the value is NULL .
rounding_mode
STRING
The mode of rounding that's used for values written to the field if its
type is a parameterized NUMERIC or BIGNUMERIC ;
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
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.COLUMNS
Project level
REGION
[ PROJECT_ID .] DATASET_ID .INFORMATION_SCHEMA.COLUMNS
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
The following example retrieves metadata from the INFORMATION_SCHEMA.COLUMNS
view for the population_by_zip_2010 table in the
census_bureau_usa
dataset. This dataset is part of the BigQuery
public dataset program .
Because the table you're querying is in another project, the
bigquery-public-data project, you add the project ID to the dataset in the
following format:
` project_id `. dataset .INFORMATION_SCHEMA. view ;
for example,
`bigquery-public-data`.census_bureau_usa.INFORMATION_SCHEMA.TABLES .
The following column is excluded from the query results:
IS_UPDATABLE
Note: INFORMATION_SCHEMA view names are case-sensitive.
SELECT
* EXCEPT ( is_updatable )
FROM
`bigquery-public-data` . census_bureau_usa . INFORMATION_SCHEMA . COLUMNS
WHERE
table_name = 'population_by_zip_2010' ;
The result is similar to the following. For readability, some columns
are excluded from the result.
+------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+
| table_name | column_name | ordinal_position | is_nullable | data_type | is_hidden | is_system_defined | is_partitioning_column | clustering_ordinal_position | policy_tags |
+------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+
| population_by_zip_2010 | zipcode | 1 | NO | STRING | NO | NO | NO | NULL | 0 rows |
| population_by_zip_2010 | geo_id | 2 | YES | STRING | NO | NO | NO | NULL | 0 rows |
| population_by_zip_2010 | minimum_age | 3 | YES | INT64 | NO | NO | NO | NULL | 0 rows |
| population_by_zip_2010 | maximum_age | 4 | YES | INT64 | NO | NO | NO | NULL | 0 rows |
| population_by_zip_2010 | gender | 5 | YES | STRING | NO | NO | NO | NULL | 0 rows |
| population_by_zip_2010 | population | 6 | YES | INT64 | NO | NO | NO | NULL | 0 rows |
+------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

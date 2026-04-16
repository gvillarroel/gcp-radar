---
title: "SEARCH_INDEX_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-index-options
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-index-options
  title: "SEARCH_INDEX_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
SEARCH_INDEX_OPTIONS view
The INFORMATION_SCHEMA.SEARCH_INDEX_OPTIONS view contains one row for each
search index option in a dataset.
Required permissions
To see search index metadata, you need the
bigquery.tables.get or bigquery.tables.list Identity and Access Management (IAM)
permission on the table with the index. Each of the following predefined
IAM roles includes at least one of these permissions:
roles/bigquery.admin
roles/bigquery.dataEditor
roles/bigquery.dataOwner
roles/bigquery.dataViewer
roles/bigquery.metadataViewer
roles/bigquery.user
For more information about BigQuery permissions, see
Access control with IAM .
Schema
When you query the INFORMATION_SCHEMA.SEARCH_INDEX_OPTIONS view, the query
results contain one row for each search index option in a dataset.
The INFORMATION_SCHEMA.SEARCH_INDEX_OPTIONS view has the following schema:
Column name
Data type
Value
index_catalog
STRING
The name of the project that contains the dataset.
index_schema
STRING
The name of the dataset that contains the index.
table_name
STRING
The name of the base table that the index is created on.
index_name
STRING
The name of the index.
option_name
STRING
The name of the option, which can be one of the following:
analyzer , analyzer_options ,
data_types , or
default_index_column_granularity .
option_type
STRING
The type of the option.
option_value
STRING
The value of the option.
Note: If a search index option is not specified, a row containing the default
search index option is produced by a query. The analyzer and data_types
options are always populated in the SEARCH_INDEX_OPTIONS view regardless of
whether they are specified in the DDL or not. If not specified, the default
LOG_ANALYZER and ["STRING"] values are respectively produced. Other options
are populated in the SEARCH_INDEX_OPTIONS view only when they're specified in
CREATE SEARCH INDEX DDL .
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must have a dataset qualifier . The
following table explains the region scope for this view:
View Name
Resource scope
Region scope
[ PROJECT_ID .] DATASET_ID .INFORMATION_SCHEMA.SEARCH_INDEX_OPTIONS
Dataset level
Dataset location
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
DATASET_ID : the ID of your dataset. For more
information, see Dataset qualifier .
Example
-- Returns metadata for search index options in a single dataset.
SELECT * FROM myDataset . INFORMATION_SCHEMA . SEARCH_INDEX_OPTIONS ;
Example
The following example creates three search index options for columns of
table1 and then extracts those options from fields that are indexed:
CREATE SEARCH INDEX myIndex ON `mydataset.table1` ( ALL COLUMNS ) OPTIONS (
analyzer = 'LOG_ANALYZER' ,
analyzer_options = '{ "delimiters" : [".", "-"] }' ,
data_types = [ 'STRING' , 'INT64' , 'TIMESTAMP' ]
);
SELECT index_name , option_name , option_type , option_value
FROM mydataset . INFORMATION_SCHEMA . SEARCH_INDEX_OPTIONS
WHERE table_name = 'table1' ;
The result is similar to the following:
+------------+------------------+---------------+----------------------------------+
| index_name | option_name | option_type | option_value |
+------------+------------------+---------------+----------------------------------+
| myIndex | analyzer | STRING | LOG_ANALYZER |
| myIndex | analyzer_options | STRING | { "delimiters": [".", "-"] } |
| myIndex | data_types | ARRAY<STRING> | ["STRING", "INT64", "TIMESTAMP"] |
+------------+------------------+---------------+----------------------------------+
The following example creates one search index option for columns of table1
and then extracts those options from fields that are indexed. If an option
doesn't exist, the default option is produced:
CREATE SEARCH INDEX myIndex ON `mydataset.table1` ( ALL COLUMNS ) OPTIONS (
analyzer = 'NO_OP_ANALYZER'
);
SELECT index_name , option_name , option_type , option_value
FROM mydataset . INFORMATION_SCHEMA . SEARCH_INDEX_OPTIONS
WHERE table_name = 'table1' ;
The result is similar to the following:
+------------+------------------+---------------+----------------+
| index_name | option_name | option_type | option_value |
+------------+------------------+---------------+----------------+
| myIndex | analyzer | STRING | NO_OP_ANALYZER |
| myIndex | data_types | ARRAY<STRING> | ["STRING"] |
+------------+------------------+---------------+----------------+
The following example creates no search index options for columns of table1
and then extracts the default options from fields that are indexed:
CREATE SEARCH INDEX myIndex ON `mydataset.table1` ( ALL COLUMNS );
SELECT index_name , option_name , option_type , option_value
FROM mydataset . INFORMATION_SCHEMA . SEARCH_INDEX_OPTIONS
WHERE table_name = 'table1' ;
The result is similar to the following:
+------------+------------------+---------------+----------------+
| index_name | option_name | option_type | option_value |
+------------+------------------+---------------+----------------+
| myIndex | analyzer | STRING | LOG_ANALYZER |
| myIndex | data_types | ARRAY<STRING> | ["STRING"] |
+------------+------------------+---------------+----------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

---
title: "Dataflow managed I/O for BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/managed-io-bigquery
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/managed-io-bigquery
  title: "Dataflow managed I/O for BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Dataflow managed I/O for BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
Managed I/O supports the following capabilities for BigQuery:
Dynamic table creation
Dynamic destinations
For reads, the connector uses the
BigQuery Storage Read API .
For writes, the connector uses the following BigQuery methods:
If the source is unbounded and Dataflow is using
streaming exactly-once processing ,
the connector performs writes to BigQuery, by using the
BigQuery Storage Write API with exactly-once
delivery semantics.
If the source is unbounded and Dataflow is using
streaming at-least-once processing ,
the connector performs writes to BigQuery, by using the
BigQuery Storage Write API with at-least-once
delivery semantics.
If the source is bounded, the connector uses
BigQuery file loads .
Requirements
The following SDKs support managed I/O for BigQuery:
Apache Beam SDK for Java version 2.61.0 or later
Apache Beam SDK for Python version 2.61.0 or later
Configuration
Managed I/O for BigQuery supports the following configuration
parameters:
BIGQUERY Read
Configuration
Type
Description
kms_key
str
Use this Cloud KMS key to encrypt your data
query
str
The SQL query to be executed to read from the BigQuery table.
row_restriction
str
Read only rows that match this filter, which must be compatible with Google standard SQL. This is not supported when reading via query.
fields
list[ str ]
Read only the specified fields (columns) from a BigQuery table. Fields may not be returned in the order specified. If no value is specified, then all fields are returned. Example: "col1, col2, col3"
table
str
The fully-qualified name of the BigQuery table to read from. Format: [${PROJECT}:]${DATASET}.${TABLE}
BIGQUERY Write
Configuration
Type
Description
table
str
The bigquery table to write to. Format: [${PROJECT}:]${DATASET}.${TABLE}
drop
list[ str ]
A list of field names to drop from the input record before writing. Is mutually exclusive with 'keep' and 'only'.
keep
list[ str ]
A list of field names to keep in the input record. All other fields are dropped before writing. Is mutually exclusive with 'drop' and 'only'.
kms_key
str
Use this Cloud KMS key to encrypt your data
only
str
The name of a single record field that should be written. Is mutually exclusive with 'keep' and 'drop'.
triggering_frequency_seconds
int64
Determines how often to 'commit' progress into BigQuery. Default is every 5 seconds.
What's next
For more information and code examples, see the following topics:
Read from BigQuery
Write to BigQuery
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

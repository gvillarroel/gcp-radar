---
title: "About BigLake metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/about-bqms
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/about-bqms
  title: "About BigLake metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
BigLake
Guides
Send feedback
About BigLake metastore
Stay organized with collections
Save and categorize content based on your preferences.
BigLake metastore is a fully managed, serverless service that provides a single
source of truth for your data lakehouse. It enables multiple engines, including
Apache Spark, Apache Flink, and BigQuery, to share
tables and metadata without copying files.
BigLake metastore supports storage access delegation (credential vending),
which improves security by removing the need for direct Cloud Storage bucket
access. It also integrates with Knowledge Catalog for unified
governance, lineage, and data quality.
Key capabilities
As a component of BigLake, BigLake metastore provides several
advantages for data management and analysis, including a serverless
architecture, engine interoperability with open APIs, a unified user
experience, and high-performance analytics, streaming, and AI when used with
BigQuery. For more information on these benefits, see
What is BigLake?
Supported engines
BigLake metastore is compatible with several query engines including (but not
limited to) Apache Spark, Apache Flink, and Trino. The
following table provides links to documentation for each engine:
Engine
Documentation
Apache Spark
Quickstart: Use with Spark
Apache Flink
Use with Apache Flink
Trino
Use with Trino
Configuration options
BigLake metastore can be configured in one of two ways: with the
Iceberg REST catalog or the
custom Iceberg catalog for BigQuery . The
best option depends on your use case, as shown in the following table:
Use case
Recommendation
New BigLake metastore users that want their open source engine to access
data in Cloud Storage and need interoperability with other engines,
including BigQuery and AlloyDB for PostgreSQL.
Use the
Iceberg REST catalog .
Existing BigLake metastore users that have current tables with the
custom Iceberg catalog for BigQuery.
Continue using the
custom Iceberg catalog for BigQuery ,
but use the
Iceberg REST catalog
for new workflows. Tables created with the custom
Iceberg catalog for BigQuery are
visible with the Iceberg REST catalog through
BigQuery catalog federation.
Differences with BigLake metastore (classic)
BigLake metastore is the recommended metastore on Google Cloud, while
BigLake metastore (classic) is considered a legacy feature.
The core differences between BigLake metastore and BigLake metastore (classic)
include the following:
BigLake metastore supports a direct integration with open source engines
like Spark, which helps reduce redundancy when you
store metadata and run jobs. Tables in BigLake metastore are directly
accessible from multiple open source engines and BigQuery.
BigLake metastore supports the Iceberg REST catalog,
while BigLake metastore (classic) does not.
BigLake metastore limitations
The following limitations apply to tables in BigLake metastore:
Table management
You can't create or modify BigLake Iceberg tables with
BigQuery data definition language (DDL) or data manipulation
language (DML) statements. You can modify
BigLake Iceberg tables using the BigQuery API (with the
bq command-line tool or client libraries), but doing so risks making changes that are
incompatible with the external engine.
BigLake metastore tables don't support renaming
operations or the ALTER
TABLE ... RENAME TO Spark SQL statement.
BigLake metastore tables don't support
clustering .
BigLake metastore tables don't support flexible column
names .
BigLake metastore doesn't support Iceberg views.
Querying
Query performance for BigLake metastore tables from the
BigQuery engine might be slow compared to querying data in
standard BigQuery tables. In general, query speed should be
equivalent to reading data from Cloud Storage.
A BigQuery dry run
of a query that uses a BigLake metastore table might report a lower bound
of 0 bytes of data, even if rows are returned. This result occurs because the
amount of data that is processed from the table can't be determined until the
full query is run. Running the query incurs a cost for processing this data.
You can't reference a BigLake metastore table in a wildcard
table query.
API and metadata
You can't use the tabledata.list
method to retrieve data
from BigLake metastore tables. Instead, you can save query results to a
BigQuery table, and then use the tabledata.list method on
that table.
The display of table storage statistics for BigLake metastore tables isn't
supported.
Quotas and limits
BigLake metastore tables in BigQuery are subject to the
same quotas and limits as standard
tables.
What's next
Explore the Iceberg REST
catalog .
Explore the custom Iceberg catalog for
BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

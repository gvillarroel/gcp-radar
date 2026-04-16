---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.474Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake support for Delta Lake tables"
feature_slug: "biglake-support-for-delta-lake-tables"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-features"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "biglake"
  - "delta"
  - "lake"
  - "tables"
  - "can"
  - "access"
  - "bigquery"
---

# BigLake support for Delta Lake tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake can access Delta Lake tables from BigQuery.

## Extended Definition

BigLake can access Delta Lake tables from BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- Introduction to BigLake external tables Important: The term "BigLake" on this page refers to an access delegation functionality for external tables in BigQuery.
- Integrations BigLake tables are accessible from a number of other BigQuery features and gcloud CLI services, including the following, highlighted services.
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.

### Additional BigLake metastore features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)
- Source ID: `site-docs-reference-5`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To customize your BigLake metastore configuration, you can use the following additional features: Apache Spark Iceberg procedures The filter option for unsupported tables BigQuery connection overrides Access control policies for BigLake metastore Iceberg tables Use Iceberg Spark procedures To use Iceberg Spark procedures , you must include Iceberg SQL extensions in your Spark configuration.
- Set access control policies You can enable fine-grained access control (FGAC) on BigLake metastore Iceberg tables by configuring access control policies.
- The output is similar to the following: 1 first row Time taken: 0 .997 seconds, Fetched 1 row ( s ) Filter unsupported tables from table listing functions When you use Spark SQL with the BigLake metastore catalog, the SHOW TABLES command shows all the tables in the specified namespace, even those that aren't compatible with Spark.
- To only display supported tables, turn on the filter unsupported tables option: spark-sql --jars https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR \ --conf spark.sql.catalog.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Go to Logging Use the following query to access the audit data: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" AND resource.type = "bigquery dataset" AND timestamp >= " STARTING TIMESTAMP " AND protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" AND ( protoPayload.metadata.tableCreation : OR protoPayload.metadata.tableChange : OR protoPayload.metadata.tableDeletion : ) AND protoPayload.resourceName : "projects/ PROJECT ID /datasets/ DATASET ID /tables/" Replace the following: PROJECT ID : the project that contains datasets and tables you are interested in.
- The following predefined IAM roles include bigquery.tables.get permissions: bigquery.metadataViewer bigquery.dataViewer bigquery.dataOwner bigquery.dataEditor bigquery.admin In addition, if a user has bigquery.datasets.create permissions, when that user creates a dataset, they are granted bigquery.dataOwner access to it. bigquery.dataOwner access gives the user the ability to retrieve table metadata.


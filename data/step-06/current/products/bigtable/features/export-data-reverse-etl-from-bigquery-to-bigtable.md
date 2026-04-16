---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.993Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "EXPORT DATA reverse ETL from BigQuery to Bigtable"
feature_slug: "export-data-reverse-etl-from-bigquery-to-bigtable"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "statements"
  - "reverse"
  - "export"
  - "supports"
---

# EXPORT DATA reverse ETL from BigQuery to Bigtable

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports EXPORT DATA statements for directly exporting BigQuery data to Bigtable.

## Extended Definition

Bigtable now supports EXPORT DATA statements for directly exporting BigQuery data to Bigtable.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)

## Supporting Pages

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- GetItem BatchGetItem , Query , Scan ReadRow ReadRows ( range , prefix , reverse scan ) Bigtable supports efficient scanning by row key prefix, regular expression pattern, or row key range forward or backward.
- While you can design the lexicographical row key in Bigtable to handle many scan patterns efficiently, Bigtable also supports asynchronous secondary indexes that you implement as continuous materialized views to provide efficient, eventually consistent lookups for alternative query patterns.
- You don't have to use an UploadDate column or calculate a reverse timestamp and make that your sort key, either, because Bigtable timestamps give you the reverse chronologically ordered comments automatically.
- Therefore, a sort key with the pattern VideoComment#reverse-timestamp is used to make each comment a separate row within the partition, sorted in reverse chronological order.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- It also supports modern workloads, such as machine learning and AI, that require frequent iteration on feature stores and real-time serving at global scale.
- Compared to Bigtable backups, exports take longer to execute and incur extra compute costs because the exports use Dataflow.
- Transaction support Although neither database supports complex multi-row transactions, each has some transaction support.
- Backup and restore Bigtable provides two methods to cover common backup needs: Bigtable backups and managed data exports.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.
- Data types Aerospike supports advanced data types, including scalars, GeoJSON, HyperLogLogs, lists, and nested objects.
- Bigtable provides two methods to cover common backup needs: Bigtable backups and managed data exports.
- Similarly, Bigtable supports sparse columns, so no storage is consumed for columns without values.


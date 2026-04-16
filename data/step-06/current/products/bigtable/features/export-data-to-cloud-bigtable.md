---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.006Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "EXPORT DATA to Cloud Bigtable"
feature_slug: "export-data-to-cloud-bigtable"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
keywords:
  - "exported"
  - "directly"
  - "export"
  - "into"
---

# EXPORT DATA to Cloud Bigtable

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

BigQuery data can now be exported directly into Cloud Bigtable using EXPORT DATA statements.

## Extended Definition

BigQuery data can now be exported directly into Cloud Bigtable using EXPORT DATA statements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)

## Supporting Pages

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- No directly corresponding item. column family : The number of column families is unlimited, however more than 100 can cause performance degradation. bin : The number of bins is unlimited, however, each bin can hold not more than 1 MB of data.
- Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side.
- No directly corresponding item. cell : a label for a timestamped value stored in a table. (record) digest : a hash of a three-tuple identifying a record: namespace, set, and key.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- However, these exports create portable data files that you can query offline or import into another system.
- You can export into the Avro, Parquet, or Hadoop Sequence file formats.
- Data modeling: flexibility with collections The Cassandra to Bigtable proxy adapter turns Cassandra collection types, such as maps, sets, and lists, into column families in Bigtable.
- IAM and security In Bigtable, authorization is fully integrated into Google Cloud's IAM framework and requires minimal setup and maintenance.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The tool reads the exported files from your Cloud Storage bucket and uses a Dataflow template to transform the data so that it's compatible with Bigtable.
- 25 https://storage… shoes#sneakers#brandA Step out in style and comfort with… 40 https://storage… shoes#sneakers#brandB Classic features with contemporary materials… 50 https://storage… Single table design pattern A single table design pattern brings together what would be multiple tables in a relational database into a single table in DynamoDB.
- 25 https://storage… shoes sneakers#brandA Step out in style and comfort with… 40 https://storage… shoes sneakers#brandB Classic features with contemporary materials… 50 https://storage… For this table, mapping from DynamoDB to Bigtable is straightforward: you convert DynamoDB's composite primary key into a composite Bigtable row key.
- Every time the item is updated, you use the next higher version-prefix in the sort key of the updated version, and copy the updated contents into the item with version-prefix zero.


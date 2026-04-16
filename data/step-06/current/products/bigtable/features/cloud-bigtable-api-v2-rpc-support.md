---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.061Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable API v2 RPC support"
feature_slug: "cloud-bigtable-api-v2-rpc-support"
latest_feature_date: "2016-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance"
keywords:
  - "offers"
  - "version"
  - "enabling"
  - "custom"
---

# Cloud Bigtable API v2 RPC support

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now offers version 2 of its RPC API, enabling custom gRPC clients for both the Data API and Admin API.

## Extended Definition

Cloud Bigtable now offers version 2 of its RPC API, enabling custom gRPC clients for both the Data API and Admin API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- Multiple timestamped versions can be stored and retrieved for each cell. counter : an incrementable field type optimized for integer sum operations. counters : cells that use specialized data types for integer sum operations.
- Cell versions can be pruned using a garbage collection policy that can be different for each table's column family, or can be filtered from a query result set through the API.
- Alternatively, if you've flushed at least one version of a cell value to disk in separate SSTables, the databases handle requests for that data differently.

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Enabling CMEK At a high level, to use CMEK with Bigtable, you follow these steps: Create and configure a CMEK key in each region where your instance's clusters are going to be.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Bigtable.
- For up to five minutes after a table is created in a CMEK-protected instance, the key version and key status might be reported as unknown.
- Disabling or deleting only one version instead of all versions of a key that Bigtable uses can result in unpredictable behavior.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.096Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic Private Service Connect endpoint creation"
feature_slug: "automatic-private-service-connect-endpoint-creation"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "endpoint"
  - "automatically"
  - "creation"
  - "automatic"
  - "private"
  - "connect"
---

# Automatic Private Service Connect endpoint creation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can automatically create Private Service Connect endpoints for authorized projects based on a defined service connection policy.

## Extended Definition

AlloyDB can automatically create Private Service Connect endpoints for authorized projects based on a defined service connection policy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you create a Private Service Connect-enabled cluster and instance, you can let AlloyDB automatically create endpoints for you or create the endpoint manually.
- As a result, you can provision Private Service Connect endpoints automatically.
- The subnet is used to allocate IP addresses for the endpoints that are automatically created through the policy to connect to AlloyDB.
- Private Service Connect endpoint A Private Service Connect endpoint is a forwarding rule that's associated with an internal IP address.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- An adaptive variation of the PostgreSQL stale-data autovacuum feature automatically adjusts vacuum-related parameters to best suit the shape of your workload.
- Storage: a cloud-native, distributed storage engine that persists your data across multiple availability zones and scales automatically as your data grows.
- Resource management: optimize performance and efficiency with systems that automatically allocate and release memory and storage as needed.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you have a batch output transform function with the following signature: CREATE OR REPLACE FUNCTION my batch output transform ( model id TEXT , model output JSON ) RETURNS real [][]; You can create a JSONB variant like this: CREATE OR REPLACE FUNCTION my batch output transform ( model id TEXT , model output JSONB ) RETURNS real [][]; The extension automatically detects the presence of the JSONB version of the function and uses it for batch processing.
- CALL ai . initialize embeddings ( model id = > 'text-embedding-005' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' , batch size = > 10 , incremental refresh mode = > 'transactional' ); In transactional mode, the ai.refresh embeddings() function is disabled because embeddings are kept in sync automatically using triggers.
- This process, which often uses a mechanism similar to a database trigger to automatically generate embeddings when the content column is updated, can introduce overhead and slow down update operations.
- Work with table data during vector embedding creation While ai.initialize embeddings() is a blocking call for the session that it runs in, other connections can continue to work with the table.


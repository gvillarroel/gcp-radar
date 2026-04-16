---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.822Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB AI auto embedding generation"
feature_slug: "alloydb-ai-auto-embedding-generation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering"
keywords:
  - "large-scale embedding generation"
  - "automatic embedding generation"
  - "embedding generation"
  - "AlloyDB AI auto embedding"
  - "RAG"
  - "semantic search"
  - "auto embeddings"
---

# AlloyDB AI auto embedding generation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB AI introduces preview automatic large-scale embedding generation for semantic search and RAG use cases.

## Extended Definition

AlloyDB AI introduces preview automatic large-scale embedding generation for semantic search and RAG use cases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering)

## Supporting Pages

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- This solution is particularly useful for facilitating semantic search and Retrieval Augmented Generation (RAG) on text content, including the following: Creating initial vector embedding for a new table Generating embeddings after a large data import Refreshing embeddings after significant data changes Maintaining embeddings incrementally Understand auto vector embeddings Auto vector embeddings in AlloyDB provide a scalable way to automate the generation and maintenance of vector embeddings for your data.
- This is particularly useful for applications that rely on up-to-date embeddings for semantic search, Retrieval Augmented Generation (RAG), and other AI-powered features.
- The ai.embedding prepare partition procedure ensures the schema is compatible with any parent table in the hierarchy: -- Prepare a sub-partition for a non-root parent table CALL ai . embedding prepare partition ( parent table = > 'documents eu' , -- An existing partition child table = > 'documents eu germany' ); -- Attach the new sub-partition ALTER TABLE documents eu ATTACH PARTITION documents eu germany FOR VALUES IN ( 'germany' ); -- Refresh embeddings for the new sub-partition CALL ai . refresh embeddings ( table name = > 'documents eu germany' , embedding column = > 'content embeddings' ); Monitor embedding generation progress You can monitor the real-time status of active initialize embeddings and refresh embeddings calls by querying the ai.embedding progress view .
- To let a user manage auto embedding generation, grant INSERT , UPDATE , and DELETE permissions on the google ml.embed gen progress and google ml.embed gen settings tables: GRANT INSERT , UPDATE , DELETE ON google ml . embed gen progress TO ' USER NAME ' ; Replace the following: USER NAME : the name of the user for whom the permissions are granted.

### "Understand adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering](https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.873Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pgvector 0.5.0 in AlloyDB Omni"
feature_slug: "pgvector-0-5-0-in-alloydb-omni"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index"
keywords:
  - "pgvector extension in AlloyDB Omni"
  - "pgvector extension version 0.5.0"
  - "AlloyDB Omni pgvector 0.5.0"
  - "vector extension support"
  - "v0.5.0"
  - "pgvector 0.5.0"
  - "pgvector"
---

# pgvector 0.5.0 in AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni now includes pgvector updated to version 0.5.0.

## Extended Definition

AlloyDB Omni now includes pgvector updated to version 0.5.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index](https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

### "Create an IVFFLAT index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; Create an IVFFlat index Stock pgvector also provides a version of the IVF index named IVFFlat that provides faster build time and has a smaller memory footprint as compared to the hnsw index.
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.
- Because embedding() returns a real array, you must explicitly cast the embedding() call to vector in order to use these values with pgvector operators.

### Create an IVF index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable scalar quantization on a pgvector -based index, specify IVF as the index method, and SQ8 as the quantizer: CREATE INDEX INDEX NAME ON TABLE USING ivf ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( lists = LIST COUNT , quantizer = ' QUANTIZER ' ); Replace the following: INDEX NAME : the name of the index you want to create—for example, my-ivf-index .
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.
- Because embedding() returns a real array, you must explicitly cast the embedding() call to vector in order to use these values with pgvector operators.

### Create indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index](https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- CREATE EXTENSION IF NOT EXISTS vector ; Create an HNSW index AlloyDB supports creating a graph-based hnsw index available with stock pgvector using the AlloyDB pgvector extension.
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.
- Because embedding() returns a real array, you must explicitly cast the embedding() call to vector in order to use these values with pgvector operators.


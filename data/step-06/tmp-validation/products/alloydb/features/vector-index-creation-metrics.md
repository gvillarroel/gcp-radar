---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.081Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Vector index creation metrics"
feature_slug: "vector-index-creation-metrics"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
keywords:
  - "builds"
  - "visibility"
  - "creation"
  - "index"
  - "metrics"
  - "vector"
  - "into"
---

# Vector index creation metrics

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Vector index creation metrics add visibility into vector index builds through the pg_stat_ann_index_creation view.

## Extended Definition

Vector index creation metrics add visibility into vector index builds through the pg_stat_ann_index_creation view.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)

## Supporting Pages

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 568 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )) Workers Planned : 2 Workers Launched : 2 Buffers : shared hit = 26995 - > Parallel Index Scan using posts ivfflat on public . posts p ( cost = 11132 .
- 695 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )) Buffers : shared hit = 2565 - > Index Scan using posts scann on public . posts p ( cost = 17 .
- 091 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )) Buffers : shared hit = 889 - > Index Scan using posts hnsw on public . posts p ( cost = 371 .
- IVFFlat The IVFFlat index takes the vector values and divides them into multiple lists.

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ALTER EXTENSION vector UPDATE ; ALTER EXTENSION alloydb scann UPDATE ; View vector index metrics If your table is prone to frequent updates or insertions, then we recommend periodically reindexing the existing ScaNN index in order to improve the recall accuracy for your index.
- What's next Vector index metrics Optimize vector query performance for ScaNN Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can monitor index metrics to view changes in vector distributions or vector mutations since the index was built, and then reindex accordingly.
- For more information about metrics, see View vector index metrics .

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create this index on an embedding column that uses the real[] data type instead of vector , cast the column into the vector data type: CREATE INDEX INDEX NAME ON TABLE USING scann ( CAST ( EMBEDDING COLUMN AS vector ( DIMENSIONS )) DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , max num levels = MAX NUM LEVELS ); Replace DIMENSIONS with the dimensional width of the embedding column.
- Warning: Forcing index creation on a table with little or no data has the following implications: The index is trained on insufficient data, which can result in poor recall for your vector similarity searches.
- What's next Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- Note that ScaNN index can be loaded into the columnar engine for further accelerating the vector search.


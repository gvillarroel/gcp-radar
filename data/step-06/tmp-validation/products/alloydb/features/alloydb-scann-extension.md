---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.124Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "alloydb_scann extension"
feature_slug: "alloydb-scann-extension"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "indexing"
  - "scann"
  - "embedding"
  - "extension"
  - "storage"
  - "vector"
  - "supports"
---

# alloydb_scann extension

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The alloydb_scann extension supports vector embedding storage, indexing, and tuning for faster vector query performance and recall; AlloyDB Omni uses the alloydb_scann extension as the renamed ScaNN-based nearest-neighbor indexing extension.

## Extended Definition

The alloydb_scann extension supports vector embedding storage, indexing, and tuning for faster vector query performance and recall; AlloyDB Omni uses the alloydb_scann extension as the renamed ScaNN-based nearest-neighbor indexing extension.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Three-level tree index To create a three-level tree index using the ScaNN algorithm to a column containing stored vector embeddings, run the following DDL query: CREATE INDEX INDEX NAME ON TABLE USING scann ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , max num levels = 2 ); After you create the index, you can run nearest-neighbor search queries that make use of the index by following the instructions in Make a nearest-neighbor query with given text .
- Two-level tree index To apply a two-level tree index using the ScaNN algorithm to a column containing stored vector embeddings, run the following DDL query: CREATE INDEX INDEX NAME ON TABLE USING scann ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , quantizer = QUANTIZER ); Replace the following: INDEX NAME : the name of the index you want to create—for example, my scann index .
- To create this index on an embedding column that uses the real[] data type instead of vector , cast the column into the vector data type: CREATE INDEX INDEX NAME ON TABLE USING scann ( CAST ( EMBEDDING COLUMN AS vector ( DIMENSIONS )) DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , max num levels = MAX NUM LEVELS ); Replace DIMENSIONS with the dimensional width of the embedding column.
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on how to tune the ScaNN index, see the following resources: Tune vector query performance in AlloyDB for PostgreSQL AlloyDB ScaNN Index reference Understanding the ScaNN index in AlloyDB The following is an example of how to tune the ScaNN index: CREATE INDEX posts scann on posts using scann ( body embeddings cosine ) with ( num leaves = 275 , quantizer = 'sq8' ); CREATE INDEX Time : 3963 .
- 695 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , ( "substring" ( body , 0 , 50 )), (( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector )) Buffers : shared hit = 2565 - > Index Scan using posts scann on public . posts p ( cost = 17 .
- Vector pgvector is an open source extension used to perform similarity and approximate nearest neighbor searches based on embedding models.
- 692 rows = 5 loops = 1 ) Output : id , creationdate , score , title , viewcount , "substring" ( body , 0 , 50 ), ( body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Order By : ( p . body embeddings < = > '[0.0017194863,-0.04174791,-0.017442022,...,0.035435043,-0.004936148,-0.008868503]' :: vector ) Filter : ( p . title IS NOT NULL ) Rows Removed by Filter : 4 Buffers : shared hit = 2565 Columnar Check : table is not in the columnar store Settings : effective cache size = '9830032kB' , random page cost = '1.1' , work mem = '256MB' Query Identifier : - 6886845657091642615 Planning : Buffers : shared hit = 2 Planning Time : 53 .

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ALTER EXTENSION vector UPDATE ; ALTER EXTENSION alloydb scann UPDATE ; View vector index metrics If your table is prone to frequent updates or insertions, then we recommend periodically reindexing the existing ScaNN index in order to improve the recall accuracy for your index.
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; If the vector and alloydb scann extensions are already installed, upgrade the extensions to the latest version.
- If the vector and alloydb scann extensions aren't installed, install the latest extension versions.
- Before you begin Install or update the vector and alloydb scann extensions.


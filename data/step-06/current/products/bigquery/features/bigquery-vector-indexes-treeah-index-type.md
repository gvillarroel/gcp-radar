---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.502Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Vector indexes TreeAH index type"
feature_slug: "bigquery-vector-indexes-treeah-index-type"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "ScaNN TreeAH"
  - "batch query workload index"
  - "TreeAH index type"
  - "ScaNN index"
  - "TreeAH index"
  - "BigQuery vector index"
  - "CREATE VECTOR INDEX"
  - "vector indexes"
---

# BigQuery Vector indexes TreeAH index type

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery vector indexes now support the TreeAH index type, which uses Google’s ScaNN algorithm and is optimized for batch query workloads.

## Extended Definition

In BigQuery, the TreeAH vector index type is a configurable option of `CREATE VECTOR INDEX` (for example: `index type = 'TREE AH'` with optional `tree ah options`). It is a ScaNN-based vector index for vector search, and Google states it is optimized for efficient batch processing, suitable for processing from a few thousand to hundreds of thousands of embeddings at a time. BigQuery also supports partitioning TreeAH vector indexes via the `PARTITION BY` clause in `CREATE VECTOR INDEX`.

## Evidence Summary

The DDL page shows how to define TREE AH vector indexes, while the release notes and vector search introduction confirm TreeAH is powered by ScaNN and is optimized for batch vector processing.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following examples show how to create vector indexes with different options.
- Details You can only create vector indexes on standard tables .
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- You can find the index storage size by using the INFORMATION SCHEMA.VECTOR INDEXES view .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Feature Vector indexes support the TreeAH index type , which uses Google's ScaNN algorithm.
- Feature You can now use the use the PARTITION BY clause of the CREATE VECTOR INDEX statement to partition TreeAH vector indexes .
- The TreeAH index is optimized for efficient batch processing, capable of handling anywhere from a few thousand to hundreds of thousands of embeddings at once.


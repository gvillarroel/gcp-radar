---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.350Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TreeAH vector index type"
feature_slug: "treeah-vector-index-type"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "treeah"
  - "vector"
  - "index"
  - "type"
  - "bigquery"
  - "indexes"
  - "now"
  - "based"
---

# TreeAH vector index type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector indexes now support the TreeAH index type based on Google's ScaNN algorithm for efficient batch embedding processing; BigQuery vector indexes support the TreeAH index type, which uses Google's ScaNN algorithm and is optimized for batch queries with many query vectors.

## Extended Definition

BigQuery vector indexes now support the TreeAH index type based on Google's ScaNN algorithm for efficient batch embedding processing; BigQuery vector indexes support the TreeAH index type, which uses Google's ScaNN algorithm and is optimized for batch queries with many query vectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- You can find the index storage size by using the INFORMATION SCHEMA.VECTOR INDEXES view .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions To get the permissions that you need to alter vector indexes, ask your administrator to grant you the BigQuery Data Editor ( roles/bigquery.dataEditor ) or BigQuery Data Owner ( roles/bigquery.dataOwner ) IAM role on your table.
- For more information, see TreeAH index . distance type STRING Specifies the default distance type to use when performing a vector search using this index.
- You can only partition TreeAH indexes. ( Preview ) index option list : The list of options to set on the vector index.
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, run the following SQL statement: CREATE OR REPLACE VECTOR INDEX my index ON bqml tutorial.embeddings ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":500}' ) Creating a vector index typically takes only a few seconds.
- Go to BigQuery In the query editor, run the following SQL statement: SELECT table name , index name , index status , coverage percentage , last refresh time , disable reason FROM PROJECT ID .bqml tutorial.INFORMATION SCHEMA.VECTOR INDEXES Replace PROJECT ID with your project ID.
- You can check whether the index is ready to be used by querying the INFORMATION SCHEMA.VECTOR INDEXES view and verifying that the coverage percentage column value is greater than 0 and the last refresh time column value isn't NULL .
- To create a vector index, use the CREATE VECTOR INDEX data definition language (DDL) statement: Go to the BigQuery page.


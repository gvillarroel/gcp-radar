---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.235Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Autonomous embedding generation"
feature_slug: "autonomous-embedding-generation"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "autonomous"
  - "embedding"
  - "generation"
  - "maintains"
  - "embeddings"
  - "column"
  - "table"
  - "source"
---

# Autonomous embedding generation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Autonomous embedding generation maintains an embeddings column on a table from a source column and automatically updates embeddings when the source data changes.

## Extended Definition

Autonomous embedding generation maintains an embeddings column on a table from a source column and automatically updates embeddings when the source data changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com This document describes how to use autonomous embedding generation for your data, which lets BigQuery maintain a column of embeddings on a table based on a source column.
- Create a table with an automatically generated embedding column You can use autonomous embedding generation to generate embeddings by using the AI.EMBED function in a CREATE TABLE statement .
- The generation configuration doesn't apply to the new table, and updates to the source column of the new table won't result in new embeddings.
- Required roles To get the permissions that you need to enable autonomous embedding generation, ask your administrator to grant you the following IAM roles: To use a connection resource: BigQuery Connections User ( roles/bigquery.connectionUser ) on the connection To create or alter a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the table Grant the connection's service account the following role so that it can access models hosted in Vertex AI endpoints: Vertex AI User ( roles/aiplatform.user ) on the project that has the connection For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery maintains a column of embeddings on your table based on a source column.
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com You can use autonomous embedding generation to simplify the process of creating, maintaining, and querying embeddings.
- Generate a table of embeddings You can use the AI.GENERATE EMBEDDING to create a table that has embeddings for all of the data in a column of your input table.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: customer id: The customer ID as a STRING transaction amount: The transaction amount as NUMERIC The table option list specifies the: Description: A table clustered by customer id Creating a table with autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- See Table path syntax . column name : The name of a column with a type of ARRAY<FLOAT64> , or if you're using autonomous embedding generation (Preview) , a STRUCT<result ARRAY<FLOAT64>, status STRING> column.
- The following example creates a table named embedded table in mydataset with an automatically generated embedding column embedding that generates embeddings from the content column: CREATE TABLE mydataset . embedded table ( id INT64 , content STRING , embedding STRUCT , status STRING > GENERATED ALWAYS AS ( AI .
- The following example adds an automatically generated embedding column embedding that generates embeddings from content column to the existing table embedded table in mydataset : ALTER TABLE mydataset . embedded table ADD COLUMN embedding STRUCT , status STRING > GENERATED ALWAYS AS ( AI .


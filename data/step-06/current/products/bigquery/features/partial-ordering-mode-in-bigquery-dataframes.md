---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.357Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Partial ordering mode in BigQuery DataFrames"
feature_slug: "partial-ordering-mode-in-bigquery-dataframes"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "partial"
  - "ordering"
  - "mode"
  - "bigquery"
  - "dataframes"
  - "now"
  - "supports"
  - "generate"
---

# Partial ordering mode in BigQuery DataFrames

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames now supports partial ordering mode to generate more efficient queries.

## Extended Definition

BigQuery DataFrames now supports partial ordering mode to generate more efficient queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On BigQuery Studio, the project ID is automatically detected. bpd . options . bigquery . project = your gcp project id Use "partial" ordering mode to generate more efficient queries, but the order of the rows in DataFrames may not be deterministic if you have not explictly sorted it.
- Set the ordering mode to "strict" (default) for more pandas compatibility. bpd . options . bigquery . ordering mode = "partial" Create a DataFrame from a BigQuery table query or table = "bigquery-public-data.ml datasets.penguins" df = bpd . read gbq ( query or table ) Efficiently preview the results using the .peek() method. df . peek () Modify the bpd.options.bigquery.project = your gcp project id line to specify your Google Cloud project ID.
- Try BigQuery DataFrames Use this quickstart to perform the following analysis and machine learning (ML) tasks by using the BigQuery DataFrames API in a BigQuery notebook : Create a DataFrame over the bigquery-public-data.ml datasets.penguins public dataset.
- Add the following code to the code cell: import bigframes.pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .
- BigQuery supports UDFs written in SQL, JavaScript, or Python.


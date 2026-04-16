---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.911Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Flat-rate pricing"
feature_slug: "flat-rate-pricing"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
keywords:
  - "flat"
  - "rate"
  - "pricing"
  - "bigquery"
  - "offers"
  - "unlimited"
  - "querying"
  - "fixed"
---

# Flat-rate pricing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery offers flat-rate pricing for unlimited querying at a fixed monthly price.

## Extended Definition

BigQuery offers flat-rate pricing for unlimited querying at a fixed monthly price.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --project id= PROJECT ID Specifies the project that administers the slots. --slots= NUMBER OF BASELINE SLOTS Specifies the number of baseline slots to purchase. --edition= EDITION The edition associated with the capacity commitment.
- Replace PLAN with one of the following: ANNUAL THREE YEAR NONE Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --reservation={true false} Specifies whether to update a reservation.
- Must be one of the following values: ANNUAL THREE YEAR Customers using legacy flat-rate pricing also may use one of the following values: FLEX MONTHLY ANNUAL --renewal plan= RENEWAL TYPE Specifies the renewal plan type .
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Analyze the sentiment of the following movie review and classify it as either POSITIVE or NEGATIVE. \nMovie Review: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .
- GENERATE TEXT ( MODEL bqml tutorial . gemma model , ( SELECT 'Extract the key words from the movie review below: ' review AS prompt , FROM bigquery - public - data . imdb . reviews LIMIT 10 ), STRUCT ( 0 .
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- For more information about BigQuery pricing, see BigQuery pricing in the BigQuery documentation.


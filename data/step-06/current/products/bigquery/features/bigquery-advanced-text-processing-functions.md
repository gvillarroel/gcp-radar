---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.606Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery advanced text processing functions"
feature_slug: "bigquery-advanced-text-processing-functions"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "EUCLIDEAN_DISTANCE"
  - "ML.BAG_OF_WORDS"
  - "COSINE_DISTANCE"
  - "EDIT_DISTANCE"
  - "text similarity functions"
  - "ML.TF_IDF"
  - "advanced text processing"
  - "preview text functions"
---

# BigQuery advanced text processing functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery adds preview support for advanced text processing functions such as ML.BAG_OF_WORDS, ML.TF_IDF, BAG_OF_WORDS, TF_IDF, COSINE_DISTANCE, EUCLIDEAN_DISTANCE, and EDIT_DISTANCE.

## Extended Definition

BigQuery provides SQL functions for text and vector similarity calculations, including EDIT DISTANCE, EUCLIDEAN DISTANCE, and COSINE DISTANCE. EDIT DISTANCE computes Levenshtein distance between two STRING or BYTES values, while EUCLIDEAN DISTANCE and COSINE DISTANCE compute respective distances between two vectors. The provided excerpts do not confirm preview availability or additional functions such as ML.BAG_OF_WORDS, BAG_OF_WORDS, ML.TF_IDF, or TF_IDF.

## Evidence Summary

The cited BigQuery Standard SQL references define and describe EDIT DISTANCE, EUCLIDEAN DISTANCE, and COSINE DISTANCE, with examples for EDIT DISTANCE behavior, but they do not include the other named ML text-processing functions or any preview-status statement in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- EDIT DISTANCE Computes the Levenshtein distance between two STRING or BYTES values.
- EUCLIDEAN DISTANCE Computes the Euclidean distance between two vectors.
- COSINE DISTANCE Computes the cosine distance between two vectors.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Return type INT64 Examples In the following example, the first character in both strings is different: SELECT EDIT DISTANCE ( 'a' , 'b' ) AS results ; / ---------+ results +---------+ 1 +--------- / In the following example, the first and second characters in both strings are different: SELECT EDIT DISTANCE ( 'aa' , 'b' ) AS results ; / ---------+ results +---------+ 2 +--------- / In the following example, only the first character in both strings is different: SELECT EDIT DISTANCE ( 'aa' , 'ba' ) AS results ; / ---------+ results +---------+ 1 +--------- / In the following example, the last six characters are different, but because the maximum distance is 2 , this function exits early and returns 2 , the maximum distance: SELECT EDIT DISTANCE ( 'abcdefg' , 'a' , max distance = > 2 ) AS results ; / ---------+ results +---------+ 2 +--------- / ENDS WITH ENDS WITH ( value , suffix ) Description Takes two STRING or BYTES values.
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" , json scope = > "JSON KEYS" ) AS result ; / --------+ result +--------+ TRUE +-------- / EDIT DISTANCE EDIT DISTANCE ( value1 , value2 , [ max distance = > max distance value ] ) Description Computes the Levenshtein distance between two STRING or BYTES values.
- EDIT DISTANCE Computes the Levenshtein distance between two STRING or BYTES values.


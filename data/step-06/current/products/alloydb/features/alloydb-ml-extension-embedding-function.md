---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.639Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB ML extension embedding function"
feature_slug: "alloydb-ml-extension-embedding-function"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "ML extension function"
  - "AlloyDB ML extension"
  - "vector embedding function"
  - "AlloyDB ML"
  - "embedding SQL function"
  - "text embeddings"
  - "embedding function"
---

# AlloyDB ML extension embedding function

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

The AlloyDB machine learning extension adds an embedding SQL function for creating vector embeddings from text.

## Extended Definition

The AlloyDB machine learning extension adds an embedding SQL function for creating vector embeddings from text.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB reserves, and creates, the ai schema. ai.text embedding() / google ml.text embedding() function The following shows how to generate text embeddings: SELECT ai . text embedding ( model id = > ' MODEL ID ' , content = > ' CONTENT ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you define.
- For examples of SQL queries that generate multimodal text embeddings, see Examples . ai.image embedding() / google ml.image embedding() function The following shows how to generate multimodal image embeddings: Note: For API limits related to Vertex AI multimodal models, see API limits .
- The google ml.embedding() SQL function, which is a prediction function that generates text embeddings.
- Prediction functions Use this reference to understand parameters for functions that let you generate embeddings or invoke predictions. google ml.embedding() function For text embedding models without built-in support, the input and output parameters are unique to a model and need to be transformed for the function to call the model.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2024 Breaking Since the google ml integration.enable model support flag is enabled by default, if you are using the google ml integration extension version 1.3, your ability to query Vertex AI models using the embedding() function might be impacted.
- To resolve the issue with using the embedding() function , upgrade the google ml integration extension version 1.3 to the latest version, 1.4.2.
- These features include the following: The AlloyDB machine learning (ML) extension introduces an embedding SQL function .
- Breaking The return value of the embedding() function of google ml integration has changed.


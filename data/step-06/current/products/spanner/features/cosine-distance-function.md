---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.247Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "COSINE_DISTANCE() function"
feature_slug: "cosine-distance-function"
latest_feature_date: "2024-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
keywords:
  - "cosine"
  - "similarity"
  - "distance"
  - "preview"
  - "vector"
  - "adds"
---

# COSINE_DISTANCE() function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds support for the COSINE_DISTANCE() vector distance SQL function in Cloud Spanner (Preview) for similarity vector search.

## Extended Definition

Adds support for the COSINE_DISTANCE() vector distance SQL function in Cloud Spanner (Preview) for similarity vector search.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)

## Supporting Pages

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Function Description Formula Relationship to increasing similarity Dot product Calculates the cosine of angle \(\theta\) multiplied by the product of corresponding vector magnitudes. \(a 1b 1+a 2b 2+...+a nb n\) \(= a b cos(\theta)\) Increases Cosine distance The cosine distance function subtracts the cosine similarity from one ( cosine distance() = 1 - cosine similarity ).
- 1 - \(\frac{a^T b}{ a \cdot b }\) Decreases Euclidean distance Measures the straight line distance between two vectors. \(\sqrt{(a 1-b 1)^2+(a 2-b 2)^2+...+(a N-b N)^2}\) Decreases Choose a similarity measure Depending on whether or not all your vector embeddings are normalized, you can determine which similarity measure to use to find similarity.
- Home Documentation Databases Spanner Guides Send feedback Choose among vector distance functions to measure vector embeddings similarity Stay organized with collections Save and categorize content based on your preferences.
- In addition, if you know which distance function your model was trained with, use that distance function to measure similarity between your vector embeddings.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cymbal Phoenix See and be seen 87 0.525101413779242 Lights with the Phoenix bike lights... ------------------+--------------------+----------------+-------------------- / The Cymbal Sprout, with its APPROX COSINE DISTANCE of 0.30935457151661594, has the highest degree of similarity to the original query.
- Copy and paste the following DDL statement to create the vector index: CREATE VECTOR INDEX ProductDescriptionEmbeddingIndex ON products ( productDescriptionEmbedding ) WHERE productDescriptionEmbedding IS NOT NULL OPTIONS ( distance type = 'COSINE' ); Click Run .
- Use the FORCE INDEX hint to reference the new vector index: @{force index=ProductDescriptionEmbeddingIndex} Use the APPROX COSINE DISTANCE vector distance function instead of COSINE DISTANCE .
- For more information about interpreting the relationship between vector functions and similarity, see Choose among vector distance functions to measure vector embeddings similarity .

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- By comparing the numerical distance between the vector representations of two pieces of text, an application can determine the similarity between the text or the objects represented by the text.
- PREDICT ( MODEL MODEL NAME , ( SELECT p . description as content , "RETRIEVAL DOCUMENT" as task type ), STRUCT ( 768 AS outputDimensionality ) )); SELECT p . product id , p . name , p . description , COSINE DISTANCE ( p . description embedding , ( SELECT embeddings . values FROM ML .
- COSINE DISTANCE ( p . description embedding , spanner . float64 array ( spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.


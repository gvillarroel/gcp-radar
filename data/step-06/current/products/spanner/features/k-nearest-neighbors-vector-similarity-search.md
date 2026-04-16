---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.211Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "K-nearest neighbors vector similarity search"
feature_slug: "k-nearest-neighbors-vector-similarity-search"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
keywords:
  - "neighbors"
  - "similarity"
  - "nearest"
  - "vector"
  - "supports"
  - "search"
---

# K-nearest neighbors vector similarity search

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports generally available K-nearest neighbors vector similarity search using COSINE_DISTANCE(), EUCLIDEAN_DISTANCE(), and DOT_PRODUCT() functions.

## Extended Definition

Spanner now supports generally available K-nearest neighbors vector similarity search using COSINE_DISTANCE(), EUCLIDEAN_DISTANCE(), and DOT_PRODUCT() functions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)

## Supporting Pages

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After you've generated embeddings from your Spanner data, you can perform a similarity search using vector distance functions.
- What's next Learn more about how to perform a vector search by finding the k-nearest neighbor .
- Function Description Formula Relationship to increasing similarity Dot product Calculates the cosine of angle \(\theta\) multiplied by the product of corresponding vector magnitudes. \(a 1b 1+a 2b 2+...+a nb n\) \(= a b cos(\theta)\) Increases Cosine distance The cosine distance function subtracts the cosine similarity from one ( cosine distance() = 1 - cosine similarity ).
- 1 - \(\frac{a^T b}{ a \cdot b }\) Decreases Euclidean distance Measures the straight line distance between two vectors. \(\sqrt{(a 1-b 1)^2+(a 2-b 2)^2+...+(a N-b N)^2}\) Decreases Choose a similarity measure Depending on whether or not all your vector embeddings are normalized, you can determine which similarity measure to use to find similarity.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cymbal Phoenix See and be seen 87 0.525101413779242 Lights with the Phoenix bike lights... ------------------+--------------------+----------------+-------------------- / Scale vector search to use approximate nearest neighbors The previous vector search example uses exact, K-nearest neighbors (KNN) vector search .
- Approximate nearest neighbors (ANN) vector search becomes useful in these situations.
- The following topics help you learn how to: Create an Google Cloud project Create a Spanner instance Create a database Create an embedding model Load data into Spanner Generate embeddings for data Perform KNN vector similarity search Scale vector search with a vector index Clean up resources To learn about Spanner pricing details, see Spanner pricing .
- To scale and use ANN vector search in Spanner, do the following: Create a vector index Modify your query to use an ANN distance function Create a vector index Spanner accelerates ANN vector searches by using a specialized vector index that leverages Google Research's Scalable Nearest Neighbor (ScaNN) .

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn how to perform a similarity vector search by finding the K-nearest neighbors .
- GoogleSQL CREATE TABLE Products ( product id INT64 NOT NULL , name STRING ( MAX ), description STRING ( MAX ) ) PRIMARY KEY ( product id ); PostgreSQL CREATE TABLE Products ( product id INT8 NOT NULL , name TEXT , description TEXT , PRIMARY KEY ( product id ) ); Your goal is to generate vector embeddings for the description column in this table to find similar items to recommend to customers to improve their shopping experience using vector search .
- This is because the embedding vectors generated for the same piece of text might differ depending on the version of the model that you use; which is why you want to avoid using different model versions to generate embeddings in the same dataset.
- Home Documentation Databases Spanner Guides Send feedback Generate vector embeddings for textual data in bulk using partitioned DML Stay organized with collections Save and categorize content based on your preferences.


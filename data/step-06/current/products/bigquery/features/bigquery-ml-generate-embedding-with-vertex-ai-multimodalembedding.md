---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.517Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.GENERATE_EMBEDDING with Vertex AI multimodalembedding"
feature_slug: "bigquery-ml-generate-embedding-with-vertex-ai-multimodalembedding"
latest_feature_date: "2024-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "Vertex AI multimodalembedding"
  - "GENERATE_EMBEDDING multimodal"
  - "multimodalembedding"
  - "multimodal embeddings"
  - "multimodal embedding"
  - "remote embedding model"
  - "ML.GENERATE_EMBEDDING"
  - "video embeddings"
---

# BigQuery ML.GENERATE_EMBEDDING with Vertex AI multimodalembedding

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML.GENERATE_EMBEDDING now supports video embeddings through a remote model based on Vertex AI multimodalembedding.

## Extended Definition

BigQuery ML exposes embedding generation through the ML.GENERATE EMBEDDING SQL function (with AI.GENERATE EMBEDDING documented as the newer preferred version with the same functionality), allowing BigQuery to generate embeddings via remote multimodal embedding models. The docs explicitly describe multimodal embedding generation and support for visual inputs from `ObjectRef` columns or object tables, while noting the feature is in preview/Pre-GA. The provided excerpts do not explicitly state the model name as "Vertex AI multimodalembedding" or confirm video-only support.

## Evidence Summary

The release notes and vector-search pages provide evidence for BigQuery embedding generation via ML.GENERATE/AI.GENERATE EMBEDDING with remote multimodal models and visual ObjectRef/object-table inputs, but do not explicitly tie the feature to the Vertex AI multimodalembedding model name.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.
- AI.GENERATE EMBEDDING is the new, preferred version of ML.GENERATE EMBEDDING , which has the same functionality but with simplified column output names.
- Try this feature with the Generate text embeddings by using an open model and the ML.GENERATE EMBEDDING function tutorial.
- You can then use the ML.GENERATE EMBEDDING function with this remote model to generate embeddings.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.


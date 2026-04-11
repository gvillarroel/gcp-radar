---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.590Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery text embedding generation with NNLM"
feature_slug: "bigquery-text-embedding-generation-with-nnlm"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "SWIVEL embeddings"
  - "text embedding generation"
  - "NNLM embeddings"
  - "BERT embeddings"
  - "ML.GENERATE_EMBEDDING"
  - "SWIVEL"
  - "NNLM"
  - "BERT"
---

# BigQuery text embedding generation with NNLM

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Adds support for generating text embeddings in BigQuery using NNLM, SWIVEL, and BERT TensorFlow models.

## Extended Definition

BigQuery ML supports text-embedding workflows by letting users create remote models in BigQuery that point to Vertex AI endpoints (`CREATE MODEL ... REMOTE WITH CONNECTION ...`) and use SQL ML inference functions (for example `ML.PREDICT`) on those models. The BigQuery ML syntax reference also lists `ML.GENERATE EMBEDDING` as an available inference function in model-user journeys, and the vector-index text-search tutorial references a remote model specifically for hosted Vertex AI text embedding generation. The provided excerpts do not explicitly confirm NNLM or SWIVEL model names, so those model-specific details are not evidenced here.

## Evidence Summary

These pages provide evidence for BigQuery ML remote-model integration with Vertex AI and for `ML.GENERATE EMBEDDING` as a documented embedding-related ML function, but do not explicitly mention NNLM or SWIVEL in the supplied excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) ) The query results should look similar to the following: bq Enter this command to run the query that uses ML.PREDICT . bq query --use legacy sql=false \ 'SELECT FROM ML.PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) )' Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- If you select the new model in the Resources panel, information about the model appears below the Query editor . bq Create the remote model by entering the following CREATE MODEL statement: bq query -- use legacy sql = false \ " CREATE OR REPLACE MODEL PROJECT ID . bqml tutorial . bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID . us . bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) " Replace the following: PROJECT ID : your project name.
- In the query editor, enter this CREATE MODEL statement, and then click Run : CREATE OR REPLACE MODEL PROJECT ID .bqml tutorial.bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID .us.bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : your project name.
- After you create the model, verify that the model appears in the dataset: bq ls -m bqml tutorial The output is similar to the following: Id Model Type Labels Creation Time ---------------- ------------ -------- ----------------- bert sentiment 28 Jan 17 :39:43 Get predictions using ML.PREDICT You use the ML.PREDICT function to get sentiment predictions from the remote model.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.632Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML text embedding generation with TensorFlow models"
feature_slug: "bigquery-ml-text-embedding-generation-with-tensorflow-models"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
keywords:
  - "text embedding generation"
  - "generate text embeddings"
  - "BERT embeddings"
  - "NNLM embeddings"
  - "TensorFlow models"
  - "SWIVEL"
  - "NNLM"
  - "BERT"
---

# BigQuery ML text embedding generation with TensorFlow models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML can generate text embeddings using NNLM, SWIVEL, and BERT TensorFlow models.

## Extended Definition

BigQuery ML supports generating text embeddings by creating a remote model and invoking model-powered functions in BigQuery SQL, including `AI.GENERATE_EMBEDDING`, on text input data. The provided tutorials show this workflow using a remote model created from an external model endpoint and demonstrate writing generated embeddings to a table. The documentation also references alternative text-embedding approaches with pretrained TensorFlow models, but the excerpts do not explicitly confirm NNLM, SWIVEL, or BERT embeddings for this specific feature path.

## Evidence Summary

The cited pages confirm that BigQuery ML can use remote models and `AI.GENERATE_EMBEDDING` for text embedding workflows, while only indirectly mentioning TensorFlow alternatives and not validating the full NNLM/SWIVEL/BERT list in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)

## Supporting Pages

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.

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


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.362Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Remote models for Llama and Mistral in BigQuery ML"
feature_slug: "remote-models-for-llama-and-mistral-in-bigquery-ml"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
keywords:
  - "remote"
  - "models"
  - "llama"
  - "mistral"
  - "bigquery"
  - "ml"
  - "can"
  - "now"
---

# Remote models for Llama and Mistral in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can now create remote models backed by Llama and Mistral AI models in Vertex AI for text generation tasks.

## Extended Definition

BigQuery ML can now create remote models backed by Llama and Mistral AI models in Vertex AI for text generation tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In a BigQuery multi-region ( US , EU ) dataset, you can only create a remote model that connects to an endpoint deployed in a region within the same multi-region location ( US , EU ).

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Claude, Llama, and Mistral AI models in the EU multi-region can use the Vertex AI endpoint for any single region within the EU multi-region except for eu-west2 and eu-west6 .
- Processing locations For models other than remote models, BigQuery ML processes and stages data in the same location as the dataset that contains the data.
- Claude, Llama, and Mistral AI models in the US multi-region can use the Vertex AI endpoint for any single region within the US multi-region.
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . qwen3 embedding model REMOTE WITH CONNECTION DEFAULT OPTIONS ( HUGGING FACE MODEL ID = 'Qwen/Qwen3-Embedding-0.6B' ); The query takes up to 20 minutes to complete, after which the qwen3 embedding model model appears in the bqml tutorial dataset in the Explorer pane.
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.


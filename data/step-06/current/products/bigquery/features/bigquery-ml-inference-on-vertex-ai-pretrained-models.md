---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.562Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML inference on Vertex AI pretrained models"
feature_slug: "bigquery-ml-inference-on-vertex-ai-pretrained-models"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
keywords:
  - "bigquery"
  - "ml"
  - "inference"
  - "vertex"
  - "ai"
  - "pretrained"
  - "models"
  - "functions"
---

# BigQuery ML inference on Vertex AI pretrained models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML functions can run inference on Vertex AI pretrained models for natural language processing, translation, and computer vision tasks.

## Extended Definition

BigQuery ML functions can run inference on Vertex AI pretrained models for natural language processing, translation, and computer vision tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- In the Connection type list, select Vertex AI remote models, remote functions and BigLake (Cloud Resource) .
- Click the Vertex AI Models: BigQuery Federation solution card.

### "Tutorial: Run inference on an object table by using a classification model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- In the Connection type list, select Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
- Click the Vertex AI Models: BigQuery Federation solution card.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE resnet inference test . vision images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/vision/ .jpg' ] ); bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition='gs://cloud-samples-data/vision/ .jpg@us.lake-connection' \ --object metadata=SIMPLE \ resnet inference test . vision images Upload the model to Cloud Storage Get the model files and make them available in Cloud Storage: Download the ResNet 50 model to your local machine.

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- In the Connection type list, select Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
- Click the Vertex AI Models: BigQuery Federation solution card.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE mobilenet inference test . sample images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs:// BUCKET NAME /flowers/ ' ] ); Replace BUCKET NAME with the name of the bucket you previously created. bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition = 'gs:// BUCKET NAME /flowers/ @us.lake-connection' \ --object metadata = SIMPLE \ mobilenet inference test.sample images Replace BUCKET NAME with the name of the bucket you previously created.


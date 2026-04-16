---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.615Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML remote inference with Vertex AI Prediction"
feature_slug: "bigquery-ml-remote-inference-with-vertex-ai-prediction"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet"
keywords:
  - "bigquery"
  - "ml"
  - "remote"
  - "inference"
  - "vertex"
  - "ai"
  - "prediction"
  - "can"
---

# BigQuery ML remote inference with Vertex AI Prediction

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can perform inference against models hosted remotely on Vertex AI Prediction.

## Extended Definition

BigQuery ML can perform inference against models hosted remotely on Vertex AI Prediction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In this tutorial, you register a Vertex AI endpoint as a remote model in BigQuery.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a BigQuery Cloud resource connection You must have a Cloud resource connection to connect to a Vertex AI endpoint.

### "Tutorial: Run inference on an object table by using a classification model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE resnet inference test . vision images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/vision/ .jpg' ] ); bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition='gs://cloud-samples-data/vision/ .jpg@us.lake-connection' \ --object metadata=SIMPLE \ resnet inference test . vision images Upload the model to Cloud Storage Get the model files and make them available in Cloud Storage: Download the ResNet 50 model to your local machine.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL resnet inference test.resnet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME / ' ); Replace BUCKET NAME with the name of the bucket you previously created.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE SCHEMA PROJECT ID .resnet inference test ; Replace PROJECT ID with your project ID. bq In the Google Cloud console, activate Cloud Shell.

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE mobilenet inference test . sample images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs:// BUCKET NAME /flowers/ ' ] ); Replace BUCKET NAME with the name of the bucket you previously created. bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition = 'gs:// BUCKET NAME /flowers/ @us.lake-connection' \ --object metadata = SIMPLE \ mobilenet inference test.sample images Replace BUCKET NAME with the name of the bucket you previously created.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL mobilenet inference test.mobilenet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME /mobilenet/ ' ); Replace BUCKET NAME with the name of the bucket you previously created.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE SCHEMA PROJECT ID .mobilenet inference test ; Replace PROJECT ID with your project ID. bq In the Google Cloud console, activate Cloud Shell.


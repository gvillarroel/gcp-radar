---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.563Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Imported model inference in BigQuery ML"
feature_slug: "imported-model-inference-in-bigquery-ml"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "imported"
  - "model"
  - "inference"
  - "bigquery"
  - "ml"
  - "can"
  - "import"
  - "onnx"
---

# Imported model inference in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can import ONNX, XGBoost, and TensorFlow Lite models for inference in the BigQuery ML inference engine.

## Extended Definition

BigQuery ML can import ONNX, XGBoost, and TensorFlow Lite models for inference in the BigQuery ML inference engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### "Tutorial: Run inference on an object table by using a classification model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Create a reservation To use an imported model with an object table, you must create a reservation that uses the BigQuery Enterprise or Enterprise Plus edition , and then create a reservation assignment that uses the QUERY job type.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE resnet inference test . vision images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/vision/ .jpg' ] ); bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition='gs://cloud-samples-data/vision/ .jpg@us.lake-connection' \ --object metadata=SIMPLE \ resnet inference test . vision images Upload the model to Cloud Storage Get the model files and make them available in Cloud Storage: Download the ResNet 50 model to your local machine.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL resnet inference test.resnet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME / ' ); Replace BUCKET NAME with the name of the bucket you previously created.

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Create a reservation To use an imported model with an object table, you must create a reservation that uses the BigQuery Enterprise or Enterprise Plus edition , and then create a reservation assignment that uses the QUERY job type.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL mobilenet inference test.mobilenet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME /mobilenet/ ' ); Replace BUCKET NAME with the name of the bucket you previously created.
- Run inference Run inference on the sample images object table using the mobilenet model: Go to the BigQuery page.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information about supported SQL statements and functions for each model type, see the following documents: End-to-end user journeys for generative AI models End-to-end user journeys for time series forecasting models End-to-end user journeys for ML models End-to-end user journeys for imported models Contribution analysis user journey Required permissions To create a dataset to store the model, you need the bigquery.datasets.create IAM permission.
- Imported TensorFlow model , Imported TensorFlow lite model , Imported ONNX model , Imported XGBoost model FEEDBACK TYPE Specifies feedback type for matrix factorization models which changes the algorithm that is used during training.
- CREATE MODEL statement for TensorFlow Lite models 'ONNX' Create a model by importing an ONNX model into BigQuery.
- CREATE MODEL statement for ONNX models 'XGBOOST' Create a model by importing a XGBoost model into BigQuery.


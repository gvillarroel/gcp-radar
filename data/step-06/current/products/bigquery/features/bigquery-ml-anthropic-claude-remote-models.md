---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.374Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Anthropic Claude remote models"
feature_slug: "bigquery-ml-anthropic-claude-remote-models"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "bigquery"
  - "ml"
  - "anthropic"
  - "claude"
  - "remote"
  - "models"
  - "supports"
  - "based"
---

# BigQuery ML Anthropic Claude remote models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports remote models based on Anthropic Claude in Vertex AI for text generation and evaluation.

## Extended Definition

BigQuery ML supports remote models based on Anthropic Claude in Vertex AI for text generation and evaluation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- Costs In this document, you use the following billable components of Google Cloud: BigQuery BigQuery ML Vertex AI To generate a cost estimate based on your projected usage, use the pricing calculator .

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Processing locations For models other than remote models, BigQuery ML processes and stages data in the same location as the dataset that contains the data.
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.
- Region description Region name Vertex AI deployed models Cloud Natural Language API Cloud Translation API Cloud Vision API Document AI API Speech-to-Text API Americas Columbus, Ohio us-east5 Dallas us-south1 ● Iowa us-central1 ● ● Las Vegas us-west4 ● Los Angeles us-west2 ● Mexico northamerica-south1 Montréal northamerica-northeast1 ● Northern Virginia us-east4 ● Oregon us-west1 ● ● Salt Lake City us-west3 ● São Paulo southamerica-east1 ● Santiago southamerica-west1 South Carolina us-east1 ● ● Toronto northamerica-northeast2 ● Europe Belgium europe-west1 ● ● Finland europe-north1 Frankfurt europe-west3 ● ● London europe-west2 ● ● Madrid europe-southwest1 Milan europe-west8 ● Netherlands europe-west4 ● ● Paris europe-west9 ● Stockholm europe-north2 Turin europe-west12 Warsaw europe-central2 ● Zürich europe-west6 ● Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 ● Jakarta asia-southeast2 ● Melbourne australia-southeast2 Mumbai asia-south1 ● ● Osaka asia-northeast2 Seoul asia-northeast3 ● Singapore asia-southeast1 ● ● Sydney australia-southeast1 ● ● Taiwan asia-east1 ● Tokyo asia-northeast1 ● ● Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 ● If the dataset in which you are creating the remote model is in a single region, the Vertex AI model endpoint must be in the same region.
- Virginia) aws-us-east-1 us-east4 AWS - US West (Oregon) aws-us-west-2 us-west1 AWS - Asia Pacific (Seoul) aws-ap-northeast-2 asia-northeast3 AWS - Asia Pacific (Sydney) aws-ap-southeast-2 australia-southeast1 AWS - Europe (Ireland) aws-eu-west-1 europe-west1 AWS - Europe (Frankfurt) aws-eu-central-1 europe-west3 Azure Azure - East US 2 azure-eastus2 us-east4 BigQuery ML locations The following sections describe supported locations for BigQuery ML models.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- To create a model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.connections.delegate (for remote models) The following predefined IAM roles grant these permissions: BigQuery Studio Admin BigQuery Admin For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- Remote models over open models ENDPOINT IDLE TTL Specifies the duration of inactivity after which a BigQuery-managed Vertex AI model is automatically undeployed from a Vertex AI endpoint.


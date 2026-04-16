---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.164Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Forecasting window configuration during model training"
feature_slug: "forecasting-window-configuration-during-model-training"
latest_feature_date: "2022-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "forecasting"
  - "window"
  - "configuration"
  - "during"
  - "model"
  - "training"
  - "vertex"
  - "ai"
---

# Forecasting window configuration during model training

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Forecasting lets users configure forecasting windows as part of model training.

## Extended Definition

Vertex AI Forecasting lets users configure forecasting windows as part of model training.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- AutoML models When training AutoML models, Vertex AI uses default schemas.
- The default schema includes the following fields: id : string displayNames : string type : enum timeSegmentStart : string timeSegmentEnd : string confidence : float The following is an example CSV file with sale dollars as the target column: date,store name,city,zip code,county,sale dollars 2020-03-17,Thriftway,,,,774.08999999999992 2020-03-10,Thriftway,,,,1160.67 2020-03-03,Thriftway,,,,2247.24 2020-06-08,New Star / Fort Dodge,,,,753.98 2020-06-01,New Star / Fort Dodge,,,,967.73 2020-01-10,Casey's General Store #1280 / Fort Dodge,,,,1040.92 2020-10-30,KUM & GO #76 / ADAIR,Adair,50002,ADAIR,1387.02 The TargetFieldDataRemoverOp component removes the target column before sending the file to the BatchPredictionJob component: date,store name,city,zip code,county 2020-03-17,Thriftway,nan,nan,nan 2020-03-10,Thriftway,nan,nan,nan 2020-03-03,Thriftway,nan,nan,nan 2020-06-08,New Star / Fort Dodge,nan,nan,nan 2020-06-01,New Star / Fort Dodge,nan,nan,nan 2020-01-10,Casey's General Store #1280 / Fort Dodge,nan,nan,nan 2020-10-30,KUM & GO #76 / ADAIR,Adair,50002.0,ADAIR The following is an example of a batch prediction output file without the target column of sale dollars : { "instance": { "content": "gs://kbn-us-central1-test/datasets/text/happy 11556.txt", "mimeType":"text/plain" }, "prediction": { "ids": ["7903916851837534208","3292230833410146304","986387824196452352","2139309328803299328","5598073842623840256","6750995347230687232","4559431178561519616"], "displayNames": ["affection","bonding","achievement","exercise","nature","enjoy the moment","leisure"], "confidences": [0.99483216,0.005162797,4.1117933E-6,3.9997E-7,2.4624453E-7,1.9969502E-7,1.16997434E-7] } } This table describes the required parameters for the ModelEvaluationForecastingOp component with a tabular model: Evaluation component parameter Required target field name Yes prediction label column Not required for forecasting models. prediction score column Not required for default schema.
- The following configuration creates a single slice containing data where the age is between 1 and 3 and the species is "dog" : { "age": { "range": { "low": 1, "high": 3 } }, "species": { "value": { "string value": "dog" } } } The following configuration creates multiple slices—one for each unique species in the dataset, where the age is 1 . { "species": { "all values": { "value": true } }, "age": { "value": { "float value": 1.0 } } } The resulting slices contain the following data from the example dataset: Slice 1: age:1 and species:"dog" Slice 2: age:1 and species:"cat" Slice 3: age:1 and species:"rabbit" Format slices To format slices for the ModelEvaluationClassificationOp component, do the following: Create a slicing spec .

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .


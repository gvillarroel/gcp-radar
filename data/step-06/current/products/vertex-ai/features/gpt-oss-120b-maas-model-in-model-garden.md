---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.058Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "GPT-OSS-120B MaaS model in Model Garden"
feature_slug: "gpt-oss-120b-maas-model-in-model-garden"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
keywords:
  - "gpt"
  - "oss"
  - "120b"
  - "maas"
  - "model"
  - "garden"
  - "openai"
  - "now"
---

# GPT-OSS-120B MaaS model in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

OpenAI's GPT-OSS-120B model is now available as a Model-as-a-Service (MaaS) model in Vertex AI Model Garden.

## Extended Definition

OpenAI's GPT-OSS-120B model is now available as a Model-as-a-Service (MaaS) model in Vertex AI Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)

## Supporting Pages

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.modelGardenEula Methods accept POST /v1beta1/{parent}/modelGardenEula:accept Accepts the EULA acceptance status of a publisher model. check POST /v1beta1/{parent}/modelGardenEula:check Checks the EULA acceptance status of a publisher model.
- REST Resource: v1beta1.publishers.models Methods get GET /v1beta1/{name} Gets a Model Garden publisher model. list GET /v1beta1/{parent}/models Lists publisher models in Model Garden.
- REST Resource: v1.publishers.models Methods get GET /v1/{name} Gets a Model Garden publisher model.
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- The default schema includes the following fields: id : string displayNames : string type : enum timeSegmentStart : string timeSegmentEnd : string confidence : float The following is an example CSV file with sale dollars as the target column: date,store name,city,zip code,county,sale dollars 2020-03-17,Thriftway,,,,774.08999999999992 2020-03-10,Thriftway,,,,1160.67 2020-03-03,Thriftway,,,,2247.24 2020-06-08,New Star / Fort Dodge,,,,753.98 2020-06-01,New Star / Fort Dodge,,,,967.73 2020-01-10,Casey's General Store #1280 / Fort Dodge,,,,1040.92 2020-10-30,KUM & GO #76 / ADAIR,Adair,50002,ADAIR,1387.02 The TargetFieldDataRemoverOp component removes the target column before sending the file to the BatchPredictionJob component: date,store name,city,zip code,county 2020-03-17,Thriftway,nan,nan,nan 2020-03-10,Thriftway,nan,nan,nan 2020-03-03,Thriftway,nan,nan,nan 2020-06-08,New Star / Fort Dodge,nan,nan,nan 2020-06-01,New Star / Fort Dodge,nan,nan,nan 2020-01-10,Casey's General Store #1280 / Fort Dodge,nan,nan,nan 2020-10-30,KUM & GO #76 / ADAIR,Adair,50002.0,ADAIR The following is an example of a batch prediction output file without the target column of sale dollars : { "instance": { "content": "gs://kbn-us-central1-test/datasets/text/happy 11556.txt", "mimeType":"text/plain" }, "prediction": { "ids": ["7903916851837534208","3292230833410146304","986387824196452352","2139309328803299328","5598073842623840256","6750995347230687232","4559431178561519616"], "displayNames": ["affection","bonding","achievement","exercise","nature","enjoy the moment","leisure"], "confidences": [0.99483216,0.005162797,4.1117933E-6,3.9997E-7,2.4624453E-7,1.9969502E-7,1.16997434E-7] } } This table describes the required parameters for the ModelEvaluationForecastingOp component with a tabular model: Evaluation component parameter Required target field name Yes prediction label column Not required for forecasting models. prediction score column Not required for default schema.
- The following is an example CSV dataset with species as the target column: petal length,petal width,sepal length,sepal width,species 6.4,2.8,5.6,2.2,2 5.0,2.3,3.3,1.0,1 4.9,2.5,4.5,1.7,2 4.9,3.1,1.5,0.1,0 The TargetFieldDataRemoverOp component removes the target column before sending the file to the batch prediction component: petal length,petal width,sepal length,sepal width 6.4,2.8,5.6,2.2 5.0,2.3,3.3,1.0 4.9,2.5,4.5,1.7 4.9,3.1,1.5,0.1 The following is an example of a batch prediction output file without the target column of species : { "instance": [5.6, 2.5, 3.9, 1.1], "prediction": [0.0005816521588712931, 0.9989032745361328, 0.0005150380893610418] } { "instance": [5.0, 3.6, 1.4, 0.2], "prediction": [0.999255359172821, 0.000527293945197016, 0.00021737271163146943] } { "instance": [6.0, 2.9, 4.5, 1.5], "prediction": [0.00025063654175028205, 0.9994204044342041, 0.00032893591560423374] } This table describes the required parameters for the ModelEvaluationClassificationOp component with a custom-trained model: Evaluation component parameter Required target field name Yes prediction label column Must be empty; this column doesn't exist in custom-trained models. prediction score column Not required for default schema; is set automatically for JSONL , CSV , or BIGQUERY formats. evaluation class labels Yes.
- You can view and download schema files from the following Cloud Storage location: gs://google-cloud-aiplatform/schema/modelevaluation/ The following tabs show example batch prediction output files and required input parameters for each Tabular model type parameters: Classification The default schema includes the following fields: scores : array classes : array The following is an example of a batch prediction output file with the target column of male : { "instance": { "male": "1", "age": "49", "heartRate": "67", "education": "medium high", "totChol": "282", "diaBP": "79", "BPMeds": "0", "currentSmoker": "current high", "cigsPerDay": "25", "prevalentStroke": "stroke 0", "prevalentHyp": "hyp 0", "TenYearCHD": "FALSE", "diabetes": "0", "sysBP": "134", "BMI": "26.87", "glucose": "78" }, "prediction": { "scores": [0.3666940927505493, 0.6333059072494507], "classes": ["0", "1"] } } This table describes the required parameters for the ModelEvaluationClassificationOp component with a tabular model: Evaluation component parameter Required target field name Yes prediction label column Not required for default schema.
- Regression The default schema includes the following fields: value : float lower bound : float upper bound : float The following is an example of a batch prediction output file with the target column of age : { "instance": { "BPMeds": "0", "diabetes": "0", "diaBP": "65", "cigsPerDay": "45", "prevalentHyp": "hyp 0", "age": "46", "male": "1", "sysBP": "112.5", "glucose": "78", "BMI": "27.48", "TenYearCHD": "FALSE", "totChol": "209", "education": "high", "prevalentStroke": "stroke 0", "heartRate": "75", "currentSmoker": "current high" }, "prediction": { "value": 44.96103286743164, "lower bound": 44.61349868774414, "upper bound": 44.590206146240234 } } This table describes the required parameters for the ModelEvaluationRegressionOp component with a tabular model: Evaluation component parameter Required target field name Yes prediction label column Not required for regression models. prediction score column Not required for default schema.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .


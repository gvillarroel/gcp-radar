---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.091Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI model deployment parameter customization"
feature_slug: "vertex-ai-model-deployment-parameter-customization"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "vertex"
  - "ai"
  - "model"
  - "deployment"
  - "parameter"
  - "customization"
  - "now"
  - "supports"
---

# Vertex AI model deployment parameter customization

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports additional configurable deployment parameters during model uploads, including shared memory allocation and custom startup and readiness probes.

## Extended Definition

Vertex AI now supports additional configurable deployment parameters during model uploads, including shared memory allocation and custom startup and readiness probes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Package training application into a Python source distribution Configure and run training job in a prebuilt container Package model artifacts in a model archive file Upload model for deployment Deploy model using a prebuilt container for prediction Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Get started with PyTorch on Ray on Vertex AI .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines Importing models to Vertex AI Endpoint All model files used for the model deployment under the endpoint.
- Deploy and manage public endpoints Deploy and manage index endpoints in a VPC network Vector Search Private Service Connect Colab Enterprise runtime The boot disk and data disks of the runtime's VM Use customer-managed encryption keys (CMEK) in Colab Enterprise Colab Enterprise notebook The notebook file and its comments Use customer-managed encryption keys (CMEK) in Colab Enterprise Vertex AI Agent Engine The copy of your agent source files, including code, scripts, and any dependency files The container images built from your agent source files The running instances deployed from your agent container images Vertex AI Agent Engine overview CMEK support for Generative AI tuning pipelines CMEK support is provided in the tuning pipeline of the following models: BERT T5 image-generation (GPU) Limitations CMEK support isn't provided in the following: AutoML image model batch prediction ( BatchPredictionJob ) TPU tuning Configure CMEK for your resources The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Vertex AI encrypter and decrypter permissions for your key, and create resources that use CMEK.
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines BatchPredictionJob (excludes AutoML image batchPrediction) Any temporary files (for example, model files, logs, VM disks) used in the job to proceed the batch prediction job.
- Get batch predictions and explanations for a classification or regression model Get predictions for a forecast model ModelDeploymentMonitoringJob Any temporary files (for example, training dataset files, logs, VM disks) used in the job to process the model deployment monitoring job.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Package training application into a Python source distribution Configure and run training job in a prebuilt container Package model artifacts in a model archive file Upload model for deployment Deploy model using a prebuilt container for prediction Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Get started with PyTorch on Ray on Vertex AI .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .


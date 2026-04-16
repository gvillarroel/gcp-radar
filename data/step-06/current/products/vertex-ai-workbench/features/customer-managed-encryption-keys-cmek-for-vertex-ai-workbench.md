---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.362Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Customer-managed encryption keys (CMEK) for Vertex AI Workbench"
feature_slug: "customer-managed-encryption-keys-cmek-for-vertex-ai-workbench"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "vertex"
  - "ai"
  - "workbench"
---

# Customer-managed encryption keys (CMEK) for Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

Workbench supports encrypting data using customer-managed encryption keys; Vertex AI Workbench supports securing instances with customer-managed encryption keys.

## Extended Definition

Workbench supports encrypting data using customer-managed encryption keys; Vertex AI Workbench supports securing instances with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train)

## Supporting Pages

### "Fine-tune an image classification model with custom data on Vertex AI Pipelines\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image classification python3 -m pip install "kfp<2.0.0" "google-cloud-aiplatform>=1.16.0" --upgrade --quiet from kfp import components from kfp.v2 import dsl %% Loading components upload Tensorflow model to Google Cloud Vertex AI op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/399405402d95f4a011e2d2e967c96f8508ba5688/community-content/pipeline components/google-cloud/Vertex AI/Models/Upload Tensorflow model/component.yaml' ) deploy model to endpoint op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/399405402d95f4a011e2d2e967c96f8508ba5688/community-content/pipeline components/google-cloud/Vertex AI/Models/Deploy to endpoint/component.yaml' ) transcode imagedataset tfrecord from csv op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/transcode tfrecord image dataset from csv/component.yaml' ) load image classification model from tfhub op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/b5b65198a6c2ffe8c0fa2aa70127e3325752df68/community-content/pipeline components/image ml model training/load image classification model/component.yaml' ) preprocess image data op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/preprocess image data/component.yaml' ) train tensorflow image classification model op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/train image classification model/component.yaml' ) %% Pipeline definition def image classification pipeline (): class names = [ 'daisy' , 'dandelion' , 'roses' , 'sunflowers' , 'tulips' ] csv image data path = 'gs://cloud-samples-data/ai-platform/flowers/flowers.csv' deploy model = False image data = dsl . importer ( artifact uri = csv image data path , artifact class = dsl .
- Dataset ) . output image tfrecord data = transcode imagedataset tfrecord from csv op ( csv image data path = image data , class names = class names ) . outputs [ 'tfrecord image data path' ] loaded model outputs = load image classification model from tfhub op ( class names = class names , ) . outputs preprocessed data = preprocess image data op ( image tfrecord data , height width path = loaded model outputs [ 'image size path' ], ) . outputs trained model = ( train tensorflow image classification model op ( preprocessed training data path = preprocessed data [ 'preprocessed training data path' ], preprocessed validation data path = preprocessed data [ 'preprocessed validation data path' ], model path = loaded model outputs [ 'loaded model path' ]) . set cpu limit ( '96' ) . set memory limit ( '128G' ) . add node selector constraint ( 'cloud.google.com/gke-accelerator' , 'NVIDIA TESLA A100' ) . set gpu limit ( '8' ) . outputs [ 'trained model path' ]) vertex model name = upload Tensorflow model to Google Cloud Vertex AI op ( model = trained model , ) . outputs [ 'model name' ] Deploying the model might incur additional costs over time if deploy model : vertex endpoint name = deploy model to endpoint op ( model name = vertex model name , ) . outputs [ 'endpoint name' ] pipeline func = image classification pipeline %% Pipeline submission if name == ' main ' : from google.cloud import aiplatform aiplatform .
- Home Documentation AI and ML Vertex AI Send feedback Fine-tune an image classification model with custom data on Vertex AI Pipelines Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to use Vertex AI Pipelines to run an end-to-end ML workflow, including the following tasks: Import and transform data.

### "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello image data: Evaluating and analyzing model performance Stay organized with collections Save and categorize content based on your preferences.

### "Hello tabular data: Create a dataset and train an AutoML classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello tabular data: Create a dataset and train an AutoML classification model Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI examines the source data type and feature values and infers how it will use that feature in model training.
- Create a tabular dataset In the Google Cloud console, in the Vertex AI section, go to the Datasets page.
- Vertex AI offers two model training methods, AutoML and custom training.


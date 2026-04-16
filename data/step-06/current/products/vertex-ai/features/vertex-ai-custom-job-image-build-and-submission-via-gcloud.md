---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.178Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI custom job image build and submission via gcloud"
feature_slug: "vertex-ai-custom-job-image-build-and-submission-via-gcloud"
latest_feature_date: "2021-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification"
keywords:
  - "vertex"
  - "ai"
  - "custom"
  - "job"
  - "image"
  - "build"
  - "submission"
  - "via"
---

# Vertex AI custom job image build and submission via gcloud

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The `gcloud beta ai custom-jobs create` command can now build a Docker image from local training code, push it to Container Registry, and create a CustomJob resource.

## Extended Definition

The `gcloud beta ai custom-jobs create` command can now build a Docker image from local training code, push it to Container Registry, and create a CustomJob resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)

## Supporting Pages

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Serve predictions from a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- Previous arrow back Train a custom image classification model Next Clean up your project arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- The function takes the URL of an image as input and preprocesses the image into this format before requesting a prediction from the Vertex AI endpoint.

### "Fine-tune an image classification model with custom data on Vertex AI Pipelines\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset ) . output image tfrecord data = transcode imagedataset tfrecord from csv op ( csv image data path = image data , class names = class names ) . outputs [ 'tfrecord image data path' ] loaded model outputs = load image classification model from tfhub op ( class names = class names , ) . outputs preprocessed data = preprocess image data op ( image tfrecord data , height width path = loaded model outputs [ 'image size path' ], ) . outputs trained model = ( train tensorflow image classification model op ( preprocessed training data path = preprocessed data [ 'preprocessed training data path' ], preprocessed validation data path = preprocessed data [ 'preprocessed validation data path' ], model path = loaded model outputs [ 'loaded model path' ]) . set cpu limit ( '96' ) . set memory limit ( '128G' ) . add node selector constraint ( 'cloud.google.com/gke-accelerator' , 'NVIDIA TESLA A100' ) . set gpu limit ( '8' ) . outputs [ 'trained model path' ]) vertex model name = upload Tensorflow model to Google Cloud Vertex AI op ( model = trained model , ) . outputs [ 'model name' ] Deploying the model might incur additional costs over time if deploy model : vertex endpoint name = deploy model to endpoint op ( model name = vertex model name , ) . outputs [ 'endpoint name' ] pipeline func = image classification pipeline %% Pipeline submission if name == ' main ' : from google.cloud import aiplatform aiplatform .
- Home Documentation AI and ML Vertex AI Send feedback Fine-tune an image classification model with custom data on Vertex AI Pipelines Stay organized with collections Save and categorize content based on your preferences.
- Image classification python3 -m pip install "kfp<2.0.0" "google-cloud-aiplatform>=1.16.0" --upgrade --quiet from kfp import components from kfp.v2 import dsl %% Loading components upload Tensorflow model to Google Cloud Vertex AI op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/399405402d95f4a011e2d2e967c96f8508ba5688/community-content/pipeline components/google-cloud/Vertex AI/Models/Upload Tensorflow model/component.yaml' ) deploy model to endpoint op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/399405402d95f4a011e2d2e967c96f8508ba5688/community-content/pipeline components/google-cloud/Vertex AI/Models/Deploy to endpoint/component.yaml' ) transcode imagedataset tfrecord from csv op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/transcode tfrecord image dataset from csv/component.yaml' ) load image classification model from tfhub op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/b5b65198a6c2ffe8c0fa2aa70127e3325752df68/community-content/pipeline components/image ml model training/load image classification model/component.yaml' ) preprocess image data op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/preprocess image data/component.yaml' ) train tensorflow image classification model op = components . load component from url ( 'https://raw.githubusercontent.com/GoogleCloudPlatform/vertex-ai-samples/main/community-content/pipeline components/image ml model training/train image classification model/component.yaml' ) %% Pipeline definition def image classification pipeline (): class names = [ 'daisy' , 'dandelion' , 'roses' , 'sunflowers' , 'tulips' ] csv image data path = 'gs://cloud-samples-data/ai-platform/flowers/flowers.csv' deploy model = False image data = dsl . importer ( artifact uri = csv image data path , artifact class = dsl .
- Install the Kubeflow Pipelines SDK: python3 -m pip install "kfp<2.0.0" "google-cloud-aiplatform>=1.16.0" --upgrade --quiet Run the ML model training pipeline The sample code does the following: Loads components from a component repository to be used as pipeline building blocks.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .


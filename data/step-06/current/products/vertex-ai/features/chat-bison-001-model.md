---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.130Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "chat-bison@001 model"
feature_slug: "chat-bison-001-model"
latest_feature_date: "2023-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring"
keywords:
  - "chat"
  - "bison"
  - "001"
  - "model"
  - "was"
  - "updated"
  - "follow"
  - "instructions"
---

# chat-bison@001 model

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The chat-bison@001 model was updated to follow instructions in the context field more effectively.

## Extended Definition

The chat-bison@001 model was updated to follow instructions in the context field more effectively.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- In this tutorial, you'll complete the following steps: Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench model monitoring v2 Model Monitoring for Vertex AI Custom Model Online Prediction .
- In this tutorial, you'll complete the following steps: Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Registry Get started with Vertex AI Model Registry .
- Make a streaming prediction Load a pretrained chat model.
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .

### "Enable Cloud Profiler for debugging model training performance debugging\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable Profiler To enable Profiler for your training job, add the following to your training script: Add the cloud profiler import at your top level imports: from google.cloud.aiplatform.training utils import cloud profiler Initialize the cloud profiler plugin by adding: cloud profiler . init () Example Here's a sample training script: #!/usr/bin/env python import tensorflow as tf import argparse import os from google.cloud.aiplatform.training utils import cloud profiler import time """Train an mnist model and use cloud profiler for profiling.""" def create model (): model = tf . keras . models .
- Notebook To see examples of how to profile model training performance, run the following notebooks in the environment of your choice: "Profile model training performance using Cloud Profiler": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Profile model training performance using Cloud Profiler in custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next See the Tensorflow Profiler documentation to learn about the profiler tools and how to use them to optimize model performance.
- To see an example of how to profile model training performance, run the "Profile model training performance using Cloud Profiler in custom training with prebuilt container" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to enable Cloud Profiler so you can debug model training performance for your serverless training jobs.
- MultiWorkerMirroredStrategy () with strategy . scope (): model = create model () model . compile ( optimizer = "adam" , loss = tf . keras . losses . sparse categorical crossentropy , metrics = [ "accuracy" ], ) else : model = create model () model . compile ( optimizer = "adam" , loss = tf . keras . losses . sparse categorical crossentropy , metrics = [ "accuracy" ], ) Initialize the profiler. cloud profiler . init () Use AIP TENSORBOARD LOG DIR to update where logs are written to. tensorboard callback = tf . keras . callbacks .

### Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID ", "createTime": "2021-07-22T23:18:31.339972Z", "updateTime": "2021-07-29T22:24:40.221821Z", "etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=", "monitoringConfig": { "snapshotAnalysis": { "monitoringIntervalDays": " DURATION IN DAYS ", "stalenessDays": " STALENESS DAYS " } }, "numericalThresholdConfig": { "value": " NUMERICAL THRESHOLD VALUE " }, "categoricalThresholdConfig": { "value": " CATEGORICAL THRESHOLD VALUE " }, "importFeatureAnalysis": { "state": " IMPORT FEATURE ANALYSIS STATE ", "anomalyDetectionBaseline": " IMPORT FEATURE ANALYSIS BASELINE " } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( FeaturestoreServiceClient featurestoreServiceClient = FeaturestoreServiceClient . create ( featurestoreServiceSettings )) { FeaturestoreMonitoringConfig featurestoreMonitoringConfig = FeaturestoreMonitoringConfig . newBuilder () . setSnapshotAnalysis ( SnapshotAnalysis . newBuilder (). setMonitoringIntervalDays ( monitoringIntervalDays )) . build (); EntityType entityType = EntityType . newBuilder () . setName ( EntityTypeName . of ( project , location , featurestoreId , entityTypeId ). toString ()) . setMonitoringConfig ( featurestoreMonitoringConfig ) . build (); UpdateEntityTypeRequest updateEntityTypeRequest = UpdateEntityTypeRequest . newBuilder (). setEntityType ( entityType ). build (); EntityType entityTypeResponse = featurestoreServiceClient . updateEntityType ( updateEntityTypeRequest ); System . out . println ( "Update Entity Type Monitoring Response" ); System . out . println ( entityTypeResponse ); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vertex AI quickstart using client libraries .
- You can use the OPERATION ID in the response to get the status of the operation. { "name": "projects/ PROJECT ID /locations/ LOCATION ID /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.ui.CreateEntityTypeOperationMetadata", "genericMetadata": { "createTime": "2022-04-29T20:29:05.206525Z", "updateTime": "2022-04-29T20:29:05.206525Z" } } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- SECONDS ); System . out . println ( "Create Entity Type Monitoring Response" ); System . out . format ( "Name: %s%n" , entityTypeResponse . getName ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vertex AI quickstart using client libraries .


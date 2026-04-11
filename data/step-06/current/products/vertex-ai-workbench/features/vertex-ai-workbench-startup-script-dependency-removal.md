---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.509Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench startup script dependency removal"
feature_slug: "vertex-ai-workbench-startup-script-dependency-removal"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script"
  - "https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "startup"
  - "script"
  - "dependency"
  - "removal"
  - "the"
---

# Vertex AI Workbench startup script dependency removal

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances.

## Extended Definition

The Vertex AI Workbench M139 release removed the startup script dependency on the gs://dl-platform-public-configs location for instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script)
- [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks)

## Supporting Pages

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Cloud (Vertex AI) training Within the training script Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Autologging .

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Cloud (Vertex AI) training Within the training script Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Autologging .

### Create a training script \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-training-script)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- RMSprop ( lr = 0.001 ) model . compile ( loss = "categorical crossentropy" , metrics = [ "accuracy" ], optimizer = optimizer ) return model Create the model model = create model ( num features = dataset train . flat shapes [ 0 ] . dims [ 0 ] . value ) Set up datasets dataset train = dataset train . batch ( args . batch size ) dataset validation = dataset validation . batch ( args . batch size ) Train the model model . fit ( dataset train , epochs = args . epochs , validation data = dataset validation ) tf . saved model . save ( model , os . getenv ( "AIP MODEL DIR" )) After you create the script, it appears in the root folder of your notebook: Define arguments for your training script You pass the following command-line arguments to your training script: label column - This identifies the column in your data that contains what you want to predict.
- To define the arguments that are passed to your script, run the following code: JOB NAME = "custom job unique" EPOCHS = 20 BATCH SIZE = 10 CMDARGS = [ "--label column=" + LABEL COLUMN, "--epochs=" + str(EPOCHS), "--batch size=" + str(BATCH SIZE), ] Previous arrow back Create a dataset Next Train a model arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To create your training script, run the following code in your notebook: %% writefile task . py import argparse import numpy as np import os import pandas as pd import tensorflow as tf from google.cloud import bigquery from google.cloud import storage Read environmental variables training data uri = os . getenv ( "AIP TRAINING DATA URI" ) validation data uri = os . getenv ( "AIP VALIDATION DATA URI" ) test data uri = os . getenv ( "AIP TEST DATA URI" ) Read args parser = argparse .
- ArgumentParser () parser . add argument ( '--label column' , required = True , type = str ) parser . add argument ( '--epochs' , default = 10 , type = int ) parser . add argument ( '--batch size' , default = 10 , type = int ) args = parser . parse args () Set up training variables LABEL COLUMN = args . label column See https://cloud.google.com/vertex-ai/docs/workbench/managed/executor#explicit-project-selection for issues regarding permissions.

### Ray on Vertex AI notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Cloud (Vertex AI) training Within the training script Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Autologging .


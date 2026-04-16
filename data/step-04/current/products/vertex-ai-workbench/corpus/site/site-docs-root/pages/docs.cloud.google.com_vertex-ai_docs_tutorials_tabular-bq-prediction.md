---
title: "Train a model using Vertex AI and the Python SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction
  title: "Train a model using Vertex AI and the Python SDK \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Train a model using Vertex AI and the Python SDK
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial takes between 30 and 60 minutes to complete.
This tutorial is a start-to-finish guide that shows you how to use the
Vertex AI SDK for Python to create a custom-trained model. You run code in a
notebook (IPYNB) file that uses a Docker container to train and create the
model. The tutorial is for data scientists who are new to Vertex AI and
familiar with notebooks, Python, and the Machine Learning (ML) workflow.
The process starts using the Google Cloud console to create the project that
contains your work. In your project, you use Vertex AI Workbench to
create a Jupyter notebook. The notebook environment is where you run code
that downloads and prepares a dataset, then use the dataset to create and train
a model. At the end of the tutorial, the trained model generates predictions.
The goal of this tutorial is to walk you through every step required to create
predictions in less than an hour. The dataset used is relatively small so that it
doesn't take very long to train your model. When you're done, you can apply what
you learn to larger datasets. The larger your dataset is, the more accurate your
predictions are.
Tutorial steps
Prerequisites - Create your Google Cloud
account and project.
Create a
notebook -
Create and prepare a Jupyter notebook and its environment. You use the
notebook to run code that creates your dataset, creates and trains your
model, and generates your predictions.
Create a dataset - Download a publicly
available BigQuery dataset, then use it to create a Vertex AI
tabular dataset. The dataset contains the data you use to train your model.
Create a training script - Create
a Python script that you pass to your training job. The script runs when the
training job trains and creates your model.
Train a model - Use your tabular
dataset to train and deploy a model. You use the model to create your
predictions.
Make predictions - Use your model to
create predictions. This section also walks you through deleting resources
you create while running this tutorial so you don't incur unnecessary
charges.
What you accomplish
This tutorial walks you through how to use the Vertex AI SDK for Python to do the
following:
Create a Cloud Storage bucket to store a dataset
Preprocess data for training
Use the processed data to create a dataset in BigQuery
Use the BigQuery dataset to create a Vertex AI tabular
dataset
Create and train a custom-trained model
Deploy the custom-trained model to an endpoint
Generate a prediction
Undeploy the model
Delete all resources created in the tutorial so you don't incur further
charges
Billable resources used
This tutorial uses billable resources associated with the Vertex AI,
BigQuery, and Cloud Storage Google Cloud services. If you're
new to Google Cloud, you might be able to use one or more of these services at
no cost. Vertex AI offers $300 in free credits to new customers, and
Cloud Storage and BigQuery have free
tiers . For more information, see the following:
Vertex AI pricing and Free cloud features and trial offer
BigQuery pricing and BigQuery free tier usage
Cloud Storage pricing and Cloud Storage free tier usage
Google Cloud pricing calculator
To prevent further charges, the final step of this tutorial walks you
through removing all billable Google Cloud resources you created.
Next
Prerequisites
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

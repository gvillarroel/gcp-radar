---
title: "Choose a training method \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/start/training-methods
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/start/training-methods
  title: "Choose a training method \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Choose a training method
Stay organized with collections
Save and categorize content based on your preferences.
This document explains the key differences between the training methods
available on Google Cloud. Your choice depends on your team's expertise,
the level of control you need, and your infrastructure preference..
With AutoML , you create and train a model with minimal technical
effort. You can use AutoML to quickly prototype models and
explore new datasets before investing in development. For example, you can use
it to learn which features are best for a given dataset.
With custom training you can create a training
application optimized for your targeted outcome. You have complete control
over training application functionality, from single-node jobs to massive,
multi-node distributed training. Namely, you can target any objective,
use any algorithm, develop your own loss functions or metrics, or do any
other customization.
Vertex AI serverless training : This is a
serverless approach where you submit your
training job and Google Cloud provisions, manages, and releases the
compute resources for you. It's ideal for experimentation and for jobs
where you don't need assured capacity.
Vertex AI training clusters
is a feature within custom training
designed for large-scale, high-performance training jobs. It lets you
reserve a dedicated cluster of powerful compute resources (like A100 or
H100 GPUs) for your exclusive use, guaranteeing capacity and performance
for mission-critical and long-running training tasks.
With Ray on Vertex AI you can use
Ray 's distributed computing
framework on Google Cloud infrastructure. Ray on Vertex AI provides
a managed environment with configurable compute resources, integration
with services like Vertex AI Inference and BigQuery, and
flexible networking options for developing and running distributed workloads.
Using BigQuery , you can train models
using your BigQuery data directly
in BigQuery. Using SQL commands, you can quickly create a model and
use it to get batch inferences.
To compare the different functionality and expertise required for each service,
review the following table.
AutoML
Serverless training
Training clusters
Ray on Vertex AI
BigQuery ML
Data science expertise needed
No
Yes, to develop the training application and handle data preparation.
Yes, to develop the training application and handle data preparation.
A foundational understanding of ML concepts and data workflows is beneficial.
No
Programming ability needed
No. AutoML is codeless.
Yes, to develop the training application.
Yes, to develop the training application.
Yes.
Yes.
Time to train model
Lower. Less data preparation is required, and no development is needed.
Higher. Involves code development and on-demand resource provisioning time for each job.
Higher. Involves code development, but job start-up is faster as resources are already reserved, eliminating queues and provisioning time.
The time to train depends on the code logic (data preparation and training) and time to provision resources.
Lower. Model development is fast as BigQuery ML leverages the BigQuery computational engine for training, evaluation, and inference.
Limits on machine learning objectives
Yes. You must target one of AutoML's predefined objectives.
No
No
No
Yes
Can manually optimize model performance with hyperparameter tuning
No. AutoML performs some automated tuning, but you can't modify the values.
Yes. You can tune the model during each training run for experimentation and comparison.
Yes. You can tune the model during each training run for experimentation and comparison.
Yes. You provide the custom training code, giving you full control over hyperparameter values.
Yes. BigQuery ML supports hyperparameter tuning when training models.
Can control aspects of the training environment
Limited. You can specify the budget for training hours and enable early stopping.
Yes. You specify the Compute Engine machine type, disk size, and container image for each job.
Yes. You have maximum control, reserving specific high-performance machine types (e.g., H100s), disk configurations, and network settings for your exclusive use, guaranteeing capacity.
Yes. You have significant control, including custom Docker images, machine types for head and worker nodes, and the number and type of accelerators (GPUs).
No
Limits on data size
Yes. Data size limitations vary depending on the dataset type.
No
No
No. However, there is a maximum query response size of 10 GB for BigQuery reads.
Yes. BigQuery ML enforces appropriate quotas on a per-project basis. To learn more, see Quotas and limits.
What's next
Choose an introductory tutorial to get
started with Vertex AI Training.
Learn more about training an AutoML model .
Learn about
Vertex AI serverless training .
Learn about
Vertex AI training clusters .
Learn more about Ray on Vertex AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

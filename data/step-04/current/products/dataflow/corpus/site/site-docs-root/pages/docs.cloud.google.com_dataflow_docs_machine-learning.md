---
title: "Dataflow ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/machine-learning
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/machine-learning
  title: "Dataflow ML \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Dataflow ML
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Dataflow ML
Dataflow ML lets you use Dataflow to deploy and manage complete machine learning (ML) pipelines. Use ML models to do local and remote inference with batch and streaming pipelines. Use data processing tools to prepare your data for model training and to process the results of the models.
About Dataflow ML
Prediction and inference
Whether you want to classify images in real-time, run remote inference calls, or build a custom model handler, you can find complete Dataflow ML examples.
See use cases
Data processing
Use the MLTransform class to preprocess data for machine learning (ML) workflows. By combining multiple data processing transforms in one class, MLTransform streamlines the process of applying Apache Beam ML data processing transforms to your workflow.
Learn more
with pipeline as p :
predictions = (
p
| beam . ReadFromSource ( 'a_source' )
| RunInference ( MODEL_HANDLER ))
RunInference transform
Using RunInference is as straightforward as adding the transform code to your pipeline. In this example, MODEL_HANDLER is the model configuration object.
with beam . Pipeline () as p :
transformed_data = (
p
| beam . Create ( data )
| MLTransform ( ... )
| beam . Map ( print ))
MLTransform code
To prepare your data for training ML models, use MLTransform in your pipeline. MLTransform wraps multiple data processing transforms in one class, letting you use one class for a variety of preprocessing tasks.
Prediction and inference with pre-trained models
I have a Pytorch model
Use a pre-trained model with Pytorch.
I have a scikit-learn model
Use a pre-trained model with scikit-learn.
I have a TensorFlow model
Use a pre-trained model with TensorFlow.
I have a Vertex AI model handler
Apache Beam has built-in support for sending requests to a remotely deployed Vertex AI endpoint. This notebook shows how to use the Apache Beam RunInference transform for image classification with Vertex AI.
I want to use multiple differently-trained models in my pipeline
Use the RunInference transform with a keyed model handler to use multiple models in the same RunInference transform.
Data processing with MLTransform
I want to generate text embeddings for my LLM by using Vertex AI
Use Apache Beam's MLTransform class with the Vertex AI text-embeddings API to generate text embeddings. Text embeddings are a way to represent text as numerical vectors, which is necessary for many natural language processing (NLP) tasks.
I want to generate text embeddings for my LLM by using Hugging Face
Use Apache Beam's MLTransform class with Hugging Face Hub models to generate text embeddings. Hugging Face's SentenceTransformers framework uses Python to generate sentence, text, and image embeddings.
I want to compute a vocabulary from a dataset
Compute a unique vocabulary from a dataset and then map each word or token to a distinct integer index. Use this transform to change textual data into numerical representations for machine learning tasks.
I want to scale my data to train my ML model
Scale your data so that you can use it to train your ML model. Apache Beam's MLTransform class includes multiple data scaling transforms.
Prediction and inference with hub models
I want to do sentiment analysis and summarization
You can use Gemma models in your inference pipelines to gauge the sentiment of a conversation, summarize that conversation's content, and draft a reply for a difficult conversation.
I have a trained model from Hugging Face
Use the RunInference transform with a trained model from Hugging Face.
I have a trained model from TensorFlow Hub
Use the RunInference transform for TensorFlow with a trained model from TensorFlow Hub.
I want to do generative AI
Use the RunInference transform for generative AI tasks. This notebook uses a language model from the Hugging Face Model Hub.
ML workflow orchestration
I want to use Dataflow with Vertex AI Pipelines
Vertex AI Pipelines helps you to automate, monitor, and govern your ML systems by orchestrating your ML workflows in a serverless manner. Use Vertex AI Pipelines to orchestrate workflow DAGs defined by either TFX or KFP and to automatically track your ML artifacts using Vertex ML Metadata.
I want to use Dataflow with TFX
TensorFlow Extended (TFX) lets you deploy complete ML pipelines by using an orchestration framework that has a built-in integration with Apache Beam and the Dataflow runner.
I want to use Dataflow with KFP
Kubeflow makes deployments of ML workflows on Kubernetes simple, portable, and scalable. Kubeflow Pipelines are reusable complete ML workflows built using the Kubeflow Pipelines SDK.
Anomaly Detection
Anomaly Detection with statistical methods
This notebook demonstrates how to perform anomaly detection on both batch and streaming data using the AnomalyDetection PTransform. It uses the Z-Score algorithm to identify outliers in a dataset.
Additional features
Use accelerators (GPUs/TPUs)
Using accelerators like GPUs and TPUs in Dataflow jobs can significantly speed up data processing tasks frequently used in machine learning and image processing use cases. TPUs, in particular, are custom-designed AI accelerators that are optimized for training and using large AI models, providing a versatile way to scale a wide range of AI workloads.
Learn about using GPUs
Learn about using TPUs
Mix and match CPUs and GPUs with right fitting
Mix and match GPUs and CPUs for high performance and lower cost. The ability to target resources to specific pipeline steps provides additional pipeline flexibility and capability, and potential cost savings.
Enable right fitting
Enrich streaming pipelines with feature store data
Apache Beam simplifies the data enrichment workflow by providing a turnkey enrichment transform that you can add to your pipeline.
Learn more
Model maintenance and evaluation
Automatic model refresh
RunInference lets you perform automatic model updates without stopping your Apache Beam pipeline. Use side inputs to update your model in real time, even while the pipeline is running.
See an example
Evaluate your models
Use TensorFlow Model Analysis (TFMA) to investigate and visualize the performance of a model by creating and comparing two models. With Apache Beam, you can evaluate and compare multiple models in one step.
See an example
Resources
Run cross-language pipelines
To use RunInference with a Java pipeline, create a cross-language Python transform. The pipeline calls the transform, which does the preprocessing, postprocessing, and inference.
Build a pipeline
Dataflow permissions
To run the Dataflow ML examples, you might need to configure your Google Cloud permissions. Read a detailed guide about the required permissions for Dataflow pipelines.
Learn about permissions
View the examples on GitHub
The examples and the corresponding source code are available on GitHub. In GitHub, you can also find instructions for running the examples in Colab.
View on GitHub
Read about a sample use case
This blog post explains how to build RAG applications with semantic search and numerical representations (embeddings) in real-time. It uses Dataflow ML to prepare data by converting it into embeddings and storing them in a vector database like AlloyDB.
Read blog post
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]

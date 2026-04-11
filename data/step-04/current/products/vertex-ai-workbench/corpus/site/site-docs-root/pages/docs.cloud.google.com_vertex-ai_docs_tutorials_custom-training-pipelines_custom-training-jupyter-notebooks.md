---
title: "Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks
  title: "Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Custom training notebook tutorials
Stay organized with collections
Save and categorize content based on your preferences.
This document contains a list of available custom training notebook tutorials.
These end-to-end tutorials help you get started using custom training and can give you
ideas for how to implement a specific project.
There are many environments in which you can host notebooks. You can run them in the cloud
using a service like
Colaboratory (Colab) ,
Colab Enterprise , or
Vertex AI Workbench . Or you can download the
notebooks from GitHub and run them on your local machine or on a JupyterLab implementation
in your local network.
Colab
To open a notebook tutorial in Colab, click the Colab link in the
notebook list . Colab creates a VM instance
with all needed dependencies, launches the Colab environment, and
loads the notebook.
Colab Enterprise
To open a notebook tutorial in Colab Enterprise, do the following:
Set up
a Google Cloud project and enable the required APIs.
Click the Colab Enterprise link in the
notebook list . Colab Enterprise loads
the notebook.
Vertex AI Workbench
To open a notebook tutorial in Vertex AI Workbench, do the following:
Create
a Vertex AI Workbench instance.
Click the Vertex AI Workbench link in
the notebook list .
Select an active Vertex AI Workbench instance. If none of your instances are running,
select an instance and then click Start . After the instance starts, select it again.
Click Deploy .
On the Confirm deployment to notebook server page, select Confirm .
Vertex AI Workbench loads the notebook.
In the Select kernel dialog, select Python 3 , and then click Select .
GitHub
To download a notebook tutorial from GitHub, do the following:
Click the GitHub link in the
notebook list .
In GitHub, click the
download Download raw file
button.
Complete the dialog to download the notebook.
List of notebooks
Select a service
AutoML
BigQuery
BigQuery ML
Custom training
Image
Ray on Vertex AI
Tabular
Text
Vector Search
Vertex AI Experiments
Vertex AI Feature Store
Vertex AI Inference
Vertex AI model evaluation
Vertex AI Model Monitoring
Vertex AI Model Registry
Vertex AI Pipelines
Vertex AI TensorBoard
Vertex AI Vizier
Vertex AI Workbench
Vertex Explainable AI
Vertex ML Metadata
Services
Description
Open in
Classification for tabular data
AutoML tabular training and prediction .
Learn how to train and make predictions on an AutoML model based on a tabular dataset.
Learn more about Classification for tabular data .
Tutorial steps
Create a Vertex AI model training job.
Train an AutoML Tabular model.
Deploy the model resource to a serving endpoint resource.
Make a prediction by sending data.
Undeploy the model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Get predictions from an image classification model
AutoML training image classification model for batch prediction .
In this tutorial, you create an AutoML image classification model from a Python script, and then do a batch prediction using the Vertex SDK.
Learn more about Get predictions from an image classification model .
Tutorial steps
Create a Vertex dataset resource.
Train the model.
View the model evaluation.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Get predictions from an image classification model
AutoML training image classification model for online prediction .
In this tutorial, you create an AutoML image classification model and deploy for online prediction from a Python script using the Vertex SDK.
Learn more about Get predictions from an image classification model .
Tutorial steps
Create a Vertex Dataset resource.
Train the model.
View the model evaluation.
Deploy the Model resource to a serving Endpoint resource.
Make a prediction.
Undeploy the Model .
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
AutoML
AutoML training image object detection model for export to edge .
In this tutorial, you create an AutoML image object detection model from a Python script using the Vertex SDK, and then export the model as an Edge model in TFLite format.
Tutorial steps
Create a Vertex dataset resource.
Train the model.
Export the edge model from the model resource to Cloud Storage.
Download the model locally.
Make a local prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Object detection for image data
AutoML training image object detection model for online prediction .
In this tutorial, you create an AutoML image object detection model and deploy for online prediction from a Python script using the Vertex AI SDK.
Learn more about Object detection for image data .
Tutorial steps
Create a Vertex AI dataset resource.
Train the model.
View the model evaluation.
Deploy the model resource to a serving endpoint resource.
Make a prediction.
Undeploy the model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tabular Workflow for E2E AutoML
AutoML Tabular Workflow pipelines .
Learn how to create two regression models using Vertex AI Pipelines downloaded from Google Cloud Pipeline Components .
Learn more about Tabular Workflow for E2E AutoML .
Tutorial steps
Create a training pipeline that reduces the search space from the default to save time.
Create a training pipeline that reuses the architecture search results from the previous pipeline to save time.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
AutoML training
Get started with AutoML training .
Learn how to use AutoML for training with Vertex AI .
Learn more about AutoML training .
Tutorial steps
Train an image model
Export the image model as an edge model
Train a tabular model
Export the tabular model as a cloud model
Train a text model
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Hierarchical forecasting for tabular data
Vertex AI AutoML training hierarchical forecasting for batch prediction .
In this tutorial, you create an AutoML hierarchical forecasting model and deploy it for batch prediction using the Vertex AI SDK for Python.
Learn more about Hierarchical forecasting for tabular data .
Tutorial steps
Create a Vertex AI TimeSeriesDataset resource.
Train the model.
View the model evaluation.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Object detection for image data
AutoML training image object detection model for batch prediction .
In this tutorial, you create an AutoML image object detection model from a Python script, and then do a batch prediction using the Vertex AI SDK for Python.
Learn more about Object detection for image data .
Tutorial steps
Create a Vertex dataset resource.
Train the model.
View the model evaluation.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Forecasting with AutoML
AutoML tabular forecasting model for batch prediction .
Learn how to create an AutoML tabular forecasting model from a Python script, and then generate batch prediction using the Vertex AI SDK.
Learn more about Forecasting with AutoML .
Tutorial steps
Create a Vertex AI dataset resource.
Train an AutoML tabular forecasting model resource.
Obtain the evaluation metrics for the model resource.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Regression for tabular data
AutoML training tabular regression model for batch prediction using BigQuery .
Learn how to create an AutoML tabular regression model and deploy it for batch prediction using the Vertex AI SDK for Python.
Learn more about Regression for tabular data .
Tutorial steps
Create a Vertex AI dataset resource.
Train an AutoML tabular regression model resource.
Obtain the evaluation metrics for the model resource.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Regression for tabular data
AutoML training tabular regression model for online prediction using BigQuery .
Learn how to create an AutoML tabular regression model and deploy for online prediction from a Python script using the Vertex AI SDK.
Learn more about Regression for tabular data .
Tutorial steps
Create a Vertex dataset resource.
Train the model.
View the model evaluation.
Deploy the model resource to a serving Endpoint resource.
Make a prediction.
Undeploy the model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
BigQuery ML
Get started with BigQuery ML Training .
Learn how to use BigQuery ML for training with Vertex AI.
Learn more about BigQuery ML .
Tutorial steps
Create a local BigQuery table in your project
Train a BigQuery ML model
Evaluate the BigQuery ML model
Export the BigQuery ML model as a cloud model
Upload the exported model as a Vertex AI model resource
Hyperparameter tune a BigQuery ML model with Vertex AI Vizier
Automatically register a BigQuery ML model to Vertex AI Model Registry
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Vertex AI Inference
Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
Learn how to create, deploy and serve a custom classification model on Vertex AI.
Learn more about Custom training .
Learn more about Vertex AI Inference .
Tutorial steps
Train a model that uses flower's measurements as input to predict the class of iris.
Save the model and its serialized preprocessor.
Build a FastAPI server to handle predictions and health checks.
Build a custom container with model artifacts.
Upload and deploy custom container to Vertex AI Endpoints.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Training
Training a TensorFlow model on BigQuery data .
Learn how to create a custom-trained model from a Python script in a Docker container using the Vertex AI SDK for Python, and then get a prediction from the deployed model by sending data.
Learn more about Vertex AI Training .
Tutorial steps
Create a Vertex AI custom TrainingPipeline for training a model.
Train a TensorFlow model.
Deploy the Model resource to a serving Endpoint resource.
Make a prediction.
Undeploy the Model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Custom training with custom container image and automatic model upload to Vertex AI Model Registry .
In this tutorial, you train a machine learning model custom container image approach for custom training in Vertex AI.
Learn more about Custom training .
Tutorial steps
Create a Vertex AI custom job for training a model.
Train and register a TensorFlow model using a custom container.
List the registered model in the Vertex AI Model Registry.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Cloud Profiler
Profile model training performance using Cloud Profiler .
Learn how to enable Cloud Profiler for custom training jobs.
Learn more about Cloud Profiler .
Tutorial steps
Setup a service account and a Cloud Storage bucket
Create a Vertex AI TensorBoard instance
Create and run a custom training job
View the Cloud Profiler dashboard
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Get started with Vertex AI Training for XGBoost .
Learn how to use Vertex AI Training for training a XGBoost custom model.
Learn more about Custom training .
Tutorial steps
Training using a Python package.
Report accuracy when hyperparameter tuning.
Save the model artifacts to Cloud Storage using Cloud StorageFuse.
Create a Vertex AI model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Shared resources across deployments
Get started with Endpoint and shared VM .
Learn how to use deployment resource pools for deploying models.
Learn more about Shared resources across deployments .
Tutorial steps
Upload a pretrained image classification model as a Model resource (model A).
Upload a pretrained text sentence encoder model as a Model resource (model B).
Create a shared VM deployment resource pool.
List shared VM deployment resource pools.
Create two Endpoint resources.
Deploy first model (model A) to first Endpoint resource using deployment resource pool.
Deploy second model (model B) to second Endpoint resource using deployment resource pool.
Make a prediction request with first deployed model (model A).
Make a prediction request with second deployed model (model B).
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Vertex AI Batch Prediction
Custom training and batch prediction .
Learn to use Vertex AI Training to create a custom trained model and use Vertex AI Batch Prediction to do a batch prediction on the trained model.
Learn more about Custom training .
Learn more about Vertex AI Batch Prediction .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
Upload the trained model artifacts as a model resource.
Make a batch prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Vertex AI Inference
Custom training and online prediction .
Learn to use Vertex AI Training to create a custom-trained model from a Python script in a Docker container, and learn to use Vertex AI Inference to do a prediction on the deployed model by sending data.
Learn more about Custom training .
Learn more about Vertex AI Inference .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
Upload the trained model artifacts to a Model resource.
Create a serving Endpoint resource.
Deploy the Model resource to a serving Endpoint resource.
Make a prediction.
Undeploy the Model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
BigQuery datasets
Vertex AI for BigQuery users
Get started with BigQuery datasets .
Learn how to use BigQuery as a dataset for training with Vertex AI.
Learn more about BigQuery datasets .
Learn more about Vertex AI for BigQuery users .
Tutorial steps
Create a Vertex AI dataset resource from BigQuery table compatible for AutoML training.
Extract a copy of the dataset from BigQuery to a CSV file in Cloud Storage compatible for AutoML or custom training.
Select rows from a BigQuery dataset into a pandas dataframe compatible for custom training.
Select rows from a BigQuery dataset into a tf.data.Dataset compatible for custom training TensorFlow models.
Select rows from extracted CSV files into a tf.data.Dataset compatible for custom training TensorFlow models.
Create a BigQuery dataset from CSV files.
Extract data from BigQuery table into a DMatrix compatible for custom training XGBoost models.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Vertex ML Metadata
Build Vertex AI Experiment lineage for custom training .
Learn how to integrate preprocessing code in a Vertex AI experiments.
Learn more about Vertex AI Experiments .
Learn more about Vertex ML Metadata .
Tutorial steps
Execute module for preprocessing data
Create a dataset artifact
Log parameters
Execute module for training the model
Log parameters
Create model artifact
Assign tracking lineage to dataset, model and parameters
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Track parameters and metrics for locally trained models .
Learn how to use Vertex AI Experiments to compare and evaluate model experiments.
Learn more about Vertex AI Experiments .
Tutorial steps
log the model parameters
log the loss and metrics on every epoch to Vertex AI TensorBoard
log the evaluation metrics
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Vertex AI Pipelines
Compare pipeline runs with Vertex AI Experiments .
Learn how to use Vertex AI Experiments to log a pipeline job and then compare different pipeline jobs.
Learn more about Vertex AI Experiments .
Learn more about Vertex AI Pipelines .
Tutorial steps
Formalize a training component
Build a training pipeline
Run several pipeline jobs and log their results
Compare different pipeline jobs
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI TensorBoard
Delete Outdated Experiments in Vertex AI TensorBoard .
Learn how to delete outdated Vertex AI TensorBoard Experiments to avoid unnecessary storage costs.
Learn more about Vertex AI TensorBoard .
Tutorial steps
How to delete the TB Experiment with a predefined keyvalue label pair
How to delete the TB Experiments created before the create_time
How to delete the TB Experiments created before the update_time
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Custom training autologging - Local script .
Learn how to autolog parameters and metrics of an ML experiment running on Vertex AI Training by leveraging the integration with Vertex AI Experiments.
Tutorial steps
Formalize model experiment in a script
Run model traning using local script on Vertex AI Training
Check out ML experiment parameters and metrics in Vertex AI Experiments
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Vertex ML Metadata
Custom training
Get started with Vertex AI Experiments .
Learn how to use Vertex AI Experiments when training with Vertex AI.
Learn more about Vertex AI Experiments .
Learn more about Vertex ML Metadata .
Learn more about Custom training .
Tutorial steps
Local (notebook) training
Create an experiment.
Create a first run in the experiment.
Log parameters and metrics.
Create artifact lineage.
Visualize the experiment results.
Execute a second run.
Compare the two runs in the experiment.
Cloud (Vertex AI) training
Within the training script
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Experiments
Autologging .
Learn how to use Vertex AI Autologging.
Tutorial steps
Enable autologging in the Vertex AI SDK.
Train scikitlearn model and see the resulting experiment run with metrics and parameters autologged to Vertex AI Experiments without setting an experiment run.
Train Tensorflow model, check autologged metrics and parameters to Vertex AI Experiments by manually setting an experiment run with aiplatform.start_run() and aiplatform.end_run() .
Disable autologging in the Vertex AI SDK, train a PyTorch model and check that none of the parameters or metrics are logged.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Classification for tabular data
Vertex Explainable AI
Batch explanation for AutoML tabular binary classification model .
Learn to use AutoML to create a tabular binary classification model from a Python script, and then learn to use Vertex AI Batch Prediction to make predictions with explanations.
Learn more about Classification for tabular data .
Learn more about Vertex Explainable AI .
Tutorial steps
Create a Vertex AI managed dataset resource.
Train an AutoML tabular binary classification model.
View the model evaluation metrics for the trained model.
Make a batch prediction request with explainability.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Classification for tabular data
Vertex Explainable AI
AutoML training tabular classification model for online explanation .
Learn how to use AutoML to create a tabular binary classification model from a Python script.
Learn more about Classification for tabular data .
Learn more about Vertex Explainable AI .
Tutorial steps
Create a Vertex AI dataset resource.
Train an AutoML tabular binary classification model.
View the model evaluation metrics for the trained model.
Create a serving endpoint resource.
Deploy the Model resource to a serving endpoint resource.
Make an online prediction request with explainability.
Undeploy the Model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Batch Prediction
Custom training image classification model for batch prediction with explainabilty .
Learn to use Vertex AI Training and Vertex Explainable AI to create a custom image classification model with explanations, and then you learn to use Vertex AI Batch Prediction to make a batch prediction request with explanations.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Batch Prediction .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
View the model evaluation for the trained model.
Set explanation parameters for when the model is deployed.
Upload the trained model artifacts and explanation parameters as a Model resource.
Make a batch prediction with explanations.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Inference
Custom training image classification model for online prediction with explainability .
Learn how to use Vertex AI training and Vertex Explainable AI to create a custom image classification model with explanations.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Inference .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
View the model evaluation for the trained model.
Set explanation parameters for when the model is deployed.
Upload the trained model artifacts and explanations as a model resource.
Create a serving endpoint resource.
Deploy the model resource to a serving endpoint resource.
Make a prediction with explanation.
Undeploy the model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Batch Prediction
Custom training tabular regression model for batch prediction with explainabilty .
Learn how to use Vertex AI training and Vertex Explainable AI to create a custom image classification model with explanations.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Batch Prediction .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
View the model evaluation for the trained model.
Set explanation parameters for the model.
Upload the trained model artifacts as a model resource.
Make a batch prediction with explanations.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Inference
Custom training tabular regression model for online prediction with explainabilty .
Learn how to use Vertex AI training and Vertex Explainable AI to create a custom tabular regression model with explanations.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Inference .
Tutorial steps
Create a Vertex AI custom job for training a TensorFlow model.
View the model evaluation for the trained model.
Set explanation parameters for when the model is deployed.
Upload the trained model artifacts and explanations as a model resource.
Create a serving endpoint resource.
Deploy the model resource to a serving endpoint resource.
Make a prediction with explanation.
Undeploy the model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Inference
Custom training tabular regression model for online prediction with explainabilty using get_metadata .
Learn how to create a custom model from a Python script in a Google prebuilt Docker container using the Vertex AI SDK.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Inference .
Tutorial steps
Create a Vertex AI custom job for training a TensorFLow model.
Train a TensorFlow model.
Retrieve and load the model artifacts.
View the model evaluation for the trained model.
Set explanation parameters.
Upload the model as a Vertex AI model resource.
Deploy the Model resource to a serving endpoint resource.
Make a prediction with explanation.
Undeploy the Model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Vertex AI Inference
Explaining image classification with Vertex Explainable AI .
Learn how to configure feature-based explanations on a pre-trained image classification model and make online and batch predictions with explanations.
Learn more about Vertex Explainable AI .
Learn more about Vertex AI Inference .
Tutorial steps
Download pretrained model from TensorFlow Hub
Upload model for deployment
Deploy model for online prediction
Make online prediction with explanations
Make batch predictions with explanations
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex Explainable AI
Explaining text classification with Vertex Explainable AI .
Learn how to configure feature-based explanations using the sampled Shapley method on a TensorFlow text classification model for online predictions with explanations.
Learn more about Vertex Explainable AI .
Tutorial steps
Build and train a TensorFlow text classification model
Upload model for deployment
Deploy model for online prediction
Make online prediction with explanations
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Online feature serving and fetching of BigQuery data with Vertex AI Feature Store .
Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end to end workflow of feature values serving and fetching user journey.
Learn more about Vertex AI Feature Store .
Tutorial steps
Provision an online feature store instance to host and serve data.
Register a BigQuery view with the online feature store instance and set up the sync job.
Use the online server to fetch feature values for online prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Online feature serving and fetching of BigQuery data with Vertex AI Feature Store Optimized Serving .
Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end-to-end workflow of serving and fetching feature values.
Learn more about Vertex AI Feature Store .
Tutorial steps
Provision an online feature store instance to host and serve data using Optimized online serving with Public or Private endpoint.
Register a BigQuery view with the online feature store instance and set up the sync job.
Use the online server to fetch feature values for online prediction.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Online feature serving and vector retrieval of BigQuery data with Vertex AI Feature Store .
Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end to end workflow of features serving and vector retrieval user journey.
Learn more about Vertex AI Feature Store .
Tutorial steps
Provision an online feature store instance to host and serve data.
Create an online feature store instance to serve a BigQuery table.
Use the online server to search nearest neighbors.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Vertex AI Feature Store Based LLM Grounding tutorial .
Learn how to create and use an online feature store instance to host and serve data in BigQuery with Vertex AI Feature Store in an end to end workflow of features serving and vector retrieval user journey.
Learn more about Vertex AI Feature Store .
Tutorial steps
Provision an online feature store instance to host and serve data.
Create an online feature store instance to serve a BigQuery table.
Use the online server to search nearest neighbors.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Vertex AI Feature Store Feature View Service Agents Tutorial .
Learn how to use a dedicated service agent for a feature view in Vertex AI Feature Store.
Learn more about Vertex AI Feature Store .
Tutorial steps
Create a feature view configured to use a dedicated service account.
A service account is created for each feature view. Such service account is used to sync data from BigQuery.
Get/List feature view API returns the autocreated service account. Users need to call bq addiampolicybinding command to grant roles/bigquery.dataViewer to the service account.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Streaming import SDK in Vertex AI Feature Store (Legacy) .
Learn how to import features from a Pandas DataFrame into Vertex AI Feature Store using write_feature_values method from the Vertex AI SDK.
Learn more about Vertex AI Feature Store .
Tutorial steps
Create a featurestore.
Create a new entity type for your featurestore.
Import feature values from Pandas DataFrame into the entity type in the featurestore.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Using Vertex AI Feature Store (Legacy) with Pandas Dataframe .
Learn how to use Vertex AI Feature Store with pandas Dataframe.
Learn more about Vertex AI Feature Store .
Tutorial steps
Create Featurestore , EntityType , and Feature resources.
Import feature values from Pandas DataFrame into the entity type.
Read entity feature values from the online feature store into Pandas DataFrame.
Batch serve feature values from your featurestore into Pandas DataFrame.
Online serving with updated feature values.
Pointintime correctness to fetch feature values for training.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Feature Store
Online and Batch predictions using Vertex AI Feature Store (Legacy) .
Learn how to use Vertex AI Feature Store to import feature data, and to access the feature data for both online serving and offline tasks, such as training.
Learn more about Vertex AI Feature Store .
Tutorial steps
Create Featurestore , EntityType , and Feature resources.
Import feature data into the Featurestore resource.
Serve online prediction requests using the imported features.
Access imported features in offline jobs, such as training jobs.
Use streaming import to import small amount of data.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Overview of Generative AI support on Vertex AI
Vertex AI LLM Batch Inference with RLHF-tuned Models .
In this tutorial, you use Vertex AI to get predictions from an RLHF-tuned large-language model.
Learn more about Overview of Generative AI support on Vertex AI .
Tutorial steps
Create Vertex AI Pipeline job using a predefined template for bulk inference.
Execute the pipeline using Vertex AI Pipelines.
Produce prediction results against a model for a given dataset.
Colab Enterprise
GitHub
Vertex AI Workbench
generative_ai
Distill a large language model .
Learn how to distill and deploy a large language model using Vertex AI LLM.
Tutorial steps
Get the Vertex AI LLM model.
Distill the model(this automatically creates a Vertex AI endpoint and deploys the model to the endpoint).
Make a prediction using Vertex AI LLM.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tune text models by using RLHF tuning
Vertex AI LLM Reinforcement Learning from Human Feedback .
In this tutorial, you use Vertex AI RLHF to tune and deploy a large language model model.
Learn more about Tune text models by using RLHF tuning .
Tutorial steps
Set the number of model tuning steps.
Create a Vertex AI Pipeline job using a predefined tuning template.
Execute the pipeline using Vertex AI Pipelines.
Get predictions from the tuned model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
text embedding
Semantic Search using Embeddings .
In this tutorial, we demonstrate how to create an embedding generated from text and perform a semantic search.
Learn more about text embedding .
Tutorial steps
Installation and imports
Create embedding dataset
Create an index
Query the index
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
generative_ai
Getting Text Embeddings on Vertex AI .
Learn how to get a text embedding given a text-embedding model and a text.
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
generative_ai
Getting Text Embeddings on Vertex AI .
Learn how to get a text embedding given a text-embedding model and a text.
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tune text models by using supervised tuning
Vertex AI Tuning a PEFT model .
Learn to use Vertex AI LLM to tune and deploy a PEFT large language model.
Learn more about Tune text models by using supervised tuning .
Tutorial steps
Get the Vertex AI LLM model.
Tune the model.
This automatically creates a Vertex AI endpoint and deploy the model to it.
Make a prediction using Vertex AI LLM.
Make a prediction using Vertex AI Inference.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
generative_ai
Getting Tuned Text-Embeddings on Vertex AI .
Learn how to tune a text-embedding model.
Tutorial steps
Colab
GitHub
Vertex AI Workbench
PaLM API
Using the Vertex AI SDK with Large Language Models .
Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
Learn more about PaLM API .
Tutorial steps
Use the predict endpoints of Vertex AI PaLM API to receive generative AI responses to a message.
Use the text embedding endpoint to receive a vector representation of a message.
Perform prompt tuning of an LLM, based on input/output training data.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Classification for image data
AutoML Image Classification .
Learn to use AutoML to train an image model and use Vertex AI Inference and Vertex AI batch inference to do online and batch predictions.
Learn more about Migrate to Vertex AI .
Learn more about Classification for image data .
Tutorial steps
Train an AutoML image classification model.
Make a batch prediction.
Deploy model to a endpoint
Make a online prediction
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Object detection for image data
AutoML image object detection .
Learn to use AutoML to train an image model and use Vertex AI Inference and Vertex AI Batch Prediction to do online and batch predictions.
Learn more about Migrate to Vertex AI .
Learn more about Object detection for image data .
Tutorial steps
Train an AutoML object detection model.
Make a batch prediction.
Deploy model to a endpoint
Make a online prediction
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Classification for tabular data
AutoML tabular binary classification .
In this tutorial, you create an AutoML tabular binary classification model and deploy for online prediction from a Python script using the Vertex AI SDK.
Learn more about Migrate to Vertex AI .
Learn more about Classification for tabular data .
Tutorial steps
Create a Vertex AI dataset resource.
Train the model.
View the model evaluation.
Deploy the model resource to a serving endpoint resource.
Make a prediction.
Undeploy the model
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Custom training
Custom image classification with a custom training container .
Learn how to train a tensorflow image classification model using a custom container and Vertex AI training.
Learn more about Migrate to Vertex AI .
Learn more about Custom training .
Tutorial steps
Package the training code into a python application.
Containerize the training application using Cloud Build and Artifact Registry.
Create a custom container training job in Vertex AI and run it.
Evaluate the model generated from the training job.
Create a model resource for the trained model in Vertex AI Model Registry.
Run a Vertex AI batch inference job.
Deploy the model resource to a Vertex AI endpoint.
Run a online prediction job on the model resource.
Clean up the resources created.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Custom training overview
Custom image classification with a pre-built training container .
Learn how to train a tensorflow image classification model using a prebuilt container and Vertex AI training.
Learn more about Migrate to Vertex AI .
Learn more about Custom training overview .
Tutorial steps
Package the training code into a python application.
Containerize the training application using Cloud Build and Artifact Registry.
Create a custom container training job in Vertex AI and run it.
Evaluate the model generated from the training job.
Create a model resource for the trained model in Vertex AI Model Registry.
Run a Vertex AI batch inference job.
Deploy the model resource to a Vertex AI endpoint.
Run a online prediction job on the model resource.
Clean up the resources created.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Custom training overview
Custom Scikit-Learn model with pre-built training container .
Learn how to use Vertex AI Training to create a custom trained model.
Learn more about Migrate to Vertex AI .
Learn more about Custom training overview .
Tutorial steps
Create a Vertex AI custom job for training a scikitlearn model.
Upload the trained model artifacts as a model resource.
Generate batch predictions.
Deploy the model resource to a serving endpoint resource.
Generate online predictions.
Undeploy the model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Migrate to Vertex AI
Custom training overview
Custom XGBoost model with pre-built training container .
Learn to use Vertex AI Training to create a custom trained model.
Learn more about Migrate to Vertex AI .
Learn more about Custom training overview .
Tutorial steps
Create a Vertex AI custom job for training a xgboost model.
Upload the trained model artifacts as a model resource.
Generate batch predictions.
Deploy the model resource to a serving endpoint resource.
Generate online predictions.
Undeploy the model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI hyperparameter tuning
Custom training
Hyperparameter Tuning .
Learn to use Vertex AI hyperparameter to create and tune a custom trained model.
Learn more about Vertex AI hyperparameter tuning .
Learn more about Custom training .
Tutorial steps
Create a Vertex AI hyperparameter tuning job for training a TensorFlow model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Google Artifact Registry documentation
Get started with Google Artifact Registry .
Learn how to use Google Artifact Registry.
Learn more about Google Artifact Registry documentation .
Tutorial steps
Creating a private Docker repository.
Tagging a container image, specific to the private Docker repository.
Pushing a container image to the private Docker repository.
Pulling a container image from the private Docker repository.
Deleting a private Docker repository.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex ML Metadata
Track parameters and metrics for custom training jobs .
Learn how to use Vertex AI SDK for Python to:
Tutorial steps
Track training parameters and prediction metrics for a custom training job.
Extract and perform analysis for all parameters and metrics within an Experiment.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex ML Metadata
Track parameters and metrics for locally trained models .
Learn how to use Vertex ML Metadata to track training parameters and evaluation metrics.
Learn more about Vertex ML Metadata .
Tutorial steps
Track parameters and metrics for a locally trained model.
Extract and perform analysis for all parameters and metrics within an experiment.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex ML Metadata
Vertex AI Pipelines
Track artifacts and metrics across Vertex AI Pipelines runs using Vertex ML Metadata .
Learn how to track artifacts and metrics with Vertex ML Metadata in Vertex AI Pipeline runs.
Learn more about Vertex ML Metadata .
Learn more about Vertex AI Pipelines .
Tutorial steps
Use the Kubeflow Pipelines SDK to build an ML pipeline that runs on Vertex AI.
The pipeline creates a dataset, trains a scikitlearn model, and deploys the model to an endpoint.
Write custom pipeline components that generate artifacts and metadata.
Compare Vertex AI Pipeline runs, both in the Google Cloud console and programmatically.
Trace the lineage for pipelinegenerated artifacts.
Query your pipeline run metadata.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Evaluation
Classification for tabular data
Evaluating batch prediction results from an AutoML Tabular classification model .
Learn how to train a Vertex AI AutoML Tabular classification model and learn how to evaluate it through a Vertex AI pipeline job using google_cloud_pipeline_components :
Learn more about Vertex AI Model Evaluation .
Learn more about Classification for tabular data .
Tutorial steps
Create a Vertex AI Dataset .
Train an Automl Tabular classification model on the Dataset resource.
Import the trained AutoML model resource into the pipeline.
Run a Batch Prediction job.
Evaluate the AutoML model using the Classification Evaluation component .
Import the classification metrics to the AutoML model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Evaluation
Regression for tabular data
Evaluating batch prediction results from AutoML tabular regression model .
Learn how to evaluate a Vertex AI model resource through a Vertex AI pipeline job using google_cloud_pipeline_components :
Learn more about Vertex AI Model Evaluation .
Learn more about Regression for tabular data .
Tutorial steps
Create a Vertex AI dataset.
Configure an AutoMLTabularTrainingJob class.
Run the AutoMLTabularTrainingJob which returns a model.
Import a pretrained AutoML model resource into the pipeline.
Run a batch prediction job in the pipeline.
Evaluate the AutoML model using the regression evaluation component .
Import the generated regression metrics into the AutoML model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI custom training
Vertex AI model evaluation
Evaluating BatchPrediction results from a custom tabular classification model .
In this tutorial, you train a scikit-learn RandomForest model, save the model in Vertex AI Model Registry and learn how to evaluate the model through a Vertex AI pipeline job using Google Cloud Pipeline Components Python SDK.
Learn more about Vertex AI custom training .
Learn more about Vertex AI model evaluation .
Tutorial steps
Fetch the dataset from the public source.
Preprocess the data locally and save test data in BigQuery.
Train a RandomForest classification model locally using scikitlearn Python package.
Create a custom container in Artifact Registry for predictions.
Upload the model in Vertex AI Model Registry.
Create and run a Vertex AI Pipeline that
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Evaluation
Custom training
Evaluating batch prediction results from custom tabular regression model .
Learn how to evaluate a Vertex AI model resource through a Vertex AI pipeline job using google cloud pipeline components.
Learn more about Vertex AI Model Evaluation .
Learn more about Custom training .
Tutorial steps
Create a Vertex AI Custom Training Job to train a TensorFlow model.
Run the custom training job.
Retrieve and load the model artifacts.
View the model evaluation.
Upload the model as a Vertex AI model resource.
Import a pretrained Vertex AI model resource into the pipeline.
Run a batch prediction job in the pipeline.
Evaluate the model using the regression evaluation component.
Import the Regression Metrics to the Vertex AI model resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI AutoSxS Model Evaluation
Check autorater alignment against a human-preference dataset .
Learn how to use Vertex AI Pipelines and google_cloud_pipeline_components to check autorater alignment using human-preference data:
Learn more about Vertex AI AutoSxS Model Evaluation .
Tutorial steps
Create a evaluation dataset with predictions and human preference data.
Preprocess the data locally and save it in Cloud Storage.
Create and run a Vertex AI AutoSxS Pipeline that generates the judgments and a set of AutoSxS metrics using the generated judgments.
Print the judgments and AutoSxS metrics.
Clean up the resources created in this notebook.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI AutoSxS Model Evaluation
Evaluate a LLM in Vertex AI Model Registry against a third-party model .
Learn how to use Vertex AI Pipelines and google_cloud_pipeline_components to evaluate the performance between two LLM models:
Learn more about Vertex AI AutoSxS Model Evaluation .
Tutorial steps
Fetch the dataset from the public source.
Preprocess the data locally and save test data in Cloud Storage.
Create and run a Vertex AI AutoSxS Pipeline that generates the judgments and evaluates the two candidate models using the generated judgments.
Print the judgments and evaluation metrics.
Clean up the resources created in this notebook.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring for batch predictions
Vertex AI Batch Prediction with Model Monitoring .
Learn to use the Vertex AI model monitoring service to detect drift and anomalies in batch prediction.
Learn more about Vertex AI Model Monitoring for batch predictions .
Tutorial steps
Upload a pretrained model as a Vertex AI model resource.
Generate batch prediction requests.
Interpret the statistics, visualizations, other data reported by the model monitoring feature.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for AutoML tabular models .
Learn to use the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests, for AutoML tabular models.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Train an AutoML model.
Deploy the model resource to a Vertex AI endpoint resource.
Configure the endpoint resource for model monitoring.
Generate synthetic prediction requests for skew.
Generate synthetic prediction requests for drift.
Wait for email alert notification.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for online prediction in AutoML image models .
Learn how to use Vertex AI Model Monitoring with Vertex AI Online Prediction with an AutoML image classification model to detect an out of distribution image.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
1. Train an AutoML image classification model.
2. Create an endpoint.
3. Deploy the model to the endpoint, and configure for model monitoring.
4. Submit a online prediction containing both in and out of distribution images.
5. Use Model Monitoring to calculate anomaly score on each image.
6. Identify the images in the online prediction request that are out of distribution.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for custom tabular models .
Learn to use the Vertex AI Model Monitoring service to detect feature skewness and drift in the input predict requests, for custom tabular models.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Download a pretrained custom tabular model.
Upload the pretrained model to Vertex AI Model Registry.
Deploy the model resource to a Vertex AI endpoint resource.
Configure the endpoint resource for model monitoring.
Generate synthetic prediction requests to simulate skewness.
Wait for email alert notifications.
Generate synthetic prediction requests to simulate drift.
Wait for email alert notifications.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for custom tabular models with TensorFlow Serving container .
Learn to use the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests, for custom tabular models, using a custom deployment container.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Download a pretrained custom tabular model.
Upload the pretrained model as a model resource.
Deploying the model resource to an endpoint resource with "TensorFlow Serving" serving binary.
Configure the Endpoint resource for model monitoring.
Generate synthetic prediction requests for skew.
Wait for email alert notification.
Generate synthetic prediction requests for drift.
Wait for email alert notification.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for setup for tabular models .
Learn to setup the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Download a pretrained custom tabular model.
Upload the pretrained model as a model resource.
Deploy the model resource to the endpoint resource.
Configure the endpoint resource for model monitoring.
Skew and drift detection for feature inputs.
Skew and drift detection for feature attributions.
Automatic generation of the input schema by sending 1000 prediction request.
List, pause, resume and delete monitoring jobs.
Restart monitoring job with predefined input schema.
View logged monitored data.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring for XGBoost models .
Learn to use the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests for XGBoost models.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Download a pretrained XGBoost model.
Upload the pretrained model to Vertex AI Model Registry.
Deploy the model resource to a Vertex AI endpoint resource.
Configure the endpoint resource for model monitoring
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Monitoring
Vertex AI Model Monitoring with Vertex Explainable AI Feature Attributions .
Learn to use the Vertex AI Model Monitoring service to detect drift and anomalies in prediction requests from a deployed Vertex AI model resource.
Learn more about Vertex AI Model Monitoring .
Tutorial steps
Upload a pretrained model as a Vertex AI model resource.
Create an Vertex AI endpoint resource.
Deploy the model resource to the endpoint resource.
Configure the endpoint resource for model monitoring.
Initialize the baseline distribution for model monitoring.
Generate synthetic prediction requests.
Understand how to interpret the statistics, visualizations, other data reported by the model monitoring feature.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
model_monitoring_v2
Model Monitoring for Vertex AI Custom Model Batch Prediction Job .
In this tutorial, you'll complete the following steps:
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
model_monitoring_v2
Model Monitoring for Vertex AI Custom Model Online Prediction .
In this tutorial, you'll complete the following steps:
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Model Registry
Get started with Vertex AI Model Registry .
Learn how to use Vertex AI Model Registry to create and register multiple versions of a model.
Learn more about Vertex AI Model Registry .
Tutorial steps
Create and register a first version of a model to Vertex AI Model Registry.
Create and register a second version of a model to Vertex AI Model Registry.
Updating the model version which is the default.
Deleting a model version.
Retraining the next model version.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
AutoML components
Classification for tabular data
AutoML Tabular pipelines using google-cloud-pipeline-components .
Learn to use Vertex AI Pipelines and Google Cloud Pipeline Components to build an AutoML tabular classification model.
Learn more about Vertex AI Pipelines .
Learn more about AutoML components .
Learn more about Classification for tabular data .
Tutorial steps
Create a KFP pipeline that creates a Vertex AI Dataset.
Add a component to the pipeline that trains an AutoML tabular classification model resource.
Add a component that creates a Vertex AI endpoint resource.
Add a component that deploys the model resource to the endpoint resource.
Compile the KFP pipeline.
Execute the KFP pipeline using Vertex AI Pipelines.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Challenger vs Blessed methodology for model deployment into production .
Learn how to construct a Vertex AI pipeline, which trains a new challenger version of a model, evaluates the model and compares the evaluation to the existing blessed model in production.
Tutorial steps
Import a pretrained (blessed) model to the Vertex AI Model Registry.
Import synthetic model evaluation metrics to the corresponding (blessed) model.
Create a Vertex AI endpoint resource
Deploy the blessed model to the endpoint resource.
Create a Vertex AI Pipeline that runs the following steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Pipeline control structures using the KFP SDK .
Learn how to use the KFP SDK, which uses loops and conditionals including nested examples, to build pipelines.
Learn more about Vertex AI Pipelines .
Tutorial steps
Create a KFP pipeline using control flow components
Compile the KFP pipeline
Execute the KFP pipeline using Vertex AI Pipelines
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Custom training components
Custom training with pre-built Google Cloud Pipeline Components .
Learn to use Vertex AI Pipelines and Google Cloud Pipeline Components to build a custom model.
Learn more about Vertex AI Pipelines .
Learn more about Custom training components .
Tutorial steps
Create a KFP pipeline
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Vertex AI Batch Prediction components
Training and batch prediction with BigQuery source and destination for a custom tabular classification model .
In this tutorial, you train a scikit-learn tabular classification model and create a batch prediction job for it through a Vertex AI pipeline using google_cloud_pipeline_components.
Learn more about Vertex AI Pipelines .
Learn more about Vertex AI Batch Prediction components .
Tutorial steps
Create a dataset in BigQuery.
Set some data aside from the source dataset for batch prediction.
Create a custom python package for training application.
Upload the python package to Cloud Storage.
Create a Vertex AI Pipeline that
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Vertex AI hyperparameter tuning
Get started with Vertex AI hyperparameter tuning pipeline components .
Learn how to use prebuilt Google Cloud Pipeline Components for Vertex AI hyperparameter tuning.
Learn more about Vertex AI Pipelines .
Learn more about Vertex AI hyperparameter tuning .
Tutorial steps
Construct a pipeline for
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Get started with machine management for Vertex AI Pipelines .
Learn how to convert a self-contained custom training component into a Vertex AI CustomJob , whereby:
Tutorial steps
Create a custom component with a selfcontained training job.
Execute pipeline using componentlevel settings for machine resources
Convert the selfcontained training component into a Vertex AI CustomJob .
Execute pipeline using customjoblevel settings for machine resources
Colab
GitHub
Vertex AI Workbench
Vertex AI Pipelines
AutoML components
AutoML image classification pipelines using google-cloud-pipeline-components .
Learn how to use Vertex AI Pipelines and Google Cloud pipeline components to build an AutoML image classification model.
Learn more about Vertex AI Pipelines .
Learn more about AutoML components .
Tutorial steps
Create a KFP pipeline
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
AutoML components
Regression for tabular data
AutoML tabular regression pipelines using google-cloud-pipeline-components .
Learn to use Vertex AI Pipelines and Google Cloud Pipeline Components to build an AutoML tabular regression model.
Learn more about Vertex AI Pipelines .
Learn more about AutoML components .
Learn more about Regression for tabular data .
Tutorial steps
Create a KFP pipeline that creates a Dataset resource.
Add a component to the pipeline that trains an AutoML tabular regression Model resource.
Add a component that creates an Endpoint resource.
Add a component that deploys the Model resource to the Endpoint resource.
Compile the KFP pipeline.
Execute the KFP pipeline using Vertex AI Pipelines .
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
BigQuery ML components
Training an acquisition-prediction model using Swivel, BigQuery ML and Vertex AI Pipelines .
Learn how to build a simple BigQuery ML pipeline using Vertex AI pipelines in order to calculate text embeddings of content from articles and classify them
into the *corporate acquisitions* category.
Learn more about Vertex AI Pipelines .
Learn more about BigQuery ML components .
Tutorial steps
Creating a component for Dataflow job that ingests data to BigQuery.
Creating a component for preprocessing steps to run on the data in BigQuery.
Creating a component for training a logistic regression model using BigQuery ML.
Building and configuring a Kubeflow DSL pipeline with all the created components.
Compiling and running the pipeline in Vertex AI Pipelines.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Custom training components
Model train, upload, and deploy using Google Cloud Pipeline Components .
Learn how to use Vertex AI Pipelines and Google Cloud pipeline component to build and deploy a custom model.
Learn more about Vertex AI Pipelines .
Learn more about Custom training components .
Tutorial steps
Create a KFP pipeline
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Vertex AI Pipelines with KFP 2.x .
Learn to use Vertex AI Pipelines and KFP 2.
Tutorial steps
Create a KFP pipeline
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Lightweight Python function-based components, and component I/O .
Learn to use the KFP SDK to build lightweight Python function-based components, and then you learn to use Vertex AI Pipelines to execute the pipeline.
Learn more about Vertex AI Pipelines .
Tutorial steps
Build Python functionbased KFP components.
Construct a KFP pipeline.
Pass Artifacts and parameters between components, both by path reference and by value.
Use the kfp.dsl.importer method.
Compile the KFP pipeline.
Execute the KFP pipeline using Vertex AI Pipelines
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Metrics visualization and run comparison using the KFP SDK .
Learn how to use the KFP SDK for Python to build pipelines that generate evaluation metrics.
Learn more about Vertex AI Pipelines .
Tutorial steps
Create KFP components
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Multicontender vs Champion methodology for model deployment into production .
Learn how to construct a Vertex AI pipeline, which evaluates new production data from a deployed model against other versions of the model, to determine if a contender model becomes the champion model for replacement in production.
Tutorial steps
Import a pretrained (champion) model to the Vertex AI Model Registry.
Import synthetic model training evaluation metrics to the corresponding (champion) model.
Create a Vertex AI endpoint resource.
Deploy the champion model to the endpoint resource.
Import additional (contender) versions of the deployed model.
Import synthetic model training evaluation metrics to the corresponding (contender) models.
Create a Vertex AI Pipeline that runs the following steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Pipelines
Pipelines introduction for KFP .
Learn how to use the KFP SDK for Python to build pipelines that generate evaluation metrics.
Learn more about Vertex AI Pipelines .
Tutorial steps
Define and compile a Vertex AI pipeline.
Specify which service account to use for a pipeline run.
Run the pipeline using Vertex AI SDK for Python and REST API.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
AutoML components
BigQuery ML components
BigQuery ML and AutoML - Rapid Prototyping with Vertex AI .
Learn how to use Vertex AI Pipelines for rapid prototyping a model.
Learn more about AutoML components .
Learn more about BigQuery ML components .
Tutorial steps
Creating a BigQuery and Vertex AI training dataset.
Training a BigQuery ML and AutoML model.
Extracting evaluation metrics from the BigQueryML and AutoML models.
Selecting the best trained model.
Deploying the best trained model.
Testing the deployed model infrastructure.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Batch Inference
Custom model batch inference with feature filtering .
Learn how to create a custom-trained model from a Python script in a Docker container using the Vertex AI SDK for Python, and then run a batch inference job by including or excluding a list of features.
Learn more about Vertex AI Batch Inference .
Tutorial steps
Create a Vertex AI custom TrainingPipeline for training a model.
Train a TensorFlow model.
Send batch prediction job.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Inference
Get started with NVIDIA Triton server .
Learn how to deploy a container running Nvidia Triton Server with a Vertex AI model resource to a Vertex AI endpoint for making online predictions.
Learn more about Vertex AI Inference .
Tutorial steps
Download the model artifacts from TensorFlow Hub.
Create Triton serving configuration file for the model.
Construct a custom container, with Triton serving image, for model deployment.
Upload the model as a Vertex AI model resource.
Deploy the Vertex AI model resource to a Vertex AI endpoint resource.
Make a prediction request.
Undeploy the model resource and delete the endpoint.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Raw Predict
Get started with TensorFlow serving functions with Vertex AI Raw Prediction .
Learn how to use Vertex AI Raw Prediction on a Vertex AI Endpoint resource.
Learn more about Raw Predict .
Tutorial steps
Download pretrained tabular classification model artifacts for a TensorFlow 1.x estimator.
Upload the TensorFlow estimator model as a Vertex AI Model resource.
Create an Endpoint resource.
Deploy the Model resource to an Endpoint resource.
Make an online raw prediction to the Model resource instance deployed to the Endpoint resource.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
getting predictions from a custom trained model
Get started with TensorFlow Serving with Vertex AI Inference .
Learn how to use Vertex AI Inference on a Vertex AI Endpoint resource with TensorFlow Serving serving binary.
Learn more about getting predictions from a custom trained model .
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Private Endpoints
Get started with Vertex AI Private Endpoints .
Learn how to use Vertex AI Private Endpoint resources.
Learn more about Private Endpoints .
Tutorial steps
Creating a Private Endpoint resource.
Configure a VPC peering connection.
Configuring the serving binary of a Model resource for deployment to a Private Endpoint resource.
Deploying a Model resource to a Private Endpoint resource.
Send a prediction request to a Private Endpoint
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Language Models
Vertex AI LLM and streaming prediction .
Learn how to use Vertex AI LLM to download pretrained LLM model, make predictions and finetuning the model.
Learn more about Vertex AI Language Models .
Tutorial steps
Load a pretrained text generation model.
Make a nonstreaming prediction
Load a pretrained text generation model, which supports streaming.
Make a streaming prediction
Load a pretrained chat model.
Do a local interactive chat session.
Do a batch prediction with a text generation model.
Do a batch prediction with a text embedding model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Pre-built containers for prediction
Serving PyTorch image models with prebuilt containers on Vertex AI .
Learn how to package and deploy a PyTorch image classification model using a prebuilt Vertex AI container with TorchServe for serving online and batch predictions.
Learn more about Pre-built containers for prediction .
Tutorial steps
Download a pretrained image model from PyTorch
Create a custom model handler
Package model artifacts in a model archive file
Upload model for deployment
Deploy model for prediction
Make online predictions
Make batch predictions
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Inference
Train and deploy PyTorch models with prebuilt containers on Vertex AI .
Learn how to build, train and deploy a PyTorch image classification model using prebuilt containers for custom training and prediction.
Tutorial steps
Package training application into a Python source distribution
Configure and run training job in a prebuilt container
Package model artifacts in a model archive file
Upload model for deployment
Deploy model using a prebuilt container for prediction
Make online predictions
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Ray on Vertex AI overview
Get started with PyTorch on Ray on Vertex AI .
Learn how to efficiently distribute the training process of a PyTorch image classification model by leveraging Ray on Vertex AI.
Learn more about Ray on Vertex AI overview .
Tutorial steps
Prepare the training script
Submit a Ray job using the Ray Jobs API
Download a trained image model from PyTorch
Create a custom model handler
Package model artifacts in a model archive file
Register model in Vertex AI Model Registry
Deploy model in Vertex AI Endpoint
Make online predictions
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Ray on Vertex AI overview
Ray on Vertex AI cluster management .
Learn how to create a cluster, list existing clusters, get a cluster, update a cluster, and delete a cluster.
Learn more about Ray on Vertex AI overview .
Tutorial steps
Create a cluster.
List existing clusters.
Get a cluster.
Manually scale up the cluster, then scale down the cluster.
Autoscaling a cluster.
Delete existing clusters.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Ray on Vertex AI
Spark on Ray on Vertex AI
Spark on Ray on Vertex AI .
Learn how to use RayDP to run Spark applications on a Ray cluster on Vertex AI.
Learn more about Ray on Vertex AI .
Learn more about Spark on Ray on Vertex AI .
Tutorial steps
Create custom Ray on Vertex AI container image
Create a Ray cluster on Vertex AI using custom container image
Run Spark interactively on the cluster using RayDP
Run Spark application on cluster via Ray Job API
Read files from Google Cloud Storage in Spark application
Pandas UDF in Spark application on Ray on Vertex AI
Delete the Ray cluster on Vertex AI
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Training
Vertex AI Reduction Server
PyTorch distributed training with Vertex AI Reduction Server .
Learn how to create a PyTorch distributed training job that uses PyTorch distributed training framework and tools, and run the training job on the Vertex AI Training service with Reduction Server.
Learn more about Vertex AI Training .
Learn more about Vertex AI Reduction Server .
Tutorial steps
Create a PyTorch distributed training application
Package the training application with prebuilt containers
Create a custom job on Vertex AI with Reduction Server
Submit and monitor the job
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Custom training using Python package, managed text dataset, and TF Serving container .
Learn how to create a custom model using Custom Python Package Training and you learn how to serve the model using TensorFlow-Serving Container for online prediction.
Learn more about Custom training .
Tutorial steps
Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset
Download Data
Prepare CSV Files for creating managed dataset
Create custom training Python package
Create TensorFlow Serving container
Run custom Python package training with managed text dataset
Deploy a model and create an endpoint on Vertex AI
Predict on the endpoint
Create a Batch Prediction job on the model
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tabular Workflow for TabNet
Vertex AI Explanations with TabNet models .
Learn how to provide a sample plotting tool to visualize the output of TabNet, which is helpful in explaining the algorithm.
Learn more about Tabular Workflow for TabNet .
Tutorial steps
Setup the project.
Download the prediction data of pretrain model on Syn2 data.
Visualize and understand the feature importance based on the masks output.
Clean up the resource created by this tutorial.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
BigQuery ML ARIMA+ forecasting for tabular data
Train a BigQuery ML ARIMA_PLUS Model using Vertex AI tabular workflows .
Learn how to create the BigQuery ML ARIMA_PLUS model using a training Vertex AI Pipeline from Google Cloud Pipeline Components , and then do a batch prediction using the corresponding prediction pipeline.
Learn more about BigQuery ML ARIMA+ forecasting for tabular data .
Tutorial steps
Train the BigQuery ML ARIMA_PLUS model.
View BigQuery ML model evaluation.
Make a batch prediction with the BigQuery ML model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Google Cloud Pipeline Components
Prophet for tabular data
Train a Prophet Model using Vertex AI Tabular Workflows .
Learn how to create several Prophet models using a training Vertex AI Pipeline from Google Cloud Pipeline Components , and then do a batch prediction using the corresponding prediction pipeline.
Learn more about Google Cloud Pipeline Components .
Learn more about Prophet for tabular data .
Tutorial steps
1. Train the Prophet models.
1. View the evaluation metrics.
1. Make a batch prediction with the Prophet models.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tabular Workflow for TabNet
TabNet Pipeline .
Learn how to create classification models on tabular data using two of the Vertex AI TabNet Tabular Workflows.
Learn more about Tabular Workflow for TabNet .
Tutorial steps
Create a TabNet CustomJob. This is the best option if you know which hyperparameters to use for training.
Create a TabNet HyperparameterTuningJob. This allows you to get the best set of hyperparameters for your dataset.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Tabular Workflow for Wide & Deep
Wide & Deep Pipeline .
Learn how to create two classification models using Vertex AI Wide & Deep Tabular Workflows.
Learn more about Tabular Workflow for Wide & Deep .
Tutorial steps
Create a Wide & Deep CustomJob. This is the best option if you know which hyperparameters to use for training.
Create a Wide & Deep HyperparameterTuningJob. This allows you to get the best set of hyperparameters for your dataset.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI TensorBoard
Custom training
Vertex AI TensorBoard custom training with custom container .
Learn how to create a custom training job using custom containers, and monitor your training process on Vertex AI TensorBoard in near real time.
Learn more about Vertex AI TensorBoard .
Learn more about Custom training .
Tutorial steps
Create docker repository & config.
Create a custom container image with your customized training code.
Setup service account and Google Cloud Storage buckets.
Create & launch your custom training job with your custom container.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI TensorBoard
Custom training
Vertex AI TensorBoard custom training with prebuilt container .
Learn how to create a custom training job using prebuilt containers, and monitor your training process on Vertex AI TensorBoard in near real time.
Learn more about Vertex AI TensorBoard .
Learn more about Custom training .
Tutorial steps
Setup service account and Cloud Storage buckets.
Write your customized training code.
Package and upload your training code to Cloud Storage.
Create & launch your custom training job with Vertex AI TensorBoard enabled for near real time monitoring.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI TensorBoard
Vertex AI TensorBoard hyperparameter tuning with the HParams Dashboard .
In this notebook, you train a model and perform hyperparameter tuning using tensorflow.
Tutorial steps
Adapt TensorFlow runs to log hyperparameters and metrics.
Start runs and log them all under one parent directory.
Visualize the results in Vertex AI TensorBoard's HParams dashboard.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Profiler
Vertex AI TensorBoard
Profile model training performance using Cloud Profiler .
Learn how to enable Profiler for custom training jobs.
Learn more about Profiler .
Learn more about Vertex AI TensorBoard .
Tutorial steps
Setup a service account and a Cloud Storage bucket
Create a Vertex AI TensorBoard instance
Create and run a custom training job that enables Profiler
View the Profiler dashboard to debug your model training performance
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Profiler
Vertex AI TensorBoard
Profile model training performance using Cloud Profiler in custom training with prebuilt container .
Learn how to enable Profiler in Vertex AI for custom training jobs with a prebuilt container.
Learn more about Profiler .
Learn more about Vertex AI TensorBoard .
Tutorial steps
Prepare your custom training code and load your training code as a Python package to a prebuilt container
Create and run a custom training job that enables Profiler
View the Profiler dashboard to debug your model training performance
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI TensorBoard
Vertex AI Pipelines
Vertex AI TensorBoard integration with Vertex AI Pipelines .
Learn how to create a training pipeline using the KFP SDK, execute the pipeline in Vertex AI Pipelines, and monitor the training process on Vertex AI TensorBoard in near real time.
Learn more about Vertex AI TensorBoard .
Learn more about Vertex AI Pipelines .
Tutorial steps
Setup a service account and Google Cloud Storage buckets.
Construct a KFP pipeline with your custom training code.
Compile and execute the KFP pipeline in Vertex AI Pipelines with Vertex AI TensorBoard enabled for near real time monitoring.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Hyperparameter Tuning
Distributed Vertex AI Hyperparameter Tuning .
In this notebook, you create a custom trained model from a Python script in a Docker container.
Learn more about Vertex AI Hyperparameter Tuning .
Tutorial steps
Training using a Python package.
Report accuracy when hyperparameter tuning.
Save the model artifacts to Cloud Storage using Cloud StorageFuse.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Training
Get started with Vertex AI Training for LightGBM .
Learn how to train a LightGBM custom model using the custom container method for Vertex AI Training.
Tutorial steps
Training using a Python package.
Save the model artifacts to Cloud Storage using Cloud StorageFuse.
Construct a FastAPI prediction server.
Construct a Dockerfile deployment image for the server.
Test the deployment image locally (optional and not for Colab users).
Create a Vertex AI model resource.
Run a batch prediction job.
Deploy the model to an endpoint and send online prediction requests.
Clean up the created resources.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI distributed training
Get started with Vertex AI distributed training .
Learn how to use Vertex AI distributed training when training with Vertex AI .
Learn more about Vertex AI distributed training .
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Hyperparameter Tuning
Run hyperparameter tuning for a TensorFlow model .
Learn how to run a Vertex AI hyperparameter tuning job for a TensorFlow model.
Learn more about Vertex AI Hyperparameter Tuning .
Tutorial steps
Modify training application code for automated hyperparameter tuning.
Containerize training application code.
Configure and launch a hyperparameter tuning job with the Vertex AI Python SDK.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI hyperparameter tuning
Vertex AI Hyperparameter Tuning for XGBoost .
Learn how to use the Vertex AI hyperparameter tuning service for training an XGBoost model.
Learn more about Vertex AI hyperparameter tuning .
Tutorial steps
Train using a Python training application package.
Report accuracy during hyperparameter tuning.
Save the model artifacts to Cloud Storage using Cloud StorageFuse.
List the best model.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Training
PyTorch image classification multi-node distributed data parallel training on cpu using Vertex AI training with custom container .
Learn how to create a distributed PyTorch training job using Vertex AI SDK for Python and custom containers.
Learn more about Vertex AI Training .
Tutorial steps
Setting up your Google Cloud project
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Training
PyTorch image classification using multi-node NCCL distributed data parallel training on CPU and Vertex AI .
Learn how to create a distributed PyTorch training job using Vertex AI SDK for Python and custom containers.
Learn more about Vertex AI Training .
Tutorial steps
Building a custom container using Artifact Registry and Docker.
Creating a Vertex AI tensorboard instance to store your Vertex AI experiment.
Run a Vertex AI training job using Vertex AI SDK for Python.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI .
Learn to build, train, tune and deploy a PyTorch model on Vertex AI.
Learn more about Custom training .
Tutorial steps
Create training package for the text classification model.
Train the model with custom training on Vertex AI.
Check the created model artifacts.
Create a custom container for predictions.
Deploy the trained model to a Vertex AI Endpoint using the custom container for predictions.
Send online prediction requests to the deployed model and validate.
Clean up the resources created in this notebook.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
PyTorch integration in Vertex AI
Train PyTorch model on Vertex AI with data from Cloud Storage .
Learn how to create a training job using PyTorch and a dataset stored on Cloud Storage.
Learn more about PyTorch integration in Vertex AI .
Tutorial steps
Writing a custom training script that creates your train & test datasets and trains the model.
Running a CustomTrainingJob using Vertex AI SDK for Python.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Distributed training
Using PyTorch torchrun to simplify multi-node training with custom containers .
Learn how to train an Imagenet model using PyTorch's Torchrun on multiple nodes.
Learn more about Distributed training .
Tutorial steps
Create a shell script to start an ETCD cluster on the master node
Create a training script using code from PyTorch Elastic's GitHub repository
Create containers that download the data, and start an ETCD cluster on the host
Train the model using multiple nodes with GPUs
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Custom training
Distributed XGBoost training with Dask .
Learn how to create a distributed training job using XGBoost with Dask.
Learn more about Custom training .
Tutorial steps
Configure the PROJECT_ID and LOCATION variables for your Google Cloud project.
Create a Cloud Storage bucket to store your model artifacts.
Build a custom Docker container that hosts your training code and push the container image to Artifact Registry.
Run a Vertex AI SDK CustomContainerTrainingJob
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
vector_search
Using Vertex AI Multimodal Embeddings and Vector Search .
Learn how to encode custom text embeddings, create an Approximate Nearest Neighbor index, and query against indexes.
Tutorial steps
Convert an image dataset to embeddings.
Create an index.
Upload embeddings to the index.
Create an index endpoint.
Deploy the index to the index endpoint.
Perform an online query.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Vector Search
Using Vertex AI Vector Search for StackOverflow Questions .
Learn how to encode custom text embeddings, create an Approximate Nearest Neighbor index, and query against indexes.
Learn more about Vertex AI Vector Search .
Tutorial steps
Create ANN index.
Create an index endpoint with VPC Network.
Deploy ANN index.
Perform online query.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Vector Search
Vertex AI embeddings for text
Using Vertex AI Vector Search and Vertex AI embeddings for text for StackOverflow Questions .
Learn how to encode text embeddings, create an Approximate Nearest Neighbor index, and query against indexes.
Learn more about Vertex AI Vector Search .
Learn more about Vertex AI embeddings for text .
Tutorial steps
Convert a BigQuery dataset to embeddings.
Create an index.
Upload embeddings to the index.
Create an index endpoint.
Deploy the index to the index endpoint.
Perform an online query.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Vector Search
Create Vertex AI Vector Search index .
Learn how to create Approximate Nearest Neighbor Index, query against indexes, and validate the performance of the index.
Learn more about Vertex AI Vector Search .
Tutorial steps
Create ANN Index and Brute Force Index.
Create an IndexEndpoint with VPC Network.
Deploy ANN Index and Brute Force Index.
Perform online query.
Compute recall.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Vizier
Optimizing multiple objectives with Vertex AI Vizier .
Learn how to use Vertex AI Vizier to optimize a multi-objective study.
Learn more about Vertex AI Vizier .
Tutorial steps
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Vizier
Get started with Vertex AI Vizier .
Learn how to use Vertex AI Vizier when training with Vertex AI.
Learn more about Vertex AI Vizier .
Tutorial steps
Hyperparameter tuning with Random algorithm.
Hyperparameter tuning with Vertex AI Vizier (Bayesian) algorithm.
Suggesting trials and updating results for Vertex AI Vizier study
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Vertex AI Training
Train a multi-class classification model for ads-targeting .
Learn how to collect data from BigQuery, preprocess it, and train a multi-class classification model on an e-commerce dataset.
Learn more about Vertex AI Workbench .
Learn more about Vertex AI Training .
Tutorial steps
Fetch the required data from BigQuery
Preprocess the data
Train a TensorFlow (>=2.4) classification model
Evaluate the loss for the trained model
Automate the notebook execution using the executor feature
Save the model to a Cloud Storage path
Clean up the created resources
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Vertex Explainable AI
Taxi fare prediction using the Chicago Taxi Trips dataset .
The goal of this notebook is to provide an overview on Vertex AI features like Vertex Explainable AI and BigQuery in Notebooks by trying to solve a taxi fare prediction problem.
Learn more about Vertex AI Workbench .
Learn more about Vertex Explainable AI .
Tutorial steps
Loading the dataset using "BigQuery in Notebooks".
Performing exploratory data analysis on the dataset.
Feature selection and preprocessing.
Building a linear regression model using scikitlearn.
Configuring the model for Vertex Explainable AI.
Deploying the model to Vertex AI.
Testing the deployed model.
Clean up.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
BigQuery ML
Forecasting retail demand with Vertex AI and BigQuery ML .
Learn how to build ARIMA (Autoregressive integrated moving average) model from BigQuery ML on retail data
Learn more about Vertex AI Workbench .
Learn more about BigQuery ML .
Tutorial steps
Explore data
Model with BigQuery and the ARIMA model
Evaluate the model
Evaluate the model results using BigQuery ML (on training data)
Evaluate the model results MAE, MAPE, MSE, RMSE (on test data)
Use the executor feature
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
BigQuery ML
Interactive exploratory analysis of BigQuery data in a notebook .
Learn about various ways to explore and gain insights from BigQuery data in a Jupyter notebook environment.
Learn more about Vertex AI Workbench .
Learn more about BigQuery ML .
Tutorial steps
Using Python & SQL to query public data in BigQuery
Exploring the dataset using BigQuery INFORMATION_SCHEMA
Creating interactive elements to help explore interesting parts of the data
Doing some exploratory correlation and time series analysis
Creating static and interactive outputs (data tables and plots) in the notebook
Saving some outputs to Cloud Storage
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Custom training
Build a fraud detection model on Vertex AI .
This tutorial demonstrates data analysis and model-building using a synthetic financial dataset.
Learn more about Vertex AI Workbench .
Learn more about Custom training .
Tutorial steps
Installation of required libraries
Reading the dataset from a Cloud Storage bucket
Performing exploratory analysis on the dataset
Preprocessing the dataset
Training a random forest model using scikitlearn
Saving the model to a Cloud Storage bucket
Creating a Vertex AI model resource and deploying to an endpoint
Running the WhatIf Tool on test data
Undeploying the model and cleaning up the model resources
Colab
GitHub
Vertex AI Workbench
Vertex AI Workbench
BigQuery ML
Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
Learn how to train, evaluate a propensity model in BigQuery ML.
Learn more about Vertex AI Workbench .
Learn more about BigQuery ML .
Tutorial steps
Explore the data exported from Google Analytics 4 in BigQuery.
Prepare the training data using demographic, behavioral data, and labels (churn/notchurn).
Train an XGBoost model using BigQuery ML.
Evaluate the model using BigQuery ML.
Use BigQuery ML to predict which users are likely to churn.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Vertex AI training
Predictive maintenance using Vertex AI .
Learn how to use the executor feature of Vertex AI Workbench to automate a workflow to train and deploy a model.
Learn more about Vertex AI Workbench .
Learn more about Vertex AI training .
Tutorial steps
Loading the required dataset from a Cloud Storage bucket.
Analyzing the fields present in the dataset.
Selecting the required data for the predictive maintenance model.
Training an XGBoost regression model for predicting the remaining useful life.
Evaluating the model.
Running the notebook endtoend as a training job using Executor.
Deploying the model on Vertex AI.
Clean up.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
BigQuery ML
Analysis of pricing optimization on CDM Pricing Data .
The objective of this notebook is to build a pricing optimization model using BigQuery ML.
Learn more about Vertex AI Workbench .
Learn more about BigQuery ML .
Tutorial steps
Load the required dataset from a Cloud Storage bucket.
Analyze the fields present in the dataset.
Process the data to build a model.
Build a BigQuery ML forecast model on the processed data.
Get forecasted values from the BigQuery ML model.
Interpret the forecasts to identify the best prices.
Clean up.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Dataproc Serverless for Spark
Digest and analyze data from BigQuery with Dataproc .
This notebook tutorial runs an Apache Spark job that fetches data from the BigQuery "GitHub Activity Data" dataset, queries the data, and then writes the results back to BigQuery.
Learn more about Vertex AI Workbench .
Learn more about Dataproc Serverless for Spark .
Tutorial steps
Setting up a Google Cloud project and Dataproc cluster.
Configuring the sparkbigqueryconnector.
Ingesting data from BigQuery into a Spark DataFrame.
Preprocessing ingested data.
Querying the most frequently used programming language in monoglot repos.
Querying the average size (MB) of code in each language stored in monoglot repos.
Querying the languages files most frequently found together in polyglot repos.
Writing the query results back into BigQuery.
Deleting the resources created for this notebook tutorial.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Vertex AI Workbench
Dataproc
SparkML with Dataproc and BigQuery .
This tutorial runs an Apache SparkML job that fetches data from the BigQuery dataset, performs exploratory data analysis, cleans the data, executes feature engineering, trains the model, evaluates the model, outputs results, and saves the model to a Cloud Storage bucket.
Learn more about Vertex AI Workbench .
Learn more about Dataproc .
Tutorial steps
Sets up a Google Cloud project and Dataproc cluster.
Creates a Cloud Storage bucket and a BigQuery dataset.
Configures the sparkbigqueryconnector.
Ingests BigQuery data into a Spark DataFrame.
Performa Exploratory Data Analysis (EDA).
Visualizes the data with samples.
Cleans the data.
Selects features.
Trains the model.
Outputs results.
Saves the model to a Cloud Storage bucket.
Deletes the resources created for the tutorial.
Colab
Colab Enterprise
GitHub
Vertex AI Workbench
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

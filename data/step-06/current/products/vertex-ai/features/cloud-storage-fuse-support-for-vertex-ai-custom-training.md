---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.173Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Cloud Storage Fuse support for Vertex AI custom training"
feature_slug: "cloud-storage-fuse-support-for-vertex-ai-custom-training"
latest_feature_date: "2021-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
keywords:
  - "storage"
  - "fuse"
  - "vertex"
  - "ai"
  - "custom"
  - "training"
  - "jobs"
  - "can"
---

# Cloud Storage Fuse support for Vertex AI custom training

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI custom training jobs can access Cloud Storage buckets through local filesystem read/write using Cloud Storage Fuse in Preview.

## Extended Definition

Vertex AI custom training jobs can access Cloud Storage buckets through local filesystem read/write using Cloud Storage Fuse in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- Monitor training To view training logs, do the following: In the Google Cloud console, in the Vertex AI section, go to the Custom jobs page.
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- After a few moments, you can view this resource on the Custom jobs page of the Training section: Go to Custom jobs The custom job runs the training application using the computing resources that you specified in this section.

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- Initialize the Vertex AI SDK with the project, staging bucket, location and experiment. from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , staging bucket = BUCKET URI , location = REGION , experiment = EXPERIMENT NAME ) aiplatform . autolog () Define the pipeline tasks In your notebook, define your pipeline custom model training evaluation pipeline : from kfp import dsl from kfp.dsl import importer from kfp.dsl import OneOf from google cloud pipeline components.v1.custom job import CustomTrainingJobOp from google cloud pipeline components.types import artifact types from google cloud pipeline components.v1.model import ModelUploadOp from google cloud pipeline components.v1.batch predict job import ModelBatchPredictOp from google cloud pipeline components.v1.model evaluation import ModelEvaluationRegressionOp from google cloud pipeline components.v1.vertex notification email import VertexNotificationEmailOp from google cloud pipeline components.v1.endpoint import ModelDeployOp from google cloud pipeline components.v1.endpoint import EndpointCreateOp from google.cloud import aiplatform define the train-deploy pipeline @dsl . pipeline ( name = "custom-model-training-evaluation-pipeline" ) def custom model training evaluation pipeline ( project : str , location : str , training job display name : str , worker pool specs : list , base output dir : str , prediction container uri : str , model display name : str , batch prediction job display name : str , target field name : str , test data gcs uri : list , ground truth gcs source : list , batch predictions gcs prefix : str , batch predictions input format : str = "csv" , batch predictions output format : str = "jsonl" , ground truth format : str = "csv" , parent model resource name : str = None , parent model artifact uri : str = None , existing model : bool = False ): Notification task notify task = VertexNotificationEmailOp ( recipients = EMAIL RECIPIENTS ) with dsl .
- At the end of this section, your Files panel should contain the following files and folders under training-package . dist trainer-0.1.tar.gz trainer init .py task.py trainer.egg-info init .py setup.py Upload the custom training package to Cloud Storage Create a Cloud Storage bucket.


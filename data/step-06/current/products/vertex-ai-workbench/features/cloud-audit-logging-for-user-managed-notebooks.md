---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.739Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Cloud Audit Logging for user-managed notebooks"
feature_slug: "cloud-audit-logging-for-user-managed-notebooks"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/jupyter-notebooks"
keywords:
  - "audit"
  - "logging"
  - "for"
  - "user"
  - "managed"
  - "notebooks"
  - "became"
  - "generally"
---

# Cloud Audit Logging for user-managed notebooks

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

Cloud Audit Logging became generally available for user-managed notebooks in Vertex AI Workbench, enabling audit trail logging for notebook actions.

## Extended Definition

Cloud Audit Logging became generally available for user-managed notebooks in Vertex AI Workbench, enabling audit trail logging for notebook actions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/jupyter-notebooks)

## Supporting Pages

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Grant roles to your Google Account: ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/bigquery.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.user ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/storage.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/pubsub.editor ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/cloudfunctions.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.viewer ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.configWriter ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/iam.serviceAccountUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/eventarc.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.colabEnterpriseUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/artifactregistry.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/serviceusage.serviceUsageAdmin Enable the following APIs Artifact Registry API BigQuery API Cloud Build API Cloud Functions API Cloud Logging API Pub/Sub API Cloud Run Admin API Cloud Storage API Eventarc API Service Usage API Vertex AI API ! gcloud services enable artifactregistry.googleapis.com bigquery.googleapis.com cloudbuild.googleapis.com cloudfunctions.googleapis.com logging.googleapis.com pubsub.googleapis.com run.googleapis.com storage-component.googleapis.com eventarc.googleapis.com serviceusage.googleapis.com aiplatform.googleapis.com Grant roles to your project's service accounts: See the names of your service accounts ! gcloud iam service-accounts list Note the name of your Compute service agent.
- With the Inline Editor, open the file main.py and replace the contents with the following: Replace PROJECT ID , REGION , BUCKET NAME with the values you used earlier. import json import functions framework import requests import google.auth import google.auth.transport.requests CloudEvent function to be triggered by an Eventarc Cloud Audit Logging trigger Note: this is NOT designed for second-party (Cloud Audit Logs -> Pub/Sub) triggers! @functions framework . cloud event def mlops entrypoint ( cloudevent ): Print out the CloudEvent's (required) type property See https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#type print ( f "Event type: { cloudevent [ 'type' ] } " ) Print out the CloudEvent's (optional) subject property See https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#subject if 'subject' in cloudevent : CloudEvent objects don't support get operations.
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Colab Colab Enterprise GitHub Vertex AI Workbench BigQuery datasets Vertex AI for BigQuery users Get started with BigQuery datasets .

### Ray on Vertex AI notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Colab Colab Enterprise GitHub Vertex AI Workbench BigQuery datasets Vertex AI for BigQuery users Get started with BigQuery datasets .

### Vertex AI notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .
- Colab Colab Enterprise GitHub Vertex AI Workbench BigQuery datasets Vertex AI for BigQuery users Get started with BigQuery datasets .


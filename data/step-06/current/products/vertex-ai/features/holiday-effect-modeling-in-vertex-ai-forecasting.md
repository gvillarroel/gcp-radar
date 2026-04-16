---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.165Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Holiday effect modeling in Vertex AI Forecasting"
feature_slug: "holiday-effect-modeling-in-vertex-ai-forecasting"
latest_feature_date: "2022-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
keywords:
  - "holiday"
  - "effect"
  - "modeling"
  - "vertex"
  - "ai"
  - "forecasting"
  - "supports"
  - "effects"
---

# Holiday effect modeling in Vertex AI Forecasting

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Forecasting supports modeling holiday effects during model training.

## Extended Definition

Vertex AI Forecasting supports modeling holiday effects during model training.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component)
- [https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide](https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)

## Supporting Pages

### Forecasting components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component)
- Source ID: `site-api-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Forecasting components Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud SDK includes the following operators related to tabular data forecasting pipelines: ForecastingPrepareDataForTrainOp ForecastingPreprocessingOp ForecastingValidationOp API reference For component reference, see the Google Cloud SDK reference page for Forecasting components .
- VertexNotificationEmailOp Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- The forecasting components let you compose tabular data forecasting pipelines with AutoML.

### AutoML beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide](https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Forecasting and regression metrics After your model is built, Vertex AI provides a variety of standard metrics for you to review.
- There's no perfect formula, but there are recommended minimums of example data: Classification problem: 50 rows x the number features Forecasting problem: 5000 rows x the number of features 10 unique values in the time series identifier column x the number of features Regression problem: 200 x the number of features Capture variation Your dataset should capture the diversity of your problem space.
- Prepare your data Image After you've decided which is right for you—a manual or the default split—you can add data in Vertex AI by using one of the following methods: You can import data either from your computer or from Cloud Storage in an available format (CSV or JSON Lines ) with the labels (and bounding boxes, if necessary) inline.
- Test your model Image Vertex AI uses 10% of your data automatically (or, if you chose your data split yourself, whatever percentage you opted to use) to test the model, and the "Evaluate" page tells you how the model did on that test data.

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Grant roles to your Google Account: ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/bigquery.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.user ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/storage.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/pubsub.editor ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/cloudfunctions.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.viewer ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.configWriter ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/iam.serviceAccountUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/eventarc.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.colabEnterpriseUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/artifactregistry.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/serviceusage.serviceUsageAdmin Enable the following APIs Artifact Registry API BigQuery API Cloud Build API Cloud Functions API Cloud Logging API Pub/Sub API Cloud Run Admin API Cloud Storage API Eventarc API Service Usage API Vertex AI API ! gcloud services enable artifactregistry.googleapis.com bigquery.googleapis.com cloudbuild.googleapis.com cloudfunctions.googleapis.com logging.googleapis.com pubsub.googleapis.com run.googleapis.com storage-component.googleapis.com eventarc.googleapis.com serviceusage.googleapis.com aiplatform.googleapis.com Grant roles to your project's service accounts: See the names of your service accounts ! gcloud iam service-accounts list Note the name of your Compute service agent.
- Initialize the Vertex AI SDK with the project, staging bucket, location and experiment. from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , staging bucket = BUCKET URI , location = REGION , experiment = EXPERIMENT NAME ) aiplatform . autolog () Define the pipeline tasks In your notebook, define your pipeline custom model training evaluation pipeline : from kfp import dsl from kfp.dsl import importer from kfp.dsl import OneOf from google cloud pipeline components.v1.custom job import CustomTrainingJobOp from google cloud pipeline components.types import artifact types from google cloud pipeline components.v1.model import ModelUploadOp from google cloud pipeline components.v1.batch predict job import ModelBatchPredictOp from google cloud pipeline components.v1.model evaluation import ModelEvaluationRegressionOp from google cloud pipeline components.v1.vertex notification email import VertexNotificationEmailOp from google cloud pipeline components.v1.endpoint import ModelDeployOp from google cloud pipeline components.v1.endpoint import EndpointCreateOp from google.cloud import aiplatform define the train-deploy pipeline @dsl . pipeline ( name = "custom-model-training-evaluation-pipeline" ) def custom model training evaluation pipeline ( project : str , location : str , training job display name : str , worker pool specs : list , base output dir : str , prediction container uri : str , model display name : str , batch prediction job display name : str , target field name : str , test data gcs uri : list , ground truth gcs source : list , batch predictions gcs prefix : str , batch predictions input format : str = "csv" , batch predictions output format : str = "jsonl" , ground truth format : str = "csv" , parent model resource name : str = None , parent model artifact uri : str = None , existing model : bool = False ): Notification task notify task = VertexNotificationEmailOp ( recipients = EMAIL RECIPIENTS ) with dsl .
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.


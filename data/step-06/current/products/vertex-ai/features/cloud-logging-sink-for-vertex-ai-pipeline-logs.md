---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.126Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Cloud Logging sink for Vertex AI pipeline logs"
feature_slug: "cloud-logging-sink-for-vertex-ai-pipeline-logs"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/cmek"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction"
keywords:
  - "logging"
  - "sink"
  - "vertex"
  - "ai"
  - "pipeline"
  - "logs"
  - "can"
  - "routed"
---

# Cloud Logging sink for Vertex AI pipeline logs

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Pipeline logs can be routed from Cloud Logging to a Pub/Sub sink for event-driven architectures.

## Extended Definition

Pipeline logs can be routed from Cloud Logging to a Pub/Sub sink for event-driven architectures.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)

## Supporting Pages

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Grant roles to your Google Account: ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/bigquery.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.user ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/storage.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/pubsub.editor ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/cloudfunctions.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.viewer ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.configWriter ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/iam.serviceAccountUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/eventarc.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.colabEnterpriseUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/artifactregistry.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/serviceusage.serviceUsageAdmin Enable the following APIs Artifact Registry API BigQuery API Cloud Build API Cloud Functions API Cloud Logging API Pub/Sub API Cloud Run Admin API Cloud Storage API Eventarc API Service Usage API Vertex AI API ! gcloud services enable artifactregistry.googleapis.com bigquery.googleapis.com cloudbuild.googleapis.com cloudfunctions.googleapis.com logging.googleapis.com pubsub.googleapis.com run.googleapis.com storage-component.googleapis.com eventarc.googleapis.com serviceusage.googleapis.com aiplatform.googleapis.com Grant roles to your project's service accounts: See the names of your service accounts ! gcloud iam service-accounts list Note the name of your Compute service agent.
- Initialize the Vertex AI SDK with the project, staging bucket, location and experiment. from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , staging bucket = BUCKET URI , location = REGION , experiment = EXPERIMENT NAME ) aiplatform . autolog () Define the pipeline tasks In your notebook, define your pipeline custom model training evaluation pipeline : from kfp import dsl from kfp.dsl import importer from kfp.dsl import OneOf from google cloud pipeline components.v1.custom job import CustomTrainingJobOp from google cloud pipeline components.types import artifact types from google cloud pipeline components.v1.model import ModelUploadOp from google cloud pipeline components.v1.batch predict job import ModelBatchPredictOp from google cloud pipeline components.v1.model evaluation import ModelEvaluationRegressionOp from google cloud pipeline components.v1.vertex notification email import VertexNotificationEmailOp from google cloud pipeline components.v1.endpoint import ModelDeployOp from google cloud pipeline components.v1.endpoint import EndpointCreateOp from google.cloud import aiplatform define the train-deploy pipeline @dsl . pipeline ( name = "custom-model-training-evaluation-pipeline" ) def custom model training evaluation pipeline ( project : str , location : str , training job display name : str , worker pool specs : list , base output dir : str , prediction container uri : str , model display name : str , batch prediction job display name : str , target field name : str , test data gcs uri : list , ground truth gcs source : list , batch predictions gcs prefix : str , batch predictions input format : str = "csv" , batch predictions output format : str = "jsonl" , ground truth format : str = "csv" , parent model resource name : str = None , parent model artifact uri : str = None , existing model : bool = False ): Notification task notify task = VertexNotificationEmailOp ( recipients = EMAIL RECIPIENTS ) with dsl .
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.

### Introduction to Vertex AI Pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Structure of an ML pipeline Pipeline tasks and components Life cycle of an ML pipeline Use Vertex ML Metadata to track the lineage of ML artifacts Add pipeline runs to experiments Note: If you're experienced in creating ML pipelines using the Kubeflow Pipelines SDK and want to understand the differences between Vertex AI Pipelines and Kubeflow Pipelines, see Migrate from Kubeflow Pipelines to Vertex AI Pipelines .
- To learn more, run the "Vertex AI Pipelines: Lightweight Python function-based components, and component I/O" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Pipelines lets you automate, monitor, and govern your machine learning (ML) systems in a serverless manner by using ML pipelines to orchestrate your ML workflows.
- Using Vertex AI Pipelines, you can create an ML pipeline run in the following ways: Use the compiled YAML definition of a pipeline Use a pipeline template from the Template Gallery For more information about how to create a pipeline run, see Run a pipeline .
- Use Knowledge Catalog to track pipeline artifact lineage Knowledge Catalog is a global and cross-project data fabric integrated with multiple systems within Google Cloud, such as Vertex AI, BigQuery, and Cloud Composer.

### "Customer-managed encryption keys (CMEK) \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines BatchPredictionJob (excludes AutoML image batchPrediction) Any temporary files (for example, model files, logs, VM disks) used in the job to proceed the batch prediction job.
- Cloud Logging : When you run a training job, Vertex AI training saves logs to Logging .
- Deploy and manage public endpoints Deploy and manage index endpoints in a VPC network Vector Search Private Service Connect Colab Enterprise runtime The boot disk and data disks of the runtime's VM Use customer-managed encryption keys (CMEK) in Colab Enterprise Colab Enterprise notebook The notebook file and its comments Use customer-managed encryption keys (CMEK) in Colab Enterprise Vertex AI Agent Engine The copy of your agent source files, including code, scripts, and any dependency files The container images built from your agent source files The running instances deployed from your agent container images Vertex AI Agent Engine overview CMEK support for Generative AI tuning pipelines CMEK support is provided in the tuning pipeline of the following models: BERT T5 image-generation (GPU) Limitations CMEK support isn't provided in the following: AutoML image model batch prediction ( BatchPredictionJob ) TPU tuning Configure CMEK for your resources The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Vertex AI encrypter and decrypter permissions for your key, and create resources that use CMEK.
- Train a classification or regression model Train a forecast model Train an AutoML Edge model using the Cloud console Train an AutoML Edge model using the Vertex AI API Creating training pipelines Importing models to Vertex AI Endpoint All model files used for the model deployment under the endpoint.


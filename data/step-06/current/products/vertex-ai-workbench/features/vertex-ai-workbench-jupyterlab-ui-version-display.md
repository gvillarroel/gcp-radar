---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.274Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench JupyterLab UI version display"
feature_slug: "vertex-ai-workbench-jupyterlab-ui-version-display"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "jupyterlab"
  - "ui"
  - "version"
  - "display"
  - "user"
---

# Vertex AI Workbench JupyterLab UI version display

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The Vertex AI Workbench user-managed notebooks service corrected the version shown in the JupyterLab user interface.

## Extended Definition

The Vertex AI Workbench user-managed notebooks service corrected the version shown in the JupyterLab user interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- DATASET NAME = "mlops" TABLE NAME = "chicago" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } Note: To optionally upload your model as a new model version instead of a new model in Vertex AI Model Registry, set existing model to True .
- VertexModel , metadata = { "resourceName" : parent model resource name }, ) . after ( import unmanaged model task ) Upload the model as a version model version upload op = ModelUploadOp ( project = project , location = location , display name = model display name , parent model = import registry model task . outputs [ "artifact" ], unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) with dsl .
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- However, even granting a principal full access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.


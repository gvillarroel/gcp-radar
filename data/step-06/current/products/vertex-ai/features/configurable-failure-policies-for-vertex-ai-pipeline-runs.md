---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.166Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Configurable failure policies for Vertex AI pipeline runs"
feature_slug: "configurable-failure-policies-for-vertex-ai-pipeline-runs"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
keywords:
  - "configurable"
  - "failure"
  - "policies"
  - "vertex"
  - "ai"
  - "pipeline"
  - "runs"
  - "now"
---

# Configurable failure policies for Vertex AI pipeline runs

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now allows users to configure a failure policy when running a pipeline.

## Extended Definition

Vertex AI now allows users to configure a failure policy when running a pipeline.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)

## Supporting Pages

### Introduction to Vertex AI Pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Structure of an ML pipeline Pipeline tasks and components Life cycle of an ML pipeline Use Vertex ML Metadata to track the lineage of ML artifacts Add pipeline runs to experiments Note: If you're experienced in creating ML pipelines using the Kubeflow Pipelines SDK and want to understand the differences between Vertex AI Pipelines and Kubeflow Pipelines, see Migrate from Kubeflow Pipelines to Vertex AI Pipelines .
- Monitor, visualize, and analyze runs : After you create a pipeline run, you can do the following to monitor the performance, status, and costs of pipeline runs: Configure email notifications for pipeline failures.
- Add pipeline runs to experiments Vertex AI Experiments lets you track and analyze various model architectures, hyperparameters, and training environments to find the best model for your ML use case.
- For information about using pipeline runs to experiment on your ML workflow using Vertex AI Experiments, see Add your pipeline runs to experiments .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Console UI and Vertex AI SDK will support triggering pipeline job reruns.
- Console UI and Vertex AI SDK will support triggering pipeline job reruns.
- The size of this field should not exceed 200KB. description string Description of the Artifact LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string OutputsEntry JSON representation { "key" : string , "value" : { object ( ArtifactList ) } } Fields key string value object ( ArtifactList ) LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string RuntimeConfig JSON representation { "parameters" : { string : { object ( Value ) } , ... } , "gcsOutputDirectory" : string , "parameterValues" : { string : value , ... } , "failurePolicy" : enum ( PipelineFailurePolicy ) , "inputArtifacts" : { string : { object ( InputArtifact ) } , ... } } Fields parameters (deprecated) map (key: string, value: object ( Value )) This item is deprecated!
- The size of this field should not exceed 200KB. description string Description of the Artifact LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string OutputsEntry JSON representation { "key" : string , "value" : { object ( ArtifactList ) } } Fields key string value object ( ArtifactList ) LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string RuntimeConfig JSON representation { "parameters" : { string : { object ( Value ) } , ... } , "gcsOutputDirectory" : string , "parameterValues" : { string : value , ... } , "failurePolicy" : enum ( PipelineFailurePolicy ) , "inputArtifacts" : { string : { object ( InputArtifact ) } , ... } } Fields parameters (deprecated) map (key: string, value: object ( Value )) This item is deprecated!

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- In the console, you should see a new pipeline run in the Pipelines page: Go to Pipeline Runs After the pipeline run is complete, you should see either a new model named taxifare-prediction-model or a new model version in Vertex AI Model Registry: Go to Model Registry You should also see a new batch prediction job: Go to Batch Predictions Automatically run the pipeline There are two ways to automatically run the pipeline: on a schedule or when new data is inserted into the dataset.
- This pipeline executes the custom training package, uploads the model to the Vertex AI Model Registry, runs the evaluation job, and sends an email notification.
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .


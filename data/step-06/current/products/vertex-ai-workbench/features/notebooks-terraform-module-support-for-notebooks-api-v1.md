---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.737Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Notebooks Terraform module support for Notebooks API v1"
feature_slug: "notebooks-terraform-module-support-for-notebooks-api-v1"
latest_feature_date: "2021-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
keywords:
  - "notebooks"
  - "terraform"
  - "module"
  - "for"
  - "api"
  - "v1"
  - "the"
  - "now"
---

# Notebooks Terraform module support for Notebooks API v1

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

The Notebooks Terraform Module now supports the Notebooks API v1.

## Extended Definition

The Notebooks Terraform Module now supports the Notebooks API v1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)

## Supporting Pages

### Notebooks API \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations.executions Methods create POST /v1/{parent}/executions Creates a new Execution in a given project and location. delete DELETE /v1/{name} Deletes execution get GET /v1/{name} Gets details of executions list GET /v1/{parent}/executions Lists executions in a given project and location REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name} Deletes a single Instance. diagnose POST /v1/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v1/{name} Gets details of a single Instance. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. getInstanceHealth GET /v1/{name}:getInstanceHealth Checks whether a notebook instance is healthy. isUpgradeable GET /v1/{notebookInstance}:isUpgradeable Checks whether a notebook instance is upgradable. list GET /v1/{parent}/instances Lists instances in a given project and location. migrate POST /v1/{name}:migrate Migrates an existing User-Managed Notebook to Workbench Instances. register POST /v1/{parent}/instances:register Registers an existing legacy notebook instance to the Notebooks API server. report POST /v1/{name}:report Allows notebook instances to report their latest instance information to the Notebooks API server. reset POST /v1/{name}:reset Resets a notebook instance. rollback POST /v1/{name}:rollback Rollbacks a notebook instance to the previous version. setAccelerator PATCH /v1/{name}:setAccelerator Updates the guest accelerators of a single Instance. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. setLabels PATCH /v1/{name}:setLabels Replaces all the labels of an Instance. setMachineType PATCH /v1/{name}:setMachineType Updates the machine type of a single Instance. start POST /v1/{name}:start Starts a notebook instance. stop POST /v1/{name}:stop Stops a notebook instance. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateConfig PATCH /v1/{name}:updateConfig Update Notebook Instance configurations. updateMetadataItems PATCH /v1/{name}:updateMetadataItems Add/update metadata items for an instance. updateShieldedInstanceConfig PATCH /v1/{name}:updateShieldedInstanceConfig Updates the Shielded instance configuration of a single Instance. upgrade POST /v1/{name}:upgrade Upgrades a notebook instance to the latest version.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://notebooks.googleapis.com REST Resource: v2.projects.locations Methods get GET /v2/{name} Gets information about a location. list GET /v2/{name}/locations Lists information about the supported locations for this service.
- This service provides the following discovery documents: https://notebooks.googleapis.com/$discovery/rest?version=v2 https://notebooks.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.runtimes Methods create POST /v1/{parent}/runtimes Creates a new Runtime in a given project and location. delete DELETE /v1/{name} Deletes a single Runtime. get GET /v1/{name} Gets details of a single Runtime. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/runtimes Lists Runtimes in a given project and location. migrate POST /v1/{name}:migrate Migrate an existing Runtime to a new Workbench Instance. patch PATCH /v1/{runtime.name} Update Notebook Runtime configuration. reportEvent POST /v1/{name}:reportEvent Reports and processes a runtime event. reset POST /v1/{name}:reset Resets a Managed Notebook Runtime. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v1/{name}:start Starts a Managed Notebook Runtime. stop POST /v1/{name}:stop Stops a Managed Notebook Runtime. switch POST /v1/{name}:switch Switch a Managed Notebook Runtime. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.

### "Notebooks API usage overview \_|\_ Vertex AI Workbench \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- API versions The following API versions are available: v2 ( generally available ) is for managing Vertex AI Workbench instances. v1 ( generally available ) is for managing user-managed notebooks and managed notebooks instances. v1beta1 is scheduled for removal.
- Type, method, and field names Depending on whether you are using client libraries, REST, or gRPC, the type, method, and field names for the API vary somewhat: REST is arranged by resource hierarchies and their methods.
- See the RPC reference for this API, which provides a generic description of the types, methods, and fields generated for a gRPC library.
- In addition, when calling the REST API, the default value behavior for protocol buffers may result in missing fields in a JSON response.

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Use the in operator to verify subject is present. print ( f "Subject: { cloudevent [ 'subject' ] } " ) Print out details from the protoPayload This field encapsulates a Cloud Audit Logging entry See https://cloud.google.com/logging/docs/audit#audit log entry structure payload = cloudevent . data . get ( "protoPayload" ) if payload : print ( f "API method: { payload . get ( 'methodName' ) } " ) print ( f "Resource name: { payload . get ( 'resourceName' ) } " ) print ( f "Principal: { payload . get ( 'authenticationInfo' , dict ()) . get ( 'principalEmail' ) } " ) row count = payload . get ( 'metadata' , dict ()) . get ( 'tableDataChange' , dict ()) . get ( 'insertedRowsCount' ) print ( f "No. of rows: { row count } !!" ) if row count : if int ( row count ) > 0 : print ( "Pipeline trigger Condition met !!" ) submit pipeline job () else : print ( "No pipeline triggered !!!" ) def submit pipeline job (): PROJECT ID = ' PROJECT ID ' REGION = ' REGION ' BUCKET NAME = " BUCKET NAME " DATASET NAME = "mlops" TABLE NAME = "chicago" base output dir = BUCKET NAME BUCKET URI = "gs:// {} " . format ( BUCKET NAME ) PIPELINE ROOT = " {} /pipeline root/chicago-taxi-pipe" . format ( BUCKET URI ) PIPELINE NAME = "vertex-mlops-pipeline-tutorial" EXPERIMENT NAME = PIPELINE NAME + "-experiment" REPO NAME = "mlops" TEMPLATE NAME = "custom-model-training-evaluation-pipeline" TRAINING JOB DISPLAY NAME = "taxifare-prediction-training-job" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } TEMPLATE URI = f "https:// { REGION } -kfp.pkg.dev/ { PROJECT ID } / { REPO NAME } / { TEMPLATE NAME } /latest" print ( "TEMPLATE URI: " , TEMPLATE URI ) request body = { "name" : PIPELINE NAME , "displayName" : PIPELINE NAME , "runtimeConfig" :{ "gcsOutputDirectory" : PIPELINE ROOT , "parameterValues" : parameters , }, "templateUri" : TEMPLATE URI } pipeline url = "https://us-central1-aiplatform.googleapis.com/v1/projects/ {} /locations/ {} /pipelineJobs" . format ( PROJECT ID , REGION ) creds , project = google . auth . default () auth req = google . auth . transport . requests .
- Grant roles to your Google Account: ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/bigquery.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.user ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/storage.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/pubsub.editor ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/cloudfunctions.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.viewer ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.configWriter ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/iam.serviceAccountUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/eventarc.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.colabEnterpriseUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/artifactregistry.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/serviceusage.serviceUsageAdmin Enable the following APIs Artifact Registry API BigQuery API Cloud Build API Cloud Functions API Cloud Logging API Pub/Sub API Cloud Run Admin API Cloud Storage API Eventarc API Service Usage API Vertex AI API ! gcloud services enable artifactregistry.googleapis.com bigquery.googleapis.com cloudbuild.googleapis.com cloudfunctions.googleapis.com logging.googleapis.com pubsub.googleapis.com run.googleapis.com storage-component.googleapis.com eventarc.googleapis.com serviceusage.googleapis.com aiplatform.googleapis.com Grant roles to your project's service accounts: See the names of your service accounts ! gcloud iam service-accounts list Note the name of your Compute service agent.
- Initialize the Vertex AI SDK with the project, staging bucket, location and experiment. from google.cloud import aiplatform aiplatform . init ( project = PROJECT ID , staging bucket = BUCKET URI , location = REGION , experiment = EXPERIMENT NAME ) aiplatform . autolog () Define the pipeline tasks In your notebook, define your pipeline custom model training evaluation pipeline : from kfp import dsl from kfp.dsl import importer from kfp.dsl import OneOf from google cloud pipeline components.v1.custom job import CustomTrainingJobOp from google cloud pipeline components.types import artifact types from google cloud pipeline components.v1.model import ModelUploadOp from google cloud pipeline components.v1.batch predict job import ModelBatchPredictOp from google cloud pipeline components.v1.model evaluation import ModelEvaluationRegressionOp from google cloud pipeline components.v1.vertex notification email import VertexNotificationEmailOp from google cloud pipeline components.v1.endpoint import ModelDeployOp from google cloud pipeline components.v1.endpoint import EndpointCreateOp from google.cloud import aiplatform define the train-deploy pipeline @dsl . pipeline ( name = "custom-model-training-evaluation-pipeline" ) def custom model training evaluation pipeline ( project : str , location : str , training job display name : str , worker pool specs : list , base output dir : str , prediction container uri : str , model display name : str , batch prediction job display name : str , target field name : str , test data gcs uri : list , ground truth gcs source : list , batch predictions gcs prefix : str , batch predictions input format : str = "csv" , batch predictions output format : str = "jsonl" , ground truth format : str = "csv" , parent model resource name : str = None , parent model artifact uri : str = None , existing model : bool = False ): Notification task notify task = VertexNotificationEmailOp ( recipients = EMAIL RECIPIENTS ) with dsl .
- With the Inline Editor, open the file main.py and replace the contents with the following: Replace PROJECT ID , REGION , BUCKET NAME with the values you used earlier. import json import functions framework import requests import google.auth import google.auth.transport.requests CloudEvent function to be triggered by an Eventarc Cloud Audit Logging trigger Note: this is NOT designed for second-party (Cloud Audit Logs -> Pub/Sub) triggers! @functions framework . cloud event def mlops entrypoint ( cloudevent ): Print out the CloudEvent's (required) type property See https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#type print ( f "Event type: { cloudevent [ 'type' ] } " ) Print out the CloudEvent's (optional) subject property See https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#subject if 'subject' in cloudevent : CloudEvent objects don't support get operations.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.AssignNotebookRuntime .
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- Example: type.googleapis.com/google.protobuf.StringValue This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot.


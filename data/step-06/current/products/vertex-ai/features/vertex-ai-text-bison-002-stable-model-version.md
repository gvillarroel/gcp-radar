---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.098Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI text-bison@002 stable model version"
feature_slug: "vertex-ai-text-bison-002-stable-model-version"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
keywords:
  - "vertex"
  - "ai"
  - "text"
  - "bison"
  - "002"
  - "stable"
  - "model"
  - "version"
---

# Vertex AI text-bison@002 stable model version

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The text-bison@002 model version is now available as the stable text foundation model release.

## Extended Definition

The text-bison@002 model version is now available as the stable text foundation model release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Download pretrained model from TensorFlow Hub Upload model for deployment Deploy model for online prediction Make online prediction with explanations Make batch predictions with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex Explainable AI Explaining text classification with Vertex Explainable AI .
- Tutorial steps Build and train a TensorFlow text classification model Upload model for deployment Deploy model for online prediction Make online prediction with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Feature Store Online feature serving and fetching of BigQuery data with Vertex AI Feature Store .

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- DATASET NAME = "mlops" TABLE NAME = "chicago" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } Note: To optionally upload your model as a new model version instead of a new model in Vertex AI Model Registry, set existing model to True .
- In the console, you should see a new pipeline run in the Pipelines page: Go to Pipeline Runs After the pipeline run is complete, you should see either a new model named taxifare-prediction-model or a new model version in Vertex AI Model Registry: Go to Model Registry You should also see a new batch prediction job: Go to Batch Predictions Automatically run the pipeline There are two ways to automatically run the pipeline: on a schedule or when new data is inserted into the dataset.
- VertexModel , metadata = { "resourceName" : parent model resource name }, ) . after ( import unmanaged model task ) Upload the model as a version model version upload op = ModelUploadOp ( project = project , location = location , display name = model display name , parent model = import registry model task . outputs [ "artifact" ], unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) with dsl .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Example: projects/{project}/locations/{location}/models/{model}@2 or projects/{project}/locations/{location}/models/{model}@golden if no version is specified, the default version will be deployed. gdcConnectedModel string GDC pretrained / Gemini model name.
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.


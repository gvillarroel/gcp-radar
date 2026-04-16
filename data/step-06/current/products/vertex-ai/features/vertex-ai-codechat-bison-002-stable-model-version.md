---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.097Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI codechat-bison@002 stable model version"
feature_slug: "vertex-ai-codechat-bison-002-stable-model-version"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
keywords:
  - "vertex"
  - "ai"
  - "codechat"
  - "bison"
  - "002"
  - "stable"
  - "model"
  - "version"
---

# Vertex AI codechat-bison@002 stable model version

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The codechat-bison@002 model version is now available as the stable code-chat foundation model release.

## Extended Definition

The codechat-bison@002 model version is now available as the stable code-chat foundation model release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to construct a Vertex AI pipeline, which evaluates new production data from a deployed model against other versions of the model, to determine if a contender model becomes the champion model for replacement in production.
- Learn how to construct a Vertex AI pipeline, which trains a new challenger version of a model, evaluates the model and compares the evaluation to the existing blessed model in production.
- Learn how to use Vertex AI Model Registry to create and register multiple versions of a model.
- Tutorial steps Create and register a first version of a model to Vertex AI Model Registry.

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Model and endpoint components Stay organized with collections Save and categorize content based on your preferences.
- Learn more about how to Import models to Vertex AI and Request predictions .
- Model , this resource is available in Vertex AI.

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Else (): Upload the model model upload op = ModelUploadOp ( project = project , location = location , display name = model display name , unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) Get the model (or model version) model resource = OneOf ( model version upload op . outputs [ "model" ], model upload op . outputs [ "model" ]) Batch prediction batch predict task = ModelBatchPredictOp ( project = project , job display name = batch prediction job display name , model = model resource , location = location , instances format = batch predictions input format , predictions format = batch predictions output format , gcs source uris = test data gcs uri , gcs destination output uri prefix = batch predictions gcs prefix , machine type = 'n1-standard-2' ) Evaluation task evaluation task = ModelEvaluationRegressionOp ( project = project , target field name = target field name , location = location , model= model resource, predictions format = batch predictions output format , predictions gcs source = batch predict task . outputs [ "gcs output directory" ], ground truth format = ground truth format , ground truth gcs source = ground truth gcs source ) return Your pipeline consists of a graph of tasks that make use the following Google Cloud Pipeline Components : CustomTrainingJobOp : Runs custom training jobs in Vertex AI.
- DATASET NAME = "mlops" TABLE NAME = "chicago" worker pool specs = [{ "machine spec" : { "machine type" : "e2-highmem-2" }, "replica count" : 1 , "python package spec" :{ "executor image uri" : "us-docker.pkg.dev/vertex-ai/training/sklearn-cpu.1-0:latest" , "package uris" : [ f " { BUCKET URI } /trainer-0.1.tar.gz" ], "python module" : "trainer.task" , "args" :[ "--project-id" , PROJECT ID , "--training-dir" , f "/gcs/ { BUCKET NAME } " , "--bq-source" , f " { PROJECT ID } . { DATASET NAME } . { TABLE NAME } " ] }, }] parameters = { "project" : PROJECT ID , "location" : REGION , "training job display name" : "taxifare-prediction-training-job" , "worker pool specs" : worker pool specs , "base output dir" : BUCKET URI , "prediction container uri" : "us-docker.pkg.dev/vertex-ai/prediction/sklearn-cpu.1-0:latest" , "model display name" : "taxifare-prediction-model" , "batch prediction job display name" : "taxifare-prediction-batch-job" , "target field name" : "fare" , "test data gcs uri" : [ f " { BUCKET URI } /test no target.csv" ], "ground truth gcs source" : [ f " { BUCKET URI } /test.csv" ], "batch predictions gcs prefix" : f " { BUCKET URI } /batch predict output" , "existing model" : False } Note: To optionally upload your model as a new model version instead of a new model in Vertex AI Model Registry, set existing model to True .
- In the console, you should see a new pipeline run in the Pipelines page: Go to Pipeline Runs After the pipeline run is complete, you should see either a new model named taxifare-prediction-model or a new model version in Vertex AI Model Registry: Go to Model Registry You should also see a new batch prediction job: Go to Batch Predictions Automatically run the pipeline There are two ways to automatically run the pipeline: on a schedule or when new data is inserted into the dataset.
- VertexModel , metadata = { "resourceName" : parent model resource name }, ) . after ( import unmanaged model task ) Upload the model as a version model version upload op = ModelUploadOp ( project = project , location = location , display name = model display name , parent model = import registry model task . outputs [ "artifact" ], unmanaged container model = import unmanaged model task . outputs [ "artifact" ], ) with dsl .


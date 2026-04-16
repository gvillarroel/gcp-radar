---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.107Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Experiment Management run visualization and comparison"
feature_slug: "vertex-ai-experiment-management-run-visualization-and-comparison"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "vertex"
  - "ai"
  - "experiment"
  - "management"
  - "run"
  - "visualization"
  - "comparison"
  - "console"
---

# Vertex AI Experiment Management run visualization and comparison

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Console now visualizes model performance over training steps and supports advanced comparisons of experiment runs in Vertex AI.

## Extended Definition

The Google Cloud Console now visualizes model performance over training steps and supports advanced comparisons of experiment runs in Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs](https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### Compare and analyze runs \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs](https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs)
- Source ID: `site-docs-reference-3`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, share the comparison view of timeseries metrics data: See Create and manage experiment runs for how to update the status of a run.
- Google Cloud console Use the Google Cloud console to view details of your experiment runs and compare the experiment runs to each other.
- You can find your list of experiments in the Google Cloud console by selecting Experiments in the section nav. project : .
- You can find your list of experiments in the Google Cloud console by selecting Experiments in the section nav. project : .

### "Run training job with experiment tracking \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations. staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container or a custom container service account : See Create a service account with required permissions . experiment : Provide a name for your experiment.
- DataFrame ( data ) X = df [[ 'A' , 'B' ]] Y = df [ 'Y' ] Train model model = LinearRegression () . fit ( X , Y ) Save the model to gcs model dir = os . getenv ( 'AIP MODEL DIR' ) model gcs = model dir . replace ( 'gs://' , '/gcs/' ) model name = 'model.joblib' os . mkdir ( model gcs ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) Call aiplatform's logging APIs to save data to Vertex AI Experiments. params = model . get params () aiplatform . log params ( params ) metrics = { "training accuracy" : model . score ( X , Y )} aiplatform . log metrics ( metrics ) You have the option to create an experiment run, or not.
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container , or a custom container .
- Home Documentation AI and ML Vertex AI Send feedback Run training job with experiment tracking Stay organized with collections Save and categorize content based on your preferences.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Execute the KFP pipeline using Vertex AI Pipelines Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Pipelines Metrics visualization and run comparison using the KFP SDK .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .


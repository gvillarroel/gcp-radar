---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.135Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI custom training integration with Vertex AI Experiments"
feature_slug: "vertex-ai-custom-training-integration-with-vertex-ai-experiments"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments"
keywords:
  - "vertex"
  - "ai"
  - "custom"
  - "training"
  - "integration"
  - "experiments"
  - "now"
  - "integrates"
---

# Vertex AI custom training integration with Vertex AI Experiments

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI custom training now integrates with Vertex AI Experiments to support autologging of training parameters and model performance metrics.

## Extended Definition

Vertex AI custom training now integrates with Vertex AI Experiments to support autologging of training parameters and model performance metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Formalize model experiment in a script Run model traning using local script on Vertex AI Training Check out ML experiment parameters and metrics in Vertex AI Experiments Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex ML Metadata Custom training Get started with Vertex AI Experiments .
- Tutorial steps How to delete the TB Experiment with a predefined keyvalue label pair How to delete the TB Experiments created before the create time How to delete the TB Experiments created before the update time Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Custom training autologging - Local script .

### "Run training job with experiment tracking \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DataFrame ( data ) X = df [[ 'A' , 'B' ]] Y = df [ 'Y' ] Train model model = LinearRegression () . fit ( X , Y ) Save the model to gcs model dir = os . getenv ( 'AIP MODEL DIR' ) model gcs = model dir . replace ( 'gs://' , '/gcs/' ) model name = 'model.joblib' os . mkdir ( model gcs ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) Call aiplatform's logging APIs to save data to Vertex AI Experiments. params = model . get params () aiplatform . log params ( params ) metrics = { "training accuracy" : model . score ( X , Y )} aiplatform . log metrics ( metrics ) You have the option to create an experiment run, or not.
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations. staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container or a custom container service account : See Create a service account with required permissions . experiment : Provide a name for your experiment.
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container , or a custom container .
- You can enable experiment tracking using Vertex AI SDK for Python to capture parameters and performance metrics when submitting the custom training job.

### Introduction to Vertex AI Experiments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scope of support Vertex AI Experiments supports development of models using Vertex AI custom training, Vertex AI Workbench notebooks, Notebooks, and all Python ML Frameworks across most ML Frameworks.
- To see an example of getting started with Vertex AI Experiments, run the "Get started with Vertex AI Experiments" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Experiments is a tool that helps you track and analyze different model architectures, hyperparameters, and training environments, letting you track the steps, inputs, and outputs of an experiment run.
- Check out notebook sample track metrics and parameters Compare models track experiment lineage Model training track pipeline runs Compare pipeline runs Track steps, inputs, and outputs Vertex AI Experiments lets you track: steps of an experiment run , for example, preprocessing, training, inputs, for example, algorithm, parameters, datasets, outputs of those steps, for example, models, checkpoints, metrics.
- For user journey examples, check out: Model training Compare models Analyze model performance Vertex AI Experiments lets you track and evaluate how the model performed in aggregate, against test datasets, and during the training run.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.167Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI pre-built PyTorch 1.11 training container"
feature_slug: "vertex-ai-pre-built-pytorch-1-11-training-container"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/training-guide"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments"
keywords:
  - "vertex"
  - "ai"
  - "pre"
  - "built"
  - "pytorch"
  - "11"
  - "training"
  - "container"
---

# Vertex AI pre-built PyTorch 1.11 training container

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Provides a pre-built container image to run custom training jobs using PyTorch 1.11 in Vertex AI.

## Extended Definition

Provides a pre-built container image to run custom training jobs using PyTorch 1.11 in Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Package training application into a Python source distribution Configure and run training job in a prebuilt container Package model artifacts in a model archive file Upload model for deployment Deploy model using a prebuilt container for prediction Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Get started with PyTorch on Ray on Vertex AI .
- Tutorial steps Create a PyTorch distributed training application Package the training application with prebuilt containers Create a custom job on Vertex AI with Reduction Server Submit and monitor the job Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Custom training using Python package, managed text dataset, and TF Serving container .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .

### Custom training beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Notebooks To see examples of how to enable Profiler for a custom training job, run the following notebooks in the environment of your choice: "Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Get started with Vertex AI Distributed Training": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Run hyperparameter tuning for a TensorFlow model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI TensorBoard custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "PyTorch distributed training with Vertex AI Reduction Server": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and batch prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and online prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Video Training custom models Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can use this option if all of the code needed to execute your training application is in one Python file and one of the prebuilt Vertex AI training containers has all of the libraries needed to run your application.
- Vertex AI provides prebuilt containers for TensorFlow, PyTorch, XGBoost, and Scikit-learn.
- Under the Training Container section, select either prebuilt or custom container, depending on how you packaged your application.

### "Run training job with experiment tracking \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations. staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container or a custom container service account : See Create a service account with required permissions . experiment : Provide a name for your experiment.
- You can find these Project IDs in the Google Cloud console welcome page. location : See List of available locations staging bucket : The name you gave your bucket, for example, my bucket . display name : The user-defined name of the CustomJob . script path : The path, relative to the working directory on your local file system, to the script that is the entry point for your training code. container uri : The URI of the training container image can be a Vertex AI prebuilt training container , or a custom container .
- Both prebuilt training containers and custom containers are supported are supported.
- DataFrame ( data ) X = df [[ 'A' , 'B' ]] Y = df [ 'Y' ] Train model model = LinearRegression () . fit ( X , Y ) Save the model to gcs model dir = os . getenv ( 'AIP MODEL DIR' ) model gcs = model dir . replace ( 'gs://' , '/gcs/' ) model name = 'model.joblib' os . mkdir ( model gcs ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) f = open ( os . path . join ( model gcs , model name ), 'wb' ) pickle . dump ( model , f ) Call aiplatform's logging APIs to save data to Vertex AI Experiments. params = model . get params () aiplatform . log params ( params ) metrics = { "training accuracy" : model . score ( X , Y )} aiplatform . log metrics ( metrics ) You have the option to create an experiment run, or not.


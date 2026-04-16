---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.167Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench Cloud Storage browser in left-side pane"
feature_slug: "vertex-ai-workbench-cloud-storage-browser-in-left-side-pane"
latest_feature_date: "2024-02-28"
deprecation_date: "2024-02-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "storage"
  - "browser"
  - "left"
  - "side"
  - "pane"
---

# Vertex AI Workbench Cloud Storage browser in left-side pane

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage browser in the Vertex AI Workbench left-side pane was removed in favor of the existing Mount shared storage button; deprecated on 2024-02-28.

## Extended Definition

The Cloud Storage browser in the Vertex AI Workbench left-side pane was removed in favor of the existing Mount shared storage button; deprecated on 2024-02-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)

## Supporting Pages

### Create a notebook \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This code doesn't generate output. from google.cloud import storage client = storage.Client ( project = project id ) Create a bucket bucket = client.create bucket ( bucket name, location = region ) To verify your bucket created successfully, run the following: print ( "Bucket {} created." .format ( bucket.name )) Initialize the Vertex AI SDK for Python To initialize the Vertex AI SDK for Python, you first import its library, aiplatform .
- If you don't specify a location, the Vertex AI SDK for Python uses us-central1 . staging bucket - The staging bucket specifies which Cloud Storage bucket is used to stage artifacts when you use the Vertex AI SDK for Python.
- For more information, see Choose your location . region = "us-central1" # @param {type: "string"} Create a Cloud Storage bucket This tutorial requires a Cloud Storage bucket that's used by Vertex AI to stage artifacts.
- Enable the APIs Create a Vertex AI Workbench instance To create a Vertex AI Workbench instance, do the following: In the Google Cloud console, open your Google Cloud project if it's not already open.

### "Build a pipeline for continuous model training \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles to your Google Account: ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/bigquery.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.user ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/storage.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/pubsub.editor ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/cloudfunctions.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.viewer ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/logging.configWriter ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/iam.serviceAccountUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/eventarc.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/aiplatform.colabEnterpriseUser ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/artifactregistry.admin ! gcloud projects add-iam-policy-binding PROJECT ID --member="user:" EMAIL ADDRESS "" --role=roles/serviceusage.serviceUsageAdmin Enable the following APIs Artifact Registry API BigQuery API Cloud Build API Cloud Functions API Cloud Logging API Pub/Sub API Cloud Run Admin API Cloud Storage API Eventarc API Service Usage API Vertex AI API ! gcloud services enable artifactregistry.googleapis.com bigquery.googleapis.com cloudbuild.googleapis.com cloudfunctions.googleapis.com logging.googleapis.com pubsub.googleapis.com run.googleapis.com storage-component.googleapis.com eventarc.googleapis.com serviceusage.googleapis.com aiplatform.googleapis.com Grant roles to your project's service accounts: See the names of your service accounts ! gcloud iam service-accounts list Note the name of your Compute service agent.
- In the Files panel, create a file called setup.py in the training package folder with the following contents. from setuptools import find packages from setuptools import setup REQUIRED PACKAGES = [ "google-cloud-bigquery[pandas]" , "google-cloud-bigquery-storage" ] setup ( name = 'trainer' , version = '0.1' , install requires = REQUIRED PACKAGES , packages = find packages (), include package data = True , description = 'Training application package for chicago taxi trip fare prediction.' ) In your notebook, run setup.py to create the source distribution for your training application: ! cd training package && python setup.py sdist --formats=gztar && cd ..
- At the end of this section, your Files panel should contain the following files and folders under training-package . dist trainer-0.1.tar.gz trainer init .py task.py trainer.egg-info init .py setup.py Upload the custom training package to Cloud Storage Create a Cloud Storage bucket.
- Go to Cloud Storage Delete the model as follows: In the Vertex AI section, go to the Model Registry page.

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit the app to provide it with the trigger URL of your Cloud Run function: echo "export const CLOUD FUNCTION URL = 'https://us-central1- ${ PROJECT ID } .cloudfunctions.net/classify flower';" \ webapp/function-url.js Upload the webapp directory to your Cloud Storage bucket: gcloud storage cp webapp gs:// ${ BUCKET NAME } / --recursive Make the web app files that you just uploaded publicly readable : gcloud storage objects update gs:// ${ BUCKET NAME } /webapp/ --add-acl-grant = entity = allUsers,role = READER Note: Shells (like bash, zsh) sometimes attempt to expand wildcards in ways that can be surprising.
- Run the following command in your Cloud Shell session to deploy the Cloud Run function: gcloud functions deploy classify flower \ --region = us-central1 \ --source = function \ --runtime = python37 \ --memory = 2048MB \ --trigger-http \ --allow-unauthenticated \ --set-env-vars = ENDPOINT ID = ${ ENDPOINT ID } Deploy a web app to send prediction requests Finally, host a static web app on Cloud Storage to get predictions from your trained ML model.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- You can now navigate to the following URL to open web app and get predictions: https://storage.googleapis.com/ BUCKET NAME /webapp/index.html Open the web app and click an image of a flower to see your ML model's classification of the flower type.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.630Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Kernel visibility with Cloud Resource Manager API disabled on Dataproc-enabled instances"
feature_slug: "kernel-visibility-with-cloud-resource-manager-api-disabled-on-dataproc-enabled-instances"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref"
keywords:
  - "kernel"
  - "visibility"
  - "with"
  - "resource"
  - "manager"
  - "api"
  - "disabled"
  - "on"
---

# Kernel visibility with Cloud Resource Manager API disabled on Dataproc-enabled instances

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled; Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled.

## Extended Definition

Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled; Workbench fixed an issue where kernels failed to appear for notebooks when the Cloud Resource Manager API was disabled while Dataproc was enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Configure the endpoint resource for model monitoring Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring with Vertex Explainable AI Feature Attributions .
- Colab Colab Enterprise GitHub Vertex AI Workbench AutoML components BigQuery ML components BigQuery ML and AutoML - Rapid Prototyping with Vertex AI .

### Create a notebook \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/create-notebook)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- You use the Vertex AI SDK for Python to make Vertex AI API calls that create your dataset, create your model, train and deploy your model, and make predictions with your model.
- You can also specify your project with its project number. location - The location specifies which Google Cloud region to use when you make API calls.

### Introduction to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- When you use Access Context Manager and Chrome Enterprise Premium to protect Vertex AI Workbench instances with context-aware access controls, access is evaluated each time the user authenticates to the instance.
- They help make sure that you have the resources available to create VMs with the same hardware (memory and vCPUs) and optional resources (GPUs and Local SSD disks) whenever you need them.
- Although the use of custom virtual machine (VM) images or Deep Learning VM images with Vertex AI Workbench instances can be possible, Vertex AI Workbench doesn't provide any support for unexpected behaviors or malfunctions when using those images.
- Using a custom container that isn't derived from the Google-provided base container ( gcr.io/deeplearning-platform-release/workbench-container:latest ) increases the risks of compatibility issues with our services and isn't supported.

### Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref](https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Write code with the Vertex AI SDK for Python To use the Vertex AI SDK for Python: Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment: pip install -- upgrade google - cloud - aiplatform Use the following code to import the google.cloud.aiplatform namespace: from google.cloud import aiplatform Preview: To use features for the Vertex AI SDK for Python that are still in preview , import vertexai.preview : import vertexai.preview If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- To import the Python client library, include one of the following in your Python script: from google.cloud import aiplatform v1 from google.cloud.aiplatform import gapic What's next Learn how to choose a training method .
- Home Documentation AI and ML Vertex AI Reference Send feedback Introduction to the Vertex AI SDK for Python Stay organized with collections Save and categorize content based on your preferences.
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .


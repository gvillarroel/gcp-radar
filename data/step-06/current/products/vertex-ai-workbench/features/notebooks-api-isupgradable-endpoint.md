---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.741Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Notebooks API isUpgradable endpoint"
feature_slug: "notebooks-api-isupgradable-endpoint"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "notebooks"
  - "api"
  - "isupgradable"
  - "endpoint"
  - "the"
  - "now"
  - "includes"
  - "an"
---

# Notebooks API isUpgradable endpoint

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

The Notebooks API now includes an isUpgradable endpoint.

## Extended Definition

The Notebooks API now includes an isUpgradable endpoint.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### Notebooks API \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://notebooks.googleapis.com REST Resource: v2.projects.locations Methods get GET /v2/{name} Gets information about a location. list GET /v2/{name}/locations Lists information about the supported locations for this service.
- This service provides the following discovery documents: https://notebooks.googleapis.com/$discovery/rest?version=v2 https://notebooks.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.executions Methods create POST /v1/{parent}/executions Creates a new Execution in a given project and location. delete DELETE /v1/{name} Deletes execution get GET /v1/{name} Gets details of executions list GET /v1/{parent}/executions Lists executions in a given project and location REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name} Deletes a single Instance. diagnose POST /v1/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v1/{name} Gets details of a single Instance. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. getInstanceHealth GET /v1/{name}:getInstanceHealth Checks whether a notebook instance is healthy. isUpgradeable GET /v1/{notebookInstance}:isUpgradeable Checks whether a notebook instance is upgradable. list GET /v1/{parent}/instances Lists instances in a given project and location. migrate POST /v1/{name}:migrate Migrates an existing User-Managed Notebook to Workbench Instances. register POST /v1/{parent}/instances:register Registers an existing legacy notebook instance to the Notebooks API server. report POST /v1/{name}:report Allows notebook instances to report their latest instance information to the Notebooks API server. reset POST /v1/{name}:reset Resets a notebook instance. rollback POST /v1/{name}:rollback Rollbacks a notebook instance to the previous version. setAccelerator PATCH /v1/{name}:setAccelerator Updates the guest accelerators of a single Instance. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. setLabels PATCH /v1/{name}:setLabels Replaces all the labels of an Instance. setMachineType PATCH /v1/{name}:setMachineType Updates the machine type of a single Instance. start POST /v1/{name}:start Starts a notebook instance. stop POST /v1/{name}:stop Stops a notebook instance. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateConfig PATCH /v1/{name}:updateConfig Update Notebook Instance configurations. updateMetadataItems PATCH /v1/{name}:updateMetadataItems Add/update metadata items for an instance. updateShieldedInstanceConfig PATCH /v1/{name}:updateShieldedInstanceConfig Updates the Shielded instance configuration of a single Instance. upgrade POST /v1/{name}:upgrade Upgrades a notebook instance to the latest version.
- The Notebooks API lets you manage Vertex AI Workbench resources in Google Cloud.

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{projectId}/locations/{location}/instances/{instanceId} Authorization requires the following IAM permission on the specified resource name : notebooks.instances.getHealth Request body The request body must be empty.
- UNHEALTHY The instance is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.
- HTTP request GET https://notebooks.googleapis.com/v1/{name}:getInstanceHealth Path parameters Parameters name string Required.
- HEALTHY The instance is known to be in an healthy state (for example, critical daemons are running) Applies to ACTIVE state.

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- You can deploy this Model to an Endpoint and then send prediction requests to this resource.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .


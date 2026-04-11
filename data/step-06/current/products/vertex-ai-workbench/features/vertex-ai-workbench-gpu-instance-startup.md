---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.702Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench GPU instance startup"
feature_slug: "vertex-ai-workbench-gpu-instance-startup"
latest_feature_date: "2022-11-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "gpu"
  - "instance"
  - "startup"
  - "fix"
  - "enables"
---

# Vertex AI Workbench GPU instance startup

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

A fix enables Vertex AI Workbench instances with GPUs to start correctly.

## Extended Definition

A fix enables Vertex AI Workbench instances with GPUs to start correctly.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)

## Supporting Pages

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job View the Cloud Profiler dashboard Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Get started with Vertex AI Training for XGBoost .

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific Vertex AI Workbench instance so that they have all of the admin abilities to administer that instance.
- Control access to an instance's JupyterLab interface with the access mode You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.
- However, even granting a principal full access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- Deprecated: This field is no longer used and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Deprecated: This field is ignored and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.
- ShieldedVmConfig JSON representation { "enableSecureBoot" : boolean } Fields enableSecureBoot boolean Defines whether the instance has Secure Boot enabled.


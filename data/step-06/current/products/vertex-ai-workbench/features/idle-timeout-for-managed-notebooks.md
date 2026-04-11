---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:49:36.722Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Idle timeout for managed notebooks"
feature_slug: "idle-timeout-for-managed-notebooks"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "idle"
  - "timeout"
  - "for"
  - "managed"
  - "notebooks"
  - "notebook"
  - "instances"
  - "can"
---

# Idle timeout for managed notebooks

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

Managed notebook instances can automatically shut down after a configured idle timeout to control costs.

## Extended Definition

Managed notebook instances can automatically shut down after a configured idle timeout to control costs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.
- Use this tool to provision a notebook runtime for a specific user that can be used to run code from on notebooks.
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The Compute Engine tags to add to runtime (see Tagging instances ). encryptionSpec object ( EncryptionSpec ) Customer-managed encryption key spec for the notebook runtime. softwareConfig object ( NotebookSoftwareConfig ) Optional.
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.

### Notebooks API \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations.executions Methods create POST /v1/{parent}/executions Creates a new Execution in a given project and location. delete DELETE /v1/{name} Deletes execution get GET /v1/{name} Gets details of executions list GET /v1/{parent}/executions Lists executions in a given project and location REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name} Deletes a single Instance. diagnose POST /v1/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v1/{name} Gets details of a single Instance. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. getInstanceHealth GET /v1/{name}:getInstanceHealth Checks whether a notebook instance is healthy. isUpgradeable GET /v1/{notebookInstance}:isUpgradeable Checks whether a notebook instance is upgradable. list GET /v1/{parent}/instances Lists instances in a given project and location. migrate POST /v1/{name}:migrate Migrates an existing User-Managed Notebook to Workbench Instances. register POST /v1/{parent}/instances:register Registers an existing legacy notebook instance to the Notebooks API server. report POST /v1/{name}:report Allows notebook instances to report their latest instance information to the Notebooks API server. reset POST /v1/{name}:reset Resets a notebook instance. rollback POST /v1/{name}:rollback Rollbacks a notebook instance to the previous version. setAccelerator PATCH /v1/{name}:setAccelerator Updates the guest accelerators of a single Instance. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. setLabels PATCH /v1/{name}:setLabels Replaces all the labels of an Instance. setMachineType PATCH /v1/{name}:setMachineType Updates the machine type of a single Instance. start POST /v1/{name}:start Starts a notebook instance. stop POST /v1/{name}:stop Stops a notebook instance. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateConfig PATCH /v1/{name}:updateConfig Update Notebook Instance configurations. updateMetadataItems PATCH /v1/{name}:updateMetadataItems Add/update metadata items for an instance. updateShieldedInstanceConfig PATCH /v1/{name}:updateShieldedInstanceConfig Updates the Shielded instance configuration of a single Instance. upgrade POST /v1/{name}:upgrade Upgrades a notebook instance to the latest version.
- REST Resource: v2.projects.locations.instances Methods checkUpgradability GET /v2/{notebookInstance}:checkUpgradability Checks whether a notebook instance is upgradable. create POST /v2/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v2/{name} Deletes a single Instance. diagnose POST /v2/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v2/{name} Gets details of a single Instance. getConfig GET /v2/{name}/instances:getConfig Returns various configuration parameters. getIamPolicy GET /v2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent}/instances Lists instances in a given project and location. patch PATCH /v2/{instance.name} UpdateInstance updates an Instance. reset POST /v2/{name}:reset Resets a notebook instance. resizeDisk POST /v2/{notebookInstance}:resizeDisk Resize a notebook instance disk to a higher capacity. restore POST /v2/{name}:restore RestoreInstance restores an Instance from a BackupSource. rollback POST /v2/{name}:rollback Rollbacks a notebook instance to the previous version. setIamPolicy POST /v2/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v2/{name}:start Starts a notebook instance. stop POST /v2/{name}:stop Stops a notebook instance. testIamPermissions POST /v2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. upgrade POST /v2/{name}:upgrade Upgrades a notebook instance to the latest version.
- REST Resource: v1.projects.locations.runtimes Methods create POST /v1/{parent}/runtimes Creates a new Runtime in a given project and location. delete DELETE /v1/{name} Deletes a single Runtime. get GET /v1/{name} Gets details of a single Runtime. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/runtimes Lists Runtimes in a given project and location. migrate POST /v1/{name}:migrate Migrate an existing Runtime to a new Workbench Instance. patch PATCH /v1/{runtime.name} Update Notebook Runtime configuration. reportEvent POST /v1/{name}:reportEvent Reports and processes a runtime event. reset POST /v1/{name}:reset Resets a Managed Notebook Runtime. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v1/{name}:start Starts a Managed Notebook Runtime. stop POST /v1/{name}:stop Stops a Managed Notebook Runtime. switch POST /v1/{name}:switch Switch a Managed Notebook Runtime. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://notebooks.googleapis.com REST Resource: v2.projects.locations Methods get GET /v2/{name} Gets information about a location. list GET /v2/{name}/locations Lists information about the supported locations for this service.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Or you can download the notebooks from GitHub and run them on your local machine or on a JupyterLab implementation in your local network.
- There are many environments in which you can host notebooks.
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .


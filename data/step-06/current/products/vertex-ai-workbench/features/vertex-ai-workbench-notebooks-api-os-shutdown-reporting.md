---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.008Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench Notebooks API OS shutdown reporting"
feature_slug: "vertex-ai-workbench-notebooks-api-os-shutdown-reporting"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "notebooks"
  - "os"
  - "shutdown"
  - "reporting"
  - "restores"
---

# Vertex AI Workbench Notebooks API OS shutdown reporting

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Restores reporting of user-triggered OS shutdown events to the Notebooks API for Vertex AI Workbench instances.

## Extended Definition

Restores reporting of user-triggered OS shutdown events to the Notebooks API for Vertex AI Workbench instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.AssignNotebookRuntime .
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime template", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.CreateNotebookRuntimeTemplate .
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.

### Notebooks API \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- The Notebooks API lets you manage Vertex AI Workbench resources in Google Cloud.
- REST Resource: v1.projects.locations.executions Methods create POST /v1/{parent}/executions Creates a new Execution in a given project and location. delete DELETE /v1/{name} Deletes execution get GET /v1/{name} Gets details of executions list GET /v1/{parent}/executions Lists executions in a given project and location REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name} Deletes a single Instance. diagnose POST /v1/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v1/{name} Gets details of a single Instance. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the access control policy for a resource. getInstanceHealth GET /v1/{name}:getInstanceHealth Checks whether a notebook instance is healthy. isUpgradeable GET /v1/{notebookInstance}:isUpgradeable Checks whether a notebook instance is upgradable. list GET /v1/{parent}/instances Lists instances in a given project and location. migrate POST /v1/{name}:migrate Migrates an existing User-Managed Notebook to Workbench Instances. register POST /v1/{parent}/instances:register Registers an existing legacy notebook instance to the Notebooks API server. report POST /v1/{name}:report Allows notebook instances to report their latest instance information to the Notebooks API server. reset POST /v1/{name}:reset Resets a notebook instance. rollback POST /v1/{name}:rollback Rollbacks a notebook instance to the previous version. setAccelerator PATCH /v1/{name}:setAccelerator Updates the guest accelerators of a single Instance. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. setLabels PATCH /v1/{name}:setLabels Replaces all the labels of an Instance. setMachineType PATCH /v1/{name}:setMachineType Updates the machine type of a single Instance. start POST /v1/{name}:start Starts a notebook instance. stop POST /v1/{name}:stop Stops a notebook instance. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateConfig PATCH /v1/{name}:updateConfig Update Notebook Instance configurations. updateMetadataItems PATCH /v1/{name}:updateMetadataItems Add/update metadata items for an instance. updateShieldedInstanceConfig PATCH /v1/{name}:updateShieldedInstanceConfig Updates the Shielded instance configuration of a single Instance. upgrade POST /v1/{name}:upgrade Upgrades a notebook instance to the latest version.
- Home Documentation AI and ML Vertex AI Reference Send feedback Notebooks API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v2.projects.locations.instances Methods checkUpgradability GET /v2/{notebookInstance}:checkUpgradability Checks whether a notebook instance is upgradable. create POST /v2/{parent}/instances Creates a new Instance in a given project and location. delete DELETE /v2/{name} Deletes a single Instance. diagnose POST /v2/{name}:diagnose Creates a Diagnostic File and runs Diagnostic Tool given an Instance. get GET /v2/{name} Gets details of a single Instance. getConfig GET /v2/{name}/instances:getConfig Returns various configuration parameters. getIamPolicy GET /v2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent}/instances Lists instances in a given project and location. patch PATCH /v2/{instance.name} UpdateInstance updates an Instance. reset POST /v2/{name}:reset Resets a notebook instance. resizeDisk POST /v2/{notebookInstance}:resizeDisk Resize a notebook instance disk to a higher capacity. restore POST /v2/{name}:restore RestoreInstance restores an Instance from a BackupSource. rollback POST /v2/{name}:rollback Rollbacks a notebook instance to the previous version. setIamPolicy POST /v2/{resource}:setIamPolicy Sets the access control policy on the specified resource. start POST /v2/{name}:start Starts a notebook instance. stop POST /v2/{name}:stop Stops a notebook instance. testIamPermissions POST /v2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. upgrade POST /v2/{name}:upgrade Upgrades a notebook instance to the latest version.


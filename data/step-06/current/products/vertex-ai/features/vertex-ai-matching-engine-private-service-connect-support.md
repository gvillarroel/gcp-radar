---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.142Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Matching Engine Private Service Connect Support"
feature_slug: "vertex-ai-matching-engine-private-service-connect-support"
latest_feature_date: "2023-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
keywords:
  - "vertex"
  - "ai"
  - "matching"
  - "engine"
  - "private"
  - "connect"
  - "added"
  - "preview"
---

# Vertex AI Matching Engine Private Service Connect Support

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Matching Engine added support for Private Service Connect in preview.

## Extended Definition

Vertex AI Matching Engine added support for Private Service Connect in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)

## Supporting Pages

### Create a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
- Source ID: `site-docs-reference-required-5`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the instance is ready to use, Vertex AI Workbench activates an Open JupyterLab link. gcloud Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your Vertex AI Workbench instance; must start with a letter followed by up to 62 lowercase letters, numbers, or hyphens (-), and cannot end with a hyphen PROJECT ID : your project ID LOCATION : the zone where you want your instance to be located VM IMAGE PROJECT : the ID of the Google Cloud project that VM image belongs to; the default Google Cloud project ID for supported images is cloud-notebooks-managed VM IMAGE NAME : the image name; to find the image name of a specific version, see Find the specific version MACHINE TYPE : the machine type of your instance's VM METADATA : custom metadata to apply to this instance; for example, to specify a post-startup-script, you can use the post-startup-script metadata tag, in the format: --metadata=post-startup-script=gs:// BUCKET NAME /hello.sh To enable the JupyterLab 4 preview, use --metadata=enable-jupyterlab4-preview=true .
- If you use the private.googleapis.com or restricted.googleapis.com VIP to provide access to the service endpoints, add DNS entries for each of the required service endpoints : notebooks.cloud.google.com notebooks.googleapis.com .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com .notebooks.googleusercontent.com .kernels.googleusercontent.com If you use third party credentials , you must use restricted.googleapis.com and add the following DNS entry: .byoid.googleusercontent.com Note: When using Vertex AI with Private Google Access to access Google Cloud APIs, the instances must be configured to bypass any web proxies or other network traffic inspection or filtering devices (for example next generation firewalls) for any hostnames in the domains listed in the Private Google Access documentation.
- Connect the instance to a subnet where Private Google Access is enabled.
- You can create a Vertex AI Workbench instance using a private IP.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Endpoint JSON representation { "name" : string , "displayName" : string , "description" : string , "deployedModels" : [ { object ( DeployedModel ) } ] , "trafficSplit" : { string : integer , ... } , "etag" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "encryptionSpec" : { object ( EncryptionSpec ) } , "network" : string , "enablePrivateServiceConnect" : boolean , "privateServiceConnectConfig" : { object ( PrivateServiceConnectConfig ) } , "modelDeploymentMonitoringJob" : string , "predictRequestResponseLoggingConfig" : { object ( PredictRequestResponseLoggingConfig ) } , "dedicatedEndpointEnabled" : boolean , "dedicatedEndpointDns" : string , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "genAiAdvancedFeaturesConfig" : { object ( GenAiAdvancedFeaturesConfig ) } } Fields name string Identifier.
- PrivateServiceConnectConfig JSON representation { "enablePrivateServiceConnect" : boolean , "projectAllowlist" : [ string ] , "pscAutomationConfigs" : [ { object ( PSCAutomationConfig ) } ] , "enableSecurePrivateServiceConnect" : boolean , "serviceAttachment" : string } Fields enablePrivateServiceConnect boolean Required.
- If true, expose the IndexEndpoint via private service connect. projectAllowlist[] string A list of Projects from which the forwarding rule will target the service attachment. pscAutomationConfigs[] object ( PSCAutomationConfig ) Optional.

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . from typing import List from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized private feature online store sample ( project : str , location : str , feature online store id : str , project allowlist : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving with a Private Service Connect endpoint Use the following samples to create an online store for Optimized online serving with Private Service Connect .
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME Request JSON body: { "optimized": {}, "dedicated serving endpoint": { "private service connect config": { "enable private service connect": true, "project allowlist": [" PROJECT NAMES "] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- FeatureOnlineStore . create optimized store ( name = feature online store id , enable private service connect = True , project allowlist = project allowlist , ) return fos project : Your project ID. location : Region where you want to create the FeatureOnlineStore instance, such as us-central1 . feature online store id : The name of the new FeatureOnlineStore instance. project allowlist : The list of project names to be allowlisted for private service connect (PSC).


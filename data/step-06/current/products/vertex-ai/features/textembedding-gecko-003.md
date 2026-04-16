---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.094Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "textembedding-gecko@003"
feature_slug: "textembedding-gecko-003"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create"
keywords:
  - "textembedding"
  - "gecko"
  - "003"
  - "adds"
  - "availability"
  - "updated"
  - "stable"
  - "vertex"
---

# textembedding-gecko@003

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Adds availability of the updated stable Vertex AI text embedding foundation model textembedding-gecko@003, with quality improvements over earlier stable versions.

## Extended Definition

Adds availability of the updated stable Vertex AI text embedding foundation model textembedding-gecko@003, with quality improvements over earlier stable versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)

## Supporting Pages

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.studies.trials Methods addTrialMeasurement POST /v1beta1/{trialName}:addTrialMeasurement Adds a measurement of the objective metrics to a Trial. checkTrialEarlyStoppingState POST /v1beta1/{trialName}:checkTrialEarlyStoppingState Checks whether a Trial should stop or not. complete POST /v1beta1/{name}:complete Marks a Trial as complete. create POST /v1beta1/{parent}/trials Adds a user provided Trial to a Study. delete DELETE /v1beta1/{name} Deletes a Trial. get GET /v1beta1/{name} Gets a Trial. list GET /v1beta1/{parent}/trials Lists the Trials associated with a Study. listOptimalTrials POST /v1beta1/{parent}/trials:listOptimalTrials Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. stop POST /v1beta1/{name}:stop Stops a Trial. suggest POST /v1beta1/{parent}/trials:suggest Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier.
- REST Resource: v1.projects.locations.studies.trials Methods addTrialMeasurement POST /v1/{trialName}:addTrialMeasurement Adds a measurement of the objective metrics to a Trial. checkTrialEarlyStoppingState POST /v1/{trialName}:checkTrialEarlyStoppingState Checks whether a Trial should stop or not. complete POST /v1/{name}:complete Marks a Trial as complete. create POST /v1/{parent}/trials Adds a user provided Trial to a Study. delete DELETE /v1/{name} Deletes a Trial. get GET /v1/{name} Gets a Trial. list GET /v1/{parent}/trials Lists the Trials associated with a Study. listOptimalTrials POST /v1/{parent}/trials:listOptimalTrials Lists the pareto-optimal Trials for multi-objective Study or the optimal Trials for single-objective Study. stop POST /v1/{name}:stop Stops a Trial. suggest POST /v1/{parent}/trials:suggest Adds one or more Trials to a Study, with parameter values suggested by Vertex AI Vizier.
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://aiplatform.googleapis.com https://africa-south1-aiplatform.googleapis.com https://asia-east1-aiplatform.googleapis.com https://asia-east2-aiplatform.googleapis.com https://asia-northeast1-aiplatform.googleapis.com https://asia-northeast2-aiplatform.googleapis.com https://asia-northeast3-aiplatform.googleapis.com https://asia-south1-aiplatform.googleapis.com https://asia-southeast1-aiplatform.googleapis.com https://asia-southeast2-aiplatform.googleapis.com https://australia-southeast1-aiplatform.googleapis.com https://australia-southeast2-aiplatform.googleapis.com https://europe-central2-aiplatform.googleapis.com https://europe-north1-aiplatform.googleapis.com https://europe-southwest1-aiplatform.googleapis.com https://europe-west1-aiplatform.googleapis.com https://europe-west2-aiplatform.googleapis.com https://europe-west3-aiplatform.googleapis.com https://europe-west4-aiplatform.googleapis.com https://europe-west6-aiplatform.googleapis.com https://europe-west8-aiplatform.googleapis.com https://europe-west9-aiplatform.googleapis.com https://europe-west12-aiplatform.googleapis.com https://me-central1-aiplatform.googleapis.com https://me-central2-aiplatform.googleapis.com https://me-west1-aiplatform.googleapis.com https://northamerica-northeast1-aiplatform.googleapis.com https://northamerica-northeast2-aiplatform.googleapis.com https://southamerica-east1-aiplatform.googleapis.com https://southamerica-west1-aiplatform.googleapis.com https://us-central1-aiplatform.googleapis.com https://us-east1-aiplatform.googleapis.com https://us-east4-aiplatform.googleapis.com https://us-south1-aiplatform.googleapis.com https://us-west1-aiplatform.googleapis.com https://us-west2-aiplatform.googleapis.com https://us-west3-aiplatform.googleapis.com https://us-west4-aiplatform.googleapis.com https://us-east5-aiplatform.googleapis.com See Feature availability for the supported features for each region.

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores" Select-Object -Expand Content You should receive a JSON response similar to the following: { "featurestores": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/test", "createTime": "2021-02-26T00:44:44.216805Z", "updateTime": "2021-02-26T00:44:44.364916Z", "etag": "AMEw9yNL0s7qZh8lZVZ5T3BEuhoEgFR7JmjbbCSAkRZjeKDXkkIYnxxA4POe5BWT8cCn", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 2 }, "state": "STABLE" }, { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/featurestore demo", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yO e0vm-9W yeCz4rJm-XnnEMYQ-vQesevxya sz-FckuysnDwo3cEXHdWWSeda", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } ] } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID ", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yNy b4IaMIvw1803ZT38cpUtjfwlyLkR709oBCY6pQrm6dHophLcqhrvsNqkQQZ", "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Vertex AI Feature Store (Legacy) availability can vary by location.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### Create a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
- Source ID: `site-docs-reference-required-5`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the instance is ready to use, Vertex AI Workbench activates an Open JupyterLab link. gcloud Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your Vertex AI Workbench instance; must start with a letter followed by up to 62 lowercase letters, numbers, or hyphens (-), and cannot end with a hyphen PROJECT ID : your project ID LOCATION : the zone where you want your instance to be located VM IMAGE PROJECT : the ID of the Google Cloud project that VM image belongs to; the default Google Cloud project ID for supported images is cloud-notebooks-managed VM IMAGE NAME : the image name; to find the image name of a specific version, see Find the specific version MACHINE TYPE : the machine type of your instance's VM METADATA : custom metadata to apply to this instance; for example, to specify a post-startup-script, you can use the post-startup-script metadata tag, in the format: --metadata=post-startup-script=gs:// BUCKET NAME /hello.sh To enable the JupyterLab 4 preview, use --metadata=enable-jupyterlab4-preview=true .
- If you use the private.googleapis.com or restricted.googleapis.com VIP to provide access to the service endpoints, add DNS entries for each of the required service endpoints : notebooks.cloud.google.com notebooks.googleapis.com .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com .notebooks.googleusercontent.com .kernels.googleusercontent.com If you use third party credentials , you must use restricted.googleapis.com and add the following DNS entry: .byoid.googleusercontent.com Note: When using Vertex AI with Private Google Access to access Google Cloud APIs, the instances must be configured to bypass any web proxies or other network traffic inspection or filtering devices (for example next generation firewalls) for any hostnames in the domains listed in the Private Google Access documentation.
- To restart your instance, select the instance and click arrow right Start . gcloud You can change the JupyterLab version on an existing instance by using the following command: gcloud workbench instances update INSTANCE NAME \ --project = " PROJECT ID " \ --location = " LOCATION " \ --metadata = enable-jupyterlab4 = ENABLEMENT BOOLEAN Replace the following: PROJECT ID : your project ID LOCATION : the zone where you want your instance to be located INSTANCE NAME : the name of your Vertex AI Workbench instance ENABLEMENT BOOLEAN : use one of the following: false : changes to JupyterLab 3. true : changes to JupyterLab 4.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]


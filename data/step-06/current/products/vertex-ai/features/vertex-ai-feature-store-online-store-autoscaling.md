---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.168Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store online store autoscaling"
feature_slug: "vertex-ai-feature-store-online-store-autoscaling"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "online"
  - "autoscaling"
  - "adds"
  - "preview"
---

# Vertex AI Feature Store online store autoscaling

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI adds online store autoscaling in preview, where online store nodes scale automatically to match changing traffic patterns.

## Extended Definition

Vertex AI adds online store autoscaling in preview, where online store nodes scale automatically to match changing traffic patterns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)

## Supporting Pages

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Python API reference documentation . from typing import List from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized private feature online store sample ( project : str , location : str , feature online store id : str , project allowlist : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized public feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create bigtable feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving Vertex AI Feature Store Optimized online serving is deprecated .

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores" Select-Object -Expand Content You should receive a JSON response similar to the following: { "featurestores": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/test", "createTime": "2021-02-26T00:44:44.216805Z", "updateTime": "2021-02-26T00:44:44.364916Z", "etag": "AMEw9yNL0s7qZh8lZVZ5T3BEuhoEgFR7JmjbbCSAkRZjeKDXkkIYnxxA4POe5BWT8cCn", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 2 }, "state": "STABLE" }, { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/featurestore demo", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yO e0vm-9W yeCz4rJm-XnnEMYQ-vQesevxya sz-FckuysnDwo3cEXHdWWSeda", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } ] } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID ", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yNy b4IaMIvw1803ZT38cpUtjfwlyLkR709oBCY6pQrm6dHophLcqhrvsNqkQQZ", "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Featurestore name must be unique for the project resource "random id" "featurestore name suffix" { byte length = 8 } resource "google vertex ai featurestore" "main" { name = "featurestore ${random id.featurestore name suffix.hex}" region = "us-central1" labels = { environment = "testing" } online serving config { fixed node count = 1 } force destroy = true } REST To create a featurestore, send a POST request by using the featurestores.create method.

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature view from bq source with embedding management ( project : str , location : str , existing feature online store id : str , feature view id : str , bq table uri : str , entity id columns : List [ str ], embedding column : str , embedding dimensions : int , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature view from bq source ( project : str , location : str , existing feature online store id : str , feature view id : str , bq table uri : str , entity id columns : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Configure vector retrieval for a feature view Vertex AI Feature Store Optimized online serving is deprecated .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view with a dedicated service account and without embedding management Use the following sample to create a feature view without embedding support by directly associating a BigQuery data source and specifying a service account configuration.


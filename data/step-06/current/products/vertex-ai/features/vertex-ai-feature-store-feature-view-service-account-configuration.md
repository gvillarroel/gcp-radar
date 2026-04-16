---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.082Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store feature view service account configuration"
feature_slug: "vertex-ai-feature-store-feature-view-service-account-configuration"
latest_feature_date: "2024-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "view"
  - "account"
  - "configuration"
  - "allows"
---

# Vertex AI Feature Store feature view service account configuration

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Allows a feature view to use a dedicated service account instead of the default project service account.

## Extended Definition

Allows a feature view to use a dedicated service account instead of the default project service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)

## Supporting Pages

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view with a dedicated service account and without embedding management Use the following sample to create a feature view without embedding support by directly associating a BigQuery data source and specifying a service account configuration.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view that uses the default service account and supports embeddings Use the following samples to create a feature view with embedding support by directly associating a BigQuery data source and with the default service account configuration.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews?feature view id= FEATUREVIEW NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /featureViews/ FEATUREVIEW NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureViewOperationMetadata", "genericMetadata": { "createTime": "2023-09-15T02:11:29.458820Z", "updateTime": "2023-09-15T02:11:29.458820Z" } } } Create a feature view with embedding management and a dedicated service account Use the following sample to create a feature view with embedding support by directly associating a BigQuery data source and specifying a service account configuration.
- Note that Vertex AI Feature Store generates a unique service account email address for each feature view configured to have a dedicated service account.

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, run the "Example Feature Store workflow with sample data" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Learn how to create, list, describe, update, and delete featurestores.
- View featurestore details Get details about a featurestore such as its name and online serving configuration.
- Click the Properties tab to view the featurestore's online serving configuration.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### Create a feature group \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)
- Source ID: `site-docs-reference-3`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: This sample creates a feature group with the default service account configuration. from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature group sample ( project : str , location : str , feature group id : str , bq table uri : str , entity id columns : List [ str ], ): aiplatform . init ( project = project , location = location ) fg = feature store .
- Vertex AI Feature Store assigns the BigQuery Data Viewer Identity and Access Management (IAM) role to this service account.
- However, if the current as well as historical values for that feature are null, then Vertex AI Feature Store serves null as the feature value. true —For feature views with scheduled data sync, Vertex AI Feature Store serves only the latest feature values, including null values.
- Indicate how Vertex AI Feature Store handles null values while serving data from feature views associated with the feature group: false —This is the default setting.


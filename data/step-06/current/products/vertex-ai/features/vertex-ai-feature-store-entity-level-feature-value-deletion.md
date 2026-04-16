---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.141Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store entity-level feature value deletion"
feature_slug: "vertex-ai-feature-store-entity-level-feature-value-deletion"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "entity"
  - "level"
  - "value"
  - "deletion"
---

# Vertex AI Feature Store entity-level feature value deletion

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Feature Store now supports deleting feature values for specified entities, which is generally available.

## Extended Definition

Vertex AI Feature Store now supports deleting feature values for specified entities, which is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values](https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values)

## Supporting Pages

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A featurestore is a top-level container for entity types, features, and feature values.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const force = <BOOLEAN>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function deleteFeaturestore () { // Configure the name resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , force : Boolean ( force ), }; // Delete Featurestore request const [ operation ] = await featurestoreServiceClient . deleteFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Delete featurestore response' ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } deleteFeaturestore (); What's next Learn how to manage entity types and features .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function getFeaturestore () { // Configure the parent resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , }; // Get Featurestore request const [ response ] = await featurestoreServiceClient . getFeaturestore ( request , { timeout : Number ( timeout )} ); console . log ( 'Get featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } getFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### "Control access to Vertex AI Feature Store (Legacy) resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- Source ID: `site-docs-reference-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set resource-level Identity and Access Management (IAM) policies on the following Vertex AI Feature Store (Legacy) resources: Featurestore : When you set an Identity and Access Management policy on a featurestore, the policy applies to the featurestore and all entity types created in that featurestore.
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID :testIamPermissions -d Request JSON body: { "permissions": [ "aiplatform.googleapis.com/entityTypes.get", "aiplatform.googleapis.com/entityTypes.readFeatureValues", "aiplatform.googleapis.com/entityTypes.writeFeatureValues" ] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You can control access to Vertex AI Feature Store (Legacy) resources by setting IAM policies at different levels of the resource hierarchy .
- A DevOps administrator manages featurestores and entity types at the project level.

### Delete feature values \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values](https://docs.cloud.google.com/vertex-ai/docs/featurestore/delete-feature-values)
- Source ID: `site-docs-reference-3`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, run the "Example Feature Store workflow with sample data" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub You can delete feature values from an entity type in the following ways: Delete feature values from specified entities Delete feature values from specified features within a time range Delete feature values from specified entities You can delete feature values from multiple entities within an entity type.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/571445526053/locations/us-central1/operations/7688824614775947264", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteFeatureValuesOperationMetadata", "genericMetadata": { "createTime": "2022-05-09T16:59:38.128375Z", "updateTime": "2022-05-09T16:59:38.128375Z", "state": "RUNNING", "worksOn": [ "projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " ] } } } View request status To check the status of the POST request, send the following GET request.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/571445526053/locations/us-central1/operations/7688824614775947264", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteFeatureValuesOperationMetadata", "genericMetadata": { "createTime": "2022-05-09T16:59:38.128375Z", "updateTime": "2022-05-09T16:59:38.128375Z", "state": "RUNNING", "worksOn": [ "projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " ] } } } View request status To check the status of the POST request, send the following GET request.
- HTTP method and URL: POST https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE :deleteFeatureValues Request JSON body: { "selectTimeRangeAndFeature": { "timeRange": { "startTime": " START TIME ", "endTime": " END TIME " }, "featureSelector": { "idMatcher": { "ids": [ " FEATURE ID ", ...] } }, "skipOnlineStorageDelete": SKIP ONLINE STORAGE DELETE } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .


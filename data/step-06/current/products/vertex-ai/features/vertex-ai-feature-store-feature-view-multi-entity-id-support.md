---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.081Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store feature view multi-entity ID support"
feature_slug: "vertex-ai-feature-store-feature-view-multi-entity-id-support"
latest_feature_date: "2024-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "view"
  - "multi"
  - "entity"
  - "id"
---

# Vertex AI Feature Store feature view multi-entity ID support

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Enables feature views to accept multiple entity ID columns when creating or updating a feature view.

## Extended Definition

Enables feature views to accept multiple entity ID columns when creating or updating a feature view.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### Create a feature view instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- Source ID: `site-docs-reference-3`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature view from bq source with embedding management ( project : str , location : str , existing feature online store id : str , feature view id : str , bq table uri : str , entity id columns : List [ str ], embedding column : str , embedding dimensions : int , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store from typing import List def create feature view from bq source ( project : str , location : str , existing feature online store id : str , feature view id : str , bq table uri : str , entity id columns : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Vertex AI Feature Store assigns the BigQuery Data Viewer Identity and Access Management (IAM) role to this service account.
- TreeAhConfig (), ) fv = fos . create feature view ( name = feature view id , source = bigquery source , index config = index config , ) return fv project : Your project ID. location : Region where you want to create the feature view, such as us-central1 . existing feature online store id : The name of the online store instance where you want to create the feature view. feature view id : The name of the new feature view instance that you want to create. bq table uri : URI of the BigQuery source table or view. entity id columns : The names of the columns containing the entity IDs.

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, run the "Example Feature Store workflow with sample data" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Learn how to create, list, describe, update, and delete featurestores.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const force = <BOOLEAN>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function deleteFeaturestore () { // Configure the name resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , force : Boolean ( force ), }; // Delete Featurestore request const [ operation ] = await featurestoreServiceClient . deleteFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Delete featurestore response' ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } deleteFeaturestore (); What's next Learn how to manage entity types and features .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function getFeaturestore () { // Configure the parent resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , }; // Get Featurestore request const [ response ] = await featurestoreServiceClient . getFeaturestore ( request , { timeout : Number ( timeout )} ); console . log ( 'Get featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } getFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Feature Store terms Terms related to feature engineering feature engineering Feature engineering is the process of transforming raw machine learning (ML) data into features that can be used to train ML models or to make inferences. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature value A feature value corresponds to the actual and measurable value of a feature (attribute) of an instance or entity.
- There are two types of Vertex AI Feature Store resources in the Feature Registry: Feature Registry resources for feature data Feature Registry resources for feature monitoring Feature Registry resources for feature data To register your feature data in the Feature Registry, you need to create the following Vertex AI Feature Store resources: Feature group ( FeatureGroup ): A FeatureGroup resource is associated with a specific BigQuery source table or view.
- Open in Colab Open in Colab Enterprise View on GitHub Vertex AI Feature Store based LLM grounding tutorial In this tutorial, you learn how to chunk user-provided data, and then generate embedding vectors for each chunk using a Large Language Model (LLM) that has embedding generation capabilities.
- Open in Colab Open in Colab Enterprise View on GitHub Build a GenAI RAG application with Vertex AI Feature Store and BigQuery In this tutorial, you learn how to build a low-latency vector search system for your Gen AI application using BigQuery vector search and Vertex AI Feature Store.


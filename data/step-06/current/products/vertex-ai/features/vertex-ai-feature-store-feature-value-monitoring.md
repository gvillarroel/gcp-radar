---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.159Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store Feature Value Monitoring"
feature_slug: "vertex-ai-feature-store-feature-value-monitoring"
latest_feature_date: "2022-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "value"
  - "monitoring"
  - "now"
  - "generally"
---

# Vertex AI Feature Store Feature Value Monitoring

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Feature Store Feature Value Monitoring is now generally available (GA).

## Extended Definition

Vertex AI Feature Store Feature Value Monitoring is now generally available (GA).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)

## Supporting Pages

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function getFeaturestore () { // Configure the parent resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , }; // Get Featurestore request const [ response ] = await featurestoreServiceClient . getFeaturestore ( request , { timeout : Number ( timeout )} ); console . log ( 'Get featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } getFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function listFeaturestores () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } ; const request = { parent : parent , }; // List featurestores request const [ response ] = await featurestoreServiceClient . listFeaturestores ( request , { timeout : Number ( timeout )} ); console . log ( 'List featurestores response' ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } listFeaturestores (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- If Vertex AI loses permission to the associated CMEK key, any resources and values within featurestores that were encrypted by that key become inaccessible until Vertex AI can use that key again.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Feature Store terms Terms related to feature engineering feature engineering Feature engineering is the process of transforming raw machine learning (ML) data into features that can be used to train ML models or to make inferences. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature value A feature value corresponds to the actual and measurable value of a feature (attribute) of an instance or entity.
- There are two types of Vertex AI Feature Store resources in the Feature Registry: Feature Registry resources for feature data Feature Registry resources for feature monitoring Feature Registry resources for feature data To register your feature data in the Feature Registry, you need to create the following Vertex AI Feature Store resources: Feature group ( FeatureGroup ): A FeatureGroup resource is associated with a specific BigQuery source table or view.
- Open in Colab Open in Colab Enterprise View on GitHub Online feature serving and vector retrieval of BigQuery data with Vertex AI Feature Store In this tutorial, you learn how to use Vertex AI Feature Store for online serving and vector retrieval of feature values in BigQuery.
- Online feature serving and fetching of BigQuery data with Vertex AI Feature Store Bigtable online serving In this tutorial, you learn how to use Bigtable online serving in Vertex AI Feature Store for online serving and fetching of feature values in BigQuery.

### Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const description = 'YOUR ENTITY TYPE DESCRIPTION'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function createEntityTypeMonitoring () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const entityType = { description : description , monitoringConfig : { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }, }; const request = { parent : parent , entityTypeId : entityTypeId , entityType : entityType , }; // Create EntityType request const [ operation ] = await featurestoreServiceClient . createEntityType ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Create entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } createEntityTypeMonitoring (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID ", "createTime": "2021-07-22T23:18:31.339972Z", "updateTime": "2021-07-29T22:24:40.221821Z", "etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=", "monitoringConfig": { "snapshotAnalysis": { "monitoringIntervalDays": " DURATION IN DAYS ", "stalenessDays": " STALENESS DAYS " } }, "numericalThresholdConfig": { "value": " NUMERICAL THRESHOLD VALUE " }, "categoricalThresholdConfig": { "value": " CATEGORICAL THRESHOLD VALUE " }, "importFeatureAnalysis": { "state": " IMPORT FEATURE ANALYSIS STATE ", "anomalyDetectionBaseline": " IMPORT FEATURE ANALYSIS BASELINE " } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- The following types of feature value monitoring are supported: Snapshot Analysis : Vertex AI Feature Store (Legacy) takes periodic snapshots of your feature values.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateEntityTypeMonitoring () { // Configure the name resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } /entityTypes/ ${ entityTypeId } ; // Constructing the monitoring configuration const monitoringConfig = { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }; // Constructing the entityType const entityType = { name : name , monitoringConfig : monitoringConfig , }; const request = { entityType : entityType , }; // Update EntityType request const [ response ] = await featurestoreServiceClient . updateEntityType ( request , { timeout : Number ( timeout )} ); console . log ( 'Update entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateEntityTypeMonitoring (); Opt out of monitoring for a feature The following example turns off monitoring for an existing feature: REST To update a feature, send a PATCH request by using the features.patch method.


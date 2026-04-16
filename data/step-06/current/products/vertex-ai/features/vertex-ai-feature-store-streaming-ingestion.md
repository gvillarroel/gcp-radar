---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.144Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store streaming ingestion"
feature_slug: "vertex-ai-feature-store-streaming-ingestion"
latest_feature_date: "2022-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "streaming"
  - "ingestion"
  - "makes"
  - "generally"
---

# Vertex AI Feature Store streaming ingestion

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Makes streaming ingestion in Vertex AI Feature Store generally available; Vertex AI Feature Store supports streaming ingestion to ingest feature data in near real time.

## Extended Definition

Makes streaming ingestion in Vertex AI Feature Store generally available; Vertex AI Feature Store supports streaming ingestion to ingest feature data in near real time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)

## Supporting Pages

### Streaming import \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream](https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can import streaming event data and, within a few seconds, Vertex AI Feature Store (Legacy) makes that data available for online serving scenarios.
- To learn more, run the "Example Feature Store workflow with sample data" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Streaming import lets you make real-time updates to feature values.
- EntityType ( entity type name = entity type id , featurestore id = featurestore id ) my data = { "movie 01" : { "title" : "The Shawshank Redemption" , "average rating" : 4.7 , "genre" : "Drama" , }, } my entity type . write feature values ( instances = my data ) Additional languages You can install and use the following Vertex AI client libraries to call the Vertex AI API.
- For continued support and faster innovation, migrate to Vertex AI Feature Store (V2) , our integrated platform for machine learning (ML) feature management introduced on November 17, 2023.

### Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View metrics for streaming ingestion to offline storage You can monitor the Offline storage write for streaming write metric for Vertex AI Feature Store (Legacy) in the Metrics Explorer .
- Example query for all anomalies generated for a particular featurestore logName= "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2FFfeaturestore log" resource.labels.resource co nta i ner =<projec t nu mber > resource.labels. featurest ore id= < featurest ore id > Example of an anomaly log entry { "insertId" : "ktbx5jf7vdn7b" , "jsonPayload" : { "threshold" : 0.001 , "featureName" : "projects/<project number>/locations/us-central1/featurestores/<featurestore id>/entityTypes/<entity type id>/features/<feature id>" , "deviation" : 1 , "@type" : "type.googleapis.com/google.cloud.aiplatform.logging.FeatureAnomalyLogEntry" , "objective" : "Featurestore Monitoring Snapshot Drift Anomaly" }, "resource" : { "type" : "aiplatform.googleapis.com/Featurestore" , "labels" : { "resource container" : "<project number>" , "location" : "us-central1" , "featurestore id" : "<featurestore id>" } }, "timestamp" : "2022-02-06T00:54:06.455501Z" , "severity" : "WARNING" , "logName" : "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2Ffeaturestore log" , "receiveTimestamp" : "2022-02-06T00:54:06.476107155Z" } Monitor offline storage write errors for streaming ingestion Use the Google Cloud console to monitor write errors to the offline storage during streaming ingestion.
- Web UI In the Google Cloud console, go to the Metrics Explorer : Go to the Metrics Explorer Specify the data to appear on the chart: Resource & Metric : Select the metric Vertex AI Feature Store > Offline storage write for streaming write .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const description = 'YOUR ENTITY TYPE DESCRIPTION'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function createEntityTypeMonitoring () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const entityType = { description : description , monitoringConfig : { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }, }; const request = { parent : parent , entityTypeId : entityTypeId , entityType : entityType , }; // Create EntityType request const [ operation ] = await featurestoreServiceClient . createEntityType ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Create entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } createEntityTypeMonitoring (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const minNodeCount = <MINIMUM NO OF NODES>; // const maxNodeCount = <MAXIMUM NO OF NODES>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateFeaturestore () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const featurestore = { name : parent , onlineServingConfig : { scaling : { minNodeCount : minNodeCount , maxNodeCount : maxNodeCount , }, }, }; const request = { featurestore : featurestore , }; // Update Featurestore request const [ operation ] = await featurestoreServiceClient . updateFeaturestore ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Update featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function getFeaturestore () { // Configure the parent resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const request = { name : name , }; // Get Featurestore request const [ response ] = await featurestoreServiceClient . getFeaturestore ( request , { timeout : Number ( timeout )} ); console . log ( 'Get featurestore response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } getFeaturestore (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function listFeaturestores () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } ; const request = { parent : parent , }; // List featurestores request const [ response ] = await featurestoreServiceClient . listFeaturestores ( request , { timeout : Number ( timeout )} ); console . log ( 'List featurestores response' ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } listFeaturestores (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores" Select-Object -Expand Content You should receive a JSON response similar to the following: { "featurestores": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/test", "createTime": "2021-02-26T00:44:44.216805Z", "updateTime": "2021-02-26T00:44:44.364916Z", "etag": "AMEw9yNL0s7qZh8lZVZ5T3BEuhoEgFR7JmjbbCSAkRZjeKDXkkIYnxxA4POe5BWT8cCn", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 2 }, "state": "STABLE" }, { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/featurestore demo", "createTime": "2021-02-25T00:39:40.598781Z", "updateTime": "2021-02-25T00:39:40.744038Z", "etag": "AMEw9yO e0vm-9W yeCz4rJm-XnnEMYQ-vQesevxya sz-FckuysnDwo3cEXHdWWSeda", "labels": { "environment": "testing" }, "onlineServingConfig": { "fixedNodeCount": 3 }, "state": "STABLE" } ] } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .


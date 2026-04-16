---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.174Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex Model Monitoring"
feature_slug: "vertex-model-monitoring"
latest_feature_date: "2021-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
keywords:
  - "vertex"
  - "model"
  - "monitoring"
  - "became"
  - "generally"
  - "available"
---

# Vertex Model Monitoring

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex Model Monitoring became generally available.

## Extended Definition

Vertex Model Monitoring became generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)

## Supporting Pages

### Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const description = 'YOUR ENTITY TYPE DESCRIPTION'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function createEntityTypeMonitoring () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const entityType = { description : description , monitoringConfig : { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }, }; const request = { parent : parent , entityTypeId : entityTypeId , entityType : entityType , }; // Create EntityType request const [ operation ] = await featurestoreServiceClient . createEntityType ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Create entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } createEntityTypeMonitoring (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID ", "createTime": "2021-07-22T23:18:31.339972Z", "updateTime": "2021-07-29T22:24:40.221821Z", "etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=", "monitoringConfig": { "snapshotAnalysis": { "monitoringIntervalDays": " DURATION IN DAYS ", "stalenessDays": " STALENESS DAYS " } }, "numericalThresholdConfig": { "value": " NUMERICAL THRESHOLD VALUE " }, "categoricalThresholdConfig": { "value": " CATEGORICAL THRESHOLD VALUE " }, "importFeatureAnalysis": { "state": " IMPORT FEATURE ANALYSIS STATE ", "anomalyDetectionBaseline": " IMPORT FEATURE ANALYSIS BASELINE " } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Example query for all anomalies generated for a particular featurestore logName= "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2FFfeaturestore log" resource.labels.resource co nta i ner =<projec t nu mber > resource.labels. featurest ore id= < featurest ore id > Example of an anomaly log entry { "insertId" : "ktbx5jf7vdn7b" , "jsonPayload" : { "threshold" : 0.001 , "featureName" : "projects/<project number>/locations/us-central1/featurestores/<featurestore id>/entityTypes/<entity type id>/features/<feature id>" , "deviation" : 1 , "@type" : "type.googleapis.com/google.cloud.aiplatform.logging.FeatureAnomalyLogEntry" , "objective" : "Featurestore Monitoring Snapshot Drift Anomaly" }, "resource" : { "type" : "aiplatform.googleapis.com/Featurestore" , "labels" : { "resource container" : "<project number>" , "location" : "us-central1" , "featurestore id" : "<featurestore id>" } }, "timestamp" : "2022-02-06T00:54:06.455501Z" , "severity" : "WARNING" , "logName" : "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2Ffeaturestore log" , "receiveTimestamp" : "2022-02-06T00:54:06.476107155Z" } Monitor offline storage write errors for streaming ingestion Use the Google Cloud console to monitor write errors to the offline storage during streaming ingestion.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( FeaturestoreServiceClient featurestoreServiceClient = FeaturestoreServiceClient . create ( featurestoreServiceSettings )) { FeaturestoreMonitoringConfig featurestoreMonitoringConfig = FeaturestoreMonitoringConfig . newBuilder () . setSnapshotAnalysis ( SnapshotAnalysis . newBuilder (). setMonitoringIntervalDays ( monitoringIntervalDays )) . build (); EntityType entityType = EntityType . newBuilder () . setName ( EntityTypeName . of ( project , location , featurestoreId , entityTypeId ). toString ()) . setMonitoringConfig ( featurestoreMonitoringConfig ) . build (); UpdateEntityTypeRequest updateEntityTypeRequest = UpdateEntityTypeRequest . newBuilder (). setEntityType ( entityType ). build (); EntityType entityTypeResponse = featurestoreServiceClient . updateEntityType ( updateEntityTypeRequest ); System . out . println ( "Update Entity Type Monitoring Response" ); System . out . println ( entityTypeResponse ); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Vertex AI quickstart using client libraries .

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Configure the endpoint resource for model monitoring Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring with Vertex Explainable AI Feature Attributions .
- In this tutorial, you'll complete the following steps: Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench model monitoring v2 Model Monitoring for Vertex AI Custom Model Online Prediction .
- Learn to use the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests, for custom tabular models, using a custom deployment container.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Endpoint JSON representation { "name" : string , "displayName" : string , "description" : string , "deployedModels" : [ { object ( DeployedModel ) } ] , "trafficSplit" : { string : integer , ... } , "etag" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "encryptionSpec" : { object ( EncryptionSpec ) } , "network" : string , "enablePrivateServiceConnect" : boolean , "privateServiceConnectConfig" : { object ( PrivateServiceConnectConfig ) } , "modelDeploymentMonitoringJob" : string , "predictRequestResponseLoggingConfig" : { object ( PredictRequestResponseLoggingConfig ) } , "dedicatedEndpointEnabled" : boolean , "dedicatedEndpointDns" : string , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "genAiAdvancedFeaturesConfig" : { object ( GenAiAdvancedFeaturesConfig ) } } Fields name string Identifier.
- RolloutOptions JSON representation { "previousDeployedModel" : string , "revisionNumber" : integer , // Union field max unavailable can be only one of the following: "maxUnavailableReplicas" : integer , "maxUnavailablePercentage" : integer // End of list of possible types for union field max unavailable . // Union field max surge can be only one of the following: "maxSurgeReplicas" : integer , "maxSurgePercentage" : integer // End of list of possible types for union field max surge . } Fields previousDeployedModel string ID of the DeployedModel that this deployment should replace. revisionNumber integer Output only.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Format: projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model deployment monitoring job} predictRequestResponseLoggingConfig object ( PredictRequestResponseLoggingConfig ) Configures the request-response logging for online prediction. dedicatedEndpointEnabled boolean If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated endpoint dns].


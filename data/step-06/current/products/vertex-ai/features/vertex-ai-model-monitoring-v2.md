---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.078Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Model Monitoring v2"
feature_slug: "vertex-ai-model-monitoring-v2"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
keywords:
  - "vertex"
  - "ai"
  - "model"
  - "monitoring"
  - "v2"
  - "provides"
  - "centralized"
  - "configuration"
---

# Vertex AI Model Monitoring v2

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Model Monitoring v2 provides centralized model monitoring configuration and visualization at the model version level and supports monitoring models served outside Vertex AI.

## Extended Definition

Model Monitoring v2 provides centralized model monitoring configuration and visualization at the model version level and supports monitoring models served outside Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)

## Supporting Pages

### Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring](https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function updateEntityTypeMonitoring () { // Configure the name resource const name = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } /entityTypes/ ${ entityTypeId } ; // Constructing the monitoring configuration const monitoringConfig = { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }; // Constructing the entityType const entityType = { name : name , monitoringConfig : monitoringConfig , }; const request = { entityType : entityType , }; // Update EntityType request const [ response ] = await featurestoreServiceClient . updateEntityType ( request , { timeout : Number ( timeout )} ); console . log ( 'Update entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } updateEntityTypeMonitoring (); Opt out of monitoring for a feature The following example turns off monitoring for an existing feature: REST To update a feature, send a PATCH request by using the features.patch method.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const featurestoreId = 'YOUR FEATURESTORE ID'; // const entityTypeId = 'YOUR ENTITY TYPE ID'; // const description = 'YOUR ENTITY TYPE DESCRIPTION'; // const duration = <MONITORING INTERVAL IN SECONDS>; // const location = 'YOUR PROJECT LOCATION'; // const apiEndpoint = 'YOUR API ENDPOINT'; // const timeout = <TIMEOUT IN MILLI SECONDS>; // Imports the Google Cloud Featurestore Service Client library const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1beta1 ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : apiEndpoint , }; // Instantiates a client const featurestoreServiceClient = new FeaturestoreServiceClient ( clientOptions ); async function createEntityTypeMonitoring () { // Configure the parent resource const parent = projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ; const entityType = { description : description , monitoringConfig : { snapshotAnalysis : { monitoringInterval : { seconds : Number ( duration ), }, }, }, }; const request = { parent : parent , entityTypeId : entityTypeId , entityType : entityType , }; // Create EntityType request const [ operation ] = await featurestoreServiceClient . createEntityType ( request , { timeout : Number ( timeout )} ); const [ response ] = await operation . promise (); console . log ( 'Create entity type monitoring response' ); console . log ( Name : ${ response . name } ); console . log ( 'Raw response:' ); console . log ( JSON . stringify ( response , null , 2 )); } createEntityTypeMonitoring (); Additional languages To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featurestores/ FEATURESTORE ID /entityTypes/ ENTITY TYPE ID ", "createTime": "2021-07-22T23:18:31.339972Z", "updateTime": "2021-07-29T22:24:40.221821Z", "etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=", "monitoringConfig": { "snapshotAnalysis": { "monitoringIntervalDays": " DURATION IN DAYS ", "stalenessDays": " STALENESS DAYS " } }, "numericalThresholdConfig": { "value": " NUMERICAL THRESHOLD VALUE " }, "categoricalThresholdConfig": { "value": " CATEGORICAL THRESHOLD VALUE " }, "importFeatureAnalysis": { "state": " IMPORT FEATURE ANALYSIS STATE ", "anomalyDetectionBaseline": " IMPORT FEATURE ANALYSIS BASELINE " } } Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Example query for all anomalies generated for a particular featurestore logName= "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2FFfeaturestore log" resource.labels.resource co nta i ner =<projec t nu mber > resource.labels. featurest ore id= < featurest ore id > Example of an anomaly log entry { "insertId" : "ktbx5jf7vdn7b" , "jsonPayload" : { "threshold" : 0.001 , "featureName" : "projects/<project number>/locations/us-central1/featurestores/<featurestore id>/entityTypes/<entity type id>/features/<feature id>" , "deviation" : 1 , "@type" : "type.googleapis.com/google.cloud.aiplatform.logging.FeatureAnomalyLogEntry" , "objective" : "Featurestore Monitoring Snapshot Drift Anomaly" }, "resource" : { "type" : "aiplatform.googleapis.com/Featurestore" , "labels" : { "resource container" : "<project number>" , "location" : "us-central1" , "featurestore id" : "<featurestore id>" } }, "timestamp" : "2022-02-06T00:54:06.455501Z" , "severity" : "WARNING" , "logName" : "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2Ffeaturestore log" , "receiveTimestamp" : "2022-02-06T00:54:06.476107155Z" } Monitor offline storage write errors for streaming ingestion Use the Google Cloud console to monitor write errors to the offline storage during streaming ingestion.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Configure the endpoint resource for model monitoring Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring with Vertex Explainable AI Feature Attributions .
- In this tutorial, you'll complete the following steps: Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench model monitoring v2 Model Monitoring for Vertex AI Custom Model Online Prediction .
- Learn to use the Vertex AI Model Monitoring service to detect feature skew and drift in the input predict requests, for custom tabular models, using a custom deployment container.

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- The following configuration creates a single slice containing data where the age is between 1 and 3 and the species is "dog" : { "age": { "range": { "low": 1, "high": 3 } }, "species": { "value": { "string value": "dog" } } } The following configuration creates multiple slices—one for each unique species in the dataset, where the age is 1 . { "species": { "all values": { "value": true } }, "age": { "value": { "float value": 1.0 } } } The resulting slices contain the following data from the example dataset: Slice 1: age:1 and species:"dog" Slice 2: age:1 and species:"cat" Slice 3: age:1 and species:"rabbit" Format slices To format slices for the ModelEvaluationClassificationOp component, do the following: Create a slicing spec .
- For example: from google.cloud.aiplatform v1.types.ModelEvaluation import BiasConfig from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice import SliceSpec from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice.SliceSpec import SliceConfig bias config = BiasConfig(bias slices=SliceSpec(configs={ 'feature a': SliceConfig(SliceSpec.Value(string value='label a') ) })) Create a list to store the bias configurations.
- For example: from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice import SliceSpec from google.cloud.aiplatform v1.types.ModelEvaluationSlice.Slice.SliceSpec import SliceConfig slicing spec = SliceSpec(configs={ 'feature a': SliceConfig(SliceSpec.Value(string value='label a') ) }) Create a list to store the slice configurations.


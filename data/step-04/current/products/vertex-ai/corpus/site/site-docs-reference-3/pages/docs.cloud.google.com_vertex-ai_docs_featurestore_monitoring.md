---
title: "Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/monitoring
  title: "Monitoring \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Feature Store (Legacy) is
deprecated . Beginning on
May 17, 2026, no new features will be added and only critical
patches will be provided. On February 17, 2027, the service will be fully sunset and APIs will
no longer be available.
For continued support and faster innovation, migrate to
Vertex AI Feature Store (V2) ,
our integrated platform for machine learning (ML) feature management introduced on November 17,
2023.
To learn more,
run the "Example Feature Store workflow with sample data" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
In Vertex AI Feature Store (Legacy), you can monitor and set alerts on
featurestores and features. For example, an operations team might
monitor a featurestore to track its CPU utilization. Feature owners, such as
data scientists, might monitor feature values to detect drift over time.
The methods for monitoring featurestores and features are described in the
following sections:
Featurestore monitoring
Feature monitoring
Featurestore monitoring
Vertex AI Feature Store (Legacy) reports metrics about your featurestore to
Cloud Monitoring such as the CPU load, storage capacity, request
latencies, and billing. Vertex AI collects and reports these metrics
for you. You don't need to configure or enable featurestore monitoring.
To configure thresholds and notifications, use Cloud Monitoring. For example,
you can set an alert if the average CPU load exceeds 70%, which might require
you to increase the number of featurestore nodes.
You can also view featurestore metrics in the Vertex AI section of the Google Cloud console to see
trends over time. For some charts, the console shows aggregated or calculated
values to make the information easier to consume. You can always view the raw
data in Cloud Monitoring.
For more information, see Vertex AI Feature Store (Legacy) monitoring
metrics on the Vertex AI
Cloud Monitoring page.
Monitor billing for offline data processed in a featurestore
Use the Google Cloud console to monitor the billable data processed offline
by the featurestores.batchReadFeatureValues
and entityTypes.exportFeatureValues
methods. You can view the billable bytes for each featurestore.
You can monitor the Billable bytes metric for Vertex AI Feature Store (Legacy) in the Metrics Explorer .
Console
In the Google Cloud console, go to the Metrics Explorer :
Go to the Metrics Explorer
In the Metric list, select Vertex AI Feature Store > Featurestore > Billable bytes .
Click Apply . The chart displays the
offline billable data for the featurestores in your project.
After you generate the chart, you can add it to your custom dashboard.
For more information, see
Save a chart for future reference .
Feature value monitoring
Feature value monitoring lets you track how much the feature value
distribution changes in a featurestore. The following types of feature value monitoring are supported:
Snapshot Analysis : Vertex AI Feature Store (Legacy) takes periodic snapshots of your feature values. Over time, as you ingest more data, you might notice the distribution of your feature values change. This change indicates that any models using those features might need to be retrained. You can specify a threshold so that anomalies are logged in the Cloud Logging console whenever the distribution deviation crosses the threshold.
For datasets exceeding 5 million entity IDs, Vertex AI Feature Store (Legacy) generates snapshots based on 5 million randomly selected entity IDs within the time window that you specified as the number of staleness days.
Import Feature Analysis : Each ImportFeatureValues operation generates distribution statistics for the values ingested into Vertex AI Feature Store (Legacy). You can choose to detect anomalies by comparing your distribution statistics with the previously imported feature value distribution or, if enabled, the snapshot distribution.
For datasets exceeding 5 million instances, Vertex AI Feature Store (Legacy) generates snapshots based on randomly selected data, as follows:
If the number instances within the ingested dataset exceeds 5 million but does not exceed 50 million, then the snapshot is generated based on 5 million randomly selected instances.
If the number of instances within the ingested dataset exceeds 50 million, then the snapshot is generated based on 10% of the instances, selected randomly.
Note: A snapshot based on randomly selected samples improves cost efficiency. However, such a snapshot might not fully represent the feature value distribution of the entire dataset, compared to a snapshot that represents the entire dataset.
For example, consider a feature that collects prices of recently
sold homes and then feeds the values into a model for predicting the price of a house. The
prices of recently sold homes might drift significantly over time, or the batch of imported values might contain data that deviates significantly from the training data. Vertex AI Feature Store (Legacy) alerts you of this change. You can then retrain your model to use the latest information.
Set a monitoring configuration
To start monitoring, you can define a monitoring configuration on an entity type, which enables monitoring for all features of the following types:
BOOL
STRING
DOUBLE
INT64
You can set the monitoring configuration when you create an entity type. You can also choose to opt out of monitoring for specific features by setting the disableMonitoring property. The entity type monitoring configuration specifies the following:
Whether to enable monitoring. Monitoring is disabled by default.
Thresholds used to detect anomalies. Default threshold is 0.3.
Lookback window in addition to the interval between snapshots (for snapshot analysis). Default value is 21.
Whether to enable import feature analysis. Default is disabled.
For more information, see the
FeaturestoreMonitoringConfig
type in the API reference.
Create an entity type with monitoring enabled
The following example creates an entity type, where feature monitoring is enabled:
Web UI
Only snapshot analysis is supported from the UI.
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Select a region from the Region drop-down list.
Click Create Entity Type .
Flip the Feature monitoring section to Enabled .
Enter the number of days between snapshots in the Monitoring time interval field.
The monitoring job for an entity type or feature runs at the nearest round hour following the time of the day when you enable monitoring for the entity type or feature. For example, if you enable monitoring at 10:30 PM on Monday and specify two days as the monitoring time interval, the first monitoring job runs at 11 PM on Wednesday.
Enter the number of days to look back for each snapshot in the Monitoring lookback window field.
Enter the number for the threshold used for detecting anomalies for numerical features in the Numerical alerting threshold field.
Enter the number for the threshold used for detecting anomalies for categorical features in this EntityType in the Categorical alerting threshold field. For more information about detecting feature value anomalies, see View feature value anomalies .
Click Create .
In the features table, click an entity type.
To add new features to the entity, click Add Features .
To opt out of monitoring for a specific feature, toggle off Enable monitoring .
REST
To create an entity type, send a POST request by using the entityTypes.create method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : Your project ID .
FEATURESTORE_ID : ID of the featurestore.
ENTITY_TYPE_ID : ID of the entity type.
DURATION : The interval duration between snapshots in days.
STALENESS_DAYS : The number of days to look back when taking snapshots.
NUMERICAL_THRESHOLD_VALUE : The threshold to detect anomalies for numerical features under this entity type. Statistics deviation is calculated by the Jenson-Shannon divergence.
CATEGORICAL_THRESHOLD_VALUE : The threshold to detect anomalies for categorical features under this entity type. Statistics deviation is calculated by the L-Infinity distance.
IMPORT_FEATURE_ANALYSIS_STATE : The state indicating whether to enable import feature analysis.
IMPORT_FEATURE_ANALYSIS_BASELINE : The baseline for import feature analysis if enabled.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes?entityTypeId= ENTITY_TYPE_ID
Request JSON body:
{
"monitoringConfig": {
"snapshotAnalysis": {
"monitoringIntervalDays": " DURATION "
"stalenessDays": " STALENESS_DAYS "
}
},
"numericalThresholdConfig": {
"value": " NUMERICAL_THRESHOLD_VALUE "
},
"categoricalThresholdConfig": {
"value": " CATEGORICAL_THRESHOLD_VALUE "
},
"importFeatureAnalysis": {
"state": " IMPORT_FEATURE_ANALYSIS_STATE ",
"anomalyDetectionBaseline": " IMPORT_FEATURE_ANALYSIS_BASELINE "
}
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes?entityTypeId= ENTITY_TYPE_ID "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes?entityTypeId= ENTITY_TYPE_ID " | Select-Object -Expand Content
You should see output similar to the following. You can use the
OPERATION_ID in the response to
get the
status of the operation.
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.ui.CreateEntityTypeOperationMetadata",
"genericMetadata": {
"createTime": "2022-04-29T20:29:05.206525Z",
"updateTime": "2022-04-29T20:29:05.206525Z"
}
}
}
Java
Before trying this sample, follow the Java setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Java API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.gax.longrunning. OperationFuture ;
import com.google.cloud.aiplatform.v1. CreateEntityTypeOperationMetadata ;
import com.google.cloud.aiplatform.v1. CreateEntityTypeRequest ;
import com.google.cloud.aiplatform.v1. EntityType ;
import com.google.cloud.aiplatform.v1. FeaturestoreMonitoringConfig ;
import com.google.cloud.aiplatform.v1. FeaturestoreMonitoringConfig . SnapshotAnalysis ;
import com.google.cloud.aiplatform.v1. FeaturestoreName ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateEntityTypeMonitoringSample {
public static void main ( String [] args )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
String entityTypeId = "YOUR_ENTITY_TYPE_ID" ;
String description = "YOUR_ENTITY_TYPE_DESCRIPTION" ;
int monitoringIntervalDays = 1 ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
int timeout = 300 ;
createEntityTypeMonitoringSample (
project ,
featurestoreId ,
entityTypeId ,
description ,
monitoringIntervalDays ,
location ,
endpoint ,
timeout );
}
static void createEntityTypeMonitoringSample (
String project ,
String featurestoreId ,
String entityTypeId ,
String description ,
int monitoringIntervalDays ,
String location ,
String endpoint ,
int timeout )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
FeaturestoreServiceSettings featurestoreServiceSettings =
FeaturestoreServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( FeaturestoreServiceClient featurestoreServiceClient =
FeaturestoreServiceClient . create ( featurestoreServiceSettings )) {
FeaturestoreMonitoringConfig featurestoreMonitoringConfig =
FeaturestoreMonitoringConfig . newBuilder ()
. setSnapshotAnalysis (
SnapshotAnalysis . newBuilder (). setMonitoringIntervalDays ( monitoringIntervalDays ))
. build ();
EntityType entityType =
EntityType . newBuilder ()
. setDescription ( description )
. setMonitoringConfig ( featurestoreMonitoringConfig )
. build ();
CreateEntityTypeRequest createEntityTypeRequest =
CreateEntityTypeRequest . newBuilder ()
. setParent ( FeaturestoreName . of ( project , location , featurestoreId ). toString ())
. setEntityType ( entityType )
. setEntityTypeId ( entityTypeId )
. build ();
OperationFuture<EntityType , CreateEntityTypeOperationMetadata > entityTypeFuture =
featurestoreServiceClient . createEntityTypeAsync ( createEntityTypeRequest );
System . out . format (
"Operation name: %s%n" , entityTypeFuture . getInitialFuture (). get (). getName ());
System . out . println ( "Waiting for operation to finish..." );
EntityType entityTypeResponse = entityTypeFuture . get ( timeout , TimeUnit . SECONDS );
System . out . println ( "Create Entity Type Monitoring Response" );
System . out . format ( "Name: %s%n" , entityTypeResponse . getName ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Node.js API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.\
* (Not necessary if passing values as arguments)
*/
// const project = 'YOUR_PROJECT_ID';
// const featurestoreId = 'YOUR_FEATURESTORE_ID';
// const entityTypeId = 'YOUR_ENTITY_TYPE_ID';
// const description = 'YOUR_ENTITY_TYPE_DESCRIPTION';
// const duration = <MONITORING_INTERVAL_IN_SECONDS>;
// const location = 'YOUR_PROJECT_LOCATION';
// const apiEndpoint = 'YOUR_API_ENDPOINT';
// const timeout = <TIMEOUT_IN_MILLI_SECONDS>;
// Imports the Google Cloud Featurestore Service Client library
const { FeaturestoreServiceClient } =
require ( ' @google-cloud/aiplatform ' ). v1beta1 ;
// Specifies the location of the api endpoint
const clientOptions = {
apiEndpoint : apiEndpoint ,
};
// Instantiates a client
const featurestoreServiceClient = new FeaturestoreServiceClient (
clientOptions
);
async function createEntityTypeMonitoring () {
// Configure the parent resource
const parent = `projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ` ;
const entityType = {
description : description ,
monitoringConfig : {
snapshotAnalysis : {
monitoringInterval : {
seconds : Number ( duration ),
},
},
},
};
const request = {
parent : parent ,
entityTypeId : entityTypeId ,
entityType : entityType ,
};
// Create EntityType request
const [ operation ] = await featurestoreServiceClient . createEntityType (
request ,
{ timeout : Number ( timeout )}
);
const [ response ] = await operation . promise ();
console . log ( 'Create entity type monitoring response' );
console . log ( `Name : ${ response . name } ` );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
createEntityTypeMonitoring ();
Additional languages
To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python . For more information, see the Vertex AI SDK for Python API reference documentation.
Opt out of monitoring for a new feature
The following example creates a new feature with monitoring turned off:
REST
To create a feature, send a POST request by using the features.create method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
ENTITY_TYPE_ID : ID of the entity type.
FEATURE_ID : ID of the feature.
VALUE_TYPE : The value type of the feature.
DISABLE_MONITORING : Set to true to explicitly opt out of monitoring.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID ?featureId=/ FEATURE_ID
Request JSON body:
{
"disableMonitoring": " DISABLE_MONITORING ",
"valueType": " VALUE_TYPE "
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID ?featureId=/ FEATURE_ID "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID ?featureId=/ FEATURE_ID " | Select-Object -Expand Content
You should see output similar to the following. You can use the
OPERATION_ID in the response to
get the
status of the operation.
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.ui.CreateFeatureOperationMetadata",
"genericMetadata": {
"createTime": "2022-04-29T20:29:05.206525Z",
"updateTime": "2022-04-29T20:29:05.206525Z"
}
}
}
Update monitoring configuration
You can set the monitoring configuration when updating an entity type. You can also choose to opt out of monitoring for specific features by setting the disableMonitoring property.
Update monitoring configuration for entity type and features
The following example updates the monitoring configuration for an existing entity type and specific features for that entity type:
Web UI
Only snapshot analysis is supported from the UI.
In the Vertex AI section of the Google Cloud console, go to the Features page.
Select a region from the Region drop-down list.
In the features table, view the Entity type column to find the entity type to update.
Click the name of the entity type name to view the entity details page.
From the action bar, click Edit Info .
In Monitoring time interval , enter the number of days between snapshots.
The monitoring job for an entity type or feature runs at the nearest round hour following the time of the day when you enable monitoring for the entity type or feature. For example, if you enable monitoring at 10:30 PM on Monday and specify two days as the monitoring time interval, the first monitoring job runs at 11 PM on Wednesday.
Click Update .
Similarly, in the features table, view the Features column to find the feature to update.
Click the feature name to view the details page.
From the action bar, click Edit Info .
To opt out of monitoring for a specific feature, toggle off Monitoring enabled .
REST
To update an entity type, send a PATCH request by using the entityTypes.patch method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
ENTITY_TYPE_ID : ID of the entity type.
DURATION_IN_DAYS : The interval duration between snapshots in days.
STALENESS_DAYS : The number of days to look back when taking snapshots.
NUMERICAL_THRESHOLD_VALUE : The threshold to detect anomalies for numerical features under this entity type. Statistics deviation is calculated by the Jenson-Shannon divergence.
CATEGORICAL_THRESHOLD_VALUE : The threshold to detect anomalies for categorical features under this entity type. Statistics deviation is calculated by the L-Infinity distance.
IMPORT_FEATURE_ANALYSIS_STATE : The state indicating whether to enable import feature analysis.
IMPORT_FEATURE_ANALYSIS_BASELINE : The baseline indicating ????
HTTP method and URL:
PATCH https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID
Request JSON body:
{
"monitoringConfig": {
"snapshotAnalysis": {
"monitoringIntervalDays": " DURATION_IN_DAYS ",
"stalenessDays": " STALENESS_DAYS "
}
},
"numericalThresholdConfig": {
"value": " NUMERICAL_THRESHOLD_VALUE "
},
"categoricalThresholdConfig": {
"value": " CATEGORICAL_THRESHOLD_VALUE "
},
"importFeatureAnalysis": {
"state": " IMPORT_FEATURE_ANALYSIS_STATE ",
"anomalyDetectionBaseline": " IMPORT_FEATURE_ANALYSIS_BASELINE "
}
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID ",
"createTime": "2021-07-22T23:18:31.339972Z",
"updateTime": "2021-07-29T22:24:40.221821Z",
"etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=",
"monitoringConfig": {
"snapshotAnalysis": {
"monitoringIntervalDays": " DURATION_IN_DAYS ",
"stalenessDays": " STALENESS_DAYS "
}
},
"numericalThresholdConfig": {
"value": " NUMERICAL_THRESHOLD_VALUE "
},
"categoricalThresholdConfig": {
"value": " CATEGORICAL_THRESHOLD_VALUE "
},
"importFeatureAnalysis": {
"state": " IMPORT_FEATURE_ANALYSIS_STATE ",
"anomalyDetectionBaseline": " IMPORT_FEATURE_ANALYSIS_BASELINE "
}
}
Java
Before trying this sample, follow the Java setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Java API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.aiplatform.v1. EntityType ;
import com.google.cloud.aiplatform.v1. EntityTypeName ;
import com.google.cloud.aiplatform.v1. FeaturestoreMonitoringConfig ;
import com.google.cloud.aiplatform.v1. FeaturestoreMonitoringConfig . SnapshotAnalysis ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.cloud.aiplatform.v1. UpdateEntityTypeRequest ;
import java.io.IOException ;
public class UpdateEntityTypeMonitoringSample {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
String entityTypeId = "YOUR_ENTITY_TYPE_ID" ;
int monitoringIntervalDays = 1 ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
updateEntityTypeMonitoringSample (
project , featurestoreId , entityTypeId , monitoringIntervalDays , location , endpoint );
}
static void updateEntityTypeMonitoringSample (
String project ,
String featurestoreId ,
String entityTypeId ,
int monitoringIntervalDays ,
String location ,
String endpoint )
throws IOException {
FeaturestoreServiceSettings featurestoreServiceSettings =
FeaturestoreServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( FeaturestoreServiceClient featurestoreServiceClient =
FeaturestoreServiceClient . create ( featurestoreServiceSettings )) {
FeaturestoreMonitoringConfig featurestoreMonitoringConfig =
FeaturestoreMonitoringConfig . newBuilder ()
. setSnapshotAnalysis (
SnapshotAnalysis . newBuilder (). setMonitoringIntervalDays ( monitoringIntervalDays ))
. build ();
EntityType entityType =
EntityType . newBuilder ()
. setName (
EntityTypeName . of ( project , location , featurestoreId , entityTypeId ). toString ())
. setMonitoringConfig ( featurestoreMonitoringConfig )
. build ();
UpdateEntityTypeRequest updateEntityTypeRequest =
UpdateEntityTypeRequest . newBuilder (). setEntityType ( entityType ). build ();
EntityType entityTypeResponse =
featurestoreServiceClient . updateEntityType ( updateEntityTypeRequest );
System . out . println ( "Update Entity Type Monitoring Response" );
System . out . println ( entityTypeResponse );
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Vertex AI quickstart using
client libraries .
For more information, see the
Vertex AI Node.js API
reference documentation .
To authenticate to Vertex AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.\
* (Not necessary if passing values as arguments)
*/
// const project = 'YOUR_PROJECT_ID';
// const featurestoreId = 'YOUR_FEATURESTORE_ID';
// const entityTypeId = 'YOUR_ENTITY_TYPE_ID';
// const duration = <MONITORING_INTERVAL_IN_SECONDS>;
// const location = 'YOUR_PROJECT_LOCATION';
// const apiEndpoint = 'YOUR_API_ENDPOINT';
// const timeout = <TIMEOUT_IN_MILLI_SECONDS>;
// Imports the Google Cloud Featurestore Service Client library
const { FeaturestoreServiceClient } =
require ( ' @google-cloud/aiplatform ' ). v1beta1 ;
// Specifies the location of the api endpoint
const clientOptions = {
apiEndpoint : apiEndpoint ,
};
// Instantiates a client
const featurestoreServiceClient = new FeaturestoreServiceClient (
clientOptions
);
async function updateEntityTypeMonitoring () {
// Configure the name resource
const name = `projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } /entityTypes/ ${ entityTypeId } ` ;
// Constructing the monitoring configuration
const monitoringConfig = {
snapshotAnalysis : {
monitoringInterval : {
seconds : Number ( duration ),
},
},
};
// Constructing the entityType
const entityType = {
name : name ,
monitoringConfig : monitoringConfig ,
};
const request = {
entityType : entityType ,
};
// Update EntityType request
const [ response ] = await featurestoreServiceClient . updateEntityType (
request ,
{ timeout : Number ( timeout )}
);
console . log ( 'Update entity type monitoring response' );
console . log ( `Name : ${ response . name } ` );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
updateEntityTypeMonitoring ();
Opt out of monitoring for a feature
The following example turns off monitoring for an existing feature:
REST
To update a feature, send a PATCH request by using the features.patch method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
ENTITY_TYPE_ID : ID of the entity type.
FEATURE_ID : ID of the feature to update.
DISABLE_MONITORING : Set to true to explicitly opt out of monitoring.
HTTP method and URL:
PATCH https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID /features/ FEATURE_ID
Request JSON body:
{
"disableMonitoring": " DISABLE_MONITORING "
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID /features/ FEATURE_ID "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID /features/ FEATURE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID /features/ FEATURE_ID ",
"valueType": " FEATURE_VALUE_TYPE ",
"createTime": "2021-07-22T23:18:31.339972Z",
"updateTime": "2021-07-29T22:24:40.221821Z",
"etag": "AMEw9yPGDpwUwHx39gIDIg5mTQz65GMhnYHRzRslVPonm1g8xTnsTC5YUibmWo2MIuI=",
"disableMonitoring": " DISABLE_MONITORING "
}
View feature value distributions
Use the Google Cloud console to view the distribution of feature values over
time.
Web UI
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Select a region from the Region drop-down list.
To view the feature value distributions for all features of an entity type, in the Entity type column, click the entity type.
Note: The entity type features table displays the feature value distribution statistics for a feature only if monitoring is enabled for that feature. When a feature value is updated, the information in this table is not updated until monitoring runs at least once. This delay depends on the monitoring time interval configured for the snapshot analysis. For more information, see Set a monitoring configuration .
To view feature value distribution metrics for a feature:
In the Feature column, click the feature.
Click Metrics tab to view the feature value distribution metrics.
Note: You can view feature distribution metrics only if monitoring is enabled for a feature. On the Feature properties tab, verify that the Status field under Feature monitoring shows Enabled . All other feature monitoring settings are inherited from the parent entity type.
View feature value anomalies
If the feature value distribution deviates beyond the specified threshold in a monitoring pipeline, it's considered an anomaly. There are two types of anomalies—training-serving skew and drift. To calculate the deviation, Vertex AI compares the latest feature values in production with a baseline.
To detect training-serving skew, Vertex AI compares the latest feature values in production with the statistical distribution of feature values in the training data. In this case, the statistical distribution of feature values in the training data is considered as the baseline distribution. Learn more about training-serving skew.
To detect drift, Vertex AI compares the latest feature values in production with the statistical distribution of feature values from the most recent monitoring run that occurred at least one hour ago. In this case, the statistical distribution of feature values from the most recent monitoring run is considered as the baseline distribution. Learn more about drift.
In both cases, the baseline distribution is compared to the latest feature values in production to calculate a distance score.
For categorical features, the distance score is calculated using the L-infinity distance . In this case, if the distance score exceeds the threshold you specify in the Categorical alerting threshold field, it's identified as an anomaly.
For numerical features, the distance score is calculated using the Jensen-Shannon divergence . In this case, if the distance score exceeds the threshold you specify in the Numerical alerting threshold field, it's identified as an anomaly.
In either case, the anomaly might be a training-serving skew or a drift, depending on the baseline distribution used to calculate the distance score. An anomaly log is written to Cloud Logging with the log name featurestore_log . You can sync the logs to any downstream service Cloud Logging supports, such as Pub/Sub.
For more information about setting the alert thresholds, see Create an entity type with monitoring enabled .
Example query for all anomalies generated for a particular featurestore
logName= "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2FFfeaturestore_log"
resource.labels.resource_co nta i ner =<projec t _ nu mber >
resource.labels. featurest ore_id= < featurest ore_id >
Example of an anomaly log entry
{
"insertId" : "ktbx5jf7vdn7b" ,
"jsonPayload" : {
"threshold" : 0.001 ,
"featureName" : "projects/<project_number>/locations/us-central1/featurestores/<featurestore_id>/entityTypes/<entity_type_id>/features/<feature_id>" ,
"deviation" : 1 ,
"@type" : "type.googleapis.com/google.cloud.aiplatform.logging.FeatureAnomalyLogEntry" ,
"objective" : "Featurestore Monitoring Snapshot Drift Anomaly"
},
"resource" : {
"type" : "aiplatform.googleapis.com/Featurestore" ,
"labels" : {
"resource_container" : "<project_number>" ,
"location" : "us-central1" ,
"featurestore_id" : "<featurestore_id>"
}
},
"timestamp" : "2022-02-06T00:54:06.455501Z" ,
"severity" : "WARNING" ,
"logName" : "projects/model-monitoring-demo/logs/aiplatform.googleapis.com%2Ffeaturestore_log" ,
"receiveTimestamp" : "2022-02-06T00:54:06.476107155Z"
}
Monitor offline storage write errors for streaming ingestion
Use the Google Cloud console to monitor write errors to the offline storage during streaming ingestion.
View metrics for streaming ingestion to offline storage
You can monitor the Offline storage write for streaming write metric for Vertex AI Feature Store (Legacy) in the Metrics Explorer .
Web UI
In the Google Cloud console, go to the Metrics Explorer :
Go to the Metrics Explorer
Specify the data to appear on the chart:
Resource & Metric : Select the metric Vertex AI Feature Store > Offline storage write for streaming write .
Filter : Select error_code .
Click Apply . The chart displays the offline storage write errors for the various error codes.
After you generate the chart, you can add it to your custom dashboard. For more information, see Save a chart for future reference .
View Vertex AI Feature Store (Legacy) logs
You can view the log entries for your featurestore, including logs generated during offline store write errors, in the Logs Explorer .
Web UI
In the Google Cloud console, go to the Logs Explorer :
Go to the Logs Explorer
In the Query builder , add the following query parameters and then click Run query :
Resource : Select Vertex AI Feature Store .
Log name : Under Vertex AI API , select aiplatform.googlapis.com/featurestore_log .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

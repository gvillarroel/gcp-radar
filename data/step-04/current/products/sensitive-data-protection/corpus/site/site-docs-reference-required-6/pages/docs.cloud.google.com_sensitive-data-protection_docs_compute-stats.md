---
title: "Computing numerical and categorical statistics \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats
  title: "Computing numerical and categorical statistics \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Computing numerical and categorical statistics
Stay organized with collections
Save and categorize content based on your preferences.
You can use Sensitive Data Protection to compute numerical and categorical
numerical statistics for individual columns in BigQuery tables.
Sensitive Data Protection can calculate the following:
The column's minimum value
The column's maximum value
Quantile values
for the column
A histogram of value frequencies in the column
Compute numerical statistics
You can determine minimum, maximum, and quantile values for an individual
BigQuery column. To calculate these values, you configure a
DlpJob ,
setting the
NumericalStatsConfig
privacy metric to the name of the column to scan. When you run the
job ,
Sensitive Data Protection computes statistics for the given column, returning
its results in the
NumericalStatsResult
object. Sensitive Data Protection can compute statistics for the following
number types:
integer
float
date
datetime
timestamp
time
The statistics that a scan run returns include the minimum value, the maximum
value, and 99 quantile
values that
partition the set of field values into 100 equal sized buckets.
Code examples
Following is sample code in several languages that demonstrates how to use
Sensitive Data Protection to calculate numerical statistics.
Important:
The code on this page requires that you first set up a Sensitive Data Protection client. For more
information about installing and creating a Sensitive Data Protection client, see
Sensitive Data Protection client libraries . (Sending JSON
to Sensitive Data Protection REST endpoints does not require a client
library.)
C#
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dlp.V2 ;
using Google.Cloud.PubSub.V1 ;
using Newtonsoft.Json ;
using System ;
using System.Collections.Generic ;
using System.Linq ;
using System.Threading ;
using System.Threading.Tasks ;
using static Google . Cloud . Dlp . V2 . Action . Types ;
using static Google . Cloud . Dlp . V2 . PrivacyMetric . Types ;
public class RiskAnalysisCreateNumericalStats
{
public static AnalyzeDataSourceRiskDetails . Types . NumericalStatsResult NumericalStats (
string callingProjectId ,
string tableProjectId ,
string datasetId ,
string tableId ,
string topicId ,
string subscriptionId ,
string columnName )
{
var dlp = DlpServiceClient . Create ();
// Construct + submit the job
var config = new RiskAnalysisJobConfig
{
PrivacyMetric = new PrivacyMetric
{
NumericalStatsConfig = new NumericalStatsConfig
{
Field = new FieldId { Name = columnName }
}
},
SourceTable = new BigQueryTable
{
ProjectId = tableProjectId ,
DatasetId = datasetId ,
TableId = tableId
},
Actions =
{
new Google . Cloud . Dlp . V2 . Action
{
PubSub = new PublishToPubSub
{
Topic = $"projects/{callingProjectId}/topics/{topicId}"
}
}
}
};
var submittedJob = dlp . CreateDlpJob (
new CreateDlpJobRequest
{
ParentAsProjectName = new ProjectName ( callingProjectId ),
RiskJob = config
});
// Listen to pub/sub for the job
var subscriptionName = new SubscriptionName ( callingProjectId , subscriptionId );
var subscriber = SubscriberClient . CreateAsync (
subscriptionName ). Result ;
// SimpleSubscriber runs your message handle function on multiple
// threads to maximize throughput.
var done = new ManualResetEventSlim ( false );
subscriber . StartAsync (( PubsubMessage message , CancellationToken cancel ) = >
{
if ( message . Attributes [ "DlpJobName" ] == submittedJob . Name )
{
Thread . Sleep ( 500 ); // Wait for DLP API results to become consistent
done . Set ();
return Task . FromResult ( SubscriberClient . Reply . Ack );
}
else
{
return Task . FromResult ( SubscriberClient . Reply . Nack );
}
});
done . Wait ( TimeSpan . FromMinutes ( 10 )); // 10 minute timeout; may not work for large jobs
subscriber . StopAsync ( CancellationToken . None ). Wait ();
// Process results
var resultJob = dlp . GetDlpJob (
new GetDlpJobRequest
{
DlpJobName = DlpJobName . Parse ( submittedJob . Name )
});
var result = resultJob . RiskDetails . NumericalStatsResult ;
// 'UnpackValue(x)' is a prettier version of 'x.toString()'
Console . WriteLine ( $"Value Range: [{UnpackValue(result. MinValue )}, {UnpackValue(result. MaxValue )}]" );
var lastValue = string . Empty ;
for ( var quantile = 0 ; quantile < result . QuantileValues . Count ; quantile ++ )
{
var currentValue = UnpackValue ( result . QuantileValues [ quantile ]);
if ( lastValue != currentValue )
{
Console . WriteLine ( $"Value at {quantile + 1}% quantile: {currentValue}" );
}
lastValue = currentValue ;
}
return result ;
}
public static string UnpackValue ( Value protoValue )
{
var jsonValue = JsonConvert . DeserializeObject<Dictionary<string , object >> ( protoValue . ToString ());
return jsonValue . Values . ElementAt ( 0 ). ToString ();
}
}
Go
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"time"
dlp "cloud.google.com/go/dlp/apiv2"
"cloud.google.com/go/dlp/apiv2/dlppb"
"cloud.google.com/go/pubsub"
)
// riskNumerical computes the numerical risk of the given column.
func riskNumerical ( w io . Writer , projectID , dataProject , pubSubTopic , pubSubSub , datasetID , tableID , columnName string ) error {
// projectID := "my-project-id"
// dataProject := "bigquery-public-data"
// pubSubTopic := "dlp-risk-sample-topic"
// pubSubSub := "dlp-risk-sample-sub"
// datasetID := "nhtsa_traffic_fatalities"
// tableID := "accident_2015"
// columnName := "state_number"
ctx := context . Background ()
client , err := dlp . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "dlp.NewClient: %w" , err )
}
// Create a PubSub Client used to listen for when the inspect job finishes.
pubsubClient , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return err
}
defer pubsubClient . Close ()
// Create a PubSub subscription we can use to listen for messages.
// Create the Topic if it doesn't exist.
t := pubsubClient . Topic ( pubSubTopic )
topicExists , err := t . Exists ( ctx )
if err != nil {
return err
}
if ! topicExists {
if t , err = pubsubClient . CreateTopic ( ctx , pubSubTopic ); err != nil {
return err
}
}
// Create the Subscription if it doesn't exist.
s := pubsubClient . Subscription ( pubSubSub )
subExists , err := s . Exists ( ctx )
if err != nil {
return err
}
if ! subExists {
if s , err = pubsubClient . CreateSubscription ( ctx , pubSubSub , pubsub . SubscriptionConfig { Topic : t }); err != nil {
return err
}
}
// topic is the PubSub topic string where messages should be sent.
topic := "projects/" + projectID + "/topics/" + pubSubTopic
// Create a configured request.
req := & dlppb . CreateDlpJobRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/global" , projectID ),
Job : & dlppb . CreateDlpJobRequest_RiskJob {
RiskJob : & dlppb . RiskAnalysisJobConfig {
// PrivacyMetric configures what to compute.
PrivacyMetric : & dlppb . PrivacyMetric {
Type : & dlppb . PrivacyMetric_NumericalStatsConfig_ {
NumericalStatsConfig : & dlppb . PrivacyMetric_NumericalStatsConfig {
Field : & dlppb . FieldId {
Name : columnName ,
},
},
},
},
// SourceTable describes where to find the data.
SourceTable : & dlppb . BigQueryTable {
ProjectId : dataProject ,
DatasetId : datasetID ,
TableId : tableID ,
},
// Send a message to PubSub using Actions.
Actions : [] * dlppb . Action {
{
Action : & dlppb . Action_PubSub {
PubSub : & dlppb . Action_PublishToPubSub {
Topic : topic ,
},
},
},
},
},
},
}
// Create the risk job.
j , err := client . CreateDlpJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateDlpJob: %w" , err )
}
fmt . Fprintf ( w , "Created job: %v\n" , j . GetName ())
// Wait for the risk job to finish by waiting for a PubSub message.
// This only waits for 10 minutes. For long jobs, consider using a truly
// asynchronous execution model such as Cloud Functions.
ctx , cancel := context . WithTimeout ( ctx , 10 * time . Minute )
defer cancel ()
err = s . Receive ( ctx , func ( ctx context . Context , msg * pubsub . Message ) {
// If this is the wrong job, do not process the result.
if msg . Attributes [ "DlpJobName" ] != j . GetName () {
msg . Nack ()
return
}
msg . Ack ()
time . Sleep ( 500 * time . Millisecond )
resp , err := client . GetDlpJob ( ctx , & dlppb . GetDlpJobRequest {
Name : j . GetName (),
})
if err != nil {
fmt . Fprintf ( w , "GetDlpJob: %v" , err )
return
}
n := resp . GetRiskDetails (). GetNumericalStatsResult ()
fmt . Fprintf ( w , "Value range: [%v, %v]\n" , n . GetMinValue (), n . GetMaxValue ())
var tmp string
for p , v := range n . GetQuantileValues () {
if v . String () != tmp {
fmt . Fprintf ( w , "Value at %v quantile: %v\n" , p , v )
tmp = v . String ()
}
}
// Stop listening for more messages.
cancel ()
})
if err != nil {
return fmt . Errorf ( "Recieve: %w" , err )
}
return nil
}
Java
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.core. SettableApiFuture ;
import com.google.cloud.dlp.v2. DlpServiceClient ;
import com.google.cloud.pubsub.v1. AckReplyConsumer ;
import com.google.cloud.pubsub.v1. MessageReceiver ;
import com.google.cloud.pubsub.v1. Subscriber ;
import com.google.privacy.dlp.v2. Action ;
import com.google.privacy.dlp.v2. Action . PublishToPubSub ;
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . NumericalStatsResult ;
import com.google.privacy.dlp.v2. BigQueryTable ;
import com.google.privacy.dlp.v2. CreateDlpJobRequest ;
import com.google.privacy.dlp.v2. DlpJob ;
import com.google.privacy.dlp.v2. FieldId ;
import com.google.privacy.dlp.v2. GetDlpJobRequest ;
import com.google.privacy.dlp.v2. LocationName ;
import com.google.privacy.dlp.v2. PrivacyMetric ;
import com.google.privacy.dlp.v2. PrivacyMetric . NumericalStatsConfig ;
import com.google.privacy.dlp.v2. RiskAnalysisJobConfig ;
import com.google.privacy.dlp.v2. Value ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. ProjectTopicName ;
import com.google.pubsub.v1. PubsubMessage ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
class RiskAnalysisNumericalStats {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String datasetId = "your-bigquery-dataset-id" ;
String tableId = "your-bigquery-table-id" ;
String topicId = "pub-sub-topic" ;
String subscriptionId = "pub-sub-subscription" ;
numericalStatsAnalysis ( projectId , datasetId , tableId , topicId , subscriptionId );
}
public static void numericalStatsAnalysis (
String projectId , String datasetId , String tableId , String topicId , String subscriptionId )
throws ExecutionException , InterruptedException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DlpServiceClient dlpServiceClient = DlpServiceClient . create ()) {
// Specify the BigQuery table to analyze
BigQueryTable bigQueryTable =
BigQueryTable . newBuilder ()
. setTableId ( tableId )
. setDatasetId ( datasetId )
. setProjectId ( projectId )
. build ();
// This represents the name of the column to analyze, which must contain numerical data
String columnName = "Age" ;
// Configure the privacy metric for the job
FieldId fieldId = FieldId . newBuilder (). setName ( columnName ). build ();
NumericalStatsConfig numericalStatsConfig =
NumericalStatsConfig . newBuilder (). setField ( fieldId ). build ();
PrivacyMetric privacyMetric =
PrivacyMetric . newBuilder (). setNumericalStatsConfig ( numericalStatsConfig ). build ();
// Create action to publish job status notifications over Google Cloud Pub/Sub
ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId );
PublishToPubSub publishToPubSub =
PublishToPubSub . newBuilder (). setTopic ( topicName . toString ()). build ();
Action action = Action . newBuilder (). setPubSub ( publishToPubSub ). build ();
// Configure the risk analysis job to perform
RiskAnalysisJobConfig riskAnalysisJobConfig =
RiskAnalysisJobConfig . newBuilder ()
. setSourceTable ( bigQueryTable )
. setPrivacyMetric ( privacyMetric )
. addActions ( action )
. build ();
CreateDlpJobRequest createDlpJobRequest =
CreateDlpJobRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , "global" ). toString ())
. setRiskJob ( riskAnalysisJobConfig )
. build ();
// Send the request to the API using the client
DlpJob dlpJob = dlpServiceClient . createDlpJob ( createDlpJobRequest );
// Set up a Pub/Sub subscriber to listen on the job completion status
final SettableApiFuture<Boolean> done = SettableApiFuture . create ();
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
MessageReceiver messageHandler =
( PubsubMessage pubsubMessage , AckReplyConsumer ackReplyConsumer ) - > {
handleMessage ( dlpJob , done , pubsubMessage , ackReplyConsumer );
};
Subscriber subscriber = Subscriber . newBuilder ( subscriptionName , messageHandler ). build ();
subscriber . startAsync ();
// Wait for job completion semi-synchronously
// For long jobs, consider using a truly asynchronous execution model such as Cloud Functions
try {
done . get ( 15 , TimeUnit . MINUTES );
} catch ( TimeoutException e ) {
System . out . println ( "Job was not completed after 15 minutes." );
return ;
} finally {
subscriber . stopAsync ();
subscriber . awaitTerminated ();
}
// Build a request to get the completed job
GetDlpJobRequest getDlpJobRequest =
GetDlpJobRequest . newBuilder (). setName ( dlpJob . getName ()). build ();
// Retrieve completed job status
DlpJob completedJob = dlpServiceClient . getDlpJob ( getDlpJobRequest );
System . out . println ( "Job status: " + completedJob . getState ());
System . out . println ( "Job name: " + dlpJob . getName ());
// Get the result and parse through and process the information
NumericalStatsResult result = completedJob . getRiskDetails (). getNumericalStatsResult ();
System . out . printf (
"Value range : [%.3f, %.3f]\n" ,
result . getMinValue (). getFloatValue (), result . getMaxValue (). getFloatValue ());
int percent = 1 ;
Double lastValue = null ;
for ( Value quantileValue : result . getQuantileValuesList ()) {
Double currentValue = quantileValue . getFloatValue ();
if ( lastValue == null || ! lastValue . equals ( currentValue )) {
System . out . printf ( "Value at %s %% quantile : %.3f" , percent , currentValue );
}
lastValue = currentValue ;
}
}
}
// handleMessage injects the job and settableFuture into the message reciever interface
private static void handleMessage (
DlpJob job ,
SettableApiFuture<Boolean> done ,
PubsubMessage pubsubMessage ,
AckReplyConsumer ackReplyConsumer ) {
String messageAttribute = pubsubMessage . getAttributesMap (). get ( "DlpJobName" );
if ( job . getName (). equals ( messageAttribute )) {
done . set ( true );
ack ReplyConsumer . ack ();
} else {
ackReplyConsumer . nack ();
}
}
}
Node.js
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Import the Google Cloud client libraries
const DLP = require ( ' @google-cloud/dlp ' );
const { PubSub } = require ( ' @google-cloud/pubsub ' );
// Instantiates clients
const dlp = new DLP . DlpServiceClient ();
const pubsub = new PubSub ();
// The project ID to run the API call under
// const projectId = 'my-project';
// The project ID the table is stored under
// This may or (for public datasets) may not equal the calling project ID
// const tableProjectId = 'my-project';
// The ID of the dataset to inspect, e.g. 'my_dataset'
// const datasetId = 'my_dataset';
// The ID of the table to inspect, e.g. 'my_table'
// const tableId = 'my_table';
// The name of the column to compute risk metrics for, e.g. 'age'
// Note that this column must be a numeric data type
// const columnName = 'firstName';
// The name of the Pub/Sub topic to notify once the job completes
// TODO(developer): create a Pub/Sub topic to use for this
// const topicId = 'MY-PUBSUB-TOPIC'
// The name of the Pub/Sub subscription to use when listening for job
// completion notifications
// TODO(developer): create a Pub/Sub subscription to use for this
// const subscriptionId = 'MY-PUBSUB-SUBSCRIPTION'
async function numericalRiskAnalysis () {
const sourceTable = {
projectId : tableProjectId ,
datasetId : datasetId ,
tableId : tableId ,
};
// Construct request for creating a risk analysis job
const request = {
parent : `projects/ ${ projectId } /locations/global` ,
riskJob : {
privacyMetric : {
numericalStatsConfig : {
field : {
name : columnName ,
},
},
},
sourceTable : sourceTable ,
actions : [
{
pubSub : {
topic : `projects/ ${ projectId } /topics/ ${ topicId } ` ,
},
},
],
},
};
// Create helper function for unpacking values
const getValue = obj = > obj [ Object . keys ( obj )[ 0 ]];
// Run risk analysis job
const [ topicResponse ] = await pubsub . topic ( topicId ). get ();
const subscription = await topicResponse . subscription ( subscriptionId );
const [ jobsResponse ] = await dlp . createDlpJob ( request );
const jobName = jobsResponse . name ;
console . log ( `Job created. Job name: ${ jobName } ` );
// Watch the Pub/Sub topic until the DLP job finishes
await new Promise (( resolve , reject ) = > {
const messageHandler = message = > {
if ( message . attributes && message . attributes . DlpJobName === jobName ) {
message . ack ();
subscription . removeListener ( 'message' , messageHandler );
subscription . removeListener ( 'error' , errorHandler );
resolve ( jobName );
} else {
message . nack ();
}
};
const errorHandler = err = > {
subscription . removeListener ( 'message' , messageHandler );
subscription . removeListener ( 'error' , errorHandler );
reject ( err );
};
subscripti on . on ( 'message' , messageHandler );
subscripti on . on ( 'error' , errorHandler );
});
setTimeout (() = > {
console . log ( ' Waiting for DLP job to fully complete' );
}, 500 );
const [ job ] = await dlp . getDlpJob ({ name : jobName });
const results = job . riskDetails . numericalStatsResult ;
console . log (
`Value Range: [ ${ getValue ( results . minValue ) } , ${ getValue (
results . maxValue
) } ]`
);
// Print unique quantile values
let tempValue = null ;
results . quantileValues . forEach (( result , percent ) = > {
const value = getValue ( result );
// Only print new values
if (
tempValue !== value &&
! ( tempValue && tempValue . equals && tempValue . equals ( value ))
) {
console . log ( `Value at ${ percent } % quantile: ${ value } ` );
tempValue = value ;
}
});
}
await numericalRiskAnalysis ();
PHP
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Dlp\V2\Action;
use Google\Cloud\Dlp\V2\Action\PublishToPubSub;
use Google\Cloud\Dlp\V2\BigQueryTable;
use Google\Cloud\Dlp\V2\Client\DlpServiceClient;
use Google\Cloud\Dlp\V2\CreateDlpJobRequest;
use Google\Cloud\Dlp\V2\DlpJob\JobState;
use Google\Cloud\Dlp\V2\FieldId;
use Google\Cloud\Dlp\V2\GetDlpJobRequest;
use Google\Cloud\Dlp\V2\PrivacyMetric;
use Google\Cloud\Dlp\V2\PrivacyMetric\NumericalStatsConfig;
use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig;
use Google\Cloud\PubSub\PubSubClient;
/**
* Computes risk metrics of a column of numbers in a Google BigQuery table.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $dataProjectId The project ID containing the target Datastore
* @param string $topicId The name of the Pub/Sub topic to notify once the job completes
* @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job
* @param string $datasetId The ID of the BigQuery dataset to inspect
* @param string $tableId The ID of the BigQuery table to inspect
* @param string $columnName The name of the column to compute risk metrics for, e.g. "age"
*/
function numerical_stats(
string $callingProjectId,
string $dataProjectId,
string $topicId,
string $subscriptionId,
string $datasetId,
string $tableId,
string $columnName
): void {
// Instantiate a client.
$dlp = new DlpServiceClient();
$pubsub = new PubSubClient();
$topic = $pubsub->topic($topicId);
// Construct risk analysis config
$columnField = (new FieldId())
->setName($columnName);
$statsConfig = (new NumericalStatsConfig())
->setField($columnField);
$privacyMetric = (new PrivacyMetric())
->setNumericalStatsConfig($statsConfig);
// Construct items to be analyzed
$bigqueryTable = (new BigQueryTable())
->setProjectId($dataProjectId)
->setDatasetId($datasetId)
->setTableId($tableId);
// Construct the action to run when job completes
$pubSubAction = (new PublishToPubSub())
->setTopic($topic->name());
$action = (new Action())
->setPubSub($pubSubAction);
// Construct risk analysis job config to run
$riskJob = (new RiskAnalysisJobConfig())
->setPrivacyMetric($privacyMetric)
->setSourceTable($bigqueryTable)
->setActions([$action]);
// Listen for job notifications via an existing topic/subscription.
$subscription = $topic->subscription($subscriptionId);
// Submit request
$parent = "projects/$callingProjectId/locations/global";
$createDlpJobRequest = (new CreateDlpJobRequest())
->setParent($parent)
->setRiskJob($riskJob);
$job = $dlp->createDlpJob($createDlpJobRequest);
// Poll Pub/Sub using exponential backoff until job finishes
// Consider using an asynchronous execution model such as Cloud Functions
$attempt = 1;
$startTime = time();
do {
foreach ($subscription->pull() as $message) {
if (
isset($message->attributes()['DlpJobName']) &&
$message->attributes()['DlpJobName'] === $job->getName()
) {
$subscription->acknowledge($message);
// Get the updated job. Loop to avoid race condition with DLP API.
do {
$getDlpJobRequest = (new GetDlpJobRequest())
->setName($job->getName());
$job = $dlp->getDlpJob($getDlpJobRequest);
} while ($job->getState() == JobState::RUNNING);
break 2; // break from parent do while
}
}
print('Waiting for job to complete' . PHP_EOL);
// Exponential backoff with max delay of 60 seconds
sleep(min(60, pow(2, ++$attempt)));
} while (time() - $startTime < 600); // 10 minute timeout
// Helper function to convert Protobuf values to strings
$valueToString = function ($value) {
$json = json_decode($value->serializeToJsonString(), true);
return array_shift($json);
};
// Print finding counts
printf('Job %s status: %s' . PHP_EOL, $job->getName(), JobState::name($job->getState()));
switch ($job->getState()) {
case JobState::DONE:
$results = $job->getRiskDetails()->getNumericalStatsResult();
printf(
'Value range: [%s, %s]' . PHP_EOL,
$valueToString($results->getMinValue()),
$valueToString($results->getMaxValue())
);
// Only print unique values
$lastValue = null;
foreach ($results->getQuantileValues() as $percent => $quantileValue) {
$value = $valueToString($quantileValue);
if ($value != $lastValue) {
printf('Value at %s quantile: %s' . PHP_EOL, $percent, $value);
$lastValue = $value;
}
}
break;
case JobState::FAILED:
printf('Job %s had errors:' . PHP_EOL, $job->getName());
$errors = $job->getErrors();
foreach ($errors as $error) {
var_dump($error->getDetails());
}
break;
case JobState::PENDING:
print('Job has not completed. Consider a longer timeout or an asynchronous execution model' . PHP_EOL);
break;
default:
print('Unexpected job state. Most likely, the job is either running or has not yet started.');
}
}
Python
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import concurrent.futures
import google.cloud.dlp
import google.cloud.pubsub
def numerical_risk_analysis (
project : str ,
table_project_id : str ,
dataset_id : str ,
table_id : str ,
column_name : str ,
topic_id : str ,
subscription_id : str ,
timeout : int = 300 ,
) - > None :
"""Uses the Data Loss Prevention API to compute risk metrics of a column
of numerical data in a Google BigQuery table.
Args:
project: The Google Cloud project id to use as a parent resource.
table_project_id: The Google Cloud project id where the BigQuery table
is stored.
dataset_id: The id of the dataset to inspect.
table_id: The id of the table to inspect.
column_name: The name of the column to compute risk metrics for.
topic_id: The name of the Pub/Sub topic to notify once the job
completes.
subscription_id: The name of the Pub/Sub subscription to use when
listening for job completion notifications.
timeout: The number of seconds to wait for a response from the API.
Returns:
None; the response from the API is printed to the terminal.
"""
# Instantiate a client.
dlp = google . cloud . dlp_v2 . DlpServiceClient ()
# Convert the project id into full resource ids.
topic = google . cloud . pubsub . PublisherClient . topic_path ( project , topic_id )
parent = f "projects/ { project } /locations/global"
# Location info of the BigQuery table.
source_table = {
"project_id" : table_project_id ,
"dataset_id" : dataset_id ,
"table_id" : table_id ,
}
# Tell the API where to send a notification when the job is complete.
actions = [{ "pub_sub" : { "topic" : topic }}]
# Configure risk analysis job
# Give the name of the numeric column to compute risk metrics for
risk_job = {
"privacy_metric" : { "numerical_stats_config" : { "field" : { "name" : column_name }}},
"source_table" : source_table ,
"actions" : actions ,
}
# Call API to start risk analysis job
operation = dlp . create_dlp_job ( request = { "parent" : parent , "risk_job" : risk_job })
def callback ( message : google . cloud . pubsub_v1 . subscriber . message . Message ) - > None :
if message . attributes [ "DlpJobName" ] == operation . name :
# This is the message we're looking for, so acknowledge it.
message . ack ()
# Now that the job is done, fetch the results and print them.
job = dlp . get_dlp_job ( request = { "name" : operation . name })
print ( f "Job name: { job . name } " )
results = job . risk_details . numerical_stats_result
print (
"Value Range: [ {} , {} ]" . format (
results . min_value . integer_value ,
results . max_value . integer_value ,
)
)
prev_value = None
for percent , result in enumerate ( results . quantile_values ):
value = result . integer_value
if prev_value != value :
print ( f "Value at { percent } % quantile: { value } " )
prev_value = value
subscription . set_result ( None )
else :
# This is not the message we're looking for.
message . drop ()
# Create a Pub/Sub client and find the subscription. The subscription is
# expected to already be listening to the topic.
subscriber = google . cloud . pubsub . SubscriberClient ()
subscription_path = subscriber . subscription_path ( project , subscription_id )
subscription = subscribe r . subscribe ( subscription_path , callback )
try :
subscription . result ( timeout = timeout )
except concurrent . futures . TimeoutError :
print (
"No event received before the timeout. Please verify that the "
"subscription provided is subscribed to the topic provided."
)
subscription . close ()
Compute categorical numerical statistics
You can compute categorical numerical statistics for the individual histogram
buckets within a BigQuery column, including:
Upper bound on value frequency within a given bucket
Lower bound on value frequency within a given bucket
Size of a given bucket
A sample of value frequencies within a given bucket (maximum 20)
To calculate these values, you configure a
DlpJob ,
setting the
CategoricalStatsConfig
privacy metric to the name of the column to scan. When you run the
job ,
Sensitive Data Protection computes statistics for the given column, returning
its results in the
CategoricalStatsResult
object.
Note: You can apply the CategoricalStatsConfig to all column types, except
for arrays and structs. If your column types consist solely of the types
specified in Compute numerical statistics , it may be more
informative to scan for that metric.
Code examples
Following is sample code in several languages that demonstrates how to
use Sensitive Data Protection to calculate categorical statistics.
Important:
The code on this page requires that you first set up a Sensitive Data Protection client. For more
information about installing and creating a Sensitive Data Protection client, see
Sensitive Data Protection client libraries . (Sending JSON
to Sensitive Data Protection REST endpoints does not require a client
library.)
C#
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dlp.V2 ;
using Google.Cloud.PubSub.V1 ;
using Newtonsoft.Json ;
using System ;
using System.Collections.Generic ;
using System.Linq ;
using System.Threading ;
using System.Threading.Tasks ;
using static Google . Cloud . Dlp . V2 . Action . Types ;
using static Google . Cloud . Dlp . V2 . PrivacyMetric . Types ;
public class RiskAnalysisCreateCategoricalStats
{
public static AnalyzeDataSourceRiskDetails . Types . CategoricalStatsResult CategoricalStats (
string callingProjectId ,
string tableProjectId ,
string datasetId ,
string tableId ,
string topicId ,
string subscriptionId ,
string columnName )
{
var dlp = DlpServiceClient . Create ();
// Construct + submit the job
var config = new RiskAnalysisJobConfig
{
PrivacyMetric = new PrivacyMetric
{
CategoricalStatsConfig = new CategoricalStatsConfig ()
{
Field = new FieldId { Name = columnName }
}
},
SourceTable = new BigQueryTable
{
ProjectId = tableProjectId ,
DatasetId = datasetId ,
TableId = tableId
},
Actions =
{
new Google . Cloud . Dlp . V2 . Action
{
PubSub = new PublishToPubSub
{
Topic = $"projects/{callingProjectId}/topics/{topicId}"
}
}
}
};
var submittedJob = dlp . CreateDlpJob ( new CreateDlpJobRequest
{
ParentAsProjectName = new ProjectName ( callingProjectId ),
RiskJob = config
});
// Listen to pub/sub for the job
var subscriptionName = new SubscriptionName ( callingProjectId , subscriptionId );
var subscriber = SubscriberClient . CreateAsync (
subscriptionName ). Result ;
// SimpleSubscriber runs your message handle function on multiple
// threads to maximize throughput.
var done = new ManualResetEventSlim ( false );
subscriber . StartAsync (( PubsubMessage message , CancellationToken cancel ) = >
{
if ( message . Attributes [ "DlpJobName" ] == submittedJob . Name )
{
Thread . Sleep ( 500 ); // Wait for DLP API results to become consistent
done . Set ();
return Task . FromResult ( SubscriberClient . Reply . Ack );
}
else
{
return Task . FromResult ( SubscriberClient . Reply . Nack );
}
});
done . Wait ( TimeSpan . FromMinutes ( 10 )); // 10 minute timeout; may not work for large jobs
subscriber . StopAsync ( CancellationToken . None ). Wait ();
// Process results
var resultJob = dlp . GetDlpJob ( new GetDlpJobRequest
{
DlpJobName = DlpJobName . Parse ( submittedJob . Name )
});
var result = resultJob . RiskDetails . CategoricalStatsResult ;
for ( var bucketIdx = 0 ; bucketIdx < result . ValueFrequencyHistogramBuckets . Count ; bucketIdx ++ )
{
var bucket = result . ValueFrequencyHistogramBuckets [ bucketIdx ];
Console . WriteLine ( $"Bucket {bucketIdx}" );
Console . WriteLine ( $" Most common value occurs {bucket. ValueFrequencyUpperBound } time(s)." );
Console . WriteLine ( $" Least common value occurs {bucket. ValueFrequencyLowerBound } time(s)." );
Console . WriteLine ( $" {bucket.BucketSize} unique value(s) total." );
foreach ( var bucketValue in bucket . BucketValues )
{
// 'UnpackValue(x)' is a prettier version of 'x.toString()'
Console . WriteLine ( $" Value {UnpackValue(bucketValue. Value )} occurs {bucketValue.Count} time(s)." );
}
}
return result ;
}
public static string UnpackValue ( Value protoValue )
{
var jsonValue = JsonConvert . DeserializeObject<Dictionary<string , object >> ( protoValue . ToString ());
return jsonValue . Values . ElementAt ( 0 ). ToString ();
}
}
Go
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"time"
dlp "cloud.google.com/go/dlp/apiv2"
"cloud.google.com/go/dlp/apiv2/dlppb"
"cloud.google.com/go/pubsub"
)
// riskCategorical computes the categorical risk of the given data.
func riskCategorical ( w io . Writer , projectID , dataProject , pubSubTopic , pubSubSub , datasetID , tableID , columnName string ) error {
// projectID := "my-project-id"
// dataProject := "bigquery-public-data"
// pubSubTopic := "dlp-risk-sample-topic"
// pubSubSub := "dlp-risk-sample-sub"
// datasetID := "nhtsa_traffic_fatalities"
// tableID := "accident_2015"
// columnName := "state_number"
ctx := context . Background ()
client , err := dlp . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "dlp.NewClient: %w" , err )
}
// Create a PubSub Client used to listen for when the inspect job finishes.
pubsubClient , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return err
}
defer pubsubClient . Close ()
// Create a PubSub subscription we can use to listen for messages.
// Create the Topic if it doesn't exist.
t := pubsubClient . Topic ( pubSubTopic )
topicExists , err := t . Exists ( ctx )
if err != nil {
return err
}
if ! topicExists {
if t , err = pubsubClient . CreateTopic ( ctx , pubSubTopic ); err != nil {
return err
}
}
// Create the Subscription if it doesn't exist.
s := pubsubClient . Subscription ( pubSubSub )
subExists , err := s . Exists ( ctx )
if err != nil {
return err
}
if ! subExists {
if s , err = pubsubClient . CreateSubscription ( ctx , pubSubSub , pubsub . SubscriptionConfig { Topic : t }); err != nil {
return err
}
}
// topic is the PubSub topic string where messages should be sent.
topic := "projects/" + projectID + "/topics/" + pubSubTopic
// Create a configured request.
req := & dlppb . CreateDlpJobRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/global" , projectID ),
Job : & dlppb . CreateDlpJobRequest_RiskJob {
RiskJob : & dlppb . RiskAnalysisJobConfig {
// PrivacyMetric configures what to compute.
PrivacyMetric : & dlppb . PrivacyMetric {
Type : & dlppb . PrivacyMetric_CategoricalStatsConfig_ {
CategoricalStatsConfig : & dlppb . PrivacyMetric_CategoricalStatsConfig {
Field : & dlppb . FieldId {
Name : columnName ,
},
},
},
},
// SourceTable describes where to find the data.
SourceTable : & dlppb . BigQueryTable {
ProjectId : dataProject ,
DatasetId : datasetID ,
TableId : tableID ,
},
// Send a message to PubSub using Actions.
Actions : [] * dlppb . Action {
{
Action : & dlppb . Action_PubSub {
PubSub : & dlppb . Action_PublishToPubSub {
Topic : topic ,
},
},
},
},
},
},
}
// Create the risk job.
j , err := client . CreateDlpJob ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateDlpJob: %w" , err )
}
fmt . Fprintf ( w , "Created job: %v\n" , j . GetName ())
// Wait for the risk job to finish by waiting for a PubSub message.
// This only waits for 10 minutes. For long jobs, consider using a truly
// asynchronous execution model such as Cloud Functions.
ctx , cancel := context . WithTimeout ( ctx , 10 * time . Minute )
defer cancel ()
err = s . Receive ( ctx , func ( ctx context . Context , msg * pubsub . Message ) {
// If this is the wrong job, do not process the result.
if msg . Attributes [ "DlpJobName" ] != j . GetName () {
msg . Nack ()
return
}
msg . Ack ()
time . Sleep ( 500 * time . Millisecond )
resp , err := client . GetDlpJob ( ctx , & dlppb . GetDlpJobRequest {
Name : j . GetName (),
})
if err != nil {
fmt . Fprintf ( w , "GetDlpJob: %v" , err )
return
}
h := resp . GetRiskDetails (). GetCategoricalStatsResult (). GetValueFrequencyHistogramBuckets ()
for i , b := range h {
fmt . Fprintf ( w , "Histogram bucket %v\n" , i )
fmt . Fprintf ( w , " Most common value occurs %v times\n" , b . GetValueFrequencyUpperBound ())
fmt . Fprintf ( w , " Least common value occurs %v times\n" , b . GetValueFrequencyLowerBound ())
fmt . Fprintf ( w , " %v unique values total\n" , b . GetBucketSize ())
for _ , v := range b . GetBucketValues () {
fmt . Fprintf ( w , " Value %v occurs %v times\n" , v . GetValue (), v . GetCount ())
}
}
// Stop listening for more messages.
cancel ()
})
if err != nil {
return fmt . Errorf ( "Receive: %w" , err )
}
return nil
}
Java
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.api.core. SettableApiFuture ;
import com.google.cloud.dlp.v2. DlpServiceClient ;
import com.google.cloud.pubsub.v1. AckReplyConsumer ;
import com.google.cloud.pubsub.v1. MessageReceiver ;
import com.google.cloud.pubsub.v1. Subscriber ;
import com.google.privacy.dlp.v2. Action ;
import com.google.privacy.dlp.v2. Action . PublishToPubSub ;
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . CategoricalStatsResult ;
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . CategoricalStatsResult . CategoricalStatsHistogramBucket ;
import com.google.privacy.dlp.v2. BigQueryTable ;
import com.google.privacy.dlp.v2. CreateDlpJobRequest ;
import com.google.privacy.dlp.v2. DlpJob ;
import com.google.privacy.dlp.v2. FieldId ;
import com.google.privacy.dlp.v2. GetDlpJobRequest ;
import com.google.privacy.dlp.v2. LocationName ;
import com.google.privacy.dlp.v2. PrivacyMetric ;
import com.google.privacy.dlp.v2. PrivacyMetric . CategoricalStatsConfig ;
import com.google.privacy.dlp.v2. RiskAnalysisJobConfig ;
import com.google.privacy.dlp.v2. ValueFrequency ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. ProjectTopicName ;
import com.google.pubsub.v1. PubsubMessage ;
import java.io.IOException ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
class RiskAnalysisCategoricalStats {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String datasetId = "your-bigquery-dataset-id" ;
String tableId = "your-bigquery-table-id" ;
String topicId = "pub-sub-topic" ;
String subscriptionId = "pub-sub-subscription" ;
categoricalStatsAnalysis ( projectId , datasetId , tableId , topicId , subscriptionId );
}
public static void categoricalStatsAnalysis (
String projectId , String datasetId , String tableId , String topicId , String subscriptionId )
throws ExecutionException , InterruptedException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DlpServiceClient dlpServiceClient = DlpServiceClient . create ()) {
// Specify the BigQuery table to analyze
BigQueryTable bigQueryTable =
BigQueryTable . newBuilder ()
. setProjectId ( projectId )
. setDatasetId ( datasetId )
. setTableId ( tableId )
. build ();
// The name of the column to analyze, which doesn't need to contain numerical data
String columnName = "Mystery" ;
// Configure the privacy metric for the job
FieldId fieldId = FieldId . newBuilder (). setName ( columnName ). build ();
CategoricalStatsConfig categoricalStatsConfig =
CategoricalStatsConfig . newBuilder (). setField ( fieldId ). build ();
PrivacyMetric privacyMetric =
PrivacyMetric . newBuilder (). setCategoricalStatsConfig ( categoricalStatsConfig ). build ();
// Create action to publish job status notifications over Google Cloud Pub/Sub
ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId );
PublishToPubSub publishToPubSub =
PublishToPubSub . newBuilder (). setTopic ( topicName . toString ()). build ();
Action action = Action . newBuilder (). setPubSub ( publishToPubSub ). build ();
// Configure the risk analysis job to perform
RiskAnalysisJobConfig riskAnalysisJobConfig =
RiskAnalysisJobConfig . newBuilder ()
. setSourceTable ( bigQueryTable )
. setPrivacyMetric ( privacyMetric )
. addActions ( action )
. build ();
// Build the job creation request to be sent by the client
CreateDlpJobRequest createDlpJobRequest =
CreateDlpJobRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , "global" ). toString ())
. setRiskJob ( riskAnalysisJobConfig )
. build ();
// Send the request to the API using the client
DlpJob dlpJob = dlpServiceClient . createDlpJob ( createDlpJobRequest );
// Set up a Pub/Sub subscriber to listen on the job completion status
final SettableApiFuture<Boolean> done = SettableApiFuture . create ();
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
MessageReceiver messageHandler =
( PubsubMessage pubsubMessage , AckReplyConsumer ackReplyConsumer ) - > {
handleMessage ( dlpJob , done , pubsubMessage , ackReplyConsumer );
};
Subscriber subscriber = Subscriber . newBuilder ( subscriptionName , messageHandler ). build ();
subscriber . startAsync ();
// Wait for job completion semi-synchronously
// For long jobs, consider using a truly asynchronous execution model such as Cloud Functions
try {
done . get ( 15 , TimeUnit . MINUTES );
} catch ( TimeoutException e ) {
System . out . println ( "Job was not completed after 15 minutes." );
return ;
} finally {
subscriber . stopAsync ();
subscriber . awaitTerminated ();
}
// Build a request to get the completed job
GetDlpJobRequest getDlpJobRequest =
GetDlpJobRequest . newBuilder (). setName ( dlpJob . getName ()). build ();
// Retrieve completed job status
DlpJob completedJob = dlpServiceClient . getDlpJob ( getDlpJobRequest );
System . out . println ( "Job status: " + completedJob . getState ());
System . out . println ( "Job name: " + dlpJob . getName ());
// Get the result and parse through and process the information
CategoricalStatsResult result = completedJob . getRiskDetails (). getCategoricalStatsResult ();
List<CategoricalStatsHistogramBucket> histogramBucketList =
result . getValueFrequencyHistogramBucketsList ();
for ( CategoricalStatsHistogramBucket bucket : histogramBucketList ) {
long mostCommonFrequency = bucket . getValueFrequencyUpperBound ();
System . out . printf ( "Most common value occurs %d time(s).\n" , mostCommonFrequency );
long leastCommonFrequency = bucket . getValueFrequencyLowerBound ();
System . out . printf ( "Least common value occurs %d time(s).\n" , leastCommonFrequency );
for ( ValueFrequency valueFrequency : bucket . getBucketValuesList ()) {
System . out . printf (
"Value %s occurs %d time(s).\n" ,
valueFrequency . getValue (). toString (), valueFrequency . getCount ());
}
}
}
}
// handleMessage injects the job and settableFuture into the message reciever interface
private static void handleMessage (
DlpJob job ,
SettableApiFuture<Boolean> done ,
PubsubMessage pubsubMessage ,
AckReplyConsumer ackReplyConsumer ) {
String messageAttribute = pubsubMessage . getAttributesMap (). get ( "DlpJobName" );
if ( job . getName (). equals ( messageAttribute )) {
done . set ( true );
ack ReplyConsumer . ack ();
} else {
ackReplyConsumer . nack ();
}
}
}
Node.js
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Import the Google Cloud client libraries
const DLP = require ( ' @google-cloud/dlp ' );
const { PubSub } = require ( ' @google-cloud/pubsub ' );
// Instantiates clients
const dlp = new DLP . DlpServiceClient ();
const pubsub = new PubSub ();
// The project ID to run the API call under
// const projectId = 'my-project';
// The project ID the table is stored under
// This may or (for public datasets) may not equal the calling project ID
// const tableProjectId = 'my-project';
// The ID of the dataset to inspect, e.g. 'my_dataset'
// const datasetId = 'my_dataset';
// The ID of the table to inspect, e.g. 'my_table'
// const tableId = 'my_table';
// The name of the Pub/Sub topic to notify once the job completes
// TODO(developer): create a Pub/Sub topic to use for this
// const topicId = 'MY-PUBSUB-TOPIC'
// The name of the Pub/Sub subscription to use when listening for job
// completion notifications
// TODO(developer): create a Pub/Sub subscription to use for this
// const subscriptionId = 'MY-PUBSUB-SUBSCRIPTION'
// The name of the column to compute risk metrics for, e.g. 'firstName'
// const columnName = 'firstName';
async function categoricalRiskAnalysis () {
const sourceTable = {
projectId : tableProjectId ,
datasetId : datasetId ,
tableId : tableId ,
};
// Construct request for creating a risk analysis job
const request = {
parent : `projects/ ${ projectId } /locations/global` ,
riskJob : {
privacyMetric : {
categoricalStatsConfig : {
field : {
name : columnName ,
},
},
},
sourceTable : sourceTable ,
actions : [
{
pubSub : {
topic : `projects/ ${ projectId } /topics/ ${ topicId } ` ,
},
},
],
},
};
// Create helper function for unpacking values
const getValue = obj = > obj [ Object . keys ( obj )[ 0 ]];
// Run risk analysis job
const [ topicResponse ] = await pubsub . topic ( topicId ). get ();
const subscription = await topicResponse . subscription ( subscriptionId );
const [ jobsResponse ] = await dlp . createDlpJob ( request );
const jobName = jobsResponse . name ;
console . log ( `Job created. Job name: ${ jobName } ` );
// Watch the Pub/Sub topic until the DLP job finishes
await new Promise (( resolve , reject ) = > {
const messageHandler = message = > {
if ( message . attributes && message . attributes . DlpJobName === jobName ) {
message . ack ();
subscription . removeListener ( 'message' , messageHandler );
subscription . removeListener ( 'error' , errorHandler );
resolve ( jobName );
} else {
message . nack ();
}
};
const errorHandler = err = > {
subscription . removeListener ( 'message' , messageHandler );
subscription . removeListener ( 'error' , errorHandler );
reject ( err );
};
subscripti on . on ( 'message' , messageHandler );
subscripti on . on ( 'error' , errorHandler );
});
setTimeout (() = > {
console . log ( ' Waiting for DLP job to fully complete' );
}, 500 );
const [ job ] = await dlp . getDlpJob ({ name : jobName });
const histogramBuckets =
job . riskDetails . categoricalStatsResult . valueFrequencyHistogramBuckets ;
histogramBuckets . forEach (( histogramBucket , histogramBucketIdx ) = > {
console . log ( `Bucket ${ histogramBucketIdx } :` );
// Print bucket stats
console . log (
` Most common value occurs ${ histogramBucket . valueFrequencyUpperBound } time(s)`
);
console . log (
` Least common value occurs ${ histogramBucket . valueFrequencyLowerBound } time(s)`
);
// Print bucket values
console . log ( ` ${ histogramBucket . bucketSize } unique values total.` );
histogramBucket . bucketValues . forEach ( valueBucket = > {
console . log (
` Value ${ getValue ( valueBucket . value ) } occurs ${
valueBucket . count
} time(s).`
);
});
});
}
await categoricalRiskAnalysis ();
PHP
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Dlp\V2\Action;
use Google\Cloud\Dlp\V2\Action\PublishToPubSub;
use Google\Cloud\Dlp\V2\BigQueryTable;
use Google\Cloud\Dlp\V2\Client\DlpServiceClient;
use Google\Cloud\Dlp\V2\CreateDlpJobRequest;
use Google\Cloud\Dlp\V2\DlpJob\JobState;
use Google\Cloud\Dlp\V2\FieldId;
use Google\Cloud\Dlp\V2\GetDlpJobRequest;
use Google\Cloud\Dlp\V2\PrivacyMetric;
use Google\Cloud\Dlp\V2\PrivacyMetric\CategoricalStatsConfig;
use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig;
use Google\Cloud\PubSub\PubSubClient;
/**
* Computes risk metrics of a column of data in a Google BigQuery table.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $dataProjectId The project ID containing the target Datastore
* @param string $topicId The name of the Pub/Sub topic to notify once the job completes
* @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job
* @param string $datasetId The ID of the dataset to inspect
* @param string $tableId The ID of the table to inspect
* @param string $columnName The name of the column to compute risk metrics for, e.g. "age"
*/
function categorical_stats(
string $callingProjectId,
string $dataProjectId,
string $topicId,
string $subscriptionId,
string $datasetId,
string $tableId,
string $columnName
): void {
// Instantiate a client.
$dlp = new DlpServiceClient();
$pubsub = new PubSubClient();
$topic = $pubsub->topic($topicId);
// Construct risk analysis config
$columnField = (new FieldId())
->setName($columnName);
$statsConfig = (new CategoricalStatsConfig())
->setField($columnField);
$privacyMetric = (new PrivacyMetric())
->setCategoricalStatsConfig($statsConfig);
// Construct items to be analyzed
$bigqueryTable = (new BigQueryTable())
->setProjectId($dataProjectId)
->setDatasetId($datasetId)
->setTableId($tableId);
// Construct the action to run when job completes
$pubSubAction = (new PublishToPubSub())
->setTopic($topic->name());
$action = (new Action())
->setPubSub($pubSubAction);
// Construct risk analysis job config to run
$riskJob = (new RiskAnalysisJobConfig())
->setPrivacyMetric($privacyMetric)
->setSourceTable($bigqueryTable)
->setActions([$action]);
// Submit request
$parent = "projects/$callingProjectId/locations/global";
$createDlpJobRequest = (new CreateDlpJobRequest())
->setParent($parent)
->setRiskJob($riskJob);
$job = $dlp->createDlpJob($createDlpJobRequest);
// Listen for job notifications via an existing topic/subscription.
$subscription = $topic->subscription($subscriptionId);
// Poll Pub/Sub using exponential backoff until job finishes
// Consider using an asynchronous execution model such as Cloud Functions
$attempt = 1;
$startTime = time();
do {
foreach ($subscription->pull() as $message) {
if (
isset($message->attributes()['DlpJobName']) &&
$message->attributes()['DlpJobName'] === $job->getName()
) {
$subscription->acknowledge($message);
// Get the updated job. Loop to avoid race condition with DLP API.
do {
$getDlpJobRequest = (new GetDlpJobRequest())
->setName($job->getName());
$job = $dlp->getDlpJob($getDlpJobRequest);
} while ($job->getState() == JobState::RUNNING);
break 2; // break from parent do while
}
}
print('Waiting for job to complete' . PHP_EOL);
// Exponential backoff with max delay of 60 seconds
sleep(min(60, pow(2, ++$attempt)));
} while (time() - $startTime < 600); // 10 minute timeout
// Print finding counts
printf('Job %s status: %s' . PHP_EOL, $job->getName(), JobState::name($job->getState()));
switch ($job->getState()) {
case JobState::DONE:
$histBuckets = $job->getRiskDetails()->getCategoricalStatsResult()->getValueFrequencyHistogramBuckets();
foreach ($histBuckets as $bucketIndex => $histBucket) {
// Print bucket stats
printf('Bucket %s:' . PHP_EOL, $bucketIndex);
printf(' Most common value occurs %s time(s)' . PHP_EOL, $histBucket->getValueFrequencyUpperBound());
printf(' Least common value occurs %s time(s)' . PHP_EOL, $histBucket->getValueFrequencyLowerBound());
printf(' %s unique value(s) total.', $histBucket->getBucketSize());
// Print bucket values
foreach ($histBucket->getBucketValues() as $percent => $quantile) {
printf(
' Value %s occurs %s time(s).' . PHP_EOL,
$quantile->getValue()->serializeToJsonString(),
$quantile->getCount()
);
}
}
break;
case JobState::FAILED:
$errors = $job->getErrors();
printf('Job %s had errors:' . PHP_EOL, $job->getName());
foreach ($errors as $error) {
var_dump($error->getDetails());
}
break;
case JobState::PENDING:
print('Job has not completed. Consider a longer timeout or an asynchronous execution model' . PHP_EOL);
break;
default:
print('Unexpected job state.');
}
}
Python
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import concurrent.futures
import google.cloud.dlp
import google.cloud.pubsub
def categorical_risk_analysis (
project : str ,
table_project_id : str ,
dataset_id : str ,
table_id : str ,
column_name : str ,
topic_id : str ,
subscription_id : str ,
timeout : int = 300 ,
) - > None :
"""Uses the Data Loss Prevention API to compute risk metrics of a column
of categorical data in a Google BigQuery table.
Args:
project: The Google Cloud project id to use as a parent resource.
table_project_id: The Google Cloud project id where the BigQuery table
is stored.
dataset_id: The id of the dataset to inspect.
table_id: The id of the table to inspect.
column_name: The name of the column to compute risk metrics for.
topic_id: The name of the Pub/Sub topic to notify once the job
completes.
subscription_id: The name of the Pub/Sub subscription to use when
listening for job completion notifications.
timeout: The number of seconds to wait for a response from the API.
Returns:
None; the response from the API is printed to the terminal.
"""
# Instantiate a client.
dlp = google . cloud . dlp_v2 . DlpServiceClient ()
# Convert the project id into full resource ids.
topic = google . cloud . pubsub . PublisherClient . topic_path ( project , topic_id )
parent = f "projects/ { project } /locations/global"
# Location info of the BigQuery table.
source_table = {
"project_id" : table_project_id ,
"dataset_id" : dataset_id ,
"table_id" : table_id ,
}
# Tell the API where to send a notification when the job is complete.
actions = [{ "pub_sub" : { "topic" : topic }}]
# Configure risk analysis job
# Give the name of the numeric column to compute risk metrics for
risk_job = {
"privacy_metric" : {
"categorical_stats_config" : { "field" : { "name" : column_name }}
},
"source_table" : source_table ,
"actions" : actions ,
}
# Call API to start risk analysis job
operation = dlp . create_dlp_job ( request = { "parent" : parent , "risk_job" : risk_job })
def callback ( message : google . cloud . pubsub_v1 . subscriber . message . Message ) - > None :
if message . attributes [ "DlpJobName" ] == operation . name :
# This is the message we're looking for, so acknowledge it.
message . ack ()
# Now that the job is done, fetch the results and print them.
job = dlp . get_dlp_job ( request = { "name" : operation . name })
print ( f "Job name: { job . name } " )
histogram_buckets = (
job . risk_details . categorical_stats_result . value_frequency_histogram_buckets # noqa: E501
)
# Print bucket stats
for i , bucket in enumerate ( histogram_buckets ):
print ( f "Bucket { i } :" )
print (
" Most common value occurs {} time(s)" . format (
bucket . value_frequency_upper_bound
)
)
print (
" Least common value occurs {} time(s)" . format (
bucket . value_frequency_lower_bound
)
)
print ( f " { bucket . bucket_size } unique values total." )
for value in bucket . bucket_values :
print (
" Value {} occurs {} time(s)" . format (
value . value . integer_value , value . count
)
)
subscription . set_result ( None )
else :
# This is not the message we're looking for.
message . drop ()
# Create a Pub/Sub client and find the subscription. The subscription is
# expected to already be listening to the topic.
subscriber = google . cloud . pubsub . SubscriberClient ()
subscription_path = subscriber . subscription_path ( project , subscription_id )
subscription = subscribe r . subscribe ( subscription_path , callback )
try :
subscription . result ( timeout = timeout )
except concurrent . futures . TimeoutError :
print (
"No event received before the timeout. Please verify that the "
"subscription provided is subscribed to the topic provided."
)
subscription . close ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

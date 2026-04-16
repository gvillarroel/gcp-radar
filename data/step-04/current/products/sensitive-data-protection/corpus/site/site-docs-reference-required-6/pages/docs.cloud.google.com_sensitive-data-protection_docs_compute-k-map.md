---
title: "Computing k-map for a dataset \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map
  title: "Computing k-map for a dataset \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
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
Computing k-map for a dataset
Stay organized with collections
Save and categorize content based on your preferences.
K-map is very similar to k -anonymity, except that it assumes that the
attacker most likely doesn't know who is in the dataset. Use k -map if your
dataset is relatively small, or if the level of effort involved in generalizing
attributes would be too high.
Just like k -anonymity, k -map requires you to determine which columns of your
database are quasi-identifiers. In doing this, you are stating what data an
attacker will most likely use to re-identify subjects. In addition, computing a
k -map value requires a re-identification dataset: a larger table with which to
compare rows in the original dataset.
This topic demonstrates how to compute k -map values for a dataset using
Sensitive Data Protection. For more information about k -map or risk analysis in
general, see the risk analysis concept topic
before continuing on.
Note: At this time, you can only compute k -map values using the
DLP API or Sensitive Data Protection-supported client
libraries . Sensitive Data Protection in the
Google Cloud console doesn't support computing k -map values.
Note: Prematurely
canceling an operation midway through a job still incurs costs for the portion of
the job that was completed. For more information about billing, see Sensitive Data Protection pricing .
Before you begin
Before continuing, be sure you've done the following:
Sign in to your Google Account.
In the Google Cloud console, on the project selector page, select or create a
Google Cloud project.
Go to the project selector
Make sure that billing is enabled for your Google Cloud project. Learn how to confirm billing is enabled for your
project.
Enable Sensitive Data Protection.
Enable Sensitive Data Protection
Select a BigQuery dataset to analyze. Sensitive Data Protection
estimates the k -map metric by scanning a BigQuery table.
Determine the types of datasets you want to use to model the attack
dataset. For more information, see the reference page for the
KMapEstimationConfig
object, as well as Risk
analysis terms and techniques .
Compute k -map estimates
You can estimate k -map values using Sensitive Data Protection, which uses
a statistical model to estimate a re-identification dataset. This is in contrast
to the other risk analysis methods, in which the attack dataset is explicitly
known. Depending on the type of data, Sensitive Data Protection uses publicly
available datasets (for example, from the US Census) or a custom statistical
model (for example, one or more BigQuery tables that you specify), or
it extrapolates from the distribution of values in your input dataset. For more
information, see the reference page for the
KMapEstimationConfig
object.
To compute a k -map estimate using Sensitive Data Protection, first configure the
risk job. Compose a request to the
projects.dlpJobs
resource, where PROJECT_ID indicates your project
identifier :
https://dlp.googleapis.com/v2/projects/ PROJECT_ID /dlpJobs
The request contains a
RiskAnalysisJobConfig
object, which is composed of the following:
A
PrivacyMetric
object. This is where you specify that you want to calculate k -map by
specifying a
KMapEstimationConfig
object containing the following:
quasiIds[] : Required. Fields
( TaggedField
objects) considered to be quasi-identifiers to scan and use to compute
k -map. No two columns can have the same tag. These can be any of the
following:
An infoType :
This causes Sensitive Data Protection to use the relevant public
dataset as a statistical model of population, including US ZIP codes,
region codes, ages, and genders.
A custom infoType: A custom tag wherein you indicate an
auxiliary table (an
AuxiliaryTable
object) that contains statistical information about the possible values
of this column.
The inferred tag: If no semantic tag is indicated, specify
inferred . Sensitive Data Protection infers the statistical model
from the distribution of values in the input data.
regionCode : An
ISO 3166-1 alpha-2 region code
for Sensitive Data Protection to use in statistical modeling. This value
is required if no column is tagged with a region-specific infoType (for
example, a US ZIP code) or a region code.
auxiliaryTables[] : Auxiliary tables
( AuxiliaryTable
objects) to use in the analysis. Each custom tag used to tag a
quasi-identifier column (from quasiIds[] ) must appear in exactly one
column of one auxiliary table.
A BigQueryTable
object. Specify the BigQuery table to scan by including all of
the following:
projectId : The project ID of the project containing the table.
datasetId : The dataset ID of the table.
tableId : The name of the table.
A set of one or more
Action
objects, which represent actions to run, in the order given, at the
completion of the job. Each Action object can contain one of the
following actions:
SaveFindings
object: Saves the results of the risk analysis scan to a
BigQuery table.
PublishToPubSub
object:
Publishes a notification to a Pub/Sub topic .
Note:
If there are configuration or permission issues with the Pub/Sub topic,
Sensitive Data Protection retries sending the Pub/Sub notification for up to
two weeks. After two weeks, the notification is discarded.
PublishSummaryToCscc
object: Saves a results summary to Security Command Center.
PublishFindingsToCloudDataCatalog
object: Saves results to Data Catalog .
JobNotificationEmails
object: Sends you an email with results.
PublishToStackdriver
object: Saves results to Google Cloud Observability.
Code examples
Following is sample code in several languages that demonstrates how to
use Sensitive Data Protection to compute a k -map value.
Important:
The code on this page requires that you first set up a Sensitive Data Protection client. For more
information about installing and creating a Sensitive Data Protection client, see
Sensitive Data Protection client libraries . (Sending JSON
to Sensitive Data Protection REST endpoints does not require a client
library.)
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
"strings"
"time"
dlp "cloud.google.com/go/dlp/apiv2"
"cloud.google.com/go/dlp/apiv2/dlppb"
"cloud.google.com/go/pubsub"
"github.com/golang/protobuf/ptypes/empty"
)
// riskKMap runs K Map on the given data.
func riskKMap ( w io . Writer , projectID , dataProject , pubSubTopic , pubSubSub , datasetID , tableID , region string , columnNames ... string ) error {
// projectID := "my-project-id"
// dataProject := "bigquery-public-data"
// pubSubTopic := "dlp-risk-sample-topic"
// pubSubSub := "dlp-risk-sample-sub"
// datasetID := "san_francisco"
// tableID := "bikeshare_trips"
// region := "US"
// columnNames := "zip_code"
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
// Build the QuasiID slice.
var q [] * dlppb . PrivacyMetric_KMapEstimationConfig_TaggedField
for _ , c := range columnNames {
q = append ( q , & dlppb . PrivacyMetric_KMapEstimationConfig_TaggedField {
Field : & dlppb . FieldId {
Name : c ,
},
Tag : & dlppb . PrivacyMetric_KMapEstimationConfig_TaggedField_Inferred {
Inferred : & empty . Empty {},
},
})
}
// Create a configured request.
req := & dlppb . CreateDlpJobRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/global" , projectID ),
Job : & dlppb . CreateDlpJobRequest_RiskJob {
RiskJob : & dlppb . RiskAnalysisJobConfig {
// PrivacyMetric configures what to compute.
PrivacyMetric : & dlppb . PrivacyMetric {
Type : & dlppb . PrivacyMetric_KMapEstimationConfig_ {
KMapEstimationConfig : & dlppb . PrivacyMetric_KMapEstimationConfig {
QuasiIds : q ,
RegionCode : region ,
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
j , err := client . GetDlpJob ( ctx , & dlppb . GetDlpJobRequest {
Name : j . GetName (),
})
if err != nil {
fmt . Fprintf ( w , "GetDlpJob: %v" , err )
return
}
h := j . GetRiskDetails (). GetKMapEstimationResult (). GetKMapEstimationHistogram ()
for i , b := range h {
fmt . Fprintf ( w , "Histogram bucket %v\n" , i )
fmt . Fprintf ( w , " Anonymity range: [%v,%v]\n" , b . GetMaxAnonymity (), b . GetMaxAnonymity ())
fmt . Fprintf ( w , " %v unique values total\n" , b . GetBucketSize ())
for _ , v := range b . GetBucketValues () {
var qvs [] string
for _ , qv := range v . GetQuasiIdsValues () {
qvs = append ( qvs , qv . String ())
}
fmt . Fprintf ( w , " QuasiID values: %s\n" , strings . Join ( qvs , ", " ))
fmt . Fprintf ( w , " Estimated anonymity: %v\n" , v . GetEstimatedAnonymity ())
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
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . KMapEstimationResult ;
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . KMapEstimationResult . KMapEstimationHistogramBucket ;
import com.google.privacy.dlp.v2. AnalyzeDataSourceRiskDetails . KMapEstimationResult . KMapEstimationQuasiIdValues ;
import com.google.privacy.dlp.v2. BigQueryTable ;
import com.google.privacy.dlp.v2. CreateDlpJobRequest ;
import com.google.privacy.dlp.v2. DlpJob ;
import com.google.privacy.dlp.v2. FieldId ;
import com.google.privacy.dlp.v2. GetDlpJobRequest ;
import com.google.privacy.dlp.v2. InfoType ;
import com.google.privacy.dlp.v2. LocationName ;
import com.google.privacy.dlp.v2. PrivacyMetric ;
import com.google.privacy.dlp.v2. PrivacyMetric . KMapEstimationConfig ;
import com.google.privacy.dlp.v2. PrivacyMetric . KMapEstimationConfig . TaggedField ;
import com.google.privacy.dlp.v2. RiskAnalysisJobConfig ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. ProjectTopicName ;
import com.google.pubsub.v1. PubsubMessage ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.Arrays ;
import java.util.List ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
import java.util.stream.Collectors ;
@SuppressWarnings ( "checkstyle:AbbreviationAsWordInName" )
class RiskAnalysisKMap {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String datasetId = "your-bigquery-dataset-id" ;
String tableId = "your-bigquery-table-id" ;
String topicId = "pub-sub-topic" ;
String subscriptionId = "pub-sub-subscription" ;
calculateKMap ( projectId , datasetId , tableId , topicId , subscriptionId );
}
public static void calculateKMap (
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
// These values represent the column names of quasi-identifiers to analyze
List<String> quasiIds = Arrays . asList ( "Age" , "Gender" );
// These values represent the info types corresponding to the quasi-identifiers above
List<String> infoTypeNames = Arrays . asList ( "AGE" , "GENDER" );
// Tag each of the quasiId column names with its corresponding infoType
List<InfoType> infoTypes =
infoTypeNames . stream ()
. map ( it - > InfoType . newBuilder (). setName ( it ). build ())
. collect ( Collectors . toList ());
if ( quasiIds . size () != infoTypes . size ()) {
throw new IllegalArgumentException ( "The numbers of quasi-IDs and infoTypes must be equal!" );
}
List<TaggedField> taggedFields = new ArrayList<TaggedField> ();
for ( int i = 0 ; i < quasiIds . size (); i ++ ) {
TaggedField taggedField =
TaggedField . newBuilder ()
. setField ( FieldId . newBuilder (). setName ( quasiIds . get ( i )). build ())
. setInfoType ( infoTypes . get ( i ))
. build ();
taggedFields . add ( taggedField );
}
// The k-map distribution region can be specified by any ISO-3166-1 region code.
String regionCode = "US" ;
// Configure the privacy metric for the job
KMapEstimationConfig kmapConfig =
KMapEstimationConfig . newBuilder ()
. addAllQuasiIds ( taggedFields )
. setRegionCode ( regionCode )
. build ();
PrivacyMetric privacyMetric =
PrivacyMetric . newBuilder (). setKMapEstimationConfig ( kmapConfig ). build ();
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
// Build the request to be sent by the client
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
KMapEstimationResult kmapResult = completedJob . getRiskDetails (). getKMapEstimationResult ();
for ( KMapEstimationHistogramBucket result : kmapResult . getKMapEstimationHistogramList ()) {
System . out . printf (
"\tAnonymity range: [%d, %d]\n" , result . getMinAnonymity (), result . getMaxAnonymity ());
System . out . printf ( "\tSize: %d\n" , result . getBucketSize ());
for ( KMapEstimationQuasiIdValues valueBucket : result . getBucketValuesList ()) {
List<String> quasiIdValues =
valueBucket . getQuasiIdsValuesList (). stream ()
. map (
value - > {
String s = value . toString ();
return s . substring ( s . indexOf ( ':' ) + 1 ). trim ();
})
. collect ( Collectors . toList ());
System . out . printf ( "\tValues: {%s}\n" , String . join ( ", " , quasiIdValues ));
System . out . printf (
"\tEstimated k-map anonymity: %d\n" , valueBucket . getEstimatedAnonymity ());
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
// The ISO 3166-1 region code that the data is representative of
// Can be omitted if using a region-specific infoType (such as US_ZIP_5)
// const regionCode = 'USA';
// A set of columns that form a composite key ('quasi-identifiers'), and
// optionally their reidentification distributions
// const quasiIds = [{ field: { name: 'age' }, infoType: { name: 'AGE' }}];
async function kMapEstimationAnalysis () {
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
kMapEstimationConfig : {
quasiIds : quasiIds ,
regionCode : regionCode ,
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
job . riskDetails . kMapEstimationResult . kMapEstimationHistogram ;
histogramBuckets . forEach (( histogramBucket , histogramBucketIdx ) = > {
console . log ( `Bucket ${ histogramBucketIdx } :` );
console . log (
` Anonymity range: [ ${ histogramBucket . minAnonymity } , ${ histogramBucket . maxAnonymity } ]`
);
console . log ( ` Size: ${ histogramBucket . bucketSize } ` );
histogramBucket . bucketValues . forEach ( valueBucket = > {
const values = valueBucket . quasiIdsValues . map ( value = > getValue ( value ));
console . log ( ` Values: ${ values . join ( ' ' ) } ` );
console . log (
` Estimated k-map anonymity: ${ valueBucket . estimatedAnonymity } `
);
});
});
}
await kMapEstimationAnalysis ();
PHP
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Exception;
use Google\Cloud\Dlp\V2\Action;
use Google\Cloud\Dlp\V2\Action\PublishToPubSub;
use Google\Cloud\Dlp\V2\BigQueryTable;
use Google\Cloud\Dlp\V2\Client\DlpServiceClient;
use Google\Cloud\Dlp\V2\CreateDlpJobRequest;
use Google\Cloud\Dlp\V2\DlpJob\JobState;
use Google\Cloud\Dlp\V2\FieldId;
use Google\Cloud\Dlp\V2\GetDlpJobRequest;
use Google\Cloud\Dlp\V2\InfoType;
use Google\Cloud\Dlp\V2\PrivacyMetric;
use Google\Cloud\Dlp\V2\PrivacyMetric\KMapEstimationConfig;
use Google\Cloud\Dlp\V2\PrivacyMetric\KMapEstimationConfig\TaggedField;
use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig;
use Google\Cloud\PubSub\PubSubClient;
/**
* Computes the k-map risk estimation of a column set in a Google BigQuery table.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $dataProjectId The project ID containing the target Datastore
* @param string $topicId The name of the Pub/Sub topic to notify once the job completes
* @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job
* @param string $datasetId The ID of the dataset to inspect
* @param string $tableId The ID of the table to inspect
* @param string $regionCode The ISO 3166-1 region code that the data is representative of
* @param string[] $quasiIdNames Array columns that form a composite key (quasi-identifiers)
* @param string[] $infoTypes Array of infoTypes corresponding to the chosen quasi-identifiers
*/
function k_map(
string $callingProjectId,
string $dataProjectId,
string $topicId,
string $subscriptionId,
string $datasetId,
string $tableId,
string $regionCode,
array $quasiIdNames,
array $infoTypes
): void {
// Instantiate a client.
$dlp = new DlpServiceClient();
$pubsub = new PubSubClient();
$topic = $pubsub->topic($topicId);
// Verify input
if (count($infoTypes) != count($quasiIdNames)) {
throw new Exception('Number of infoTypes and number of quasi-identifiers must be equal!');
}
// Map infoTypes to quasi-ids
$quasiIdObjects = array_map(function ($quasiId, $infoType) {
$quasiIdField = (new FieldId())
->setName($quasiId);
$quasiIdType = (new InfoType())
->setName($infoType);
$quasiIdObject = (new TaggedField())
->setInfoType($quasiIdType)
->setField($quasiIdField);
return $quasiIdObject;
}, $quasiIdNames, $infoTypes);
// Construct analysis config
$statsConfig = (new KMapEstimationConfig())
->setQuasiIds($quasiIdObjects)
->setRegionCode($regionCode);
$privacyMetric = (new PrivacyMetric())
->setKMapEstimationConfig($statsConfig);
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
// Print finding counts
printf('Job %s status: %s' . PHP_EOL, $job->getName(), JobState::name($job->getState()));
switch ($job->getState()) {
case JobState::DONE:
$histBuckets = $job->getRiskDetails()->getKMapEstimationResult()->getKMapEstimationHistogram();
foreach ($histBuckets as $bucketIndex => $histBucket) {
// Print bucket stats
printf('Bucket %s:' . PHP_EOL, $bucketIndex);
printf(
' Anonymity range: [%s, %s]' . PHP_EOL,
$histBucket->getMinAnonymity(),
$histBucket->getMaxAnonymity()
);
printf(' Size: %s' . PHP_EOL, $histBucket->getBucketSize());
// Print bucket values
foreach ($histBucket->getBucketValues() as $percent => $valueBucket) {
printf(
' Estimated k-map anonymity: %s' . PHP_EOL,
$valueBucket->getEstimatedAnonymity()
);
// Pretty-print quasi-ID values
print(' Values: ' . PHP_EOL);
foreach ($valueBucket->getQuasiIdsValues() as $index => $value) {
print(' ' . $value->serializeToJsonString() . PHP_EOL);
}
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
from typing import List
import google.cloud.dlp
from google.cloud.dlp_v2 import types
import google.cloud.pubsub
def k_map_estimate_analysis (
project : str ,
table_project_id : str ,
dataset_id : str ,
table_id : str ,
topic_id : str ,
subscription_id : str ,
quasi_ids : List [ str ],
info_types : List [ str ],
region_code : str = "US" ,
timeout : int = 300 ,
) - > None :
"""Uses the Data Loss Prevention API to compute the k-map risk estimation
of a column set in a Google BigQuery table.
Args:
project: The Google Cloud project id to use as a parent resource.
table_project_id: The Google Cloud project id where the BigQuery table
is stored.
dataset_id: The id of the dataset to inspect.
table_id: The id of the table to inspect.
topic_id: The name of the Pub/Sub topic to notify once the job
completes.
subscription_id: The name of the Pub/Sub subscription to use when
listening for job completion notifications.
quasi_ids: A set of columns that form a composite key and optionally
their re-identification distributions.
info_types: Type of information of the quasi_id in order to provide a
statistical model of population.
region_code: The ISO 3166-1 region code that the data is representative
of. Can be omitted if using a region-specific infoType (such as
US_ZIP_5)
timeout: The number of seconds to wait for a response from the API.
Returns:
None; the response from the API is printed to the terminal.
"""
# Create helper function for unpacking values
def get_values ( obj : types . Value ) - > int :
return int ( obj . integer_value )
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
# Check that numbers of quasi-ids and info types are equal
if len ( quasi_ids ) != len ( info_types ):
raise ValueError (
"""Number of infoTypes and number of quasi-identifiers
must be equal!"""
)
# Convert quasi id list to Protobuf type
def map_fields ( quasi_id : str , info_type : str ) - > dict :
return { "field" : { "name" : quasi_id }, "info_type" : { "name" : info_type }}
quasi_ids = map ( map_fields , quasi_ids , info_types )
# Tell the API where to send a notification when the job is complete.
actions = [{ "pub_sub" : { "topic" : topic }}]
# Configure risk analysis job
# Give the name of the numeric column to compute risk metrics for
risk_job = {
"privacy_metric" : {
"k_map_estimation_config" : {
"quasi_ids" : quasi_ids ,
"region_code" : region_code ,
}
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
job . risk_details . k_map_estimation_result . k_map_estimation_histogram
)
# Print bucket stats
for i , bucket in enumerate ( histogram_buckets ):
print ( f "Bucket { i } :" )
print (
" Anonymity range: [ {} , {} ]" . format (
bucket . min_anonymity , bucket . max_anonymity
)
)
print ( f " Size: { bucket . bucket_size } " )
for value_bucket in bucket . bucket_values :
print (
" Values: {} " . format (
map ( get_values , value_bucket . quasi_ids_values )
)
)
print (
" Estimated k-map anonymity: {} " . format (
value_bucket . estimated_anonymity
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
using static Google . Cloud . Dlp . V2 . PrivacyMetric . Types . KMapEstimationConfig . Types ;
public class RiskAnalysisCreateKMap
{
public static object KMap (
string callingProjectId ,
string tableProjectId ,
string datasetId ,
string tableId ,
string topicId ,
string subscriptionId ,
IEnumerable<FieldId> quasiIds ,
IEnumerable<InfoType> infoTypes ,
string regionCode )
{
var dlp = DlpServiceClient . Create ();
// Construct + submit the job
var kmapEstimationConfig = new KMapEstimationConfig
{
QuasiIds =
{
quasiIds . Zip (
infoTypes ,
( Field , InfoType ) = > new TaggedField
{
Field = Field ,
InfoType = InfoType
}
)
},
RegionCode = regionCode
};
var config = new RiskAnalysisJobConfig ()
{
PrivacyMetric = new PrivacyMetric
{
KMapEstimationConfig = kmapEstimationConfig
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
var subscriptionName = new SubscriptionName (
callingProjectId ,
subscriptionId );
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
var result = resultJob . RiskDetails . KMapEstimationResult ;
for ( var histogramIdx = 0 ; histogramIdx < result . KMapEstimationHistogram . Count ; histogramIdx ++ )
{
var histogramValue = result . KMapEstimationHistogram [ histogramIdx ];
Console . WriteLine ( $"Bucket {histogramIdx}" );
Console . WriteLine ( $" Anonymity range: [{histogramValue. MinAnonymity }, {histogramValue. MaxAnonymity }]." );
Console . WriteLine ( $" Size: {histogramValue.BucketSize}" );
foreach ( var datapoint in histogramValue . BucketValues )
{
// 'UnpackValue(x)' is a prettier version of 'x.toString()'
Console . WriteLine ( $" Values: [{String.Join(',', datapoint.QuasiIdsValues.Select(x => UnpackValue(x)))}]" );
Console . WriteLine ( $" Estimated k-map anonymity: {datapoint. EstimatedAnonymity }" );
}
}
return 0 ;
}
public static string UnpackValue ( Value protoValue )
{
var jsonValue = JsonConvert . DeserializeObject<Dictionary<string , object >> ( protoValue . ToString ());
return jsonValue . Values . ElementAt ( 0 ). ToString ();
}
}
Viewing k -map job results
To retrieve the results of the k -map risk analysis job using the REST API,
send the following GET request to the
projects.dlpJobs
resource. Replace PROJECT_ID with your project ID and
JOB_ID with the identifier of the job you want to obtain results for.
The job ID was returned when you started the job, and can also be retrieved by
listing all jobs .
GET https://dlp.googleapis.com/v2/projects/ PROJECT_ID /dlpJobs/ JOB_ID
The request returns a JSON object containing an instance of the job. The results
of the analysis are inside the "riskDetails" key, in an
AnalyzeDataSourceRiskDetails
object. For more information, see the API reference for the
DlpJob
resource.
What's next
Learn how to calculate the k -anonymity
value for a dataset.
Learn how to calculate the l -diversity
value for a dataset.
Learn how to calculate the δ -presence value
for a dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

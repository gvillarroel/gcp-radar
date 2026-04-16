---
title: "Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores
  title: "Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Manage featurestores
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
Learn how to create, list, describe, update, and delete featurestores. A featurestore is
a top-level container for entity types, features, and feature values.
Online and offline storage
Vertex AI Feature Store (Legacy) uses two storage methods classified as
online storage and offline storage , which are
priced differently. All featurestores have
offline storage and optionally, online storage.
Online storage retains the latest timestamp values of your features to
efficiently handle online serving requests. When you run an import job by
using the API, you can control the job if the data is written to the online store. Skipping
the online store prevents any load on the online serving nodes. For example,
when you run backfill jobs, you can disable writes to the online store and write only
to the offline store. For more information, see the disableOnlineServing
flag in the API
reference .
Vertex AI Feature Store (Legacy) uses offline storage to store data until the
data reaches the retention limit or until
you delete the data. You can store unlimited data in the offline store. You can
control offline storage costs by managing how much data you keep. You can also override the default online store data retention limit for your featurestore and the offline data retention limit for an entity type. Learn more
about Vertex AI Feature Store (Legacy) quotas and
limits .
Use the Google Cloud console to view the amount of online and offline storage you
are using. View your
featurestore's Total online storage and Total offline storage monitoring
metrics to determine your usage.
Online serving nodes
Online serving nodes provide the compute resources used to store and serve feature values for low-latency online serving. These nodes are always running even when they aren't serving data. You are charged for each node hour.
The storage limit for online serving nodes is 5 TB per node. Learn more about Vertex AI Feature Store (Legacy) quotas and limits .
Note: The storage limit is measured in binary terabytes (TB), where 1 TB is 2 40 bytes. This unit of measurement is also known as a
tebibyte (TiB) .
The number of online serving nodes that you require is directly proportional to the following two factors:
The number of online serving requests (queries per second) that the featurestore receives.
The number of import jobs that write to online storage.
Both factors contribute to the CPU utilization and performance of the nodes. From the Google Cloud console, view the metrics of the following:
Queries per second : Number of queries per second to your featurestore.
Node count : Number of your online serving nodes.
CPU utilization : CPU utilization of your nodes.
If CPU utilization is consistently high, consider increasing the number of online
serving nodes for your featurestore.
Test performance of online serving nodes
You can test the performance of online serving nodes for real-time feature serving. This lets you ensure that the featurestore has sufficient machine resources to perform within predetermined QPS or latency thresholds. You can perform these tests based on various benchmarking parameters, such as QPS, latency, and API. For guidelines and best practices to test the performance of online serving nodes, see Test the performance of online serving nodes for real-time serving in Best practices for Vertex AI Feature Store (Legacy) .
Additionally, you can use the Vertex AI Benchmarker open source tool to load test the performance of your feature store resources. The Vertex AI Benchmarker open source tool consists of a Python command-line tool and a Java worker.
Caution: Using the Vertex AI Benchmarker framework with production resources can lead to rate limiting, quota limits, and other production issues. Use this tool in an environment designated for testing.
Scaling Options
You can switch between the following options to configure your number of online serving nodes:
Autoscaling
If you choose autoscaling, the featurestore automatically changes the number
of nodes based on CPU utilization. Autoscaling reviews traffic patterns to
maintain performance and optimize your cost by adding nodes when the traffic
increases and removing nodes when the traffic decreases.
Autoscaling performs well for traffic patterns that experience gradual
growth and decline. If you use Vertex AI Feature Store (Legacy) extensively for
traffic patterns that encounter frequent load fluctuations, use autoscaling
to improve cost efficiency.
Caution: Autoscaling isn't effective for managing sudden bursts of traffic. For more information, see Additional considerations for autoscaling .
If you are expecting sudden bursts of traffic, set the minNodeCount flag to a threshold that is high enough to handle the bursts. For more information, see Scaling in the API reference .
Allocating a fixed node count
If you allocate a fixed node count, Vertex AI Feature Store (Legacy) maintains a consistent number of nodes regardless of the traffic patterns. The fixed node count keeps costs predictable, and the nodes should perform well when there are enough nodes to handle the traffic. You can manually change the fixed node count to handle changes in traffic patterns.
Additional considerations for autoscaling
If you choose autoscaling, there are four additional points to consider that include:
After adding online serving nodes, the online store needs time to rebalance the data. It can take up to 20 minutes under load before you see a significant improvement in performance. As a result, scaling the number of nodes might not help for short bursts of traffic. This limitation applies for both manual scaling and autoscaling.
If you submit online serving requests to the featurestore without online serving nodes, the operation returns an error.
Turn off online serving in your featurestore
If you don't require online serving and want to prevent incurring changes for online serving nodes, set the number of online serving nodes to zero. To turn off online serving in your featurestore, set the following configuration:
If you're using autoscaling, remove the scaling parameter.
Set the fixed number of online serving nodes to 0 .
For more information about how to create a featurestore, see Create a featurestore . For more information about how to modify the configuration of an existing featurestore, see Update a featurestore .
If you set the number of online serving nodes to 0 , the entire online store, including its data, is deleted. If you want to temporarily turn off your online store and then restore it, you must reimport the deleted data.
For example, if you set the online serving node count for your featurestore to 0 and then provision online serving nodes by setting the node count to 1 or higher, Vertex AI Feature Store (Legacy) doesn't migrate the deleted feature data to the online store. To repopulate your online store, you must reimport your data. One way to reimport your data is to export the historical data before you disable online serving nodes, and then import the exported data after you provision the nodes.
When you provision online serving nodes, you must wait for the operation to complete before importing new data. In-progress import jobs resume only after the online serving node provisioning is complete.
If you submit an online serving request to the featurestore without online serving nodes, the request returns an error.
Create a featurestore
Create a featurestore resource to contain entity types and features. The
location of your featurestore must be in the same location as your source data.
For example, if your featurestore is in us-central, you can import data from
files in Cloud Storage buckets that are in us-central1 or in the US
multi-region location, though source data from dual-region buckets
isn't supported. Similarly for BigQuery, you can import data from
tables that are in us-central1 or in the US multi-region location. For more information, see Source data
requirements .
Vertex AI Feature Store (Legacy) availability can vary by location. For more information, see Feature availability .
Note: Billing for a featurestore instance starts when it is created and
continues as long as it is serving requests or idle. For more information, see the
pricing page .
Web UI
You can create a featurestore using the Google Cloud console if a featurestore
isn't already created in the Google Cloud project for the selected region. If
a featurestore already exists for the project and region, use another method.
To create a featurestore using the Google Cloud console:
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Click Create featurestore
Specify a name for the featurestore.
If you want to turn on online serving for the featurestore,
click the Turn on online serving toggle and set the scaling options.
For more information about online serving and scaling options, see
Online serving nodes
Click Create .
Terraform
The following sample uses the google_vertex_ai_featurestore Terraform resource to create a featurestore with a fixed node count. The name of the featurestore is featurestore_yyyyyyyy , where yyyyyyyy is a randomly generated alphanumeric identifier.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
# Featurestore name must be unique for the project
resource "random_id" "featurestore_name_suffix" {
byte_length = 8
}
resource "google_vertex_ai_featurestore" "main" {
name = "featurestore_${random_id.featurestore_name_suffix.hex}"
region = "us-central1"
labels = {
environment = "testing"
}
online_serving_config {
fixed_node_count = 1
}
force_destroy = true
}
REST
To create a featurestore, send a POST request by using the
featurestores.create
method.
The following sample creates a featurestore with a fixed node count of
1 . The node count specifies the number of online serving nodes,
which affects the number of online serving requests that the featurestore can
handle. The latency could increase if the number of nodes cannot support the
number of incoming requests.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is created. For example, us-central1 .
PROJECT_ID : Your project ID .
FEATURESTORE_ID : ID for the featurestore.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID
Request JSON body:
{
"online_serving_config": {
"fixed_node_count": 1
},
"labels": {
"environment": "testing"
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID " | Select-Object -Expand Content
You should see output similar to the following. You can use the
OPERATION_ID in the response to
get the
status of the operation.
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeaturestoreOperationMetadata",
"genericMetadata": {
"createTime": "2021-02-26T00:44:40.722474Z",
"updateTime": "2021-02-26T00:44:40.722474Z"
}
}
}
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from google.cloud import aiplatform
def create_featurestore_sample (
project : str ,
location : str ,
featurestore_id : str ,
online_store_fixed_node_count : int = 1 ,
sync : bool = True ,
):
aiplatform . init ( project = project , location = location )
fs = aiplatform . Featurestore . create (
featurestore_id = featurestore_id ,
online_store_fixed_node_count = online_store_fixed_node_count ,
sync = sync ,
)
fs . wait ()
return fs
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
import com.google.cloud.aiplatform.v1. CreateFeaturestoreOperationMetadata ;
import com.google.cloud.aiplatform.v1. CreateFeaturestoreRequest ;
import com.google.cloud.aiplatform.v1. Featurestore ;
import com.google.cloud.aiplatform.v1. Featurestore . OnlineServingConfig ;
import com.google.cloud.aiplatform.v1. Featurestore . OnlineServingConfig . Scaling ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.cloud.aiplatform.v1. LocationName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateFeaturestoreSample {
public static void main ( String [] args )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
int minNodeCount = 1 ;
int maxNodeCount = 5 ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
int timeout = 900 ;
createFeaturestoreSample (
project , featurestoreId , minNodeCount , maxNodeCount , location , endpoint , timeout );
}
static void createFeaturestoreSample (
String project ,
String featurestoreId ,
int minNodeCount ,
int maxNodeCount ,
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
OnlineServingConfig . Builder builderValue =
OnlineServingConfig . newBuilder ()
. setScaling (
Scaling . newBuilder (). setMinNodeCount ( minNodeCount ). setMaxNodeCount ( maxNodeCount ));
Featurestore featurestore =
Featurestore . newBuilder (). setOnlineServingConfig ( builderValue ). build ();
String parent = LocationName . of ( project , location ). toString ();
CreateFeaturestoreRequest createFeaturestoreRequest =
CreateFeaturestoreRequest . newBuilder ()
. setParent ( parent )
. setFeaturestore ( featurestore )
. setFeaturestoreId ( featurestoreId )
. build ();
OperationFuture<Featurestore , CreateFeaturestoreOperationMetadata > featurestoreFuture =
featurestoreServiceClient . createFeaturestoreAsync ( createFeaturestoreRequest );
System . out . format (
"Operation name: %s%n" , featurestoreFuture . getInitialFuture (). get (). getName ());
System . out . println ( "Waiting for operation to finish..." );
Featurestore featurestoreResponse = featurestoreFuture . get ( timeout , TimeUnit . SECONDS );
System . out . println ( "Create Featurestore Response" );
System . out . format ( "Name: %s%n" , featurestoreResponse . getName ());
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
// const minNodeCount = <MINIMUM_NO_OF_NODES>;
// const maxNodeCount = <MAXIMUM_NO_OF_NODES>;
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
async function createFeaturestore () {
// Configure the parent resource
const parent = `projects/ ${ project } /locations/ ${ location } ` ;
const featurestore = {
onlineServingConfig : {
scaling : {
minNodeCount : minNodeCount ,
maxNodeCount : maxNodeCount ,
},
},
};
const request = {
parent : parent ,
featurestore : featurestore ,
featurestoreId : featurestoreId ,
};
// Create Featurestore request
const [ operation ] = await featurestoreServiceClient . createFeaturestore (
request ,
{ timeout : Number ( timeout )}
);
const [ response ] = await operation . promise ();
console . log ( 'Create featurestore response' );
console . log ( `Name : ${ response . name } ` );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
createFeaturestore ();
Create a featurestore that uses a CMEK
Before you begin, if you don't have an existing CMEK (customer-managed
encryption key), use Cloud Key Management Service to configure a customer-managed encryption
key and set up permissions . The following
sample creates a featurestore that uses a CMEK key.
If Vertex AI loses permission to the associated
CMEK key, any resources and values within featurestores that were encrypted by
that key become inaccessible until Vertex AI can use that key
again.
After 30 days, if Vertex AI still doesn't have access to the CMEK
key, Vertex AI deletes all of the featurestores that were encrypted
with that key. When creating new featurestores, you can't reuse those
featurestores names.
Web UI
Use another method. You cannot create a featurestore from the
Google Cloud console.
REST
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is created. For example, us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID for the featurestore.
CMEK_PROJECT : The project ID or project number that contains
your CMEK.
KEY_RING : The name of the Cloud Key Management Service key ring that your
encryption key is on.
KEY_NAME : The name of the encryption key to use.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID
Request JSON body:
{
"online_serving_config": {
"fixed_node_count": 1
},
"encryption_spec":{
"kms_key_name": "projects/ CMEK_PROJECT /locations/ LOCATION_ID /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores?featurestoreId= FEATURESTORE_ID " | Select-Object -Expand Content
You should see output similar to the following. You can use the
OPERATION_ID in the response to
get the
status of the operation.
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeaturestoreOperationMetadata",
"genericMetadata": {
"createTime": "2021-02-26T00:44:40.722474Z",
"updateTime": "2021-02-26T00:44:40.722474Z"
}
}
}
List featurestores
List all featurestores in a project.
Web UI
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Select a region from the Region drop-down list.
In the features table, view the Featurestore column to see the
featurestores in your project for the selected region.
REST
To list featurestores for a particular region in your project, send a GET
request by using the
featurestores.list
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
HTTP method and URL:
GET https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"featurestores": [
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/test",
"createTime": "2021-02-26T00:44:44.216805Z",
"updateTime": "2021-02-26T00:44:44.364916Z",
"etag": "AMEw9yNL0s7qZh8lZVZ5T3BEuhoEgFR7JmjbbCSAkRZjeKDXkkIYnxxA4POe5BWT8cCn",
"labels": {
"environment": "testing"
},
"onlineServingConfig": {
"fixedNodeCount": 2
},
"state": "STABLE"
},
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/featurestore_demo",
"createTime": "2021-02-25T00:39:40.598781Z",
"updateTime": "2021-02-25T00:39:40.744038Z",
"etag": "AMEw9yO_e0vm-9W_yeCz4rJm-XnnEMYQ-vQesevxya_sz-FckuysnDwo3cEXHdWWSeda",
"labels": {
"environment": "testing"
},
"onlineServingConfig": {
"fixedNodeCount": 3
},
"state": "STABLE"
}
]
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
import com.google.cloud.aiplatform.v1. Featurestore ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.cloud.aiplatform.v1. ListFeaturestoresRequest ;
import com.google.cloud.aiplatform.v1. LocationName ;
import java.io.IOException ;
public class ListFeaturestoresSample {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
listFeaturestoresSample ( project , location , endpoint );
}
static void listFeaturestoresSample ( String project , String location , String endpoint )
throws IOException {
FeaturestoreServiceSettings featurestoreServiceSettings =
FeaturestoreServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( FeaturestoreServiceClient featurestoreServiceClient =
FeaturestoreServiceClient . create ( featurestoreServiceSettings )) {
ListFeaturestoresRequest listFeaturestoresRequest =
ListFeaturestoresRequest . newBuilder ()
. setParent ( LocationName . of ( project , location ). toString ())
. build ();
System . out . println ( "List Featurestores Response" );
for ( Featurestore element :
featurestoreServiceClient . listFeaturestores ( listFeaturestoresRequest ). iterateAll ()) {
System . out . println ( element );
}
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
// const location = 'YOUR_PROJECT_LOCATION';
// const apiEndpoint = 'YOUR_API_ENDPOINT';
// const timeout = <TIMEOUT_IN_MILLI_SECONDS>;
// Imports the Google Cloud Featurestore Service Client library
const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ;
// Specifies the location of the api endpoint
const clientOptions = {
apiEndpoint : apiEndpoint ,
};
// Instantiates a client
const featurestoreServiceClient = new FeaturestoreServiceClient (
clientOptions
);
async function listFeaturestores () {
// Configure the parent resource
const parent = `projects/ ${ project } /locations/ ${ location } ` ;
const request = {
parent : parent ,
};
// List featurestores request
const [ response ] = await featurestoreServiceClient . listFeaturestores (
request ,
{ timeout : Number ( timeout )}
);
console . log ( 'List featurestores response' );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
listFeaturestores ();
Additional languages
To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python . For more information, see the Vertex AI SDK for Python API reference documentation.
View featurestore details
Get details about a featurestore such as its name and online serving
configuration. If you use the Google Cloud console, you can also view
Cloud Monitoring metrics for
featurestores.
Web UI
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Select a region from the Region drop-down list.
In the features table, view the Featurestore column and find the
featurestore that you want to view information for.
Click the name of the featurestore to view its Monitoring
metrics.
Click the Properties tab to view the featurestore's online serving
configuration.
REST
To get details about a single featurestore, send a GET request by using the
featurestores.get
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
HTTP method and URL:
GET https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID ",
"createTime": "2021-02-25T00:39:40.598781Z",
"updateTime": "2021-02-25T00:39:40.744038Z",
"etag": "AMEw9yNy_b4IaMIvw1803ZT38cpUtjfwlyLkR709oBCY6pQrm6dHophLcqhrvsNqkQQZ",
"onlineServingConfig": {
"fixedNodeCount": 3
},
"state": "STABLE"
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
import com.google.cloud.aiplatform.v1. Featurestore ;
import com.google.cloud.aiplatform.v1. FeaturestoreName ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.cloud.aiplatform.v1. GetFeaturestoreRequest ;
import java.io.IOException ;
public class GetFeaturestoreSample {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
getFeaturestoreSample ( project , featurestoreId , location , endpoint );
}
static void getFeaturestoreSample (
String project , String featurestoreId , String location , String endpoint ) throws IOException {
FeaturestoreServiceSettings featurestoreServiceSettings =
FeaturestoreServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( FeaturestoreServiceClient featurestoreServiceClient =
FeaturestoreServiceClient . create ( featurestoreServiceSettings )) {
GetFeaturestoreRequest getFeaturestoreRequest =
GetFeaturestoreRequest . newBuilder ()
. setName ( FeaturestoreName . of ( project , location , featurestoreId ). toString ())
. build ();
Featurestore featurestore = featurestoreServiceClient . getFeaturestore ( getFeaturestoreRequest );
System . out . println ( "Get Featurestore Response" );
System . out . println ( featurestore );
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
// const location = 'YOUR_PROJECT_LOCATION';
// const apiEndpoint = 'YOUR_API_ENDPOINT';
// const timeout = <TIMEOUT_IN_MILLI_SECONDS>;
// Imports the Google Cloud Featurestore Service Client library
const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ;
// Specifies the location of the api endpoint
const clientOptions = {
apiEndpoint : apiEndpoint ,
};
// Instantiates a client
const featurestoreServiceClient = new FeaturestoreServiceClient (
clientOptions
);
async function getFeaturestore () {
// Configure the parent resource
const name = `projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ` ;
const request = {
name : name ,
};
// Get Featurestore request
const [ response ] = await featurestoreServiceClient . getFeaturestore (
request ,
{ timeout : Number ( timeout )}
);
console . log ( 'Get featurestore response' );
console . log ( `Name : ${ response . name } ` );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
getFeaturestore ();
Additional languages
To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python . For more information, see the Vertex AI SDK for Python API reference documentation.
Update a featurestore
Update a featurestore, for example, to change the number of online serving nodes
or update labels on a featurestore.
Web UI
You can update only the number of online serving nodes. To update labels, use
the API.
In the Vertex AI section of the Google Cloud console, go to
the Features page.
Go to the
Features page
Select a region from the Region drop-down list.
In the features table, view the Featurestore column and click the name
of the featurestore to update.
Click Edit configuration to open the Edit featurestore
configuration pane.
Edit the featurestore configuration.
Click Update to apply your changes.
REST
To update a featurestore, send a PATCH request by using the
featurestores.patch
method.
The following sample updates the number of online serving nodes to
2 for the featurestore. All other settings remain the same.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
HTTP method and URL:
PATCH https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID
Request JSON body:
{
"online_serving_config": {
"fixed_node_count": 2
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID " | Select-Object -Expand Content
You should see output similar to the following. You can use the
OPERATION_ID in the response to
get the
status of the operation.
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.UpdateFeaturestoreOperationMetadata",
"genericMetadata": {
"createTime": "2021-03-18T21:12:08.373664Z",
"updateTime": "2021-03-18T21:12:08.373664Z"
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
import com.google.cloud.aiplatform.v1. Featurestore ;
import com.google.cloud.aiplatform.v1. Featurestore . OnlineServingConfig ;
import com.google.cloud.aiplatform.v1. Featurestore . OnlineServingConfig . Scaling ;
import com.google.cloud.aiplatform.v1. FeaturestoreName ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.cloud.aiplatform.v1. UpdateFeaturestoreOperationMetadata ;
import com.google.cloud.aiplatform.v1. UpdateFeaturestoreRequest ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class UpdateFeaturestoreSample {
public static void main ( String [] args )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
int minNodeCount = 2 ;
int maxNodeCount = 4 ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
int timeout = 300 ;
updateFeaturestoreSample (
project , featurestoreId , minNodeCount , maxNodeCount , location , endpoint , timeout );
}
static void updateFeaturestoreSample (
String project ,
String featurestoreId ,
int minNodeCount ,
int maxNodeCount ,
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
OnlineServingConfig . Builder builderValue =
OnlineServingConfig . newBuilder ()
. setScaling (
Scaling . newBuilder (). setMinNodeCount ( minNodeCount ). setMaxNodeCount ( maxNodeCount ));
Featurestore featurestore =
Featurestore . newBuilder ()
. setName ( FeaturestoreName . of ( project , location , featurestoreId ). toString ())
. setOnlineServingConfig ( builderValue )
. build ();
UpdateFeaturestoreRequest request =
UpdateFeaturestoreRequest . newBuilder (). setFeaturestore ( featurestore ). build ();
OperationFuture<Featurestore , UpdateFeaturestoreOperationMetadata > updateFeaturestoreFuture =
featurestoreServiceClient . updateFeaturestoreAsync ( request );
System . out . format (
"Operation name: %s%n" , updateFeaturestoreFuture . getInitialFuture (). get (). getName ());
System . out . println ( "Waiting for operation to finish..." );
Featurestore featurestoreResponse = updateFeaturestoreFuture . get ( timeout , TimeUnit . SECONDS );
System . out . println ( "Update Featurestore Response" );
System . out . format ( "Name: %s%n" , featurestoreResponse . getName ());
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
// const minNodeCount = <MINIMUM_NO_OF_NODES>;
// const maxNodeCount = <MAXIMUM_NO_OF_NODES>;
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
async function updateFeaturestore () {
// Configure the parent resource
const parent = `projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ` ;
const featurestore = {
name : parent ,
onlineServingConfig : {
scaling : {
minNodeCount : minNodeCount ,
maxNodeCount : maxNodeCount ,
},
},
};
const request = {
featurestore : featurestore ,
};
// Update Featurestore request
const [ operation ] = await featurestoreServiceClient . updateFeaturestore (
request ,
{ timeout : Number ( timeout )}
);
const [ response ] = await operation . promise ();
console . log ( 'Update featurestore response' );
console . log ( `Name : ${ response . name } ` );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
updateFeaturestore ();
Additional languages
To learn how to install and use the Vertex AI SDK for Python, see Use the Vertex AI SDK for Python . For more information, see the Vertex AI SDK for Python API reference documentation.
Delete a featurestore
Delete a featurestore. If the featurestore includes existing entity types and
features, enable the force query parameter to delete the featurestore and all
of its contents.
Web UI
Use another method. You cannot delete a featurestore from the
Google Cloud console.
REST
To delete a featurestore and all of its content, send a DELETE request by using
the
featurestores.delete
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the featurestore is located, such as us-central1 .
PROJECT_ID : .
FEATURESTORE_ID : ID of the featurestore.
BOOLEAN : Whether to delete the featurestore even if it contains
entity types and features. The force query parameter is
optional and is false by default.
HTTP method and URL:
DELETE https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID ?force= BOOLEAN
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID ?force= BOOLEAN "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featurestores/ FEATURESTORE_ID ?force= BOOLEAN " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /operations/ OPERATIONS_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeleteOperationMetadata",
"genericMetadata": {
"createTime": "2021-05-03T17:50:21.813112Z",
"updateTime": "2021-05-03T17:50:21.813112Z"
}
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.protobuf.Empty"
}
}
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from google.cloud import aiplatform
def delete_featurestore_sample (
project : str ,
location : str ,
featurestore_name : str ,
sync : bool = True ,
force : bool = True ,
):
aiplatform . init ( project = project , location = location )
fs = aiplatform . featurestore . Featurestore ( featurestore_name = featurestore_name )
fs . delete ( sync = sync , force = force )
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
import com.google.cloud.aiplatform.v1. DeleteFeaturestoreRequest ;
import com.google.cloud.aiplatform.v1. DeleteOperationMetadata ;
import com.google.cloud.aiplatform.v1. FeaturestoreName ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceClient ;
import com.google.cloud.aiplatform.v1. FeaturestoreServiceSettings ;
import com.google.protobuf. Empty ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class DeleteFeaturestoreSample {
public static void main ( String [] args )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String project = "YOUR_PROJECT_ID" ;
String featurestoreId = "YOUR_FEATURESTORE_ID" ;
boolean useForce = true ;
String location = "us-central1" ;
String endpoint = "us-central1-aiplatform.googleapis.com:443" ;
int timeout = 60 ;
deleteFeaturestoreSample ( project , featurestoreId , useForce , location , endpoint , timeout );
}
static void deleteFeaturestoreSample (
String project ,
String featurestoreId ,
boolean useForce ,
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
DeleteFeaturestoreRequest deleteFeaturestoreRequest =
DeleteFeaturestoreRequest . newBuilder ()
. setName ( FeaturestoreName . of ( project , location , featurestoreId ). toString ())
. setForce ( useForce )
. build ();
OperationFuture<Empty , DeleteOperationMetadata > operationFuture =
featurestoreServiceClient . deleteFeaturestoreAsync ( deleteFeaturestoreRequest );
System . out . format ( "Operation name: %s%n" , operationFuture . getInitialFuture (). get (). getName ());
System . out . println ( "Waiting for operation to finish..." );
operationFuture . get ( timeout , TimeUnit . SECONDS );
System . out . format ( "Deleted Featurestore." );
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
// const force = <BOOLEAN>;
// const location = 'YOUR_PROJECT_LOCATION';
// const apiEndpoint = 'YOUR_API_ENDPOINT';
// const timeout = <TIMEOUT_IN_MILLI_SECONDS>;
// Imports the Google Cloud Featurestore Service Client library
const { FeaturestoreServiceClient } = require ( ' @google-cloud/aiplatform ' ). v1 ;
// Specifies the location of the api endpoint
const clientOptions = {
apiEndpoint : apiEndpoint ,
};
// Instantiates a client
const featurestoreServiceClient = new FeaturestoreServiceClient (
clientOptions
);
async function deleteFeaturestore () {
// Configure the name resource
const name = `projects/ ${ project } /locations/ ${ location } /featurestores/ ${ featurestoreId } ` ;
const request = {
name : name ,
force : Boolean ( force ),
};
// Delete Featurestore request
const [ operation ] = await featurestoreServiceClient . deleteFeaturestore (
request ,
{ timeout : Number ( timeout )}
);
const [ response ] = await operation . promise ();
console . log ( 'Delete featurestore response' );
console . log ( 'Raw response:' );
console . log ( JSON . stringify ( response , null , 2 ));
}
deleteFeaturestore ();
What's next
Learn how to manage entity types and
features .
Troubleshoot common
Vertex AI Feature Store (Legacy) issues.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

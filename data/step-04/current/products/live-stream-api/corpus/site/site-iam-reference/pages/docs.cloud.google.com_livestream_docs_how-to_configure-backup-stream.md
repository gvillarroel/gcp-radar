---
title: "Create a channel with a backup input stream \_|\_ Live Stream API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream
  title: "Create a channel with a backup input stream \_|\_ Live Stream API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Guides
Send feedback
Create a channel with a backup input stream
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a channel resource with two input streams,
where one input stream can be the backup for the other input stream.
When automatic failover is enabled, if the primary input stream is disconnected
due to network issues, the channel automatically switches to use the backup
input stream as the input source. Once the primary input stream is back online,
the channel automatically switches back to the primary input stream as the input
source. The automatic failover feature is optional.
You must make sure that the primary input stream and the backup input stream are
identical if you want the backup input stream to fully replace the primary input
stream.
You can also manually switch the input stream using a channel event.
Set up your Google Cloud project and authentication
If you have not created a
Google Cloud project and credentials, see
Before you begin .
Create the primary input endpoint
To create the primary input endpoint, use the
projects.locations.inputs.create
method.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location in which to create the input
endpoint; use one of the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
INPUT_ID : a user-defined identifier for the new input
endpoint to create (to which you send your input stream). This value must be 1-63 characters, begin and end with [a-z0-9] , and
can contain dashes (-) between characters. For example, my-input .
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /inputs?inputId= INPUT_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"type": "RTMP_PUSH"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /inputs?inputId= INPUT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /inputs/ INPUT_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a long-running operation (LRO) that you can use
to track the progress of your request. See
Manage long-running operations
for more information.
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.LiveStream.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public class CreateInputSample
{
public async Task<Input> CreateInputAsync (
string projectId , string locationId , string inputId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
CreateInputRequest request = new CreateInputRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , locationId ),
InputId = inputId ,
Input = new Input
{
Type = Input . Type s . Type . RtmpPush
}
};
// Make the request.
Operation<Input , OperationMetadata > response = await client . CreateInputAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<Input , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// createInput creates an input endpoint. You send an input video stream to this
// endpoint.
func createInput ( w io . Writer , projectID , location , inputID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// inputID := "my-input"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . CreateInputRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
InputId : inputID ,
Input : & livestreampb . Input {
Type : livestreampb . Input_RTMP_PUSH ,
},
}
// Creates the input.
op , err := client . CreateInput ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateInput: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "Wait: %w" , err )
}
fmt . Fprintf ( w , "Input: %v" , response . Name )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. CreateInputRequest ;
import com.google.cloud.video.livestream.v1. Input ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.cloud.video.livestream.v1. LocationName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateInput {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String inputId = "my-input-id" ;
createInput ( projectId , location , inputId );
}
public static void createInput ( String projectId , String location , String inputId )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ();
var createInputRequest =
CreateInputRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setInputId ( inputId )
. setInput ( Input . newBuilder (). setType ( Input . Type . RTMP_PUSH ). build ())
. build ();
// First API call in a project can take up to 15 minutes.
Input result =
livestreamServiceClient . createInputAsync ( createInputRequest ). get ( 15 , TimeUnit . MINUTES );
System . out . println ( "Input: " + result . getName ());
livestreamServiceClient . close ();
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// inputId = 'my-input';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function createInput () {
// Construct request
const request = {
parent : livestreamServiceClient . locationPath ( projectId , location ),
inputId : inputId ,
input : {
type : ' RTMP_PUSH ' ,
},
};
// Run request
const [ operation ] = await livestreamServiceClient . createInput ( request );
const response = await operation . promise ();
const [ input ] = response ;
console . log ( `Input: ${ input . name } ` );
}
createInput ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Input;
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\CreateInputRequest;
/**
* Creates an input. You send an input video stream to this endpoint.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the input
* @param string $inputId The ID of the input to be created
*/
function create_input(
string $callingProjectId,
string $location,
string $inputId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->locationName($callingProjectId, $location);
$input = (new Input())
->setType(Input\Type::RTMP_PUSH);
// Run the input creation request. The response is a long-running operation ID.
$request = (new CreateInputRequest())
->setParent($parent)
->setInput($input)
->setInputId($inputId);
$operationResponse = $livestreamClient->createInput($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('Input: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import live_stream_v1
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
def create_input (
project_id : str , location : str , input_id : str
) - > live_stream_v1 . types . Input :
"""Creates an input.
Args:
project_id: The GCP project ID.
location: The location in which to create the input.
input_id: The user-defined input ID."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
input = live_stream_v1 . types . Input (
type_ = "RTMP_PUSH" ,
)
operation = client . create_input ( parent = parent , input = input , input_id = input_id )
response = operation . result ( 900 )
print ( f "Input: { response . name } " )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Create an input endpoint
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param input_id [String] Your input name (e.g. "my-input")
#
def create_input project_id :, location :, input_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Set the input fields.
new_input = {
type : Google :: Cloud :: Video :: LiveStream :: V1 :: Input :: Type :: RTMP_PUSH
}
operation = client . create_input parent : parent , input : new_input , input_id : input_id
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the input name.
puts "Input: #{ operation . response . name } "
end
Create the backup input endpoint
To create the backup input endpoint, again use the
projects.locations.inputs.create
method. Make sure to use a different input ID from the primary input endpoint.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location in which to create the input
endpoint; use one of the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
BACKUP_INPUT_ID : a user-defined identifier for
the backup input endpoint to create (and use if the primary input stream is disconnected due to
network issues); this value must be 1-63 characters, begin and end with [a-z0-9] , and
can contain dashes (-) between characters
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /inputs?inputId= BACKUP_INPUT_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"type": "RTMP_PUSH"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /inputs?inputId= BACKUP_INPUT_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /inputs/ BACKUP_INPUT_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a long-running operation (LRO) that you can use
to track the progress of your request. See
Manage long-running operations
for more information.
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.LiveStream.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public class CreateInputSample
{
public async Task<Input> CreateInputAsync (
string projectId , string locationId , string inputId )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
CreateInputRequest request = new CreateInputRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , locationId ),
InputId = inputId ,
Input = new Input
{
Type = Input . Type s . Type . RtmpPush
}
};
// Make the request.
Operation<Input , OperationMetadata > response = await client . CreateInputAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<Input , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// createInput creates an input endpoint. You send an input video stream to this
// endpoint.
func createInput ( w io . Writer , projectID , location , inputID string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// inputID := "my-input"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
req := & livestreampb . CreateInputRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
InputId : inputID ,
Input : & livestreampb . Input {
Type : livestreampb . Input_RTMP_PUSH ,
},
}
// Creates the input.
op , err := client . CreateInput ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateInput: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "Wait: %w" , err )
}
fmt . Fprintf ( w , "Input: %v" , response . Name )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. CreateInputRequest ;
import com.google.cloud.video.livestream.v1. Input ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.cloud.video.livestream.v1. LocationName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateInput {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String inputId = "my-input-id" ;
createInput ( projectId , location , inputId );
}
public static void createInput ( String projectId , String location , String inputId )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ();
var createInputRequest =
CreateInputRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setInputId ( inputId )
. setInput ( Input . newBuilder (). setType ( Input . Type . RTMP_PUSH ). build ())
. build ();
// First API call in a project can take up to 15 minutes.
Input result =
livestreamServiceClient . createInputAsync ( createInputRequest ). get ( 15 , TimeUnit . MINUTES );
System . out . println ( "Input: " + result . getName ());
livestreamServiceClient . close ();
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// inputId = 'my-input';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function createInput () {
// Construct request
const request = {
parent : livestreamServiceClient . locationPath ( projectId , location ),
inputId : inputId ,
input : {
type : ' RTMP_PUSH ' ,
},
};
// Run request
const [ operation ] = await livestreamServiceClient . createInput ( request );
const response = await operation . promise ();
const [ input ] = response ;
console . log ( `Input: ${ input . name } ` );
}
createInput ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\Input;
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\CreateInputRequest;
/**
* Creates an input. You send an input video stream to this endpoint.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the input
* @param string $inputId The ID of the input to be created
*/
function create_input(
string $callingProjectId,
string $location,
string $inputId
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->locationName($callingProjectId, $location);
$input = (new Input())
->setType(Input\Type::RTMP_PUSH);
// Run the input creation request. The response is a long-running operation ID.
$request = (new CreateInputRequest())
->setParent($parent)
->setInput($input)
->setInputId($inputId);
$operationResponse = $livestreamClient->createInput($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('Input: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import live_stream_v1
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
def create_input (
project_id : str , location : str , input_id : str
) - > live_stream_v1 . types . Input :
"""Creates an input.
Args:
project_id: The GCP project ID.
location: The location in which to create the input.
input_id: The user-defined input ID."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
input = live_stream_v1 . types . Input (
type_ = "RTMP_PUSH" ,
)
operation = client . create_input ( parent = parent , input = input , input_id = input_id )
response = operation . result ( 900 )
print ( f "Input: { response . name } " )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Create an input endpoint
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param input_id [String] Your input name (e.g. "my-input")
#
def create_input project_id :, location :, input_id :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Set the input fields.
new_input = {
type : Google :: Cloud :: Video :: LiveStream :: V1 :: Input :: Type :: RTMP_PUSH
}
operation = client . create_input parent : parent , input : new_input , input_id : input_id
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the input name.
puts "Input: #{ operation . response . name } "
end
Create the channel
To create the channel, use the
projects.locations.channels.create
method. For this example, automaticFailover
is configured for the first input attachment.
REST
Before using any of the request data,
make the following replacements:
PROJECT_NUMBER : your Google Cloud project
number; this is located in the Project number field on the
IAM Settings page
LOCATION : the location in which to create the
channel; use one of the supported regions
Show locations
us-central1
us-east1
us-east4
us-west1
us-west2
northamerica-northeast1
southamerica-east1
asia-east1
asia-east2
asia-south1
asia-northeast1
asia-southeast1
australia-southeast1
europe-north1
europe-west1
europe-west2
europe-west3
europe-west4
CHANNEL_ID : a user-defined identifier for the channel to
create; this value must be 1-63 characters, begin and end with [a-z0-9] , and
can contain dashes (-) between characters
INPUT_ID : the user-defined identifier for the
primary input endpoint
BACKUP_INPUT_ID : the user-defined identifier for the
backup input endpoint
BUCKET_NAME : the name of the Cloud Storage
bucket you created
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json PROJECT_NUMBER /locations/ LOCATION /inputs/ INPUT_ID ",
"automaticFailover": {
"inputKeys": ["input-backup"]
}
},
{
"key": "input-backup",
"input": "projects/ PROJECT_NUMBER /locations/ LOCATION /inputs/ BACKUP_INPUT_ID "
}
],
"output": {
"uri": "gs:// BUCKET_NAME "
},
"elementaryStreams": [
{
"key": "es_video",
"videoStream": {
"h264": {
"profile": "high",
"widthPixels": 1280,
"heightPixels": 720,
"bitrateBps": 3000000,
"frameRate": 30
}
}
},
{
"key": "es_audio",
"audioStream": {
"codec": "aac",
"channelCount": 2,
"bitrateBps": 160000
}
}
],
"muxStreams": [
{
"key": "mux_video",
"elementaryStreams": [
"es_video"
],
"segmentSettings": {
"segmentDuration": "2s"
}
},
{
"key": "mux_audio",
"elementaryStreams": [
"es_audio"
],
"segmentSettings": {
"segmentDuration": "2s"
}
}
],
"manifests": [
{
"key": "manifest_dash",
"fileName": "main.mpd",
"type": "DASH",
"muxStreams": [
"mux_video",
"mux_audio"
],
"maxSegmentCount": 5
}
]
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels?channelId= CHANNEL_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"inputAttachments": [
{
"key": "input-primary",
"input": "projects/ PROJECT_NUMBER /locations/ LOCATION /inputs/ INPUT_ID ",
"automaticFailover": {
"inputKeys": ["input-backup"]
}
},
{
"key": "input-backup",
"input": "projects/ PROJECT_NUMBER /locations/ LOCATION /inputs/ BACKUP_INPUT_ID "
}
],
"output": {
"uri": "gs:// BUCKET_NAME "
},
"elementaryStreams": [
{
"key": "es_video",
"videoStream": {
"h264": {
"profile": "high",
"widthPixels": 1280,
"heightPixels": 720,
"bitrateBps": 3000000,
"frameRate": 30
}
}
},
{
"key": "es_audio",
"audioStream": {
"codec": "aac",
"channelCount": 2,
"bitrateBps": 160000
}
}
],
"muxStreams": [
{
"key": "mux_video",
"elementaryStreams": [
"es_video"
],
"segmentSettings": {
"segmentDuration": "2s"
}
},
{
"key": "mux_audio",
"elementaryStreams": [
"es_audio"
],
"segmentSettings": {
"segmentDuration": "2s"
}
}
],
"manifests": [
{
"key": "manifest_dash",
"fileName": "main.mpd",
"type": "DASH",
"muxStreams": [
"mux_video",
"mux_audio"
],
"maxSegmentCount": 5
}
]
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /channels?channelId= CHANNEL_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"target": "projects/ PROJECT_NUMBER /locations/ LOCATION /channels/ CHANNEL_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
This command creates a long-running operation (LRO) that you can use
to track the progress of your request. See
Manage long-running operations
for more information.
C#
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API C# API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Video.LiveStream.V1 ;
using Google.LongRunning ;
using System.Threading.Tasks ;
public class CreateChannelWithBackupInputSample
{
public async Task<Channel> CreateChannelWithBackupInputAsync (
string projectId , string locationId , string channelId , string primaryInputId , string backupInputId , string outputUri )
{
// Create the client.
LivestreamServiceClient client = LivestreamServiceClient . Create ();
InputAttachment primaryInputAttachment = new InputAttachment
{
Key = "my-primary-input" ,
InputAsInputName = InputName . FromProjectLocationInput ( projectId , locationId , primaryInputId ),
AutomaticFailover = new InputAttachment . Types . AutomaticFailover
{
InputKeys = { "my-backup-input" }
}
};
InputAttachment backupInputAttachment = new InputAttachment
{
Key = "my-backup-input" ,
InputAsInputName = InputName . FromProjectLocationInput ( projectId , locationId , backupInputId )
};
VideoStream videoStream = new VideoStream
{
H264 = new VideoStream . Types . H264CodecSettings
{
Profile = "high" ,
BitrateBps = 3000000 ,
FrameRate = 30 ,
HeightPixels = 720 ,
WidthPixels = 1280
}
};
ElementaryStream elementaryStreamVideo = new ElementaryStream
{
Key = "es_video" ,
VideoStream = videoStream
};
AudioStream audioStream = new AudioStream
{
Codec = "aac" ,
ChannelCount = 2 ,
BitrateBps = 160000
};
ElementaryStream elementaryStreamAudio = new ElementaryStream
{
Key = "es_audio" ,
AudioStream = audioStream
};
MuxStream muxVideo = new MuxStream
{
Key = "mux_video" ,
ElementaryStreams = { "es_video" },
SegmentSettings = new SegmentSettings
{
SegmentDuration = new Google . Protobuf . WellKnownTypes . Duration
{
Seconds = 2
}
}
};
MuxStream muxAudio = new MuxStream
{
Key = "mux_audio" ,
ElementaryStreams = { "es_audio" },
SegmentSettings = new SegmentSettings
{
SegmentDuration = new Google . Protobuf . WellKnownTypes . Duration
{
Seconds = 2
}
}
};
CreateChannelRequest request = new CreateChannelRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( projectId , locationId ),
ChannelId = channelId ,
Channel = new Channel
{
InputAttachments = { primaryInputAttachment , backupInputAttachment },
Output = new Channel . Types . Output
{
Uri = outputUri
},
ElementaryStreams = { elementaryStreamVideo , elementaryStreamAudio },
MuxStreams = { muxVideo , muxAudio },
Manifests = {
new Manifest {
FileName = "manifest.m3u8" ,
Type = Manifest . Types . ManifestType . Hls ,
MuxStreams = { "mux_video" , "mux_audio" },
MaxSegmentCount = 5
}
}
}
};
// Make the request.
Operation<Channel , OperationMetadata > response = await client . CreateChannelAsync ( request );
// Poll until the returned long-running operation is complete.
Operation<Channel , OperationMetadata > completedResponse = await response . PollUntilCompletedAsync ();
// Retrieve the operation result.
return completedResponse . Result ;
}
}
Go
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Go API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"github.com/golang/protobuf/ptypes/duration"
livestream "cloud.google.com/go/video/livestream/apiv1"
"cloud.google.com/go/video/livestream/apiv1/livestreampb"
)
// createChannelWithBackupInput creates a channel with a failover backup input.
func createChannelWithBackupInput ( w io . Writer , projectID , location , channelID , primaryInputID , backupInputID , outputURI string ) error {
// projectID := "my-project-id"
// location := "us-central1"
// channelID := "my-channel"
// primaryInputID := "my-primary-input"
// backupInputID := "my-backup-input"
// outputURI := "gs://my-bucket/my-output-folder/"
ctx := context . Background ()
client , err := livestream . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
primaryInput := fmt . Sprintf ( "projects/%s/locations/%s/inputs/%s" , projectID , location , primaryInputID )
backupInput := fmt . Sprintf ( "projects/%s/locations/%s/inputs/%s" , projectID , location , backupInputID )
automaticFailover := & livestreampb . InputAttachment_AutomaticFailover {
InputKeys : [] string { "my-backup-input" },
}
req := & livestreampb . CreateChannelRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
ChannelId : channelID ,
Channel : & livestreampb . Channel {
InputAttachments : [] * livestreampb . InputAttachment {
{
Key : "my-primary-input" ,
Input : primaryInput ,
AutomaticFailover : automaticFailover ,
},
{
Key : "my-backup-input" ,
Input : backupInput ,
},
},
Output : & livestreampb . Channel_Output {
Uri : outputURI ,
},
ElementaryStreams : [] * livestreampb . ElementaryStream {
{
Key : "es_video" ,
ElementaryStream : & livestreampb . ElementaryStream_VideoStream {
VideoStream : & livestreampb . VideoStream {
CodecSettings : & livestreampb . VideoStream_H264 {
H264 : & livestreampb . VideoStream_H264CodecSettings {
Profile : "high" ,
BitrateBps : 3000000 ,
FrameRate : 30 ,
HeightPixels : 720 ,
WidthPixels : 1280 ,
},
},
},
},
},
{
Key : "es_audio" ,
ElementaryStream : & livestreampb . ElementaryStream_AudioStream {
AudioStream : & livestreampb . AudioStream {
Codec : "aac" ,
ChannelCount : 2 ,
BitrateBps : 160000 ,
},
},
},
},
MuxStreams : [] * livestreampb . MuxStream {
{
Key : "mux_video" ,
ElementaryStreams : [] string { "es_video" },
SegmentSettings : & livestreampb . SegmentSettings {
SegmentDuration : & duration . Duration {
Seconds : 2 ,
},
},
},
{
Key : "mux_audio" ,
ElementaryStreams : [] string { "es_audio" },
SegmentSettings : & livestreampb . SegmentSettings {
SegmentDuration : & duration . Duration {
Seconds : 2 ,
},
},
},
},
Manifests : [] * livestreampb . Manifest {
{
FileName : "manifest.m3u8" ,
Type : livestreampb . Manifest_HLS ,
MuxStreams : [] string { "mux_video" , "mux_audio" },
MaxSegmentCount : 5 ,
},
},
},
}
// Creates the channel.
op , err := client . CreateChannel ( ctx , req )
if err != nil {
return fmt . Errorf ( "CreateChannel: %w" , err )
}
response , err := op . Wait ( ctx )
if err != nil {
return fmt . Errorf ( "Wait: %w" , err )
}
fmt . Fprintf ( w , "Channel: %v" , response . Name )
return nil
}
Java
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Java API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.video.livestream.v1. AudioStream ;
import com.google.cloud.video.livestream.v1. Channel ;
import com.google.cloud.video.livestream.v1. Channel .Output ;
import com.google.cloud.video.livestream.v1. CreateChannelRequest ;
import com.google.cloud.video.livestream.v1. ElementaryStream ;
import com.google.cloud.video.livestream.v1. InputAttachment ;
import com.google.cloud.video.livestream.v1. InputAttachment . AutomaticFailover ;
import com.google.cloud.video.livestream.v1. InputName ;
import com.google.cloud.video.livestream.v1. LivestreamServiceClient ;
import com.google.cloud.video.livestream.v1. LocationName ;
import com.google.cloud.video.livestream.v1. Manifest ;
import com.google.cloud.video.livestream.v1. Manifest . ManifestType ;
import com.google.cloud.video.livestream.v1. MuxStream ;
import com.google.cloud.video.livestream.v1. SegmentSettings ;
import com.google.cloud.video.livestream.v1. VideoStream ;
import com.google.cloud.video.livestream.v1. VideoStream . H264CodecSettings ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class CreateChannelWithBackupInput {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String location = "us-central1" ;
String channelId = "my-channel-id" ;
String primaryInputId = "my-primary-input-id" ;
String backupInputId = "my-backup-input-id" ;
String outputUri = "gs://my-bucket/my-output-folder/" ;
createChannelWithBackupInput (
projectId , location , channelId , primaryInputId , backupInputId , outputUri );
}
public static void createChannelWithBackupInput (
String projectId ,
String location ,
String channelId ,
String primaryInputId ,
String backupInputId ,
String outputUri )
throws InterruptedException , ExecutionException , TimeoutException , IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
LivestreamServiceClient livestreamServiceClient = LivestreamServiceClient . create ();
VideoStream videoStream =
VideoStream . newBuilder ()
. setH264 (
H264CodecSettings . newBuilder ()
. setProfile ( "high" )
. setBitrateBps ( 3000000 )
. setFrameRate ( 30 )
. setHeightPixels ( 720 )
. setWidthPixels ( 1280 ))
. build ();
AudioStream audioStream =
AudioStream . newBuilder (). setCodec ( "aac" ). setChannelCount ( 2 ). setBitrateBps ( 160000 ). build ();
var createChannelRequest =
CreateChannelRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setChannelId ( channelId )
. setChannel (
Channel . newBuilder ()
. addInputAttachments (
0 ,
InputAttachment . newBuilder ()
. setKey ( "my-primary-input" )
. setInput (
InputName . of ( projectId , location , primaryInputId ). toString ())
. setAutomaticFailover (
AutomaticFailover . newBuilder ()
. addInputKeys ( "my-backup-input" )
. build ())
. build ())
. addInputAttachments (
1 ,
InputAttachment . newBuilder ()
. setKey ( "my-backup-input" )
. setInput (
InputName . of ( projectId , location , backupInputId ). toString ()))
. setOutput ( Output . newBuilder (). setUri ( outputUri ). build ())
. addElementaryStreams (
ElementaryStream . newBuilder ()
. setKey ( "es_video" )
. setVideoStream ( videoStream ))
. addElementaryStreams (
ElementaryStream . newBuilder ()
. setKey ( "es_audio" )
. setAudioStream ( audioStream ))
. addMuxStreams (
MuxStream . newBuilder ()
. setKey ( "mux_video" )
. addElementaryStreams ( "es_video" )
. setSegmentSettings (
SegmentSettings . newBuilder ()
. setSegmentDuration (
Duration . newBuilder (). setSeconds ( 2 ). build ())
. build ())
. build ())
. addMuxStreams (
MuxStream . newBuilder ()
. setKey ( "mux_audio" )
. addElementaryStreams ( "es_audio" )
. setSegmentSettings (
SegmentSettings . newBuilder ()
. setSegmentDuration (
Duration . newBuilder (). setSeconds ( 2 ). build ())
. build ())
. build ())
. addManifests (
Manifest . newBuilder ()
. setFileName ( "manifest.m3u8" )
. setType ( ManifestType . HLS )
. addMuxStreams ( "mux_video" )
. addMuxStreams ( "mux_audio" )
. setMaxSegmentCount ( 5 )
. build ()))
. build ();
// First API call in a project can take up to 10 minutes.
Channel result =
livestreamServiceClient
. createChannelAsync ( createChannelRequest )
. get ( 10 , TimeUnit . MINUTES );
System . out . println ( "Channel: " + result . getName ());
livestreamServiceClient . close ();
}
}
Node.js
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Node.js API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// projectId = 'my-project-id';
// location = 'us-central1';
// channelId = 'my-channel';
// primaryInputId = 'my-primary-input';
// backupInputId = 'my-backup-input';
// outputUri = 'gs://my-bucket/my-output-folder/';
// Imports the Livestream library
const { LivestreamServiceClient } = require ( ' @google-cloud/livestream ' ). v1 ;
// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient ();
async function createChannelWithBackupInput () {
// Construct request
const request = {
parent : livestreamServiceClient . locationPath ( projectId , location ),
channelId : channelId ,
channel : {
inputAttachments : [
{
key : 'my-primary-input' ,
input : livestreamServiceClient . inputPath (
projectId ,
location ,
primaryInputId
),
automaticFailover : {
inputKeys : [ 'my-backup-input' ],
},
},
{
key : 'my-backup-input' ,
input : livestreamServiceClient . inputPath (
projectId ,
location ,
backupInputId
),
},
],
output : {
uri : outputUri ,
},
elementaryStreams : [
{
key : 'es_video' ,
videoStream : {
h264 : {
profile : 'high' ,
heightPixels : 720 ,
widthPixels : 1280 ,
bitrateBps : 3000000 ,
frameRate : 30 ,
},
},
},
{
key : 'es_audio' ,
audioStream : {
codec : 'aac' ,
channelCount : 2 ,
bitrateBps : 160000 ,
},
},
],
muxStreams : [
{
key : 'mux_video' ,
elementaryStreams : [ 'es_video' ],
segmentSettings : {
seconds : 2 ,
},
},
{
key : 'mux_audio' ,
elementaryStreams : [ 'es_audio' ],
segmentSettings : {
seconds : 2 ,
},
},
],
manifests : [
{
fileName : 'manifest.m3u8' ,
type : ' HLS ' ,
muxStreams : [ 'mux_video' , 'mux_audio' ],
maxSegmentCount : 5 ,
},
],
},
};
// Run request
const [ operation ] = await livestreamServiceClient . createChannel ( request );
const response = await operation . promise ();
const [ channel ] = response ;
console . log ( `Channel: ${ channel . name } ` );
}
createChannelWithBackupInput ();
PHP
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API PHP API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Video\LiveStream\V1\AudioStream;
use Google\Cloud\Video\LiveStream\V1\Channel;
use Google\Cloud\Video\LiveStream\V1\ElementaryStream;
use Google\Cloud\Video\LiveStream\V1\InputAttachment;
use Google\Cloud\Video\LiveStream\V1\Client\LivestreamServiceClient;
use Google\Cloud\Video\LiveStream\V1\CreateChannelRequest;
use Google\Cloud\Video\LiveStream\V1\Manifest;
use Google\Cloud\Video\LiveStream\V1\MuxStream;
use Google\Cloud\Video\LiveStream\V1\SegmentSettings;
use Google\Cloud\Video\LiveStream\V1\VideoStream;
use Google\Protobuf\Duration;
/**
* Creates a channel with a backup input.
*
* @param string $callingProjectId The project ID to run the API call under
* @param string $location The location of the channel
* @param string $channelId The ID of the channel to be created
* @param string $primaryInputId The ID of the primary input for the channel
* @param string $backupInputId The ID of the backup input for the channel
* @param string $outputUri Uri of the channel output folder in a
* Cloud Storage bucket. (e.g.
* "gs://my-bucket/my-output-folder/")
*/
function create_channel_with_backup_input(
string $callingProjectId,
string $location,
string $channelId,
string $primaryInputId,
string $backupInputId,
string $outputUri
): void {
// Instantiate a client.
$livestreamClient = new LivestreamServiceClient();
$parent = $livestreamClient->locationName($callingProjectId, $location);
$channelName = $livestreamClient->channelName($callingProjectId, $location, $channelId);
$primaryInputName = $livestreamClient->inputName($callingProjectId, $location, $primaryInputId);
$backupInputName = $livestreamClient->inputName($callingProjectId, $location, $backupInputId);
$channel = (new Channel())
->setName($channelName)
->setInputAttachments([
new InputAttachment([
'key' => 'my-primary-input',
'input' => $primaryInputName,
'automatic_failover' => new InputAttachment\AutomaticFailover([
'input_keys' => ['my-backup-input']
])
]),
new InputAttachment([
'key' => 'my-backup-input',
'input' => $backupInputName
])
])
->setElementaryStreams([
new ElementaryStream([
'key' => 'es_video',
'video_stream' => new VideoStream([
'h264' => new VideoStream\H264CodecSettings([
'profile' => 'high',
'width_pixels' => 1280,
'height_pixels' => 720,
'bitrate_bps' => 3000000,
'frame_rate' => 30
])
]),
]),
new ElementaryStream([
'key' => 'es_audio',
'audio_stream' => new AudioStream([
'codec' => 'aac',
'channel_count' => 2,
'bitrate_bps' => 160000
])
])
])
->setOutput(new Channel\Output(['uri' => $outputUri]))
->setMuxStreams([
new MuxStream([
'key' => 'mux_video',
'elementary_streams' => ['es_video'],
'segment_settings' => new SegmentSettings([
'segment_duration' => new Duration(['seconds' => 2])
])
]),
new MuxStream([
'key' => 'mux_audio',
'elementary_streams' => ['es_audio'],
'segment_settings' => new SegmentSettings([
'segment_duration' => new Duration(['seconds' => 2])
])
]),
])
->setManifests([
new Manifest([
'file_name' => 'manifest.m3u8',
'type' => Manifest\ManifestType::HLS,
'mux_streams' => ['mux_video', 'mux_audio'],
'max_segment_count' => 5
])
]);
// Run the channel creation request. The response is a long-running operation ID.
$request = (new CreateChannelRequest())
->setParent($parent)
->setChannel($channel)
->setChannelId($channelId);
$operationResponse = $livestreamClient->createChannel($request);
$operationResponse->pollUntilComplete();
if ($operationResponse->operationSucceeded()) {
$result = $operationResponse->getResult();
// Print results
printf('Channel: %s' . PHP_EOL, $result->getName());
} else {
$error = $operationResponse->getError();
// handleError($error)
}
}
Python
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Python API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import argparse
from google.cloud.video import live_stream_v1
from google.cloud.video.live_stream_v1.services.livestream_service import (
LivestreamServiceClient ,
)
from google.protobuf import duration_pb2 as duration
def create_channel_with_backup_input (
project_id : str ,
location : str ,
channel_id : str ,
primary_input_id : str ,
backup_input_id : str ,
output_uri : str ,
) - > live_stream_v1 . types . Channel :
"""Creates a channel.
Args:
project_id: The GCP project ID.
location: The location in which to create the channel.
channel_id: The user-defined channel ID.
primary_input_id: The user-defined primary input ID.
backup_input_id: The user-defined backup input ID.
output_uri: Uri of the channel output folder in a Cloud Storage bucket."""
client = LivestreamServiceClient ()
parent = f "projects/ { project_id } /locations/ { location } "
primary_input = (
f "projects/ { project_id } /locations/ { location } /inputs/ { primary_input_id } "
)
backup_input = (
f "projects/ { project_id } /locations/ { location } /inputs/ { backup_input_id } "
)
name = f "projects/ { project_id } /locations/ { location } /channels/ { channel_id } "
channel = live_stream_v1 . types . Channel (
name = name ,
input_attachments = [
live_stream_v1 . types . InputAttachment (
key = "my-primary-input" ,
input = primary_input ,
automatic_failover = live_stream_v1 . types . InputAttachment . AutomaticFailover (
input_keys = [ "my-backup-input" ],
),
),
live_stream_v1 . types . InputAttachment (
key = "my-backup-input" ,
input = backup_input ,
),
],
output = live_stream_v1 . types . Channel . Output (
uri = output_uri ,
),
elementary_streams = [
live_stream_v1 . types . ElementaryStream (
key = "es_video" ,
video_stream = live_stream_v1 . types . VideoStream (
h264 = live_stream_v1 . types . VideoStream . H264CodecSettings (
profile = "high" ,
width_pixels = 1280 ,
height_pixels = 720 ,
bitrate_bps = 3000000 ,
frame_rate = 30 ,
),
),
),
live_stream_v1 . types . ElementaryStream (
key = "es_audio" ,
audio_stream = live_stream_v1 . types . AudioStream (
codec = "aac" , channel_count = 2 , bitrate_bps = 160000
),
),
],
mux_streams = [
live_stream_v1 . types . MuxStream (
key = "mux_video" ,
elementary_streams = [ "es_video" ],
segment_settings = live_stream_v1 . types . SegmentSettings (
segment_duration = duration . Duration (
seconds = 2 ,
),
),
),
live_stream_v1 . types . MuxStream (
key = "mux_audio" ,
elementary_streams = [ "es_audio" ],
segment_settings = live_stream_v1 . types . SegmentSettings (
segment_duration = duration . Duration (
seconds = 2 ,
),
),
),
],
manifests = [
live_stream_v1 . types . Manifest (
file_name = "manifest.m3u8" ,
type_ = "HLS" ,
mux_streams = [ "mux_video" , "mux_audio" ],
max_segment_count = 5 ,
),
],
)
operation = client . create_channel (
parent = parent , channel = channel , channel_id = channel_id
)
response = operation . result ( 600 )
print ( f "Channel: { response . name } " )
return response
Ruby
To learn how to install and use the client library for Live Stream API, see
Live Stream API client libraries .
For more information, see the
Live Stream API Ruby API
reference documentation .
To authenticate to Live Stream API, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/video/live_stream"
##
# Create a channel with a failover backup input
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param location [String] The location (e.g. "us-central1")
# @param channel_id [String] Your channel name (e.g. "my-channel")
# @param primary_input_id [String] Your primary input name (e.g. "my-primary-input")
# @param backup_input_id [String] Your backup input name (e.g. "my-backup-input")
# @param output_uri [String] Uri of the channel output folder in a Cloud Storage
# bucket. (e.g. "gs://my-bucket/my-output-folder/";)
#
def create_channel_with_backup_input project_id :, location :, channel_id :, primary_input_id :, backup_input_id :, output_uri :
# Create a Live Stream client.
client = Google :: Cloud :: Video :: LiveStream . livestream_service
# Build the resource name of the parent.
parent = client . location_path project : project_id , location : location
# Build the resource name of the inputs.
primary_input_path = client . input_path project : project_id , location : location , input : primary_input_id
backup_input_path = client . input_path project : project_id , location : location , input : backup_input_id
# Set the channel fields.
new_channel = {
input_attachments : [
{
key : "my-primary-input" ,
input : primary_input_path ,
automatic_failover : {
input_keys : [ "my-backup-input" ]
}
},
{
key : "my-backup-input" ,
input : backup_input_path
}
] ,
output : {
uri : output_uri
},
elementary_streams : [
{
key : "es_video" ,
video_stream : {
h264 : {
profile : "high" ,
bitrate_bps : 3_000_000 ,
frame_rate : 30 ,
height_pixels : 720 ,
width_pixels : 1280
}
}
},
{
key : "es_audio" ,
audio_stream : {
codec : "aac" ,
channel_count : 2 ,
bitrate_bps : 160_000
}
}
] ,
mux_streams : [
{
key : "mux_video" ,
elementary_streams : [
"es_video"
] ,
segment_settings : {
segment_duration : {
seconds : 2
}
}
},
{
key : "mux_audio" ,
elementary_streams : [
"es_audio"
] ,
segment_settings : {
segment_duration : {
seconds : 2
}
}
}
] ,
manifests : [
{
file_name : "main.m3u8" ,
type : Google :: Cloud :: Video :: LiveStream :: V1 :: Manifest :: ManifestType :: HLS ,
mux_streams : [
"mux_video" , "mux_audio"
] ,
max_segment_count : 5
}
]
}
operation = client . create_channel parent : parent , channel : new_channel , channel_id : channel_id
# The returned object is of type Gapic::Operation. You can use this
# object to check the status of an operation, cancel it, or wait
# for results. Here is how to block until completion:
operation . wait_until_done!
# Print the channel name.
puts "Channel: #{ operation . response . name } "
end
Manually switch the input
To manually switch the input from the primary input to the backup input (for
example, my-primary-input to my-backup-input ), create a
channel event .
After a manual switch, you can disconnect and reconnect my-primary-input as desired. The
channel doesn't switch to this input on reconnection, as it would under the
default automatic failover settings.
To switch back to my-primary-input , do either of the following:
Create a new
inputSwitch
event where inputKey is set to my-primary-input . This event switches
back to the primary input without restoring automatic failover settings.
Update the channel to enable automatic failover. See the
Switch input event
for more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Storage Transfer Service client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/libraries
  title: "Storage Transfer Service client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
Storage Transfer Service client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Google Storage Transfer API. Read more about the client
libraries for Cloud APIs, including the older Google API Client Libraries, in
Client Libraries Explained .
For information about updating from the Google API Client Library to the
Cloud Client Library that is described on this page, see the
Storage Transfer Service Migration Guide .
Installing the client library
C++
For more information about installing the C++ library,
see the Setting up a C++ development environment guide.
C#
For more information, see Setting Up a C# Development Environment .
If you are using Visual Studio 2017 or higher, open a nuget package manager
window and type the following:
Install-Package Google.Cloud.StorageTransfer.V1
If you are using .NET Core command-line interface tools to install your
dependencies, run the following command:
dotnet add package Google.Cloud.StorageTransfer.V1
Go
For more information, see Setting Up a Go Development Environment .
go get cloud.google.com/go/storagetransfer
Java
For more information, see Setting Up a Java Development Environment .
If you are using Maven, add this to your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - storage - transfer < / artifactId >
< version>1 .80.0 < / version >
< / dependency >
If you are using Gradle without BOM, add this to your dependencies:
implementation ' com . google . cloud : google - cloud - storage - transfer : 1.80.0 '
Node.js
For more information, see Setting Up a Node.js Development Environment .
npm install @google-cloud/storage-transfer
PHP
For more information, see Using PHP on Google Cloud .
composer require google/cloud
Python
For more information, see Setting Up a Python Development Environment .
pip install --upgrade google-cloud-storage-transfer
Ruby
For more information, see Setting Up a Ruby Development Environment .
gem install google-cloud-storage_transfer
Setting up authentication
When you use client libraries, you use Application Default Credentials to
authenticate. For more information, see
Authenticate using client libraries .
Using the client library
The following examples show how to use the client library.
Before using these samples, follow the instructions in
Configuring access to set up the
required permissions.
C++
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
#include "google/cloud/storagetransfer/v1/storage_transfer_client.h"
#include <iostream>
#include <string>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
namespace storagetransfer = :: google :: cloud :: storagetransfer_v1 ;
auto client = storagetransfer :: StorageTransferServiceClient (
storagetransfer :: MakeStorageTransferServiceConnection ());
:: google :: storagetransfer :: v1 :: ListTransferJobsRequest request ;
request . set_filter ( R " ""( {"projectId": " )"" " + std :: string { argv [ 1 ]} + " \" }" );
for ( auto r : client . ListTransferJobs ( request )) {
if ( ! r ) throw std :: move ( r ). status ();
std :: cout << r - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service C# API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.StorageTransfer.V1 ;
using System ;
public class QuickStartSample
{
/// <summary>
/// Creates an one-time transfer job from a Google Cloud storage bucket to another bucket.
/// </summary>
/// <param name="projectId">The ID of the Google Cloud project.</param>
/// <param name="sourceBucket">The GCS bucket to transfer data from.</param>
/// <param name="sinkBucket">The GCS bucket to transfer data to.</param>
public TransferJob QuickStart (
string projectId = "my-project-id" ,
string sourceBucket = "my-source-bucket" ,
string sinkBucket = "my-sink-bucket" )
{
TransferJob transferJob = new TransferJob
{
ProjectId = projectId ,
TransferSpec = new TransferSpec
{
GcsDataSink = new GcsData { BucketName = sinkBucket },
GcsDataSource = new GcsData { BucketName = sourceBucket }
},
Status = TransferJob . Types . Status . Enabled
};
StorageTransferServiceClient client = StorageTransferServiceClient . Create ();
TransferJob response = client . CreateTransferJob ( new CreateTransferJobRequest { TransferJob = transferJob });
client . RunTransferJob ( new RunTransferJobRequest
{
JobName = response . Name ,
ProjectId = projectId
});
Console . WriteLine ( $"Created and ran transfer job from {sourceBucket} to {sinkBucket} with name {response. Name }" );
return response ;
}
}
Go
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Go API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
storagetransfer "cloud.google.com/go/storagetransfer/apiv1"
"cloud.google.com/go/storagetransfer/apiv1/storagetransferpb"
)
// quickstart creates and runs a transfer job between two GCS buckets.
func quickstart ( w io . Writer , projectID string , sourceGCSBucket string , sinkGCSBucket string ) ( * storagetransferpb . TransferJob , error ) {
// Your Google Cloud Project ID
// projectID := "my-project-id"
// The name of the GCS bucket to transfer data from
// sourceGCSBucket := "my-source-bucket"
// The name of the GCS bucket to transfer data to
// sinkGCSBucket := "my-sink-bucket"
ctx := context . Background ()
client , err := storagetransfer . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storagetransfer.NewClient: %w" , err )
}
defer client . Close ()
req := & storagetransferpb . CreateTransferJobRequest {
TransferJob : & storagetransferpb . TransferJob {
ProjectId : projectID ,
TransferSpec : & storagetransferpb . TransferSpec {
DataSource : & storagetransferpb . TransferSpec_GcsDataSource {
GcsDataSource : & storagetransferpb . GcsData { BucketName : sourceGCSBucket }},
DataSink : & storagetransferpb . TransferSpec_GcsDataSink {
GcsDataSink : & storagetransferpb . GcsData { BucketName : sinkGCSBucket }},
},
Status : storagetransferpb . TransferJob_ENABLED ,
},
}
resp , err := client . CreateTransferJob ( ctx , req )
if err != nil {
return nil , fmt . Errorf ( "failed to create transfer job: %w" , err )
}
if _ , err = client . RunTransferJob ( ctx , & storagetransferpb . RunTransferJobRequest {
ProjectId : projectID ,
JobName : resp . Name ,
}); err != nil {
return nil , fmt . Errorf ( "failed to run transfer job: %w" , err )
}
fmt . Fprintf ( w , "Created and ran transfer job from %v to %v with name %v" , sourceGCSBucket , sinkGCSBucket , resp . Name )
return resp , nil
}
Java
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Java API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto . CreateTransferJobRequest ;
import com.google.storagetransfer.v1.proto. TransferProto . RunTransferJobRequest ;
import com.google.storagetransfer.v1.proto. TransferTypes . GcsData ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferSpec ;
public class QuickstartSample {
/** Quickstart sample using transfer service to transfer from one GCS bucket to another. */
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
// Your Google Cloud Project ID
String projectId = "your-project-id" ;
// The name of the source GCS bucket to transfer objects from
String gcsSourceBucket = "your-source-gcs-source-bucket" ;
// The name of the GCS bucket to transfer objects to
String gcsSinkBucket = "your-sink-gcs-bucket" ;
quickStartSample ( projectId , gcsSourceBucket , gcsSinkBucket );
}
public static void quickStartSample (
String projectId , String gcsSourceBucket , String gcsSinkBucket ) throws Exception {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources,
// or use "try-with-close" statement to do this automatically.
try ( StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ()) {
TransferJob transferJob =
TransferJob . newBuilder ()
. setProjectId ( projectId )
. setTransferSpec (
TransferSpec . newBuilder ()
. setGcsDataSource ( GcsData . newBuilder (). setBucketName ( gcsSourceBucket ))
. setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsSinkBucket )))
. setStatus ( TransferJob . Status . ENABLED )
. build ();
TransferJob response =
storageTransfer . createTransferJob (
CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ());
storageTransfer
. runTransferJobAsync (
RunTransferJobRequest . newBuilder ()
. setProjectId ( projectId )
. setJobName ( response . getName ())
. build ())
. get ();
System . out . println (
"Created and ran transfer job between two GCS buckets with name " + response . getName ());
}
}
}
Node.js
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Node.js API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
const {
StorageTransferServiceClient ,
} = require ( ' @google-cloud/storage-transfer ' );
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// Your project id
// const projectId = 'my-project'
// The ID of the GCS bucket to transfer data from
// const gcsSourceBucket = 'my-source-bucket'
// The ID of the GCS bucket to transfer data to
// const gcsSinkBucket = 'my-sink-bucket'
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Creates a one-time transfer job.
*/
async function quickstart () {
// Creates a request to transfer from the source bucket to
// the sink bucket
const createRequest = {
transferJob : {
projectId : projectId ,
transferSpec : {
gcsDataSource : { bucketName : gcsSourceBucket },
gcsDataSink : { bucketName : gcsSinkBucket },
},
status : ' ENABLED ' ,
},
};
// Runs the request and creates the job
const [ transferJob ] = await client . createTransferJob ( createRequest );
const runRequest = {
jobName : transferJob . name ,
projectId : projectId ,
};
await client . runTransferJob ( runRequest );
console . log (
`Created and ran a transfer job from ${ gcsSourceBucket } to ${ gcsSinkBucket } with name ${ transferJob . name } `
);
}
quickstart ();
PHP
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service PHP API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\StorageTransfer\V1\Client\StorageTransferServiceClient;
use Google\Cloud\StorageTransfer\V1\CreateTransferJobRequest;
use Google\Cloud\StorageTransfer\V1\GcsData;
use Google\Cloud\StorageTransfer\V1\RunTransferJobRequest;
use Google\Cloud\StorageTransfer\V1\TransferJob;
use Google\Cloud\StorageTransfer\V1\TransferJob\Status;
use Google\Cloud\StorageTransfer\V1\TransferSpec;
/**
* Creates and runs a transfer job between two GCS buckets
*
* @param string $projectId Your Google Cloud project ID.
* @param string $sourceGcsBucketName The name of the GCS bucket to transfer objects from.
* @param string $sinkGcsBucketName The name of the GCS bucket to transfer objects to.
*/
function quickstart(
string $projectId,
string $sourceGcsBucketName,
string $sinkGcsBucketName
): void {
// $project = 'my-project-id';
// $sourceGcsBucketName = 'my-source-bucket';
// $sinkGcsBucketName = 'my-sink-bucket';
$transferJob = new TransferJob([
'project_id' => $projectId,
'transfer_spec' => new TransferSpec([
'gcs_data_sink' => new GcsData(['bucket_name' => $sinkGcsBucketName]),
'gcs_data_source' => new GcsData(['bucket_name' => $sourceGcsBucketName])
]),
'status' => Status::ENABLED
]);
$client = new StorageTransferServiceClient();
$createRequest = (new CreateTransferJobRequest())
->setTransferJob($transferJob);
$response = $client->createTransferJob($createRequest);
$runRequest = (new RunTransferJobRequest())
->setJobName($response->getName())
->setProjectId($projectId);
$client->runTransferJob($runRequest);
printf('Created and ran transfer job from %s to %s with name %s ' . PHP_EOL, $sourceGcsBucketName, $sinkGcsBucketName, $response->getName());
}
Python
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Python API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import storage_transfer
def create_one_time_transfer (
project_id : str = "my_project_id" ,
source_bucket : str = "my_source_bucket" ,
sink_bucket : str = "my_sink_bucket" ,
):
"""Creates a one-time transfer job."""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# Google Cloud Storage source bucket name
# source_bucket = 'my-gcs-source-bucket'
# Google Cloud Storage destination bucket name
# sink_bucket = 'my-gcs-destination-bucket'
transfer_job_request = storage_transfer . CreateTransferJobRequest (
{
"transfer_job" : {
"project_id" : project_id ,
"status" : storage_transfer . TransferJob . Status . ENABLED ,
"transfer_spec" : {
"gcs_data_source" : {
"bucket_name" : source_bucket ,
},
"gcs_data_sink" : {
"bucket_name" : sink_bucket ,
},
},
}
}
)
transfer_job = client . create_transfer_job ( transfer_job_request )
client . run_transfer_job ({ "job_name" : transfer_job . name , "project_id" : project_id })
print ( f "Created and ran transfer job: { transfer_job . name } " )
Ruby
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Ruby API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def quickstart project_id :, gcs_source_bucket :, gcs_sink_bucket :
# Your Google Cloud Project ID
# project_id = "your-project_id"
# The name of the source GCS bucket to transfer objects from
# gcs_source_bucket = "your-source-gcs-source-bucket"
# The name of the GCS bucket to transfer objects to
# gcs_sink_bucket = "your-sink-gcs-bucket"
require "google/cloud/storage_transfer"
transfer_job = {
project_id : project_id ,
transfer_spec : {
gcs_data_source : {
bucket_name : gcs_source_bucket
},
gcs_data_sink : {
bucket_name : gcs_sink_bucket
}
},
status : :ENABLED
}
client = Google :: Cloud :: StorageTransfer . storage_transfer_service
transfer_job_response = client . create_transfer_job transfer_job : transfer_job
run_request = {
project_id : project_id ,
job_name : transfer_job_response . name
}
client . run_transfer_job run_request
puts "Created and ran transfer job between #{ gcs_source_bucket } and #{ gcs_sink_bucket } with name #{ transfer_job_response . name } "
end
Using the client library with Cloud Shell Editor
Java
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Node.js
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Python
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Additional resources
C++
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
C#
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Go
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Java
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Node.js
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
PHP
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Python
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Ruby
API Reference Documentation
Source Code
GitHub Issue Tracker
Stack Overflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

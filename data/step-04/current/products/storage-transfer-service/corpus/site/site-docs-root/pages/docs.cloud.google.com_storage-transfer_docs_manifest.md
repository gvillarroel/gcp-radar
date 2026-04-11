---
title: "Transfer specific files or objects using a manifest \_|\_ Storage Transfer\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/manifest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/manifest
  title: "Transfer specific files or objects using a manifest \_|\_ Storage Transfer\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Transfer specific files or objects using a manifest
Stay organized with collections
Save and categorize content based on your preferences.
Storage Transfer Service supports the transfer of specific files or objects, which
are specified using a manifest . A manifest is a CSV file, uploaded to
Cloud Storage, that contains a list of files or objects for
Storage Transfer Service to act upon.
A manifest can be used for the following transfers:
From AWS S3, S3-compatible storage, Azure Blobstore, or Cloud Storage to a
Cloud Storage bucket.
From a file system to a Cloud Storage bucket.
From a Cloud Storage bucket to a file system.
Between two file systems.
From a publicly-accessible HTTP/HTTPS source to a Cloud Storage
bucket. Follow the instructions in
Create a URL list as the manifest
format is unique for URL lists.
Create a manifest
Manifest files have the following requirements:
Manifests must be formatted as CSV.
They can contain any UTF-8 characters.
The first column must be a filename or object name. The name is relative to
the root path or the bucket and folder specified in the transfer job; see
File system transfers and
Object storage transfers for details.
Manifest files do not support wildcards. Folder names without a file or
object name are not supported.
If a file or object name contains a comma, the name must be enclosed in
double-quotes. For example, "doe,john.txt" .
There is no limit to the size of the manifest file.
We recommend testing your transfer with a small subset of files or objects to
avoid unnecessary API calls due to configuration errors.
You can monitor the status of file transfers from the
Transfer Jobs page .
Files or objects that fail to transfer are listed in the
transfer logs .
File system transfers
To create a manifest of files on a file system, create a CSV file with a single
column containing the file paths relative to the root directory specified in
the transfer job creation.
For example, to transfer the following file system files:
File path
rootdir/dir1/subdir1/file1.txt
rootdir/file2.txt
rootdir/dir2/subdir1/file3.txt
Your manifest should look like the following example:
dir1/subdir1/file1.txt
file2.txt
dir2/subdir1/file3.txt
Save the manifest file with any filename, and a .csv extension.
Object storage transfers
To create a manifest of objects, create a CSV file whose first column
contains the object names relative to the bucket name and path specified
in the transfer job creation. All objects must be in the same bucket.
You can also specify an optional second column with the Cloud Storage
generation number of the specific version to transfer.
For example, you may wish to transfer the following objects:
Object path
Cloud Storage generation number
SOURCE_PATH/object1.pdf
1664826685911832
SOURCE_PATH/object2.pdf
SOURCE_PATH/object3.pdf
1664826610699837
Your manifest should look like the following example:
object1.pdf,1664826685911832
object2.pdf
object3.pdf,1664826610699837
Save the manifest file with any filename, and a .csv extension.
HTTP/HTTPS transfers
To transfer specific files from an HTTP or HTTPS source, refer to the
instructions in Create a URL list .
Publish the manifest
Once you've created the manifest, you must make it available to
Storage Transfer Service. Storage Transfer Service can access the file in a Cloud Storage
bucket, or on your file system.
Upload the manifest to Cloud Storage
You can store the manifest file in any Cloud Storage bucket.
The service agent running the
transfer must have storage.objects.get permission for the bucket containing
the manifest. See
Grant the required permissions
for instructions on finding the service agent ID, and granting permissions to
that service agent on a bucket.
For instructions on uploading the manifest to a bucket, see
Upload objects in the Cloud Storage
documentation.
For example, to use the gcloud CLI to upload a file to Cloud Storage,
use the gcloud storage cp command:
gcloud storage cp MANIFEST.CSV gs:// DESTINATION_BUCKET_NAME /
Replace the following:
MANIFEST.CSV is the local path to your
manifest file. For example, Desktop/manifest01.csv .
DESTINATION_BUCKET_NAME is the name of the
bucket to which you are uploading your object. For example,
my-bucket .
If successful, the response looks like the following example:
Completed files 1/1 | 164.3kiB/164.3kiB
You can encrypt a manifest
using customer-managed Cloud KMS encryption keys . In
this case, ensure that any service accounts accessing the manifest are
assigned the applicable encryption keys .
Customer-supplied keys are not supported.
Store the manifest on a file system
You can store the manifest file on your source or destination file system.
The location of the file must be accessible to the transfer agents. If you
restrict directory access
for your agents, make sure the manifest file is located within a mounted
directory.
Start a transfer
Do not modify the manifest file until a transfer operation completes.
We recommend that you lock the manifest file when a transfer is taking
place.
Cloud console
To start a transfer with a manifest from the Cloud console:
Follow the instructions in
Create transfers to select your
source, destination, and options.
In the final step, Choose settings , select the checkbox named
Provide list of files to transfer via manifest file .
Enter the manifest file location.
gcloud
To transfer the files or objects that are listed in the manifest, include the
--manifest-file= MANIFEST_FILE flag with your
gcloud transfer jobs create command.
gcloud transfer jobs create SOURCE DESTINATION \
--manifest-file = MANIFEST_FILE
MANIFEST_FILE can be any of the following values:
The path to the CSV file in a Cloud Storage bucket:
--manifest-file=gs://my_bucket/sample_manifest.csv
See
Upload the manifest to Cloud Storage
for details on required permissions, if the bucket or file is not public.
The relative path from the file system SOURCE , including any path
that was specified:
--manifest-file=source://relative_path/sample_manifest.csv
The relative path from the file system DESTINATION , including
any path that was specified:
--manifest-file=destination://relative_path/sample_manifest.csv
REST + Client libraries
REST
To transfer the files or objects that are listed in the manifest, make
a createTransferJob API call that specifies a
transferSpec with the
transferManifest field added. For example:
POST https://storagetransfer.googleapis.com/v1/transferJobs
...
"transferSpec": {
"posixDataSource": {
"rootDirectory": "/home/",
},
"gcsDataSink": {
"bucketName": "GCS_NEARLINE_SINK_NAME",
"path": "GCS_SINK_PATH",
},
"transferManifest": {
"location": "gs://my_bucket/sample_manifest.csv"
}
}
The manifest file can be stored in a Cloud Storage bucket, or on the
source or destination file system. Cloud Storage buckets must use the
gs:// prefix and include the full path, including the bucket
name. File system locations must use a source:// or
destination:// prefix and are relative to the file system source
or destination, and optional root directory.
Go
import (
"context"
"fmt"
"io"
storagetransfer "cloud.google.com/go/storagetransfer/apiv1"
"cloud.google.com/go/storagetransfer/apiv1/storagetransferpb"
)
func transferUsingManifest ( w io . Writer , projectID string , sourceAgentPoolName string , rootDirectory string , gcsSinkBucket string , manifestBucket string , manifestObjectName string ) ( * storagetransferpb . TransferJob , error ) {
// Your project id
// projectId := "myproject-id"
// The agent pool associated with the POSIX data source. If not provided, defaults to the default agent
// sourceAgentPoolName := "projects/my-project/agentPools/transfer_service_default"
// The root directory path on the source filesystem
// rootDirectory := "/directory/to/transfer/source"
// The ID of the GCS bucket to transfer data to
// gcsSinkBucket := "my-sink-bucket"
// The ID of the GCS bucket that contains the manifest file
// manifestBucket := "my-manifest-bucket"
// The name of the manifest file in manifestBucket that specifies which objects to transfer
// manifestObjectName := "path/to/manifest.csv"
ctx := context . Background ()
client , err := storagetransfer . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storagetransfer.NewClient: %w" , err )
}
defer client . Close ()
manifestLocation := "gs://" + manifestBucket + "/" + manifestObjectName
req := & storagetransferpb . CreateTransferJobRequest {
TransferJob : & storagetransferpb . TransferJob {
ProjectId : projectID ,
TransferSpec : & storagetransferpb . TransferSpec {
SourceAgentPoolName : sourceAgentPoolName ,
DataSource : & storagetransferpb . TransferSpec_PosixDataSource {
PosixDataSource : & storagetransferpb . PosixFilesystem { RootDirectory : rootDirectory },
},
DataSink : & storagetransferpb . TransferSpec_GcsDataSink {
GcsDataSink : & storagetransferpb . GcsData { BucketName : gcsSinkBucket },
},
TransferManifest : & storagetransferpb . TransferManifest { Location : manifestLocation },
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
fmt . Fprintf ( w , "Created and ran transfer job from %v to %v using manifest file %v with name %v" , rootDirectory , gcsSinkBucket , manifestLocation , resp . Name )
return resp , nil
}
Java
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto ;
import com.google.storagetransfer.v1.proto. TransferTypes . GcsData ;
import com.google.storagetransfer.v1.proto. TransferTypes . PosixFilesystem ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferManifest ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferSpec ;
import java.io.IOException ;
public class TransferUsingManifest {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
// Your project id
String projectId = "my-project-id" ;
// The agent pool associated with the POSIX data source. If not provided, defaults to the
// default agent
String sourceAgentPoolName = "projects/my-project-id/agentPools/transfer_service_default" ;
// The root directory path on the source filesystem
String rootDirectory = "/directory/to/transfer/source" ;
// The ID of the GCS bucket to transfer data to
String gcsSinkBucket = "my-sink-bucket" ;
// The ID of the GCS bucket which has your manifest file
String manifestBucket = "my-bucket" ;
// The ID of the object in manifestBucket that specifies which files to transfer
String manifestObjectName = "path/to/manifest.csv" ;
transferUsingManifest (
projectId ,
sourceAgentPoolName ,
rootDirectory ,
gcsSinkBucket ,
manifestBucket ,
manifestObjectName );
}
public static void transferUsingManifest (
String projectId ,
String sourceAgentPoolName ,
String rootDirectory ,
String gcsSinkBucket ,
String manifestBucket ,
String manifestObjectName )
throws IOException {
String manifestLocation = "gs://" + manifestBucket + "/" + manifestObjectName ;
TransferJob transferJob =
TransferJob . newBuilder ()
. setProjectId ( projectId )
. setTransferSpec (
TransferSpec . newBuilder ()
. setSourceAgentPoolName ( sourceAgentPoolName )
. setPosixDataSource (
PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ())
. setGcsDataSink (( GcsData . newBuilder (). setBucketName ( gcsSinkBucket )). build ())
. setTransferManifest (
TransferManifest . newBuilder (). setLocation ( manifestLocation ). build ()))
. setStatus ( TransferJob . Status . ENABLED )
. build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources,
// or use "try-with-close" statement to do this automatically.
try ( StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ()) {
// Create the transfer job
TransferJob response =
storageTransfer . createTransferJob (
TransferProto . CreateTransferJobRequest . newBuilder ()
. setTransferJob ( transferJob )
. build ());
System . out . println (
"Created and ran a transfer job from "
+ rootDirectory
+ " to "
+ gcsSinkBucket
+ " using "
+ "manifest file "
+ manifestLocation
+ " with name "
+ response . getName ());
}
}
}
Node.js
// Imports the Google Cloud client library
const {
StorageTransferServiceClient ,
} = require ( ' @google-cloud/storage-transfer ' );
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// Your project id
// const projectId = 'my-project'
// The agent pool associated with the POSIX data source. Defaults to the default agent
// const sourceAgentPoolName = 'projects/my-project/agentPools/transfer_service_default'
// The root directory path on the source filesystem
// const rootDirectory = '/directory/to/transfer/source'
// The ID of the GCS bucket to transfer data to
// const gcsSinkBucket = 'my-sink-bucket'
// Transfer manifest location. Must be a `gs:` URL
// const manifestLocation = 'gs://my-bucket/sample_manifest.csv'
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Creates a request to transfer from the local file system to the sink bucket
*/
async function transferViaManifest () {
const createRequest = {
transferJob : {
projectId ,
transferSpec : {
sourceAgentPoolName ,
posixDataSource : {
rootDirectory ,
},
gcsDataSink : { bucketName : gcsSinkBucket },
transferManifest : {
location : manifestLocation ,
},
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
`Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' using manifest \` ${ manifestLocation } \` with name ${ transferJob . name } `
);
}
transferViaManifest ();
Python
from google.cloud import storage_transfer
def create_transfer_with_manifest (
project_id : str ,
description : str ,
source_agent_pool_name : str ,
root_directory : str ,
sink_bucket : str ,
manifest_location : str ,
):
"""Create a transfer from a POSIX file system to a GCS bucket using
a manifest file."""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# A useful description for your transfer job
# description = 'My transfer job'
# The agent pool associated with the POSIX data source.
# Defaults to 'projects/{project_id}/agentPools/transfer_service_default'
# source_agent_pool_name = 'projects/my-project/agentPools/my-agent'
# The root directory path on the source filesystem
# root_directory = '/directory/to/transfer/source'
# Google Cloud Storage destination bucket name
# sink_bucket = 'my-gcs-destination-bucket'
# Transfer manifest location. Must be a `gs:` URL
# manifest_location = 'gs://my-bucket/sample_manifest.csv'
transfer_job_request = storage_transfer . CreateTransferJobRequest (
{
"transfer_job" : {
"project_id" : project_id ,
"description" : description ,
"status" : storage_transfer . TransferJob . Status . ENABLED ,
"transfer_spec" : {
"source_agent_pool_name" : source_agent_pool_name ,
"posix_data_source" : {
"root_directory" : root_directory ,
},
"gcs_data_sink" : {
"bucket_name" : sink_bucket ,
},
"transfer_manifest" : { "location" : manifest_location },
},
}
}
)
result = client . create_transfer_job ( transfer_job_request )
print ( f "Created transferJob: { result . name } " )
The objects or files in the manifest aren't necessarily transferred in the
listed order.
If the manifest includes files that already exist in the destination, those
files are skipped unless the overwrite objects already existing in sink
option is specified.
If the manifest includes objects that exist in a different version in the
destination, the object in the destination is overwritten with the source
version of the object. If the destination is a versioned bucket, a new version
of the object is created.
What's next
Learn how to filter objects from transfers .
Learn how to schedule transfer jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

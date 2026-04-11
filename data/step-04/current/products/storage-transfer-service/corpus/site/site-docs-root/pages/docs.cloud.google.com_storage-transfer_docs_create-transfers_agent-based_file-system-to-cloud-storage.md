---
title: "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage
  title: "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\
    \ \_|\_ Google Cloud Documentation"
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
Transfer from a file system to Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create transfer jobs between a file system (either
on-premises or in-cloud) and Cloud Storage.
Transfers from file systems to Cloud Storage are agent-based transfers,
meaning you will install software agents on a machine with access to your
file system to orchestrate the transfer.
Configure permissions
Before creating a transfer, you must configure permissions for the following
entities:
The user account being used to create the transfer. This is the
account that is signed in to the Google Cloud console, or the account that is
specified when authenticating to the `gcloud` CLI. The user account can
be a regular user account, or a user-managed service account.
The Google-managed service account , also known as the service
agent, used by Storage Transfer Service. This account is generally identified by
its email address, which uses the format
project- PROJECT_NUMBER @storage-transfer-service.iam.gserviceaccount.com .
The transfer agent account that provides Google Cloud
permissions for transfer agents. Transfer agent accounts use the
credentials of the user installing them, or the credentials of a
user-managed service account, to authenticate.
See
Agent-based transfer permissions
for instructions.
Install agents into an agent pool
Agent-based transfers use software agents to orchestrate transfers. These agents
must be installed on a machine with access to the file system involved in the
transfer.
Don't include sensitive information such as personally identifiable information
(PII) or security data in your agent pool name or agent ID prefix. Resource names may be
propagated to the names of other Google Cloud resources and may be exposed
to Google-internal systems outside of your project.
Create an agent pool . Use your
user account
for this action.
Install agents
into the agent pool. Use your transfer agent account
for this action.
We recommend starting with 3 agents in your source agent pool. Once the transfer
is in progress, monitor the transfer speed ; you can add more agents
into the pool while the transfer is in progress.
We recommend one VM per agent, each with a minimum of 4 CPU and 8 GiB RAM.
Transfer options
The following Storage Transfer Service features are available for transfers from
file systems to Cloud Storage.
Transfer specific files using a manifest
You can pass a list of files for Storage Transfer Service to act on. See
Transfer specific files or
objects using a manifest for details.
Specify storage class
You can specify the
Cloud Storage storage class to use for your data in the destination
bucket. See the
StorageClass options for REST details, or use the
--custom-storage-class flag with Google Cloud CLI.
Note that any storage class settings are ignored if the destination
bucket has Autoclass enabled. If
Autoclass is enabled, objects transferred into the bucket are initially
set to Standard storage.
Metadata preservation
When transferring files from file systems, Storage Transfer Service can
optionally preserve certain attributes as custom metadata. If these files
are later written back to a file system, Storage Transfer Service can convert
the preserved metadata back to POSIX attributes.
See the POSIX file system transfers section of
Metadata
preservation for details on which metadata can be preserved, and
how to configure your transfer.
Manage network bandwidth
Storage Transfer Service by default uses as much bandwidth as is available to it
to transfer files from your file system. You can set a bandwidth limit to
prevent a transfer from affecting other network traffic. Bandwidth limits
are applied at an agent pool level.
See Manage
network bandwidth to learn more.
Your user account requires the Storage Transfer Admin
( roles/storagetransfer.admin ) role to set or change
bandwidth limits.
Logging
Storage Transfer Service supports
Cloud Logging for Storage Transfer Service (recommended) as well as
agent-based
transfer logs .
Create a transfer
Don't include sensitive information such as personally identifiable information
(PII) or security data in your transfer job name. Resource names may be
propagated to the names of other Google Cloud resources and may be exposed
to Google-internal systems outside of your project.
Storage Transfer Service provides multiple interfaces through which to create a
transfer.
Google Cloud console
Go to the Storage Transfer Service page in the Google Cloud console.
Go to Storage Transfer Service
Click Create transfer job . The Create a transfer job page is
displayed.
Choose POSIX file system as the source.
Select Cloud Storage as the destination type and click Next step .
Select an existing agent pool, or select Create agent pool and
follow the instructions to create a new pool.
Specify the fully qualified path of the file system directory.
Click Next step .
In the Bucket or folder field, enter the destination bucket
and (optionally) folder name, or click
Browse to select a bucket from a list of existing buckets in your
current project. To create a new bucket, click
Create new bucket .
Click Next step .
Choose your scheduling options.
Note: Storage Transfer Service displays transfer job schedules in your
local timezone, but it stores those times in Universal Time Coordinated
(UTC). If you are affected by Daylight Savings Time (DST), you might
experience a transfer job schedule change when DST starts or ends.
Click Next step .
Choose settings for the transfer job.
In the Description field, enter a description of the
transfer. As a best practice, enter a description that is meaningful
and unique so that you can tell jobs apart.
Under Metadata options , use the default options,
or update one or more values. See
Metadata preservation
for details.
Under When to overwrite , select one of the following:
Never : Storage Transfer Service skips transferring any files from
the source that have the same name as a file present in the
destination.
If different : Overwrites destination files if the source file
with the same name has different Etags or checksum values.
Always : Always overwrites destination files when the source file
has the same name, even if they're identical.
Under When to delete , select one of the following:
Never : Never delete files from either the source or destination.
Delete file from source after they're transferred : Delete files
from the source after they're transferred to the destination.
If a source file isn't transferred, for example because it
already exists in the destination, the source file is not
deleted.
Important: If you don't have local backup, this option is a
non-reversible action.
Delete files from destination if they're not also at source : If
files in the destination Cloud Storage bucket aren't also in
the source, then delete the files from the Cloud Storage
bucket.
This option ensures that the destination Cloud Storage bucket
exactly matches your source.
Select whether to Enable logging in Cloud Storage and/or
Enable logging in Cloud Logging . See
File system transfer logs
and
Cloud Logging for Storage Transfer Service
for more information.
To create your transfer job, click Create .
gcloud
Before using gcloud commands, install Google Cloud CLI .
To create a new transfer job, use the gcloud transfer jobs create
command. Creating a new job initiates the specified transfer, unless a
schedule or --do-not-run is specified.
gcloud transfer jobs create \
posix:// /SOURCE \
gs:// DESTINATION / \
--source-agent-pool = SOURCE_POOL_NAME
Replace the following:
SOURCE is an absolute path from the
root of the file system. It's prefixed with posix:// so the final value
will include 3 forward slashes. For example, posix:///tmp/data/ .
DESTINATION is one the name of a Cloud Storage bucket and,
optionally, a folder path followed by a trailing slash. For example,
gs://example-bucket/data/ .
--source-agent-pool specifies the source agent pool to use for this
transfer.
Additional options include:
--do-not-run prevents Storage Transfer Service from running the job
upon submission of the command. To run the job, update it to
add a schedule, or use jobs run to start it manually.
--manifest-file specifies the path to a CSV file in Cloud Storage
containing a list of files to transfer from your source. For manifest file
formatting, see
Transfer specific files or objects using a manifest .
Job information : You can specify --name and --description .
Schedule : Specify --schedule-starts , --schedule-repeats-every , and
--schedule-repeats-until , or --do-not-run .
Transfer options : Specify whether to overwrite destination
files ( --overwrite-when=different or always ) and whether to
delete certain files during or after the transfer
( --delete-from=destination-if-unique or source-after-transfer ); specify
which metadata values to preserve ( --preserve-metadata ); and
optionally set a storage class on transferred objects
( --custom-storage-class ).
To view all options, run gcloud transfer jobs create --help or refer to the
gcloud reference documentation .
Note that not all options are supported for agent-based transfers;
unsupported options contain a note to this effect in their help text.
REST
The following example shows you how to use Storage Transfer Service through the REST
API.
When you configure or edit transfer jobs using the
Storage Transfer Service API, the time must be in UTC. For more information on
specifying the schedule of a transfer job, see
Schedule .
To move files from a POSIX file system to a Cloud Storage bucket,
use transferJobs.create
with a
posixDataSource :
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"name" : "transferJobs/sample_transfer" ,
"description" : "My First Transfer" ,
"status" : "ENABLED" ,
"projectId" : "my_transfer_project_id" ,
"schedule" : {
"scheduleStartDate" : {
"year" : 2022 ,
"month" : 5 ,
"day" : 2
},
"startTimeOfDay" : {
"hours" : 22 ,
"minutes" : 30 ,
"seconds" : 0 ,
"nanos" : 0
}
"scheduleEndDate" : {
"year" : 2022 ,
"month" : 12 ,
"day" : 31
},
"repeatInterval" : {
"259200s"
},
},
"transferSpec" : {
"posixDataSource" : {
"rootDirectory" : "/bar/" ,
},
"sourceAgentPoolName" : "my_example_pool" ,
"gcsDataSink" : {
"bucketName" : "destination_bucket"
"path" : "foo/bar/"
},
}
}
The
schedule
field is optional; if it's not included, the transfer job must be started
with a transferJobs.run request.
To check your transfer's status after creating a job, use
transferJobs.get :
GET h tt ps : //storagetransfer.googleapis.com/v1/transferJobs/sample_transfer?project_id=my_transfer_project_id
Client libraries
The following samples show you how to use Storage Transfer Service programmatically
with Go, Java, Node.js, and Python.
When you configure or edit transfer jobs programmatically, the time must be
in UTC. For more information on
specifying the schedule of a transfer job, see
Schedule .
For more information about the Storage Transfer Service client libraries, see
Getting started with Storage Transfer Service client libraries .
To move files from a POSIX file system to a Cloud Storage bucket:
Go
import (
"context"
"fmt"
"io"
storagetransfer "cloud.google.com/go/storagetransfer/apiv1"
"cloud.google.com/go/storagetransfer/apiv1/storagetransferpb"
)
func transferFromPosix ( w io . Writer , projectID string , sourceAgentPoolName string , rootDirectory string , gcsSinkBucket string ) ( * storagetransferpb . TransferJob , error ) {
// Your project id
// projectId := "myproject-id"
// The agent pool associated with the POSIX data source. If not provided, defaults to the default agent
// sourceAgentPoolName := "projects/my-project/agentPools/transfer_service_default"
// The root directory path on the source filesystem
// rootDirectory := "/directory/to/transfer/source"
// The ID of the GCS bucket to transfer data to
// gcsSinkBucket := "my-sink-bucket"
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
SourceAgentPoolName : sourceAgentPoolName ,
DataSource : & storagetransferpb . TransferSpec_PosixDataSource {
PosixDataSource : & storagetransferpb . PosixFilesystem { RootDirectory : rootDirectory },
},
DataSink : & storagetransferpb . TransferSpec_GcsDataSink {
GcsDataSink : & storagetransferpb . GcsData { BucketName : gcsSinkBucket },
},
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
fmt . Fprintf ( w , "Created and ran transfer job from %v to %v with name %v" , rootDirectory , gcsSinkBucket , resp . Name )
return resp , nil
}
Java
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto ;
import com.google.storagetransfer.v1.proto. TransferTypes . GcsData ;
import com.google.storagetransfer.v1.proto. TransferTypes . PosixFilesystem ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferSpec ;
import java.io.IOException ;
public class TransferFromPosix {
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
transferFromPosix ( projectId , sourceAgentPoolName , rootDirectory , gcsSinkBucket );
}
public static void transferFromPosix (
String projectId , String sourceAgentPoolName , String rootDirectory , String gcsSinkBucket )
throws IOException {
TransferJob transferJob =
TransferJob . newBuilder ()
. setProjectId ( projectId )
. setTransferSpec (
TransferSpec . newBuilder ()
. setSourceAgentPoolName ( sourceAgentPoolName )
. setPosixDataSource (
PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ())
. setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsSinkBucket ). build ()))
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
"Created a transfer job from "
+ rootDirectory
+ " to "
+ gcsSinkBucket
+ " with "
+ "name "
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
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Creates a request to transfer from the local file system to the sink bucket
*/
async function transferDirectory () {
const createRequest = {
transferJob : {
projectId ,
transferSpec : {
sourceAgentPoolName ,
posixDataSource : {
rootDirectory ,
},
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
`Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } `
);
}
transferDirectory ();
Python
from google.cloud import storage_transfer
def transfer_from_posix_to_gcs (
project_id : str ,
description : str ,
source_agent_pool_name : str ,
root_directory : str ,
sink_bucket : str ,
):
"""Create a transfer from a POSIX file system to a GCS bucket."""
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
# Google Cloud Storage sink bucket name
# sink_bucket = 'my-gcs-sink-bucket'
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
"gcs_data_sink" : { "bucket_name" : sink_bucket },
},
}
}
)
result = client . create_transfer_job ( transfer_job_request )
print ( f "Created transferJob: { result . name } " )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

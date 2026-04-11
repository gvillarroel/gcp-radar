---
title: "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3
  title: "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\
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
Transfer from Amazon S3 to Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create and start transfer jobs from
Amazon S3 to Cloud Storage.
Configure permissions
Before creating a transfer, you must configure permissions on your Amazon S3
bucket. See Configure access to a source: Amazon S3 for details.
You must also configure permissions for the following
Google Cloud entities:
The user account being used to create the transfer. This is the
account that is signed in to the Google Cloud console, or the account that is
specified when authenticating to the `gcloud` CLI. The user account can
be a regular user account, or a user-managed service account.
The Google-managed service account , also known as the service
agent, used by Storage Transfer Service. This account is generally identified by
its email address, which uses the format
project- PROJECT_NUMBER @storage-transfer-service.iam.gserviceaccount.com .
See
Agentless transfer permissions for
instructions.
Egress options
Storage Transfer Service provides multiple options for how to transfer your S3 data
to Cloud Storage.
Egress option
Description
Default agentless
This option uses a managed, agentless transfer
from S3. You are charged egress by Amazon.
Follow the instructions on this page to use this
option.
CloudFront distribution
Use an Amazon CloudFront distribution as an egress
path. Data transfers through CloudFront may
benefit from lower AWS egress costs compared to
transferring directly from S3. See
CloudFront pricing and S3 egress charges
for details.
Follow the instructions in
Transfer from S3 via CloudFront to set up
your distribution and create a transfer.
Google-managed private network
Transfer your data over a Google-managed
network. You pay no S3 egress
charges; instead, you pay a per-GiB rate to
Google Cloud. See the Pricing
page for details. You may still be charged
operations charges from AWS (e.g., LIST or GET
calls); refer to their pricing for details.
All projects' transfers over the managed private network share
the same bandwidth. In times of high usage, your transfer may
slow. Transfers with large files are affected more than those
with small files.
Follow the instructions on this page to use this option. Specify
the Managed private network option in the Google Cloud console or
the managedPrivateNetwork field in the REST API. The gcloud CLI
and client libraries do not support managed private network
transfers. See the
supported regions .
Customer-managed private network
Transfer your data over a
customer-managed private network. Use an existing
Cross-Cloud Interconnect, Partner Interconnect,
or purchase and use a new connection. Interconnects provide a
dedicated physical connection between Google Cloud and
Amazon S3 or Azure.
See
Transfer from AWS or Azure over a customer-managed private network
for details.
Agent-driven
Valid for all S3-compatible storage, including Amazon S3. By
installing agent software on machines with access
to your S3 buckets, you can control the network
path and bandwidth. This option requires agents
and agent pools.
Follow the instructions at
Transfer from S3-compatible sources to use
this option.
Supported regions
Storage Transfer Service supports the following Amazon S3 regions:
af-south-1
ap-east-1
ap-northeast-1
ap-northeast-2
ap-northeast-3
ap-south-1
ap-south-2
ap-southeast-1
ap-southeast-2
ap-southeast-3
ap-southeast-4
ca-central-1
ca-west-1
eu-central-1
eu-central-2
eu-north-1
eu-south-1
eu-south-2
eu-west-1
eu-west-2
eu-west-3
il-central-1
me-central-1
me-south-1
sa-east-1
us-east-1
us-east-2
us-west-1
us-west-2
Transfers using the managed private network support the following AWS regions:
ap-east-1
ap-northeast-1
ap-northeast-2
ap-northeast-3
ap-south-1
ap-south-2
ap-southeast-1
ca-central-1
ca-west-1
eu-central-1
eu-central-2
eu-north-1
eu-south-1
eu-south-2
eu-west-1
eu-west-2
eu-west-3
us-east-1
us-east-2
us-west-1
us-west-2
Transfer options
The following Storage Transfer Service features are available for transfers from
S3 to Cloud Storage
Transfer specific files using a manifest
You can pass a list of files for Storage Transfer Service to act on. See
Transfer specific files or
objects using a manifest for details.
Filter source objects by prefix or by last modified time
You can choose to include or exclude objects from the transfer based on
filename and path, or by last modified time.
Prefix filters are described in
Prefix
filters .
Time-based filters include:
Minimum time elapsed, and maximum time elapsed,
since last modification. Both accept a value in seconds to filter
objects that were or were not modified within a certain time
period.
Last modified since, and last modified before, which both accept a
dateTime value.
Be aware that time-based filters for S3 transfers rely on AWS's
definition of "last modified time," which is the time an object begins its
upload. Since an object isn't available until the upload finishes, you
might find objects whose last modified time meets your filter criteria
but are still uploading. These objects will not be included in your
transfer job. To avoid any issues, we recommend the following:
Instead of time-based filters, use
event-driven
transfers to transfer objects as they become available.
To prevent missing objects in recurring transfers, the "last modified
time" look-back window should be greater than the recurring schedule.
For example, for a job running every hour, a look-back window of two
hours provides a buffer.
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
When transferring files from S3, Storage Transfer Service can
optionally preserve certain attributes as custom metadata.
See the Amazon S3 to Cloud Storage section of
Metadata preservation for details on which metadata can be
preserved, and how to configure your transfer.
Event-driven transfers
Storage Transfer Service can listen to Amazon S3 Event Notifications sent to
Amazon SQS to automatically transfer data that has been added or updated
in the source location. See
Event-driven
transfers for information.
Logging and monitoring
Transfers from S3 can be viewed in Cloud Logging and
Cloud Monitoring. See
Cloud Logging for
Storage Transfer Service and
Monitor transfer
jobs for details. You can also configure
Pub/Sub
notifications .
Create a transfer
Storage Transfer Service provides multiple interfaces through which to create a
transfer.
Don't include sensitive information such as personally identifiable information
(PII) or security data in your transfer job name. Resource names may be
propagated to the names of other Google Cloud resources and may be exposed
to Google-internal systems outside of your project.
Google Cloud console
Go to the Storage Transfer Service page in the Google Cloud console.
Go to Storage Transfer Service
Click Create transfer job . The Create a transfer job page is
displayed.
Under Source type , select Amazon S3 .
As your Destination type select Google Cloud Storage .
Select your Scheduling mode . Batch transfers execute on a
one-time or scheduled basis. Event-driven transfers continuously
monitor the source and transfer data when it's added or modified.
To configure an event-driven transfer, follow the instructions at
Event-driven transfers .
Click Next step .
In the Bucket or folder name field, enter the source bucket
name.
The bucket name is the name as it appears in the
AWS Management Console .
If you're using a CloudFront distribution to transfer from S3,
enter the distribution domain name in the CloudFront domain
field. For example, https://dy1h2n3l4ob56.cloudfront.net . See
Transfer from S3 via CloudFront
to configure a CloudFront distribution.
To use a Managed private network for this transfer, select the
checkbox. See Egress options for details.
Select your Amazon Web Services (AWS) authentication method. See
Configure access to a source: Amazon S3 for details.
Access key : Enter your access key in the Access key ID
field and the secret associated with your access key in
the Secret access key field.
AWS IAM role for identity federation : Enter your ARN in the
AWS IAM role ARN field, with the following syntax:
arn:aws:iam:: ACCOUNT :role/ ROLE-NAME-WITH-PATH
Replace the following:
ACCOUNT : The AWS account ID with no
hyphens.
ROLE-NAME-WITH-PATH : The AWS role
name including path.
For more information on ARNs, see IAM ARNs .
Secret resource : Select this option to use an Amazon credential
saved in Secret Manager. Select a secret from the list, or
enter one manually in the format
projects/ PROJECT_NUMBER /secrets/ SECRET_NAME .
If this is an event-driven transfer , enter the Amazon SQS
queue ARN, which takes the following format:
arn:aws:sqs:us-east-1:1234567890:event-queue
Optionally, choose to
filter objects by prefix
or by last modified date. If you specified a folder as your source location, prefix filters
are relative to that folder. For example, if your source is my-test-bucket/path/ , an
include filter of file includes all files starting with
my-test-bucket/path/file .
Click Next step .
In the Bucket or folder field, enter the destination bucket
and (optionally) folder name, or click
Browse to select a bucket from a list of existing buckets in your
current project. To create a new bucket, click
Create new bucket .
Click Next step .
Choose settings for the transfer job.
In the Description field, enter a description of the
transfer. As a best practice, enter a description that is meaningful and
unique so that you can tell jobs apart.
Under Metadata options , choose to use the default options,
or click View and select options to specify values for all
supported metadata. See
Metadata preservation
for details.
Under When to overwrite , select one of the following:
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
Under Notification options , select your Pub/Sub topic and which
events to notify for. See
Pub/Sub notifications for
more details.
Click Next step .
Choose your scheduling options:
Note: The Storage Transfer Service displays transfer job schedules in your
local timezone, but it stores those times in Universal Time Coordinated
(UTC). If you are affected by Daylight Savings Time (DST), you might
experience a transfer job schedule change when DST starts or ends.
From the Run once drop-down list, select one of the following:
Run once : Runs a single transfer, starting at a time that you
select.
Run every day : Runs a transfer daily, starting at a time that
you select.
You can enter an optional End date , or leave End date
blank to run the transfer continually.
Run every week : Runs a transfer weekly, starting at a time
that you select.
Run with custom frequency : Runs a transfer at a frequency that
you select. You can choose to repeat the transfer at a regular
interval of Hours , Days , or Weeks .
You can enter an optional End date , or leave End date
blank to run the transfer continually.
From the Starting now drop-down list, select one of the following:
Starting now : Starts the transfer after you click Create .
Starting on : Starts the transfer on the date and time that you
select. Click Calendar to display a calendar to select the
start date.
To create your transfer job, click Create .
gcloud CLI
To create a new transfer job, use the gcloud transfer jobs create
command. Creating a new job initiates the specified transfer, unless a
schedule or --do-not-run is specified.
The gcloud CLI does not support transfers through
CloudFront or Managed private network.
gcloud transfer jobs create \
s3:// S3_BUCKET_NAME gs:// STORAGE_BUCKET_NAME \
--source-creds-file = " relative_path/to/creds.json "
Replace the following:
S3_BUCKET_NAME is the data source for this transfer. You can
optionally include a path:
s3:// S3_BUCKET_NAME / S3_FOLDER_PATH
STORAGE_BUCKET_NAME is the Cloud Storage bucket to transfer
into. To transfer
into a specific directory, specify
gs:// STORAGE_BUCKET_NAME / STORAGE_FOLDER_PATH / ,
including the trailing slash.
--source-creds-file specifies the relative path to a local file on your
machine that includes AWS credentials for the transfer source. The contents
must be in the following JSON format:
{
"accessKeyId" : s tr i n g ,
"secretAccessKey" : s tr i n g
}
Additional options include:
--do-not-run prevents Storage Transfer Service from running the job
upon submission of the command. To run the job, update it to
add a schedule, or use jobs run to start it manually .
--manifest-file specifies the path to a CSV file in Cloud Storage
containing a list of files to transfer from your source. For manifest file
formatting, see
Transfer specific files or objects using a manifest .
Job information : You can specify --name and --description .
Schedule : Specify --schedule-starts , --schedule-repeats-every , and
--schedule-repeats-until , or --do-not-run .
Object conditions : Use conditions to determine which objects are
transferred. These include --include-prefixes and --exclude-prefixes ,
and the time-based conditions in
--include-modified-[before | after]-[absolute | relative] . If you
specified a folder with your source, prefix filters are relative to that
folder. See Filter source objects by prefix for more
information.
Transfer options : Specify whether to overwrite destination
files ( --overwrite-when=different or always ) and whether to
delete certain files during or after the transfer
( --delete-from=destination-if-unique or source-after-transfer ); specify
which metadata values to preserve ( --preserve-metadata ); and
optionally set a storage class on transferred objects
( --custom-storage-class ).
Notifications : Configure
Pub/Sub notifications for transfers
with --notification-pubsub-topic , --notification-event-types , and
--notification-payload-format .
Cloud Logging : Enable Cloud Logging with --log-actions and
--log-action-states . See
Cloud Logging for Storage Transfer Service
for details.
To view all options, run gcloud transfer jobs create --help or refer to the
gcloud reference documentation .
REST
The following samples show you how to use Storage Transfer Service through the REST
API.
When you configure or edit transfer jobs using the
Storage Transfer Service API, the time must be in UTC. For more information on
specifying the schedule of a transfer job, see
Schedule .
When creating transfer jobs, do not include the s3:// prefix for
bucketName in Amazon S3 bucket source names.
Agentless transfer
The following example creates a transfer job using the standard agentless
configuration. See the
transferJobs.create
reference for more details.
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"description" : " DESCRIPTION " ,
"status" : "ENABLED" ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"awsS3DataSource" : {
"bucketName" : " AWS_SOURCE_NAME " ,
"awsAccessKey" : {
"accessKeyId" : " AWS_ACCESS_KEY_ID " ,
"secretAccessKey" : " AWS_SECRET_ACCESS_KEY "
}
},
"gcsDataSink" : {
"bucketName" : " GCS_SINK_NAME "
}
}
}
See
Configure access to a source: Amazon S3
for other authentication options.
CloudFront distribution
If you're transferring from S3 via a CloudFront distribution, specify
the distribution domain name as the value of the
transferSpec.awsS3DataSource.cloudfrontDomain field:
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"description" : " DESCRIPTION " ,
"status" : "ENABLED" ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"awsS3DataSource" : {
"bucketName" : " AWS_SOURCE_NAME " ,
"cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " ,
"awsAccessKey" : {
"accessKeyId" : " AWS_ACCESS_KEY_ID " ,
"secretAccessKey" : " AWS_SECRET_ACCESS_KEY "
}
},
"gcsDataSink" : {
"bucketName" : " GCS_SINK_NAME "
}
}
}
Managed private network
To transfer from S3 using a Google-managed private network, specify the
transferSpec.awsS3DataSource.managedPrivateNetwork field:
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"description" : " DESCRIPTION " ,
"status" : "ENABLED" ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"awsS3DataSource" : {
"bucketName" : " AWS_SOURCE_NAME " ,
"managedPrivateNetwork" : TRUE ,
"awsAccessKey" : {
"accessKeyId" : " AWS_ACCESS_KEY_ID " ,
"secretAccessKey" : " AWS_SECRET_ACCESS_KEY "
}
},
"gcsDataSink" : {
"bucketName" : " GCS_SINK_NAME "
}
}
}
Client libraries
The following samples show you how to use Storage Transfer Service programmatically
with Go, Java, Node.js, and Python.
When you configure or edit transfer jobs programmatically, the time must be
in UTC. For more information on
specifying the schedule of a transfer job, see
Schedule .
For more information about the Storage Transfer Service client libraries, see
Getting started with Storage Transfer Service client libraries .
Transfer from Amazon S3 to Cloud Storage
In this example, you'll learn how to move files from Amazon S3 to a
Cloud Storage bucket.
When creating transfer jobs, do not include the s3:// prefix for
bucketName in Amazon S3 bucket source names.
The Storage Transfer Service client libraries do not support transfers through
CloudFront or Managed private network.
Go
import (
"context"
"fmt"
"io"
"os"
"time"
storagetransfer "cloud.google.com/go/storagetransfer/apiv1"
"cloud.google.com/go/storagetransfer/apiv1/storagetransferpb"
"google.golang.org/genproto/googleapis/type/date"
"google.golang.org/genproto/googleapis/type/timeofday"
)
func transferFromAws ( w io . Writer , projectID string , awsSourceBucket string , gcsSinkBucket string ) ( * storagetransferpb . TransferJob , error ) {
// Your Google Cloud Project ID
// projectID := "my-project-id"
// The name of the Aws bucket to transfer objects from
// awsSourceBucket := "my-source-bucket"
// The name of the GCS bucket to transfer objects to
// gcsSinkBucket := "my-sink-bucket"
ctx := context . Background ()
client , err := storagetransfer . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storagetransfer.NewClient: %w" , err )
}
defer client . Close ()
// A description of this job
jobDescription := "Transfers objects from an AWS bucket to a GCS bucket"
// The time to start the transfer
startTime := time . Now (). UTC ()
// The AWS access key credential, should be accessed via environment variable for security
awsAccessKeyID := os . Getenv ( "AWS_ACCESS_KEY_ID" )
// The AWS secret key credential, should be accessed via environment variable for security
awsSecretKey := os . Getenv ( "AWS_SECRET_ACCESS_KEY" )
req := & storagetransferpb . CreateTransferJobRequest {
TransferJob : & storagetransferpb . TransferJob {
ProjectId : projectID ,
Description : jobDescription ,
TransferSpec : & storagetransferpb . TransferSpec {
DataSource : & storagetransferpb . TransferSpec_AwsS3DataSource {
AwsS3DataSource : & storagetransferpb . AwsS3Data {
BucketName : awsSourceBucket ,
AwsAccessKey : & storagetransferpb . AwsAccessKey {
AccessKeyId : awsAccessKeyID ,
SecretAccessKey : awsSecretKey ,
}},
},
DataSink : & storagetransferpb . TransferSpec_GcsDataSink {
GcsDataSink : & storagetransferpb . GcsData { BucketName : gcsSinkBucket }},
},
Schedule : & storagetransferpb . Schedule {
ScheduleStartDate : & date . Date {
Year : int32 ( startTime . Year ()),
Month : int32 ( startTime . Month ()),
Day : int32 ( startTime . Day ()),
},
ScheduleEndDate : & date . Date {
Year : int32 ( startTime . Year ()),
Month : int32 ( startTime . Month ()),
Day : int32 ( startTime . Day ()),
},
StartTimeOfDay : & timeofday . TimeOfDay {
Hours : int32 ( startTime . Hour ()),
Minutes : int32 ( startTime . Minute ()),
Seconds : int32 ( startTime . Second ()),
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
fmt . Fprintf ( w , "Created and ran transfer job from %v to %v with name %v" , awsSourceBucket , gcsSinkBucket , resp . Name )
return resp , nil
}
Java
Looking for older samples? See the Storage Transfer Service Migration Guide .
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto . CreateTransferJobRequest ;
import com.google.storagetransfer.v1.proto. TransferTypes . AwsAccessKey ;
import com.google.storagetransfer.v1.proto. TransferTypes . AwsS3Data ;
import com.google.storagetransfer.v1.proto. TransferTypes . GcsData ;
import com.google.storagetransfer.v1.proto. TransferTypes . Schedule ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob .Status ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferSpec ;
import com.google.type. Date ;
import com.google.type. TimeOfDay ;
import java.io.IOException ;
import java.util.Calendar ;
public class TransferFromAws {
// Creates a one-off transfer job from Amazon S3 to Google Cloud Storage.
public static void transferFromAws (
String projectId ,
String jobDescription ,
String awsSourceBucket ,
String gcsSinkBucket ,
long startDateTime )
throws IOException {
// Your Google Cloud Project ID
// String projectId = "your-project-id";
// A short description of this job
// String jobDescription = "Sample transfer job from S3 to GCS.";
// The name of the source AWS bucket to transfer data from
// String awsSourceBucket = "yourAwsSourceBucket";
// The name of the GCS bucket to transfer data to
// String gcsSinkBucket = "your-gcs-bucket";
// What day and time in UTC to start the transfer, expressed as an epoch date timestamp.
// If this is in the past relative to when the job is created, it will run the next day.
// long startDateTime =
// new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime();
// The ID used to access your AWS account. Should be accessed via environment variable.
String awsAccessKeyId = System . getenv ( "AWS_ACCESS_KEY_ID" );
// The Secret Key used to access your AWS account. Should be accessed via environment variable.
String awsSecretAccessKey = System . getenv ( "AWS_SECRET_ACCESS_KEY" );
// Set up source and sink
TransferSpec transferSpec =
TransferSpec . newBuilder ()
. setAwsS3DataSource (
AwsS3Data . newBuilder ()
. setBucketName ( awsSourceBucket )
. setAwsAccessKey (
AwsAccessKey . newBuilder ()
. setAccessKeyId ( awsAccessKeyId )
. setSecretAccessKey ( awsSecretAccessKey )))
. setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsSinkBucket ))
. build ();
// Parse epoch timestamp into the model classes
Calendar startCalendar = Calendar . getInstance ();
startCalendar . setTimeInMillis ( startDateTime );
// Note that this is a Date from the model class package, not a java.util.Date
Date startDate =
Date . newBuilder ()
. setYear ( startCalendar . get ( Calendar . YEAR ))
. setMonth ( startCalendar . get ( Calendar . MONTH ) + 1 )
. setDay ( startCalendar . get ( Calendar . DAY_OF_MONTH ))
. build ();
TimeOfDay startTime =
TimeOfDay . newBuilder ()
. setHours ( startCalendar . get ( Calendar . HOUR_OF_DAY ))
. setMinutes ( startCalendar . get ( Calendar . MINUTE ))
. setSeconds ( startCalendar . get ( Calendar . SECOND ))
. build ();
Schedule schedule =
Schedule . newBuilder ()
. setScheduleStartDate ( startDate )
. setScheduleEndDate ( startDate )
. setStartTimeOfDay ( startTime )
. build ();
// Set up the transfer job
TransferJob transferJob =
TransferJob . newBuilder ()
. setDescription ( jobDescription )
. setProjectId ( projectId )
. setTransferSpec ( transferSpec )
. setSchedule ( schedule )
. setStatus ( Status . ENABLED )
. build ();
// Create a Transfer Service client
StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ();
// Create the transfer job
TransferJob response =
storageTransfer . createTransferJob (
CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ());
System . out . println ( "Created transfer job from AWS to GCS:" );
System . out . println ( response . toString ());
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
// The ID of the Google Cloud Platform Project that owns the job
// projectId = 'my-project-id'
// A useful description for your transfer job
// description = 'My transfer job'
// AWS S3 source bucket name
// awsSourceBucket = 'my-s3-source-bucket'
// AWS Access Key ID
// awsAccessKeyId = 'AKIA...'
// AWS Secret Access Key
// awsSecretAccessKey = 'HEAoMK2.../...ku8'
// Google Cloud Storage destination bucket name
// gcsSinkBucket = 'my-gcs-destination-bucket'
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Creates a one-time transfer job from Amazon S3 to Google Cloud Storage.
*/
async function transferFromS3 () {
// Setting the start date and the end date as the same time creates a
// one-time transfer
const now = new Date ();
const oneTimeSchedule = {
day : now . getDate (),
month : now . getMonth () + 1 ,
year : now . getFullYear (),
};
// Runs the request and creates the job
const [ transferJob ] = await client . createTransferJob ({
transferJob : {
projectId ,
description ,
status : ' ENABLED ' ,
schedule : {
scheduleStartDate : oneTimeSchedule ,
scheduleEndDate : oneTimeSchedule ,
},
transferSpec : {
awsS3DataSource : {
bucketName : awsSourceBucket ,
awsAccessKey : {
accessKeyId : awsAccessKeyId ,
secretAccessKey : awsSecretAccessKey ,
},
},
gcsDataSink : {
bucketName : gcsSinkBucket ,
},
},
},
});
console . log (
`Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } `
);
}
transferFromS3 ();
Python
Looking for older samples? See the Storage Transfer Service Migration Guide .
from datetime import datetime
from google.cloud import storage_transfer
def create_one_time_aws_transfer (
project_id : str ,
description : str ,
source_bucket : str ,
aws_access_key_id : str ,
aws_secret_access_key : str ,
sink_bucket : str ,
):
"""Creates a one-time transfer job from Amazon S3 to Google Cloud
Storage."""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# A useful description for your transfer job
# description = 'My transfer job'
# AWS S3 source bucket name
# source_bucket = 'my-s3-source-bucket'
# AWS Access Key ID
# aws_access_key_id = 'AKIA...'
# AWS Secret Access Key
# aws_secret_access_key = 'HEAoMK2.../...ku8'
# Google Cloud Storage destination bucket name
# sink_bucket = 'my-gcs-destination-bucket'
now = datetime . utcnow ()
# Setting the start date and the end date as
# the same time creates a one-time transfer
one_time_schedule = { "day" : now . day , "month" : now . month , "year" : now . year }
transfer_job_request = storage_transfer . CreateTransferJobRequest (
{
"transfer_job" : {
"project_id" : project_id ,
"description" : description ,
"status" : storage_transfer . TransferJob . Status . ENABLED ,
"schedule" : {
"schedule_start_date" : one_time_schedule ,
"schedule_end_date" : one_time_schedule ,
},
"transfer_spec" : {
"aws_s3_data_source" : {
"bucket_name" : source_bucket ,
"aws_access_key" : {
"access_key_id" : aws_access_key_id ,
"secret_access_key" : aws_secret_access_key ,
},
},
"gcs_data_sink" : {
"bucket_name" : sink_bucket ,
},
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

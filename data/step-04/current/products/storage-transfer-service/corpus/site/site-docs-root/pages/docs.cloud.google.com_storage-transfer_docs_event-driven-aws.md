---
title: "Event-driven transfers from AWS S3 \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws
  title: "Event-driven transfers from AWS S3 \_|\_ Storage Transfer Service \_|\_\
    \ Google Cloud Documentation"
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
Event-driven transfers from AWS S3
Stay organized with collections
Save and categorize content based on your preferences.
Storage Transfer Service can listen to event notifications in AWS
to automatically transfer data that has been added or updated in the source
location, into a Cloud Storage bucket.
Learn more about the benefits
of event-driven transfers.
Event-driven transfers listen to
Amazon S3 Event Notifications
sent to Amazon SQS to know when objects in the source bucket have been modified
or added. Object deletions are not detected; deleting an object at the source
does not delete the associated object in the destination bucket.
Event-driven transfers always use a Cloud Storage bucket as the destination.
Before you begin
Follow the instructions to grant the required permissions on your
destination Cloud Storage bucket:
Configure access to a destination: Cloud Storage
Create an SQS queue
In the AWS console, go to the Simple Queue Service page.
Click Create queue .
Enter a Name for this queue.
In the Access policy section, select Advanced . A JSON object is
displayed:
{
"Version" : "2008-10-17" ,
"Id" : "__default_policy_ID" ,
"Statement" : [
{
"Sid" : "__owner_statement" ,
"Effect" : "Allow" ,
"Principal" : {
"AWS" : "01234567890"
},
"Action" : [
"SQS:*"
],
"Resource" : "arn:aws:sqs:us-west-2:01234567890:test"
}
]
}
The values of AWS and Resource are unique for each project.
Copy your specific values of AWS and Resource from the displayed JSON
into the following JSON snippet:
{
"Version" : "2012-10-17" ,
"Id" : "example-ID" ,
"Statement" : [
{
"Sid" : "example-statement-ID" ,
"Effect" : "Allow" ,
"Principal" : {
"Service" : "s3.amazonaws.com"
},
"Action" : "SQS:SendMessage" ,
"Resource" : " RESOURCE " ,
"Condition" : {
"StringEquals" : {
"aws:SourceAccount" : " AWS "
},
"ArnLike" : {
"aws:SourceArn" : " S3_BUCKET_ARN "
}
}
}
]
}
The values of the placeholders in the preceding JSON use the following
format:
AWS is a numeric value representing your Amazon Web Services
project. For example, "aws:SourceAccount": "1234567890" .
RESOURCE is an Amazon Resource Number (ARN) that identifies
this queue. For example,
"Resource": "arn:aws:sqs:us-west-2:01234567890:test" .
S3_BUCKET_ARN is an ARN that identifies the source bucket. For
example, "aws:SourceArn": "arn:aws:s3:::example-aws-bucket" . You can
find a bucket's ARN from the Properties tab of the bucket details page
in the AWS console.
Replace the JSON displayed in the Access policy section with the updated
JSON above.
Click Create queue .
Once complete, note the Amazon Resource Name (ARN) of the queue. The ARN has the
following format:
arn:aws:sqs:us-east-1:1234567890:event-queue"
Enable notifications on your S3 bucket
In the AWS console, go to the S3 page.
In the Buckets list, select your source bucket.
Select the Properties tab.
In the Event notifications section, click Create event notification .
Specify a name for this event.
In the Event types section, select All object create events .
As the Destination select SQS queue and select the queue you created
for this transfer.
Click Save changes .
Configure permissions
Follow the instructions in
Configure access to a source: Amazon S3
to create either an access key ID and secret key, or a Federated Identity
role.
Replace the custom permissions JSON with the following:
{
"Version" : "2012-10-17" ,
"Statement" : [
{
"Effect" : "Allow" ,
"Action" : [
"sqs:DeleteMessage" ,
"sqs:ChangeMessageVisibility" ,
"sqs:ReceiveMessage" ,
"s3:GetObject" ,
"s3:ListBucket"
],
"Resource" : [
"arn:aws:s3::: S3_BUCKET_NAME " ,
"arn:aws:s3::: S3_BUCKET_NAME /*" ,
" AWS_QUEUE_ARN "
]
}
]
}
Once created, note the following information:
For a user, note the access key ID and secret key.
For a Federated Identity role, note the Amazon Resource Name (ARN),
which has the format
arn:aws:iam:: AWS_ACCOUNT :role/ ROLE_NAME .
Create a transfer job
You can use the REST API or the Google Cloud console to create an event-based
transfer job.
Cloud console
Go to the Create transfer job page in the Google Cloud console.
Go to Create transfer job
Select Amazon S3 as the source type, and Cloud Storage as
the destination.
As the Scheduling mode select Event-driven and click Next step .
Enter your S3 bucket name. The bucket name is the name as it appears in the
AWS Management Console . For
example, my-aws-bucket .
Select your authentication method and enter the requested information,
which you created and noted in the previous section.
Enter the Amazon SQS queue ARN that you created earlier. It uses the
following format:
arn:aws:sqs:us-east-1:1234567890:event-queue"
Optionally, define any filters, then click Next step .
Select the destination Cloud Storage bucket and, optionally, path.
Optionally, enter a start and end time for the transfer. If you don't
specify a time, the transfer will start immediately and will run until
manually stopped.
Specify any transfer options. More information is available from the
Create transfers page.
Click Create .
Once created, the transfer job starts running and an event listener waits for
notifications on the SQS queue. The job details page shows one
operation each hour, and includes details on data transferred for each job.
REST
To create an event-driven transfer using the REST API, send the following
JSON object to the transferJobs.create endpoint:
transfer _job {
"description" : "YOUR DESCRIPTION" ,
"status" : "ENABLED" ,
"projectId" : "PROJECT_ID" ,
"transferSpec" {
"awsS3DataSource" {
"bucketName" : "AWS_SOURCE_NAME" ,
"roleArn" : "arn:aws:iam::1234567891011:role/role_for_federated_auth"
},
"gcsDataSink" : {
"bucketName" : "GCS_SINK_NAME"
}
}
"eventStream" {
"name" : "arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue" ,
"eventStreamStartTime" : "2022-12-02T01:00:00+00:00" ,
"eventStreamExpirationTime" : "2023-01-31T01:00:00+00:00"
}
}
The eventStreamStartTime and eventStreamExpirationTime are optional.
If the start time is omitted, the transfer starts immediately; if the end
time is omitted, the transfer continues until manually stopped.
Client libraries
Go
To learn how to install and use the client library for Storage Transfer Service, see
Storage Transfer Service client libraries .
For more information, see the
Storage Transfer Service Go API
reference documentation .
To authenticate to Storage Transfer Service, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
func createEventDrivenAWSTransfer ( w io . Writer , projectID string , s3SourceBucket string , gcsSinkBucket string , sqsQueueARN string ) ( * storagetransferpb . TransferJob , error ) {
// Your Google Cloud Project ID.
// projectID := "my-project-id"
// The name of the source AWS S3 bucket.
// s3SourceBucket := "my-source-bucket"
// The name of the GCS bucket to transfer objects to.
// gcsSinkBucket := "my-sink-bucket"
// The Amazon Resource Name (ARN) of the AWS SNS queue to subscribe the event driven transfer to.
// sqsQueueARN := "arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue"
// The AWS access key credential, should be accessed via environment variable for security
awsAccessKeyID := os . Getenv ( "AWS_ACCESS_KEY_ID" )
// The AWS secret key credential, should be accessed via environment variable for security
awsSecretKey := os . Getenv ( "AWS_SECRET_ACCESS_KEY" )
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
DataSource : & storagetransferpb . TransferSpec_AwsS3DataSource {
AwsS3DataSource : & storagetransferpb . AwsS3Data {
BucketName : s3SourceBucket ,
AwsAccessKey : & storagetransferpb . AwsAccessKey {
AccessKeyId : awsAccessKeyID ,
SecretAccessKey : awsSecretKey ,
}},
},
DataSink : & storagetransferpb . TransferSpec_GcsDataSink {
GcsDataSink : & storagetransferpb . GcsData { BucketName : gcsSinkBucket }},
},
EventStream : & storagetransferpb . EventStream { Name : sqsQueueARN },
Status : storagetransferpb . TransferJob_ENABLED ,
},
}
resp , err := client . CreateTransferJob ( ctx , req )
if err != nil {
return nil , fmt . Errorf ( "failed to create transfer job: %w" , err )
}
fmt . Fprintf ( w , "Created an event driven transfer job from %v to %v subscribed to %v with name %v" , s3SourceBucket , gcsSinkBucket , sqsQueueARN , resp . Name )
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
import com.google.storagetransfer.v1.proto. TransferProto ;
import com.google.storagetransfer.v1.proto. TransferTypes ;
public class CreateEventDrivenAwsTransfer {
public static void main ( String [] args ) throws Exception {
// Your Google Cloud Project ID
String projectId = "your-project-id" ;
// The name of the source AWS bucket to transfer data from
String s3SourceBucket = "yourS3SourceBucket" ;
// The name of the GCS bucket to transfer data to
String gcsSinkBucket = "your-gcs-bucket" ;
// The ARN of the SQS queue to subscribe to
String sqsQueueArn = "arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue" ;
createEventDrivenAwsTransfer ( projectId , s3SourceBucket , gcsSinkBucket , sqsQueueArn );
}
public static void createEventDrivenAwsTransfer (
String projectId , String s3SourceBucket , String gcsSinkBucket , String sqsQueueArn )
throws Exception {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources,
// or use "try-with-close" statement to do this automatically.
try ( StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ()) {
// The ID used to access your AWS account. Should be accessed via environment variable.
String awsAccessKeyId = System . getenv ( "AWS_ACCESS_KEY_ID" );
// The Secret Key used to access your AWS account. Should be accessed via environment
// variable.
String awsSecretAccessKey = System . getenv ( "AWS_SECRET_ACCESS_KEY" );
TransferTypes . TransferJob transferJob =
TransferTypes . TransferJob . newBuilder ()
. setProjectId ( projectId )
. setTransferSpec (
TransferTypes . TransferSpec . newBuilder ()
. setAwsS3DataSource (
TransferTypes . AwsS3Data . newBuilder ()
. setBucketName ( s3SourceBucket )
. setAwsAccessKey (
TransferTypes . AwsAccessKey . newBuilder ()
. setAccessKeyId ( awsAccessKeyId )
. setSecretAccessKey ( awsSecretAccessKey ))
. build ())
. setGcsDataSink (
TransferTypes . GcsData . newBuilder (). setBucketName ( gcsSinkBucket )))
. setStatus ( TransferTypes . TransferJob . Status . ENABLED )
. setEventStream ( TransferTypes . EventStream . newBuilder (). setName ( sqsQueueArn ). build ())
. build ();
TransferTypes . TransferJob response =
storageTransfer . createTransferJob (
TransferProto . CreateTransferJobRequest . newBuilder ()
. setTransferJob ( transferJob )
. build ());
System . out . println (
"Created a transfer job from "
+ s3SourceBucket
+ " to "
+ gcsSinkBucket
+ " subscribed to "
+ sqsQueueArn
+ " with name "
+ response . getName ());
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
// The ID of the Google Cloud Platform Project that owns the job
// projectId = 'my-project-id'
// AWS S3 source bucket name
// s3SourceBucket = 'my-s3-source-bucket'
// Google Cloud Storage destination bucket name
// gcsSinkBucket = 'my-gcs-destination-bucket'
// The ARN of the SQS queue to subscribe to
// sqsQueueArn = 'arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue'
// AWS Access Key ID. Should be accessed via environment variable for security.
// awsAccessKeyId = 'AKIA...'
// AWS Secret Access Key. Should be accessed via environment variable for security.
// awsSecretAccessKey = 'HEAoMK2.../...ku8'
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Creates an event driven transfer that tracks an SQS queue.
*/
async function createEventDrivenAwsTransfer () {
const [ transferJob ] = await client . createTransferJob ({
transferJob : {
projectId ,
status : ' ENABLED ' ,
transferSpec : {
awsS3DataSource : {
bucketName : s3SourceBucket ,
awsAccessKey : {
accessKeyId : awsAccessKeyId ,
secretAccessKey : awsSecretAccessKey ,
},
},
gcsDataSink : {
bucketName : gcsSinkBucket ,
},
},
eventStream : {
name : sqsQueueArn ,
},
},
});
console . log (
`Created an event driven transfer from ' ${ s3SourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } `
);
}
createEventDrivenAwsTransfer ();
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
def create_event_driven_aws_transfer (
project_id : str ,
description : str ,
source_s3_bucket : str ,
sink_gcs_bucket : str ,
sqs_queue_arn : str ,
aws_access_key_id : str ,
aws_secret_access_key : str ,
):
"""Create an event driven transfer between two GCS buckets that tracks an AWS SQS queue"""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# A description of this job
# description = 'Creates an event-driven transfer that tracks an SQS queue'
# AWS S3 source bucket name
# source_s3_bucket = 'my-s3-source-bucket'
# Google Cloud Storage destination bucket name
# sink_gcs_bucket = 'my-gcs-destination-bucket'
# The ARN of the SQS queue to subscribe to
# pubsub_id = 'arn:aws:sqs:us-east-1:1234567891011:s3-notification-queue'
# AWS Access Key ID. Should be accessed via environment variable for security purposes.
# aws_access_key_id = 'AKIA...'
# AWS Secret Access Key. Should be accessed via environment variable for security purposes.
# aws_secret_access_key = 'HEAoMK2.../...ku8'
transfer_job_request = storage_transfer . CreateTransferJobRequest (
{
"transfer_job" : {
"project_id" : project_id ,
"description" : description ,
"status" : storage_transfer . TransferJob . Status . ENABLED ,
"transfer_spec" : {
"aws_s3_data_source" : {
"bucket_name" : source_s3_bucket ,
"aws_access_key" : {
"access_key_id" : aws_access_key_id ,
"secret_access_key" : aws_secret_access_key ,
},
},
"gcs_data_sink" : {
"bucket_name" : sink_gcs_bucket ,
},
},
"event_stream" : {
"name" : sqs_queue_arn ,
},
},
}
)
result = client . create_transfer_job ( transfer_job_request )
print ( f "Created transferJob: { result . name } " )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

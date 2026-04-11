---
title: "Migrating to the Storage Transfer Service Cloud Client Library \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/migration-guide
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/migration-guide
  title: "Migrating to the Storage Transfer Service Cloud Client Library \_|\_ Google\
    \ Cloud Documentation"
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
Migrating to the Storage Transfer Service Cloud Client Library
Stay organized with collections
Save and categorize content based on your preferences.
To ensure high quality and to be consistent with our other Cloud libraries, the
documentation for Storage Transfer Service is now using the Cloud Client
Libraries instead of the Google API Client Libraries . See
Client libraries explained for more
information about the two options.
The Google API Client Library continues to receive updates, but is no longer
referenced in the documentation.
This guide covers the main differences as they apply to using
Storage Transfer Service, and provides instructions on updating your clients when
migrating to the Cloud Client Library.
Java
Updating dependencies
To switch to the new library, replace your dependency on
google-api-services-storagetransfer with google-cloud-storage-transfer .
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-storage-transfer</artifactId>
<version>0.2.3</version>
</dependency>
If you are using Gradle without BOM, add this to your dependencies:
implementation ' com . google . cloud : google - cloud - storage - transfer : 0.2.3 '
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>24 .1.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - storage - transfer < / artifactId >
< / dependency >
For the most part, code can be pretty easily converted from the API Client
Library to the Cloud Client Library. The following are some key differences
between the two Java clients
Client instantiation
The Cloud Client Library reduces a lot of the boilerplate associated with
client instantiation by handling it behind the scenes.
API Client Library
GoogleCredentials credential = GoogleCredentials . getApplicationDefault ();
if ( credential . createScopedRequired ()) {
credential = credential . createScoped ( StoragetransferScopes . all ());
}
Storagetransfer storageTransfer = new Storagetransfer . Builder ( Utils . getDefaultTransport (),
Utils . getDefaultJsonFactory (), new HttpCredentialsAdapter ( credential ))
. build ();
Cloud Client Library
StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ();
Builders for model classes
Model classes in the Cloud Client Library use builders instead of constructors.
API Client Library
TransferJob transferJob =
new TransferJob ()
. setStatus ( "ENABLED" );
Cloud Client Library
TransferJob transferJob =
TransferJob . newBuilder ()
. setStatus ( Status . ENABLED )
. build ();
List operations return iterables
List operations in the Cloud Client Library return simple iterables instead of the paginated results in the API Client Library.
API Client Library
public class StoragetransferExample {
public static void main ( String args [] ) throws IOException , GeneralSecurityException {
Storagetransfer storagetransferService = createStoragetransferService ();
Storagetransfer . TransferJobs . List request = storagetransferService . transferJobs (). list ();
ListTransferJobsResponse response ;
do {
response = request . execute ();
if ( response . getTransferJobs () == null ) {
continue ;
}
for ( TransferJob transferJob : response . getTransferJobs ()) {
System . out . println ( transferJob );
}
request . setPageToken ( response . getNextPageToken ());
} while ( response . getNextPageToken () != null );
}
public static Storagetransfer createStoragetransferService ()
throws IOException , GeneralSecurityException {
HttpTransport httpTransport = GoogleNetHttpTransport . newTrustedTransport ();
JsonFactory jsonFactory = JacksonFactory . getDefaultInstance ();
GoogleCredential credential = GoogleCredential . getApplicationDefault ();
}
return new Storagetransfer . Builder ( httpTransport , jsonFactory , credential )
. build ();
}
}
Cloud Client Library
public class StoragetransferExample {
public static void main ( String args [] ) throws Exception {
StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ();
ListTransferJobsRequest request = ListTransferJobsRequest . newBuilder (). build ();
for ( TransferJob job : client . listTransferJobs ( request ). iterateAll ()) {
System . out . println ( job );
}
}
}
Sample comparisons
Here, we include the old API Client Library samples, compared to their equivalent samples using the Cloud Client Library. If you used these samples before, you can use this comparison to understand how to move your code to the new Cloud Client Library.
Transfer from Amazon S3
API Client Library
import com.google.api.client.googleapis.util. Utils ;
import com.google.api.services.storagetransfer.v1.Storagetransfer ;
import com.google.api.services.storagetransfer.v1.StoragetransferScopes ;
import com.google.api.services.storagetransfer.v1.model.AwsAccessKey ;
import com.google.api.services.storagetransfer.v1.model.AwsS3Data ;
import com.google.api.services.storagetransfer.v1.model.Date ;
import com.google.api.services.storagetransfer.v1.model.GcsData ;
import com.google.api.services.storagetransfer.v1.model.Schedule ;
import com.google.api.services.storagetransfer.v1.model.TimeOfDay ;
import com.google.api.services.storagetransfer.v1.model.TransferJob ;
import com.google.api.services.storagetransfer.v1.model.TransferSpec ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import java.io.IOException ;
import java.util.Calendar ;
public class TransferFromAwsApiary {
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
new TransferSpec ()
. setAwsS3DataSource (
new AwsS3Data ()
. setBucketName ( awsSourceBucket )
. setAwsAccessKey (
new AwsAccessKey ()
. setAccessKeyId ( awsAccessKeyId )
. setSecretAccessKey ( awsSecretAccessKey )))
. setGcsDataSink ( new GcsData (). setBucketName ( gcsSinkBucket ));
// Parse epoch timestamp into the model classes
Calendar startCalendar = Calendar . getInstance ();
startCalendar . setTimeInMillis ( startDateTime );
// Note that this is a Date from the model class package, not a java.util.Date
Date startDate =
new Date ()
. setYear ( startCalendar . get ( Calendar . YEAR ))
. setMonth ( startCalendar . get ( Calendar . MONTH ) + 1 )
. setDay ( startCalendar . get ( Calendar . DAY_OF_MONTH ));
TimeOfDay startTime =
new TimeOfDay ()
. setHours ( startCalendar . get ( Calendar . HOUR_OF_DAY ))
. setMinutes ( startCalendar . get ( Calendar . MINUTE ))
. setSeconds ( startCalendar . get ( Calendar . SECOND ));
Schedule schedule =
new Schedule ()
. setScheduleStartDate ( startDate )
. setScheduleEndDate ( startDate )
. setStartTimeOfDay ( startTime );
// Set up the transfer job
TransferJob transferJob =
new TransferJob ()
. setDescription ( jobDescription )
. setProjectId ( projectId )
. setTransferSpec ( transferSpec )
. setSchedule ( schedule )
. setStatus ( "ENABLED" );
// Create a Transfer Service client
GoogleCredentials credential = GoogleCredentials . getApplicationDefault ();
if ( credential . createScopedRequired ()) {
credential = credential . createScoped ( StoragetransferScopes . all ());
}
Storagetransfer storageTransfer =
new Storagetransfer . Builder (
Utils . getDefaultTransport (),
Utils . getDefaultJsonFactory (),
new HttpCredentialsAdapter ( credential ))
. build ();
// Create the transfer job
TransferJob response = storageTransfer . transferJobs (). create ( transferJob ). execute ();
System . out . println ( "Created transfer job from AWS to GCS:" );
System . out . println ( response . toPrettyString ());
}
}
Cloud Client Library
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
Transfer to nearline
API Client Library
import com.google.api.client.googleapis.util. Utils ;
import com.google.api.services.storagetransfer.v1.Storagetransfer ;
import com.google.api.services.storagetransfer.v1.StoragetransferScopes ;
import com.google.api.services.storagetransfer.v1.model.Date ;
import com.google.api.services.storagetransfer.v1.model.GcsData ;
import com.google.api.services.storagetransfer.v1.model.ObjectConditions ;
import com.google.api.services.storagetransfer.v1.model.Schedule ;
import com.google.api.services.storagetransfer.v1.model.TimeOfDay ;
import com.google.api.services.storagetransfer.v1.model.TransferJob ;
import com.google.api.services.storagetransfer.v1.model.TransferOptions ;
import com.google.api.services.storagetransfer.v1.model.TransferSpec ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import java.io.IOException ;
import java.util.Calendar ;
public class TransferToNearlineApiary {
/**
* Creates a one-off transfer job that transfers objects in a standard GCS bucket that are more
* than 30 days old to a Nearline GCS bucket.
*/
public static void transferToNearlineApiary (
String projectId ,
String jobDescription ,
String gcsSourceBucket ,
String gcsNearlineSinkBucket ,
long startDateTime )
throws IOException {
// Your Google Cloud Project ID
// String projectId = "your-project-id";
// A short description of this job
// String jobDescription = "Sample transfer job of old objects to a Nearline GCS bucket.";
// The name of the source GCS bucket to transfer data from
// String gcsSourceBucket = "your-gcs-source-bucket";
// The name of the Nearline GCS bucket to transfer old objects to
// String gcsSinkBucket = "your-nearline-gcs-bucket";
// What day and time in UTC to start the transfer, expressed as an epoch date timestamp.
// If this is in the past relative to when the job is created, it will run the next day.
// long startDateTime =
// new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime();
// Parse epoch timestamp into the model classes
Calendar startCalendar = Calendar . getInstance ();
startCalendar . setTimeInMillis ( startDateTime );
// Note that this is a Date from the model class package, not a java.util.Date
Date date =
new Date ()
. setYear ( startCalendar . get ( Calendar . YEAR ))
. setMonth ( startCalendar . get ( Calendar . MONTH ) + 1 )
. setDay ( startCalendar . get ( Calendar . DAY_OF_MONTH ));
TimeOfDay time =
new TimeOfDay ()
. setHours ( startCalendar . get ( Calendar . HOUR_OF_DAY ))
. setMinutes ( startCalendar . get ( Calendar . MINUTE ))
. setSeconds ( startCalendar . get ( Calendar . SECOND ));
TransferJob transferJob =
new TransferJob ()
. setDescription ( jobDescription )
. setProjectId ( projectId )
. setTransferSpec (
new TransferSpec ()
. setGcsDataSource ( new GcsData (). setBucketName ( gcsSourceBucket ))
. setGcsDataSink ( new GcsData (). setBucketName ( gcsNearlineSinkBucket ))
. setObjectConditions (
new ObjectConditions ()
. setMinTimeElapsedSinceLastModification ( "2592000s" /* 30 days */ ))
. setTransferOptions (
new TransferOptions (). setDeleteObjectsFromSourceAfterTransfer ( true )))
. setSchedule ( new Schedule (). setScheduleStartDate ( date ). setStartTimeOfDay ( time ))
. setStatus ( "ENABLED" );
// Create a Transfer Service client
GoogleCredentials credential = GoogleCredentials . getApplicationDefault ();
if ( credential . createScopedRequired ()) {
credential = credential . createScoped ( StoragetransferScopes . all ());
}
Storagetransfer storageTransfer =
new Storagetransfer . Builder (
Utils . getDefaultTransport (),
Utils . getDefaultJsonFactory (),
new HttpCredentialsAdapter ( credential ))
. build ();
// Create the transfer job
TransferJob response = storageTransfer . transferJobs (). create ( transferJob ). execute ();
System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" );
System . out . println ( response . toPrettyString ());
}
}
Cloud Client Library
import com.google.protobuf. Duration ;
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto . CreateTransferJobRequest ;
import com.google.storagetransfer.v1.proto. TransferTypes . GcsData ;
import com.google.storagetransfer.v1.proto. TransferTypes . ObjectConditions ;
import com.google.storagetransfer.v1.proto. TransferTypes . Schedule ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob .Status ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferOptions ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferSpec ;
import com.google.type. Date ;
import com.google.type. TimeOfDay ;
import java.io.IOException ;
import java.util.Calendar ;
public class TransferToNearline {
/**
* Creates a one-off transfer job that transfers objects in a standard GCS bucket that are more
* than 30 days old to a Nearline GCS bucket.
*/
public static void transferToNearline (
String projectId ,
String jobDescription ,
String gcsSourceBucket ,
String gcsNearlineSinkBucket ,
long startDateTime )
throws IOException {
// Your Google Cloud Project ID
// String projectId = "your-project-id";
// A short description of this job
// String jobDescription = "Sample transfer job of old objects to a Nearline GCS bucket.";
// The name of the source GCS bucket to transfer data from
// String gcsSourceBucket = "your-gcs-source-bucket";
// The name of the Nearline GCS bucket to transfer old objects to
// String gcsSinkBucket = "your-nearline-gcs-bucket";
// What day and time in UTC to start the transfer, expressed as an epoch date timestamp.
// If this is in the past relative to when the job is created, it will run the next day.
// long startDateTime =
// new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime();
// Parse epoch timestamp into the model classes
Calendar startCalendar = Calendar . getInstance ();
startCalendar . setTimeInMillis ( startDateTime );
// Note that this is a Date from the model class package, not a java.util.Date
Date date =
Date . newBuilder ()
. setYear ( startCalendar . get ( Calendar . YEAR ))
. setMonth ( startCalendar . get ( Calendar . MONTH ) + 1 )
. setDay ( startCalendar . get ( Calendar . DAY_OF_MONTH ))
. build ();
TimeOfDay time =
TimeOfDay . newBuilder ()
. setHours ( startCalendar . get ( Calendar . HOUR_OF_DAY ))
. setMinutes ( startCalendar . get ( Calendar . MINUTE ))
. setSeconds ( startCalendar . get ( Calendar . SECOND ))
. build ();
TransferJob transferJob =
TransferJob . newBuilder ()
. setDescription ( jobDescription )
. setProjectId ( projectId )
. setTransferSpec (
TransferSpec . newBuilder ()
. setGcsDataSource ( GcsData . newBuilder (). setBucketName ( gcsSourceBucket ))
. setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsNearlineSinkBucket ))
. setObjectConditions (
ObjectConditions . newBuilder ()
. setMinTimeElapsedSinceLastModification (
Duration . newBuilder (). setSeconds ( 2592000 /* 30 days */ )))
. setTransferOptions (
TransferOptions . newBuilder (). setDeleteObjectsFromSourceAfterTransfer ( true )))
. setSchedule ( Schedule . newBuilder (). setScheduleStartDate ( date ). setStartTimeOfDay ( time ))
. setStatus ( Status . ENABLED )
. build ();
// Create a Transfer Service client
StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ();
// Create the transfer job
TransferJob response =
storageTransfer . createTransferJob (
CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ());
System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" );
System . out . println ( response . toString ());
}
}
Check latest transfer operation
API Client Library
import com.google.api.client.googleapis.util. Utils ;
import com.google.api.services.storagetransfer.v1.Storagetransfer ;
import com.google.api.services.storagetransfer.v1.StoragetransferScopes ;
import com.google.api.services.storagetransfer.v1.model.Operation ;
import com.google.api.services.storagetransfer.v1.model.TransferJob ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import java.io.IOException ;
public class CheckLatestTransferOperationApiary {
// Gets the requested transfer job and checks its latest operation
public static void checkLatestTransferOperationApiary ( String projectId , String jobName )
throws IOException {
// Your Google Cloud Project ID
// String projectId = "your-project-id";
// The name of the job to check
// String jobName = "myJob/1234567890";
// Create Storage Transfer client
GoogleCredentials credential = GoogleCredentials . getApplicationDefault ();
if ( credential . createScopedRequired ()) {
credential = credential . createScoped ( StoragetransferScopes . all ());
}
Storagetransfer storageTransfer =
new Storagetransfer . Builder (
Utils . getDefaultTransport (),
Utils . getDefaultJsonFactory (),
new HttpCredentialsAdapter ( credential ))
. build ();
// Get transfer job and check latest operation
TransferJob transferJob = storageTransfer . transferJobs (). get ( jobName , projectId ). execute ();
String latestOperationName = transferJob . getLatestOperationName ();
if ( latestOperationName != null ) {
Operation latestOperation =
storageTransfer . transferOperations (). get ( latestOperationName ). execute ();
System . out . println ( "The latest operation for transfer job " + jobName + " is:" );
System . out . println ( latestOperation . toPrettyString ());
} else {
System . out . println (
"Transfer job "
+ jobName
+ " does not have an operation scheduled yet,"
+ " try again once the job starts running." );
}
}
}
Cloud Client Library
import com.google.longrunning. Operation ;
import com.google.storagetransfer.v1.proto. StorageTransferServiceClient ;
import com.google.storagetransfer.v1.proto. TransferProto . GetTransferJobRequest ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferJob ;
import com.google.storagetransfer.v1.proto. TransferTypes . TransferOperation ;
import java.io.IOException ;
public class CheckLatestTransferOperation {
// Gets the requested transfer job and checks its latest operation
public static void checkLatestTransferOperation ( String projectId , String jobName )
throws IOException {
// Your Google Cloud Project ID
// String projectId = "your-project-id";
// The name of the job to check
// String jobName = "myJob/1234567890";
StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ();
// Get transfer job and check latest operation
TransferJob transferJob =
storageTransfer . getTransferJob (
GetTransferJobRequest . newBuilder (). setJobName ( jobName ). setProjectId ( projectId ). build ());
String latestOperationName = transferJob . getLatestOperationName ();
if ( ! latestOperationName . isEmpty ()) {
Operation operation = storageTransfer . getOperationsClient (). getOperation ( latestOperationName );
TransferOperation latestOperation =
TransferOperation . parseFrom ( operation . getMetadata (). getValue ());
System . out . println ( "The latest operation for transfer job " + jobName + " is:" );
System . out . println ( latestOperation . toString ());
} else {
System . out . println (
"Transfer job "
+ jobName
+ " hasn't run yet,"
+ " try again once the job starts running." );
}
}
}
Python
Updating dependencies
To use the new library, add a dependency on google-cloud-storage-transfer .
This will be used instead of the discovery client from
google-api-python-client .
pip install --upgrade google-cloud-storage-transfer
Client instantiation
Use the storage_transfer module instead of googleapiclient.discovery .
API Client Library
"""A sample for creating a Storage Transfer Service client."""
import googleapiclient.discovery
def create_transfer_client ():
return googleapiclient . discovery . build ( "storagetransfer" , "v1" )
Cloud Client Library
"""A sample for creating a Storage Transfer Service client."""
from google.cloud import storage_transfer
def create_transfer_client ():
return storage_transfer . StorageTransferServiceClient ()
Sample comparisons
To illustrate the differences between the two libraries, here are the old API Client Samples side-by-side with their equivalents in the Cloud Client Library.
Transfer from Amazon S3
API Client Library
def main (
description ,
project_id ,
start_date ,
start_time ,
source_bucket ,
access_key_id ,
secret_access_key ,
sink_bucket ,
):
"""Create a one-time transfer from Amazon S3 to Google Cloud Storage."""
storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" )
# Edit this template with desired parameters.
transfer_job = {
"description" : description ,
"status" : "ENABLED" ,
"projectId" : project_id ,
"schedule" : {
"scheduleStartDate" : {
"day" : start_date . day ,
"month" : start_date . month ,
"year" : start_date . year ,
},
"scheduleEndDate" : {
"day" : start_date . day ,
"month" : start_date . month ,
"year" : start_date . year ,
},
"startTimeOfDay" : {
"hours" : start_time . hour ,
"minutes" : start_time . minute ,
"seconds" : start_time . second ,
},
},
"transferSpec" : {
"awsS3DataSource" : {
"bucketName" : source_bucket ,
"awsAccessKey" : {
"accessKeyId" : access_key_id ,
"secretAccessKey" : secret_access_key ,
},
},
"gcsDataSink" : { "bucketName" : sink_bucket },
},
}
result = storagetransfer . transferJobs () . create ( body = transfer_job ) . execute ()
print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 )))
Cloud Client Library
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
Transfer to nearline
API Client Library
def main ( description , project_id , start_date , start_time , source_bucket , sink_bucket ):
"""Create a daily transfer from Standard to Nearline Storage class."""
storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" )
# Edit this template with desired parameters.
transfer_job = {
"description" : description ,
"status" : "ENABLED" ,
"projectId" : project_id ,
"schedule" : {
"scheduleStartDate" : {
"day" : start_date . day ,
"month" : start_date . month ,
"year" : start_date . year ,
},
"startTimeOfDay" : {
"hours" : start_time . hour ,
"minutes" : start_time . minute ,
"seconds" : start_time . second ,
},
},
"transferSpec" : {
"gcsDataSource" : { "bucketName" : source_bucket },
"gcsDataSink" : { "bucketName" : sink_bucket },
"objectConditions" : {
"minTimeElapsedSinceLastModification" : "2592000s" # 30 days
},
"transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : "true" },
},
}
result = storagetransfer . transferJobs () . create ( body = transfer_job ) . execute ()
print ( "Returned transferJob: {} " . format ( json . dumps ( result , indent = 4 )))
Cloud Client Library
Note the import of google.protobuf.duration_pb2.Duration .
from datetime import datetime
from google.cloud import storage_transfer
from google.protobuf.duration_pb2 import Duration
def create_daily_nearline_30_day_migration (
project_id : str ,
description : str ,
source_bucket : str ,
sink_bucket : str ,
start_date : datetime ,
):
"""Create a daily migration from a GCS bucket to a Nearline GCS bucket
for objects untouched for 30 days."""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# A useful description for your transfer job
# description = 'My transfer job'
# Google Cloud Storage source bucket name
# source_bucket = 'my-gcs-source-bucket'
# Google Cloud Storage destination bucket name
# sink_bucket = 'my-gcs-destination-bucket'
transfer_job_request = storage_transfer . CreateTransferJobRequest (
{
"transfer_job" : {
"project_id" : project_id ,
"description" : description ,
"status" : storage_transfer . TransferJob . Status . ENABLED ,
"schedule" : {
"schedule_start_date" : {
"day" : start_date . day ,
"month" : start_date . month ,
"year" : start_date . year ,
}
},
"transfer_spec" : {
"gcs_data_source" : {
"bucket_name" : source_bucket ,
},
"gcs_data_sink" : {
"bucket_name" : sink_bucket ,
},
"object_conditions" : {
"min_time_elapsed_since_last_modification" : Duration (
seconds = 2592000 # 30 days
)
},
"transfer_options" : {
"delete_objects_from_source_after_transfer" : True
},
},
}
}
)
result = client . create_transfer_job ( transfer_job_request )
print ( f "Created transferJob: { result . name } " )
Check latest transfer operation
API Client Library
"""Command-line sample that checks the latest operation of a transfer.
This sample is used on this page:
https://cloud.google.com/storage/transfer/create-transfer
For more information, see README.md.
"""
import argparse
import json
import googleapiclient.discovery
def check_latest_transfer_operation ( project_id , job_name ):
"""Check the latest transfer operation associated with a transfer job."""
storagetransfer = googleapiclient . discovery . build ( "storagetransfer" , "v1" )
transferJob = (
storagetransfer . transferJobs ()
. get ( projectId = project_id , jobName = job_name )
. execute ()
)
latestOperationName = transferJob . get ( "latestOperationName" )
if latestOperationName :
result = (
storagetransfer . transferOperations () . get ( name = latestOperationName ) . execute ()
)
print (
"The latest operation for job"
+ job_name
+ " is: {} " . format ( json . dumps ( result , indent = 4 , sort_keys = True ))
)
else :
print (
"Transfer job "
+ job_name
+ " does not have an operation scheduled yet, "
+ "try again once the job starts running."
)
if __name__ == "__main__" :
parser = argparse . ArgumentParser (
description = __doc__ , formatter_class = argparse . RawDescriptionHelpFormatter
)
parser . add_argument ( "project_id" , help = "Your Google Cloud project ID." )
parser . add_argument ( "job_name" , help = "Your job name." )
args = parser . parse_args ()
check_latest_transfer_operation ( args . project_id , args . job_name )
Cloud Client Library
Note the use of storage_transfer.TransferOperation.deserialize
from google.cloud import storage_transfer
def check_latest_transfer_operation ( project_id : str , job_name : str ):
"""Checks the latest transfer operation for a given transfer job."""
client = storage_transfer . StorageTransferServiceClient ()
# The ID of the Google Cloud Platform Project that owns the job
# project_id = 'my-project-id'
# Storage Transfer Service job name
# job_name = 'transferJobs/1234567890'
transfer_job = client . get_transfer_job (
{
"project_id" : project_id ,
"job_name" : job_name ,
}
)
if transfer_job . latest_operation_name :
response = client . transport . operations_client . get_operation (
transfer_job . latest_operation_name
)
operation = storage_transfer . TransferOperation . deserialize (
response . metadata . value
)
print ( f "Latest transfer operation for ` { job_name } `: { operation } " )
else :
print ( f "Transfer job { job_name } has not ran yet." )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

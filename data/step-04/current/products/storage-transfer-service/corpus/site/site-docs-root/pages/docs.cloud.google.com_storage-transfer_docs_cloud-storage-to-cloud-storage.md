---
title: "Transfer between Cloud Storage buckets \_|\_ Storage Transfer Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage
  title: "Transfer between Cloud Storage buckets \_|\_ Storage Transfer Service \_\
    |\_ Google Cloud Documentation"
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
Transfer between Cloud Storage buckets
Stay organized with collections
Save and categorize content based on your preferences.
Storage Transfer Service can be used to transfer large amounts of data between
Cloud Storage buckets, either within the same Google Cloud project,
or between different projects.
Bucket migrations are useful in a number of scenarios. They can be used to
consolidate data from separate projects, to move data into a backup location,
or to change the location of your data.
When to use Storage Transfer Service
Google Cloud offers multiple options to transfer data between
Cloud Storage buckets. We recommend the following guidelines:
Transferring less than 1 TB: Use gcloud . For instructions,
refer to
Move and rename buckets .
Transferring more than 1 TB: Use Storage Transfer Service. Storage Transfer Service is a
managed transfer option that provides out of the box security, reliability,
and performance. It eliminates the need to optimize and maintain scripts,
and handle retries.
This guide discusses best practices when transferring data between
Cloud Storage buckets using Storage Transfer Service.
Define a transfer strategy
What your transfer strategy looks like depends on the complexity of your
situation. Make sure to include the following considerations in your plan.
Choose a bucket name
To move your data to a storage bucket with a different location, choose one of
the following approaches:
New bucket name. Update your applications to point to a storage bucket
with a different name.
Keep bucket name. Replace your storage bucket to keep the current name,
meaning you don't need to update your applications.
In both cases you should plan for downtime, and give your users suitable notice
that downtime is coming. Review the following explanations to understand which
choice is best for you.
New bucket name
With a new bucket name, you need to update all code and services that use your
current bucket. How you do this depends on how your applications are built and
deployed.
For certain setups this approach might have less downtime, but requires more
work to ensure a smooth transition. It involves the following steps:
Copying your data to a new storage bucket.
Starting your downtime.
Updating your applications to point to the new bucket.
Verifying that everything works as expected, and that all relevant systems
and accounts have access to the bucket.
Deleting the original bucket.
Ending your downtime.
Keep bucket name
Use this approach if you prefer not to change your code to point to a new bucket
name. It involves the following steps:
Copying your data to a temporary storage bucket.
Starting your downtime.
Deleting your original bucket.
Creating a new bucket with the same name as your original bucket.
Copying the data to your new bucket from the temporary bucket.
Deleting the temporary bucket.
Verifying that everything works as expected, and that all relevant systems
and accounts have access to the bucket.
Ending your downtime.
Caution: Bucket names must be globally unique .
There's a risk that someone else could take the bucket name that you need after
you delete your old bucket, but before you create your new one. Make sure to
create the new bucket immediately after deleting the old one.
Minimize downtime
Storage Transfer Service does not lock reads or writes on the source or destination
buckets during a transfer.
If you choose to manually lock reads/writes on your bucket, you can minimize
downtime by transferring your data in two steps: seed, and sync.
Seed transfer : Perform a bulk transfer without locking read/write on the
source.
Sync transfer : After the first run is complete, lock the read/write on
the source bucket and perform another transfer. Storage Transfer Service transfers
are incremental by default, so this second transfer only transfers data
that changed during the seed transfer.
Optimize the transfer speed
When estimating how long a transfer job takes, consider the possible
bottlenecks. For example, if the source has billions of small files, then
your transfer speed is going to be QPS-bound. If object sizes are large,
bandwidth might be the bottleneck.
Bandwidth limits are set at the region level and are fairly allocated across all
projects. If sufficient bandwidth is available, Storage Transfer Service can complete
around 1000 tasks per transfer job per second. You can accelerate a transfer in
this case by splitting your job into multiple small transfer jobs, for example
by using include and exclude prefixes
to transfer certain files.
In cases where the location, storage class, and encryption key are the same,
Storage Transfer Service does not create a new copy of the bytes; it instead creates a
new metadata entry that points to the source blob. As a result, same location
and class copies of a large corpus are completed very quickly and are only
QPS-bound.
Deletes are also metadata-only operations. For these transfers, parallelizing
the transfer by splitting it into multiple small jobs can increase the speed.
Preserve metadata
The following object metadata is preserved when transferring data between
Cloud Storage buckets with Storage Transfer Service:
User-created custom metadata .
Cloud Storage fixed-key metadata fields, such as Cache-Control,
Content-Disposition, Content-Type, and Custom-Time.
Object size.
Generation number is preserved
as a custom metadata field with the key
x-goog-reserved-source-generation , which you can edit later or remove.
The following metadata fields can optionally be preserved when transferring
using the API:
ACLs ( acl )
Storage class ( storageClass )
CMEK ( kmsKey )
Temporary hold ( temporaryHold )
Object creation time ( customTime )
Refer to the TransferSpec API reference
for more details.
The following metadata fields aren't preserved:
Last updated time ( updated )
etag
componentCount
If preserved, object creation time is stored as a custom field,
customTime . The object's updated time is reset upon transfer, so the
object's time spent in its storage class is also reset. This means an object in
Coldline Storage, post-transfer, has to exist again for 90 days at the
destination to avoid early deletion charges.
You can apply your createTime -based lifecycle policies
using customTime . Existing customTime values are overwritten.
For more details on what is and isn't preserved, refer to
Metadata preservation .
Handle versioned objects
If you want to transfer all versions of your storage objects and not just the
latest, you can use Storage Transfer Service's
manifest feature .
To transfer all object versions:
List the bucket objects and copy them into a JSON file:
gcloud storage ls --all-versions --recursive --json [ SOURCE_BUCKET ] > object-listing.json
This command typically lists around 1k objects per second.
Copy the non-current objects into a CSV file:
jq - r ' .[] | select ( . type == "cloud_object" and (. metadata | has ( "timeDeleted" ))) | [. metadata . name , . metadata . generation ] | @ csv ' object - listing . json > non - current - object - manifest . csv
Enable object versioning on
the destination bucket.
Transfer the non-current versions with the following transfer options:
Specify the manifest
file .
Choose to always overwrite objects in the sink ( OVERWRITE_WHEN=always ).
Note that this can in rare cases create duplicate versions of a file.
Preserve the timeCreated metadata
( MetdataOptions.timeCreated=TIME_CREATED_PRESERVE_AS_CUSTOM_TIME ).
Transfer the live versions using a regular transfer job.
Configure transfer options
Some of the options available to you when setting up your transfer are as
follows:
Logging : Cloud Logging
provides detailed logs of individual objects, allowing you to verify
transfer status and to perform additional data integrity checks.
Filtering : You
can use include and exclude prefixes to limit which objects
Storage Transfer Service operates on. This option can be used to split a transfer
into multiple transfer jobs so that they can run in parallel. See
Optimize the transfer speed for more
information.
Transfer options :
You can configure your transfer to overwrite existing items in the
destination bucket; to delete objects in the destination that don't exist in
the transfer set; or to delete transferred objects from the source.
Transfer your data
After you've defined your transfer strategy , you can
perform the transfer itself.
Create a new bucket
Before beginning the transfer, create a storage bucket .
See location_considerations for help
choosing an appropriate bucket location.
You might wish to copy over some of the bucket metadata
when you create the new bucket. See Get bucket metadata
to learn how to display the source bucket's metadata, so that you can apply the
same settings to your new bucket.
Copy objects to the new bucket
You can copy objects from the source bucket to a new bucket using the
Google Cloud console, the gcloud CLI, REST API, or client libraries.
Which approach you choose depends on your transfer strategy .
The following instructions are for the basic use case of transferring objects
from one bucket to another, and should be modified to fit your needs.
Don't include sensitive information such as personally identifiable information
(PII) or security data in your transfer job name. Resource names may be
propagated to the names of other Google Cloud resources and may be exposed
to Google-internal systems outside of your project.
Google Cloud console
Use the Cloud Storage Transfer Service from within
Google Cloud console:
Open the Transfer page in the Google Cloud console.
Open
the Transfer page
Click Create transfer job .
Follow the step-by-step walkthrough, clicking Next step as you
complete each step:
Get started: Use Google Cloud Storage as both your Source Type
and Destination Type .
Choose a source: Either enter the name of the wanted bucket directly, or
click Browse to find and select the bucket you want.
Choose a destination: Either enter the name of the wanted bucket
directly, or click Browse to find and select the bucket you want.
Choose settings: Select the option Delete files from source after
they're transferred .
Scheduling options: You can ignore this section.
After you complete the step-by-step walkthrough, click Create .
This begins the process of copying objects from your old bucket into
your new one. This process may take some time; however, after you click
Create , you can navigate away from the Google Cloud console.
To view the transfer's progress:
Open the Transfer page in the Google Cloud console.
Open
the Transfer page
To learn how to get detailed error information about failed Storage Transfer Service
operations in the Google Cloud console, see
Troubleshooting .
After the transfer completes, you don't need to do anything to delete the
objects from your old bucket if you selected the Delete source objects
after the transfer completes checkbox during setup. You may, however,
want to also delete your old bucket ,
which you must do separately.
gcloud CLI
Install the gcloud CLI
If you haven't already,
install the gcloud command-line tool .
Then, call gcloud init to initialize the tool and to specify your project ID
and user account. See Initializing Cloud SDK for
more details.
gcloud init
Add the service account to your destination folder
You must add the Storage Transfer Service service account to your destination bucket
before creating a transfer. To do so, use
gcloud storage buckets add-iam-policy-binding :
gcloud storage buckets add-iam-policy-binding gs:// bucket_name \
--member=serviceAccount: project-12345678 @storage-transfer-service.iam.gserviceaccount.com \
--role=roles/storage.admin
For instructions using the Google Cloud console or API, refer to
Use IAM permissions
in the Cloud Storage documentation.
Create the transfer job
To create a new transfer job, use the gcloud transfer jobs create command.
Creating a new job initiates the specified transfer, unless a schedule or
--do-not-run is specified.
gcloud transfer jobs create SOURCE DESTINATION
Replace the following:
SOURCE is the data source for this transfer, in the format
gs://BUCKET_NAME .
DESTINATION is your new bucket, in the form gs://BUCKET_NAME .
Additional options include:
Job information : You can specify --name and --description .
Schedule : Specify --schedule-starts , --schedule-repeats-every , and
--schedule-repeats-until , or --do-not-run .
Object conditions : Use conditions to determine which objects are
transferred. These include --include-prefixes and --exclude-prefixes ,
and the time-based conditions in
--include-modified-[before | after]-[absolute | relative] .
Transfer options : Specify whether to overwrite destination files
( --overwrite-when=different or always ) and whether to delete certain
files during or after the transfer
( --delete-from=destination-if-unique or source-after-transfer ); specify
which metadata values to preserve ( --preserve-metadata ); and
optionally set a storage class on transferred objects
( --custom-storage-class ).
Notifications : Configure
Pub/Sub notifications for transfers
with --notification-pubsub-topic , --notification-event-types , and
--notification-payload-format .
To view all options, run gcloud transfer jobs create --help .
For example, to transfer all objects with the prefix folder1 :
gcloud transfer jobs create gs://old-bucket gs://new-bucket \
--include-prefixes = "folder1/"
REST
In this example, you'll learn how to move files from one Cloud Storage
bucket to another. For example, you can move data to a bucket in another
location .
Note: The process is the same if the bucket is located in a different
project.
Request using transferJobs create :
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"description" : "YOUR DESCRIPTION" ,
"status" : "ENABLED" ,
"projectId" : "PROJECT_ID" ,
"schedule" : {
"scheduleStartDate" : {
"day" : 1 ,
"month" : 1 ,
"year" : 2025
},
"startTimeOfDay" : {
"hours" : 1 ,
"minutes" : 1
},
"scheduleEndDate" : {
"day" : 1 ,
"month" : 1 ,
"year" : 2025
}
},
"transferSpec" : {
"gcsDataSource" : {
"bucketName" : "GCS_SOURCE_NAME"
},
"gcsDataSink" : {
"bucketName" : "GCS_SINK_NAME"
},
"transferOptions" : {
"deleteObjectsFromSourceAfterTransfer" : true
}
}
}
Response:
200 OK
{
"transferJob" : [
{
"creationTime" : "2015-01-01T01:01:00.000000000Z" ,
"description" : "YOUR DESCRIPTION" ,
"name" : "transferJobs/JOB_ID" ,
"status" : "ENABLED" ,
"lastModificationTime" : "2015-01-01T01:01:00.000000000Z" ,
"projectId" : "PROJECT_ID" ,
"schedule" : {
"scheduleStartDate" : {
"day" : 1 ,
"month" : 1 ,
"year" : 2015
},
"startTimeOfDay" : {
"hours" : 1 ,
"minutes" : 1
}
},
"transferSpec" : {
"gcsDataSource" : {
"bucketName" : "GCS_SOURCE_NAME" ,
},
"gcsDataSink" : {
"bucketName" : "GCS_NEARLINE_SINK_NAME"
},
"objectConditions" : {
"minTimeElapsedSinceLastModification" : "2592000.000s"
},
"transferOptions" : {
"deleteObjectsFromSourceAfterTransfer" : true
}
}
}
]
}
Client libraries
In this example, you'll learn how to move files from one Cloud Storage
bucket to another. For example, you can replicate data to a bucket in another
location .
Note: The process is the same if the bucket is located in a different
project.
For more information about the Storage Transfer Service client libraries, see
Getting started with Storage Transfer Service client libraries .
Java
Looking for older samples? See the Storage Transfer Service Migration Guide .
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
Python
Looking for older samples? See the Storage Transfer Service Migration Guide .
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
Verify copied objects
After your transfer is complete, we recommend performing additional data
integrity checks.
Validate that the objects were copied correctly, by verifying the metadata
on the objects, such as checksums and size.
Verify that the correct version of the objects were copied.
Storage Transfer Service offers an out-of-the-box option to verify that objects are
copies. If you've enabled
logging ,
view logs to verify
whether all the objects were successfully copied, including their
corresponding metadata fields.
Start using the destination bucket
After the migration is complete and verified, update any existing applications
or workloads so that they use the target bucket name. Check data access logs
in Cloud Audit Logs to ensure that your
operations are correctly modifying and reading objects.
Delete the original bucket
After everything is working well,
delete the original bucket .
Storage Transfer Service offers the option of deleting objects after they have been
transferred by specifying deleteObjectsFromSourceAfterTransfer: true in the
job configuration, or selecting the option in the Google Cloud console.
Schedule object deletion
To schedule the deletion of your objects at a later date, use a combination of a
scheduled transfer job , and the
deleteObjectsUniqueInSink = true
option.
The transfer job should be set up to transfer an empty bucket into the bucket
containing your objects. This causes Storage Transfer Service to list the objects and
begin deleting them. As deletions are a metadata-only operation, the transfer
job is only QPS-bound. To speed up the process, split the transfer into multiple
jobs, each acting on a distinct set of prefixes.
Alternatively, Google Cloud offers a
managed cron job scheduler . For more information, see
Schedule Google Cloud STS Transfer Job with Cloud Scheduler .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

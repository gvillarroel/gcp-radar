---
title: "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication
  title: "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google\
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
Send feedback
Use cross-bucket replication
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of cross-bucket replication and instructions
on how to use the feature.
Overview of cross-bucket replication
In some cases, you might want to copy data from one
Cloud Storage bucket to another. Cross-bucket replication copies
new and updated objects asynchronously from a source bucket to a destination
bucket.
Cross-bucket replication differs from default replication and turbo replication
in that your data exists in two buckets, each with their own configurations such
as storage location, encryption, access, and storage class. As a result, it
offers data recovery and availability, but is also suitable for:
Data sovereignty : Maintain data across geographically distant regions.
Maintain separate development and production versions : Create distinct
buckets and namespaces, so that development doesn't affect your production
workload.
Share data : Replicate data to a bucket owned by a vendor or partner.
Data Aggregation : Combine data from different buckets into a single
bucket to run analytics workloads.
Manage cost, security, and compliance : Maintain your data under
different ownerships, storage classes, and retention periods.
Cross-bucket replication uses Storage Transfer Service to replicate objects and
Pub/Sub to get alerted of changes to the source and destination
buckets. Cross-bucket replication can be enabled on new buckets you create and
on existing buckets. Most objects can be replicated in the order of
minutes, while objects larger than one GiB can take several hours.
Note: When using cross-bucket replication, you might incur charges from data
transfer fees, data storage fees, data processing fees, data retrieval fees,
and operation fees for Cloud Storage, Storage Transfer Service, and Pub/Sub.
For details on pricing, see Cloud Storage pricing ,
Storage Transfer Service pricing , and Pub/Sub pricing .
Limitations
Custom names are not supported for cross-bucket replication jobs. Create requests that
contain a value for the name field return an error.
Cross-bucket replication is not supported for hierarchical namespace buckets.
Object deletions in the source bucket are not replicated to the destination
bucket.
Object lifecycle configurations aren't replicated.
When objects are replicated, timestamp metadata (for example,
timeCreated and timeUpdated ) is not preserved. See
Transfers between Cloud Storage buckets
for details on metadata preservation.
Because cross-bucket replication can be used to replicate data between buckets
located in any Google Cloud location, cross-bucket replication performance
varies based on the locations selected. Consequently, cross-bucket replication
does not offer a Recovery Point Objective (RPO).
Objects that are already in the bucket when a replication job is created are
not automatically replicated. Only new and updated objects are replicated.
To replicate existing objects, create a one-time Storage Transfer Service transfer
job from your existing bucket to the new bucket. See
Create transfers for instructions.
Before you begin
Before you begin, complete the following steps.
Enable the Storage Transfer Service API
If you haven't already, enable the Storage Transfer Service API .
Get required roles
To get the permissions that
you need to use cross-bucket replication,
ask your administrator to grant you the
Storage Transfer User ( roles/storagetransfer.user )
IAM role on the bucket or the source project.
This predefined role contains
the permissions required to use cross-bucket replication. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use cross-bucket replication:
storagetransfer.jobs.create
storagetransfer.jobs.delete
storagetransfer.jobs.get
storagetransfer.jobs.list
storagetransfer.jobs.run
storagetransfer.jobs.update
For instructions on granting roles on buckets, see
Use IAM with buckets . For instructions on granting roles
on projects, see Manage access to projects .
Grant required roles
Cross-bucket replication uses Storage Transfer Service to
replicate objects from your source bucket to your destination bucket,
and Pub/Sub to receive notifications of changes to your source bucket.
So that cross-bucket replication can use these services, you must grant the
required permissions to the service account that's used by Storage Transfer Service
to replicate data, as well as the service agent that's used by Pub/Sub
to write notifications.
Grant required roles for Storage Transfer Service
The required permissions to replicate data using Storage Transfer Service can be
granted to one of two service accounts. Either:
The Storage Transfer Service service agent, which is automatically created and
managed by Google. The email address of this service agent follows the naming
format
project- PROJECT_NUMBER @storage-transfer-service.iam.gserviceaccount.com .
You can get the email address of the Storage Transfer Service service agent by
using the Storage Transfer Service googleServiceAccounts.get API .
Or:
A user-managed service account. The email address of this service account
follows the naming format
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com .
You can create your own service account and grant necessary permissions to
replicate the data.
For instructions on using a user-managed service account with
Storage Transfer Service, see
Delegate service agent permissions to a user-managed service account .
There are additional permissions required beyond those in the following lists.
In particular, you must grant the service agent access to the user-managed
service account by assigning the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ). See
Grant access to the service agent .
The Storage Transfer Service service agent or user service account needs the following
permissions to replicate your objects and set up Pub/Sub notifications
for your source bucket:
Required permissions
The following permissions must be granted on the source project:
pubsub.topics.create
pubsub.subscriptions.create
pubsub.subscriptions.consume
The following permissions must be granted on the source bucket:
storage.buckets.get
storage.buckets.update
storage.objects.get
The following permissions must be granted on the destination bucket:
storage.buckets.get
storage.objects.create
storage.objects.get
These permissions can be granted through custom roles or by
granting all of the following predefined roles :
Pub/Sub Editor ( roles/pubsub.editor ) role on the source project
Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the source bucket
Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the destination bucket
Grant required roles for Pub/Sub
Cloud Storage uses a Google-managed service agent to manage
Pub/Sub notifications. The email address of this service agent follows
the naming format
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com .
Note: This is a different service agent from the Storage Transfer Service service
agent in the previous section.
The Cloud Storage service agent needs the following permissions to
set up Pub/Sub and publish messages to a topic:
Required permissions
pubsub.topics.publish on the Pub/Sub topic
pubsub.subscriptions.consume on the Pub/Sub topic
pubsub.subscriptions.create on the source project
These permissions can be granted through custom roles or by
granting the following predefined role :
Pub/Sub Publisher ( roles/pubsub.publisher ) on the source project
Create a replication job
Console
For Google Cloud console instructions on how to create a replication job,
refer to Create a replication job using the Google Cloud console .
Command line
When using the Google Cloud CLI, you can create a replication job for
existing buckets.
To create a replication job, use the
gcloud alpha transfer jobs create command with the --replication
flag:
gcloud alpha transfer jobs create gs:// SOURCE_BUCKET_NAME gs:// DESTINATION_BUCKET_NAME --replication
Replace:
SOURCE_BUCKET_NAME with the name of the source
bucket you want to replicate. For example, my-source-bucket .
DESTINATION_BUCKET_NAME with the name of the
destination bucket. For example, my-destination-bucket .
Note that the --name flag is not supported for cross-bucket replication jobs.
REST APIs
JSON API
When using the JSON API, you can create a replication job for
existing buckets.
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains a TransferJob object with an
initialized ReplicationSpec resource :
Tra nsfer Job {
Replica t io n Spec : {
"gcsDataSource" : {
"bucketName" : " SOURCE_BUCKET_NAME "
},
"gcsDataSink" {
"bucketName" : " DESTINATION_BUCKET_NAME "
},
"objectConditions" : {
},
"transferOptions" : {
"overwriteWhen" : " OVERWRITE_OPTION "
}
}
...
}
Replace:
SOURCE_BUCKET_NAME with the name of the
source bucket that contains the objects you want to replicate. For
example, example-source-bucket .
DESTINATION_BUCKET_NAME with the name
of the destination bucket where your objects will be replicated. For
example, example-destination-bucket .
OVERWRITE_OPTION with an option for how
existing objects in the destination bucket can be overwritten as the
result of a replication job, which can happen when the destination
object and the source object have the same name. The value must be
one of the following:
ALWAYS : Always overwrite objects in the destination bucket
DIFFERENT : Only overwrite objects in the destination bucket if
the destination object data is different from the source
object data
NEVER : Never overwrite objects in the destination bucket
Note that the name field is not supported for cross-bucket replication jobs.
Use cURL to call the Storage Transfer Service REST API with a
transferJobs.create request:
curl -X POST --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storagetransfer.googleapis.com/v1/transferJobs"
Replace the following:
JSON_FILE_NAME is the name of the JSON file
you created in Step 2.
To check the status of the replication job,
view Cloud Logging for Storage Transfer Service logs .
List replication jobs
Console
For Google Cloud console instructions on how to list replication jobs,
refer to List replication jobs using the Google Cloud console .
Command line
Use the gcloud alpha transfer jobs list command with the
--job-type flag:
gcloud alpha transfer jobs list --job-type=replication
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Storage Transfer Service REST API with a
transferJobs.list request:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storagetransfer.googleapis.com/v1/transferJobs"
View a replication job
Console
For Google Cloud console instructions on how to view a replication job,
refer to View a replication job using the Google Cloud console .
Command line
Use the gcloud alpha transfer jobs describe command:
gcloud alpha transfer jobs describe JOB_NAME
Replace:
JOB_NAME with the unique ID of the replication
job. For example, 1234567890 . To find the ID of your transfer job,
list your replication jobs .
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Storage Transfer Service REST API with a
transferJobs.get request:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storagetransfer.googleapis.com/v1/transferJobs/ JOB_NAME "
Replace:
JOB_NAME with the unique ID of the
replication job. For example, 1234567890 . To find the ID of your
replication job, list your replication jobs .
Update a replication job
You can update the following fields of a replication job:
The description of the replication job
The configuration for running a replication job
The configuration of notifications published to Pub/Sub
The logging behavior for replication job operations
The status of the replication job (whether it's enabled, disabled, or deleted)
Console
For Google Cloud console instructions on how to update a replication job,
refer to Update a replication job using the Google Cloud console .
Command line
Use the gcloud alpha transfer jobs update command with the flags
that control the replication job properties you want to update. For a list
of possible flags, view the
gcloud alpha transfer jobs update documentation .
For example, to update the object overwrite behavior of the replication job,
run the gcloud alpha transfer jobs update command with the
--overwrite-when flag:
gcloud alpha transfer jobs update JOB_NAME --overwrite-when= OVERWRITE_OPTION
Replace:
JOB_NAME with the unique ID of the replication
job. For example, 1234567890 . To find the ID of your transfer job,
list or view your transfer job.
OVERWRITE_OPTION with an option for how existing
objects in the destination bucket can be overwritten as the result of a
replication job, which can happen when the destination object and the
source object have the same name. The value must be one of the following:
always : Always overwrite destination objects.
different : Only overwrite objects in the destination bucket
if the destination object data is different from the source
object data.
never : Never overwrite destination objects.
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following structure that
includes the fields of the TransferJob object you want to
update:
{
"projectId" : s tr i n g ,
"transferJob" : {
objec t ( Tra nsfer Job )
},
"updateTransferJobFieldMask" : UPDATE_MASK
}
Replace the following:
object (TransferJob) is replaced with the fields
of the replication job you want to update. See the
TransferJob resource representation for more information.
UPDATE_MASK is a comma-separated list of the
field names you want to update. Values can be one or more of the
following: description , transferSpec , notificationConfig ,
loggingConfig , status .
For more information about the field names you can include,
see the transferJobs.patch request body .
Use cURL to call the Storage Transfer Service REST API with a
transferJobs.patch request:
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storagetransfer.googleapis.com/v1/transferJobs/ JOB_NAME "
Replace:
JOB_NAME with the unique ID of the
replication job. For example, 1234567890 . To find the ID of your
replication job, list your replication jobs .
Delete a replication job
Console
For Google Cloud console instructions on how to delete a replication job,
refer to Delete a replication job using the Google Cloud console .
Command line
Use the gcloud alpha transfer jobs delete command:
gcloud alpha transfer jobs delete JOB_NAME
Replace:
JOB_NAME with the unique ID of the replication
job. For example, 1234567890 . To find the ID of your replication job,
list your replication jobs .
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the Storage Transfer Service REST API with a
transferJobs.delete request:
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storagetransfer.googleapis.com/v1/transferJobs/ JOB_NAME "
Replace:
JOB_NAME with the unique ID of the
replication job. For example, 1234567890 . To find the ID of your
replication job, list your replication jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

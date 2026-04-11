---
title: "Manage transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/manage-transfers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/manage-transfers
  title: "Manage transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
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
Manage transfers
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to manage existing transfer jobs and operations.
To create a new transfer job, refer to Create transfers .
Edit a transfer configuration
You can edit the following properties of an existing transfer:
The transfer job's description
Microsoft Azure Blob Storage or Amazon S3 source credentials
Any filters applied to the transfer job
Options to overwrite or delete files
The transfer job's schedule
gcloud CLI
To edit an existing transfer configuration, use the
gcloud transfer jobs update command.
gcloud transfer jobs update \
JOB_NAME \
[ options ]
The variables are as follows:
JOB_NAME is the unique name of the job to update.
The options that can be updated are listed by running
gcloud transfer jobs update --help .
For example, to update the source and destination of a job, and to remove its
description, run the following command:
gcloud transfer jobs update \
JOB_NAME \
--source = gs://new-bucket-1 \
--destination = gs://new-bucket-2 \
--clear-description
Google Cloud console
To edit a transfer job, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
Click Configuration . The transfer job configuration is displayed.
To change an item, click edit Edit
next to the item.
To start a job with the edits, click Start a run .
REST
To edit a transfer configuration, use the
transferJobs.patch method.
Run a transfer job from an existing configuration
You can run an existing transfer job. This allows you to start jobs that have no
schedule, or to start a job outside of its schedule.
gcloud CLI
To run a transfer from an existing configuration, use
gcloud transfer jobs run :
gcloud transfer jobs run JOB_NAME
The optional --no-async flag can be specified to block other tasks in your
terminal until the transfer operation has completed.
Google Cloud console
To run a transfer from an existing configuration, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
To start a transfer job, click Start a run .
REST
To run a transfer job, use the
transferJobs.run
method.
Monitor a transfer job
gcloud CLI
To monitor the progress of a job in real time, use
gcloud transfer jobs monitor .
gcloud transfer jobs monitor JOB_NAME
The response shows the current operation, the job start time, and the amount
of data transferred. Skipped bytes and errors are also counted.
Cloud Monitoring
See Monitor transfer jobs
for details on using Cloud Monitoring with Storage Transfer Service.
View transfer job details
gcloud CLI
To view transfer job details, use gcloud transfer jobs describe :
gcloud transfer jobs describe JOB_NAME
To view this job's most recent operation, pass the value of
latestOperationName to the operations describe command:
gcloud transfer operations describe OPERATION_NAME
To list all of a job's transfer operations, use the
gcloud transfer operations list command:
gcloud transfer operations list --job-names = JOB_NAME
You can view operations for multiple jobs by listing them, comma-separated, as
the value of --job-names . Omit --job-names to view operations for all jobs.
Google Cloud console
You can view the following job details from the Google Cloud console:
The job description and name
The source type and location
The destination location
Job frequency
Job statistics
To view transfer job details, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
To display the details of a particular run, click the Start time for the
job run. The following job information is available:
Transfer status
Start and stop times
Duration
Progress
Data transferred
Number of errors
Data skipped
Average speed estimate
REST
To view the details of a transfer job, use the
transferJobs.get method to return
information about a specific transfer job such as its operation ID.
Client libraries
A TransferJob resource is
returned when you use transferJobs.create .
You can check the transfer's status after creating the job using
transferJobs.get . If the transfer job's
operation has started, this returns a
TransferJob containing a
populated
latestOperationName
field. Otherwise, if the transfer job's operation hasn't started, the
latestOperationName field is empty.
To check a transfer job's status
REST
Request using transferJobs
get :
GET h tt ps : //storagetransfer.googleapis.com/v1/{jobName="name"}
Go
import (
"context"
"fmt"
"io"
"cloud.google.com/go/longrunning/autogen/longrunningpb"
storagetransfer "cloud.google.com/go/storagetransfer/apiv1"
"cloud.google.com/go/storagetransfer/apiv1/storagetransferpb"
)
func checkLatestTransferOperation ( w io . Writer , projectID string , jobName string ) ( * storagetransferpb . TransferOperation , error ) {
// Your Google Cloud Project ID
// projectID := "my-project-id"
// The name of the job whose latest operation to check
// jobName := "transferJobs/1234567890"
ctx := context . Background ()
client , err := storagetransfer . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storagetransfer.NewClient: %w" , err )
}
defer client . Close ()
job , err := client . GetTransferJob ( ctx , & storagetransferpb . GetTransferJobRequest {
JobName : jobName ,
ProjectId : projectID ,
})
if err != nil {
return nil , fmt . Errorf ( "failed to get transfer job: %w" , err )
}
latestOpName := job . LatestOperationName
if latestOpName != "" {
lro , err := client . LROClient . GetOperation ( ctx , & longrunningpb . GetOperationRequest {
Name : latestOpName ,
})
if err != nil {
return nil , fmt . Errorf ( "failed to get transfer operation: %w" , err )
}
latestOp := & storagetransferpb . TransferOperation {}
lro . Metadata . UnmarshalTo ( latestOp )
fmt . Fprintf ( w , "the latest transfer operation for job %q is: \n%v" , jobName , latestOp )
return latestOp , nil
} else {
fmt . Fprintf ( w , "Transfer job %q hasn't run yet, try again later" , jobName )
return nil , nil
}
}
Java
Looking for older samples? See the
Storage Transfer Service Migration Guide .
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
// Storage Transfer Service job name
// jobName = 'transferJobs/1234567890'
// Creates a client
const client = new StorageTransferServiceClient ();
/**
* Checks the latest transfer operation for a given transfer job.
*/
async function checkLatestTransferOperation () {
const [ transferJob ] = await client . getTransferJob ({ projectId , jobName });
if ( transferJob . latestOperationName ) {
const [ transferOperation ] = await client . operationsClient . getOperation ({
name : transferJob . latestOperationName ,
});
const operation = JSON . stringify ( transferOperation , null , 2 );
console . log ( `Latest transfer operation for ' ${ jobName } ': ${ operation } ` );
} else {
console . log ( `Transfer job ' ${ jobName } ' has not ran yet.` );
}
}
checkLatestTransferOperation ();
Python
Looking for older samples? See the
Storage Transfer Service Migration Guide .
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
Pause a transfer job
You can pause a transfer currently in progress. When you pause the
transfer, the job state is maintained, and you can unpause it later. While a
transfer is paused, the schedule will not trigger the job to run again.
gcloud CLI
To pause a transfer job, pass the job's current operation name to
gcloud transfer operations pause .
gcloud transfer operations pause OPERATION_NAME
To resume a previously paused transfer job, which restarts the job in the
same spot it was when it was paused, use
gcloud transfer operations resume .
gcloud transfer operations resume OPERATION_NAME
Google Cloud console
To pause a transfer job, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
Click Pause run . The status for the current operation is displayed as
Paused .
To resume a previously paused transfer job, restarting the job in the
same spot it was when it was paused, follow these steps.
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
Click Resume run .
The status for the current operation is displayed as In progress .
REST
To pause a transfer job, use the
transferOperations.pause
method.
Deactivate a transfer job
Deactivating a transfer job prevents the transfer job from starting any further
scheduled operations, or operations manually started from the console. It does
not prevent a job from being manually started with the API or with the
jobs run gcloud command.
gcloud CLI
To deactivate a transfer job, update the job's status to disabled .
gcloud transfer jobs update JOB_NAME --status = disabled
To re-activate a job, set --status=enabled .
Google Cloud console
To deactivate a transfer job, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
Click Disable job . The Disable transfer job? dialog is displayed.
Read the dialog, then confirm the job's deactivation by clicking
Confirm .
A notice at the top of the Job details page is displayed, reminding you
that the job is deactivated.
REST
Use the
transferJobs.patch
method to set the transfer job's status
to DISABLED .
Delete a transfer job
You can delete transfer jobs that you no longer need. Deleting a job does the
following:
Stops any existing transfers that are part of the job.
Stops any recurring transfers that are part of the job.
Erases the job's configuration details.
Deleting a job is permanent. Once you delete the transfer job, it is removed
from the list of transfer jobs. Transfer job information is fully deleted from
Storage Transfer Service after 30 days.
Alternatively, you can deactivate the transfer job ,
which keeps the job listed in the Jobs page and lets you reactivate or
modify the job.
gcloud CLI
To delete a transfer job, use gcloud transfer jobs delete .
gcloud transfer jobs delete JOB_NAME
Google Cloud console
To delete a transfer job, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Select the checkbox next to the transfer job that you want to delete.
Click Delete job .
The Delete transfer job? dialog is displayed.
Read the dialog, then confirm the job deletion by typing the job's
automatically assigned name in the field and click Delete .
The job is removed from the Jobs page.
REST
To delete a transfer job using the REST API, see the
transferJobs.delete
reference.
View error details
If you encounter errors during a transfer run, you can view error details to
help troubleshoot the error.
To view error details for a transfer job run, do the following:
In the Google Cloud console, go to the Storage Transfer Service page.
Go to Storage Transfer Service
Click the transfer job's description. The Job details page is displayed.
Do one of the following to display job details:
Most recent job run: Click either the See error details button
or the View error details link. The Error details page is
displayed.
Historical job run:
Click the job run's Start time .
The Run details page is displayed.
Click the View error details link.
The Error details page is displayed.
To display additional details about each displayed error, click
expand_more Expand more .
To filter errors, enter properties to filter in the
Enter property name or value field.
When you place your cursor in the field, a drop-down menu with relevant
options is displayed to help you build your filter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

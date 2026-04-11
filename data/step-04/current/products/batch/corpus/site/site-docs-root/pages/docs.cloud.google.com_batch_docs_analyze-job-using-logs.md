---
title: "Analyze a job using logs \_|\_ Batch \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/analyze-job-using-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/analyze-job-using-logs
  title: "Analyze a job using logs \_|\_ Batch \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Batch
Guides
Send feedback
Analyze a job using logs
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to enable, generate, and view
logs from Cloud Logging
for a Batch job.
You can use logs to get information that is useful for
analyzing your jobs. For example, logs can help you debug failed jobs.
Important: You cannot view Cloud Logging logs after they are deleted, which
happens automatically after their retention period. Learn more about
log retention periods
in the Cloud Logging documentation.
Notably, logs are only generated after a job starts running
and only if logging was enabled for the job.
If you need to analyze a job without logs,
view status events instead.
Before you begin
If you haven't used Batch before, review
Get started with Batch
and enable Batch by completing the
prerequisites for projects and users .
To get the permissions that
you need to analyze a job using logs,
ask your administrator to grant you the
following IAM roles:
To create a job:
Batch Job Editor ( roles/batch.jobsEditor )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the job's service account , which by default is the default Compute Engine service account
To view logs:
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable logging for a job
To allow logs to be generated for a job, enable logs from
Cloud Logging when you create the job:
If you create a job using the Google Cloud console, logs from
Cloud Logging are always enabled.
If you create a job using the gcloud CLI or the
Batch API, logs from Cloud Logging are disabled
by default. To enable logs from Cloud Logging, include the following
configuration for the logsPolicy field while creating the job:
{
...
"logsPolicy": {
"destination": "CLOUD_LOGGING"
}
...
}
Write and generate logs for a job
When logs from Cloud Logging are enabled for a job, Cloud Logging
automatically generates any of the logs that are written for the job.
Specifically, Batch jobs can have the following log types:
agent logs ( batch_agent_logs ): logs for activities
from the Batch service agent.
Batch automatically writes agent logs for every job
that has enabled logging.
task logs ( batch_task_logs ): logs for any data that you've configured a
job's runnables to write to the
standard output ( stdout ) stream or standard error ( stderr ) stream .
You can optionally write task logs for each
job that has enabled logging.
View logs for a job
You can view a job's logs using the Google Cloud console, the
gcloud CLI, Logging API, Go, Java, Python, or C++.
Console
To view a job's logs using the Google Cloud console, do the following:
In the Google Cloud console, go to the Job list page.
Go to Job list
In the Job name column, click the name of a job.
The Job details page opens.
Click the Logs tab. Batch displays all logs associated with
the job.
Optional: To filter the logs do any of the following:
Enter a filter in the filter_list Filter field.
In the Severity list, select a severity .
Click open_in_new View in Logs Explorer
to build a query in the
Logs Explorer using the
Batch filter parameters .
gcloud
To view logs using the gcloud CLI, use the
gcloud logging read command :
gcloud logging read " QUERY "
where QUERY is a
query for Batch logs that contains
Batch filter parameters .
API
To view logs using the Logging API, use the
entries.list method :
POST https://logging.googleapis.com/v2/entries:list
{
"resourceNames": [
"projects/ PROJECT_ID "
],
"filter": " QUERY "
"orderBy": "timestamp desc"
}
Replace the following:
PROJECT_ID : the
project ID
of your project.
QUERY : a
query for Batch logs that contains
Batch filter parameters .
Go
Go
For more information, see the
Batch Go API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
batch "cloud.google.com/go/batch/apiv1"
"cloud.google.com/go/batch/apiv1/batchpb"
"cloud.google.com/go/logging"
"cloud.google.com/go/logging/logadmin"
"google.golang.org/api/iterator"
)
// Retrieve the logs written by the given job to Cloud Logging
func printJobLogs ( w io . Writer , projectID string , job * batchpb . Job ) error {
// projectID := "your_project_id"
ctx := context . Background ()
batchClient , err := batch . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer batchClient . Close ()
adminClient , err := logadmin . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "Failed to create logadmin client: %w" , err )
}
defer adminClient . Close ()
const name = "batch_task_logs"
iter := adminClient . Entries ( ctx ,
// Only get entries from the "batch_task_logs" log for the job with the given UID
logadmin . Filter ( fmt . Sprintf ( `logName = "projects/%s/logs/%s" AND labels.job_uid=%s` , projectID , name , job . Uid )),
)
var entries [] * logging . Entry
for {
logEntry , err := iter . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "unable to fetch log entry: %w" , err )
}
entries = append ( entries , logEntry )
fmt . Fprintf ( w , "%s\n" , logEntry . Payload )
}
fmt . Fprintf ( w , "Successfully fetched %d log entries\n" , len ( entries ))
return nil
}
Java
Java
For more information, see the
Batch Java API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.batch.v1. Job ;
import com.google.cloud.logging.v2. LoggingClient ;
import com.google.logging.v2. ListLogEntriesRequest ;
import com.google.logging.v2. LogEntry ;
import java.io.IOException ;
public class ReadJobLogs {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
// Project ID or project number of the Cloud project hosting the job.
String projectId = "YOUR_PROJECT_ID" ;
// The job which logs you want to print.
Job job = Job . newBuilder (). build ();
readJobLogs ( projectId , job );
}
// Prints the log messages created by given job.
public static void readJobLogs ( String projectId , Job job ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `loggingClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( LoggingClient loggingClient = LoggingClient . create ()) {
ListLogEntriesRequest request = ListLogEntriesRequest . newBuilder ()
. addResourceNames ( String . format ( "projects/%s" , projectId ))
. setFilter ( String . format ( "labels.job_uid=%s" , job . getUid ()))
. build ();
for ( LogEntry logEntry : loggingClient . listLogEntries ( request ). iterateAll ()) {
System . out . println ( logEntry . getTextPayload ());
}
}
}
}
Python
Python
For more information, see the
Batch Python API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from __future__ import annotations
from typing import NoReturn
from google.cloud import batch_v1
from google.cloud import logging
def print_job_logs ( project_id : str , job : batch_v1 . Job ) - > NoReturn :
"""
Prints the log messages created by given job.
Args:
project_id: name of the project hosting the job.
job: the job which logs you want to print.
"""
# Initialize client that will be used to send requests across threads. This
# client only needs to be created once, and can be reused for multiple requests.
log_client = logging . Client ( project = project_id )
logger = log_client . logger ( "batch_task_logs" )
for log_entry in logger . list_entries ( filter_ = f "labels.job_uid= { job . uid } " ):
print ( log_entry . payload )
C++
C++
For more information, see the
Batch C++ API
reference documentation .
To authenticate to Batch, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
#include "google/cloud/batch/v1/batch_client.h"
#include "google/cloud/logging/v2/logging_service_v2_client.h"
#include "google/cloud/location.h"
#include "google/cloud/project.h"
[]( std :: string const & project_id , std :: string const & location_id ,
std :: string const & job_id ) {
auto const project = google :: cloud :: Project ( project_id );
auto const location = google :: cloud :: Location ( project , location_id );
auto const name = location . FullName () + "/jobs/" + job_id ;
auto batch = google :: cloud :: batch_v1 :: BatchServiceClient (
google :: cloud :: batch_v1 :: MakeBatchServiceConnection ());
auto job = batch . GetJob ( name );
if ( ! job ) throw std :: move ( job ). status ();
auto logging = google :: cloud :: logging_v2 :: LoggingServiceV2Client (
google :: cloud :: logging_v2 :: MakeLoggingServiceV2Connection ());
auto const log_name = project . FullName () + "/logs/batch_task_logs" ;
google :: logging :: v2 :: ListLogEntriesRequest request ;
request . mutable_resource_names () - > Add ( project . FullName ());
request . set_filter ( "logName= \" " + log_name +
" \" labels.job_uid=" + job - > uid ());
for ( auto l : logging . ListLogEntries ( request )) {
if ( ! l ) throw std :: move ( l ). status ();
std :: cout << l - > text_payload () << " \n " ;
}
}
Filter Batch logs
You can filter for Batch logs by writing a query
that includes one or more of the following filter parameters and zero or more
boolean operators ( AND , OR and NOT ) .
To filter for logs from a specific job, specify the job's unique ID (UID):
labels.job_uid= JOB_UID
where JOB_UID is the UID of the job. To
get a job's UID,
view the details the job .
To filter for a specific type of Batch logs, specify the
log type:
logName=projects/ PROJECT_ID /logs/ BATCH_LOG_TYPE
Replace the following:
PROJECT_ID : the
project ID
of the project that you want to view logs for.
BATCH_LOG_TYPE : the type of
Batch logs you want to view,
either batch_task_logs for task logs or
batch_agent_logs for agent logs.
To filter for logs with
custom status events ,
specify that the log must define the jsonPayload.batch/custom/event field:
jsonPayload.batch"/"custom"/"event!=NULL_VALUE
To filter for logs of one or more specific severities, specify the following
comparison :
severity COMPARISON_OPERATOR SEVERITY_ENUM
Replace the following:
COMPARISON_OPERATOR : a
comparison operator —for
example, >= .
SEVERITY_ENUM : a
LogSeverity enum ,
which describes the severity of a log—for example, ERROR .
For more filter options, see the
Cloud Logging query language documentation.
What's next
Learn more about troubleshooting .
Learn more about Cloud Logging .
Learn how to write task logs .
Learn how to export job information .
Learn how to delete jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

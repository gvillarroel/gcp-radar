---
title: "Control Dataflow log ingestion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/filter-logs
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/filter-logs
  title: "Control Dataflow log ingestion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Control Dataflow log ingestion
Stay organized with collections
Save and categorize content based on your preferences.
Exclusion filters let you
control the volume of Dataflow logs ingested by Cloud Logging while
still making verbose logging available for debugging. You can use exclusion
filters to exclude matching log entries from being ingested
by Cloud Logging or from being routed to the destination of the sink .
Create exclusion filters by using the Logging query language .
Logging query language lets you specify a subset of all log entries in
your selected Google Cloud resource, such as a project or a folder.
By using exclusion filters, you can reduce the Cloud Logging
costs incurred by Dataflow log ingestion. For more information about log ingestion pricing for
Cloud Logging, see the Cloud Logging pricing summary .
For more details about how exclusion filters work and their limitations, see
Exclusion filters in the
Cloud Logging documentation.
Dataflow jobs emit multiple log types .
This page demonstrates how to filter Dataflow job logs and worker logs.
Create log exclusion filters
This example creates an exclusion filter on the
_Default Cloud Logging sink . The
filter excludes all DEFAULT , DEBUG , INFO , and NOTICE severity Dataflow
logs from being ingested into Cloud Logging. WARNING ,
ERROR , CRITICAL , ALERT , and EMERGENCY severity logs are still captured. For more information about
supported log levels, see
LogSeverity .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Permissions
As you get started, ensure the following:
You have a Google Cloud project with logs that you can see in the
Logs Explorer .
You have one of the following IAM roles for the source
Google Cloud project from which you're routing logs.
Owner ( roles/owner )
Logging Admin ( roles/logging.admin )
Logs Configuration Writer ( roles/logging.configWriter )
The permissions contained in these roles let you create, delete, or
modify sinks. For information on setting IAM roles, see the
Logging Access control guide .
You have a resource in a supported destination or
can create one.
You need to create the routing destination before the sink, through
either Google Cloud CLI, Google Cloud console, or the Google Cloud
APIs. You can create the destination in any Google Cloud project in any
organization. Before you create the destination, make sure the service
account from the sink has permissions to write to the destination .
Add an exclusion filter
The following steps demonstrate how to add a Cloud Logging exclusion filter
to your Dataflow logs. This exclusion filter selects all Dataflow
log entries with the severity DEFAULT , DEBUG , INFO , and NOTICE from jobs
that have a Dataflow job name that does not end in the string debug . The filter
excludes these logs from ingestion into the Default Cloud Logging bucket.
In the Google Cloud console, go to the Logs Router page:
Go to Logs Router
Find the row with the _Default sink, expand the
more_vert
Actions option, and then click Edit sink .
In Choose logs to filter out of sink , for Build an exclusion filter ,
click add Add exclusion .
Enter a name for your exclusion filter.
In the Build an exclusion filter section, paste the following text into
the box:
resource.type = "dataflow_step" AND
labels. "dataflow.googleapis.com/job_name" !~ ".*debug" AND
severity =( DEFAULT OR DEBUG OR INFO OR NOTICE )
The first line selects all log entries generated by the Dataflow service.
The second line selects all log entries where the job_name field does not
end with the string debug .
The third line selects all log entries with the severity DEFAULT , DEBUG ,
INFO , or NOTICE .
Click Update sink .
Test your exclusion filter
You can verify that the filter is working correctly by running a sample
Dataflow job and then viewing the logs.
After your job starts running, to view job logs, complete the following steps:
In the Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
A list of Dataflow jobs appears along with their status.
Select a job.
On the Job details page, in the Logs panel, click
segment Show .
Verify that no logs appear in the Job logs panel and that no DEFAULT ,
DEBUG , INFO , or NOTICE logs appear in the Worker logs panel.
Bypass the exclusion filter
The Dataflow job name ( job_name ) is used to provide a bypass mechanism for
scenarios where the generated Dataflow logs need to be captured. You can
use this bypass to rerun a failed job and capture all the log information.
The filter created in this scenario retains all log entries when the job_name field
ends with the string debug . When you want to bypass the exclusion filter and display all logs for a
Dataflow job, append debug to the job name. For example, to bypass the exclusion filter, you
could use the job name dataflow-job-debug .
Compare log counts
If you want to compare the volume of logs ingested with and without the exclusion
filter, run one job with debug appended to the job name and one without. Use
the system-defined, logs-based metric
Log bytes to view and compare
the ingestion data. For more information about viewing ingestion data, see
View ingestion data in Metrics Explorer .
Create an external destination
Optionally, after you create the exclusion filter, you can create an additional
Cloud Logging sink. Use this sink to redirect the complete set of
Dataflow logs into a
supported external destination ,
such as BigQuery, Pub/Sub, or Splunk.
In this scenario, the external logs aren't stored in Logs Explorer but are
available in the external destination. Using an external destination gives you
more control over the costs incurred by storing logs in Logs Explorer.
For steps detailing how to control how Cloud Logging routes logs, see
Configure and manage sinks .
To capture all Dataflow logs in an external destination,
in the Choose logs to include in sink panel, in the Build inclusion filter field,
enter the following filter expression:
resource.type = "dataflow_step"
To find log entries that you routed from Cloud Logging to supported
destinations, see View logs in sink destinations .
Track Dataflow log messages by severity
Exclusion filters do not apply to
user-defined logs-based metrics .
These metrics count the number of log entries that match a given filter or
record particular values within the matching log entries.
To track counts of Dataflow log messages based on severity, you can
create a logs-based metric for the Dataflow logs. The logs
are tracked even when the log messages are excluded from ingestion.
You're billed for user-defined logs-based metrics. For pricing information, see
Chargeable metrics .
To configure user-defined logs-based metrics, see
Create a counter metric .
To track the Dataflow logs, in the Filter selection section,
in the Build filter box, enter the following text:
resource.type = "dataflow_step"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

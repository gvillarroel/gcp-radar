---
title: "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions
  title: "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Enable inspection or risk analysis actions
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the actions that Sensitive Data Protection can
perform after running an inspection job or risk analysis.
An action is a task that Sensitive Data Protection performs after completing an
inspection job or risk analysis. For example, you can save findings to a
BigQuery table, publish a notification to a Pub/Sub topic, or
send an email when an operation either finishes successfully or stops on error.
Sensitive data discovery operations have a different set of actions. For more
information about discovery actions, see Enable discovery
actions .
Available actions
When you run a Sensitive Data Protection job, a summary of its findings are saved by
default within Sensitive Data Protection. You can see this summary using
Sensitive Data Protection in the Google Cloud console . You
can also retrieve summary information in the DLP API by using the
projects.dlpJobs.get
method.
The following sections describe the actions that are available to inspection and
risk analysis jobs.
Save findings to BigQuery
Save the Sensitive Data Protection job results to a
BigQuery table. Before viewing or analyzing the
results, first verify that the job has completed.
Each time a scan runs, Sensitive Data Protection saves scan findings to the
BigQuery table that you specify. The exported findings contain
details about each finding's location and match likelihood.
If you want each finding to include the string that matched the infoType
detector, enable the Include quote option. Quotes are potentially
sensitive, so Sensitive Data Protection doesn't include them in findings by
default.
If you don't specify a table ID,
BigQuery assigns a default name to a new table the first time
the scan runs. The name is similar to
dlp googleapis DATE _1234567890 , where
DATE represents the date the scan is run. If you specify
an existing table, Sensitive Data Protection appends scan findings to it.
When data is written
to a BigQuery table , the billing and quota usage are applied to
the project that contains the destination table.
Note: If you don't save findings to BigQuery or
Cloud Storage, the scan results only contain statistics about the
number and infoTypes of the findings.
Save findings to Cloud Storage
Save the Sensitive Data Protection job results to an
existing Cloud Storage bucket or folder. Before viewing
or analyzing the results, first verify that the job has completed.
If you're inspecting a Cloud Storage bucket, the bucket that you
designate for exported findings must not be the bucket that you're
inspecting.
Each time a scan runs, Sensitive Data Protection saves scan findings to the
Cloud Storage location that you specify. The exported findings
contain details about each finding's location and match likelihood.
If you want each finding to include the string that matched the infoType
detector, enable the Include quote option. Quotes are potentially
sensitive, so Sensitive Data Protection doesn't include them in findings by
default.
The findings are exported in Protobuf text format as a
SaveToGcsFindingsOutput
object. For information about how to parse findings in this format, see Parse
findings stored as Protobuf
text .
Note: If you don't save findings to BigQuery or
Cloud Storage, the scan results only contain statistics about the
number and infoTypes of the findings.
Publish to Pub/Sub
Publish a notification that contains the name of the Sensitive Data Protection
job as an attribute to a
Pub/Sub channel. You
can specify one or more topics to send the notification message to. Make sure that
the Sensitive Data Protection service account running the scan job has publishing
access on the topic.
If there are configuration or permission issues with the Pub/Sub topic,
Sensitive Data Protection retries sending the Pub/Sub notification for up to
two weeks. After two weeks, the notification is discarded.
Publish to Security Command Center
Publish a summary of the job results to Security Command Center. For more
information, see
Send Sensitive Data Protection scan results to Security Command Center .
To use this action, your project must belong to an organization, and
Security Command Center must be activated at the organization level. Otherwise,
Sensitive Data Protection findings won't appear in
Security Command Center. For more information, see Check the activation level of
Security Command Center .
Publish to Knowledge Catalog
Send the results of a BigQuery inspection
job to Knowledge Catalog.
For more information, see Send inspection results to Knowledge Catalog as
aspects .
Publish to Data Catalog
Send job results to Data Catalog. This feature is
deprecated .
Notify by email
Send an email when the job completes. The email goes to IAM
project owners and technical
Essential Contacts .
Publish to Cloud Monitoring
Send inspection results to Cloud Monitoring in
Google Cloud Observability .
Make a de-identified copy
De-identify any findings in the inspected data, and write the de-identified
content to a new file. You can then use the de-identified copy in your business
processes, in place of data that contains sensitive information. For more
information, see Create a de-identified copy of
Cloud Storage data using Sensitive Data Protection in the
Google Cloud console .
Supported operations
The following table shows the Sensitive Data Protection operations and where each
action is available.
Action
BigQuery inspection
Cloud Storage inspection
Datastore inspection
Hybrid inspection
Risk analysis
Save findings to BigQuery
✓
✓
✓
✓
✓
Save findings to Cloud Storage
✓
✓
✓
✓
Publish to Pub/Sub
✓
✓
✓
✓
✓
Publish to Security Command Center
✓
✓
✓
Publish to Knowledge Catalog
✓
Publish to Data Catalog ( Deprecated )
✓
Notify by email
✓
✓
✓
✓
✓
Publish to Cloud Monitoring
✓
✓
✓
✓
De-identify findings
✓
Specify actions
You can specify one or more actions when you configure a job:
When you create a new inspection or risk analysis job using
Sensitive Data Protection in the Google Cloud console, specify actions in
the Add actions section of the job creation workflow.
When you configure a new job request to send to the DLP API,
specify actions in the
Action object.
For more information and sample code in several languages, see:
Creating and scheduling inspection jobs
Computing k-anonymity for a dataset
Computing l-diversity for a dataset
Example action scenario
You can use Sensitive Data Protection actions to automate processes based on
Sensitive Data Protection scan results. Suppose you have a BigQuery
table shared with an external partner. You want to ensure both that this table
does not contain any sensitive identifiers like US Social Security numbers
(the
infoType US_SOCIAL_SECURITY_NUMBER ),
and that, if you find any, access is revoked from the partner. Here is a rough
outline of a workflow that would use actions:
Create a Sensitive Data Protection job
trigger to run an inspection scan of the
BigQuery table every 24 hours.
Set the
action
of these jobs to publish a Pub/Sub notification to the
topic "projects/foo/scan_notifications."
Create a Cloud Function that listens for incoming
messages on "projects/foo/scan_notifications." This Cloud Function will
receive the name of the Sensitive Data Protection job every 24 hours, call
Sensitive Data Protection to get summary results from this job, and,
if it finds any Social Security numbers, it can change settings in
BigQuery or Identity and Access Management (IAM) to restrict access
to the table.
What's next
Learn about the actions available with inspection
jobs .
Learn about the actions available with risk analysis
jobs .
Learn about the actions available with sensitive data discovery
operations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

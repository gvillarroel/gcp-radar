---
title: "Jobs and job triggers \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-job-triggers
knowledge_key: corpus
source_id: site-docs-root-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-job-triggers
  title: "Jobs and job triggers \_|\_ Sensitive Data Protection \_|\_ Google Cloud\
    \ Documentation"
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
Jobs and job triggers
Stay organized with collections
Save and categorize content based on your preferences.
A job is an action that Sensitive Data Protection runs to either scan content for
sensitive data or calculate the risk of re-identification.
Sensitive Data Protection creates and runs a job resource whenever you tell it to
inspect your data.
There are currently two types of Sensitive Data Protection jobs:
Inspection jobs inspect your content for sensitive data according to your
criteria and generate summary reports of where and what type of sensitive
data exists.
Risk analysis jobs analyze de-identified data and return metrics about the
likelihood that the data can be re-identified.
You can schedule when Sensitive Data Protection runs jobs by creating job
triggers . A job trigger is an event that automates the creation of
Sensitive Data Protection jobs to scan Google Cloud storage repositories,
including Cloud Storage buckets, BigQuery tables, and
Datastore kinds.
Job triggers enable you to schedule scan jobs by setting intervals at which
each trigger goes off. They can be configured to look for new findings since
the last scan run to help monitor changes or additions to content, or to
generate up-to-date findings reports. Scheduled triggers run on an interval
that you set, from 1 day to 60 days.
Note: Prematurely
canceling an operation midway through a job still incurs costs for the portion of
the job that was completed. For more information about billing, see Sensitive Data Protection pricing .
Next steps
More information about how to create, edit, and run jobs and job triggers in
the following topics:
Creating Sensitive Data Protection inspection jobs and job
triggers
Measuring re-identification and disclosure risk
(Covers risk analysis jobs.)
In addition, the following quickstart is available:
Quickstart creating a Sensitive Data Protection job
trigger
The JobTrigger object
A job trigger is represented in the DLP API by the
JobTrigger
object.
Job trigger configuration fields
Each JobTrigger contains several configuration fields, including:
The trigger's name and display name, and a description.
A collection of
Trigger
objects, each of which contains a
Schedule
object, which defines the scan recurrence in seconds.
An
InspectJobConfig
object, which contains the configuration information for the triggered job.
A
Status
enumeration, which indicates whether the trigger is currently active.
Timestamp fields representing creation, update, and last run times.
A collection of
Error objects, if any
were encountered when the trigger was activated.
Job trigger methods
Each JobTrigger object also includes several built-in methods. Using these
methods you can:
Create a new job trigger:
projects.jobTriggers.create
Update an existing job trigger:
projects.jobTriggers.patch
Delete an existing job trigger:
projects.jobTriggers.delete
Retrieve an existing job trigger, including its configuration and status:
projects.jobTriggers.get
List all existing job triggers:
projects.jobTriggers.list
Job latency
There are no service level objectives (SLO) guaranteed for jobs and job
triggers. Latency is affected by several factors, including the amount of data
to scan, the storage repository being scanned, the type and number of infoTypes
you are scanning for, the region where the job is processed, and the computing
resources available in that region. Therefore, the latency of inspection jobs
can't be determined in advance.
To help reduce job latency, you can try the following:
If sampling is available
for your job or job trigger, enable it.
Avoid enabling infoTypes that you don't need. Although the following are
useful in certain scenarios, these infoTypes can make requests run much more
slowly than requests that don't include them:
PERSON_NAME
FEMALE_NAME
MALE_NAME
FIRST_NAME
LAST_NAME
DATE_OF_BIRTH
LOCATION
STREET_ADDRESS
ORGANIZATION_NAME
Always specify infoTypes explicitly. Do not use an empty infoTypes list.
If possible, use a different processing region.
If you're still having latency issues with jobs after trying these techniques,
consider using
content.inspect or
content.deidentify
requests instead of jobs. These methods are covered under the Service Level
Agreement. For more information, see Sensitive Data Protection Service Level
Agreement .
Limit scans to only new content
You can configure your job trigger to automatically set the timespan date for
files stored in Cloud Storage or
BigQuery . When you set the
TimespanConfig
object to auto-populate, Sensitive Data Protection only scans data that was
added or modified since the trigger last ran:
...
timespan_config {
enable_auto_population_of_timespan_config: true
}
...
For BigQuery inspection, only rows that are at least three hours old
are included in the scan. See the known
issue related to this
operation.
Trigger jobs at file upload
In addition to the support for job triggers—which is built into
Sensitive Data Protection—Google Cloud also has a variety of other
components that you can use to integrate or trigger Sensitive Data Protection
jobs. For example, you can use Cloud Run functions to
trigger a Sensitive Data Protection scan every time a file is uploaded to
Cloud Storage.
For information about how to set up this operation, see Automating the
classification of data uploaded to
Cloud Storage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "Use Eventarc to manage Dataflow jobs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/job-notifications-using-eventarc
  title: "Use Eventarc to manage Dataflow jobs \_|\_ Google Cloud Documentation"
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
Use Eventarc to manage Dataflow jobs
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create event-driven workflows triggered by state
changes in your Dataflow jobs.
For example, your workflow might:
Send an alert to an on-call engineer if a critical job fails.
Notify users when a batch job completes, or start another
Dataflow job.
Clean up resources used by a job, such as Cloud Storage buckets.
Overview
Eventarc is a Google Cloud service that can
listen to events from other services and route them to various destinations.
When you run a Dataflow job, the job transitions through various
states, such as JOB_STATE_QUEUED , JOB_STATE_RUNNING , and JOB_STATE_DONE .
Dataflow integration with Eventarc lets you trigger an
action when a job changes state.
Because Eventarc is a managed service, you don't need to
provision or manage the underlying infrastructure.
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
Enable the Eventarc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Eventarc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To use the Eventarc API, your project must have enough
quota . Also, the service account associated with the
Eventarc trigger must have the appropriate permissions .
Choose an event destination
Choose an event destination to receive the
event. The destination determines the next step in your workflow.
For example:
To send an SMS alert, you might use Cloud Run functions to create a standalone
HTTP trigger.
For a more complex workflow, you might use Workflows.
If your Dataflow pipeline is part of a larger solution that
runs on Google Kubernetes Engine, the trigger can route the event to a GKE
service running in your cluster.
For more information about this style of architecture, see
Event-driven architectures in the
Eventarc documentation.
Create a trigger
To create an Eventarc trigger for Dataflow job
state changes, refer to one of the following documents:
Route Dataflow events to Cloud Run
Route Dataflow events to Google Kubernetes Engine
Route Dataflow events to Workflows
Create a trigger for Cloud Run functions
Optionally, you can filter events by Dataflow job ID. For
example, you can select job IDs that match a regular expression. For more
information, see Understand path patterns .
Process events
The event data describes the Dataflow job at the time the event
was triggered. The payload is similar to the
Job resource type,
with the steps , pipeline_description , and transform_name_mapping fields
omitted. Also, depending on the job state, some fields might not be present.
The following shows an example payload:
{
"id" : "2023-04-13_16_28_37-12345678" ,
"projectId" : "my-project" ,
"name" : "job1" ,
"currentState" : "JOB_STATE_QUEUED" ,
"currentStateTime" : "2023-04-13T23:28:37.437622Z" ,
"createTime" : "2023-04-13T23:28:37.437622Z" ,
"location" : "us-central1" ,
"startTime" : "2023-04-13T23:28:37.437622Z"
}
For more information about job states, see the following topics:
JobState
Life of a Dataflow job
What's next
Design Dataflow pipeline workflows .
Read the Eventarc documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

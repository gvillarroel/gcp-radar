---
title: "About Cloud Scheduler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/overview
  title: "About Cloud Scheduler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
About Cloud Scheduler
Stay organized with collections
Save and categorize content based on your preferences.
With Cloud Scheduler you set up scheduled units of work to be executed at
defined times or regular intervals. These work units
are commonly known as cron jobs . Typical use cases might include sending out
a report email on a daily basis, updating cached data every 10 minutes,
or updating summary information once an hour.
Each cron job created using Cloud Scheduler is sent to a target
according to a specified schedule, where the work for the task is accomplished.
The target must be one of the following types:
HTTP/S endpoints
Pub/Sub topics
App Engine HTTP/S applications
Cloud Scheduler is designed to provide "at least once" delivery;
that is, the job will run at least once per scheduled execution. In some rare
circumstances, it is possible for a job to run multiple times in association
with a single instance of the schedule, so your code must ensure that there are
no harmful side-effects of repeated execution. Your targets should be
idempotent .
You can create cron jobs using either the Cloud console
or the gcloud command line tool .
Supported regions by target
If your target is an HTTP/S endpoint or a Pub/Sub topic ,
Cloud Scheduler is available in all
supported Google Cloud regions for
Cloud Scheduler.
If your target is an App Engine application located within your
current project:
A Cloud Scheduler job targeting App Engine can only be
created in the project's App Engine region .
A Google Cloud project can contain only one App Engine app,
and the region where the App Engine app is located cannot be changed
once the app is created.
App Engine is regional which means the infrastructure that runs
your app is located in a specific region. If you want to distribute compute and
jobs across multiple regions, you should target an HTTP/S endpoint or
Pub/Sub topic instead.
If you are not using App Engine as a target, you don't need to
deploy an App Engine app, and you can disable any existing
App Engine app.
Job retry policy
If a Cloud Scheduler job doesn't complete successfully, and an
acknowledgement isn't received from the job handler, it is retried with an
exponential backoff according to its configured retry policy.
You can configure the settings that determine the retry behavior. For more
information, see Retry jobs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

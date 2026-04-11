---
title: "Cloud Scheduler release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/release-notes
  title: "Cloud Scheduler release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Resources
Send feedback
Cloud Scheduler release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Scheduler. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
September 29, 2025
Change
VPC Service Controls support for Cloud Scheduler jobs has been extended to Google Cloud APIs that are VPC Service Controls-compliant. For more information, see Secure cron jobs with VPC Service Controls .
August 18, 2023
Change
Support for Cloud Scheduler to call the following resources internally is in GA :
Cloud Functions
Cloud Run
Feature
VPC Service Controls support for Cloud Scheduler jobs with the following targets is now in GA :
Cloud Functions
Cloud Run
Dataflow API
Data Pipelines
To learn more, see the documentation on how to secure cron jobs with VPC Service Controls .
April 14, 2023
Change
Support for Cloud Scheduler to call the following resources internally is in Preview :
Cloud Functions
Cloud Run
Feature
VPC Service Controls support for Cloud Scheduler jobs with the following targets is now in Preview :
Cloud Functions
Cloud Run
Dataflow API
Data Pipelines
To learn more, see the documentation on how to secure cron jobs with VPC Service Controls .
August 26, 2022
Feature
Support for using VPC Service Controls with Cloud Scheduler is now generally available ( GA ). To get started, check out the documentation on how to secure cron jobs with VPC Service Controls .
June 09, 2022
Feature
Cloud Scheduler jobs that are paused can now be edited. See Create and configure cron jobs .
February 11, 2022
Change
Cloud Scheduler jobs for HTTP or Pub/Sub Targets can be deployed in multiple GCP Regions around the world and no longer require that an App Engine application be deployed.
June 16, 2021
Change
Cloud Scheduler is now available in us-west1 , asia-east1 , and asia-southeast1 .
April 22, 2021
Feature
The Cloud Scheduler Console UI now has support for three additional options:
Headers for HTTP and App Engine targets
Message attributes for Pub/Sub targets
Retry config for all targets
March 01, 2021
Change
The maximum job size (payload) is now 1 MB total, including ~1KB request overhead.
February 04, 2021
Feature
Two new headers, X-CloudScheduler-JobName and X-CloudScheduler-ScheduleTime , have been added to the default headers for AppEngineHttpTarget and HttpTarget. These can be used to help with job deduplication.
March 04, 2019
Feature
Cloud Scheduler GA release.
November 06, 2018
Feature
Cloud Scheduler Beta release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

---
title: "Cloud Tasks release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/release-notes
  title: "Cloud Tasks release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Resources
Send feedback
Cloud Tasks release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Tasks. You can
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
January 06, 2025
v2 & v2beta3
Feature
To help ensure CMEK usage across an organization, Cloud Tasks is integrated with two organization policy constraints .
March 18, 2024
v2
Announcement
For tasks that have HTTP targets (as opposed to App Engine targets), the option to set routing for tasks at the queue level is now at General Availability (GA). If you set routing at the queue level, you do not have to set routing for each individual task. To learn more, see Configure routing .
v2
Announcement
The BufferTask method for creating tasks is now at General Availability (GA).
October 18, 2023
v2 & v2beta3
Feature
Support for Customer Managed Encryption Keys (CMEK) is now available for Cloud Tasks. To learn more, see the documentation on using CMEK with Cloud Tasks .
June 15, 2023
v2 & v2beta3
Feature
Cloud Asset Inventory support for Cloud Tasks is now in Preview . For details, see the Cloud Asset Inventory release note .
April 18, 2023
v2beta3
Feature
For tasks that have HTTP targets (as opposed to App Engine targets), you can now set routing for tasks at the queue level. If you set routing at the queue level, you do not have to set routing for each individual task. To learn more, see Configure routing .
This feature is in Preview .
v2beta3
Feature
You can now create tasks by sending an HTTP request to your queue. To learn more, read about the new BufferTask method to Create tasks .
This feature is in Preview .
January 31, 2023
v2
Feature
Support for resource location organization policies for Cloud Tasks is now at General Availability . To learn more, see the Resource Manager entry for Cloud Tasks .
January 09, 2023
v2
Feature
Support for VPC Service Controls is now at General Availability . To learn more, see Set up a service perimeter using VPC Service Controls .
November 14, 2022
v2
Feature
Support for internal ingress from Cloud Tasks to Cloud Run and Cloud Functions is now at General Availability .
November 09, 2022
v2
Feature
Support for VPC Service Controls is in Preview .
December 13, 2021
v2
Change
You can now create Cloud Tasks queues in multiple GCP Regions around the world. If you are using HTTP Targets, you no longer need to deploy an App Engine application.
June 25, 2021
v2
Announcement
A Service Level Agreement (SLA) for Cloud Tasks is now in effect.
June 16, 2021
v2
Feature
Cloud Tasks is now available in us-west1 , asia-east1 , and asia-southeast1 .
February 24, 2021
v2
Change
Maximum push task size is now increased to 1 MB.
January 14, 2021
v2beta3
Feature
Two Queue fields that in previous versions were output only are now configurable.
taskTtl is the maximum amount of time that a task is retained in this queue.
tombstoneTtl is the amount of time the task tombstone is retained after a task is deleted or executed. The tombstone is used in task de-duplication. For more information on this process, see Create Task Request .
These fields are also available in v2beta2.
December 16, 2020
v2
Change
The relationship between your queues and your App Engine app has changed. If your queues only manage tasks with HTTP Targets, you no longer need to have an enabled App Engine app. For more information, see Create Cloud Tasks queues .
November 20, 2019
v2
Feature
HTTP Targets GA release.
May 20, 2019
v2
Feature
HTTP Targets Beta release.
April 09, 2019
v2
Feature
Cloud Tasks GA release.
September 26, 2018
v2
Feature
Cloud Tasks Beta release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

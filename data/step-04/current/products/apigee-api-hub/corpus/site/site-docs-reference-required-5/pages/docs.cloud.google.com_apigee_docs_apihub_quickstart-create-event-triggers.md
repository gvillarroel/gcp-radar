---
title: "Create an Eventarc trigger \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers
  title: "Create an Eventarc trigger \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Create an Eventarc trigger
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
API hub supports Eventarc triggers . By
using this feature, you can trigger executions based on the events occurring in API hub. For
example, you can execute a Cloud Run service when
an API is created in API hub.
This quickstart shows you how to create and configure an Eventarc trigger that executes a Cloud Run
service when an API is updated in API hub.
Before you begin
API hub must be provisioned in a Google Cloud project to which you have access.
See Provision API hub .
In the Google Cloud console, on the project selector page, select the project in which API
hub is provisioned.
Go to project selector
You must have a valid Cloud Run service running. You will use the Cloud Run service details
when configuring the Eventarc trigger. This is the service that will be executed when
the configured event occurs.
Create an Eventarc trigger
In the Google Cloud console, go to the Eventarc Triggers page.
Go to Triggers
Click add_box Create trigger .
Enter a Trigger name .
For example, cloudrun-trigger-1 .
In the Trigger type list, select Google sources .
This filters events sent from Google Cloud providers (directly or
through Cloud Audit Logs entries), or providers using Pub/Sub
messages.
In the Event provider list, select API hub .
In the Event type list, select google.cloud.apihub.v1.updated .
In the Event content data type list, select either JSON or Protobuf .
Select a Region .
Optionally, Add filters to select the APIs that match your criteria. For example, if you
filter the APIs by a specific name, the event is triggered only if the APIs matching the filter
criteria are updated.
If prompted, grant the following:
iam.serviceAccountTokenCreator role to Pub/Sub service account
pubsub.publisher role to Cloud Storage service account
Use the Default compute service account as the service account that
invokes your service.
In the Event destination list, select Cloud Run .
Select a Cloud Run service that should be executed when the
google.cloud.apihub.v1.updated event occurs in API hub.
Optionally, enter the Service URL path .
Click Create .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

---
title: "Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/managing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/managing
  title: "Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage functions
This guide shows you how to manage and detach a function that was created with
the gcloud functions command. To learn how to manage a function that was
created with the gcloud run command, see Manage Cloud Run services .
Note: If you created a Cloud Run function using
gcloud run commands or the Cloud Run Admin API, you can't manage that function
with gcloud functions commands or the Cloud Functions v2 API.
Functions created using the Cloud Functions v2 API
(for example, by using gcloud functions , the REST API, or Terraform) can be
managed with the Cloud Run Admin API
as well as the Cloud Functions v2 API. For example, you can update an
existing function using either gcloud functions or gcloud run commands:
gcloud functions
gcloud functions deploy FUNCTION_NAME \
--runtime=nodejs24 \
--source= . \
--entry-point= ENTRYPOINT
--trigger-http
gcloud run
gcloud run deploy FUNCTION_NAME \
--source= . \
--function= ENTRYPOINT
--base-image=google-22-full/nodejs24
Detach
The gcloud functions detach
command lets you detach a Cloud Functions v2 function from its existing
API environment. After you detach a function, you can only manage it using the
Cloud Run Admin API. You might want to do this if your workloads need to stay
within the run.googleapis.com API boundary for
Assured Workloads , or to ensure
that your workloads use the Cloud Run SKU .
Prepare your function for detach
When preparing to detach your function, consider the following:
The detach operation is not reversible.
The detach operation cannot be applied to Cloud Run functions (1st gen).
Familiarize yourself with how to deploy functions in Cloud Run
using the Google Cloud console, Google Cloud CLI, and Terraform.
HTTP functions will retain their assigned URLs.
Triggers attached to event-driven functions will be retained.
Triggers cannot be managed through the run.googleapis.com API directly.
Be sure to familiarize yourself with the trigger management guides for
Eventarc or Pub/Sub .
Disabling retry on failure
is not a supported feature on Cloud Run.
During the detach operation, Cloud Run functions modifies the triggers
attached to functions configured with
no retry on failure ,
to ensure that the underlying Pub/Sub topic makes a maximum of five
delivery attempts. When the detach operation is completed, a
dead letter queue
topic stores the undelivered messages, which you can retrieve by creating a new
subscription to the dead letter queue. If you want to use a customer-managed encryption key for the DLQ topic,
you can update CMEK for the topic after detach.
When a function is successfully detached, a new Cloud Run revision
is created. Starting from that revision onwards, the function will be
billed using the Cloud Run SKU .
Detach your function
You can detach your function using the following command:
gcloud functions detach FUNCTION_NAME
Replace FUNCTION_NAME with the name of your function.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

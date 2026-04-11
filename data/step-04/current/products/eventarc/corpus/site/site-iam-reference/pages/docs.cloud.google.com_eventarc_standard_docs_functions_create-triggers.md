---
title: "Create a trigger for Cloud Run functions \_|\_ Eventarc Standard \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/standard/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/eventarc/standard/docs/functions/create-triggers
  title: "Create a trigger for Cloud Run functions \_|\_ Eventarc Standard \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Create a trigger for Cloud Run functions
Stay organized with collections
Save and categorize content based on your preferences.
Standard
You can create an Eventarc trigger that lets a supported event trigger
a Cloud Run function. You must configure a trigger when you create or
deploy a function using the Google Cloud CLI or the Google Cloud console.
You can also trigger Cloud Run functions in response to custom events
published to an Eventarc channel.
Create an Eventarc trigger
Create an Eventarc trigger so that your
Cloud Run functions service receives notifications of a specific event or
set of events. By specifying filters for the trigger, you can configure the
routing of the event, including the event type and source. For more information
on how to configure an Eventarc trigger for
Cloud Run functions, see Create triggers with Eventarc .
The following event types trigger requests to your service:
An audit log is created
that matches the trigger's filter criteria
A direct event occurs
such as an update to a Cloud Storage bucket or an update to a
Firebase Remote Config template
A message is published to a Pub/Sub topic
Trigger functions with custom events
You can trigger Cloud Run functions in response to custom events.
These are events produced by special or additional event providers, as opposed
to the built-in Firebase events supported by the Firebase SDK for
Cloud Run functions, and that are published to an Eventarc
channel. For more information, see
Create and handle custom event triggers .
For custom events provided by
Firebase Extensions , you should
refer to the extension's documentation for a list of events (if any) that it
publishes. For example, see the
Run Payments with Stripe
extension.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

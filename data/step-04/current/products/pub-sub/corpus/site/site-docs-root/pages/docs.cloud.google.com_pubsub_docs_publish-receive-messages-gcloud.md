---
title: "Quickstart: Publish and receive messages in Pub/Sub by using the gcloud CLI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-gcloud
  title: "Quickstart: Publish and receive messages in Pub/Sub by using the gcloud\
    \ CLI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Publish and receive messages in Pub/Sub by using the gcloud CLI
This page shows you how to do the following operations in Pub/Sub using the Google Cloud CLI:
Create a topic and subscription.
Publish messages to the topic.
Receive messages from the subscription.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Complete the following steps before running your pipeline.
Set up your project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Set up a Google Cloud console project.
Set up a project
Click to:
Create or select a project.
Enable the Pub/Sub API for that project.
You can view and manage these resources at any time in the
Google Cloud console .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
Set up a Google Cloud console project.
Set up a project
Click to:
Create or select a project.
Enable the Pub/Sub API for that project.
You can view and manage these resources at any time in the
Google Cloud console .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
Required roles
To complete this quickstart, you need the following Identity and Access Management (IAM)
(IAM) roles.
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
Pub/Sub Editor ( roles/pubsub.editor )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a topic
Create a topic with the ID my-topic :
gcloud pubsub topics create my-topic
Create a subscription
Create a subscription with the ID my-sub and attach it to my-topic :
gcloud pubsub subscriptions create my-sub --topic = my-topic
Publish messages
Publish a message to my-topic :
gcloud pubsub topics publish my-topic --message = "hello"
Receive messages
Receive the message from my-sub :
gcloud pubsub subscriptions pull my-sub --auto-ack
The gcloud CLI prints the message to the command line.
How did it go?
It worked!
Great!
What did you like about the quickstart? What could
we have done better?
Let us know! .
I got stuck.
We're sorry to hear that.
Let us know what went wrong . We'll want to fix it.
What's next
See all the available
gcloud CLI commands for Pub/Sub
Learn more about the Pub/Sub concepts
discussed in this page.
Read the basics of the Pub/Sub service .
Work through an end-to-end example
of a Pub/Sub system.
Try another Pub/Sub quickstart that
uses client libraries
or the console .
Learn how to create topics
and publish messages .
Choose a subscription type.
Learn more about Pub/Sub APIs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

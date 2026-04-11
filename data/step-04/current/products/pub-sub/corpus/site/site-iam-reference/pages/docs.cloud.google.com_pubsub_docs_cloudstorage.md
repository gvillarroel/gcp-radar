---
title: "Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/cloudstorage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/cloudstorage
  title: "Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Cloud Storage subscriptions
Stay organized with collections
Save and categorize content based on your preferences.
A Cloud Storage subscription is a type of export subscription
that writes messages to an existing Cloud Storage bucket as
they are received. You don't need to configure a separate subscriber client.
Use the Google Cloud console, the Google Cloud CLI, the client libraries, or
the Pub/Sub API to create, update, list, detach, or delete a
Cloud Storage subscription.
Key Point: Understand the workflow for a Cloud Storage subscription and
read about the permissions, properties, quotas, and pricing related to
the subscription.
Without the Cloud Storage subscription type,
you need a pull or push subscription and a subscriber
(such as Dataflow) that reads messages and writes them to
a Cloud Storage bucket. The overhead of running a
Dataflow job is not necessary when messages don't require
additional processing before storing them in a Cloud Storage bucket;
you can use a Cloud Storage subscription instead.
For lightweight modifications to messages or attributes, you can attach a
Single Message Transform to your
Cloud Storage subscription. However, a Dataflow
pipeline is recommended for Pub/Sub systems where more complex
data transformation is required before the data is stored in a
Cloud Storage bucket, especially if you want to window or aggregate across
messages.
To learn how to stream data from Pub/Sub to
Cloud Storage with transformation by using Dataflow,
see Stream messages from Pub/Sub by using Dataflow .
Before you begin
Before reading this document, ensure that you're familiar with the following:
How Pub/Sub works and the
different Pub/Sub terms.
What are the different kinds of subscriptions
and why you might want to use a Cloud Storage subscription.
How Cloud Storage works.
Cloud Storage subscription workflow
The following image shows the workflow between a Cloud Storage
subscription and Cloud Storage.
Figure 1. Workflow for a Cloud Storage subscription
Here is a brief description of the workflow that references Figure 1:
Pub/Sub uses the Cloud Storage API to send data
to the Cloud Storage bucket. After a successful completion of a
write operation, the API returns an OK response.
The messages are sent in batches to the Cloud Storage bucket.
A single batch corresponds to an object that is stored in the
Cloud Storage bucket. You can configure the batch settings based on
the object size and time elapsed since the object was created.
The workflow to write an object to a Cloud Storage bucket requires
two OK responses. The first OK response is sent when a message is
successfully written to an object. The second OK response is sent when the
object containing the message is finalized. A message only becomes visible
in the bucket after the Cloud Storage object containing it has
been successfully finalized.
If there are any failures during the write operation, the
Pub/Sub message itself is negatively acknowledged.
The message is then re-sent. If the message write operation fails enough times and
you have a dead letter topic configured on the subscription, then
the message is moved to the dead letter topic.
Properties of a Cloud Storage subscription
When you create a Cloud Storage subscription, you must specify
some additional properties. These properties include common subscription
properties, filename and format requirements, storage requirements and more.
To learn more about these properties, see Cloud Storage subscription properties .
Handle message failures
When a Pub/Sub message cannot be written to a
Cloud Storage bucket, the message cannot be acknowledged.
To forward such undeliverable messages, configure a
dead-letter topic
on the Cloud Storage subscription.
If Pub/Sub cannot write messages to Cloud Storage,
then Pub/Sub backs off delivery of messages in a way similar to
push backoff behavior .
Quotas
Quota limitations apply to the Cloud Storage subscriber throughput
for each region. For information about the quotas for Cloud Storage
subscriptions, see export subscriber quota limits in Pub/Sub quotas and limits .
Pricing
For information about the pricing for Cloud Storage
subscriptions, see the Pub/Sub pricing page .
What's next
Create a Cloud Storage subscription .
Troubleshoot a Cloud Storage subscription .
Explore Pub/Sub configuration tools:
gcloud CLI commands
Pub/Sub APIs
Pub/Sub client libraries
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

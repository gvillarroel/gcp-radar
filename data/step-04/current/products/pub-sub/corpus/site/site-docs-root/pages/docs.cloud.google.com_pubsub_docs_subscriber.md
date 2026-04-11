---
title: "Choose a subscription type \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/subscriber
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/subscriber
  title: "Choose a subscription type \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Choose a subscription type
Stay organized with collections
Save and categorize content based on your preferences.
This document helps you choose the appropriate type of Pub/Sub
subscription suited to your business requirements.
Pub/Sub offers the following types of subscriptions:
Pull subscriptions use a subscriber client to request messages from the
Pub/Sub server.
Push subscriptions use the Pub/Sub server to initiate
requests to your subscriber application to deliver messages.
Export subscriptions export your messages directly to a Google Cloud
resource. These subscriptions include the following:
BigQuery subscriptions export data to a
BigQuery table.
Cloud Storage subscriptions export data to a Cloud Storage
bucket.
Pub/Sub subscription comparison table
The following table offers some guidance in choosing the appropriate delivery
mechanism for your application:
Features supported by Pub/Sub subscriptions
Use case
Pull subscription
Large volume of messages (GBs per second).
Efficiency and throughput of message processing is critical.
Environments where it's not feasible to set up a public HTTPS
endpoint with a non-self-signed SSL certificate.
Push subscription
Multiple topics that must be processed by the same webhook.
App Engine
Standard or
Cloud Run functions subscribers.
Environments where it's not feasible to set up Google Cloud
dependencies such as credentials and the client library.
Export subscription
Large volume of messages that can scale up to multiple
millions of messages per second.
Sending messages directly to a Google Cloud resource
without any additional processing.
Endpoints
Pull subscription
Any device on the internet that has authorized credentials can call the
Pub/Sub API.
Push subscription
An HTTPS server with non-self-signed certificate accessible on
the public web.
The receiving endpoint might be decoupled from the
Pub/Sub subscription, so that messages from multiple
subscriptions are sent to a single endpoint.
Export subscription
The subscription writes to a Google Cloud resource, such as a
BigQuery table or Cloud Storage bucket.
Load balancing
Pull subscription
Multiple subscribers can make pull calls to the same subscription.
Each subscriber receives a subset of messages.
Push subscription
Push endpoints can be load balancers.
Export subscription
The Pub/Sub service automatically balances the load.
Configuration
Pull subscription
No configuration is necessary.
Push subscription
No configuration is necessary for App Engine apps in the
same project as the subscriber.
Verification of push endpoints is not required in the
Google Cloud console.
Endpoints must be reachable using DNS names and have SSL
certificates installed.
Export subscription
The Google Cloud resource that the subscription exports to must
exist and be configured with the appropriate permissions.
Flow control
Pull subscription
The subscriber client controls the rate of delivery. The subscriber can
dynamically modify the acknowledgment deadline, allowing message
processing to take an arbitrarily long time.
Push subscription
The Pub/Sub server automatically implements flow
control. Clients don't need to handle message flow. However, it's
possible to indicate that the client can't handle the current message
load, by passing back an HTTP error.
Export subscription
Pub/Sub automatically implements flow control to
optimize writing messages to the destination Google Cloud
resource.
Efficiency and throughput
Pull subscription
Achieves high throughput at low CPU and bandwidth by allowing batched
delivery, acknowledgments, and massively parallel consumption. Might be
inefficient if frequent polling is used to minimize message delivery
time.
Push subscription
Delivers one message per request and limits the maximum number of
outstanding messages.
Export subscription
Pub/Sub dynamically handles scalability.
When to use an export subscription
Without an export subscription, you need a pull or push
subscription and a subscriber (such as Dataflow) to
read messages and write them to a Google Cloud resource.
The overhead of running a Dataflow job is
not necessary when messages don't
require additional processing before being stored.
Export subscriptions have the following advantages:
Simple deployment. You can set up an export subscription through a
single workflow in the console, Google Cloud CLI, client library,
or Pub/Sub API.
Low costs. Reduces the additional cost and latency of similar
Pub/Sub pipelines that include Dataflow jobs.
This cost optimization is useful for messaging systems that don't require
additional processing before storage.
Minimal monitoring. Export subscriptions are part of the multi-tenant
Pub/Sub service and don't require you to run separate
monitoring jobs.
Flexibility . A BigQuery subscription can use the
schema of the topic to which it is attached, which is not available with
the basic Dataflow template for writing from
Pub/Sub to BigQuery. Similarly,
a Cloud Storage subscription offers configurable file batching options
based on file size and elapsed time, which are not configurable in the
basic Dataflow template for writing from
Pub/Sub to Cloud Storage.
However, a Dataflow pipeline is still
recommended for Pub/Sub systems where some data
transformation is required before the data is stored in a
Google Cloud resource such as a BigQuery table or
Cloud Storage bucket.
To learn how to stream data from Pub/Sub to
BigQuery with transformation by using Dataflow,
see Stream from Pub/Sub to BigQuery .
To learn how to stream data from Pub/Sub to
Cloud Storage with transformation by using
Dataflow, see
Stream messages from Pub/Sub by using Dataflow .
What's next
Understand the workflow for each subscription type:
Pull
Push
BigQuery
Cloud Storage
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

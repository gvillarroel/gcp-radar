---
title: "Choosing Pub/Sub or Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-cloud-tasks
  title: "Choosing Pub/Sub or Cloud Tasks \_|\_ Google Cloud Documentation"
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
Choosing Pub/Sub or Cloud Tasks
Stay organized with collections
Save and categorize content based on your preferences.
Both Cloud Tasks and
Pub/Sub can be used to
implement message passing and asynchronous integration. Although they
are conceptually similar, each is designed for different set of use cases.
This page helps you choose the right product for your use case.
Key Differences
The core difference between Pub/Sub and Cloud Tasks is
in the notion of implicit vs. explicit invocation.
Pub/Sub aims to decouple publishers of events and subscribers to those
events. Publishers do not need to know anything about their subscribers.
Therefore, Pub/Sub gives publishers no control over the delivery of the
messages save for the guarantee of delivery. In this way, Pub/Sub
supports implicit invocation: a publisher implicitly causes the subscribers
to execute by publishing an event.
By contrast, Cloud Tasks is aimed at explicit invocation where
the publisher retains full control of execution. In particular, a publisher
specifies an endpoint where each message is to be delivered.
Overall Cloud Tasks are appropriate for use cases where
a task producer needs to defer or control the execution timing of a specific
webhook or remote procedure call. Pub/Sub is optimal for more general
event data ingestion and distribution patterns where some degree of
control over execution can be sacrificed.
Detailed feature comparison
Feature
Cloud Tasks
Cloud Pub/Sub
Push via webhooks
Yes
Yes
At least once delivery guarantee
Yes
Yes
Configurable retries
Yes
Yes
Task creation deduplication
Yes
No
Scheduled delivery
Yes
No
Ordered delivery
No. Enqueued task order is preserved on best-effort basis.
Yes with ordering keys
Explicit rate controls
Yes
Pull subscriber clients can implement flow control
Pull via API
No
Yes
Batch insert
No
Yes
Multiple handlers/subscribers per message
No
Yes
Task/message retention
30 days
Up to 31 days
Max size of task/message
1MB
10MB
Max delivery rate
500 qps/queue
No upper limit
Geographic availability
Regional
Global
Maximum push handler/subscriber processing duration
30 minutes (HTTP)
10 minutes (App Engine Standard automatic scaling)
24 hours (App Engine Standard manual or basic scaling)
60 minutes (App Engine Flexible)
10 minutes for push operations
Number of queues/subscriptions per project
1,000/project, more available via quota increase request
10,000/project
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

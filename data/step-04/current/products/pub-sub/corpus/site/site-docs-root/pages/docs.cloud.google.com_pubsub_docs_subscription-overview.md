---
title: "Subscription overview \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/subscription-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/subscription-overview
  title: "Subscription overview \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Subscription overview
Stay organized with collections
Save and categorize content based on your preferences.
Key Point: Learn about the basic workflow and
properties for a Pub/Sub subscription.
To receive messages published to a topic, you must create a subscription to that
topic. Only messages published to the topic after the subscription is created
are available to subscriber clients. The subscriber client receives and
processes the messages published to the topic. A topic can have multiple
subscriptions, but a given subscription belongs to a single topic.
The topic retention feature lets a subscription attached to a topic to seek back
in time and replay previously published messages. You can learn more about the
feature in the topic Replaying and purging messages .
Subscription workflow
After a message is sent to a subscriber, the subscriber must acknowledge the
message.
If a message is sent out for delivery and a subscriber is yet to acknowledge
it, the message is called outstanding.
Pub/Sub repeatedly attempts to deliver any message that is
not yet acknowledged. However, Pub/Sub tries not to deliver
an outstanding message to any other subscriber on the same subscription.
The subscriber has a configurable, limited amount of time, known as the
ackDeadline , to acknowledge the outstanding message. After the deadline
passes, the message is no longer considered outstanding, and
Pub/Sub attempts to redeliver the message.
Types of subscriptions
When you create a subscription, you must specify the type of message delivery.
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
To choose the correct subscription for your business requirements, see
Choose a subscription type . You can update the
type of message delivery for a subscription
at any time after its creation.
Default subscription properties
By default, Pub/Sub offers at-least-once delivery with no
ordering guarantees on all subscription types. Alternatively, if messages have
the same ordering key and are in the same region, you can enable message
ordering . After you set the message ordering property,
the Pub/Sub service delivers messages with the same ordering key
and in the order that the Pub/Sub service receives the messages.
Pub/Sub also supports exactly-once delivery .
In general, Pub/Sub delivers each message once and in the order
in which it was published. However, messages may sometimes be delivered out of
order or more than once. Pub/Sub might redeliver a message even
after an acknowledgment request for the message returns successfully. This
redelivery can be caused by issues such as server-side restarts or client-side
issues. Thus, although rare, any message can be redelivered at any time.
Accommodating more-than-once delivery requires your subscriber to be
idempotent
when processing messages.
Subscription expiry
By default, subscriptions expire after 31 days of subscriber inactivity or if
there are no updates made to the subscription. Examples of subscriber activities
include open connections, active pulls, or successful pushes. If
Pub/Sub detects subscriber activity or an update to the
subscription properties, the subscription deletion clock restarts. Using
subscription expiration policies,
you can configure the inactivity duration or make the subscription persistent
regardless of activity. You can also
delete a subscription manually.
Although you can create a new subscription with the same name as a deleted one,
the new subscription has no relationship to the old one. Even if the deleted
subscription had many unacknowledged messages, a new subscription created with
the same name would have no backlog (no messages waiting for delivery) at the
time it's created.
What's next
Choose the correct type of subscription for your business requirements.
Understand the workflow for each type of subscription:
Pull
Push
BigQuery
Cloud Storage
Read about the different subscription properties .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

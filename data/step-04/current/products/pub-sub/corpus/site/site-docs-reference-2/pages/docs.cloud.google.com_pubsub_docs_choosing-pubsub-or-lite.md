---
title: "Choose Pub/Sub or Pub/Sub Lite \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-lite
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/choosing-pubsub-or-lite
  title: "Choose Pub/Sub or Pub/Sub Lite \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Send feedback
Choose Pub/Sub or Pub/Sub Lite
Stay organized with collections
Save and categorize content based on your preferences.
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
This document is intended to help you choose between Pub/Sub and Pub/Sub Lite.
This document requires your familiarity with the basic concepts of Pub/Sub such
as topics and subscriptions. If you are new to Pub/Sub, read
What is Pub/Sub first.
Pub/Sub and Pub/Sub Lite are horizontally scalable
and managed messaging services. These services can handle high volume and
support large storage requirements. Pub/Sub is usually the
default solution for most application integration and analytics use cases.
It is feature-rich and fully managed. Pub/Sub Lite is recommended
for applications where messaging throughput is more stable,
workloads can benefit from a partition-based system,
and cost is of a significant concern.
Pub/Sub offers a broader range of features , per-message
parallelism, global routing, and automatically scaling resource capacity. In
terms of message replication, Pub/Sub guarantees
synchronous replication.
Pub/Sub Lite is a partition-based solution that trades off
operational workload, global availability, and some features for cost efficiency.
Pub/Sub Lite requires you to manually reserve and manage resource
capacity. Within Pub/Sub Lite, you can choose zonal or
regional Lite topics. Regional Lite topics offer the same availability SLA as
Pub/Sub topics.
Note the reliability differences between the two services in terms
of message replication. Pub/Sub supports synchronous
data replication and uses three zones. Regional Lite topics replicate data to a
secondary zone. Zonal Lite topics replicate data in only one zone.
Business requirements checklist
The following questions can help you choose the right Pub/Sub
messaging service:
Are reliability, minimal operational cost, and ease of development
your top priorities? Use Pub/Sub.
Are you willing to incur some additional operational overhead in terms
of managing the topic capacity, can work with availability
risks inherent to zonal services, and require low cost?
Use zonal Lite topics.
Do you require some protection against zonal failures,
are willing to incur an additional operational overhead in terms
of managing the topic capacity, and require the lowest per
throughput cost? Use regional Lite topics.
To know more about the cost differences between Pub/Sub and
Pub/Sub Lite, see the pricing page.
Features comparison table
Feature
Pub/Sub
Pub/Sub Lite
Access Transparency
Yes
No
Capacity
Automatically provisioned
Provision before you use
Client library languages
Java, Python, Go, Node.js, C++, C#, PHP, Ruby, SAP, ABAP
Java, Python, Go
Cross-project subscriptions
Yes
No
Customer managed encryption keys
Yes
No
Dead letter topics
Yes
No
Exactly-once delivery
Yes
No
Integrations
Dataflow
Cloud Run functions
Cloud Logging
Kafka Connect
Apache Flink
Dataflow
Apache Spark
Apache Flink
Apache Kafka
Kafka Connect
Message filtering
Yes for message attributes
No
Message replication
Yes
No
Message routing
Global
Zonal or regional
Message schema validation
Yes
No
Multi-zone in single region
No
Single zone or dual zone in a single region
Ordered delivery
Per-key ordering
Per-partition ordering
Message acknowledgment tracking
Per message
Per-partition cursor
Pricing
Pay for what you use
Pay for the capacity that you provision
REST endpoints
Yes
No
Resource namespace
Global
Zonal or regional
Retention period
Up to 31 days
Unlimited
Service endpoints
Global and regional
Regional
Storage
Unlimited
Unlimited
Subscription
Pull
Push
BigQuery subscription
Cloud Storage subscription
Standard subscription
Export subscription
Data replication
Pub/Sub topics replicate data to three zones within a region.
For more information about Pub/Sub data replication, see
Data replication in a topic .
Regional Pub/Sub Lite topics replicate data to two zones
within a region. Zonal Pub/Sub Lite topics store data in a
single zone within a region. For more information about
Pub/Sub Lite data replication, see
Data replication in a Lite topic .
Message routing
Both Pub/Sub and Pub/Sub Lite can publish and
subscribe from all regions, and even outside of Google Cloud.
Pub/Sub routes messages globally . Applications hosted in any
region can publish messages to a single topic. The messages are processed
in the nearest region permitted by your organization policies and
forwarded to subscribers independently of the source.
Pub/Sub Lite routes messages within a region or a zone .
Subscribers must connect to the instance of the service in the region where the
topic is located. As a result, publishers and subscribers must maintain network
connectivity to the same region to communication. Publishers can publish data to
any topic from anywhere, but this may require connecting to a remote region,
adding network latency. Subscribers that need aggregate data published to topics
in different locations must connect to every relevant local service instance to
read the messages.
Resource namespace
Pub/Sub topics and subscriptions are global resources . The
Pub/Sub service can store messages in
any region
allowed by a topic storage policy. In addition, a topic and a subscription to that
topic can be stored in different projects, allowing for fine-grained billing
and access control. Finally, subscribers get the same data regardless of
which service endpoint they use to connect to Pub/Sub or
which service endpoint was used by the publisher of the data.
Zonal Lite topics and subscriptions are zonal resources. These
resources must be in the same Cloud project and zone.
Regional Lite topics and subscriptions are regional resources.
These resources must be in the same Cloud project and region.
For a list of regions and zones that Pub/Sub Lite supports, see
Pub/Sub Lite locations .
Capacity management
Pub/Sub scales automatically. Capacity for message publishing
is automatically provisioned, so you can send and receive message at any rate,
up to the quotas you configure for your project.
Pub/Sub Lite is manually provisioned. You must configure the
number of partitions per Lite topic. You must also provision storage and
throughput capacity. Throughput capacity can be provisioned using
Lite reservations .
Delivery Modes
Pub/Sub supports multiple message delivery modes. These
include Pull (traditional polling),
Push (HTTPS POST),
StreamingPull (bidirectional RPC, for lowest
latency and highest efficiency), and pull over HTTP REST and gRPC.
Pub/Sub Lite only supports streaming gRPC pull message
delivery. To request messages, subscribers establish bidirectional streaming
connections with each partition.
Parallelism
Pub/Sub uses per-message parallelism. This enables concurrent
processing of any number of messages, from one or thousands of clients for a
single subscription.
Pub/Sub Lite uses partition-based parallelism. This forces a
client to process each data partition in linear order on a single client
instance. This limits the maximum number of client instances to
at most the number of partitions.
Streaming pipelines
Both Pub/Sub and Pub/Sub Lite are integrated with
Dataflow for serverless stream processing and data integration.
Pub/Sub allows Dataflow to scale more flexibly
and supports Dataflow SQL .
To get started with Dataflow and Pub/Sub or Pub/Sub Lite, try these tutorials:
Pub/Sub: Stream processing with Dataflow
Pub/Sub Lite: Using Pub/Sub Lite with Dataflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

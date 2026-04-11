---
title: "Connectors overview \_|\_ Google Cloud Managed Service for Apache Kafka \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/connectors-overview
  title: "Connectors overview \_|\_ Google Cloud Managed Service for Apache Kafka\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Connectors overview
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of Kafka Connect connectors in
Google Cloud. Discover when to use each connector type to manage and
integrate your data streams.
These connectors use the Kafka Connect framework to integrate Apache Kafka
with other applications. They ingest and replicate data between your Kafka
clusters and applications. The available connector types include:
MirrorMaker 2.0 connectors
Source connector
Checkpoint connector
Heartbeat connector
BigQuery Sink connector
Cloud Storage Sink connector
Pub/Sub Source connector
Pub/Sub Sink connector
MirrorMaker 2.0 connectors are specifically designed for data replication and
disaster recovery between Kafka clusters. They facilitate the mirroring of data
from one Kafka cluster to another, enabling high availability and fault
tolerance.
MirrorMaker 2.0 connectors can establish connections between
Managed Service for Apache Kafka clusters and other
Managed Service for Apache Kafka clusters or self-managed Kafka clusters.
The other Sink and Source connectors serve to integrate Kafka with various
Google Cloud services. These connectors enable data transfer between
Managed Service for Apache Kafka clusters and Google Cloud services,
such as BigQuery, Cloud Storage, or
Pub/Sub.
Before you begin
Before you explore and create connectors, ensure you have the
following understanding and prerequisites:
A working knowledge of
Kafka Connect and Connect clusters .
You must create a Connect cluster before you can deploy connectors.
For Sink and Source connectors, understanding of
BigQuery tables ,
Cloud Storage buckets , or
Pub/Sub topics and subscriptions ,
depending on the kind of connectors that you configure.
Familiarity with YAML or JSON configuration files,
as connectors are configured using these formats.
When to use MirrorMaker 2.0
Use MirrorMaker 2.0 connectors in the following scenarios:
Migrate data: Move your Kafka workload to a new
Managed Service for Apache Kafka cluster.
Recover from disasters: Create a backup cluster to ensure business
continuity in case of failures.
Aggregate data: Consolidate data from multiple Kafka clusters into a central
Managed Service for Apache Kafka cluster for analytical purposes.
MirrorMaker 2.0 key features
Replicates all necessary components, including topics, data,
configurations, consumer groups with offsets, and ACLs.
Maintains the same partitioning scheme in the target cluster,
which simplifies the transition for applications.
Automatically detects and replicates new topics and partitions,
minimizing manual configuration.
Provides essential metrics, like end-to-end replication latency,
that let you track the health and performance of the replication process.
Ensures reliable operation, even with high data volumes, and can be
scaled horizontally to handle increasing workloads.
Uses internal topics for offset synchronization, checkpoints, and
heartbeats. These topics have configurable replication factors,
such as offset.syncs.topic.replication.factor ,
to ensure high availability and fault tolerance.
Use the MirrorMaker 2.0 Source connector
The MirrorMaker 2.0 Source connector replicates topics and data from one Kafka
cluster (the source) to another Kafka cluster (the target).
Source
Target
Managed Service for Apache Kafka cluster
Managed Service for Apache Kafka cluster
Managed Service for Apache Kafka cluster
External or self-managed Kafka cluster
External or self-managed Kafka cluster
Managed Service for Apache Kafka cluster
The MirrorMaker 2.0 Source connector supports these migration scenarios:
Replicate or migrate data from an external or self-managed Kafka cluster into a
Managed Service for Apache Kafka cluster
Replicate or migrate data from a
Managed Service for Apache Kafka cluster to an external or self-managed
Kafka cluster.
Replicate Kafka data across
regions to satisfy disaster recovery and high availability requirements.
Use the MirrorMaker 2.0 Checkpoint connector
The usage of the MirrorMaker 2.0 Checkpoint connector is optional.
It copies the consumer offsets, which indicate the last successfully
consumed message. This process ensures that consumers on the target
cluster can resume processing from the same point as the source cluster.
This connector is not required for the MirrorMaker 2.0 Source connector to
function. This connector is only necessary if you require synchronizing
ConsumerGroup state for minimal downtime during a switch from the
source to the target cluster. If you only need a copy of your source data,
this connector is not required.
Use the MirrorMaker 2.0 Checkpoint connector for the following use cases:
Disaster recovery to maintain a consistent consumer state across clusters
and enable seamless failover.
Preserve consumer progress in scenarios where it is critical.
Use the MirrorMaker 2.0 Heartbeat connector
The MirrorMaker 2.0 Heartbeat connector is an optional component that
generates periodic heartbeat messages on the source Kafka cluster. The
connector writes these messages to a dedicated topic, typically named
heartbeats .
You can configure a MirrorMaker 2.0 Source connector to replicate the
heartbeats topic to the target cluster. By observing this replicated
topic on the target cluster, you can monitor the status and performance
of your topic replication flow. This provides a way to verify the connection
and data flow between clusters, even when no other data is being
produced or replicated.
Deploying the Heartbeat connector alone does not automatically monitor
replication health. To use it for monitoring, you must replicate the
heartbeats topic and then observe its presence and timeliness on the
target cluster, or use monitoring tools that consume these heartbeats.
The Heartbeat connector is not required for the MirrorMaker 2.0
Source connector to function. Use the MirrorMaker 2.0 Heartbeat
connector for the following use cases:
Monitor the health and status of MirrorMaker 2 replication.
Configure alerts in Cloud Monitoring using the generated heartbeats
and available metrics to notify you when replication or the heartbeat stops.
Use Sink connectors
Sink connectors export data from Kafka topics to other systems.
Use the BigQuery Sink connector
The BigQuery Sink connector streams data from Kafka topics to
BigQuery tables.
Use the BigQuery Sink connector for the following use cases:
Data warehousing, to load streaming data into BigQuery
for analytics and reporting.
Populating BigQuery tables that power real-time dashboards.
Use the Cloud Storage Sink connector
The Cloud Storage Sink connector streams data from Kafka topics to
Cloud Storage buckets.
Use the Cloud Storage Sink connector for the following use cases:
Data lake ingestion, to store Kafka data in a data lake for long-term
archival and batch processing.
Archiving data to meet regulatory requirements.
Use the Pub/Sub Sink connector
The Pub/Sub Sink connector streams messages from Kafka topics to a
Pub/Sub topic.
Use the Pub/Sub Sink connector for the following use cases:
Service integration, to send data from Kafka to other Google Cloud
services or applications that consume from Pub/Sub.
Triggering real-time notifications or actions based on processed data.
Use Source connectors
Source connectors import data from other systems into Kafka topics.
Use the Pub/Sub Source connector
The Pub/Sub Source connector streams messages from a
Pub/Sub subscription into a Kafka topic.
Use the Pub/Sub Source connector for the following use cases:
Real-time data ingestion, bringing data from cloud services or other
applications and publishing to Pub/Sub into Kafka for stream processing.
Event-driven architectures, triggering Kafka-based processing based on
events published to Pub/Sub.
Task restart policy
You can set a connector's task restart policy , which determines the behavior
when a failure occurs. Connectors support the following policies:
Never restart. The connector does not restart failed tasks. This policy is
the default behavior. It's useful for debugging, or in situations where
manual intervention is required after an error.
Restart with exponential backoff. The connector restarts a failed task
after a delay (called the backoff period). The delay increases exponentially
with each subsequent failure. This policy is recommended for most production
workloads.
If you use the exponential backoff policy, also set values for the minimum and
maximum backoff. The minimum backoff should be greater than 60 seconds, and
the maximum backoff should be less than 7200 seconds.
Transformations and predicates
Kafka Connect supports the default Kafka transformations and predicates.
You specify the configuration as part of your connector configuration. For
example, to configure a sink connector to disregard
messages that contain a DoNotProcess header key, you would add the following
configuration to your connector:
transforms=dropMessage
transforms.dropMessage.type=org.apache.kafka.connect.transforms.Filter
transforms.dropMessage.predicate=hasKey
predicates=hasKey
predicates.hasKey.type=org.apache.kafka.connect.transforms.predicates.HasHeaderKey
predicates.hasKey.name=DoNotProcess
This configuration does the following:
Configures a predicate named hasKey of type
org.apache.kafka.connect.transforms.predicates.HasHeaderKey .
This predicate matches all messages that contain a header with the key
DoNotProcess .
Configures a transformation named dropMessage of type
org.apache.kafka.connect.transforms.Filter .
This transformation drops all messages that match the configured predicate.
Links the transformation to the predicate hasKey . This ensures that only
messages with the DoNotProcess header key present are dropped by the
transformation.
For more information, see the Kafka documentation on
transformations
and predicates .
What's next?
Create a MirrorMaker 2.0 connector
Create a BigQuery Sink connector
Create a Cloud Storage Sink connector
Create a Pub/Sub Source connector
Create a Pub/Sub Sink connector
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

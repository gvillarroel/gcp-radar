---
title: "Monitor a Google Cloud Managed Service for Apache Kafka cluster \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/monitor-cluster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/monitor-cluster
  title: "Monitor a Google Cloud Managed Service for Apache Kafka cluster \_|\_ Google\
    \ Cloud Documentation"
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
Monitor a Google Cloud Managed Service for Apache Kafka cluster
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Apache Kafka collects metrics that you can use to
monitor your Kafka clusters. This page describes how to view these metrics
in the Google Cloud console.
You can view the metrics in the following ways:
The Cluster details page includes monitoring dashboards for clusters,
topics, and consumer groups. These dashboards contain predefined charts that
let you see the overall health and performance of your cluster.
You can use Metrics Explorer to
view all available metrics, create custom charts, or aggregate metrics across
multiple clusters.
Overview
Managed Service for Apache Kafka exports several metrics available in the
open-source Kafka distribution, as well as service-specific metrics like
consumer group offset lag. For monitoring, the Managed Service for Apache Kafka
service is identified by the service URL managedkafka.googleapis.com .
The metrics are organized into four resource categories:
Cluster : These metrics are useful for maintaining the overall health of
a cluster.
Topic : These metrics include publisher and consumer rates and errors.
They monitor the overall health of Kafka applications, and issues specific to
a broker.
Topic Partition : These metrics are intended for monitoring and debugging
performance problems specific to individual partitions, such as uneven key
distribution.
Topic Partition Consumer Group : These metrics monitor the health of
consumer applications, primarily consumer lag. Open-source Kafka error metrics
for consumer groups are not available by partition, but only at the topic
level.
Some metrics can be grouped by broker index. Based on the broker index, you
can look up the zone where that broker is
provisioned. For more information, see
View brokers .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles and permissions
To get the permissions that
you need to view monitoring charts,
ask your administrator to grant you the
Managed Kafka Viewer ( roles/managedkafka.Viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about this role, see
Managed Service for Apache Kafka predefined roles .
View the monitoring dashboards
To view the monitoring dashboards for a
Managed Service for Apache Kafka cluster, perform the following steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of the cluster.
To view metrics for the cluster, select the Monitoring tab.
To view metrics for a topic in the cluster:
Select the Resources tab.
In the Topics list, click the name of the topic.
In the Topic details page, select the Monitoring tab.
To view metrics for a consumer group in the cluster:
Select the Resources tab.
In the Consumer groups list, click the name of the consumer group.
In the Consumer group details page, select the Monitoring tab.
For more information, see
View a Kafka cluster .
View metrics in Metrics Explorer
To view Managed Service for Apache Kafka metrics by using Metrics Explorer, perform
the following steps:
In the Google Cloud console, go to the Metrics explorer page.
Go to Metrics explorer
In the Configuration section, click Select a metric .
In the filter, enter Apache Kafka .
In Active resources , select one of the following:
Apache Kafka Cluster
Apache Kafka Topic
Apache Kafka Topic Partition
Apache Kafka Topic Partition Consumer Group
Select a metric and click Apply .
For more information about Metrics Explorer, see
Create charts with Metrics Explorer .
Managed Service for Apache Kafka metrics
The following tables list commonly used metrics for monitoring your Kafka
cluster and cluster resources. For the complete list of available metrics, see
Google Cloud metrics .
Cluster metrics
The following metrics apply to clusters. To view the metrics for a specific
cluster, filter by the cluster_id label.
Metric
Description
Equivalent MBean Name
cpu/core_usage_time
Cumulative CPU usage of the cluster in vCPU. This can be useful for
understanding the overall cost of operation for the cluster.
N/A
cpu/limit
Current CPU count configured for the cluster. Can be used to
monitor CPU utilization as a ratio with the cpu/usage metric.
N/A
memory/usage
Current RAM usage on the cluster. Can be used to monitor
RAM utilization as a ratio with the memory/limit metric.
N/A
memory/limit
Current configured RAM size of the cluster. Can be used to monitor
RAM utilization as a ratio with the memory/usage metric.
N/A
cluster_byte_in_count
The total number of bytes from clients sent to all topics.
kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec
cluster_byte_out_count
The total number of bytes sent to clients from all topics.
kafka.server:type=BrokerTopicMetrics,name=BytesOutPerSec
cluster_message_in_count
The total number of messages that have been published to all topics.
kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec
request_count
The total number of requests made to the broker
kafka.network:type=RequestMetrics,name=RequestsPerSec,request=
{Produce|FetchConsumer|FetchFollower},version=([0-9]+)
request_byte_count
The total size, in bytes, of requests made to the Cluster.
kafka.network:type=RequestMetrics,name=RequestBytes,request=
([-.\w]+)
partitions
The current number of partitions handled by this cluster,
broken down by broker.
kafka.server:type=ReplicaManager,name=PartitionCount
request_latencies
The number of milliseconds taken for each request, at various
percentiles
kafka.network:type=RequestMetrics,name=TotalTimeMs,request=
{Produce|FetchConsumer|FetchFollower}
consumer_groups
The current number of Consumer Groups consuming from the broker
kafka.server:type=GroupMetadataManager,name=NumGroups
offline_partitions
The number of offline topic partitions as observed by the controller.
kafka.controller:type=KafkaController,name=OfflinePartitionCount
Topic metrics
The following metrics apply to topics. To view the metrics for a specific
topic, filter by the cluster_id and topic_id labels.
Metric
Description
Equivalent MBean name
message_in_count
The total number of messages published to the topic.
kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec,
topic=([-.\w]+)
byte_in_count
The total number of bytes from clients sent to the topic.
kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec,topic=([-.\w]+)
topic_request_count
The total number of produce and fetch requests made to the topic.
kafka.server:type=BrokerTopicMetrics,name=TotalProduceRequestsPerSec,topic=([-.\w]+) kafka.server:type=BrokerTopicMetrics,name=TotalFetchRequestsPerSec,topic=([-.\w]+)
topic_error_count
The total number of failed produce and failed fetch requests made to the topic.
kafka.server:type=BrokerTopicMetrics,name=FailedProduceRequestsPerSec,topic=([-.\w]+) kafka.server:type=BrokerTopicMetrics,name=FailedFetchRequestsPerSec,topic=([-.\w]+)
byte_out_count
The total number of bytes sent to clients.
kafka.server:type=BrokerTopicMetrics,name=BytesOutPerSec,
topic=([-.\w]+)
Partition metrics
The following metrics apply to partitions. To view the metrics for a specific
partition in a topic, filter by the cluster_id , topic_id , and
partition_index labels.
Metric
Description
Equivalent MBean name
consumer_lag
Replication lag in messages between leader and each
follower replica.
kafka.server:type=FetcherLagMetrics,name=ConsumerLag,clientId=([-.\w]+),topic=([-.\w]+),partition=([0-9]+)
log_segments
The current number of log segments. This is useful to make sure
storage tiering remains healthy.
kafka.log:type=Log,name=NumLogSegments,topic=([-.\w]+),partition=([0-9]+)
first_offset
The first offset for each partition in the topic. In combination
with the last_offset , it can be used to monitor an upper
bound on the total number of messages stored as well as to find the
actual offset of the oldest message.
kafka.log:type=Log,name=LogStartOffset,topic=([-.\w]+),partition=([0-9]+)
last_offset
The last offset in the partition. This can be used to find the
latest offset for each partition over time. This can be useful in
identifying the specific offset needed to reprocess data starting
from a particular time in the past.
kafka.log:type=Log,name=LogEndOffset,topic=([-.\w]+),partition=([0-9]+)
byte_size
The size of the partition on disk in bytes.
N/A
Consumer group metrics
The following metrics apply to consumer groups. To view the metrics for a
specific consumer group, filter by the consumer_group_id label.
Metric
Description
Equivalent MBean name
offset_lag
The difference between the latest offset and the last committed offset
for the consumer group for each partition. This metric estimates how many
produced messages the consumer has not yet successfully processed.
N/A
What's next
View all Managed Service for Apache Kafka metrics
Audit logging
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

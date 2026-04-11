---
title: "Change the partition assignment in a Managed Service for Apache Kafka cluster\
  \ \_|\_ Google Cloud Managed Service for Apache Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers/assign-partitions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/brokers/assign-partitions
  title: "Change the partition assignment in a Managed Service for Apache Kafka cluster\
    \ \_|\_ Google Cloud Managed Service for Apache Kafka \_|\_ Google Cloud Documentation"
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
Change the partition assignment in a Managed Service for Apache Kafka cluster
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to change which brokers are assigned to a topic
partition in a Managed Service for Apache Kafka cluster.
Overview
When you create a new topic in Managed Service for Apache Kafka, you choose
the number of partitions and the replication factor.
The replication factor is the number of brokers that store a replica of each
partition in the topic. One of these brokers acts as the leader , and the
others are followers . The leader handles write requests for the partition, and
the followers replicate the data. If the leader fails, one of the followers is
elected leader.
If automatic rebalancing
is enabled on a cluster, then scaling up the cluster might result in partitions
being reassigned, to maintain approximately the same number of partitions per
broker.
You might want to change the partition assignment for the following reasons:
You scale up a cluster that has automatic rebalancing disabled, and a newly
added broker isn't handling any load.
A partition receives much more traffic than other partitions, and you want to
isolate the load by moving other partitions to different brokers.
You can reassign partitions by using the Kafka command-line tools, as described in
the next section.
Change the partition assignment
To change which brokers are assigned to partitions, perform the following steps.
Install the Kafka command-line tools on a Compute Engine VM. The VM must be
able to reach a subnet that is connected to your cluster. For more
information, see
Produce and consume messages with the Kafka command-line tools .
Get a list of brokers in the cluster by calling the
kafka-configs.sh --describe command.
kafka-configs.sh --describe --entity-type brokers \
--bootstrap-server = BOOTSTRAP_ADDRESS \
--command-config client.properties
Replace BOOTSTRAP_ADDRESS with the cluster's
bootstrap address .
The command returns a list of broker IDs and dynamic broker settings.
Example output:
Dynamic configs for broker 10 are:
Dynamic configs for broker 11 are:
Dynamic configs for broker 12 are:
Default configs for brokers in the cluster are:
In this example, the broker IDs are 10 , 11 , and 12 . There are no
dynamic broker settings.
Create a JSON file that lists the topics to reassign to different brokers.
Format the file like the following example:
{
"topics" : [
{ "topic" : "topic-1" },
{ "topic" : "topic-2" }
]
}
Call the kafka-reassign-partitions.sh command with the --generate flag to
get the current partition mapping, and also to generate a candidate partition
reassignment.
kafka-reassign-partitions.sh --generate \
--bootstrap-server = BOOTSTRAP_ADDRESS \
--topics-to-move-json-file TOPICS_FILE \
--broker-list BROKER_LIST \
--command-config client.properties
Replace the following:
TOPICS_FILE : The path to the JSON file from the
previous step.
BROKER_LIST : A comma-separated list of brokers
that the topic's partitions should be reassigned to. Example: 11,10 .
Example output:
Current partition replica assignment
{"version":1,"partitions":[{"topic":"topic-1","partition":0,"replicas":[12,10],"log_dirs":["any","any"]}]}
Proposed partition reassignment configuration
{"version":1,"partitions":[{"topic":"topic-1","partition":0,"replicas":[11,10],"log_dirs":["any","any"]}]}
In this example, partition 0 of topic-1 is assigned to brokers 12 and
10 .
Create a JSON file that defines a mapping of brokers to partitions. You can
start with the proposed reassignment from the previous step, modifying it as
needed.
For example, the following mapping moves partition 0 of topic-1 to brokers
11 and 10 .
{
"version" : 1 ,
"partitions" :[
{
"topic" : "topic-1" ,
"partition" : 0 ,
"replicas" :[ 11 , 10 ]
}
]
}
Assign the partitions by calling the kafka-reassign-partitions.sh --execute
command.
kafka-reassign-partitions.sh --execute \
--reassignment-json-file PARTITION_MAP \
--bootstrap-server = BOOTSTRAP_ADDRESS \
--command-config client.properties
Replace PARTITION_MAP with the path to the JSON file
from the previous step.
What's next
Overview of brokers in Managed Service for Apache Kafka
Monitor a Managed Service for Apache Kafka cluster
Plan the size of your Managed Service for Apache Kafka cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

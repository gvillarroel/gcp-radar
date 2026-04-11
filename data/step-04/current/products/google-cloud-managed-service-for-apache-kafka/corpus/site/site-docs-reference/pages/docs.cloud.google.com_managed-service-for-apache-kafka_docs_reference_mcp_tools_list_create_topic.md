---
title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_topic
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_topic
  title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\
    \ Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Reference
Send feedback
MCP Tools Reference: managedkafka
Stay organized with collections
Save and categorize content based on your preferences.
Tool: create_topic
Create a new Google Cloud Managed Service for Apache Kafka topic. Please provide the Project ID, Location, Cluster ID, and a unique Topic ID.
You must also specify:
Partition Count: The number of partitions for the topic (default of 3). This can only be increased.
Replication Factor: The number of replicas for each partition. A replication factor of 3 is recommended for high availability.
The following sample demonstrate how to use curl to invoke the create_topic MCP tool.
Curl Request
curl --location 'https://managedkafka.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_topic",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for CreateTopic.
CreateTopicRequest
JSON representation
{
"parent" : string ,
"topicId" : string ,
"topic" : {
object ( Topic )
}
}
Fields
parent
string
Required. The parent cluster in which to create the topic. Structured like projects/{project}/locations/{location}/clusters/{cluster} .
topicId
string
Required. The ID to use for the topic, which will become the final component of the topic's name.
This value is structured like: my-topic-name .
topic
object ( Topic )
Required. Configuration of the topic to create. Its name field is ignored.
Topic
JSON representation
{
"name" : string ,
"partitionCount" : integer ,
"replicationFactor" : integer ,
"configs" : {
string : string ,
...
}
}
Fields
name
string
Identifier. The name of the topic. The topic segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}
partitionCount
integer
Required. The number of partitions this topic has. The partition count can only be increased, not decreased. Please note that if partitions are increased for a topic that has a key, the partitioning logic or the ordering of the messages will be affected.
replicationFactor
integer
Required. Immutable. The number of replicas of each partition. A replication factor of 3 is recommended for high availability.
configs
map (key: string, value: string)
Optional. Configurations for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: cleanup.policy , compression.type .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ConfigsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
Output Schema
A Kafka topic in a given cluster.
Topic
JSON representation
{
"name" : string ,
"partitionCount" : integer ,
"replicationFactor" : integer ,
"configs" : {
string : string ,
...
}
}
Fields
name
string
Identifier. The name of the topic. The topic segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}
partitionCount
integer
Required. The number of partitions this topic has. The partition count can only be increased, not decreased. Please note that if partitions are increased for a topic that has a key, the partitioning logic or the ordering of the messages will be affected.
replicationFactor
integer
Required. Immutable. The number of replicas of each partition. A replication factor of 3 is recommended for high availability.
configs
map (key: string, value: string)
Optional. Configurations for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: cleanup.policy , compression.type .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ConfigsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]

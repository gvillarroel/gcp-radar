---
title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connector
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
Tool: create_connector
Create a new Google Cloud Managed service for Apache Kafka Connect connector. To create a connector, you'll need to provide the following required information:
Project ID: The ID of the Google Cloud project (e.g., my-project ).
Location: The Google Cloud region for the Connect cluster (e.g., us-central1 ).
Connect Cluster ID: The ID of the Connect cluster (e.g., my-connect-cluster ).
Connector ID: A unique identifier for your connector (e.g., my-connector ). The ID must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? .
You must also specify the connector configuration. The user should first be prompted on which connector type they want to create, and then provide the necessary properties for that connector type. Only use the example configuration for reference. The following connector types are supported:
configs (required): Key-value pairs for connector properties. The available connector types are:
MirrorMaker 2.0 Source connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorSourceConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
topics (required): "TOPIC_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
offset-syncs.topic.replication.factor : "1"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
TOPIC_NAME : The name of the Kafka topic(s) to mirror.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Checkpoint connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorCheckpointConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the checkpoint connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Heartbeat connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorHeartbeatConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Heartbeat connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the heartbeat connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
BigQuery Sink connector
Example Configuration:
name : "BQ_SINK_CONNECTOR_ID"
project (required): "GCP_PROJECT_ID"
topics : "TOPIC_ID"
tasks.max : "3"
connector.class (required): "com.wepay.kafka.connect.bigquery.BigQuerySinkConnector"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
defaultDataset ( required ): "BQ_DATASET_ID"
Replace with these:
BQ_SINK_CONNECTOR_ID : The ID or name of the BigQuery Sink connector. The name of a connector is immutable.
GCP_PROJECT_ID : The ID of the Google Cloud project where your BigQuery dataset resides.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the BigQuery Sink connector.
BQ_DATASET_ID : The ID of the BigQuery dataset that acts as the sink for the pipeline.
Cloud Storage Sink connector
Example Configuration:
name : "GCS_SINK_CONNECTOR_ID"
connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector"
tasks.max : "1"
topics (required): "TOPIC_ID"
gcs.bucket.name (required): "GCS_BUCKET_NAME"
gcs.credentials.default : "true"
format.output.type : "json"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
Replace with these:
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
GCS_BUCKET_NAME : The name of the Cloud Storage bucket that acts as a sink for the pipeline.
GCS_SINK_CONNECTOR_ID : The ID or name of the Cloud Storage Sink connector. The name of a connector is immutable.
Pub/Sub Source connector
Example Configuration:
connector.class (required): "com.google.pubsub.kafka.source.CloudPubSubSourceConnector"
cps.project (required): "PROJECT_ID"
cps.subscription (required): "PUBSUB_SUBSCRIPTION_ID"
kafka.topic (required): "KAFKA_TOPIC_ID"
value.converter : "org.apache.kafka.connect.converters.ByteArrayConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
tasks.max : "3"
Replace with these:
PROJECT_ID : The ID of the Google Cloud project where the Pub/Sub subscription resides.
PUBSUB_SUBSCRIPTION_ID : The ID of the Pub/Sub subscription to pull data from.
KAFKA_TOPIC_ID : The ID of the Kafka topic where data is written.
Pub/Sub Sink connector
Example Configuration:
connector.class : "com.google.pubsub.kafka.sink.CloudPubSubSinkConnector"
name : "CPS_SINK_CONNECTOR_ID"
tasks.max : "1"
topics : "TOPIC_ID"
value.converter : "org.apache.kafka.connect.storage.StringConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
cps.topic : "CPS_TOPIC_ID"
cps.project : "GCP_PROJECT_ID"
Replace with these:
CPS_SINK_CONNECTOR_ID : The ID or name of the Pub/Sub Sink connector. The name of a connector is immutable.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which data is read by the Pub/Sub Sink connector.
CPS_TOPIC_ID : The ID of the Pub/Sub topic to which data is published.
GCP_PROJECT_ID : The ID of the Google Cloud project where your Pub/Sub topic resides.
task_restart_policy (optional): A policy that specifies how to restart failed connector tasks. If not set, failed tasks won't be restarted.
minimum_backoff (optional): The minimum amount of time to wait before retrying a failed task (e.g., "60s"). Defaults to 60 seconds.
maximum_backoff (optional): The maximum amount of time to wait before retrying a failed task (e.g., "43200s" for 12 hours). Defaults to 12 hours.
task_retry_disabled (optional): If true, task retry is disabled.
Important Notes:
The CreateConnectorRequest requires the following parameters:
parent : The parent Connect cluster in which to create the connector. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
connector_id : The ID to use for the connector.
connector : The connector configuration. Its name field is ignored.
The configs field should be formatted as a JSON object, for example: "configs":{"name":"my-connector","tasks.max":"1","gcs.bucket.name",...} . Do not add unnecessary quotes around the keys or values.
The following sample demonstrate how to use curl to invoke the create_connector MCP tool.
Curl Request
curl --location 'https://managedkafka.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_connector",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for CreateConnector.
CreateConnectorRequest
JSON representation
{
"parent" : string ,
"connectorId" : string ,
"connector" : {
object ( Connector )
}
}
Fields
parent
string
Required. The parent Connect cluster in which to create the connector. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
connectorId
string
Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? to comply with RFC 1035.
This value is structured like: my-connector-id .
connector
object ( Connector )
Required. The connector to create.
Connector
JSON representation
{
"name" : string ,
"configs" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
// Union field restart_policy can be only one of the following:
"taskRestartPolicy" : {
object ( TaskRetryPolicy )
}
// End of list of possible types for union field restart_policy .
}
Fields
name
string
Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector}
configs
map (key: string, value: string)
Optional. Connector config as keys/values. The keys of the map are connector property names, for example: connector.class , tasks.max , key.converter .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. The current state of the connector.
Union field restart_policy . A policy that specifies how to restart the failed connectors/tasks in a Cluster resource. If not set, the failed connectors/tasks won't be restarted. restart_policy can be only one of the following:
taskRestartPolicy
object ( TaskRetryPolicy )
Optional. Restarts the individual tasks of a Connector.
TaskRetryPolicy
JSON representation
{
"minimumBackoff" : string ,
"maximumBackoff" : string ,
"taskRetryDisabled" : boolean
}
Fields
minimumBackoff
string ( Duration format)
Optional. The minimum amount of time to wait before retrying a failed task. This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maximumBackoff
string ( Duration format)
Optional. The maximum amount of time to wait before retrying a failed task. This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
taskRetryDisabled
boolean
Optional. If true, task retry is disabled.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
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
A Kafka Connect connector in a given ConnectCluster.
Connector
JSON representation
{
"name" : string ,
"configs" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
// Union field restart_policy can be only one of the following:
"taskRestartPolicy" : {
object ( TaskRetryPolicy )
}
// End of list of possible types for union field restart_policy .
}
Fields
name
string
Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector}
configs
map (key: string, value: string)
Optional. Connector config as keys/values. The keys of the map are connector property names, for example: connector.class , tasks.max , key.converter .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. The current state of the connector.
Union field restart_policy . A policy that specifies how to restart the failed connectors/tasks in a Cluster resource. If not set, the failed connectors/tasks won't be restarted. restart_policy can be only one of the following:
taskRestartPolicy
object ( TaskRetryPolicy )
Optional. Restarts the individual tasks of a Connector.
TaskRetryPolicy
JSON representation
{
"minimumBackoff" : string ,
"maximumBackoff" : string ,
"taskRetryDisabled" : boolean
}
Fields
minimumBackoff
string ( Duration format)
Optional. The minimum amount of time to wait before retrying a failed task. This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maximumBackoff
string ( Duration format)
Optional. The maximum amount of time to wait before retrying a failed task. This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
taskRetryDisabled
boolean
Optional. If true, task retry is disabled.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
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

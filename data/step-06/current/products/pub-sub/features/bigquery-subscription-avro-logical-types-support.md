---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.312Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "BigQuery subscription Avro logical types support"
feature_slug: "bigquery-subscription-avro-logical-types-support"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/bigquery"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "subscription"
  - "avro"
  - "logical"
  - "types"
  - "subscriptions"
  - "the"
  - "timestamp"
  - "micros"
---

# BigQuery subscription Avro logical types support

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

BigQuery subscriptions support the Avro logical types timestamp-micros, date, and time-micros.

## Extended Definition

BigQuery subscriptions support the Avro logical types timestamp-micros, date, and time-micros.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Avro types Avro Type BigQuery Data Type null Any NULLABLE boolean BOOLEAN int INTEGER , NUMERIC , or BIGNUMERIC long INTEGER , NUMERIC , or BIGNUMERIC float FLOAT64 , NUMERIC , or BIGNUMERIC double FLOAT64 , NUMERIC , or BIGNUMERIC bytes BYTES , NUMERIC , or BIGNUMERIC string STRING , JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC record RECORD/STRUCT array of Type REPEATED Type map with value type ValueType REPEATED STRUCT <key STRING, value ValueType> union with two types, one that is null and the other Type NULLABLE Type other union s Unmappable fixed BYTES , NUMERIC , or BIGNUMERIC enum INTEGER Avro logical types Avro Logical Type BigQuery Data Type timestamp-micros TIMESTAMP timestamp-millis TIMESTAMP date DATE time-micros TIME time-millis TIME duration INTERVAL decimal NUMERIC or BIGNUMERIC Protocol Buffer types Protocol Buffer Type BigQuery Data Type double FLOAT64 , NUMERIC , or BIGNUMERIC float FLOAT64 , NUMERIC , or BIGNUMERIC int32 INTEGER , NUMERIC , BIGNUMERIC , or DATE int64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP uint32 INTEGER , NUMERIC , BIGNUMERIC , or DATE uint64 NUMERIC or BIGNUMERIC sint32 INTEGER , NUMERIC , or BIGNUMERIC sint64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP fixed32 INTEGER , NUMERIC , BIGNUMERIC , or DATE fixed64 NUMERIC or BIGNUMERIC sfixed32 INTEGER , NUMERIC , BIGNUMERIC , or DATE sfixed64 INTEGER , NUMERIC , BIGNUMERIC , DATE , DATETIME , or TIMESTAMP bool BOOLEAN string STRING , JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC bytes BYTES , NUMERIC , or BIGNUMERIC enum INTEGER message RECORD/STRUCT oneof Unmappable map<KeyType, ValueType> REPEATED RECORD<key KeyType, value ValueType> enum INTEGER repeated/array of Type REPEATED Type Date and time integer representation When mapping from an integer to one of the date or time types, the number must represent the correct value.
- BigQuery Data Type Integer Representation DATE The number of days since the Unix epoch, January 1, 1970 DATETIME The date and time in microseconds expressed as civil time using the CivilTimeEncoder TIME The time in microseconds expressed as civil time using the CivilTimeEncoder TIMESTAMP The number of microseconds since the Unix epoch, January 1, 1970 00:00:00 UTC BigQuery change data capture ingestion BigQuery subscriptions support change data capture (CDC) ingestion updates when use topic schema or use table schema is set to true in the subscription properties.
- Any logical types not listed only match the equivalent Avro type that they annotate, as detailed in the Avro specification .
- Some Avro logical types are supported, as specified in the following table.

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Here is the Avro schema for the output messages with write metadata disabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessage" , "fields" : [ { "name" : "data" , "type" : "bytes" } ] } Here is the Avro schema for the output messages with write metadata enabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessageWithMetadata" , "fields" : [ { "name" : "subscription name" , "type" : "string" }, { "name" : "message id" , "type" : "string" }, { "name" : "publish time" , "type" : { "type" : "long" , "logicalType" : "timestamp-micros" } }, { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "data" , "type" : "bytes" } ] } Use topic schema : This option lets Pub/Sub use the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files.
- CloudStorageConfig ( bucket = bucket , filename prefix = filename prefix , filename suffix = filename suffix , avro config = avro config , Min 1 minutes, max 10 minutes max duration = max duration , Min 1 KB, max 10 GiB max bytes = 10000000 , ) Wrap the subscriber in a 'with' block to automatically call close() to close the underlying gRPC channel when done. with subscriber : subscription = subscriber . create subscription ( request = { "name" : subscription path , "topic" : topic path , "cloud storage config" : cloudstorage config , } ) print ( f "CloudStorage subscription created: { subscription } ." ) print ( f "Bucket for subscription is: { bucket } " ) print ( f "Prefix is: { filename prefix } " ) print ( f "Suffix is: { filename suffix } " ) Monitor a Cloud Storage subscription Cloud Monitoring provides a number of metrics to monitor subscriptions .
- For more information, see Set up authentication for client libraries . using Google.Cloud.PubSub.V1 ; using Google.Protobuf.WellKnownTypes ; using System ; public class CreateCloudStorageSubscriptionSample { public Subscription CreateCloudStorageSubscription ( string projectId , string topicId , string subscriptionId , string bucket , string filenamePrefix , string filenameSuffix , TimeSpan maxDuration ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- For more information, see Set up authentication for client libraries . from google.cloud import pubsub v1 from google.protobuf import duration pb2 TODO(developer) project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bucket = "my-bucket" filename prefix = "log events " filename suffix = ".avro" Either CloudStorageConfig.AvroConfig or CloudStorageConfig.TextConfig defaults to TextConfig avro config = pubsub v1 . types .

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Pub/Sub Ruby API reference documentation . project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bigquery table id = "my-project:dataset-id.table-id" pubsub = Google :: Cloud :: PubSub . new project id : project id subscription admin = pubsub . subscription admin subscription = subscription admin . create subscription \ name : pubsub . subscription path ( subscription id ), topic : pubsub . topic path ( topic id ), bigquery config : { table : bigquery table id , write metadata : true } puts "BigQuery subscription created: #{ subscription id } ." puts "Table for subscription is: #{ bigquery table id } " Monitor a BigQuery subscription Cloud Monitoring provides a number of metrics to monitor subscriptions .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery subscription: pubsub.subscriptions.create on the project pubsub.topics.attachSubscription on the topic You might also be able to get these permissions with custom roles or other predefined roles .
- For more information, see the Pub/Sub C# API reference documentation . using Google.Cloud.PubSub.V1 ; public class CreateBigQuerySubscriptionSample { public Subscription CreateBigQuerySubscription ( string projectId , string topicId , string subscriptionId , string bigqueryTableId ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- Cross-project subscriptions If you create a subscription in one project for a topic in another project, you must have pubsub.subscriptions.create permission on the project in which you are creating the subscription, and pubsub.topics.attachSubscription permission on the topic.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}" MessageTransform JSON representation { "enabled" : boolean , "disabled" : boolean , // Union field transform can be only one of the following: "javascriptUdf" : { object ( JavaScriptUDF ) } , "aiInference" : { object ( AIInference ) } // End of list of possible types for union field transform . } Fields enabled (deprecated) boolean This item is deprecated!
- CloudStorageConfig JSON representation { "bucket" : string , "filenamePrefix" : string , "filenameSuffix" : string , "filenameDatetimeFormat" : string , "maxDuration" : string , "maxBytes" : string , "maxMessages" : string , "state" : enum ( State ) , "serviceAccountEmail" : string , // Union field output format can be only one of the following: "textConfig" : { object ( TextConfig ) } , "avroConfig" : { object ( AvroConfig ) } // End of list of possible types for union field output format . } Fields bucket string Required.
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list subscriptions", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the ListSubscriptions method.
- It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( ), periods ( . ), tildes ( ), plus ( + ) or percent signs ( % ).


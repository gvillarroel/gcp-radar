---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.313Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "BigQuery subscriptions"
feature_slug: "bigquery-subscriptions"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/bigquery"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
keywords:
  - "subscriptions"
  - "can"
  - "map"
  - "pub"
  - "sub"
  - "string"
  - "fields"
  - "to"
---

# BigQuery subscriptions

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

BigQuery subscriptions can map Pub/Sub string fields to TIMESTAMP, DATETIME, DATE, or TIME columns in BigQuery; Pub/Sub can create BigQuery subscriptions that write messages directly to an existing BigQuery table.

## Extended Definition

BigQuery subscriptions can map Pub/Sub string fields to TIMESTAMP, DATETIME, DATE, or TIME columns in BigQuery; Pub/Sub can create BigQuery subscriptions that write messages directly to an existing BigQuery table.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)

## Supporting Pages

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the Avro schema for the output messages with write metadata disabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessage" , "fields" : [ { "name" : "data" , "type" : "bytes" } ] } Here is the Avro schema for the output messages with write metadata enabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessageWithMetadata" , "fields" : [ { "name" : "subscription name" , "type" : "string" }, { "name" : "message id" , "type" : "string" }, { "name" : "publish time" , "type" : { "type" : "long" , "logicalType" : "timestamp-micros" } }, { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "data" , "type" : "bytes" } ] } Use topic schema : This option lets Pub/Sub use the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files.
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bucket = "your-bucket" ; String filenamePrefix = "log events " ; String filenameSuffix = ".text" ; Duration maxDuration = Duration . newBuilder (). setSeconds ( 300 ). build (); createCloudStorageSubscription ( projectId , topicId , subscriptionId , bucket , filenamePrefix , filenameSuffix , maxDuration ); } public static void createCloudStorageSubscription ( String projectId , String topicId , String subscriptionId , String bucket , String filenamePrefix , String filenameSuffix , Duration maxDuration ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); CloudStorageConfig cloudStorageConfig = CloudStorageConfig . newBuilder () . setBucket ( bucket ) . setFilenamePrefix ( filenamePrefix ) . setFilenameSuffix ( filenameSuffix ) . setMaxDuration ( maxDuration ) . build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setCloudStorageConfig ( cloudStorageConfig ) . build ()); System . out . println ( "Created a CloudStorage subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Pub/Sub quickstart using client libraries .
- For more information, see Set up authentication for client libraries . using Google.Cloud.PubSub.V1 ; using Google.Protobuf.WellKnownTypes ; using System ; public class CreateCloudStorageSubscriptionSample { public Subscription CreateCloudStorageSubscription ( string projectId , string topicId , string subscriptionId , string bucket , string filenamePrefix , string filenameSuffix , TimeSpan maxDuration ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- Metadata such as subscription name , message id , publish time , and attributes fields are written to top-level fields in the output Avro object while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map.

### BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- Source ID: `site-docs-root-2`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the type in the topic schema is a string and the type in the BigQuery table is JSON , TIMESTAMP , DATETIME , DATE , TIME , NUMERIC , or BIGNUMERIC , then any value for this field in a Pub/Sub message must adhere to the format specified for the BigQuery data type .
- If Pub/Sub cannot write messages to BigQuery, then Pub/Sub backs off delivery of messages in a way similar to push backoff behavior .
- The different kinds of subscriptions that Pub/Sub supports and why you might want to use a BigQuery subscription.
- Handle message failures When a Pub/Sub message cannot be written to BigQuery, the message cannot be acknowledged.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- ListSubscriptionsResponse JSON representation { "subscriptions" : [ { object ( Subscription ) } ] , "nextPageToken" : string } Fields subscriptions[] object ( Subscription ) Optional.

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bigqueryTableId = "your-project.your-dataset.your-table" ; createBigQuerySubscription ( projectId , topicId , subscriptionId , bigqueryTableId ); } public static void createBigQuerySubscription ( String projectId , String topicId , String subscriptionId , String bigqueryTableId ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); BigQueryConfig bigqueryConfig = BigQueryConfig . newBuilder (). setTable ( bigqueryTableId ). setWriteMetadata ( true ). build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setBigqueryConfig ( bigqueryConfig ) . build ()); System . out . println ( "Created a BigQuery subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub C# API reference documentation . using Google.Cloud.PubSub.V1 ; public class CreateBigQuerySubscriptionSample { public Subscription CreateBigQuerySubscription ( string projectId , string topicId , string subscriptionId , string bigqueryTableId ) { SubscriberServiceApiClient subscriber = SubscriberServiceApiClient .
- You can also monitor subscriptions from within Pub/Sub .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID' ; // const bigqueryTableId = 'YOUR TABLE ID' ; // Imports the Google Cloud client library import { PubSub , CreateSubscriptionOptions } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createBigQuerySubscription ( topicNameOrId : string , subscriptionNameOrId : string , bigqueryTableId : string , ) { const options : CreateSubscriptionOptions = { bigqueryConfig : { table : bigqueryTableId , writeMetadata : true , }, }; await pubSubClient . topic ( topicNameOrId ) . createSubscription ( subscriptionNameOrId , options ); console . log ( Subscription $ { subscriptionNameOrId } created . ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .


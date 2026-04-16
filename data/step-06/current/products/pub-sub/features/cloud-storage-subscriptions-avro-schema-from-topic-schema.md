---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.306Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Cloud Storage subscriptions Avro schema from topic schema"
feature_slug: "cloud-storage-subscriptions-avro-schema-from-topic-schema"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/bigquery"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions"
keywords:
  - "storage"
  - "subscriptions"
  - "avro"
  - "schema"
  - "from"
  - "topic"
  - "can"
  - "use"
---

# Cloud Storage subscriptions Avro schema from topic schema

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage subscriptions can use the schema of the attached Pub/Sub topic when writing Avro files.

## Extended Definition

Cloud Storage subscriptions can use the schema of the attached Pub/Sub topic when writing Avro files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)

## Supporting Pages

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Values are as follows: text : Messages are written as raw text, separated by a newline. avro : Messages are written as an Avro binary. --cloud-storage-write-metadata and --cloud-storage-use-topic-schema only affect subscriptions with output format avro .
- To create a Cloud Storage subscription, run the gcloud pubsub subscriptions create command . gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema If you want to use a custom service account, provide it as an additional argument: gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema --cloud-storage-service-account-email = SERVICE ACCOUNT NAME In the command, only SUBSCRIPTION ID , the --topic flag, and the --cloud-storage-bucket flag are required.
- For more information, see Set up authentication for client libraries . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicName = 'YOUR TOPIC NAME' ; // const subscriptionName = 'YOUR SUBSCRIPTION NAME' ; // const bucket = 'YOUR BUCKET ID' ; // const filenamePrefix = 'YOUR FILENAME PREFIX' ; // const filenameSuffix = 'YOUR FILENAME SUFFIX' ; // const maxDuration = 60 ; // Imports the Google Cloud client library import { CreateSubscriptionOptions , PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createCloudStorageSubscription ( topicName : string , subscriptionName : string , bucket : string , filenamePrefix : string , filenameSuffix : string , maxDuration : number , ) { const options : CreateSubscriptionOptions = { cloudStorageConfig : { bucket , filenamePrefix , filenameSuffix , maxDuration : { seconds : maxDuration , }, }, }; await pubSubClient . topic ( topicName ) . createSubscription ( subscriptionName , options ); console . log ( Created subscription $ { subscriptionName } with a cloud storage configuration . , ); } PHP Before trying this sample, follow the PHP setup instructions in the Pub/Sub quickstart using client libraries .
- Here is the Avro schema for the output messages with write metadata disabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessage" , "fields" : [ { "name" : "data" , "type" : "bytes" } ] } Here is the Avro schema for the output messages with write metadata enabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessageWithMetadata" , "fields" : [ { "name" : "subscription name" , "type" : "string" }, { "name" : "message id" , "type" : "string" }, { "name" : "publish time" , "type" : { "type" : "long" , "logicalType" : "timestamp-micros" } }, { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "data" , "type" : "bytes" } ] } Use topic schema : This option lets Pub/Sub use the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files.

### Create a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic](https://docs.cloud.google.com/pubsub/docs/create-cloud-storage-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const bucket = 'YOUR BUCKET NAME' ; // const inputFormat = 'text' ; // const textDelimiter = ' \n ' ; // const matchGlob = ' .txt' ; // const minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ; // Imports the Google Cloud client library import { PubSub , TopicMetadata } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithCloudStorageIngestion ( topicNameOrId : string , bucket : string , inputFormat : string , textDelimiter : string , matchGlob : string , minimumObjectCreateTime : string , ) { const minimumDate = Date . parse ( minimumObjectCreateTime ); const topicMetadata : TopicMetadata = { name : topicNameOrId , ingestionDataSourceSettings : { cloudStorage : { bucket , minimumObjectCreateTime : { seconds : minimumDate / 1000 , nanos : ( minimumDate % 1000 ) 1000 , }, matchGlob , }, }, }; // Make a format appropriately . switch ( inputFormat ) { case 'text' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . textFormat = { delimiter : textDelimiter , }; break ; case 'avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . avroFormat = {}; break ; case 'pubsub avro' : topicMetadata . ingestionDataSourceSettings ! . cloudStorage ! . pubsubAvroFormat = {}; break ; default : console . error ( 'inputFormat must be in ("text", "avro", "pubsub avro")' ); return ; } // Creates a new topic with Cloud Storage ingestion . await pubSubClient . createTopic ( topicMetadata ); console . log ( Topic $ { topicNameOrId } created with Cloud Storage ingestion . ); } Python Before trying this sample, follow the Python setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const bucket = 'YOUR BUCKET NAME' ; // const inputFormat = 'text' ; // const textDelimiter = ' \n ' ; // const matchGlob = ' .txt' ; // const minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ; // Imports the Google Cloud client library const { PubSub } = require ( '@google-cloud/pubsub' ); // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createTopicWithCloudStorageIngestion ( topicNameOrId , bucket , inputFormat , textDelimiter , matchGlob , minimumObjectCreateTime , ) { const minimumDate = Date . parse ( minimumObjectCreateTime ); const topicMetadata = { name : topicNameOrId , ingestionDataSourceSettings : { cloudStorage : { bucket , minimumObjectCreateTime : { seconds : minimumDate / 1000 , nanos : ( minimumDate % 1000 ) 1000 , }, matchGlob , }, }, }; // Make a format appropriately . switch ( inputFormat ) { case 'text' : topicMetadata . ingestionDataSourceSettings . cloudStorage . textFormat = { delimiter : textDelimiter , }; break ; case 'avro' : topicMetadata . ingestionDataSourceSettings . cloudStorage . avroFormat = {}; break ; case 'pubsub avro' : topicMetadata . ingestionDataSourceSettings . cloudStorage . pubsubAvroFormat = {}; break ; default : console . error ( 'inputFormat must be in ("text", "avro", "pubsub avro")' ); return ; } // Creates a new topic with Cloud Storage ingestion . await pubSubClient . createTopic ( topicMetadata ); console . log ( Topic $ { topicNameOrId } created with Cloud Storage ingestion . ); } Node.ts Before trying this sample, follow the Node.js setup instructions in Quickstart: Using Client Libraries .
- FullName ()); auto & cloud storage = request . mutable ingestion data source settings () - > mutable cloud storage (); cloud storage . set bucket ( std :: move ( bucket )); if ( input format == "text" ) { cloud storage . mutable text format () - > set delimiter ( std :: move ( text delimiter )); } else if ( input format == "avro" ) { cloud storage . mutable avro format (); } else if ( input format == "pubsub avro" ) { cloud storage . mutable pubsub avro format (); } else { std :: cout << "input format must be in ('text', 'avro', 'pubsub avro'); " "got value: " << input format << std :: endl ; return ; } if ( ! match glob . empty ()) { cloud storage . set match glob ( std :: move ( match glob )); } if ( ! minimum object create time . empty ()) { google :: protobuf :: Timestamp timestamp ; if ( ! google :: protobuf :: util :: TimeUtil :: FromString ( minimum object create time , cloud storage . mutable minimum object create time ())) { std :: cout << "Invalid minimum object create time: " << minimum object create time << std :: endl ; } } auto topic = client .
- For more information, see the Pub/Sub Python API reference documentation . from google.cloud import pubsub v1 from google.protobuf import timestamp pb2 from google.pubsub v1.types import Topic from google.pubsub v1.types import IngestionDataSourceSettings TODO(developer) project id = "your-project-id" topic id = "your-topic-id" bucket = "your-bucket" input format = "text" (can be one of "text", "avro", "pubsub avro") text delimiter = "\n" match glob = " .txt" minimum object create time = "YYYY-MM-DDThh:mm:ssZ" publisher = pubsub v1 .

### BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery](https://docs.cloud.google.com/pubsub/docs/bigquery)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery Data Type Integer Representation DATE The number of days since the Unix epoch, January 1, 1970 DATETIME The date and time in microseconds expressed as civil time using the CivilTimeEncoder TIME The time in microseconds expressed as civil time using the CivilTimeEncoder TIMESTAMP The number of microseconds since the Unix epoch, January 1, 1970 00:00:00 UTC BigQuery change data capture ingestion BigQuery subscriptions support change data capture (CDC) ingestion updates when use topic schema or use table schema is set to true in the subscription properties.
- BigLake tables for Apache Iceberg in BigQuery BigQuery subscriptions can be used with BigLake tables for Apache Iceberg in BigQuery with no additional changes required.
- To use the feature with use topic schema , set the schema of the topic with the following fields: CHANGE TYPE (required): A string field set to UPSERT or DELETE .
- Schema compatibility This section is only applicable if you select the option Use topic schema when you create a BigQuery subscription.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- When true, use the topic's schema as the columns to write to in BigQuery, if it exists. use topic schema and use table schema cannot be enabled at the same time. writeMetadata boolean Optional.
- When true, use the BigQuery table's schema as the columns to write to in BigQuery. use table schema and use topic schema cannot be enabled at the same time. serviceAccountEmail string Optional.
- AvroConfig JSON representation { "writeMetadata" : boolean , "useTopicSchema" : boolean } Fields writeMetadata boolean Optional.
- CloudStorageConfig JSON representation { "bucket" : string , "filenamePrefix" : string , "filenameSuffix" : string , "filenameDatetimeFormat" : string , "maxDuration" : string , "maxBytes" : string , "maxMessages" : string , "state" : enum ( State ) , "serviceAccountEmail" : string , // Union field output format can be only one of the following: "textConfig" : { object ( TextConfig ) } , "avroConfig" : { object ( AvroConfig ) } // End of list of possible types for union field output format . } Fields bucket string Required.


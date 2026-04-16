---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.327Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub subscription byte cost metric"
feature_slug: "pub-sub-subscription-byte-cost-metric"
latest_feature_date: "2015-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting"
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
keywords:
  - "pub"
  - "sub"
  - "subscription"
  - "byte"
  - "cost"
  - "metric"
  - "exposes"
  - "quota"
---

# Pub/Sub subscription byte cost metric

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub exposes a quota metric for subscription byte cost.

## Extended Definition

Pub/Sub exposes a quota metric for subscription byte cost.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)

## Supporting Pages

### "Troubleshooting BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check if you're encountering quota limitations, examine the push requests metric ( subscription/push request count ) for any resource exhausted errors.
- Search for the relevant quota, either pubsub.googleapis.com/regionalpushsubscriber or bigquerystorage.googleapis.com/write/append bytes .
- Select the metric pubsub.googleapis.com/subscription/push request count and filter by response code=invalid argument .
- Home Documentation Data analytics Pub/Sub Guides Send feedback Troubleshooting BigQuery subscriptions Stay organized with collections Save and categorize content based on your preferences.

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Pub/Sub Ruby API reference documentation . project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bigquery table id = "my-project:dataset-id.table-id" pubsub = Google :: Cloud :: PubSub . new project id : project id subscription admin = pubsub . subscription admin subscription = subscription admin . create subscription \ name : pubsub . subscription path ( subscription id ), topic : pubsub . topic path ( topic id ), bigquery config : { table : bigquery table id , write metadata : true } puts "BigQuery subscription created: #{ subscription id } ." puts "Table for subscription is: #{ bigquery table id } " Monitor a BigQuery subscription Cloud Monitoring provides a number of metrics to monitor subscriptions .
- Parameters subscription name STRING Name of a subscription. message id STRING ID of a message publish time TIMESTAMP The time of publishing a message. data BYTES, STRING, or JSON The message body.
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bigqueryTableId = "your-project.your-dataset.your-table" ; createBigQuerySubscription ( projectId , topicId , subscriptionId , bigqueryTableId ); } public static void createBigQuerySubscription ( String projectId , String topicId , String subscriptionId , String bigqueryTableId ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); BigQueryConfig bigqueryConfig = BigQueryConfig . newBuilder (). setTable ( bigqueryTableId ). setWriteMetadata ( true ). build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setBigqueryConfig ( bigqueryConfig ) . build ()); System . out . println ( "Created a BigQuery subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID' ; // const bigqueryTableId = 'YOUR TABLE ID' ; // Imports the Google Cloud client library import { PubSub , CreateSubscriptionOptions } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createBigQuerySubscription ( topicNameOrId : string , subscriptionNameOrId : string , bigqueryTableId : string , ) { const options : CreateSubscriptionOptions = { bigqueryConfig : { table : bigqueryTableId , writeMetadata : true , }, }; await pubSubClient . topic ( topicNameOrId ) . createSubscription ( subscriptionNameOrId , options ); console . log ( Subscription $ { subscriptionNameOrId } created . ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- To create a Cloud Storage subscription, run the gcloud pubsub subscriptions create command . gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema If you want to use a custom service account, provide it as an additional argument: gcloud pubsub subscriptions create SUBSCRIPTION ID \ --topic = TOPIC ID \ --cloud-storage-bucket = BUCKET NAME \ --cloud-storage-file-prefix = CLOUD STORAGE FILE PREFIX \ --cloud-storage-file-suffix = CLOUD STORAGE FILE SUFFIX \ --cloud-storage-file-datetime-format = CLOUD STORAGE FILE DATETIME FORMAT \ --cloud-storage-max-duration = CLOUD STORAGE MAX DURATION \ --cloud-storage-max-bytes = CLOUD STORAGE MAX BYTES \ --cloud-storage-max-messages = CLOUD STORAGE MAX MESSAGES \ --cloud-storage-output-format = CLOUD STORAGE OUTPUT FORMAT \ --cloud-storage-write-metadata --cloud-storage-use-topic-schema --cloud-storage-service-account-email = SERVICE ACCOUNT NAME In the command, only SUBSCRIPTION ID , the --topic flag, and the --cloud-storage-bucket flag are required.
- Here is the Avro schema for the output messages with write metadata disabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessage" , "fields" : [ { "name" : "data" , "type" : "bytes" } ] } Here is the Avro schema for the output messages with write metadata enabled: { "type" : "record" , "namespace" : "com.google.pubsub" , "name" : "PubsubMessageWithMetadata" , "fields" : [ { "name" : "subscription name" , "type" : "string" }, { "name" : "message id" , "type" : "string" }, { "name" : "publish time" , "type" : { "type" : "long" , "logicalType" : "timestamp-micros" } }, { "name" : "attributes" , "type" : { "type" : "map" , "values" : "string" } }, { "name" : "data" , "type" : "bytes" } ] } Use topic schema : This option lets Pub/Sub use the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files.
- CloudStorageConfig ( bucket = bucket , filename prefix = filename prefix , filename suffix = filename suffix , avro config = avro config , Min 1 minutes, max 10 minutes max duration = max duration , Min 1 KB, max 10 GiB max bytes = 10000000 , ) Wrap the subscriber in a 'with' block to automatically call close() to close the underlying gRPC channel when done. with subscriber : subscription = subscriber . create subscription ( request = { "name" : subscription path , "topic" : topic path , "cloud storage config" : cloudstorage config , } ) print ( f "CloudStorage subscription created: { subscription } ." ) print ( f "Bucket for subscription is: { bucket } " ) print ( f "Prefix is: { filename prefix } " ) print ( f "Suffix is: { filename suffix } " ) Monitor a Cloud Storage subscription Cloud Monitoring provides a number of metrics to monitor subscriptions .
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bucket = "your-bucket" ; String filenamePrefix = "log events " ; String filenameSuffix = ".text" ; Duration maxDuration = Duration . newBuilder (). setSeconds ( 300 ). build (); createCloudStorageSubscription ( projectId , topicId , subscriptionId , bucket , filenamePrefix , filenameSuffix , maxDuration ); } public static void createCloudStorageSubscription ( String projectId , String topicId , String subscriptionId , String bucket , String filenamePrefix , String filenameSuffix , Duration maxDuration ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); CloudStorageConfig cloudStorageConfig = CloudStorageConfig . newBuilder () . setBucket ( bucket ) . setFilenamePrefix ( filenamePrefix ) . setFilenameSuffix ( filenameSuffix ) . setMaxDuration ( maxDuration ) . build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setCloudStorageConfig ( cloudStorageConfig ) . build ()); System . out . println ( "Created a CloudStorage subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Pub/Sub quickstart using client libraries .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema A subscription resource.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription. retryPolicy object ( RetryPolicy ) Optional.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.


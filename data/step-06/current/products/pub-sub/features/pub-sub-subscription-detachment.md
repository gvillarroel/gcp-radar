---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.319Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub subscription detachment"
feature_slug: "pub-sub-subscription-detachment"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "pub"
  - "sub"
  - "subscription"
  - "detachment"
  - "lets"
  - "you"
  - "detach"
  - "from"
---

# Pub/Sub subscription detachment

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub subscription detachment lets you detach a subscription from its topic.

## Extended Definition

Pub/Sub subscription detachment lets you detach a subscription from its topic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- Source ID: `site-docs-root-2`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicNameOrId = 'YOUR TOPIC NAME OR ID' ; // const subscriptionNameOrId = 'YOUR SUBSCRIPTION NAME OR ID' ; // const bigqueryTableId = 'YOUR TABLE ID' ; // Imports the Google Cloud client library import { PubSub , CreateSubscriptionOptions } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createBigQuerySubscription ( topicNameOrId : string , subscriptionNameOrId : string , bigqueryTableId : string , ) { const options : CreateSubscriptionOptions = { bigqueryConfig : { table : bigqueryTableId , writeMetadata : true , }, }; await pubSubClient . topic ( topicNameOrId ) . createSubscription ( subscriptionNameOrId , options ); console . log ( Subscription $ { subscriptionNameOrId } created . ); } PHP Before trying this sample, follow the PHP setup instructions in Quickstart: Using Client Libraries .
- For more information, see the Pub/Sub Python API reference documentation . from google.cloud import pubsub v1 TODO(developer) project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bigquery table id = "your-project.your-dataset.your-table" publisher = pubsub v1 .
- You can also monitor subscriptions from within Pub/Sub .
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bigqueryTableId = "your-project.your-dataset.your-table" ; createBigQuerySubscription ( projectId , topicId , subscriptionId , bigqueryTableId ); } public static void createBigQuerySubscription ( String projectId , String topicId , String subscriptionId , String bigqueryTableId ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); BigQueryConfig bigqueryConfig = BigQueryConfig . newBuilder (). setTable ( bigqueryTableId ). setWriteMetadata ( true ). build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setBigqueryConfig ( bigqueryConfig ) . build ()); System . out . println ( "Created a BigQuery subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in Quickstart: Using Client Libraries .

### Create Cloud Storage subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription](https://docs.cloud.google.com/pubsub/docs/create-cloudstorage-subscription)
- Source ID: `site-docs-root-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . / TODO ( developer ): Uncomment these variables before running the sample . / // const topicName = 'YOUR TOPIC NAME' ; // const subscriptionName = 'YOUR SUBSCRIPTION NAME' ; // const bucket = 'YOUR BUCKET ID' ; // const filenamePrefix = 'YOUR FILENAME PREFIX' ; // const filenameSuffix = 'YOUR FILENAME SUFFIX' ; // const maxDuration = 60 ; // Imports the Google Cloud client library import { CreateSubscriptionOptions , PubSub } from '@google-cloud/pubsub' ; // Creates a client ; cache this for further use const pubSubClient = new PubSub (); async function createCloudStorageSubscription ( topicName : string , subscriptionName : string , bucket : string , filenamePrefix : string , filenameSuffix : string , maxDuration : number , ) { const options : CreateSubscriptionOptions = { cloudStorageConfig : { bucket , filenamePrefix , filenameSuffix , maxDuration : { seconds : maxDuration , }, }, }; await pubSubClient . topic ( topicName ) . createSubscription ( subscriptionName , options ); console . log ( Created subscription $ { subscriptionName } with a cloud storage configuration . , ); } PHP Before trying this sample, follow the PHP setup instructions in the Pub/Sub quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import pubsub v1 from google.protobuf import duration pb2 TODO(developer) project id = "your-project-id" topic id = "your-topic-id" subscription id = "your-subscription-id" bucket = "my-bucket" filename prefix = "log events " filename suffix = ".avro" Either CloudStorageConfig.AvroConfig or CloudStorageConfig.TextConfig defaults to TextConfig avro config = pubsub v1 . types .
- You can also monitor subscriptions from within Pub/Sub .
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; String subscriptionId = "your-subscription-id" ; String bucket = "your-bucket" ; String filenamePrefix = "log events " ; String filenameSuffix = ".text" ; Duration maxDuration = Duration . newBuilder (). setSeconds ( 300 ). build (); createCloudStorageSubscription ( projectId , topicId , subscriptionId , bucket , filenamePrefix , filenameSuffix , maxDuration ); } public static void createCloudStorageSubscription ( String projectId , String topicId , String subscriptionId , String bucket , String filenamePrefix , String filenameSuffix , Duration maxDuration ) throws IOException { try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) { ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId ); ProjectSubscriptionName subscriptionName = ProjectSubscriptionName . of ( projectId , subscriptionId ); CloudStorageConfig cloudStorageConfig = CloudStorageConfig . newBuilder () . setBucket ( bucket ) . setFilenamePrefix ( filenamePrefix ) . setFilenameSuffix ( filenameSuffix ) . setMaxDuration ( maxDuration ) . build (); Subscription subscription = subscriptionAdminClient . createSubscription ( Subscription . newBuilder () . setName ( subscriptionName . toString ()) . setTopic ( topicName . toString ()) . setCloudStorageConfig ( cloudStorageConfig ) . build ()); System . out . println ( "Created a CloudStorage subscription: " + subscription . getAllFields ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Pub/Sub quickstart using client libraries .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.
- How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.
- Detached subscriptions don't receive messages from their topic and don't retain any backlog.
- Detached subscriptions don't receive messages from their topic and don't retain any backlog.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.
- How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.
- Detached subscriptions don't receive messages from their topic and don't retain any backlog.
- Detached subscriptions don't receive messages from their topic and don't retain any backlog.


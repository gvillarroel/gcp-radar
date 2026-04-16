---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.317Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub Lite topic partition increases"
feature_slug: "pub-sub-lite-topic-partition-increases"
latest_feature_date: "2021-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic"
  - "https://docs.cloud.google.com/pubsub/docs/change-topic-type"
  - "https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka"
  - "https://docs.cloud.google.com/pubsub/docs/publisher"
keywords:
  - "pub"
  - "sub"
  - "lite"
  - "topic"
  - "partition"
  - "increases"
  - "topics"
  - "can"
---

# Pub/Sub Lite topic partition increases

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub Lite topics can have their partition count increased.

## Extended Definition

Pub/Sub Lite topics can have their partition count increased.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type)
- [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)

## Supporting Pages

### "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\

- URL: [https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic](https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage Amazon Kinesis Data Streams import topics: Create an import topic: pubsub.topics.create Delete an import topic: pubsub.topics.delete Get an import topic: pubsub.topics.get List an import topic: pubsub.topics.list Publish to an import topic: pubsub.topics.publish and pubsub.serviceAgent Update an import topic: pubsub.topics.update Get the IAM policy for an import topic: pubsub.topics.getIamPolicy Configure the IAM policy for an import topic: pubsub.topics.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- Run the gcloud pubsub topics update command with all the flags mentioned in the following sample: gcloud pubsub topics update TOPIC ID --kinesis-ingestion-stream-arn KINESIS STREAM ARN --kinesis-ingestion-consumer-arn KINESIS CONSUMER ARN --kinesis-ingestion-role-arn KINESIS ROLE ARN --kinesis-ingestion-service-account PUBSUB SERVICE ACCOUNT Replace the following: TOPIC ID is the topic ID.
- Ensure that you have completed the following procedures: Set up federated identity to access Kinesis Data Streams Add the Pub/Sub publisher role to the Pub/Sub service account Add the service account user role to the service account To create an Amazon Kinesis Data Streams import topic, follow these steps: Console In the Google Cloud console, go to the Topics page.
- Run the gcloud pubsub topics create command: gcloud pubsub topics create TOPIC ID \ --kinesis-ingestion-stream-arn KINESIS STREAM ARN \ --kinesis-ingestion-consumer-arn KINESIS CONSUMER ARN \ --kinesis-ingestion-role-arn KINESIS ROLE ARN \ --kinesis-ingestion-service-account PUBSUB SERVICE ACCOUNT Replace the following: TOPIC ID : The topic ID.

### Change topic type \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/change-topic-type](https://docs.cloud.google.com/pubsub/docs/change-topic-type)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the gcloud pubsub topics update command with all the flags mentioned in the following sample: gcloud pubsub topics update TOPIC ID \ --cloud-storage-ingestion-bucket = BUCKET NAME \ --cloud-storage-ingestion-input-format = INPUT FORMAT \ --cloud-storage-ingestion-text-delimiter = TEXT DELIMITER \ --cloud-storage-ingestion-minimum-object-create-time = MINIMUM OBJECT CREATE TIME \ --cloud-storage-ingestion-match-glob = MATCH GLOB Replace the following: TOPIC ID is the topic ID or name.
- Run the gcloud pubsub topics update command with all the flags mentioned in the following sample: gcloud pubsub topics update TOPIC ID --kinesis-ingestion-stream-arn KINESIS STREAM ARN --kinesis-ingestion-consumer-arn KINESIS CONSUMER ARN --kinesis-ingestion-role-arn KINESIS ROLE ARN --kinesis-ingestion-service-account PUBSUB SERVICE ACCOUNT Replace the following: TOPIC ID is the topic ID or name.
- Run the gcloud pubsub topics update command: gcloud pubsub topics update TOPIC ID \ --clear-ingestion-data-source-settings Replace TOPIC ID with the topic ID.
- For more information, see the Pub/Sub Node.js API reference documentation . / TODO(developer): Uncomment these variables before running the sample. / // const topicNameOrId = 'YOUR TOPIC NAME OR ID'; // const awsRoleArn = 'arn:aws:iam:...'; // const gcpServiceAccount = 'ingestion-account@...'; // const streamArn = 'arn:aws:kinesis:...'; // const consumerArn = 'arn:aws:kinesis:...'; // Imports the Google Cloud client library import { PubSub , TopicMetadata } from '@google-cloud/pubsub' ; // Creates a client; cache this for further use const pubSubClient = new PubSub (); async function updateTopicIngestionType ( topicNameOrId : string , awsRoleArn : string , gcpServiceAccount : string , streamArn : string , consumerArn : string , ) { const metadata : TopicMetadata = { ingestionDataSourceSettings : { awsKinesis : { awsRoleArn , gcpServiceAccount , streamArn , consumerArn , }, }, }; await pubSubClient . topic ( topicNameOrId ). setMetadata ( metadata ); console . log ( 'Topic updated with Kinesis source successfully.' ); } For more information about ARNs, see Amazon Resource Names (ARNs) and IAM Identifiers .

### "Choose Pub/Sub or Cloud Managed Service for Apache Kafka \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka](https://docs.cloud.google.com/pubsub/docs/choose-pubsub-kafka)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publishers and subscribers can scale independently, not only across different topics and subscriptions, but also within the same ones.
- Pub/Sub dynamically adjusts capacity for individual topics and subscriptions.
- Open source Kafka compatibility for lift and shift No Yes Identity and Access Management and security Yes Yes Automatic network configuration Yes Yes Multi-cloud: identical across clouds No Yes Uptime SLA Yes Yes Data plane SLA Yes Not at this time Logging and monitoring Yes Yes Partition rebalancing across brokers Not applicable Yes Automatic capacity Pub/Sub dynamically adjusts capacity based on the incoming message rate and subscriber demand.
- While you can certainly use Pub/Sub as a central messaging system across all your environments, it's important to remember that it is a distinct service with its own API.

### Publish messages to topics \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Click Publish . gcloud To publish a message with an ordering key, use the gcloud pubsub topics publish command and the --ordering-key flag: gcloud pubsub topics publish TOPIC ID \ --message= MESSAGE DATA \ --ordering-key= ORDERING KEY Replace the following: TOPIC ID : the ID of the topic MESSAGE DATA : a string with the message data ORDERING KEY : a string with an ordering key REST To publish a message with an ordering key, send a POST request like the following: POST https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID :publish Content-Type: application/json Authorization: Bearer $(gcloud auth application-default print-access-token) Replace the following: PROJECT ID : the project ID of the project with the topic TOPIC ID : the ID of the topic Specify the following fields in the request body: { "messages": [ { "attributes": { " KEY ": " VALUE ", ... }, "data": " MESSAGE DATA ", "ordering key": " ORDERING KEY ", } ] } Replace the following: KEY : the key of a message attribute VALUE : the value for the key of the message attribute MESSAGE DATA : a base64-encoded string with the message data ORDERING KEY : a string with an ordering key The message must contain either a non-empty data field or at least one attribute.
- Click Publish . gcloud To publish a message, use the gcloud pubsub topics publish command: gcloud pubsub topics publish TOPIC ID \ --message= MESSAGE DATA \ [--attribute= KEY =" VALUE ",...] Replace the following: TOPIC ID : the ID of the topic MESSAGE DATA : a string with the message data KEY : the key of a message attribute VALUE : the value for the key of the message attribute REST To publish a message, send a POST request like the following: POST https://pubsub.googleapis.com/v1/projects/ PROJECT ID /topics/ TOPIC ID :publish Content-Type: application/json Authorization: Bearer $(gcloud auth application-default print-access-token) Replace the following: PROJECT ID : the project ID of the project with the topic TOPIC ID : the ID of the topic Specify the following fields in the request body: { "messages": [ { "attributes": { " KEY ": " VALUE ", ... }, "data": " MESSAGE DATA ", } ] } Replace the following: KEY : the key of a message attribute VALUE : the value for the key of the message attribute MESSAGE DATA : a base64-encoded string with the message data The message must contain either a non-empty data field or at least one attribute.
- PublisherClient ( publisher options = publisher options , client options = client options ) The topic path method creates a fully qualified identifier in the form projects/{project id}/topics/{topic id} topic path = publisher . topic path ( project id , topic id ) for message in [ ( "message1" , "key1" ), ( "message2" , "key2" ), ( "message3" , "key1" ), ( "message4" , "key2" ), ]: Data must be a bytestring data = message [ 0 ] . encode ( "utf-8" ) ordering key = message [ 1 ] When you publish a message, the client returns a future. future = publish er . publish ( topic path , data = data , ordering key = ordering key ) print ( future . result ()) print ( f "Published messages with ordering keys to { topic path } ." ) Ruby The following sample uses Ruby Pub/Sub client library v3.
- WaitGroup var totalErrors uint64 // client.Publisher can be passed a topic ID (e.g. "my-topic") or // a fully qualified name (e.g. "projects/my-project/topics/my-topic"). // If a topic ID is provided, the project ID from the client is used. // Reuse this publisher for all publish calls to send messages in batches. publisher := client .


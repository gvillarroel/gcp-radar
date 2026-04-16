---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.328Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub topic byte cost metric"
feature_slug: "pub-sub-topic-byte-cost-metric"
latest_feature_date: "2015-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/monitoring"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/publisher"
keywords:
  - "pub"
  - "sub"
  - "topic"
  - "byte"
  - "cost"
  - "metric"
  - "exposes"
  - "quota"
---

# Pub/Sub topic byte cost metric

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub exposes a quota metric for topic byte cost.

## Extended Definition

Pub/Sub exposes a quota metric for topic byte cost.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)

## Supporting Pages

### Monitor Pub/Sub in Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following PromQL query creates a chart with the fraction of publisher quota being used in each region: sum by (quota metric, location) ( rate({ " name "="serviceruntime.googleapis.com/quota/rate/net usage", "monitored resource"="consumer quota", "service"="pubsub.googleapis.com", "quota metric"="pubsub.googleapis.com/regionalpublisher" }[${ interval}]) ) / (max by (quota metric, location) ( max over time({ " name "="serviceruntime.googleapis.com/quota/limit", "monitored resource"="consumer quota", "service"="pubsub.googleapis.com", "quota metric"="pubsub.googleapis.com/regionalpublisher" }[${ interval}]) ) / 60 ) If you anticipate your usage exceeding the default quota limits , create alerting policies for all the relevant quotas.
- For example, the following PromQL query triggers an alerting policy when any Pub/Sub quota exceeds 80% usage: sum by (quota metric, location) ( increase({ " name "="serviceruntime.googleapis.com/quota/rate/net usage", "monitored resource"="consumer quota", "service"="pubsub.googleapis.com" }[1m]) ) / max by (quota metric, location) ( max over time({ " name "="serviceruntime.googleapis.com/quota/limit", "monitored resource"="consumer quota", "service"="pubsub.googleapis.com" }[1m]) ) 0.8 For more customized monitoring and alerting on quota metrics, see Using quota metrics .
- You can also attach a subscription to the dead-letter topic and then monitor the forwarded undeliverable messages on this subscription using the following metrics: subscription/num unacked messages by region the number of forwarded messages that have accumulated in the subscription subscription/oldest unacked message age by region the age of the oldest forwarded message in the subscription Maintain a healthy publisher The primary goal of a publisher is to persist message data quickly.
- Replace the placeholder values for $PROJECT NAME and $SUBSCRIPTION NAME with your actual project and topic identifiers. sum( increase({ " name "="pubsub.googleapis.com/subscription/sent message count", "monitored resource"="pubsub subscription", "project id"="$PROJECT NAME", "subscription id"="$SUBSCRIPTION NAME" }[10m]) ) Monitor push subscriptions For push subscriptions, monitor these metrics: subscription/push request count Group the metric by response code and subscription id .

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.
- Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- The subscription name, message id, and publish time fields are put in their own fields while all other message properties other than data (for example, an ordering key, if present) are added as entries in the attributes map. useTopicSchema boolean Optional.
- Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.
- Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.

### Publish messages to topics \_|\_ Pub/Sub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/publisher](https://docs.cloud.google.com/pubsub/docs/publisher)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; publishWithErrorHandlerExample ( projectId , topicId ); } public static void publishWithErrorHandlerExample ( String projectId , String topicId ) throws IOException , InterruptedException { TopicName topicName = TopicName . of ( projectId , topicId ); Publisher publisher = null ; try { // Create a publisher instance with default settings bound to the topic publisher = Publisher . newBuilder ( topicName ). build (); List<String> messages = Arrays . asList ( "first message" , "second message" ); for ( final String message : messages ) { ByteString data = ByteString . copyFromUtf8 ( message ); PubsubMessage pubsubMessage = PubsubMessage . newBuilder (). setData ( data ). build (); // Once published, returns a server-assigned message id (unique within the topic) ApiFuture<String> future = publish er . publish ( pubsubMessage ); // Add an asynchronous callback to handle success / failure ApiFutures . addCallback ( future , new ApiFutureCallback<String> () { @Override public void onFailure ( Throwable throwable ) { if ( throwable instanceof ApiException ) { ApiException apiException = (( ApiException ) throwable ); // details on the API exception System . out . println ( apiException . getStatusCode (). getCode ()); System . out . println ( apiException . isRetryable ()); } System . out . println ( "Error publishing message : " + message ); } @Override public void onSuccess ( String messageId ) { // Once published, returns server-assigned message ids (unique within the topic) System . out . println ( "Published message ID: " + messageId ); } }, MoreExecutors . directExecutor ()); } } finally { if ( publisher != null ) { // When finished with the publisher, shutdown to free up resources. publisher . shutdown (); publisher . awaitTermination ( 1 , TimeUnit .
- String projectId = "your-project-id" ; String topicId = "your-topic-id" ; publishWithCustomAttributesExample ( projectId , topicId ); } public static void publishWithCustomAttributesExample ( String projectId , String topicId ) throws IOException , ExecutionException , InterruptedException { TopicName topicName = TopicName . of ( projectId , topicId ); Publisher publisher = null ; try { // Create a publisher instance with default settings bound to the topic publisher = Publisher . newBuilder ( topicName ). build (); String message = "first message" ; ByteString data = ByteString . copyFromUtf8 ( message ); PubsubMessage pubsubMessage = PubsubMessage . newBuilder () . setData ( data ) . putAllAttributes ( ImmutableMap . of ( "year" , "2020" , "author" , "unknown" )) . build (); // Once published, returns a server-assigned message id (unique within the topic) ApiFuture<String> messageIdFuture = publish er . publish ( pubsubMessage ); String messageId = messageIdFuture . get (); System . out . println ( "Published a message with custom attributes: " + messageId ); } finally { if ( publisher != null ) { // When finished with the publisher, shutdown to free up resources. publisher . shutdown (); publisher . awaitTermination ( 1 , TimeUnit .
- PublisherClient ( publisher options = publisher options , client options = client options ) The topic path method creates a fully qualified identifier in the form projects/{project id}/topics/{topic id} topic path = publisher . topic path ( project id , topic id ) for message in [ ( "message1" , "key1" ), ( "message2" , "key2" ), ( "message3" , "key1" ), ( "message4" , "key2" ), ]: Data must be a bytestring data = message [ 0 ] . encode ( "utf-8" ) ordering key = message [ 1 ] When you publish a message, the client returns a future. future = publish er . publish ( topic path , data = data , ordering key = ordering key ) print ( future . result ()) print ( f "Published messages with ordering keys to { topic path } ." ) Ruby The following sample uses Ruby Pub/Sub client library v3.
- PublisherClient () topic path = publisher . topic path ( project id , topic id ) for n in range ( 1 , 10 ): data str = f "Message number { n } " Data must be a bytestring data = data str . encode ( "utf-8" ) Add two attributes, origin and username, to the message future = publish er . publish ( topic path , data , origin = "python-sample" , username = "gcp" ) print ( future . result ()) print ( f "Published messages with custom attributes to { topic path } ." ) Ruby The following sample uses Ruby Pub/Sub client library v3.


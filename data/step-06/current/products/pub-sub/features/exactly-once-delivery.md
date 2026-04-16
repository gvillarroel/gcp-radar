---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.315Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Exactly-once delivery"
feature_slug: "exactly-once-delivery"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message"
  - "https://docs.cloud.google.com/pubsub/docs/reliability-intro"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
keywords:
  - "exactly"
  - "once"
  - "delivery"
  - "lets"
  - "subscribers"
  - "receive"
  - "successfully"
  - "published"
---

# Exactly-once delivery

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Exactly-once delivery lets subscribers receive successfully published messages exactly once.

## Extended Definition

Exactly-once delivery lets subscribers receive successfully published messages exactly once.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message)
- [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)

## Supporting Pages

### "Class Message (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message)
- Source ID: `site-python-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A raw message can be obtained from a pubsub v1.types.PubsubMessage instance through the latter's . pb attribute. ack id str The ack id received from Pub/Sub. delivery attempt int The delivery attempt counter received from Pub/Sub if a DeadLetterPolicy is set on the subscription, and zero otherwise. request queue queue.Queue A queue provided by the policy that can accept requests; the policy is responsible for handling those requests. exactly once delivery enabled func Callable[[], bool] A Callable that returns whether exactly-once delivery is currently-enabled.
- For more details, see https://cloud.google.com/pubsub/docs/exactly-once-delivery ." Returns Type Description futures.Future A Future instance that conforms to Python Standard library's concurrent.futures.Future interface (but not an instance of that class).
- For more details, see https://cloud.google.com/pubsub/docs/exactly-once-delivery ." Returns Type Description futures.Future A Future instance that conforms to Python Standard library's concurrent.futures.Future interface (but not an instance of that class).
- For more details, see: https://cloud.google.com/pubsub/docs/exactly-once-delivery ." ack with response ack with response () - > google . cloud . pubsub v1 . subscriber . futures .

### Pub/Sub: Introduction to reliability \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- However, given that Pub/Sub has at-least-once delivery semantics by default, your subscribers are already resilient to message redelivery.
- Both ordered delivery and exactly once delivery offer their guarantees within a region.
- Pub/Sub offers at-least-once delivery for all messages published.
- Using both autoscaling and flow control lets you ensure that your subscribers are resilient to other short-term spikes in message throughput and longer-term growth that requires more compute power.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Note that subscribers may still receive multiple copies of a message when enable exactly once delivery is true if the message was published multiple times by a publisher client.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.


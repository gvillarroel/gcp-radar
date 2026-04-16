---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.305Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Subscription message retention duration"
feature_slug: "subscription-message-retention-duration"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/monitoring"
  - "https://docs.cloud.google.com/pubsub/docs/reliability-intro"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
keywords:
  - "subscription"
  - "message"
  - "retention"
  - "duration"
  - "can"
  - "now"
  - "be"
  - "increased"
---

# Subscription message retention duration

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Subscription message retention duration can now be increased to 31 days.

## Extended Definition

Subscription message retention duration can now be increased to 31 days.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)

## Supporting Pages

### Monitor Pub/Sub in Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/monitoring](https://docs.cloud.google.com/pubsub/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The dashboard can show the following backlog metrics, aggregated by resource, for all your subscriptions: Unacknowledged messages ( subscription/num unacked messages by region ) to see the number of unacknowledged messages.
- The following PromQL query creates a chart with the fraction of messages that subscribers acknowledge on a subscription: rate({ " name "="pubsub.googleapis.com/subscription/push request count", "monitored resource"="pubsub subscription", "subscription id"="$SUBSCRIPTION", "response class"="ack" }[${ interval}]) / rate({ " name "="pubsub.googleapis.com/subscription/push request count", "monitored resource"="pubsub subscription", "subscription id"="$SUBSCRIPTION" }[${ interval}]) Monitor subscriptions with filters If you configure a filter on a subscription, Pub/Sub automatically acknowledges messages that don't match the filter .
- You can also attach a subscription to the dead-letter topic and then monitor the forwarded undeliverable messages on this subscription using the following metrics: subscription/num unacked messages by region the number of forwarded messages that have accumulated in the subscription subscription/oldest unacked message age by region the age of the oldest forwarded message in the subscription Maintain a healthy publisher The primary goal of a publisher is to persist message data quickly.
- The following PromQL query creates a chart to measure the delivery latency health score for a subscription. sum over time( { " name "="pubsub.googleapis.com/subscription/delivery latency health score", "monitored resource"="pubsub subscription", "subscription id"="$SUBSCRIPTION" }[${ interval}] ) Monitor acknowledgment deadline expiration In order to reduce message delivery latency, Pub/Sub allows subscriber clients a limited amount of time to acknowledge (ack) a given message.

### Pub/Sub: Introduction to reliability \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reliability-intro](https://docs.cloud.google.com/pubsub/docs/reliability-intro)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Subscribers in Europe and Australia are unavailable In the event all subscribers are unavailable, then Pub/Sub stores the messages up to the configured message retention duration .
- However, it may result in a backlog that continues to build up and leads to messages not being able to be delivered before the message retention duration passes.
- Once the subscribers reconnect, the messages are delivered unless the outage lasts longer than the configured message retention duration.
- Customer-controlled failover and redundancy The default failover semantics of Pub/Sub may not fully guarantee that messages can always flow from publishers to subscribers if there is an outage anywhere in between.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- This must be true if you would like to Seek to a timestamp in the past to replay previously-acknowledged messages. messageRetentionDuration string ( Duration format) Optional.
- This must be true if you would like to Seek to a timestamp in the past to replay previously-acknowledged messages. messageRetentionDuration string ( Duration format) Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Subscription JSON representation { "name" : string , "topic" : string , "pushConfig" : { object ( PushConfig ) } , "bigqueryConfig" : { object ( BigQueryConfig ) } , "cloudStorageConfig" : { object ( CloudStorageConfig ) } , "ackDeadlineSeconds" : integer , "retainAckedMessages" : boolean , "messageRetentionDuration" : string , "labels" : { string : string , ... } , "enableMessageOrdering" : boolean , "expirationPolicy" : { object ( ExpirationPolicy ) } , "filter" : string , "deadLetterPolicy" : { object ( DeadLetterPolicy ) } , "retryPolicy" : { object ( RetryPolicy ) } , "detached" : boolean , "enableExactlyOnceDelivery" : boolean , "topicMessageRetentionDuration" : string , "state" : enum ( State ) , "analyticsHubSubscriptionInfo" : { object ( AnalyticsHubSubscriptionInfo ) } , "messageTransforms" : [ { object ( MessageTransform ) } ] , "tags" : { string : string , ... } } Fields name string Required.
- This must be true if you would like to Seek to a timestamp in the past to replay previously-acknowledged messages. messageRetentionDuration string ( Duration format) Optional.
- If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the message retention duration window.
- If retain acked messages is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a Seek can be done.

